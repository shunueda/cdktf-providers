// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to use the voucher automatically; 1 for yes, 0 for no, the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#auto_voucher SqlserverReadonlyInstance#auto_voucher}
  */
  readonly autoVoucher?: number;
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#availability_zone SqlserverReadonlyInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Pay type of the SQL Server instance. Available values `PREPAID`, `POSTPAID_BY_HOUR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#charge_type SqlserverReadonlyInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Indicate that the master instance upgrade or not. `true` for upgrading the master SQL Server instance to cluster type by force. Default is false. Note: this is not supported with `DUAL`(ha_type), `2017`(engine_version) master SQL Server instance, for it will cause ha_type of the master SQL Server instance change.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#force_upgrade SqlserverReadonlyInstance#force_upgrade}
  */
  readonly forceUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#id SqlserverReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates the master instance ID of recovery instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#master_instance_id SqlserverReadonlyInstance#master_instance_id}
  */
  readonly masterInstanceId: string;
  /**
  * Memory size (in GB). Allowed value must be larger than `memory` that data source `tencentcloud_sqlserver_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#memory SqlserverReadonlyInstance#memory}
  */
  readonly memory: number;
  /**
  * Name of the SQL Server instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#name SqlserverReadonlyInstance#name}
  */
  readonly name: string;
  /**
  * Purchase instance period in month. The value does not exceed 48.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#period SqlserverReadonlyInstance#period}
  */
  readonly period?: number;
  /**
  * ID of the readonly group that this instance belongs to. When `readonly_group_type` set value `3`, it must be set with valid value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#readonly_group_id SqlserverReadonlyInstance#readonly_group_id}
  */
  readonly readonlyGroupId?: string;
  /**
  * Required when `readonly_group_type`=2, the name of the newly created read-only group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#readonly_group_name SqlserverReadonlyInstance#readonly_group_name}
  */
  readonly readonlyGroupName?: string;
  /**
  * Type of readonly group. Valid values: `1`, `3`. `1` for one auto-assigned readonly instance per one readonly group, `2` for creating new readonly group, `3` for all exist readonly instances stay in the exist readonly group. For now, only `1` and `3` are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#readonly_group_type SqlserverReadonlyInstance#readonly_group_type}
  */
  readonly readonlyGroupType: number;
  /**
  * Required when `readonly_group_type`=2, whether the newly created read-only group has delay elimination enabled, 1-enabled, 0-disabled. When the delay between the read-only copy and the primary instance exceeds the threshold, it is automatically removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#readonly_groups_is_offline_delay SqlserverReadonlyInstance#readonly_groups_is_offline_delay}
  */
  readonly readonlyGroupsIsOfflineDelay?: number;
  /**
  * Required when `readonly_group_type`=2 and `readonly_groups_is_offline_delay`=1, the threshold for delayed elimination of newly created read-only groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#readonly_groups_max_delay_time SqlserverReadonlyInstance#readonly_groups_max_delay_time}
  */
  readonly readonlyGroupsMaxDelayTime?: number;
  /**
  * When `readonly_group_type`=2 and `readonly_groups_is_offline_delay`=1, it is required. After the newly created read-only group is delayed and removed, at least the number of read-only copies should be retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#readonly_groups_min_in_group SqlserverReadonlyInstance#readonly_groups_min_in_group}
  */
  readonly readonlyGroupsMinInGroup?: number;
  /**
  * Security group bound to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#security_groups SqlserverReadonlyInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Disk size (in GB). Allowed value must be a multiple of 10. The storage must be set with the limit of `storage_min` and `storage_max` which data source `tencentcloud_sqlserver_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#storage SqlserverReadonlyInstance#storage}
  */
  readonly storage: number;
  /**
  * ID of subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#subnet_id SqlserverReadonlyInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags of the SQL Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#tags SqlserverReadonlyInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * System time zone, default: `China Standard Time`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#time_zone SqlserverReadonlyInstance#time_zone}
  */
  readonly timeZone?: string;
  /**
  * An array of voucher IDs, currently only one can be used for a single order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#voucher_ids SqlserverReadonlyInstance#voucher_ids}
  */
  readonly voucherIds?: string[];
  /**
  * ID of VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#vpc_id SqlserverReadonlyInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * The way to execute the allocation. Supported values include: 0 - execute immediately, 1 - execute in maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#wait_switch SqlserverReadonlyInstance#wait_switch}
  */
  readonly waitSwitch?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance tencentcloud_sqlserver_readonly_instance}
*/
export class SqlserverReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverReadonlyInstance to import
  * @param importFromId The id of the existing SqlserverReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/sqlserver_readonly_instance tencentcloud_sqlserver_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_readonly_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoVoucher = config.autoVoucher;
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._forceUpgrade = config.forceUpgrade;
    this._id = config.id;
    this._masterInstanceId = config.masterInstanceId;
    this._memory = config.memory;
    this._name = config.name;
    this._period = config.period;
    this._readonlyGroupId = config.readonlyGroupId;
    this._readonlyGroupName = config.readonlyGroupName;
    this._readonlyGroupType = config.readonlyGroupType;
    this._readonlyGroupsIsOfflineDelay = config.readonlyGroupsIsOfflineDelay;
    this._readonlyGroupsMaxDelayTime = config.readonlyGroupsMaxDelayTime;
    this._readonlyGroupsMinInGroup = config.readonlyGroupsMinInGroup;
    this._securityGroups = config.securityGroups;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._timeZone = config.timeZone;
    this._voucherIds = config.voucherIds;
    this._vpcId = config.vpcId;
    this._waitSwitch = config.waitSwitch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_voucher - computed: false, optional: true, required: false
  private _autoVoucher?: number; 
  public get autoVoucher() {
    return this.getNumberAttribute('auto_voucher');
  }
  public set autoVoucher(value: number) {
    this._autoVoucher = value;
  }
  public resetAutoVoucher() {
    this._autoVoucher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoVoucherInput() {
    return this._autoVoucher;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // charge_type - computed: false, optional: true, required: false
  private _chargeType?: string; 
  public get chargeType() {
    return this.getStringAttribute('charge_type');
  }
  public set chargeType(value: string) {
    this._chargeType = value;
  }
  public resetChargeType() {
    this._chargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chargeTypeInput() {
    return this._chargeType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dns_pod_domain - computed: true, optional: false, required: false
  public get dnsPodDomain() {
    return this.getStringAttribute('dns_pod_domain');
  }

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // force_upgrade - computed: false, optional: true, required: false
  private _forceUpgrade?: boolean | cdktf.IResolvable; 
  public get forceUpgrade() {
    return this.getBooleanAttribute('force_upgrade');
  }
  public set forceUpgrade(value: boolean | cdktf.IResolvable) {
    this._forceUpgrade = value;
  }
  public resetForceUpgrade() {
    this._forceUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpgradeInput() {
    return this._forceUpgrade;
  }

  // ha_type - computed: true, optional: false, required: false
  public get haType() {
    return this.getStringAttribute('ha_type');
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

  // master_instance_id - computed: false, optional: false, required: true
  private _masterInstanceId?: string; 
  public get masterInstanceId() {
    return this.getStringAttribute('master_instance_id');
  }
  public set masterInstanceId(value: string) {
    this._masterInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceIdInput() {
    return this._masterInstanceId;
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }

  // readonly_group_id - computed: true, optional: true, required: false
  private _readonlyGroupId?: string; 
  public get readonlyGroupId() {
    return this.getStringAttribute('readonly_group_id');
  }
  public set readonlyGroupId(value: string) {
    this._readonlyGroupId = value;
  }
  public resetReadonlyGroupId() {
    this._readonlyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyGroupIdInput() {
    return this._readonlyGroupId;
  }

  // readonly_group_name - computed: true, optional: true, required: false
  private _readonlyGroupName?: string; 
  public get readonlyGroupName() {
    return this.getStringAttribute('readonly_group_name');
  }
  public set readonlyGroupName(value: string) {
    this._readonlyGroupName = value;
  }
  public resetReadonlyGroupName() {
    this._readonlyGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyGroupNameInput() {
    return this._readonlyGroupName;
  }

  // readonly_group_type - computed: false, optional: false, required: true
  private _readonlyGroupType?: number; 
  public get readonlyGroupType() {
    return this.getNumberAttribute('readonly_group_type');
  }
  public set readonlyGroupType(value: number) {
    this._readonlyGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyGroupTypeInput() {
    return this._readonlyGroupType;
  }

  // readonly_groups_is_offline_delay - computed: true, optional: true, required: false
  private _readonlyGroupsIsOfflineDelay?: number; 
  public get readonlyGroupsIsOfflineDelay() {
    return this.getNumberAttribute('readonly_groups_is_offline_delay');
  }
  public set readonlyGroupsIsOfflineDelay(value: number) {
    this._readonlyGroupsIsOfflineDelay = value;
  }
  public resetReadonlyGroupsIsOfflineDelay() {
    this._readonlyGroupsIsOfflineDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyGroupsIsOfflineDelayInput() {
    return this._readonlyGroupsIsOfflineDelay;
  }

  // readonly_groups_max_delay_time - computed: true, optional: true, required: false
  private _readonlyGroupsMaxDelayTime?: number; 
  public get readonlyGroupsMaxDelayTime() {
    return this.getNumberAttribute('readonly_groups_max_delay_time');
  }
  public set readonlyGroupsMaxDelayTime(value: number) {
    this._readonlyGroupsMaxDelayTime = value;
  }
  public resetReadonlyGroupsMaxDelayTime() {
    this._readonlyGroupsMaxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyGroupsMaxDelayTimeInput() {
    return this._readonlyGroupsMaxDelayTime;
  }

  // readonly_groups_min_in_group - computed: true, optional: true, required: false
  private _readonlyGroupsMinInGroup?: number; 
  public get readonlyGroupsMinInGroup() {
    return this.getNumberAttribute('readonly_groups_min_in_group');
  }
  public set readonlyGroupsMinInGroup(value: number) {
    this._readonlyGroupsMinInGroup = value;
  }
  public resetReadonlyGroupsMinInGroup() {
    this._readonlyGroupsMinInGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyGroupsMinInGroupInput() {
    return this._readonlyGroupsMinInGroup;
  }

  // ro_flag - computed: true, optional: false, required: false
  public get roFlag() {
    return this.getStringAttribute('ro_flag');
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
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

  // tgw_wan_vport - computed: true, optional: false, required: false
  public get tgwWanVport() {
    return this.getNumberAttribute('tgw_wan_vport');
  }

  // time_zone - computed: true, optional: true, required: false
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

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // voucher_ids - computed: false, optional: true, required: false
  private _voucherIds?: string[]; 
  public get voucherIds() {
    return cdktf.Fn.tolist(this.getListAttribute('voucher_ids'));
  }
  public set voucherIds(value: string[]) {
    this._voucherIds = value;
  }
  public resetVoucherIds() {
    this._voucherIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voucherIdsInput() {
    return this._voucherIds;
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

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }

  // wait_switch - computed: false, optional: true, required: false
  private _waitSwitch?: number; 
  public get waitSwitch() {
    return this.getNumberAttribute('wait_switch');
  }
  public set waitSwitch(value: number) {
    this._waitSwitch = value;
  }
  public resetWaitSwitch() {
    this._waitSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitSwitchInput() {
    return this._waitSwitch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_voucher: cdktf.numberToTerraform(this._autoVoucher),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      force_upgrade: cdktf.booleanToTerraform(this._forceUpgrade),
      id: cdktf.stringToTerraform(this._id),
      master_instance_id: cdktf.stringToTerraform(this._masterInstanceId),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      readonly_group_id: cdktf.stringToTerraform(this._readonlyGroupId),
      readonly_group_name: cdktf.stringToTerraform(this._readonlyGroupName),
      readonly_group_type: cdktf.numberToTerraform(this._readonlyGroupType),
      readonly_groups_is_offline_delay: cdktf.numberToTerraform(this._readonlyGroupsIsOfflineDelay),
      readonly_groups_max_delay_time: cdktf.numberToTerraform(this._readonlyGroupsMaxDelayTime),
      readonly_groups_min_in_group: cdktf.numberToTerraform(this._readonlyGroupsMinInGroup),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_zone: cdktf.stringToTerraform(this._timeZone),
      voucher_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voucherIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_switch: cdktf.numberToTerraform(this._waitSwitch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_voucher: {
        value: cdktf.numberToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      charge_type: {
        value: cdktf.stringToHclTerraform(this._chargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_upgrade: {
        value: cdktf.booleanToHclTerraform(this._forceUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterInstanceId),
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
      readonly_group_id: {
        value: cdktf.stringToHclTerraform(this._readonlyGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readonly_group_name: {
        value: cdktf.stringToHclTerraform(this._readonlyGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readonly_group_type: {
        value: cdktf.numberToHclTerraform(this._readonlyGroupType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      readonly_groups_is_offline_delay: {
        value: cdktf.numberToHclTerraform(this._readonlyGroupsIsOfflineDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      readonly_groups_max_delay_time: {
        value: cdktf.numberToHclTerraform(this._readonlyGroupsMaxDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      readonly_groups_min_in_group: {
        value: cdktf.numberToHclTerraform(this._readonlyGroupsMinInGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      time_zone: {
        value: cdktf.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voucher_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._voucherIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_switch: {
        value: cdktf.numberToHclTerraform(this._waitSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
