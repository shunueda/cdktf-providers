// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemEnableDiskEncryptionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'aes': cipher aes; 'serpent': cipher serpent; 'twofish': cipher twofish;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption#cipher SystemEnableDiskEncryptionA#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption#id SystemEnableDiskEncryptionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enter phassphrase in plain text format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption#passphrase SystemEnableDiskEncryptionA#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Enter phassphrase in base64 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption#passphrase_base64 SystemEnableDiskEncryptionA#passphrase_base64}
  */
  readonly passphraseBase64?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption thunder_system_enable_disk_encryption}
*/
export class SystemEnableDiskEncryptionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_enable_disk_encryption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemEnableDiskEncryptionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemEnableDiskEncryptionA to import
  * @param importFromId The id of the existing SystemEnableDiskEncryptionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemEnableDiskEncryptionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_enable_disk_encryption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_enable_disk_encryption thunder_system_enable_disk_encryption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemEnableDiskEncryptionAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemEnableDiskEncryptionAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_enable_disk_encryption',
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
    this._cipher = config.cipher;
    this._id = config.id;
    this._passphrase = config.passphrase;
    this._passphraseBase64 = config.passphraseBase64;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
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

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // passphrase_base64 - computed: false, optional: true, required: false
  private _passphraseBase64?: string; 
  public get passphraseBase64() {
    return this.getStringAttribute('passphrase_base64');
  }
  public set passphraseBase64(value: string) {
    this._passphraseBase64 = value;
  }
  public resetPassphraseBase64() {
    this._passphraseBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseBase64Input() {
    return this._passphraseBase64;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cipher: cdktf.stringToTerraform(this._cipher),
      id: cdktf.stringToTerraform(this._id),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      passphrase_base64: cdktf.stringToTerraform(this._passphraseBase64),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cipher: {
        value: cdktf.stringToHclTerraform(this._cipher),
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
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase_base64: {
        value: cdktf.stringToHclTerraform(this._passphraseBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
