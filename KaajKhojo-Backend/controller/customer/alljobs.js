const JobModel = require("../../database/models/Jobs");

exports.listJobForUsers = async (req, res) => {
  try {
    let { page = 1, perPage = 10 } = req.query;

    page = parseInt(page);
    perPage = parseInt(perPage);

    // 📅 Get today's date (00:00 time)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // ✅ QUERY: show only active & non-expired jobs
    const query = {
      deleted: false,
      status: "Active",
      endDate: { $gte: today } // ❌ expired jobs hidden
    };

    // 🔍 Fetch jobs
    let data = await JobModel.find(query)
      .sort({ postDate: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean();

    // 🌐 Attach full image URL
    data = data.map(job => ({
      ...job,
      image: job.image
        ? `${req.protocol}://${req.get("host")}/public/${job.image}`
        : ""
    }));

    // 🔢 Count jobs
    const count = await JobModel.countDocuments(query);

    return res.status(200).json({
      success: true,
      message: "Active jobs fetched successfully",
      data,
      count,
      page,
      perPage
    });

  } catch (error) {
    console.error("Job list error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
