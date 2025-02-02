import styled from "styled-components";

export const PageContainer = styled.div`
  flex: 1;
  flex-direction: row;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-bottom: 24px;
    color: #333;
  }
`;

export const TableContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
`;

export const TableHeader = styled.th`
  background: #f8f8f8;
  color: #6c6c6c;
  font-weight: 500;
  text-align: left;
  padding: 16px;
  border-bottom: 1px solid #e6e6e6;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f5f5f5;
    transition: background-color 0.2s ease;
  }

  &:last-child td {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e6e6e6;
  color: #333;
`;
