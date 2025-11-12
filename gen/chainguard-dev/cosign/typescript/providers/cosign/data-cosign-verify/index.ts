// https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/data-sources/verify
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCosignVerifyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The image tag or digest of the container image to verify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/data-sources/verify#image DataCosignVerify#image}
  */
  readonly image: string;
  /**
  * The sigstore policy-controller policy to verify the image against.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/data-sources/verify#policy DataCosignVerify#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/data-sources/verify cosign_verify}
*/
export class DataCosignVerify extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cosign_verify";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCosignVerify resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCosignVerify to import
  * @param importFromId The id of the existing DataCosignVerify that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/data-sources/verify#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCosignVerify to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cosign_verify", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/cosign/0.1.0/docs/data-sources/verify cosign_verify} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCosignVerifyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCosignVerifyConfig) {
    super(scope, id, {
      terraformResourceType: 'cosign_verify',
      terraformGeneratorMetadata: {
        providerName: 'cosign',
        providerVersion: '0.1.0',
        providerVersionConstraint: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._image = config.image;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // verified_ref - computed: true, optional: false, required: false
  public get verifiedRef() {
    return this.getStringAttribute('verified_ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image: cdktf.stringToTerraform(this._image),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
