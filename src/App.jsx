import { useEffect, useState } from "react";
import Chatbot from "./components/chatbot/Chatbot";

const product = {
  image: "https://hwingroup.com/wp-content/uploads/2026/10/10.jpg",
  storyImage: "https://hwingroup.com/wp-content/uploads/2026/09/3-2.png",
  price: "1.160.000đ",
};
const storyGallery = [
  { src: product.storyImage, alt: "Mẹ chăm sóc bé mỗi ngày" },
  { src: product.image, alt: "Nước hồng sâm Chu Chu vị táo lê" },
  {
    src: "https://hwingroup.com/wp-content/uploads/2026/09/z5569970740110_65b1a423d3321dd7876ed59240eade14.jpg",
    alt: "Sản phẩm Chu Chu vị táo lê",
  },
  {
    src: "https://hwingroup.com/wp-content/uploads/2026/09/z5569970736843_6a95bb22cb01ecc6d815b732525754fd-1.jpg",
    alt: "Hồng sâm Chu Chu Hàn Quốc",
  },
];
const benefits = [
  [
    "✦",
    "Hồng sâm 6 năm tuổi",
    "Chiết xuất hồng sâm chất lượng từ Hàn Quốc, hỗ trợ bồi bổ và nâng cao sức khỏe cho bé.",
  ],
  [
    "◒",
    "Vị táo lê tự nhiên",
    "Hương trái cây thanh nhẹ, thơm ngon, át vị đắng nhẹ để bé uống ngon miệng hơn.",
  ],
  [
    "✚",
    "Bổ sung kẽm & vitamin",
    "3,5mg kẽm cùng nhóm vitamin thiết yếu hỗ trợ quá trình chuyển hóa và hấp thu.",
  ],
  [
    "⌁",
    "Gói nhỏ tiện dụng",
    "100ml/gói, dễ mang theo đi học, đi chơi; mẹ chỉ cần xé gói là dùng được ngay.",
  ],
];
const sampleReviews = [
  {
    name: "Mẹ Bống",
    time: "2 ngày trước",
    stars: 5,
    text: "Bé nhà mình khá thích vị táo lê, gói nhỏ tiện mang theo khi đi học. Mẹ sẽ mua thêm cho bé dùng tiếp.",
  },
  {
    name: "Chị Minh Anh",
    time: "5 ngày trước",
    stars: 5,
    text: "Đóng gói đẹp, thông tin rõ ràng. Vị thơm nhẹ, không bị đắng như mình nghĩ.",
  },
  {
    name: "Mẹ Cún",
    time: "1 tuần trước",
    stars: 4,
    text: "Sản phẩm tiện lợi, bé dễ uống. Mình thích nhất là từng gói riêng nên rất dễ chia theo ngày.",
  },
];

function Header() {
  return (
    <>
      <div className="topbar">
        Miễn phí giao hàng toàn quốc cho đơn từ 1.000.000đ <span>·</span> Hàng
        chính hãng từ HWIN
      </div>
      <header className="site-header">
        <a className="logo" href="#top">
          <img
            src="https://hwingroup.com/wp-content/uploads/2026/08/logo-ngang.7795116f.png"
            alt="HWIN Group"
          />
        </a>
        <nav>
          <a href="#benefits">Điểm nổi bật</a>
          <a href="#story">Vì sao mẹ chọn</a>
          <a href="#faq">Hỏi đáp</a>
        </nav>
        <a className="header-phone" href="tel:0968689785">
          ☎ 0968 689 785
        </a>
        <button className="menu-btn" aria-label="Mở menu">
          ☰
        </button>
      </header>
    </>
  );
}
function Hero() {
  return (
    <section className="hero section-wrap">
      <div className="hero-copy">
        <p className="eyebrow">DINH DƯỠNG CHUẨN HÀN · CHO BÉ TỪ 12 THÁNG</p>
        <h1>
          Mỗi ngày một gói,
          <br />
          <em>bé khỏe mẹ vui.</em>
        </h1>
        <p className="lead">
          Hồng sâm Chu Chu vị táo – lê kết hợp hồng sâm 6 năm tuổi cùng vị trái
          cây dễ uống, cho mẹ thêm một lựa chọn dinh dưỡng tiện lợi.
        </p>
        <div className="hero-product-info">
          <div className="hero-price">
            1.160.000 <small>đ / thùng 40 gói</small>
          </div>
          <p>
            Trong 100ml có tới <b>60% hồng sâm nguyên chất</b> và 3,5mg kẽm.
          </p>
          <div className="hero-facts">
            <span>🇰🇷 Hàn Quốc</span>
            <span>100ml/gói</span>
            <span>Seoul Milk</span>
          </div>
        </div>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#order">
            Đặt hàng ngay <span>→</span>
          </a>
          <a className="text-link" href="#benefits">
            Khám phá sản phẩm ↓
          </a>
        </div>
        <div className="trust-row">
          <span>✓ Chính hãng Hàn Quốc</span>
          <span>✓ Đổi trả minh bạch</span>
          <span>✓ Tư vấn tận tâm</span>
        </div>
      </div>
      <div className="hero-visual">
        <div className="blob" />
        <div className="badge">
          60%
          <small>
            hồng sâm
            <br />
            nguyên chất
          </small>
        </div>
        <img
          className="product-img"
          src={product.image}
          alt="Nước hồng sâm Chu Chu vị táo lê"
        />
        <span className="floating fruit fruit-apple">🍎</span>
        <span className="floating fruit fruit-pear">🍐</span>
        <div className="visual-caption">
          Vị táo · lê
          <br />
          <b>thơm ngon dễ uống</b>
        </div>
      </div>
    </section>
  );
}
function Stats() {
  return (
    <section className="stats">
      <div>
        <strong>60%</strong>
        <span>
          hồng sâm
          <br />
          nguyên chất
        </span>
      </div>
      <div>
        <strong>3.5mg</strong>
        <span>
          kẽm trong
          <br />
          mỗi 100ml
        </span>
      </div>
      <div>
        <strong>40</strong>
        <span>
          gói tiện lợi
          <br />
          mỗi thùng
        </span>
      </div>
      <div>
        <strong>12+</strong>
        <span>
          tháng tuổi
          <br />
          có thể sử dụng
        </span>
      </div>
    </section>
  );
}
function Benefits() {
  return (
    <section id="benefits" className="section-wrap benefits">
      <div className="section-heading">
        <p className="eyebrow">BÊN TRONG MỖI GÓI CHU CHU</p>
        <h2>
          Dinh dưỡng tốt,
          <br />
          <em>vị ngon bé thích.</em>
        </h2>
        <p>
          Không còn vị đắng khó uống của sâm. Chu Chu cân bằng hồng sâm với táo
          và lê tự nhiên để bé dễ dàng làm quen và duy trì thói quen mỗi ngày.
        </p>
      </div>
      <div className="benefit-grid">
        {benefits.map(([icon, title, copy]) => (
          <article key={title}>
            <span className="icon">{icon}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
function Story() {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <section id="story" className="story section-wrap">
      <div className="story-gallery">
        <div className="story-image">
          <img
            src={storyGallery[activeImage].src}
            alt={storyGallery[activeImage].alt}
          />
          <div className="image-note">
            Chăm bé khỏe
            <br />
            <b>từ điều nhỏ nhất</b>
          </div>
        </div>
        <div className="story-thumbs" aria-label="Chọn ảnh sản phẩm">
          {storyGallery.map((item, index) => (
            <button
              key={item.src}
              className={index === activeImage ? "active" : ""}
              onClick={() => setActiveImage(index)}
              aria-label={`Xem ảnh ${index + 1}`}
            >
              <img src={item.src} alt="" />
            </button>
          ))}
        </div>
      </div>
      <div className="story-copy">
        <p className="eyebrow">MẸ AN TÂM, BÉ HỨNG KHỞI</p>
        <h2>
          Thêm một lựa chọn
          <br />
          <em>cho hành trình lớn khôn.</em>
        </h2>
        <p>
          Chu Chu đồng hành cùng mẹ trong những ngày bé biếng ăn, hay ốm vặt
          hoặc cần bổ sung dinh dưỡng sau khi bệnh. Một gói nhỏ, một vị ngon,
          thêm một thói quen tốt mỗi ngày.
        </p>
        <ul>
          <li>
            <b>01</b>
            <span>Hỗ trợ bé ăn ngon, hấp thu tốt hơn</span>
          </li>
          <li>
            <b>02</b>
            <span>Hỗ trợ sức đề kháng và phục hồi sức khỏe</span>
          </li>
          <li>
            <b>03</b>
            <span>Phù hợp cho bé từ 12 tháng tuổi trở lên</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
function Reviews() {
  return (
    <section className="reviews section-wrap">
      <div className="reviews-heading">
        <p className="eyebrow">CẢM NHẬN TỪ KHÁCH HÀNG</p>
        <h2>
          Mẹ chia sẻ,
          <br />
          <em>HWIN lắng nghe.</em>
        </h2>
        <a
          className="outline-btn"
          href="https://hwingroup.com/"
          target="_blank"
          rel="noreferrer"
        >
          Xem thêm sản phẩm khác <span>↗</span>
        </a>
      </div>
      <div className="reviews-content">
        <div className="reviews-card">
          <div className="rating-score">
            <strong>4.7</strong>
            <div className="stars" aria-label="4.7 trên 5 sao">
              ★ ★ ★ ★ ★
            </div>
            <span>3 đánh giá mẫu</span>
          </div>
          <div className="review-divider" />
          <div className="review-empty">
            <span className="review-icon">♡</span>
            <h3>Được nhiều mẹ quan tâm</h3>
            <p>Hương vị dễ uống, gói nhỏ tiện lợi cho bé dùng mỗi ngày.</p>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() =>
                document
                  .getElementById("review-form")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Viết đánh giá <span>→</span>
            </button>
          </div>
        </div>
        {/* <div className="sample-note">
          Đánh giá mẫu — sẽ thay bằng phản hồi thực tế sau khi có đơn hàng
        </div> */}
        <div className="sample-reviews">
          {sampleReviews.map((review) => (
            <article className="sample-review" key={review.name}>
              <div className="sample-review-top">
                <strong>{review.name}</strong>
                <span>{review.time}</span>
              </div>
              <div className="sample-stars">
                {"★".repeat(review.stars)}
                <i>{"★".repeat(5 - review.stars)}</i>
              </div>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
        <form
          id="review-form"
          className="review-form"
          onSubmit={(e) => {
            e.preventDefault();
            e.currentTarget.reset();
            alert("Cảm ơn bạn đã gửi đánh giá cho HWIN!");
          }}
        >
          <input required placeholder="Tên của bạn" aria-label="Tên của bạn" />
          <select required defaultValue="" aria-label="Số sao">
            <option value="" disabled>
              Chọn số sao
            </option>
            <option value="5">★★★★★ 5 sao</option>
            <option value="4">★★★★☆ 4 sao</option>
            <option value="3">★★★☆☆ 3 sao</option>
          </select>
          <textarea
            required
            placeholder="Chia sẻ trải nghiệm của bạn"
            aria-label="Chia sẻ trải nghiệm của bạn"
          />
          <button className="btn btn-primary" type="submit">
            Gửi đánh giá <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
function Order() {
  const [sent, setSent] = useState(false);
  const [contact, setContact] = useState("phone");
  const [quantity, setQuantity] = useState(1);
  const [retail, setRetail] = useState(false);
  const boxPrice = 1160000;
  const unitPrice = retail ? Math.round(boxPrice / 40) : boxPrice;
  const totalPrice = unitPrice * quantity;
  const formatPrice = (value) => `${value.toLocaleString("vi-VN")}đ`;
  const submitOrder = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const contactValue = contact === "phone" ? form.phone.value.trim() : form.email.value.trim();
    if (!contactValue) return;
    // TODO: kết nối BE sau:
    // https://send-email-project-j6iu.onrender.com/api/send-mail
    setSent(true);
    form.reset();
    setContact("phone");
    setQuantity(1);
    setRetail(false);
  };
  return (
    <section id="order" className="order-section">
      <div className="order-card section-wrap">
        <div>
          <p className="eyebrow">ƯU ĐÃI HÔM NAY TỪ HWIN</p>
          <h2>
            Để Chu Chu chăm bé
            <br />
            <em>mỗi ngày cùng mẹ.</em>
          </h2>
          <p className="order-desc">
            Một thùng gồm 40 gói 100ml · Vị táo lê dễ uống · Nhập khẩu chính
            hãng Hàn Quốc
          </p>
          <div className="price"><span>{formatPrice(totalPrice)}</span><small>/ tổng đơn hàng</small></div>
          <div className="secure">
            🔒 Thanh toán an toàn &nbsp; · &nbsp; 🚚 Giao hàng toàn quốc
          </div>
        </div>
        <form
          className="order-form"
          onSubmit={submitOrder}
        >
          <label>
            Họ và tên
            <input required name="name" placeholder="Nhập tên của bạn" />
          </label>
          <div className="quantity-field"><span>Số lượng {retail ? "gói" : "thùng"}</span><div className="quantity-control"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Giảm số lượng">−</button><input className="quantity-input" name="quantity" type="number" min="1" step="1" value={quantity} onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value, 10) || 1))} aria-label={`Số lượng ${retail ? "gói" : "thùng"}`} /><button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Tăng số lượng">+</button></div></div>
          <label className="retail-toggle"><input type="checkbox" checked={retail} onChange={(e) => { setRetail(e.target.checked); setQuantity(1); }} /> Mua lẻ theo gói <small>({formatPrice(Math.round(boxPrice / 40))} / gói)</small></label>
          <div className="order-total"><span>Đơn giá: <b>{formatPrice(unitPrice)}</b></span><strong>Tổng: {formatPrice(totalPrice)}</strong></div>
          <fieldset className="contact-choice"><legend>HWIN liên hệ qua</legend><label><input type="radio" name="contactType" checked={contact === "phone"} onChange={() => setContact("phone")} /> Số điện thoại</label><label><input type="radio" name="contactType" checked={contact === "email"} onChange={() => setContact("email")} /> Email</label></fieldset>
          {contact === "phone" ? <label>Số điện thoại<input required name="phone" type="tel" placeholder="Nhập số điện thoại" /></label> : <label>Email<input required name="email" type="email" placeholder="Nhập email của bạn" /></label>}
          <button className="btn btn-primary" type="submit">
            Đăng ký nhận hàng <span>→</span>
          </button>
          <p className="form-note">
            {sent
              ? "Đã nhận thông tin. HWIN sẽ liên hệ xác nhận đơn hàng."
              : "Chọn số lượng và cách nhận tư vấn phù hợp với bạn."}
          </p>
        </form>
      </div>
    </section>
  );
}
function FAQ() {
  const items = [
    [
      "Bé bao nhiêu tháng thì dùng được?",
      "Sản phẩm phù hợp cho trẻ từ 12 tháng tuổi trở lên. Mẹ nên dùng theo hướng dẫn trên bao bì và cân nhắc thể trạng riêng của bé.",
    ],
    [
      "Mỗi ngày bé nên uống bao nhiêu gói?",
      "Mẹ có thể cho bé dùng 1 gói/ngày. Không dùng thay thế hoàn toàn chế độ ăn đa dạng của bé.",
    ],
    [
      "Bảo quản sản phẩm như thế nào?",
      "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Sau khi mở gói nên dùng ngay.",
    ],
  ];
  return (
    <section id="faq" className="faq section-wrap">
      <div>
        <p className="eyebrow">GIẢI ĐÁP NHANH</p>
        <h2>
          Mẹ hỏi,
          <br />
          <em>HWIN trả lời.</em>
        </h2>
      </div>
      <div className="faq-list">
        {items.map(([q, a], i) => (
          <details key={q} open={i === 0}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
function Footer() {
  return (
    <>
      <footer>
        <div className="section-wrap footer-inner">
          <div className="footer-brand">
            <img
              src="https://hwingroup.com/wp-content/uploads/2026/08/logo-ngang.7795116f.png"
              alt="HWIN"
            />
            <p>
              Hệ sinh thái sản phẩm nhập khẩu chính hãng,
              <br />
              mang đến cuộc sống chất lượng hơn cho mọi gia đình Việt.
            </p>
          </div>
          <div className="footer-company"><b>CÔNG TY CP TẬP ĐOÀN HWIN</b><p>Số 01 – 9th AVE và số 114 - MARKET STR - SUNRISE I - KĐT The Manor Central Park, P. Định Công, TP Hà Nội<br/>MST: 0110507138<br/>Hotline: <a href="tel:0968689785">0968 689 785</a><br/>Email: <a href="mailto:CeoHwinGroup@gmail.com">CeoHwinGroup@gmail.com</a></p></div>
          <div className="footer-links"><b>VỀ HWIN</b><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Giới thiệu</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Tin tức – Khuyến mãi</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Liên hệ</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Đăng ký đại lý</a></div>
          <div className="footer-links"><b>HỖ TRỢ KHÁCH HÀNG</b><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Đổi trả & hoàn tiền</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Chính sách giao hàng</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Chính sách thanh toán</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Hướng dẫn mua hàng</a></div>
          <div className="footer-links"><b>DANH MỤC</b><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Mẹ & Bé</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Mỹ phẩm</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Thực phẩm chức năng</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Food</a><a href="https://hwingroup.com/" target="_blank" rel="noreferrer">Thời trang</a></div>
          <div className="footer-social"><b>THEO DÕI HWIN</b><p><a href="https://www.facebook.com/hwingroup/" target="_blank" rel="noreferrer">Facebook</a> · <a href="https://www.tiktok.com/@hwinkids" target="_blank" rel="noreferrer">TikTok</a> · <a href="https://shopee.vn/hwingroup" target="_blank" rel="noreferrer">Shopee</a> · <a href="https://www.youtube.com/@HWINVietNam" target="_blank" rel="noreferrer">YouTube</a></p></div>
        </div>
        <div className="copyright">© 2026 HWIN GROUP. All rights reserved.</div>
      </footer>
      <div className="mobile-cta">
        <a href="tel:0968689785">☎ Gọi tư vấn</a>
        <a href="#order">Đặt hàng ngay →</a>
      </div>
    </>
  );
}
function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Lên đầu trang"
    >
      ↑
    </button>
  ) : null;
}
export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Stats />
        <Benefits />
        <Story />
        <Reviews />
        <Order />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
      <Chatbot />
    </>
  );
}
