// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserFssopollingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#default_domain UserFssopolling#default_domain}
  */
  readonly defaultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#dynamic_sort_subtable UserFssopolling#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#fosid UserFssopolling#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#get_all_tables UserFssopolling#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#id UserFssopolling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#ldap_server UserFssopolling#ldap_server}
  */
  readonly ldapServer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#logon_history UserFssopolling#logon_history}
  */
  readonly logonHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#password UserFssopolling#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#polling_frequency UserFssopolling#polling_frequency}
  */
  readonly pollingFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#port UserFssopolling#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#server UserFssopolling#server}
  */
  readonly server: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#smb_ntlmv1_auth UserFssopolling#smb_ntlmv1_auth}
  */
  readonly smbNtlmv1Auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#smbv1 UserFssopolling#smbv1}
  */
  readonly smbv1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#status UserFssopolling#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#user UserFssopolling#user}
  */
  readonly user: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#vdomparam UserFssopolling#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * adgrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#adgrp UserFssopolling#adgrp}
  */
  readonly adgrp?: UserFssopollingAdgrp[] | cdktf.IResolvable;
}
export interface UserFssopollingAdgrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#name UserFssopolling#name}
  */
  readonly name?: string;
}

export function userFssopollingAdgrpToTerraform(struct?: UserFssopollingAdgrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function userFssopollingAdgrpToHclTerraform(struct?: UserFssopollingAdgrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserFssopollingAdgrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserFssopollingAdgrp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserFssopollingAdgrp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class UserFssopollingAdgrpList extends cdktf.ComplexList {
  public internalValue? : UserFssopollingAdgrp[] | cdktf.IResolvable

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
  public get(index: number): UserFssopollingAdgrpOutputReference {
    return new UserFssopollingAdgrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling fortios_user_fssopolling}
*/
export class UserFssopolling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_user_fssopolling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserFssopolling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserFssopolling to import
  * @param importFromId The id of the existing UserFssopolling that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserFssopolling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_user_fssopolling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/user_fssopolling fortios_user_fssopolling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserFssopollingConfig
  */
  public constructor(scope: Construct, id: string, config: UserFssopollingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_user_fssopolling',
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
    this._defaultDomain = config.defaultDomain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ldapServer = config.ldapServer;
    this._logonHistory = config.logonHistory;
    this._password = config.password;
    this._pollingFrequency = config.pollingFrequency;
    this._port = config.port;
    this._server = config.server;
    this._smbNtlmv1Auth = config.smbNtlmv1Auth;
    this._smbv1 = config.smbv1;
    this._status = config.status;
    this._user = config.user;
    this._vdomparam = config.vdomparam;
    this._adgrp.internalValue = config.adgrp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_domain - computed: false, optional: true, required: false
  private _defaultDomain?: string; 
  public get defaultDomain() {
    return this.getStringAttribute('default_domain');
  }
  public set defaultDomain(value: string) {
    this._defaultDomain = value;
  }
  public resetDefaultDomain() {
    this._defaultDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDomainInput() {
    return this._defaultDomain;
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

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // ldap_server - computed: false, optional: false, required: true
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapServerInput() {
    return this._ldapServer;
  }

  // logon_history - computed: true, optional: true, required: false
  private _logonHistory?: number; 
  public get logonHistory() {
    return this.getNumberAttribute('logon_history');
  }
  public set logonHistory(value: number) {
    this._logonHistory = value;
  }
  public resetLogonHistory() {
    this._logonHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonHistoryInput() {
    return this._logonHistory;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // polling_frequency - computed: true, optional: true, required: false
  private _pollingFrequency?: number; 
  public get pollingFrequency() {
    return this.getNumberAttribute('polling_frequency');
  }
  public set pollingFrequency(value: number) {
    this._pollingFrequency = value;
  }
  public resetPollingFrequency() {
    this._pollingFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingFrequencyInput() {
    return this._pollingFrequency;
  }

  // port - computed: false, optional: true, required: false
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // smb_ntlmv1_auth - computed: true, optional: true, required: false
  private _smbNtlmv1Auth?: string; 
  public get smbNtlmv1Auth() {
    return this.getStringAttribute('smb_ntlmv1_auth');
  }
  public set smbNtlmv1Auth(value: string) {
    this._smbNtlmv1Auth = value;
  }
  public resetSmbNtlmv1Auth() {
    this._smbNtlmv1Auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbNtlmv1AuthInput() {
    return this._smbNtlmv1Auth;
  }

  // smbv1 - computed: true, optional: true, required: false
  private _smbv1?: string; 
  public get smbv1() {
    return this.getStringAttribute('smbv1');
  }
  public set smbv1(value: string) {
    this._smbv1 = value;
  }
  public resetSmbv1() {
    this._smbv1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smbv1Input() {
    return this._smbv1;
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

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
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

  // adgrp - computed: false, optional: true, required: false
  private _adgrp = new UserFssopollingAdgrpList(this, "adgrp", false);
  public get adgrp() {
    return this._adgrp;
  }
  public putAdgrp(value: UserFssopollingAdgrp[] | cdktf.IResolvable) {
    this._adgrp.internalValue = value;
  }
  public resetAdgrp() {
    this._adgrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adgrpInput() {
    return this._adgrp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_domain: cdktf.stringToTerraform(this._defaultDomain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      logon_history: cdktf.numberToTerraform(this._logonHistory),
      password: cdktf.stringToTerraform(this._password),
      polling_frequency: cdktf.numberToTerraform(this._pollingFrequency),
      port: cdktf.numberToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
      smb_ntlmv1_auth: cdktf.stringToTerraform(this._smbNtlmv1Auth),
      smbv1: cdktf.stringToTerraform(this._smbv1),
      status: cdktf.stringToTerraform(this._status),
      user: cdktf.stringToTerraform(this._user),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      adgrp: cdktf.listMapper(userFssopollingAdgrpToTerraform, true)(this._adgrp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_domain: {
        value: cdktf.stringToHclTerraform(this._defaultDomain),
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
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logon_history: {
        value: cdktf.numberToHclTerraform(this._logonHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_frequency: {
        value: cdktf.numberToHclTerraform(this._pollingFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smb_ntlmv1_auth: {
        value: cdktf.stringToHclTerraform(this._smbNtlmv1Auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smbv1: {
        value: cdktf.stringToHclTerraform(this._smbv1),
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
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adgrp: {
        value: cdktf.listMapperHcl(userFssopollingAdgrpToHclTerraform, true)(this._adgrp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserFssopollingAdgrpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
