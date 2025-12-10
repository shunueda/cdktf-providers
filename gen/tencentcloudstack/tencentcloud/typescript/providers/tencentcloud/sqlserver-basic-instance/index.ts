// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlserverBasicInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Automatic renewal sign. 0 for normal renewal, 1 for automatic renewal, the default is 1 automatic renewal. Only valid when purchasing a prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#auto_renew SqlserverBasicInstance#auto_renew}
  */
  readonly autoRenew?: number;
  /**
  * Whether to use the voucher automatically; 1 for yes, 0 for no, the default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#auto_voucher SqlserverBasicInstance#auto_voucher}
  */
  readonly autoVoucher?: number;
  /**
  * Availability zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#availability_zone SqlserverBasicInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Pay type of the SQL Server basic instance. For now, only `POSTPAID_BY_HOUR` is valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#charge_type SqlserverBasicInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * System character set sorting rule, default: Chinese_PRC_CI_AS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#collation SqlserverBasicInstance#collation}
  */
  readonly collation?: string;
  /**
  * The CPU number of the SQL Server basic instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#cpu SqlserverBasicInstance#cpu}
  */
  readonly cpu: number;
  /**
  * Version of the SQL Server basic database engine. Allowed values are `2008R2`(SQL Server 2008 Enterprise), `2012SP3`(SQL Server 2012 Enterprise), `2016SP1` (SQL Server 2016 Enterprise), `201602`(SQL Server 2016 Standard) and `2017`(SQL Server 2017 Enterprise). Default is `2008R2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#engine_version SqlserverBasicInstance#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#id SqlserverBasicInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The host type of the purchased instance, `CLOUD_PREMIUM` for virtual machine high-performance cloud disk, `CLOUD_SSD` for virtual machine SSD cloud disk, `CLOUD_HSSD` for virtual machine enhanced cloud disk, `CLOUD_BSSD` for virtual machine general purpose SSD cloud disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#machine_type SqlserverBasicInstance#machine_type}
  */
  readonly machineType: string;
  /**
  * Start time of the maintenance in one day, format like `HH:mm`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#maintenance_start_time SqlserverBasicInstance#maintenance_start_time}
  */
  readonly maintenanceStartTime?: string;
  /**
  * The timespan of maintenance in one day, unit is hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#maintenance_time_span SqlserverBasicInstance#maintenance_time_span}
  */
  readonly maintenanceTimeSpan?: number;
  /**
  * A list of integer indicates weekly maintenance. For example, [1,7] presents do weekly maintenance on every Monday and Sunday.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#maintenance_week_set SqlserverBasicInstance#maintenance_week_set}
  */
  readonly maintenanceWeekSet?: number[];
  /**
  * Memory size (in GB). Allowed value must be larger than `memory` that data source `tencentcloud_sqlserver_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#memory SqlserverBasicInstance#memory}
  */
  readonly memory: number;
  /**
  * Name of the SQL Server basic instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#name SqlserverBasicInstance#name}
  */
  readonly name: string;
  /**
  * Purchase instance period, the default value is 1, which means one month. The value does not exceed 48.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#period SqlserverBasicInstance#period}
  */
  readonly period?: number;
  /**
  * Project ID, default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#project_id SqlserverBasicInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * Security group bound to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#security_groups SqlserverBasicInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Disk size (in GB). Allowed value must be a multiple of 10. The storage must be set with the limit of `storage_min` and `storage_max` which data source `tencentcloud_sqlserver_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#storage SqlserverBasicInstance#storage}
  */
  readonly storage: number;
  /**
  * ID of subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#subnet_id SqlserverBasicInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags of the SQL Server basic instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#tags SqlserverBasicInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * An array of voucher IDs, currently only one can be used for a single order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#voucher_ids SqlserverBasicInstance#voucher_ids}
  */
  readonly voucherIds?: string[];
  /**
  * ID of VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#vpc_id SqlserverBasicInstance#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance tencentcloud_sqlserver_basic_instance}
*/
export class SqlserverBasicInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_sqlserver_basic_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SqlserverBasicInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlserverBasicInstance to import
  * @param importFromId The id of the existing SqlserverBasicInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlserverBasicInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_sqlserver_basic_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/sqlserver_basic_instance tencentcloud_sqlserver_basic_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlserverBasicInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlserverBasicInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_sqlserver_basic_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._autoVoucher = config.autoVoucher;
    this._availabilityZone = config.availabilityZone;
    this._chargeType = config.chargeType;
    this._collation = config.collation;
    this._cpu = config.cpu;
    this._engineVersion = config.engineVersion;
    this._id = config.id;
    this._machineType = config.machineType;
    this._maintenanceStartTime = config.maintenanceStartTime;
    this._maintenanceTimeSpan = config.maintenanceTimeSpan;
    this._maintenanceWeekSet = config.maintenanceWeekSet;
    this._memory = config.memory;
    this._name = config.name;
    this._period = config.period;
    this._projectId = config.projectId;
    this._securityGroups = config.securityGroups;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._voucherIds = config.voucherIds;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_renew - computed: false, optional: true, required: false
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dns_pod_domain - computed: true, optional: false, required: false
  public get dnsPodDomain() {
    return this.getStringAttribute('dns_pod_domain');
  }

  // engine_version - computed: false, optional: true, required: false
  private _engineVersion?: string; 
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion;
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

  // maintenance_start_time - computed: true, optional: true, required: false
  private _maintenanceStartTime?: string; 
  public get maintenanceStartTime() {
    return this.getStringAttribute('maintenance_start_time');
  }
  public set maintenanceStartTime(value: string) {
    this._maintenanceStartTime = value;
  }
  public resetMaintenanceStartTime() {
    this._maintenanceStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceStartTimeInput() {
    return this._maintenanceStartTime;
  }

  // maintenance_time_span - computed: true, optional: true, required: false
  private _maintenanceTimeSpan?: number; 
  public get maintenanceTimeSpan() {
    return this.getNumberAttribute('maintenance_time_span');
  }
  public set maintenanceTimeSpan(value: number) {
    this._maintenanceTimeSpan = value;
  }
  public resetMaintenanceTimeSpan() {
    this._maintenanceTimeSpan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTimeSpanInput() {
    return this._maintenanceTimeSpan;
  }

  // maintenance_week_set - computed: true, optional: true, required: false
  private _maintenanceWeekSet?: number[]; 
  public get maintenanceWeekSet() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('maintenance_week_set')));
  }
  public set maintenanceWeekSet(value: number[]) {
    this._maintenanceWeekSet = value;
  }
  public resetMaintenanceWeekSet() {
    this._maintenanceWeekSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWeekSetInput() {
    return this._maintenanceWeekSet;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew: cdktf.numberToTerraform(this._autoRenew),
      auto_voucher: cdktf.numberToTerraform(this._autoVoucher),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      collation: cdktf.stringToTerraform(this._collation),
      cpu: cdktf.numberToTerraform(this._cpu),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      id: cdktf.stringToTerraform(this._id),
      machine_type: cdktf.stringToTerraform(this._machineType),
      maintenance_start_time: cdktf.stringToTerraform(this._maintenanceStartTime),
      maintenance_time_span: cdktf.numberToTerraform(this._maintenanceTimeSpan),
      maintenance_week_set: cdktf.listMapper(cdktf.numberToTerraform, false)(this._maintenanceWeekSet),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      voucher_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voucherIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      engine_version: {
        value: cdktf.stringToHclTerraform(this._engineVersion),
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
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_start_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_time_span: {
        value: cdktf.numberToHclTerraform(this._maintenanceTimeSpan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maintenance_week_set: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._maintenanceWeekSet),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
