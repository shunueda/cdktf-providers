// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserFssoDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#_gui_meta ObjectUserFssoDynamicMappingA#_gui_meta}
  */
  readonly guiMeta?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#adom ObjectUserFssoDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#dynamic_sort_subtable ObjectUserFssoDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#fsso ObjectUserFssoDynamicMappingA#fsso}
  */
  readonly fsso: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#group_poll_interval ObjectUserFssoDynamicMappingA#group_poll_interval}
  */
  readonly groupPollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#id ObjectUserFssoDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#interface ObjectUserFssoDynamicMappingA#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#interface_select_method ObjectUserFssoDynamicMappingA#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#ldap_poll ObjectUserFssoDynamicMappingA#ldap_poll}
  */
  readonly ldapPoll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#ldap_poll_filter ObjectUserFssoDynamicMappingA#ldap_poll_filter}
  */
  readonly ldapPollFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#ldap_poll_interval ObjectUserFssoDynamicMappingA#ldap_poll_interval}
  */
  readonly ldapPollInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#ldap_server ObjectUserFssoDynamicMappingA#ldap_server}
  */
  readonly ldapServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#logon_timeout ObjectUserFssoDynamicMappingA#logon_timeout}
  */
  readonly logonTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#password ObjectUserFssoDynamicMappingA#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#password2 ObjectUserFssoDynamicMappingA#password2}
  */
  readonly password2?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#password3 ObjectUserFssoDynamicMappingA#password3}
  */
  readonly password3?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#password4 ObjectUserFssoDynamicMappingA#password4}
  */
  readonly password4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#password5 ObjectUserFssoDynamicMappingA#password5}
  */
  readonly password5?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#port ObjectUserFssoDynamicMappingA#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#port2 ObjectUserFssoDynamicMappingA#port2}
  */
  readonly port2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#port3 ObjectUserFssoDynamicMappingA#port3}
  */
  readonly port3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#port4 ObjectUserFssoDynamicMappingA#port4}
  */
  readonly port4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#port5 ObjectUserFssoDynamicMappingA#port5}
  */
  readonly port5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#scopetype ObjectUserFssoDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#server ObjectUserFssoDynamicMappingA#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#server2 ObjectUserFssoDynamicMappingA#server2}
  */
  readonly server2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#server3 ObjectUserFssoDynamicMappingA#server3}
  */
  readonly server3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#server4 ObjectUserFssoDynamicMappingA#server4}
  */
  readonly server4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#server5 ObjectUserFssoDynamicMappingA#server5}
  */
  readonly server5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#sni ObjectUserFssoDynamicMappingA#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#source_ip ObjectUserFssoDynamicMappingA#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#source_ip6 ObjectUserFssoDynamicMappingA#source_ip6}
  */
  readonly sourceIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#ssl ObjectUserFssoDynamicMappingA#ssl}
  */
  readonly ssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#ssl_server_host_ip_check ObjectUserFssoDynamicMappingA#ssl_server_host_ip_check}
  */
  readonly sslServerHostIpCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#ssl_trusted_cert ObjectUserFssoDynamicMappingA#ssl_trusted_cert}
  */
  readonly sslTrustedCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#type ObjectUserFssoDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#user_info_server ObjectUserFssoDynamicMappingA#user_info_server}
  */
  readonly userInfoServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#vrf_select ObjectUserFssoDynamicMappingA#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#_scope ObjectUserFssoDynamicMappingA#_scope}
  */
  readonly scope?: ObjectUserFssoDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectUserFssoDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#name ObjectUserFssoDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#vdom ObjectUserFssoDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectUserFssoDynamicMappingScopeAToTerraform(struct?: ObjectUserFssoDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectUserFssoDynamicMappingScopeAToHclTerraform(struct?: ObjectUserFssoDynamicMappingScopeA | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectUserFssoDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserFssoDynamicMappingScopeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectUserFssoDynamicMappingScopeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectUserFssoDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectUserFssoDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserFssoDynamicMappingScopeAOutputReference {
    return new ObjectUserFssoDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping fortimanager_object_user_fsso_dynamic_mapping}
*/
export class ObjectUserFssoDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_fsso_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserFssoDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserFssoDynamicMappingA to import
  * @param importFromId The id of the existing ObjectUserFssoDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserFssoDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_fsso_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_fsso_dynamic_mapping fortimanager_object_user_fsso_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserFssoDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectUserFssoDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_fsso_dynamic_mapping',
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
    this._guiMeta = config.guiMeta;
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fsso = config.fsso;
    this._groupPollInterval = config.groupPollInterval;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ldapPoll = config.ldapPoll;
    this._ldapPollFilter = config.ldapPollFilter;
    this._ldapPollInterval = config.ldapPollInterval;
    this._ldapServer = config.ldapServer;
    this._logonTimeout = config.logonTimeout;
    this._password = config.password;
    this._password2 = config.password2;
    this._password3 = config.password3;
    this._password4 = config.password4;
    this._password5 = config.password5;
    this._port = config.port;
    this._port2 = config.port2;
    this._port3 = config.port3;
    this._port4 = config.port4;
    this._port5 = config.port5;
    this._scopetype = config.scopetype;
    this._server = config.server;
    this._server2 = config.server2;
    this._server3 = config.server3;
    this._server4 = config.server4;
    this._server5 = config.server5;
    this._sni = config.sni;
    this._sourceIp = config.sourceIp;
    this._sourceIp6 = config.sourceIp6;
    this._ssl = config.ssl;
    this._sslServerHostIpCheck = config.sslServerHostIpCheck;
    this._sslTrustedCert = config.sslTrustedCert;
    this._type = config.type;
    this._userInfoServer = config.userInfoServer;
    this._vrfSelect = config.vrfSelect;
    this._scope.internalValue = config.scope;
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

  // fsso - computed: false, optional: false, required: true
  private _fsso?: string; 
  public get fsso() {
    return this.getStringAttribute('fsso');
  }
  public set fsso(value: string) {
    this._fsso = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fssoInput() {
    return this._fsso;
  }

  // group_poll_interval - computed: false, optional: true, required: false
  private _groupPollInterval?: number; 
  public get groupPollInterval() {
    return this.getNumberAttribute('group_poll_interval');
  }
  public set groupPollInterval(value: number) {
    this._groupPollInterval = value;
  }
  public resetGroupPollInterval() {
    this._groupPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPollIntervalInput() {
    return this._groupPollInterval;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_select_method - computed: true, optional: true, required: false
  private _interfaceSelectMethod?: string; 
  public get interfaceSelectMethod() {
    return this.getStringAttribute('interface_select_method');
  }
  public set interfaceSelectMethod(value: string) {
    this._interfaceSelectMethod = value;
  }
  public resetInterfaceSelectMethod() {
    this._interfaceSelectMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSelectMethodInput() {
    return this._interfaceSelectMethod;
  }

  // ldap_poll - computed: false, optional: true, required: false
  private _ldapPoll?: string; 
  public get ldapPoll() {
    return this.getStringAttribute('ldap_poll');
  }
  public set ldapPoll(value: string) {
    this._ldapPoll = value;
  }
  public resetLdapPoll() {
    this._ldapPoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPollInput() {
    return this._ldapPoll;
  }

  // ldap_poll_filter - computed: false, optional: true, required: false
  private _ldapPollFilter?: string; 
  public get ldapPollFilter() {
    return this.getStringAttribute('ldap_poll_filter');
  }
  public set ldapPollFilter(value: string) {
    this._ldapPollFilter = value;
  }
  public resetLdapPollFilter() {
    this._ldapPollFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPollFilterInput() {
    return this._ldapPollFilter;
  }

  // ldap_poll_interval - computed: false, optional: true, required: false
  private _ldapPollInterval?: number; 
  public get ldapPollInterval() {
    return this.getNumberAttribute('ldap_poll_interval');
  }
  public set ldapPollInterval(value: number) {
    this._ldapPollInterval = value;
  }
  public resetLdapPollInterval() {
    this._ldapPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPollIntervalInput() {
    return this._ldapPollInterval;
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

  // logon_timeout - computed: true, optional: true, required: false
  private _logonTimeout?: number; 
  public get logonTimeout() {
    return this.getNumberAttribute('logon_timeout');
  }
  public set logonTimeout(value: number) {
    this._logonTimeout = value;
  }
  public resetLogonTimeout() {
    this._logonTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonTimeoutInput() {
    return this._logonTimeout;
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

  // password2 - computed: true, optional: true, required: false
  private _password2?: string[]; 
  public get password2() {
    return cdktf.Fn.tolist(this.getListAttribute('password2'));
  }
  public set password2(value: string[]) {
    this._password2 = value;
  }
  public resetPassword2() {
    this._password2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password2Input() {
    return this._password2;
  }

  // password3 - computed: true, optional: true, required: false
  private _password3?: string[]; 
  public get password3() {
    return cdktf.Fn.tolist(this.getListAttribute('password3'));
  }
  public set password3(value: string[]) {
    this._password3 = value;
  }
  public resetPassword3() {
    this._password3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password3Input() {
    return this._password3;
  }

  // password4 - computed: true, optional: true, required: false
  private _password4?: string[]; 
  public get password4() {
    return cdktf.Fn.tolist(this.getListAttribute('password4'));
  }
  public set password4(value: string[]) {
    this._password4 = value;
  }
  public resetPassword4() {
    this._password4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password4Input() {
    return this._password4;
  }

  // password5 - computed: true, optional: true, required: false
  private _password5?: string[]; 
  public get password5() {
    return cdktf.Fn.tolist(this.getListAttribute('password5'));
  }
  public set password5(value: string[]) {
    this._password5 = value;
  }
  public resetPassword5() {
    this._password5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get password5Input() {
    return this._password5;
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

  // port2 - computed: true, optional: true, required: false
  private _port2?: number; 
  public get port2() {
    return this.getNumberAttribute('port2');
  }
  public set port2(value: number) {
    this._port2 = value;
  }
  public resetPort2() {
    this._port2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port2Input() {
    return this._port2;
  }

  // port3 - computed: true, optional: true, required: false
  private _port3?: number; 
  public get port3() {
    return this.getNumberAttribute('port3');
  }
  public set port3(value: number) {
    this._port3 = value;
  }
  public resetPort3() {
    this._port3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port3Input() {
    return this._port3;
  }

  // port4 - computed: true, optional: true, required: false
  private _port4?: number; 
  public get port4() {
    return this.getNumberAttribute('port4');
  }
  public set port4(value: number) {
    this._port4 = value;
  }
  public resetPort4() {
    this._port4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port4Input() {
    return this._port4;
  }

  // port5 - computed: true, optional: true, required: false
  private _port5?: number; 
  public get port5() {
    return this.getNumberAttribute('port5');
  }
  public set port5(value: number) {
    this._port5 = value;
  }
  public resetPort5() {
    this._port5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get port5Input() {
    return this._port5;
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

  // server2 - computed: false, optional: true, required: false
  private _server2?: string; 
  public get server2() {
    return this.getStringAttribute('server2');
  }
  public set server2(value: string) {
    this._server2 = value;
  }
  public resetServer2() {
    this._server2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server2Input() {
    return this._server2;
  }

  // server3 - computed: false, optional: true, required: false
  private _server3?: string; 
  public get server3() {
    return this.getStringAttribute('server3');
  }
  public set server3(value: string) {
    this._server3 = value;
  }
  public resetServer3() {
    this._server3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server3Input() {
    return this._server3;
  }

  // server4 - computed: false, optional: true, required: false
  private _server4?: string; 
  public get server4() {
    return this.getStringAttribute('server4');
  }
  public set server4(value: string) {
    this._server4 = value;
  }
  public resetServer4() {
    this._server4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server4Input() {
    return this._server4;
  }

  // server5 - computed: false, optional: true, required: false
  private _server5?: string; 
  public get server5() {
    return this.getStringAttribute('server5');
  }
  public set server5(value: string) {
    this._server5 = value;
  }
  public resetServer5() {
    this._server5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get server5Input() {
    return this._server5;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_ip6 - computed: true, optional: true, required: false
  private _sourceIp6?: string; 
  public get sourceIp6() {
    return this.getStringAttribute('source_ip6');
  }
  public set sourceIp6(value: string) {
    this._sourceIp6 = value;
  }
  public resetSourceIp6() {
    this._sourceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIp6Input() {
    return this._sourceIp6;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_server_host_ip_check - computed: true, optional: true, required: false
  private _sslServerHostIpCheck?: string; 
  public get sslServerHostIpCheck() {
    return this.getStringAttribute('ssl_server_host_ip_check');
  }
  public set sslServerHostIpCheck(value: string) {
    this._sslServerHostIpCheck = value;
  }
  public resetSslServerHostIpCheck() {
    this._sslServerHostIpCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerHostIpCheckInput() {
    return this._sslServerHostIpCheck;
  }

  // ssl_trusted_cert - computed: false, optional: true, required: false
  private _sslTrustedCert?: string; 
  public get sslTrustedCert() {
    return this.getStringAttribute('ssl_trusted_cert');
  }
  public set sslTrustedCert(value: string) {
    this._sslTrustedCert = value;
  }
  public resetSslTrustedCert() {
    this._sslTrustedCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTrustedCertInput() {
    return this._sslTrustedCert;
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

  // user_info_server - computed: false, optional: true, required: false
  private _userInfoServer?: string; 
  public get userInfoServer() {
    return this.getStringAttribute('user_info_server');
  }
  public set userInfoServer(value: string) {
    this._userInfoServer = value;
  }
  public resetUserInfoServer() {
    this._userInfoServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoServerInput() {
    return this._userInfoServer;
  }

  // vrf_select - computed: false, optional: true, required: false
  private _vrfSelect?: number; 
  public get vrfSelect() {
    return this.getNumberAttribute('vrf_select');
  }
  public set vrfSelect(value: number) {
    this._vrfSelect = value;
  }
  public resetVrfSelect() {
    this._vrfSelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSelectInput() {
    return this._vrfSelect;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectUserFssoDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectUserFssoDynamicMappingScopeA[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _gui_meta: cdktf.stringToTerraform(this._guiMeta),
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fsso: cdktf.stringToTerraform(this._fsso),
      group_poll_interval: cdktf.numberToTerraform(this._groupPollInterval),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ldap_poll: cdktf.stringToTerraform(this._ldapPoll),
      ldap_poll_filter: cdktf.stringToTerraform(this._ldapPollFilter),
      ldap_poll_interval: cdktf.numberToTerraform(this._ldapPollInterval),
      ldap_server: cdktf.stringToTerraform(this._ldapServer),
      logon_timeout: cdktf.numberToTerraform(this._logonTimeout),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      password2: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password2),
      password3: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password3),
      password4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password4),
      password5: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password5),
      port: cdktf.numberToTerraform(this._port),
      port2: cdktf.numberToTerraform(this._port2),
      port3: cdktf.numberToTerraform(this._port3),
      port4: cdktf.numberToTerraform(this._port4),
      port5: cdktf.numberToTerraform(this._port5),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      server: cdktf.stringToTerraform(this._server),
      server2: cdktf.stringToTerraform(this._server2),
      server3: cdktf.stringToTerraform(this._server3),
      server4: cdktf.stringToTerraform(this._server4),
      server5: cdktf.stringToTerraform(this._server5),
      sni: cdktf.stringToTerraform(this._sni),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip6: cdktf.stringToTerraform(this._sourceIp6),
      ssl: cdktf.stringToTerraform(this._ssl),
      ssl_server_host_ip_check: cdktf.stringToTerraform(this._sslServerHostIpCheck),
      ssl_trusted_cert: cdktf.stringToTerraform(this._sslTrustedCert),
      type: cdktf.stringToTerraform(this._type),
      user_info_server: cdktf.stringToTerraform(this._userInfoServer),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      _scope: cdktf.listMapper(objectUserFssoDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fsso: {
        value: cdktf.stringToHclTerraform(this._fsso),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_poll_interval: {
        value: cdktf.numberToHclTerraform(this._groupPollInterval),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_select_method: {
        value: cdktf.stringToHclTerraform(this._interfaceSelectMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_poll: {
        value: cdktf.stringToHclTerraform(this._ldapPoll),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_poll_filter: {
        value: cdktf.stringToHclTerraform(this._ldapPollFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ldap_poll_interval: {
        value: cdktf.numberToHclTerraform(this._ldapPollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ldap_server: {
        value: cdktf.stringToHclTerraform(this._ldapServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logon_timeout: {
        value: cdktf.numberToHclTerraform(this._logonTimeout),
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
      password2: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password2),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password3: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password3),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password4),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password5: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password5),
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
      port2: {
        value: cdktf.numberToHclTerraform(this._port2),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port3: {
        value: cdktf.numberToHclTerraform(this._port3),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port4: {
        value: cdktf.numberToHclTerraform(this._port4),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port5: {
        value: cdktf.numberToHclTerraform(this._port5),
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
      server2: {
        value: cdktf.stringToHclTerraform(this._server2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server3: {
        value: cdktf.stringToHclTerraform(this._server3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server4: {
        value: cdktf.stringToHclTerraform(this._server4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server5: {
        value: cdktf.stringToHclTerraform(this._server5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni: {
        value: cdktf.stringToHclTerraform(this._sni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_ip6: {
        value: cdktf.stringToHclTerraform(this._sourceIp6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_server_host_ip_check: {
        value: cdktf.stringToHclTerraform(this._sslServerHostIpCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_trusted_cert: {
        value: cdktf.stringToHclTerraform(this._sslTrustedCert),
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
      user_info_server: {
        value: cdktf.stringToHclTerraform(this._userInfoServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectUserFssoDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserFssoDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
