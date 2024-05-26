# О нашем проекте

В этом проекте представлена информация о танцевальной школе "BALLETTO-SCHOOL", использующей React. Проект создан с помощью [Создать приложение React](https://github.com/facebook/create-react-app) и включает в себя использование Tailwind CSS для стилизации.

## Начало работы

Чтобы запустить локальную копию, выполните следующие простые действия.

### Предварительные требования

Убедитесь, что на вашем локальном компьютере установлено следующее:

- Node.js (версия 12 или выше)
- npm (версия 6 или выше)

### Установка

1. **Клонируйте репозиторий:**

```bash
    git clone https://github.com/authweb/baletto-school.git
    cd baletto-school
```

2. **Установите зависимости:**

```bash
    npm install
```
### Запуск проекта

В каталоге проекта вы можете запустить:

#### `Запуск npm"

Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в своем браузере.

Страница будет перезагружена после внесения изменений.\
Вы также можете увидеть любые ошибки в консоли.

### Дополнительные сценарии

#### `npm run build`

Создает приложение для рабочей среды в папке "build".\
Это корректно связывает React в рабочем режиме и оптимизирует сборку для достижения наилучшей производительности.

Сборка сокращена, а имена файлов содержат хэши.\
Ваше приложение готово к развертыванию!

Дополнительную информацию смотрите в разделе о [deployment](https://facebook.github.io/create-react-app/docs/deployment).

#### `npm run eject`

** Примечание: это односторонняя операция. Выполнив `eject`, вы не сможете вернуться назад!**

Если вас не устраивает инструмент сборки и выбранная конфигурация, вы можете `eject` ее в любое время. Эта команда удалит зависимость от одиночной сборки из вашего проекта.

Вместо этого он скопирует все файлы конфигурации и переходные зависимости (webpack, Babel, ESLint и т.д.) прямо в ваш проект, чтобы вы имели полный контроль над ними. Все команды, кроме `eject`, по-прежнему будут работать, но они будут указывать на скопированные скрипты, чтобы вы могли их настроить. На данный момент вы предоставлены сами себе.

Вам не обязательно использовать `eject`. Специально разработанный набор функций подходит для небольших и средних развертываний, и вы не должны чувствовать себя обязанным использовать эту функцию. Однако мы понимаем, что этот инструмент был бы бесполезен, если бы вы не могли настроить его, когда будете к нему готовы.

## Подробнее

Вы можете узнать больше в [Документации по созданию приложения React](https://facebook.github.io/create-react-app/docs/getting-started).

Чтобы изучить React, ознакомьтесь с [документацией по React](https://reactjs.org/).

### Разделение кода

Этот раздел перенесен сюда: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Анализ размера пакета

Этот раздел перенесен сюда: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Создание прогрессивного веб-приложения

Этот раздел перенесен сюда: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Расширенная настройка

Этот раздел перенесен сюда: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Развертывание

Этот раздел перенесен сюда: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

Этот раздел перенесен сюда: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Использование Tailwind CSS

Мы используем Tailwind CSS для стилизации наших компонентов. Tailwind - это CSS-фреймворк, который предоставляет низкоуровневые классы для создания пользовательских дизайнов. 

### Установка

Чтобы установить Tailwind CSS, выполните следующую команду:

```bash
    npm install tailwindcss
```

### Конфигурация

1. Создайте файл `tailwind.config.js`:

```bash
    npx tailwindcss init
```

2. Настройте пути к вашим шаблонам в `tailwind.config.js`:

```js
    module.exports = {
        purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        darkMode: false, // or 'media' or 'class'
        theme: {
        extend: {},
        },
        variants: {
        extend: {},
        },
        plugins: [],
    }
```

3. Добавьте Tailwind в свой CSS-файл (например, `src/index.css`):

```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
### Использование

Используйте служебные классы Tailwind в своих компонентах React, чтобы придать им необходимый стиль. Например:

```jsx
    <div className="bg-gray-200 p-4 rounded">
        <h4 className="text-xl font-bold mb-4 text-center">Baletto</h4>
    </div>
```

Выполнив эти действия, вы сможете убедиться, что ваш проект настроен и оформлен правильно с использованием Tailwind CSS.