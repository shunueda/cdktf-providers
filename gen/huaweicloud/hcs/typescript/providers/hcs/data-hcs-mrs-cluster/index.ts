// https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/data-sources/mrs_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHcsMrsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster ID of MRS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/data-sources/mrs_cluster#cluster_id DataHcsMrsCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/data-sources/mrs_cluster#id DataHcsMrsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region in which to query the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/data-sources/mrs_cluster#region DataHcsMrsCluster#region}
  */
  readonly region?: string;
}
export interface DataHcsMrsClusterClusterComponentListStruct {
}

export function dataHcsMrsClusterClusterComponentListStructToTerraform(struct?: DataHcsMrsClusterClusterComponentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClusterClusterComponentListStructToHclTerraform(struct?: DataHcsMrsClusterClusterComponentListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClusterClusterComponentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClusterClusterComponentListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClusterClusterComponentListStruct | undefined) {
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

export class DataHcsMrsClusterClusterComponentListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClusterClusterComponentListStructOutputReference {
    return new DataHcsMrsClusterClusterComponentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsMrsClusterClusterNodeGroups {
}

export function dataHcsMrsClusterClusterNodeGroupsToTerraform(struct?: DataHcsMrsClusterClusterNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClusterClusterNodeGroupsToHclTerraform(struct?: DataHcsMrsClusterClusterNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClusterClusterNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClusterClusterNodeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClusterClusterNodeGroups | undefined) {
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

export class DataHcsMrsClusterClusterNodeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClusterClusterNodeGroupsOutputReference {
    return new DataHcsMrsClusterClusterNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsMrsClusterClusterTaskNodeGroups {
}

export function dataHcsMrsClusterClusterTaskNodeGroupsToTerraform(struct?: DataHcsMrsClusterClusterTaskNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClusterClusterTaskNodeGroupsToHclTerraform(struct?: DataHcsMrsClusterClusterTaskNodeGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClusterClusterTaskNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClusterClusterTaskNodeGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClusterClusterTaskNodeGroups | undefined) {
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

export class DataHcsMrsClusterClusterTaskNodeGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClusterClusterTaskNodeGroupsOutputReference {
    return new DataHcsMrsClusterClusterTaskNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHcsMrsClusterCluster {
}

export function dataHcsMrsClusterClusterToTerraform(struct?: DataHcsMrsClusterCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHcsMrsClusterClusterToHclTerraform(struct?: DataHcsMrsClusterCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHcsMrsClusterClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHcsMrsClusterCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHcsMrsClusterCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone_id - computed: true, optional: false, required: false
  public get availabilityZoneId() {
    return this.getStringAttribute('availability_zone_id');
  }

  // az_code - computed: true, optional: false, required: false
  public get azCode() {
    return this.getStringAttribute('az_code');
  }

  // az_id - computed: true, optional: false, required: false
  public get azId() {
    return this.getStringAttribute('az_id');
  }

  // az_name - computed: true, optional: false, required: false
  public get azName() {
    return this.getStringAttribute('az_name');
  }

  // billing_type - computed: true, optional: false, required: false
  public get billingType() {
    return this.getStringAttribute('billing_type');
  }

  // charging_start_time - computed: true, optional: false, required: false
  public get chargingStartTime() {
    return this.getStringAttribute('charging_start_time');
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // cluster_state - computed: true, optional: false, required: false
  public get clusterState() {
    return this.getStringAttribute('cluster_state');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getNumberAttribute('cluster_type');
  }

  // cluster_version - computed: true, optional: false, required: false
  public get clusterVersion() {
    return this.getStringAttribute('cluster_version');
  }

  // component_list - computed: true, optional: false, required: false
  private _componentList = new DataHcsMrsClusterClusterComponentListStructList(this, "component_list", false);
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

  // create_at - computed: true, optional: false, required: false
  public get createAt() {
    return this.getStringAttribute('create_at');
  }

  // data_center - computed: true, optional: false, required: false
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }

  // deployment_id - computed: true, optional: false, required: false
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // enterprise_project_id - computed: true, optional: false, required: false
  public get enterpriseProjectId() {
    return this.getStringAttribute('enterprise_project_id');
  }

  // error_info - computed: true, optional: false, required: false
  public get errorInfo() {
    return this.getStringAttribute('error_info');
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // is_mrs_manager_finish - computed: true, optional: false, required: false
  public get isMrsManagerFinish() {
    return this.getBooleanAttribute('is_mrs_manager_finish');
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

  // node_groups - computed: true, optional: false, required: false
  private _nodeGroups = new DataHcsMrsClusterClusterNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }

  // node_public_cert_name - computed: true, optional: false, required: false
  public get nodePublicCertName() {
    return this.getStringAttribute('node_public_cert_name');
  }

  // oms_alternate_business_ip - computed: true, optional: false, required: false
  public get omsAlternateBusinessIp() {
    return this.getStringAttribute('oms_alternate_business_ip');
  }

  // oms_business_ip - computed: true, optional: false, required: false
  public get omsBusinessIp() {
    return this.getStringAttribute('oms_business_ip');
  }

  // oms_business_ip_port - computed: true, optional: false, required: false
  public get omsBusinessIpPort() {
    return this.getStringAttribute('oms_business_ip_port');
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

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // safe_mode - computed: true, optional: false, required: false
  public get safeMode() {
    return this.getNumberAttribute('safe_mode');
  }

  // scale - computed: true, optional: false, required: false
  public get scale() {
    return this.getStringAttribute('scale');
  }

  // security_groups_id - computed: true, optional: false, required: false
  public get securityGroupsId() {
    return this.getStringAttribute('security_groups_id');
  }

  // slave_security_groups_id - computed: true, optional: false, required: false
  public get slaveSecurityGroupsId() {
    return this.getStringAttribute('slave_security_groups_id');
  }

  // stage_desc - computed: true, optional: false, required: false
  public get stageDesc() {
    return this.getStringAttribute('stage_desc');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }

  // subnet_name - computed: true, optional: false, required: false
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // task_node_groups - computed: true, optional: false, required: false
  private _taskNodeGroups = new DataHcsMrsClusterClusterTaskNodeGroupsList(this, "task_node_groups", false);
  public get taskNodeGroups() {
    return this._taskNodeGroups;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // total_node_num - computed: true, optional: false, required: false
  public get totalNodeNum() {
    return this.getStringAttribute('total_node_num');
  }

  // update_at - computed: true, optional: false, required: false
  public get updateAt() {
    return this.getStringAttribute('update_at');
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

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
}

export class DataHcsMrsClusterClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataHcsMrsClusterClusterOutputReference {
    return new DataHcsMrsClusterClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/data-sources/mrs_cluster hcs_mrs_cluster}
*/
export class DataHcsMrsCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hcs_mrs_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHcsMrsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHcsMrsCluster to import
  * @param importFromId The id of the existing DataHcsMrsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/data-sources/mrs_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHcsMrsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hcs_mrs_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/huaweicloud/hcs/2.4.20/docs/data-sources/mrs_cluster hcs_mrs_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHcsMrsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataHcsMrsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'hcs_mrs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'hcs',
        providerVersion: '2.4.20',
        providerVersionConstraint: '2.4.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: false, required: false
  private _cluster = new DataHcsMrsClusterClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
