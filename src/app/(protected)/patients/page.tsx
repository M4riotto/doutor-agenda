import {
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/ui/pageContainer";

const PacientesPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Pacientes</PageTitle>
          <PageDescription>Gerencie os pacientes do sistema</PageDescription>
        </PageHeaderContent>
      </PageHeader>
      <PageContent>Pacientes</PageContent>
    </PageContainer>
  );
};

export default PacientesPage;
