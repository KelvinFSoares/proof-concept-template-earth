import Header from "@/components/Header";

export default function MainLayout({ headerData, children }) {
  return (
    <>
      <Header data={headerData} />
      <main className="w-full">{children}</main>
    </>
  );
}
