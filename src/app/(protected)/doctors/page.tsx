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
import { Plus } from "lucide-react";

const DoctorsPage = () => {
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
