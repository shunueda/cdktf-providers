// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcsMrsClustersConfig extends cdktf.TerraformMetaArguments {
  /**
  * The enterprise project ID used to query clusters in a specified enterprise project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters#enterprise_project_id DataHcsMrsClusters#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters#id DataHcsMrsClusters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters#name DataHcsMrsClusters#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters#region DataHcsMrsClusters#region}
  */
  readonly region?: string;
  /**
  * The status of cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters#status DataHcsMrsClusters#status}
  */
  readonly status?: string;
  /**
  * You can search for a cluster by its tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters#tags DataHcsMrsClusters#tags}
  */
  readonly tags?: string;
}
export interface DataHcsMrsClustersClustersComponentListStruct {
}

export function dataHcsMrsClustersClustersComponentListStructToTerraform(struct?: DataHcsMrsClustersClustersComponentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClustersClustersComponentListStructToHclTerraform(struct?: DataHcsMrsClustersClustersComponentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClustersClustersComponentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClustersClustersComponentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClustersClustersComponentListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_desc - computed: true, optional: false, required: false
  public get componentDesc() {
    return this.getStringAttribute('component_desc');
  }

  // component_id - computed: true, optional: false, required: false
  public get componentId() {
    return this.getStringAttribute('component_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // component_version - computed: true, optional: false, required: false
  public get componentVersion() {
    return this.getStringAttribute('component_version');
  }
}

export class DataHcsMrsClustersClustersComponentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClustersClustersComponentListStructOutputReference {
    return new DataHcsMrsClustersClustersComponentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsMrsClustersClustersNodeGroups {
}

export function dataHcsMrsClustersClustersNodeGroupsToTerraform(struct?: DataHcsMrsClustersClustersNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClustersClustersNodeGroupsToHclTerraform(struct?: DataHcsMrsClustersClustersNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClustersClustersNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClustersClustersNodeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClustersClustersNodeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_volume_count - computed: true, optional: false, required: false
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }

  // data_volume_product_id - computed: true, optional: false, required: false
  public get dataVolumeProductId() {
    return this.getStringAttribute('data_volume_product_id');
  }

  // data_volume_resource_spec_code - computed: true, optional: false, required: false
  public get dataVolumeResourceSpecCode() {
    return this.getStringAttribute('data_volume_resource_spec_code');
  }

  // data_volume_resource_type - computed: true, optional: false, required: false
  public get dataVolumeResourceType() {
    return this.getStringAttribute('data_volume_resource_type');
  }

  // data_volume_size - computed: true, optional: false, required: false
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }

  // data_volume_type - computed: true, optional: false, required: false
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // node_product_id - computed: true, optional: false, required: false
  public get nodeProductId() {
    return this.getStringAttribute('node_product_id');
  }

  // node_size - computed: true, optional: false, required: false
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }

  // node_spec_id - computed: true, optional: false, required: false
  public get nodeSpecId() {
    return this.getStringAttribute('node_spec_id');
  }

  // root_volume_product_id - computed: true, optional: false, required: false
  public get rootVolumeProductId() {
    return this.getStringAttribute('root_volume_product_id');
  }

  // root_volume_resource_spec_code - computed: true, optional: false, required: false
  public get rootVolumeResourceSpecCode() {
    return this.getStringAttribute('root_volume_resource_spec_code');
  }

  // root_volume_resource_type - computed: true, optional: false, required: false
  public get rootVolumeResourceType() {
    return this.getStringAttribute('root_volume_resource_type');
  }

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }

  // vm_product_id - computed: true, optional: false, required: false
  public get vmProductId() {
    return this.getStringAttribute('vm_product_id');
  }

  // vm_spec_code - computed: true, optional: false, required: false
  public get vmSpecCode() {
    return this.getStringAttribute('vm_spec_code');
  }
}

export class DataHcsMrsClustersClustersNodeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClustersClustersNodeGroupsOutputReference {
    return new DataHcsMrsClustersClustersNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsMrsClustersClustersTaskNodeGroups {
}

export function dataHcsMrsClustersClustersTaskNodeGroupsToTerraform(struct?: DataHcsMrsClustersClustersTaskNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClustersClustersTaskNodeGroupsToHclTerraform(struct?: DataHcsMrsClustersClustersTaskNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClustersClustersTaskNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClustersClustersTaskNodeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClustersClustersTaskNodeGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_volume_count - computed: true, optional: false, required: false
  public get dataVolumeCount() {
    return this.getNumberAttribute('data_volume_count');
  }

  // data_volume_product_id - computed: true, optional: false, required: false
  public get dataVolumeProductId() {
    return this.getStringAttribute('data_volume_product_id');
  }

  // data_volume_resource_spec_code - computed: true, optional: false, required: false
  public get dataVolumeResourceSpecCode() {
    return this.getStringAttribute('data_volume_resource_spec_code');
  }

  // data_volume_resource_type - computed: true, optional: false, required: false
  public get dataVolumeResourceType() {
    return this.getStringAttribute('data_volume_resource_type');
  }

  // data_volume_size - computed: true, optional: false, required: false
  public get dataVolumeSize() {
    return this.getNumberAttribute('data_volume_size');
  }

  // data_volume_type - computed: true, optional: false, required: false
  public get dataVolumeType() {
    return this.getStringAttribute('data_volume_type');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // node_num - computed: true, optional: false, required: false
  public get nodeNum() {
    return this.getNumberAttribute('node_num');
  }

  // node_product_id - computed: true, optional: false, required: false
  public get nodeProductId() {
    return this.getStringAttribute('node_product_id');
  }

  // node_size - computed: true, optional: false, required: false
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }

  // node_spec_id - computed: true, optional: false, required: false
  public get nodeSpecId() {
    return this.getStringAttribute('node_spec_id');
  }

  // root_volume_product_id - computed: true, optional: false, required: false
  public get rootVolumeProductId() {
    return this.getStringAttribute('root_volume_product_id');
  }

  // root_volume_resource_spec_code - computed: true, optional: false, required: false
  public get rootVolumeResourceSpecCode() {
    return this.getStringAttribute('root_volume_resource_spec_code');
  }

  // root_volume_resource_type - computed: true, optional: false, required: false
  public get rootVolumeResourceType() {
    return this.getStringAttribute('root_volume_resource_type');
  }

  // root_volume_size - computed: true, optional: false, required: false
  public get rootVolumeSize() {
    return this.getNumberAttribute('root_volume_size');
  }

  // root_volume_type - computed: true, optional: false, required: false
  public get rootVolumeType() {
    return this.getStringAttribute('root_volume_type');
  }

  // vm_product_id - computed: true, optional: false, required: false
  public get vmProductId() {
    return this.getStringAttribute('vm_product_id');
  }

  // vm_spec_code - computed: true, optional: false, required: false
  public get vmSpecCode() {
    return this.getStringAttribute('vm_spec_code');
  }
}

export class DataHcsMrsClustersClustersTaskNodeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClustersClustersTaskNodeGroupsOutputReference {
    return new DataHcsMrsClustersClustersTaskNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsMrsClustersClusters {
}

export function dataHcsMrsClustersClustersToTerraform(struct?: DataHcsMrsClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClustersClustersToHclTerraform(struct?: DataHcsMrsClustersClusters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClustersClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClustersClusters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClustersClusters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // component_list - computed: true, optional: false, required: false
  private _componentList = new DataHcsMrsClustersClustersComponentListStructList(this, "component_list", false);
  public get componentList() {
    return this._componentList;
  }

  // core_data_volume_count - computed: true, optional: false, required: false
  public get coreDataVolumeCount() {
    return this.getNumberAttribute('core_data_volume_count');
  }

  // core_data_volume_size - computed: true, optional: false, required: false
  public get coreDataVolumeSize() {
    return this.getNumberAttribute('core_data_volume_size');
  }

  // core_data_volume_type - computed: true, optional: false, required: false
  public get coreDataVolumeType() {
    return this.getStringAttribute('core_data_volume_type');
  }

  // core_node_num - computed: true, optional: false, required: false
  public get coreNodeNum() {
    return this.getStringAttribute('core_node_num');
  }

  // core_node_product_id - computed: true, optional: false, required: false
  public get coreNodeProductId() {
    return this.getStringAttribute('core_node_product_id');
  }

  // core_node_size - computed: true, optional: false, required: false
  public get coreNodeSize() {
    return this.getStringAttribute('core_node_size');
  }

  // core_node_spec_id - computed: true, optional: false, required: false
  public get coreNodeSpecId() {
    return this.getStringAttribute('core_node_spec_id');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // eip_address - computed: true, optional: false, required: false
  public get eipAddress() {
    return this.getStringAttribute('eip_address');
  }

  // eip_id - computed: true, optional: false, required: false
  public get eipId() {
    return this.getStringAttribute('eip_id');
  }

  // eipv6_address - computed: true, optional: false, required: false
  public get eipv6Address() {
    return this.getStringAttribute('eipv6_address');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // external_alternate_ip - computed: true, optional: false, required: false
  public get externalAlternateIp() {
    return this.getStringAttribute('external_alternate_ip');
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }

  // fee - computed: true, optional: false, required: false
  public get fee() {
    return this.getStringAttribute('fee');
  }

  // hadoop_version - computed: true, optional: false, required: false
  public get hadoopVersion() {
    return this.getStringAttribute('hadoop_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // log_collection - computed: true, optional: false, required: false
  public get logCollection() {
    return this.getNumberAttribute('log_collection');
  }

  // master_data_volume_count - computed: true, optional: false, required: false
  public get masterDataVolumeCount() {
    return this.getNumberAttribute('master_data_volume_count');
  }

  // master_data_volume_size - computed: true, optional: false, required: false
  public get masterDataVolumeSize() {
    return this.getNumberAttribute('master_data_volume_size');
  }

  // master_data_volume_type - computed: true, optional: false, required: false
  public get masterDataVolumeType() {
    return this.getStringAttribute('master_data_volume_type');
  }

  // master_node_ip - computed: true, optional: false, required: false
  public get masterNodeIp() {
    return this.getStringAttribute('master_node_ip');
  }

  // master_node_num - computed: true, optional: false, required: false
  public get masterNodeNum() {
    return this.getStringAttribute('master_node_num');
  }

  // master_node_product_id - computed: true, optional: false, required: false
  public get masterNodeProductId() {
    return this.getStringAttribute('master_node_product_id');
  }

  // master_node_size - computed: true, optional: false, required: false
  public get masterNodeSize() {
    return this.getStringAttribute('master_node_size');
  }

  // master_node_spec_id - computed: true, optional: false, required: false
  public get masterNodeSpecId() {
    return this.getStringAttribute('master_node_spec_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // node_groups - computed: true, optional: false, required: false
  private _nodeGroups = new DataHcsMrsClustersClustersNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }

  // node_public_cert_name - computed: true, optional: false, required: false
  public get nodePublicCertName() {
    return this.getStringAttribute('node_public_cert_name');
  }

  // order_id - computed: true, optional: false, required: false
  public get orderId() {
    return this.getStringAttribute('order_id');
  }

  // period_type - computed: true, optional: false, required: false
  public get periodType() {
    return this.getNumberAttribute('period_type');
  }

  // private_ip_first - computed: true, optional: false, required: false
  public get privateIpFirst() {
    return this.getStringAttribute('private_ip_first');
  }

  // safe_mode - computed: true, optional: false, required: false
  public get safeMode() {
    return this.getNumberAttribute('safe_mode');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getStringAttribute('scale');
  }

  // security_group_id - computed: true, optional: false, required: false
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }

  // slave_security_group_id - computed: true, optional: false, required: false
  public get slaveSecurityGroupId() {
    return this.getStringAttribute('slave_security_group_id');
  }

  // stage_desc - computed: true, optional: false, required: false
  public get stageDesc() {
    return this.getStringAttribute('stage_desc');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // task_node_groups - computed: true, optional: false, required: false
  private _taskNodeGroups = new DataHcsMrsClustersClustersTaskNodeGroupsList(this, "task_node_groups", false);
  public get taskNodeGroups() {
    return this._taskNodeGroups;
  }

  // total_node_num - computed: true, optional: false, required: false
  public get totalNodeNum() {
    return this.getStringAttribute('total_node_num');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vnc - computed: true, optional: false, required: false
  public get vnc() {
    return this.getStringAttribute('vnc');
  }

  // volume_size - computed: true, optional: false, required: false
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }

  // volume_type - computed: true, optional: false, required: false
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

export class DataHcsMrsClustersClustersList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClustersClustersOutputReference {
    return new DataHcsMrsClustersClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters hcs_mrs_clusters}
*/
export class DataHcsMrsClusters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_mrs_clusters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcsMrsClusters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcsMrsClusters to import
  * @param importFromId The id of the existing DataHcsMrsClusters that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcsMrsClusters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_mrs_clusters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.19/docs/data-sources/mrs_clusters hcs_mrs_clusters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcsMrsClustersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHcsMrsClustersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hcs_mrs_clusters',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._id = config.id;
    this._name = config.name;
    this._region = config.region;
    this._status = config.status;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clusters - computed: true, optional: false, required: false
  private _clusters = new DataHcsMrsClustersClustersList(this, "clusters", false);
  public get clusters() {
    return this._clusters;
  }

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }
  public set enterpriseProjectId(value: string) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
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
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.stringToTerraform(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
