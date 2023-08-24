import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ count }) => {
  console.log(count);

  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <a className='navbar-brand'>Restaurant</a>
        <button className='btn btn-primary'>
          <Link style={{ color: 'white', textDecoration: 'none' }} to='/orders'>
            Orders
            <span className='badge bg-secondary'>{count}</span>
          </Link>
        </button>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.orderreducer.length,
});

export default connect(mapStateToProps)(Header);
