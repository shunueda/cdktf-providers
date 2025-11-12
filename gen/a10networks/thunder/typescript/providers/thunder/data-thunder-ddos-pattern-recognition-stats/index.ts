// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosPatternRecognitionStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#id DataThunderDdosPatternRecognitionStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#stats DataThunderDdosPatternRecognitionStats#stats}
  */
  readonly stats?: DataThunderDdosPatternRecognitionStatsStats;
}
export interface DataThunderDdosPatternRecognitionStatsStats {
  /**
  * Extracted Filter Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#filter_drop DataThunderDdosPatternRecognitionStats#filter_drop}
  */
  readonly filterDrop?: number;
  /**
  * Extracted Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#filter_match DataThunderDdosPatternRecognitionStats#filter_match}
  */
  readonly filterMatch?: number;
  /**
  * Pattern Recognition: Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#generic_error DataThunderDdosPatternRecognitionStats#generic_error}
  */
  readonly genericError?: number;
  /**
  * Pattern Recognition: Pattern Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#not_found DataThunderDdosPatternRecognitionStats#not_found}
  */
  readonly notFound?: number;
  /**
  * Pattern Recognition: Engine Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#proceeded DataThunderDdosPatternRecognitionStats#proceeded}
  */
  readonly proceeded?: number;
}

export function dataThunderDdosPatternRecognitionStatsStatsToTerraform(struct?: DataThunderDdosPatternRecognitionStatsStatsOutputReference | DataThunderDdosPatternRecognitionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_drop: cdktf.numberToTerraform(struct!.filterDrop),
    filter_match: cdktf.numberToTerraform(struct!.filterMatch),
    generic_error: cdktf.numberToTerraform(struct!.genericError),
    not_found: cdktf.numberToTerraform(struct!.notFound),
    proceeded: cdktf.numberToTerraform(struct!.proceeded),
  }
}


export function dataThunderDdosPatternRecognitionStatsStatsToHclTerraform(struct?: DataThunderDdosPatternRecognitionStatsStatsOutputReference | DataThunderDdosPatternRecognitionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.filterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_match: {
      value: cdktf.numberToHclTerraform(struct!.filterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generic_error: {
      value: cdktf.numberToHclTerraform(struct!.genericError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_found: {
      value: cdktf.numberToHclTerraform(struct!.notFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proceeded: {
      value: cdktf.numberToHclTerraform(struct!.proceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosPatternRecognitionStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosPatternRecognitionStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDrop = this._filterDrop;
    }
    if (this._filterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterMatch = this._filterMatch;
    }
    if (this._genericError !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericError = this._genericError;
    }
    if (this._notFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFound = this._notFound;
    }
    if (this._proceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.proceeded = this._proceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosPatternRecognitionStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterDrop = undefined;
      this._filterMatch = undefined;
      this._genericError = undefined;
      this._notFound = undefined;
      this._proceeded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterDrop = value.filterDrop;
      this._filterMatch = value.filterMatch;
      this._genericError = value.genericError;
      this._notFound = value.notFound;
      this._proceeded = value.proceeded;
    }
  }

  // filter_drop - computed: false, optional: true, required: false
  private _filterDrop?: number; 
  public get filterDrop() {
    return this.getNumberAttribute('filter_drop');
  }
  public set filterDrop(value: number) {
    this._filterDrop = value;
  }
  public resetFilterDrop() {
    this._filterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDropInput() {
    return this._filterDrop;
  }

  // filter_match - computed: false, optional: true, required: false
  private _filterMatch?: number; 
  public get filterMatch() {
    return this.getNumberAttribute('filter_match');
  }
  public set filterMatch(value: number) {
    this._filterMatch = value;
  }
  public resetFilterMatch() {
    this._filterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterMatchInput() {
    return this._filterMatch;
  }

  // generic_error - computed: false, optional: true, required: false
  private _genericError?: number; 
  public get genericError() {
    return this.getNumberAttribute('generic_error');
  }
  public set genericError(value: number) {
    this._genericError = value;
  }
  public resetGenericError() {
    this._genericError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericErrorInput() {
    return this._genericError;
  }

  // not_found - computed: false, optional: true, required: false
  private _notFound?: number; 
  public get notFound() {
    return this.getNumberAttribute('not_found');
  }
  public set notFound(value: number) {
    this._notFound = value;
  }
  public resetNotFound() {
    this._notFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundInput() {
    return this._notFound;
  }

  // proceeded - computed: false, optional: true, required: false
  private _proceeded?: number; 
  public get proceeded() {
    return this.getNumberAttribute('proceeded');
  }
  public set proceeded(value: number) {
    this._proceeded = value;
  }
  public resetProceeded() {
    this._proceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proceededInput() {
    return this._proceeded;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats thunder_ddos_pattern_recognition_stats}
*/
export class DataThunderDdosPatternRecognitionStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_pattern_recognition_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosPatternRecognitionStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosPatternRecognitionStats to import
  * @param importFromId The id of the existing DataThunderDdosPatternRecognitionStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosPatternRecognitionStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_pattern_recognition_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_pattern_recognition_stats thunder_ddos_pattern_recognition_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosPatternRecognitionStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosPatternRecognitionStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_pattern_recognition_stats',
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
  private _stats = new DataThunderDdosPatternRecognitionStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosPatternRecognitionStatsStats) {
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
      stats: dataThunderDdosPatternRecognitionStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosPatternRecognitionStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosPatternRecognitionStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
