export const getUsers = (req, res, next) => {
  res.status(200).json({
    message: "Handling GET Users ",
  });
};

export const postUser = (req, res, next) => {
  res.status(201).json({
    message: "Handling POST/Create Users ",
  });
};
export const getUser = (req, res, next) => {
  const id = req.params.userId;
  if (id === "great") {
    res.status(200).json({
      message: "You hit the jackpot",
      id: id,
    });
  } else {
    res.status(200).json({
      message: "Sorry you missed out",
    });
  }
};

export const patchUser = (req, res, next) => {
  res.status(200).json({
    message: "Updated user details",
  });
};

export const deleteUser = (req, res, next) => {
  res.status(200).json({
    message: "Deleted user details",
  });
};
