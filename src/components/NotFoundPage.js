import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    This is a 404! <Link to="/" >Go home</Link>
  </div>
);

export default NotFoundPage;