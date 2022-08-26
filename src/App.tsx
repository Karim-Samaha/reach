import React, { useState } from "react";
import "./scss/homepage.scss";
import Navbar from "./components/navbar/navbar";
import Loading from "./components/loading/loading";
import Videos from "./components/videos/videos";
import youtubeApi from "./apis/youtube";
interface apiData {
  etag: String;
  id: {};
  kind: String;
  snippet: {};
}
const App: React.FC = () => {
  const [data, setData] = useState<apiData[]>([]);
  const [loading, setLoading] = useState<any>(null);
  const onSubmit = async (value: string, e: any) => {
    setLoading(true);
    e.preventDefault();
    const response = await youtubeApi.get("/search", {
      params: {
        q: value,
      },
    });
    setData(response.data.items);
    setLoading(false);
  };

  return (
    <>
      <Navbar onSubmit={onSubmit} />
      {loading ? <Loading /> : <Videos data={data} />}
    </>
  );
};

export default App;
