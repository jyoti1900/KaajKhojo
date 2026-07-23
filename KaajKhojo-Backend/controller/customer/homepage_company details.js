const Job = require("../../database/models/Jobs");

exports.getAllCompanyDetails = async (req, res) => {
  try {
    let data = await Job.find(
      { deleted: false, status: "Active" },
      {
        company: 1,
        location: 1,     // address
        image: 1,
        jobType: 1,
        cat_name: 1,
        description: 1,
        title: 1,
        _id: 0
      }
    );

    // ✅ Build full image URL + shape response
    data = data.map(job => ({
      company: job.company,
      title: job.title,
      category: job.cat_name,
      jobType: job.jobType,
      description: job.description,
      address: job.location,
      image: job.image
        ? `${req.protocol}://${req.get("host")}/public/${job.image}`
        : ""
    }));

    return res.status(200).json({
      success: true,
      count: data.length,
      data
    });
  } catch (error) {
    console.error("Company job listing error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};



