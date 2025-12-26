// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudClbTargetGroupListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list#id DataTencentcloudClbTargetGroupList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list#result_output_file DataTencentcloudClbTargetGroupList#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Target group ID array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list#target_group_ids DataTencentcloudClbTargetGroupList#target_group_ids}
  */
  readonly targetGroupIds?: string[];
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list#filters DataTencentcloudClbTargetGroupList#filters}
  */
  readonly filters?: DataTencentcloudClbTargetGroupListFilters[] | cdktf.IResolvable;
}
export interface DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRule {
}

export function dataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRuleToTerraform(struct?: DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRuleToHclTerraform(struct?: DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // listener_name - computed: true, optional: false, required: false
  public get listenerName() {
    return this.getStringAttribute('listener_name');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // load_balancer_name - computed: true, optional: false, required: false
  public get loadBalancerName() {
    return this.getStringAttribute('load_balancer_name');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRuleOutputReference {
    return new DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbTargetGroupListTargetGroupSet {
}

export function dataTencentcloudClbTargetGroupListTargetGroupSetToTerraform(struct?: DataTencentcloudClbTargetGroupListTargetGroupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudClbTargetGroupListTargetGroupSetToHclTerraform(struct?: DataTencentcloudClbTargetGroupListTargetGroupSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudClbTargetGroupListTargetGroupSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbTargetGroupListTargetGroupSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbTargetGroupListTargetGroupSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_rule - computed: true, optional: false, required: false
  private _associatedRule = new DataTencentcloudClbTargetGroupListTargetGroupSetAssociatedRuleList(this, "associated_rule", false);
  public get associatedRule() {
    return this._associatedRule;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // target_group_id - computed: true, optional: false, required: false
  public get targetGroupId() {
    return this.getStringAttribute('target_group_id');
  }

  // target_group_name - computed: true, optional: false, required: false
  public get targetGroupName() {
    return this.getStringAttribute('target_group_name');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataTencentcloudClbTargetGroupListTargetGroupSetList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudClbTargetGroupListTargetGroupSetOutputReference {
    return new DataTencentcloudClbTargetGroupListTargetGroupSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudClbTargetGroupListFilters {
  /**
  * Filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list#name DataTencentcloudClbTargetGroupList#name}
  */
  readonly name: string;
  /**
  * Filter value array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list#values DataTencentcloudClbTargetGroupList#values}
  */
  readonly values: string[];
}

export function dataTencentcloudClbTargetGroupListFiltersToTerraform(struct?: DataTencentcloudClbTargetGroupListFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataTencentcloudClbTargetGroupListFiltersToHclTerraform(struct?: DataTencentcloudClbTargetGroupListFilters | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataTencentcloudClbTargetGroupListFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudClbTargetGroupListFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudClbTargetGroupListFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataTencentcloudClbTargetGroupListFiltersList extends cdktf.ComplexList {
  public internalValue? : DataTencentcloudClbTargetGroupListFilters[] | cdktf.IResolvable

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
  public get(index: number): DataTencentcloudClbTargetGroupListFiltersOutputReference {
    return new DataTencentcloudClbTargetGroupListFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list tencentcloud_clb_target_group_list}
*/
export class DataTencentcloudClbTargetGroupList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_target_group_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudClbTargetGroupList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudClbTargetGroupList to import
  * @param importFromId The id of the existing DataTencentcloudClbTargetGroupList that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudClbTargetGroupList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_target_group_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/clb_target_group_list tencentcloud_clb_target_group_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudClbTargetGroupListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudClbTargetGroupListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_target_group_list',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._targetGroupIds = config.targetGroupIds;
    this._filters.internalValue = config.filters;
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

  // target_group_ids - computed: false, optional: true, required: false
  private _targetGroupIds?: string[]; 
  public get targetGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('target_group_ids'));
  }
  public set targetGroupIds(value: string[]) {
    this._targetGroupIds = value;
  }
  public resetTargetGroupIds() {
    this._targetGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdsInput() {
    return this._targetGroupIds;
  }

  // target_group_set - computed: true, optional: false, required: false
  private _targetGroupSet = new DataTencentcloudClbTargetGroupListTargetGroupSetList(this, "target_group_set", false);
  public get targetGroupSet() {
    return this._targetGroupSet;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new DataTencentcloudClbTargetGroupListFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: DataTencentcloudClbTargetGroupListFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      target_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._targetGroupIds),
      filters: cdktf.listMapper(dataTencentcloudClbTargetGroupListFiltersToTerraform, true)(this._filters.internalValue),
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
      target_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._targetGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      filters: {
        value: cdktf.listMapperHcl(dataTencentcloudClbTargetGroupListFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataTencentcloudClbTargetGroupListFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
