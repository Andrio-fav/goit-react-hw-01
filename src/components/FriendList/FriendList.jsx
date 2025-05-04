import FriendItem from '../FriendListItem/FriendListItem';
import CSS from './Friendlist.module.css';
export default function FriendsList({ friends }) {
    return (
        <ul className={CSS.wrapper}>
            {friends.map((friend) => (
                <FriendItem key={friend.id} friend={friend} />
            ))}
        </ul>
    );
}