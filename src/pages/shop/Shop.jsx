import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/CollectionsOverview";
import CollectionPage from "../collection";
import styles from "./shop.module.scss";

const Shop = ({ match }) => {
  return (
    <div className={styles["shop-page"]}>
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default Shop;
