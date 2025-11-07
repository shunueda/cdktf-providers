// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlowspecFilteringActionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#copy_ip_host FlowspecFilteringActionA#copy_ip_host}
  */
  readonly copyIpHost?: number;
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#copy_ip_host_nlri FlowspecFilteringActionA#copy_ip_host_nlri}
  */
  readonly copyIpHostNlri?: number;
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#copy_ipv6_host FlowspecFilteringActionA#copy_ipv6_host}
  */
  readonly copyIpv6Host?: number;
  /**
  * Copy bit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#copy_ipv6_host_nlri FlowspecFilteringActionA#copy_ipv6_host_nlri}
  */
  readonly copyIpv6HostNlri?: number;
  /**
  * Set DSCP value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#dscp_val FlowspecFilteringActionA#dscp_val}
  */
  readonly dscpVal?: number;
  /**
  * Custom Extended Community in Hex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#ecomm_custom_hex FlowspecFilteringActionA#ecomm_custom_hex}
  */
  readonly ecommCustomHex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#id FlowspecFilteringActionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#ip_host FlowspecFilteringActionA#ip_host}
  */
  readonly ipHost?: string;
  /**
  * IPv4 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#ip_host_nlri FlowspecFilteringActionA#ip_host_nlri}
  */
  readonly ipHostNlri?: string;
  /**
  * Type 0x8108 - Route Target IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#ip_host_rt FlowspecFilteringActionA#ip_host_rt}
  */
  readonly ipHostRt?: string;
  /**
  * IPv6 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#ipv6_host FlowspecFilteringActionA#ipv6_host}
  */
  readonly ipv6Host?: string;
  /**
  * IPv6 host address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#ipv6_host_nlri FlowspecFilteringActionA#ipv6_host_nlri}
  */
  readonly ipv6HostNlri?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#name FlowspecFilteringActionA#name}
  */
  readonly name: string;
  /**
  * 'ip': Type 0x0800 - IPv4 Address; 'ipv6': Type 0x0800 - IPv6 Address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#next_hop_nlri_type FlowspecFilteringActionA#next_hop_nlri_type}
  */
  readonly nextHopNlriType?: string;
  /**
  * 'ip': Type 0x0800 - IPv4 Address; 'ipv6': Type 0x0800 - IPv6 Address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#next_hop_type FlowspecFilteringActionA#next_hop_type}
  */
  readonly nextHopType?: string;
  /**
  * 'next-hop-nlri': Type 0x0800 - IP encoded in MP_REACH_NLRI Next-hop network; 'next-hop': Type 0x0800 - Extended community Next-hop (Per v2 dated Feb 2015); 'vrf-route-target': Type 0x8008 - Redirect to VRF Route Target;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#redirect FlowspecFilteringActionA#redirect}
  */
  readonly redirect?: string;
  /**
  * Enable traffic sampling and logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#sample_log FlowspecFilteringActionA#sample_log}
  */
  readonly sampleLog?: number;
  /**
  * Evaluation stops after this rule if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#terminal_action FlowspecFilteringActionA#terminal_action}
  */
  readonly terminalAction?: number;
  /**
  * Set IPv6 Traffic Class value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#traffic_class FlowspecFilteringActionA#traffic_class}
  */
  readonly trafficClass?: number;
  /**
  * 'dscp': IPv4 DSCP; 'ipv6-traffic-class': IPv6 Traffic Class;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#traffic_marking FlowspecFilteringActionA#traffic_marking}
  */
  readonly trafficMarking?: string;
  /**
  * Type 0x8006 - Apply rate (in Bytes per second) for this class of traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#traffic_rate FlowspecFilteringActionA#traffic_rate}
  */
  readonly trafficRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#uuid FlowspecFilteringActionA#uuid}
  */
  readonly uuid?: string;
  /**
  * 2-byte decimal value(local-administrator)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#value_ip_host FlowspecFilteringActionA#value_ip_host}
  */
  readonly valueIpHost?: number;
  /**
  * 'ip': Type 0x8108 - Redirect to route-target IP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#vrf_target_ip FlowspecFilteringActionA#vrf_target_ip}
  */
  readonly vrfTargetIp?: string;
  /**
  * Type 0x8008(ASN-2:Index), 0x8208(ASN-4:Index) - Route Target AS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#vrf_target_string FlowspecFilteringActionA#vrf_target_string}
  */
  readonly vrfTargetString?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action thunder_flowspec_filtering_action}
*/
export class FlowspecFilteringActionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_flowspec_filtering_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlowspecFilteringActionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlowspecFilteringActionA to import
  * @param importFromId The id of the existing FlowspecFilteringActionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlowspecFilteringActionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_flowspec_filtering_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/flowspec_filtering_action thunder_flowspec_filtering_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlowspecFilteringActionAConfig
  */
  public constructor(scope: Construct, id: string, config: FlowspecFilteringActionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_flowspec_filtering_action',
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
    this._copyIpHost = config.copyIpHost;
    this._copyIpHostNlri = config.copyIpHostNlri;
    this._copyIpv6Host = config.copyIpv6Host;
    this._copyIpv6HostNlri = config.copyIpv6HostNlri;
    this._dscpVal = config.dscpVal;
    this._ecommCustomHex = config.ecommCustomHex;
    this._id = config.id;
    this._ipHost = config.ipHost;
    this._ipHostNlri = config.ipHostNlri;
    this._ipHostRt = config.ipHostRt;
    this._ipv6Host = config.ipv6Host;
    this._ipv6HostNlri = config.ipv6HostNlri;
    this._name = config.name;
    this._nextHopNlriType = config.nextHopNlriType;
    this._nextHopType = config.nextHopType;
    this._redirect = config.redirect;
    this._sampleLog = config.sampleLog;
    this._terminalAction = config.terminalAction;
    this._trafficClass = config.trafficClass;
    this._trafficMarking = config.trafficMarking;
    this._trafficRate = config.trafficRate;
    this._uuid = config.uuid;
    this._valueIpHost = config.valueIpHost;
    this._vrfTargetIp = config.vrfTargetIp;
    this._vrfTargetString = config.vrfTargetString;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copy_ip_host - computed: false, optional: true, required: false
  private _copyIpHost?: number; 
  public get copyIpHost() {
    return this.getNumberAttribute('copy_ip_host');
  }
  public set copyIpHost(value: number) {
    this._copyIpHost = value;
  }
  public resetCopyIpHost() {
    this._copyIpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpHostInput() {
    return this._copyIpHost;
  }

  // copy_ip_host_nlri - computed: false, optional: true, required: false
  private _copyIpHostNlri?: number; 
  public get copyIpHostNlri() {
    return this.getNumberAttribute('copy_ip_host_nlri');
  }
  public set copyIpHostNlri(value: number) {
    this._copyIpHostNlri = value;
  }
  public resetCopyIpHostNlri() {
    this._copyIpHostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpHostNlriInput() {
    return this._copyIpHostNlri;
  }

  // copy_ipv6_host - computed: false, optional: true, required: false
  private _copyIpv6Host?: number; 
  public get copyIpv6Host() {
    return this.getNumberAttribute('copy_ipv6_host');
  }
  public set copyIpv6Host(value: number) {
    this._copyIpv6Host = value;
  }
  public resetCopyIpv6Host() {
    this._copyIpv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpv6HostInput() {
    return this._copyIpv6Host;
  }

  // copy_ipv6_host_nlri - computed: false, optional: true, required: false
  private _copyIpv6HostNlri?: number; 
  public get copyIpv6HostNlri() {
    return this.getNumberAttribute('copy_ipv6_host_nlri');
  }
  public set copyIpv6HostNlri(value: number) {
    this._copyIpv6HostNlri = value;
  }
  public resetCopyIpv6HostNlri() {
    this._copyIpv6HostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyIpv6HostNlriInput() {
    return this._copyIpv6HostNlri;
  }

  // dscp_val - computed: false, optional: true, required: false
  private _dscpVal?: number; 
  public get dscpVal() {
    return this.getNumberAttribute('dscp_val');
  }
  public set dscpVal(value: number) {
    this._dscpVal = value;
  }
  public resetDscpVal() {
    this._dscpVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpValInput() {
    return this._dscpVal;
  }

  // ecomm_custom_hex - computed: false, optional: true, required: false
  private _ecommCustomHex?: string; 
  public get ecommCustomHex() {
    return this.getStringAttribute('ecomm_custom_hex');
  }
  public set ecommCustomHex(value: string) {
    this._ecommCustomHex = value;
  }
  public resetEcommCustomHex() {
    this._ecommCustomHex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecommCustomHexInput() {
    return this._ecommCustomHex;
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

  // ip_host - computed: false, optional: true, required: false
  private _ipHost?: string; 
  public get ipHost() {
    return this.getStringAttribute('ip_host');
  }
  public set ipHost(value: string) {
    this._ipHost = value;
  }
  public resetIpHost() {
    this._ipHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostInput() {
    return this._ipHost;
  }

  // ip_host_nlri - computed: false, optional: true, required: false
  private _ipHostNlri?: string; 
  public get ipHostNlri() {
    return this.getStringAttribute('ip_host_nlri');
  }
  public set ipHostNlri(value: string) {
    this._ipHostNlri = value;
  }
  public resetIpHostNlri() {
    this._ipHostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostNlriInput() {
    return this._ipHostNlri;
  }

  // ip_host_rt - computed: false, optional: true, required: false
  private _ipHostRt?: string; 
  public get ipHostRt() {
    return this.getStringAttribute('ip_host_rt');
  }
  public set ipHostRt(value: string) {
    this._ipHostRt = value;
  }
  public resetIpHostRt() {
    this._ipHostRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHostRtInput() {
    return this._ipHostRt;
  }

  // ipv6_host - computed: false, optional: true, required: false
  private _ipv6Host?: string; 
  public get ipv6Host() {
    return this.getStringAttribute('ipv6_host');
  }
  public set ipv6Host(value: string) {
    this._ipv6Host = value;
  }
  public resetIpv6Host() {
    this._ipv6Host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostInput() {
    return this._ipv6Host;
  }

  // ipv6_host_nlri - computed: false, optional: true, required: false
  private _ipv6HostNlri?: string; 
  public get ipv6HostNlri() {
    return this.getStringAttribute('ipv6_host_nlri');
  }
  public set ipv6HostNlri(value: string) {
    this._ipv6HostNlri = value;
  }
  public resetIpv6HostNlri() {
    this._ipv6HostNlri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6HostNlriInput() {
    return this._ipv6HostNlri;
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

  // next_hop_nlri_type - computed: false, optional: true, required: false
  private _nextHopNlriType?: string; 
  public get nextHopNlriType() {
    return this.getStringAttribute('next_hop_nlri_type');
  }
  public set nextHopNlriType(value: string) {
    this._nextHopNlriType = value;
  }
  public resetNextHopNlriType() {
    this._nextHopNlriType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopNlriTypeInput() {
    return this._nextHopNlriType;
  }

  // next_hop_type - computed: false, optional: true, required: false
  private _nextHopType?: string; 
  public get nextHopType() {
    return this.getStringAttribute('next_hop_type');
  }
  public set nextHopType(value: string) {
    this._nextHopType = value;
  }
  public resetNextHopType() {
    this._nextHopType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopTypeInput() {
    return this._nextHopType;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // sample_log - computed: false, optional: true, required: false
  private _sampleLog?: number; 
  public get sampleLog() {
    return this.getNumberAttribute('sample_log');
  }
  public set sampleLog(value: number) {
    this._sampleLog = value;
  }
  public resetSampleLog() {
    this._sampleLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLogInput() {
    return this._sampleLog;
  }

  // terminal_action - computed: false, optional: true, required: false
  private _terminalAction?: number; 
  public get terminalAction() {
    return this.getNumberAttribute('terminal_action');
  }
  public set terminalAction(value: number) {
    this._terminalAction = value;
  }
  public resetTerminalAction() {
    this._terminalAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalActionInput() {
    return this._terminalAction;
  }

  // traffic_class - computed: false, optional: true, required: false
  private _trafficClass?: number; 
  public get trafficClass() {
    return this.getNumberAttribute('traffic_class');
  }
  public set trafficClass(value: number) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }

  // traffic_marking - computed: false, optional: true, required: false
  private _trafficMarking?: string; 
  public get trafficMarking() {
    return this.getStringAttribute('traffic_marking');
  }
  public set trafficMarking(value: string) {
    this._trafficMarking = value;
  }
  public resetTrafficMarking() {
    this._trafficMarking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMarkingInput() {
    return this._trafficMarking;
  }

  // traffic_rate - computed: false, optional: true, required: false
  private _trafficRate?: number; 
  public get trafficRate() {
    return this.getNumberAttribute('traffic_rate');
  }
  public set trafficRate(value: number) {
    this._trafficRate = value;
  }
  public resetTrafficRate() {
    this._trafficRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRateInput() {
    return this._trafficRate;
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

  // value_ip_host - computed: false, optional: true, required: false
  private _valueIpHost?: number; 
  public get valueIpHost() {
    return this.getNumberAttribute('value_ip_host');
  }
  public set valueIpHost(value: number) {
    this._valueIpHost = value;
  }
  public resetValueIpHost() {
    this._valueIpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueIpHostInput() {
    return this._valueIpHost;
  }

  // vrf_target_ip - computed: false, optional: true, required: false
  private _vrfTargetIp?: string; 
  public get vrfTargetIp() {
    return this.getStringAttribute('vrf_target_ip');
  }
  public set vrfTargetIp(value: string) {
    this._vrfTargetIp = value;
  }
  public resetVrfTargetIp() {
    this._vrfTargetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetIpInput() {
    return this._vrfTargetIp;
  }

  // vrf_target_string - computed: false, optional: true, required: false
  private _vrfTargetString?: string; 
  public get vrfTargetString() {
    return this.getStringAttribute('vrf_target_string');
  }
  public set vrfTargetString(value: string) {
    this._vrfTargetString = value;
  }
  public resetVrfTargetString() {
    this._vrfTargetString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTargetStringInput() {
    return this._vrfTargetString;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      copy_ip_host: cdktf.numberToTerraform(this._copyIpHost),
      copy_ip_host_nlri: cdktf.numberToTerraform(this._copyIpHostNlri),
      copy_ipv6_host: cdktf.numberToTerraform(this._copyIpv6Host),
      copy_ipv6_host_nlri: cdktf.numberToTerraform(this._copyIpv6HostNlri),
      dscp_val: cdktf.numberToTerraform(this._dscpVal),
      ecomm_custom_hex: cdktf.stringToTerraform(this._ecommCustomHex),
      id: cdktf.stringToTerraform(this._id),
      ip_host: cdktf.stringToTerraform(this._ipHost),
      ip_host_nlri: cdktf.stringToTerraform(this._ipHostNlri),
      ip_host_rt: cdktf.stringToTerraform(this._ipHostRt),
      ipv6_host: cdktf.stringToTerraform(this._ipv6Host),
      ipv6_host_nlri: cdktf.stringToTerraform(this._ipv6HostNlri),
      name: cdktf.stringToTerraform(this._name),
      next_hop_nlri_type: cdktf.stringToTerraform(this._nextHopNlriType),
      next_hop_type: cdktf.stringToTerraform(this._nextHopType),
      redirect: cdktf.stringToTerraform(this._redirect),
      sample_log: cdktf.numberToTerraform(this._sampleLog),
      terminal_action: cdktf.numberToTerraform(this._terminalAction),
      traffic_class: cdktf.numberToTerraform(this._trafficClass),
      traffic_marking: cdktf.stringToTerraform(this._trafficMarking),
      traffic_rate: cdktf.numberToTerraform(this._trafficRate),
      uuid: cdktf.stringToTerraform(this._uuid),
      value_ip_host: cdktf.numberToTerraform(this._valueIpHost),
      vrf_target_ip: cdktf.stringToTerraform(this._vrfTargetIp),
      vrf_target_string: cdktf.stringToTerraform(this._vrfTargetString),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copy_ip_host: {
        value: cdktf.numberToHclTerraform(this._copyIpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      copy_ip_host_nlri: {
        value: cdktf.numberToHclTerraform(this._copyIpHostNlri),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      copy_ipv6_host: {
        value: cdktf.numberToHclTerraform(this._copyIpv6Host),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      copy_ipv6_host_nlri: {
        value: cdktf.numberToHclTerraform(this._copyIpv6HostNlri),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dscp_val: {
        value: cdktf.numberToHclTerraform(this._dscpVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ecomm_custom_hex: {
        value: cdktf.stringToHclTerraform(this._ecommCustomHex),
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
      ip_host: {
        value: cdktf.stringToHclTerraform(this._ipHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_host_nlri: {
        value: cdktf.stringToHclTerraform(this._ipHostNlri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_host_rt: {
        value: cdktf.stringToHclTerraform(this._ipHostRt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_host: {
        value: cdktf.stringToHclTerraform(this._ipv6Host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_host_nlri: {
        value: cdktf.stringToHclTerraform(this._ipv6HostNlri),
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
      next_hop_nlri_type: {
        value: cdktf.stringToHclTerraform(this._nextHopNlriType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_hop_type: {
        value: cdktf.stringToHclTerraform(this._nextHopType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect: {
        value: cdktf.stringToHclTerraform(this._redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sample_log: {
        value: cdktf.numberToHclTerraform(this._sampleLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      terminal_action: {
        value: cdktf.numberToHclTerraform(this._terminalAction),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_class: {
        value: cdktf.numberToHclTerraform(this._trafficClass),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_marking: {
        value: cdktf.stringToHclTerraform(this._trafficMarking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_rate: {
        value: cdktf.numberToHclTerraform(this._trafficRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_ip_host: {
        value: cdktf.numberToHclTerraform(this._valueIpHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrf_target_ip: {
        value: cdktf.stringToHclTerraform(this._vrfTargetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_target_string: {
        value: cdktf.stringToHclTerraform(this._vrfTargetString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
