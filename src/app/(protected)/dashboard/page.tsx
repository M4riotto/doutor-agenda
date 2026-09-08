import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import SignOutButton from "./components/sign-out-button";
import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageTitle,
  PageDescription,
  PageActions,
  PageContent,
} from "@/components/ui/pageContainer";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) {
    redirect("/authentication");
  }
  if (!session?.user.clinic) {
    redirect("/clinic-form");
  }
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Dashboard</PageTitle>
          <PageDescription>
            Bem-vindo(a) ao seu painel de controle, {session.user.name}!
          </PageDescription>
        </PageHeaderContent>
        <PageActions>
          <SignOutButton />
        </PageActions>
      </PageHeader>
      <PageContent>Conteúdo do Dashboard</PageContent>
    </PageContainer>
  );
};

export default DashboardPage;
