// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudaccountMaasConfig extends cdktf.TerraformMetaArguments {
  /**
  * The context of the MAAS configuration. Allowed values are `project` or `tenant`. Default value is `project`. If  the `project` context is specified, the project name will sourced from the provider configuration parameter [`project_name`](https://registry.terraform.io/providers/spectrocloud/spectrocloud/latest/docs#schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas#context CloudaccountMaas#context}
  */
  readonly context?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas#id CloudaccountMaas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Endpoint of the MAAS API that is used to connect to the MAAS cloud. I.e. http://maas:5240/MAAS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas#maas_api_endpoint CloudaccountMaas#maas_api_endpoint}
  */
  readonly maasApiEndpoint: string;
  /**
  * API key that is used to connect to the MAAS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas#maas_api_key CloudaccountMaas#maas_api_key}
  */
  readonly maasApiKey: string;
  /**
  * Name of the MAAS cloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas#name CloudaccountMaas#name}
  */
  readonly name: string;
  /**
  * ID of the private cloud gateway that is used to connect to the MAAS cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas#private_cloud_gateway_id CloudaccountMaas#private_cloud_gateway_id}
  */
  readonly privateCloudGatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas spectrocloud_cloudaccount_maas}
*/
export class CloudaccountMaas extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_cloudaccount_maas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudaccountMaas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudaccountMaas to import
  * @param importFromId The id of the existing CloudaccountMaas that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudaccountMaas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_cloudaccount_maas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.25.2/docs/resources/cloudaccount_maas spectrocloud_cloudaccount_maas} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudaccountMaasConfig
  */
  public constructor(scope: Construct, id: string, config: CloudaccountMaasConfig) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_cloudaccount_maas',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.25.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._context = config.context;
    this._id = config.id;
    this._maasApiEndpoint = config.maasApiEndpoint;
    this._maasApiKey = config.maasApiKey;
    this._name = config.name;
    this._privateCloudGatewayId = config.privateCloudGatewayId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
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

  // maas_api_endpoint - computed: false, optional: false, required: true
  private _maasApiEndpoint?: string; 
  public get maasApiEndpoint() {
    return this.getStringAttribute('maas_api_endpoint');
  }
  public set maasApiEndpoint(value: string) {
    this._maasApiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maasApiEndpointInput() {
    return this._maasApiEndpoint;
  }

  // maas_api_key - computed: false, optional: false, required: true
  private _maasApiKey?: string; 
  public get maasApiKey() {
    return this.getStringAttribute('maas_api_key');
  }
  public set maasApiKey(value: string) {
    this._maasApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maasApiKeyInput() {
    return this._maasApiKey;
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

  // private_cloud_gateway_id - computed: false, optional: false, required: true
  private _privateCloudGatewayId?: string; 
  public get privateCloudGatewayId() {
    return this.getStringAttribute('private_cloud_gateway_id');
  }
  public set privateCloudGatewayId(value: string) {
    this._privateCloudGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateCloudGatewayIdInput() {
    return this._privateCloudGatewayId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context: cdktf.stringToTerraform(this._context),
      id: cdktf.stringToTerraform(this._id),
      maas_api_endpoint: cdktf.stringToTerraform(this._maasApiEndpoint),
      maas_api_key: cdktf.stringToTerraform(this._maasApiKey),
      name: cdktf.stringToTerraform(this._name),
      private_cloud_gateway_id: cdktf.stringToTerraform(this._privateCloudGatewayId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context: {
        value: cdktf.stringToHclTerraform(this._context),
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
      maas_api_endpoint: {
        value: cdktf.stringToHclTerraform(this._maasApiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maas_api_key: {
        value: cdktf.stringToHclTerraform(this._maasApiKey),
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
      private_cloud_gateway_id: {
        value: cdktf.stringToHclTerraform(this._privateCloudGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
