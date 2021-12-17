import axios from "axios"

const _username = "joe@seolo.ca"
const _pwd = '5db35c988381d516'
export const seoTest = () => {
  return new Promise((res, rej) => {
    axios({
      method: 'get',
      url: 'https://api.dataforseo.com/v3/keywords_data/google/languages',
      auth: {
        username: _username,
        password: _pwd
      },
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'][0]['result'];
      // Result data
      res(result)
    }).catch(function (error) {
      rej(error)
    });
  })
}


export const getTrafficInfo = (targetUrl: string) => {
  return new Promise((res, rej) => {
    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/traffic_analytics/similarweb/live',
      auth: {
        username: _username,
        password: _pwd
      },
      data: [{ target: targetUrl }],
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'][0]['result'];
      res(result)
      // Result data
    }).catch(function (error) {
      rej(error)
    });
  })
}

export const backLinksCount = (targetUrl: string) => {
  return new Promise((res, rej) => {
    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/backlinks/summary/live',
      auth: {
        username: _username,
        password: _pwd
      },
      data: [{
        "target": targetUrl,
        "internal_list_limit": 10,
        "include_subdomains": true,
        "backlinks_filters": ["dofollow", "=", true],
        "backlinks_status_type": "all"
      }],
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'][0]['result'];
      // Result da
      res(result)
    }).catch(function (error) {
      rej(error)
    });
  })
}

export const getDomainSeoKeyword = (targetUrl: string, location?: string) => {
  return new Promise((res, rej) => {
    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/keywords_data/google/keywords_for_site/live',
      auth: {
        username: _username,
        password: _pwd
      },
      data: [{
        "location_name": location,
        "language_name": "English",
        "target": targetUrl
      }],
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'][0]['result'];
      // Result data
      res(result)
    }).catch(function (error) {
      rej(error)
    });
  })
}
export const getKeywordSuggestions = (keyword: string, location: string) => {
  return new Promise((res, rej) => {
    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/dataforseo_labs/keyword_suggestions/live',
      auth: {
        username: _username,
        password: _pwd
      },
      data: [{
        keyword,
        location_name: location
      }],
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'][0]['result'][0]['items'];
      res(result)
    }).catch(function (error) {
      rej(error)
    });


  })
}

export const getKeywordIdeas = (keyword: string, location: string) => {
  return new Promise((res, rej) => {
   
    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/dataforseo_labs/keyword_ideas/live',
      auth: {
        username: _username,
        password: _pwd
      },
      data: [{
        "keywords": [keyword],
        "location_name": location,
        "limit": 100,
        // "filters": [
        //   ["keyword_data.impressions_info.ad_position_average", ">", 1],
        //   "and",
        //   [
        //     ["keyword_data.impressions_info.cpc_max", "<", 0.5],
        //     "or",
        //     ["keyword_data.impressions_info.daily_clicks_max", ">=", 10]
        //   ]
        // ]
      }],
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'][0]["result"][0]["items"];
      // Result data
      res(result)
    }).catch(function (error) {
      rej(error)
    });
  })
}


export const searchVolume = (keyword: string, location: string) => {
  return new Promise((res, rej) => {
    axios({
      method: 'post',
      url: 'https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live',
      auth: {
        username: _username,
        password: _pwd
      },
      data: [{
        "language_code": "en",
        "location_name": location,
        "keywords": [keyword],
        "date_from": "2021-08-01",
        "search_partners": true 
      }],
      headers: {
        'content-type': 'application/json'
      }
    }).then(function (response) {
      var result = response['data']['tasks'][0]['result'][0];
      // Result data
      res(result)
    }).catch(function (error) {
      rej(error)
    });
  })
}