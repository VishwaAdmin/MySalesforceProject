import { LightningElement, wire } from 'lwc';
import accountsDisplayer from '@salesforce/apex/AccountsFinder.accountsDisplayer';

export default class AccountFinderLWC extends LightningElement {
    @wire(accountsDisplayer) accounts;
}