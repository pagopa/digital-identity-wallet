import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace("/digital-identity-wallet/home/");
  }, [history]);

  return null;
}
