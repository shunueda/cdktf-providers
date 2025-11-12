// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallCentralsnatmapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#adom PackagesFirewallCentralsnatmap#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#comments PackagesFirewallCentralsnatmap#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#dst_addr PackagesFirewallCentralsnatmap#dst_addr}
  */
  readonly dstAddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#dst_addr6 PackagesFirewallCentralsnatmap#dst_addr6}
  */
  readonly dstAddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#dst_port PackagesFirewallCentralsnatmap#dst_port}
  */
  readonly dstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#dstintf PackagesFirewallCentralsnatmap#dstintf}
  */
  readonly dstintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#id PackagesFirewallCentralsnatmap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#nat PackagesFirewallCentralsnatmap#nat}
  */
  readonly nat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#nat46 PackagesFirewallCentralsnatmap#nat46}
  */
  readonly nat46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#nat64 PackagesFirewallCentralsnatmap#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#nat_ippool PackagesFirewallCentralsnatmap#nat_ippool}
  */
  readonly natIppool?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#nat_ippool6 PackagesFirewallCentralsnatmap#nat_ippool6}
  */
  readonly natIppool6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#nat_port PackagesFirewallCentralsnatmap#nat_port}
  */
  readonly natPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#orig_addr PackagesFirewallCentralsnatmap#orig_addr}
  */
  readonly origAddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#orig_addr6 PackagesFirewallCentralsnatmap#orig_addr6}
  */
  readonly origAddr6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#orig_port PackagesFirewallCentralsnatmap#orig_port}
  */
  readonly origPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#pkg PackagesFirewallCentralsnatmap#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#pkg_folder_path PackagesFirewallCentralsnatmap#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#policyid PackagesFirewallCentralsnatmap#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#port_preserve PackagesFirewallCentralsnatmap#port_preserve}
  */
  readonly portPreserve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#port_random PackagesFirewallCentralsnatmap#port_random}
  */
  readonly portRandom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#protocol PackagesFirewallCentralsnatmap#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#scopetype PackagesFirewallCentralsnatmap#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#srcintf PackagesFirewallCentralsnatmap#srcintf}
  */
  readonly srcintf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#status PackagesFirewallCentralsnatmap#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#type PackagesFirewallCentralsnatmap#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#uuid PackagesFirewallCentralsnatmap#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap fortimanager_packages_firewall_centralsnatmap}
*/
export class PackagesFirewallCentralsnatmap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_centralsnatmap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallCentralsnatmap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallCentralsnatmap to import
  * @param importFromId The id of the existing PackagesFirewallCentralsnatmap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallCentralsnatmap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_centralsnatmap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/packages_firewall_centralsnatmap fortimanager_packages_firewall_centralsnatmap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallCentralsnatmapConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallCentralsnatmapConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_centralsnatmap',
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
    this._adom = config.adom;
    this._comments = config.comments;
    this._dstAddr = config.dstAddr;
    this._dstAddr6 = config.dstAddr6;
    this._dstPort = config.dstPort;
    this._dstintf = config.dstintf;
    this._id = config.id;
    this._nat = config.nat;
    this._nat46 = config.nat46;
    this._nat64 = config.nat64;
    this._natIppool = config.natIppool;
    this._natIppool6 = config.natIppool6;
    this._natPort = config.natPort;
    this._origAddr = config.origAddr;
    this._origAddr6 = config.origAddr6;
    this._origPort = config.origPort;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyid = config.policyid;
    this._portPreserve = config.portPreserve;
    this._portRandom = config.portRandom;
    this._protocol = config.protocol;
    this._scopetype = config.scopetype;
    this._srcintf = config.srcintf;
    this._status = config.status;
    this._type = config.type;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dst_addr - computed: true, optional: true, required: false
  private _dstAddr?: string[]; 
  public get dstAddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dst_addr'));
  }
  public set dstAddr(value: string[]) {
    this._dstAddr = value;
  }
  public resetDstAddr() {
    this._dstAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrInput() {
    return this._dstAddr;
  }

  // dst_addr6 - computed: false, optional: true, required: false
  private _dstAddr6?: string; 
  public get dstAddr6() {
    return this.getStringAttribute('dst_addr6');
  }
  public set dstAddr6(value: string) {
    this._dstAddr6 = value;
  }
  public resetDstAddr6() {
    this._dstAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddr6Input() {
    return this._dstAddr6;
  }

  // dst_port - computed: true, optional: true, required: false
  private _dstPort?: string; 
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }
  public set dstPort(value: string) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // dstintf - computed: true, optional: true, required: false
  private _dstintf?: string[]; 
  public get dstintf() {
    return cdktf.Fn.tolist(this.getListAttribute('dstintf'));
  }
  public set dstintf(value: string[]) {
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

  // nat46 - computed: true, optional: true, required: false
  private _nat46?: string; 
  public get nat46() {
    return this.getStringAttribute('nat46');
  }
  public set nat46(value: string) {
    this._nat46 = value;
  }
  public resetNat46() {
    this._nat46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46Input() {
    return this._nat46;
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

  // nat_ippool - computed: true, optional: true, required: false
  private _natIppool?: string[]; 
  public get natIppool() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_ippool'));
  }
  public set natIppool(value: string[]) {
    this._natIppool = value;
  }
  public resetNatIppool() {
    this._natIppool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIppoolInput() {
    return this._natIppool;
  }

  // nat_ippool6 - computed: true, optional: true, required: false
  private _natIppool6?: string[]; 
  public get natIppool6() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_ippool6'));
  }
  public set natIppool6(value: string[]) {
    this._natIppool6 = value;
  }
  public resetNatIppool6() {
    this._natIppool6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIppool6Input() {
    return this._natIppool6;
  }

  // nat_port - computed: false, optional: true, required: false
  private _natPort?: string; 
  public get natPort() {
    return this.getStringAttribute('nat_port');
  }
  public set natPort(value: string) {
    this._natPort = value;
  }
  public resetNatPort() {
    this._natPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortInput() {
    return this._natPort;
  }

  // orig_addr - computed: true, optional: true, required: false
  private _origAddr?: string[]; 
  public get origAddr() {
    return cdktf.Fn.tolist(this.getListAttribute('orig_addr'));
  }
  public set origAddr(value: string[]) {
    this._origAddr = value;
  }
  public resetOrigAddr() {
    this._origAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get origAddrInput() {
    return this._origAddr;
  }

  // orig_addr6 - computed: false, optional: true, required: false
  private _origAddr6?: string; 
  public get origAddr6() {
    return this.getStringAttribute('orig_addr6');
  }
  public set origAddr6(value: string) {
    this._origAddr6 = value;
  }
  public resetOrigAddr6() {
    this._origAddr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get origAddr6Input() {
    return this._origAddr6;
  }

  // orig_port - computed: false, optional: true, required: false
  private _origPort?: string; 
  public get origPort() {
    return this.getStringAttribute('orig_port');
  }
  public set origPort(value: string) {
    this._origPort = value;
  }
  public resetOrigPort() {
    this._origPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get origPortInput() {
    return this._origPort;
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

  // policyid - computed: true, optional: true, required: false
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

  // port_preserve - computed: true, optional: true, required: false
  private _portPreserve?: string; 
  public get portPreserve() {
    return this.getStringAttribute('port_preserve');
  }
  public set portPreserve(value: string) {
    this._portPreserve = value;
  }
  public resetPortPreserve() {
    this._portPreserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPreserveInput() {
    return this._portPreserve;
  }

  // port_random - computed: true, optional: true, required: false
  private _portRandom?: string; 
  public get portRandom() {
    return this.getStringAttribute('port_random');
  }
  public set portRandom(value: string) {
    this._portRandom = value;
  }
  public resetPortRandom() {
    this._portRandom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRandomInput() {
    return this._portRandom;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

  // srcintf - computed: true, optional: true, required: false
  private _srcintf?: string[]; 
  public get srcintf() {
    return cdktf.Fn.tolist(this.getListAttribute('srcintf'));
  }
  public set srcintf(value: string[]) {
    this._srcintf = value;
  }
  public resetSrcintf() {
    this._srcintf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfInput() {
    return this._srcintf;
  }

  // status - computed: false, optional: true, required: false
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
      adom: cdktf.stringToTerraform(this._adom),
      comments: cdktf.stringToTerraform(this._comments),
      dst_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstAddr),
      dst_addr6: cdktf.stringToTerraform(this._dstAddr6),
      dst_port: cdktf.stringToTerraform(this._dstPort),
      dstintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstintf),
      id: cdktf.stringToTerraform(this._id),
      nat: cdktf.stringToTerraform(this._nat),
      nat46: cdktf.stringToTerraform(this._nat46),
      nat64: cdktf.stringToTerraform(this._nat64),
      nat_ippool: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIppool),
      nat_ippool6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIppool6),
      nat_port: cdktf.stringToTerraform(this._natPort),
      orig_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._origAddr),
      orig_addr6: cdktf.stringToTerraform(this._origAddr6),
      orig_port: cdktf.stringToTerraform(this._origPort),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policyid: cdktf.numberToTerraform(this._policyid),
      port_preserve: cdktf.stringToTerraform(this._portPreserve),
      port_random: cdktf.stringToTerraform(this._portRandom),
      protocol: cdktf.numberToTerraform(this._protocol),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      srcintf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcintf),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_addr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstAddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dst_addr6: {
        value: cdktf.stringToHclTerraform(this._dstAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.stringToHclTerraform(this._dstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      nat46: {
        value: cdktf.stringToHclTerraform(this._nat46),
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
      nat_ippool: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natIppool),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nat_ippool6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._natIppool6),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nat_port: {
        value: cdktf.stringToHclTerraform(this._natPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orig_addr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._origAddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      orig_addr6: {
        value: cdktf.stringToHclTerraform(this._origAddr6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orig_port: {
        value: cdktf.stringToHclTerraform(this._origPort),
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
      policyid: {
        value: cdktf.numberToHclTerraform(this._policyid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_preserve: {
        value: cdktf.stringToHclTerraform(this._portPreserve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_random: {
        value: cdktf.stringToHclTerraform(this._portRandom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.numberToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcintf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcintf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
