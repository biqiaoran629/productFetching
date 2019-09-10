const axios = require('axios');
const cheerio = require('cheerio');

const ContentWorker = require('../workers/ContentWorker');
const { ERRORS } = require('../constants');

const getProduct = async (req, res) => {
  const {
    params: { asin_id }
  } = req;

  // Issue bad request
  if (!asin_id) {
    return res.status(400).json('No Amazon product ID is entered!');
  }

  try {
    const contentWorker = new ContentWorker(asin_id, axios, cheerio);
    const content = await contentWorker.getContent(asin_id);
    res.json(content);
  } catch (e) {
    return _handleErrors(res, e);
  }
};

const _handleErrors = (res, e) => {
  let responseCode = 500;
  let msg = ERRORS.GENERIC;
  if (e.message === ERRORS.PRODUCTINVALID) {
    responseCode = 400;
    msg = e.message;
  } else if (e.message === ERRORS.FETCHING) {
    msg = e.message;
  }

  return res.status(responseCode).json({ msg });
};

module.exports = {
  getProduct
};
