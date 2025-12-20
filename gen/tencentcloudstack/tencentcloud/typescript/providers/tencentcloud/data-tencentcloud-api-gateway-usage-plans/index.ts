// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudApiGatewayUsagePlansConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans#id DataTencentcloudApiGatewayUsagePlans#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans#result_output_file DataTencentcloudApiGatewayUsagePlans#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * ID of the usage plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans#usage_plan_id DataTencentcloudApiGatewayUsagePlans#usage_plan_id}
  */
  readonly usagePlanId?: string;
  /**
  * Name of the usage plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans#usage_plan_name DataTencentcloudApiGatewayUsagePlans#usage_plan_name}
  */
  readonly usagePlanName?: string;
}
export interface DataTencentcloudApiGatewayUsagePlansListStruct {
}

export function dataTencentcloudApiGatewayUsagePlansListStructToTerraform(struct?: DataTencentcloudApiGatewayUsagePlansListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayUsagePlansListStructToHclTerraform(struct?: DataTencentcloudApiGatewayUsagePlansListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayUsagePlansListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayUsagePlansListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayUsagePlansListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // max_request_num - computed: true, optional: false, required: false
  public get maxRequestNum() {
    return this.getNumberAttribute('max_request_num');
  }

  // max_request_num_pre_sec - computed: true, optional: false, required: false
  public get maxRequestNumPreSec() {
    return this.getNumberAttribute('max_request_num_pre_sec');
  }

  // modify_time - computed: true, optional: false, required: false
  public get modifyTime() {
    return this.getStringAttribute('modify_time');
  }

  // usage_plan_desc - computed: true, optional: false, required: false
  public get usagePlanDesc() {
    return this.getStringAttribute('usage_plan_desc');
  }

  // usage_plan_id - computed: true, optional: false, required: false
  public get usagePlanId() {
    return this.getStringAttribute('usage_plan_id');
  }

  // usage_plan_name - computed: true, optional: false, required: false
  public get usagePlanName() {
    return this.getStringAttribute('usage_plan_name');
  }
}

export class DataTencentcloudApiGatewayUsagePlansListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayUsagePlansListStructOutputReference {
    return new DataTencentcloudApiGatewayUsagePlansListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans tencentcloud_api_gateway_usage_plans}
*/
export class DataTencentcloudApiGatewayUsagePlans extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_usage_plans";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudApiGatewayUsagePlans resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudApiGatewayUsagePlans to import
  * @param importFromId The id of the existing DataTencentcloudApiGatewayUsagePlans that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudApiGatewayUsagePlans to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_usage_plans", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/data-sources/api_gateway_usage_plans tencentcloud_api_gateway_usage_plans} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudApiGatewayUsagePlansConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudApiGatewayUsagePlansConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_usage_plans',
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
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._usagePlanId = config.usagePlanId;
    this._usagePlanName = config.usagePlanName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _list = new DataTencentcloudApiGatewayUsagePlansListStructList(this, "list", false);
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

  // usage_plan_id - computed: false, optional: true, required: false
  private _usagePlanId?: string; 
  public get usagePlanId() {
    return this.getStringAttribute('usage_plan_id');
  }
  public set usagePlanId(value: string) {
    this._usagePlanId = value;
  }
  public resetUsagePlanId() {
    this._usagePlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagePlanIdInput() {
    return this._usagePlanId;
  }

  // usage_plan_name - computed: false, optional: true, required: false
  private _usagePlanName?: string; 
  public get usagePlanName() {
    return this.getStringAttribute('usage_plan_name');
  }
  public set usagePlanName(value: string) {
    this._usagePlanName = value;
  }
  public resetUsagePlanName() {
    this._usagePlanName = undefined;
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
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      usage_plan_id: cdktf.stringToTerraform(this._usagePlanId),
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
