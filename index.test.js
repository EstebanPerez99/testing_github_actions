const { mooncakeSays, env } = require("./");

test("mooncake knows what to say", () => {
	expect(mooncakeSays("wwoooahhh!")).toBe("(o.o) wwoooahhh!");
});

test("mooncake is not sure what to say", () => {
	expect(mooncakeSays()).toBe("(o.o)");
});

test("env", () => {
	expect(env()).toBe("ejele.com");
});
