import { timeSlots } from '/components/data'; 
import {hourlySales} from './CreateForm';


export default function ReportTable({ reports }) {

  const calculateHourlyTotals = (reports) => {

    const hourlyTotals = Array(timeSlots.length).fill(0);
    
    reports.forEach(report => {
      report.hourly_sales.forEach((sales, index) => {
        hourlyTotals[index] += sales;
      });
    });
    return hourlyTotals;
  };

  // Call the function to calculate hourly totals
  const hourlyTotals = calculateHourlyTotals(reports);
  // Calculate the grand total by summing up all hourly totals
  const grandTotal = hourlyTotals.reduce((sum, current) => sum + current, 0);

  if (!reports || reports.length === 0) {
    return <h2 className="my-4 text-xl text-center">No Cookie Stands Available</h2>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 overflow-auto text-black y">
      <table className="w-full bg-green-300 rounded-lg">
        <thead className="text-black bg-green-600">
          <tr>
            <th>Location</th>
            {timeSlots.map((time, index) => (
              <th key={index}>{time}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody className="text-black bg-green-200 divide-y divide">
          {reports.map((report, index) => (
            <tr key={index} className={`${index % 2 ? ' bg-green-400' : 'bg-green-500'}`}>
              <td className='pl-4 border-green-900'>{report.location}</td>
              {report.hourly_sales.map((sale, saleIndex) => (
                <td key={saleIndex}>{sale}</td>
              ))}
              <td>{report.hourly_sales.reduce((sum, current) => sum + current, 0)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="bg-green-500 border-green-900">
          <tr>
            <th>Total</th>
            {hourlyTotals.map((total, index) => (
              <td key={index}>{total}</td>
            ))}
            <td>{grandTotal}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
