# 📋 Tasks Dashboard - EFCoreSQLite

Este repositório contém uma aplicação completa de gerenciamento de tarefas com:
- **Backend**: API REST criada com **.NET 8**, **Entity Framework Core** e **SQLite**
- **Frontend**: Interface responsiva em **HTML + CSS + JavaScript puro** para consumir todos os endpoints da API

---

## 🚀 Tecnologias Utilizadas

### Backend
- .NET 8 / ASP.NET Core Web API
- Entity Framework Core
- SQLite

### Frontend
- HTML5
- CSS3
- JavaScript (Fetch API)

---

## 📂 Estrutura do Projeto

```
.
├── backend/                    # Projeto da API EFCoreSQLite.Tasks.Api
│   ├── Controllers/
│   ├── Models/
│   ├── Context/
│   └── ...
│
├── frontend/                   # Interface HTML para consumir a API
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── README.md
│
└── README.md
```

---

## ⚙️ Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
```

### 2️⃣ Rodar o Backend (API)

Entre na pasta da API:
```bash
cd backend
```

Execute as migrations (se necessário):
```bash
dotnet ef database update
```

Inicie a API:
```bash
dotnet run
```

A API estará disponível (por padrão) em:
```
http://localhost:5000/api/task
```

> **Nota:** Ajuste a porta no `app.js` do frontend caso seja diferente.

### 3️⃣ Rodar o Frontend

Entre na pasta do frontend:
```bash
cd frontend
```

Abra o arquivo `index.html` diretamente no navegador ou sirva via um servidor local (ex: Live Server no VS Code).

---

## 📌 Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/task` | Adicionar nova tarefa |
| `GET` | `/api/task` | Listar todas as tarefas |
| `GET` | `/api/task/{id}` | Buscar tarefa por ID |
| `GET` | `/api/task/status/{status}` | Buscar tarefas por status (0=Pending, 1=Completed) |
| `GET` | `/api/task/count` | Obter estatísticas (total, concluídas, pendentes) |
| `PUT` | `/api/task/{id}?newStatus={status}` | Atualizar status da tarefa |
| `DELETE` | `/api/task/{id}` | Excluir tarefa |

---

## 🎨 Funcionalidades do Frontend

### Dashboard lateral com navegação entre seções:
- ✅ Todas as tarefas
- ➕ Nova tarefa
- 🔍 Buscar por ID
- 📊 Buscar por Status
- 📈 Estatísticas

### Operações CRUD completas:
- Adicionar, listar, atualizar e excluir tarefas
- Visualizar tarefas por ID ou por status
- Exibir estatísticas de tarefas em tempo real

---

## 🖼️ Layout

- 🌙 Tema dark moderno
- 📱 Design responsivo
- 🧭 Navegação lateral intuitiva
- 📋 Tabela de tarefas com botões de ação
- 📝 Formulários simples para interação com a API

---

## 🛠️ Modelo de Dados

### Task (Tarefa)
```csharp
public class Task
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public TaskStatus Status { get; set; }
    public DateTime CreatedAt { get; set; }
}
```

---

## 📜 Licença

Este projeto é open-source e pode ser usado livremente.

---

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
