// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemGeolocListStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats#id DataThunderSystemGeolocListStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify name of Geolocation list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats#name DataThunderSystemGeolocListStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats#stats DataThunderSystemGeolocListStats#stats}
  */
  readonly stats?: DataThunderSystemGeolocListStatsStats;
}
export interface DataThunderSystemGeolocListStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats#hit_count DataThunderSystemGeolocListStats#hit_count}
  */
  readonly hitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats#total_active DataThunderSystemGeolocListStats#total_active}
  */
  readonly totalActive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats#total_geoloc DataThunderSystemGeolocListStats#total_geoloc}
  */
  readonly totalGeoloc?: number;
}

export function dataThunderSystemGeolocListStatsStatsToTerraform(struct?: DataThunderSystemGeolocListStatsStatsOutputReference | DataThunderSystemGeolocListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hit_count: cdktf.numberToTerraform(struct!.hitCount),
    total_active: cdktf.numberToTerraform(struct!.totalActive),
    total_geoloc: cdktf.numberToTerraform(struct!.totalGeoloc),
  }
}


export function dataThunderSystemGeolocListStatsStatsToHclTerraform(struct?: DataThunderSystemGeolocListStatsStatsOutputReference | DataThunderSystemGeolocListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hit_count: {
      value: cdktf.numberToHclTerraform(struct!.hitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_active: {
      value: cdktf.numberToHclTerraform(struct!.totalActive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_geoloc: {
      value: cdktf.numberToHclTerraform(struct!.totalGeoloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemGeolocListStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemGeolocListStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCount = this._hitCount;
    }
    if (this._totalActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalActive = this._totalActive;
    }
    if (this._totalGeoloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalGeoloc = this._totalGeoloc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemGeolocListStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hitCount = undefined;
      this._totalActive = undefined;
      this._totalGeoloc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hitCount = value.hitCount;
      this._totalActive = value.totalActive;
      this._totalGeoloc = value.totalGeoloc;
    }
  }

  // hit_count - computed: false, optional: true, required: false
  private _hitCount?: number; 
  public get hitCount() {
    return this.getNumberAttribute('hit_count');
  }
  public set hitCount(value: number) {
    this._hitCount = value;
  }
  public resetHitCount() {
    this._hitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountInput() {
    return this._hitCount;
  }

  // total_active - computed: false, optional: true, required: false
  private _totalActive?: number; 
  public get totalActive() {
    return this.getNumberAttribute('total_active');
  }
  public set totalActive(value: number) {
    this._totalActive = value;
  }
  public resetTotalActive() {
    this._totalActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalActiveInput() {
    return this._totalActive;
  }

  // total_geoloc - computed: false, optional: true, required: false
  private _totalGeoloc?: number; 
  public get totalGeoloc() {
    return this.getNumberAttribute('total_geoloc');
  }
  public set totalGeoloc(value: number) {
    this._totalGeoloc = value;
  }
  public resetTotalGeoloc() {
    this._totalGeoloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalGeolocInput() {
    return this._totalGeoloc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats thunder_system_geoloc_list_stats}
*/
export class DataThunderSystemGeolocListStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_geoloc_list_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemGeolocListStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemGeolocListStats to import
  * @param importFromId The id of the existing DataThunderSystemGeolocListStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemGeolocListStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_geoloc_list_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_geoloc_list_stats thunder_system_geoloc_list_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemGeolocListStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemGeolocListStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_geoloc_list_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._name = config.name;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSystemGeolocListStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemGeolocListStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderSystemGeolocListStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderSystemGeolocListStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemGeolocListStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
