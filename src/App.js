
import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [index, setIndex] = useState([]);
  const handleAdd = () => {
    setList([...list, title]);
    setTitle("")
  };
  const handleCheck = (i) => {
    setIndex([...index, i]);
  };

  const handleDelete = (index) => {
    list.splice(index, 1)
    setList([...list]);
  };
  const handleDeleteAll = () => {
    const indexSet = new Set(index);
    const arrayWithValuesRemoved = list.filter((value, i) => !indexSet.has(i));
    setList([...arrayWithValuesRemoved])
    setIndex([])
  }
  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",

        paddingTop: "100px"

      }}
      className="App"
    >
      <div style={{ alignItem: "center" }}>
        <h2>Todo List</h2>
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          className="form-control"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="button" class="btn btn-primary" style={{ margin: "10px" }} onClick={handleAdd}>
          Add
        </button>
      </div>
      <>
        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", margin: "10px" }}>
          {
            index.length > 1 && <button type="button" class="btn btn-primary" onClick={handleDeleteAll} disabled={index.length > 0 ? false : true}>
              DeleteAll
            </button>
          }

        </div>
        {
          list.length > 0 &&

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((ele, i) => {
                return (
                  <tr>
                    <td>
                      {" "}
                      {
                        <input
                          type="checkbox"
                          name="brand"
                          value={i}
                          onChange={(e) => handleCheck(i)}
                        />
                      }
                    </td>
                    <td>{ele}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(i);
                        }}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </>
    </div>
  );
}

export default App;