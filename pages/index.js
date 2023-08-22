import MainLayout from "@/layout/Layout";
import HeroBanner from "@/components/HeroBanner";
import { useEffect, useState } from "react";
import { fetchAPI } from "./api/fetch-api";

export default function Home() {
  const [strapiCustomerData, setStrapiCustomerData] = useState({});
  const [templateData, setTemplateData] = useState({});
  const [headerData, setHeaderData] = useState({});
  const [bannerData, setBannerData] = useState({});
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    return async () => {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const customerID = process.env.NEXT_PUBLIC_STRAPI_CUSTOMER_ID;
      const path = `/customers/${customerID}?populate[websiteTemplateData][populate]=*`;
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, options);
      const templateRawData =
        responseData?.data?.attributes?.websiteTemplateData[0];

      console.log(templateRawData);
      setStrapiCustomerData(responseData.data.attributes);
      setTemplateData(templateRawData);
      setCustomerName(templateRawData.customerName);
      setHeaderData(templateRawData.header);
      setBannerData(templateRawData.heroBanner);
    };
  }, []);

  return (
    <MainLayout headerData={headerData}>
      <HeroBanner title={bannerData?.title} subtitle={bannerData?.subtitle} />
    </MainLayout>
  );
}
