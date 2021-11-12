function initData() {
    let div_content = document.getElementById("content");
    for (let i = 0; i < data.loans.length; i++) {
        let item = fillItem(data.loans[i]);

        div_content.append(item);
    }
}

function fillItem(item) {
    let itemContainer = document.createElement('div');
    itemContainer.className = 'item_divs';

    let h3 = document.createElement('h3');
    h3.innerHTML = item.title;

    let span = document.createElement('span');
    span.innerHTML = 'Loan details, amounts and values';
    span.innerHTML = 'Tranche: ' + item.tranche + ' Available: ' + item.available + ' Amount: ' + item.amount;

    let button = document.createElement('button');
    button.innerHTML = 'INVEST';

    button.addEventListener('click', invest);

    itemContainer.append(h3);
    itemContainer.append(span);
    itemContainer.append(button);

    let input = document.createElement('input');
    input.value = item.id;
    input.style.visibility = 'hidden';
    input.id = 'hiddenInputSize';

    itemContainer.append(input);
    return itemContainer;
}

function invest(event) {
    let id = event.target.parentElement.lastElementChild.value;
    let item = '';
    for (let j = 0; j < data.loans.length; j++) {
        if (id === data.loans[j].id) {
            item = data.loans[j];
        }
    }

    let div_paneInvest = document.getElementById('paneInvest');
    div_paneInvest.style.visibility = 'visible';

    let h3 = document.createElement('h3');
    h3.innerHTML = 'Invest in Loan';

    let span = document.createElement('span');
    span.innerHTML = item.title;

    let p_AmountAvailable = document.createElement('p');
    p_AmountAvailable.className = 'pStyle';
    p_AmountAvailable.innerHTML = 'Amount available: ' + item.available;

    let p_loan_ends_in = document.createElement('p');
    p_loan_ends_in.className = 'pStyle';
    p_loan_ends_in.innerHTML = 'Loan ends in: ' + convert_num_to_month_days(item.term_remaining) + ' days';

    let p_invested_emount = document.createElement('p');
    p_invested_emount.className = 'pStyle';
    p_invested_emount.innerHTML = 'Invested amount (£)';

    let div = document.createElement('div');
    let input = document.createElement('input');
    input.id = 'inputId';

    let button = document.createElement('button');
    button.innerHTML = 'INVEST';
    button.id = 'idButton';

    button.addEventListener('click', investMountIncreesing);

    div.append(input);
    div.append(button);

    let divUnderView = document.createElement('div');
    divUnderView.id = 'divUnderView';
    divUnderView.append(h3);
    divUnderView.append(span);
    divUnderView.append(p_AmountAvailable);
    divUnderView.append(p_loan_ends_in);
    divUnderView.append(p_invested_emount);

    divUnderView.append(div);

    div_paneInvest.append(divUnderView);
}

function convert_num_to_month_days(item_num) {
    let sec = item_num;
    let min = sec / 60;
    let hour = min / 60;
    let day = Math.floor(hour / 24);

    return item_num = day;
}

function investMountIncreesing() {

    let data = [];
    const addData = (ev) => {
        ev.preventDefault();
        let savedData = {
            id: Date.now(),
            inputNum: document.getElementById('inputId').value
        }
        data.push(savedData);

        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(movies, '\t', 2);
        localStorage.setItem('MyMovieList', JSON.stringify(data));

    }
    document.addEventListener('DOMContentLoaded', () => {
        document.getElementById('idButton').addEventListener('click', addData);

    });

    let container = document.getElementById('container');
    let content = document.getElementById('content');

    let div_paneInvest = document.getElementById('paneInvest');
    div_paneInvest.style.visibility = 'hidden';


    container.append(div_paneInvest);
    container.append(content);

}


