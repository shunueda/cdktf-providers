// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6IcmpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#id DataThunderCgnv6IcmpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#stats DataThunderCgnv6IcmpStats#stats}
  */
  readonly stats?: DataThunderCgnv6IcmpStatsStats;
}
export interface DataThunderCgnv6IcmpStatsStats {
  /**
  * Bad Embedded ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_bad_type DataThunderCgnv6IcmpStats#icmp_bad_type}
  */
  readonly icmpBadType?: number;
  /**
  * ICMP Port Info Not Included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_no_port_info DataThunderCgnv6IcmpStats#icmp_no_port_info}
  */
  readonly icmpNoPortInfo?: number;
  /**
  * ICMP No Matching Session Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_no_session_drop DataThunderCgnv6IcmpStats#icmp_no_session_drop}
  */
  readonly icmpNoSessionDrop?: number;
  /**
  * ICMP to ICMP Conversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_to_icmp DataThunderCgnv6IcmpStats#icmp_to_icmp}
  */
  readonly icmpToIcmp?: number;
  /**
  * ICMP to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_to_icmp_err DataThunderCgnv6IcmpStats#icmp_to_icmp_err}
  */
  readonly icmpToIcmpErr?: number;
  /**
  * ICMP to ICMPv6 Conversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_to_icmpv6 DataThunderCgnv6IcmpStats#icmp_to_icmpv6}
  */
  readonly icmpToIcmpv6?: number;
  /**
  * ICMP to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_to_icmpv6_err DataThunderCgnv6IcmpStats#icmp_to_icmpv6_err}
  */
  readonly icmpToIcmpv6Err?: number;
  /**
  * ICMP Unknown Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmp_unknown_type DataThunderCgnv6IcmpStats#icmp_unknown_type}
  */
  readonly icmpUnknownType?: number;
  /**
  * Bad Embedded ICMPv6 Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_bad_type DataThunderCgnv6IcmpStats#icmpv6_bad_type}
  */
  readonly icmpv6BadType?: number;
  /**
  * ICMPv6 Port Info Not Included
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_no_port_info DataThunderCgnv6IcmpStats#icmpv6_no_port_info}
  */
  readonly icmpv6NoPortInfo?: number;
  /**
  * ICMPv6 No Matching Session Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_no_session_drop DataThunderCgnv6IcmpStats#icmpv6_no_session_drop}
  */
  readonly icmpv6NoSessionDrop?: number;
  /**
  * ICMPv6 to ICMP Conversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_to_icmp DataThunderCgnv6IcmpStats#icmpv6_to_icmp}
  */
  readonly icmpv6ToIcmp?: number;
  /**
  * ICMPv6 to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_to_icmp_err DataThunderCgnv6IcmpStats#icmpv6_to_icmp_err}
  */
  readonly icmpv6ToIcmpErr?: number;
  /**
  * ICMPv6 to ICMPv6 Conversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_to_icmpv6 DataThunderCgnv6IcmpStats#icmpv6_to_icmpv6}
  */
  readonly icmpv6ToIcmpv6?: number;
  /**
  * ICMPv6 to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_to_icmpv6_err DataThunderCgnv6IcmpStats#icmpv6_to_icmpv6_err}
  */
  readonly icmpv6ToIcmpv6Err?: number;
  /**
  * ICMPv6 Unknown Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#icmpv6_unknown_type DataThunderCgnv6IcmpStats#icmpv6_unknown_type}
  */
  readonly icmpv6UnknownType?: number;
  /**
  * NAT64 Reverse Known ICMP Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#known_drop46 DataThunderCgnv6IcmpStats#known_drop46}
  */
  readonly knownDrop46?: number;
  /**
  * NAT64 Forward Known ICMPv6 Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#known_drop64 DataThunderCgnv6IcmpStats#known_drop64}
  */
  readonly knownDrop64?: number;
  /**
  * NAT64 Forward Unknown Source Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#midpoint_hop64 DataThunderCgnv6IcmpStats#midpoint_hop64}
  */
  readonly midpointHop64?: number;
  /**
  * NAT64 Reverse No Prefix Match for IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#no_prefix_for_ipv446 DataThunderCgnv6IcmpStats#no_prefix_for_ipv446}
  */
  readonly noPrefixForIpv446?: number;
  /**
  * NAT64 Reverse Known ICMPv6 Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#unknown_drop46 DataThunderCgnv6IcmpStats#unknown_drop46}
  */
  readonly unknownDrop46?: number;
  /**
  * NAT64 Forward Unknown ICMPv6 Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#unknown_drop64 DataThunderCgnv6IcmpStats#unknown_drop64}
  */
  readonly unknownDrop64?: number;
}

export function dataThunderCgnv6IcmpStatsStatsToTerraform(struct?: DataThunderCgnv6IcmpStatsStatsOutputReference | DataThunderCgnv6IcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_bad_type: cdktf.numberToTerraform(struct!.icmpBadType),
    icmp_no_port_info: cdktf.numberToTerraform(struct!.icmpNoPortInfo),
    icmp_no_session_drop: cdktf.numberToTerraform(struct!.icmpNoSessionDrop),
    icmp_to_icmp: cdktf.numberToTerraform(struct!.icmpToIcmp),
    icmp_to_icmp_err: cdktf.numberToTerraform(struct!.icmpToIcmpErr),
    icmp_to_icmpv6: cdktf.numberToTerraform(struct!.icmpToIcmpv6),
    icmp_to_icmpv6_err: cdktf.numberToTerraform(struct!.icmpToIcmpv6Err),
    icmp_unknown_type: cdktf.numberToTerraform(struct!.icmpUnknownType),
    icmpv6_bad_type: cdktf.numberToTerraform(struct!.icmpv6BadType),
    icmpv6_no_port_info: cdktf.numberToTerraform(struct!.icmpv6NoPortInfo),
    icmpv6_no_session_drop: cdktf.numberToTerraform(struct!.icmpv6NoSessionDrop),
    icmpv6_to_icmp: cdktf.numberToTerraform(struct!.icmpv6ToIcmp),
    icmpv6_to_icmp_err: cdktf.numberToTerraform(struct!.icmpv6ToIcmpErr),
    icmpv6_to_icmpv6: cdktf.numberToTerraform(struct!.icmpv6ToIcmpv6),
    icmpv6_to_icmpv6_err: cdktf.numberToTerraform(struct!.icmpv6ToIcmpv6Err),
    icmpv6_unknown_type: cdktf.numberToTerraform(struct!.icmpv6UnknownType),
    known_drop46: cdktf.numberToTerraform(struct!.knownDrop46),
    known_drop64: cdktf.numberToTerraform(struct!.knownDrop64),
    midpoint_hop64: cdktf.numberToTerraform(struct!.midpointHop64),
    no_prefix_for_ipv446: cdktf.numberToTerraform(struct!.noPrefixForIpv446),
    unknown_drop46: cdktf.numberToTerraform(struct!.unknownDrop46),
    unknown_drop64: cdktf.numberToTerraform(struct!.unknownDrop64),
  }
}


export function dataThunderCgnv6IcmpStatsStatsToHclTerraform(struct?: DataThunderCgnv6IcmpStatsStatsOutputReference | DataThunderCgnv6IcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_bad_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpBadType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_no_port_info: {
      value: cdktf.numberToHclTerraform(struct!.icmpNoPortInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_no_session_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpNoSessionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmp_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmpv6_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpv6Err),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_unknown_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpUnknownType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_bad_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6BadType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_no_port_info: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6NoPortInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_no_session_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6NoSessionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmp_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmpv6_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpv6Err),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_unknown_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6UnknownType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    known_drop46: {
      value: cdktf.numberToHclTerraform(struct!.knownDrop46),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    known_drop64: {
      value: cdktf.numberToHclTerraform(struct!.knownDrop64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    midpoint_hop64: {
      value: cdktf.numberToHclTerraform(struct!.midpointHop64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_prefix_for_ipv446: {
      value: cdktf.numberToHclTerraform(struct!.noPrefixForIpv446),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_drop46: {
      value: cdktf.numberToHclTerraform(struct!.unknownDrop46),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_drop64: {
      value: cdktf.numberToHclTerraform(struct!.unknownDrop64),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6IcmpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6IcmpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpBadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpBadType = this._icmpBadType;
    }
    if (this._icmpNoPortInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpNoPortInfo = this._icmpNoPortInfo;
    }
    if (this._icmpNoSessionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpNoSessionDrop = this._icmpNoSessionDrop;
    }
    if (this._icmpToIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmp = this._icmpToIcmp;
    }
    if (this._icmpToIcmpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpErr = this._icmpToIcmpErr;
    }
    if (this._icmpToIcmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpv6 = this._icmpToIcmpv6;
    }
    if (this._icmpToIcmpv6Err !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpv6Err = this._icmpToIcmpv6Err;
    }
    if (this._icmpUnknownType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpUnknownType = this._icmpUnknownType;
    }
    if (this._icmpv6BadType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6BadType = this._icmpv6BadType;
    }
    if (this._icmpv6NoPortInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6NoPortInfo = this._icmpv6NoPortInfo;
    }
    if (this._icmpv6NoSessionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6NoSessionDrop = this._icmpv6NoSessionDrop;
    }
    if (this._icmpv6ToIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmp = this._icmpv6ToIcmp;
    }
    if (this._icmpv6ToIcmpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpErr = this._icmpv6ToIcmpErr;
    }
    if (this._icmpv6ToIcmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpv6 = this._icmpv6ToIcmpv6;
    }
    if (this._icmpv6ToIcmpv6Err !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpv6Err = this._icmpv6ToIcmpv6Err;
    }
    if (this._icmpv6UnknownType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6UnknownType = this._icmpv6UnknownType;
    }
    if (this._knownDrop46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownDrop46 = this._knownDrop46;
    }
    if (this._knownDrop64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownDrop64 = this._knownDrop64;
    }
    if (this._midpointHop64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.midpointHop64 = this._midpointHop64;
    }
    if (this._noPrefixForIpv446 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPrefixForIpv446 = this._noPrefixForIpv446;
    }
    if (this._unknownDrop46 !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownDrop46 = this._unknownDrop46;
    }
    if (this._unknownDrop64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownDrop64 = this._unknownDrop64;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6IcmpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpBadType = undefined;
      this._icmpNoPortInfo = undefined;
      this._icmpNoSessionDrop = undefined;
      this._icmpToIcmp = undefined;
      this._icmpToIcmpErr = undefined;
      this._icmpToIcmpv6 = undefined;
      this._icmpToIcmpv6Err = undefined;
      this._icmpUnknownType = undefined;
      this._icmpv6BadType = undefined;
      this._icmpv6NoPortInfo = undefined;
      this._icmpv6NoSessionDrop = undefined;
      this._icmpv6ToIcmp = undefined;
      this._icmpv6ToIcmpErr = undefined;
      this._icmpv6ToIcmpv6 = undefined;
      this._icmpv6ToIcmpv6Err = undefined;
      this._icmpv6UnknownType = undefined;
      this._knownDrop46 = undefined;
      this._knownDrop64 = undefined;
      this._midpointHop64 = undefined;
      this._noPrefixForIpv446 = undefined;
      this._unknownDrop46 = undefined;
      this._unknownDrop64 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpBadType = value.icmpBadType;
      this._icmpNoPortInfo = value.icmpNoPortInfo;
      this._icmpNoSessionDrop = value.icmpNoSessionDrop;
      this._icmpToIcmp = value.icmpToIcmp;
      this._icmpToIcmpErr = value.icmpToIcmpErr;
      this._icmpToIcmpv6 = value.icmpToIcmpv6;
      this._icmpToIcmpv6Err = value.icmpToIcmpv6Err;
      this._icmpUnknownType = value.icmpUnknownType;
      this._icmpv6BadType = value.icmpv6BadType;
      this._icmpv6NoPortInfo = value.icmpv6NoPortInfo;
      this._icmpv6NoSessionDrop = value.icmpv6NoSessionDrop;
      this._icmpv6ToIcmp = value.icmpv6ToIcmp;
      this._icmpv6ToIcmpErr = value.icmpv6ToIcmpErr;
      this._icmpv6ToIcmpv6 = value.icmpv6ToIcmpv6;
      this._icmpv6ToIcmpv6Err = value.icmpv6ToIcmpv6Err;
      this._icmpv6UnknownType = value.icmpv6UnknownType;
      this._knownDrop46 = value.knownDrop46;
      this._knownDrop64 = value.knownDrop64;
      this._midpointHop64 = value.midpointHop64;
      this._noPrefixForIpv446 = value.noPrefixForIpv446;
      this._unknownDrop46 = value.unknownDrop46;
      this._unknownDrop64 = value.unknownDrop64;
    }
  }

  // icmp_bad_type - computed: false, optional: true, required: false
  private _icmpBadType?: number; 
  public get icmpBadType() {
    return this.getNumberAttribute('icmp_bad_type');
  }
  public set icmpBadType(value: number) {
    this._icmpBadType = value;
  }
  public resetIcmpBadType() {
    this._icmpBadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpBadTypeInput() {
    return this._icmpBadType;
  }

  // icmp_no_port_info - computed: false, optional: true, required: false
  private _icmpNoPortInfo?: number; 
  public get icmpNoPortInfo() {
    return this.getNumberAttribute('icmp_no_port_info');
  }
  public set icmpNoPortInfo(value: number) {
    this._icmpNoPortInfo = value;
  }
  public resetIcmpNoPortInfo() {
    this._icmpNoPortInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpNoPortInfoInput() {
    return this._icmpNoPortInfo;
  }

  // icmp_no_session_drop - computed: false, optional: true, required: false
  private _icmpNoSessionDrop?: number; 
  public get icmpNoSessionDrop() {
    return this.getNumberAttribute('icmp_no_session_drop');
  }
  public set icmpNoSessionDrop(value: number) {
    this._icmpNoSessionDrop = value;
  }
  public resetIcmpNoSessionDrop() {
    this._icmpNoSessionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpNoSessionDropInput() {
    return this._icmpNoSessionDrop;
  }

  // icmp_to_icmp - computed: false, optional: true, required: false
  private _icmpToIcmp?: number; 
  public get icmpToIcmp() {
    return this.getNumberAttribute('icmp_to_icmp');
  }
  public set icmpToIcmp(value: number) {
    this._icmpToIcmp = value;
  }
  public resetIcmpToIcmp() {
    this._icmpToIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpInput() {
    return this._icmpToIcmp;
  }

  // icmp_to_icmp_err - computed: false, optional: true, required: false
  private _icmpToIcmpErr?: number; 
  public get icmpToIcmpErr() {
    return this.getNumberAttribute('icmp_to_icmp_err');
  }
  public set icmpToIcmpErr(value: number) {
    this._icmpToIcmpErr = value;
  }
  public resetIcmpToIcmpErr() {
    this._icmpToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpErrInput() {
    return this._icmpToIcmpErr;
  }

  // icmp_to_icmpv6 - computed: false, optional: true, required: false
  private _icmpToIcmpv6?: number; 
  public get icmpToIcmpv6() {
    return this.getNumberAttribute('icmp_to_icmpv6');
  }
  public set icmpToIcmpv6(value: number) {
    this._icmpToIcmpv6 = value;
  }
  public resetIcmpToIcmpv6() {
    this._icmpToIcmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpv6Input() {
    return this._icmpToIcmpv6;
  }

  // icmp_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpToIcmpv6Err?: number; 
  public get icmpToIcmpv6Err() {
    return this.getNumberAttribute('icmp_to_icmpv6_err');
  }
  public set icmpToIcmpv6Err(value: number) {
    this._icmpToIcmpv6Err = value;
  }
  public resetIcmpToIcmpv6Err() {
    this._icmpToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpv6ErrInput() {
    return this._icmpToIcmpv6Err;
  }

  // icmp_unknown_type - computed: false, optional: true, required: false
  private _icmpUnknownType?: number; 
  public get icmpUnknownType() {
    return this.getNumberAttribute('icmp_unknown_type');
  }
  public set icmpUnknownType(value: number) {
    this._icmpUnknownType = value;
  }
  public resetIcmpUnknownType() {
    this._icmpUnknownType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUnknownTypeInput() {
    return this._icmpUnknownType;
  }

  // icmpv6_bad_type - computed: false, optional: true, required: false
  private _icmpv6BadType?: number; 
  public get icmpv6BadType() {
    return this.getNumberAttribute('icmpv6_bad_type');
  }
  public set icmpv6BadType(value: number) {
    this._icmpv6BadType = value;
  }
  public resetIcmpv6BadType() {
    this._icmpv6BadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6BadTypeInput() {
    return this._icmpv6BadType;
  }

  // icmpv6_no_port_info - computed: false, optional: true, required: false
  private _icmpv6NoPortInfo?: number; 
  public get icmpv6NoPortInfo() {
    return this.getNumberAttribute('icmpv6_no_port_info');
  }
  public set icmpv6NoPortInfo(value: number) {
    this._icmpv6NoPortInfo = value;
  }
  public resetIcmpv6NoPortInfo() {
    this._icmpv6NoPortInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6NoPortInfoInput() {
    return this._icmpv6NoPortInfo;
  }

  // icmpv6_no_session_drop - computed: false, optional: true, required: false
  private _icmpv6NoSessionDrop?: number; 
  public get icmpv6NoSessionDrop() {
    return this.getNumberAttribute('icmpv6_no_session_drop');
  }
  public set icmpv6NoSessionDrop(value: number) {
    this._icmpv6NoSessionDrop = value;
  }
  public resetIcmpv6NoSessionDrop() {
    this._icmpv6NoSessionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6NoSessionDropInput() {
    return this._icmpv6NoSessionDrop;
  }

  // icmpv6_to_icmp - computed: false, optional: true, required: false
  private _icmpv6ToIcmp?: number; 
  public get icmpv6ToIcmp() {
    return this.getNumberAttribute('icmpv6_to_icmp');
  }
  public set icmpv6ToIcmp(value: number) {
    this._icmpv6ToIcmp = value;
  }
  public resetIcmpv6ToIcmp() {
    this._icmpv6ToIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpInput() {
    return this._icmpv6ToIcmp;
  }

  // icmpv6_to_icmp_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpErr?: number; 
  public get icmpv6ToIcmpErr() {
    return this.getNumberAttribute('icmpv6_to_icmp_err');
  }
  public set icmpv6ToIcmpErr(value: number) {
    this._icmpv6ToIcmpErr = value;
  }
  public resetIcmpv6ToIcmpErr() {
    this._icmpv6ToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpErrInput() {
    return this._icmpv6ToIcmpErr;
  }

  // icmpv6_to_icmpv6 - computed: false, optional: true, required: false
  private _icmpv6ToIcmpv6?: number; 
  public get icmpv6ToIcmpv6() {
    return this.getNumberAttribute('icmpv6_to_icmpv6');
  }
  public set icmpv6ToIcmpv6(value: number) {
    this._icmpv6ToIcmpv6 = value;
  }
  public resetIcmpv6ToIcmpv6() {
    this._icmpv6ToIcmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpv6Input() {
    return this._icmpv6ToIcmpv6;
  }

  // icmpv6_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpv6Err?: number; 
  public get icmpv6ToIcmpv6Err() {
    return this.getNumberAttribute('icmpv6_to_icmpv6_err');
  }
  public set icmpv6ToIcmpv6Err(value: number) {
    this._icmpv6ToIcmpv6Err = value;
  }
  public resetIcmpv6ToIcmpv6Err() {
    this._icmpv6ToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpv6ErrInput() {
    return this._icmpv6ToIcmpv6Err;
  }

  // icmpv6_unknown_type - computed: false, optional: true, required: false
  private _icmpv6UnknownType?: number; 
  public get icmpv6UnknownType() {
    return this.getNumberAttribute('icmpv6_unknown_type');
  }
  public set icmpv6UnknownType(value: number) {
    this._icmpv6UnknownType = value;
  }
  public resetIcmpv6UnknownType() {
    this._icmpv6UnknownType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6UnknownTypeInput() {
    return this._icmpv6UnknownType;
  }

  // known_drop46 - computed: false, optional: true, required: false
  private _knownDrop46?: number; 
  public get knownDrop46() {
    return this.getNumberAttribute('known_drop46');
  }
  public set knownDrop46(value: number) {
    this._knownDrop46 = value;
  }
  public resetKnownDrop46() {
    this._knownDrop46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownDrop46Input() {
    return this._knownDrop46;
  }

  // known_drop64 - computed: false, optional: true, required: false
  private _knownDrop64?: number; 
  public get knownDrop64() {
    return this.getNumberAttribute('known_drop64');
  }
  public set knownDrop64(value: number) {
    this._knownDrop64 = value;
  }
  public resetKnownDrop64() {
    this._knownDrop64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownDrop64Input() {
    return this._knownDrop64;
  }

  // midpoint_hop64 - computed: false, optional: true, required: false
  private _midpointHop64?: number; 
  public get midpointHop64() {
    return this.getNumberAttribute('midpoint_hop64');
  }
  public set midpointHop64(value: number) {
    this._midpointHop64 = value;
  }
  public resetMidpointHop64() {
    this._midpointHop64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get midpointHop64Input() {
    return this._midpointHop64;
  }

  // no_prefix_for_ipv446 - computed: false, optional: true, required: false
  private _noPrefixForIpv446?: number; 
  public get noPrefixForIpv446() {
    return this.getNumberAttribute('no_prefix_for_ipv446');
  }
  public set noPrefixForIpv446(value: number) {
    this._noPrefixForIpv446 = value;
  }
  public resetNoPrefixForIpv446() {
    this._noPrefixForIpv446 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPrefixForIpv446Input() {
    return this._noPrefixForIpv446;
  }

  // unknown_drop46 - computed: false, optional: true, required: false
  private _unknownDrop46?: number; 
  public get unknownDrop46() {
    return this.getNumberAttribute('unknown_drop46');
  }
  public set unknownDrop46(value: number) {
    this._unknownDrop46 = value;
  }
  public resetUnknownDrop46() {
    this._unknownDrop46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownDrop46Input() {
    return this._unknownDrop46;
  }

  // unknown_drop64 - computed: false, optional: true, required: false
  private _unknownDrop64?: number; 
  public get unknownDrop64() {
    return this.getNumberAttribute('unknown_drop64');
  }
  public set unknownDrop64(value: number) {
    this._unknownDrop64 = value;
  }
  public resetUnknownDrop64() {
    this._unknownDrop64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownDrop64Input() {
    return this._unknownDrop64;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats thunder_cgnv6_icmp_stats}
*/
export class DataThunderCgnv6IcmpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_icmp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6IcmpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6IcmpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6IcmpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6IcmpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_icmp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_icmp_stats thunder_cgnv6_icmp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6IcmpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6IcmpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_icmp_stats',
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
  private _stats = new DataThunderCgnv6IcmpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6IcmpStatsStats) {
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
      stats: dataThunderCgnv6IcmpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6IcmpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6IcmpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
