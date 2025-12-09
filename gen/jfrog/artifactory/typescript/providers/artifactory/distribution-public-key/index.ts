// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/distribution_public_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributionPublicKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Will be used as an identifier when uploading/retrieving the public key via REST API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/distribution_public_key#alias DistributionPublicKey#alias}
  */
  readonly alias: string;
  /**
  * The Public key to add as a trusted distribution GPG key. To avoid state drift, ensure there are no leading tab or space characters for each line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/distribution_public_key#public_key DistributionPublicKey#public_key}
  */
  readonly publicKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/distribution_public_key artifactory_distribution_public_key}
*/
export class DistributionPublicKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_distribution_public_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributionPublicKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributionPublicKey to import
  * @param importFromId The id of the existing DistributionPublicKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/distribution_public_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributionPublicKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_distribution_public_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/distribution_public_key artifactory_distribution_public_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributionPublicKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DistributionPublicKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_distribution_public_key',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // issued_by - computed: true, optional: false, required: false
  public get issuedBy() {
    return this.getStringAttribute('issued_by');
  }

  // issued_on - computed: true, optional: false, required: false
  public get issuedOn() {
    return this.getStringAttribute('issued_on');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
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

  // valid_until - computed: true, optional: false, required: false
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
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
