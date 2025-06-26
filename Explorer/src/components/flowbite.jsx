
import { Dropdown, DropdownItem } from "flowbite-react";

export function Component() {
  return (
    <>
    <h2>Using FlowBite</h2>
    <Dropdown label="Dropdown button" dismissOnClick={false}>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    </>
 
  );
}