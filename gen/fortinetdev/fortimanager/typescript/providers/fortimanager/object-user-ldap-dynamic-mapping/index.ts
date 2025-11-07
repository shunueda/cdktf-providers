// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectUserLdapDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#account_key_cert_field ObjectUserLdapDynamicMappingA#account_key_cert_field}
  */
  readonly accountKeyCertField?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#account_key_filter ObjectUserLdapDynamicMappingA#account_key_filter}
  */
  readonly accountKeyFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#account_key_name ObjectUserLdapDynamicMappingA#account_key_name}
  */
  readonly accountKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#account_key_processing ObjectUserLdapDynamicMappingA#account_key_processing}
  */
  readonly accountKeyProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#account_key_upn_san ObjectUserLdapDynamicMappingA#account_key_upn_san}
  */
  readonly accountKeyUpnSan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#adom ObjectUserLdapDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#antiphish ObjectUserLdapDynamicMappingA#antiphish}
  */
  readonly antiphish?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#ca_cert ObjectUserLdapDynamicMappingA#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#client_cert ObjectUserLdapDynamicMappingA#client_cert}
  */
  readonly clientCert?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#client_cert_auth ObjectUserLdapDynamicMappingA#client_cert_auth}
  */
  readonly clientCertAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#cnid ObjectUserLdapDynamicMappingA#cnid}
  */
  readonly cnid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#dn ObjectUserLdapDynamicMappingA#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#dynamic_sort_subtable ObjectUserLdapDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#filter ObjectUserLdapDynamicMappingA#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#group ObjectUserLdapDynamicMappingA#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#group_filter ObjectUserLdapDynamicMappingA#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#group_member_check ObjectUserLdapDynamicMappingA#group_member_check}
  */
  readonly groupMemberCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#group_object_filter ObjectUserLdapDynamicMappingA#group_object_filter}
  */
  readonly groupObjectFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#group_object_search_base ObjectUserLdapDynamicMappingA#group_object_search_base}
  */
  readonly groupObjectSearchBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#group_search_base ObjectUserLdapDynamicMappingA#group_search_base}
  */
  readonly groupSearchBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#id ObjectUserLdapDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#interface ObjectUserLdapDynamicMappingA#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#interface_select_method ObjectUserLdapDynamicMappingA#interface_select_method}
  */
  readonly interfaceSelectMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#ldap ObjectUserLdapDynamicMappingA#ldap}
  */
  readonly ldap: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#max_connections ObjectUserLdapDynamicMappingA#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#member_attr ObjectUserLdapDynamicMappingA#member_attr}
  */
  readonly memberAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#obtain_user_info ObjectUserLdapDynamicMappingA#obtain_user_info}
  */
  readonly obtainUserInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#password ObjectUserLdapDynamicMappingA#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#password_attr ObjectUserLdapDynamicMappingA#password_attr}
  */
  readonly passwordAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#password_expiry_warning ObjectUserLdapDynamicMappingA#password_expiry_warning}
  */
  readonly passwordExpiryWarning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#password_renewal ObjectUserLdapDynamicMappingA#password_renewal}
  */
  readonly passwordRenewal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#port ObjectUserLdapDynamicMappingA#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#retrieve_protection_profile ObjectUserLdapDynamicMappingA#retrieve_protection_profile}
  */
  readonly retrieveProtectionProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#scopetype ObjectUserLdapDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#search_type ObjectUserLdapDynamicMappingA#search_type}
  */
  readonly searchType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#secondary_server ObjectUserLdapDynamicMappingA#secondary_server}
  */
  readonly secondaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#secure ObjectUserLdapDynamicMappingA#secure}
  */
  readonly secure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#server ObjectUserLdapDynamicMappingA#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#server_identity_check ObjectUserLdapDynamicMappingA#server_identity_check}
  */
  readonly serverIdentityCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#source_ip ObjectUserLdapDynamicMappingA#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#source_ip_interface ObjectUserLdapDynamicMappingA#source_ip_interface}
  */
  readonly sourceIpInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#source_port ObjectUserLdapDynamicMappingA#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#ssl_max_proto_version ObjectUserLdapDynamicMappingA#ssl_max_proto_version}
  */
  readonly sslMaxProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#ssl_min_proto_version ObjectUserLdapDynamicMappingA#ssl_min_proto_version}
  */
  readonly sslMinProtoVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#status_ttl ObjectUserLdapDynamicMappingA#status_ttl}
  */
  readonly statusTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#tertiary_server ObjectUserLdapDynamicMappingA#tertiary_server}
  */
  readonly tertiaryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#two_factor ObjectUserLdapDynamicMappingA#two_factor}
  */
  readonly twoFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#two_factor_authentication ObjectUserLdapDynamicMappingA#two_factor_authentication}
  */
  readonly twoFactorAuthentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#two_factor_filter ObjectUserLdapDynamicMappingA#two_factor_filter}
  */
  readonly twoFactorFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#two_factor_notification ObjectUserLdapDynamicMappingA#two_factor_notification}
  */
  readonly twoFactorNotification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#type ObjectUserLdapDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#user_info_exchange_server ObjectUserLdapDynamicMappingA#user_info_exchange_server}
  */
  readonly userInfoExchangeServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#username ObjectUserLdapDynamicMappingA#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#vrf_select ObjectUserLdapDynamicMappingA#vrf_select}
  */
  readonly vrfSelect?: number;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#_scope ObjectUserLdapDynamicMappingA#_scope}
  */
  readonly scope?: ObjectUserLdapDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectUserLdapDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#name ObjectUserLdapDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#vdom ObjectUserLdapDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectUserLdapDynamicMappingScopeAToTerraform(struct?: ObjectUserLdapDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectUserLdapDynamicMappingScopeAToHclTerraform(struct?: ObjectUserLdapDynamicMappingScopeA | cdktf.IResolvable): any {
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

export class ObjectUserLdapDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectUserLdapDynamicMappingScopeA | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectUserLdapDynamicMappingScopeA | cdktf.IResolvable | undefined) {
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

export class ObjectUserLdapDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectUserLdapDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectUserLdapDynamicMappingScopeAOutputReference {
    return new ObjectUserLdapDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping fortimanager_object_user_ldap_dynamic_mapping}
*/
export class ObjectUserLdapDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_user_ldap_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectUserLdapDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectUserLdapDynamicMappingA to import
  * @param importFromId The id of the existing ObjectUserLdapDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectUserLdapDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_user_ldap_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_user_ldap_dynamic_mapping fortimanager_object_user_ldap_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectUserLdapDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectUserLdapDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_user_ldap_dynamic_mapping',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountKeyCertField = config.accountKeyCertField;
    this._accountKeyFilter = config.accountKeyFilter;
    this._accountKeyName = config.accountKeyName;
    this._accountKeyProcessing = config.accountKeyProcessing;
    this._accountKeyUpnSan = config.accountKeyUpnSan;
    this._adom = config.adom;
    this._antiphish = config.antiphish;
    this._caCert = config.caCert;
    this._clientCert = config.clientCert;
    this._clientCertAuth = config.clientCertAuth;
    this._cnid = config.cnid;
    this._dn = config.dn;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._filter = config.filter;
    this._group = config.group;
    this._groupFilter = config.groupFilter;
    this._groupMemberCheck = config.groupMemberCheck;
    this._groupObjectFilter = config.groupObjectFilter;
    this._groupObjectSearchBase = config.groupObjectSearchBase;
    this._groupSearchBase = config.groupSearchBase;
    this._id = config.id;
    this._interface = config.interface;
    this._interfaceSelectMethod = config.interfaceSelectMethod;
    this._ldap = config.ldap;
    this._maxConnections = config.maxConnections;
    this._memberAttr = config.memberAttr;
    this._obtainUserInfo = config.obtainUserInfo;
    this._password = config.password;
    this._passwordAttr = config.passwordAttr;
    this._passwordExpiryWarning = config.passwordExpiryWarning;
    this._passwordRenewal = config.passwordRenewal;
    this._port = config.port;
    this._retrieveProtectionProfile = config.retrieveProtectionProfile;
    this._scopetype = config.scopetype;
    this._searchType = config.searchType;
    this._secondaryServer = config.secondaryServer;
    this._secure = config.secure;
    this._server = config.server;
    this._serverIdentityCheck = config.serverIdentityCheck;
    this._sourceIp = config.sourceIp;
    this._sourceIpInterface = config.sourceIpInterface;
    this._sourcePort = config.sourcePort;
    this._sslMaxProtoVersion = config.sslMaxProtoVersion;
    this._sslMinProtoVersion = config.sslMinProtoVersion;
    this._statusTtl = config.statusTtl;
    this._tertiaryServer = config.tertiaryServer;
    this._twoFactor = config.twoFactor;
    this._twoFactorAuthentication = config.twoFactorAuthentication;
    this._twoFactorFilter = config.twoFactorFilter;
    this._twoFactorNotification = config.twoFactorNotification;
    this._type = config.type;
    this._userInfoExchangeServer = config.userInfoExchangeServer;
    this._username = config.username;
    this._vrfSelect = config.vrfSelect;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_key_cert_field - computed: true, optional: true, required: false
  private _accountKeyCertField?: string; 
  public get accountKeyCertField() {
    return this.getStringAttribute('account_key_cert_field');
  }
  public set accountKeyCertField(value: string) {
    this._accountKeyCertField = value;
  }
  public resetAccountKeyCertField() {
    this._accountKeyCertField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyCertFieldInput() {
    return this._accountKeyCertField;
  }

  // account_key_filter - computed: true, optional: true, required: false
  private _accountKeyFilter?: string; 
  public get accountKeyFilter() {
    return this.getStringAttribute('account_key_filter');
  }
  public set accountKeyFilter(value: string) {
    this._accountKeyFilter = value;
  }
  public resetAccountKeyFilter() {
    this._accountKeyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyFilterInput() {
    return this._accountKeyFilter;
  }

  // account_key_name - computed: false, optional: true, required: false
  private _accountKeyName?: string; 
  public get accountKeyName() {
    return this.getStringAttribute('account_key_name');
  }
  public set accountKeyName(value: string) {
    this._accountKeyName = value;
  }
  public resetAccountKeyName() {
    this._accountKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyNameInput() {
    return this._accountKeyName;
  }

  // account_key_processing - computed: true, optional: true, required: false
  private _accountKeyProcessing?: string; 
  public get accountKeyProcessing() {
    return this.getStringAttribute('account_key_processing');
  }
  public set accountKeyProcessing(value: string) {
    this._accountKeyProcessing = value;
  }
  public resetAccountKeyProcessing() {
    this._accountKeyProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyProcessingInput() {
    return this._accountKeyProcessing;
  }

  // account_key_upn_san - computed: true, optional: true, required: false
  private _accountKeyUpnSan?: string; 
  public get accountKeyUpnSan() {
    return this.getStringAttribute('account_key_upn_san');
  }
  public set accountKeyUpnSan(value: string) {
    this._accountKeyUpnSan = value;
  }
  public resetAccountKeyUpnSan() {
    this._accountKeyUpnSan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyUpnSanInput() {
    return this._accountKeyUpnSan;
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

  // antiphish - computed: true, optional: true, required: false
  private _antiphish?: string; 
  public get antiphish() {
    return this.getStringAttribute('antiphish');
  }
  public set antiphish(value: string) {
    this._antiphish = value;
  }
  public resetAntiphish() {
    this._antiphish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiphishInput() {
    return this._antiphish;
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

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string[]; 
  public get clientCert() {
    return cdktf.Fn.tolist(this.getListAttribute('client_cert'));
  }
  public set clientCert(value: string[]) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // client_cert_auth - computed: true, optional: true, required: false
  private _clientCertAuth?: string; 
  public get clientCertAuth() {
    return this.getStringAttribute('client_cert_auth');
  }
  public set clientCertAuth(value: string) {
    this._clientCertAuth = value;
  }
  public resetClientCertAuth() {
    this._clientCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertAuthInput() {
    return this._clientCertAuth;
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

  // filter - computed: false, optional: true, required: false
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

  // group_filter - computed: false, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // group_member_check - computed: true, optional: true, required: false
  private _groupMemberCheck?: string; 
  public get groupMemberCheck() {
    return this.getStringAttribute('group_member_check');
  }
  public set groupMemberCheck(value: string) {
    this._groupMemberCheck = value;
  }
  public resetGroupMemberCheck() {
    this._groupMemberCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMemberCheckInput() {
    return this._groupMemberCheck;
  }

  // group_object_filter - computed: false, optional: true, required: false
  private _groupObjectFilter?: string; 
  public get groupObjectFilter() {
    return this.getStringAttribute('group_object_filter');
  }
  public set groupObjectFilter(value: string) {
    this._groupObjectFilter = value;
  }
  public resetGroupObjectFilter() {
    this._groupObjectFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectFilterInput() {
    return this._groupObjectFilter;
  }

  // group_object_search_base - computed: false, optional: true, required: false
  private _groupObjectSearchBase?: string; 
  public get groupObjectSearchBase() {
    return this.getStringAttribute('group_object_search_base');
  }
  public set groupObjectSearchBase(value: string) {
    this._groupObjectSearchBase = value;
  }
  public resetGroupObjectSearchBase() {
    this._groupObjectSearchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectSearchBaseInput() {
    return this._groupObjectSearchBase;
  }

  // group_search_base - computed: false, optional: true, required: false
  private _groupSearchBase?: string; 
  public get groupSearchBase() {
    return this.getStringAttribute('group_search_base');
  }
  public set groupSearchBase(value: string) {
    this._groupSearchBase = value;
  }
  public resetGroupSearchBase() {
    this._groupSearchBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSearchBaseInput() {
    return this._groupSearchBase;
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

  // ldap - computed: false, optional: false, required: true
  private _ldap?: string; 
  public get ldap() {
    return this.getStringAttribute('ldap');
  }
  public set ldap(value: string) {
    this._ldap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // member_attr - computed: true, optional: true, required: false
  private _memberAttr?: string; 
  public get memberAttr() {
    return this.getStringAttribute('member_attr');
  }
  public set memberAttr(value: string) {
    this._memberAttr = value;
  }
  public resetMemberAttr() {
    this._memberAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAttrInput() {
    return this._memberAttr;
  }

  // obtain_user_info - computed: true, optional: true, required: false
  private _obtainUserInfo?: string; 
  public get obtainUserInfo() {
    return this.getStringAttribute('obtain_user_info');
  }
  public set obtainUserInfo(value: string) {
    this._obtainUserInfo = value;
  }
  public resetObtainUserInfo() {
    this._obtainUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get obtainUserInfoInput() {
    return this._obtainUserInfo;
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

  // password_attr - computed: false, optional: true, required: false
  private _passwordAttr?: string; 
  public get passwordAttr() {
    return this.getStringAttribute('password_attr');
  }
  public set passwordAttr(value: string) {
    this._passwordAttr = value;
  }
  public resetPasswordAttr() {
    this._passwordAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAttrInput() {
    return this._passwordAttr;
  }

  // password_expiry_warning - computed: true, optional: true, required: false
  private _passwordExpiryWarning?: string; 
  public get passwordExpiryWarning() {
    return this.getStringAttribute('password_expiry_warning');
  }
  public set passwordExpiryWarning(value: string) {
    this._passwordExpiryWarning = value;
  }
  public resetPasswordExpiryWarning() {
    this._passwordExpiryWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpiryWarningInput() {
    return this._passwordExpiryWarning;
  }

  // password_renewal - computed: true, optional: true, required: false
  private _passwordRenewal?: string; 
  public get passwordRenewal() {
    return this.getStringAttribute('password_renewal');
  }
  public set passwordRenewal(value: string) {
    this._passwordRenewal = value;
  }
  public resetPasswordRenewal() {
    this._passwordRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRenewalInput() {
    return this._passwordRenewal;
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

  // retrieve_protection_profile - computed: false, optional: true, required: false
  private _retrieveProtectionProfile?: string; 
  public get retrieveProtectionProfile() {
    return this.getStringAttribute('retrieve_protection_profile');
  }
  public set retrieveProtectionProfile(value: string) {
    this._retrieveProtectionProfile = value;
  }
  public resetRetrieveProtectionProfile() {
    this._retrieveProtectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveProtectionProfileInput() {
    return this._retrieveProtectionProfile;
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

  // search_type - computed: true, optional: true, required: false
  private _searchType?: string[]; 
  public get searchType() {
    return cdktf.Fn.tolist(this.getListAttribute('search_type'));
  }
  public set searchType(value: string[]) {
    this._searchType = value;
  }
  public resetSearchType() {
    this._searchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTypeInput() {
    return this._searchType;
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

  // server_identity_check - computed: false, optional: true, required: false
  private _serverIdentityCheck?: string; 
  public get serverIdentityCheck() {
    return this.getStringAttribute('server_identity_check');
  }
  public set serverIdentityCheck(value: string) {
    this._serverIdentityCheck = value;
  }
  public resetServerIdentityCheck() {
    this._serverIdentityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdentityCheckInput() {
    return this._serverIdentityCheck;
  }

  // source_ip - computed: false, optional: true, required: false
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

  // source_ip_interface - computed: true, optional: true, required: false
  private _sourceIpInterface?: string[]; 
  public get sourceIpInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_interface'));
  }
  public set sourceIpInterface(value: string[]) {
    this._sourceIpInterface = value;
  }
  public resetSourceIpInterface() {
    this._sourceIpInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInterfaceInput() {
    return this._sourceIpInterface;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // ssl_max_proto_version - computed: false, optional: true, required: false
  private _sslMaxProtoVersion?: string; 
  public get sslMaxProtoVersion() {
    return this.getStringAttribute('ssl_max_proto_version');
  }
  public set sslMaxProtoVersion(value: string) {
    this._sslMaxProtoVersion = value;
  }
  public resetSslMaxProtoVersion() {
    this._sslMaxProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxProtoVersionInput() {
    return this._sslMaxProtoVersion;
  }

  // ssl_min_proto_version - computed: true, optional: true, required: false
  private _sslMinProtoVersion?: string; 
  public get sslMinProtoVersion() {
    return this.getStringAttribute('ssl_min_proto_version');
  }
  public set sslMinProtoVersion(value: string) {
    this._sslMinProtoVersion = value;
  }
  public resetSslMinProtoVersion() {
    this._sslMinProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinProtoVersionInput() {
    return this._sslMinProtoVersion;
  }

  // status_ttl - computed: false, optional: true, required: false
  private _statusTtl?: number; 
  public get statusTtl() {
    return this.getNumberAttribute('status_ttl');
  }
  public set statusTtl(value: number) {
    this._statusTtl = value;
  }
  public resetStatusTtl() {
    this._statusTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusTtlInput() {
    return this._statusTtl;
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

  // two_factor - computed: true, optional: true, required: false
  private _twoFactor?: string; 
  public get twoFactor() {
    return this.getStringAttribute('two_factor');
  }
  public set twoFactor(value: string) {
    this._twoFactor = value;
  }
  public resetTwoFactor() {
    this._twoFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorInput() {
    return this._twoFactor;
  }

  // two_factor_authentication - computed: false, optional: true, required: false
  private _twoFactorAuthentication?: string; 
  public get twoFactorAuthentication() {
    return this.getStringAttribute('two_factor_authentication');
  }
  public set twoFactorAuthentication(value: string) {
    this._twoFactorAuthentication = value;
  }
  public resetTwoFactorAuthentication() {
    this._twoFactorAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorAuthenticationInput() {
    return this._twoFactorAuthentication;
  }

  // two_factor_filter - computed: false, optional: true, required: false
  private _twoFactorFilter?: string; 
  public get twoFactorFilter() {
    return this.getStringAttribute('two_factor_filter');
  }
  public set twoFactorFilter(value: string) {
    this._twoFactorFilter = value;
  }
  public resetTwoFactorFilter() {
    this._twoFactorFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorFilterInput() {
    return this._twoFactorFilter;
  }

  // two_factor_notification - computed: false, optional: true, required: false
  private _twoFactorNotification?: string; 
  public get twoFactorNotification() {
    return this.getStringAttribute('two_factor_notification');
  }
  public set twoFactorNotification(value: string) {
    this._twoFactorNotification = value;
  }
  public resetTwoFactorNotification() {
    this._twoFactorNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorNotificationInput() {
    return this._twoFactorNotification;
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

  // user_info_exchange_server - computed: false, optional: true, required: false
  private _userInfoExchangeServer?: string; 
  public get userInfoExchangeServer() {
    return this.getStringAttribute('user_info_exchange_server');
  }
  public set userInfoExchangeServer(value: string) {
    this._userInfoExchangeServer = value;
  }
  public resetUserInfoExchangeServer() {
    this._userInfoExchangeServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoExchangeServerInput() {
    return this._userInfoExchangeServer;
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
  private _scope = new ObjectUserLdapDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectUserLdapDynamicMappingScopeA[] | cdktf.IResolvable) {
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
      account_key_cert_field: cdktf.stringToTerraform(this._accountKeyCertField),
      account_key_filter: cdktf.stringToTerraform(this._accountKeyFilter),
      account_key_name: cdktf.stringToTerraform(this._accountKeyName),
      account_key_processing: cdktf.stringToTerraform(this._accountKeyProcessing),
      account_key_upn_san: cdktf.stringToTerraform(this._accountKeyUpnSan),
      adom: cdktf.stringToTerraform(this._adom),
      antiphish: cdktf.stringToTerraform(this._antiphish),
      ca_cert: cdktf.stringToTerraform(this._caCert),
      client_cert: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientCert),
      client_cert_auth: cdktf.stringToTerraform(this._clientCertAuth),
      cnid: cdktf.stringToTerraform(this._cnid),
      dn: cdktf.stringToTerraform(this._dn),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      filter: cdktf.stringToTerraform(this._filter),
      group: cdktf.stringToTerraform(this._group),
      group_filter: cdktf.stringToTerraform(this._groupFilter),
      group_member_check: cdktf.stringToTerraform(this._groupMemberCheck),
      group_object_filter: cdktf.stringToTerraform(this._groupObjectFilter),
      group_object_search_base: cdktf.stringToTerraform(this._groupObjectSearchBase),
      group_search_base: cdktf.stringToTerraform(this._groupSearchBase),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interface_select_method: cdktf.stringToTerraform(this._interfaceSelectMethod),
      ldap: cdktf.stringToTerraform(this._ldap),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      member_attr: cdktf.stringToTerraform(this._memberAttr),
      obtain_user_info: cdktf.stringToTerraform(this._obtainUserInfo),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      password_attr: cdktf.stringToTerraform(this._passwordAttr),
      password_expiry_warning: cdktf.stringToTerraform(this._passwordExpiryWarning),
      password_renewal: cdktf.stringToTerraform(this._passwordRenewal),
      port: cdktf.numberToTerraform(this._port),
      retrieve_protection_profile: cdktf.stringToTerraform(this._retrieveProtectionProfile),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      search_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchType),
      secondary_server: cdktf.stringToTerraform(this._secondaryServer),
      secure: cdktf.stringToTerraform(this._secure),
      server: cdktf.stringToTerraform(this._server),
      server_identity_check: cdktf.stringToTerraform(this._serverIdentityCheck),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_ip_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceIpInterface),
      source_port: cdktf.numberToTerraform(this._sourcePort),
      ssl_max_proto_version: cdktf.stringToTerraform(this._sslMaxProtoVersion),
      ssl_min_proto_version: cdktf.stringToTerraform(this._sslMinProtoVersion),
      status_ttl: cdktf.numberToTerraform(this._statusTtl),
      tertiary_server: cdktf.stringToTerraform(this._tertiaryServer),
      two_factor: cdktf.stringToTerraform(this._twoFactor),
      two_factor_authentication: cdktf.stringToTerraform(this._twoFactorAuthentication),
      two_factor_filter: cdktf.stringToTerraform(this._twoFactorFilter),
      two_factor_notification: cdktf.stringToTerraform(this._twoFactorNotification),
      type: cdktf.stringToTerraform(this._type),
      user_info_exchange_server: cdktf.stringToTerraform(this._userInfoExchangeServer),
      username: cdktf.stringToTerraform(this._username),
      vrf_select: cdktf.numberToTerraform(this._vrfSelect),
      _scope: cdktf.listMapper(objectUserLdapDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_key_cert_field: {
        value: cdktf.stringToHclTerraform(this._accountKeyCertField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_filter: {
        value: cdktf.stringToHclTerraform(this._accountKeyFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_name: {
        value: cdktf.stringToHclTerraform(this._accountKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_processing: {
        value: cdktf.stringToHclTerraform(this._accountKeyProcessing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_key_upn_san: {
        value: cdktf.stringToHclTerraform(this._accountKeyUpnSan),
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
      antiphish: {
        value: cdktf.stringToHclTerraform(this._antiphish),
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
      client_cert: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientCert),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_cert_auth: {
        value: cdktf.stringToHclTerraform(this._clientCertAuth),
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
      group_filter: {
        value: cdktf.stringToHclTerraform(this._groupFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_member_check: {
        value: cdktf.stringToHclTerraform(this._groupMemberCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_filter: {
        value: cdktf.stringToHclTerraform(this._groupObjectFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_object_search_base: {
        value: cdktf.stringToHclTerraform(this._groupObjectSearchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_search_base: {
        value: cdktf.stringToHclTerraform(this._groupSearchBase),
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
      ldap: {
        value: cdktf.stringToHclTerraform(this._ldap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member_attr: {
        value: cdktf.stringToHclTerraform(this._memberAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      obtain_user_info: {
        value: cdktf.stringToHclTerraform(this._obtainUserInfo),
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
      password_attr: {
        value: cdktf.stringToHclTerraform(this._passwordAttr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_expiry_warning: {
        value: cdktf.stringToHclTerraform(this._passwordExpiryWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_renewal: {
        value: cdktf.stringToHclTerraform(this._passwordRenewal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retrieve_protection_profile: {
        value: cdktf.stringToHclTerraform(this._retrieveProtectionProfile),
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
      search_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      server_identity_check: {
        value: cdktf.stringToHclTerraform(this._serverIdentityCheck),
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
      source_ip_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceIpInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source_port: {
        value: cdktf.numberToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_max_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMaxProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_min_proto_version: {
        value: cdktf.stringToHclTerraform(this._sslMinProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_ttl: {
        value: cdktf.numberToHclTerraform(this._statusTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tertiary_server: {
        value: cdktf.stringToHclTerraform(this._tertiaryServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor: {
        value: cdktf.stringToHclTerraform(this._twoFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_authentication: {
        value: cdktf.stringToHclTerraform(this._twoFactorAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_filter: {
        value: cdktf.stringToHclTerraform(this._twoFactorFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_factor_notification: {
        value: cdktf.stringToHclTerraform(this._twoFactorNotification),
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
      user_info_exchange_server: {
        value: cdktf.stringToHclTerraform(this._userInfoExchangeServer),
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
      vrf_select: {
        value: cdktf.numberToHclTerraform(this._vrfSelect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectUserLdapDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectUserLdapDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
