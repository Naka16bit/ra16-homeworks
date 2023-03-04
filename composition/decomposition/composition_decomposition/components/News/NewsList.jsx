function NewsList(news) {
    //компонент отражает список новостей
    return (
        <div>
                {news.map((item) => (
                    <NewsItem key={item.id} agencyLogo={item.logo} newsText={item.text}/>
                ))}
        </div>
    )
}