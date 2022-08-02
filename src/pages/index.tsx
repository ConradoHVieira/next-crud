import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
export default function Home() {
  const clientes = [
    new Cliente('Ana', 14, '1'),
    new Cliente('João', 35, '2'),
    new Cliente('Pedro', 11, '3'),
    new Cliente('Luiza', 52, '4'),
  ]
  
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout titulo="Cadastro de Usuário">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
      
    </div>
  )
}