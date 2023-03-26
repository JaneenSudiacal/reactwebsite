import React from 'react';
import Tile from './Tile';

function Tiles() {
  return (
    <div className="tile-section">
      <div className="tile-title">Ninni&apos;s Favorite Recipes</div>
      <div className="tiles">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
}

export default Tiles;
