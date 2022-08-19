require("dotenv").config({ path: __dirname + "/.env" });

function mooncakeSays(message) {
	let mooncake = "(o.o)";

	if (!message) return mooncake;

	return `${mooncake} ${message}`;
}

const env = () => {
	console.log(process.env.URL_SECRETO);
	return process.env.URL_SECRETO;
};

module.exports = { mooncakeSays, env };
