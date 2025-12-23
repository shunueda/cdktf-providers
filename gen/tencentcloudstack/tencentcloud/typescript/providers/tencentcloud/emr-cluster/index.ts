// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmrClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * 0 means turn off automatic renewal, 1 means turn on automatic renewal. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#auto_renew EmrCluster#auto_renew}
  */
  readonly autoRenew?: number;
  /**
  * Display strategy of EMR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#display_strategy EmrCluster#display_strategy}
  */
  readonly displayStrategy?: string;
  /**
  * Access the external file system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#extend_fs_field EmrCluster#extend_fs_field}
  */
  readonly extendFsField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#id EmrCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the instance, which can contain 6 to 36 English letters, Chinese characters, digits, dashes(-), or underscores(_).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#instance_name EmrCluster#instance_name}
  */
  readonly instanceName: string;
  /**
  * Instance login settings. There are two optional fields:- password: Instance login password: 8-16 characters, including uppercase letters, lowercase letters, numbers and special characters. Special symbols only support! @% ^ *. The first bit of the password cannot be a special character;- public_key_id: Public key id. After the key is associated, the instance can be accessed through the corresponding private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#login_settings EmrCluster#login_settings}
  */
  readonly loginSettings?: { [key: string]: string };
  /**
  * true means that cross-AZ deployment is enabled; it is only a user parameter when creating a new cluster, and no subsequent adjustment is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_zone EmrCluster#multi_zone}
  */
  readonly multiZone?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable the cluster Master node public network. Value range:
  * 				- NEED_MASTER_WAN: Indicates that the cluster Master node public network is enabled.
  * 				- NOT_NEED_MASTER_WAN: Indicates that it is not turned on.
  * 				By default, the cluster Master node internet is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#need_master_wan EmrCluster#need_master_wan}
  */
  readonly needMasterWan?: string;
  /**
  * The pay mode of instance. 0 represent POSTPAID_BY_HOUR, 1 represent PREPAID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#pay_mode EmrCluster#pay_mode}
  */
  readonly payMode: number;
  /**
  * The location of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#placement EmrCluster#placement}
  */
  readonly placement?: { [key: string]: string };
  /**
  * Product ID. Different products ID represents different EMR product versions. Value range:
  * 	- 16: represents EMR-V2.3.0
  * 	- 20: represents EMR-V2.5.0
  * 	- 25: represents EMR-V3.1.0
  * 	- 27: represents KAFKA-V1.0.0
  * 	- 30: represents EMR-V2.6.0
  * 	- 33: represents EMR-V3.2.1
  * 	- 34: represents EMR-V3.3.0
  * 	- 37: represents EMR-V3.4.0
  * 	- 38: represents EMR-V2.7.0
  * 	- 44: represents EMR-V3.5.0
  * 	- 50: represents KAFKA-V2.0.0
  * 	- 51: represents STARROCKS-V1.4.0
  * 	- 53: represents EMR-V3.6.0
  * 	- 54: represents STARROCKS-V2.0.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#product_id EmrCluster#product_id}
  */
  readonly productId: number;
  /**
  * Scene-based value:
  * 	- Hadoop-Kudu
  * 	- Hadoop-Zookeeper
  * 	- Hadoop-Presto
  * 	- Hadoop-Hbase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#scene_name EmrCluster#scene_name}
  */
  readonly sceneName?: string;
  /**
  * The ID of the security group to which the instance belongs, in the form of sg-xxxxxxxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#sg_id EmrCluster#sg_id}
  */
  readonly sgId?: string;
  /**
  * The softwares of a EMR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#softwares EmrCluster#softwares}
  */
  readonly softwares: string[];
  /**
  * The flag whether the instance support high availability.(0=>not support, 1=>support).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#support_ha EmrCluster#support_ha}
  */
  readonly supportHa: number;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#tags EmrCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The length of time the instance was purchased. Use with TimeUnit.When TimeUnit is s, the parameter can only be filled in at 3600, representing a metered instance.
  * When TimeUnit is m, the number filled in by this parameter indicates the length of purchase of the monthly instance of the package year, such as 1 for one month of purchase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#time_span EmrCluster#time_span}
  */
  readonly timeSpan?: number;
  /**
  * The unit of time in which the instance was purchased. When PayMode is 0, TimeUnit can only take values of s(second). When PayMode is 1, TimeUnit can only take the value m(month).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#time_unit EmrCluster#time_unit}
  */
  readonly timeUnit?: string;
  /**
  * The private net config of EMR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#vpc_settings EmrCluster#vpc_settings}
  */
  readonly vpcSettings: { [key: string]: string };
  /**
  * multi_zone_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_zone_setting EmrCluster#multi_zone_setting}
  */
  readonly multiZoneSetting?: EmrClusterMultiZoneSetting[] | cdktf.IResolvable;
  /**
  * placement_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#placement_info EmrCluster#placement_info}
  */
  readonly placementInfo?: EmrClusterPlacementInfo;
  /**
  * pre_executed_file_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#pre_executed_file_settings EmrCluster#pre_executed_file_settings}
  */
  readonly preExecutedFileSettings?: EmrClusterPreExecutedFileSettings[] | cdktf.IResolvable;
  /**
  * resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#resource_spec EmrCluster#resource_spec}
  */
  readonly resourceSpec?: EmrClusterResourceSpec;
  /**
  * terminate_node_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#terminate_node_info EmrCluster#terminate_node_info}
  */
  readonly terminateNodeInfo?: EmrClusterTerminateNodeInfo[] | cdktf.IResolvable;
}
export interface EmrClusterMultiZoneSettingPlacement {
  /**
  * Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#zone EmrCluster#zone}
  */
  readonly zone: string;
}

export function emrClusterMultiZoneSettingPlacementToTerraform(struct?: EmrClusterMultiZoneSettingPlacementOutputReference | EmrClusterMultiZoneSettingPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function emrClusterMultiZoneSettingPlacementToHclTerraform(struct?: EmrClusterMultiZoneSettingPlacementOutputReference | EmrClusterMultiZoneSettingPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterMultiZoneSettingPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._zone = value.zone;
    }
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksOutputReference {
    return new EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecCommonResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterMultiZoneSettingResourceSpecCommonResourceSpecToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecCommonResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterMultiZoneSettingResourceSpecCommonResourceSpecToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecCommonResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecCommonResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksOutputReference {
    return new EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecCoreResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterMultiZoneSettingResourceSpecCoreResourceSpecToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecCoreResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterMultiZoneSettingResourceSpecCoreResourceSpecToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecCoreResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecCoreResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksOutputReference {
    return new EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecMasterResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterMultiZoneSettingResourceSpecMasterResourceSpecToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecMasterResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterMultiZoneSettingResourceSpecMasterResourceSpecToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecMasterResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecMasterResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksOutputReference {
    return new EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterMultiZoneSettingResourceSpecTaskResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterMultiZoneSettingResourceSpecTaskResourceSpecToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecTaskResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterMultiZoneSettingResourceSpecTaskResourceSpecToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpecTaskResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpecTaskResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterMultiZoneSettingResourceSpec {
  /**
  * The number of common node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#common_count EmrCluster#common_count}
  */
  readonly commonCount?: number;
  /**
  * The number of core node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#core_count EmrCluster#core_count}
  */
  readonly coreCount?: number;
  /**
  * The number of master node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#master_count EmrCluster#master_count}
  */
  readonly masterCount?: number;
  /**
  * The number of core node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#task_count EmrCluster#task_count}
  */
  readonly taskCount?: number;
  /**
  * common_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#common_resource_spec EmrCluster#common_resource_spec}
  */
  readonly commonResourceSpec?: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpec;
  /**
  * core_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#core_resource_spec EmrCluster#core_resource_spec}
  */
  readonly coreResourceSpec?: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpec;
  /**
  * master_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#master_resource_spec EmrCluster#master_resource_spec}
  */
  readonly masterResourceSpec?: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpec;
  /**
  * task_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#task_resource_spec EmrCluster#task_resource_spec}
  */
  readonly taskResourceSpec?: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpec;
}

export function emrClusterMultiZoneSettingResourceSpecToTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_count: cdktf.numberToTerraform(struct!.commonCount),
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    master_count: cdktf.numberToTerraform(struct!.masterCount),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    common_resource_spec: emrClusterMultiZoneSettingResourceSpecCommonResourceSpecToTerraform(struct!.commonResourceSpec),
    core_resource_spec: emrClusterMultiZoneSettingResourceSpecCoreResourceSpecToTerraform(struct!.coreResourceSpec),
    master_resource_spec: emrClusterMultiZoneSettingResourceSpecMasterResourceSpecToTerraform(struct!.masterResourceSpec),
    task_resource_spec: emrClusterMultiZoneSettingResourceSpecTaskResourceSpecToTerraform(struct!.taskResourceSpec),
  }
}


export function emrClusterMultiZoneSettingResourceSpecToHclTerraform(struct?: EmrClusterMultiZoneSettingResourceSpecOutputReference | EmrClusterMultiZoneSettingResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_count: {
      value: cdktf.numberToHclTerraform(struct!.commonCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    core_count: {
      value: cdktf.numberToHclTerraform(struct!.coreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_count: {
      value: cdktf.numberToHclTerraform(struct!.masterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_count: {
      value: cdktf.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    common_resource_spec: {
      value: emrClusterMultiZoneSettingResourceSpecCommonResourceSpecToHclTerraform(struct!.commonResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecList",
    },
    core_resource_spec: {
      value: emrClusterMultiZoneSettingResourceSpecCoreResourceSpecToHclTerraform(struct!.coreResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecList",
    },
    master_resource_spec: {
      value: emrClusterMultiZoneSettingResourceSpecMasterResourceSpecToHclTerraform(struct!.masterResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecList",
    },
    task_resource_spec: {
      value: emrClusterMultiZoneSettingResourceSpecTaskResourceSpecToHclTerraform(struct!.taskResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterMultiZoneSettingResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonCount = this._commonCount;
    }
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._masterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCount = this._masterCount;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._commonResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonResourceSpec = this._commonResourceSpec?.internalValue;
    }
    if (this._coreResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreResourceSpec = this._coreResourceSpec?.internalValue;
    }
    if (this._masterResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterResourceSpec = this._masterResourceSpec?.internalValue;
    }
    if (this._taskResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskResourceSpec = this._taskResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSettingResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonCount = undefined;
      this._coreCount = undefined;
      this._masterCount = undefined;
      this._taskCount = undefined;
      this._commonResourceSpec.internalValue = undefined;
      this._coreResourceSpec.internalValue = undefined;
      this._masterResourceSpec.internalValue = undefined;
      this._taskResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonCount = value.commonCount;
      this._coreCount = value.coreCount;
      this._masterCount = value.masterCount;
      this._taskCount = value.taskCount;
      this._commonResourceSpec.internalValue = value.commonResourceSpec;
      this._coreResourceSpec.internalValue = value.coreResourceSpec;
      this._masterResourceSpec.internalValue = value.masterResourceSpec;
      this._taskResourceSpec.internalValue = value.taskResourceSpec;
    }
  }

  // common_count - computed: true, optional: true, required: false
  private _commonCount?: number; 
  public get commonCount() {
    return this.getNumberAttribute('common_count');
  }
  public set commonCount(value: number) {
    this._commonCount = value;
  }
  public resetCommonCount() {
    this._commonCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonCountInput() {
    return this._commonCount;
  }

  // core_count - computed: true, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // master_count - computed: true, optional: true, required: false
  private _masterCount?: number; 
  public get masterCount() {
    return this.getNumberAttribute('master_count');
  }
  public set masterCount(value: number) {
    this._masterCount = value;
  }
  public resetMasterCount() {
    this._masterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCountInput() {
    return this._masterCount;
  }

  // task_count - computed: true, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // common_resource_spec - computed: false, optional: true, required: false
  private _commonResourceSpec = new EmrClusterMultiZoneSettingResourceSpecCommonResourceSpecOutputReference(this, "common_resource_spec");
  public get commonResourceSpec() {
    return this._commonResourceSpec;
  }
  public putCommonResourceSpec(value: EmrClusterMultiZoneSettingResourceSpecCommonResourceSpec) {
    this._commonResourceSpec.internalValue = value;
  }
  public resetCommonResourceSpec() {
    this._commonResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonResourceSpecInput() {
    return this._commonResourceSpec.internalValue;
  }

  // core_resource_spec - computed: false, optional: true, required: false
  private _coreResourceSpec = new EmrClusterMultiZoneSettingResourceSpecCoreResourceSpecOutputReference(this, "core_resource_spec");
  public get coreResourceSpec() {
    return this._coreResourceSpec;
  }
  public putCoreResourceSpec(value: EmrClusterMultiZoneSettingResourceSpecCoreResourceSpec) {
    this._coreResourceSpec.internalValue = value;
  }
  public resetCoreResourceSpec() {
    this._coreResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreResourceSpecInput() {
    return this._coreResourceSpec.internalValue;
  }

  // master_resource_spec - computed: false, optional: true, required: false
  private _masterResourceSpec = new EmrClusterMultiZoneSettingResourceSpecMasterResourceSpecOutputReference(this, "master_resource_spec");
  public get masterResourceSpec() {
    return this._masterResourceSpec;
  }
  public putMasterResourceSpec(value: EmrClusterMultiZoneSettingResourceSpecMasterResourceSpec) {
    this._masterResourceSpec.internalValue = value;
  }
  public resetMasterResourceSpec() {
    this._masterResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterResourceSpecInput() {
    return this._masterResourceSpec.internalValue;
  }

  // task_resource_spec - computed: false, optional: true, required: false
  private _taskResourceSpec = new EmrClusterMultiZoneSettingResourceSpecTaskResourceSpecOutputReference(this, "task_resource_spec");
  public get taskResourceSpec() {
    return this._taskResourceSpec;
  }
  public putTaskResourceSpec(value: EmrClusterMultiZoneSettingResourceSpecTaskResourceSpec) {
    this._taskResourceSpec.internalValue = value;
  }
  public resetTaskResourceSpec() {
    this._taskResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskResourceSpecInput() {
    return this._taskResourceSpec.internalValue;
  }
}
export interface EmrClusterMultiZoneSetting {
  /**
  * The private net config of EMR instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#vpc_settings EmrCluster#vpc_settings}
  */
  readonly vpcSettings: { [key: string]: string };
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#placement EmrCluster#placement}
  */
  readonly placement?: EmrClusterMultiZoneSettingPlacement;
  /**
  * resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#resource_spec EmrCluster#resource_spec}
  */
  readonly resourceSpec?: EmrClusterMultiZoneSettingResourceSpec;
}

export function emrClusterMultiZoneSettingToTerraform(struct?: EmrClusterMultiZoneSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vpcSettings),
    placement: emrClusterMultiZoneSettingPlacementToTerraform(struct!.placement),
    resource_spec: emrClusterMultiZoneSettingResourceSpecToTerraform(struct!.resourceSpec),
  }
}


export function emrClusterMultiZoneSettingToHclTerraform(struct?: EmrClusterMultiZoneSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vpcSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    placement: {
      value: emrClusterMultiZoneSettingPlacementToHclTerraform(struct!.placement),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterMultiZoneSettingPlacementList",
    },
    resource_spec: {
      value: emrClusterMultiZoneSettingResourceSpecToHclTerraform(struct!.resourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterMultiZoneSettingResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterMultiZoneSettingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterMultiZoneSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSettings = this._vpcSettings;
    }
    if (this._placement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placement = this._placement?.internalValue;
    }
    if (this._resourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSpec = this._resourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterMultiZoneSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcSettings = undefined;
      this._placement.internalValue = undefined;
      this._resourceSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcSettings = value.vpcSettings;
      this._placement.internalValue = value.placement;
      this._resourceSpec.internalValue = value.resourceSpec;
    }
  }

  // vpc_settings - computed: false, optional: false, required: true
  private _vpcSettings?: { [key: string]: string }; 
  public get vpcSettings() {
    return this.getStringMapAttribute('vpc_settings');
  }
  public set vpcSettings(value: { [key: string]: string }) {
    this._vpcSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSettingsInput() {
    return this._vpcSettings;
  }

  // placement - computed: false, optional: true, required: false
  private _placement = new EmrClusterMultiZoneSettingPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: EmrClusterMultiZoneSettingPlacement) {
    this._placement.internalValue = value;
  }
  public resetPlacement() {
    this._placement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // resource_spec - computed: false, optional: true, required: false
  private _resourceSpec = new EmrClusterMultiZoneSettingResourceSpecOutputReference(this, "resource_spec");
  public get resourceSpec() {
    return this._resourceSpec;
  }
  public putResourceSpec(value: EmrClusterMultiZoneSettingResourceSpec) {
    this._resourceSpec.internalValue = value;
  }
  public resetResourceSpec() {
    this._resourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecInput() {
    return this._resourceSpec.internalValue;
  }
}

export class EmrClusterMultiZoneSettingList extends cdktf.ComplexList {
  public internalValue? : EmrClusterMultiZoneSetting[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterMultiZoneSettingOutputReference {
    return new EmrClusterMultiZoneSettingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterPlacementInfo {
  /**
  * Project id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#project_id EmrCluster#project_id}
  */
  readonly projectId?: number;
  /**
  * Zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#zone EmrCluster#zone}
  */
  readonly zone: string;
}

export function emrClusterPlacementInfoToTerraform(struct?: EmrClusterPlacementInfoOutputReference | EmrClusterPlacementInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.numberToTerraform(struct!.projectId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function emrClusterPlacementInfoToHclTerraform(struct?: EmrClusterPlacementInfoOutputReference | EmrClusterPlacementInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterPlacementInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterPlacementInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterPlacementInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
      this._zone = value.zone;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface EmrClusterPreExecutedFileSettings {
  /**
  * Execution script parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#args EmrCluster#args}
  */
  readonly args?: string[];
  /**
  * Script file name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cos_file_name EmrCluster#cos_file_name}
  */
  readonly cosFileName?: string;
  /**
  * The cos address of the script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cos_file_uri EmrCluster#cos_file_uri}
  */
  readonly cosFileUri?: string;
  /**
  * Cos secretId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cos_secret_id EmrCluster#cos_secret_id}
  */
  readonly cosSecretId?: string;
  /**
  * Cos secretKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cos_secret_key EmrCluster#cos_secret_key}
  */
  readonly cosSecretKey?: string;
  /**
  * Remark.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#remark EmrCluster#remark}
  */
  readonly remark?: string;
  /**
  * Run order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#run_order EmrCluster#run_order}
  */
  readonly runOrder?: number;
  /**
  * `resourceAfter` or `clusterAfter`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#when_run EmrCluster#when_run}
  */
  readonly whenRun?: string;
}

export function emrClusterPreExecutedFileSettingsToTerraform(struct?: EmrClusterPreExecutedFileSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    cos_file_name: cdktf.stringToTerraform(struct!.cosFileName),
    cos_file_uri: cdktf.stringToTerraform(struct!.cosFileUri),
    cos_secret_id: cdktf.stringToTerraform(struct!.cosSecretId),
    cos_secret_key: cdktf.stringToTerraform(struct!.cosSecretKey),
    remark: cdktf.stringToTerraform(struct!.remark),
    run_order: cdktf.numberToTerraform(struct!.runOrder),
    when_run: cdktf.stringToTerraform(struct!.whenRun),
  }
}


export function emrClusterPreExecutedFileSettingsToHclTerraform(struct?: EmrClusterPreExecutedFileSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cos_file_name: {
      value: cdktf.stringToHclTerraform(struct!.cosFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.cosFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.cosSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.cosSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remark: {
      value: cdktf.stringToHclTerraform(struct!.remark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_order: {
      value: cdktf.numberToHclTerraform(struct!.runOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    when_run: {
      value: cdktf.stringToHclTerraform(struct!.whenRun),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterPreExecutedFileSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterPreExecutedFileSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._cosFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosFileName = this._cosFileName;
    }
    if (this._cosFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosFileUri = this._cosFileUri;
    }
    if (this._cosSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosSecretId = this._cosSecretId;
    }
    if (this._cosSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosSecretKey = this._cosSecretKey;
    }
    if (this._remark !== undefined) {
      hasAnyValues = true;
      internalValueResult.remark = this._remark;
    }
    if (this._runOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.runOrder = this._runOrder;
    }
    if (this._whenRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenRun = this._whenRun;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterPreExecutedFileSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._cosFileName = undefined;
      this._cosFileUri = undefined;
      this._cosSecretId = undefined;
      this._cosSecretKey = undefined;
      this._remark = undefined;
      this._runOrder = undefined;
      this._whenRun = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._cosFileName = value.cosFileName;
      this._cosFileUri = value.cosFileUri;
      this._cosSecretId = value.cosSecretId;
      this._cosSecretKey = value.cosSecretKey;
      this._remark = value.remark;
      this._runOrder = value.runOrder;
      this._whenRun = value.whenRun;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // cos_file_name - computed: false, optional: true, required: false
  private _cosFileName?: string; 
  public get cosFileName() {
    return this.getStringAttribute('cos_file_name');
  }
  public set cosFileName(value: string) {
    this._cosFileName = value;
  }
  public resetCosFileName() {
    this._cosFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosFileNameInput() {
    return this._cosFileName;
  }

  // cos_file_uri - computed: false, optional: true, required: false
  private _cosFileUri?: string; 
  public get cosFileUri() {
    return this.getStringAttribute('cos_file_uri');
  }
  public set cosFileUri(value: string) {
    this._cosFileUri = value;
  }
  public resetCosFileUri() {
    this._cosFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosFileUriInput() {
    return this._cosFileUri;
  }

  // cos_secret_id - computed: false, optional: true, required: false
  private _cosSecretId?: string; 
  public get cosSecretId() {
    return this.getStringAttribute('cos_secret_id');
  }
  public set cosSecretId(value: string) {
    this._cosSecretId = value;
  }
  public resetCosSecretId() {
    this._cosSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosSecretIdInput() {
    return this._cosSecretId;
  }

  // cos_secret_key - computed: false, optional: true, required: false
  private _cosSecretKey?: string; 
  public get cosSecretKey() {
    return this.getStringAttribute('cos_secret_key');
  }
  public set cosSecretKey(value: string) {
    this._cosSecretKey = value;
  }
  public resetCosSecretKey() {
    this._cosSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosSecretKeyInput() {
    return this._cosSecretKey;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // run_order - computed: false, optional: true, required: false
  private _runOrder?: number; 
  public get runOrder() {
    return this.getNumberAttribute('run_order');
  }
  public set runOrder(value: number) {
    this._runOrder = value;
  }
  public resetRunOrder() {
    this._runOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runOrderInput() {
    return this._runOrder;
  }

  // when_run - computed: false, optional: true, required: false
  private _whenRun?: string; 
  public get whenRun() {
    return this.getStringAttribute('when_run');
  }
  public set whenRun(value: string) {
    this._whenRun = value;
  }
  public resetWhenRun() {
    this._whenRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenRunInput() {
    return this._whenRun;
  }
}

export class EmrClusterPreExecutedFileSettingsList extends cdktf.ComplexList {
  public internalValue? : EmrClusterPreExecutedFileSettings[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterPreExecutedFileSettingsOutputReference {
    return new EmrClusterPreExecutedFileSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterResourceSpecCommonResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterResourceSpecCommonResourceSpecMultiDisksToTerraform(struct?: EmrClusterResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterResourceSpecCommonResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecCommonResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecCommonResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterResourceSpecCommonResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterResourceSpecCommonResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterResourceSpecCommonResourceSpecMultiDisksOutputReference {
    return new EmrClusterResourceSpecCommonResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterResourceSpecCommonResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterResourceSpecCommonResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterResourceSpecCommonResourceSpecToTerraform(struct?: EmrClusterResourceSpecCommonResourceSpecOutputReference | EmrClusterResourceSpecCommonResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterResourceSpecCommonResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterResourceSpecCommonResourceSpecToHclTerraform(struct?: EmrClusterResourceSpecCommonResourceSpecOutputReference | EmrClusterResourceSpecCommonResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterResourceSpecCommonResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterResourceSpecCommonResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecCommonResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterResourceSpecCommonResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecCommonResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterResourceSpecCommonResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterResourceSpecCommonResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterResourceSpecCoreResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterResourceSpecCoreResourceSpecMultiDisksToTerraform(struct?: EmrClusterResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterResourceSpecCoreResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecCoreResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecCoreResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterResourceSpecCoreResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterResourceSpecCoreResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterResourceSpecCoreResourceSpecMultiDisksOutputReference {
    return new EmrClusterResourceSpecCoreResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterResourceSpecCoreResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterResourceSpecCoreResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterResourceSpecCoreResourceSpecToTerraform(struct?: EmrClusterResourceSpecCoreResourceSpecOutputReference | EmrClusterResourceSpecCoreResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterResourceSpecCoreResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterResourceSpecCoreResourceSpecToHclTerraform(struct?: EmrClusterResourceSpecCoreResourceSpecOutputReference | EmrClusterResourceSpecCoreResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterResourceSpecCoreResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterResourceSpecCoreResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecCoreResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterResourceSpecCoreResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecCoreResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterResourceSpecCoreResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterResourceSpecCoreResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterResourceSpecMasterResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterResourceSpecMasterResourceSpecMultiDisksToTerraform(struct?: EmrClusterResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterResourceSpecMasterResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecMasterResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecMasterResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterResourceSpecMasterResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterResourceSpecMasterResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterResourceSpecMasterResourceSpecMultiDisksOutputReference {
    return new EmrClusterResourceSpecMasterResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterResourceSpecMasterResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterResourceSpecMasterResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterResourceSpecMasterResourceSpecToTerraform(struct?: EmrClusterResourceSpecMasterResourceSpecOutputReference | EmrClusterResourceSpecMasterResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterResourceSpecMasterResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterResourceSpecMasterResourceSpecToHclTerraform(struct?: EmrClusterResourceSpecMasterResourceSpecOutputReference | EmrClusterResourceSpecMasterResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterResourceSpecMasterResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterResourceSpecMasterResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecMasterResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterResourceSpecMasterResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecMasterResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterResourceSpecMasterResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterResourceSpecMasterResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterResourceSpecTaskResourceSpecMultiDisks {
  /**
  * Number of cloud disks of this type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#count EmrCluster#count}
  */
  readonly count?: number;
  /**
  * Cloud disk type
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_HSSD: Represents enhanced SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Cloud disk size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#volume EmrCluster#volume}
  */
  readonly volume?: number;
}

export function emrClusterResourceSpecTaskResourceSpecMultiDisksToTerraform(struct?: EmrClusterResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    volume: cdktf.numberToTerraform(struct!.volume),
  }
}


export function emrClusterResourceSpecTaskResourceSpecMultiDisksToHclTerraform(struct?: EmrClusterResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.numberToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecTaskResourceSpecMultiDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecTaskResourceSpecMultiDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._diskType = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._diskType = value.diskType;
      this._volume = value.volume;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // volume - computed: true, optional: true, required: false
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  public resetVolume() {
    this._volume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class EmrClusterResourceSpecTaskResourceSpecMultiDisksList extends cdktf.ComplexList {
  public internalValue? : EmrClusterResourceSpecTaskResourceSpecMultiDisks[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterResourceSpecTaskResourceSpecMultiDisksOutputReference {
    return new EmrClusterResourceSpecTaskResourceSpecMultiDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EmrClusterResourceSpecTaskResourceSpec {
  /**
  * Number of CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cpu EmrCluster#cpu}
  */
  readonly cpu?: number;
  /**
  * Data disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_size EmrCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * disk types. Value range:
  * 	- CLOUD_SSD: Represents cloud SSD;
  * 	- CLOUD_PREMIUM: Represents efficient cloud disk;
  * 	- CLOUD_BASIC: Represents Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#disk_type EmrCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * Memory size in M.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#mem_size EmrCluster#mem_size}
  */
  readonly memSize?: number;
  /**
  * Root disk capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#root_size EmrCluster#root_size}
  */
  readonly rootSize?: number;
  /**
  * Node specification description, such as CVM.SA2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#spec EmrCluster#spec}
  */
  readonly spec?: string;
  /**
  * Storage type. Value range:
  * 	- 4: Represents cloud SSD;
  * 	- 5: Represents efficient cloud disk;
  * 	- 6: Represents enhanced SSD Cloud Block Storage;
  * 	- 11: Represents throughput Cloud Block Storage;
  * 	- 12: Represents extremely fast SSD Cloud Block Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#storage_type EmrCluster#storage_type}
  */
  readonly storageType?: number;
  /**
  * multi_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#multi_disks EmrCluster#multi_disks}
  */
  readonly multiDisks?: EmrClusterResourceSpecTaskResourceSpecMultiDisks[] | cdktf.IResolvable;
}

export function emrClusterResourceSpecTaskResourceSpecToTerraform(struct?: EmrClusterResourceSpecTaskResourceSpecOutputReference | EmrClusterResourceSpecTaskResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    mem_size: cdktf.numberToTerraform(struct!.memSize),
    root_size: cdktf.numberToTerraform(struct!.rootSize),
    spec: cdktf.stringToTerraform(struct!.spec),
    storage_type: cdktf.numberToTerraform(struct!.storageType),
    multi_disks: cdktf.listMapper(emrClusterResourceSpecTaskResourceSpecMultiDisksToTerraform, true)(struct!.multiDisks),
  }
}


export function emrClusterResourceSpecTaskResourceSpecToHclTerraform(struct?: EmrClusterResourceSpecTaskResourceSpecOutputReference | EmrClusterResourceSpecTaskResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.numberToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_size: {
      value: cdktf.numberToHclTerraform(struct!.memSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_size: {
      value: cdktf.numberToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spec: {
      value: cdktf.stringToHclTerraform(struct!.spec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_type: {
      value: cdktf.numberToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_disks: {
      value: cdktf.listMapperHcl(emrClusterResourceSpecTaskResourceSpecMultiDisksToHclTerraform, true)(struct!.multiDisks),
      isBlock: true,
      type: "set",
      storageClassType: "EmrClusterResourceSpecTaskResourceSpecMultiDisksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecTaskResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterResourceSpecTaskResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._memSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memSize = this._memSize;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._spec !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._multiDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiDisks = this._multiDisks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpecTaskResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._memSize = undefined;
      this._rootSize = undefined;
      this._spec = undefined;
      this._storageType = undefined;
      this._multiDisks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._memSize = value.memSize;
      this._rootSize = value.rootSize;
      this._spec = value.spec;
      this._storageType = value.storageType;
      this._multiDisks.internalValue = value.multiDisks;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // mem_size - computed: false, optional: true, required: false
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  public resetMemSize() {
    this._memSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: number; 
  public get rootSize() {
    return this.getNumberAttribute('root_size');
  }
  public set rootSize(value: number) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // spec - computed: false, optional: true, required: false
  private _spec?: string; 
  public get spec() {
    return this.getStringAttribute('spec');
  }
  public set spec(value: string) {
    this._spec = value;
  }
  public resetSpec() {
    this._spec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: number; 
  public get storageType() {
    return this.getNumberAttribute('storage_type');
  }
  public set storageType(value: number) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // multi_disks - computed: false, optional: true, required: false
  private _multiDisks = new EmrClusterResourceSpecTaskResourceSpecMultiDisksList(this, "multi_disks", true);
  public get multiDisks() {
    return this._multiDisks;
  }
  public putMultiDisks(value: EmrClusterResourceSpecTaskResourceSpecMultiDisks[] | cdktf.IResolvable) {
    this._multiDisks.internalValue = value;
  }
  public resetMultiDisks() {
    this._multiDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDisksInput() {
    return this._multiDisks.internalValue;
  }
}
export interface EmrClusterResourceSpec {
  /**
  * The number of common node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#common_count EmrCluster#common_count}
  */
  readonly commonCount?: number;
  /**
  * The number of core node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#core_count EmrCluster#core_count}
  */
  readonly coreCount?: number;
  /**
  * The number of master node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#master_count EmrCluster#master_count}
  */
  readonly masterCount?: number;
  /**
  * The number of core node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#task_count EmrCluster#task_count}
  */
  readonly taskCount?: number;
  /**
  * common_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#common_resource_spec EmrCluster#common_resource_spec}
  */
  readonly commonResourceSpec?: EmrClusterResourceSpecCommonResourceSpec;
  /**
  * core_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#core_resource_spec EmrCluster#core_resource_spec}
  */
  readonly coreResourceSpec?: EmrClusterResourceSpecCoreResourceSpec;
  /**
  * master_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#master_resource_spec EmrCluster#master_resource_spec}
  */
  readonly masterResourceSpec?: EmrClusterResourceSpecMasterResourceSpec;
  /**
  * task_resource_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#task_resource_spec EmrCluster#task_resource_spec}
  */
  readonly taskResourceSpec?: EmrClusterResourceSpecTaskResourceSpec;
}

export function emrClusterResourceSpecToTerraform(struct?: EmrClusterResourceSpecOutputReference | EmrClusterResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_count: cdktf.numberToTerraform(struct!.commonCount),
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    master_count: cdktf.numberToTerraform(struct!.masterCount),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    common_resource_spec: emrClusterResourceSpecCommonResourceSpecToTerraform(struct!.commonResourceSpec),
    core_resource_spec: emrClusterResourceSpecCoreResourceSpecToTerraform(struct!.coreResourceSpec),
    master_resource_spec: emrClusterResourceSpecMasterResourceSpecToTerraform(struct!.masterResourceSpec),
    task_resource_spec: emrClusterResourceSpecTaskResourceSpecToTerraform(struct!.taskResourceSpec),
  }
}


export function emrClusterResourceSpecToHclTerraform(struct?: EmrClusterResourceSpecOutputReference | EmrClusterResourceSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_count: {
      value: cdktf.numberToHclTerraform(struct!.commonCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    core_count: {
      value: cdktf.numberToHclTerraform(struct!.coreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    master_count: {
      value: cdktf.numberToHclTerraform(struct!.masterCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_count: {
      value: cdktf.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    common_resource_spec: {
      value: emrClusterResourceSpecCommonResourceSpecToHclTerraform(struct!.commonResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterResourceSpecCommonResourceSpecList",
    },
    core_resource_spec: {
      value: emrClusterResourceSpecCoreResourceSpecToHclTerraform(struct!.coreResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterResourceSpecCoreResourceSpecList",
    },
    master_resource_spec: {
      value: emrClusterResourceSpecMasterResourceSpecToHclTerraform(struct!.masterResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterResourceSpecMasterResourceSpecList",
    },
    task_resource_spec: {
      value: emrClusterResourceSpecTaskResourceSpecToHclTerraform(struct!.taskResourceSpec),
      isBlock: true,
      type: "list",
      storageClassType: "EmrClusterResourceSpecTaskResourceSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterResourceSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EmrClusterResourceSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonCount = this._commonCount;
    }
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._masterCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterCount = this._masterCount;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._commonResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonResourceSpec = this._commonResourceSpec?.internalValue;
    }
    if (this._coreResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreResourceSpec = this._coreResourceSpec?.internalValue;
    }
    if (this._masterResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterResourceSpec = this._masterResourceSpec?.internalValue;
    }
    if (this._taskResourceSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskResourceSpec = this._taskResourceSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterResourceSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonCount = undefined;
      this._coreCount = undefined;
      this._masterCount = undefined;
      this._taskCount = undefined;
      this._commonResourceSpec.internalValue = undefined;
      this._coreResourceSpec.internalValue = undefined;
      this._masterResourceSpec.internalValue = undefined;
      this._taskResourceSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonCount = value.commonCount;
      this._coreCount = value.coreCount;
      this._masterCount = value.masterCount;
      this._taskCount = value.taskCount;
      this._commonResourceSpec.internalValue = value.commonResourceSpec;
      this._coreResourceSpec.internalValue = value.coreResourceSpec;
      this._masterResourceSpec.internalValue = value.masterResourceSpec;
      this._taskResourceSpec.internalValue = value.taskResourceSpec;
    }
  }

  // common_count - computed: true, optional: true, required: false
  private _commonCount?: number; 
  public get commonCount() {
    return this.getNumberAttribute('common_count');
  }
  public set commonCount(value: number) {
    this._commonCount = value;
  }
  public resetCommonCount() {
    this._commonCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonCountInput() {
    return this._commonCount;
  }

  // core_count - computed: true, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
  }

  // master_count - computed: true, optional: true, required: false
  private _masterCount?: number; 
  public get masterCount() {
    return this.getNumberAttribute('master_count');
  }
  public set masterCount(value: number) {
    this._masterCount = value;
  }
  public resetMasterCount() {
    this._masterCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterCountInput() {
    return this._masterCount;
  }

  // task_count - computed: true, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // common_resource_spec - computed: false, optional: true, required: false
  private _commonResourceSpec = new EmrClusterResourceSpecCommonResourceSpecOutputReference(this, "common_resource_spec");
  public get commonResourceSpec() {
    return this._commonResourceSpec;
  }
  public putCommonResourceSpec(value: EmrClusterResourceSpecCommonResourceSpec) {
    this._commonResourceSpec.internalValue = value;
  }
  public resetCommonResourceSpec() {
    this._commonResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonResourceSpecInput() {
    return this._commonResourceSpec.internalValue;
  }

  // core_resource_spec - computed: false, optional: true, required: false
  private _coreResourceSpec = new EmrClusterResourceSpecCoreResourceSpecOutputReference(this, "core_resource_spec");
  public get coreResourceSpec() {
    return this._coreResourceSpec;
  }
  public putCoreResourceSpec(value: EmrClusterResourceSpecCoreResourceSpec) {
    this._coreResourceSpec.internalValue = value;
  }
  public resetCoreResourceSpec() {
    this._coreResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreResourceSpecInput() {
    return this._coreResourceSpec.internalValue;
  }

  // master_resource_spec - computed: false, optional: true, required: false
  private _masterResourceSpec = new EmrClusterResourceSpecMasterResourceSpecOutputReference(this, "master_resource_spec");
  public get masterResourceSpec() {
    return this._masterResourceSpec;
  }
  public putMasterResourceSpec(value: EmrClusterResourceSpecMasterResourceSpec) {
    this._masterResourceSpec.internalValue = value;
  }
  public resetMasterResourceSpec() {
    this._masterResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterResourceSpecInput() {
    return this._masterResourceSpec.internalValue;
  }

  // task_resource_spec - computed: false, optional: true, required: false
  private _taskResourceSpec = new EmrClusterResourceSpecTaskResourceSpecOutputReference(this, "task_resource_spec");
  public get taskResourceSpec() {
    return this._taskResourceSpec;
  }
  public putTaskResourceSpec(value: EmrClusterResourceSpecTaskResourceSpec) {
    this._taskResourceSpec.internalValue = value;
  }
  public resetTaskResourceSpec() {
    this._taskResourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskResourceSpecInput() {
    return this._taskResourceSpec.internalValue;
  }
}
export interface EmrClusterTerminateNodeInfo {
  /**
  * Destroy resource list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#cvm_instance_ids EmrCluster#cvm_instance_ids}
  */
  readonly cvmInstanceIds?: string[];
  /**
  * Value range of destruction node type: `MASTER`, `TASK`, `CORE`, `ROUTER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#node_flag EmrCluster#node_flag}
  */
  readonly nodeFlag?: string;
}

export function emrClusterTerminateNodeInfoToTerraform(struct?: EmrClusterTerminateNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cvm_instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cvmInstanceIds),
    node_flag: cdktf.stringToTerraform(struct!.nodeFlag),
  }
}


export function emrClusterTerminateNodeInfoToHclTerraform(struct?: EmrClusterTerminateNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cvm_instance_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cvmInstanceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_flag: {
      value: cdktf.stringToHclTerraform(struct!.nodeFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EmrClusterTerminateNodeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EmrClusterTerminateNodeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cvmInstanceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cvmInstanceIds = this._cvmInstanceIds;
    }
    if (this._nodeFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeFlag = this._nodeFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EmrClusterTerminateNodeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cvmInstanceIds = undefined;
      this._nodeFlag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cvmInstanceIds = value.cvmInstanceIds;
      this._nodeFlag = value.nodeFlag;
    }
  }

  // cvm_instance_ids - computed: false, optional: true, required: false
  private _cvmInstanceIds?: string[]; 
  public get cvmInstanceIds() {
    return this.getListAttribute('cvm_instance_ids');
  }
  public set cvmInstanceIds(value: string[]) {
    this._cvmInstanceIds = value;
  }
  public resetCvmInstanceIds() {
    this._cvmInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cvmInstanceIdsInput() {
    return this._cvmInstanceIds;
  }

  // node_flag - computed: false, optional: true, required: false
  private _nodeFlag?: string; 
  public get nodeFlag() {
    return this.getStringAttribute('node_flag');
  }
  public set nodeFlag(value: string) {
    this._nodeFlag = value;
  }
  public resetNodeFlag() {
    this._nodeFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeFlagInput() {
    return this._nodeFlag;
  }
}

export class EmrClusterTerminateNodeInfoList extends cdktf.ComplexList {
  public internalValue? : EmrClusterTerminateNodeInfo[] | cdktf.IResolvable

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
  public get(index: number): EmrClusterTerminateNodeInfoOutputReference {
    return new EmrClusterTerminateNodeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster tencentcloud_emr_cluster}
*/
export class EmrCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_emr_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmrCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmrCluster to import
  * @param importFromId The id of the existing EmrCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmrCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_emr_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/emr_cluster tencentcloud_emr_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmrClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EmrClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_emr_cluster',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenew = config.autoRenew;
    this._displayStrategy = config.displayStrategy;
    this._extendFsField = config.extendFsField;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._loginSettings = config.loginSettings;
    this._multiZone = config.multiZone;
    this._needMasterWan = config.needMasterWan;
    this._payMode = config.payMode;
    this._placement = config.placement;
    this._productId = config.productId;
    this._sceneName = config.sceneName;
    this._sgId = config.sgId;
    this._softwares = config.softwares;
    this._supportHa = config.supportHa;
    this._tags = config.tags;
    this._timeSpan = config.timeSpan;
    this._timeUnit = config.timeUnit;
    this._vpcSettings = config.vpcSettings;
    this._multiZoneSetting.internalValue = config.multiZoneSetting;
    this._placementInfo.internalValue = config.placementInfo;
    this._preExecutedFileSettings.internalValue = config.preExecutedFileSettings;
    this._resourceSpec.internalValue = config.resourceSpec;
    this._terminateNodeInfo.internalValue = config.terminateNodeInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew - computed: true, optional: true, required: false
  private _autoRenew?: number; 
  public get autoRenew() {
    return this.getNumberAttribute('auto_renew');
  }
  public set autoRenew(value: number) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // display_strategy - computed: false, optional: true, required: false
  private _displayStrategy?: string; 
  public get displayStrategy() {
    return this.getStringAttribute('display_strategy');
  }
  public set displayStrategy(value: string) {
    this._displayStrategy = value;
  }
  public resetDisplayStrategy() {
    this._displayStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayStrategyInput() {
    return this._displayStrategy;
  }

  // extend_fs_field - computed: false, optional: true, required: false
  private _extendFsField?: string; 
  public get extendFsField() {
    return this.getStringAttribute('extend_fs_field');
  }
  public set extendFsField(value: string) {
    this._extendFsField = value;
  }
  public resetExtendFsField() {
    this._extendFsField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendFsFieldInput() {
    return this._extendFsField;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // login_settings - computed: false, optional: true, required: false
  private _loginSettings?: { [key: string]: string }; 
  public get loginSettings() {
    return this.getStringMapAttribute('login_settings');
  }
  public set loginSettings(value: { [key: string]: string }) {
    this._loginSettings = value;
  }
  public resetLoginSettings() {
    this._loginSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSettingsInput() {
    return this._loginSettings;
  }

  // multi_zone - computed: true, optional: true, required: false
  private _multiZone?: boolean | cdktf.IResolvable; 
  public get multiZone() {
    return this.getBooleanAttribute('multi_zone');
  }
  public set multiZone(value: boolean | cdktf.IResolvable) {
    this._multiZone = value;
  }
  public resetMultiZone() {
    this._multiZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneInput() {
    return this._multiZone;
  }

  // need_master_wan - computed: false, optional: true, required: false
  private _needMasterWan?: string; 
  public get needMasterWan() {
    return this.getStringAttribute('need_master_wan');
  }
  public set needMasterWan(value: string) {
    this._needMasterWan = value;
  }
  public resetNeedMasterWan() {
    this._needMasterWan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needMasterWanInput() {
    return this._needMasterWan;
  }

  // pay_mode - computed: false, optional: false, required: true
  private _payMode?: number; 
  public get payMode() {
    return this.getNumberAttribute('pay_mode');
  }
  public set payMode(value: number) {
    this._payMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payModeInput() {
    return this._payMode;
  }

  // placement - computed: true, optional: true, required: false
  private _placement?: { [key: string]: string }; 
  public get placement() {
    return this.getStringMapAttribute('placement');
  }
  public set placement(value: { [key: string]: string }) {
    this._placement = value;
  }
  public resetPlacement() {
    this._placement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: number; 
  public get productId() {
    return this.getNumberAttribute('product_id');
  }
  public set productId(value: number) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // scene_name - computed: true, optional: true, required: false
  private _sceneName?: string; 
  public get sceneName() {
    return this.getStringAttribute('scene_name');
  }
  public set sceneName(value: string) {
    this._sceneName = value;
  }
  public resetSceneName() {
    this._sceneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneNameInput() {
    return this._sceneName;
  }

  // sg_id - computed: false, optional: true, required: false
  private _sgId?: string; 
  public get sgId() {
    return this.getStringAttribute('sg_id');
  }
  public set sgId(value: string) {
    this._sgId = value;
  }
  public resetSgId() {
    this._sgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgIdInput() {
    return this._sgId;
  }

  // softwares - computed: false, optional: false, required: true
  private _softwares?: string[]; 
  public get softwares() {
    return cdktf.Fn.tolist(this.getListAttribute('softwares'));
  }
  public set softwares(value: string[]) {
    this._softwares = value;
  }
  // Temporarily expose input value. Use with caution.
  public get softwaresInput() {
    return this._softwares;
  }

  // support_ha - computed: false, optional: false, required: true
  private _supportHa?: number; 
  public get supportHa() {
    return this.getNumberAttribute('support_ha');
  }
  public set supportHa(value: number) {
    this._supportHa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportHaInput() {
    return this._supportHa;
  }

  // tags - computed: true, optional: true, required: false
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

  // time_span - computed: false, optional: true, required: false
  private _timeSpan?: number; 
  public get timeSpan() {
    return this.getNumberAttribute('time_span');
  }
  public set timeSpan(value: number) {
    this._timeSpan = value;
  }
  public resetTimeSpan() {
    this._timeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSpanInput() {
    return this._timeSpan;
  }

  // time_unit - computed: false, optional: true, required: false
  private _timeUnit?: string; 
  public get timeUnit() {
    return this.getStringAttribute('time_unit');
  }
  public set timeUnit(value: string) {
    this._timeUnit = value;
  }
  public resetTimeUnit() {
    this._timeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeUnitInput() {
    return this._timeUnit;
  }

  // vpc_settings - computed: false, optional: false, required: true
  private _vpcSettings?: { [key: string]: string }; 
  public get vpcSettings() {
    return this.getStringMapAttribute('vpc_settings');
  }
  public set vpcSettings(value: { [key: string]: string }) {
    this._vpcSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSettingsInput() {
    return this._vpcSettings;
  }

  // multi_zone_setting - computed: false, optional: true, required: false
  private _multiZoneSetting = new EmrClusterMultiZoneSettingList(this, "multi_zone_setting", false);
  public get multiZoneSetting() {
    return this._multiZoneSetting;
  }
  public putMultiZoneSetting(value: EmrClusterMultiZoneSetting[] | cdktf.IResolvable) {
    this._multiZoneSetting.internalValue = value;
  }
  public resetMultiZoneSetting() {
    this._multiZoneSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneSettingInput() {
    return this._multiZoneSetting.internalValue;
  }

  // placement_info - computed: false, optional: true, required: false
  private _placementInfo = new EmrClusterPlacementInfoOutputReference(this, "placement_info");
  public get placementInfo() {
    return this._placementInfo;
  }
  public putPlacementInfo(value: EmrClusterPlacementInfo) {
    this._placementInfo.internalValue = value;
  }
  public resetPlacementInfo() {
    this._placementInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInfoInput() {
    return this._placementInfo.internalValue;
  }

  // pre_executed_file_settings - computed: false, optional: true, required: false
  private _preExecutedFileSettings = new EmrClusterPreExecutedFileSettingsList(this, "pre_executed_file_settings", false);
  public get preExecutedFileSettings() {
    return this._preExecutedFileSettings;
  }
  public putPreExecutedFileSettings(value: EmrClusterPreExecutedFileSettings[] | cdktf.IResolvable) {
    this._preExecutedFileSettings.internalValue = value;
  }
  public resetPreExecutedFileSettings() {
    this._preExecutedFileSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preExecutedFileSettingsInput() {
    return this._preExecutedFileSettings.internalValue;
  }

  // resource_spec - computed: false, optional: true, required: false
  private _resourceSpec = new EmrClusterResourceSpecOutputReference(this, "resource_spec");
  public get resourceSpec() {
    return this._resourceSpec;
  }
  public putResourceSpec(value: EmrClusterResourceSpec) {
    this._resourceSpec.internalValue = value;
  }
  public resetResourceSpec() {
    this._resourceSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSpecInput() {
    return this._resourceSpec.internalValue;
  }

  // terminate_node_info - computed: false, optional: true, required: false
  private _terminateNodeInfo = new EmrClusterTerminateNodeInfoList(this, "terminate_node_info", false);
  public get terminateNodeInfo() {
    return this._terminateNodeInfo;
  }
  public putTerminateNodeInfo(value: EmrClusterTerminateNodeInfo[] | cdktf.IResolvable) {
    this._terminateNodeInfo.internalValue = value;
  }
  public resetTerminateNodeInfo() {
    this._terminateNodeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateNodeInfoInput() {
    return this._terminateNodeInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: cdktf.numberToTerraform(this._autoRenew),
      display_strategy: cdktf.stringToTerraform(this._displayStrategy),
      extend_fs_field: cdktf.stringToTerraform(this._extendFsField),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      login_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._loginSettings),
      multi_zone: cdktf.booleanToTerraform(this._multiZone),
      need_master_wan: cdktf.stringToTerraform(this._needMasterWan),
      pay_mode: cdktf.numberToTerraform(this._payMode),
      placement: cdktf.hashMapper(cdktf.stringToTerraform)(this._placement),
      product_id: cdktf.numberToTerraform(this._productId),
      scene_name: cdktf.stringToTerraform(this._sceneName),
      sg_id: cdktf.stringToTerraform(this._sgId),
      softwares: cdktf.listMapper(cdktf.stringToTerraform, false)(this._softwares),
      support_ha: cdktf.numberToTerraform(this._supportHa),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_span: cdktf.numberToTerraform(this._timeSpan),
      time_unit: cdktf.stringToTerraform(this._timeUnit),
      vpc_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._vpcSettings),
      multi_zone_setting: cdktf.listMapper(emrClusterMultiZoneSettingToTerraform, true)(this._multiZoneSetting.internalValue),
      placement_info: emrClusterPlacementInfoToTerraform(this._placementInfo.internalValue),
      pre_executed_file_settings: cdktf.listMapper(emrClusterPreExecutedFileSettingsToTerraform, true)(this._preExecutedFileSettings.internalValue),
      resource_spec: emrClusterResourceSpecToTerraform(this._resourceSpec.internalValue),
      terminate_node_info: cdktf.listMapper(emrClusterTerminateNodeInfoToTerraform, true)(this._terminateNodeInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew: {
        value: cdktf.numberToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      display_strategy: {
        value: cdktf.stringToHclTerraform(this._displayStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extend_fs_field: {
        value: cdktf.stringToHclTerraform(this._extendFsField),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._loginSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      multi_zone: {
        value: cdktf.booleanToHclTerraform(this._multiZone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      need_master_wan: {
        value: cdktf.stringToHclTerraform(this._needMasterWan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pay_mode: {
        value: cdktf.numberToHclTerraform(this._payMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      placement: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._placement),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      product_id: {
        value: cdktf.numberToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scene_name: {
        value: cdktf.stringToHclTerraform(this._sceneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sg_id: {
        value: cdktf.stringToHclTerraform(this._sgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      softwares: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._softwares),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      support_ha: {
        value: cdktf.numberToHclTerraform(this._supportHa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_span: {
        value: cdktf.numberToHclTerraform(this._timeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_unit: {
        value: cdktf.stringToHclTerraform(this._timeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._vpcSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      multi_zone_setting: {
        value: cdktf.listMapperHcl(emrClusterMultiZoneSettingToHclTerraform, true)(this._multiZoneSetting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrClusterMultiZoneSettingList",
      },
      placement_info: {
        value: emrClusterPlacementInfoToHclTerraform(this._placementInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrClusterPlacementInfoList",
      },
      pre_executed_file_settings: {
        value: cdktf.listMapperHcl(emrClusterPreExecutedFileSettingsToHclTerraform, true)(this._preExecutedFileSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrClusterPreExecutedFileSettingsList",
      },
      resource_spec: {
        value: emrClusterResourceSpecToHclTerraform(this._resourceSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrClusterResourceSpecList",
      },
      terminate_node_info: {
        value: cdktf.listMapperHcl(emrClusterTerminateNodeInfoToHclTerraform, true)(this._terminateNodeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EmrClusterTerminateNodeInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
