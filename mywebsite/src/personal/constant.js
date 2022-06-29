const person = {
  fullName: "Pham Xuan",
  birthDay: "24/05/1998",
  gender: "Male",
  career: "Developer",
  github: "https://github.com/phamqi",
  githubName: "Pham Quy",
};
const LOCAL_HREF = window.location.href;

export const dataProfile = `/// Hi!!! &#9996; <h2><p>const&nbsp;<p>person <p>= { <p>fullName: <q>${person.fullName}</q>,<p>birthDay: <q>${person.birthDay}</q>,<p>gender: <q>${person.gender}</q>,<p>career: <q>${person.gender}</q>,<p>github: <a href="${person.github}">${person.githubName}</a><p>}</h2>/// Contact me &#128071;`;
export const DEFAULT_TIMER = 80;

export const iconObject = {
  react: `${LOCAL_HREF}logo192.png`,
  sass: `${LOCAL_HREF}`,
};
