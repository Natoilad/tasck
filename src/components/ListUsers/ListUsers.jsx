// import PropTypes from 'prop-types';
import rectangl from '../../images/Rectangle.png';

import logo from '../../images/Logo.png';
import picture from '../../images/picture.png';
import ellipse from '../../images/Ellipse.png';

import { AiOutlineFileImage } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import {
  Button,
  Card,
  Ellipse,
  Img,
  Li,
  Line,
  List,
  Logo,
  MSG,
  P1,
  P2,
} from './ListUsers.styled';
import { followUser } from 'service/serviceAPI';
const converNumber = number => new Intl.NumberFormat('ja-JP').format(number);
export const ListUsers = ({ users, handleFollowing }) => {
  return (
    <>
      <List>
        {users.map(({ id, user, avatar, tweets, followers, isFollow }) => {
          return (
            <Li key={id}>
              <Card>
                <Logo src={logo}></Logo>
                <MSG src={picture}></MSG>
                <Line src={rectangl}></Line>
                <Ellipse src={ellipse}></Ellipse>
                {avatar ? (
                  <Img src={avatar} alt={user} size={80} />
                ) : (
                  <AiOutlineFileImage size={80} />
                )}
                <P1>{converNumber(tweets)} tweets</P1>
                <P2>{converNumber(followers)} followers</P2>
                <Button
                  onClick={() => {
                    handleFollowing(id);
                    followUser(id, {
                      followers: isFollow ? followers - 1 : followers + 1,
                    });
                  }}
                >
                  {isFollow ? 'following' : 'follow'}
                </Button>
              </Card>
            </Li>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};
export default ListUsers;

// ListUsers.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ),
// };
