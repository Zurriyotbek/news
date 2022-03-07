import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Card from "../Card/Card";

const Home = () => {
  const Api_Key = "f5cb65722e6a486f809ba6a8075ae0f2";
  // const newsType = "techcrunch";

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${Api_Key}`
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err.message));
  }, []);

  console.log(news);
  return (
    <div className="home">
      <h1 className="home-header">HOME PAGE</h1>

      <Grid
        container
        rowspacing={1}
        columnspacing={{ xs: 1, sm: 2, md: 3 }}
        justifyContent="center"
      >
        {news?.map((item) => {
          return (
            <>
              <Grid
                item
                className="card"
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                style={{
                  margin: "15px",
                  backgroundColor: "gray",
                  border: "3px solid black",
                  maxWidth: "345px",
                }}
                spacing={3}
                key={new Date().getTime()}
              >
                <Card item={item} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
