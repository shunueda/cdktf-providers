// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformAutoScalingGroupPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-Scaling Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#asg_id DataSamsungcloudplatformAutoScalingGroupPolicies#asg_id}
  */
  readonly asgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#id DataSamsungcloudplatformAutoScalingGroupPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metric method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#metric_method DataSamsungcloudplatformAutoScalingGroupPolicies#metric_method}
  */
  readonly metricMethod?: string;
  /**
  * Metric type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#metric_type DataSamsungcloudplatformAutoScalingGroupPolicies#metric_type}
  */
  readonly metricType?: string;
  /**
  * Page start number from which to get the list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#page DataSamsungcloudplatformAutoScalingGroupPolicies#page}
  */
  readonly page?: number;
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#policy_name DataSamsungcloudplatformAutoScalingGroupPolicies#policy_name}
  */
  readonly policyName?: string;
  /**
  * Scale type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#scale_type DataSamsungcloudplatformAutoScalingGroupPolicies#scale_type}
  */
  readonly scaleType?: string;
  /**
  * Size to get list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#size DataSamsungcloudplatformAutoScalingGroupPolicies#size}
  */
  readonly size?: number;
  /**
  * Sort
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#sort DataSamsungcloudplatformAutoScalingGroupPolicies#sort}
  */
  readonly sort?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#filter DataSamsungcloudplatformAutoScalingGroupPolicies#filter}
  */
  readonly filter?: DataSamsungcloudplatformAutoScalingGroupPoliciesFilter[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformAutoScalingGroupPoliciesContents {
}

export function dataSamsungcloudplatformAutoScalingGroupPoliciesContentsToTerraform(struct?: DataSamsungcloudplatformAutoScalingGroupPoliciesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformAutoScalingGroupPoliciesContentsToHclTerraform(struct?: DataSamsungcloudplatformAutoScalingGroupPoliciesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformAutoScalingGroupPoliciesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformAutoScalingGroupPoliciesContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformAutoScalingGroupPoliciesContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asg_id - computed: true, optional: false, required: false
  public get asgId() {
    return this.getStringAttribute('asg_id');
  }

  // comparison_operator - computed: true, optional: false, required: false
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }

  // cooldown_seconds - computed: true, optional: false, required: false
  public get cooldownSeconds() {
    return this.getNumberAttribute('cooldown_seconds');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // evaluation_minutes - computed: true, optional: false, required: false
  public get evaluationMinutes() {
    return this.getNumberAttribute('evaluation_minutes');
  }

  // metric_method - computed: true, optional: false, required: false
  public get metricMethod() {
    return this.getStringAttribute('metric_method');
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }

  // policy_state - computed: true, optional: false, required: false
  public get policyState() {
    return this.getStringAttribute('policy_state');
  }

  // scale_method - computed: true, optional: false, required: false
  public get scaleMethod() {
    return this.getStringAttribute('scale_method');
  }

  // scale_type - computed: true, optional: false, required: false
  public get scaleType() {
    return this.getStringAttribute('scale_type');
  }

  // scale_value - computed: true, optional: false, required: false
  public get scaleValue() {
    return this.getNumberAttribute('scale_value');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getStringAttribute('threshold');
  }

  // threshold_unit - computed: true, optional: false, required: false
  public get thresholdUnit() {
    return this.getStringAttribute('threshold_unit');
  }
}

export class DataSamsungcloudplatformAutoScalingGroupPoliciesContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformAutoScalingGroupPoliciesContentsOutputReference {
    return new DataSamsungcloudplatformAutoScalingGroupPoliciesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformAutoScalingGroupPoliciesFilter {
  /**
  * Filtering target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#name DataSamsungcloudplatformAutoScalingGroupPolicies#name}
  */
  readonly name: string;
  /**
  * Enable regex match for values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#use_regex DataSamsungcloudplatformAutoScalingGroupPolicies#use_regex}
  */
  readonly useRegex?: boolean | cdktf.IResolvable;
  /**
  * Filtering values. Each matching value is appended. (OR rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#values DataSamsungcloudplatformAutoScalingGroupPolicies#values}
  */
  readonly values: string[];
}

export function dataSamsungcloudplatformAutoScalingGroupPoliciesFilterToTerraform(struct?: DataSamsungcloudplatformAutoScalingGroupPoliciesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_regex: cdktf.booleanToTerraform(struct!.useRegex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataSamsungcloudplatformAutoScalingGroupPoliciesFilterToHclTerraform(struct?: DataSamsungcloudplatformAutoScalingGroupPoliciesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_regex: {
      value: cdktf.booleanToHclTerraform(struct!.useRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSamsungcloudplatformAutoScalingGroupPoliciesFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSamsungcloudplatformAutoScalingGroupPoliciesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRegex = this._useRegex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformAutoScalingGroupPoliciesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._useRegex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._useRegex = value.useRegex;
      this._values = value.values;
    }
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

  // use_regex - computed: false, optional: true, required: false
  private _useRegex?: boolean | cdktf.IResolvable; 
  public get useRegex() {
    return this.getBooleanAttribute('use_regex');
  }
  public set useRegex(value: boolean | cdktf.IResolvable) {
    this._useRegex = value;
  }
  public resetUseRegex() {
    this._useRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRegexInput() {
    return this._useRegex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataSamsungcloudplatformAutoScalingGroupPoliciesFilterList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformAutoScalingGroupPoliciesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformAutoScalingGroupPoliciesFilterOutputReference {
    return new DataSamsungcloudplatformAutoScalingGroupPoliciesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies samsungcloudplatform_auto_scaling_group_policies}
*/
export class DataSamsungcloudplatformAutoScalingGroupPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_auto_scaling_group_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformAutoScalingGroupPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformAutoScalingGroupPolicies to import
  * @param importFromId The id of the existing DataSamsungcloudplatformAutoScalingGroupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformAutoScalingGroupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_auto_scaling_group_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/auto_scaling_group_policies samsungcloudplatform_auto_scaling_group_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformAutoScalingGroupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformAutoScalingGroupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_auto_scaling_group_policies',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asgId = config.asgId;
    this._id = config.id;
    this._metricMethod = config.metricMethod;
    this._metricType = config.metricType;
    this._page = config.page;
    this._policyName = config.policyName;
    this._scaleType = config.scaleType;
    this._size = config.size;
    this._sort = config.sort;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asg_id - computed: false, optional: false, required: true
  private _asgId?: string; 
  public get asgId() {
    return this.getStringAttribute('asg_id');
  }
  public set asgId(value: string) {
    this._asgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asgIdInput() {
    return this._asgId;
  }

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformAutoScalingGroupPoliciesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // metric_method - computed: false, optional: true, required: false
  private _metricMethod?: string; 
  public get metricMethod() {
    return this.getStringAttribute('metric_method');
  }
  public set metricMethod(value: string) {
    this._metricMethod = value;
  }
  public resetMetricMethod() {
    this._metricMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMethodInput() {
    return this._metricMethod;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
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

  // scale_type - computed: false, optional: true, required: false
  private _scaleType?: string; 
  public get scaleType() {
    return this.getStringAttribute('scale_type');
  }
  public set scaleType(value: string) {
    this._scaleType = value;
  }
  public resetScaleType() {
    this._scaleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTypeInput() {
    return this._scaleType;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataSamsungcloudplatformAutoScalingGroupPoliciesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSamsungcloudplatformAutoScalingGroupPoliciesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asg_id: cdktf.stringToTerraform(this._asgId),
      id: cdktf.stringToTerraform(this._id),
      metric_method: cdktf.stringToTerraform(this._metricMethod),
      metric_type: cdktf.stringToTerraform(this._metricType),
      page: cdktf.numberToTerraform(this._page),
      policy_name: cdktf.stringToTerraform(this._policyName),
      scale_type: cdktf.stringToTerraform(this._scaleType),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.stringToTerraform(this._sort),
      filter: cdktf.listMapper(dataSamsungcloudplatformAutoScalingGroupPoliciesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asg_id: {
        value: cdktf.stringToHclTerraform(this._asgId),
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
      metric_method: {
        value: cdktf.stringToHclTerraform(this._metricMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_type: {
        value: cdktf.stringToHclTerraform(this._scaleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataSamsungcloudplatformAutoScalingGroupPoliciesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSamsungcloudplatformAutoScalingGroupPoliciesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
