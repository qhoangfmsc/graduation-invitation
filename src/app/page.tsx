import Invitation from "./invitation";

const invitationData = {
  name: "Hoàng Nguyên",
  schoolLine: "Trường Đại học Luật TP. Hồ Chí Minh",
  date: "8/8/2026",
  time: "15h - 17h",
  location: ["Nhà hát Hoà Bình", "240 Đường 3 tháng 2,", "P.Hoà Hưng, TP.HCM"],
  phones: [
    { number: "0903008201", label: "H.Nguyên" },
    { number: "0946841344", label: "anh Hoàng" },
  ],
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
