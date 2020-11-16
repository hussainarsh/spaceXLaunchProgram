import React, {useState, useEffect} from 'react'

import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Layout from '../components/Layout.js'
import XSPFilters from '../components/XSPFilters.js';
import LaunchList from '../components/LaunchList/LaunchList';

function HomePage({data, query}) {
  let initialState = [{
        type: "launch_year",
        displayName: "Launch Year",
        data: new Array((new Date().getFullYear() - 2005)).fill().map((a, i) => 2006 + i),
        activeItem: query['launch_year'] && parseInt(query['launch_year'])
    },
    {
        type: "launch_success",
        displayName: "Successful Launch",
        data: ["true", "false"],
        activeItem: query['launch_success']
    },
    {
        type: "land_success",
        displayName: "Successful Landing",
        data: ["true", "false"],
        activeItem: query['land_success']
    }]

    const [filterState, setFilterState] = useState(initialState);
    const [spaceXData, setSpaceXData] = useState([]);

    useEffect(() => {
      setSpaceXData(data);
    }, [0])

    let launchList = <div></div>;

    launchList = <LaunchList launchData={spaceXData} />

    function updateQueryStringParameter(uri, key, value) {
      var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
      var separator = uri.indexOf('?') !== -1 ? "&" : "?";
      if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
      }
      else {
        return uri + separator + key + "=" + value;
      }
    }

    function showSpinner() {
      const spinner = document.getElementById("spinner");
      spinner.className = "show";
      setTimeout(() => {
        spinner.className = spinner.className.replace("show", "");
      }, 5000);
    }

    function hideSpinner() {
      const spinner = document.getElementById("spinner");
      spinner.className = spinner.className.replace("show", "");
    }

    const onFilterApply = (category, value) => {

      showSpinner()
      const currentCategory = filterState.find(curCat => curCat.type === category);
      currentCategory.activeItem = value;

      let queryString = updateQueryStringParameter(location.search, category, value);
      window.history.pushState("", "", queryString);
      fetch(`https://api.spaceXdata.com/v3/launches${queryString}&limit=100`).then(response => response.json()).then(
        (data) => {
          setSpaceXData(data)

          let result = filterState.map(item => {
            if (item.type === currentCategory.type) {
              return {...item, ...currentCategory};
            }
            return item;
          });
          
          setFilterState(result);
          hideSpinner()
        }
      );
    }

  return <>
  <Header />
    <Layout>
      <XSPFilters filterData={filterState} onFilterApply={onFilterApply} />
      <div id="spinner"></div>
      {launchList}
    </Layout>
  <Footer />
  </>
}

export async function getServerSideProps({query}) {
  const queryString = require('query-string');
  const res = await fetch(`https://api.spaceXdata.com/v3/launches?${queryString.stringify(query)}&limit=100`)
  const data = await res.json()
  return {
    props: {
      data,
      query
    },
  }
}

export default HomePage
