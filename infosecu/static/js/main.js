$(function() {
  $('#goMain').click(()=>location.href='/')

  $('.login').click(()=>$('#loginModal').modal())
  $('.logout').click(()=>location.href='/logout')

  $('#registerBtn').click(()=>{
    if($('input[name=id]').val().length == 0 || $('input[name=pw]').val().length == 0) return 0

    $('#loginForm').attr('action', '/register')
    $('#loginForm').submit()
  })

  $('#loginBtn').click(()=>{
    if($('input[name=id]').val().length == 0 || $('input[name=pw]').val().length == 0) return 0

    $('#loginForm').attr('action', '/login')
    $('#loginForm').submit()
  })

  const moveContent = function() {
    location.href = `/board/${this.id}`
  }

  const getList = async function(){
    const category = $('#category').val() ?? 'free'
    const data = { category }
    $('#categoryInput').val(category)
    $('#list').empty()

    await $.post(`/board/list`, data, result => {
      result.forEach(x => {
        const li = document.createElement('li')
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
        li.innerText = x.title
        li.id = x.no

        li.onclick = moveContent

        const span = document.createElement('span')
        span.classList.add('badge', 'badge-primary', 'badge-pill')
        span.innerHTML = x.author

        li.appendChild(span)
        
        $('#list').append(li)
      })
    }, 'json')
  }

  $('#category').ready(getList)
  $('#category').change(getList)

  $('#writeBtn').click(()=>$('#writeModal').modal())
  $('#writeSubmit').click(()=>{
    if($('input[name=title]').val().length == 0 || $('textarea[name=content]').val().length == 0) return 0

    $('#writeForm').submit()
  })

  $('#backBtn').click(()=>history.back(-1))

  $('#downloadBtn').click(function(){
    const no = this.value
    window.open(`/board/download/${no}`)
  })
})