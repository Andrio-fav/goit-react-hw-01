import FriendItem from './FriendItem/FriendItem';
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