export default function TransactionHistory({ history }) {
    console.log(history);

    return (
        <table className={CSS.wrapper}>
            <thead>
                <tr className={CSS.head}>
                    <th className={CSS.headtext}>Type</th>
                    <th className={CSS.headtext}>Amount</th>
                    <th className={CSS.headtext}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {history.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={CSS.row}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}