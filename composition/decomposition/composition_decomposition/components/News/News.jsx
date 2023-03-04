function News(menuItems, news) {
    // компонент устанавливливает состояние выбранного пункта меню
    // передает список пунктов меню, выбранный пункт, обработчик в NewsMenu
    // передает список новостей в NewsList
    return (
        <div>
            <NewsMenu items={menuItems} selectedItem={selected} onSelectedItem={handleSelect}/>
            <NewsList news={news}/>
        </div>
    )
}