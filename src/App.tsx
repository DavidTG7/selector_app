import { Select } from "./Select"

const options = [
  { label: 'First', value: 1 },
  { label: 'Secont', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
]

export const App = () => {

  return(
    <Select options={options} />
  );
};