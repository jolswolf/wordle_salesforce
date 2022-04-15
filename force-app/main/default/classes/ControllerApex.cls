public with sharing class ControllerApex {
    @AuraEnabled
    public static string getPalabra(){
        try {
            List<String> palabrasJuego = new List<String>();
            palabrasJuego.add('Casas');
            palabrasJuego.add('Coche');
            palabrasJuego.add('Holas');
            palabrasJuego.add('Motos');
            palabrasJuego.add('Perro');
            
            String palabraCorrecta = '';
            palabraCorrecta = palabrasJuego[(Integer)Math.floor(Math.random() * palabrasJuego.size())];    
            return palabraCorrecta;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
