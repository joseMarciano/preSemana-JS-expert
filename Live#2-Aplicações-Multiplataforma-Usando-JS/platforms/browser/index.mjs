export default class TableWebComponent {


    render(data) {
        const htmlTemplate = this.prepareData(data);
        document.body.insertAdjacentHTML('afterBegin', htmlTemplate);
    }

    prepareData(data) {
        const [firstItem] = data;
        const joinLists = list => list.join('');

        const tHeaders = Object.keys(firstItem)
            .map(text => `<th scope=col>${text}</th>`);

        const tBody = data
            .map(item => Object.values(item))
            .map(item => {
                return item.map(value => `<td>${value}</td>`);
            })
            .map(tds => {
                return `<tr>${joinLists(tds)}</tr>`;
            });

        const template = `
            <table class="table table-light">
                    ${joinLists(tHeaders)}
                <tbody>
                    ${joinLists(tBody)}
                </tbody>
            </table>   
            `

        return template;

    }
}