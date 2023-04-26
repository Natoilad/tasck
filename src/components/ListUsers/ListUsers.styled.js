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
  justify-content: center;
  // textAlign: center:
  flex-wrap: wrap;
  // padding: 0;
  margin: 0 'auto';
`;

export const Img = styled.img`
  // zoom: 1.2;
  width: 62px;
  height: 62px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -57%);
  border-radius: 50px;
  // margin-top: 126px;
  // margin-left: 150px;
  z-index: 998;
`;

export const P = styled.p`
  text-transform: uppercase;
  margin: 1px;
  margin-top: 26px;
  color: white;
`;

export const Card = styled.div`
  border-radius: 14px;
  position: relative;
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

export const Logo = styled.img`
  margin-top: 20px;
  margin-left: 20px;
  width: 76px;
  height: 22px;
`;

export const MSG = styled.img`
  position: relative;
  // margin-top: -30px;
  margin-left: 20px;
  width: 308px;
  height: 168px;
`;

export const Line = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // position: relative;
  // margin-top: -30px;
  // margin-left: 20px;
  // width: 308px;
  // height: 168px;
`;

export const Ellipse = styled.img`
  // zoom: 1.2;
  // width: 62px;
  // height: 62px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
  // margin-top: 126px;
  // margin-left: 150px;
  z-index: 999;
`;
