function getHealthStatus(req, res) {
    res.status(200).json({
      healt: "live",
      status: 200,
      message: "ok",
    });
  }
  
  module.exports = {
    getHealthStatus
  }