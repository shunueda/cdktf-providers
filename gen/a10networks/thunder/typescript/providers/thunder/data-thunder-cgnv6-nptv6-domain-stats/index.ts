// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Nptv6DomainStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#id DataThunderCgnv6Nptv6DomainStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of NPTv6 domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#name DataThunderCgnv6Nptv6DomainStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#stats DataThunderCgnv6Nptv6DomainStats#stats}
  */
  readonly stats?: DataThunderCgnv6Nptv6DomainStatsStats;
}
export interface DataThunderCgnv6Nptv6DomainStatsStats {
  /**
  * Address Not Valid For Translation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#address_not_valid_for_translation DataThunderCgnv6Nptv6DomainStats#address_not_valid_for_translation}
  */
  readonly addressNotValidForTranslation?: number;
  /**
  * Hairpin Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#hairpin_packets DataThunderCgnv6Nptv6DomainStats#hairpin_packets}
  */
  readonly hairpinPackets?: number;
  /**
  * Inbound Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#inbound_packets DataThunderCgnv6Nptv6DomainStats#inbound_packets}
  */
  readonly inboundPackets?: number;
  /**
  * Inbound Packets No Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#inbound_packets_no_map DataThunderCgnv6Nptv6DomainStats#inbound_packets_no_map}
  */
  readonly inboundPacketsNoMap?: number;
  /**
  * Outbound Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#outbound_packets DataThunderCgnv6Nptv6DomainStats#outbound_packets}
  */
  readonly outboundPackets?: number;
  /**
  * Packets Destination Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#packets_dest_unreachable DataThunderCgnv6Nptv6DomainStats#packets_dest_unreachable}
  */
  readonly packetsDestUnreachable?: number;
}

export function dataThunderCgnv6Nptv6DomainStatsStatsToTerraform(struct?: DataThunderCgnv6Nptv6DomainStatsStatsOutputReference | DataThunderCgnv6Nptv6DomainStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_not_valid_for_translation: cdktf.numberToTerraform(struct!.addressNotValidForTranslation),
    hairpin_packets: cdktf.numberToTerraform(struct!.hairpinPackets),
    inbound_packets: cdktf.numberToTerraform(struct!.inboundPackets),
    inbound_packets_no_map: cdktf.numberToTerraform(struct!.inboundPacketsNoMap),
    outbound_packets: cdktf.numberToTerraform(struct!.outboundPackets),
    packets_dest_unreachable: cdktf.numberToTerraform(struct!.packetsDestUnreachable),
  }
}


export function dataThunderCgnv6Nptv6DomainStatsStatsToHclTerraform(struct?: DataThunderCgnv6Nptv6DomainStatsStatsOutputReference | DataThunderCgnv6Nptv6DomainStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_not_valid_for_translation: {
      value: cdktf.numberToHclTerraform(struct!.addressNotValidForTranslation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hairpin_packets: {
      value: cdktf.numberToHclTerraform(struct!.hairpinPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_packets: {
      value: cdktf.numberToHclTerraform(struct!.inboundPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_packets_no_map: {
      value: cdktf.numberToHclTerraform(struct!.inboundPacketsNoMap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_packets: {
      value: cdktf.numberToHclTerraform(struct!.outboundPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_dest_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.packetsDestUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Nptv6DomainStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Nptv6DomainStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressNotValidForTranslation !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressNotValidForTranslation = this._addressNotValidForTranslation;
    }
    if (this._hairpinPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.hairpinPackets = this._hairpinPackets;
    }
    if (this._inboundPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundPackets = this._inboundPackets;
    }
    if (this._inboundPacketsNoMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundPacketsNoMap = this._inboundPacketsNoMap;
    }
    if (this._outboundPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPackets = this._outboundPackets;
    }
    if (this._packetsDestUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsDestUnreachable = this._packetsDestUnreachable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Nptv6DomainStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressNotValidForTranslation = undefined;
      this._hairpinPackets = undefined;
      this._inboundPackets = undefined;
      this._inboundPacketsNoMap = undefined;
      this._outboundPackets = undefined;
      this._packetsDestUnreachable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressNotValidForTranslation = value.addressNotValidForTranslation;
      this._hairpinPackets = value.hairpinPackets;
      this._inboundPackets = value.inboundPackets;
      this._inboundPacketsNoMap = value.inboundPacketsNoMap;
      this._outboundPackets = value.outboundPackets;
      this._packetsDestUnreachable = value.packetsDestUnreachable;
    }
  }

  // address_not_valid_for_translation - computed: false, optional: true, required: false
  private _addressNotValidForTranslation?: number; 
  public get addressNotValidForTranslation() {
    return this.getNumberAttribute('address_not_valid_for_translation');
  }
  public set addressNotValidForTranslation(value: number) {
    this._addressNotValidForTranslation = value;
  }
  public resetAddressNotValidForTranslation() {
    this._addressNotValidForTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressNotValidForTranslationInput() {
    return this._addressNotValidForTranslation;
  }

  // hairpin_packets - computed: false, optional: true, required: false
  private _hairpinPackets?: number; 
  public get hairpinPackets() {
    return this.getNumberAttribute('hairpin_packets');
  }
  public set hairpinPackets(value: number) {
    this._hairpinPackets = value;
  }
  public resetHairpinPackets() {
    this._hairpinPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hairpinPacketsInput() {
    return this._hairpinPackets;
  }

  // inbound_packets - computed: false, optional: true, required: false
  private _inboundPackets?: number; 
  public get inboundPackets() {
    return this.getNumberAttribute('inbound_packets');
  }
  public set inboundPackets(value: number) {
    this._inboundPackets = value;
  }
  public resetInboundPackets() {
    this._inboundPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundPacketsInput() {
    return this._inboundPackets;
  }

  // inbound_packets_no_map - computed: false, optional: true, required: false
  private _inboundPacketsNoMap?: number; 
  public get inboundPacketsNoMap() {
    return this.getNumberAttribute('inbound_packets_no_map');
  }
  public set inboundPacketsNoMap(value: number) {
    this._inboundPacketsNoMap = value;
  }
  public resetInboundPacketsNoMap() {
    this._inboundPacketsNoMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundPacketsNoMapInput() {
    return this._inboundPacketsNoMap;
  }

  // outbound_packets - computed: false, optional: true, required: false
  private _outboundPackets?: number; 
  public get outboundPackets() {
    return this.getNumberAttribute('outbound_packets');
  }
  public set outboundPackets(value: number) {
    this._outboundPackets = value;
  }
  public resetOutboundPackets() {
    this._outboundPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPacketsInput() {
    return this._outboundPackets;
  }

  // packets_dest_unreachable - computed: false, optional: true, required: false
  private _packetsDestUnreachable?: number; 
  public get packetsDestUnreachable() {
    return this.getNumberAttribute('packets_dest_unreachable');
  }
  public set packetsDestUnreachable(value: number) {
    this._packetsDestUnreachable = value;
  }
  public resetPacketsDestUnreachable() {
    this._packetsDestUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsDestUnreachableInput() {
    return this._packetsDestUnreachable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats thunder_cgnv6_nptv6_domain_stats}
*/
export class DataThunderCgnv6Nptv6DomainStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nptv6_domain_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Nptv6DomainStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Nptv6DomainStats to import
  * @param importFromId The id of the existing DataThunderCgnv6Nptv6DomainStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Nptv6DomainStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nptv6_domain_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nptv6_domain_stats thunder_cgnv6_nptv6_domain_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Nptv6DomainStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Nptv6DomainStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nptv6_domain_stats',
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
  private _stats = new DataThunderCgnv6Nptv6DomainStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6Nptv6DomainStatsStats) {
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
      stats: dataThunderCgnv6Nptv6DomainStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6Nptv6DomainStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Nptv6DomainStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
