import React, {useState, useEffect} from 'react'
import { createBrowserHistory } from "history";

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Layout from '../components/Layout.js'
import XSPFilters from '../components/XSPFilters.js';
import LauchList from '../components/LaunchList/LaunchList';
import { getParam, setParam } from '../helper/urlManipulation.js';

function HomePage({posts}) {
  let initialState = [{
        type: "launch_year",
        displayName: "Launch Year",
        data: new Array((new Date().getFullYear() - 2005)).fill().map((a, i) => 2006 + i),
    },
    {
        type: "launch_success",
        displayName: "Successful Launch",
        data: ["true", "false"],
    },
    {
        type: "land_success",
        displayName: "Successful Landing",
        data: ["true", "false"],
    }]

    const [filterState, setFilterState] = useState(initialState);
    const [spaceXData, setSpaceXData] = useState([]);
    const [urlQuery, setUrlQuery] = useState();
    const [initialUrl, setInitialUrl] = useState()

    useEffect(() => {
      setSpaceXData(posts);
    }, [0])

    let launchList = <div></div>;

    launchList = <LauchList launchData={spaceXData} />

    const onFilterApply = (category, value) => {
      const initialQueryString = require('query-string');
      const currentQueries = getParam(initialQueryString);

      const currentCategory = {}

      if (currentCategory.activeItem && currentCategory.activeItem === value) {
          currentQueries[category] = null;
          currentCategory.activeItem = null;
      }
      else {
          currentCategory.activeItem = value;
          currentQueries[category] = value;
      }
      const queryString = setParam(currentQueries);

      const history = createBrowserHistory();

      history.push("?" + queryString);

      setUrlQuery(queryString)
    }

    useEffect(() => {
      fetch(`https://api.spaceXdata.com/v3/launches?limit=100&${urlQuery}`).then(response => response.json()).then(data => setSpaceXData(data));
    }, [urlQuery])

    useEffect(() => {
      setInitialUrl(window.location.href)
    }, [0])

  return <>
  <Header />
    <Layout>
      <XSPFilters filterData={filterState} onFilterApply={onFilterApply} />
      {launchList}
    </Layout>
  <Footer />
  </>
}

export async function getStaticProps() {
  const res = await fetch('https://api.spaceXdata.com/v3/launches?limit=100')
  const posts = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default HomePage