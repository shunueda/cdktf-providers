// https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email attached to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key#email PrivateKey#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key#id PrivateKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name attached to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key#name PrivateKey#name}
  */
  readonly name: string;
  /**
  * Passphrase protecting the private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key#passphrase PrivateKey#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Number of bits to use when generating RSA key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key#rsa_bits PrivateKey#rsa_bits}
  */
  readonly rsaBits?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key gpg_private_key}
*/
export class PrivateKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gpg_private_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateKey to import
  * @param importFromId The id of the existing PrivateKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gpg_private_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/olivr/gpg/0.2.1/docs/resources/private_key gpg_private_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'gpg_private_key',
      terraformGeneratorMetadata: {
        providerName: 'gpg',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._name = config.name;
    this._passphrase = config.passphrase;
    this._rsaBits = config.rsaBits;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // rsa_bits - computed: false, optional: true, required: false
  private _rsaBits?: number; 
  public get rsaBits() {
    return this.getNumberAttribute('rsa_bits');
  }
  public set rsaBits(value: number) {
    this._rsaBits = value;
  }
  public resetRsaBits() {
    this._rsaBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaBitsInput() {
    return this._rsaBits;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      rsa_bits: cdktf.numberToTerraform(this._rsaBits),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      rsa_bits: {
        value: cdktf.numberToHclTerraform(this._rsaBits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
