import { useState, useEffect } from 'react'
import { useLazyGetSummaryQuery } from '../services/article'
import link from '../assets/link.svg'

const Demo = () => {
    const [article, setArticle] = useState({
        url: "",
        summary: ""
    })

    const [getSummary, { error, isFetching}] = useLazyGetSummaryQuery()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { data } = await getSummary({ articleUrl: article.url })
        console.log(data)

        if ( data?.summary) {
            const newArticle = { ...article, summary: data.summary }

            setArticle(newArticle)
            
            console.log(newArticle)
        } else {
            console.error("SHITFUCKBALLS")
        }

    }

    return (
        <section className="mt-16 w-full max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form
                    className="relative flex justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <img 
                        src={link}
                        alt="link_icon"
                        className="absolute left-0 my-2 ml-3 w-5"
                    />
                    <input
                        type="url"
                        placeholder="Enter a url"
                        value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        required 
                        className="url_input peer"
                    />
                    <button
                        type="submit"
                        className="submit_btn peer-focus:border-gray-700 peer-foucs:text-gray-700"
                    >
                        <p className="text-xl text-gray-700">↵</p>
                    </button>
                </form>
                {/* Browse URL History */}
                {/* Disply Results */}
            </div>
        </section>
  )
}

export default Demo