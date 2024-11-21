import PasswordInput from './components/PasswordInput.jsx';
import GenericTable from './components/GenericTable.jsx';

const coloums = [
  { key: "name", label: "name"},
  { key: "age", label: "age"},
  { key: "email", label: "email"},
]

const data = [
  { name: "name_1", age: "21", email: "name@example.com"},
  { name: "name_2", age: "21", email: "name@example.com"},
  { name: "name_3", age: "21", email: "name@example.com"},
]

function App() {
  return (
    <>
      <h1>Password Input</h1>
      <PasswordInput />
      <h1>Generic table</h1>
      <GenericTable coloums={coloums} data={data} />
    </>
  );
}

export default App;
