module.exports = {
  AppId: '1257090014',
  SecretId: 'AKIDmNingKSqjLi04snlsjJdhV2JM9fvxgAS',
  SecretKey: 'FH7k9LK6ez71iBSVM0QddQ0PbcR4UgfQ'
};


const imgClient = new ImageClient({
  AppId,
  SecretId,
  SecretKey,
});

exports.main = async (event) => {
  const idCardImageUrl = event.url;
  const result = await imgClient.ocrBizCard({
    data: {
      url_list: [idCardImageUrl],
    },
  });
  return JSON.parse(result.body).result_list[0];
};