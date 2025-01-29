import { useVendorData } from "../hooks/useVendorData";
import "./home.css";

export default function Home() {
  const { data, loading, error } = useVendorData("", true);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <div className="page-container">
      <h1>프로젝트 목록</h1>
      <div className="table-container">
        <table className="backstage-table">
          <thead>
            <tr>
              <th>이름</th>
              <th>설명</th>
              <th>상태</th>
              <th>생성일</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data)?.map(([idx, item]) => (
              <tr key={idx}>
                <td>{item.category}</td>
                <td>{item.arn}</td>
                <td>{item.title}</td>
                <td>{item.state}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
