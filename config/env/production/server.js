module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"),
  dirs: {
    public: "/opt/render/project/public/upload"
  },
});
