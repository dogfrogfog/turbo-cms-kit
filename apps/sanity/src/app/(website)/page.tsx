import { loadPage } from "@/lib/api";
import Page from "@/components/Page";

export default async function IndexRoute() {
  const data = await loadPage("/");

  return <Page data={data} />;
}
