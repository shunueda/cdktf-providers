// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudAsScalingGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter results by launch configuration ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups#configuration_id DataTencentcloudAsScalingGroups#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups#id DataTencentcloudAsScalingGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups#result_output_file DataTencentcloudAsScalingGroups#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * A specified scaling group ID used to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups#scaling_group_id DataTencentcloudAsScalingGroups#scaling_group_id}
  */
  readonly scalingGroupId?: string;
  /**
  * A scaling group name used to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups#scaling_group_name DataTencentcloudAsScalingGroups#scaling_group_name}
  */
  readonly scalingGroupName?: string;
  /**
  * Tags used to query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups#tags DataTencentcloudAsScalingGroups#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttribute {
}

export function dataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttributeToTerraform(struct?: DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttributeToHclTerraform(struct?: DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttribute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttributeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttribute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttribute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttributeList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttributeOutputReference {
    return new DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttributeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIds {
}

export function dataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsToTerraform(struct?: DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsToHclTerraform(struct?: DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // listener_id - computed: true, optional: false, required: false
  public get listenerId() {
    return this.getStringAttribute('listener_id');
  }

  // load_balancer_id - computed: true, optional: false, required: false
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // target_attribute - computed: true, optional: false, required: false
  private _targetAttribute = new DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsTargetAttributeList(this, "target_attribute", false);
  public get targetAttribute() {
    return this._targetAttribute;
  }
}

export class DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsOutputReference {
    return new DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudAsScalingGroupsScalingGroupListStruct {
}

export function dataTencentcloudAsScalingGroupsScalingGroupListStructToTerraform(struct?: DataTencentcloudAsScalingGroupsScalingGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudAsScalingGroupsScalingGroupListStructToHclTerraform(struct?: DataTencentcloudAsScalingGroupsScalingGroupListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudAsScalingGroupsScalingGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudAsScalingGroupsScalingGroupListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudAsScalingGroupsScalingGroupListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // configuration_id - computed: true, optional: false, required: false
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_cooldown - computed: true, optional: false, required: false
  public get defaultCooldown() {
    return this.getNumberAttribute('default_cooldown');
  }

  // desired_capacity - computed: true, optional: false, required: false
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }

  // forward_balancer_ids - computed: true, optional: false, required: false
  private _forwardBalancerIds = new DataTencentcloudAsScalingGroupsScalingGroupListForwardBalancerIdsList(this, "forward_balancer_ids", false);
  public get forwardBalancerIds() {
    return this._forwardBalancerIds;
  }

  // instance_count - computed: true, optional: false, required: false
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }

  // load_balancer_ids - computed: true, optional: false, required: false
  public get loadBalancerIds() {
    return this.getListAttribute('load_balancer_ids');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // min_size - computed: true, optional: false, required: false
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }

  // multi_zone_subnet_policy - computed: true, optional: false, required: false
  public get multiZoneSubnetPolicy() {
    return this.getStringAttribute('multi_zone_subnet_policy');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // retry_policy - computed: true, optional: false, required: false
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }

  // scaling_group_id - computed: true, optional: false, required: false
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }

  // scaling_group_name - computed: true, optional: false, required: false
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // termination_policies - computed: true, optional: false, required: false
  public get terminationPolicies() {
    return this.getListAttribute('termination_policies');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}

export class DataTencentcloudAsScalingGroupsScalingGroupListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudAsScalingGroupsScalingGroupListStructOutputReference {
    return new DataTencentcloudAsScalingGroupsScalingGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups tencentcloud_as_scaling_groups}
*/
export class DataTencentcloudAsScalingGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_as_scaling_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudAsScalingGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudAsScalingGroups to import
  * @param importFromId The id of the existing DataTencentcloudAsScalingGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudAsScalingGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_as_scaling_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/as_scaling_groups tencentcloud_as_scaling_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudAsScalingGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudAsScalingGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_as_scaling_groups',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationId = config.configurationId;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._scalingGroupId = config.scalingGroupId;
    this._scalingGroupName = config.scalingGroupName;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
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

  // scaling_group_list - computed: true, optional: false, required: false
  private _scalingGroupList = new DataTencentcloudAsScalingGroupsScalingGroupListStructList(this, "scaling_group_list", false);
  public get scalingGroupList() {
    return this._scalingGroupList;
  }

  // scaling_group_name - computed: false, optional: true, required: false
  private _scalingGroupName?: string; 
  public get scalingGroupName() {
    return this.getStringAttribute('scaling_group_name');
  }
  public set scalingGroupName(value: string) {
    this._scalingGroupName = value;
  }
  public resetScalingGroupName() {
    this._scalingGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupNameInput() {
    return this._scalingGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      scaling_group_name: cdktf.stringToTerraform(this._scalingGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
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
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaling_group_name: {
        value: cdktf.stringToHclTerraform(this._scalingGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
