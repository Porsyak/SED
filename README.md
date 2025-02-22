## Тест работы push 
## Запуск сервера

***Перед запуском сервера настройте базу (описание настройки внизу)***

1. Необходима InteliJ IDEA
2. Копируем репозиторий.
3. Запускаем через IDEA.
4. Жмем зеленый треугольник.
	1. На этом этапе может быть ошибка в том что треугольника нет. Скорее всго нужно просто подождать пока Idea распознает полностью проект.
	2. Но если распознование закончилось, а треугольник не появился, то:
	3. Находим файл SpringBootJspApplication.java (Backend\src\main\java\com\unesco\core\SpringBootJspApplication.java).
	4. Жмем по нему ПКМ и выбираем "Run 'SpringBootJspApplication'".
5. Проект запущен.

### База Данных

Для проекта необходима база данных PostgreSQL. Если хотите использовать ее локально то:

1. Создаем базу с названием unesco (можно другое)
2. Указываем настройки подключения в файле [application.yml](Backend\src\main\resources\application.development.yml) и в файле
[application.development.yml](Backend\src\main\resources\application.yml)
3. Файл выглядеть должен примерно так:
```
spring:
  jpa:
    database: POSTGRESQL
    show-sql: false
    hibernate:
      ddl-auto: none
  datasource:
    url: jdbc:postgresql://localhost:5432/unesco
    username: postgres
    password: postgres
    driverClassName: org.postgresql.Driver
  http:
    multipart:
      max-file-size: 50Mb
      max-request-size: 50Mb
```

### Работа с миграциями

- Все миграции хранятся в папке проекта - SED\Backend\src\main\resources\db\migration
- Миграции именуются в виде:
   ```
   V1__Base_version.sql
   ```
- О том, как верно называть миграции можно прочитать по ссылке ниже.
- Миграции запускаются автоматически при старте проекта, если еще не были применены.

Дополнительная информация для создания миграций указана здесь: https://flywaydb.org/documentation/migrations.
Для миграций используется инструмент [FlyWay](https://flywaydb.org/).

## Запуск фронтендовой части на Angular
 1. Запускаем cmd, переходим в папку проекта (./SED), и выполняем:
    ```
        stang
    ```

### Установка Angular (Выполнять только при первом запуске)

1. Качаем и устанавливаем Node.js 7.5.0 (Важно, именно такой версии)
2. В cmd вводим node -v & npm –v. Должно вывести вот так:
```aidl
> node -v & npm –v
v7.10.0
4.2.0
```
3. Далее преходим в папку с Angular (SED\Frontend)
4. Прописываем команду:
```aidl
> npm install
```
5. Начнётся загрузка и установка.
6. После загрузки можно проверить что все в порядке. (вывод будет примерно таким):
```aidl
> ng –v
@angular/cli: 1.0.3
node: 7.10.0
os: win32 x64
```
7. Далее запускаем проект
8. Ангуляр запустится на порту localhost:4200)

### Возможные ошибки при установке Angular

Если при установке возникают ошибки то пробуем такое:
Все команды желательнло в cmd от админа:
Сначала.
```aidl
> npm install —global —production windows-build-tools 
```
Потом
```aidl
> npm install -g node-gyp 
```
Скачать GTK для Windows, распаковать содержимое архива в папку C:/GTK.

### Сборка перед загрузкой на сервер

1. Ззапустить файл makeBuild.bat
2. новая сборка окажется в папке SED\LastBuild\unesco.war.

### Возможные ошибки:

1. Не установдлен gulp:
 Для исправление выполнить команду в консоли:
 ```aidl
 > npm install -g node-gyp 
 ```

2. Не встановлена переменная JAVA_HOME указать переменную к сдк в Мой компьютер -> Свойства -> Дополнительные параметры системы -> Переменные среды -> Системные переменные -> Создать:
Имя переменной: JAVA_HOME
Значение переменной: <ваш путь до java jdk (например: 'C:\Progra~1\Java\jdk1.8.0_171')>


### Ссылки
1. [Node.js 7.5.0](https://nodejs.org/en/download/releases/)
2. [PostgreSQL](https://postgrespro.ru/docs/postgresql)
