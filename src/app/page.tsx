import Invitation from "./invitation";

const invitationData = {
  name: "Hoàng Nguyên",
  schoolLine: "Trường Đại học Luật TP. Hồ Chí Minh",
  date: "01/08/2026",
  time: "8:00 sáng",
  location: "Trường Đại học Luật TP. Hồ Chí Minh",
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { invited } = await searchParams;
  const guestName = Array.isArray(invited) ? invited[0] : invited;

  return <Invitation data={invitationData} guestName={guestName} />;
}
