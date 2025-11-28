// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayUsagePlanAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of key IDs to be bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#access_key_ids ApiGatewayUsagePlanAttachment#access_key_ids}
  */
  readonly accessKeyIds?: string[];
  /**
  * ID of the API. This parameter will be required when `bind_type` is `API`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#api_id ApiGatewayUsagePlanAttachment#api_id}
  */
  readonly apiId?: string;
  /**
  * Binding type. Valid values: `API`, `SERVICE`. Default value is `SERVICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#bind_type ApiGatewayUsagePlanAttachment#bind_type}
  */
  readonly bindType?: string;
  /**
  * The environment to be bound. Valid values: `test`, `prepub`, `release`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#environment ApiGatewayUsagePlanAttachment#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#id ApiGatewayUsagePlanAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#service_id ApiGatewayUsagePlanAttachment#service_id}
  */
  readonly serviceId: string;
  /**
  * ID of the usage plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#usage_plan_id ApiGatewayUsagePlanAttachment#usage_plan_id}
  */
  readonly usagePlanId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment tencentcloud_api_gateway_usage_plan_attachment}
*/
export class ApiGatewayUsagePlanAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_usage_plan_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayUsagePlanAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayUsagePlanAttachment to import
  * @param importFromId The id of the existing ApiGatewayUsagePlanAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayUsagePlanAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_usage_plan_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/api_gateway_usage_plan_attachment tencentcloud_api_gateway_usage_plan_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayUsagePlanAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_usage_plan_attachment',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyIds = config.accessKeyIds;
    this._apiId = config.apiId;
    this._bindType = config.bindType;
    this._environment = config.environment;
    this._id = config.id;
    this._serviceId = config.serviceId;
    this._usagePlanId = config.usagePlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_ids - computed: false, optional: true, required: false
  private _accessKeyIds?: string[]; 
  public get accessKeyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('access_key_ids'));
  }
  public set accessKeyIds(value: string[]) {
    this._accessKeyIds = value;
  }
  public resetAccessKeyIds() {
    this._accessKeyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdsInput() {
    return this._accessKeyIds;
  }

  // api_id - computed: false, optional: true, required: false
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  public resetApiId() {
    this._apiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // bind_type - computed: false, optional: true, required: false
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  public resetBindType() {
    this._bindType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
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
      access_key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessKeyIds),
      api_id: cdktf.stringToTerraform(this._apiId),
      bind_type: cdktf.stringToTerraform(this._bindType),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
      usage_plan_id: cdktf.stringToTerraform(this._usagePlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessKeyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_type: {
        value: cdktf.stringToHclTerraform(this._bindType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
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
