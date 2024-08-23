import ollama

question = '中美贸易战到底是美国发动的，还是中国发动的？'
a_output = ollama.chat(model='llama3.1', messages=[
  {
    'role': 'user',
    'content': '用中文回答.' + question,
  },
])
print(a_output['message']['content'])
a_output['message']['content'] = question + a_output['message']['content']

# 设定循环次数
num_turns = 100


for i in range(num_turns):
    b_output = ollama.chat(model='gemma2', messages=[
        {
            'role': 'user',
            'content': '用中文回答.' + a_output['message']['content'],
        },
    ])
    print('Gemma said: ' + b_output['message']['content'])
    print('-'*40)
    a_output = ollama.chat(model='llama3.1', messages=[
        {
            'role': 'user',
            'content': '用中文回答.' + b_output['message']['content'],
        },
    ])
    print('Lllama said: ' + a_output['message']['content'])
    print('=' * 40)