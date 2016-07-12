export class InMemoryDataService {
    createDb() {
        let news = [
                {
        "Id": "62d64acb-6388-4d7b-9fa0-d2a3ea16fcb5",
        "Title": "Getting started with ASP.NET MVC 6",
        "SlugTitle": "getting-started-with-aspnet-mvc-6",
        "Link": "http://docs.asp.net/en/latest/tutorials/first-mvc-app/start-mvc.html",
        "PublishDate": "2016-04-29T00:00:00"
    },
    {
        "Id": "5ea6a0d0-73aa-4fe3-bd81-3ce2f8790e01",
        "Title": "Getting Started with the Data Protection APIs",
        "SlugTitle": "getting-started-with-the-data-protection-apis",
        "Link": "http://docs.asp.net/en/latest/security/data-protection/using-data-protection.html",
        "PublishDate": "2016-04-27T00:00:00"
    },
    {
        "Id": "4e5f7fe1-f2e2-437d-b576-eed692d0ff79",
        "Title": "Working with Static Files",
        "SlugTitle": "working-with-static-files",
        "Link": "http://docs.asp.net/en/latest/fundamentals/static-files.html",
        "PublishDate": "2016-04-27T00:00:00"
    },
    {
        "Id": "c0516a2e-6d3a-4258-9ba0-d9e56acb7e99",
        "Title": "🔧 Anti-Request Forgery",
        "SlugTitle": "anti-request-forgery",
        "Link": "http://docs.asp.net/en/latest/security/anti-request-forgery.html",
        "PublishDate": "2016-04-27T00:00:00"
    }
        ];

        return {news};
    }
}