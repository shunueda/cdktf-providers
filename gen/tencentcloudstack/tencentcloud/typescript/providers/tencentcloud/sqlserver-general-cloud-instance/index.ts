// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverGeneralCloudInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic renewal flag: 0-normal renewal 1-automatic renewal, the default is 1 automatic renewal. Valid only when purchasing a prepaid instance. Valid only when the 'instance_charge_type' parameter value is 'PREPAID'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#auto_renew_flag SqlserverGeneralCloudInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * System character set collation, default: Chinese_PRC_CI_AS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#collation SqlserverGeneralCloudInstance#collation}
  */
  readonly collation?: string;
  /**
  * Cpu, unit: CORE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#cpu SqlserverGeneralCloudInstance#cpu}
  */
  readonly cpu: number;
  /**
  * sqlserver version, currently all supported versions are: 2008R2 (SQL Server 2008 R2 Enterprise), 2012SP3 (SQL Server 2012 Enterprise), 201202 (SQL Server 2012 Standard), 2014SP2 (SQL Server 2014 Enterprise), 201402 (SQL Server 2014 Standard), 2016SP1 (SQL Server 2016 Enterprise), 201602 (SQL Server 2016 Standard), 2017 (SQL Server 2017 Enterprise), 201702 (SQL Server 2017 Standard), 2019 (SQL Server 2019 Enterprise), 201902 (SQL Server 2019 Standard). Each region supports different versions for sale, and the version information that can be sold in each region can be pulled through the DescribeProductConfig interface. If left blank, the default version is 2008R2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#db_version SqlserverGeneralCloudInstance#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Disk encryption identification, 0-not encrypted, 1-encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#disk_encrypt_flag SqlserverGeneralCloudInstance#disk_encrypt_flag}
  */
  readonly diskEncryptFlag?: number;
  /**
  * The standby node availability area is empty by default. When MultiNodes = true, the primary node and standby node availability areas cannot all be the same. The minimum number of standby availability areas set is 2, and the maximum number is no more than 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#dr_zones SqlserverGeneralCloudInstance#dr_zones}
  */
  readonly drZones?: string[];
  /**
  * Upgrade the high-availability architecture of sqlserver, upgrade from mirror disaster recovery to always on cluster disaster recovery, only support 2017 and above and support always on high-availability instances, do not support downgrading to mirror disaster recovery, CLUSTER-upgrade to always on capacity Disaster, if not filled, the high-availability architecture will not be modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#ha_type SqlserverGeneralCloudInstance#ha_type}
  */
  readonly haType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#id SqlserverGeneralCloudInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Payment mode, the value supports PREPAID (prepaid), POSTPAID (postpaid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#instance_charge_type SqlserverGeneralCloudInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The host disk type of the purchased instance, CLOUD_HSSD-enhanced SSD cloud disk for virtual machines, CLOUD_TSSD-extremely fast SSD cloud disk for virtual machines, CLOUD_BSSD-universal SSD cloud disk for virtual machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#machine_type SqlserverGeneralCloudInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Memory, unit: GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#memory SqlserverGeneralCloudInstance#memory}
  */
  readonly memory: number;
  /**
  * Whether it is a multi-node architecture instance, the default value is false. When MultiNodes = true, the parameter MultiZones must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#multi_nodes SqlserverGeneralCloudInstance#multi_nodes}
  */
  readonly multiNodes?: boolean | cdktf.IResolvable;
  /**
  * Whether to deploy across availability zones, the default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#multi_zones SqlserverGeneralCloudInstance#multi_zones}
  */
  readonly multiZones?: boolean | cdktf.IResolvable;
  /**
  * Name of the SQL Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#name SqlserverGeneralCloudInstance#name}
  */
  readonly name: string;
  /**
  * Purchase instance period, the default value is 1, which means one month. The value cannot exceed 48. Valid only when the 'instance_charge_type' parameter value is 'PREPAID'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#period SqlserverGeneralCloudInstance#period}
  */
  readonly period?: number;
  /**
  * project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#project_id SqlserverGeneralCloudInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Security group list, fill in the security group ID in the form of sg-xxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#security_group_list SqlserverGeneralCloudInstance#security_group_list}
  */
  readonly securityGroupList?: string[];
  /**
  * Maintainable time window configuration, duration, unit: hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#span SqlserverGeneralCloudInstance#span}
  */
  readonly span?: number;
  /**
  * Maintainable time window configuration, daily maintainable start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#start_time SqlserverGeneralCloudInstance#start_time}
  */
  readonly startTime?: string;
  /**
  * instance disk storage, unit: GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#storage SqlserverGeneralCloudInstance#storage}
  */
  readonly storage: number;
  /**
  * VPC subnet ID, in the form of subnet-bdoe83fa; SubnetId and VpcId need to be set at the same time or not set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#subnet_id SqlserverGeneralCloudInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * System time zone, default: China Standard Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#time_zone SqlserverGeneralCloudInstance#time_zone}
  */
  readonly timeZone?: string;
  /**
  * VPC network ID, in the form of vpc-dsp338hz; SubnetId and VpcId need to be set at the same time or not set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#vpc_id SqlserverGeneralCloudInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Maintainable time window configuration, in weeks, indicates the days of the week that allow maintenance, 1-7 represent Monday to weekend respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#weekly SqlserverGeneralCloudInstance#weekly}
  */
  readonly weekly?: number[];
  /**
  * Instance AZ, such as ap-guangzhou-1 (Guangzhou Zone 1). Purchasable AZs for an instance can be obtained through the DescribeZones API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#zone SqlserverGeneralCloudInstance#zone}
  */
  readonly zone: string;
  /**
  * resource_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#resource_tags SqlserverGeneralCloudInstance#resource_tags}
  */
  readonly resourceTags?: SqlserverGeneralCloudInstanceResourceTags[] | cdktf.IResolvable;
}
export interface SqlserverGeneralCloudInstanceResourceTags {
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#tag_key SqlserverGeneralCloudInstance#tag_key}
  */
  readonly tagKey?: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#tag_value SqlserverGeneralCloudInstance#tag_value}
  */
  readonly tagValue?: string;
}

export function sqlserverGeneralCloudInstanceResourceTagsToTerraform(struct?: SqlserverGeneralCloudInstanceResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function sqlserverGeneralCloudInstanceResourceTagsToHclTerraform(struct?: SqlserverGeneralCloudInstanceResourceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SqlserverGeneralCloudInstanceResourceTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlserverGeneralCloudInstanceResourceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverGeneralCloudInstanceResourceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class SqlserverGeneralCloudInstanceResourceTagsList extends cdktf.ComplexList {
  public internalValue? : SqlserverGeneralCloudInstanceResourceTags[] | cdktf.IResolvable

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
  public get(index: number): SqlserverGeneralCloudInstanceResourceTagsOutputReference {
    return new SqlserverGeneralCloudInstanceResourceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance tencentcloud_sqlserver_general_cloud_instance}
*/
export class SqlserverGeneralCloudInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_general_cloud_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverGeneralCloudInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverGeneralCloudInstance to import
  * @param importFromId The id of the existing SqlserverGeneralCloudInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverGeneralCloudInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_general_cloud_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/sqlserver_general_cloud_instance tencentcloud_sqlserver_general_cloud_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverGeneralCloudInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverGeneralCloudInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_general_cloud_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRenewFlag = config.autoRenewFlag;
    this._collation = config.collation;
    this._cpu = config.cpu;
    this._dbVersion = config.dbVersion;
    this._diskEncryptFlag = config.diskEncryptFlag;
    this._drZones = config.drZones;
    this._haType = config.haType;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._machineType = config.machineType;
    this._memory = config.memory;
    this._multiNodes = config.multiNodes;
    this._multiZones = config.multiZones;
    this._name = config.name;
    this._period = config.period;
    this._projectId = config.projectId;
    this._securityGroupList = config.securityGroupList;
    this._span = config.span;
    this._startTime = config.startTime;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._timeZone = config.timeZone;
    this._vpcId = config.vpcId;
    this._weekly = config.weekly;
    this._zone = config.zone;
    this._resourceTags.internalValue = config.resourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew_flag - computed: false, optional: true, required: false
  private _autoRenewFlag?: number; 
  public get autoRenewFlag() {
    return this.getNumberAttribute('auto_renew_flag');
  }
  public set autoRenewFlag(value: number) {
    this._autoRenewFlag = value;
  }
  public resetAutoRenewFlag() {
    this._autoRenewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewFlagInput() {
    return this._autoRenewFlag;
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // disk_encrypt_flag - computed: false, optional: true, required: false
  private _diskEncryptFlag?: number; 
  public get diskEncryptFlag() {
    return this.getNumberAttribute('disk_encrypt_flag');
  }
  public set diskEncryptFlag(value: number) {
    this._diskEncryptFlag = value;
  }
  public resetDiskEncryptFlag() {
    this._diskEncryptFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptFlagInput() {
    return this._diskEncryptFlag;
  }

  // dns_pod_domain - computed: true, optional: false, required: false
  public get dnsPodDomain() {
    return this.getStringAttribute('dns_pod_domain');
  }

  // dr_zones - computed: true, optional: true, required: false
  private _drZones?: string[]; 
  public get drZones() {
    return cdktf.Fn.tolist(this.getListAttribute('dr_zones'));
  }
  public set drZones(value: string[]) {
    this._drZones = value;
  }
  public resetDrZones() {
    this._drZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drZonesInput() {
    return this._drZones;
  }

  // ha_type - computed: false, optional: true, required: false
  private _haType?: string; 
  public get haType() {
    return this.getStringAttribute('ha_type');
  }
  public set haType(value: string) {
    this._haType = value;
  }
  public resetHaType() {
    this._haType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haTypeInput() {
    return this._haType;
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // multi_nodes - computed: true, optional: true, required: false
  private _multiNodes?: boolean | cdktf.IResolvable; 
  public get multiNodes() {
    return this.getBooleanAttribute('multi_nodes');
  }
  public set multiNodes(value: boolean | cdktf.IResolvable) {
    this._multiNodes = value;
  }
  public resetMultiNodes() {
    this._multiNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiNodesInput() {
    return this._multiNodes;
  }

  // multi_zones - computed: true, optional: true, required: false
  private _multiZones?: boolean | cdktf.IResolvable; 
  public get multiZones() {
    return this.getBooleanAttribute('multi_zones');
  }
  public set multiZones(value: boolean | cdktf.IResolvable) {
    this._multiZones = value;
  }
  public resetMultiZones() {
    this._multiZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZonesInput() {
    return this._multiZones;
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // project_id - computed: false, optional: true, required: false
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

  // security_group_list - computed: false, optional: true, required: false
  private _securityGroupList?: string[]; 
  public get securityGroupList() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_list'));
  }
  public set securityGroupList(value: string[]) {
    this._securityGroupList = value;
  }
  public resetSecurityGroupList() {
    this._securityGroupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupListInput() {
    return this._securityGroupList;
  }

  // span - computed: false, optional: true, required: false
  private _span?: number; 
  public get span() {
    return this.getNumberAttribute('span');
  }
  public set span(value: number) {
    this._span = value;
  }
  public resetSpan() {
    this._span = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spanInput() {
    return this._span;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tgw_wan_vport - computed: true, optional: false, required: false
  public get tgwWanVport() {
    return this.getNumberAttribute('tgw_wan_vport');
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly?: number[]; 
  public get weekly() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('weekly')));
  }
  public set weekly(value: number[]) {
    this._weekly = value;
  }
  public resetWeekly() {
    this._weekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly;
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

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags = new SqlserverGeneralCloudInstanceResourceTagsList(this, "resource_tags", false);
  public get resourceTags() {
    return this._resourceTags;
  }
  public putResourceTags(value: SqlserverGeneralCloudInstanceResourceTags[] | cdktf.IResolvable) {
    this._resourceTags.internalValue = value;
  }
  public resetResourceTags() {
    this._resourceTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      collation: cdktf.stringToTerraform(this._collation),
      cpu: cdktf.numberToTerraform(this._cpu),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      disk_encrypt_flag: cdktf.numberToTerraform(this._diskEncryptFlag),
      dr_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._drZones),
      ha_type: cdktf.stringToTerraform(this._haType),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory: cdktf.numberToTerraform(this._memory),
      multi_nodes: cdktf.booleanToTerraform(this._multiNodes),
      multi_zones: cdktf.booleanToTerraform(this._multiZones),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupList),
      span: cdktf.numberToTerraform(this._span),
      start_time: cdktf.stringToTerraform(this._startTime),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      weekly: cdktf.listMapper(cdktf.numberToTerraform, false)(this._weekly),
      zone: cdktf.stringToTerraform(this._zone),
      resource_tags: cdktf.listMapper(sqlserverGeneralCloudInstanceResourceTagsToTerraform, true)(this._resourceTags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_renew_flag: {
        value: cdktf.numberToHclTerraform(this._autoRenewFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collation: {
        value: cdktf.stringToHclTerraform(this._collation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_encrypt_flag: {
        value: cdktf.numberToHclTerraform(this._diskEncryptFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dr_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._drZones),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ha_type: {
        value: cdktf.stringToHclTerraform(this._haType),
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
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_nodes: {
        value: cdktf.booleanToHclTerraform(this._multiNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_zones: {
        value: cdktf.booleanToHclTerraform(this._multiZones),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      span: {
        value: cdktf.numberToHclTerraform(this._span),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
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
      weekly: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._weekly),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_tags: {
        value: cdktf.listMapperHcl(sqlserverGeneralCloudInstanceResourceTagsToHclTerraform, true)(this._resourceTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SqlserverGeneralCloudInstanceResourceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
