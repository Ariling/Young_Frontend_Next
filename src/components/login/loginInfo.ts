export const kakaoLoginURL = `
https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}
`;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_SECRET;
