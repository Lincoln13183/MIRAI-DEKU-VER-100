const axios = require('axios');

module.exports.config = {
    name: "Eric",
    version: "1.0.0",
    description: "(Education Resources Information Center) is an authoritative database of indexed and full-text education literature and resources. Sponsored by the Institute of Education Sciences of the U.S. Department of Education, it is an essential tool for education researchers of all kinds.",
    commandCategory: "Information Retrieval",
    credits: "August Quinn",
    hasPermission: 0,
    usages: "/eric [search query]",
    cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;
    const searchQuery = encodeURIComponent(args.join(" "));

    try {
        if (!searchQuery) {
            return api.sendMessage("Please provide a search query for Eric's content.", threadID, messageID);
        }

        const ericApiUrl = `http://ericeddov.august-api.repl.co/search-eric?search=${searchQuery}`;
        const response = await axios.get(ericApiUrl);

        const { results } = response.data;
        if (!results || results.length === 0) {
            return api.sendMessage("No results found for the given search query.", threadID, messageID);
        }
      
        const combinedResults = results.map((result, index) => `⦿ 𝗥𝗘𝗦𝗨𝗟𝗧 ${index + 1}\n𝗧𝗜𝗧𝗟𝗘: ${result.title || 'N/A'}\n𝗔𝗨𝗧𝗛𝗢𝗥: ${result.author || 'N/A'}\n𝗦𝗨𝗕𝗝𝗘𝗖𝗧: ${result.subject || 'N/A'}\n𝗣𝗨𝗕𝗟𝗜𝗦𝗛𝗘𝗥: ${result.publisher || 'N/A'}\n𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡: ${result.description || 'N/A'}`).join('\n\n');
        api.sendMessage(`🔎 Search results for "${searchQuery}":\n\n${combinedResults}`, threadID, messageID);

    } catch (error) {
        console.error('Error:', error.message);
        api.sendMessage('An error occurred while searching. Please try again later.', threadID, messageID);
    }
};
