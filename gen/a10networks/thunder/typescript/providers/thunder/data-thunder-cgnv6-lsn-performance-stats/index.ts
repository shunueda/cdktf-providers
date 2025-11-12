// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnPerformanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#id DataThunderCgnv6LsnPerformanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#stats DataThunderCgnv6LsnPerformanceStats#stats}
  */
  readonly stats?: DataThunderCgnv6LsnPerformanceStatsStats;
}
export interface DataThunderCgnv6LsnPerformanceStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#data_sessions_current_epoch DataThunderCgnv6LsnPerformanceStats#data_sessions_current_epoch}
  */
  readonly dataSessionsCurrentEpoch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#data_sessions_previous_epoch_first DataThunderCgnv6LsnPerformanceStats#data_sessions_previous_epoch_first}
  */
  readonly dataSessionsPreviousEpochFirst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#data_sessions_previous_epoch_last DataThunderCgnv6LsnPerformanceStats#data_sessions_previous_epoch_last}
  */
  readonly dataSessionsPreviousEpochLast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#fullcone_created_current_epoch DataThunderCgnv6LsnPerformanceStats#fullcone_created_current_epoch}
  */
  readonly fullconeCreatedCurrentEpoch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#fullcone_created_previous_epoch_first DataThunderCgnv6LsnPerformanceStats#fullcone_created_previous_epoch_first}
  */
  readonly fullconeCreatedPreviousEpochFirst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#fullcone_created_previous_epoch_last DataThunderCgnv6LsnPerformanceStats#fullcone_created_previous_epoch_last}
  */
  readonly fullconeCreatedPreviousEpochLast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#user_quote_created_current_epoch DataThunderCgnv6LsnPerformanceStats#user_quote_created_current_epoch}
  */
  readonly userQuoteCreatedCurrentEpoch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#user_quote_created_previous_epoch_first DataThunderCgnv6LsnPerformanceStats#user_quote_created_previous_epoch_first}
  */
  readonly userQuoteCreatedPreviousEpochFirst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#user_quote_created_previous_epoch_last DataThunderCgnv6LsnPerformanceStats#user_quote_created_previous_epoch_last}
  */
  readonly userQuoteCreatedPreviousEpochLast?: number;
}

export function dataThunderCgnv6LsnPerformanceStatsStatsToTerraform(struct?: DataThunderCgnv6LsnPerformanceStatsStatsOutputReference | DataThunderCgnv6LsnPerformanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_sessions_current_epoch: cdktf.numberToTerraform(struct!.dataSessionsCurrentEpoch),
    data_sessions_previous_epoch_first: cdktf.numberToTerraform(struct!.dataSessionsPreviousEpochFirst),
    data_sessions_previous_epoch_last: cdktf.numberToTerraform(struct!.dataSessionsPreviousEpochLast),
    fullcone_created_current_epoch: cdktf.numberToTerraform(struct!.fullconeCreatedCurrentEpoch),
    fullcone_created_previous_epoch_first: cdktf.numberToTerraform(struct!.fullconeCreatedPreviousEpochFirst),
    fullcone_created_previous_epoch_last: cdktf.numberToTerraform(struct!.fullconeCreatedPreviousEpochLast),
    user_quote_created_current_epoch: cdktf.numberToTerraform(struct!.userQuoteCreatedCurrentEpoch),
    user_quote_created_previous_epoch_first: cdktf.numberToTerraform(struct!.userQuoteCreatedPreviousEpochFirst),
    user_quote_created_previous_epoch_last: cdktf.numberToTerraform(struct!.userQuoteCreatedPreviousEpochLast),
  }
}


export function dataThunderCgnv6LsnPerformanceStatsStatsToHclTerraform(struct?: DataThunderCgnv6LsnPerformanceStatsStatsOutputReference | DataThunderCgnv6LsnPerformanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_sessions_current_epoch: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionsCurrentEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sessions_previous_epoch_first: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionsPreviousEpochFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sessions_previous_epoch_last: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionsPreviousEpochLast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_created_current_epoch: {
      value: cdktf.numberToHclTerraform(struct!.fullconeCreatedCurrentEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_created_previous_epoch_first: {
      value: cdktf.numberToHclTerraform(struct!.fullconeCreatedPreviousEpochFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_created_previous_epoch_last: {
      value: cdktf.numberToHclTerraform(struct!.fullconeCreatedPreviousEpochLast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quote_created_current_epoch: {
      value: cdktf.numberToHclTerraform(struct!.userQuoteCreatedCurrentEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quote_created_previous_epoch_first: {
      value: cdktf.numberToHclTerraform(struct!.userQuoteCreatedPreviousEpochFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quote_created_previous_epoch_last: {
      value: cdktf.numberToHclTerraform(struct!.userQuoteCreatedPreviousEpochLast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnPerformanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnPerformanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSessionsCurrentEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionsCurrentEpoch = this._dataSessionsCurrentEpoch;
    }
    if (this._dataSessionsPreviousEpochFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionsPreviousEpochFirst = this._dataSessionsPreviousEpochFirst;
    }
    if (this._dataSessionsPreviousEpochLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionsPreviousEpochLast = this._dataSessionsPreviousEpochLast;
    }
    if (this._fullconeCreatedCurrentEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeCreatedCurrentEpoch = this._fullconeCreatedCurrentEpoch;
    }
    if (this._fullconeCreatedPreviousEpochFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeCreatedPreviousEpochFirst = this._fullconeCreatedPreviousEpochFirst;
    }
    if (this._fullconeCreatedPreviousEpochLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeCreatedPreviousEpochLast = this._fullconeCreatedPreviousEpochLast;
    }
    if (this._userQuoteCreatedCurrentEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuoteCreatedCurrentEpoch = this._userQuoteCreatedCurrentEpoch;
    }
    if (this._userQuoteCreatedPreviousEpochFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuoteCreatedPreviousEpochFirst = this._userQuoteCreatedPreviousEpochFirst;
    }
    if (this._userQuoteCreatedPreviousEpochLast !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuoteCreatedPreviousEpochLast = this._userQuoteCreatedPreviousEpochLast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnPerformanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSessionsCurrentEpoch = undefined;
      this._dataSessionsPreviousEpochFirst = undefined;
      this._dataSessionsPreviousEpochLast = undefined;
      this._fullconeCreatedCurrentEpoch = undefined;
      this._fullconeCreatedPreviousEpochFirst = undefined;
      this._fullconeCreatedPreviousEpochLast = undefined;
      this._userQuoteCreatedCurrentEpoch = undefined;
      this._userQuoteCreatedPreviousEpochFirst = undefined;
      this._userQuoteCreatedPreviousEpochLast = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSessionsCurrentEpoch = value.dataSessionsCurrentEpoch;
      this._dataSessionsPreviousEpochFirst = value.dataSessionsPreviousEpochFirst;
      this._dataSessionsPreviousEpochLast = value.dataSessionsPreviousEpochLast;
      this._fullconeCreatedCurrentEpoch = value.fullconeCreatedCurrentEpoch;
      this._fullconeCreatedPreviousEpochFirst = value.fullconeCreatedPreviousEpochFirst;
      this._fullconeCreatedPreviousEpochLast = value.fullconeCreatedPreviousEpochLast;
      this._userQuoteCreatedCurrentEpoch = value.userQuoteCreatedCurrentEpoch;
      this._userQuoteCreatedPreviousEpochFirst = value.userQuoteCreatedPreviousEpochFirst;
      this._userQuoteCreatedPreviousEpochLast = value.userQuoteCreatedPreviousEpochLast;
    }
  }

  // data_sessions_current_epoch - computed: false, optional: true, required: false
  private _dataSessionsCurrentEpoch?: number; 
  public get dataSessionsCurrentEpoch() {
    return this.getNumberAttribute('data_sessions_current_epoch');
  }
  public set dataSessionsCurrentEpoch(value: number) {
    this._dataSessionsCurrentEpoch = value;
  }
  public resetDataSessionsCurrentEpoch() {
    this._dataSessionsCurrentEpoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsCurrentEpochInput() {
    return this._dataSessionsCurrentEpoch;
  }

  // data_sessions_previous_epoch_first - computed: false, optional: true, required: false
  private _dataSessionsPreviousEpochFirst?: number; 
  public get dataSessionsPreviousEpochFirst() {
    return this.getNumberAttribute('data_sessions_previous_epoch_first');
  }
  public set dataSessionsPreviousEpochFirst(value: number) {
    this._dataSessionsPreviousEpochFirst = value;
  }
  public resetDataSessionsPreviousEpochFirst() {
    this._dataSessionsPreviousEpochFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsPreviousEpochFirstInput() {
    return this._dataSessionsPreviousEpochFirst;
  }

  // data_sessions_previous_epoch_last - computed: false, optional: true, required: false
  private _dataSessionsPreviousEpochLast?: number; 
  public get dataSessionsPreviousEpochLast() {
    return this.getNumberAttribute('data_sessions_previous_epoch_last');
  }
  public set dataSessionsPreviousEpochLast(value: number) {
    this._dataSessionsPreviousEpochLast = value;
  }
  public resetDataSessionsPreviousEpochLast() {
    this._dataSessionsPreviousEpochLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionsPreviousEpochLastInput() {
    return this._dataSessionsPreviousEpochLast;
  }

  // fullcone_created_current_epoch - computed: false, optional: true, required: false
  private _fullconeCreatedCurrentEpoch?: number; 
  public get fullconeCreatedCurrentEpoch() {
    return this.getNumberAttribute('fullcone_created_current_epoch');
  }
  public set fullconeCreatedCurrentEpoch(value: number) {
    this._fullconeCreatedCurrentEpoch = value;
  }
  public resetFullconeCreatedCurrentEpoch() {
    this._fullconeCreatedCurrentEpoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeCreatedCurrentEpochInput() {
    return this._fullconeCreatedCurrentEpoch;
  }

  // fullcone_created_previous_epoch_first - computed: false, optional: true, required: false
  private _fullconeCreatedPreviousEpochFirst?: number; 
  public get fullconeCreatedPreviousEpochFirst() {
    return this.getNumberAttribute('fullcone_created_previous_epoch_first');
  }
  public set fullconeCreatedPreviousEpochFirst(value: number) {
    this._fullconeCreatedPreviousEpochFirst = value;
  }
  public resetFullconeCreatedPreviousEpochFirst() {
    this._fullconeCreatedPreviousEpochFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeCreatedPreviousEpochFirstInput() {
    return this._fullconeCreatedPreviousEpochFirst;
  }

  // fullcone_created_previous_epoch_last - computed: false, optional: true, required: false
  private _fullconeCreatedPreviousEpochLast?: number; 
  public get fullconeCreatedPreviousEpochLast() {
    return this.getNumberAttribute('fullcone_created_previous_epoch_last');
  }
  public set fullconeCreatedPreviousEpochLast(value: number) {
    this._fullconeCreatedPreviousEpochLast = value;
  }
  public resetFullconeCreatedPreviousEpochLast() {
    this._fullconeCreatedPreviousEpochLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeCreatedPreviousEpochLastInput() {
    return this._fullconeCreatedPreviousEpochLast;
  }

  // user_quote_created_current_epoch - computed: false, optional: true, required: false
  private _userQuoteCreatedCurrentEpoch?: number; 
  public get userQuoteCreatedCurrentEpoch() {
    return this.getNumberAttribute('user_quote_created_current_epoch');
  }
  public set userQuoteCreatedCurrentEpoch(value: number) {
    this._userQuoteCreatedCurrentEpoch = value;
  }
  public resetUserQuoteCreatedCurrentEpoch() {
    this._userQuoteCreatedCurrentEpoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuoteCreatedCurrentEpochInput() {
    return this._userQuoteCreatedCurrentEpoch;
  }

  // user_quote_created_previous_epoch_first - computed: false, optional: true, required: false
  private _userQuoteCreatedPreviousEpochFirst?: number; 
  public get userQuoteCreatedPreviousEpochFirst() {
    return this.getNumberAttribute('user_quote_created_previous_epoch_first');
  }
  public set userQuoteCreatedPreviousEpochFirst(value: number) {
    this._userQuoteCreatedPreviousEpochFirst = value;
  }
  public resetUserQuoteCreatedPreviousEpochFirst() {
    this._userQuoteCreatedPreviousEpochFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuoteCreatedPreviousEpochFirstInput() {
    return this._userQuoteCreatedPreviousEpochFirst;
  }

  // user_quote_created_previous_epoch_last - computed: false, optional: true, required: false
  private _userQuoteCreatedPreviousEpochLast?: number; 
  public get userQuoteCreatedPreviousEpochLast() {
    return this.getNumberAttribute('user_quote_created_previous_epoch_last');
  }
  public set userQuoteCreatedPreviousEpochLast(value: number) {
    this._userQuoteCreatedPreviousEpochLast = value;
  }
  public resetUserQuoteCreatedPreviousEpochLast() {
    this._userQuoteCreatedPreviousEpochLast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuoteCreatedPreviousEpochLastInput() {
    return this._userQuoteCreatedPreviousEpochLast;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats thunder_cgnv6_lsn_performance_stats}
*/
export class DataThunderCgnv6LsnPerformanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_performance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnPerformanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnPerformanceStats to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnPerformanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnPerformanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_performance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_performance_stats thunder_cgnv6_lsn_performance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnPerformanceStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnPerformanceStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_performance_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6LsnPerformanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LsnPerformanceStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderCgnv6LsnPerformanceStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderCgnv6LsnPerformanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnPerformanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
