import "./DetailTable.css";
export type TableData = {
  field: string;
  value: string;
};

type Props = { content: TableData[] | null };

const Detailtable = ({ content }: Props) => {
  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead className="table-head">
            <tr>
              <th className="table-head-content" scope="col">
                Field
              </th>
              <th className="table-head-content" scope="col">
                Value
              </th>
            </tr>
          </thead>
          {content != null ? (
            <tbody className="table-body">
              {content.map((item, index) => (
                <tr key={index}>
                  <th className="table-head-content" scope="row">
                    {item.field}
                  </th>
                  <td className="table-data-content">{item.value}</td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </div>
    </>
  );
};

export default Detailtable;
