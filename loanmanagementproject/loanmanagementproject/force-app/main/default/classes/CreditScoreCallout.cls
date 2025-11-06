public with sharing class CreditScoreCallout {
    @future(callout=true)
    public static void getCreditScore(String applicantName) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:CreditScoreService/posts/1'); // Dummy API
        req.setMethod('GET');

        Http http = new Http();
        HttpResponse res = http.send(req);

        if(res.getStatusCode() == 200){
            System.debug('Response: ' + res.getBody());
        } else {
            System.debug('Failed with status: ' + res.getStatus());
        }
    }
}
