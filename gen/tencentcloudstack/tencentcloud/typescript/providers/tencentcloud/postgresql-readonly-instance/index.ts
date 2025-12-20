// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag, `1` for enabled. NOTES: Only support prepaid instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#auto_renew_flag PostgresqlReadonlyInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * Whether to use voucher, `1` for enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#auto_voucher PostgresqlReadonlyInstance#auto_voucher}
  */
  readonly autoVoucher?: number;
  /**
  * Number of CPU cores. Allowed value must be equal `cpu` that data source `tencentcloud_postgresql_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#cpu PostgresqlReadonlyInstance#cpu}
  */
  readonly cpu?: number;
  /**
  * PostgreSQL kernel version, which must be the same as that of the primary instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#db_version PostgresqlReadonlyInstance#db_version}
  */
  readonly dbVersion: string;
  /**
  * Dedicated cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#dedicated_cluster_id PostgresqlReadonlyInstance#dedicated_cluster_id}
  */
  readonly dedicatedClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#id PostgresqlReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance billing mode. Valid values: PREPAID (monthly subscription), POSTPAID_BY_HOUR (pay-as-you-go).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#instance_charge_type PostgresqlReadonlyInstance#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * ID of the primary instance to which the read-only replica belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#master_db_instance_id PostgresqlReadonlyInstance#master_db_instance_id}
  */
  readonly masterDbInstanceId: string;
  /**
  * Memory size(in GB). Allowed value must be larger than `memory` that data source `tencentcloud_postgresql_specinfos` provides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#memory PostgresqlReadonlyInstance#memory}
  */
  readonly memory: number;
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#name PostgresqlReadonlyInstance#name}
  */
  readonly name: string;
  /**
  * Whether to support IPv6 address access. Valid values: 1 (yes), 0 (no).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#need_support_ipv6 PostgresqlReadonlyInstance#need_support_ipv6}
  */
  readonly needSupportIpv6?: number;
  /**
  * Specify Prepaid period in month. Default `1`. Values: `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `24`, `36`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#period PostgresqlReadonlyInstance#period}
  */
  readonly period?: number;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#project_id PostgresqlReadonlyInstance#project_id}
  */
  readonly projectId: number;
  /**
  * RO group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#read_only_group_id PostgresqlReadonlyInstance#read_only_group_id}
  */
  readonly readOnlyGroupId?: string;
  /**
  * ID of security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#security_groups_ids PostgresqlReadonlyInstance#security_groups_ids}
  */
  readonly securityGroupsIds: string[];
  /**
  * Instance storage capacity in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#storage PostgresqlReadonlyInstance#storage}
  */
  readonly storage: number;
  /**
  * VPC subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#subnet_id PostgresqlReadonlyInstance#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#tags PostgresqlReadonlyInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Specify Voucher Ids if `auto_voucher` was `1`, only support using 1 vouchers for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#voucher_ids PostgresqlReadonlyInstance#voucher_ids}
  */
  readonly voucherIds?: string[];
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#vpc_id PostgresqlReadonlyInstance#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Switch time after instance configurations are modified. `0`: Switch immediately; `2`: Switch during maintenance time window. Default: `0`. Note: This only takes effect when updating the `memory`, `storage`, `cpu` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#wait_switch PostgresqlReadonlyInstance#wait_switch}
  */
  readonly waitSwitch?: number;
  /**
  * Availability zone ID, which can be obtained through the Zone field in the returned value of the DescribeZones API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#zone PostgresqlReadonlyInstance#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance tencentcloud_postgresql_readonly_instance}
*/
export class PostgresqlReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_postgresql_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresqlReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresqlReadonlyInstance to import
  * @param importFromId The id of the existing PostgresqlReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresqlReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_postgresql_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/postgresql_readonly_instance tencentcloud_postgresql_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_postgresql_readonly_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
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
    this._autoVoucher = config.autoVoucher;
    this._cpu = config.cpu;
    this._dbVersion = config.dbVersion;
    this._dedicatedClusterId = config.dedicatedClusterId;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._masterDbInstanceId = config.masterDbInstanceId;
    this._memory = config.memory;
    this._name = config.name;
    this._needSupportIpv6 = config.needSupportIpv6;
    this._period = config.period;
    this._projectId = config.projectId;
    this._readOnlyGroupId = config.readOnlyGroupId;
    this._securityGroupsIds = config.securityGroupsIds;
    this._storage = config.storage;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._voucherIds = config.voucherIds;
    this._vpcId = config.vpcId;
    this._waitSwitch = config.waitSwitch;
    this._zone = config.zone;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // dedicated_cluster_id - computed: false, optional: true, required: false
  private _dedicatedClusterId?: string; 
  public get dedicatedClusterId() {
    return this.getStringAttribute('dedicated_cluster_id');
  }
  public set dedicatedClusterId(value: string) {
    this._dedicatedClusterId = value;
  }
  public resetDedicatedClusterId() {
    this._dedicatedClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedClusterIdInput() {
    return this._dedicatedClusterId;
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

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // master_db_instance_id - computed: false, optional: false, required: true
  private _masterDbInstanceId?: string; 
  public get masterDbInstanceId() {
    return this.getStringAttribute('master_db_instance_id');
  }
  public set masterDbInstanceId(value: string) {
    this._masterDbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDbInstanceIdInput() {
    return this._masterDbInstanceId;
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

  // need_support_ipv6 - computed: false, optional: true, required: false
  private _needSupportIpv6?: number; 
  public get needSupportIpv6() {
    return this.getNumberAttribute('need_support_ipv6');
  }
  public set needSupportIpv6(value: number) {
    this._needSupportIpv6 = value;
  }
  public resetNeedSupportIpv6() {
    this._needSupportIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needSupportIpv6Input() {
    return this._needSupportIpv6;
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

  // private_access_ip - computed: true, optional: false, required: false
  public get privateAccessIp() {
    return this.getStringAttribute('private_access_ip');
  }

  // private_access_port - computed: true, optional: false, required: false
  public get privateAccessPort() {
    return this.getNumberAttribute('private_access_port');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // read_only_group_id - computed: false, optional: true, required: false
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

  // security_groups_ids - computed: false, optional: false, required: true
  private _securityGroupsIds?: string[]; 
  public get securityGroupsIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups_ids'));
  }
  public set securityGroupsIds(value: string[]) {
    this._securityGroupsIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsIdsInput() {
    return this._securityGroupsIds;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
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

  // voucher_ids - computed: false, optional: true, required: false
  private _voucherIds?: string[]; 
  public get voucherIds() {
    return this.getListAttribute('voucher_ids');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      auto_voucher: cdktf.numberToTerraform(this._autoVoucher),
      cpu: cdktf.numberToTerraform(this._cpu),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      dedicated_cluster_id: cdktf.stringToTerraform(this._dedicatedClusterId),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      master_db_instance_id: cdktf.stringToTerraform(this._masterDbInstanceId),
      memory: cdktf.numberToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      need_support_ipv6: cdktf.numberToTerraform(this._needSupportIpv6),
      period: cdktf.numberToTerraform(this._period),
      project_id: cdktf.numberToTerraform(this._projectId),
      read_only_group_id: cdktf.stringToTerraform(this._readOnlyGroupId),
      security_groups_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupsIds),
      storage: cdktf.numberToTerraform(this._storage),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      voucher_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._voucherIds),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      wait_switch: cdktf.numberToTerraform(this._waitSwitch),
      zone: cdktf.stringToTerraform(this._zone),
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
      auto_voucher: {
        value: cdktf.numberToHclTerraform(this._autoVoucher),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      dedicated_cluster_id: {
        value: cdktf.stringToHclTerraform(this._dedicatedClusterId),
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
      master_db_instance_id: {
        value: cdktf.stringToHclTerraform(this._masterDbInstanceId),
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
      need_support_ipv6: {
        value: cdktf.numberToHclTerraform(this._needSupportIpv6),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
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
      security_groups_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupsIds),
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
        type: "list",
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
