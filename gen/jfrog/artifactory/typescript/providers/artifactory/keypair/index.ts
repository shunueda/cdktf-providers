// https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeypairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Will be used as a filename when retrieving the public key via REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair#alias Keypair#alias}
  */
  readonly alias: string;
  /**
  * A unique identifier for the Key Pair record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair#pair_name Keypair#pair_name}
  */
  readonly pairName: string;
  /**
  * Key Pair type. Supported types - GPG and RSA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair#pair_type Keypair#pair_type}
  */
  readonly pairType: string;
  /**
  * Passphrase will be used to decrypt the private key. Validated server side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair#passphrase Keypair#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Private key. PEM format will be validated. Must not include extranous spaces or tabs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair#private_key Keypair#private_key}
  */
  readonly privateKey: string;
  /**
  * Public key. PEM format will be validated. Must not include extranous spaces or tabs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair#public_key Keypair#public_key}
  */
  readonly publicKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair artifactory_keypair}
*/
export class Keypair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_keypair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Keypair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Keypair to import
  * @param importFromId The id of the existing Keypair that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Keypair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_keypair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.0/docs/resources/keypair artifactory_keypair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeypairConfig
  */
  public constructor(scope: Construct, id: string, config: KeypairConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_keypair',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.0',
        providerVersionConstraint: '12.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._pairName = config.pairName;
    this._pairType = config.pairType;
    this._passphrase = config.passphrase;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // pair_name - computed: false, optional: false, required: true
  private _pairName?: string; 
  public get pairName() {
    return this.getStringAttribute('pair_name');
  }
  public set pairName(value: string) {
    this._pairName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairNameInput() {
    return this._pairName;
  }

  // pair_type - computed: false, optional: false, required: true
  private _pairType?: string; 
  public get pairType() {
    return this.getStringAttribute('pair_type');
  }
  public set pairType(value: string) {
    this._pairType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pairTypeInput() {
    return this._pairType;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      pair_name: cdktf.stringToTerraform(this._pairName),
      pair_type: cdktf.stringToTerraform(this._pairType),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pair_name: {
        value: cdktf.stringToHclTerraform(this._pairName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pair_type: {
        value: cdktf.stringToHclTerraform(this._pairType),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
