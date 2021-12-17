//@ts-nocheck
import { useState } from "react";
import InfoCards from "./components/InfoCards";
import PrimaryBtn from "./components/PrimaryBtn";
import { useNavigate } from "react-router-dom";
import {
  backLinksCount,
  getDomainSeoKeyword,
  getKeywordIdeas,
  getKeywords,
  getKeywordSuggestions,
  getTestUrl,
  getTrafficInfo,
  searchVolume,
  seoTest,
} from "./api";
import { useAPICall } from "./hooks";
import { KeywordSubPage } from "./pages/Keyword";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function App() {
  const keywordQueryInfo = useAPICall(
    [getKeywordSuggestions, getKeywordIdeas, searchVolume],
    false
  );
  const urlQueryInfo = useAPICall(
    [backLinksCount, getDomainSeoKeyword, getTrafficInfo],
    false
  );
  
  //const testUrlApi = useAPICall([seoTest, seoTest, seoTest], false)
  const [searchQuery, setSearchQuery] = useState("");
  const [keyword, setKeywordMode] = useState(false);
  const [start, setStart] = useState(false);

  const navigate = useNavigate()
  console.log(keywordQueryInfo)
  // if(keywordQueryInfo.data){
    
  // }
  return (
    <main className="w-full flex flex-col min-h-screen px-2 py-12 md:px-12 md:py-12 justify-center items-center">
      <h1 className="text-2xl md:text-7xl font-extrabold">
        <span className="text-[#E96033]">Seolo</span>{" "}
        <span className="text-purple-800">Suggest</span>
      </h1>
      <h6 className="mt-8 md:w-2/3 font-normal text-lg md:text-xl text-center">
        Want more traffic? Seolo Suggest shows you how to win the game of SEO.
        Just type in a domain or a keyword to get started
      </h6>

      <div className="w-full mt-4 md:w-3/5 border-2 flex flex-col md:flex-row border-[#E96033] p-1 rounded-lg">
        <div className="w-full px-2">
          <input
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder="Type Keyword or Domain"
            className="w-full outline-none h-14 md:h-full text-xl text-[#E96033] caret-purple-700"
          ></input>
        </div>
        <div className="w-full md:w-auto">
          <PrimaryBtn
            onClick={(e) => {
              if(searchQuery.length > 0){
                if (searchQuery.includes(".")) {
                  setStart(true);
                  setKeywordMode(false)
                  urlQueryInfo.fetchMultiple(searchQuery);
                } else {
                  setStart(true);
                  setKeywordMode(true)
                  keywordQueryInfo.fetchMultiple(searchQuery, "Canada")
                }
              }
            }}
            fullWidth
            rounded
          >
            Search
          </PrimaryBtn>
        </div>
      </div>
      {start && !keyword ? (
        <div className="w-full flex justify-center">
          <section className="w-1/2 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCards
              loading={urlQueryInfo.loading}
              value={(function () {
                if (!urlQueryInfo.data) return 0;
                let rslt = urlQueryInfo?.data[1];
                if (rslt && rslt.length > 0) {
                  return numberWithCommas(rslt.length);
                }
              })()}
              desc="Organic Keyword"
            />
            <InfoCards
              loading={urlQueryInfo.loading}
              value={(function () {
                if (!urlQueryInfo.data) return 0;
                let rslt = urlQueryInfo?.data[2];
                if (rslt && rslt.length > 0) {
                  return numberWithCommas(rslt[0].traffic.value);
                }
              })()}
              desc="Organic Traffic"
            />
            <InfoCards
              loading={urlQueryInfo.loading}
              value={(function () {
                if (!urlQueryInfo.data) return 0;
                let result = urlQueryInfo?.data[0];
                if (result && result.length > 0) {
                  return result[0].backlinks;
                }
                return 0;
              })()}
              desc="Backlinks"
            />
          </section>
        </div>
      ) : null}

      {start && keyword ? (
        <div className="w-full flex justify-center">
          <section className="w-1/2 mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoCards
              loading={keywordQueryInfo.loading}
              value={(function () {
                if (!keywordQueryInfo.data) return 0;
                let rslt = keywordQueryInfo?.data[0];
                console.log(rslt)
                if (rslt && rslt.length > 0) {
                  console.log(rslt.length)
                  return numberWithCommas(rslt.length);
                }
              })()}
              desc="Keyword Suggestions"
            />
            <InfoCards
              loading={keywordQueryInfo.loading}
              value={(function () {
                if (!keywordQueryInfo.data) return 0;
                let rslt = keywordQueryInfo?.data[1];
                if (rslt && rslt.length > 0) {
                  return numberWithCommas(rslt.length);
                }
              })()}
              desc="Keyword Ideas"
            />
            <InfoCards
              loading={keywordQueryInfo.loading}
              value={(function () {
                if (!keywordQueryInfo.data) return 0;
                let result = keywordQueryInfo?.data[2];
                if (result) {
                  return numberWithCommas(result.search_volume)
                }
              })()}
              desc="Search Volume"
            />
          </section>
        </div>
      ) : null}

      <div className="flex mt-4 justify-center">
        <PrimaryBtn onClick={e => {
          navigate("/dashboard")
        }} rounded>Show Geeky Stats</PrimaryBtn>
      </div>
    </main>
  );
}

export default App;
