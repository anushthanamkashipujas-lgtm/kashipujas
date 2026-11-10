interface Env {
  GEMINI_API_KEY: string;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  return Response.json({
    status: 'ok',
    service: 'Kashi Anushthan',
    hasGeminiKey: Boolean(env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
};