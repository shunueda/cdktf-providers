// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateLidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable DDoS Protection (Multiplier of the downlink PPS)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#ddos_protection_factor TemplateLid#ddos_protection_factor}
  */
  readonly ddosProtectionFactor?: number;
  /**
  * Downlink PPS limit (Number of Packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#downlink_pps TemplateLid#downlink_pps}
  */
  readonly downlinkPps?: number;
  /**
  * Downlink Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#downlink_throughput TemplateLid#downlink_throughput}
  */
  readonly downlinkThroughput?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#id TemplateLid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lid Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#lid_number TemplateLid#lid_number}
  */
  readonly lidNumber: number;
  /**
  * Enable Connections Per Second Rate Limit (Number of Connections per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#limit_cps TemplateLid#limit_cps}
  */
  readonly limitCps?: number;
  /**
  * 'limit-pps': Enable Packets Per Second Rate Limit; 'limit-throughput': Enable Throughput Rate Limit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#limit_rate TemplateLid#limit_rate}
  */
  readonly limitRate?: string;
  /**
  * Use the user's source MAC for the next hop rather than the routing table (default:off)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#respond_to_user_mac TemplateLid#respond_to_user_mac}
  */
  readonly respondToUserMac?: number;
  /**
  * Total PPS limit (Number of Packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#total_pps TemplateLid#total_pps}
  */
  readonly totalPps?: number;
  /**
  * Total Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#total_throughput TemplateLid#total_throughput}
  */
  readonly totalThroughput?: number;
  /**
  * Uplink PPS limit (Number of Packets per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#uplink_pps TemplateLid#uplink_pps}
  */
  readonly uplinkPps?: number;
  /**
  * Uplink Throughput limit (Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#uplink_throughput TemplateLid#uplink_throughput}
  */
  readonly uplinkThroughput?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#user_tag TemplateLid#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#uuid TemplateLid#uuid}
  */
  readonly uuid?: string;
  /**
  * src_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#src_ip TemplateLid#src_ip}
  */
  readonly srcIp?: TemplateLidSrcIp;
}
export interface TemplateLidSrcIp {
  /**
  * CPS Token Bucket Size (Must Exceed Configured Rate) (In Connections per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#burstsize_cps TemplateLid#burstsize_cps}
  */
  readonly burstsizeCps?: number;
  /**
  * Downlink PPS Token Bucket Size (Must Exceed Configured Rate) (In Packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#burstsize_downlink_pps TemplateLid#burstsize_downlink_pps}
  */
  readonly burstsizeDownlinkPps?: number;
  /**
  * Downlink Throughput Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#burstsize_downlink_throughput TemplateLid#burstsize_downlink_throughput}
  */
  readonly burstsizeDownlinkThroughput?: number;
  /**
  * Total PPS Token Bucket Size (Must Exceed Configured Rate) (In Packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#burstsize_total_pps TemplateLid#burstsize_total_pps}
  */
  readonly burstsizeTotalPps?: number;
  /**
  * Total Throughput Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#burstsize_total_throughput TemplateLid#burstsize_total_throughput}
  */
  readonly burstsizeTotalThroughput?: number;
  /**
  * Uplink PPS Token Bucket Size (Must Exceed Configured Rate) (In Packets)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#burstsize_uplink_pps TemplateLid#burstsize_uplink_pps}
  */
  readonly burstsizeUplinkPps?: number;
  /**
  * Uplink Throughput Token Bucket Size (Must Exceed Configured Rate) (In Mega Bits per second)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#burstsize_uplink_throughput TemplateLid#burstsize_uplink_throughput}
  */
  readonly burstsizeUplinkThroughput?: number;
  /**
  * Concurrent Session Limit per Source IP Address (Number of Concurrent Sessions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#concurrent_sessions TemplateLid#concurrent_sessions}
  */
  readonly concurrentSessions?: number;
  /**
  * Log when Session Limit is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#log TemplateLid#log}
  */
  readonly log?: number;
  /**
  * Source prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#prefix_length TemplateLid#prefix_length}
  */
  readonly prefixLength?: number;
}

export function templateLidSrcIpToTerraform(struct?: TemplateLidSrcIpOutputReference | TemplateLidSrcIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burstsize_cps: cdktf.numberToTerraform(struct!.burstsizeCps),
    burstsize_downlink_pps: cdktf.numberToTerraform(struct!.burstsizeDownlinkPps),
    burstsize_downlink_throughput: cdktf.numberToTerraform(struct!.burstsizeDownlinkThroughput),
    burstsize_total_pps: cdktf.numberToTerraform(struct!.burstsizeTotalPps),
    burstsize_total_throughput: cdktf.numberToTerraform(struct!.burstsizeTotalThroughput),
    burstsize_uplink_pps: cdktf.numberToTerraform(struct!.burstsizeUplinkPps),
    burstsize_uplink_throughput: cdktf.numberToTerraform(struct!.burstsizeUplinkThroughput),
    concurrent_sessions: cdktf.numberToTerraform(struct!.concurrentSessions),
    log: cdktf.numberToTerraform(struct!.log),
    prefix_length: cdktf.numberToTerraform(struct!.prefixLength),
  }
}


export function templateLidSrcIpToHclTerraform(struct?: TemplateLidSrcIpOutputReference | TemplateLidSrcIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burstsize_cps: {
      value: cdktf.numberToHclTerraform(struct!.burstsizeCps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burstsize_downlink_pps: {
      value: cdktf.numberToHclTerraform(struct!.burstsizeDownlinkPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burstsize_downlink_throughput: {
      value: cdktf.numberToHclTerraform(struct!.burstsizeDownlinkThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burstsize_total_pps: {
      value: cdktf.numberToHclTerraform(struct!.burstsizeTotalPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burstsize_total_throughput: {
      value: cdktf.numberToHclTerraform(struct!.burstsizeTotalThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burstsize_uplink_pps: {
      value: cdktf.numberToHclTerraform(struct!.burstsizeUplinkPps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    burstsize_uplink_throughput: {
      value: cdktf.numberToHclTerraform(struct!.burstsizeUplinkThroughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_sessions: {
      value: cdktf.numberToHclTerraform(struct!.concurrentSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.numberToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.prefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemplateLidSrcIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemplateLidSrcIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstsizeCps !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsizeCps = this._burstsizeCps;
    }
    if (this._burstsizeDownlinkPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsizeDownlinkPps = this._burstsizeDownlinkPps;
    }
    if (this._burstsizeDownlinkThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsizeDownlinkThroughput = this._burstsizeDownlinkThroughput;
    }
    if (this._burstsizeTotalPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsizeTotalPps = this._burstsizeTotalPps;
    }
    if (this._burstsizeTotalThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsizeTotalThroughput = this._burstsizeTotalThroughput;
    }
    if (this._burstsizeUplinkPps !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsizeUplinkPps = this._burstsizeUplinkPps;
    }
    if (this._burstsizeUplinkThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstsizeUplinkThroughput = this._burstsizeUplinkThroughput;
    }
    if (this._concurrentSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentSessions = this._concurrentSessions;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._prefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLength = this._prefixLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemplateLidSrcIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burstsizeCps = undefined;
      this._burstsizeDownlinkPps = undefined;
      this._burstsizeDownlinkThroughput = undefined;
      this._burstsizeTotalPps = undefined;
      this._burstsizeTotalThroughput = undefined;
      this._burstsizeUplinkPps = undefined;
      this._burstsizeUplinkThroughput = undefined;
      this._concurrentSessions = undefined;
      this._log = undefined;
      this._prefixLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burstsizeCps = value.burstsizeCps;
      this._burstsizeDownlinkPps = value.burstsizeDownlinkPps;
      this._burstsizeDownlinkThroughput = value.burstsizeDownlinkThroughput;
      this._burstsizeTotalPps = value.burstsizeTotalPps;
      this._burstsizeTotalThroughput = value.burstsizeTotalThroughput;
      this._burstsizeUplinkPps = value.burstsizeUplinkPps;
      this._burstsizeUplinkThroughput = value.burstsizeUplinkThroughput;
      this._concurrentSessions = value.concurrentSessions;
      this._log = value.log;
      this._prefixLength = value.prefixLength;
    }
  }

  // burstsize_cps - computed: false, optional: true, required: false
  private _burstsizeCps?: number; 
  public get burstsizeCps() {
    return this.getNumberAttribute('burstsize_cps');
  }
  public set burstsizeCps(value: number) {
    this._burstsizeCps = value;
  }
  public resetBurstsizeCps() {
    this._burstsizeCps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeCpsInput() {
    return this._burstsizeCps;
  }

  // burstsize_downlink_pps - computed: false, optional: true, required: false
  private _burstsizeDownlinkPps?: number; 
  public get burstsizeDownlinkPps() {
    return this.getNumberAttribute('burstsize_downlink_pps');
  }
  public set burstsizeDownlinkPps(value: number) {
    this._burstsizeDownlinkPps = value;
  }
  public resetBurstsizeDownlinkPps() {
    this._burstsizeDownlinkPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeDownlinkPpsInput() {
    return this._burstsizeDownlinkPps;
  }

  // burstsize_downlink_throughput - computed: false, optional: true, required: false
  private _burstsizeDownlinkThroughput?: number; 
  public get burstsizeDownlinkThroughput() {
    return this.getNumberAttribute('burstsize_downlink_throughput');
  }
  public set burstsizeDownlinkThroughput(value: number) {
    this._burstsizeDownlinkThroughput = value;
  }
  public resetBurstsizeDownlinkThroughput() {
    this._burstsizeDownlinkThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeDownlinkThroughputInput() {
    return this._burstsizeDownlinkThroughput;
  }

  // burstsize_total_pps - computed: false, optional: true, required: false
  private _burstsizeTotalPps?: number; 
  public get burstsizeTotalPps() {
    return this.getNumberAttribute('burstsize_total_pps');
  }
  public set burstsizeTotalPps(value: number) {
    this._burstsizeTotalPps = value;
  }
  public resetBurstsizeTotalPps() {
    this._burstsizeTotalPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeTotalPpsInput() {
    return this._burstsizeTotalPps;
  }

  // burstsize_total_throughput - computed: false, optional: true, required: false
  private _burstsizeTotalThroughput?: number; 
  public get burstsizeTotalThroughput() {
    return this.getNumberAttribute('burstsize_total_throughput');
  }
  public set burstsizeTotalThroughput(value: number) {
    this._burstsizeTotalThroughput = value;
  }
  public resetBurstsizeTotalThroughput() {
    this._burstsizeTotalThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeTotalThroughputInput() {
    return this._burstsizeTotalThroughput;
  }

  // burstsize_uplink_pps - computed: false, optional: true, required: false
  private _burstsizeUplinkPps?: number; 
  public get burstsizeUplinkPps() {
    return this.getNumberAttribute('burstsize_uplink_pps');
  }
  public set burstsizeUplinkPps(value: number) {
    this._burstsizeUplinkPps = value;
  }
  public resetBurstsizeUplinkPps() {
    this._burstsizeUplinkPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeUplinkPpsInput() {
    return this._burstsizeUplinkPps;
  }

  // burstsize_uplink_throughput - computed: false, optional: true, required: false
  private _burstsizeUplinkThroughput?: number; 
  public get burstsizeUplinkThroughput() {
    return this.getNumberAttribute('burstsize_uplink_throughput');
  }
  public set burstsizeUplinkThroughput(value: number) {
    this._burstsizeUplinkThroughput = value;
  }
  public resetBurstsizeUplinkThroughput() {
    this._burstsizeUplinkThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstsizeUplinkThroughputInput() {
    return this._burstsizeUplinkThroughput;
  }

  // concurrent_sessions - computed: false, optional: true, required: false
  private _concurrentSessions?: number; 
  public get concurrentSessions() {
    return this.getNumberAttribute('concurrent_sessions');
  }
  public set concurrentSessions(value: number) {
    this._concurrentSessions = value;
  }
  public resetConcurrentSessions() {
    this._concurrentSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentSessionsInput() {
    return this._concurrentSessions;
  }

  // log - computed: false, optional: true, required: false
  private _log?: number; 
  public get log() {
    return this.getNumberAttribute('log');
  }
  public set log(value: number) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid thunder_template_lid}
*/
export class TemplateLid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_template_lid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateLid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateLid to import
  * @param importFromId The id of the existing TemplateLid that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateLid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_template_lid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/template_lid thunder_template_lid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateLidConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateLidConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_template_lid',
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
    this._ddosProtectionFactor = config.ddosProtectionFactor;
    this._downlinkPps = config.downlinkPps;
    this._downlinkThroughput = config.downlinkThroughput;
    this._id = config.id;
    this._lidNumber = config.lidNumber;
    this._limitCps = config.limitCps;
    this._limitRate = config.limitRate;
    this._respondToUserMac = config.respondToUserMac;
    this._totalPps = config.totalPps;
    this._totalThroughput = config.totalThroughput;
    this._uplinkPps = config.uplinkPps;
    this._uplinkThroughput = config.uplinkThroughput;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._srcIp.internalValue = config.srcIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ddos_protection_factor - computed: false, optional: true, required: false
  private _ddosProtectionFactor?: number; 
  public get ddosProtectionFactor() {
    return this.getNumberAttribute('ddos_protection_factor');
  }
  public set ddosProtectionFactor(value: number) {
    this._ddosProtectionFactor = value;
  }
  public resetDdosProtectionFactor() {
    this._ddosProtectionFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosProtectionFactorInput() {
    return this._ddosProtectionFactor;
  }

  // downlink_pps - computed: false, optional: true, required: false
  private _downlinkPps?: number; 
  public get downlinkPps() {
    return this.getNumberAttribute('downlink_pps');
  }
  public set downlinkPps(value: number) {
    this._downlinkPps = value;
  }
  public resetDownlinkPps() {
    this._downlinkPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkPpsInput() {
    return this._downlinkPps;
  }

  // downlink_throughput - computed: false, optional: true, required: false
  private _downlinkThroughput?: number; 
  public get downlinkThroughput() {
    return this.getNumberAttribute('downlink_throughput');
  }
  public set downlinkThroughput(value: number) {
    this._downlinkThroughput = value;
  }
  public resetDownlinkThroughput() {
    this._downlinkThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downlinkThroughputInput() {
    return this._downlinkThroughput;
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

  // lid_number - computed: false, optional: false, required: true
  private _lidNumber?: number; 
  public get lidNumber() {
    return this.getNumberAttribute('lid_number');
  }
  public set lidNumber(value: number) {
    this._lidNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lidNumberInput() {
    return this._lidNumber;
  }

  // limit_cps - computed: false, optional: true, required: false
  private _limitCps?: number; 
  public get limitCps() {
    return this.getNumberAttribute('limit_cps');
  }
  public set limitCps(value: number) {
    this._limitCps = value;
  }
  public resetLimitCps() {
    this._limitCps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpsInput() {
    return this._limitCps;
  }

  // limit_rate - computed: false, optional: true, required: false
  private _limitRate?: string; 
  public get limitRate() {
    return this.getStringAttribute('limit_rate');
  }
  public set limitRate(value: string) {
    this._limitRate = value;
  }
  public resetLimitRate() {
    this._limitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitRateInput() {
    return this._limitRate;
  }

  // respond_to_user_mac - computed: false, optional: true, required: false
  private _respondToUserMac?: number; 
  public get respondToUserMac() {
    return this.getNumberAttribute('respond_to_user_mac');
  }
  public set respondToUserMac(value: number) {
    this._respondToUserMac = value;
  }
  public resetRespondToUserMac() {
    this._respondToUserMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondToUserMacInput() {
    return this._respondToUserMac;
  }

  // total_pps - computed: false, optional: true, required: false
  private _totalPps?: number; 
  public get totalPps() {
    return this.getNumberAttribute('total_pps');
  }
  public set totalPps(value: number) {
    this._totalPps = value;
  }
  public resetTotalPps() {
    this._totalPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPpsInput() {
    return this._totalPps;
  }

  // total_throughput - computed: false, optional: true, required: false
  private _totalThroughput?: number; 
  public get totalThroughput() {
    return this.getNumberAttribute('total_throughput');
  }
  public set totalThroughput(value: number) {
    this._totalThroughput = value;
  }
  public resetTotalThroughput() {
    this._totalThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalThroughputInput() {
    return this._totalThroughput;
  }

  // uplink_pps - computed: false, optional: true, required: false
  private _uplinkPps?: number; 
  public get uplinkPps() {
    return this.getNumberAttribute('uplink_pps');
  }
  public set uplinkPps(value: number) {
    this._uplinkPps = value;
  }
  public resetUplinkPps() {
    this._uplinkPps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkPpsInput() {
    return this._uplinkPps;
  }

  // uplink_throughput - computed: false, optional: true, required: false
  private _uplinkThroughput?: number; 
  public get uplinkThroughput() {
    return this.getNumberAttribute('uplink_throughput');
  }
  public set uplinkThroughput(value: number) {
    this._uplinkThroughput = value;
  }
  public resetUplinkThroughput() {
    this._uplinkThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkThroughputInput() {
    return this._uplinkThroughput;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // src_ip - computed: false, optional: true, required: false
  private _srcIp = new TemplateLidSrcIpOutputReference(this, "src_ip");
  public get srcIp() {
    return this._srcIp;
  }
  public putSrcIp(value: TemplateLidSrcIp) {
    this._srcIp.internalValue = value;
  }
  public resetSrcIp() {
    this._srcIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpInput() {
    return this._srcIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ddos_protection_factor: cdktf.numberToTerraform(this._ddosProtectionFactor),
      downlink_pps: cdktf.numberToTerraform(this._downlinkPps),
      downlink_throughput: cdktf.numberToTerraform(this._downlinkThroughput),
      id: cdktf.stringToTerraform(this._id),
      lid_number: cdktf.numberToTerraform(this._lidNumber),
      limit_cps: cdktf.numberToTerraform(this._limitCps),
      limit_rate: cdktf.stringToTerraform(this._limitRate),
      respond_to_user_mac: cdktf.numberToTerraform(this._respondToUserMac),
      total_pps: cdktf.numberToTerraform(this._totalPps),
      total_throughput: cdktf.numberToTerraform(this._totalThroughput),
      uplink_pps: cdktf.numberToTerraform(this._uplinkPps),
      uplink_throughput: cdktf.numberToTerraform(this._uplinkThroughput),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      src_ip: templateLidSrcIpToTerraform(this._srcIp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ddos_protection_factor: {
        value: cdktf.numberToHclTerraform(this._ddosProtectionFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_pps: {
        value: cdktf.numberToHclTerraform(this._downlinkPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downlink_throughput: {
        value: cdktf.numberToHclTerraform(this._downlinkThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lid_number: {
        value: cdktf.numberToHclTerraform(this._lidNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_cps: {
        value: cdktf.numberToHclTerraform(this._limitCps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_rate: {
        value: cdktf.stringToHclTerraform(this._limitRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      respond_to_user_mac: {
        value: cdktf.numberToHclTerraform(this._respondToUserMac),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_pps: {
        value: cdktf.numberToHclTerraform(this._totalPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      total_throughput: {
        value: cdktf.numberToHclTerraform(this._totalThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_pps: {
        value: cdktf.numberToHclTerraform(this._uplinkPps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uplink_throughput: {
        value: cdktf.numberToHclTerraform(this._uplinkThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      src_ip: {
        value: templateLidSrcIpToHclTerraform(this._srcIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemplateLidSrcIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
