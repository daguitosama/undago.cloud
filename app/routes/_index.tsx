import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
    return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>Dago's Cloud</h1>
        </div>
    );
}
