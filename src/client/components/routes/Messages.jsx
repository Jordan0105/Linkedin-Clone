const Messages = () => {
  return (
    <div>
      <h1>Inbox</h1>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Message</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carlos</td>
            <td>
              <button type="button" class="btn btn-primary">
                Messages <span class="badge bg-secondary">4</span>
              </button>
            </td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>
              {" "}
              <button type="button" class="btn btn-primary">
                Messages <span class="badge bg-secondary">1</span>
              </button>
            </td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colspan="2">James</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Messages;
