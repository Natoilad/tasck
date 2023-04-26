// import PropTypes from 'prop-types';
import { AiOutlineFileImage } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import { Button, Card, Img, Li, List, P } from './ListUsers.styled';
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
                {avatar ? (
                  <Img src={avatar} alt={user} size={80} />
                ) : (
                  <AiOutlineFileImage size={80} />
                )}
                {user}
                <P>{converNumber(tweets)} tweets</P>
                <P>{converNumber(followers)} followers</P>

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
