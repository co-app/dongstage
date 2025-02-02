import { useVendorData } from "../hooks/useVendorData";
import { PageContainer, Table, TableCell, TableContainer, TableHeader, TableRow } from "../styles/Home.styled";

export default function Home() {
  const { data, loading, error } = useVendorData("", true);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <PageContainer>
      <h1>프로젝트 목록</h1>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>이름</TableHeader>
              <TableHeader>설명</TableHeader>
              <TableHeader>상태</TableHeader>
              <TableHeader>생성일</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.arn}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.state}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </PageContainer>
  );
}
