# 🧪 QualiLab
**Aprenda. Simule. Melhore.**

[![Status](https://img.shields.io/badge/Status-Alfa-emerald.svg)]()
[![Tecnologia](https://img.shields.io/badge/Tech-React_|_Tailwind_CSS-blue.svg)]()
[![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-success.svg)]()

> **Acesse o projeto online:** [https://anderpro99.github.io/qualilab-alfa/](https://anderpro99.github.io/qualilab-alfa/)

## 🔬 Sobre o Projeto
O **QualiLab** é uma plataforma web educacional interativa projetada para treinar profissionais e estudantes da área de laboratório clínico na interpretação e gestão do Controle Interno da Qualidade (CIQ). 

O projeto preenche a lacuna entre a teoria estatística e a prática diária de bancada, traduzindo conceitos complexos de **Evidence-Based SQC** (Controle de Qualidade Estatístico Baseado em Evidências) em uma experiência de software dinâmica e visual.

<img width="1084" height="584" alt="image" src="https://github.com/user-attachments/assets/12761397-fe09-46ec-a599-e42467226415" />


## 🚀 Principais Funcionalidades

### 1. Simulador Analítico (Dashboard)
* **Gráfico de Levey-Jennings Dinâmico:** Geração de gráficos interativos baseados na inserção de dados (Z-Score para visualização de múltiplos níveis).
* **Motor de Regras de Westgard (Rule Engine):** O sistema detecta automaticamente violações de regras clássicas (ex: 1_3s, 2_2s, R_4s, 7T, 10_x) baseadas no histórico de dados.
* **Flexibilidade de POP:** As regras de longo prazo (como a 10_x) não são engessadas. O usuário pode configurá-las como "Alerta" ou "Rejeição", simulando o planejamento de risco real do laboratório.

### 2. Gestão Baseada em Risco e Métrica Sigma
* O sistema não adota um pacote único de regras. O usuário pode informar o **TEa (Erro Total Permitido)**, o **Viés** e o **CV**, e a aplicação calcula instantaneamente o **Six Sigma** do processo, recomendando a abordagem correta baseada no risco.

### 3. Módulo de Treinamento e Casos Clínicos
* **30 Cenários Práticos:** Um ambiente de simulação com casos teóricos e gráficos divididos por nível (Básico, Intermediário e Avançado).
* **Feedback Imediato:** Explicações fundamentadas na literatura atualizada (CLSI, Westgard) para cada tomada de decisão.

<img width="1408" height="726" alt="image" src="https://github.com/user-attachments/assets/360ea924-ca4a-4568-85e2-21142eb03532" />


## 💻 Arquitetura e Tecnologias
Este projeto foi desenvolvido com foco em performance, componentização e usabilidade (UI/UX), adotando as seguintes tecnologias:

* **React (via htm/Babel no browser):** Gerenciamento de estado (State) e renderização condicional (ex: Abas de navegação, persistência de dados).
* **Tailwind CSS:** Estilização utilitária para garantir um design responsivo, limpo e adequado a sistemas de saúde (HealthTech).
* **JavaScript (ES6+):** Lógica matemática e estatística rodando inteiramente no cliente (Client-side).
* **Separation of Concerns:** A arquitetura de dados (banco de exercícios) foi isolada do motor de renderização principal (`index.html` vs `exercicios.js`), facilitando a manutenção e a escalabilidade.
* **Local Storage:** Persistência de dados para evitar a perda do trabalho de análise em caso de atualização da página.
* **GitHub Pages:** Deploy contínuo e hospedagem *serverless*.

## 👨‍🔬 Sobre o Autor

O QualiLab é um projeto pessoal desenvolvido como parte do meu aprendizado em tecnologia e programação. Sou biomédico, com experiência em análises clínicas, toxicologia ocupacional, cromatografia líquida (HPLC) e controle da qualidade laboratorial.

A ideia do projeto é aproximar minha experiência na área laboratorial do desenvolvimento de soluções digitais, criando uma ferramenta educacional para auxiliar estudantes e profissionais a compreender melhor os conceitos e as práticas da qualidade laboratorial.

O projeto também representa uma oportunidade de aprender, na prática, sobre desenvolvimento web, utilizando ferramentas de inteligência artificial como apoio durante a construção.

---
*Disclaimer: O QualiLab é um projeto de simulação educacional em fase Alfa e não deve ser utilizado como um LIMS comercial primário para liberação de resultados reais de pacientes sem a devida validação.*
