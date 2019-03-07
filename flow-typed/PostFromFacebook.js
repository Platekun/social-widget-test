declare type PostFromFacebook = {
  id: string,
  network: 'facebook',
  displayName: string,
  authorUserName: string,
  profilePhoto: string,
  authorProfileUrl: string,
  postLink: string,
  content: string,
  likes: number,
  createdAt: string
};
