// https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/ed25519_key_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ed25519KeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/ed25519_key_pair#comment Ed25519KeyPair#comment}
  */
  readonly comment?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/ed25519_key_pair sshkey_ed25519_key_pair}
*/
export class Ed25519KeyPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sshkey_ed25519_key_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ed25519KeyPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ed25519KeyPair to import
  * @param importFromId The id of the existing Ed25519KeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/ed25519_key_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ed25519KeyPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sshkey_ed25519_key_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/ed25519_key_pair sshkey_ed25519_key_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ed25519KeyPairConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ed25519KeyPairConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sshkey_ed25519_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'sshkey',
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
    this._comment = config.comment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // fingerprint_md5 - computed: true, optional: false, required: false
  public get fingerprintMd5() {
    return this.getStringAttribute('fingerprint_md5');
  }

  // fingerprint_sha256 - computed: true, optional: false, required: false
  public get fingerprintSha256() {
    return this.getStringAttribute('fingerprint_sha256');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // private_key_pem - computed: true, optional: false, required: false
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
