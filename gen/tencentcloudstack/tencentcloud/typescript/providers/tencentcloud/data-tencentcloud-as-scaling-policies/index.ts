// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAsScalingPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies#id DataTencentcloudAsScalingPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Scaling policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies#policy_name DataTencentcloudAsScalingPolicies#policy_name}
  */
  readonly policyName?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies#result_output_file DataTencentcloudAsScalingPolicies#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Scaling group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies#scaling_group_id DataTencentcloudAsScalingPolicies#scaling_group_id}
  */
  readonly scalingGroupId?: string;
  /**
  * Scaling policy ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies#scaling_policy_id DataTencentcloudAsScalingPolicies#scaling_policy_id}
  */
  readonly scalingPolicyId?: string;
}
export interface DataTencentcloudAsScalingPoliciesScalingPolicyListStruct {
}

export function dataTencentcloudAsScalingPoliciesScalingPolicyListStructToTerraform(struct?: DataTencentcloudAsScalingPoliciesScalingPolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsScalingPoliciesScalingPolicyListStructToHclTerraform(struct?: DataTencentcloudAsScalingPoliciesScalingPolicyListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsScalingPoliciesScalingPolicyListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAsScalingPoliciesScalingPolicyListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsScalingPoliciesScalingPolicyListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adjustment_type - computed: true, optional: false, required: false
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }

  // adjustment_value - computed: true, optional: false, required: false
  public get adjustmentValue() {
    return this.getNumberAttribute('adjustment_value');
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // continuous_time - computed: true, optional: false, required: false
  public get continuousTime() {
    return this.getNumberAttribute('continuous_time');
  }

  // cooldown - computed: true, optional: false, required: false
  public get cooldown() {
    return this.getNumberAttribute('cooldown');
  }

  // metric_name - computed: true, optional: false, required: false
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }

  // notification_user_group_ids - computed: true, optional: false, required: false
  public get notificationUserGroupIds() {
    return this.getListAttribute('notification_user_group_ids');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // scaling_group_id - computed: true, optional: false, required: false
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }

  // statistic - computed: true, optional: false, required: false
  public get statistic() {
    return this.getStringAttribute('statistic');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataTencentcloudAsScalingPoliciesScalingPolicyListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsScalingPoliciesScalingPolicyListStructOutputReference {
    return new DataTencentcloudAsScalingPoliciesScalingPolicyListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies tencentcloud_as_scaling_policies}
*/
export class DataTencentcloudAsScalingPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_scaling_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAsScalingPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAsScalingPolicies to import
  * @param importFromId The id of the existing DataTencentcloudAsScalingPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAsScalingPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_scaling_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/as_scaling_policies tencentcloud_as_scaling_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAsScalingPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAsScalingPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_scaling_policies',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
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
    this._policyName = config.policyName;
    this._resultOutputFile = config.resultOutputFile;
    this._scalingGroupId = config.scalingGroupId;
    this._scalingPolicyId = config.scalingPolicyId;
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

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
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

  // scaling_group_id - computed: false, optional: true, required: false
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  public resetScalingGroupId() {
    this._scalingGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // scaling_policy_id - computed: false, optional: true, required: false
  private _scalingPolicyId?: string; 
  public get scalingPolicyId() {
    return this.getStringAttribute('scaling_policy_id');
  }
  public set scalingPolicyId(value: string) {
    this._scalingPolicyId = value;
  }
  public resetScalingPolicyId() {
    this._scalingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingPolicyIdInput() {
    return this._scalingPolicyId;
  }

  // scaling_policy_list - computed: true, optional: false, required: false
  private _scalingPolicyList = new DataTencentcloudAsScalingPoliciesScalingPolicyListStructList(this, "scaling_policy_list", false);
  public get scalingPolicyList() {
    return this._scalingPolicyList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_name: cdktf.stringToTerraform(this._policyName),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scaling_policy_id: cdktf.stringToTerraform(this._scalingPolicyId),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
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
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_policy_id: {
        value: cdktf.stringToHclTerraform(this._scalingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
