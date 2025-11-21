public with sharing class AccountsFinder {
    @AuraEnabled(cacheable=true)
    public static List<Account> accountsDisplayer() {
        return [SELECT Id, Name, Phone, Industry FROM Account];
    }
}