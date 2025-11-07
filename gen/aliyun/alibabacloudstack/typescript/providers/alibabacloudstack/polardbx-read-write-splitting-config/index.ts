// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolardbxReadWriteSplittingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#attend_htap_list PolardbxReadWriteSplittingConfig#attend_htap_list}
  */
  readonly attendHtapList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#auto_attend_htap PolardbxReadWriteSplittingConfig#auto_attend_htap}
  */
  readonly autoAttendHtap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#db_instance_id PolardbxReadWriteSplittingConfig#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#delay_execution_strategy PolardbxReadWriteSplittingConfig#delay_execution_strategy}
  */
  readonly delayExecutionStrategy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#enable_consistent_replica_read PolardbxReadWriteSplittingConfig#enable_consistent_replica_read}
  */
  readonly enableConsistentReplicaRead?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#enable_htap PolardbxReadWriteSplittingConfig#enable_htap}
  */
  readonly enableHtap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#id PolardbxReadWriteSplittingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#master_read_weight PolardbxReadWriteSplittingConfig#master_read_weight}
  */
  readonly masterReadWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#storage_delay_threshold PolardbxReadWriteSplittingConfig#storage_delay_threshold}
  */
  readonly storageDelayThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config alibabacloudstack_polardbx_read_write_splitting_config}
*/
export class PolardbxReadWriteSplittingConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_polardbx_read_write_splitting_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolardbxReadWriteSplittingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolardbxReadWriteSplittingConfig to import
  * @param importFromId The id of the existing PolardbxReadWriteSplittingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolardbxReadWriteSplittingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_polardbx_read_write_splitting_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/polardbx_read_write_splitting_config alibabacloudstack_polardbx_read_write_splitting_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolardbxReadWriteSplittingConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PolardbxReadWriteSplittingConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_polardbx_read_write_splitting_config',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attendHtapList = config.attendHtapList;
    this._autoAttendHtap = config.autoAttendHtap;
    this._dbInstanceId = config.dbInstanceId;
    this._delayExecutionStrategy = config.delayExecutionStrategy;
    this._enableConsistentReplicaRead = config.enableConsistentReplicaRead;
    this._enableHtap = config.enableHtap;
    this._id = config.id;
    this._masterReadWeight = config.masterReadWeight;
    this._storageDelayThreshold = config.storageDelayThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attend_htap_list - computed: true, optional: true, required: false
  private _attendHtapList?: string[]; 
  public get attendHtapList() {
    return this.getListAttribute('attend_htap_list');
  }
  public set attendHtapList(value: string[]) {
    this._attendHtapList = value;
  }
  public resetAttendHtapList() {
    this._attendHtapList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attendHtapListInput() {
    return this._attendHtapList;
  }

  // auto_attend_htap - computed: true, optional: true, required: false
  private _autoAttendHtap?: boolean | cdktf.IResolvable; 
  public get autoAttendHtap() {
    return this.getBooleanAttribute('auto_attend_htap');
  }
  public set autoAttendHtap(value: boolean | cdktf.IResolvable) {
    this._autoAttendHtap = value;
  }
  public resetAutoAttendHtap() {
    this._autoAttendHtap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAttendHtapInput() {
    return this._autoAttendHtap;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // delay_execution_strategy - computed: true, optional: true, required: false
  private _delayExecutionStrategy?: number; 
  public get delayExecutionStrategy() {
    return this.getNumberAttribute('delay_execution_strategy');
  }
  public set delayExecutionStrategy(value: number) {
    this._delayExecutionStrategy = value;
  }
  public resetDelayExecutionStrategy() {
    this._delayExecutionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayExecutionStrategyInput() {
    return this._delayExecutionStrategy;
  }

  // enable_consistent_replica_read - computed: true, optional: true, required: false
  private _enableConsistentReplicaRead?: boolean | cdktf.IResolvable; 
  public get enableConsistentReplicaRead() {
    return this.getBooleanAttribute('enable_consistent_replica_read');
  }
  public set enableConsistentReplicaRead(value: boolean | cdktf.IResolvable) {
    this._enableConsistentReplicaRead = value;
  }
  public resetEnableConsistentReplicaRead() {
    this._enableConsistentReplicaRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsistentReplicaReadInput() {
    return this._enableConsistentReplicaRead;
  }

  // enable_htap - computed: true, optional: true, required: false
  private _enableHtap?: boolean | cdktf.IResolvable; 
  public get enableHtap() {
    return this.getBooleanAttribute('enable_htap');
  }
  public set enableHtap(value: boolean | cdktf.IResolvable) {
    this._enableHtap = value;
  }
  public resetEnableHtap() {
    this._enableHtap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHtapInput() {
    return this._enableHtap;
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

  // master_read_weight - computed: true, optional: true, required: false
  private _masterReadWeight?: number; 
  public get masterReadWeight() {
    return this.getNumberAttribute('master_read_weight');
  }
  public set masterReadWeight(value: number) {
    this._masterReadWeight = value;
  }
  public resetMasterReadWeight() {
    this._masterReadWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterReadWeightInput() {
    return this._masterReadWeight;
  }

  // storage_delay_threshold - computed: true, optional: true, required: false
  private _storageDelayThreshold?: number; 
  public get storageDelayThreshold() {
    return this.getNumberAttribute('storage_delay_threshold');
  }
  public set storageDelayThreshold(value: number) {
    this._storageDelayThreshold = value;
  }
  public resetStorageDelayThreshold() {
    this._storageDelayThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDelayThresholdInput() {
    return this._storageDelayThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attend_htap_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attendHtapList),
      auto_attend_htap: cdktf.booleanToTerraform(this._autoAttendHtap),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      delay_execution_strategy: cdktf.numberToTerraform(this._delayExecutionStrategy),
      enable_consistent_replica_read: cdktf.booleanToTerraform(this._enableConsistentReplicaRead),
      enable_htap: cdktf.booleanToTerraform(this._enableHtap),
      id: cdktf.stringToTerraform(this._id),
      master_read_weight: cdktf.numberToTerraform(this._masterReadWeight),
      storage_delay_threshold: cdktf.numberToTerraform(this._storageDelayThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attend_htap_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attendHtapList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      auto_attend_htap: {
        value: cdktf.booleanToHclTerraform(this._autoAttendHtap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_execution_strategy: {
        value: cdktf.numberToHclTerraform(this._delayExecutionStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_consistent_replica_read: {
        value: cdktf.booleanToHclTerraform(this._enableConsistentReplicaRead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_htap: {
        value: cdktf.booleanToHclTerraform(this._enableHtap),
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
      master_read_weight: {
        value: cdktf.numberToHclTerraform(this._masterReadWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_delay_threshold: {
        value: cdktf.numberToHclTerraform(this._storageDelayThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
