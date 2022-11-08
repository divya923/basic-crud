import React from "react";

const Table = (props) => {

  return (
    <div>
      <h3 className="text-center mt-3">VIEW TABLE</h3>
      <div className="card p-2">
        <table class="table  table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.data.length > 0 ? (
              props.data.map((val) => (
                <tr key={val.id}>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-warning"
                      onClick={() => props.editrow(val)}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-danger ms-2"
                      onClick={() => props.delete(val.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No Users</td>
              </tr>
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Table;
