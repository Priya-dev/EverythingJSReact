import * as React from 'react';
import LinkPreviewer from './LinkPreviewer';
import './style.css';

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Link Previewer </h1>
        <span>Algochurn</span>
        <LinkPreviewer url="https://images.pexels.com/photos/7875228/pexels-photo-7875228.jpeg?auto=compress&cs=tinysrgb&w=125&h=75&dpr=2">
          <div>Hover on me</div>
        </LinkPreviewer>
      </div>
    </div>
  );
}
