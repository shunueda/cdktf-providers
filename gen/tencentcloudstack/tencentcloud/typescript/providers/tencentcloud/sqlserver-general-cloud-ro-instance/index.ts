// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverGeneralCloudRoInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * System character set collation, default: Chinese_PRC_CI_AS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#collation SqlserverGeneralCloudRoInstance#collation}
  */
  readonly collation?: string;
  /**
  * Number of instance cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#cpu SqlserverGeneralCloudRoInstance#cpu}
  */
  readonly cpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#id SqlserverGeneralCloudRoInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Payment mode, the value supports PREPAID (prepaid), POSTPAID (postpaid).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#instance_charge_type SqlserverGeneralCloudRoInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Primary instance ID, in the format: mssql-3l3fgqn7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#instance_id SqlserverGeneralCloudRoInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * The host disk type of the purchased instance, CLOUD_HSSD-enhanced SSD cloud disk for virtual machines, CLOUD_TSSD-extremely fast SSD cloud disk for virtual machines, CLOUD_BSSD-universal SSD cloud disk for virtual machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#machine_type SqlserverGeneralCloudRoInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Instance memory size, in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#memory SqlserverGeneralCloudRoInstance#memory}
  */
  readonly memory: number;
  /**
  * Purchase instance period, the default value is 1, which means one month. The value cannot exceed 48.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#period SqlserverGeneralCloudRoInstance#period}
  */
  readonly period?: number;
  /**
  * Required when ReadOnlyGroupType=3, existing read-only group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#read_only_group_id SqlserverGeneralCloudRoInstance#read_only_group_id}
  */
  readonly readOnlyGroupId?: string;
  /**
  * Required when ReadOnlyGroupType=2, whether to enable the delayed elimination function for the newly created read-only group, 1-on, 0-off. When the delay between the read-only replica and the primary instance is greater than the threshold, it will be automatically removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#read_only_group_is_offline_delay SqlserverGeneralCloudRoInstance#read_only_group_is_offline_delay}
  */
  readonly readOnlyGroupIsOfflineDelay?: number;
  /**
  * Mandatory when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the threshold for delay culling of newly created read-only groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#read_only_group_max_delay_time SqlserverGeneralCloudRoInstance#read_only_group_max_delay_time}
  */
  readonly readOnlyGroupMaxDelayTime?: number;
  /**
  * Required when ReadOnlyGroupType=2 and ReadOnlyGroupIsOfflineDelay=1, the newly created read-only group retains at least the number of read-only replicas after delay elimination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#read_only_group_min_in_group SqlserverGeneralCloudRoInstance#read_only_group_min_in_group}
  */
  readonly readOnlyGroupMinInGroup?: number;
  /**
  * Required when ReadOnlyGroupType=2, the name of the newly created read-only group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#read_only_group_name SqlserverGeneralCloudRoInstance#read_only_group_name}
  */
  readonly readOnlyGroupName?: string;
  /**
  * Read-only group type option, 1- Ship according to one instance and one read-only group, 2 - Ship after creating a read-only group, all instances are under this read-only group, 3 - All instances shipped are in the existing Some read-only groups below.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#read_only_group_type SqlserverGeneralCloudRoInstance#read_only_group_type}
  */
  readonly readOnlyGroupType: number;
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#resource_tags SqlserverGeneralCloudRoInstance#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * Security group list, fill in the security group ID in the form of sg-xxx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#security_group_list SqlserverGeneralCloudRoInstance#security_group_list}
  */
  readonly securityGroupList?: string[];
  /**
  * Instance disk size, in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#storage SqlserverGeneralCloudRoInstance#storage}
  */
  readonly storage: number;
  /**
  * VPC subnet ID, in the form of subnet-bdoe83fa; SubnetId and VpcId need to be set at the same time or not set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#subnet_id SqlserverGeneralCloudRoInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * System time zone, default: China Standard Time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#time_zone SqlserverGeneralCloudRoInstance#time_zone}
  */
  readonly timeZone?: string;
  /**
  * VPC network ID, in the form of vpc-dsp338hz; SubnetId and VpcId need to be set at the same time or not set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#vpc_id SqlserverGeneralCloudRoInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Instance Availability Zone, similar to ap-guangzhou-1 (Guangzhou District 1); the instance sales area can be obtained through the interface DescribeZones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#zone SqlserverGeneralCloudRoInstance#zone}
  */
  readonly zone: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#timeouts SqlserverGeneralCloudRoInstance#timeouts}
  */
  readonly timeouts?: SqlserverGeneralCloudRoInstanceTimeouts;
}
export interface SqlserverGeneralCloudRoInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#create SqlserverGeneralCloudRoInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#delete SqlserverGeneralCloudRoInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#read SqlserverGeneralCloudRoInstance#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#update SqlserverGeneralCloudRoInstance#update}
  */
  readonly update?: string;
}

export function sqlserverGeneralCloudRoInstanceTimeoutsToTerraform(struct?: SqlserverGeneralCloudRoInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function sqlserverGeneralCloudRoInstanceTimeoutsToHclTerraform(struct?: SqlserverGeneralCloudRoInstanceTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class SqlserverGeneralCloudRoInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SqlserverGeneralCloudRoInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlserverGeneralCloudRoInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance tencentcloud_sqlserver_general_cloud_ro_instance}
*/
export class SqlserverGeneralCloudRoInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_general_cloud_ro_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverGeneralCloudRoInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverGeneralCloudRoInstance to import
  * @param importFromId The id of the existing SqlserverGeneralCloudRoInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverGeneralCloudRoInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_general_cloud_ro_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/sqlserver_general_cloud_ro_instance tencentcloud_sqlserver_general_cloud_ro_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverGeneralCloudRoInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverGeneralCloudRoInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_general_cloud_ro_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collation = config.collation;
    this._cpu = config.cpu;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceId = config.instanceId;
    this._machineType = config.machineType;
    this._memory = config.memory;
    this._period = config.period;
    this._readOnlyGroupId = config.readOnlyGroupId;
    this._readOnlyGroupIsOfflineDelay = config.readOnlyGroupIsOfflineDelay;
    this._readOnlyGroupMaxDelayTime = config.readOnlyGroupMaxDelayTime;
    this._readOnlyGroupMinInGroup = config.readOnlyGroupMinInGroup;
    this._readOnlyGroupName = config.readOnlyGroupName;
    this._readOnlyGroupType = config.readOnlyGroupType;
    this._resourceTags = config.resourceTags;
    this._securityGroupList = config.securityGroupList;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._timeZone = config.timeZone;
    this._vpcId = config.vpcId;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // read_only_group_id - computed: true, optional: true, required: false
  private _readOnlyGroupId?: string; 
  public get readOnlyGroupId() {
    return this.getStringAttribute('read_only_group_id');
  }
  public set readOnlyGroupId(value: string) {
    this._readOnlyGroupId = value;
  }
  public resetReadOnlyGroupId() {
    this._readOnlyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupIdInput() {
    return this._readOnlyGroupId;
  }

  // read_only_group_is_offline_delay - computed: true, optional: true, required: false
  private _readOnlyGroupIsOfflineDelay?: number; 
  public get readOnlyGroupIsOfflineDelay() {
    return this.getNumberAttribute('read_only_group_is_offline_delay');
  }
  public set readOnlyGroupIsOfflineDelay(value: number) {
    this._readOnlyGroupIsOfflineDelay = value;
  }
  public resetReadOnlyGroupIsOfflineDelay() {
    this._readOnlyGroupIsOfflineDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupIsOfflineDelayInput() {
    return this._readOnlyGroupIsOfflineDelay;
  }

  // read_only_group_max_delay_time - computed: true, optional: true, required: false
  private _readOnlyGroupMaxDelayTime?: number; 
  public get readOnlyGroupMaxDelayTime() {
    return this.getNumberAttribute('read_only_group_max_delay_time');
  }
  public set readOnlyGroupMaxDelayTime(value: number) {
    this._readOnlyGroupMaxDelayTime = value;
  }
  public resetReadOnlyGroupMaxDelayTime() {
    this._readOnlyGroupMaxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupMaxDelayTimeInput() {
    return this._readOnlyGroupMaxDelayTime;
  }

  // read_only_group_min_in_group - computed: true, optional: true, required: false
  private _readOnlyGroupMinInGroup?: number; 
  public get readOnlyGroupMinInGroup() {
    return this.getNumberAttribute('read_only_group_min_in_group');
  }
  public set readOnlyGroupMinInGroup(value: number) {
    this._readOnlyGroupMinInGroup = value;
  }
  public resetReadOnlyGroupMinInGroup() {
    this._readOnlyGroupMinInGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupMinInGroupInput() {
    return this._readOnlyGroupMinInGroup;
  }

  // read_only_group_name - computed: true, optional: true, required: false
  private _readOnlyGroupName?: string; 
  public get readOnlyGroupName() {
    return this.getStringAttribute('read_only_group_name');
  }
  public set readOnlyGroupName(value: string) {
    this._readOnlyGroupName = value;
  }
  public resetReadOnlyGroupName() {
    this._readOnlyGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupNameInput() {
    return this._readOnlyGroupName;
  }

  // read_only_group_type - computed: false, optional: false, required: true
  private _readOnlyGroupType?: number; 
  public get readOnlyGroupType() {
    return this.getNumberAttribute('read_only_group_type');
  }
  public set readOnlyGroupType(value: number) {
    this._readOnlyGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyGroupTypeInput() {
    return this._readOnlyGroupType;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // ro_instance_id - computed: true, optional: false, required: false
  public get roInstanceId() {
    return this.getStringAttribute('ro_instance_id');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlserverGeneralCloudRoInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlserverGeneralCloudRoInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collation: cdktf.stringToTerraform(this._collation),
      cpu: cdktf.numberToTerraform(this._cpu),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory: cdktf.numberToTerraform(this._memory),
      period: cdktf.numberToTerraform(this._period),
      read_only_group_id: cdktf.stringToTerraform(this._readOnlyGroupId),
      read_only_group_is_offline_delay: cdktf.numberToTerraform(this._readOnlyGroupIsOfflineDelay),
      read_only_group_max_delay_time: cdktf.numberToTerraform(this._readOnlyGroupMaxDelayTime),
      read_only_group_min_in_group: cdktf.numberToTerraform(this._readOnlyGroupMinInGroup),
      read_only_group_name: cdktf.stringToTerraform(this._readOnlyGroupName),
      read_only_group_type: cdktf.numberToTerraform(this._readOnlyGroupType),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
      security_group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupList),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: sqlserverGeneralCloudRoInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
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
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_only_group_id: {
        value: cdktf.stringToHclTerraform(this._readOnlyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_group_is_offline_delay: {
        value: cdktf.numberToHclTerraform(this._readOnlyGroupIsOfflineDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_only_group_max_delay_time: {
        value: cdktf.numberToHclTerraform(this._readOnlyGroupMaxDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_only_group_min_in_group: {
        value: cdktf.numberToHclTerraform(this._readOnlyGroupMinInGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_only_group_name: {
        value: cdktf.stringToHclTerraform(this._readOnlyGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_group_type: {
        value: cdktf.numberToHclTerraform(this._readOnlyGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security_group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: sqlserverGeneralCloudRoInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SqlserverGeneralCloudRoInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
