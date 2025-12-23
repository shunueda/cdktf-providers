// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbReadonlyInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID which the readonly instance belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#cluster_id CynosdbReadonlyInstance#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Indicate whether to delete readonly instance directly or not. Default is false. If set true, instance will be deleted instead of staying recycle bin. Note: works for both `PREPAID` and `POSTPAID_BY_HOUR` cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#force_delete CynosdbReadonlyInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#id CynosdbReadonlyInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of CPU cores of read-write type instance in the CynosDB cluster. Required while creating normal cluster. Note: modification of this field will take effect immediately, if want to upgrade on maintenance window, please upgrade from console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#instance_cpu_core CynosdbReadonlyInstance#instance_cpu_core}
  */
  readonly instanceCpuCore?: number;
  /**
  * Duration time for maintenance, unit in second. `3600` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#instance_maintain_duration CynosdbReadonlyInstance#instance_maintain_duration}
  */
  readonly instanceMaintainDuration?: number;
  /**
  * Offset time from 00:00, unit in second. For example, 03:00am should be `10800`. `10800` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#instance_maintain_start_time CynosdbReadonlyInstance#instance_maintain_start_time}
  */
  readonly instanceMaintainStartTime?: number;
  /**
  * Weekdays for maintenance. `["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#instance_maintain_weekdays CynosdbReadonlyInstance#instance_maintain_weekdays}
  */
  readonly instanceMaintainWeekdays?: string[];
  /**
  * Memory capacity of read-write type instance, unit in GB. Required while creating normal cluster. Note: modification of this field will take effect immediately, if want to upgrade on maintenance window, please upgrade from console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#instance_memory_size CynosdbReadonlyInstance#instance_memory_size}
  */
  readonly instanceMemorySize?: number;
  /**
  * Name of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#instance_name CynosdbReadonlyInstance#instance_name}
  */
  readonly instanceName: string;
  /**
  * ID of the subnet within this VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#subnet_id CynosdbReadonlyInstance#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * ID of the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#vpc_id CynosdbReadonlyInstance#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance tencentcloud_cynosdb_readonly_instance}
*/
export class CynosdbReadonlyInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_readonly_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbReadonlyInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbReadonlyInstance to import
  * @param importFromId The id of the existing CynosdbReadonlyInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbReadonlyInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_readonly_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/cynosdb_readonly_instance tencentcloud_cynosdb_readonly_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbReadonlyInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbReadonlyInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_readonly_instance',
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
    this._clusterId = config.clusterId;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._instanceCpuCore = config.instanceCpuCore;
    this._instanceMaintainDuration = config.instanceMaintainDuration;
    this._instanceMaintainStartTime = config.instanceMaintainStartTime;
    this._instanceMaintainWeekdays = config.instanceMaintainWeekdays;
    this._instanceMemorySize = config.instanceMemorySize;
    this._instanceName = config.instanceName;
    this._subnetId = config.subnetId;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // instance_cpu_core - computed: false, optional: true, required: false
  private _instanceCpuCore?: number; 
  public get instanceCpuCore() {
    return this.getNumberAttribute('instance_cpu_core');
  }
  public set instanceCpuCore(value: number) {
    this._instanceCpuCore = value;
  }
  public resetInstanceCpuCore() {
    this._instanceCpuCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCpuCoreInput() {
    return this._instanceCpuCore;
  }

  // instance_maintain_duration - computed: false, optional: true, required: false
  private _instanceMaintainDuration?: number; 
  public get instanceMaintainDuration() {
    return this.getNumberAttribute('instance_maintain_duration');
  }
  public set instanceMaintainDuration(value: number) {
    this._instanceMaintainDuration = value;
  }
  public resetInstanceMaintainDuration() {
    this._instanceMaintainDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintainDurationInput() {
    return this._instanceMaintainDuration;
  }

  // instance_maintain_start_time - computed: false, optional: true, required: false
  private _instanceMaintainStartTime?: number; 
  public get instanceMaintainStartTime() {
    return this.getNumberAttribute('instance_maintain_start_time');
  }
  public set instanceMaintainStartTime(value: number) {
    this._instanceMaintainStartTime = value;
  }
  public resetInstanceMaintainStartTime() {
    this._instanceMaintainStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintainStartTimeInput() {
    return this._instanceMaintainStartTime;
  }

  // instance_maintain_weekdays - computed: true, optional: true, required: false
  private _instanceMaintainWeekdays?: string[]; 
  public get instanceMaintainWeekdays() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_maintain_weekdays'));
  }
  public set instanceMaintainWeekdays(value: string[]) {
    this._instanceMaintainWeekdays = value;
  }
  public resetInstanceMaintainWeekdays() {
    this._instanceMaintainWeekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMaintainWeekdaysInput() {
    return this._instanceMaintainWeekdays;
  }

  // instance_memory_size - computed: false, optional: true, required: false
  private _instanceMemorySize?: number; 
  public get instanceMemorySize() {
    return this.getNumberAttribute('instance_memory_size');
  }
  public set instanceMemorySize(value: number) {
    this._instanceMemorySize = value;
  }
  public resetInstanceMemorySize() {
    this._instanceMemorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMemorySizeInput() {
    return this._instanceMemorySize;
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

  // instance_status - computed: true, optional: false, required: false
  public get instanceStatus() {
    return this.getStringAttribute('instance_status');
  }

  // instance_storage_size - computed: true, optional: false, required: false
  public get instanceStorageSize() {
    return this.getNumberAttribute('instance_storage_size');
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      instance_cpu_core: cdktf.numberToTerraform(this._instanceCpuCore),
      instance_maintain_duration: cdktf.numberToTerraform(this._instanceMaintainDuration),
      instance_maintain_start_time: cdktf.numberToTerraform(this._instanceMaintainStartTime),
      instance_maintain_weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceMaintainWeekdays),
      instance_memory_size: cdktf.numberToTerraform(this._instanceMemorySize),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      instance_cpu_core: {
        value: cdktf.numberToHclTerraform(this._instanceCpuCore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_maintain_duration: {
        value: cdktf.numberToHclTerraform(this._instanceMaintainDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_maintain_start_time: {
        value: cdktf.numberToHclTerraform(this._instanceMaintainStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_maintain_weekdays: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceMaintainWeekdays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_memory_size: {
        value: cdktf.numberToHclTerraform(this._instanceMemorySize),
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
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
