import React from 'react';
import ReactDOM from 'react-dom';

import { EquipmentList } from "./components/EquipmentList";

const root = document.getElementById('equipment-root');

if (root) {
  ReactDOM.render(<EquipmentList/>, root);
}
