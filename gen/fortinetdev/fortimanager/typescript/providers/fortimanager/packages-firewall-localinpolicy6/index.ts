// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesFirewallLocalinpolicy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#action PackagesFirewallLocalinpolicy6#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#adom PackagesFirewallLocalinpolicy6#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#comments PackagesFirewallLocalinpolicy6#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#dstaddr PackagesFirewallLocalinpolicy6#dstaddr}
  */
  readonly dstaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#dstaddr_negate PackagesFirewallLocalinpolicy6#dstaddr_negate}
  */
  readonly dstaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#id PackagesFirewallLocalinpolicy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#internet_service6_src PackagesFirewallLocalinpolicy6#internet_service6_src}
  */
  readonly internetService6Src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#internet_service6_src_custom PackagesFirewallLocalinpolicy6#internet_service6_src_custom}
  */
  readonly internetService6SrcCustom?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#internet_service6_src_custom_group PackagesFirewallLocalinpolicy6#internet_service6_src_custom_group}
  */
  readonly internetService6SrcCustomGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#internet_service6_src_fortiguard PackagesFirewallLocalinpolicy6#internet_service6_src_fortiguard}
  */
  readonly internetService6SrcFortiguard?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#internet_service6_src_group PackagesFirewallLocalinpolicy6#internet_service6_src_group}
  */
  readonly internetService6SrcGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#internet_service6_src_name PackagesFirewallLocalinpolicy6#internet_service6_src_name}
  */
  readonly internetService6SrcName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#internet_service6_src_negate PackagesFirewallLocalinpolicy6#internet_service6_src_negate}
  */
  readonly internetService6SrcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#intf PackagesFirewallLocalinpolicy6#intf}
  */
  readonly intf?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#logtraffic PackagesFirewallLocalinpolicy6#logtraffic}
  */
  readonly logtraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#pkg PackagesFirewallLocalinpolicy6#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#pkg_folder_path PackagesFirewallLocalinpolicy6#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#policyid PackagesFirewallLocalinpolicy6#policyid}
  */
  readonly policyid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#schedule PackagesFirewallLocalinpolicy6#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#scopetype PackagesFirewallLocalinpolicy6#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#service PackagesFirewallLocalinpolicy6#service}
  */
  readonly service?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#service_negate PackagesFirewallLocalinpolicy6#service_negate}
  */
  readonly serviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#srcaddr PackagesFirewallLocalinpolicy6#srcaddr}
  */
  readonly srcaddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#srcaddr_negate PackagesFirewallLocalinpolicy6#srcaddr_negate}
  */
  readonly srcaddrNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#status PackagesFirewallLocalinpolicy6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#uuid PackagesFirewallLocalinpolicy6#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#virtual_patch PackagesFirewallLocalinpolicy6#virtual_patch}
  */
  readonly virtualPatch?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6 fortimanager_packages_firewall_localinpolicy6}
*/
export class PackagesFirewallLocalinpolicy6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_firewall_localinpolicy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesFirewallLocalinpolicy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesFirewallLocalinpolicy6 to import
  * @param importFromId The id of the existing PackagesFirewallLocalinpolicy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesFirewallLocalinpolicy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_firewall_localinpolicy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_firewall_localinpolicy6 fortimanager_packages_firewall_localinpolicy6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesFirewallLocalinpolicy6Config
  */
  public constructor(scope: Construct, id: string, config: PackagesFirewallLocalinpolicy6Config) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_firewall_localinpolicy6',
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
    this._id = config.id;
    this._internetService6Src = config.internetService6Src;
    this._internetService6SrcCustom = config.internetService6SrcCustom;
    this._internetService6SrcCustomGroup = config.internetService6SrcCustomGroup;
    this._internetService6SrcFortiguard = config.internetService6SrcFortiguard;
    this._internetService6SrcGroup = config.internetService6SrcGroup;
    this._internetService6SrcName = config.internetService6SrcName;
    this._internetService6SrcNegate = config.internetService6SrcNegate;
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

  // internet_service6_src - computed: true, optional: true, required: false
  private _internetService6Src?: string; 
  public get internetService6Src() {
    return this.getStringAttribute('internet_service6_src');
  }
  public set internetService6Src(value: string) {
    this._internetService6Src = value;
  }
  public resetInternetService6Src() {
    this._internetService6Src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcInput() {
    return this._internetService6Src;
  }

  // internet_service6_src_custom - computed: true, optional: true, required: false
  private _internetService6SrcCustom?: string[]; 
  public get internetService6SrcCustom() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_custom'));
  }
  public set internetService6SrcCustom(value: string[]) {
    this._internetService6SrcCustom = value;
  }
  public resetInternetService6SrcCustom() {
    this._internetService6SrcCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcCustomInput() {
    return this._internetService6SrcCustom;
  }

  // internet_service6_src_custom_group - computed: true, optional: true, required: false
  private _internetService6SrcCustomGroup?: string[]; 
  public get internetService6SrcCustomGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_custom_group'));
  }
  public set internetService6SrcCustomGroup(value: string[]) {
    this._internetService6SrcCustomGroup = value;
  }
  public resetInternetService6SrcCustomGroup() {
    this._internetService6SrcCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcCustomGroupInput() {
    return this._internetService6SrcCustomGroup;
  }

  // internet_service6_src_fortiguard - computed: true, optional: true, required: false
  private _internetService6SrcFortiguard?: string[]; 
  public get internetService6SrcFortiguard() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_fortiguard'));
  }
  public set internetService6SrcFortiguard(value: string[]) {
    this._internetService6SrcFortiguard = value;
  }
  public resetInternetService6SrcFortiguard() {
    this._internetService6SrcFortiguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcFortiguardInput() {
    return this._internetService6SrcFortiguard;
  }

  // internet_service6_src_group - computed: true, optional: true, required: false
  private _internetService6SrcGroup?: string[]; 
  public get internetService6SrcGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_group'));
  }
  public set internetService6SrcGroup(value: string[]) {
    this._internetService6SrcGroup = value;
  }
  public resetInternetService6SrcGroup() {
    this._internetService6SrcGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcGroupInput() {
    return this._internetService6SrcGroup;
  }

  // internet_service6_src_name - computed: true, optional: true, required: false
  private _internetService6SrcName?: string[]; 
  public get internetService6SrcName() {
    return cdktf.Fn.tolist(this.getListAttribute('internet_service6_src_name'));
  }
  public set internetService6SrcName(value: string[]) {
    this._internetService6SrcName = value;
  }
  public resetInternetService6SrcName() {
    this._internetService6SrcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcNameInput() {
    return this._internetService6SrcName;
  }

  // internet_service6_src_negate - computed: true, optional: true, required: false
  private _internetService6SrcNegate?: string; 
  public get internetService6SrcNegate() {
    return this.getStringAttribute('internet_service6_src_negate');
  }
  public set internetService6SrcNegate(value: string) {
    this._internetService6SrcNegate = value;
  }
  public resetInternetService6SrcNegate() {
    this._internetService6SrcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetService6SrcNegateInput() {
    return this._internetService6SrcNegate;
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
      id: cdktf.stringToTerraform(this._id),
      internet_service6_src: cdktf.stringToTerraform(this._internetService6Src),
      internet_service6_src_custom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcCustom),
      internet_service6_src_custom_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcCustomGroup),
      internet_service6_src_fortiguard: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcFortiguard),
      internet_service6_src_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcGroup),
      internet_service6_src_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internetService6SrcName),
      internet_service6_src_negate: cdktf.stringToTerraform(this._internetService6SrcNegate),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service6_src: {
        value: cdktf.stringToHclTerraform(this._internetService6Src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_service6_src_custom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcCustom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_custom_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcCustomGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_fortiguard: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcFortiguard),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internetService6SrcName),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internet_service6_src_negate: {
        value: cdktf.stringToHclTerraform(this._internetService6SrcNegate),
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
