import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    // case 'FETCH_SUCCESS':
    //   return { ...state, revenues: action.payload, expenses: action.payload, loading: false };
    case 'FETCH_REVENUE':
      return { ...state, revenues: action.payload, loading: false };
    case 'FETCH_EXPENSE':
      return { ...state, expenses: action.payload, loading: false };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const Finance = () => {
  const [{ loading, error, revenues, expenses }, dispatch] = useReducer(
    reducer,
    {
      revenues: [],
      expenses: [],
      loading: true,
      error: '',
    }
  );

  let totalRevenue = 0;
  let totalExpenses = 0;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const resultRevenue = await axios.get('/api/revenue');
        const resultExpense = await axios.get('/api/expenses');
        dispatch({ type: 'FETCH_REVENUE', payload: resultRevenue.data });
        dispatch({ type: 'FETCH_EXPENSE', payload: resultExpense.data });
      } catch (err) {
        dispatch({ type: 'FETCH_ERROR', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Finance</h1>
      <h1>Revenue</h1>
      <div>
        {loading ? (
          <div>Loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          revenues.map((r) => (
            <div key={r.siteId}>
              <h2>{r.siteId}</h2>
              <h3>{r.siteName}</h3>
              <h5>{r.amount}</h5>
            </div>
          ))
        )}
      </div>
      <h1>Expenses</h1>
      <div>
        {loading ? (
          <div>Loading....</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          expenses.map((r) => (
            (<div key={r.siteId}>
              <h2>{r.siteId}</h2>
              <h3>{r.siteName}</h3>
              <h5>{r.amount}</h5>
            </div>)
          ))
        )}
      </div>
    </div>
  );
};

export default Finance;
