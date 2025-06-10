<template>
  <div class="modern-wedding-site">
    <!-- Trái tim bay -->
    <!-- <div id="floating-hearts"></div> -->

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark" style="background-color: #4848489e">
  <div class="container">
    <a class="navbar-brand fw-bold" style="font-family: 'Great Vibes', cursive" href="#">V ♥️ H</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#about">Cặp Đôi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#cautruyen">Câu Chuyện</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#events">Sự Kiện</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#gallery">Thư Viện Ảnh</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#qr">RSVP</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <!-- Hero Section -->
    <section class="hero d-flex align-items-center justify-content-center text-center">
      <div class="container">
        <h1 class="display-2 fw-bold section-title" data-aos="fade-down">
          Chử Viên & Phạm Hân
        </h1>
        <p class="lead" data-aos="fade-up" data-aos-delay="300">
          July 5th, 2025
        </p>
        <img class="hero-divider mt-4" src="/img/icon/laurel-1.png" alt="Heart" data-aos="zoom-in"
          data-aos-delay="500" />
        <!-- <div class="countdown mt-5" data-aos="fade-up" data-aos-delay="400">
          <h4 class="fw-semibold">Countdown to the Wedding</h4>
          <div class="timer d-flex justify-content-center gap-3 mt-2">
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.days }}</div>
              <div class="time-label">Days</div>
            </div>
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.hours }}</div>
              <div class="time-label">Hours</div>
            </div>
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.minutes }}</div>
              <div class="time-label">Minutes</div>
            </div>
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.seconds }}</div>
              <div class="time-label">Seconds</div>
            </div>
          </div>
        </div> -->
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section bg-light text-center py-5">
      <div class="container">
        <h2 class="section-title" data-aos="fade-up">Cặp Đôi</h2>
        <span>
          Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều cần
          thiết cho chính bạn.</span>
        <div class="row mt-5">
          <div class="col-md-6" data-aos="fade-right">
            <div class="profile-img-wrapper mx-auto mb-3 shadow">
              <img src="/img/ap/DSC02987.jpg" alt="Groom" />
            </div>
            <h3 class="h4">Chử Viên</h3>
            <p class="text-muted">
              <strong> Xin chào mọi người, là mình Viên đây ! </strong> <br />
              <br />
              <i>
                " Công việc hằng ngày của mình gắn liền với máy tính, những dòng
                code và đôi khi là những đêm thức khuya với deadline. Là một
                người khá trầm, mình từng nghĩ cuộc sống cứ thế là đủ... cho đến
                khi gặp em. Từ ngày em bước vào cuộc đời mình, mọi thứ như được
                “lập trình” lại – nhẹ nhàng hơn, vui vẻ hơn và trọn vẹn hơn. Em
                chính là bản nâng cấp tuyệt vời nhất mà cuộc sống đã gửi đến cho
                mình. Hôm nay, mình rất hạnh phúc khi được cùng em bắt đầu một
                chương mới – trở thành người bạn đời, người đồng hành với em
                trong suốt chặng đường phía trước. Cảm ơn gia đình, bạn bè và
                tất cả mọi người đã có mặt trong ngày đặc biệt này. Mình mong sẽ
                luôn nhận được sự yêu thương và chúc phúc từ mọi người cho tụi
                mình."
              </i>
            </p>
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <div class="profile-img-wrapper mx-auto mb-3 shadow">
              <img src="/img/ap/DSC03179.jpg" alt="Bride" />
            </div>
            <h3 class="h4">Phạm Hân</h3>
            <p class="text-muted">
              <strong> Xin chào mọi người, là mình Hân đây ! </strong> <br />
              <br />
              <i>
                " Cuộc sống của mình từng khá giản dị, xoay quanh công việc,
                sách vở và những buổi học tiếng. Cho đến khi mình gặp anh – một
                chàng trai làm IT, ít nói nhưng luôn âm thầm quan tâm và mang
                lại cho mình cảm giác bình yên. Từ những điều nhỏ nhặt nhất, anh
                luôn khiến mình cảm thấy được trân trọng và yêu thương. Và hôm
                nay, mình thật sự hạnh phúc khi được nắm tay anh bước vào một
                hành trình mới – hành trình của sự đồng hành, sẻ chia và trưởng
                thành cùng nhau. Cảm ơn tất cả mọi người đã có mặt hôm nay để
                chứng kiến và chúc phúc cho tụi mình. Mình trân trọng điều đó
                rất nhiều."
              </i>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero2 d-flex align-items-center justify-content-center text-center">
      <div class="container">
        <h1 class="display-2 fw-bold section-title" data-aos="fade-down">
          The big day
        </h1>
        <p class="lead" data-aos="fade-up" data-aos-delay="300">
          July 5th, 2025
        </p>
        <p style="font-size: 15px" data-aos="fade-up" data-aos-delay="300">
          Sau hành trình yêu thương và đồng hành cùng nhau, tụi mình đã quyết
          định nắm tay nhau đi đến một chặng đường mới – chặng đường của gia
          đình. Tụi mình rất hạnh phúc và sẽ trọn vẹn hơn nữa nếu có sự hiện
          diện của gia đình, bạn bè và những người thân yêu để cùng chia sẻ niềm
          vui trong ngày trọng đại này.
        </p>
        <div class="countdown mt-5" data-aos="fade-up" data-aos-delay="400">
          <h4 class="fw-semibold">Countdown to the Wedding</h4>
          <div class="timer d-flex justify-content-center gap-3 mt-2">
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.days }}</div>
              <div class="time-label">Days</div>
            </div>
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.hours }}</div>
              <div class="time-label">Hours</div>
            </div>
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.minutes }}</div>
              <div class="time-label">Minutes</div>
            </div>
            <div class="time-box p-3">
              <div class="time-number">{{ countdown.seconds }}</div>
              <div class="time-label">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Events Section -->

    <section id="cauchuyen" class="section py-5 bg-light">
      <div class="container">
        <h2 class="section-title text-center mb-4" data-aos="fade-up">Câu Chuyện Tình Yêu</h2>
        <p class="lead text-muted text-center mb-5" data-aos="fade-up">
          Tình yêu không phải là điều bạn tìm thấy. Tình yêu là điều tìm thấy bạn.
        </p>

        <div class="timeline">

          <!-- Mốc 1: Ảnh trái, chữ phải -->
          <div class="timeline-item row align-items-center mb-5" data-aos="fade-up">
            <div class="col-md-6">
              <img src="/img/20x30/DSC03731.jpg" alt="Gặp nhau" class="img-fluid rounded-3 shadow-sm" />
            </div>
            <div class="col-md-6" style="text-align: justify;">
              <h5> <strong style="font-family: cursive;"> Bạn có tin vào tình yêu online không?</strong></h5>
              <small class="text-muted">Tháng 7, 2023</small>
              <p class="mt-3">
                Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể thích một người chưa từng gặp
                mặt? Vậy mà giờ đây tôi lại đang như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy
                vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói chuyện với một người xa lạ chưa
                từng quen. Mà nào hay biết, 3 năm sau người ấy lại là chồng mình.
              </p>
            </div>
          </div>

          <!-- Mốc 2: Chữ trái, ảnh phải -->
          <div class="timeline-item row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-up">
            <div class="col-md-6">
              <img src="/img/khung/DSC03285.jpg" alt="Buổi hẹn đầu" class="img-fluid rounded-3 shadow-sm" />
            </div>
            <div class="col-md-6" style="text-align: justify;">
              <h5> <strong style="font-family: cursive;"> Lời tỏ tình dễ thương ^^ </strong></h5>
              <small class="text-muted">Tháng 8, 2023</small>
              <p class="mt-3">
                Ngày ấy, tôi 21! Một mình giữa phố thị nấp tập. Mỗi chiều cuối tuần thường chạy xe vòng quanh qua những
                con phố, len lỏi trong từng dòng người tấp nập. Hay thậm chí là ghé vào một quán cà phê ven đường để
                ngồi đó và cảm nhận về cuộc sống của riêng mình. Đôi khi lạc lõng và hơi cô đơn. Nhưng rồi một ngày đẹp
                trời, người con trai ấy xuất hiện, nắm tay rồi thủ thỉ vào tai: “Hy vọng sau này anh được làm những điều
                ấy cùng em”.
              </p>
            </div>
          </div>

          <!-- Mốc 3: Ảnh trái, chữ phải -->
          <div class="timeline-item row align-items-center mb-5" data-aos="fade-up">
            <div class="col-md-6">
              <img src="/img/khung/chuyendi.jpg" alt="Chuyến đi" class="img-fluid rounded-3 shadow-sm" />
            </div>
            <div class="col-md-6" style="text-align: justify;">
              <h5> <strong style="font-family: cursive;"> Những chuyến đi </strong></h5>
              <small class="text-muted">Tháng 5, 2021</small>
              <p class="mt-3">
                Mỗi chuyến đi là một hành trình khám phá, không chỉ về những địa điểm mới mà còn về chính bản thân mình.
                Những buổi chiều cùng nhau lang thang trên những con đường mới, cùng nhau thưởng thức những món ăn lạ,
                hay đơn giản chỉ là ngồi bên nhau và chia sẻ những câu chuyện cuộc sống. Tất cả đều trở thành những kỷ
                niệm đẹp trong hành trình yêu thương của chúng ta.
              </p>
            </div>
          </div>

          <!-- Mốc 4: Chữ trái, ảnh phải -->
          <div class="timeline-item row align-items-center mb-5 flex-md-row-reverse" data-aos="fade-up">
            <div class="col-md-6">
              <img src="/img/khung/cauhon.jpg" alt="Cầu hôn" class="img-fluid rounded-3 shadow-sm" />
            </div>
            <div class="col-md-6" style="text-align: justify;">
              <h5><strong style="font-family: cursive;"> Ngày anh cầu hôn</strong></h5>
              <small class="text-muted">Tháng 4, 2025</small>
              <p class="mt-3">
                3 năm bên nhau, anh đã dành rất nhiều thời gian để suy nghĩ về tương lai của chúng ta. Anh muốn chắc
                chắn rằng mình đã sẵn sàng để cùng em bước vào một chương mới trong cuộc đời. Ngày hôm đó, anh đã chuẩn
                bị một buổi tối
                tuyệt vời, với ánh nến lung linh và những bản nhạc nhẹ nhàng. Khi anh quỳ gối và đưa ra chiếc nhẫn, em
                đã không thể kìm được nước mắt. Đó là khoảnh khắc mà anh biết rằng mình đã sẵn sàng để cùng em xây dựng
                một gia đình hạnh phúc.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
    <section id="events" class="section py-5 bg-light">
      <div class="container text-center">
        <h2 class="section-title" data-aos="fade-up">Sự Kiện Cưới</h2>
        <p class="lead text-muted mb-4">
          Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm
          cho chuyến đi đáng giá.
        </p>
        <div class="row mt-5">
          <!-- Tiệc Nhà Trai -->
          <div class="col-md-6 mb-4" data-aos="fade-right">
            <div class="event-box shadow p-4 bg-white rounded">
              <img
                src="https://png.pngtree.com/background/20230606/original/pngtree-banquet-wedding-table-setting-on-evening-reception-photo-picture-image_2889398.jpg"
                class="img-fluid rounded mb-3" alt="Tiệc nhà trai" />
              <h4 class="mb-2">Tiệc Nhà Trai</h4>
              <p>
                <i class="fas fa-calendar-alt me-2 text-primary"></i>Ngày
                04/07/2025 | 16:00
              </p>
              <p>
                <i class="fas fa-map-marker-alt me-2 text-danger"></i>Số nhà 30
                - Xóm Chùa Dộc - Thôn Đại - Xã Phụng Công - Văn Giang - Hưng Yên
              </p>
              <a class="btn btn-outline-primary mt-2" href="https://maps.app.goo.gl/irJGHqqyu6Q8xrQC7" target="_blank">
                Xem Bản Đồ Nhà Trai
              </a>
            </div>
          </div>
          <div class="col-md-6 mb-4" data-aos="fade-right">
            <div class="event-box shadow p-4 bg-white rounded">
              <img src="/img/khung/DSC03285.jpg" class="img-fluid rounded mb-3" alt="Tiệc nhà trai" />
              <h4 class="mb-2">Lễ Thành Hôn</h4>
              <p>
                <i class="fas fa-calendar-alt me-2 text-primary"></i>Ngày
                05/07/2025 | 10:00
              </p>
              <p>
                <i class="fas fa-map-marker-alt me-2 text-danger"></i>Số nhà 30
                - Xóm Chùa Dộc - Thôn Đại - Xã Phụng Công - Văn Giang - Hưng Yên
              </p>
              <a class="btn btn-outline-primary mt-2" href="https://maps.app.goo.gl/irJGHqqyu6Q8xrQC7" target="_blank">
                Xem Bản Đồ Nhà Trai
              </a>
            </div>
          </div>

          <!-- Tiệc Nhà Gái -->
          <div class="col-md-6 mb-4" data-aos="fade-left">
            <div class="event-box shadow p-4 bg-white rounded">
              <img
                src="https://png.pngtree.com/thumb_back/fw800/background/20220503/pngtree-table-at-a-wedding-feast-reception-wedding-party-wedding-table-photo-image_36278392.jpg"
                class="img-fluid rounded mb-3" alt="Tiệc nhà gái" />
              <h4 class="mb-2">Tiệc Nhà Gái</h4>
              <p>
                <i class="fas fa-calendar-alt me-2 text-primary"></i>Ngày
                04/07/2025 | 16:00
              </p>
              <p>
                <i class="fas fa-map-marker-alt me-2 text-danger"></i>Thôn Nhân
                Vũ - Xã Nguyễn Trãi - Ân Thi - Hưng Yên
              </p>
              <a class="btn btn-outline-danger mt-2" href="https://maps.app.goo.gl/c6WHRaDELvzDgRbs9" target="_blank">
                Xem Bản Đồ Nhà Gái
              </a>
            </div>
          </div>
          <div class="col-md-6 mb-4" data-aos="fade-left">
            <div class="event-box shadow p-4 bg-white rounded">
              <img src="/img/khung/DSC03022.jpg" class="img-fluid rounded mb-3" alt="Tiệc nhà gái" />
              <h4 class="mb-2">Lễ Vu Quy</h4>
              <p>
                <i class="fas fa-calendar-alt me-2 text-primary"></i>Ngày
                05/07/2025 | 08:00
              </p>
              <p>
                <i class="fas fa-map-marker-alt me-2 text-danger"></i>Thôn Nhân
                Vũ - Xã Nguyễn Trãi - Ân Thi - Hưng Yên
              </p>
              <a class="btn btn-outline-danger mt-2" href="https://maps.app.goo.gl/c6WHRaDELvzDgRbs9" target="_blank">
                Xem Bản Đồ Nhà Gái
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section id="gallery" class="section bg-light py-5">
      <div class="container text-center">
        <h2 class="section-title mb-5" data-aos="fade-up">Album Hình Cưới</h2>

        <div class="masonry">
          <div class="masonry-item" v-for="(image, index) in albumImages" :key="index" data-aos="zoom-in"
  :data-aos-delay="index * 100" @click="openImageModal(image)">
  <img :src="image" class="img-fluid rounded shadow-sm" :alt="`Ảnh cưới ${index + 1}`" />
</div>
        </div>
      </div>
    </section>
    <div v-if="selectedImage" class="image-modal" @click="closeModal">
  <img :src="selectedImage" class="modal-image" />
</div>
    <section id="qr" class="hero3 d-flex align-items-center justify-content-center text-center">
      <div class="container">
        <h1 class="display-2 fw-bold section-title" data-aos="fade-down">
          --Forever one love--
        </h1>
        <p class="lead" data-aos="fade-up" data-aos-delay="300">
          July 5th, 2025
        </p>
        <p style="font-size: 15px" data-aos="fade-up" data-aos-delay="300">
          ...tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn chằm chằm về cùng một hướng...
        </p>

      </div>
    </section>
    <!-- RSVP Section -->
    <section id="qr-code" class="section py-5 bg-light">
      <div class="container text-center">
        <h2 class="section-title" data-aos="fade-up">Mã QR Chuyển Khoản</h2>
        <p class="lead text-muted mb-5">
          Quý khách có thể gửi lời chúc và mừng cưới qua mã QR dưới đây.
        </p>

        <div class="row justify-content-center">
          <!-- Nhà trai -->
          <div class="col-md-5 mb-4" data-aos="fade-right">
            <div class="card shadow-sm border-0 p-3">
              <h5 class="mb-3">Ngân Hàng Nhà Trai</h5>
              <img src="/img/khung/vbbank.jpg" alt="QR nhà trai" class="img-fluid rounded mb-2" />
              <p class="mb-0"><strong>Chủ TK:</strong> Chử Văn Viên</p>
              <p class="mb-0"><strong>Số TK:</strong> 899081099</p>
              <p><strong>Ngân hàng:</strong> VPbank</p>
            </div>
          </div>

          <!-- Nhà gái -->
          <div class="col-md-5 mb-4" data-aos="fade-left">
            <div class="card shadow-sm border-0 p-3">
              <h5 class="mb-3">Ngân Hàng Nhà Gái</h5>
              <img src="/img/khung/tpbank.jpg" alt="QR nhà gái" class="img-fluid rounded mb-2" />
              <p class="mb-0"><strong>Chủ TK:</strong> Phạm Thị Hân</p>
              <p class="mb-0"><strong>Số TK:</strong> 05786498888</p>
              <p><strong>Ngân hàng:</strong> TPBank</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="footer text-center py-4">
      <p class="mb-1">&copy; 2025 Chử Viên & Phạm Hân</p>
      <p class="small text-muted">Crafted with love and elegance</p>
    </footer>
  </div>
  <div class="floating-music-button" @click="toggleMusic">
  <i :class="isMusicPlaying ? 'fas fa-volume-up' : 'fas fa-volume-mute'"></i>
</div>
</template>

<script>
import { albumImages } from '@/assets/js/imgUrl';

export default {
  data() {
    return {
      rsvp: { name: "", attending: "" },
      successMsg: "",
      countdown: {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      },
      targetDate: new Date("2025-07-05T00:00:00"),
      albumImages: albumImages,
      isMusicPlaying: false,
      audio: null,
      selectedImage: null,
    };
  },
  methods: {
    openImageModal(image) {
    this.selectedImage = image; // Gán ảnh được chọn vào `selectedImage`
  },
  closeModal() {
    this.selectedImage = null; // Đóng modal bằng cách đặt `selectedImage` về null
  },
    updateCountdown() {
      const now = new Date();
      const diff = this.targetDate - now;

      if (diff <= 0) {
        this.countdown = {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      this.countdown = {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      };
    },
    submitRsvp() {
      this.successMsg = "";
      setTimeout(() => {
        this.successMsg = `Thank you, ${this.rsvp.name}. RSVP received!`;
        this.rsvp = { name: "", attending: "" };
      }, 1500);
    },
    onScroll() {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    },
    toggleMusic() {
    if (!this.audio) {
      this.audio = new Audio('/audio/audio.m4a'); // Thay đường dẫn bằng file nhạc của bạn
      this.audio.loop = true;
    }
    if (this.isMusicPlaying) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
    this.isMusicPlaying = !this.isMusicPlaying;
  },
    // launchHearts() {
    //   setInterval(() => {
    //     const heart = document.createElement("div");
    //     heart.className = "heart";
    //     heart.style.left = `${Math.random() * 100}vw`;
    //     heart.style.bottom = "0";
    //     heart.style.animationDuration = `${4 + Math.random() * 4}s`;
    //     heart.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 80%)`;
    //     document.getElementById("floating-hearts").appendChild(heart);
    //     setTimeout(() => heart.remove(), 8000);
    //   }, 500);
    // },
  },
  mounted() {
    this.updateCountdown();
    this.timerInterval = setInterval(this.updateCountdown, 1000);
    window.addEventListener("scroll", this.onScroll);
    // this.launchHearts();
  },
  beforeUnmount() {
    clearInterval(this.timerInterval);

    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@400;600&display=swap");

:root {
  --rose-gold: #b76e79;
  --blush: #f9e1e0;
  --wine: #6e1f2b;
  --cream: #fffaf3;
  --text-dark: #3b2c35;
}

html {
  scroll-behavior: smooth;
}

body,
.modern-wedding-site {
  font-family: "Montserrat", sans-serif;
  background-color: var(--cream);
  color: var(--text-dark);
}

.masonry {
  column-count: 3;
  column-gap: 15px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 15px;
}

.masonry-item img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.masonry-item img:hover {
  transform: scale(1.03);
}

@media (max-width: 992px) {
  .masonry {
    column-count: 2;
  }
}

@media (max-width: 576px) {
  .masonry {
    column-count: 1;
  }
}
.floating-music-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #d63384;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.3s ease;
}

.floating-music-button:hover {
  transform: scale(1.1);
}

.floating-music-button i {
  font-size: 24px;
}
.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  height: 100%;
  width: 4px;
  background-color: #dee2e6;
  transform: translateX(-50%);
}

.timeline-item {
  margin-bottom: 4rem;
}

.timeline-item.left {
  left: 0;
  text-align: right;
}

.timeline-item.right {
  left: 50%;
}

.timeline-content {
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.timeline-item img {
  max-width: 100%;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 8px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 2rem;
    text-align: left;
  }

  .timeline-item.left,
  .timeline-item.right {
    left: 0;
  }
}

.navbar {
  background-color: var(--cream);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background-color: white !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.profile-img-wrapper {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #fff;
}

.profile-img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.hero {
  background: linear-gradient(rgba(110, 31, 43, 0.3), rgba(0, 0, 0, 0.6)),
    url("http://192.168.51.110:8080/img/khung/DSC03266.jpg") center/cover no-repeat;
  height: 150vh;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.hero-divider {
  width: 80px;
}

.hero2 {
  background: linear-gradient(rgba(110, 31, 43, 0.3), rgba(0, 0, 0, 0.6)),
    url("http://192.168.51.110:8080/img/khung/DSC03760.jpg") center/cover no-repeat;
  height: 60vh;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.hero2-divider {
  width: 80px;
}

.hero3 {
  background: linear-gradient(rgba(110, 31, 43, 0.3), rgba(0, 0, 0, 0.6)),
    url("http://192.168.51.110:8080/img/khung/DSC03022.jpg") center/cover no-repeat;
  height: 30vh;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.hero3-divider {
  width: 80px;
}

.section-title {
  font-family: "Great Vibes", cursive;
  font-size: 3.2rem;
  color: var(--rose-gold);
}

.section {
  padding: 4rem 0;
}

.rsvp-section {
  background: linear-gradient(to right, var(--wine), var(--rose-gold));
}

.rsvp-form input,
.rsvp-form select {
  border-radius: 0.3rem;
  border: 2px solid var(--rose-gold);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.btn-outline-light {
  border-color: var(--blush);
  color: var(--blush);
  transition: 0.3s ease;
}

.btn-outline-light:hover {
  background-color: var(--blush);
  color: var(--wine);
}

.footer {
  background-color: #fff0e6;
  color: var(--wine);
  font-size: 0.875rem;
}

.event-box img {
  max-height: 200px;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
}

.event-box h4 {
  font-weight: bold;
  color: #d63384;
}

.event-box p {
  margin: 5px 0;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: scale(1.05);
}
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
#floating-hearts {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.heart {
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: var(--rose-gold);
  transform: rotate(45deg);
  animation: floatHeart 6s ease-in-out infinite;
  opacity: 0.85;
}

.heart::before,
.heart::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  background-color: var(--blush);
  border-radius: 50%;
}

.heart::before {
  top: -12px;
  left: 0;
}

.heart::after {
  left: -12px;
  top: 0;
}

@keyframes floatHeart {
  0% {
    transform: translateY(0) scale(1) rotate(45deg);
    opacity: 1;
  }

  100% {
    transform: translateY(-100vh) scale(1.5) rotate(45deg);
    opacity: 0;
  }
}
</style>
