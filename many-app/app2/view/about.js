export class AboutView {
  constructor(router, param) {
    this.router = router;
    this.showPage(param);
  }

  showPage(param) {
    document.body.innerHTML = '';

    const titleElement = document.createElement('div');
    titleElement.textContent = `Страница AboutView в приложении #2`;

    const resourceElement = document.createElement('div');
    resourceElement.textContent = `Параметры переданные из строки браузера - ${param}`;

    const infoPageElement = document.createElement('div');
    infoPageElement.textContent = `Доступные страницы / или /about или /main`;
    const infoParamElement = document.createElement('div');
    infoParamElement.textContent = `После названия страницы можно указать нужный ресурс. Например - /main/needed-param`;

    const pageTextElement = document.createElement('div');
    pageTextElement.textContent = `Введите страницу (без указания репозитория и имени приложения)`;
    const pageInputElement = document.createElement('input');
    pageInputElement.placeholder = 'Введите страницу';
    const buttonElement = document.createElement('button');
    buttonElement.textContent = 'Перейти';
    buttonElement.addEventListener('click', () =>
      this.router.navigate(pageInputElement.value)
    );

    document.body.append(
      titleElement,
      resourceElement,
      infoPageElement,
      infoParamElement,
      pageTextElement,
      pageInputElement,
      buttonElement
    );
  }
}
