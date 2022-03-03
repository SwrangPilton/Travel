import React from 'react'

export default function ReviewGrid() {
    return (
        <>
            <section className="reviewGrid">
                <h1>Customer reviews</h1>
                <div className="grid-review">
                    <div className="grid-review-item">
                        <img className="p-3" src="https://yt3.ggpht.com/yti/ANoDKi6S3yy5KWv25nr6pm66O2BuO_BZtwWoawHqkihYxtM=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
                        <div>
                            <article>
                                <header>
                                    <h3>Pilton Swrang</h3>
                                    <strong>⭐⭐⭐⭐</strong>
                                </header>
                                <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
                                rerum assumenda repellendus iure architecto soluta cum!</p>
                                <a className="readmore" href="/">Read More</a>
                            </article>
                        </div>
                    </div>
                    <div className="grid-review-item">
                        <img className="p-3" src="https://yt3.ggpht.com/yti/ANoDKi6S3yy5KWv25nr6pm66O2BuO_BZtwWoawHqkihYxtM=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
                        <article>
                            <header>
                                <h3>B Basumatary</h3>
                                <strong>⭐⭐⭐⭐</strong>
                            </header>
                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
                            in suscipit consectetur repellat exercitationem cupiditate unde,
                                rerum assumenda repellendus iure architecto soluta cum!</p>
                            <a className="readmore" href="/">Read More</a>
                        </article>
                    </div>
                    <div className="grid-review-item">
                        <img className="p-3" src="https://yt3.ggpht.com/yti/ANoDKi6S3yy5KWv25nr6pm66O2BuO_BZtwWoawHqkihYxtM=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
                        <article>
                            <header>
                                <h3>Brahma Pil</h3>
                                <strong>⭐⭐⭐⭐</strong>
                            </header>
                            <p className="mt-3">Lorem ipsumctetur adipisicing elit. Provident,
                                rerum assumenda repellendus iure architecto soluta cum!</p>
                            <a className="readmore" href="">Read More</a>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
