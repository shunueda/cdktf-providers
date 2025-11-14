// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallHyperscalepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#action PackagesFirewallHyperscalepolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#adom PackagesFirewallHyperscalepolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#auto_asic_offload PackagesFirewallHyperscalepolicy#auto_asic_offload}
  */
  readonly autoAsicOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#cgn_eif PackagesFirewallHyperscalepolicy#cgn_eif}
  */
  readonly cgnEif?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#cgn_eim PackagesFirewallHyperscalepolicy#cgn_eim}
  */
  readonly cgnEim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#cgn_log_server_grp PackagesFirewallHyperscalepolicy#cgn_log_server_grp}
  */
  readonly cgnLogServerGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#cgn_resource_quota PackagesFirewallHyperscalepolicy#cgn_resource_quota}
  */
  readonly cgnResourceQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#cgn_session_quota PackagesFirewallHyperscalepolicy#cgn_session_quota}
  */
  readonly cgnSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#comments PackagesFirewallHyperscalepolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#delay_tcp_npu_session PackagesFirewallHyperscalepolicy#delay_tcp_npu_session}
  */
  readonly delayTcpNpuSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#dstaddr PackagesFirewallHyperscalepolicy#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#dstaddr6 PackagesFirewallHyperscalepolicy#dstaddr6}
  */
  readonly dstaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#dstaddr_negate PackagesFirewallHyperscalepolicy#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#dstintf PackagesFirewallHyperscalepolicy#dstintf}
  */
  readonly dstintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#firewall_session_dirty PackagesFirewallHyperscalepolicy#firewall_session_dirty}
  */
  readonly firewallSessionDirty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#global_label PackagesFirewallHyperscalepolicy#global_label}
  */
  readonly globalLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#id PackagesFirewallHyperscalepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#ippool PackagesFirewallHyperscalepolicy#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#label PackagesFirewallHyperscalepolicy#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#name PackagesFirewallHyperscalepolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#nat PackagesFirewallHyperscalepolicy#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#pkg PackagesFirewallHyperscalepolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#pkg_folder_path PackagesFirewallHyperscalepolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#policy_offload PackagesFirewallHyperscalepolicy#policy_offload}
  */
  readonly policyOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#policyid PackagesFirewallHyperscalepolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#poolname PackagesFirewallHyperscalepolicy#poolname}
  */
  readonly poolname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#poolname6 PackagesFirewallHyperscalepolicy#poolname6}
  */
  readonly poolname6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#scopetype PackagesFirewallHyperscalepolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#send_deny_packet PackagesFirewallHyperscalepolicy#send_deny_packet}
  */
  readonly sendDenyPacket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#service PackagesFirewallHyperscalepolicy#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#service_negate PackagesFirewallHyperscalepolicy#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#srcaddr PackagesFirewallHyperscalepolicy#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#srcaddr6 PackagesFirewallHyperscalepolicy#srcaddr6}
  */
  readonly srcaddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#srcaddr_negate PackagesFirewallHyperscalepolicy#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#srcintf PackagesFirewallHyperscalepolicy#srcintf}
  */
  readonly srcintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#status PackagesFirewallHyperscalepolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#tcp_timeout_pid PackagesFirewallHyperscalepolicy#tcp_timeout_pid}
  */
  readonly tcpTimeoutPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#traffic_shaper PackagesFirewallHyperscalepolicy#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#traffic_shaper_reverse PackagesFirewallHyperscalepolicy#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#udp_timeout_pid PackagesFirewallHyperscalepolicy#udp_timeout_pid}
  */
  readonly udpTimeoutPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#uuid PackagesFirewallHyperscalepolicy#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy fortimanager_packages_firewall_hyperscalepolicy}
*/
export class PackagesFirewallHyperscalepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_hyperscalepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallHyperscalepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallHyperscalepolicy to import
  * @param importFromId The id of the existing PackagesFirewallHyperscalepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallHyperscalepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_hyperscalepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_hyperscalepolicy fortimanager_packages_firewall_hyperscalepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallHyperscalepolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallHyperscalepolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_hyperscalepolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._adom = config.adom;
    this._autoAsicOffload = config.autoAsicOffload;
    this._cgnEif = config.cgnEif;
    this._cgnEim = config.cgnEim;
    this._cgnLogServerGrp = config.cgnLogServerGrp;
    this._cgnResourceQuota = config.cgnResourceQuota;
    this._cgnSessionQuota = config.cgnSessionQuota;
    this._comments = config.comments;
    this._delayTcpNpuSession = config.delayTcpNpuSession;
    this._dstaddr = config.dstaddr;
    this._dstaddr6 = config.dstaddr6;
    this._dstaddrNegate = config.dstaddrNegate;
    this._dstintf = config.dstintf;
    this._firewallSessionDirty = config.firewallSessionDirty;
    this._globalLabel = config.globalLabel;
    this._id = config.id;
    this._ippool = config.ippool;
    this._label = config.label;
    this._name = config.name;
    this._nat = config.nat;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyOffload = config.policyOffload;
    this._policyid = config.policyid;
    this._poolname = config.poolname;
    this._poolname6 = config.poolname6;
    this._scopetype = config.scopetype;
    this._sendDenyPacket = config.sendDenyPacket;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._srcaddr = config.srcaddr;
    this._srcaddr6 = config.srcaddr6;
    this._srcaddrNegate = config.srcaddrNegate;
    this._srcintf = config.srcintf;
    this._status = config.status;
    this._tcpTimeoutPid = config.tcpTimeoutPid;
    this._trafficShaper = config.trafficShaper;
    this._trafficShaperReverse = config.trafficShaperReverse;
    this._udpTimeoutPid = config.udpTimeoutPid;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auto_asic_offload - computed: true, optional: true, required: false
  private _autoAsicOffload?: string; 
  public get autoAsicOffload() {
    return this.getStringAttribute('auto_asic_offload');
  }
  public set autoAsicOffload(value: string) {
    this._autoAsicOffload = value;
  }
  public resetAutoAsicOffload() {
    this._autoAsicOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoAsicOffloadInput() {
    return this._autoAsicOffload;
  }

  // cgn_eif - computed: false, optional: true, required: false
  private _cgnEif?: string; 
  public get cgnEif() {
    return this.getStringAttribute('cgn_eif');
  }
  public set cgnEif(value: string) {
    this._cgnEif = value;
  }
  public resetCgnEif() {
    this._cgnEif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnEifInput() {
    return this._cgnEif;
  }

  // cgn_eim - computed: false, optional: true, required: false
  private _cgnEim?: string; 
  public get cgnEim() {
    return this.getStringAttribute('cgn_eim');
  }
  public set cgnEim(value: string) {
    this._cgnEim = value;
  }
  public resetCgnEim() {
    this._cgnEim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnEimInput() {
    return this._cgnEim;
  }

  // cgn_log_server_grp - computed: false, optional: true, required: false
  private _cgnLogServerGrp?: string; 
  public get cgnLogServerGrp() {
    return this.getStringAttribute('cgn_log_server_grp');
  }
  public set cgnLogServerGrp(value: string) {
    this._cgnLogServerGrp = value;
  }
  public resetCgnLogServerGrp() {
    this._cgnLogServerGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnLogServerGrpInput() {
    return this._cgnLogServerGrp;
  }

  // cgn_resource_quota - computed: false, optional: true, required: false
  private _cgnResourceQuota?: number; 
  public get cgnResourceQuota() {
    return this.getNumberAttribute('cgn_resource_quota');
  }
  public set cgnResourceQuota(value: number) {
    this._cgnResourceQuota = value;
  }
  public resetCgnResourceQuota() {
    this._cgnResourceQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnResourceQuotaInput() {
    return this._cgnResourceQuota;
  }

  // cgn_session_quota - computed: false, optional: true, required: false
  private _cgnSessionQuota?: number; 
  public get cgnSessionQuota() {
    return this.getNumberAttribute('cgn_session_quota');
  }
  public set cgnSessionQuota(value: number) {
    this._cgnSessionQuota = value;
  }
  public resetCgnSessionQuota() {
    this._cgnSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnSessionQuotaInput() {
    return this._cgnSessionQuota;
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

  // delay_tcp_npu_session - computed: true, optional: true, required: false
  private _delayTcpNpuSession?: string; 
  public get delayTcpNpuSession() {
    return this.getStringAttribute('delay_tcp_npu_session');
  }
  public set delayTcpNpuSession(value: string) {
    this._delayTcpNpuSession = value;
  }
  public resetDelayTcpNpuSession() {
    this._delayTcpNpuSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayTcpNpuSessionInput() {
    return this._delayTcpNpuSession;
  }

  // dstaddr - computed: false, optional: true, required: false
  private _dstaddr?: string; 
  public get dstaddr() {
    return this.getStringAttribute('dstaddr');
  }
  public set dstaddr(value: string) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
  }

  // dstaddr6 - computed: false, optional: true, required: false
  private _dstaddr6?: string; 
  public get dstaddr6() {
    return this.getStringAttribute('dstaddr6');
  }
  public set dstaddr6(value: string) {
    this._dstaddr6 = value;
  }
  public resetDstaddr6() {
    this._dstaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddr6Input() {
    return this._dstaddr6;
  }

  // dstaddr_negate - computed: true, optional: true, required: false
  private _dstaddrNegate?: string; 
  public get dstaddrNegate() {
    return this.getStringAttribute('dstaddr_negate');
  }
  public set dstaddrNegate(value: string) {
    this._dstaddrNegate = value;
  }
  public resetDstaddrNegate() {
    this._dstaddrNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrNegateInput() {
    return this._dstaddrNegate;
  }

  // dstintf - computed: false, optional: true, required: false
  private _dstintf?: string; 
  public get dstintf() {
    return this.getStringAttribute('dstintf');
  }
  public set dstintf(value: string) {
    this._dstintf = value;
  }
  public resetDstintf() {
    this._dstintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstintfInput() {
    return this._dstintf;
  }

  // firewall_session_dirty - computed: true, optional: true, required: false
  private _firewallSessionDirty?: string; 
  public get firewallSessionDirty() {
    return this.getStringAttribute('firewall_session_dirty');
  }
  public set firewallSessionDirty(value: string) {
    this._firewallSessionDirty = value;
  }
  public resetFirewallSessionDirty() {
    this._firewallSessionDirty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallSessionDirtyInput() {
    return this._firewallSessionDirty;
  }

  // global_label - computed: false, optional: true, required: false
  private _globalLabel?: string; 
  public get globalLabel() {
    return this.getStringAttribute('global_label');
  }
  public set globalLabel(value: string) {
    this._globalLabel = value;
  }
  public resetGlobalLabel() {
    this._globalLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalLabelInput() {
    return this._globalLabel;
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

  // ippool - computed: false, optional: true, required: false
  private _ippool?: string; 
  public get ippool() {
    return this.getStringAttribute('ippool');
  }
  public set ippool(value: string) {
    this._ippool = value;
  }
  public resetIppool() {
    this._ippool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolInput() {
    return this._ippool;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // nat - computed: false, optional: true, required: false
  private _nat?: string; 
  public get nat() {
    return this.getStringAttribute('nat');
  }
  public set nat(value: string) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // pkg - computed: false, optional: false, required: true
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // pkg_folder_path - computed: false, optional: true, required: false
  private _pkgFolderPath?: string; 
  public get pkgFolderPath() {
    return this.getStringAttribute('pkg_folder_path');
  }
  public set pkgFolderPath(value: string) {
    this._pkgFolderPath = value;
  }
  public resetPkgFolderPath() {
    this._pkgFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgFolderPathInput() {
    return this._pkgFolderPath;
  }

  // policy_offload - computed: true, optional: true, required: false
  private _policyOffload?: string; 
  public get policyOffload() {
    return this.getStringAttribute('policy_offload');
  }
  public set policyOffload(value: string) {
    this._policyOffload = value;
  }
  public resetPolicyOffload() {
    this._policyOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOffloadInput() {
    return this._policyOffload;
  }

  // policyid - computed: false, optional: true, required: false
  private _policyid?: number; 
  public get policyid() {
    return this.getNumberAttribute('policyid');
  }
  public set policyid(value: number) {
    this._policyid = value;
  }
  public resetPolicyid() {
    this._policyid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyidInput() {
    return this._policyid;
  }

  // poolname - computed: false, optional: true, required: false
  private _poolname?: string; 
  public get poolname() {
    return this.getStringAttribute('poolname');
  }
  public set poolname(value: string) {
    this._poolname = value;
  }
  public resetPoolname() {
    this._poolname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolnameInput() {
    return this._poolname;
  }

  // poolname6 - computed: false, optional: true, required: false
  private _poolname6?: string; 
  public get poolname6() {
    return this.getStringAttribute('poolname6');
  }
  public set poolname6(value: string) {
    this._poolname6 = value;
  }
  public resetPoolname6() {
    this._poolname6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolname6Input() {
    return this._poolname6;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // send_deny_packet - computed: true, optional: true, required: false
  private _sendDenyPacket?: string; 
  public get sendDenyPacket() {
    return this.getStringAttribute('send_deny_packet');
  }
  public set sendDenyPacket(value: string) {
    this._sendDenyPacket = value;
  }
  public resetSendDenyPacket() {
    this._sendDenyPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDenyPacketInput() {
    return this._sendDenyPacket;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_negate - computed: true, optional: true, required: false
  private _serviceNegate?: string; 
  public get serviceNegate() {
    return this.getStringAttribute('service_negate');
  }
  public set serviceNegate(value: string) {
    this._serviceNegate = value;
  }
  public resetServiceNegate() {
    this._serviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNegateInput() {
    return this._serviceNegate;
  }

  // srcaddr - computed: false, optional: true, required: false
  private _srcaddr?: string; 
  public get srcaddr() {
    return this.getStringAttribute('srcaddr');
  }
  public set srcaddr(value: string) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
  }

  // srcaddr6 - computed: false, optional: true, required: false
  private _srcaddr6?: string; 
  public get srcaddr6() {
    return this.getStringAttribute('srcaddr6');
  }
  public set srcaddr6(value: string) {
    this._srcaddr6 = value;
  }
  public resetSrcaddr6() {
    this._srcaddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddr6Input() {
    return this._srcaddr6;
  }

  // srcaddr_negate - computed: true, optional: true, required: false
  private _srcaddrNegate?: string; 
  public get srcaddrNegate() {
    return this.getStringAttribute('srcaddr_negate');
  }
  public set srcaddrNegate(value: string) {
    this._srcaddrNegate = value;
  }
  public resetSrcaddrNegate() {
    this._srcaddrNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrNegateInput() {
    return this._srcaddrNegate;
  }

  // srcintf - computed: false, optional: true, required: false
  private _srcintf?: string; 
  public get srcintf() {
    return this.getStringAttribute('srcintf');
  }
  public set srcintf(value: string) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tcp_timeout_pid - computed: false, optional: true, required: false
  private _tcpTimeoutPid?: string; 
  public get tcpTimeoutPid() {
    return this.getStringAttribute('tcp_timeout_pid');
  }
  public set tcpTimeoutPid(value: string) {
    this._tcpTimeoutPid = value;
  }
  public resetTcpTimeoutPid() {
    this._tcpTimeoutPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutPidInput() {
    return this._tcpTimeoutPid;
  }

  // traffic_shaper - computed: false, optional: true, required: false
  private _trafficShaper?: string; 
  public get trafficShaper() {
    return this.getStringAttribute('traffic_shaper');
  }
  public set trafficShaper(value: string) {
    this._trafficShaper = value;
  }
  public resetTrafficShaper() {
    this._trafficShaper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperInput() {
    return this._trafficShaper;
  }

  // traffic_shaper_reverse - computed: false, optional: true, required: false
  private _trafficShaperReverse?: string; 
  public get trafficShaperReverse() {
    return this.getStringAttribute('traffic_shaper_reverse');
  }
  public set trafficShaperReverse(value: string) {
    this._trafficShaperReverse = value;
  }
  public resetTrafficShaperReverse() {
    this._trafficShaperReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficShaperReverseInput() {
    return this._trafficShaperReverse;
  }

  // udp_timeout_pid - computed: false, optional: true, required: false
  private _udpTimeoutPid?: string; 
  public get udpTimeoutPid() {
    return this.getStringAttribute('udp_timeout_pid');
  }
  public set udpTimeoutPid(value: string) {
    this._udpTimeoutPid = value;
  }
  public resetUdpTimeoutPid() {
    this._udpTimeoutPid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutPidInput() {
    return this._udpTimeoutPid;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      auto_asic_offload: cdktf.stringToTerraform(this._autoAsicOffload),
      cgn_eif: cdktf.stringToTerraform(this._cgnEif),
      cgn_eim: cdktf.stringToTerraform(this._cgnEim),
      cgn_log_server_grp: cdktf.stringToTerraform(this._cgnLogServerGrp),
      cgn_resource_quota: cdktf.numberToTerraform(this._cgnResourceQuota),
      cgn_session_quota: cdktf.numberToTerraform(this._cgnSessionQuota),
      comments: cdktf.stringToTerraform(this._comments),
      delay_tcp_npu_session: cdktf.stringToTerraform(this._delayTcpNpuSession),
      dstaddr: cdktf.stringToTerraform(this._dstaddr),
      dstaddr6: cdktf.stringToTerraform(this._dstaddr6),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      dstintf: cdktf.stringToTerraform(this._dstintf),
      firewall_session_dirty: cdktf.stringToTerraform(this._firewallSessionDirty),
      global_label: cdktf.stringToTerraform(this._globalLabel),
      id: cdktf.stringToTerraform(this._id),
      ippool: cdktf.stringToTerraform(this._ippool),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      nat: cdktf.stringToTerraform(this._nat),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policy_offload: cdktf.stringToTerraform(this._policyOffload),
      policyid: cdktf.numberToTerraform(this._policyid),
      poolname: cdktf.stringToTerraform(this._poolname),
      poolname6: cdktf.stringToTerraform(this._poolname6),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      send_deny_packet: cdktf.stringToTerraform(this._sendDenyPacket),
      service: cdktf.stringToTerraform(this._service),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      srcaddr: cdktf.stringToTerraform(this._srcaddr),
      srcaddr6: cdktf.stringToTerraform(this._srcaddr6),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      srcintf: cdktf.stringToTerraform(this._srcintf),
      status: cdktf.stringToTerraform(this._status),
      tcp_timeout_pid: cdktf.stringToTerraform(this._tcpTimeoutPid),
      traffic_shaper: cdktf.stringToTerraform(this._trafficShaper),
      traffic_shaper_reverse: cdktf.stringToTerraform(this._trafficShaperReverse),
      udp_timeout_pid: cdktf.stringToTerraform(this._udpTimeoutPid),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_asic_offload: {
        value: cdktf.stringToHclTerraform(this._autoAsicOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_eif: {
        value: cdktf.stringToHclTerraform(this._cgnEif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_eim: {
        value: cdktf.stringToHclTerraform(this._cgnEim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_log_server_grp: {
        value: cdktf.stringToHclTerraform(this._cgnLogServerGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_resource_quota: {
        value: cdktf.numberToHclTerraform(this._cgnResourceQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_session_quota: {
        value: cdktf.numberToHclTerraform(this._cgnSessionQuota),
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
      delay_tcp_npu_session: {
        value: cdktf.stringToHclTerraform(this._delayTcpNpuSession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.stringToHclTerraform(this._dstaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr6: {
        value: cdktf.stringToHclTerraform(this._dstaddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr_negate: {
        value: cdktf.stringToHclTerraform(this._dstaddrNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstintf: {
        value: cdktf.stringToHclTerraform(this._dstintf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_session_dirty: {
        value: cdktf.stringToHclTerraform(this._firewallSessionDirty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_label: {
        value: cdktf.stringToHclTerraform(this._globalLabel),
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
      ippool: {
        value: cdktf.stringToHclTerraform(this._ippool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
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
      nat: {
        value: cdktf.stringToHclTerraform(this._nat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkg_folder_path: {
        value: cdktf.stringToHclTerraform(this._pkgFolderPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_offload: {
        value: cdktf.stringToHclTerraform(this._policyOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      poolname: {
        value: cdktf.stringToHclTerraform(this._poolname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poolname6: {
        value: cdktf.stringToHclTerraform(this._poolname6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_deny_packet: {
        value: cdktf.stringToHclTerraform(this._sendDenyPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_negate: {
        value: cdktf.stringToHclTerraform(this._serviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr: {
        value: cdktf.stringToHclTerraform(this._srcaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr6: {
        value: cdktf.stringToHclTerraform(this._srcaddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr_negate: {
        value: cdktf.stringToHclTerraform(this._srcaddrNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcintf: {
        value: cdktf.stringToHclTerraform(this._srcintf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_timeout_pid: {
        value: cdktf.stringToHclTerraform(this._tcpTimeoutPid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaper: {
        value: cdktf.stringToHclTerraform(this._trafficShaper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_shaper_reverse: {
        value: cdktf.stringToHclTerraform(this._trafficShaperReverse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_timeout_pid: {
        value: cdktf.stringToHclTerraform(this._udpTimeoutPid),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
