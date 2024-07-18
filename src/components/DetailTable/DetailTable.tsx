export type TableData = {
  field: string;
  value: string;
};

type Props = { content: TableData[] | null };

const Detailtable = ({ content }: Props) => {
  return (
    <>
      <div className="content-detail">
        <div className="content-table">
          <table>
            <thead className="table-header">
              <tr>
                <th className="table-header-content" scope="col">
                  Field
                </th>
                <th className="table-header-content" scope="col">
                  Value
                </th>
              </tr>
            </thead>
            {content != null ? (
              <tbody className="table-content">
                {content.map((item, index) => (
                  <tr key={index}>
                    <th className="table-header-content" scope="row">
                      {item.field}
                    </th>
                    <td className="table-content-content">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <div>console.error();</div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Detailtable;
