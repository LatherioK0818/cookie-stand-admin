import Head from 'next/head';
import Header from './Header';
import CreateForm from './CreateForm';
import ReportTable from './ReportTable';
import Footer from './Footer';
import { useState } from 'react';

export default function CookieStandAdmin() {
  const [reports, setReports] = useState([]);

  const handleCreate = (formData) => {

    const newReport = { ...formData, id: reports.length + 1 };
    setReports([...reports, newReport]);
  };

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main>
        <CreateForm onCreate={handleCreate} />
        <ReportTable reports={reports} />
      </main>
      <Footer reportCount={reports.length} />
    </>
  );
}
