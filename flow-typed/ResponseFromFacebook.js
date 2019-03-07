declare type ResponseFromFacebook = {
  id: string,
  network: 'facebook',
  from: {
    id: string,
    name: string,
    broadcast_name: string
  },
  facebook_id: string,
  message: string,
  like_count: number,
  created_time: string
};
