import React, { useState } from 'react';

const Filter = () => {
  const [category, setCategory] = useState('Games, Toys & Goods');
  const [subCategory, setSubCategory] = useState('Video Game');
  const [status, setStatus] = useState('All');

  const handleApplyFilters = () => {
    console.log({
      category,
      subCategory,
      status,
    });
  };

  const handleClearFilters = () => {
    setCategory('Games, Toys & Goods');
    setSubCategory('Video Game');
    setStatus('All');
  };

  // Inline styles for different sections of the filter component
  const containerStyle = {
    width: '250px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    position: 'fixed',
    left: 0,
    top: 0,
    height: '100%',
    overflowY: 'auto',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  const headerStyle = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const labelStyle = {
    marginBottom: '10px',
    fontSize: '16px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    padding: '8px',
    backgroundColor: '#f1f1f1',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const actionButtonStyle = {
    padding: '8px 16px',
    backgroundColor: '#5c93c6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const clearButtonStyle = {
    padding: '8px',
    backgroundColor: '#f1f1f1',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const actionsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  return (
    <div style={containerStyle}>
      <h3 style={headerStyle}>Filters</h3>

      <div style={sectionStyle}>
        <h4 style={labelStyle}>Keyword</h4>
        <input type="text" placeholder="Search by keyword" style={inputStyle} />
      </div>

      <div style={sectionStyle}>
        <h4 style={labelStyle}>Category</h4>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={inputStyle}
        >
          <option value="Games, Toys & Goods">Games, Toys & Goods</option>
          {/* More categories */}
        </select>
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          style={inputStyle}
        >
          <option value="Video Game">Video Game</option>
          {/* More subcategories */}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={inputStyle}
        >
          <option value="All">All</option>
          {/* More statuses */}
        </select>
      </div>

      {/* Additional sections for Brands, Sizes, Price, etc. */}
      <div style={sectionStyle}>
        <h4 style={labelStyle}>Brands</h4>
        <button style={buttonStyle}>+</button>
      </div>

      <div style={sectionStyle}>
        <h4 style={labelStyle}>Sizes</h4>
        <button style={buttonStyle}>+</button>
      </div>

      {/* Actions for Apply and Clear */}
      <div style={actionsStyle}>
        <button onClick={handleClearFilters} style={clearButtonStyle}>
          Clear All
        </button>
        <button onClick={handleApplyFilters} style={actionButtonStyle}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Filter;
