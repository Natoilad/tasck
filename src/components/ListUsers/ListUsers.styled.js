import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ellipse from '../../images/Ellipse.png';
import rectangl from '../../images/Rectangle.png';
import logo from '../../images/Logo.png';
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
  justify-content: center;
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

export const P = styled.p`
  margin: 5px;
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

export const Button = styled.button`
  // box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  width: 196px;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  padding: 14px 28px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #5cd3a8;
  }
`;
