import { ByteReader } from "./ByteReader";
import { AbstractDecoder } from "./Decoder";

export class BytesDecoder extends AbstractDecoder<Uint8Array> {
  _fromTop(r: ByteReader) {
    return r.readAll();
  }

  _fromNest(r: ByteReader) {
    return this._fromTop(r);
  }
}
