// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSdnvpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#bgp_as SystemSdnvpn#bgp_as}
  */
  readonly bgpAs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#bgp_from SystemSdnvpn#bgp_from}
  */
  readonly bgpFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#bgp_seq SystemSdnvpn#bgp_seq}
  */
  readonly bgpSeq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#cgw_gateway SystemSdnvpn#cgw_gateway}
  */
  readonly cgwGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#cgw_id SystemSdnvpn#cgw_id}
  */
  readonly cgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#cgw_name SystemSdnvpn#cgw_name}
  */
  readonly cgwName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#code SystemSdnvpn#code}
  */
  readonly code?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#device_name SystemSdnvpn#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#id SystemSdnvpn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#internal_interface SystemSdnvpn#internal_interface}
  */
  readonly internalInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#local_cidr SystemSdnvpn#local_cidr}
  */
  readonly localCidr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#name SystemSdnvpn#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#nat_traversal SystemSdnvpn#nat_traversal}
  */
  readonly natTraversal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#psksecret SystemSdnvpn#psksecret}
  */
  readonly psksecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#remote_cidr SystemSdnvpn#remote_cidr}
  */
  readonly remoteCidr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#remote_type SystemSdnvpn#remote_type}
  */
  readonly remoteType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#routing_type SystemSdnvpn#routing_type}
  */
  readonly routingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#sdn SystemSdnvpn#sdn}
  */
  readonly sdn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#status SystemSdnvpn#status}
  */
  readonly status?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#subnet_id SystemSdnvpn#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#tgw_id SystemSdnvpn#tgw_id}
  */
  readonly tgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#tgw_vpn_rtbl_id SystemSdnvpn#tgw_vpn_rtbl_id}
  */
  readonly tgwVpnRtblId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#trtbl_attachment SystemSdnvpn#trtbl_attachment}
  */
  readonly trtblAttachment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#tunnel_interface SystemSdnvpn#tunnel_interface}
  */
  readonly tunnelInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#type SystemSdnvpn#type}
  */
  readonly type?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#vgw_id SystemSdnvpn#vgw_id}
  */
  readonly vgwId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#vpn_id SystemSdnvpn#vpn_id}
  */
  readonly vpnId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn fmgdevice_system_sdnvpn}
*/
export class SystemSdnvpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_sdnvpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSdnvpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSdnvpn to import
  * @param importFromId The id of the existing SystemSdnvpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSdnvpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_sdnvpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_sdnvpn fmgdevice_system_sdnvpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSdnvpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemSdnvpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_sdnvpn',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bgpAs = config.bgpAs;
    this._bgpFrom = config.bgpFrom;
    this._bgpSeq = config.bgpSeq;
    this._cgwGateway = config.cgwGateway;
    this._cgwId = config.cgwId;
    this._cgwName = config.cgwName;
    this._code = config.code;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._internalInterface = config.internalInterface;
    this._localCidr = config.localCidr;
    this._name = config.name;
    this._natTraversal = config.natTraversal;
    this._psksecret = config.psksecret;
    this._remoteCidr = config.remoteCidr;
    this._remoteType = config.remoteType;
    this._routingType = config.routingType;
    this._sdn = config.sdn;
    this._status = config.status;
    this._subnetId = config.subnetId;
    this._tgwId = config.tgwId;
    this._tgwVpnRtblId = config.tgwVpnRtblId;
    this._trtblAttachment = config.trtblAttachment;
    this._tunnelInterface = config.tunnelInterface;
    this._type = config.type;
    this._vgwId = config.vgwId;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_as - computed: true, optional: true, required: false
  private _bgpAs?: number; 
  public get bgpAs() {
    return this.getNumberAttribute('bgp_as');
  }
  public set bgpAs(value: number) {
    this._bgpAs = value;
  }
  public resetBgpAs() {
    this._bgpAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsInput() {
    return this._bgpAs;
  }

  // bgp_from - computed: true, optional: true, required: false
  private _bgpFrom?: string; 
  public get bgpFrom() {
    return this.getStringAttribute('bgp_from');
  }
  public set bgpFrom(value: string) {
    this._bgpFrom = value;
  }
  public resetBgpFrom() {
    this._bgpFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpFromInput() {
    return this._bgpFrom;
  }

  // bgp_seq - computed: true, optional: true, required: false
  private _bgpSeq?: number; 
  public get bgpSeq() {
    return this.getNumberAttribute('bgp_seq');
  }
  public set bgpSeq(value: number) {
    this._bgpSeq = value;
  }
  public resetBgpSeq() {
    this._bgpSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpSeqInput() {
    return this._bgpSeq;
  }

  // cgw_gateway - computed: true, optional: true, required: false
  private _cgwGateway?: string; 
  public get cgwGateway() {
    return this.getStringAttribute('cgw_gateway');
  }
  public set cgwGateway(value: string) {
    this._cgwGateway = value;
  }
  public resetCgwGateway() {
    this._cgwGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgwGatewayInput() {
    return this._cgwGateway;
  }

  // cgw_id - computed: false, optional: true, required: false
  private _cgwId?: string; 
  public get cgwId() {
    return this.getStringAttribute('cgw_id');
  }
  public set cgwId(value: string) {
    this._cgwId = value;
  }
  public resetCgwId() {
    this._cgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgwIdInput() {
    return this._cgwId;
  }

  // cgw_name - computed: false, optional: true, required: false
  private _cgwName?: string; 
  public get cgwName() {
    return this.getStringAttribute('cgw_name');
  }
  public set cgwName(value: string) {
    this._cgwName = value;
  }
  public resetCgwName() {
    this._cgwName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgwNameInput() {
    return this._cgwName;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // internal_interface - computed: true, optional: true, required: false
  private _internalInterface?: string[]; 
  public get internalInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_interface'));
  }
  public set internalInterface(value: string[]) {
    this._internalInterface = value;
  }
  public resetInternalInterface() {
    this._internalInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInterfaceInput() {
    return this._internalInterface;
  }

  // local_cidr - computed: true, optional: true, required: false
  private _localCidr?: string[]; 
  public get localCidr() {
    return this.getListAttribute('local_cidr');
  }
  public set localCidr(value: string[]) {
    this._localCidr = value;
  }
  public resetLocalCidr() {
    this._localCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCidrInput() {
    return this._localCidr;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // nat_traversal - computed: true, optional: true, required: false
  private _natTraversal?: string; 
  public get natTraversal() {
    return this.getStringAttribute('nat_traversal');
  }
  public set natTraversal(value: string) {
    this._natTraversal = value;
  }
  public resetNatTraversal() {
    this._natTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTraversalInput() {
    return this._natTraversal;
  }

  // psksecret - computed: true, optional: true, required: false
  private _psksecret?: string[]; 
  public get psksecret() {
    return cdktf.Fn.tolist(this.getListAttribute('psksecret'));
  }
  public set psksecret(value: string[]) {
    this._psksecret = value;
  }
  public resetPsksecret() {
    this._psksecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get psksecretInput() {
    return this._psksecret;
  }

  // remote_cidr - computed: true, optional: true, required: false
  private _remoteCidr?: string[]; 
  public get remoteCidr() {
    return this.getListAttribute('remote_cidr');
  }
  public set remoteCidr(value: string[]) {
    this._remoteCidr = value;
  }
  public resetRemoteCidr() {
    this._remoteCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCidrInput() {
    return this._remoteCidr;
  }

  // remote_type - computed: true, optional: true, required: false
  private _remoteType?: string; 
  public get remoteType() {
    return this.getStringAttribute('remote_type');
  }
  public set remoteType(value: string) {
    this._remoteType = value;
  }
  public resetRemoteType() {
    this._remoteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTypeInput() {
    return this._remoteType;
  }

  // routing_type - computed: true, optional: true, required: false
  private _routingType?: string; 
  public get routingType() {
    return this.getStringAttribute('routing_type');
  }
  public set routingType(value: string) {
    this._routingType = value;
  }
  public resetRoutingType() {
    this._routingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTypeInput() {
    return this._routingType;
  }

  // sdn - computed: true, optional: true, required: false
  private _sdn?: string[]; 
  public get sdn() {
    return cdktf.Fn.tolist(this.getListAttribute('sdn'));
  }
  public set sdn(value: string[]) {
    this._sdn = value;
  }
  public resetSdn() {
    this._sdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnInput() {
    return this._sdn;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tgw_id - computed: false, optional: true, required: false
  private _tgwId?: string; 
  public get tgwId() {
    return this.getStringAttribute('tgw_id');
  }
  public set tgwId(value: string) {
    this._tgwId = value;
  }
  public resetTgwId() {
    this._tgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwIdInput() {
    return this._tgwId;
  }

  // tgw_vpn_rtbl_id - computed: false, optional: true, required: false
  private _tgwVpnRtblId?: string; 
  public get tgwVpnRtblId() {
    return this.getStringAttribute('tgw_vpn_rtbl_id');
  }
  public set tgwVpnRtblId(value: string) {
    this._tgwVpnRtblId = value;
  }
  public resetTgwVpnRtblId() {
    this._tgwVpnRtblId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwVpnRtblIdInput() {
    return this._tgwVpnRtblId;
  }

  // trtbl_attachment - computed: false, optional: true, required: false
  private _trtblAttachment?: string; 
  public get trtblAttachment() {
    return this.getStringAttribute('trtbl_attachment');
  }
  public set trtblAttachment(value: string) {
    this._trtblAttachment = value;
  }
  public resetTrtblAttachment() {
    this._trtblAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trtblAttachmentInput() {
    return this._trtblAttachment;
  }

  // tunnel_interface - computed: true, optional: true, required: false
  private _tunnelInterface?: string[]; 
  public get tunnelInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel_interface'));
  }
  public set tunnelInterface(value: string[]) {
    this._tunnelInterface = value;
  }
  public resetTunnelInterface() {
    this._tunnelInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInterfaceInput() {
    return this._tunnelInterface;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vgw_id - computed: false, optional: true, required: false
  private _vgwId?: string; 
  public get vgwId() {
    return this.getStringAttribute('vgw_id');
  }
  public set vgwId(value: string) {
    this._vgwId = value;
  }
  public resetVgwId() {
    this._vgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgwIdInput() {
    return this._vgwId;
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: string; 
  public get vpnId() {
    return this.getStringAttribute('vpn_id');
  }
  public set vpnId(value: string) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bgp_as: cdktf.numberToTerraform(this._bgpAs),
      bgp_from: cdktf.stringToTerraform(this._bgpFrom),
      bgp_seq: cdktf.numberToTerraform(this._bgpSeq),
      cgw_gateway: cdktf.stringToTerraform(this._cgwGateway),
      cgw_id: cdktf.stringToTerraform(this._cgwId),
      cgw_name: cdktf.stringToTerraform(this._cgwName),
      code: cdktf.numberToTerraform(this._code),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      internal_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalInterface),
      local_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localCidr),
      name: cdktf.stringToTerraform(this._name),
      nat_traversal: cdktf.stringToTerraform(this._natTraversal),
      psksecret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._psksecret),
      remote_cidr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteCidr),
      remote_type: cdktf.stringToTerraform(this._remoteType),
      routing_type: cdktf.stringToTerraform(this._routingType),
      sdn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdn),
      status: cdktf.numberToTerraform(this._status),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tgw_id: cdktf.stringToTerraform(this._tgwId),
      tgw_vpn_rtbl_id: cdktf.stringToTerraform(this._tgwVpnRtblId),
      trtbl_attachment: cdktf.stringToTerraform(this._trtblAttachment),
      tunnel_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnelInterface),
      type: cdktf.numberToTerraform(this._type),
      vgw_id: cdktf.stringToTerraform(this._vgwId),
      vpn_id: cdktf.stringToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bgp_as: {
        value: cdktf.numberToHclTerraform(this._bgpAs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_from: {
        value: cdktf.stringToHclTerraform(this._bgpFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_seq: {
        value: cdktf.numberToHclTerraform(this._bgpSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgw_gateway: {
        value: cdktf.stringToHclTerraform(this._cgwGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgw_id: {
        value: cdktf.stringToHclTerraform(this._cgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgw_name: {
        value: cdktf.stringToHclTerraform(this._cgwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code: {
        value: cdktf.numberToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      internal_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      local_cidr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localCidr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_traversal: {
        value: cdktf.stringToHclTerraform(this._natTraversal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      psksecret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._psksecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remote_cidr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteCidr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_type: {
        value: cdktf.stringToHclTerraform(this._remoteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_type: {
        value: cdktf.stringToHclTerraform(this._routingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sdn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_id: {
        value: cdktf.stringToHclTerraform(this._tgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_vpn_rtbl_id: {
        value: cdktf.stringToHclTerraform(this._tgwVpnRtblId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trtbl_attachment: {
        value: cdktf.stringToHclTerraform(this._trtblAttachment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tunnelInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vgw_id: {
        value: cdktf.stringToHclTerraform(this._vgwId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_id: {
        value: cdktf.stringToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
