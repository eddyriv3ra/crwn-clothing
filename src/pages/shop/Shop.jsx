import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../components/CollectionsOverview";
import CollectionPageContainer from "../collection";
import styles from "./shop.module.scss";

const Shop = ({ match, fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className={styles["shop-page"]}>
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:categoryId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default Shop;
