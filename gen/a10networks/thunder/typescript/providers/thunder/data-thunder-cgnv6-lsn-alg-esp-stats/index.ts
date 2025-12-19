// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnAlgEspStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats#id DataThunderCgnv6LsnAlgEspStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats#stats DataThunderCgnv6LsnAlgEspStats#stats}
  */
  readonly stats?: DataThunderCgnv6LsnAlgEspStatsStats;
}
export interface DataThunderCgnv6LsnAlgEspStatsStats {
  /**
  * NAT IP Conflict
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats#nat_ip_conflict DataThunderCgnv6LsnAlgEspStats#nat_ip_conflict}
  */
  readonly natIpConflict?: number;
  /**
  * ESP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats#session_created DataThunderCgnv6LsnAlgEspStats#session_created}
  */
  readonly sessionCreated?: number;
}

export function dataThunderCgnv6LsnAlgEspStatsStatsToTerraform(struct?: DataThunderCgnv6LsnAlgEspStatsStatsOutputReference | DataThunderCgnv6LsnAlgEspStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_ip_conflict: cdktf.numberToTerraform(struct!.natIpConflict),
    session_created: cdktf.numberToTerraform(struct!.sessionCreated),
  }
}


export function dataThunderCgnv6LsnAlgEspStatsStatsToHclTerraform(struct?: DataThunderCgnv6LsnAlgEspStatsStatsOutputReference | DataThunderCgnv6LsnAlgEspStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_ip_conflict: {
      value: cdktf.numberToHclTerraform(struct!.natIpConflict),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_created: {
      value: cdktf.numberToHclTerraform(struct!.sessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnAlgEspStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnAlgEspStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._natIpConflict !== undefined) {
      hasAnyValues = true;
      internalValueResult.natIpConflict = this._natIpConflict;
    }
    if (this._sessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCreated = this._sessionCreated;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnAlgEspStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._natIpConflict = undefined;
      this._sessionCreated = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._natIpConflict = value.natIpConflict;
      this._sessionCreated = value.sessionCreated;
    }
  }

  // nat_ip_conflict - computed: false, optional: true, required: false
  private _natIpConflict?: number; 
  public get natIpConflict() {
    return this.getNumberAttribute('nat_ip_conflict');
  }
  public set natIpConflict(value: number) {
    this._natIpConflict = value;
  }
  public resetNatIpConflict() {
    this._natIpConflict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpConflictInput() {
    return this._natIpConflict;
  }

  // session_created - computed: false, optional: true, required: false
  private _sessionCreated?: number; 
  public get sessionCreated() {
    return this.getNumberAttribute('session_created');
  }
  public set sessionCreated(value: number) {
    this._sessionCreated = value;
  }
  public resetSessionCreated() {
    this._sessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCreatedInput() {
    return this._sessionCreated;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats thunder_cgnv6_lsn_alg_esp_stats}
*/
export class DataThunderCgnv6LsnAlgEspStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_esp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnAlgEspStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnAlgEspStats to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnAlgEspStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnAlgEspStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_esp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_lsn_alg_esp_stats thunder_cgnv6_lsn_alg_esp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnAlgEspStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnAlgEspStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_esp_stats',
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
  private _stats = new DataThunderCgnv6LsnAlgEspStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LsnAlgEspStatsStats) {
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
      stats: dataThunderCgnv6LsnAlgEspStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6LsnAlgEspStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnAlgEspStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
