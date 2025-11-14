// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserFssopollingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#_gui_meta ObjectUserFssopolling#_gui_meta}
  */
  readonly guiMeta?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#adom ObjectUserFssopolling#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#default_domain ObjectUserFssopolling#default_domain}
  */
  readonly defaultDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#dynamic_sort_subtable ObjectUserFssopolling#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#fosid ObjectUserFssopolling#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#id ObjectUserFssopolling#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#ldap_server ObjectUserFssopolling#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#logon_history ObjectUserFssopolling#logon_history}
  */
  readonly logonHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#password ObjectUserFssopolling#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#polling_frequency ObjectUserFssopolling#polling_frequency}
  */
  readonly pollingFrequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#port ObjectUserFssopolling#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#scopetype ObjectUserFssopolling#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#server ObjectUserFssopolling#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#smb_ntlmv1_auth ObjectUserFssopolling#smb_ntlmv1_auth}
  */
  readonly smbNtlmv1Auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#smbv1 ObjectUserFssopolling#smbv1}
  */
  readonly smbv1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#status ObjectUserFssopolling#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#user ObjectUserFssopolling#user}
  */
  readonly user?: string;
  /**
  * adgrp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#adgrp ObjectUserFssopolling#adgrp}
  */
  readonly adgrp?: ObjectUserFssopollingAdgrp[] | cdktf.IResolvable;
}
export interface ObjectUserFssopollingAdgrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#name ObjectUserFssopolling#name}
  */
  readonly name?: string;
}

export function objectUserFssopollingAdgrpToTerraform(struct?: ObjectUserFssopollingAdgrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectUserFssopollingAdgrpToHclTerraform(struct?: ObjectUserFssopollingAdgrp | cdktf.IResolvable): any {
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

export class ObjectUserFssopollingAdgrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserFssopollingAdgrp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectUserFssopollingAdgrp | cdktf.IResolvable | undefined) {
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

export class ObjectUserFssopollingAdgrpList extends cdktf.ComplexList {
  public internalValue? : ObjectUserFssopollingAdgrp[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserFssopollingAdgrpOutputReference {
    return new ObjectUserFssopollingAdgrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling fortimanager_object_user_fssopolling}
*/
export class ObjectUserFssopolling extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_fssopolling";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserFssopolling resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserFssopolling to import
  * @param importFromId The id of the existing ObjectUserFssopolling that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserFssopolling to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_fssopolling", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_user_fssopolling fortimanager_object_user_fssopolling} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserFssopollingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectUserFssopollingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_fssopolling',
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
    this._guiMeta = config.guiMeta;
    this._adom = config.adom;
    this._defaultDomain = config.defaultDomain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ldapServer = config.ldapServer;
    this._logonHistory = config.logonHistory;
    this._password = config.password;
    this._pollingFrequency = config.pollingFrequency;
    this._port = config.port;
    this._scopetype = config.scopetype;
    this._server = config.server;
    this._smbNtlmv1Auth = config.smbNtlmv1Auth;
    this._smbv1 = config.smbv1;
    this._status = config.status;
    this._user = config.user;
    this._adgrp.internalValue = config.adgrp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _gui_meta - computed: false, optional: true, required: false
  private _guiMeta?: string; 
  public get guiMeta() {
    return this.getStringAttribute('_gui_meta');
  }
  public set guiMeta(value: string) {
    this._guiMeta = value;
  }
  public resetGuiMeta() {
    this._guiMeta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiMetaInput() {
    return this._guiMeta;
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

  // fosid - computed: false, optional: true, required: false
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

  // ldap_server - computed: false, optional: true, required: false
  private _ldapServer?: string; 
  public get ldapServer() {
    return this.getStringAttribute('ldap_server');
  }
  public set ldapServer(value: string) {
    this._ldapServer = value;
  }
  public resetLdapServer() {
    this._ldapServer = undefined;
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

  // password - computed: true, optional: true, required: false
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

  // adgrp - computed: false, optional: true, required: false
  private _adgrp = new ObjectUserFssopollingAdgrpList(this, "adgrp", false);
  public get adgrp() {
    return this._adgrp;
  }
  public putAdgrp(value: ObjectUserFssopollingAdgrp[] | cdktf.IResolvable) {
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
      _gui_meta: cdktf.stringToTerraform(this._guiMeta),
      adom: cdktf.stringToTerraform(this._adom),
      default_domain: cdktf.stringToTerraform(this._defaultDomain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      logon_history: cdktf.numberToTerraform(this._logonHistory),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      polling_frequency: cdktf.numberToTerraform(this._pollingFrequency),
      port: cdktf.numberToTerraform(this._port),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server: cdktf.stringToTerraform(this._server),
      smb_ntlmv1_auth: cdktf.stringToTerraform(this._smbNtlmv1Auth),
      smbv1: cdktf.stringToTerraform(this._smbv1),
      status: cdktf.stringToTerraform(this._status),
      user: cdktf.stringToTerraform(this._user),
      adgrp: cdktf.listMapper(objectUserFssopollingAdgrpToTerraform, true)(this._adgrp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _gui_meta: {
        value: cdktf.stringToHclTerraform(this._guiMeta),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      adgrp: {
        value: cdktf.listMapperHcl(objectUserFssopollingAdgrpToHclTerraform, true)(this._adgrp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserFssopollingAdgrpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
