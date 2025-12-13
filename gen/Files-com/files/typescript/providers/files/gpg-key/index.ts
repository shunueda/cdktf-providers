// https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GpgKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email address of the key owner. Used for the generation of the key. Will be ignored if `generate_keypair` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#generate_email GpgKey#generate_email}
  */
  readonly generateEmail?: string;
  /**
  * Expiration date of the key. Used for the generation of the key. Will be ignored if `generate_keypair` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#generate_expires_at GpgKey#generate_expires_at}
  */
  readonly generateExpiresAt?: string;
  /**
  * Full name of the key owner. Used for the generation of the key. Will be ignored if `generate_keypair` is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#generate_full_name GpgKey#generate_full_name}
  */
  readonly generateFullName?: string;
  /**
  * If true, generate a new GPG key pair. Can not be used with `public_key`/`private_key`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#generate_keypair GpgKey#generate_keypair}
  */
  readonly generateKeypair?: boolean | cdktf.IResolvable;
  /**
  * GPG key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#name GpgKey#name}
  */
  readonly name: string;
  /**
  * Partner ID who owns this GPG Key, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#partner_id GpgKey#partner_id}
  */
  readonly partnerId?: number;
  /**
  * The GPG private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#private_key GpgKey#private_key}
  */
  readonly privateKey?: string;
  /**
  * The GPG private key password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#private_key_password GpgKey#private_key_password}
  */
  readonly privateKeyPassword?: string;
  /**
  * The GPG public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#public_key GpgKey#public_key}
  */
  readonly publicKey?: string;
  /**
  * User ID who owns this GPG Key, if applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#user_id GpgKey#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key files_gpg_key}
*/
export class GpgKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_gpg_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GpgKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GpgKey to import
  * @param importFromId The id of the existing GpgKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GpgKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_gpg_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.412/docs/resources/gpg_key files_gpg_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GpgKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GpgKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'files_gpg_key',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.412',
        providerVersionConstraint: '0.1.412'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._generateEmail = config.generateEmail;
    this._generateExpiresAt = config.generateExpiresAt;
    this._generateFullName = config.generateFullName;
    this._generateKeypair = config.generateKeypair;
    this._name = config.name;
    this._partnerId = config.partnerId;
    this._privateKey = config.privateKey;
    this._privateKeyPassword = config.privateKeyPassword;
    this._publicKey = config.publicKey;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // generate_email - computed: false, optional: true, required: false
  private _generateEmail?: string; 
  public get generateEmail() {
    return this.getStringAttribute('generate_email');
  }
  public set generateEmail(value: string) {
    this._generateEmail = value;
  }
  public resetGenerateEmail() {
    this._generateEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateEmailInput() {
    return this._generateEmail;
  }

  // generate_expires_at - computed: false, optional: true, required: false
  private _generateExpiresAt?: string; 
  public get generateExpiresAt() {
    return this.getStringAttribute('generate_expires_at');
  }
  public set generateExpiresAt(value: string) {
    this._generateExpiresAt = value;
  }
  public resetGenerateExpiresAt() {
    this._generateExpiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateExpiresAtInput() {
    return this._generateExpiresAt;
  }

  // generate_full_name - computed: false, optional: true, required: false
  private _generateFullName?: string; 
  public get generateFullName() {
    return this.getStringAttribute('generate_full_name');
  }
  public set generateFullName(value: string) {
    this._generateFullName = value;
  }
  public resetGenerateFullName() {
    this._generateFullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateFullNameInput() {
    return this._generateFullName;
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

  // partner_id - computed: true, optional: true, required: false
  private _partnerId?: number; 
  public get partnerId() {
    return this.getNumberAttribute('partner_id');
  }
  public set partnerId(value: number) {
    this._partnerId = value;
  }
  public resetPartnerId() {
    this._partnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerIdInput() {
    return this._partnerId;
  }

  // partner_name - computed: true, optional: false, required: false
  public get partnerName() {
    return this.getStringAttribute('partner_name');
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_md5 - computed: true, optional: false, required: false
  public get privateKeyMd5() {
    return this.getStringAttribute('private_key_md5');
  }

  // private_key_password - computed: false, optional: true, required: false
  private _privateKeyPassword?: string; 
  public get privateKeyPassword() {
    return this.getStringAttribute('private_key_password');
  }
  public set privateKeyPassword(value: string) {
    this._privateKeyPassword = value;
  }
  public resetPrivateKeyPassword() {
    this._privateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPasswordInput() {
    return this._privateKeyPassword;
  }

  // private_key_password_md5 - computed: true, optional: false, required: false
  public get privateKeyPasswordMd5() {
    return this.getStringAttribute('private_key_password_md5');
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

  // public_key_md5 - computed: true, optional: false, required: false
  public get publicKeyMd5() {
    return this.getStringAttribute('public_key_md5');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      generate_email: cdktf.stringToTerraform(this._generateEmail),
      generate_expires_at: cdktf.stringToTerraform(this._generateExpiresAt),
      generate_full_name: cdktf.stringToTerraform(this._generateFullName),
      generate_keypair: cdktf.booleanToTerraform(this._generateKeypair),
      name: cdktf.stringToTerraform(this._name),
      partner_id: cdktf.numberToTerraform(this._partnerId),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_password: cdktf.stringToTerraform(this._privateKeyPassword),
      public_key: cdktf.stringToTerraform(this._publicKey),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generate_email: {
        value: cdktf.stringToHclTerraform(this._generateEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_expires_at: {
        value: cdktf.stringToHclTerraform(this._generateExpiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_full_name: {
        value: cdktf.stringToHclTerraform(this._generateFullName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner_id: {
        value: cdktf.numberToHclTerraform(this._partnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_password: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassword),
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
