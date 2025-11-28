// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbStandbyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto renew flag. Valid values are `0`(NOTIFY_AND_MANUAL_RENEW), `1`(NOTIFY_AND_AUTO_RENEW) and `2`(DISABLE_NOTIFY_AND_MANUAL_RENEW). Default value is `0`. Note: only works for PREPAID instance. Only supports`0` and `1` for creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#auto_renew_flag MongodbStandbyInstance#auto_renew_flag}
  */
  readonly autoRenewFlag?: number;
  /**
  * The available zone of the Mongodb standby instance. NOTE: must not be same with father instance's.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#available_zone MongodbStandbyInstance#available_zone}
  */
  readonly availableZone: string;
  /**
  * The charge type of instance. Valid values are `PREPAID` and `POSTPAID_BY_HOUR`. Default value is `POSTPAID_BY_HOUR`. Note: TencentCloud International only supports `POSTPAID_BY_HOUR`. Caution that update operation on this field will delete old instances and create new one with new charge type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#charge_type MongodbStandbyInstance#charge_type}
  */
  readonly chargeType?: string;
  /**
  * Indicates the main instance ID of standby instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#father_instance_id MongodbStandbyInstance#father_instance_id}
  */
  readonly fatherInstanceId: string;
  /**
  * Indicates the region of main instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#father_instance_region MongodbStandbyInstance#father_instance_region}
  */
  readonly fatherInstanceRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#id MongodbStandbyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Switch time for instance configuration changes.
  * 	- 0: When the adjustment is completed, perform the configuration task immediately. Default is 0.
  * 	- 1: Perform reconfiguration tasks within the maintenance time window.
  * Note: Adjusting the number of nodes and slices does not support changes within the maintenance window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#in_maintenance MongodbStandbyInstance#in_maintenance}
  */
  readonly inMaintenance?: number;
  /**
  * Name of the Mongodb instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#instance_name MongodbStandbyInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * Memory size. The minimum value is 2, and unit is GB. Memory and volume must be upgraded or degraded simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#memory MongodbStandbyInstance#memory}
  */
  readonly memory: number;
  /**
  * The tenancy (time unit is month) of the prepaid instance. Valid values are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36. NOTE: it only works when charge_type is set to `PREPAID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#prepaid_period MongodbStandbyInstance#prepaid_period}
  */
  readonly prepaidPeriod?: number;
  /**
  * ID of the project which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#project_id MongodbStandbyInstance#project_id}
  */
  readonly projectId?: number;
  /**
  * ID of the security group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#security_groups MongodbStandbyInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * ID of the subnet within this VPC. The value is required if `vpc_id` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#subnet_id MongodbStandbyInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The tags of the Mongodb. Key name `project` is system reserved and can't be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#tags MongodbStandbyInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Disk size. The minimum value is 25, and unit is GB. Memory and volume must be upgraded or degraded simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#volume MongodbStandbyInstance#volume}
  */
  readonly volume: number;
  /**
  * ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#vpc_id MongodbStandbyInstance#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance tencentcloud_mongodb_standby_instance}
*/
export class MongodbStandbyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mongodb_standby_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbStandbyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbStandbyInstance to import
  * @param importFromId The id of the existing MongodbStandbyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbStandbyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mongodb_standby_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mongodb_standby_instance tencentcloud_mongodb_standby_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbStandbyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbStandbyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mongodb_standby_instance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._availableZone = config.availableZone;
    this._chargeType = config.chargeType;
    this._fatherInstanceId = config.fatherInstanceId;
    this._fatherInstanceRegion = config.fatherInstanceRegion;
    this._id = config.id;
    this._inMaintenance = config.inMaintenance;
    this._instanceName = config.instanceName;
    this._memory = config.memory;
    this._prepaidPeriod = config.prepaidPeriod;
    this._projectId = config.projectId;
    this._securityGroups = config.securityGroups;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._volume = config.volume;
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

  // available_zone - computed: false, optional: false, required: true
  private _availableZone?: string; 
  public get availableZone() {
    return this.getStringAttribute('available_zone');
  }
  public set availableZone(value: string) {
    this._availableZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availableZoneInput() {
    return this._availableZone;
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

  // engine_version - computed: true, optional: false, required: false
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }

  // father_instance_id - computed: false, optional: false, required: true
  private _fatherInstanceId?: string; 
  public get fatherInstanceId() {
    return this.getStringAttribute('father_instance_id');
  }
  public set fatherInstanceId(value: string) {
    this._fatherInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fatherInstanceIdInput() {
    return this._fatherInstanceId;
  }

  // father_instance_region - computed: false, optional: false, required: true
  private _fatherInstanceRegion?: string; 
  public get fatherInstanceRegion() {
    return this.getStringAttribute('father_instance_region');
  }
  public set fatherInstanceRegion(value: string) {
    this._fatherInstanceRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fatherInstanceRegionInput() {
    return this._fatherInstanceRegion;
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

  // in_maintenance - computed: false, optional: true, required: false
  private _inMaintenance?: number; 
  public get inMaintenance() {
    return this.getNumberAttribute('in_maintenance');
  }
  public set inMaintenance(value: number) {
    this._inMaintenance = value;
  }
  public resetInMaintenance() {
    this._inMaintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMaintenanceInput() {
    return this._inMaintenance;
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

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
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

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: number; 
  public get volume() {
    return this.getNumberAttribute('volume');
  }
  public set volume(value: number) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
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
      auto_renew_flag: cdktf.numberToTerraform(this._autoRenewFlag),
      available_zone: cdktf.stringToTerraform(this._availableZone),
      charge_type: cdktf.stringToTerraform(this._chargeType),
      father_instance_id: cdktf.stringToTerraform(this._fatherInstanceId),
      father_instance_region: cdktf.stringToTerraform(this._fatherInstanceRegion),
      id: cdktf.stringToTerraform(this._id),
      in_maintenance: cdktf.numberToTerraform(this._inMaintenance),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      memory: cdktf.numberToTerraform(this._memory),
      prepaid_period: cdktf.numberToTerraform(this._prepaidPeriod),
      project_id: cdktf.numberToTerraform(this._projectId),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      volume: cdktf.numberToTerraform(this._volume),
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
      available_zone: {
        value: cdktf.stringToHclTerraform(this._availableZone),
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
      father_instance_id: {
        value: cdktf.stringToHclTerraform(this._fatherInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      father_instance_region: {
        value: cdktf.stringToHclTerraform(this._fatherInstanceRegion),
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
      in_maintenance: {
        value: cdktf.numberToHclTerraform(this._inMaintenance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
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
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      volume: {
        value: cdktf.numberToHclTerraform(this._volume),
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
