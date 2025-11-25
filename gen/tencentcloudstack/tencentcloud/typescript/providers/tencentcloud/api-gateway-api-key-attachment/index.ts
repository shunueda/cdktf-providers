// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/api_gateway_api_key_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiKeyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/api_gateway_api_key_attachment#api_key_id ApiGatewayApiKeyAttachment#api_key_id}
  */
  readonly apiKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/api_gateway_api_key_attachment#id ApiGatewayApiKeyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the usage plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/api_gateway_api_key_attachment#usage_plan_id ApiGatewayApiKeyAttachment#usage_plan_id}
  */
  readonly usagePlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/api_gateway_api_key_attachment tencentcloud_api_gateway_api_key_attachment}
*/
export class ApiGatewayApiKeyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api_key_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayApiKeyAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayApiKeyAttachment to import
  * @param importFromId The id of the existing ApiGatewayApiKeyAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/api_gateway_api_key_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayApiKeyAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api_key_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/api_gateway_api_key_attachment tencentcloud_api_gateway_api_key_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayApiKeyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayApiKeyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api_key_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeyId = config.apiKeyId;
    this._id = config.id;
    this._usagePlanId = config.usagePlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_id - computed: false, optional: false, required: true
  private _apiKeyId?: string; 
  public get apiKeyId() {
    return this.getStringAttribute('api_key_id');
  }
  public set apiKeyId(value: string) {
    this._apiKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyIdInput() {
    return this._apiKeyId;
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

  // usage_plan_id - computed: false, optional: false, required: true
  private _usagePlanId?: string; 
  public get usagePlanId() {
    return this.getStringAttribute('usage_plan_id');
  }
  public set usagePlanId(value: string) {
    this._usagePlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlanIdInput() {
    return this._usagePlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_id: cdktf.stringToTerraform(this._apiKeyId),
      id: cdktf.stringToTerraform(this._id),
      usage_plan_id: cdktf.stringToTerraform(this._usagePlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_id: {
        value: cdktf.stringToHclTerraform(this._apiKeyId),
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
      usage_plan_id: {
        value: cdktf.stringToHclTerraform(this._usagePlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
