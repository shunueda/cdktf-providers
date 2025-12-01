// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LindormInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#arbiter_vswitch_id LindormInstance#arbiter_vswitch_id}
  */
  readonly arbiterVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#arbiter_zone_id LindormInstance#arbiter_zone_id}
  */
  readonly arbiterZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#arch_version LindormInstance#arch_version}
  */
  readonly archVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#auto_renew LindormInstance#auto_renew}
  */
  readonly autoRenew?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#auto_renew_period LindormInstance#auto_renew_period}
  */
  readonly autoRenewPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#cold_storage LindormInstance#cold_storage}
  */
  readonly coldStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#core_num LindormInstance#core_num}
  */
  readonly coreNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#core_single_storage LindormInstance#core_single_storage}
  */
  readonly coreSingleStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#core_spec LindormInstance#core_spec}
  */
  readonly coreSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#deletion_proection LindormInstance#deletion_proection}
  */
  readonly deletionProection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#disk_category LindormInstance#disk_category}
  */
  readonly diskCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#duration LindormInstance#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#file_engine_node_count LindormInstance#file_engine_node_count}
  */
  readonly fileEngineNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#file_engine_specification LindormInstance#file_engine_specification}
  */
  readonly fileEngineSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#group_name LindormInstance#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#id LindormInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#instance_name LindormInstance#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#instance_storage LindormInstance#instance_storage}
  */
  readonly instanceStorage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#ip_white_list LindormInstance#ip_white_list}
  */
  readonly ipWhiteList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#log_disk_category LindormInstance#log_disk_category}
  */
  readonly logDiskCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#log_num LindormInstance#log_num}
  */
  readonly logNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#log_single_storage LindormInstance#log_single_storage}
  */
  readonly logSingleStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#log_spec LindormInstance#log_spec}
  */
  readonly logSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#lts_node_count LindormInstance#lts_node_count}
  */
  readonly ltsNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#lts_node_specification LindormInstance#lts_node_specification}
  */
  readonly ltsNodeSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#multi_zone_combination LindormInstance#multi_zone_combination}
  */
  readonly multiZoneCombination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#payment_type LindormInstance#payment_type}
  */
  readonly paymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#phoenix_node_count LindormInstance#phoenix_node_count}
  */
  readonly phoenixNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#phoenix_node_specification LindormInstance#phoenix_node_specification}
  */
  readonly phoenixNodeSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#pricing_cycle LindormInstance#pricing_cycle}
  */
  readonly pricingCycle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#primary_vswitch_id LindormInstance#primary_vswitch_id}
  */
  readonly primaryVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#primary_zone_id LindormInstance#primary_zone_id}
  */
  readonly primaryZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#resource_group_id LindormInstance#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#search_engine_node_count LindormInstance#search_engine_node_count}
  */
  readonly searchEngineNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#search_engine_specification LindormInstance#search_engine_specification}
  */
  readonly searchEngineSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#standby_vswitch_id LindormInstance#standby_vswitch_id}
  */
  readonly standbyVswitchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#standby_zone_id LindormInstance#standby_zone_id}
  */
  readonly standbyZoneId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#stream_engine_node_count LindormInstance#stream_engine_node_count}
  */
  readonly streamEngineNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#stream_engine_specification LindormInstance#stream_engine_specification}
  */
  readonly streamEngineSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#table_engine_node_count LindormInstance#table_engine_node_count}
  */
  readonly tableEngineNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#table_engine_specification LindormInstance#table_engine_specification}
  */
  readonly tableEngineSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#tags LindormInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#time_series_engine_node_count LindormInstance#time_series_engine_node_count}
  */
  readonly timeSeriesEngineNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#time_series_engine_specification LindormInstance#time_series_engine_specification}
  */
  readonly timeSeriesEngineSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#time_serires_engine_specification LindormInstance#time_serires_engine_specification}
  */
  readonly timeSeriresEngineSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#upgrade_type LindormInstance#upgrade_type}
  */
  readonly upgradeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#vpc_id LindormInstance#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#vswitch_id LindormInstance#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#zone_id LindormInstance#zone_id}
  */
  readonly zoneId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#timeouts LindormInstance#timeouts}
  */
  readonly timeouts?: LindormInstanceTimeouts;
}
export interface LindormInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#create LindormInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#delete LindormInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#update LindormInstance#update}
  */
  readonly update?: string;
}

export function lindormInstanceTimeoutsToTerraform(struct?: LindormInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lindormInstanceTimeoutsToHclTerraform(struct?: LindormInstanceTimeouts | cdktf.IResolvable): any {
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

export class LindormInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LindormInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LindormInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance alicloud_lindorm_instance}
*/
export class LindormInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_lindorm_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LindormInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LindormInstance to import
  * @param importFromId The id of the existing LindormInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LindormInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_lindorm_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/lindorm_instance alicloud_lindorm_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LindormInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: LindormInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_lindorm_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arbiterVswitchId = config.arbiterVswitchId;
    this._arbiterZoneId = config.arbiterZoneId;
    this._archVersion = config.archVersion;
    this._autoRenew = config.autoRenew;
    this._autoRenewPeriod = config.autoRenewPeriod;
    this._coldStorage = config.coldStorage;
    this._coreNum = config.coreNum;
    this._coreSingleStorage = config.coreSingleStorage;
    this._coreSpec = config.coreSpec;
    this._deletionProection = config.deletionProection;
    this._diskCategory = config.diskCategory;
    this._duration = config.duration;
    this._fileEngineNodeCount = config.fileEngineNodeCount;
    this._fileEngineSpecification = config.fileEngineSpecification;
    this._groupName = config.groupName;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._instanceStorage = config.instanceStorage;
    this._ipWhiteList = config.ipWhiteList;
    this._logDiskCategory = config.logDiskCategory;
    this._logNum = config.logNum;
    this._logSingleStorage = config.logSingleStorage;
    this._logSpec = config.logSpec;
    this._ltsNodeCount = config.ltsNodeCount;
    this._ltsNodeSpecification = config.ltsNodeSpecification;
    this._multiZoneCombination = config.multiZoneCombination;
    this._paymentType = config.paymentType;
    this._phoenixNodeCount = config.phoenixNodeCount;
    this._phoenixNodeSpecification = config.phoenixNodeSpecification;
    this._pricingCycle = config.pricingCycle;
    this._primaryVswitchId = config.primaryVswitchId;
    this._primaryZoneId = config.primaryZoneId;
    this._resourceGroupId = config.resourceGroupId;
    this._searchEngineNodeCount = config.searchEngineNodeCount;
    this._searchEngineSpecification = config.searchEngineSpecification;
    this._standbyVswitchId = config.standbyVswitchId;
    this._standbyZoneId = config.standbyZoneId;
    this._streamEngineNodeCount = config.streamEngineNodeCount;
    this._streamEngineSpecification = config.streamEngineSpecification;
    this._tableEngineNodeCount = config.tableEngineNodeCount;
    this._tableEngineSpecification = config.tableEngineSpecification;
    this._tags = config.tags;
    this._timeSeriesEngineNodeCount = config.timeSeriesEngineNodeCount;
    this._timeSeriesEngineSpecification = config.timeSeriesEngineSpecification;
    this._timeSeriresEngineSpecification = config.timeSeriresEngineSpecification;
    this._upgradeType = config.upgradeType;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arbiter_vswitch_id - computed: false, optional: true, required: false
  private _arbiterVswitchId?: string; 
  public get arbiterVswitchId() {
    return this.getStringAttribute('arbiter_vswitch_id');
  }
  public set arbiterVswitchId(value: string) {
    this._arbiterVswitchId = value;
  }
  public resetArbiterVswitchId() {
    this._arbiterVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arbiterVswitchIdInput() {
    return this._arbiterVswitchId;
  }

  // arbiter_zone_id - computed: false, optional: true, required: false
  private _arbiterZoneId?: string; 
  public get arbiterZoneId() {
    return this.getStringAttribute('arbiter_zone_id');
  }
  public set arbiterZoneId(value: string) {
    this._arbiterZoneId = value;
  }
  public resetArbiterZoneId() {
    this._arbiterZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arbiterZoneIdInput() {
    return this._arbiterZoneId;
  }

  // arch_version - computed: true, optional: true, required: false
  private _archVersion?: string; 
  public get archVersion() {
    return this.getStringAttribute('arch_version');
  }
  public set archVersion(value: string) {
    this._archVersion = value;
  }
  public resetArchVersion() {
    this._archVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archVersionInput() {
    return this._archVersion;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: string; 
  public get autoRenew() {
    return this.getStringAttribute('auto_renew');
  }
  public set autoRenew(value: string) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_period - computed: false, optional: true, required: false
  private _autoRenewPeriod?: string; 
  public get autoRenewPeriod() {
    return this.getStringAttribute('auto_renew_period');
  }
  public set autoRenewPeriod(value: string) {
    this._autoRenewPeriod = value;
  }
  public resetAutoRenewPeriod() {
    this._autoRenewPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewPeriodInput() {
    return this._autoRenewPeriod;
  }

  // cold_storage - computed: true, optional: true, required: false
  private _coldStorage?: number; 
  public get coldStorage() {
    return this.getNumberAttribute('cold_storage');
  }
  public set coldStorage(value: number) {
    this._coldStorage = value;
  }
  public resetColdStorage() {
    this._coldStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageInput() {
    return this._coldStorage;
  }

  // core_num - computed: false, optional: true, required: false
  private _coreNum?: number; 
  public get coreNum() {
    return this.getNumberAttribute('core_num');
  }
  public set coreNum(value: number) {
    this._coreNum = value;
  }
  public resetCoreNum() {
    this._coreNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNumInput() {
    return this._coreNum;
  }

  // core_single_storage - computed: false, optional: true, required: false
  private _coreSingleStorage?: number; 
  public get coreSingleStorage() {
    return this.getNumberAttribute('core_single_storage');
  }
  public set coreSingleStorage(value: number) {
    this._coreSingleStorage = value;
  }
  public resetCoreSingleStorage() {
    this._coreSingleStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSingleStorageInput() {
    return this._coreSingleStorage;
  }

  // core_spec - computed: true, optional: true, required: false
  private _coreSpec?: string; 
  public get coreSpec() {
    return this.getStringAttribute('core_spec');
  }
  public set coreSpec(value: string) {
    this._coreSpec = value;
  }
  public resetCoreSpec() {
    this._coreSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSpecInput() {
    return this._coreSpec;
  }

  // deletion_proection - computed: true, optional: true, required: false
  private _deletionProection?: boolean | cdktf.IResolvable; 
  public get deletionProection() {
    return this.getBooleanAttribute('deletion_proection');
  }
  public set deletionProection(value: boolean | cdktf.IResolvable) {
    this._deletionProection = value;
  }
  public resetDeletionProection() {
    this._deletionProection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProectionInput() {
    return this._deletionProection;
  }

  // disk_category - computed: false, optional: false, required: true
  private _diskCategory?: string; 
  public get diskCategory() {
    return this.getStringAttribute('disk_category');
  }
  public set diskCategory(value: string) {
    this._diskCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskCategoryInput() {
    return this._diskCategory;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // enabled_file_engine - computed: true, optional: false, required: false
  public get enabledFileEngine() {
    return this.getBooleanAttribute('enabled_file_engine');
  }

  // enabled_lts_engine - computed: true, optional: false, required: false
  public get enabledLtsEngine() {
    return this.getBooleanAttribute('enabled_lts_engine');
  }

  // enabled_search_engine - computed: true, optional: false, required: false
  public get enabledSearchEngine() {
    return this.getBooleanAttribute('enabled_search_engine');
  }

  // enabled_stream_engine - computed: true, optional: false, required: false
  public get enabledStreamEngine() {
    return this.getBooleanAttribute('enabled_stream_engine');
  }

  // enabled_table_engine - computed: true, optional: false, required: false
  public get enabledTableEngine() {
    return this.getBooleanAttribute('enabled_table_engine');
  }

  // enabled_time_serires_engine - computed: true, optional: false, required: false
  public get enabledTimeSeriresEngine() {
    return this.getBooleanAttribute('enabled_time_serires_engine');
  }

  // file_engine_node_count - computed: true, optional: true, required: false
  private _fileEngineNodeCount?: number; 
  public get fileEngineNodeCount() {
    return this.getNumberAttribute('file_engine_node_count');
  }
  public set fileEngineNodeCount(value: number) {
    this._fileEngineNodeCount = value;
  }
  public resetFileEngineNodeCount() {
    this._fileEngineNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileEngineNodeCountInput() {
    return this._fileEngineNodeCount;
  }

  // file_engine_specification - computed: true, optional: true, required: false
  private _fileEngineSpecification?: string; 
  public get fileEngineSpecification() {
    return this.getStringAttribute('file_engine_specification');
  }
  public set fileEngineSpecification(value: string) {
    this._fileEngineSpecification = value;
  }
  public resetFileEngineSpecification() {
    this._fileEngineSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileEngineSpecificationInput() {
    return this._fileEngineSpecification;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_storage - computed: true, optional: true, required: false
  private _instanceStorage?: string; 
  public get instanceStorage() {
    return this.getStringAttribute('instance_storage');
  }
  public set instanceStorage(value: string) {
    this._instanceStorage = value;
  }
  public resetInstanceStorage() {
    this._instanceStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceStorageInput() {
    return this._instanceStorage;
  }

  // ip_white_list - computed: false, optional: true, required: false
  private _ipWhiteList?: string[]; 
  public get ipWhiteList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_white_list'));
  }
  public set ipWhiteList(value: string[]) {
    this._ipWhiteList = value;
  }
  public resetIpWhiteList() {
    this._ipWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWhiteListInput() {
    return this._ipWhiteList;
  }

  // log_disk_category - computed: false, optional: true, required: false
  private _logDiskCategory?: string; 
  public get logDiskCategory() {
    return this.getStringAttribute('log_disk_category');
  }
  public set logDiskCategory(value: string) {
    this._logDiskCategory = value;
  }
  public resetLogDiskCategory() {
    this._logDiskCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDiskCategoryInput() {
    return this._logDiskCategory;
  }

  // log_num - computed: false, optional: true, required: false
  private _logNum?: number; 
  public get logNum() {
    return this.getNumberAttribute('log_num');
  }
  public set logNum(value: number) {
    this._logNum = value;
  }
  public resetLogNum() {
    this._logNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNumInput() {
    return this._logNum;
  }

  // log_single_storage - computed: false, optional: true, required: false
  private _logSingleStorage?: number; 
  public get logSingleStorage() {
    return this.getNumberAttribute('log_single_storage');
  }
  public set logSingleStorage(value: number) {
    this._logSingleStorage = value;
  }
  public resetLogSingleStorage() {
    this._logSingleStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSingleStorageInput() {
    return this._logSingleStorage;
  }

  // log_spec - computed: false, optional: true, required: false
  private _logSpec?: string; 
  public get logSpec() {
    return this.getStringAttribute('log_spec');
  }
  public set logSpec(value: string) {
    this._logSpec = value;
  }
  public resetLogSpec() {
    this._logSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSpecInput() {
    return this._logSpec;
  }

  // lts_node_count - computed: true, optional: true, required: false
  private _ltsNodeCount?: number; 
  public get ltsNodeCount() {
    return this.getNumberAttribute('lts_node_count');
  }
  public set ltsNodeCount(value: number) {
    this._ltsNodeCount = value;
  }
  public resetLtsNodeCount() {
    this._ltsNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltsNodeCountInput() {
    return this._ltsNodeCount;
  }

  // lts_node_specification - computed: true, optional: true, required: false
  private _ltsNodeSpecification?: string; 
  public get ltsNodeSpecification() {
    return this.getStringAttribute('lts_node_specification');
  }
  public set ltsNodeSpecification(value: string) {
    this._ltsNodeSpecification = value;
  }
  public resetLtsNodeSpecification() {
    this._ltsNodeSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ltsNodeSpecificationInput() {
    return this._ltsNodeSpecification;
  }

  // multi_zone_combination - computed: false, optional: true, required: false
  private _multiZoneCombination?: string; 
  public get multiZoneCombination() {
    return this.getStringAttribute('multi_zone_combination');
  }
  public set multiZoneCombination(value: string) {
    this._multiZoneCombination = value;
  }
  public resetMultiZoneCombination() {
    this._multiZoneCombination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiZoneCombinationInput() {
    return this._multiZoneCombination;
  }

  // payment_type - computed: false, optional: false, required: true
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // phoenix_node_count - computed: false, optional: true, required: false
  private _phoenixNodeCount?: number; 
  public get phoenixNodeCount() {
    return this.getNumberAttribute('phoenix_node_count');
  }
  public set phoenixNodeCount(value: number) {
    this._phoenixNodeCount = value;
  }
  public resetPhoenixNodeCount() {
    this._phoenixNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoenixNodeCountInput() {
    return this._phoenixNodeCount;
  }

  // phoenix_node_specification - computed: false, optional: true, required: false
  private _phoenixNodeSpecification?: string; 
  public get phoenixNodeSpecification() {
    return this.getStringAttribute('phoenix_node_specification');
  }
  public set phoenixNodeSpecification(value: string) {
    this._phoenixNodeSpecification = value;
  }
  public resetPhoenixNodeSpecification() {
    this._phoenixNodeSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoenixNodeSpecificationInput() {
    return this._phoenixNodeSpecification;
  }

  // pricing_cycle - computed: false, optional: true, required: false
  private _pricingCycle?: string; 
  public get pricingCycle() {
    return this.getStringAttribute('pricing_cycle');
  }
  public set pricingCycle(value: string) {
    this._pricingCycle = value;
  }
  public resetPricingCycle() {
    this._pricingCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingCycleInput() {
    return this._pricingCycle;
  }

  // primary_vswitch_id - computed: false, optional: true, required: false
  private _primaryVswitchId?: string; 
  public get primaryVswitchId() {
    return this.getStringAttribute('primary_vswitch_id');
  }
  public set primaryVswitchId(value: string) {
    this._primaryVswitchId = value;
  }
  public resetPrimaryVswitchId() {
    this._primaryVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVswitchIdInput() {
    return this._primaryVswitchId;
  }

  // primary_zone_id - computed: false, optional: true, required: false
  private _primaryZoneId?: string; 
  public get primaryZoneId() {
    return this.getStringAttribute('primary_zone_id');
  }
  public set primaryZoneId(value: string) {
    this._primaryZoneId = value;
  }
  public resetPrimaryZoneId() {
    this._primaryZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryZoneIdInput() {
    return this._primaryZoneId;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // search_engine_node_count - computed: true, optional: true, required: false
  private _searchEngineNodeCount?: number; 
  public get searchEngineNodeCount() {
    return this.getNumberAttribute('search_engine_node_count');
  }
  public set searchEngineNodeCount(value: number) {
    this._searchEngineNodeCount = value;
  }
  public resetSearchEngineNodeCount() {
    this._searchEngineNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineNodeCountInput() {
    return this._searchEngineNodeCount;
  }

  // search_engine_specification - computed: true, optional: true, required: false
  private _searchEngineSpecification?: string; 
  public get searchEngineSpecification() {
    return this.getStringAttribute('search_engine_specification');
  }
  public set searchEngineSpecification(value: string) {
    this._searchEngineSpecification = value;
  }
  public resetSearchEngineSpecification() {
    this._searchEngineSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchEngineSpecificationInput() {
    return this._searchEngineSpecification;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // standby_vswitch_id - computed: false, optional: true, required: false
  private _standbyVswitchId?: string; 
  public get standbyVswitchId() {
    return this.getStringAttribute('standby_vswitch_id');
  }
  public set standbyVswitchId(value: string) {
    this._standbyVswitchId = value;
  }
  public resetStandbyVswitchId() {
    this._standbyVswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyVswitchIdInput() {
    return this._standbyVswitchId;
  }

  // standby_zone_id - computed: false, optional: true, required: false
  private _standbyZoneId?: string; 
  public get standbyZoneId() {
    return this.getStringAttribute('standby_zone_id');
  }
  public set standbyZoneId(value: string) {
    this._standbyZoneId = value;
  }
  public resetStandbyZoneId() {
    this._standbyZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyZoneIdInput() {
    return this._standbyZoneId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_engine_node_count - computed: true, optional: true, required: false
  private _streamEngineNodeCount?: number; 
  public get streamEngineNodeCount() {
    return this.getNumberAttribute('stream_engine_node_count');
  }
  public set streamEngineNodeCount(value: number) {
    this._streamEngineNodeCount = value;
  }
  public resetStreamEngineNodeCount() {
    this._streamEngineNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamEngineNodeCountInput() {
    return this._streamEngineNodeCount;
  }

  // stream_engine_specification - computed: true, optional: true, required: false
  private _streamEngineSpecification?: string; 
  public get streamEngineSpecification() {
    return this.getStringAttribute('stream_engine_specification');
  }
  public set streamEngineSpecification(value: string) {
    this._streamEngineSpecification = value;
  }
  public resetStreamEngineSpecification() {
    this._streamEngineSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamEngineSpecificationInput() {
    return this._streamEngineSpecification;
  }

  // table_engine_node_count - computed: true, optional: true, required: false
  private _tableEngineNodeCount?: number; 
  public get tableEngineNodeCount() {
    return this.getNumberAttribute('table_engine_node_count');
  }
  public set tableEngineNodeCount(value: number) {
    this._tableEngineNodeCount = value;
  }
  public resetTableEngineNodeCount() {
    this._tableEngineNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEngineNodeCountInput() {
    return this._tableEngineNodeCount;
  }

  // table_engine_specification - computed: true, optional: true, required: false
  private _tableEngineSpecification?: string; 
  public get tableEngineSpecification() {
    return this.getStringAttribute('table_engine_specification');
  }
  public set tableEngineSpecification(value: string) {
    this._tableEngineSpecification = value;
  }
  public resetTableEngineSpecification() {
    this._tableEngineSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableEngineSpecificationInput() {
    return this._tableEngineSpecification;
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

  // time_series_engine_node_count - computed: true, optional: true, required: false
  private _timeSeriesEngineNodeCount?: number; 
  public get timeSeriesEngineNodeCount() {
    return this.getNumberAttribute('time_series_engine_node_count');
  }
  public set timeSeriesEngineNodeCount(value: number) {
    this._timeSeriesEngineNodeCount = value;
  }
  public resetTimeSeriesEngineNodeCount() {
    this._timeSeriesEngineNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesEngineNodeCountInput() {
    return this._timeSeriesEngineNodeCount;
  }

  // time_series_engine_specification - computed: true, optional: true, required: false
  private _timeSeriesEngineSpecification?: string; 
  public get timeSeriesEngineSpecification() {
    return this.getStringAttribute('time_series_engine_specification');
  }
  public set timeSeriesEngineSpecification(value: string) {
    this._timeSeriesEngineSpecification = value;
  }
  public resetTimeSeriesEngineSpecification() {
    this._timeSeriesEngineSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriesEngineSpecificationInput() {
    return this._timeSeriesEngineSpecification;
  }

  // time_serires_engine_specification - computed: true, optional: true, required: false
  private _timeSeriresEngineSpecification?: string; 
  public get timeSeriresEngineSpecification() {
    return this.getStringAttribute('time_serires_engine_specification');
  }
  public set timeSeriresEngineSpecification(value: string) {
    this._timeSeriresEngineSpecification = value;
  }
  public resetTimeSeriresEngineSpecification() {
    this._timeSeriresEngineSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeSeriresEngineSpecificationInput() {
    return this._timeSeriresEngineSpecification;
  }

  // upgrade_type - computed: false, optional: true, required: false
  private _upgradeType?: string; 
  public get upgradeType() {
    return this.getStringAttribute('upgrade_type');
  }
  public set upgradeType(value: string) {
    this._upgradeType = value;
  }
  public resetUpgradeType() {
    this._upgradeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTypeInput() {
    return this._upgradeType;
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

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // zone_id - computed: true, optional: true, required: false
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  public resetZoneId() {
    this._zoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LindormInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LindormInstanceTimeouts) {
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
      arbiter_vswitch_id: cdktf.stringToTerraform(this._arbiterVswitchId),
      arbiter_zone_id: cdktf.stringToTerraform(this._arbiterZoneId),
      arch_version: cdktf.stringToTerraform(this._archVersion),
      auto_renew: cdktf.stringToTerraform(this._autoRenew),
      auto_renew_period: cdktf.stringToTerraform(this._autoRenewPeriod),
      cold_storage: cdktf.numberToTerraform(this._coldStorage),
      core_num: cdktf.numberToTerraform(this._coreNum),
      core_single_storage: cdktf.numberToTerraform(this._coreSingleStorage),
      core_spec: cdktf.stringToTerraform(this._coreSpec),
      deletion_proection: cdktf.booleanToTerraform(this._deletionProection),
      disk_category: cdktf.stringToTerraform(this._diskCategory),
      duration: cdktf.stringToTerraform(this._duration),
      file_engine_node_count: cdktf.numberToTerraform(this._fileEngineNodeCount),
      file_engine_specification: cdktf.stringToTerraform(this._fileEngineSpecification),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_storage: cdktf.stringToTerraform(this._instanceStorage),
      ip_white_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipWhiteList),
      log_disk_category: cdktf.stringToTerraform(this._logDiskCategory),
      log_num: cdktf.numberToTerraform(this._logNum),
      log_single_storage: cdktf.numberToTerraform(this._logSingleStorage),
      log_spec: cdktf.stringToTerraform(this._logSpec),
      lts_node_count: cdktf.numberToTerraform(this._ltsNodeCount),
      lts_node_specification: cdktf.stringToTerraform(this._ltsNodeSpecification),
      multi_zone_combination: cdktf.stringToTerraform(this._multiZoneCombination),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      phoenix_node_count: cdktf.numberToTerraform(this._phoenixNodeCount),
      phoenix_node_specification: cdktf.stringToTerraform(this._phoenixNodeSpecification),
      pricing_cycle: cdktf.stringToTerraform(this._pricingCycle),
      primary_vswitch_id: cdktf.stringToTerraform(this._primaryVswitchId),
      primary_zone_id: cdktf.stringToTerraform(this._primaryZoneId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      search_engine_node_count: cdktf.numberToTerraform(this._searchEngineNodeCount),
      search_engine_specification: cdktf.stringToTerraform(this._searchEngineSpecification),
      standby_vswitch_id: cdktf.stringToTerraform(this._standbyVswitchId),
      standby_zone_id: cdktf.stringToTerraform(this._standbyZoneId),
      stream_engine_node_count: cdktf.numberToTerraform(this._streamEngineNodeCount),
      stream_engine_specification: cdktf.stringToTerraform(this._streamEngineSpecification),
      table_engine_node_count: cdktf.numberToTerraform(this._tableEngineNodeCount),
      table_engine_specification: cdktf.stringToTerraform(this._tableEngineSpecification),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      time_series_engine_node_count: cdktf.numberToTerraform(this._timeSeriesEngineNodeCount),
      time_series_engine_specification: cdktf.stringToTerraform(this._timeSeriesEngineSpecification),
      time_serires_engine_specification: cdktf.stringToTerraform(this._timeSeriresEngineSpecification),
      upgrade_type: cdktf.stringToTerraform(this._upgradeType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: lindormInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arbiter_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._arbiterVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arbiter_zone_id: {
        value: cdktf.stringToHclTerraform(this._arbiterZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arch_version: {
        value: cdktf.stringToHclTerraform(this._archVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew: {
        value: cdktf.stringToHclTerraform(this._autoRenew),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_renew_period: {
        value: cdktf.stringToHclTerraform(this._autoRenewPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cold_storage: {
        value: cdktf.numberToHclTerraform(this._coldStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_num: {
        value: cdktf.numberToHclTerraform(this._coreNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_single_storage: {
        value: cdktf.numberToHclTerraform(this._coreSingleStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      core_spec: {
        value: cdktf.stringToHclTerraform(this._coreSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_proection: {
        value: cdktf.booleanToHclTerraform(this._deletionProection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_category: {
        value: cdktf.stringToHclTerraform(this._diskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_engine_node_count: {
        value: cdktf.numberToHclTerraform(this._fileEngineNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_engine_specification: {
        value: cdktf.stringToHclTerraform(this._fileEngineSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      instance_storage: {
        value: cdktf.stringToHclTerraform(this._instanceStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_white_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipWhiteList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      log_disk_category: {
        value: cdktf.stringToHclTerraform(this._logDiskCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_num: {
        value: cdktf.numberToHclTerraform(this._logNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_single_storage: {
        value: cdktf.numberToHclTerraform(this._logSingleStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_spec: {
        value: cdktf.stringToHclTerraform(this._logSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lts_node_count: {
        value: cdktf.numberToHclTerraform(this._ltsNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lts_node_specification: {
        value: cdktf.stringToHclTerraform(this._ltsNodeSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_zone_combination: {
        value: cdktf.stringToHclTerraform(this._multiZoneCombination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phoenix_node_count: {
        value: cdktf.numberToHclTerraform(this._phoenixNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      phoenix_node_specification: {
        value: cdktf.stringToHclTerraform(this._phoenixNodeSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_cycle: {
        value: cdktf.stringToHclTerraform(this._pricingCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._primaryVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_zone_id: {
        value: cdktf.stringToHclTerraform(this._primaryZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_engine_node_count: {
        value: cdktf.numberToHclTerraform(this._searchEngineNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_engine_specification: {
        value: cdktf.stringToHclTerraform(this._searchEngineSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_vswitch_id: {
        value: cdktf.stringToHclTerraform(this._standbyVswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_zone_id: {
        value: cdktf.stringToHclTerraform(this._standbyZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_engine_node_count: {
        value: cdktf.numberToHclTerraform(this._streamEngineNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_engine_specification: {
        value: cdktf.stringToHclTerraform(this._streamEngineSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_engine_node_count: {
        value: cdktf.numberToHclTerraform(this._tableEngineNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      table_engine_specification: {
        value: cdktf.stringToHclTerraform(this._tableEngineSpecification),
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
      time_series_engine_node_count: {
        value: cdktf.numberToHclTerraform(this._timeSeriesEngineNodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_series_engine_specification: {
        value: cdktf.stringToHclTerraform(this._timeSeriesEngineSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_serires_engine_specification: {
        value: cdktf.stringToHclTerraform(this._timeSeriresEngineSpecification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_type: {
        value: cdktf.stringToHclTerraform(this._upgradeType),
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
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lindormInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LindormInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
