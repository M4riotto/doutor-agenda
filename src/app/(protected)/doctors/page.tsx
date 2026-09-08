import { Button } from "@/components/ui/button";
import {
  PageContainer,
  PageHeader,
  PageContent,
  PageTitle,
  PageDescription,
  PageActions,
  PageHeaderContent,
} from "@/components/ui/pageContainer";
import { auth } from "@/lib/auth";
import { Plus } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DoctorsPage = async () => {
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
          <PageTitle>Médicos</PageTitle>
          <PageDescription>Gerencie os médicos do sistema</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Adicinar Médico
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>Médicos</PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;
