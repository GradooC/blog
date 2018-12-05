export default () => {
  return (req, res, next) => {
    res.locals.flash = req.session.flash || [];
    req.session.flash = [];
    res.flash = (type, message) => req.session.flash.push({ type, message });
    next();
  }
};