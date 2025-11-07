// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchSecurityfeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#allow_mcast_sa SwitchSecurityfeature#allow_mcast_sa}
  */
  readonly allowMcastSa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#allow_sa_mac_all_zero SwitchSecurityfeature#allow_sa_mac_all_zero}
  */
  readonly allowSaMacAllZero?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#id SwitchSecurityfeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#macsa_eq_macda SwitchSecurityfeature#macsa_eq_macda}
  */
  readonly macsaEqMacda?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#sip_eq_dip SwitchSecurityfeature#sip_eq_dip}
  */
  readonly sipEqDip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#tcp_flag SwitchSecurityfeature#tcp_flag}
  */
  readonly tcpFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#tcp_flag_fup SwitchSecurityfeature#tcp_flag_fup}
  */
  readonly tcpFlagFup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#tcp_flag_sf SwitchSecurityfeature#tcp_flag_sf}
  */
  readonly tcpFlagSf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#tcp_hdr_partial SwitchSecurityfeature#tcp_hdr_partial}
  */
  readonly tcpHdrPartial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#tcp_port_eq SwitchSecurityfeature#tcp_port_eq}
  */
  readonly tcpPortEq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#udp_port_eq SwitchSecurityfeature#udp_port_eq}
  */
  readonly udpPortEq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#v4_first_frag SwitchSecurityfeature#v4_first_frag}
  */
  readonly v4FirstFrag?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature fortiswitch_switch_securityfeature}
*/
export class SwitchSecurityfeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_securityfeature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchSecurityfeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchSecurityfeature to import
  * @param importFromId The id of the existing SwitchSecurityfeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchSecurityfeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_securityfeature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_securityfeature fortiswitch_switch_securityfeature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchSecurityfeatureConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchSecurityfeatureConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_securityfeature',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMcastSa = config.allowMcastSa;
    this._allowSaMacAllZero = config.allowSaMacAllZero;
    this._id = config.id;
    this._macsaEqMacda = config.macsaEqMacda;
    this._sipEqDip = config.sipEqDip;
    this._tcpFlag = config.tcpFlag;
    this._tcpFlagFup = config.tcpFlagFup;
    this._tcpFlagSf = config.tcpFlagSf;
    this._tcpHdrPartial = config.tcpHdrPartial;
    this._tcpPortEq = config.tcpPortEq;
    this._udpPortEq = config.udpPortEq;
    this._v4FirstFrag = config.v4FirstFrag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_mcast_sa - computed: true, optional: true, required: false
  private _allowMcastSa?: string; 
  public get allowMcastSa() {
    return this.getStringAttribute('allow_mcast_sa');
  }
  public set allowMcastSa(value: string) {
    this._allowMcastSa = value;
  }
  public resetAllowMcastSa() {
    this._allowMcastSa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMcastSaInput() {
    return this._allowMcastSa;
  }

  // allow_sa_mac_all_zero - computed: true, optional: true, required: false
  private _allowSaMacAllZero?: string; 
  public get allowSaMacAllZero() {
    return this.getStringAttribute('allow_sa_mac_all_zero');
  }
  public set allowSaMacAllZero(value: string) {
    this._allowSaMacAllZero = value;
  }
  public resetAllowSaMacAllZero() {
    this._allowSaMacAllZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSaMacAllZeroInput() {
    return this._allowSaMacAllZero;
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

  // macsa_eq_macda - computed: true, optional: true, required: false
  private _macsaEqMacda?: string; 
  public get macsaEqMacda() {
    return this.getStringAttribute('macsa_eq_macda');
  }
  public set macsaEqMacda(value: string) {
    this._macsaEqMacda = value;
  }
  public resetMacsaEqMacda() {
    this._macsaEqMacda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macsaEqMacdaInput() {
    return this._macsaEqMacda;
  }

  // sip_eq_dip - computed: true, optional: true, required: false
  private _sipEqDip?: string; 
  public get sipEqDip() {
    return this.getStringAttribute('sip_eq_dip');
  }
  public set sipEqDip(value: string) {
    this._sipEqDip = value;
  }
  public resetSipEqDip() {
    this._sipEqDip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipEqDipInput() {
    return this._sipEqDip;
  }

  // tcp_flag - computed: true, optional: true, required: false
  private _tcpFlag?: string; 
  public get tcpFlag() {
    return this.getStringAttribute('tcp_flag');
  }
  public set tcpFlag(value: string) {
    this._tcpFlag = value;
  }
  public resetTcpFlag() {
    this._tcpFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagInput() {
    return this._tcpFlag;
  }

  // tcp_flag_fup - computed: true, optional: true, required: false
  private _tcpFlagFup?: string; 
  public get tcpFlagFup() {
    return this.getStringAttribute('tcp_flag_fup');
  }
  public set tcpFlagFup(value: string) {
    this._tcpFlagFup = value;
  }
  public resetTcpFlagFup() {
    this._tcpFlagFup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagFupInput() {
    return this._tcpFlagFup;
  }

  // tcp_flag_sf - computed: true, optional: true, required: false
  private _tcpFlagSf?: string; 
  public get tcpFlagSf() {
    return this.getStringAttribute('tcp_flag_sf');
  }
  public set tcpFlagSf(value: string) {
    this._tcpFlagSf = value;
  }
  public resetTcpFlagSf() {
    this._tcpFlagSf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFlagSfInput() {
    return this._tcpFlagSf;
  }

  // tcp_hdr_partial - computed: true, optional: true, required: false
  private _tcpHdrPartial?: string; 
  public get tcpHdrPartial() {
    return this.getStringAttribute('tcp_hdr_partial');
  }
  public set tcpHdrPartial(value: string) {
    this._tcpHdrPartial = value;
  }
  public resetTcpHdrPartial() {
    this._tcpHdrPartial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHdrPartialInput() {
    return this._tcpHdrPartial;
  }

  // tcp_port_eq - computed: true, optional: true, required: false
  private _tcpPortEq?: string; 
  public get tcpPortEq() {
    return this.getStringAttribute('tcp_port_eq');
  }
  public set tcpPortEq(value: string) {
    this._tcpPortEq = value;
  }
  public resetTcpPortEq() {
    this._tcpPortEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortEqInput() {
    return this._tcpPortEq;
  }

  // udp_port_eq - computed: true, optional: true, required: false
  private _udpPortEq?: string; 
  public get udpPortEq() {
    return this.getStringAttribute('udp_port_eq');
  }
  public set udpPortEq(value: string) {
    this._udpPortEq = value;
  }
  public resetUdpPortEq() {
    this._udpPortEq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortEqInput() {
    return this._udpPortEq;
  }

  // v4_first_frag - computed: true, optional: true, required: false
  private _v4FirstFrag?: string; 
  public get v4FirstFrag() {
    return this.getStringAttribute('v4_first_frag');
  }
  public set v4FirstFrag(value: string) {
    this._v4FirstFrag = value;
  }
  public resetV4FirstFrag() {
    this._v4FirstFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4FirstFragInput() {
    return this._v4FirstFrag;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_mcast_sa: cdktf.stringToTerraform(this._allowMcastSa),
      allow_sa_mac_all_zero: cdktf.stringToTerraform(this._allowSaMacAllZero),
      id: cdktf.stringToTerraform(this._id),
      macsa_eq_macda: cdktf.stringToTerraform(this._macsaEqMacda),
      sip_eq_dip: cdktf.stringToTerraform(this._sipEqDip),
      tcp_flag: cdktf.stringToTerraform(this._tcpFlag),
      tcp_flag_fup: cdktf.stringToTerraform(this._tcpFlagFup),
      tcp_flag_sf: cdktf.stringToTerraform(this._tcpFlagSf),
      tcp_hdr_partial: cdktf.stringToTerraform(this._tcpHdrPartial),
      tcp_port_eq: cdktf.stringToTerraform(this._tcpPortEq),
      udp_port_eq: cdktf.stringToTerraform(this._udpPortEq),
      v4_first_frag: cdktf.stringToTerraform(this._v4FirstFrag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_mcast_sa: {
        value: cdktf.stringToHclTerraform(this._allowMcastSa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_sa_mac_all_zero: {
        value: cdktf.stringToHclTerraform(this._allowSaMacAllZero),
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
      macsa_eq_macda: {
        value: cdktf.stringToHclTerraform(this._macsaEqMacda),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sip_eq_dip: {
        value: cdktf.stringToHclTerraform(this._sipEqDip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_flag: {
        value: cdktf.stringToHclTerraform(this._tcpFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_flag_fup: {
        value: cdktf.stringToHclTerraform(this._tcpFlagFup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_flag_sf: {
        value: cdktf.stringToHclTerraform(this._tcpFlagSf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_hdr_partial: {
        value: cdktf.stringToHclTerraform(this._tcpHdrPartial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_port_eq: {
        value: cdktf.stringToHclTerraform(this._tcpPortEq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_port_eq: {
        value: cdktf.stringToHclTerraform(this._udpPortEq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_first_frag: {
        value: cdktf.stringToHclTerraform(this._v4FirstFrag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
