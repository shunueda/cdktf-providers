// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LindormInstanceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#arbiter_vswitch_id LindormInstanceV2#arbiter_vswitch_id}
  */
  readonly arbiterVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#arbiter_zone_id LindormInstanceV2#arbiter_zone_id}
  */
  readonly arbiterZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#arch_version LindormInstanceV2#arch_version}
  */
  readonly archVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#auto_renew_duration LindormInstanceV2#auto_renew_duration}
  */
  readonly autoRenewDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#auto_renewal LindormInstanceV2#auto_renewal}
  */
  readonly autoRenewal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#cloud_storage_size LindormInstanceV2#cloud_storage_size}
  */
  readonly cloudStorageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#cloud_storage_type LindormInstanceV2#cloud_storage_type}
  */
  readonly cloudStorageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#deletion_protection LindormInstanceV2#deletion_protection}
  */
  readonly deletionProtection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#duration LindormInstanceV2#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#id LindormInstanceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#instance_alias LindormInstanceV2#instance_alias}
  */
  readonly instanceAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#payment_type LindormInstanceV2#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#pricing_cycle LindormInstanceV2#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#primary_vswitch_id LindormInstanceV2#primary_vswitch_id}
  */
  readonly primaryVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#primary_zone_id LindormInstanceV2#primary_zone_id}
  */
  readonly primaryZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#standby_vswitch_id LindormInstanceV2#standby_vswitch_id}
  */
  readonly standbyVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#standby_zone_id LindormInstanceV2#standby_zone_id}
  */
  readonly standbyZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#vpc_id LindormInstanceV2#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#vswitch_id LindormInstanceV2#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#zone_id LindormInstanceV2#zone_id}
  */
  readonly zoneId: string;
  /**
  * engine_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#engine_list LindormInstanceV2#engine_list}
  */
  readonly engineList: LindormInstanceV2EngineListStruct[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#timeouts LindormInstanceV2#timeouts}
  */
  readonly timeouts?: LindormInstanceV2Timeouts;
  /**
  * white_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#white_ip_list LindormInstanceV2#white_ip_list}
  */
  readonly whiteIpList?: LindormInstanceV2WhiteIpListStruct[] | cdktf.IResolvable;
}
export interface LindormInstanceV2EngineListConnectAddressListStruct {
}

export function lindormInstanceV2EngineListConnectAddressListStructToTerraform(struct?: LindormInstanceV2EngineListConnectAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function lindormInstanceV2EngineListConnectAddressListStructToHclTerraform(struct?: LindormInstanceV2EngineListConnectAddressListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LindormInstanceV2EngineListConnectAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LindormInstanceV2EngineListConnectAddressListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LindormInstanceV2EngineListConnectAddressListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class LindormInstanceV2EngineListConnectAddressListStructList extends cdktf.ComplexList {

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
  public get(index: number): LindormInstanceV2EngineListConnectAddressListStructOutputReference {
    return new LindormInstanceV2EngineListConnectAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LindormInstanceV2EngineListNodeGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#node_count LindormInstanceV2#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#node_disk_size LindormInstanceV2#node_disk_size}
  */
  readonly nodeDiskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#node_disk_type LindormInstanceV2#node_disk_type}
  */
  readonly nodeDiskType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#node_spec LindormInstanceV2#node_spec}
  */
  readonly nodeSpec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#resource_group_name LindormInstanceV2#resource_group_name}
  */
  readonly resourceGroupName: string;
}

export function lindormInstanceV2EngineListNodeGroupToTerraform(struct?: LindormInstanceV2EngineListNodeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_disk_size: cdktf.numberToTerraform(struct!.nodeDiskSize),
    node_disk_type: cdktf.stringToTerraform(struct!.nodeDiskType),
    node_spec: cdktf.stringToTerraform(struct!.nodeSpec),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
  }
}


export function lindormInstanceV2EngineListNodeGroupToHclTerraform(struct?: LindormInstanceV2EngineListNodeGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.nodeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_spec: {
      value: cdktf.stringToHclTerraform(struct!.nodeSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LindormInstanceV2EngineListNodeGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LindormInstanceV2EngineListNodeGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDiskSize = this._nodeDiskSize;
    }
    if (this._nodeDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDiskType = this._nodeDiskType;
    }
    if (this._nodeSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpec = this._nodeSpec;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LindormInstanceV2EngineListNodeGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeCount = undefined;
      this._nodeDiskSize = undefined;
      this._nodeDiskType = undefined;
      this._nodeSpec = undefined;
      this._resourceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeCount = value.nodeCount;
      this._nodeDiskSize = value.nodeDiskSize;
      this._nodeDiskType = value.nodeDiskType;
      this._nodeSpec = value.nodeSpec;
      this._resourceGroupName = value.resourceGroupName;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // enable_attach_local_disk - computed: true, optional: false, required: false
  public get enableAttachLocalDisk() {
    return this.getBooleanAttribute('enable_attach_local_disk');
  }

  // memory_size_gi_b - computed: true, optional: false, required: false
  public get memorySizeGiB() {
    return this.getNumberAttribute('memory_size_gi_b');
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_disk_size - computed: false, optional: true, required: false
  private _nodeDiskSize?: number; 
  public get nodeDiskSize() {
    return this.getNumberAttribute('node_disk_size');
  }
  public set nodeDiskSize(value: number) {
    this._nodeDiskSize = value;
  }
  public resetNodeDiskSize() {
    this._nodeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDiskSizeInput() {
    return this._nodeDiskSize;
  }

  // node_disk_type - computed: false, optional: true, required: false
  private _nodeDiskType?: string; 
  public get nodeDiskType() {
    return this.getStringAttribute('node_disk_type');
  }
  public set nodeDiskType(value: string) {
    this._nodeDiskType = value;
  }
  public resetNodeDiskType() {
    this._nodeDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDiskTypeInput() {
    return this._nodeDiskType;
  }

  // node_spec - computed: false, optional: false, required: true
  private _nodeSpec?: string; 
  public get nodeSpec() {
    return this.getStringAttribute('node_spec');
  }
  public set nodeSpec(value: string) {
    this._nodeSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecInput() {
    return this._nodeSpec;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // spec_id - computed: true, optional: false, required: false
  public get specId() {
    return this.getStringAttribute('spec_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class LindormInstanceV2EngineListNodeGroupList extends cdktf.ComplexList {
  public internalValue? : LindormInstanceV2EngineListNodeGroup[] | cdktf.IResolvable

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
  public get(index: number): LindormInstanceV2EngineListNodeGroupOutputReference {
    return new LindormInstanceV2EngineListNodeGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LindormInstanceV2EngineListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#engine_type LindormInstanceV2#engine_type}
  */
  readonly engineType: string;
  /**
  * node_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#node_group LindormInstanceV2#node_group}
  */
  readonly nodeGroup?: LindormInstanceV2EngineListNodeGroup[] | cdktf.IResolvable;
}

export function lindormInstanceV2EngineListStructToTerraform(struct?: LindormInstanceV2EngineListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine_type: cdktf.stringToTerraform(struct!.engineType),
    node_group: cdktf.listMapper(lindormInstanceV2EngineListNodeGroupToTerraform, true)(struct!.nodeGroup),
  }
}


export function lindormInstanceV2EngineListStructToHclTerraform(struct?: LindormInstanceV2EngineListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine_type: {
      value: cdktf.stringToHclTerraform(struct!.engineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.listMapperHcl(lindormInstanceV2EngineListNodeGroupToHclTerraform, true)(struct!.nodeGroup),
      isBlock: true,
      type: "set",
      storageClassType: "LindormInstanceV2EngineListNodeGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LindormInstanceV2EngineListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LindormInstanceV2EngineListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineType = this._engineType;
    }
    if (this._nodeGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LindormInstanceV2EngineListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._engineType = undefined;
      this._nodeGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._engineType = value.engineType;
      this._nodeGroup.internalValue = value.nodeGroup;
    }
  }

  // connect_address_list - computed: true, optional: false, required: false
  private _connectAddressList = new LindormInstanceV2EngineListConnectAddressListStructList(this, "connect_address_list", true);
  public get connectAddressList() {
    return this._connectAddressList;
  }

  // engine_type - computed: false, optional: false, required: true
  private _engineType?: string; 
  public get engineType() {
    return this.getStringAttribute('engine_type');
  }
  public set engineType(value: string) {
    this._engineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineTypeInput() {
    return this._engineType;
  }

  // is_last_version - computed: true, optional: false, required: false
  public get isLastVersion() {
    return this.getBooleanAttribute('is_last_version');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getStringAttribute('latest_version');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup = new LindormInstanceV2EngineListNodeGroupList(this, "node_group", true);
  public get nodeGroup() {
    return this._nodeGroup;
  }
  public putNodeGroup(value: LindormInstanceV2EngineListNodeGroup[] | cdktf.IResolvable) {
    this._nodeGroup.internalValue = value;
  }
  public resetNodeGroup() {
    this._nodeGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup.internalValue;
  }
}

export class LindormInstanceV2EngineListStructList extends cdktf.ComplexList {
  public internalValue? : LindormInstanceV2EngineListStruct[] | cdktf.IResolvable

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
  public get(index: number): LindormInstanceV2EngineListStructOutputReference {
    return new LindormInstanceV2EngineListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LindormInstanceV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#create LindormInstanceV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#delete LindormInstanceV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#update LindormInstanceV2#update}
  */
  readonly update?: string;
}

export function lindormInstanceV2TimeoutsToTerraform(struct?: LindormInstanceV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lindormInstanceV2TimeoutsToHclTerraform(struct?: LindormInstanceV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LindormInstanceV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LindormInstanceV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LindormInstanceV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface LindormInstanceV2WhiteIpListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#group_name LindormInstanceV2#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#ip_list LindormInstanceV2#ip_list}
  */
  readonly ipList: string;
}

export function lindormInstanceV2WhiteIpListStructToTerraform(struct?: LindormInstanceV2WhiteIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    ip_list: cdktf.stringToTerraform(struct!.ipList),
  }
}


export function lindormInstanceV2WhiteIpListStructToHclTerraform(struct?: LindormInstanceV2WhiteIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_list: {
      value: cdktf.stringToHclTerraform(struct!.ipList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LindormInstanceV2WhiteIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LindormInstanceV2WhiteIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._ipList !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LindormInstanceV2WhiteIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._ipList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._ipList = value.ipList;
    }
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // ip_list - computed: false, optional: false, required: true
  private _ipList?: string; 
  public get ipList() {
    return this.getStringAttribute('ip_list');
  }
  public set ipList(value: string) {
    this._ipList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }
}

export class LindormInstanceV2WhiteIpListStructList extends cdktf.ComplexList {
  public internalValue? : LindormInstanceV2WhiteIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): LindormInstanceV2WhiteIpListStructOutputReference {
    return new LindormInstanceV2WhiteIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2 alicloud_lindorm_instance_v2}
*/
export class LindormInstanceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_lindorm_instance_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LindormInstanceV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LindormInstanceV2 to import
  * @param importFromId The id of the existing LindormInstanceV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LindormInstanceV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_lindorm_instance_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/lindorm_instance_v2 alicloud_lindorm_instance_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LindormInstanceV2Config
  */
  public constructor(scope: Construct, id: string, config: LindormInstanceV2Config) {
    super(scope, id, {
      terraformResourceType: 'alicloud_lindorm_instance_v2',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arbiterVswitchId = config.arbiterVswitchId;
    this._arbiterZoneId = config.arbiterZoneId;
    this._archVersion = config.archVersion;
    this._autoRenewDuration = config.autoRenewDuration;
    this._autoRenewal = config.autoRenewal;
    this._cloudStorageSize = config.cloudStorageSize;
    this._cloudStorageType = config.cloudStorageType;
    this._deletionProtection = config.deletionProtection;
    this._duration = config.duration;
    this._id = config.id;
    this._instanceAlias = config.instanceAlias;
    this._paymentType = config.paymentType;
    this._pricingCycle = config.pricingCycle;
    this._primaryVswitchId = config.primaryVswitchId;
    this._primaryZoneId = config.primaryZoneId;
    this._standbyVswitchId = config.standbyVswitchId;
    this._standbyZoneId = config.standbyZoneId;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._engineList.internalValue = config.engineList;
    this._timeouts.internalValue = config.timeouts;
    this._whiteIpList.internalValue = config.whiteIpList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arbiter_vswitch_id - computed: false, optional: true, required: false
  private _arbiterVswitchId?: string; 
  public get arbiterVswitchId() {
    return this.getStringAttribute('arbiter_vswitch_id');
  }
  public set arbiterVswitchId(value: string) {
    this._arbiterVswitchId = value;
  }
  public resetArbiterVswitchId() {
    this._arbiterVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arbiterVswitchIdInput() {
    return this._arbiterVswitchId;
  }

  // arbiter_zone_id - computed: false, optional: true, required: false
  private _arbiterZoneId?: string; 
  public get arbiterZoneId() {
    return this.getStringAttribute('arbiter_zone_id');
  }
  public set arbiterZoneId(value: string) {
    this._arbiterZoneId = value;
  }
  public resetArbiterZoneId() {
    this._arbiterZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arbiterZoneIdInput() {
    return this._arbiterZoneId;
  }

  // arch_version - computed: false, optional: false, required: true
  private _archVersion?: string; 
  public get archVersion() {
    return this.getStringAttribute('arch_version');
  }
  public set archVersion(value: string) {
    this._archVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archVersionInput() {
    return this._archVersion;
  }

  // auto_renew_duration - computed: false, optional: true, required: false
  private _autoRenewDuration?: string; 
  public get autoRenewDuration() {
    return this.getStringAttribute('auto_renew_duration');
  }
  public set autoRenewDuration(value: string) {
    this._autoRenewDuration = value;
  }
  public resetAutoRenewDuration() {
    this._autoRenewDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewDurationInput() {
    return this._autoRenewDuration;
  }

  // auto_renewal - computed: false, optional: true, required: false
  private _autoRenewal?: boolean | cdktf.IResolvable; 
  public get autoRenewal() {
    return this.getBooleanAttribute('auto_renewal');
  }
  public set autoRenewal(value: boolean | cdktf.IResolvable) {
    this._autoRenewal = value;
  }
  public resetAutoRenewal() {
    this._autoRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewalInput() {
    return this._autoRenewal;
  }

  // cloud_storage_size - computed: false, optional: true, required: false
  private _cloudStorageSize?: number; 
  public get cloudStorageSize() {
    return this.getNumberAttribute('cloud_storage_size');
  }
  public set cloudStorageSize(value: number) {
    this._cloudStorageSize = value;
  }
  public resetCloudStorageSize() {
    this._cloudStorageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageSizeInput() {
    return this._cloudStorageSize;
  }

  // cloud_storage_type - computed: false, optional: true, required: false
  private _cloudStorageType?: string; 
  public get cloudStorageType() {
    return this.getStringAttribute('cloud_storage_type');
  }
  public set cloudStorageType(value: string) {
    this._cloudStorageType = value;
  }
  public resetCloudStorageType() {
    this._cloudStorageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageTypeInput() {
    return this._cloudStorageType;
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: string; 
  public get deletionProtection() {
    return this.getStringAttribute('deletion_protection');
  }
  public set deletionProtection(value: string) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // instance_alias - computed: false, optional: false, required: true
  private _instanceAlias?: string; 
  public get instanceAlias() {
    return this.getStringAttribute('instance_alias');
  }
  public set instanceAlias(value: string) {
    this._instanceAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAliasInput() {
    return this._instanceAlias;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // primary_vswitch_id - computed: false, optional: true, required: false
  private _primaryVswitchId?: string; 
  public get primaryVswitchId() {
    return this.getStringAttribute('primary_vswitch_id');
  }
  public set primaryVswitchId(value: string) {
    this._primaryVswitchId = value;
  }
  public resetPrimaryVswitchId() {
    this._primaryVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVswitchIdInput() {
    return this._primaryVswitchId;
  }

  // primary_zone_id - computed: false, optional: true, required: false
  private _primaryZoneId?: string; 
  public get primaryZoneId() {
    return this.getStringAttribute('primary_zone_id');
  }
  public set primaryZoneId(value: string) {
    this._primaryZoneId = value;
  }
  public resetPrimaryZoneId() {
    this._primaryZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryZoneIdInput() {
    return this._primaryZoneId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // standby_vswitch_id - computed: false, optional: true, required: false
  private _standbyVswitchId?: string; 
  public get standbyVswitchId() {
    return this.getStringAttribute('standby_vswitch_id');
  }
  public set standbyVswitchId(value: string) {
    this._standbyVswitchId = value;
  }
  public resetStandbyVswitchId() {
    this._standbyVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyVswitchIdInput() {
    return this._standbyVswitchId;
  }

  // standby_zone_id - computed: false, optional: true, required: false
  private _standbyZoneId?: string; 
  public get standbyZoneId() {
    return this.getStringAttribute('standby_zone_id');
  }
  public set standbyZoneId(value: string) {
    this._standbyZoneId = value;
  }
  public resetStandbyZoneId() {
    this._standbyZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyZoneIdInput() {
    return this._standbyZoneId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // engine_list - computed: false, optional: false, required: true
  private _engineList = new LindormInstanceV2EngineListStructList(this, "engine_list", true);
  public get engineList() {
    return this._engineList;
  }
  public putEngineList(value: LindormInstanceV2EngineListStruct[] | cdktf.IResolvable) {
    this._engineList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineListInput() {
    return this._engineList.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LindormInstanceV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LindormInstanceV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // white_ip_list - computed: false, optional: true, required: false
  private _whiteIpList = new LindormInstanceV2WhiteIpListStructList(this, "white_ip_list", false);
  public get whiteIpList() {
    return this._whiteIpList;
  }
  public putWhiteIpList(value: LindormInstanceV2WhiteIpListStruct[] | cdktf.IResolvable) {
    this._whiteIpList.internalValue = value;
  }
  public resetWhiteIpList() {
    this._whiteIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteIpListInput() {
    return this._whiteIpList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arbiter_vswitch_id: cdktf.stringToTerraform(this._arbiterVswitchId),
      arbiter_zone_id: cdktf.stringToTerraform(this._arbiterZoneId),
      arch_version: cdktf.stringToTerraform(this._archVersion),
      auto_renew_duration: cdktf.stringToTerraform(this._autoRenewDuration),
      auto_renewal: cdktf.booleanToTerraform(this._autoRenewal),
      cloud_storage_size: cdktf.numberToTerraform(this._cloudStorageSize),
      cloud_storage_type: cdktf.stringToTerraform(this._cloudStorageType),
      deletion_protection: cdktf.stringToTerraform(this._deletionProtection),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      instance_alias: cdktf.stringToTerraform(this._instanceAlias),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      primary_vswitch_id: cdktf.stringToTerraform(this._primaryVswitchId),
      primary_zone_id: cdktf.stringToTerraform(this._primaryZoneId),
      standby_vswitch_id: cdktf.stringToTerraform(this._standbyVswitchId),
      standby_zone_id: cdktf.stringToTerraform(this._standbyZoneId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      engine_list: cdktf.listMapper(lindormInstanceV2EngineListStructToTerraform, true)(this._engineList.internalValue),
      timeouts: lindormInstanceV2TimeoutsToTerraform(this._timeouts.internalValue),
      white_ip_list: cdktf.listMapper(lindormInstanceV2WhiteIpListStructToTerraform, true)(this._whiteIpList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arbiter_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._arbiterVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arbiter_zone_id: {
        value: cdktf.stringToHclTerraform(this._arbiterZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch_version: {
        value: cdktf.stringToHclTerraform(this._archVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_duration: {
        value: cdktf.stringToHclTerraform(this._autoRenewDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renewal: {
        value: cdktf.booleanToHclTerraform(this._autoRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloud_storage_size: {
        value: cdktf.numberToHclTerraform(this._cloudStorageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_storage_type: {
        value: cdktf.stringToHclTerraform(this._cloudStorageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.stringToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_alias: {
        value: cdktf.stringToHclTerraform(this._instanceAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._primaryVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_zone_id: {
        value: cdktf.stringToHclTerraform(this._primaryZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._standbyVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_zone_id: {
        value: cdktf.stringToHclTerraform(this._standbyZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_list: {
        value: cdktf.listMapperHcl(lindormInstanceV2EngineListStructToHclTerraform, true)(this._engineList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LindormInstanceV2EngineListStructList",
      },
      timeouts: {
        value: lindormInstanceV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LindormInstanceV2Timeouts",
      },
      white_ip_list: {
        value: cdktf.listMapperHcl(lindormInstanceV2WhiteIpListStructToHclTerraform, true)(this._whiteIpList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LindormInstanceV2WhiteIpListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
