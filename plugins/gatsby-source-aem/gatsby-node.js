const axios = require('axios');
const crypto = require('crypto');

const CS_API_URI =
  'https://exemplifidev.aem.com/api/v3/case-study';

const IND_API_URI =
  'https://exemplifidev.aem.com/api/v3/industry';  

const CMS_API_URI =
  'https://exemplifidev.aem.com/api/v3/cms_platform';   

exports.sourceNodes = async ({boundActionCreators}) => {
  const {createNode} = boundActionCreators;
  const result = await axios.get(CS_API_URI);
  for (const casestudy of result.data) {
    await createNode({
      children: [],
      id: casestudy.id.toString(),
      title: casestudy.title,
      image: casestudy.image,
      description:casestudy.description,
      csurl: casestudy.csurl,
      csindustry: casestudy.csindustry,
      csplatform: casestudy.csplatform,
      csdesignpartner: casestudy.csdesignpartner,
      parent: null,
      internal: {
        type: 'casestudy',
        contentDigest: crypto
          .createHash(`md5`)
          .update(JSON.stringify(casestudy))
          .digest(`hex`),
      },
    });
  }    
  const indresult = await axios.get(IND_API_URI);
  for (const industry of indresult.data)  {
        await createNode({
          children: [],
          id: industry.id.toString(),
          title: industry.title,
          name:industry.name,
          parent: null,
          internal: {
            type: 'industry',
            contentDigest: crypto
              .createHash(`md5`)
              .update(JSON.stringify(industry))
              .digest(`hex`),
          },
        });
    }  
    const cmsresult = await axios.get(CMS_API_URI);
    for (const platform of cmsresult.data)  {
          await createNode({
            children: [],
            id: platform.id.toString(),
            title: platform.title,
            name:platform.name,
            parent: null,
            internal: {
              type: 'platform',
              contentDigest: crypto
                .createHash(`md5`)
                .update(JSON.stringify(platform))
                .digest(`hex`),
            },
          });
      }  
};