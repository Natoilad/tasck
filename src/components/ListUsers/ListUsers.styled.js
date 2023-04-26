import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Li = styled.li`
  list-style: none;
  padding: 3px;
  margin: 0;
  :hover {
    // border: 1px solid;
  }
`;
export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: white;
    background: black;
  }
`;

export const List = styled.ul`
  display: flex;
  justifycontent: center;
  // textAlign: center:
  flex-wrap: wrap;
  // padding: 0;
  margin: 0 'auto';
`;

export const Img = styled.img`
  width: 80px;
  border-radius: 50px;
  margin-top: 178px;
  margin-left: 150px;
`;

export const Card = styled.div`
  background: #471ca9;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  text-align: center;
  width: 380px;
  height: 460px;

  :hover {
    // scale: 1.1;
    // color: white;
    // background: black;
  }
`;
