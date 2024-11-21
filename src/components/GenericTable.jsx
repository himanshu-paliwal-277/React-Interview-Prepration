function GenericTable({ coloums, data }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            {coloums.map((col) => {
              return <th key={col.key}>{col.label}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                {coloums.map((col) => {
                  return <td key={col.key}>{row[col.key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default GenericTable;
