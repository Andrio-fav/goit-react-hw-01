import Profile from './components/Profile/Profile';
import userData from './userData.json'
import FriendsList from './components/FriendList/FriendList';
import friends from './friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transaction from './transactions.json'
export default function App() {
  return (
    <>
      <Profile data={userData} />
      <FriendsList friends={friends} />
      <TransactionHistory history={transaction} />.
    </>
  );
}
