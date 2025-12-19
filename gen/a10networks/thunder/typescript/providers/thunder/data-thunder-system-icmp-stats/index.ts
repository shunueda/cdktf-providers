// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemIcmpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#id DataThunderSystemIcmpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#stats DataThunderSystemIcmpStats#stats}
  */
  readonly stats?: DataThunderSystemIcmpStatsStats;
}
export interface DataThunderSystemIcmpStatsStats {
  /**
  * In Address Mask Rep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inaddrmaskreps DataThunderSystemIcmpStats#inaddrmaskreps}
  */
  readonly inaddrmaskreps?: number;
  /**
  * In Address Masks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inaddrmasks DataThunderSystemIcmpStats#inaddrmasks}
  */
  readonly inaddrmasks?: number;
  /**
  * In Destination Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#indestunreachs DataThunderSystemIcmpStats#indestunreachs}
  */
  readonly indestunreachs?: number;
  /**
  * In Echo replies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inechoreps DataThunderSystemIcmpStats#inechoreps}
  */
  readonly inechoreps?: number;
  /**
  * In Echo requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inechos DataThunderSystemIcmpStats#inechos}
  */
  readonly inechos?: number;
  /**
  * In Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inerrors DataThunderSystemIcmpStats#inerrors}
  */
  readonly inerrors?: number;
  /**
  * In Messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inmsgs DataThunderSystemIcmpStats#inmsgs}
  */
  readonly inmsgs?: number;
  /**
  * In Parameter Problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inparmprobs DataThunderSystemIcmpStats#inparmprobs}
  */
  readonly inparmprobs?: number;
  /**
  * In Redirects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#inredirects DataThunderSystemIcmpStats#inredirects}
  */
  readonly inredirects?: number;
  /**
  * In Source Quench Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#insrcquenchs DataThunderSystemIcmpStats#insrcquenchs}
  */
  readonly insrcquenchs?: number;
  /**
  * In TTL Exceeds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#intimeexcds DataThunderSystemIcmpStats#intimeexcds}
  */
  readonly intimeexcds?: number;
  /**
  * In Timestamp Rep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#intimestampreps DataThunderSystemIcmpStats#intimestampreps}
  */
  readonly intimestampreps?: number;
  /**
  * In Timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#intimestamps DataThunderSystemIcmpStats#intimestamps}
  */
  readonly intimestamps?: number;
  /**
  * Total number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#num DataThunderSystemIcmpStats#num}
  */
  readonly num?: number;
  /**
  * Out Address Mask Rep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outaddrmaskreps DataThunderSystemIcmpStats#outaddrmaskreps}
  */
  readonly outaddrmaskreps?: number;
  /**
  * Out Address Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outaddrmasks DataThunderSystemIcmpStats#outaddrmasks}
  */
  readonly outaddrmasks?: number;
  /**
  * Out Destination Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outdestunreachs DataThunderSystemIcmpStats#outdestunreachs}
  */
  readonly outdestunreachs?: number;
  /**
  * Out Echo Replies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outechoreps DataThunderSystemIcmpStats#outechoreps}
  */
  readonly outechoreps?: number;
  /**
  * Out Echo Requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outechos DataThunderSystemIcmpStats#outechos}
  */
  readonly outechos?: number;
  /**
  * Out Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outerrors DataThunderSystemIcmpStats#outerrors}
  */
  readonly outerrors?: number;
  /**
  * Out Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outmsgs DataThunderSystemIcmpStats#outmsgs}
  */
  readonly outmsgs?: number;
  /**
  * Out Parameter Problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outparmprobs DataThunderSystemIcmpStats#outparmprobs}
  */
  readonly outparmprobs?: number;
  /**
  * Out Redirects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outredirects DataThunderSystemIcmpStats#outredirects}
  */
  readonly outredirects?: number;
  /**
  * Out Source Quench Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outsrcquenchs DataThunderSystemIcmpStats#outsrcquenchs}
  */
  readonly outsrcquenchs?: number;
  /**
  * Out TTL Exceeds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outtimeexcds DataThunderSystemIcmpStats#outtimeexcds}
  */
  readonly outtimeexcds?: number;
  /**
  * Out Time Stamp Rep
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outtimestampreps DataThunderSystemIcmpStats#outtimestampreps}
  */
  readonly outtimestampreps?: number;
  /**
  * Out Time Stamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#outtimestamps DataThunderSystemIcmpStats#outtimestamps}
  */
  readonly outtimestamps?: number;
}

export function dataThunderSystemIcmpStatsStatsToTerraform(struct?: DataThunderSystemIcmpStatsStatsOutputReference | DataThunderSystemIcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inaddrmaskreps: cdktf.numberToTerraform(struct!.inaddrmaskreps),
    inaddrmasks: cdktf.numberToTerraform(struct!.inaddrmasks),
    indestunreachs: cdktf.numberToTerraform(struct!.indestunreachs),
    inechoreps: cdktf.numberToTerraform(struct!.inechoreps),
    inechos: cdktf.numberToTerraform(struct!.inechos),
    inerrors: cdktf.numberToTerraform(struct!.inerrors),
    inmsgs: cdktf.numberToTerraform(struct!.inmsgs),
    inparmprobs: cdktf.numberToTerraform(struct!.inparmprobs),
    inredirects: cdktf.numberToTerraform(struct!.inredirects),
    insrcquenchs: cdktf.numberToTerraform(struct!.insrcquenchs),
    intimeexcds: cdktf.numberToTerraform(struct!.intimeexcds),
    intimestampreps: cdktf.numberToTerraform(struct!.intimestampreps),
    intimestamps: cdktf.numberToTerraform(struct!.intimestamps),
    num: cdktf.numberToTerraform(struct!.num),
    outaddrmaskreps: cdktf.numberToTerraform(struct!.outaddrmaskreps),
    outaddrmasks: cdktf.numberToTerraform(struct!.outaddrmasks),
    outdestunreachs: cdktf.numberToTerraform(struct!.outdestunreachs),
    outechoreps: cdktf.numberToTerraform(struct!.outechoreps),
    outechos: cdktf.numberToTerraform(struct!.outechos),
    outerrors: cdktf.numberToTerraform(struct!.outerrors),
    outmsgs: cdktf.numberToTerraform(struct!.outmsgs),
    outparmprobs: cdktf.numberToTerraform(struct!.outparmprobs),
    outredirects: cdktf.numberToTerraform(struct!.outredirects),
    outsrcquenchs: cdktf.numberToTerraform(struct!.outsrcquenchs),
    outtimeexcds: cdktf.numberToTerraform(struct!.outtimeexcds),
    outtimestampreps: cdktf.numberToTerraform(struct!.outtimestampreps),
    outtimestamps: cdktf.numberToTerraform(struct!.outtimestamps),
  }
}


export function dataThunderSystemIcmpStatsStatsToHclTerraform(struct?: DataThunderSystemIcmpStatsStatsOutputReference | DataThunderSystemIcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inaddrmaskreps: {
      value: cdktf.numberToHclTerraform(struct!.inaddrmaskreps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inaddrmasks: {
      value: cdktf.numberToHclTerraform(struct!.inaddrmasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    indestunreachs: {
      value: cdktf.numberToHclTerraform(struct!.indestunreachs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inechoreps: {
      value: cdktf.numberToHclTerraform(struct!.inechoreps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inechos: {
      value: cdktf.numberToHclTerraform(struct!.inechos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inerrors: {
      value: cdktf.numberToHclTerraform(struct!.inerrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inmsgs: {
      value: cdktf.numberToHclTerraform(struct!.inmsgs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inparmprobs: {
      value: cdktf.numberToHclTerraform(struct!.inparmprobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inredirects: {
      value: cdktf.numberToHclTerraform(struct!.inredirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insrcquenchs: {
      value: cdktf.numberToHclTerraform(struct!.insrcquenchs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intimeexcds: {
      value: cdktf.numberToHclTerraform(struct!.intimeexcds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intimestampreps: {
      value: cdktf.numberToHclTerraform(struct!.intimestampreps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intimestamps: {
      value: cdktf.numberToHclTerraform(struct!.intimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outaddrmaskreps: {
      value: cdktf.numberToHclTerraform(struct!.outaddrmaskreps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outaddrmasks: {
      value: cdktf.numberToHclTerraform(struct!.outaddrmasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outdestunreachs: {
      value: cdktf.numberToHclTerraform(struct!.outdestunreachs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outechoreps: {
      value: cdktf.numberToHclTerraform(struct!.outechoreps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outechos: {
      value: cdktf.numberToHclTerraform(struct!.outechos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outerrors: {
      value: cdktf.numberToHclTerraform(struct!.outerrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outmsgs: {
      value: cdktf.numberToHclTerraform(struct!.outmsgs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outparmprobs: {
      value: cdktf.numberToHclTerraform(struct!.outparmprobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outredirects: {
      value: cdktf.numberToHclTerraform(struct!.outredirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outsrcquenchs: {
      value: cdktf.numberToHclTerraform(struct!.outsrcquenchs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outtimeexcds: {
      value: cdktf.numberToHclTerraform(struct!.outtimeexcds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outtimestampreps: {
      value: cdktf.numberToHclTerraform(struct!.outtimestampreps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outtimestamps: {
      value: cdktf.numberToHclTerraform(struct!.outtimestamps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemIcmpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemIcmpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inaddrmaskreps !== undefined) {
      hasAnyValues = true;
      internalValueResult.inaddrmaskreps = this._inaddrmaskreps;
    }
    if (this._inaddrmasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.inaddrmasks = this._inaddrmasks;
    }
    if (this._indestunreachs !== undefined) {
      hasAnyValues = true;
      internalValueResult.indestunreachs = this._indestunreachs;
    }
    if (this._inechoreps !== undefined) {
      hasAnyValues = true;
      internalValueResult.inechoreps = this._inechoreps;
    }
    if (this._inechos !== undefined) {
      hasAnyValues = true;
      internalValueResult.inechos = this._inechos;
    }
    if (this._inerrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.inerrors = this._inerrors;
    }
    if (this._inmsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inmsgs = this._inmsgs;
    }
    if (this._inparmprobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inparmprobs = this._inparmprobs;
    }
    if (this._inredirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.inredirects = this._inredirects;
    }
    if (this._insrcquenchs !== undefined) {
      hasAnyValues = true;
      internalValueResult.insrcquenchs = this._insrcquenchs;
    }
    if (this._intimeexcds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intimeexcds = this._intimeexcds;
    }
    if (this._intimestampreps !== undefined) {
      hasAnyValues = true;
      internalValueResult.intimestampreps = this._intimestampreps;
    }
    if (this._intimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.intimestamps = this._intimestamps;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._outaddrmaskreps !== undefined) {
      hasAnyValues = true;
      internalValueResult.outaddrmaskreps = this._outaddrmaskreps;
    }
    if (this._outaddrmasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.outaddrmasks = this._outaddrmasks;
    }
    if (this._outdestunreachs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outdestunreachs = this._outdestunreachs;
    }
    if (this._outechoreps !== undefined) {
      hasAnyValues = true;
      internalValueResult.outechoreps = this._outechoreps;
    }
    if (this._outechos !== undefined) {
      hasAnyValues = true;
      internalValueResult.outechos = this._outechos;
    }
    if (this._outerrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.outerrors = this._outerrors;
    }
    if (this._outmsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outmsgs = this._outmsgs;
    }
    if (this._outparmprobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outparmprobs = this._outparmprobs;
    }
    if (this._outredirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.outredirects = this._outredirects;
    }
    if (this._outsrcquenchs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsrcquenchs = this._outsrcquenchs;
    }
    if (this._outtimeexcds !== undefined) {
      hasAnyValues = true;
      internalValueResult.outtimeexcds = this._outtimeexcds;
    }
    if (this._outtimestampreps !== undefined) {
      hasAnyValues = true;
      internalValueResult.outtimestampreps = this._outtimestampreps;
    }
    if (this._outtimestamps !== undefined) {
      hasAnyValues = true;
      internalValueResult.outtimestamps = this._outtimestamps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemIcmpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inaddrmaskreps = undefined;
      this._inaddrmasks = undefined;
      this._indestunreachs = undefined;
      this._inechoreps = undefined;
      this._inechos = undefined;
      this._inerrors = undefined;
      this._inmsgs = undefined;
      this._inparmprobs = undefined;
      this._inredirects = undefined;
      this._insrcquenchs = undefined;
      this._intimeexcds = undefined;
      this._intimestampreps = undefined;
      this._intimestamps = undefined;
      this._num = undefined;
      this._outaddrmaskreps = undefined;
      this._outaddrmasks = undefined;
      this._outdestunreachs = undefined;
      this._outechoreps = undefined;
      this._outechos = undefined;
      this._outerrors = undefined;
      this._outmsgs = undefined;
      this._outparmprobs = undefined;
      this._outredirects = undefined;
      this._outsrcquenchs = undefined;
      this._outtimeexcds = undefined;
      this._outtimestampreps = undefined;
      this._outtimestamps = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inaddrmaskreps = value.inaddrmaskreps;
      this._inaddrmasks = value.inaddrmasks;
      this._indestunreachs = value.indestunreachs;
      this._inechoreps = value.inechoreps;
      this._inechos = value.inechos;
      this._inerrors = value.inerrors;
      this._inmsgs = value.inmsgs;
      this._inparmprobs = value.inparmprobs;
      this._inredirects = value.inredirects;
      this._insrcquenchs = value.insrcquenchs;
      this._intimeexcds = value.intimeexcds;
      this._intimestampreps = value.intimestampreps;
      this._intimestamps = value.intimestamps;
      this._num = value.num;
      this._outaddrmaskreps = value.outaddrmaskreps;
      this._outaddrmasks = value.outaddrmasks;
      this._outdestunreachs = value.outdestunreachs;
      this._outechoreps = value.outechoreps;
      this._outechos = value.outechos;
      this._outerrors = value.outerrors;
      this._outmsgs = value.outmsgs;
      this._outparmprobs = value.outparmprobs;
      this._outredirects = value.outredirects;
      this._outsrcquenchs = value.outsrcquenchs;
      this._outtimeexcds = value.outtimeexcds;
      this._outtimestampreps = value.outtimestampreps;
      this._outtimestamps = value.outtimestamps;
    }
  }

  // inaddrmaskreps - computed: false, optional: true, required: false
  private _inaddrmaskreps?: number; 
  public get inaddrmaskreps() {
    return this.getNumberAttribute('inaddrmaskreps');
  }
  public set inaddrmaskreps(value: number) {
    this._inaddrmaskreps = value;
  }
  public resetInaddrmaskreps() {
    this._inaddrmaskreps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inaddrmaskrepsInput() {
    return this._inaddrmaskreps;
  }

  // inaddrmasks - computed: false, optional: true, required: false
  private _inaddrmasks?: number; 
  public get inaddrmasks() {
    return this.getNumberAttribute('inaddrmasks');
  }
  public set inaddrmasks(value: number) {
    this._inaddrmasks = value;
  }
  public resetInaddrmasks() {
    this._inaddrmasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inaddrmasksInput() {
    return this._inaddrmasks;
  }

  // indestunreachs - computed: false, optional: true, required: false
  private _indestunreachs?: number; 
  public get indestunreachs() {
    return this.getNumberAttribute('indestunreachs');
  }
  public set indestunreachs(value: number) {
    this._indestunreachs = value;
  }
  public resetIndestunreachs() {
    this._indestunreachs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indestunreachsInput() {
    return this._indestunreachs;
  }

  // inechoreps - computed: false, optional: true, required: false
  private _inechoreps?: number; 
  public get inechoreps() {
    return this.getNumberAttribute('inechoreps');
  }
  public set inechoreps(value: number) {
    this._inechoreps = value;
  }
  public resetInechoreps() {
    this._inechoreps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inechorepsInput() {
    return this._inechoreps;
  }

  // inechos - computed: false, optional: true, required: false
  private _inechos?: number; 
  public get inechos() {
    return this.getNumberAttribute('inechos');
  }
  public set inechos(value: number) {
    this._inechos = value;
  }
  public resetInechos() {
    this._inechos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inechosInput() {
    return this._inechos;
  }

  // inerrors - computed: false, optional: true, required: false
  private _inerrors?: number; 
  public get inerrors() {
    return this.getNumberAttribute('inerrors');
  }
  public set inerrors(value: number) {
    this._inerrors = value;
  }
  public resetInerrors() {
    this._inerrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inerrorsInput() {
    return this._inerrors;
  }

  // inmsgs - computed: false, optional: true, required: false
  private _inmsgs?: number; 
  public get inmsgs() {
    return this.getNumberAttribute('inmsgs');
  }
  public set inmsgs(value: number) {
    this._inmsgs = value;
  }
  public resetInmsgs() {
    this._inmsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inmsgsInput() {
    return this._inmsgs;
  }

  // inparmprobs - computed: false, optional: true, required: false
  private _inparmprobs?: number; 
  public get inparmprobs() {
    return this.getNumberAttribute('inparmprobs');
  }
  public set inparmprobs(value: number) {
    this._inparmprobs = value;
  }
  public resetInparmprobs() {
    this._inparmprobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inparmprobsInput() {
    return this._inparmprobs;
  }

  // inredirects - computed: false, optional: true, required: false
  private _inredirects?: number; 
  public get inredirects() {
    return this.getNumberAttribute('inredirects');
  }
  public set inredirects(value: number) {
    this._inredirects = value;
  }
  public resetInredirects() {
    this._inredirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inredirectsInput() {
    return this._inredirects;
  }

  // insrcquenchs - computed: false, optional: true, required: false
  private _insrcquenchs?: number; 
  public get insrcquenchs() {
    return this.getNumberAttribute('insrcquenchs');
  }
  public set insrcquenchs(value: number) {
    this._insrcquenchs = value;
  }
  public resetInsrcquenchs() {
    this._insrcquenchs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insrcquenchsInput() {
    return this._insrcquenchs;
  }

  // intimeexcds - computed: false, optional: true, required: false
  private _intimeexcds?: number; 
  public get intimeexcds() {
    return this.getNumberAttribute('intimeexcds');
  }
  public set intimeexcds(value: number) {
    this._intimeexcds = value;
  }
  public resetIntimeexcds() {
    this._intimeexcds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intimeexcdsInput() {
    return this._intimeexcds;
  }

  // intimestampreps - computed: false, optional: true, required: false
  private _intimestampreps?: number; 
  public get intimestampreps() {
    return this.getNumberAttribute('intimestampreps');
  }
  public set intimestampreps(value: number) {
    this._intimestampreps = value;
  }
  public resetIntimestampreps() {
    this._intimestampreps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intimestamprepsInput() {
    return this._intimestampreps;
  }

  // intimestamps - computed: false, optional: true, required: false
  private _intimestamps?: number; 
  public get intimestamps() {
    return this.getNumberAttribute('intimestamps');
  }
  public set intimestamps(value: number) {
    this._intimestamps = value;
  }
  public resetIntimestamps() {
    this._intimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intimestampsInput() {
    return this._intimestamps;
  }

  // num - computed: false, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // outaddrmaskreps - computed: false, optional: true, required: false
  private _outaddrmaskreps?: number; 
  public get outaddrmaskreps() {
    return this.getNumberAttribute('outaddrmaskreps');
  }
  public set outaddrmaskreps(value: number) {
    this._outaddrmaskreps = value;
  }
  public resetOutaddrmaskreps() {
    this._outaddrmaskreps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outaddrmaskrepsInput() {
    return this._outaddrmaskreps;
  }

  // outaddrmasks - computed: false, optional: true, required: false
  private _outaddrmasks?: number; 
  public get outaddrmasks() {
    return this.getNumberAttribute('outaddrmasks');
  }
  public set outaddrmasks(value: number) {
    this._outaddrmasks = value;
  }
  public resetOutaddrmasks() {
    this._outaddrmasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outaddrmasksInput() {
    return this._outaddrmasks;
  }

  // outdestunreachs - computed: false, optional: true, required: false
  private _outdestunreachs?: number; 
  public get outdestunreachs() {
    return this.getNumberAttribute('outdestunreachs');
  }
  public set outdestunreachs(value: number) {
    this._outdestunreachs = value;
  }
  public resetOutdestunreachs() {
    this._outdestunreachs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outdestunreachsInput() {
    return this._outdestunreachs;
  }

  // outechoreps - computed: false, optional: true, required: false
  private _outechoreps?: number; 
  public get outechoreps() {
    return this.getNumberAttribute('outechoreps');
  }
  public set outechoreps(value: number) {
    this._outechoreps = value;
  }
  public resetOutechoreps() {
    this._outechoreps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outechorepsInput() {
    return this._outechoreps;
  }

  // outechos - computed: false, optional: true, required: false
  private _outechos?: number; 
  public get outechos() {
    return this.getNumberAttribute('outechos');
  }
  public set outechos(value: number) {
    this._outechos = value;
  }
  public resetOutechos() {
    this._outechos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outechosInput() {
    return this._outechos;
  }

  // outerrors - computed: false, optional: true, required: false
  private _outerrors?: number; 
  public get outerrors() {
    return this.getNumberAttribute('outerrors');
  }
  public set outerrors(value: number) {
    this._outerrors = value;
  }
  public resetOuterrors() {
    this._outerrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerrorsInput() {
    return this._outerrors;
  }

  // outmsgs - computed: false, optional: true, required: false
  private _outmsgs?: number; 
  public get outmsgs() {
    return this.getNumberAttribute('outmsgs');
  }
  public set outmsgs(value: number) {
    this._outmsgs = value;
  }
  public resetOutmsgs() {
    this._outmsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outmsgsInput() {
    return this._outmsgs;
  }

  // outparmprobs - computed: false, optional: true, required: false
  private _outparmprobs?: number; 
  public get outparmprobs() {
    return this.getNumberAttribute('outparmprobs');
  }
  public set outparmprobs(value: number) {
    this._outparmprobs = value;
  }
  public resetOutparmprobs() {
    this._outparmprobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outparmprobsInput() {
    return this._outparmprobs;
  }

  // outredirects - computed: false, optional: true, required: false
  private _outredirects?: number; 
  public get outredirects() {
    return this.getNumberAttribute('outredirects');
  }
  public set outredirects(value: number) {
    this._outredirects = value;
  }
  public resetOutredirects() {
    this._outredirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outredirectsInput() {
    return this._outredirects;
  }

  // outsrcquenchs - computed: false, optional: true, required: false
  private _outsrcquenchs?: number; 
  public get outsrcquenchs() {
    return this.getNumberAttribute('outsrcquenchs');
  }
  public set outsrcquenchs(value: number) {
    this._outsrcquenchs = value;
  }
  public resetOutsrcquenchs() {
    this._outsrcquenchs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsrcquenchsInput() {
    return this._outsrcquenchs;
  }

  // outtimeexcds - computed: false, optional: true, required: false
  private _outtimeexcds?: number; 
  public get outtimeexcds() {
    return this.getNumberAttribute('outtimeexcds');
  }
  public set outtimeexcds(value: number) {
    this._outtimeexcds = value;
  }
  public resetOuttimeexcds() {
    this._outtimeexcds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outtimeexcdsInput() {
    return this._outtimeexcds;
  }

  // outtimestampreps - computed: false, optional: true, required: false
  private _outtimestampreps?: number; 
  public get outtimestampreps() {
    return this.getNumberAttribute('outtimestampreps');
  }
  public set outtimestampreps(value: number) {
    this._outtimestampreps = value;
  }
  public resetOuttimestampreps() {
    this._outtimestampreps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outtimestamprepsInput() {
    return this._outtimestampreps;
  }

  // outtimestamps - computed: false, optional: true, required: false
  private _outtimestamps?: number; 
  public get outtimestamps() {
    return this.getNumberAttribute('outtimestamps');
  }
  public set outtimestamps(value: number) {
    this._outtimestamps = value;
  }
  public resetOuttimestamps() {
    this._outtimestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outtimestampsInput() {
    return this._outtimestamps;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats thunder_system_icmp_stats}
*/
export class DataThunderSystemIcmpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_icmp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemIcmpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemIcmpStats to import
  * @param importFromId The id of the existing DataThunderSystemIcmpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemIcmpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_icmp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_icmp_stats thunder_system_icmp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemIcmpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemIcmpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_icmp_stats',
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
  private _stats = new DataThunderSystemIcmpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemIcmpStatsStats) {
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
      stats: dataThunderSystemIcmpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemIcmpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemIcmpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
