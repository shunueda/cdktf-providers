// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAdminLdapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#adom_access SystemAdminLdap#adom_access}
  */
  readonly adomAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#adom_attr SystemAdminLdap#adom_attr}
  */
  readonly adomAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#attributes SystemAdminLdap#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#ca_cert SystemAdminLdap#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#cnid SystemAdminLdap#cnid}
  */
  readonly cnid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#connect_timeout SystemAdminLdap#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#dn SystemAdminLdap#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#dynamic_sort_subtable SystemAdminLdap#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#filter SystemAdminLdap#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#group SystemAdminLdap#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#id SystemAdminLdap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#memberof_attr SystemAdminLdap#memberof_attr}
  */
  readonly memberofAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#name SystemAdminLdap#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#password SystemAdminLdap#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#port SystemAdminLdap#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#profile_attr SystemAdminLdap#profile_attr}
  */
  readonly profileAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#secondary_server SystemAdminLdap#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#secure SystemAdminLdap#secure}
  */
  readonly secure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#server SystemAdminLdap#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#ssl_protocol SystemAdminLdap#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#tertiary_server SystemAdminLdap#tertiary_server}
  */
  readonly tertiaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#type SystemAdminLdap#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#username SystemAdminLdap#username}
  */
  readonly username?: string;
  /**
  * fazadom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#fazadom SystemAdminLdap#fazadom}
  */
  readonly fazadom?: SystemAdminLdapFazadom[] | cdktf.IResolvable;
}
export interface SystemAdminLdapFazadom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#adom_name SystemAdminLdap#adom_name}
  */
  readonly adomName?: string;
}

export function systemAdminLdapFazadomToTerraform(struct?: SystemAdminLdapFazadom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adom_name: cdktf.stringToTerraform(struct!.adomName),
  }
}


export function systemAdminLdapFazadomToHclTerraform(struct?: SystemAdminLdapFazadom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adom_name: {
      value: cdktf.stringToHclTerraform(struct!.adomName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAdminLdapFazadomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemAdminLdapFazadom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adomName !== undefined) {
      hasAnyValues = true;
      internalValueResult.adomName = this._adomName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAdminLdapFazadom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adomName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adomName = value.adomName;
    }
  }

  // adom_name - computed: false, optional: true, required: false
  private _adomName?: string; 
  public get adomName() {
    return this.getStringAttribute('adom_name');
  }
  public set adomName(value: string) {
    this._adomName = value;
  }
  public resetAdomName() {
    this._adomName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomNameInput() {
    return this._adomName;
  }
}

export class SystemAdminLdapFazadomList extends cdktf.ComplexList {
  public internalValue? : SystemAdminLdapFazadom[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemAdminLdapFazadomOutputReference {
    return new SystemAdminLdapFazadomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap fortianalyzer_system_admin_ldap}
*/
export class SystemAdminLdap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_admin_ldap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAdminLdap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAdminLdap to import
  * @param importFromId The id of the existing SystemAdminLdap that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAdminLdap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_admin_ldap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_admin_ldap fortianalyzer_system_admin_ldap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAdminLdapConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAdminLdapConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_admin_ldap',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adomAccess = config.adomAccess;
    this._adomAttr = config.adomAttr;
    this._attributes = config.attributes;
    this._caCert = config.caCert;
    this._cnid = config.cnid;
    this._connectTimeout = config.connectTimeout;
    this._dn = config.dn;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._filter = config.filter;
    this._group = config.group;
    this._id = config.id;
    this._memberofAttr = config.memberofAttr;
    this._name = config.name;
    this._password = config.password;
    this._port = config.port;
    this._profileAttr = config.profileAttr;
    this._secondaryServer = config.secondaryServer;
    this._secure = config.secure;
    this._server = config.server;
    this._sslProtocol = config.sslProtocol;
    this._tertiaryServer = config.tertiaryServer;
    this._type = config.type;
    this._username = config.username;
    this._fazadom.internalValue = config.fazadom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom_access - computed: true, optional: true, required: false
  private _adomAccess?: string; 
  public get adomAccess() {
    return this.getStringAttribute('adom_access');
  }
  public set adomAccess(value: string) {
    this._adomAccess = value;
  }
  public resetAdomAccess() {
    this._adomAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomAccessInput() {
    return this._adomAccess;
  }

  // adom_attr - computed: false, optional: true, required: false
  private _adomAttr?: string; 
  public get adomAttr() {
    return this.getStringAttribute('adom_attr');
  }
  public set adomAttr(value: string) {
    this._adomAttr = value;
  }
  public resetAdomAttr() {
    this._adomAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomAttrInput() {
    return this._adomAttr;
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // cnid - computed: true, optional: true, required: false
  private _cnid?: string; 
  public get cnid() {
    return this.getStringAttribute('cnid');
  }
  public set cnid(value: string) {
    this._cnid = value;
  }
  public resetCnid() {
    this._cnid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnidInput() {
    return this._cnid;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // dn - computed: false, optional: true, required: false
  private _dn?: string; 
  public get dn() {
    return this.getStringAttribute('dn');
  }
  public set dn(value: string) {
    this._dn = value;
  }
  public resetDn() {
    this._dn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnInput() {
    return this._dn;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // memberof_attr - computed: false, optional: true, required: false
  private _memberofAttr?: string; 
  public get memberofAttr() {
    return this.getStringAttribute('memberof_attr');
  }
  public set memberofAttr(value: string) {
    this._memberofAttr = value;
  }
  public resetMemberofAttr() {
    this._memberofAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberofAttrInput() {
    return this._memberofAttr;
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

  // password - computed: false, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // profile_attr - computed: false, optional: true, required: false
  private _profileAttr?: string; 
  public get profileAttr() {
    return this.getStringAttribute('profile_attr');
  }
  public set profileAttr(value: string) {
    this._profileAttr = value;
  }
  public resetProfileAttr() {
    this._profileAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAttrInput() {
    return this._profileAttr;
  }

  // secondary_server - computed: false, optional: true, required: false
  private _secondaryServer?: string; 
  public get secondaryServer() {
    return this.getStringAttribute('secondary_server');
  }
  public set secondaryServer(value: string) {
    this._secondaryServer = value;
  }
  public resetSecondaryServer() {
    this._secondaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryServerInput() {
    return this._secondaryServer;
  }

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol?: string; 
  public get sslProtocol() {
    return this.getStringAttribute('ssl_protocol');
  }
  public set sslProtocol(value: string) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
  }

  // tertiary_server - computed: false, optional: true, required: false
  private _tertiaryServer?: string; 
  public get tertiaryServer() {
    return this.getStringAttribute('tertiary_server');
  }
  public set tertiaryServer(value: string) {
    this._tertiaryServer = value;
  }
  public resetTertiaryServer() {
    this._tertiaryServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tertiaryServerInput() {
    return this._tertiaryServer;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // fazadom - computed: false, optional: true, required: false
  private _fazadom = new SystemAdminLdapFazadomList(this, "fazadom", false);
  public get fazadom() {
    return this._fazadom;
  }
  public putFazadom(value: SystemAdminLdapFazadom[] | cdktf.IResolvable) {
    this._fazadom.internalValue = value;
  }
  public resetFazadom() {
    this._fazadom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazadomInput() {
    return this._fazadom.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom_access: cdktf.stringToTerraform(this._adomAccess),
      adom_attr: cdktf.stringToTerraform(this._adomAttr),
      attributes: cdktf.stringToTerraform(this._attributes),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      cnid: cdktf.stringToTerraform(this._cnid),
      connect_timeout: cdktf.numberToTerraform(this._connectTimeout),
      dn: cdktf.stringToTerraform(this._dn),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      filter: cdktf.stringToTerraform(this._filter),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      memberof_attr: cdktf.stringToTerraform(this._memberofAttr),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      port: cdktf.numberToTerraform(this._port),
      profile_attr: cdktf.stringToTerraform(this._profileAttr),
      secondary_server: cdktf.stringToTerraform(this._secondaryServer),
      secure: cdktf.stringToTerraform(this._secure),
      server: cdktf.stringToTerraform(this._server),
      ssl_protocol: cdktf.stringToTerraform(this._sslProtocol),
      tertiary_server: cdktf.stringToTerraform(this._tertiaryServer),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      fazadom: cdktf.listMapper(systemAdminLdapFazadomToTerraform, true)(this._fazadom.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom_access: {
        value: cdktf.stringToHclTerraform(this._adomAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom_attr: {
        value: cdktf.stringToHclTerraform(this._adomAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert: {
        value: cdktf.stringToHclTerraform(this._caCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cnid: {
        value: cdktf.stringToHclTerraform(this._cnid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_timeout: {
        value: cdktf.numberToHclTerraform(this._connectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dn: {
        value: cdktf.stringToHclTerraform(this._dn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      memberof_attr: {
        value: cdktf.stringToHclTerraform(this._memberofAttr),
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
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profile_attr: {
        value: cdktf.stringToHclTerraform(this._profileAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_server: {
        value: cdktf.stringToHclTerraform(this._secondaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure: {
        value: cdktf.stringToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._sslProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tertiary_server: {
        value: cdktf.stringToHclTerraform(this._tertiaryServer),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fazadom: {
        value: cdktf.listMapperHcl(systemAdminLdapFazadomToHclTerraform, true)(this._fazadom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAdminLdapFazadomList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
