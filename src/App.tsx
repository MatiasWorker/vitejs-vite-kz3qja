import { useState } from 'react';
import { Card } from './components/Card/Card';
import { Input } from './components/Input/Input';
import { Item } from './components/Item/Item';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Card>
        <h3>Todo</h3>
        <Input />
        <Item onChange={() => {}} onRemove={() => {}} checked>
          Task...
        </Item>
      </Card>
    </div>
  );
}
