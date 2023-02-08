import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panal/search-panel";
import "./app.css";
import AppFilter from "../app-filter/app-filter";
import EmployeesListItem from "../employees-list-item/employees-list-item";
function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeesListItem />
      </div>
    </div>
  );
}

export default App;
