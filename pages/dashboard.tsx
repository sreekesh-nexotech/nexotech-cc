import Dashboard from "../components/ui/Dashboard";

import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const authToken = context.req.cookies.auth_token;

  // Redirect to login if no auth token is found
  if (!authToken) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }

  // Fetch leads or other data here if needed
  return {
    props: {},
  };
};

const DashboardPage = () => {
    return (
        <div>
            <Dashboard />
        </div>
    );
};

export default DashboardPage;