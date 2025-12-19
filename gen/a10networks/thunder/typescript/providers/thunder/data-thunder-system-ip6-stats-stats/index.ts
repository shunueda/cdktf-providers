// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemIp6StatsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#id DataThunderSystemIp6StatsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#stats DataThunderSystemIp6StatsStats#stats}
  */
  readonly stats?: DataThunderSystemIp6StatsStatsStats;
}
export interface DataThunderSystemIp6StatsStatsStats {
  /**
  * Outgoing fragmented packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#fragcreates DataThunderSystemIp6StatsStats#fragcreates}
  */
  readonly fragcreates?: number;
  /**
  * Outgoing packets fragmentation failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#fragfails DataThunderSystemIp6StatsStats#fragfails}
  */
  readonly fragfails?: number;
  /**
  * Outgoing packets fragmented
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#fragoks DataThunderSystemIp6StatsStats#fragoks}
  */
  readonly fragoks?: number;
  /**
  * Incoming packet address errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#inaddrerrors DataThunderSystemIp6StatsStats#inaddrerrors}
  */
  readonly inaddrerrors?: number;
  /**
  * Incoming packets delivered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#indelivers DataThunderSystemIp6StatsStats#indelivers}
  */
  readonly indelivers?: number;
  /**
  * Incoming packets discarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#indiscards DataThunderSystemIp6StatsStats#indiscards}
  */
  readonly indiscards?: number;
  /**
  * Incoming packet header errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#inhdrerrors DataThunderSystemIp6StatsStats#inhdrerrors}
  */
  readonly inhdrerrors?: number;
  /**
  * Incoming multicast packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#inmcastpkts DataThunderSystemIp6StatsStats#inmcastpkts}
  */
  readonly inmcastpkts?: number;
  /**
  * Incoming no route packet drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#innoroutes DataThunderSystemIp6StatsStats#innoroutes}
  */
  readonly innoroutes?: number;
  /**
  * Incoming packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#inreceives DataThunderSystemIp6StatsStats#inreceives}
  */
  readonly inreceives?: number;
  /**
  * Incoming packet too big errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#intoobigerrors DataThunderSystemIp6StatsStats#intoobigerrors}
  */
  readonly intoobigerrors?: number;
  /**
  * Incoming truncated packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#intruncatedpkts DataThunderSystemIp6StatsStats#intruncatedpkts}
  */
  readonly intruncatedpkts?: number;
  /**
  * Incoming unkown protocol packet drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#inunknownprotos DataThunderSystemIp6StatsStats#inunknownprotos}
  */
  readonly inunknownprotos?: number;
  /**
  * Outgoing packets discarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#outdiscards DataThunderSystemIp6StatsStats#outdiscards}
  */
  readonly outdiscards?: number;
  /**
  * Outgoing forwarded datagrams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#outforwdatagrams DataThunderSystemIp6StatsStats#outforwdatagrams}
  */
  readonly outforwdatagrams?: number;
  /**
  * Outgoing multicast packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#outmcastpkts DataThunderSystemIp6StatsStats#outmcastpkts}
  */
  readonly outmcastpkts?: number;
  /**
  * Outgoing no route packet drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#outnoroutes DataThunderSystemIp6StatsStats#outnoroutes}
  */
  readonly outnoroutes?: number;
  /**
  * Outgoing packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#outrequests DataThunderSystemIp6StatsStats#outrequests}
  */
  readonly outrequests?: number;
  /**
  * Incoming reassembly requests failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#reasmfails DataThunderSystemIp6StatsStats#reasmfails}
  */
  readonly reasmfails?: number;
  /**
  * Incoming reassembled packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#reasmoks DataThunderSystemIp6StatsStats#reasmoks}
  */
  readonly reasmoks?: number;
  /**
  * Incoming reassembly requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#reasmreqds DataThunderSystemIp6StatsStats#reasmreqds}
  */
  readonly reasmreqds?: number;
  /**
  * Reassembly timed out packet drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#reasmtimeout DataThunderSystemIp6StatsStats#reasmtimeout}
  */
  readonly reasmtimeout?: number;
}

export function dataThunderSystemIp6StatsStatsStatsToTerraform(struct?: DataThunderSystemIp6StatsStatsStatsOutputReference | DataThunderSystemIp6StatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fragcreates: cdktf.numberToTerraform(struct!.fragcreates),
    fragfails: cdktf.numberToTerraform(struct!.fragfails),
    fragoks: cdktf.numberToTerraform(struct!.fragoks),
    inaddrerrors: cdktf.numberToTerraform(struct!.inaddrerrors),
    indelivers: cdktf.numberToTerraform(struct!.indelivers),
    indiscards: cdktf.numberToTerraform(struct!.indiscards),
    inhdrerrors: cdktf.numberToTerraform(struct!.inhdrerrors),
    inmcastpkts: cdktf.numberToTerraform(struct!.inmcastpkts),
    innoroutes: cdktf.numberToTerraform(struct!.innoroutes),
    inreceives: cdktf.numberToTerraform(struct!.inreceives),
    intoobigerrors: cdktf.numberToTerraform(struct!.intoobigerrors),
    intruncatedpkts: cdktf.numberToTerraform(struct!.intruncatedpkts),
    inunknownprotos: cdktf.numberToTerraform(struct!.inunknownprotos),
    outdiscards: cdktf.numberToTerraform(struct!.outdiscards),
    outforwdatagrams: cdktf.numberToTerraform(struct!.outforwdatagrams),
    outmcastpkts: cdktf.numberToTerraform(struct!.outmcastpkts),
    outnoroutes: cdktf.numberToTerraform(struct!.outnoroutes),
    outrequests: cdktf.numberToTerraform(struct!.outrequests),
    reasmfails: cdktf.numberToTerraform(struct!.reasmfails),
    reasmoks: cdktf.numberToTerraform(struct!.reasmoks),
    reasmreqds: cdktf.numberToTerraform(struct!.reasmreqds),
    reasmtimeout: cdktf.numberToTerraform(struct!.reasmtimeout),
  }
}


export function dataThunderSystemIp6StatsStatsStatsToHclTerraform(struct?: DataThunderSystemIp6StatsStatsStatsOutputReference | DataThunderSystemIp6StatsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fragcreates: {
      value: cdktf.numberToHclTerraform(struct!.fragcreates),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragfails: {
      value: cdktf.numberToHclTerraform(struct!.fragfails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragoks: {
      value: cdktf.numberToHclTerraform(struct!.fragoks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inaddrerrors: {
      value: cdktf.numberToHclTerraform(struct!.inaddrerrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indelivers: {
      value: cdktf.numberToHclTerraform(struct!.indelivers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indiscards: {
      value: cdktf.numberToHclTerraform(struct!.indiscards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inhdrerrors: {
      value: cdktf.numberToHclTerraform(struct!.inhdrerrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inmcastpkts: {
      value: cdktf.numberToHclTerraform(struct!.inmcastpkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innoroutes: {
      value: cdktf.numberToHclTerraform(struct!.innoroutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inreceives: {
      value: cdktf.numberToHclTerraform(struct!.inreceives),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intoobigerrors: {
      value: cdktf.numberToHclTerraform(struct!.intoobigerrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intruncatedpkts: {
      value: cdktf.numberToHclTerraform(struct!.intruncatedpkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inunknownprotos: {
      value: cdktf.numberToHclTerraform(struct!.inunknownprotos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outdiscards: {
      value: cdktf.numberToHclTerraform(struct!.outdiscards),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outforwdatagrams: {
      value: cdktf.numberToHclTerraform(struct!.outforwdatagrams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outmcastpkts: {
      value: cdktf.numberToHclTerraform(struct!.outmcastpkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outnoroutes: {
      value: cdktf.numberToHclTerraform(struct!.outnoroutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrequests: {
      value: cdktf.numberToHclTerraform(struct!.outrequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reasmfails: {
      value: cdktf.numberToHclTerraform(struct!.reasmfails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reasmoks: {
      value: cdktf.numberToHclTerraform(struct!.reasmoks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reasmreqds: {
      value: cdktf.numberToHclTerraform(struct!.reasmreqds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reasmtimeout: {
      value: cdktf.numberToHclTerraform(struct!.reasmtimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemIp6StatsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemIp6StatsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fragcreates !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragcreates = this._fragcreates;
    }
    if (this._fragfails !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragfails = this._fragfails;
    }
    if (this._fragoks !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragoks = this._fragoks;
    }
    if (this._inaddrerrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.inaddrerrors = this._inaddrerrors;
    }
    if (this._indelivers !== undefined) {
      hasAnyValues = true;
      internalValueResult.indelivers = this._indelivers;
    }
    if (this._indiscards !== undefined) {
      hasAnyValues = true;
      internalValueResult.indiscards = this._indiscards;
    }
    if (this._inhdrerrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.inhdrerrors = this._inhdrerrors;
    }
    if (this._inmcastpkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.inmcastpkts = this._inmcastpkts;
    }
    if (this._innoroutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.innoroutes = this._innoroutes;
    }
    if (this._inreceives !== undefined) {
      hasAnyValues = true;
      internalValueResult.inreceives = this._inreceives;
    }
    if (this._intoobigerrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.intoobigerrors = this._intoobigerrors;
    }
    if (this._intruncatedpkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.intruncatedpkts = this._intruncatedpkts;
    }
    if (this._inunknownprotos !== undefined) {
      hasAnyValues = true;
      internalValueResult.inunknownprotos = this._inunknownprotos;
    }
    if (this._outdiscards !== undefined) {
      hasAnyValues = true;
      internalValueResult.outdiscards = this._outdiscards;
    }
    if (this._outforwdatagrams !== undefined) {
      hasAnyValues = true;
      internalValueResult.outforwdatagrams = this._outforwdatagrams;
    }
    if (this._outmcastpkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.outmcastpkts = this._outmcastpkts;
    }
    if (this._outnoroutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outnoroutes = this._outnoroutes;
    }
    if (this._outrequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrequests = this._outrequests;
    }
    if (this._reasmfails !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasmfails = this._reasmfails;
    }
    if (this._reasmoks !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasmoks = this._reasmoks;
    }
    if (this._reasmreqds !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasmreqds = this._reasmreqds;
    }
    if (this._reasmtimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasmtimeout = this._reasmtimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemIp6StatsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fragcreates = undefined;
      this._fragfails = undefined;
      this._fragoks = undefined;
      this._inaddrerrors = undefined;
      this._indelivers = undefined;
      this._indiscards = undefined;
      this._inhdrerrors = undefined;
      this._inmcastpkts = undefined;
      this._innoroutes = undefined;
      this._inreceives = undefined;
      this._intoobigerrors = undefined;
      this._intruncatedpkts = undefined;
      this._inunknownprotos = undefined;
      this._outdiscards = undefined;
      this._outforwdatagrams = undefined;
      this._outmcastpkts = undefined;
      this._outnoroutes = undefined;
      this._outrequests = undefined;
      this._reasmfails = undefined;
      this._reasmoks = undefined;
      this._reasmreqds = undefined;
      this._reasmtimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fragcreates = value.fragcreates;
      this._fragfails = value.fragfails;
      this._fragoks = value.fragoks;
      this._inaddrerrors = value.inaddrerrors;
      this._indelivers = value.indelivers;
      this._indiscards = value.indiscards;
      this._inhdrerrors = value.inhdrerrors;
      this._inmcastpkts = value.inmcastpkts;
      this._innoroutes = value.innoroutes;
      this._inreceives = value.inreceives;
      this._intoobigerrors = value.intoobigerrors;
      this._intruncatedpkts = value.intruncatedpkts;
      this._inunknownprotos = value.inunknownprotos;
      this._outdiscards = value.outdiscards;
      this._outforwdatagrams = value.outforwdatagrams;
      this._outmcastpkts = value.outmcastpkts;
      this._outnoroutes = value.outnoroutes;
      this._outrequests = value.outrequests;
      this._reasmfails = value.reasmfails;
      this._reasmoks = value.reasmoks;
      this._reasmreqds = value.reasmreqds;
      this._reasmtimeout = value.reasmtimeout;
    }
  }

  // fragcreates - computed: false, optional: true, required: false
  private _fragcreates?: number; 
  public get fragcreates() {
    return this.getNumberAttribute('fragcreates');
  }
  public set fragcreates(value: number) {
    this._fragcreates = value;
  }
  public resetFragcreates() {
    this._fragcreates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragcreatesInput() {
    return this._fragcreates;
  }

  // fragfails - computed: false, optional: true, required: false
  private _fragfails?: number; 
  public get fragfails() {
    return this.getNumberAttribute('fragfails');
  }
  public set fragfails(value: number) {
    this._fragfails = value;
  }
  public resetFragfails() {
    this._fragfails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragfailsInput() {
    return this._fragfails;
  }

  // fragoks - computed: false, optional: true, required: false
  private _fragoks?: number; 
  public get fragoks() {
    return this.getNumberAttribute('fragoks');
  }
  public set fragoks(value: number) {
    this._fragoks = value;
  }
  public resetFragoks() {
    this._fragoks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragoksInput() {
    return this._fragoks;
  }

  // inaddrerrors - computed: false, optional: true, required: false
  private _inaddrerrors?: number; 
  public get inaddrerrors() {
    return this.getNumberAttribute('inaddrerrors');
  }
  public set inaddrerrors(value: number) {
    this._inaddrerrors = value;
  }
  public resetInaddrerrors() {
    this._inaddrerrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inaddrerrorsInput() {
    return this._inaddrerrors;
  }

  // indelivers - computed: false, optional: true, required: false
  private _indelivers?: number; 
  public get indelivers() {
    return this.getNumberAttribute('indelivers');
  }
  public set indelivers(value: number) {
    this._indelivers = value;
  }
  public resetIndelivers() {
    this._indelivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indeliversInput() {
    return this._indelivers;
  }

  // indiscards - computed: false, optional: true, required: false
  private _indiscards?: number; 
  public get indiscards() {
    return this.getNumberAttribute('indiscards');
  }
  public set indiscards(value: number) {
    this._indiscards = value;
  }
  public resetIndiscards() {
    this._indiscards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indiscardsInput() {
    return this._indiscards;
  }

  // inhdrerrors - computed: false, optional: true, required: false
  private _inhdrerrors?: number; 
  public get inhdrerrors() {
    return this.getNumberAttribute('inhdrerrors');
  }
  public set inhdrerrors(value: number) {
    this._inhdrerrors = value;
  }
  public resetInhdrerrors() {
    this._inhdrerrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inhdrerrorsInput() {
    return this._inhdrerrors;
  }

  // inmcastpkts - computed: false, optional: true, required: false
  private _inmcastpkts?: number; 
  public get inmcastpkts() {
    return this.getNumberAttribute('inmcastpkts');
  }
  public set inmcastpkts(value: number) {
    this._inmcastpkts = value;
  }
  public resetInmcastpkts() {
    this._inmcastpkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inmcastpktsInput() {
    return this._inmcastpkts;
  }

  // innoroutes - computed: false, optional: true, required: false
  private _innoroutes?: number; 
  public get innoroutes() {
    return this.getNumberAttribute('innoroutes');
  }
  public set innoroutes(value: number) {
    this._innoroutes = value;
  }
  public resetInnoroutes() {
    this._innoroutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innoroutesInput() {
    return this._innoroutes;
  }

  // inreceives - computed: false, optional: true, required: false
  private _inreceives?: number; 
  public get inreceives() {
    return this.getNumberAttribute('inreceives');
  }
  public set inreceives(value: number) {
    this._inreceives = value;
  }
  public resetInreceives() {
    this._inreceives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inreceivesInput() {
    return this._inreceives;
  }

  // intoobigerrors - computed: false, optional: true, required: false
  private _intoobigerrors?: number; 
  public get intoobigerrors() {
    return this.getNumberAttribute('intoobigerrors');
  }
  public set intoobigerrors(value: number) {
    this._intoobigerrors = value;
  }
  public resetIntoobigerrors() {
    this._intoobigerrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intoobigerrorsInput() {
    return this._intoobigerrors;
  }

  // intruncatedpkts - computed: false, optional: true, required: false
  private _intruncatedpkts?: number; 
  public get intruncatedpkts() {
    return this.getNumberAttribute('intruncatedpkts');
  }
  public set intruncatedpkts(value: number) {
    this._intruncatedpkts = value;
  }
  public resetIntruncatedpkts() {
    this._intruncatedpkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intruncatedpktsInput() {
    return this._intruncatedpkts;
  }

  // inunknownprotos - computed: false, optional: true, required: false
  private _inunknownprotos?: number; 
  public get inunknownprotos() {
    return this.getNumberAttribute('inunknownprotos');
  }
  public set inunknownprotos(value: number) {
    this._inunknownprotos = value;
  }
  public resetInunknownprotos() {
    this._inunknownprotos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inunknownprotosInput() {
    return this._inunknownprotos;
  }

  // outdiscards - computed: false, optional: true, required: false
  private _outdiscards?: number; 
  public get outdiscards() {
    return this.getNumberAttribute('outdiscards');
  }
  public set outdiscards(value: number) {
    this._outdiscards = value;
  }
  public resetOutdiscards() {
    this._outdiscards = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outdiscardsInput() {
    return this._outdiscards;
  }

  // outforwdatagrams - computed: false, optional: true, required: false
  private _outforwdatagrams?: number; 
  public get outforwdatagrams() {
    return this.getNumberAttribute('outforwdatagrams');
  }
  public set outforwdatagrams(value: number) {
    this._outforwdatagrams = value;
  }
  public resetOutforwdatagrams() {
    this._outforwdatagrams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outforwdatagramsInput() {
    return this._outforwdatagrams;
  }

  // outmcastpkts - computed: false, optional: true, required: false
  private _outmcastpkts?: number; 
  public get outmcastpkts() {
    return this.getNumberAttribute('outmcastpkts');
  }
  public set outmcastpkts(value: number) {
    this._outmcastpkts = value;
  }
  public resetOutmcastpkts() {
    this._outmcastpkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outmcastpktsInput() {
    return this._outmcastpkts;
  }

  // outnoroutes - computed: false, optional: true, required: false
  private _outnoroutes?: number; 
  public get outnoroutes() {
    return this.getNumberAttribute('outnoroutes');
  }
  public set outnoroutes(value: number) {
    this._outnoroutes = value;
  }
  public resetOutnoroutes() {
    this._outnoroutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outnoroutesInput() {
    return this._outnoroutes;
  }

  // outrequests - computed: false, optional: true, required: false
  private _outrequests?: number; 
  public get outrequests() {
    return this.getNumberAttribute('outrequests');
  }
  public set outrequests(value: number) {
    this._outrequests = value;
  }
  public resetOutrequests() {
    this._outrequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrequestsInput() {
    return this._outrequests;
  }

  // reasmfails - computed: false, optional: true, required: false
  private _reasmfails?: number; 
  public get reasmfails() {
    return this.getNumberAttribute('reasmfails');
  }
  public set reasmfails(value: number) {
    this._reasmfails = value;
  }
  public resetReasmfails() {
    this._reasmfails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasmfailsInput() {
    return this._reasmfails;
  }

  // reasmoks - computed: false, optional: true, required: false
  private _reasmoks?: number; 
  public get reasmoks() {
    return this.getNumberAttribute('reasmoks');
  }
  public set reasmoks(value: number) {
    this._reasmoks = value;
  }
  public resetReasmoks() {
    this._reasmoks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasmoksInput() {
    return this._reasmoks;
  }

  // reasmreqds - computed: false, optional: true, required: false
  private _reasmreqds?: number; 
  public get reasmreqds() {
    return this.getNumberAttribute('reasmreqds');
  }
  public set reasmreqds(value: number) {
    this._reasmreqds = value;
  }
  public resetReasmreqds() {
    this._reasmreqds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasmreqdsInput() {
    return this._reasmreqds;
  }

  // reasmtimeout - computed: false, optional: true, required: false
  private _reasmtimeout?: number; 
  public get reasmtimeout() {
    return this.getNumberAttribute('reasmtimeout');
  }
  public set reasmtimeout(value: number) {
    this._reasmtimeout = value;
  }
  public resetReasmtimeout() {
    this._reasmtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasmtimeoutInput() {
    return this._reasmtimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats thunder_system_ip6_stats_stats}
*/
export class DataThunderSystemIp6StatsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ip6_stats_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemIp6StatsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemIp6StatsStats to import
  * @param importFromId The id of the existing DataThunderSystemIp6StatsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemIp6StatsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ip6_stats_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_ip6_stats_stats thunder_system_ip6_stats_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemIp6StatsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemIp6StatsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ip6_stats_stats',
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
  private _stats = new DataThunderSystemIp6StatsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemIp6StatsStatsStats) {
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
      stats: dataThunderSystemIp6StatsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemIp6StatsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemIp6StatsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
