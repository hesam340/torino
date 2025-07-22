"use client";

const setCookie = (name, token, maxAge) => {
  return document.cookie = `${name}=${token}; max-age=${maxAge * 60 * 60}`;
};

const getCookie = (cookieName) => {
  return document?.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

export { setCookie, getCookie };
