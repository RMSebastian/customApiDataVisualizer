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
              <th className="table-head-content" scope="col" style={{
                borderTopLeftRadius: `0.5rem`
              }}>
                Field
              </th>
              <th className="table-head-content" scope="col" style={{
                borderTopRightRadius: `0.5rem`
              }}>
                Value
              </th>
            </tr>
          </thead>
          {content != null ? (
            <tbody className="table-body">
              {content.map((item, index, array) => (
                <tr key={index}>
                  <th className="table-head-content" scope="row" style={( index==array.length-1 ?{borderBottomLeftRadius: `0.5rem`}:{})}>
                    {item.field}
                  </th>
                  <td className="table-data-content" style={( index==array.length-1 ?{borderBottomRightRadius: `0.5rem`}:{})} >{item.value}</td>
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
