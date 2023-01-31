import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Bookmarks = () => {
  const [bmTitle, setBmTitle] = useState("");
  const [bmLink, setBmLink] = useState("");
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (e) => {
    e.preventDefault();
    setBookmarks((prevBookmarks) => [
      ...prevBookmarks,
      {
        id: uuidv4(),
        bmTitle: bmTitle,
        bmLink: bmLink,
      },
    ]);
  };

  const deleteBookmark = (id) => {
    setBookmarks((prevBookmarks) => prevBookmarks.filter((bm) => bm.id !== id));
    console.log(id);
  };

  return (
    <div className="bookmarks">
      <section className="bookmark-form">
        <div className="card">
          <form onSubmit={addBookmark}>
            <div className="form-control">
              <label htmlFor="">Title</label>
              <input
                id="bmTitle"
                type="text"
                onChange={(e) => setBmTitle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="">URL</label>
              <input
                id="bmLink"
                type="text"
                onChange={(e) => setBmLink(e.target.value)}
              />
            </div>
            <button className="btn-add" type="submit">
              Add Bookmark
            </button>
          </form>
        </div>
      </section>
      <section className="bookmark-list">
        <header>
          <h3>Bookmarks</h3>
        </header>
        <div className="bms-container">
          <ul className="bms-list">
            {bookmarks.map((bm) => (
              <li className="bm-item" key={bm.id}>
                <a href={bm.bmLink}>
                  <img
                    src={
                      "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=" +
                      bm.bmLink +
                      "&size=24"
                    }
                    alt=""
                    className="image"
                  />
                  <span className="bm-title">{bm.bmTitle}</span>
                </a>
                <button
                  className="btn-delete"
                  onClick={() => deleteBookmark(bm.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Bookmarks;
