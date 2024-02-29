import { timeSlots } from "./data";

export default function CreateForm({ onCreate }) {
    // Function to generate random hourly sales
    const generateRandomSales = (minCustomers, maxCustomers, avgCookies) => {
      // Calculate random number of customers
      const customers = Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers;
      return (customers * avgCookies)
    }

    // Function to create the sales report for a location
    const createSalesReport = (minCustomers, maxCustomers, avgCookies) => {
      const salesData = timeSlots.map(() => generateRandomSales(minCustomers, maxCustomers, avgCookies));
      // const totalSales = salesData.reduce((total, current) => total + current, 0);
      return salesData
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
      let location = event.target.location.value
      let minCustomers = Number(event.target.minCustomers.value)
      let maxCustomers = Number(event.target.maxCustomers.value)
      let avgCookies = Number(event.target.avgCookies.value)
      let hourly_sales = createSalesReport(minCustomers, maxCustomers, avgCookies)

      console.log(avgCookies)

      const formData = {
        location,
        minCustomers,
        maxCustomers,
        avgCookies,
        hourly_sales,
      };

      onCreate(formData);
    };
  
    return (
        <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg px-8 pt-6 pb-8 mb-4 bg-green-500 shadow-md rounded-xl">
        <h2 className="mb-4 text-2xl font-bold text-center text-black">Create Cookie Stand</h2>
        <div className="mb-4">
          <label htmlFor="location" className="block mb-2 text-sm font-bold text-gray-700">Location</label>
          <input type="text" id="location" name="location" placeholder="Location" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex mb-6">
          <div className="w-full mr-2">
            <label htmlFor="minCustomers" className="block mb-2 text-sm font-bold text-gray-700">Minimum Customers per Hour</label>
            <input type="number" id="minCustomers" name="minCustomers" placeholder="Min" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="w-full ml-2">
            <label htmlFor="maxCustomers" className="block mb-2 text-sm font-bold text-gray-700">Maximum Customers per Hour</label>
            <input type="number" id="maxCustomers" name="maxCustomers" placeholder="Max" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="avgCookies" className="block mb-2 text-sm font-bold text-gray-700">Average Cookies per Sale</label>
          <input type="number" id="avgCookies" name="avgCookies" placeholder="Average" step="0.1" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="px-4 py-2 font-bold text-black bg-green-800 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline">
            Create
          </button>
        </div>
      </form>
        </div>
    );
  }