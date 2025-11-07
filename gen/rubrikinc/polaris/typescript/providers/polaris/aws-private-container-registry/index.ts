// https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_private_container_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsPrivateContainerRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID) of the AWS account hosting the Exocompute. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_private_container_registry#account_id AwsPrivateContainerRegistry#account_id}
  */
  readonly accountId: string;
  /**
  * AWS account ID of the AWS account that will pull images from the RSC container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_private_container_registry#native_id AwsPrivateContainerRegistry#native_id}
  */
  readonly nativeId: string;
  /**
  * URL for customer provided private container registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_private_container_registry#url AwsPrivateContainerRegistry#url}
  */
  readonly url: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_private_container_registry polaris_aws_private_container_registry}
*/
export class AwsPrivateContainerRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_private_container_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsPrivateContainerRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsPrivateContainerRegistry to import
  * @param importFromId The id of the existing AwsPrivateContainerRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_private_container_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsPrivateContainerRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_private_container_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.2.1/docs/resources/aws_private_container_registry polaris_aws_private_container_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsPrivateContainerRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: AwsPrivateContainerRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_private_container_registry',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._nativeId = config.nativeId;
    this._url = config.url;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // native_id - computed: false, optional: false, required: true
  private _nativeId?: string; 
  public get nativeId() {
    return this.getStringAttribute('native_id');
  }
  public set nativeId(value: string) {
    this._nativeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeIdInput() {
    return this._nativeId;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      native_id: cdktf.stringToTerraform(this._nativeId),
      url: cdktf.stringToTerraform(this._url),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_id: {
        value: cdktf.stringToHclTerraform(this._nativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
