global _start

section .text

_start:
mov   rax,  1
mov   rdi,  1

mov   r14,  0
mov   r15,  0
mov   r13,  5

_printstar:
mov   rdi,  1
mov   rsi,  star
mov   rdx,  1
syscall

inc   r14
cmp   r14,  r13
jb    _printstar

mov   r14,  0
inc   r15
cmp   r15,  4
ja    _exit

mov   rdi,  1
mov   rsi,  linebreak
mov   rdx,  1
syscall
dec   r13

jmp   _printstar

_exit:
mov   rdi,  1
mov   rsi,  linebreak
mov   rdx,  1
syscall
xor		rdi,	rdi
mov		rax,	60
syscall

section .data
star: db "*"
linebreak: db 10