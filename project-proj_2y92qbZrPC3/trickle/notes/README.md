# Bom Dia TV - PWA

Este é um aplicativo PWA (Progressive Web App) desenvolvido especificamente para ser instalado em Smart TVs (Android TV) através do navegador ou convertido usando ferramentas como o PWABuilder.

## Funcionalidades
- **100% PWA Compatível**: Possui `manifest.json` configurado para layout em landscape (paisagem) e em tela cheia (fullscreen).
- **Service Worker**: Cache de assets implementado em `sw.js` para garantir funcionamento confiável.
- **Visual Limpo**: Exibe uma imagem relaxante de nascer do sol em alta resolução com a mensagem "Bom dia!".
- **Ícones**: Ícones de alta resolução incluídos no manifesto para aparecer corretamente na grade de aplicativos do sistema.

## Como gerar o APK para Android TV (Sem depender de navegador)

Para que o aplicativo **não dependa de um navegador instalado** na TV e **apareça na grade de aplicativos** (Leanback Launcher), o PWABuilder (que usa Trusted Web Activity - TWA) não é a melhor opção, pois o TWA exige o Google Chrome instalado.

A solução é usar o **Capacitor** (ou Cordova), que embute um motor web interno (WebView) diretamente no APK.

### Passo a passo para gerar o APK (Nuvem - Sem Android Studio):

Como o ambiente web não compila arquivos `.apk` diretamente, criei uma automação usando **GitHub Actions**. O código será compilado na nuvem e você só precisará baixar o arquivo final.

1. Baixe o código fonte deste projeto.
2. Crie um repositório gratuito no [GitHub](https://github.com/) e envie os arquivos para lá.
3. Vá até a aba **"Actions"** no seu repositório do GitHub.
4. O GitHub vai rodar automaticamente o arquivo `.github/workflows/build-apk.yml`. (Se não rodar sozinho, clique em "Build Android TV APK" no menu lateral esquerdo e depois em "Run workflow").
5. Aguarde cerca de 2 a 3 minutos. Quando ficar verde (sucesso), clique no nome da execução.
6. Role a página até o final, na seção **Artifacts**, e baixe o arquivo **BomDiaTV-APK**.
7. Coloque o `.apk` em um pen-drive e instale na sua Android TV. Ele vai aparecer na lista principal de aplicativos da TV!

## Notas Técnicas
- As imagens e assets estão vindo do Unsplash.
- O estilo em tela cheia foi criado usando Tailwind CSS com unidades responsivas (`vw`) para garantir a legibilidade em TVs de diferentes tamanhos à distância.
