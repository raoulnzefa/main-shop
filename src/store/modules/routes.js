// Перезаписать потом данные в БД
export default {
  state: {
    routes: {
      catalog: {
        code: 'catalog',
        path: '/catalog',
        name: 'Catalog',
        content: 9
      },
      delivery: {
        code: 'delivery',
        path: '/delivery',
        name: 'Delivery',
        content: `<p>Разместите на этой странице информацию с описанием способов доставки, которые использует ваш интернет-магазин.</p><p><strong><em>Например:</em></strong></p><p>Наш интернет-магазин осуществляет доставку по Москве и регионам России:</p><ol><li>Курьерская доставка по Москве — 200 руб.&nbsp;</li><li>Самовывоз из нашего пункта выдачи или розничного магазина – бесплатно!</li><li>Почтовая доставка по России — от 150 руб. в зависимости от адреса доставки.</li></ol><p>Сроки доставки:</p><ol><li>Курьерская доставка по Москве – на следующий день</li><li>Самовывоз – на следующий день</li><li>Почтовая доставка по России – от 3 до 14 дней в зависимости от региона</li></ol><p><strong>Доставка осуществляется бесплатно при сумме заказа более 7000 рублей.</strong></p><p>----</p><p><em>Эту страницу можно отредактировать в бэк-офисе сайта в разделе <a rel="noopener noreferrer" href="/admin2/pages" target="_blank">Меню и страницы</a>.</em></p><p><em>Подробнее о создании текстовых страниц и меню, читайте в документации:&nbsp;<a rel="noopener noreferrer" href="https://www.insales.ru/collection/doc-settings/product/razdel-menyu" target="_blank">https://www.insales.ru/collection/doc-settings/product/razdel-menyu</a></em></p><p><em>Настроить расчёт стоимости доставки при оформлении заказа можно настроить в разделе <a rel="noopener noreferrer" href="/admin2/delivery_variants" target="_blank">Настройки -&gt; Доставка</a>.<br></em></p><p><em>Подробнее о настройке способов доставки, читайте в документации:&nbsp;<a rel="noopener noreferrer" href="https://www.insales.ru/collection/doc-delivery/product/dostavka" target="_blank">https://www.insales.ru/collection/doc-delivery/product/dostavka</a></em></p>`
      },
      about: {
        code: 'about',
        path: '/about',
        name: 'About',
        content: 9
      },
      contacts: {
        code: 'contacts',
        path: '/contacts',
        name: 'Contacts',
        content: 9
      },
      payment: {
        code: 'payment',
        path: '/payment',
        name: 'Payment',
        content: 9
      },
      news: {
        code: 'news',
        path: '/news',
        name: 'News',
        content: 9
      }
    }
  },
  actions: {
    curentPageDataAction(ctx, page) {
      ctx.commit('curentPageData', page);
    }
  },
  mutations: {
    curentPageDataMutation(state, page) {
      
      console.log(state);
      console.log(page);
    }
  },
  getters: {
    getDataPages: state => filter => {
      const keysToFilterOut = filter;
      const filteredObj = Object.fromEntries(
        Object.entries(state.routes).map(
          ([key, value]) => [key, Object.fromEntries(
            Object.entries(value).filter(
              ([subkey]) => keysToFilterOut.includes(subkey)
            )
          )]
        )
      );
      return filteredObj;
    },
    curentPageData: state => page => {
      return state.routes[page];
   }
  }
};

