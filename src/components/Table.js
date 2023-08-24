import React from "react";
import { connect } from "react-redux";
import { SETTABLENUMBER } from "../Actions";

const Table = ({ table_number, SETTABLENUMBER }) => {
  const tablescount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const tableBtn = "btn btn-outline-primary m-1";
  const activetableBtn = "btn btn-outline-primary m-1 text-dark mx-2 active";

  console.log(table_number);

  return (
    <>
      <center className="mt-2">
        <h5 className="w-50 bg-light">
          Dear Customer, please select your table
        </h5>
        {tablescount.map((table, index) => {
          return (
            <div key={index} className="d-inline">
              <div className="d-inline">
                <button
                  className={table_number === table ? activetableBtn : tableBtn}
                  onClick={() => {
                    SETTABLENUMBER(table);
                  }}
                >
                  {table}
                </button>
              </div>
            </div>
          );
        })}
      </center>
    </>
  );
};

const mapStateToProps = (state) => ({
  table_number: state.tablereducer.table_number,
});

export default connect(mapStateToProps, { SETTABLENUMBER })(Table);
