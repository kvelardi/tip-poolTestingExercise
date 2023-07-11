describe ("Servers test (with setup and tear-down)", function (){
    // setting up data
    beforeEach (function(){
        billAmtInput.value = '250';
        tipAmtInput.value = '25';
        submitPaymentInfo();
    });

    it ("should add tipAmt and billAmt on sumPaymentTotal", function(){
        expect (sumPaymentTotal('tipAmt')).toEqual(25);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();
        
        expect(sumPaymentTotal('tipAmt')).toEqual(65);
    })

    it ('should add total bill amt of all payments on sumPaymentTotal()', function (){
        expect (sumPaymentTotal('billAmt')).toEqual (250);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect (sumPaymentTotal('billAmt')).toEqual(450);
    });
    
    it('should add total tip percent on sumPaymentTotal()', function (){
        expect (sumPaymentTotal('tipPercent')).toEqual (10);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        
        submitPaymentInfo();
        
        expect(sumPaymentTotal('tipPercent')).toEqual (30);
    })

    it ('should generate new td (tabledata) fr value and append to tr on appendTd (tr, value', function (){
        let newTr = document.createElement('tr');
        
        appendTd (newTr, 'test');

        expect (newTr.children.length).toEqual(1);
        expect (newTr.firstChild.innerHTML).toEqual ('test');
    });

    afterEach(function(){
        //clear out the data from the form
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = "";
        summaryTds [0].innerHTML= '';
        summaryTds[1].innerHTML='';
        summaryTds[2].innerHTML='';
        serverTbody.innerHTML ='',
        allPayments = {};
        paymentId = 0;
    })
})