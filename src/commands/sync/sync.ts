import { Cloudflare } from "cloudflare";
import { PrismaClient } from "@prisma/client";
import ora from "ora";
const prisma = new PrismaClient();

export const sync = async () => {
	const sp = ora(`start syncing`).start();
	const token = await prisma.token.findFirst({
		where: {
			isUsed: true,
		},
	});
	if (!token) {
		sp.fail(`please first add a cloudflare token`);
		return;
	}
	const cloudflare = new Cloudflare({
		apiToken: token.value,
	});
    const zones = await cloudflare.zones.list()
    console.log(zones)
};
