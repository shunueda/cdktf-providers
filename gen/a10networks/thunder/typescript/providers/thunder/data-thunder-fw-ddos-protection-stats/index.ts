// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwDdosProtectionStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#id DataThunderFwDdosProtectionStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#stats DataThunderFwDdosProtectionStats#stats}
  */
  readonly stats?: DataThunderFwDdosProtectionStatsStats;
}
export interface DataThunderFwDdosProtectionStatsStats {
  /**
  * Too many DDOS entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_entries_too_many DataThunderFwDdosProtectionStats#ddos_entries_too_many}
  */
  readonly ddosEntriesTooMany?: number;
  /**
  * DDoS Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_entry_add_to_bgp_failure DataThunderFwDdosProtectionStats#ddos_entry_add_to_bgp_failure}
  */
  readonly ddosEntryAddToBgpFailure?: number;
  /**
  * DDOS entry added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_entry_added DataThunderFwDdosProtectionStats#ddos_entry_added}
  */
  readonly ddosEntryAdded?: number;
  /**
  * DDoS Entry added to BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_entry_added_to_bgp DataThunderFwDdosProtectionStats#ddos_entry_added_to_bgp}
  */
  readonly ddosEntryAddedToBgp?: number;
  /**
  * DDOS entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_entry_remove_from_bgp_failure DataThunderFwDdosProtectionStats#ddos_entry_remove_from_bgp_failure}
  */
  readonly ddosEntryRemoveFromBgpFailure?: number;
  /**
  * DDOS entry removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_entry_removed DataThunderFwDdosProtectionStats#ddos_entry_removed}
  */
  readonly ddosEntryRemoved?: number;
  /**
  * DDoS Entry Removed from BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_entry_removed_from_bgp DataThunderFwDdosProtectionStats#ddos_entry_removed_from_bgp}
  */
  readonly ddosEntryRemovedFromBgp?: number;
  /**
  * DDOS Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#ddos_packet_dropped DataThunderFwDdosProtectionStats#ddos_packet_dropped}
  */
  readonly ddosPacketDropped?: number;
}

export function dataThunderFwDdosProtectionStatsStatsToTerraform(struct?: DataThunderFwDdosProtectionStatsStatsOutputReference | DataThunderFwDdosProtectionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddos_entries_too_many: cdktf.numberToTerraform(struct!.ddosEntriesTooMany),
    ddos_entry_add_to_bgp_failure: cdktf.numberToTerraform(struct!.ddosEntryAddToBgpFailure),
    ddos_entry_added: cdktf.numberToTerraform(struct!.ddosEntryAdded),
    ddos_entry_added_to_bgp: cdktf.numberToTerraform(struct!.ddosEntryAddedToBgp),
    ddos_entry_remove_from_bgp_failure: cdktf.numberToTerraform(struct!.ddosEntryRemoveFromBgpFailure),
    ddos_entry_removed: cdktf.numberToTerraform(struct!.ddosEntryRemoved),
    ddos_entry_removed_from_bgp: cdktf.numberToTerraform(struct!.ddosEntryRemovedFromBgp),
    ddos_packet_dropped: cdktf.numberToTerraform(struct!.ddosPacketDropped),
  }
}


export function dataThunderFwDdosProtectionStatsStatsToHclTerraform(struct?: DataThunderFwDdosProtectionStatsStatsOutputReference | DataThunderFwDdosProtectionStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddos_entries_too_many: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntriesTooMany),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_add_to_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryAddToBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_added: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_added_to_bgp: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryAddedToBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_remove_from_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryRemoveFromBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_removed: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_removed_from_bgp: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryRemovedFromBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_packet_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ddosPacketDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwDdosProtectionStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwDdosProtectionStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddosEntriesTooMany !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntriesTooMany = this._ddosEntriesTooMany;
    }
    if (this._ddosEntryAddToBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryAddToBgpFailure = this._ddosEntryAddToBgpFailure;
    }
    if (this._ddosEntryAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryAdded = this._ddosEntryAdded;
    }
    if (this._ddosEntryAddedToBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryAddedToBgp = this._ddosEntryAddedToBgp;
    }
    if (this._ddosEntryRemoveFromBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryRemoveFromBgpFailure = this._ddosEntryRemoveFromBgpFailure;
    }
    if (this._ddosEntryRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryRemoved = this._ddosEntryRemoved;
    }
    if (this._ddosEntryRemovedFromBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryRemovedFromBgp = this._ddosEntryRemovedFromBgp;
    }
    if (this._ddosPacketDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosPacketDropped = this._ddosPacketDropped;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwDdosProtectionStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddosEntriesTooMany = undefined;
      this._ddosEntryAddToBgpFailure = undefined;
      this._ddosEntryAdded = undefined;
      this._ddosEntryAddedToBgp = undefined;
      this._ddosEntryRemoveFromBgpFailure = undefined;
      this._ddosEntryRemoved = undefined;
      this._ddosEntryRemovedFromBgp = undefined;
      this._ddosPacketDropped = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddosEntriesTooMany = value.ddosEntriesTooMany;
      this._ddosEntryAddToBgpFailure = value.ddosEntryAddToBgpFailure;
      this._ddosEntryAdded = value.ddosEntryAdded;
      this._ddosEntryAddedToBgp = value.ddosEntryAddedToBgp;
      this._ddosEntryRemoveFromBgpFailure = value.ddosEntryRemoveFromBgpFailure;
      this._ddosEntryRemoved = value.ddosEntryRemoved;
      this._ddosEntryRemovedFromBgp = value.ddosEntryRemovedFromBgp;
      this._ddosPacketDropped = value.ddosPacketDropped;
    }
  }

  // ddos_entries_too_many - computed: false, optional: true, required: false
  private _ddosEntriesTooMany?: number; 
  public get ddosEntriesTooMany() {
    return this.getNumberAttribute('ddos_entries_too_many');
  }
  public set ddosEntriesTooMany(value: number) {
    this._ddosEntriesTooMany = value;
  }
  public resetDdosEntriesTooMany() {
    this._ddosEntriesTooMany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntriesTooManyInput() {
    return this._ddosEntriesTooMany;
  }

  // ddos_entry_add_to_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryAddToBgpFailure?: number; 
  public get ddosEntryAddToBgpFailure() {
    return this.getNumberAttribute('ddos_entry_add_to_bgp_failure');
  }
  public set ddosEntryAddToBgpFailure(value: number) {
    this._ddosEntryAddToBgpFailure = value;
  }
  public resetDdosEntryAddToBgpFailure() {
    this._ddosEntryAddToBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryAddToBgpFailureInput() {
    return this._ddosEntryAddToBgpFailure;
  }

  // ddos_entry_added - computed: false, optional: true, required: false
  private _ddosEntryAdded?: number; 
  public get ddosEntryAdded() {
    return this.getNumberAttribute('ddos_entry_added');
  }
  public set ddosEntryAdded(value: number) {
    this._ddosEntryAdded = value;
  }
  public resetDdosEntryAdded() {
    this._ddosEntryAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryAddedInput() {
    return this._ddosEntryAdded;
  }

  // ddos_entry_added_to_bgp - computed: false, optional: true, required: false
  private _ddosEntryAddedToBgp?: number; 
  public get ddosEntryAddedToBgp() {
    return this.getNumberAttribute('ddos_entry_added_to_bgp');
  }
  public set ddosEntryAddedToBgp(value: number) {
    this._ddosEntryAddedToBgp = value;
  }
  public resetDdosEntryAddedToBgp() {
    this._ddosEntryAddedToBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryAddedToBgpInput() {
    return this._ddosEntryAddedToBgp;
  }

  // ddos_entry_remove_from_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryRemoveFromBgpFailure?: number; 
  public get ddosEntryRemoveFromBgpFailure() {
    return this.getNumberAttribute('ddos_entry_remove_from_bgp_failure');
  }
  public set ddosEntryRemoveFromBgpFailure(value: number) {
    this._ddosEntryRemoveFromBgpFailure = value;
  }
  public resetDdosEntryRemoveFromBgpFailure() {
    this._ddosEntryRemoveFromBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryRemoveFromBgpFailureInput() {
    return this._ddosEntryRemoveFromBgpFailure;
  }

  // ddos_entry_removed - computed: false, optional: true, required: false
  private _ddosEntryRemoved?: number; 
  public get ddosEntryRemoved() {
    return this.getNumberAttribute('ddos_entry_removed');
  }
  public set ddosEntryRemoved(value: number) {
    this._ddosEntryRemoved = value;
  }
  public resetDdosEntryRemoved() {
    this._ddosEntryRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryRemovedInput() {
    return this._ddosEntryRemoved;
  }

  // ddos_entry_removed_from_bgp - computed: false, optional: true, required: false
  private _ddosEntryRemovedFromBgp?: number; 
  public get ddosEntryRemovedFromBgp() {
    return this.getNumberAttribute('ddos_entry_removed_from_bgp');
  }
  public set ddosEntryRemovedFromBgp(value: number) {
    this._ddosEntryRemovedFromBgp = value;
  }
  public resetDdosEntryRemovedFromBgp() {
    this._ddosEntryRemovedFromBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryRemovedFromBgpInput() {
    return this._ddosEntryRemovedFromBgp;
  }

  // ddos_packet_dropped - computed: false, optional: true, required: false
  private _ddosPacketDropped?: number; 
  public get ddosPacketDropped() {
    return this.getNumberAttribute('ddos_packet_dropped');
  }
  public set ddosPacketDropped(value: number) {
    this._ddosPacketDropped = value;
  }
  public resetDdosPacketDropped() {
    this._ddosPacketDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPacketDroppedInput() {
    return this._ddosPacketDropped;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats thunder_fw_ddos_protection_stats}
*/
export class DataThunderFwDdosProtectionStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_ddos_protection_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwDdosProtectionStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwDdosProtectionStats to import
  * @param importFromId The id of the existing DataThunderFwDdosProtectionStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwDdosProtectionStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_ddos_protection_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_ddos_protection_stats thunder_fw_ddos_protection_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwDdosProtectionStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwDdosProtectionStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_ddos_protection_stats',
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
  private _stats = new DataThunderFwDdosProtectionStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwDdosProtectionStatsStats) {
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
      stats: dataThunderFwDdosProtectionStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderFwDdosProtectionStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwDdosProtectionStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
