// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserNacpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#category UserNacpolicy#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#description UserNacpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#device_name UserNacpolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#device_vdom UserNacpolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#ems_tag UserNacpolicy#ems_tag}
  */
  readonly emsTag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#family UserNacpolicy#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#host UserNacpolicy#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#hw_vendor UserNacpolicy#hw_vendor}
  */
  readonly hwVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#hw_version UserNacpolicy#hw_version}
  */
  readonly hwVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#id UserNacpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#mac UserNacpolicy#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#name UserNacpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#os UserNacpolicy#os}
  */
  readonly os?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#src UserNacpolicy#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#status UserNacpolicy#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#sw_version UserNacpolicy#sw_version}
  */
  readonly swVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#switch_auto_auth UserNacpolicy#switch_auto_auth}
  */
  readonly switchAutoAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#switch_fortilink UserNacpolicy#switch_fortilink}
  */
  readonly switchFortilink?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#switch_mac_policy UserNacpolicy#switch_mac_policy}
  */
  readonly switchMacPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#switch_port_policy UserNacpolicy#switch_port_policy}
  */
  readonly switchPortPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#switch_scope UserNacpolicy#switch_scope}
  */
  readonly switchScope?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#type UserNacpolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#user UserNacpolicy#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#user_group UserNacpolicy#user_group}
  */
  readonly userGroup?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy fmgdevice_user_nacpolicy}
*/
export class UserNacpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_user_nacpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserNacpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserNacpolicy to import
  * @param importFromId The id of the existing UserNacpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserNacpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_user_nacpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/user_nacpolicy fmgdevice_user_nacpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserNacpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserNacpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_user_nacpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._emsTag = config.emsTag;
    this._family = config.family;
    this._host = config.host;
    this._hwVendor = config.hwVendor;
    this._hwVersion = config.hwVersion;
    this._id = config.id;
    this._mac = config.mac;
    this._name = config.name;
    this._os = config.os;
    this._src = config.src;
    this._status = config.status;
    this._swVersion = config.swVersion;
    this._switchAutoAuth = config.switchAutoAuth;
    this._switchFortilink = config.switchFortilink;
    this._switchMacPolicy = config.switchMacPolicy;
    this._switchPortPolicy = config.switchPortPolicy;
    this._switchScope = config.switchScope;
    this._type = config.type;
    this._user = config.user;
    this._userGroup = config.userGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // ems_tag - computed: true, optional: true, required: false
  private _emsTag?: string[]; 
  public get emsTag() {
    return cdktf.Fn.tolist(this.getListAttribute('ems_tag'));
  }
  public set emsTag(value: string[]) {
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

  // switch_auto_auth - computed: false, optional: true, required: false
  private _switchAutoAuth?: string; 
  public get switchAutoAuth() {
    return this.getStringAttribute('switch_auto_auth');
  }
  public set switchAutoAuth(value: string) {
    this._switchAutoAuth = value;
  }
  public resetSwitchAutoAuth() {
    this._switchAutoAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchAutoAuthInput() {
    return this._switchAutoAuth;
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

  // switch_port_policy - computed: true, optional: true, required: false
  private _switchPortPolicy?: string[]; 
  public get switchPortPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('switch_port_policy'));
  }
  public set switchPortPolicy(value: string[]) {
    this._switchPortPolicy = value;
  }
  public resetSwitchPortPolicy() {
    this._switchPortPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortPolicyInput() {
    return this._switchPortPolicy;
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

  // user_group - computed: true, optional: true, required: false
  private _userGroup?: string[]; 
  public get userGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('user_group'));
  }
  public set userGroup(value: string[]) {
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
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      ems_tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emsTag),
      family: cdktf.stringToTerraform(this._family),
      host: cdktf.stringToTerraform(this._host),
      hw_vendor: cdktf.stringToTerraform(this._hwVendor),
      hw_version: cdktf.stringToTerraform(this._hwVersion),
      id: cdktf.stringToTerraform(this._id),
      mac: cdktf.stringToTerraform(this._mac),
      name: cdktf.stringToTerraform(this._name),
      os: cdktf.stringToTerraform(this._os),
      src: cdktf.stringToTerraform(this._src),
      status: cdktf.stringToTerraform(this._status),
      sw_version: cdktf.stringToTerraform(this._swVersion),
      switch_auto_auth: cdktf.stringToTerraform(this._switchAutoAuth),
      switch_fortilink: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchFortilink),
      switch_mac_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchMacPolicy),
      switch_port_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchPortPolicy),
      switch_scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._switchScope),
      type: cdktf.stringToTerraform(this._type),
      user: cdktf.stringToTerraform(this._user),
      user_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ems_tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emsTag),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      src: {
        value: cdktf.stringToHclTerraform(this._src),
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
      switch_auto_auth: {
        value: cdktf.stringToHclTerraform(this._switchAutoAuth),
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
      switch_mac_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchMacPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      switch_port_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._switchPortPolicy),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
