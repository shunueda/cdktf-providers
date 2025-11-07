// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnIpsecPhase1InterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#authmethod VpnIpsecPhase1Interface#authmethod}
  */
  readonly authmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#authmethod_remote VpnIpsecPhase1Interface#authmethod_remote}
  */
  readonly authmethodRemote?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#certificate VpnIpsecPhase1Interface#certificate}
  */
  readonly certificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#comments VpnIpsecPhase1Interface#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#id VpnIpsecPhase1Interface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#interface VpnIpsecPhase1Interface#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#ipv4_split_exclude VpnIpsecPhase1Interface#ipv4_split_exclude}
  */
  readonly ipv4SplitExclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#ipv4_split_include VpnIpsecPhase1Interface#ipv4_split_include}
  */
  readonly ipv4SplitInclude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#mode_cfg VpnIpsecPhase1Interface#mode_cfg}
  */
  readonly modeCfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#name VpnIpsecPhase1Interface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#peer VpnIpsecPhase1Interface#peer}
  */
  readonly peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#peergrp VpnIpsecPhase1Interface#peergrp}
  */
  readonly peergrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#peerid VpnIpsecPhase1Interface#peerid}
  */
  readonly peerid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#peertype VpnIpsecPhase1Interface#peertype}
  */
  readonly peertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#proposal VpnIpsecPhase1Interface#proposal}
  */
  readonly proposal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#psksecret VpnIpsecPhase1Interface#psksecret}
  */
  readonly psksecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#remote_gw VpnIpsecPhase1Interface#remote_gw}
  */
  readonly remoteGw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#split_include_service VpnIpsecPhase1Interface#split_include_service}
  */
  readonly splitIncludeService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#type VpnIpsecPhase1Interface#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#wizard_type VpnIpsecPhase1Interface#wizard_type}
  */
  readonly wizardType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface fortios_vpn_ipsec_phase1interface}
*/
export class VpnIpsecPhase1Interface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_vpn_ipsec_phase1interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpnIpsecPhase1Interface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpnIpsecPhase1Interface to import
  * @param importFromId The id of the existing VpnIpsecPhase1Interface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpnIpsecPhase1Interface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_vpn_ipsec_phase1interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/vpn_ipsec_phase1interface fortios_vpn_ipsec_phase1interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnIpsecPhase1InterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: VpnIpsecPhase1InterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_vpn_ipsec_phase1interface',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authmethod = config.authmethod;
    this._authmethodRemote = config.authmethodRemote;
    this._certificate = config.certificate;
    this._comments = config.comments;
    this._id = config.id;
    this._interface = config.interface;
    this._ipv4SplitExclude = config.ipv4SplitExclude;
    this._ipv4SplitInclude = config.ipv4SplitInclude;
    this._modeCfg = config.modeCfg;
    this._name = config.name;
    this._peer = config.peer;
    this._peergrp = config.peergrp;
    this._peerid = config.peerid;
    this._peertype = config.peertype;
    this._proposal = config.proposal;
    this._psksecret = config.psksecret;
    this._remoteGw = config.remoteGw;
    this._splitIncludeService = config.splitIncludeService;
    this._type = config.type;
    this._wizardType = config.wizardType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authmethod - computed: true, optional: true, required: false
  private _authmethod?: string; 
  public get authmethod() {
    return this.getStringAttribute('authmethod');
  }
  public set authmethod(value: string) {
    this._authmethod = value;
  }
  public resetAuthmethod() {
    this._authmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authmethodInput() {
    return this._authmethod;
  }

  // authmethod_remote - computed: true, optional: true, required: false
  private _authmethodRemote?: string; 
  public get authmethodRemote() {
    return this.getStringAttribute('authmethod_remote');
  }
  public set authmethodRemote(value: string) {
    this._authmethodRemote = value;
  }
  public resetAuthmethodRemote() {
    this._authmethodRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authmethodRemoteInput() {
    return this._authmethodRemote;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string[]; 
  public get certificate() {
    return this.getListAttribute('certificate');
  }
  public set certificate(value: string[]) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ipv4_split_exclude - computed: true, optional: true, required: false
  private _ipv4SplitExclude?: string; 
  public get ipv4SplitExclude() {
    return this.getStringAttribute('ipv4_split_exclude');
  }
  public set ipv4SplitExclude(value: string) {
    this._ipv4SplitExclude = value;
  }
  public resetIpv4SplitExclude() {
    this._ipv4SplitExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitExcludeInput() {
    return this._ipv4SplitExclude;
  }

  // ipv4_split_include - computed: true, optional: true, required: false
  private _ipv4SplitInclude?: string; 
  public get ipv4SplitInclude() {
    return this.getStringAttribute('ipv4_split_include');
  }
  public set ipv4SplitInclude(value: string) {
    this._ipv4SplitInclude = value;
  }
  public resetIpv4SplitInclude() {
    this._ipv4SplitInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SplitIncludeInput() {
    return this._ipv4SplitInclude;
  }

  // mode_cfg - computed: true, optional: true, required: false
  private _modeCfg?: string; 
  public get modeCfg() {
    return this.getStringAttribute('mode_cfg');
  }
  public set modeCfg(value: string) {
    this._modeCfg = value;
  }
  public resetModeCfg() {
    this._modeCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeCfgInput() {
    return this._modeCfg;
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

  // peer - computed: true, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // peergrp - computed: true, optional: true, required: false
  private _peergrp?: string; 
  public get peergrp() {
    return this.getStringAttribute('peergrp');
  }
  public set peergrp(value: string) {
    this._peergrp = value;
  }
  public resetPeergrp() {
    this._peergrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peergrpInput() {
    return this._peergrp;
  }

  // peerid - computed: true, optional: true, required: false
  private _peerid?: string; 
  public get peerid() {
    return this.getStringAttribute('peerid');
  }
  public set peerid(value: string) {
    this._peerid = value;
  }
  public resetPeerid() {
    this._peerid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peeridInput() {
    return this._peerid;
  }

  // peertype - computed: true, optional: true, required: false
  private _peertype?: string; 
  public get peertype() {
    return this.getStringAttribute('peertype');
  }
  public set peertype(value: string) {
    this._peertype = value;
  }
  public resetPeertype() {
    this._peertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peertypeInput() {
    return this._peertype;
  }

  // proposal - computed: true, optional: true, required: false
  private _proposal?: string; 
  public get proposal() {
    return this.getStringAttribute('proposal');
  }
  public set proposal(value: string) {
    this._proposal = value;
  }
  public resetProposal() {
    this._proposal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proposalInput() {
    return this._proposal;
  }

  // psksecret - computed: false, optional: false, required: true
  private _psksecret?: string; 
  public get psksecret() {
    return this.getStringAttribute('psksecret');
  }
  public set psksecret(value: string) {
    this._psksecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // remote_gw - computed: false, optional: false, required: true
  private _remoteGw?: string; 
  public get remoteGw() {
    return this.getStringAttribute('remote_gw');
  }
  public set remoteGw(value: string) {
    this._remoteGw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGwInput() {
    return this._remoteGw;
  }

  // split_include_service - computed: true, optional: true, required: false
  private _splitIncludeService?: string; 
  public get splitIncludeService() {
    return this.getStringAttribute('split_include_service');
  }
  public set splitIncludeService(value: string) {
    this._splitIncludeService = value;
  }
  public resetSplitIncludeService() {
    this._splitIncludeService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitIncludeServiceInput() {
    return this._splitIncludeService;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wizard_type - computed: true, optional: true, required: false
  private _wizardType?: string; 
  public get wizardType() {
    return this.getStringAttribute('wizard_type');
  }
  public set wizardType(value: string) {
    this._wizardType = value;
  }
  public resetWizardType() {
    this._wizardType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wizardTypeInput() {
    return this._wizardType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authmethod: cdktf.stringToTerraform(this._authmethod),
      authmethod_remote: cdktf.stringToTerraform(this._authmethodRemote),
      certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificate),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ipv4_split_exclude: cdktf.stringToTerraform(this._ipv4SplitExclude),
      ipv4_split_include: cdktf.stringToTerraform(this._ipv4SplitInclude),
      mode_cfg: cdktf.stringToTerraform(this._modeCfg),
      name: cdktf.stringToTerraform(this._name),
      peer: cdktf.stringToTerraform(this._peer),
      peergrp: cdktf.stringToTerraform(this._peergrp),
      peerid: cdktf.stringToTerraform(this._peerid),
      peertype: cdktf.stringToTerraform(this._peertype),
      proposal: cdktf.stringToTerraform(this._proposal),
      psksecret: cdktf.stringToTerraform(this._psksecret),
      remote_gw: cdktf.stringToTerraform(this._remoteGw),
      split_include_service: cdktf.stringToTerraform(this._splitIncludeService),
      type: cdktf.stringToTerraform(this._type),
      wizard_type: cdktf.stringToTerraform(this._wizardType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authmethod: {
        value: cdktf.stringToHclTerraform(this._authmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authmethod_remote: {
        value: cdktf.stringToHclTerraform(this._authmethodRemote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificate),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_split_exclude: {
        value: cdktf.stringToHclTerraform(this._ipv4SplitExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_split_include: {
        value: cdktf.stringToHclTerraform(this._ipv4SplitInclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode_cfg: {
        value: cdktf.stringToHclTerraform(this._modeCfg),
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
      peer: {
        value: cdktf.stringToHclTerraform(this._peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peergrp: {
        value: cdktf.stringToHclTerraform(this._peergrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peerid: {
        value: cdktf.stringToHclTerraform(this._peerid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peertype: {
        value: cdktf.stringToHclTerraform(this._peertype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proposal: {
        value: cdktf.stringToHclTerraform(this._proposal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret: {
        value: cdktf.stringToHclTerraform(this._psksecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_gw: {
        value: cdktf.stringToHclTerraform(this._remoteGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_include_service: {
        value: cdktf.stringToHclTerraform(this._splitIncludeService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wizard_type: {
        value: cdktf.stringToHclTerraform(this._wizardType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
