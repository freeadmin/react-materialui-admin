const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};

const users = {
  "admin-token": {
    roles: ["admin"],
    introduction: "I am a super administrator",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Super Admin",
    psid: "26466",
  },
  "editor-token": {
    roles: ["editor"],
    introduction: "I am an editor",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    name: "Normal Editor",
    psid: "26466",
  },
};

module.exports = [
  // user login
  {
    url: "/ui/user/login",
    type: "post",
    response: (req, res) => {
      const { username } = req.body;
      const token = tokens[username];

      // mock error
      if (!token) {
        res.status(400);
        return {
          code: 60204,
          message: "Account and password are incorrect.",
        };
      }

      return token;
    },
  },

  // get user info
  {
    url: "/ui/user/info",
    type: "get",
    response: (req, res) => {
      const token = req.headers["x-token"];
      const info = users[token];

      // mock error
      if (!info) {
        res.status(401);
        return {
          code: 50008,
          message: "Login failed, unable to get user details.",
        };
      }

      return info;
    },
  },

  // user logout
  {
    url: "/ui/user/logout",
    type: "post",
    response: (_) => {
      return {
        logOut: "success",
      };
    },
  },
];
