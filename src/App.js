import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Heading from "./components/Heading";
import Tooltip from "./components/Tooltip";
import Accordion from "./components/Accordion";
import './App.css';


function App() {
  return (
    <div>
      <div className="container">
        <Heading level={1}>UI Components</Heading>
        <Heading level={2}>UI Components</Heading>
        <Heading level={3}>UI Components</Heading>
        <Heading level={4}>UI Components</Heading>
        <Heading level={5}>UI Components</Heading>
        <Heading level={6}>UI Components</Heading>

        <Button size="sm" variant="primary">Primary Button</Button>
        <Button size="md" variant="primary">Primary Button</Button>
        <Button size="lg" variant="primary">Primary Button</Button>
        <Button size="sm" variant="bordered">Bordered Button</Button>
        <Button size="md" variant="bordered">Bordered Button</Button>
        <Button size="lg" variant="bordered">Bordered Button</Button>

        <Input label="Name" placeholder="Enter your name" />
        <Input label="Email" placeholder="Enter your password" danger/>
        <Input label="Age" placeholder="Enter your age" disabled/>
        <Input label="Number" placeholder="Enter your number" type="number" />

        <Typography textSize="sm">Large Typography</Typography>
        <Typography textSize="md">Large Typography</Typography>
        <Typography >Large Typography</Typography>
        <Typography textSize="lg">Large Typography</Typography>

        <Tooltip text="This is a tooltip" position="top">
          <Button>Hover me</Button>
        </Tooltip>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Tooltip text="This is a tooltip" position="bottom">
          <Button>Hover me</Button>
          <Button>Hover me</Button>
          <Button>Hover me</Button>
          <Button>Hover me</Button>
          <Button>Hover me</Button>
          <Button>Hover me</Button>
          <Button>Hover me</Button>
        </Tooltip>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Tooltip text="This is a tooltip" position="left">
          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>          <Button>Hover me</Button>
          <br/>
        </Tooltip>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Tooltip text="This is a tooltip" position="right">
          <Button>Hover me</Button>
        </Tooltip>


        <Accordion title="Accordion Example" defaultOpen={false}>
          <p>Accordion content goes here</p>
        </Accordion>
        <Accordion title="Accordion Example" defaultOpen>
          <p>Accordion content goes here</p>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
