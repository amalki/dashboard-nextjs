/**
 * @swagger
 * /api/pop:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(_request: Request) {
    // Do whatever you want
    return new Response('Hello motherfucker!', {
      status: 200,
    });
  }