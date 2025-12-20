// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudApiGatewayUsagePlanEnvironmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Binding type. Valid values: `API`, `SERVICE`. Default value: `SERVICE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments#bind_type DataTencentcloudApiGatewayUsagePlanEnvironments#bind_type}
  */
  readonly bindType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments#id DataTencentcloudApiGatewayUsagePlanEnvironments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments#result_output_file DataTencentcloudApiGatewayUsagePlanEnvironments#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of the usage plan to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments#usage_plan_id DataTencentcloudApiGatewayUsagePlanEnvironments#usage_plan_id}
  */
  readonly usagePlanId: string;
}
export interface DataTencentcloudApiGatewayUsagePlanEnvironmentsListStruct {
}

export function dataTencentcloudApiGatewayUsagePlanEnvironmentsListStructToTerraform(struct?: DataTencentcloudApiGatewayUsagePlanEnvironmentsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayUsagePlanEnvironmentsListStructToHclTerraform(struct?: DataTencentcloudApiGatewayUsagePlanEnvironmentsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayUsagePlanEnvironmentsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayUsagePlanEnvironmentsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayUsagePlanEnvironmentsListStruct | undefined) {
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

export class DataTencentcloudApiGatewayUsagePlanEnvironmentsListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayUsagePlanEnvironmentsListStructOutputReference {
    return new DataTencentcloudApiGatewayUsagePlanEnvironmentsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments tencentcloud_api_gateway_usage_plan_environments}
*/
export class DataTencentcloudApiGatewayUsagePlanEnvironments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_usage_plan_environments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudApiGatewayUsagePlanEnvironments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudApiGatewayUsagePlanEnvironments to import
  * @param importFromId The id of the existing DataTencentcloudApiGatewayUsagePlanEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudApiGatewayUsagePlanEnvironments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_usage_plan_environments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plan_environments tencentcloud_api_gateway_usage_plan_environments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudApiGatewayUsagePlanEnvironmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudApiGatewayUsagePlanEnvironmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_usage_plan_environments',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bindType = config.bindType;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._usagePlanId = config.usagePlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudApiGatewayUsagePlanEnvironmentsListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
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
      bind_type: cdktf.stringToTerraform(this._bindType),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      usage_plan_id: cdktf.stringToTerraform(this._usagePlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bind_type: {
        value: cdktf.stringToHclTerraform(this._bindType),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
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
