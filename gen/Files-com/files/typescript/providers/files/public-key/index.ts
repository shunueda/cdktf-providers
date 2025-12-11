// https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of key to generate.  One of rsa, dsa, ecdsa, ed25519. Used for the generation of the key. Will be ignored if `generate_keypair` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#generate_algorithm PublicKey#generate_algorithm}
  */
  readonly generateAlgorithm?: string;
  /**
  * If true, generate a new SSH key pair. Can not be used with `public_key`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#generate_keypair PublicKey#generate_keypair}
  */
  readonly generateKeypair?: boolean | cdktf.IResolvable;
  /**
  * Length of key to generate. If algorithm is ecdsa, this is the signature size. Used for the generation of the key. Will be ignored if `generate_keypair` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#generate_length PublicKey#generate_length}
  */
  readonly generateLength?: number;
  /**
  * Password for the private key. Used for the generation of the key. Will be ignored if `generate_keypair` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#generate_private_key_password PublicKey#generate_private_key_password}
  */
  readonly generatePrivateKeyPassword?: string;
  /**
  * Actual contents of SSH key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#public_key PublicKey#public_key}
  */
  readonly publicKey?: string;
  /**
  * Public key title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#title PublicKey#title}
  */
  readonly title: string;
  /**
  * User ID this public key is associated with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#user_id PublicKey#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key files_public_key}
*/
export class PublicKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_public_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PublicKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PublicKey to import
  * @param importFromId The id of the existing PublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PublicKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_public_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.409/docs/resources/public_key files_public_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PublicKeyConfig
  */
  public constructor(scope: Construct, id: string, config: PublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_public_key',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.409',
        providerVersionConstraint: '0.1.409'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._generateAlgorithm = config.generateAlgorithm;
    this._generateKeypair = config.generateKeypair;
    this._generateLength = config.generateLength;
    this._generatePrivateKeyPassword = config.generatePrivateKeyPassword;
    this._publicKey = config.publicKey;
    this._title = config.title;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // generate_algorithm - computed: false, optional: true, required: false
  private _generateAlgorithm?: string; 
  public get generateAlgorithm() {
    return this.getStringAttribute('generate_algorithm');
  }
  public set generateAlgorithm(value: string) {
    this._generateAlgorithm = value;
  }
  public resetGenerateAlgorithm() {
    this._generateAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateAlgorithmInput() {
    return this._generateAlgorithm;
  }

  // generate_keypair - computed: false, optional: true, required: false
  private _generateKeypair?: boolean | cdktf.IResolvable; 
  public get generateKeypair() {
    return this.getBooleanAttribute('generate_keypair');
  }
  public set generateKeypair(value: boolean | cdktf.IResolvable) {
    this._generateKeypair = value;
  }
  public resetGenerateKeypair() {
    this._generateKeypair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateKeypairInput() {
    return this._generateKeypair;
  }

  // generate_length - computed: false, optional: true, required: false
  private _generateLength?: number; 
  public get generateLength() {
    return this.getNumberAttribute('generate_length');
  }
  public set generateLength(value: number) {
    this._generateLength = value;
  }
  public resetGenerateLength() {
    this._generateLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateLengthInput() {
    return this._generateLength;
  }

  // generate_private_key_password - computed: false, optional: true, required: false
  private _generatePrivateKeyPassword?: string; 
  public get generatePrivateKeyPassword() {
    return this.getStringAttribute('generate_private_key_password');
  }
  public set generatePrivateKeyPassword(value: string) {
    this._generatePrivateKeyPassword = value;
  }
  public resetGeneratePrivateKeyPassword() {
    this._generatePrivateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePrivateKeyPasswordInput() {
    return this._generatePrivateKeyPassword;
  }

  // generated_private_key - computed: true, optional: false, required: false
  public get generatedPrivateKey() {
    return this.getStringAttribute('generated_private_key');
  }

  // generated_public_key - computed: true, optional: false, required: false
  public get generatedPublicKey() {
    return this.getStringAttribute('generated_public_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_login_at - computed: true, optional: false, required: false
  public get lastLoginAt() {
    return this.getStringAttribute('last_login_at');
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_id - computed: true, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      generate_algorithm: cdktf.stringToTerraform(this._generateAlgorithm),
      generate_keypair: cdktf.booleanToTerraform(this._generateKeypair),
      generate_length: cdktf.numberToTerraform(this._generateLength),
      generate_private_key_password: cdktf.stringToTerraform(this._generatePrivateKeyPassword),
      public_key: cdktf.stringToTerraform(this._publicKey),
      title: cdktf.stringToTerraform(this._title),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generate_algorithm: {
        value: cdktf.stringToHclTerraform(this._generateAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_keypair: {
        value: cdktf.booleanToHclTerraform(this._generateKeypair),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generate_length: {
        value: cdktf.numberToHclTerraform(this._generateLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generate_private_key_password: {
        value: cdktf.stringToHclTerraform(this._generatePrivateKeyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
