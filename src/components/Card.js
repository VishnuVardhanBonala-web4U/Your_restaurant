import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addorder, resetfilter, resettablenumber } from '../Actions';

const Card = ({ filter_name, addorder, table_number }) => {
  const url = "https://food-itema-default-rtdb.firebaseio.com/telugu-skillhub-api/-MsE8GfWtRjc8x_t8pCC.json";
  const [data, setData] = useState([]);
  const [clonedata, setClonedata] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(result => {
        setData(result.items);
        setClonedata(result.items);
      })
      .catch(err => console.log(err));
  }, []);

  React.useEffect(() => {
    if (filter_name !== "ALL Items") {
      let specific = clonedata.filter(item => item.category === filter_name);
      setData(specific);
    } else {
      setData(clonedata);
    }
  }, [filter_name]);

  const Handler = async (id, name, prize, table_number, url) => {
    if (table_number != null) {
      await addorder(id, name, prize, table_number, url);
      await resettablenumber();
      await resetfilter();
      alert("Order Placed Successfully");
    } else {
      alert("Dear customer, please select the table first.");
    }
  };

  return (
    <>
      <div>
        <center>
          {
            data.length > 0
              ? <div className='container'>
                <div className='row'>
                  {data.map((item) => (
                                          <div className='col-md-4' style={{ padding: "5px" }} key={item.id}>
                                          <div className='card m-3' style={{ width: "18rem", padding: "3px" }}>
                                            <img src={item.url} className='card-img-top' alt={item.name} />
                                            <div className='card-body'>
                                              <h5 className='card-title'>{item.name}</h5>
                                              <div className='card-text'>{item.prize}</div>
                                              <button className='btn btn-primary' onClick={() => Handler(item.id, item.name, item.prize, item.url)}>
                                                Order
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  : <div className='spinner-border text-primary'></div>
                            }
                          </center>
                        </div>
                      </>
                    );
                  };
                  
                  const mapStateToProps = state => ({
                    filter_name: state.Filterreducer.filter_name,
                    table_number: state.tablereducer.table_number
                  });
                  
                  export default connect(mapStateToProps, { addorder })(Card);
                  
