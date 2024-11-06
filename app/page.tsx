import { client } from "../api"

export default async function Page() {
	return <div>Random number of the day: {client.random()}</div>;
}
