// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan#id ApiGatewayUsagePlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Total number of requests allowed. Valid values: -1, [1,99999999]. The default value is -1, which indicates no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan#max_request_num ApiGatewayUsagePlan#max_request_num}
  */
  readonly maxRequestNum?: number;
  /**
  * Limit of requests per second. Valid values: -1, [1,2000]. The default value is -1, which indicates no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan#max_request_num_pre_sec ApiGatewayUsagePlan#max_request_num_pre_sec}
  */
  readonly maxRequestNumPreSec?: number;
  /**
  * Custom usage plan description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan#usage_plan_desc ApiGatewayUsagePlan#usage_plan_desc}
  */
  readonly usagePlanDesc?: string;
  /**
  * Custom usage plan name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan#usage_plan_name ApiGatewayUsagePlan#usage_plan_name}
  */
  readonly usagePlanName: string;
}
export interface ApiGatewayUsagePlanAttachListStruct {
}

export function apiGatewayUsagePlanAttachListStructToTerraform(struct?: ApiGatewayUsagePlanAttachListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayUsagePlanAttachListStructToHclTerraform(struct?: ApiGatewayUsagePlanAttachListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayUsagePlanAttachListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayUsagePlanAttachListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayUsagePlanAttachListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
}

export class ApiGatewayUsagePlanAttachListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiGatewayUsagePlanAttachListStructOutputReference {
    return new ApiGatewayUsagePlanAttachListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan tencentcloud_api_gateway_usage_plan}
*/
export class ApiGatewayUsagePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_usage_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayUsagePlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayUsagePlan to import
  * @param importFromId The id of the existing ApiGatewayUsagePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayUsagePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_usage_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/api_gateway_usage_plan tencentcloud_api_gateway_usage_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayUsagePlanConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_usage_plan',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._maxRequestNum = config.maxRequestNum;
    this._maxRequestNumPreSec = config.maxRequestNumPreSec;
    this._usagePlanDesc = config.usagePlanDesc;
    this._usagePlanName = config.usagePlanName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attach_api_keys - computed: true, optional: false, required: false
  public get attachApiKeys() {
    return this.getListAttribute('attach_api_keys');
  }

  // attach_list - computed: true, optional: false, required: false
  private _attachList = new ApiGatewayUsagePlanAttachListStructList(this, "attach_list", false);
  public get attachList() {
    return this._attachList;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // max_request_num - computed: false, optional: true, required: false
  private _maxRequestNum?: number; 
  public get maxRequestNum() {
    return this.getNumberAttribute('max_request_num');
  }
  public set maxRequestNum(value: number) {
    this._maxRequestNum = value;
  }
  public resetMaxRequestNum() {
    this._maxRequestNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestNumInput() {
    return this._maxRequestNum;
  }

  // max_request_num_pre_sec - computed: false, optional: true, required: false
  private _maxRequestNumPreSec?: number; 
  public get maxRequestNumPreSec() {
    return this.getNumberAttribute('max_request_num_pre_sec');
  }
  public set maxRequestNumPreSec(value: number) {
    this._maxRequestNumPreSec = value;
  }
  public resetMaxRequestNumPreSec() {
    this._maxRequestNumPreSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestNumPreSecInput() {
    return this._maxRequestNumPreSec;
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // usage_plan_desc - computed: false, optional: true, required: false
  private _usagePlanDesc?: string; 
  public get usagePlanDesc() {
    return this.getStringAttribute('usage_plan_desc');
  }
  public set usagePlanDesc(value: string) {
    this._usagePlanDesc = value;
  }
  public resetUsagePlanDesc() {
    this._usagePlanDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlanDescInput() {
    return this._usagePlanDesc;
  }

  // usage_plan_name - computed: false, optional: false, required: true
  private _usagePlanName?: string; 
  public get usagePlanName() {
    return this.getStringAttribute('usage_plan_name');
  }
  public set usagePlanName(value: string) {
    this._usagePlanName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlanNameInput() {
    return this._usagePlanName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      max_request_num: cdktf.numberToTerraform(this._maxRequestNum),
      max_request_num_pre_sec: cdktf.numberToTerraform(this._maxRequestNumPreSec),
      usage_plan_desc: cdktf.stringToTerraform(this._usagePlanDesc),
      usage_plan_name: cdktf.stringToTerraform(this._usagePlanName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_request_num: {
        value: cdktf.numberToHclTerraform(this._maxRequestNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_request_num_pre_sec: {
        value: cdktf.numberToHclTerraform(this._maxRequestNumPreSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      usage_plan_desc: {
        value: cdktf.stringToHclTerraform(this._usagePlanDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_plan_name: {
        value: cdktf.stringToHclTerraform(this._usagePlanName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
