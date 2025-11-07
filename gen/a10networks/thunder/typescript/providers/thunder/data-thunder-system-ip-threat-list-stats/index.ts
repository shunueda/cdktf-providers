// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemIpThreatListStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#id DataThunderSystemIpThreatListStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#stats DataThunderSystemIpThreatListStats#stats}
  */
  readonly stats?: DataThunderSystemIpThreatListStatsStats;
}
export interface DataThunderSystemIpThreatListStatsStats {
  /**
  * Entries Added in SPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#entries_added_in_spe DataThunderSystemIpThreatListStats#entries_added_in_spe}
  */
  readonly entriesAddedInSpe?: number;
  /**
  * Entries Added in SW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#entries_added_in_sw DataThunderSystemIpThreatListStats#entries_added_in_sw}
  */
  readonly entriesAddedInSw?: number;
  /**
  * Entries Removed from SPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#entries_removed_from_spe DataThunderSystemIpThreatListStats#entries_removed_from_spe}
  */
  readonly entriesRemovedFromSpe?: number;
  /**
  * Entries Removed from SW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#entries_removed_from_sw DataThunderSystemIpThreatListStats#entries_removed_from_sw}
  */
  readonly entriesRemovedFromSw?: number;
  /**
  * Out of memory Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#error_out_of_memory DataThunderSystemIpThreatListStats#error_out_of_memory}
  */
  readonly errorOutOfMemory?: number;
  /**
  * Out of SPE Entries Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#error_out_of_spe_entries DataThunderSystemIpThreatListStats#error_out_of_spe_entries}
  */
  readonly errorOutOfSpeEntries?: number;
  /**
  * Packet Hit Count in SPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#packet_hit_count_in_spe DataThunderSystemIpThreatListStats#packet_hit_count_in_spe}
  */
  readonly packetHitCountInSpe?: number;
  /**
  * Packet Hit Count in SW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#packet_hit_count_in_sw DataThunderSystemIpThreatListStats#packet_hit_count_in_sw}
  */
  readonly packetHitCountInSw?: number;
}

export function dataThunderSystemIpThreatListStatsStatsToTerraform(struct?: DataThunderSystemIpThreatListStatsStatsOutputReference | DataThunderSystemIpThreatListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entries_added_in_spe: cdktf.numberToTerraform(struct!.entriesAddedInSpe),
    entries_added_in_sw: cdktf.numberToTerraform(struct!.entriesAddedInSw),
    entries_removed_from_spe: cdktf.numberToTerraform(struct!.entriesRemovedFromSpe),
    entries_removed_from_sw: cdktf.numberToTerraform(struct!.entriesRemovedFromSw),
    error_out_of_memory: cdktf.numberToTerraform(struct!.errorOutOfMemory),
    error_out_of_spe_entries: cdktf.numberToTerraform(struct!.errorOutOfSpeEntries),
    packet_hit_count_in_spe: cdktf.numberToTerraform(struct!.packetHitCountInSpe),
    packet_hit_count_in_sw: cdktf.numberToTerraform(struct!.packetHitCountInSw),
  }
}


export function dataThunderSystemIpThreatListStatsStatsToHclTerraform(struct?: DataThunderSystemIpThreatListStatsStatsOutputReference | DataThunderSystemIpThreatListStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entries_added_in_spe: {
      value: cdktf.numberToHclTerraform(struct!.entriesAddedInSpe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_added_in_sw: {
      value: cdktf.numberToHclTerraform(struct!.entriesAddedInSw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_removed_from_spe: {
      value: cdktf.numberToHclTerraform(struct!.entriesRemovedFromSpe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_removed_from_sw: {
      value: cdktf.numberToHclTerraform(struct!.entriesRemovedFromSw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_out_of_memory: {
      value: cdktf.numberToHclTerraform(struct!.errorOutOfMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_out_of_spe_entries: {
      value: cdktf.numberToHclTerraform(struct!.errorOutOfSpeEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_hit_count_in_spe: {
      value: cdktf.numberToHclTerraform(struct!.packetHitCountInSpe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_hit_count_in_sw: {
      value: cdktf.numberToHclTerraform(struct!.packetHitCountInSw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemIpThreatListStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemIpThreatListStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entriesAddedInSpe !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesAddedInSpe = this._entriesAddedInSpe;
    }
    if (this._entriesAddedInSw !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesAddedInSw = this._entriesAddedInSw;
    }
    if (this._entriesRemovedFromSpe !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesRemovedFromSpe = this._entriesRemovedFromSpe;
    }
    if (this._entriesRemovedFromSw !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesRemovedFromSw = this._entriesRemovedFromSw;
    }
    if (this._errorOutOfMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutOfMemory = this._errorOutOfMemory;
    }
    if (this._errorOutOfSpeEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorOutOfSpeEntries = this._errorOutOfSpeEntries;
    }
    if (this._packetHitCountInSpe !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHitCountInSpe = this._packetHitCountInSpe;
    }
    if (this._packetHitCountInSw !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetHitCountInSw = this._packetHitCountInSw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemIpThreatListStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entriesAddedInSpe = undefined;
      this._entriesAddedInSw = undefined;
      this._entriesRemovedFromSpe = undefined;
      this._entriesRemovedFromSw = undefined;
      this._errorOutOfMemory = undefined;
      this._errorOutOfSpeEntries = undefined;
      this._packetHitCountInSpe = undefined;
      this._packetHitCountInSw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entriesAddedInSpe = value.entriesAddedInSpe;
      this._entriesAddedInSw = value.entriesAddedInSw;
      this._entriesRemovedFromSpe = value.entriesRemovedFromSpe;
      this._entriesRemovedFromSw = value.entriesRemovedFromSw;
      this._errorOutOfMemory = value.errorOutOfMemory;
      this._errorOutOfSpeEntries = value.errorOutOfSpeEntries;
      this._packetHitCountInSpe = value.packetHitCountInSpe;
      this._packetHitCountInSw = value.packetHitCountInSw;
    }
  }

  // entries_added_in_spe - computed: false, optional: true, required: false
  private _entriesAddedInSpe?: number; 
  public get entriesAddedInSpe() {
    return this.getNumberAttribute('entries_added_in_spe');
  }
  public set entriesAddedInSpe(value: number) {
    this._entriesAddedInSpe = value;
  }
  public resetEntriesAddedInSpe() {
    this._entriesAddedInSpe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesAddedInSpeInput() {
    return this._entriesAddedInSpe;
  }

  // entries_added_in_sw - computed: false, optional: true, required: false
  private _entriesAddedInSw?: number; 
  public get entriesAddedInSw() {
    return this.getNumberAttribute('entries_added_in_sw');
  }
  public set entriesAddedInSw(value: number) {
    this._entriesAddedInSw = value;
  }
  public resetEntriesAddedInSw() {
    this._entriesAddedInSw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesAddedInSwInput() {
    return this._entriesAddedInSw;
  }

  // entries_removed_from_spe - computed: false, optional: true, required: false
  private _entriesRemovedFromSpe?: number; 
  public get entriesRemovedFromSpe() {
    return this.getNumberAttribute('entries_removed_from_spe');
  }
  public set entriesRemovedFromSpe(value: number) {
    this._entriesRemovedFromSpe = value;
  }
  public resetEntriesRemovedFromSpe() {
    this._entriesRemovedFromSpe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesRemovedFromSpeInput() {
    return this._entriesRemovedFromSpe;
  }

  // entries_removed_from_sw - computed: false, optional: true, required: false
  private _entriesRemovedFromSw?: number; 
  public get entriesRemovedFromSw() {
    return this.getNumberAttribute('entries_removed_from_sw');
  }
  public set entriesRemovedFromSw(value: number) {
    this._entriesRemovedFromSw = value;
  }
  public resetEntriesRemovedFromSw() {
    this._entriesRemovedFromSw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesRemovedFromSwInput() {
    return this._entriesRemovedFromSw;
  }

  // error_out_of_memory - computed: false, optional: true, required: false
  private _errorOutOfMemory?: number; 
  public get errorOutOfMemory() {
    return this.getNumberAttribute('error_out_of_memory');
  }
  public set errorOutOfMemory(value: number) {
    this._errorOutOfMemory = value;
  }
  public resetErrorOutOfMemory() {
    this._errorOutOfMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutOfMemoryInput() {
    return this._errorOutOfMemory;
  }

  // error_out_of_spe_entries - computed: false, optional: true, required: false
  private _errorOutOfSpeEntries?: number; 
  public get errorOutOfSpeEntries() {
    return this.getNumberAttribute('error_out_of_spe_entries');
  }
  public set errorOutOfSpeEntries(value: number) {
    this._errorOutOfSpeEntries = value;
  }
  public resetErrorOutOfSpeEntries() {
    this._errorOutOfSpeEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOutOfSpeEntriesInput() {
    return this._errorOutOfSpeEntries;
  }

  // packet_hit_count_in_spe - computed: false, optional: true, required: false
  private _packetHitCountInSpe?: number; 
  public get packetHitCountInSpe() {
    return this.getNumberAttribute('packet_hit_count_in_spe');
  }
  public set packetHitCountInSpe(value: number) {
    this._packetHitCountInSpe = value;
  }
  public resetPacketHitCountInSpe() {
    this._packetHitCountInSpe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHitCountInSpeInput() {
    return this._packetHitCountInSpe;
  }

  // packet_hit_count_in_sw - computed: false, optional: true, required: false
  private _packetHitCountInSw?: number; 
  public get packetHitCountInSw() {
    return this.getNumberAttribute('packet_hit_count_in_sw');
  }
  public set packetHitCountInSw(value: number) {
    this._packetHitCountInSw = value;
  }
  public resetPacketHitCountInSw() {
    this._packetHitCountInSw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetHitCountInSwInput() {
    return this._packetHitCountInSw;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats thunder_system_ip_threat_list_stats}
*/
export class DataThunderSystemIpThreatListStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ip_threat_list_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemIpThreatListStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemIpThreatListStats to import
  * @param importFromId The id of the existing DataThunderSystemIpThreatListStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemIpThreatListStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ip_threat_list_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_ip_threat_list_stats thunder_system_ip_threat_list_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemIpThreatListStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemIpThreatListStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ip_threat_list_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _stats = new DataThunderSystemIpThreatListStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemIpThreatListStatsStats) {
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
      stats: dataThunderSystemIpThreatListStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemIpThreatListStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemIpThreatListStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
