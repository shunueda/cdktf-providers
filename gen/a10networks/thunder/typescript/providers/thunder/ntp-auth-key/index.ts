// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpAuthKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'MD5': encryption using MD5; 'SHA1': encryption using SHA1; 'SHA256': encryption using SHA256; 'SHA384': encryption using SHA384; 'SHA512': encryption using SHA512;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#alg_type NtpAuthKey#alg_type}
  */
  readonly algType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#asc_key NtpAuthKey#asc_key}
  */
  readonly ascKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#hex_key NtpAuthKey#hex_key}
  */
  readonly hexKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#id NtpAuthKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#key NtpAuthKey#key}
  */
  readonly key: number;
  /**
  * 'ascii': key string in ASCII form; 'hex': key string in hex form;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#key_type NtpAuthKey#key_type}
  */
  readonly keyType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#uuid NtpAuthKey#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key thunder_ntp_auth_key}
*/
export class NtpAuthKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ntp_auth_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NtpAuthKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NtpAuthKey to import
  * @param importFromId The id of the existing NtpAuthKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NtpAuthKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ntp_auth_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ntp_auth_key thunder_ntp_auth_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpAuthKeyConfig
  */
  public constructor(scope: Construct, id: string, config: NtpAuthKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ntp_auth_key',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algType = config.algType;
    this._ascKey = config.ascKey;
    this._hexKey = config.hexKey;
    this._id = config.id;
    this._key = config.key;
    this._keyType = config.keyType;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alg_type - computed: false, optional: true, required: false
  private _algType?: string; 
  public get algType() {
    return this.getStringAttribute('alg_type');
  }
  public set algType(value: string) {
    this._algType = value;
  }
  public resetAlgType() {
    this._algType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algTypeInput() {
    return this._algType;
  }

  // asc_key - computed: false, optional: true, required: false
  private _ascKey?: string; 
  public get ascKey() {
    return this.getStringAttribute('asc_key');
  }
  public set ascKey(value: string) {
    this._ascKey = value;
  }
  public resetAscKey() {
    this._ascKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascKeyInput() {
    return this._ascKey;
  }

  // hex_key - computed: false, optional: true, required: false
  private _hexKey?: string; 
  public get hexKey() {
    return this.getStringAttribute('hex_key');
  }
  public set hexKey(value: string) {
    this._hexKey = value;
  }
  public resetHexKey() {
    this._hexKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hexKeyInput() {
    return this._hexKey;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alg_type: cdktf.stringToTerraform(this._algType),
      asc_key: cdktf.stringToTerraform(this._ascKey),
      hex_key: cdktf.stringToTerraform(this._hexKey),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.numberToTerraform(this._key),
      key_type: cdktf.stringToTerraform(this._keyType),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alg_type: {
        value: cdktf.stringToHclTerraform(this._algType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asc_key: {
        value: cdktf.stringToHclTerraform(this._ascKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hex_key: {
        value: cdktf.stringToHclTerraform(this._hexKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.numberToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      key_type: {
        value: cdktf.stringToHclTerraform(this._keyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
