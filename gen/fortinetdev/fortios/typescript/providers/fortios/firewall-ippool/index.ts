// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallIppoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#add_nat64_route FirewallIppool#add_nat64_route}
  */
  readonly addNat64Route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#arp_intf FirewallIppool#arp_intf}
  */
  readonly arpIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#arp_reply FirewallIppool#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#associated_interface FirewallIppool#associated_interface}
  */
  readonly associatedInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#block_size FirewallIppool#block_size}
  */
  readonly blockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#client_prefix_length FirewallIppool#client_prefix_length}
  */
  readonly clientPrefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#comments FirewallIppool#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#endip FirewallIppool#endip}
  */
  readonly endip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#endport FirewallIppool#endport}
  */
  readonly endport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#icmp_session_quota FirewallIppool#icmp_session_quota}
  */
  readonly icmpSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#id FirewallIppool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#name FirewallIppool#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#nat64 FirewallIppool#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#num_blocks_per_user FirewallIppool#num_blocks_per_user}
  */
  readonly numBlocksPerUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#pba_interim_log FirewallIppool#pba_interim_log}
  */
  readonly pbaInterimLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#pba_timeout FirewallIppool#pba_timeout}
  */
  readonly pbaTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#permit_any_host FirewallIppool#permit_any_host}
  */
  readonly permitAnyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#port_per_user FirewallIppool#port_per_user}
  */
  readonly portPerUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#privileged_port_use_pba FirewallIppool#privileged_port_use_pba}
  */
  readonly privilegedPortUsePba?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#source_endip FirewallIppool#source_endip}
  */
  readonly sourceEndip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#source_prefix6 FirewallIppool#source_prefix6}
  */
  readonly sourcePrefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#source_startip FirewallIppool#source_startip}
  */
  readonly sourceStartip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#startip FirewallIppool#startip}
  */
  readonly startip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#startport FirewallIppool#startport}
  */
  readonly startport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#subnet_broadcast_in_ippool FirewallIppool#subnet_broadcast_in_ippool}
  */
  readonly subnetBroadcastInIppool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#tcp_session_quota FirewallIppool#tcp_session_quota}
  */
  readonly tcpSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#type FirewallIppool#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#udp_session_quota FirewallIppool#udp_session_quota}
  */
  readonly udpSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#vdomparam FirewallIppool#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool fortios_firewall_ippool}
*/
export class FirewallIppool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_ippool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallIppool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallIppool to import
  * @param importFromId The id of the existing FirewallIppool that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallIppool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_ippool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_ippool fortios_firewall_ippool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallIppoolConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallIppoolConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_ippool',
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
    this._addNat64Route = config.addNat64Route;
    this._arpIntf = config.arpIntf;
    this._arpReply = config.arpReply;
    this._associatedInterface = config.associatedInterface;
    this._blockSize = config.blockSize;
    this._clientPrefixLength = config.clientPrefixLength;
    this._comments = config.comments;
    this._endip = config.endip;
    this._endport = config.endport;
    this._icmpSessionQuota = config.icmpSessionQuota;
    this._id = config.id;
    this._name = config.name;
    this._nat64 = config.nat64;
    this._numBlocksPerUser = config.numBlocksPerUser;
    this._pbaInterimLog = config.pbaInterimLog;
    this._pbaTimeout = config.pbaTimeout;
    this._permitAnyHost = config.permitAnyHost;
    this._portPerUser = config.portPerUser;
    this._privilegedPortUsePba = config.privilegedPortUsePba;
    this._sourceEndip = config.sourceEndip;
    this._sourcePrefix6 = config.sourcePrefix6;
    this._sourceStartip = config.sourceStartip;
    this._startip = config.startip;
    this._startport = config.startport;
    this._subnetBroadcastInIppool = config.subnetBroadcastInIppool;
    this._tcpSessionQuota = config.tcpSessionQuota;
    this._type = config.type;
    this._udpSessionQuota = config.udpSessionQuota;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_nat64_route - computed: true, optional: true, required: false
  private _addNat64Route?: string; 
  public get addNat64Route() {
    return this.getStringAttribute('add_nat64_route');
  }
  public set addNat64Route(value: string) {
    this._addNat64Route = value;
  }
  public resetAddNat64Route() {
    this._addNat64Route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNat64RouteInput() {
    return this._addNat64Route;
  }

  // arp_intf - computed: false, optional: true, required: false
  private _arpIntf?: string; 
  public get arpIntf() {
    return this.getStringAttribute('arp_intf');
  }
  public set arpIntf(value: string) {
    this._arpIntf = value;
  }
  public resetArpIntf() {
    this._arpIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpIntfInput() {
    return this._arpIntf;
  }

  // arp_reply - computed: true, optional: true, required: false
  private _arpReply?: string; 
  public get arpReply() {
    return this.getStringAttribute('arp_reply');
  }
  public set arpReply(value: string) {
    this._arpReply = value;
  }
  public resetArpReply() {
    this._arpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReplyInput() {
    return this._arpReply;
  }

  // associated_interface - computed: false, optional: true, required: false
  private _associatedInterface?: string; 
  public get associatedInterface() {
    return this.getStringAttribute('associated_interface');
  }
  public set associatedInterface(value: string) {
    this._associatedInterface = value;
  }
  public resetAssociatedInterface() {
    this._associatedInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInterfaceInput() {
    return this._associatedInterface;
  }

  // block_size - computed: true, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
  }

  // client_prefix_length - computed: true, optional: true, required: false
  private _clientPrefixLength?: number; 
  public get clientPrefixLength() {
    return this.getNumberAttribute('client_prefix_length');
  }
  public set clientPrefixLength(value: number) {
    this._clientPrefixLength = value;
  }
  public resetClientPrefixLength() {
    this._clientPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrefixLengthInput() {
    return this._clientPrefixLength;
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

  // endip - computed: false, optional: false, required: true
  private _endip?: string; 
  public get endip() {
    return this.getStringAttribute('endip');
  }
  public set endip(value: string) {
    this._endip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endipInput() {
    return this._endip;
  }

  // endport - computed: true, optional: true, required: false
  private _endport?: number; 
  public get endport() {
    return this.getNumberAttribute('endport');
  }
  public set endport(value: number) {
    this._endport = value;
  }
  public resetEndport() {
    this._endport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endportInput() {
    return this._endport;
  }

  // icmp_session_quota - computed: false, optional: true, required: false
  private _icmpSessionQuota?: number; 
  public get icmpSessionQuota() {
    return this.getNumberAttribute('icmp_session_quota');
  }
  public set icmpSessionQuota(value: number) {
    this._icmpSessionQuota = value;
  }
  public resetIcmpSessionQuota() {
    this._icmpSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSessionQuotaInput() {
    return this._icmpSessionQuota;
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

  // nat64 - computed: true, optional: true, required: false
  private _nat64?: string; 
  public get nat64() {
    return this.getStringAttribute('nat64');
  }
  public set nat64(value: string) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
  }

  // num_blocks_per_user - computed: true, optional: true, required: false
  private _numBlocksPerUser?: number; 
  public get numBlocksPerUser() {
    return this.getNumberAttribute('num_blocks_per_user');
  }
  public set numBlocksPerUser(value: number) {
    this._numBlocksPerUser = value;
  }
  public resetNumBlocksPerUser() {
    this._numBlocksPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBlocksPerUserInput() {
    return this._numBlocksPerUser;
  }

  // pba_interim_log - computed: false, optional: true, required: false
  private _pbaInterimLog?: number; 
  public get pbaInterimLog() {
    return this.getNumberAttribute('pba_interim_log');
  }
  public set pbaInterimLog(value: number) {
    this._pbaInterimLog = value;
  }
  public resetPbaInterimLog() {
    this._pbaInterimLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbaInterimLogInput() {
    return this._pbaInterimLog;
  }

  // pba_timeout - computed: true, optional: true, required: false
  private _pbaTimeout?: number; 
  public get pbaTimeout() {
    return this.getNumberAttribute('pba_timeout');
  }
  public set pbaTimeout(value: number) {
    this._pbaTimeout = value;
  }
  public resetPbaTimeout() {
    this._pbaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbaTimeoutInput() {
    return this._pbaTimeout;
  }

  // permit_any_host - computed: true, optional: true, required: false
  private _permitAnyHost?: string; 
  public get permitAnyHost() {
    return this.getStringAttribute('permit_any_host');
  }
  public set permitAnyHost(value: string) {
    this._permitAnyHost = value;
  }
  public resetPermitAnyHost() {
    this._permitAnyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAnyHostInput() {
    return this._permitAnyHost;
  }

  // port_per_user - computed: false, optional: true, required: false
  private _portPerUser?: number; 
  public get portPerUser() {
    return this.getNumberAttribute('port_per_user');
  }
  public set portPerUser(value: number) {
    this._portPerUser = value;
  }
  public resetPortPerUser() {
    this._portPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPerUserInput() {
    return this._portPerUser;
  }

  // privileged_port_use_pba - computed: true, optional: true, required: false
  private _privilegedPortUsePba?: string; 
  public get privilegedPortUsePba() {
    return this.getStringAttribute('privileged_port_use_pba');
  }
  public set privilegedPortUsePba(value: string) {
    this._privilegedPortUsePba = value;
  }
  public resetPrivilegedPortUsePba() {
    this._privilegedPortUsePba = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedPortUsePbaInput() {
    return this._privilegedPortUsePba;
  }

  // source_endip - computed: true, optional: true, required: false
  private _sourceEndip?: string; 
  public get sourceEndip() {
    return this.getStringAttribute('source_endip');
  }
  public set sourceEndip(value: string) {
    this._sourceEndip = value;
  }
  public resetSourceEndip() {
    this._sourceEndip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndipInput() {
    return this._sourceEndip;
  }

  // source_prefix6 - computed: true, optional: true, required: false
  private _sourcePrefix6?: string; 
  public get sourcePrefix6() {
    return this.getStringAttribute('source_prefix6');
  }
  public set sourcePrefix6(value: string) {
    this._sourcePrefix6 = value;
  }
  public resetSourcePrefix6() {
    this._sourcePrefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefix6Input() {
    return this._sourcePrefix6;
  }

  // source_startip - computed: true, optional: true, required: false
  private _sourceStartip?: string; 
  public get sourceStartip() {
    return this.getStringAttribute('source_startip');
  }
  public set sourceStartip(value: string) {
    this._sourceStartip = value;
  }
  public resetSourceStartip() {
    this._sourceStartip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStartipInput() {
    return this._sourceStartip;
  }

  // startip - computed: false, optional: false, required: true
  private _startip?: string; 
  public get startip() {
    return this.getStringAttribute('startip');
  }
  public set startip(value: string) {
    this._startip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startipInput() {
    return this._startip;
  }

  // startport - computed: true, optional: true, required: false
  private _startport?: number; 
  public get startport() {
    return this.getNumberAttribute('startport');
  }
  public set startport(value: number) {
    this._startport = value;
  }
  public resetStartport() {
    this._startport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startportInput() {
    return this._startport;
  }

  // subnet_broadcast_in_ippool - computed: true, optional: true, required: false
  private _subnetBroadcastInIppool?: string; 
  public get subnetBroadcastInIppool() {
    return this.getStringAttribute('subnet_broadcast_in_ippool');
  }
  public set subnetBroadcastInIppool(value: string) {
    this._subnetBroadcastInIppool = value;
  }
  public resetSubnetBroadcastInIppool() {
    this._subnetBroadcastInIppool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetBroadcastInIppoolInput() {
    return this._subnetBroadcastInIppool;
  }

  // tcp_session_quota - computed: false, optional: true, required: false
  private _tcpSessionQuota?: number; 
  public get tcpSessionQuota() {
    return this.getNumberAttribute('tcp_session_quota');
  }
  public set tcpSessionQuota(value: number) {
    this._tcpSessionQuota = value;
  }
  public resetTcpSessionQuota() {
    this._tcpSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionQuotaInput() {
    return this._tcpSessionQuota;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // udp_session_quota - computed: false, optional: true, required: false
  private _udpSessionQuota?: number; 
  public get udpSessionQuota() {
    return this.getNumberAttribute('udp_session_quota');
  }
  public set udpSessionQuota(value: number) {
    this._udpSessionQuota = value;
  }
  public resetUdpSessionQuota() {
    this._udpSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionQuotaInput() {
    return this._udpSessionQuota;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_nat64_route: cdktf.stringToTerraform(this._addNat64Route),
      arp_intf: cdktf.stringToTerraform(this._arpIntf),
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      associated_interface: cdktf.stringToTerraform(this._associatedInterface),
      block_size: cdktf.numberToTerraform(this._blockSize),
      client_prefix_length: cdktf.numberToTerraform(this._clientPrefixLength),
      comments: cdktf.stringToTerraform(this._comments),
      endip: cdktf.stringToTerraform(this._endip),
      endport: cdktf.numberToTerraform(this._endport),
      icmp_session_quota: cdktf.numberToTerraform(this._icmpSessionQuota),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat64: cdktf.stringToTerraform(this._nat64),
      num_blocks_per_user: cdktf.numberToTerraform(this._numBlocksPerUser),
      pba_interim_log: cdktf.numberToTerraform(this._pbaInterimLog),
      pba_timeout: cdktf.numberToTerraform(this._pbaTimeout),
      permit_any_host: cdktf.stringToTerraform(this._permitAnyHost),
      port_per_user: cdktf.numberToTerraform(this._portPerUser),
      privileged_port_use_pba: cdktf.stringToTerraform(this._privilegedPortUsePba),
      source_endip: cdktf.stringToTerraform(this._sourceEndip),
      source_prefix6: cdktf.stringToTerraform(this._sourcePrefix6),
      source_startip: cdktf.stringToTerraform(this._sourceStartip),
      startip: cdktf.stringToTerraform(this._startip),
      startport: cdktf.numberToTerraform(this._startport),
      subnet_broadcast_in_ippool: cdktf.stringToTerraform(this._subnetBroadcastInIppool),
      tcp_session_quota: cdktf.numberToTerraform(this._tcpSessionQuota),
      type: cdktf.stringToTerraform(this._type),
      udp_session_quota: cdktf.numberToTerraform(this._udpSessionQuota),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_nat64_route: {
        value: cdktf.stringToHclTerraform(this._addNat64Route),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_intf: {
        value: cdktf.stringToHclTerraform(this._arpIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_reply: {
        value: cdktf.stringToHclTerraform(this._arpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_interface: {
        value: cdktf.stringToHclTerraform(this._associatedInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_size: {
        value: cdktf.numberToHclTerraform(this._blockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_prefix_length: {
        value: cdktf.numberToHclTerraform(this._clientPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endip: {
        value: cdktf.stringToHclTerraform(this._endip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endport: {
        value: cdktf.numberToHclTerraform(this._endport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icmp_session_quota: {
        value: cdktf.numberToHclTerraform(this._icmpSessionQuota),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64: {
        value: cdktf.stringToHclTerraform(this._nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_blocks_per_user: {
        value: cdktf.numberToHclTerraform(this._numBlocksPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pba_interim_log: {
        value: cdktf.numberToHclTerraform(this._pbaInterimLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pba_timeout: {
        value: cdktf.numberToHclTerraform(this._pbaTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permit_any_host: {
        value: cdktf.stringToHclTerraform(this._permitAnyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_per_user: {
        value: cdktf.numberToHclTerraform(this._portPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      privileged_port_use_pba: {
        value: cdktf.stringToHclTerraform(this._privilegedPortUsePba),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endip: {
        value: cdktf.stringToHclTerraform(this._sourceEndip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_prefix6: {
        value: cdktf.stringToHclTerraform(this._sourcePrefix6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_startip: {
        value: cdktf.stringToHclTerraform(this._sourceStartip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startip: {
        value: cdktf.stringToHclTerraform(this._startip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startport: {
        value: cdktf.numberToHclTerraform(this._startport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_broadcast_in_ippool: {
        value: cdktf.stringToHclTerraform(this._subnetBroadcastInIppool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_session_quota: {
        value: cdktf.numberToHclTerraform(this._tcpSessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_session_quota: {
        value: cdktf.numberToHclTerraform(this._udpSessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
