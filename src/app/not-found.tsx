import Link from "next/link";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>404 - Página Não Encontrada</h2>
      <p>Não foi possível encontrar o recurso solicitado.</p>
      <Link
        href="/dashboard"
        style={{ color: "blue", textDecoration: "underline" }}
      >
        Voltar para a Página Inicial
      </Link>
    </div>
  );
};

export default NotFound;
