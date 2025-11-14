// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallLocalinpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#action PackagesFirewallLocalinpolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#adom PackagesFirewallLocalinpolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#comments PackagesFirewallLocalinpolicy#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#dstaddr PackagesFirewallLocalinpolicy#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#dstaddr_negate PackagesFirewallLocalinpolicy#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#ha_mgmt_intf_only PackagesFirewallLocalinpolicy#ha_mgmt_intf_only}
  */
  readonly haMgmtIntfOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#id PackagesFirewallLocalinpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#internet_service_src PackagesFirewallLocalinpolicy#internet_service_src}
  */
  readonly internetServiceSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#internet_service_src_custom PackagesFirewallLocalinpolicy#internet_service_src_custom}
  */
  readonly internetServiceSrcCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#internet_service_src_custom_group PackagesFirewallLocalinpolicy#internet_service_src_custom_group}
  */
  readonly internetServiceSrcCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#internet_service_src_fortiguard PackagesFirewallLocalinpolicy#internet_service_src_fortiguard}
  */
  readonly internetServiceSrcFortiguard?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#internet_service_src_group PackagesFirewallLocalinpolicy#internet_service_src_group}
  */
  readonly internetServiceSrcGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#internet_service_src_name PackagesFirewallLocalinpolicy#internet_service_src_name}
  */
  readonly internetServiceSrcName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#internet_service_src_negate PackagesFirewallLocalinpolicy#internet_service_src_negate}
  */
  readonly internetServiceSrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#intf PackagesFirewallLocalinpolicy#intf}
  */
  readonly intf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#logtraffic PackagesFirewallLocalinpolicy#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#pkg PackagesFirewallLocalinpolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#pkg_folder_path PackagesFirewallLocalinpolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#policyid PackagesFirewallLocalinpolicy#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#schedule PackagesFirewallLocalinpolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#scopetype PackagesFirewallLocalinpolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#service PackagesFirewallLocalinpolicy#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#service_negate PackagesFirewallLocalinpolicy#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#srcaddr PackagesFirewallLocalinpolicy#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#srcaddr_negate PackagesFirewallLocalinpolicy#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#status PackagesFirewallLocalinpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#uuid PackagesFirewallLocalinpolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#virtual_patch PackagesFirewallLocalinpolicy#virtual_patch}
  */
  readonly virtualPatch?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy fortimanager_packages_firewall_localinpolicy}
*/
export class PackagesFirewallLocalinpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_localinpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallLocalinpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallLocalinpolicy to import
  * @param importFromId The id of the existing PackagesFirewallLocalinpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallLocalinpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_localinpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy fortimanager_packages_firewall_localinpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallLocalinpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallLocalinpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_localinpolicy',
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
    this._comments = config.comments;
    this._dstaddr = config.dstaddr;
    this._dstaddrNegate = config.dstaddrNegate;
    this._haMgmtIntfOnly = config.haMgmtIntfOnly;
    this._id = config.id;
    this._internetServiceSrc = config.internetServiceSrc;
    this._internetServiceSrcCustom = config.internetServiceSrcCustom;
    this._internetServiceSrcCustomGroup = config.internetServiceSrcCustomGroup;
    this._internetServiceSrcFortiguard = config.internetServiceSrcFortiguard;
    this._internetServiceSrcGroup = config.internetServiceSrcGroup;
    this._internetServiceSrcName = config.internetServiceSrcName;
    this._internetServiceSrcNegate = config.internetServiceSrcNegate;
    this._intf = config.intf;
    this._logtraffic = config.logtraffic;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._policyid = config.policyid;
    this._schedule = config.schedule;
    this._scopetype = config.scopetype;
    this._service = config.service;
    this._serviceNegate = config.serviceNegate;
    this._srcaddr = config.srcaddr;
    this._srcaddrNegate = config.srcaddrNegate;
    this._status = config.status;
    this._uuid = config.uuid;
    this._virtualPatch = config.virtualPatch;
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

  // dstaddr - computed: true, optional: true, required: false
  private _dstaddr?: string[]; 
  public get dstaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('dstaddr'));
  }
  public set dstaddr(value: string[]) {
    this._dstaddr = value;
  }
  public resetDstaddr() {
    this._dstaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstaddrInput() {
    return this._dstaddr;
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

  // ha_mgmt_intf_only - computed: true, optional: true, required: false
  private _haMgmtIntfOnly?: string; 
  public get haMgmtIntfOnly() {
    return this.getStringAttribute('ha_mgmt_intf_only');
  }
  public set haMgmtIntfOnly(value: string) {
    this._haMgmtIntfOnly = value;
  }
  public resetHaMgmtIntfOnly() {
    this._haMgmtIntfOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haMgmtIntfOnlyInput() {
    return this._haMgmtIntfOnly;
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

  // internet_service_src - computed: true, optional: true, required: false
  private _internetServiceSrc?: string; 
  public get internetServiceSrc() {
    return this.getStringAttribute('internet_service_src');
  }
  public set internetServiceSrc(value: string) {
    this._internetServiceSrc = value;
  }
  public resetInternetServiceSrc() {
    this._internetServiceSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcInput() {
    return this._internetServiceSrc;
  }

  // internet_service_src_custom - computed: true, optional: true, required: false
  private _internetServiceSrcCustom?: string[]; 
  public get internetServiceSrcCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_custom'));
  }
  public set internetServiceSrcCustom(value: string[]) {
    this._internetServiceSrcCustom = value;
  }
  public resetInternetServiceSrcCustom() {
    this._internetServiceSrcCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomInput() {
    return this._internetServiceSrcCustom;
  }

  // internet_service_src_custom_group - computed: true, optional: true, required: false
  private _internetServiceSrcCustomGroup?: string[]; 
  public get internetServiceSrcCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_custom_group'));
  }
  public set internetServiceSrcCustomGroup(value: string[]) {
    this._internetServiceSrcCustomGroup = value;
  }
  public resetInternetServiceSrcCustomGroup() {
    this._internetServiceSrcCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcCustomGroupInput() {
    return this._internetServiceSrcCustomGroup;
  }

  // internet_service_src_fortiguard - computed: true, optional: true, required: false
  private _internetServiceSrcFortiguard?: string[]; 
  public get internetServiceSrcFortiguard() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_fortiguard'));
  }
  public set internetServiceSrcFortiguard(value: string[]) {
    this._internetServiceSrcFortiguard = value;
  }
  public resetInternetServiceSrcFortiguard() {
    this._internetServiceSrcFortiguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcFortiguardInput() {
    return this._internetServiceSrcFortiguard;
  }

  // internet_service_src_group - computed: true, optional: true, required: false
  private _internetServiceSrcGroup?: string[]; 
  public get internetServiceSrcGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_group'));
  }
  public set internetServiceSrcGroup(value: string[]) {
    this._internetServiceSrcGroup = value;
  }
  public resetInternetServiceSrcGroup() {
    this._internetServiceSrcGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcGroupInput() {
    return this._internetServiceSrcGroup;
  }

  // internet_service_src_name - computed: true, optional: true, required: false
  private _internetServiceSrcName?: string[]; 
  public get internetServiceSrcName() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service_src_name'));
  }
  public set internetServiceSrcName(value: string[]) {
    this._internetServiceSrcName = value;
  }
  public resetInternetServiceSrcName() {
    this._internetServiceSrcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNameInput() {
    return this._internetServiceSrcName;
  }

  // internet_service_src_negate - computed: true, optional: true, required: false
  private _internetServiceSrcNegate?: string; 
  public get internetServiceSrcNegate() {
    return this.getStringAttribute('internet_service_src_negate');
  }
  public set internetServiceSrcNegate(value: string) {
    this._internetServiceSrcNegate = value;
  }
  public resetInternetServiceSrcNegate() {
    this._internetServiceSrcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceSrcNegateInput() {
    return this._internetServiceSrcNegate;
  }

  // intf - computed: true, optional: true, required: false
  private _intf?: string[]; 
  public get intf() {
    return cdktf.Fn.tolist(this.getListAttribute('intf'));
  }
  public set intf(value: string[]) {
    this._intf = value;
  }
  public resetIntf() {
    this._intf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfInput() {
    return this._intf;
  }

  // logtraffic - computed: false, optional: true, required: false
  private _logtraffic?: string; 
  public get logtraffic() {
    return this.getStringAttribute('logtraffic');
  }
  public set logtraffic(value: string) {
    this._logtraffic = value;
  }
  public resetLogtraffic() {
    this._logtraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logtrafficInput() {
    return this._logtraffic;
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

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
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

  // service - computed: true, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return cdktf.Fn.tolist(this.getListAttribute('service'));
  }
  public set service(value: string[]) {
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

  // srcaddr - computed: true, optional: true, required: false
  private _srcaddr?: string[]; 
  public get srcaddr() {
    return cdktf.Fn.tolist(this.getListAttribute('srcaddr'));
  }
  public set srcaddr(value: string[]) {
    this._srcaddr = value;
  }
  public resetSrcaddr() {
    this._srcaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcaddrInput() {
    return this._srcaddr;
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

  // virtual_patch - computed: true, optional: true, required: false
  private _virtualPatch?: string; 
  public get virtualPatch() {
    return this.getStringAttribute('virtual_patch');
  }
  public set virtualPatch(value: string) {
    this._virtualPatch = value;
  }
  public resetVirtualPatch() {
    this._virtualPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPatchInput() {
    return this._virtualPatch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      adom: cdktf.stringToTerraform(this._adom),
      comments: cdktf.stringToTerraform(this._comments),
      dstaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstaddr),
      dstaddr_negate: cdktf.stringToTerraform(this._dstaddrNegate),
      ha_mgmt_intf_only: cdktf.stringToTerraform(this._haMgmtIntfOnly),
      id: cdktf.stringToTerraform(this._id),
      internet_service_src: cdktf.stringToTerraform(this._internetServiceSrc),
      internet_service_src_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcCustom),
      internet_service_src_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcCustomGroup),
      internet_service_src_fortiguard: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcFortiguard),
      internet_service_src_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcGroup),
      internet_service_src_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetServiceSrcName),
      internet_service_src_negate: cdktf.stringToTerraform(this._internetServiceSrcNegate),
      intf: cdktf.listMapper(cdktf.stringToTerraform, false)(this._intf),
      logtraffic: cdktf.stringToTerraform(this._logtraffic),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      policyid: cdktf.numberToTerraform(this._policyid),
      schedule: cdktf.stringToTerraform(this._schedule),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      service_negate: cdktf.stringToTerraform(this._serviceNegate),
      srcaddr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcaddr),
      srcaddr_negate: cdktf.stringToTerraform(this._srcaddrNegate),
      status: cdktf.stringToTerraform(this._status),
      uuid: cdktf.stringToTerraform(this._uuid),
      virtual_patch: cdktf.stringToTerraform(this._virtualPatch),
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
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dstaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dstaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dstaddr_negate: {
        value: cdktf.stringToHclTerraform(this._dstaddrNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_mgmt_intf_only: {
        value: cdktf.stringToHclTerraform(this._haMgmtIntfOnly),
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
      internet_service_src: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service_src_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcCustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_fortiguard: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcFortiguard),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetServiceSrcName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service_src_negate: {
        value: cdktf.stringToHclTerraform(this._internetServiceSrcNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intf: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._intf),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      logtraffic: {
        value: cdktf.stringToHclTerraform(this._logtraffic),
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
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_negate: {
        value: cdktf.stringToHclTerraform(this._serviceNegate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcaddr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._srcaddr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      srcaddr_negate: {
        value: cdktf.stringToHclTerraform(this._srcaddrNegate),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_patch: {
        value: cdktf.stringToHclTerraform(this._virtualPatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
