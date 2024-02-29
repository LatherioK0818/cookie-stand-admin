
export default function Footer({ reportCount }) {
    return (
      <footer className="p-4 mt-8 text-black bg-green-500">
        <p>Total Locations: {reportCount}</p>
      </footer>
    );
  }
  