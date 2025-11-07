// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlDrInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#auto_renew_flag MysqlDrInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Indicates which availability zone will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#availability_zone MysqlDrInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Pay type of instance. Valid values:`PREPAID`, `POSTPAID`. Default is `POSTPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#charge_type MysqlDrInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#cpu MysqlDrInstance#cpu}
  */
  readonly cpu?: number;
  /**
  * Specify device type, available values: `UNIVERSAL` (default), `EXCLUSIVE`, `BASIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#device_type MysqlDrInstance#device_type}
  */
  readonly deviceType?: string;
  /**
  * Zone information about first slave instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#first_slave_zone MysqlDrInstance#first_slave_zone}
  */
  readonly firstSlaveZone?: string;
  /**
  * Indicate whether to delete instance directly or not. Default is `false`. If set true, the instance will be deleted instead of staying recycle bin. Note: only works for `PREPAID` instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#force_delete MysqlDrInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#id MysqlDrInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of a mysql instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#instance_name MysqlDrInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Public access port. Valid value ranges: [1024~65535]. The default value is `3306`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#intranet_port MysqlDrInstance#intranet_port}
  */
  readonly intranetPort?: number;
  /**
  * Indicates the master instance ID of recovery instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#master_instance_id MysqlDrInstance#master_instance_id}
  */
  readonly masterInstanceId: string;
  /**
  * The zone information of the primary instance is required when you purchase a disaster recovery instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#master_region MysqlDrInstance#master_region}
  */
  readonly masterRegion: string;
  /**
  * Memory size (in MB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#mem_size MysqlDrInstance#mem_size}
  */
  readonly memSize: number;
  /**
  * Pay type of instance. Valid values: `0`, `1`. `0`: prepaid, `1`: postpaid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#pay_type MysqlDrInstance#pay_type}
  */
  readonly payType?: number;
  /**
  * Period of instance. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#period MysqlDrInstance#period}
  */
  readonly period?: number;
  /**
  * Period of instance. NOTES: Only supported prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#prepaid_period MysqlDrInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * Project ID, default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#project_id MysqlDrInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Zone information about second slave instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#second_slave_zone MysqlDrInstance#second_slave_zone}
  */
  readonly secondSlaveZone?: string;
  /**
  * Security groups to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#security_groups MysqlDrInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Availability zone deployment method. Available values: 0 - Single availability zone; 1 - Multiple availability zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#slave_deploy_mode MysqlDrInstance#slave_deploy_mode}
  */
  readonly slaveDeployMode?: number;
  /**
  * Data replication mode. 0 - Async replication; 1 - Semisync replication; 2 - Strongsync replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#slave_sync_mode MysqlDrInstance#slave_sync_mode}
  */
  readonly slaveSyncMode?: number;
  /**
  * Private network ID. If `vpc_id` is set, this value is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#subnet_id MysqlDrInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Instance tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#tags MysqlDrInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Disk size (in GB).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#volume_size MysqlDrInstance#volume_size}
  */
  readonly volumeSize: number;
  /**
  * ID of VPC, which can be modified once every 24 hours and can't be removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#vpc_id MysqlDrInstance#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance tencentcloud_mysql_dr_instance}
*/
export class MysqlDrInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mysql_dr_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlDrInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlDrInstance to import
  * @param importFromId The id of the existing MysqlDrInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlDrInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mysql_dr_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/mysql_dr_instance tencentcloud_mysql_dr_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlDrInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlDrInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mysql_dr_instance',
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
    this._autoRenewFlag = config.autoRenewFlag;
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._cpu = config.cpu;
    this._deviceType = config.deviceType;
    this._firstSlaveZone = config.firstSlaveZone;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._intranetPort = config.intranetPort;
    this._masterInstanceId = config.masterInstanceId;
    this._masterRegion = config.masterRegion;
    this._memSize = config.memSize;
    this._payType = config.payType;
    this._period = config.period;
    this._prepaidPeriod = config.prepaidPeriod;
    this._projectId = config.projectId;
    this._secondSlaveZone = config.secondSlaveZone;
    this._securityGroups = config.securityGroups;
    this._slaveDeployMode = config.slaveDeployMode;
    this._slaveSyncMode = config.slaveSyncMode;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volumeSize = config.volumeSize;
    this._vpcId = config.vpcId;
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

  // cpu - computed: true, optional: true, required: false
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

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // first_slave_zone - computed: true, optional: true, required: false
  private _firstSlaveZone?: string; 
  public get firstSlaveZone() {
    return this.getStringAttribute('first_slave_zone');
  }
  public set firstSlaveZone(value: string) {
    this._firstSlaveZone = value;
  }
  public resetFirstSlaveZone() {
    this._firstSlaveZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstSlaveZoneInput() {
    return this._firstSlaveZone;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // intranet_ip - computed: true, optional: false, required: false
  public get intranetIp() {
    return this.getStringAttribute('intranet_ip');
  }

  // intranet_port - computed: false, optional: true, required: false
  private _intranetPort?: number; 
  public get intranetPort() {
    return this.getNumberAttribute('intranet_port');
  }
  public set intranetPort(value: number) {
    this._intranetPort = value;
  }
  public resetIntranetPort() {
    this._intranetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intranetPortInput() {
    return this._intranetPort;
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

  // master_region - computed: false, optional: false, required: true
  private _masterRegion?: string; 
  public get masterRegion() {
    return this.getStringAttribute('master_region');
  }
  public set masterRegion(value: string) {
    this._masterRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterRegionInput() {
    return this._masterRegion;
  }

  // mem_size - computed: false, optional: false, required: true
  private _memSize?: number; 
  public get memSize() {
    return this.getNumberAttribute('mem_size');
  }
  public set memSize(value: number) {
    this._memSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memSizeInput() {
    return this._memSize;
  }

  // pay_type - computed: false, optional: true, required: false
  private _payType?: number; 
  public get payType() {
    return this.getNumberAttribute('pay_type');
  }
  public set payType(value: number) {
    this._payType = value;
  }
  public resetPayType() {
    this._payType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payTypeInput() {
    return this._payType;
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

  // prepaid_period - computed: false, optional: true, required: false
  private _prepaidPeriod?: number; 
  public get prepaidPeriod() {
    return this.getNumberAttribute('prepaid_period');
  }
  public set prepaidPeriod(value: number) {
    this._prepaidPeriod = value;
  }
  public resetPrepaidPeriod() {
    this._prepaidPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepaidPeriodInput() {
    return this._prepaidPeriod;
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

  // second_slave_zone - computed: false, optional: true, required: false
  private _secondSlaveZone?: string; 
  public get secondSlaveZone() {
    return this.getStringAttribute('second_slave_zone');
  }
  public set secondSlaveZone(value: string) {
    this._secondSlaveZone = value;
  }
  public resetSecondSlaveZone() {
    this._secondSlaveZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondSlaveZoneInput() {
    return this._secondSlaveZone;
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

  // slave_deploy_mode - computed: false, optional: true, required: false
  private _slaveDeployMode?: number; 
  public get slaveDeployMode() {
    return this.getNumberAttribute('slave_deploy_mode');
  }
  public set slaveDeployMode(value: number) {
    this._slaveDeployMode = value;
  }
  public resetSlaveDeployMode() {
    this._slaveDeployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveDeployModeInput() {
    return this._slaveDeployMode;
  }

  // slave_sync_mode - computed: false, optional: true, required: false
  private _slaveSyncMode?: number; 
  public get slaveSyncMode() {
    return this.getNumberAttribute('slave_sync_mode');
  }
  public set slaveSyncMode(value: number) {
    this._slaveSyncMode = value;
  }
  public resetSlaveSyncMode() {
    this._slaveSyncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveSyncModeInput() {
    return this._slaveSyncMode;
  }

  // subnet_id - computed: true, optional: true, required: false
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

  // volume_size - computed: false, optional: false, required: true
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // vpc_id - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      cpu: cdktf.numberToTerraform(this._cpu),
      device_type: cdktf.stringToTerraform(this._deviceType),
      first_slave_zone: cdktf.stringToTerraform(this._firstSlaveZone),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      intranet_port: cdktf.numberToTerraform(this._intranetPort),
      master_instance_id: cdktf.stringToTerraform(this._masterInstanceId),
      master_region: cdktf.stringToTerraform(this._masterRegion),
      mem_size: cdktf.numberToTerraform(this._memSize),
      pay_type: cdktf.numberToTerraform(this._payType),
      period: cdktf.numberToTerraform(this._period),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      project_id: cdktf.numberToTerraform(this._projectId),
      second_slave_zone: cdktf.stringToTerraform(this._secondSlaveZone),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      slave_deploy_mode: cdktf.numberToTerraform(this._slaveDeployMode),
      slave_sync_mode: cdktf.numberToTerraform(this._slaveSyncMode),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      volume_size: cdktf.numberToTerraform(this._volumeSize),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_slave_zone: {
        value: cdktf.stringToHclTerraform(this._firstSlaveZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intranet_port: {
        value: cdktf.numberToHclTerraform(this._intranetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      master_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_region: {
        value: cdktf.stringToHclTerraform(this._masterRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mem_size: {
        value: cdktf.numberToHclTerraform(this._memSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pay_type: {
        value: cdktf.numberToHclTerraform(this._payType),
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
      prepaid_period: {
        value: cdktf.numberToHclTerraform(this._prepaidPeriod),
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
      second_slave_zone: {
        value: cdktf.stringToHclTerraform(this._secondSlaveZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      slave_deploy_mode: {
        value: cdktf.numberToHclTerraform(this._slaveDeployMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slave_sync_mode: {
        value: cdktf.numberToHclTerraform(this._slaveSyncMode),
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
      volume_size: {
        value: cdktf.numberToHclTerraform(this._volumeSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
