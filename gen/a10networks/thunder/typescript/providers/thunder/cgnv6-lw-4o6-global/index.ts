// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Lw4O6GlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'filter-all': Disable all Hairpinning; 'filter-none': Allow all Hairpinning (default); 'filter-self-ip': Block Hairpinning to same IP; 'filter-self-ip-port': Block hairpinning to same IP and Port combination;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#hairpinning Cgnv6Lw4O6Global#hairpinning}
  */
  readonly hairpinning?: string;
  /**
  * 'drop': Drop Inbound ICMP packets; 'handle': Handle Inbound ICMP packets(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#icmp_inbound Cgnv6Lw4O6Global#icmp_inbound}
  */
  readonly icmpInbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#id Cgnv6Lw4O6Global#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Access List for inside IPv4 addresses (ACL ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#inside_src_access_list Cgnv6Lw4O6Global#inside_src_access_list}
  */
  readonly insideSrcAccessList?: number;
  /**
  * Configure LW-4over6 NAT Prefix List (LW-4over6 NAT Prefix Class-list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#nat_prefix_list Cgnv6Lw4O6Global#nat_prefix_list}
  */
  readonly natPrefixList?: string;
  /**
  * Bind LW-4over6 binding table for use (LW-4over6 Binding Table Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#use_binding_table Cgnv6Lw4O6Global#use_binding_table}
  */
  readonly useBindingTable?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#uuid Cgnv6Lw4O6Global#uuid}
  */
  readonly uuid?: string;
  /**
  * no_forward_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#no_forward_match Cgnv6Lw4O6Global#no_forward_match}
  */
  readonly noForwardMatch?: Cgnv6Lw4O6GlobalNoForwardMatch;
  /**
  * no_reverse_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#no_reverse_match Cgnv6Lw4O6Global#no_reverse_match}
  */
  readonly noReverseMatch?: Cgnv6Lw4O6GlobalNoReverseMatch;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#sampling_enable Cgnv6Lw4O6Global#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6Lw4O6GlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6Lw4O6GlobalNoForwardMatch {
  /**
  * Send ICMPv6 Type 1 Code 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#send_icmpv6 Cgnv6Lw4O6Global#send_icmpv6}
  */
  readonly sendIcmpv6?: number;
}

export function cgnv6Lw4O6GlobalNoForwardMatchToTerraform(struct?: Cgnv6Lw4O6GlobalNoForwardMatchOutputReference | Cgnv6Lw4O6GlobalNoForwardMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_icmpv6: cdktf.numberToTerraform(struct!.sendIcmpv6),
  }
}


export function cgnv6Lw4O6GlobalNoForwardMatchToHclTerraform(struct?: Cgnv6Lw4O6GlobalNoForwardMatchOutputReference | Cgnv6Lw4O6GlobalNoForwardMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.sendIcmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Lw4O6GlobalNoForwardMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Lw4O6GlobalNoForwardMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendIcmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendIcmpv6 = this._sendIcmpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Lw4O6GlobalNoForwardMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendIcmpv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendIcmpv6 = value.sendIcmpv6;
    }
  }

  // send_icmpv6 - computed: false, optional: true, required: false
  private _sendIcmpv6?: number; 
  public get sendIcmpv6() {
    return this.getNumberAttribute('send_icmpv6');
  }
  public set sendIcmpv6(value: number) {
    this._sendIcmpv6 = value;
  }
  public resetSendIcmpv6() {
    this._sendIcmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIcmpv6Input() {
    return this._sendIcmpv6;
  }
}
export interface Cgnv6Lw4O6GlobalNoReverseMatch {
  /**
  * Send ICMP Type 3 Code 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#send_icmp Cgnv6Lw4O6Global#send_icmp}
  */
  readonly sendIcmp?: number;
}

export function cgnv6Lw4O6GlobalNoReverseMatchToTerraform(struct?: Cgnv6Lw4O6GlobalNoReverseMatchOutputReference | Cgnv6Lw4O6GlobalNoReverseMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_icmp: cdktf.numberToTerraform(struct!.sendIcmp),
  }
}


export function cgnv6Lw4O6GlobalNoReverseMatchToHclTerraform(struct?: Cgnv6Lw4O6GlobalNoReverseMatchOutputReference | Cgnv6Lw4O6GlobalNoReverseMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_icmp: {
      value: cdktf.numberToHclTerraform(struct!.sendIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Lw4O6GlobalNoReverseMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6Lw4O6GlobalNoReverseMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendIcmp = this._sendIcmp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Lw4O6GlobalNoReverseMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendIcmp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendIcmp = value.sendIcmp;
    }
  }

  // send_icmp - computed: false, optional: true, required: false
  private _sendIcmp?: number; 
  public get sendIcmp() {
    return this.getNumberAttribute('send_icmp');
  }
  public set sendIcmp(value: number) {
    this._sendIcmp = value;
  }
  public resetSendIcmp() {
    this._sendIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIcmpInput() {
    return this._sendIcmp;
  }
}
export interface Cgnv6Lw4O6GlobalSamplingEnable {
  /**
  * 'all': all; 'entry_count': Total Entries Configured; 'self_hairpinning_drop': Self-Hairpinning Drops; 'all_hairpinning_drop': All Hairpinning Drops; 'no_match_icmpv6_sent': No-Forward-Match ICMPv6 Sent; 'no_match_icmp_sent': No-Reverse-Match ICMP Sent; 'icmp_inbound_drop': Inbound ICMP Drops; 'fwd_lookup_failed': Forward Route Lookup Failed; 'rev_lookup_failed': Reverse Route Lookup Failed; 'interface_not_configured': LW-4over6 Interfaces not Configured Drops; 'no_binding_table_matches_fwd': No Forward Binding Table Entry Match Drops; 'no_binding_table_matches_rev': No Reverse Binding Table Entry Match Drops; 'session_count': LW-4over6 Session Count; 'system_address_drop': LW-4over6 System Address Drops;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#counters1 Cgnv6Lw4O6Global#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6Lw4O6GlobalSamplingEnableToTerraform(struct?: Cgnv6Lw4O6GlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6Lw4O6GlobalSamplingEnableToHclTerraform(struct?: Cgnv6Lw4O6GlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Lw4O6GlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): Cgnv6Lw4O6GlobalSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Lw4O6GlobalSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class Cgnv6Lw4O6GlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Lw4O6GlobalSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): Cgnv6Lw4O6GlobalSamplingEnableOutputReference {
    return new Cgnv6Lw4O6GlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global thunder_cgnv6_lw_4o6_global}
*/
export class Cgnv6Lw4O6Global extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lw_4o6_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Lw4O6Global resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Lw4O6Global to import
  * @param importFromId The id of the existing Cgnv6Lw4O6Global that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Lw4O6Global to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lw_4o6_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_lw_4o6_global thunder_cgnv6_lw_4o6_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Lw4O6GlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Lw4O6GlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lw_4o6_global',
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
    this._hairpinning = config.hairpinning;
    this._icmpInbound = config.icmpInbound;
    this._id = config.id;
    this._insideSrcAccessList = config.insideSrcAccessList;
    this._natPrefixList = config.natPrefixList;
    this._useBindingTable = config.useBindingTable;
    this._uuid = config.uuid;
    this._noForwardMatch.internalValue = config.noForwardMatch;
    this._noReverseMatch.internalValue = config.noReverseMatch;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hairpinning - computed: false, optional: true, required: false
  private _hairpinning?: string; 
  public get hairpinning() {
    return this.getStringAttribute('hairpinning');
  }
  public set hairpinning(value: string) {
    this._hairpinning = value;
  }
  public resetHairpinning() {
    this._hairpinning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hairpinningInput() {
    return this._hairpinning;
  }

  // icmp_inbound - computed: false, optional: true, required: false
  private _icmpInbound?: string; 
  public get icmpInbound() {
    return this.getStringAttribute('icmp_inbound');
  }
  public set icmpInbound(value: string) {
    this._icmpInbound = value;
  }
  public resetIcmpInbound() {
    this._icmpInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInboundInput() {
    return this._icmpInbound;
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

  // inside_src_access_list - computed: false, optional: true, required: false
  private _insideSrcAccessList?: number; 
  public get insideSrcAccessList() {
    return this.getNumberAttribute('inside_src_access_list');
  }
  public set insideSrcAccessList(value: number) {
    this._insideSrcAccessList = value;
  }
  public resetInsideSrcAccessList() {
    this._insideSrcAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSrcAccessListInput() {
    return this._insideSrcAccessList;
  }

  // nat_prefix_list - computed: false, optional: true, required: false
  private _natPrefixList?: string; 
  public get natPrefixList() {
    return this.getStringAttribute('nat_prefix_list');
  }
  public set natPrefixList(value: string) {
    this._natPrefixList = value;
  }
  public resetNatPrefixList() {
    this._natPrefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPrefixListInput() {
    return this._natPrefixList;
  }

  // use_binding_table - computed: false, optional: true, required: false
  private _useBindingTable?: string; 
  public get useBindingTable() {
    return this.getStringAttribute('use_binding_table');
  }
  public set useBindingTable(value: string) {
    this._useBindingTable = value;
  }
  public resetUseBindingTable() {
    this._useBindingTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBindingTableInput() {
    return this._useBindingTable;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // no_forward_match - computed: false, optional: true, required: false
  private _noForwardMatch = new Cgnv6Lw4O6GlobalNoForwardMatchOutputReference(this, "no_forward_match");
  public get noForwardMatch() {
    return this._noForwardMatch;
  }
  public putNoForwardMatch(value: Cgnv6Lw4O6GlobalNoForwardMatch) {
    this._noForwardMatch.internalValue = value;
  }
  public resetNoForwardMatch() {
    this._noForwardMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardMatchInput() {
    return this._noForwardMatch.internalValue;
  }

  // no_reverse_match - computed: false, optional: true, required: false
  private _noReverseMatch = new Cgnv6Lw4O6GlobalNoReverseMatchOutputReference(this, "no_reverse_match");
  public get noReverseMatch() {
    return this._noReverseMatch;
  }
  public putNoReverseMatch(value: Cgnv6Lw4O6GlobalNoReverseMatch) {
    this._noReverseMatch.internalValue = value;
  }
  public resetNoReverseMatch() {
    this._noReverseMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReverseMatchInput() {
    return this._noReverseMatch.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6Lw4O6GlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6Lw4O6GlobalSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hairpinning: cdktf.stringToTerraform(this._hairpinning),
      icmp_inbound: cdktf.stringToTerraform(this._icmpInbound),
      id: cdktf.stringToTerraform(this._id),
      inside_src_access_list: cdktf.numberToTerraform(this._insideSrcAccessList),
      nat_prefix_list: cdktf.stringToTerraform(this._natPrefixList),
      use_binding_table: cdktf.stringToTerraform(this._useBindingTable),
      uuid: cdktf.stringToTerraform(this._uuid),
      no_forward_match: cgnv6Lw4O6GlobalNoForwardMatchToTerraform(this._noForwardMatch.internalValue),
      no_reverse_match: cgnv6Lw4O6GlobalNoReverseMatchToTerraform(this._noReverseMatch.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6Lw4O6GlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hairpinning: {
        value: cdktf.stringToHclTerraform(this._hairpinning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_inbound: {
        value: cdktf.stringToHclTerraform(this._icmpInbound),
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
      inside_src_access_list: {
        value: cdktf.numberToHclTerraform(this._insideSrcAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_prefix_list: {
        value: cdktf.stringToHclTerraform(this._natPrefixList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_binding_table: {
        value: cdktf.stringToHclTerraform(this._useBindingTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_forward_match: {
        value: cgnv6Lw4O6GlobalNoForwardMatchToHclTerraform(this._noForwardMatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Lw4O6GlobalNoForwardMatchList",
      },
      no_reverse_match: {
        value: cgnv6Lw4O6GlobalNoReverseMatchToHclTerraform(this._noReverseMatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Lw4O6GlobalNoReverseMatchList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6Lw4O6GlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Lw4O6GlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
