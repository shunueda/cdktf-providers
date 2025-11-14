// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PackagesUserNacpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#adom PackagesUserNacpolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#category PackagesUserNacpolicy#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#description PackagesUserNacpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#ems_tag PackagesUserNacpolicy#ems_tag}
  */
  readonly emsTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#family PackagesUserNacpolicy#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#firewall_address PackagesUserNacpolicy#firewall_address}
  */
  readonly firewallAddress?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#fortivoice_tag PackagesUserNacpolicy#fortivoice_tag}
  */
  readonly fortivoiceTag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#host PackagesUserNacpolicy#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#hw_vendor PackagesUserNacpolicy#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#hw_version PackagesUserNacpolicy#hw_version}
  */
  readonly hwVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#id PackagesUserNacpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#mac PackagesUserNacpolicy#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#match_period PackagesUserNacpolicy#match_period}
  */
  readonly matchPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#match_remove PackagesUserNacpolicy#match_remove}
  */
  readonly matchRemove?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#match_type PackagesUserNacpolicy#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#name PackagesUserNacpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#os PackagesUserNacpolicy#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#pkg PackagesUserNacpolicy#pkg}
  */
  readonly pkg: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#pkg_folder_path PackagesUserNacpolicy#pkg_folder_path}
  */
  readonly pkgFolderPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#scopetype PackagesUserNacpolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#severity PackagesUserNacpolicy#severity}
  */
  readonly severity?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#src PackagesUserNacpolicy#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#ssid_policy PackagesUserNacpolicy#ssid_policy}
  */
  readonly ssidPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#status PackagesUserNacpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#sw_version PackagesUserNacpolicy#sw_version}
  */
  readonly swVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#switch_fortilink PackagesUserNacpolicy#switch_fortilink}
  */
  readonly switchFortilink?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#switch_group PackagesUserNacpolicy#switch_group}
  */
  readonly switchGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#switch_mac_policy PackagesUserNacpolicy#switch_mac_policy}
  */
  readonly switchMacPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#switch_scope PackagesUserNacpolicy#switch_scope}
  */
  readonly switchScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#type PackagesUserNacpolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#user PackagesUserNacpolicy#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#user_group PackagesUserNacpolicy#user_group}
  */
  readonly userGroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy fortimanager_packages_user_nacpolicy}
*/
export class PackagesUserNacpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_packages_user_nacpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PackagesUserNacpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PackagesUserNacpolicy to import
  * @param importFromId The id of the existing PackagesUserNacpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PackagesUserNacpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_packages_user_nacpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/packages_user_nacpolicy fortimanager_packages_user_nacpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PackagesUserNacpolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PackagesUserNacpolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_packages_user_nacpolicy',
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
    this._adom = config.adom;
    this._category = config.category;
    this._description = config.description;
    this._emsTag = config.emsTag;
    this._family = config.family;
    this._firewallAddress = config.firewallAddress;
    this._fortivoiceTag = config.fortivoiceTag;
    this._host = config.host;
    this._hwVendor = config.hwVendor;
    this._hwVersion = config.hwVersion;
    this._id = config.id;
    this._mac = config.mac;
    this._matchPeriod = config.matchPeriod;
    this._matchRemove = config.matchRemove;
    this._matchType = config.matchType;
    this._name = config.name;
    this._os = config.os;
    this._pkg = config.pkg;
    this._pkgFolderPath = config.pkgFolderPath;
    this._scopetype = config.scopetype;
    this._severity = config.severity;
    this._src = config.src;
    this._ssidPolicy = config.ssidPolicy;
    this._status = config.status;
    this._swVersion = config.swVersion;
    this._switchFortilink = config.switchFortilink;
    this._switchGroup = config.switchGroup;
    this._switchMacPolicy = config.switchMacPolicy;
    this._switchScope = config.switchScope;
    this._type = config.type;
    this._user = config.user;
    this._userGroup = config.userGroup;
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

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ems_tag - computed: false, optional: true, required: false
  private _emsTag?: string; 
  public get emsTag() {
    return this.getStringAttribute('ems_tag');
  }
  public set emsTag(value: string) {
    this._emsTag = value;
  }
  public resetEmsTag() {
    this._emsTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emsTagInput() {
    return this._emsTag;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // firewall_address - computed: true, optional: true, required: false
  private _firewallAddress?: string[]; 
  public get firewallAddress() {
    return cdktf.Fn.tolist(this.getListAttribute('firewall_address'));
  }
  public set firewallAddress(value: string[]) {
    this._firewallAddress = value;
  }
  public resetFirewallAddress() {
    this._firewallAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAddressInput() {
    return this._firewallAddress;
  }

  // fortivoice_tag - computed: true, optional: true, required: false
  private _fortivoiceTag?: string[]; 
  public get fortivoiceTag() {
    return cdktf.Fn.tolist(this.getListAttribute('fortivoice_tag'));
  }
  public set fortivoiceTag(value: string[]) {
    this._fortivoiceTag = value;
  }
  public resetFortivoiceTag() {
    this._fortivoiceTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortivoiceTagInput() {
    return this._fortivoiceTag;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // hw_vendor - computed: false, optional: true, required: false
  private _hwVendor?: string; 
  public get hwVendor() {
    return this.getStringAttribute('hw_vendor');
  }
  public set hwVendor(value: string) {
    this._hwVendor = value;
  }
  public resetHwVendor() {
    this._hwVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVendorInput() {
    return this._hwVendor;
  }

  // hw_version - computed: false, optional: true, required: false
  private _hwVersion?: string; 
  public get hwVersion() {
    return this.getStringAttribute('hw_version');
  }
  public set hwVersion(value: string) {
    this._hwVersion = value;
  }
  public resetHwVersion() {
    this._hwVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwVersionInput() {
    return this._hwVersion;
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

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // match_period - computed: false, optional: true, required: false
  private _matchPeriod?: number; 
  public get matchPeriod() {
    return this.getNumberAttribute('match_period');
  }
  public set matchPeriod(value: number) {
    this._matchPeriod = value;
  }
  public resetMatchPeriod() {
    this._matchPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPeriodInput() {
    return this._matchPeriod;
  }

  // match_remove - computed: false, optional: true, required: false
  private _matchRemove?: string; 
  public get matchRemove() {
    return this.getStringAttribute('match_remove');
  }
  public set matchRemove(value: string) {
    this._matchRemove = value;
  }
  public resetMatchRemove() {
    this._matchRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchRemoveInput() {
    return this._matchRemove;
  }

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: number[]; 
  public get severity() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('severity')));
  }
  public set severity(value: number[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // src - computed: false, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // ssid_policy - computed: false, optional: true, required: false
  private _ssidPolicy?: string; 
  public get ssidPolicy() {
    return this.getStringAttribute('ssid_policy');
  }
  public set ssidPolicy(value: string) {
    this._ssidPolicy = value;
  }
  public resetSsidPolicy() {
    this._ssidPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidPolicyInput() {
    return this._ssidPolicy;
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

  // sw_version - computed: false, optional: true, required: false
  private _swVersion?: string; 
  public get swVersion() {
    return this.getStringAttribute('sw_version');
  }
  public set swVersion(value: string) {
    this._swVersion = value;
  }
  public resetSwVersion() {
    this._swVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swVersionInput() {
    return this._swVersion;
  }

  // switch_fortilink - computed: true, optional: true, required: false
  private _switchFortilink?: string[]; 
  public get switchFortilink() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_fortilink'));
  }
  public set switchFortilink(value: string[]) {
    this._switchFortilink = value;
  }
  public resetSwitchFortilink() {
    this._switchFortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchFortilinkInput() {
    return this._switchFortilink;
  }

  // switch_group - computed: true, optional: true, required: false
  private _switchGroup?: string[]; 
  public get switchGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_group'));
  }
  public set switchGroup(value: string[]) {
    this._switchGroup = value;
  }
  public resetSwitchGroup() {
    this._switchGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchGroupInput() {
    return this._switchGroup;
  }

  // switch_mac_policy - computed: true, optional: true, required: false
  private _switchMacPolicy?: string[]; 
  public get switchMacPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_mac_policy'));
  }
  public set switchMacPolicy(value: string[]) {
    this._switchMacPolicy = value;
  }
  public resetSwitchMacPolicy() {
    this._switchMacPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchMacPolicyInput() {
    return this._switchMacPolicy;
  }

  // switch_scope - computed: true, optional: true, required: false
  private _switchScope?: string[]; 
  public get switchScope() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_scope'));
  }
  public set switchScope(value: string[]) {
    this._switchScope = value;
  }
  public resetSwitchScope() {
    this._switchScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchScopeInput() {
    return this._switchScope;
  }

  // type - computed: false, optional: true, required: false
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_group - computed: false, optional: true, required: false
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  public resetUserGroup() {
    this._userGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      ems_tag: cdktf.stringToTerraform(this._emsTag),
      family: cdktf.stringToTerraform(this._family),
      firewall_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._firewallAddress),
      fortivoice_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortivoiceTag),
      host: cdktf.stringToTerraform(this._host),
      hw_vendor: cdktf.stringToTerraform(this._hwVendor),
      hw_version: cdktf.stringToTerraform(this._hwVersion),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      match_period: cdktf.numberToTerraform(this._matchPeriod),
      match_remove: cdktf.stringToTerraform(this._matchRemove),
      match_type: cdktf.stringToTerraform(this._matchType),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      pkg: cdktf.stringToTerraform(this._pkg),
      pkg_folder_path: cdktf.stringToTerraform(this._pkgFolderPath),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      severity: cdktf.listMapper(cdktf.numberToTerraform, false)(this._severity),
      src: cdktf.stringToTerraform(this._src),
      ssid_policy: cdktf.stringToTerraform(this._ssidPolicy),
      status: cdktf.stringToTerraform(this._status),
      sw_version: cdktf.stringToTerraform(this._swVersion),
      switch_fortilink: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchFortilink),
      switch_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchGroup),
      switch_mac_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchMacPolicy),
      switch_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchScope),
      type: cdktf.stringToTerraform(this._type),
      user: cdktf.stringToTerraform(this._user),
      user_group: cdktf.stringToTerraform(this._userGroup),
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
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ems_tag: {
        value: cdktf.stringToHclTerraform(this._emsTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._firewallAddress),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fortivoice_tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortivoiceTag),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_vendor: {
        value: cdktf.stringToHclTerraform(this._hwVendor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_version: {
        value: cdktf.stringToHclTerraform(this._hwVersion),
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
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_period: {
        value: cdktf.numberToHclTerraform(this._matchPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      match_remove: {
        value: cdktf.stringToHclTerraform(this._matchRemove),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
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
      os: {
        value: cdktf.stringToHclTerraform(this._os),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._severity),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid_policy: {
        value: cdktf.stringToHclTerraform(this._ssidPolicy),
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
      sw_version: {
        value: cdktf.stringToHclTerraform(this._swVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_fortilink: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchFortilink),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      switch_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      switch_mac_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchMacPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      switch_scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchScope),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group: {
        value: cdktf.stringToHclTerraform(this._userGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
