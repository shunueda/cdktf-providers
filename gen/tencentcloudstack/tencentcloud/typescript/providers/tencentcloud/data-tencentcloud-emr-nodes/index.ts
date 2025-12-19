// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudEmrNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resource type: Support all/host/pod, default is all.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#hardware_resource_type DataTencentcloudEmrNodes#hardware_resource_type}
  */
  readonly hardwareResourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#id DataTencentcloudEmrNodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Cluster instance ID, the instance ID is as follows: emr-xxxxxxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#instance_id DataTencentcloudEmrNodes#instance_id}
  */
  readonly instanceId: string;
  /**
  * The number returned per page, the default value is 100, and the maximum value is 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#limit DataTencentcloudEmrNodes#limit}
  */
  readonly limit?: number;
  /**
  * Node ID, the value is:
  * 				- all: Means to get all type nodes, except cdb information.
  * 				- master: Indicates that the master node information is obtained.
  * 				- core: Indicates that the core node information is obtained.
  * 				- task: indicates obtaining task node information.
  * 				- common: means to get common node information.
  * 				- router: Indicates obtaining router node information.
  * 				- db: Indicates that the cdb information for the normal state is obtained.
  * 				- recyle: Indicates that the node information in the Recycle Bin isolation, including the cdb information, is obtained.
  * 				- renew: Indicates that all node information to be renewed, including cddb information, is obtained, and the auto-renewal node will not be returned.
  * 				
  * 				Note: Only the above values are now supported, entering other values will cause an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#node_flag DataTencentcloudEmrNodes#node_flag}
  */
  readonly nodeFlag: string;
  /**
  * Page number, with a default value of 0, represents the first page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#offset DataTencentcloudEmrNodes#offset}
  */
  readonly offset?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#result_output_file DataTencentcloudEmrNodes#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudEmrNodesNodesCdbNodeInfo {
}

export function dataTencentcloudEmrNodesNodesCdbNodeInfoToTerraform(struct?: DataTencentcloudEmrNodesNodesCdbNodeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrNodesNodesCdbNodeInfoToHclTerraform(struct?: DataTencentcloudEmrNodesNodesCdbNodeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrNodesNodesCdbNodeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrNodesNodesCdbNodeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrNodesNodesCdbNodeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apply_time - computed: true, optional: false, required: false
  public get applyTime() {
    return this.getStringAttribute('apply_time');
  }

  // expire_flag - computed: true, optional: false, required: false
  public get expireFlag() {
    return this.getBooleanAttribute('expire_flag');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // is_auto_renew - computed: true, optional: false, required: false
  public get isAutoRenew() {
    return this.getNumberAttribute('is_auto_renew');
  }

  // mem_size - computed: true, optional: false, required: false
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }

  // pay_type - computed: true, optional: false, required: false
  public get payType() {
    return this.getNumberAttribute('pay_type');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // serial_no - computed: true, optional: false, required: false
  public get serialNo() {
    return this.getStringAttribute('serial_no');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getNumberAttribute('volume');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudEmrNodesNodesCdbNodeInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrNodesNodesCdbNodeInfoOutputReference {
    return new DataTencentcloudEmrNodesNodesCdbNodeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrNodesNodesMcMultiDisks {
}

export function dataTencentcloudEmrNodesNodesMcMultiDisksToTerraform(struct?: DataTencentcloudEmrNodesNodesMcMultiDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrNodesNodesMcMultiDisksToHclTerraform(struct?: DataTencentcloudEmrNodesNodesMcMultiDisks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrNodesNodesMcMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrNodesNodesMcMultiDisks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrNodesNodesMcMultiDisks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getNumberAttribute('volume');
  }
}

export class DataTencentcloudEmrNodesNodesMcMultiDisksList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrNodesNodesMcMultiDisksOutputReference {
    return new DataTencentcloudEmrNodesNodesMcMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrNodesNodesTags {
}

export function dataTencentcloudEmrNodesNodesTagsToTerraform(struct?: DataTencentcloudEmrNodesNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrNodesNodesTagsToHclTerraform(struct?: DataTencentcloudEmrNodesNodesTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrNodesNodesTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrNodesNodesTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrNodesNodesTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag_key - computed: true, optional: false, required: false
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }

  // tag_value - computed: true, optional: false, required: false
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
}

export class DataTencentcloudEmrNodesNodesTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrNodesNodesTagsOutputReference {
    return new DataTencentcloudEmrNodesNodesTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudEmrNodesNodes {
}

export function dataTencentcloudEmrNodesNodesToTerraform(struct?: DataTencentcloudEmrNodesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudEmrNodesNodesToHclTerraform(struct?: DataTencentcloudEmrNodesNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudEmrNodesNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudEmrNodesNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudEmrNodesNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getNumberAttribute('app_id');
  }

  // apply_time - computed: true, optional: false, required: false
  public get applyTime() {
    return this.getStringAttribute('apply_time');
  }

  // auto_flag - computed: true, optional: false, required: false
  public get autoFlag() {
    return this.getNumberAttribute('auto_flag');
  }

  // cdb_ip - computed: true, optional: false, required: false
  public get cdbIp() {
    return this.getStringAttribute('cdb_ip');
  }

  // cdb_node_info - computed: true, optional: false, required: false
  private _cdbNodeInfo = new DataTencentcloudEmrNodesNodesCdbNodeInfoList(this, "cdb_node_info", false);
  public get cdbNodeInfo() {
    return this._cdbNodeInfo;
  }

  // cdb_port - computed: true, optional: false, required: false
  public get cdbPort() {
    return this.getNumberAttribute('cdb_port');
  }

  // charge_type - computed: true, optional: false, required: false
  public get chargeType() {
    return this.getNumberAttribute('charge_type');
  }

  // cpu_num - computed: true, optional: false, required: false
  public get cpuNum() {
    return this.getNumberAttribute('cpu_num');
  }

  // destroyable - computed: true, optional: false, required: false
  public get destroyable() {
    return this.getNumberAttribute('destroyable');
  }

  // device_class - computed: true, optional: false, required: false
  public get deviceClass() {
    return this.getStringAttribute('device_class');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getStringAttribute('disk_size');
  }

  // dynamic_pod_spec - computed: true, optional: false, required: false
  public get dynamicPodSpec() {
    return this.getStringAttribute('dynamic_pod_spec');
  }

  // emr_resource_id - computed: true, optional: false, required: false
  public get emrResourceId() {
    return this.getStringAttribute('emr_resource_id');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // flag - computed: true, optional: false, required: false
  public get flag() {
    return this.getNumberAttribute('flag');
  }

  // free_time - computed: true, optional: false, required: false
  public get freeTime() {
    return this.getStringAttribute('free_time');
  }

  // hardware_resource_type - computed: true, optional: false, required: false
  public get hardwareResourceType() {
    return this.getStringAttribute('hardware_resource_type');
  }

  // hw_disk_size - computed: true, optional: false, required: false
  public get hwDiskSize() {
    return this.getNumberAttribute('hw_disk_size');
  }

  // hw_disk_size_desc - computed: true, optional: false, required: false
  public get hwDiskSizeDesc() {
    return this.getStringAttribute('hw_disk_size_desc');
  }

  // hw_mem_size - computed: true, optional: false, required: false
  public get hwMemSize() {
    return this.getNumberAttribute('hw_mem_size');
  }

  // hw_mem_size_desc - computed: true, optional: false, required: false
  public get hwMemSizeDesc() {
    return this.getStringAttribute('hw_mem_size_desc');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // is_auto_renew - computed: true, optional: false, required: false
  public get isAutoRenew() {
    return this.getNumberAttribute('is_auto_renew');
  }

  // is_dynamic_spec - computed: true, optional: false, required: false
  public get isDynamicSpec() {
    return this.getNumberAttribute('is_dynamic_spec');
  }

  // mc_multi_disks - computed: true, optional: false, required: false
  private _mcMultiDisks = new DataTencentcloudEmrNodesNodesMcMultiDisksList(this, "mc_multi_disks", false);
  public get mcMultiDisks() {
    return this._mcMultiDisks;
  }

  // mem_desc - computed: true, optional: false, required: false
  public get memDesc() {
    return this.getStringAttribute('mem_desc');
  }

  // mem_size - computed: true, optional: false, required: false
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }

  // mutable - computed: true, optional: false, required: false
  public get mutable() {
    return this.getNumberAttribute('mutable');
  }

  // name_tag - computed: true, optional: false, required: false
  public get nameTag() {
    return this.getStringAttribute('name_tag');
  }

  // order_no - computed: true, optional: false, required: false
  public get orderNo() {
    return this.getStringAttribute('order_no');
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // root_size - computed: true, optional: false, required: false
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }

  // serial_no - computed: true, optional: false, required: false
  public get serialNo() {
    return this.getStringAttribute('serial_no');
  }

  // services - computed: true, optional: false, required: false
  public get services() {
    return this.getStringAttribute('services');
  }

  // spec - computed: true, optional: false, required: false
  public get spec() {
    return this.getStringAttribute('spec');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }

  // support_modify_pay_mode - computed: true, optional: false, required: false
  public get supportModifyPayMode() {
    return this.getNumberAttribute('support_modify_pay_mode');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudEmrNodesNodesTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // wan_ip - computed: true, optional: false, required: false
  public get wanIp() {
    return this.getStringAttribute('wan_ip');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getNumberAttribute('zone_id');
  }
}

export class DataTencentcloudEmrNodesNodesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudEmrNodesNodesOutputReference {
    return new DataTencentcloudEmrNodesNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes tencentcloud_emr_nodes}
*/
export class DataTencentcloudEmrNodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_emr_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudEmrNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudEmrNodes to import
  * @param importFromId The id of the existing DataTencentcloudEmrNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudEmrNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_emr_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/data-sources/emr_nodes tencentcloud_emr_nodes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudEmrNodesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudEmrNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_emr_nodes',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hardwareResourceType = config.hardwareResourceType;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._limit = config.limit;
    this._nodeFlag = config.nodeFlag;
    this._offset = config.offset;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hardware_resource_type - computed: false, optional: true, required: false
  private _hardwareResourceType?: string; 
  public get hardwareResourceType() {
    return this.getStringAttribute('hardware_resource_type');
  }
  public set hardwareResourceType(value: string) {
    this._hardwareResourceType = value;
  }
  public resetHardwareResourceType() {
    this._hardwareResourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareResourceTypeInput() {
    return this._hardwareResourceType;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // node_flag - computed: false, optional: false, required: true
  private _nodeFlag?: string; 
  public get nodeFlag() {
    return this.getStringAttribute('node_flag');
  }
  public set nodeFlag(value: string) {
    this._nodeFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFlagInput() {
    return this._nodeFlag;
  }

  // nodes - computed: true, optional: false, required: false
  private _nodes = new DataTencentcloudEmrNodesNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hardware_resource_type: cdktf.stringToTerraform(this._hardwareResourceType),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      limit: cdktf.numberToTerraform(this._limit),
      node_flag: cdktf.stringToTerraform(this._nodeFlag),
      offset: cdktf.numberToTerraform(this._offset),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hardware_resource_type: {
        value: cdktf.stringToHclTerraform(this._hardwareResourceType),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_flag: {
        value: cdktf.stringToHclTerraform(this._nodeFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
