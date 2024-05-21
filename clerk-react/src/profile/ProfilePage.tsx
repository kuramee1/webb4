import React from 'react';
import { Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

const ProfilePage: React.FC = () => {
  const { signOut, user } = useClerk();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Profile Details</h2>
      <div className="profile-info">
        <p className="profile-text">Full Name: {user.fullName}</p>
        <p className="profile-text">Email: {user.emailAddresses ? user.emailAddresses.join(', ') : 'N/A'}</p>
        <p className="profile-text">Account Created: {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</p>
      </div>
      <div className="profile-actions">
        <button className="sign-out-btn" onClick={() => signOut()}>Sign Out</button>
        <Link to="/user-profile" className="profile-link">Edit Profile</Link>
      </div>
    </div>
  );
}

export default ProfilePage;
