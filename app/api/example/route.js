// app/api/example/route.js

export async function GET(req, res) {
    return new Response(JSON.stringify({ name: 'registered' }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}



//export default function handler(req, res){
  //  res.status(200).json({name: 'John Doe'})
    //}