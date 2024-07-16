export const kakaoLoginURL = `
https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code
`;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_SECRET;
