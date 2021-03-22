import data from './../database/data.json';
import FluentSQLBuilder from './fluentSQL.js'

const result = FluentSQLBuilder.for(data)
    .where({ registered: /^(2020|2019)/ })
    .where({category: /^(security|developer|quality assurance)/})
    .select(['name', 'company', 'phone', 'category','registered'])
    .orderBy('category')
    .build();

console.table(result);