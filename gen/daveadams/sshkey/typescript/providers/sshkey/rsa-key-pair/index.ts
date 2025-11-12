// https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/rsa_key_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RsaKeyPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/rsa_key_pair#bits RsaKeyPair#bits}
  */
  readonly bits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/rsa_key_pair#comment RsaKeyPair#comment}
  */
  readonly comment?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/rsa_key_pair sshkey_rsa_key_pair}
*/
export class RsaKeyPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sshkey_rsa_key_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RsaKeyPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RsaKeyPair to import
  * @param importFromId The id of the existing RsaKeyPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/rsa_key_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RsaKeyPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sshkey_rsa_key_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/daveadams/sshkey/0.2.1/docs/resources/rsa_key_pair sshkey_rsa_key_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RsaKeyPairConfig
  */
  public constructor(scope: Construct, id: string, config: RsaKeyPairConfig) {
    super(scope, id, {
      terraformResourceType: 'sshkey_rsa_key_pair',
      terraformGeneratorMetadata: {
        providerName: 'sshkey',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bits = config.bits;
    this._comment = config.comment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bits - computed: false, optional: false, required: true
  private _bits?: number; 
  public get bits() {
    return this.getNumberAttribute('bits');
  }
  public set bits(value: number) {
    this._bits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitsInput() {
    return this._bits;
  }

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
      bits: cdktf.numberToTerraform(this._bits),
      comment: cdktf.stringToTerraform(this._comment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bits: {
        value: cdktf.numberToHclTerraform(this._bits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
