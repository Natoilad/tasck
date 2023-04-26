import { ListUsers } from 'components/ListUsers/ListUsers';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { fetchAllUsers, fetchUsers } from 'service/serviceAPI';
const USERS = 'USERS';
const PAGE = 'Page';
const TOTALUSER = 'totalUser';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalUser, setTotalUser] = useState(0);
  console.log(totalUser);

  const updPage = page => {
    localStorage.setItem(PAGE, JSON.stringify(page));
  };

  const actualPage = JSON.parse(localStorage.getItem(PAGE));

  const totaluser = JSON.parse(localStorage.getItem(TOTALUSER));

  useEffect(() => {
    setLoading(true);
    const localusers = JSON.parse(localStorage.getItem(USERS));

    if (localusers !== null) {
      setUsers(localusers);
    } else {
      fetchUsers()
        .then(respUsers => {
          const result = respUsers.map(user => ({ ...user, isFollow: false }));
          setUsers(result);
          localStorage.setItem(USERS, JSON.stringify(result));
        })
        .catch(error => setError(error.message))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  useEffect(() => {
    if (page > 1) {
      fetchUsers(page)
        .then(respUsers => {
          const result = respUsers.map(user => ({ ...user, isFollow: false }));
          setUsers([...users, ...result]);
          localStorage.setItem(USERS, JSON.stringify([...users, ...result]));
          updPage(page);
        })
        .catch(error => setError(error.message))
        .finally(() => {
          setLoading(false);
        });
    } else {
      fetchAllUsers().then(data => {
        const lengthArray = data.length;
        setTotalUser(lengthArray);
        localStorage.setItem(TOTALUSER, JSON.stringify(lengthArray));
      });
    }
  }, [page]);

  const handleFollowing = id => {
    const upduser = users.map(user => {
      if (user.id === id) {
        return {
          ...user,
          isFollow: !user.isFollow,
          followers: user.isFollow ? user.followers - 1 : user.followers + 1,
        };
      }
      return user;
    });
    setUsers(upduser);
    localStorage.setItem(USERS, JSON.stringify(upduser));
  };

  return (
    <div>
      {error && <h2>{error.message}</h2>}
      {users.length > 0 && (
        <ListUsers users={users} handleFollowing={handleFollowing} />
      )}
      {loading && <Loader />}
      {actualPage < totaluser / 3 && (
        <button
          onClick={() => {
            if (actualPage) {
              setPage(actualPage + 1);
            } else {
              setPage(prev => prev + 1);
            }
          }}
        >
          Load More
        </button>
      )}
    </div>
  );
};
export default Users;
