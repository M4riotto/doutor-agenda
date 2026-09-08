import {
  PageContainer,
  PageHeader,
  PageHeaderContent,
  PageTitle,
  PageDescription,
  PageContent,
} from "@/components/ui/pageContainer";

const AgendamentoPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Agendamento</PageTitle>
          <PageDescription>Gerencie os agendamentos do sistema</PageDescription>
        </PageHeaderContent>
      </PageHeader>
      <PageContent>Agendamento</PageContent>
    </PageContainer>
  );
};

export default AgendamentoPage;
