import React from 'react';
import { connect } from 'react-redux';

const Orders = ({ list }) => {
  return (
    <>
      <center>
        {list.length > 0 ? (
          <div className='container'>
            <div className='row'>
              {list.map((item) => (
                <div className='col-md-4' style={{ padding: '5px' }} key={item.id}>
                  <div className='card m-3' style={{ width: '18rem', padding: '3px' }}>
                    <img src={item.url} className='card-img-top' alt={item.name} />
                    <div className='card-body'>
                      <h5 className='card-title'>{item.name}</h5>
                      <div className='card-text'>Bill: {item.prize}</div>
                      <p>Table Number: {item.table_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className=''>
            <h4>No orders placed yet</h4>
          </div>
        )}
      </center>
    </>
  );
};

const mapStateToProps = (state) => ({
  list: state.orderreducer,
});

export default connect(mapStateToProps)(Orders);
