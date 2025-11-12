// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallHyperscalepolicy64Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#action PackagesFirewallHyperscalepolicy64#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#adom PackagesFirewallHyperscalepolicy64#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#cgn_eif PackagesFirewallHyperscalepolicy64#cgn_eif}
  */
  readonly cgnEif?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#cgn_eim PackagesFirewallHyperscalepolicy64#cgn_eim}
  */
  readonly cgnEim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#cgn_log_server_grp PackagesFirewallHyperscalepolicy64#cgn_log_server_grp}
  */
  readonly cgnLogServerGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#cgn_resource_quota PackagesFirewallHyperscalepolicy64#cgn_resource_quota}
  */
  readonly cgnResourceQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#cgn_session_quota PackagesFirewallHyperscalepolicy64#cgn_session_quota}
  */
  readonly cgnSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#comments PackagesFirewallHyperscalepolicy64#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#dstaddr PackagesFirewallHyperscalepolicy64#dstaddr}
  */
  readonly dstaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#dstintf PackagesFirewallHyperscalepolicy64#dstintf}
  */
  readonly dstintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#id PackagesFirewallHyperscalepolicy64#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#ippool PackagesFirewallHyperscalepolicy64#ippool}
  */
  readonly ippool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#name PackagesFirewallHyperscalepolicy64#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#pkg PackagesFirewallHyperscalepolicy64#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#pkg_folder_path PackagesFirewallHyperscalepolicy64#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#policy_offload PackagesFirewallHyperscalepolicy64#policy_offload}
  */
  readonly policyOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#policyid PackagesFirewallHyperscalepolicy64#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#poolname PackagesFirewallHyperscalepolicy64#poolname}
  */
  readonly poolname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#scopetype PackagesFirewallHyperscalepolicy64#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#service PackagesFirewallHyperscalepolicy64#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#srcaddr PackagesFirewallHyperscalepolicy64#srcaddr}
  */
  readonly srcaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#srcintf PackagesFirewallHyperscalepolicy64#srcintf}
  */
  readonly srcintf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#status PackagesFirewallHyperscalepolicy64#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#tcp_timeout_pid PackagesFirewallHyperscalepolicy64#tcp_timeout_pid}
  */
  readonly tcpTimeoutPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#traffic_shaper PackagesFirewallHyperscalepolicy64#traffic_shaper}
  */
  readonly trafficShaper?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#traffic_shaper_reverse PackagesFirewallHyperscalepolicy64#traffic_shaper_reverse}
  */
  readonly trafficShaperReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#udp_timeout_pid PackagesFirewallHyperscalepolicy64#udp_timeout_pid}
  */
  readonly udpTimeoutPid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#uuid PackagesFirewallHyperscalepolicy64#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64 fortimanager_packages_firewall_hyperscalepolicy64}
*/
export class PackagesFirewallHyperscalepolicy64 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_hyperscalepolicy64";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallHyperscalepolicy64 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallHyperscalepolicy64 to import
  * @param importFromId The id of the existing PackagesFirewallHyperscalepolicy64 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallHyperscalepolicy64 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_hyperscalepolicy64", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_hyperscalepolicy64 fortimanager_packages_firewall_hyperscalepolicy64} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallHyperscalepolicy64Config
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallHyperscalepolicy64Config) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_hyperscalepolicy64',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._cgnEif = config.cgnEif;
    this._cgnEim = config.cgnEim;
    this._cgnLogServerGrp = config.cgnLogServerGrp;
    this._cgnResourceQuota = config.cgnResourceQuota;
    this._cgnSessionQuota = config.cgnSessionQuota;
    this._comments = config.comments;
    this._dstaddr = config.dstaddr;
    this._dstintf = config.dstintf;
    this._id = config.id;
    this._ippool = config.ippool;
    this._name = config.name;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyOffload = config.policyOffload;
    this._policyid = config.policyid;
    this._poolname = config.poolname;
    this._scopetype = config.scopetype;
    this._service = config.service;
    this._srcaddr = config.srcaddr;
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

  // cgn_eif - computed: true, optional: true, required: false
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

  // cgn_eim - computed: true, optional: true, required: false
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

  // cgn_resource_quota - computed: true, optional: true, required: false
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

  // cgn_session_quota - computed: true, optional: true, required: false
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

  // ippool - computed: true, optional: true, required: false
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
      cgn_eif: cdktf.stringToTerraform(this._cgnEif),
      cgn_eim: cdktf.stringToTerraform(this._cgnEim),
      cgn_log_server_grp: cdktf.stringToTerraform(this._cgnLogServerGrp),
      cgn_resource_quota: cdktf.numberToTerraform(this._cgnResourceQuota),
      cgn_session_quota: cdktf.numberToTerraform(this._cgnSessionQuota),
      comments: cdktf.stringToTerraform(this._comments),
      dstaddr: cdktf.stringToTerraform(this._dstaddr),
      dstintf: cdktf.stringToTerraform(this._dstintf),
      id: cdktf.stringToTerraform(this._id),
      ippool: cdktf.stringToTerraform(this._ippool),
      name: cdktf.stringToTerraform(this._name),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policy_offload: cdktf.stringToTerraform(this._policyOffload),
      policyid: cdktf.numberToTerraform(this._policyid),
      poolname: cdktf.stringToTerraform(this._poolname),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service: cdktf.stringToTerraform(this._service),
      srcaddr: cdktf.stringToTerraform(this._srcaddr),
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
      dstaddr: {
        value: cdktf.stringToHclTerraform(this._dstaddr),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      srcaddr: {
        value: cdktf.stringToHclTerraform(this._srcaddr),
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
