module.exports = {
  /* apps 항목은 우리가 pm2에 사용할 옵션을 기재 */
  /* 아래 옵션 중 필요한 것만 쓰면 됩니다. */
  apps: [
    {
      name: 'F&F', // app이름
      script: './index.js', // 실행할 스크립트 파일
      instances: 2, // cpu 코어수 만큼 프로세스 생성 (instance 항목값을 ‘0’으로 설정하면 CPU 코어 수 만큼 프로세스를 생성)
      exec_mode: 'cluster', // 클러스터 모드
      max_memory_restart: '300M', // 프로세스의 메모리가 300MB에 도달하면 reload 실행

      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
