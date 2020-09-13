const POSSIBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default class IdGenerator {
    static new(length = 7) {
        var text = '';
        for (var i = 0; i < length; i++)
            text += POSSIBLE_CHARS.charAt(Math.floor(Math.random() * POSSIBLE_CHARS.length));
        return text;
    }
}
