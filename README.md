# Total Home Improvements - Website

Um site moderno, responsivo e profissional para serviços de reforma e melhorias residenciais, desenvolvido para funcionar perfeitamente no GitHub Pages.

## 🌟 Características

- **100% Estático**: HTML, CSS e JavaScript puro - sem necessidade de build ou servidor
- **Responsivo**: Design adaptável para mobile, tablet e desktop
- **Moderno**: Interface limpa e profissional com animações suaves
- **Otimizado**: Carregamento rápido e performance otimizada
- **Acessível**: HTML semântico com foco em acessibilidade
- **SEO-Friendly**: Meta tags e estrutura otimizada para motores de busca

## 📁 Estrutura do Projeto

```
Totalhomeimprovement/
│
├── index.html              # Página inicial
├── about.html              # Página sobre a empresa
├── services.html           # Página de serviços
├── contact.html            # Página de contato
├── README.md               # Este arquivo
│
└── assets/
    ├── css/
    │   └── style.css       # Estilos principais
    ├── js/
    │   └── main.js         # JavaScript para interatividade
    └── img/
        └── (imagens)       # Pasta para imagens do site
```

## 🚀 Como Publicar no GitHub Pages

### Método 1: Via Interface do GitHub (Recomendado)

1. **Acesse as Configurações do Repositório**
   - Vá para o repositório no GitHub
   - Clique em "Settings" (Configurações)

2. **Configure o GitHub Pages**
   - No menu lateral, clique em "Pages"
   - Em "Source", selecione a branch principal (geralmente `main` ou `master`)
   - Selecione a pasta raiz `/` (root)
   - Clique em "Save"

3. **Aguarde a Publicação**
   - O GitHub levará alguns minutos para publicar o site
   - Você verá uma mensagem com o URL do site: `https://[seu-usuario].github.io/Totalhomeimprovement/`

4. **Acesse Seu Site**
   - Clique no link fornecido ou acesse diretamente
   - O site estará disponível publicamente

### Método 2: Via Linha de Comando

```bash
# Clone o repositório (se ainda não tiver)
git clone https://github.com/[seu-usuario]/Totalhomeimprovement.git
cd Totalhomeimprovement

# Faça suas alterações
# ... edite os arquivos ...

# Adicione as alterações
git add .

# Commit das alterações
git commit -m "Atualização do site"

# Envie para o GitHub
git push origin main
```

Depois siga os passos do Método 1 para ativar o GitHub Pages.

## 🔧 Manutenção e Personalização

### Alterando Cores

Edite o arquivo `assets/css/style.css` e modifique as variáveis CSS no início:

```css
:root {
  --primary-color: #1e40af;      /* Cor principal */
  --secondary-color: #f59e0b;    /* Cor secundária */
  --accent-color: #10b981;       /* Cor de destaque */
  /* ... outras cores ... */
}
```

### Adicionando Imagens

1. Coloque suas imagens na pasta `assets/img/`
2. Prefira usar formato WebP para melhor performance
3. Otimize as imagens antes de adicionar (use ferramentas como TinyPNG)
4. Adicione imagens no HTML com alt text:

```html
<img src="assets/img/sua-imagem.webp" alt="Descrição da imagem" loading="lazy">
```

### Editando Conteúdo

1. **Textos**: Edite diretamente nos arquivos HTML
2. **Serviços**: Modifique `services.html`
3. **Informações de Contato**: Atualize em `contact.html` e no footer de todas as páginas
4. **Sobre a Empresa**: Personalize `about.html`

### Adicionando Novas Páginas

1. Crie um novo arquivo HTML na raiz (ex: `portfolio.html`)
2. Copie a estrutura de header e footer de uma página existente
3. Adicione o link no menu de navegação em TODAS as páginas:

```html
<ul class="nav-menu">
  <li><a href="index.html">Início</a></li>
  <li><a href="about.html">Sobre</a></li>
  <li><a href="services.html">Serviços</a></li>
  <li><a href="portfolio.html">Portfólio</a></li>  <!-- Nova página -->
  <li><a href="contact.html">Contato</a></li>
</ul>
```

## 📱 Responsividade

O site é totalmente responsivo e funciona perfeitamente em:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Os breakpoints são definidos no arquivo `assets/css/style.css`.

## 🎨 Recursos Utilizados

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com variáveis CSS, Grid e Flexbox
- **JavaScript Vanilla**: Interatividade sem dependências
- **Emojis**: Ícones visuais sem necessidade de bibliotecas externas

## ⚡ Performance

- Sem dependências externas pesadas
- Imagens otimizadas
- CSS e JS minificáveis
- Carregamento lazy de imagens
- Animações CSS performáticas

## ♿ Acessibilidade

- HTML semântico
- Labels em formulários
- Alt text em imagens
- Contraste adequado de cores
- Navegação via teclado
- ARIA labels onde necessário

## 🔍 SEO

- Meta tags descritivas
- Open Graph para redes sociais
- URLs amigáveis
- Hierarquia de headings (H1, H2, H3)
- Sitemap (pode ser adicionado)

## 📝 Lista de Verificação para Deploy

Antes de publicar, verifique:

- [ ] Todas as imagens estão otimizadas
- [ ] Links internos estão funcionando
- [ ] Informações de contato estão corretas
- [ ] Formulário de contato está testado
- [ ] Site está responsivo em diferentes tamanhos de tela
- [ ] Não há erros no console do navegador
- [ ] Meta tags estão preenchidas corretamente
- [ ] Favicon está presente

## 🛠️ Solução de Problemas

### Site não está aparecendo no GitHub Pages

1. Verifique se o GitHub Pages está ativado nas configurações
2. Confirme que a branch correta está selecionada
3. Aguarde alguns minutos após fazer alterações
4. Limpe o cache do navegador

### Menu mobile não está funcionando

1. Verifique se o arquivo `assets/js/main.js` está carregando
2. Abra o console do navegador (F12) e veja se há erros
3. Confirme que os elementos HTML têm as classes corretas

### Formulário não está enviando

1. O formulário atual é apenas demonstrativo
2. Para funcionalidade real, integre com serviços como:
   - Formspree (https://formspree.io/)
   - Netlify Forms
   - EmailJS (https://www.emailjs.com/)

### Imagens não estão carregando

1. Verifique se os caminhos das imagens estão corretos
2. Use caminhos relativos: `assets/img/nome-imagem.jpg`
3. Confirme que as imagens existem na pasta correta
4. Verifique maiúsculas/minúsculas nos nomes dos arquivos

## 🔄 Atualizações Futuras

Ideias para melhorias:

- [ ] Galeria de projetos/portfólio
- [ ] Integração com formulário real (Formspree)
- [ ] Blog com artigos sobre reformas
- [ ] Depoimentos de clientes com fotos
- [ ] Calculadora de orçamento
- [ ] Chat ao vivo
- [ ] Vídeos institucionais

## 📞 Suporte

Para dúvidas sobre manutenção do site:

1. Consulte a documentação do [GitHub Pages](https://docs.github.com/pt/pages)
2. Veja tutoriais sobre HTML, CSS e JavaScript no [MDN Web Docs](https://developer.mozilla.org/pt-BR/)
3. Use o [W3C Validator](https://validator.w3.org/) para validar seu HTML

## 📄 Licença

Este projeto é um template customizado para Total Home Improvements.

---

**Desenvolvido com ❤️ para Total Home Improvements**

*Última atualização: Novembro 2024*
