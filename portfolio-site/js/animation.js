// Lottie 애니메이션 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM 로드됨");
    
    // DOM 요소 확인
    const blueContainer = document.getElementById('lottie-blue');
    const pinkContainer = document.getElementById('lottie-pink');
    const blueWrapper = document.querySelector('.butterfly-wrapper.left');
    const pinkWrapper = document.querySelector('.butterfly-wrapper.right');
    
    if (!blueContainer || !pinkContainer) {
        console.error("Lottie 컨테이너를 찾을 수 없습니다.");
        return;
    }
    
    if (!blueWrapper || !pinkWrapper) {
        console.error("나비 래퍼를 찾을 수 없습니다.");
        return;
    }
    
    console.log("DOM 요소 확인 완료");
    
    // 현재 도메인 주소 확인 (file:// 프로토콜이면 테스트 애니메이션 사용)
    const isLocalFile = window.location.protocol === 'file:';
    console.log("로컬 파일 여부:", isLocalFile);
    
    // 파란색 나비 애니메이션
    let blueAnimation = null;
    try {
        if (isLocalFile) {
            // 로컬 파일에서 실행 중일 때 간단한 애니메이션 사용
            const blueAnimationData = {
                v: "5.6.0",
                fr: 30,
                ip: 0,
                op: 30,
                w: 300,
                h: 300,
                nm: "Blue Butterfly",
                ddd: 0,
                assets: [],
                layers: [
                    {
                        ddd: 0,
                        ind: 1,
                        ty: 4,
                        nm: "Circle",
                        sr: 1,
                        ks: {
                            o: { a: 0, k: 100 },
                            r: { a: 1, k: [
                                { t: 0, s: [0], e: [360], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 30, s: [360], e: [0], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } }
                            ] },
                            p: { a: 1, k: [
                                { t: 0, s: [150, 150], e: [150, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 15, s: [150, 100], e: [150, 150], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 30, s: [150, 150], e: [150, 150], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } }
                            ] },
                            a: { a: 0, k: [0, 0, 0] },
                            s: { a: 1, k: [
                                { t: 0, s: [100, 100, 100], e: [120, 120, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 15, s: [120, 120, 100], e: [100, 100, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 30, s: [100, 100, 100], e: [100, 100, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } }
                            ] }
                        },
                        ao: 0,
                        shapes: [
                            {
                                ty: "gr",
                                it: [
                                    {
                                        ty: "el",
                                        p: { a: 0, k: [0, 0] },
                                        s: { a: 0, k: [80, 80] },
                                        d: 1,
                                        nm: "Ellipse Path 1",
                                    },
                                    {
                                        ty: "fl",
                                        c: { a: 0, k: [0.176, 0.298, 0.612, 1] },
                                        o: { a: 0, k: 100 },
                                        r: 1,
                                        nm: "Fill 1"
                                    },
                                    {
                                        ty: "tr",
                                        p: { a: 0, k: [0, 0] },
                                        a: { a: 0, k: [0, 0] },
                                        s: { a: 0, k: [100, 100] },
                                        r: { a: 0, k: 0 },
                                        o: { a: 0, k: 100 }
                                    }
                                ]
                            }
                        ],
                        ip: 0,
                        op: 30,
                        st: 0,
                        bm: 0
                    }
                ]
            };
            
            blueAnimation = bodymovin.loadAnimation({
                container: blueContainer,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: blueAnimationData
            });
        } else {
            // 웹 서버에서 실행 중일 때 실제 애니메이션 사용
            blueAnimation = bodymovin.loadAnimation({
                container: blueContainer,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: 'assets/animations/butterfly-blue.json'
            });
        }
        
        console.log("파란색 나비 애니메이션 로드 성공");
        
        // 애니메이션 이벤트 리스너
        blueAnimation.addEventListener('DOMLoaded', function() {
            console.log("파란색 나비 DOMLoaded 이벤트 발생");
        });
        
        blueAnimation.addEventListener('data_ready', function() {
            console.log("파란색 나비 데이터 준비됨");
        });
        
        blueAnimation.addEventListener('error', function(error) {
            console.error("파란색 나비 애니메이션 오류:", error);
        });
    } catch (error) {
        console.error("파란색 나비 애니메이션 초기화 오류:", error);
    }
    
    // 분홍색 나비 애니메이션
    let pinkAnimation = null;
    try {
        if (isLocalFile) {
            // 로컬 파일에서 실행 중일 때 간단한 애니메이션 사용
            const pinkAnimationData = {
                v: "5.6.0",
                fr: 30,
                ip: 0,
                op: 30,
                w: 300,
                h: 300,
                nm: "Pink Butterfly",
                ddd: 0,
                assets: [],
                layers: [
                    {
                        ddd: 0,
                        ind: 1,
                        ty: 4,
                        nm: "Circle",
                        sr: 1,
                        ks: {
                            o: { a: 0, k: 100 },
                            r: { a: 1, k: [
                                { t: 0, s: [0], e: [360], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 30, s: [360], e: [0], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } }
                            ] },
                            p: { a: 1, k: [
                                { t: 0, s: [150, 150], e: [150, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 15, s: [150, 100], e: [150, 150], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 30, s: [150, 150], e: [150, 150], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } }
                            ] },
                            a: { a: 0, k: [0, 0, 0] },
                            s: { a: 1, k: [
                                { t: 0, s: [100, 100, 100], e: [120, 120, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 15, s: [120, 120, 100], e: [100, 100, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } },
                                { t: 30, s: [100, 100, 100], e: [100, 100, 100], i: { x: 0.5, y: 0.5 }, o: { x: 0.5, y: 0.5 } }
                            ] }
                        },
                        ao: 0,
                        shapes: [
                            {
                                ty: "gr",
                                it: [
                                    {
                                        ty: "el",
                                        p: { a: 0, k: [0, 0] },
                                        s: { a: 0, k: [80, 80] },
                                        d: 1,
                                        nm: "Ellipse Path 1",
                                    },
                                    {
                                        ty: "fl",
                                        c: { a: 0, k: [0.84, 0.11, 0.47, 1] },
                                        o: { a: 0, k: 100 },
                                        r: 1,
                                        nm: "Fill 1"
                                    },
                                    {
                                        ty: "tr",
                                        p: { a: 0, k: [0, 0] },
                                        a: { a: 0, k: [0, 0] },
                                        s: { a: 0, k: [100, 100] },
                                        r: { a: 0, k: 0 },
                                        o: { a: 0, k: 100 }
                                    }
                                ]
                            }
                        ],
                        ip: 0,
                        op: 30,
                        st: 0,
                        bm: 0
                    }
                ]
            };
            
            pinkAnimation = bodymovin.loadAnimation({
                container: pinkContainer,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: pinkAnimationData
            });
        } else {
            // 웹 서버에서 실행 중일 때 실제 애니메이션 사용
            pinkAnimation = bodymovin.loadAnimation({
                container: pinkContainer,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                path: 'assets/animations/butterfly-pink.json'
            });
        }
        
        console.log("분홍색 나비 애니메이션 로드 성공");
        
        // 애니메이션 이벤트 리스너
        pinkAnimation.addEventListener('DOMLoaded', function() {
            console.log("분홍색 나비 DOMLoaded 이벤트 발생");
        });
        
        pinkAnimation.addEventListener('data_ready', function() {
            console.log("분홍색 나비 데이터 준비됨");
        });
        
        pinkAnimation.addEventListener('error', function(error) {
            console.error("분홍색 나비 애니메이션 오류:", error);
        });
    } catch (error) {
        console.error("분홍색 나비 애니메이션 초기화 오류:", error);
    }
    
    // 호버 이벤트 리스너
    if (blueAnimation) {
        blueWrapper.addEventListener('mouseenter', function() {
            console.log("파란색 나비 호버");
            blueAnimation.stop();
            blueAnimation.play();
        });
    }
    
    if (pinkAnimation) {
        pinkWrapper.addEventListener('mouseenter', function() {
            console.log("분홍색 나비 호버");
            pinkAnimation.stop();
            pinkAnimation.play();
        });
    }
    
    console.log("애니메이션 및 이벤트 설정 완료");
}); 