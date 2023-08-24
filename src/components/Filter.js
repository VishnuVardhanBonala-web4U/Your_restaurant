import React from "react";
import { connect } from "react-redux";
import { SETFILTER, resetfilter } from "../Actions";

const Filter = ({ filter_name, SETFILTER, resetfilter }) => {
  const products = ["All Items", "Rice Items", "Pizza", "Cold Drinks", "Hot Drinks"];
  const [itemfilter, setitemfilter] = React.useState();
  const [filter, setFilter] = React.useState("ALL Items");

  return (
    <>
      <center className="mt-4">
        <span className="h4 m-2">Filter</span>
        <select name="filter" onChange={(e) => { SETFILTER(e.target.value) }}>
          {products.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      </center>
    </>
  );
};

const mapStateToProps = state => ({
  filter_name: state.Filterreducer.filter_name
});

export default connect(mapStateToProps, { SETFILTER, resetfilter })(Filter);
