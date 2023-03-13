import React from "react";
export default function Profile({ username, avatar, tag, location, stats }) {
  return (
    <div class="profile">
      <img src={avatar} alt="User avatar" class="avatar" />
      <p class="name">{username}</p>
      <div className="line"></div>
      <p class="tag">@{tag}</p>
      <p class="location">{location}</p>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.Vievs}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.Likes}</span>
        </li>
      </ul>
    </div>
  );
}
