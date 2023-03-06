// 글을 저장할 배열
let posts = [];

// 글 목록을 보여주는 함수
function showPostList() {
  const postList = document.getElementById('post-list');
  postList.innerHTML = '';

  posts.forEach(function(post, index) {
    const postItem = document.createElement('li');
    postItem.innerHTML = `
      <h3>${post.title}</h3>
      <p>${post.content}</p>
      <button onclick="editPost(${index})">수정</button>
      <button onclick="deletePost(${index})">삭제</button>
    `;
    postList.appendChild(postItem);
  });
}

// 글을 추가하는 함수
function addPost() {
  // 입력한 제목과 내용 가져오기
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  // 새로운 글 객체 생성
  const post = { title, content };

  // 글을 배열에 추가
  posts.push(post);

  // 글 목록 보여주기
  showPostList();

  // 입력 내용 초기화
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
}

// 글을 수정하는 함수
function editPost(index) {
  // 입력 폼의 제목과 내용에 수정할 글의 정보 채우기
  const post = posts[index];
  document.getElementById('title').value = post.title;
  document.getElementById('content').value = post.content;

  // 글을 배열에서 삭제하기
  posts.splice(index, 1);

  // 글 목록 보여주기
  showPostList();
}

// 글을 삭제하는 함수
function deletePost(index) {
  // 글을 배열에서 삭제하기
  posts.splice(index, 1);

  // 글 목록 보여주기
  showPostList();
}

// form submit 이벤트 리스너 등록
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // 기본 이벤트 동작 방지

  // 글 추가 함수 호출
  addPost();
});

// 초기 글 목록 보여주기
showPostList();
