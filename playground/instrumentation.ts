export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { registerNextDevTools } = await import('@sitera-dev/next-devtools/server');
    registerNextDevTools();
  }
}
