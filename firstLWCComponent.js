import { LightningElement, api } from 'lwc';

export default class FirstLWCComponent extends LightningElement {
        
    Message = 'private message';
    @api recordId; //use @api to get the data from outside the lwc component recordid variable used to store current record id
}