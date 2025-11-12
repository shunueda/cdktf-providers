// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KerberosRealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controls how PingFederate connects to the Active Directory/Kerberos Realm. Options are `DIRECT`, `LDAP_GATEWAY`, `LOCAL_VALIDATION`. The default is `DIRECT`. `LOCAL_VALIDATION` only supported in PF version `12.2` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#connection_type KerberosRealm#connection_type}
  */
  readonly connectionType?: string;
  /**
  * The encrypted Domain/Realm password. Required when `connection_type` is `DIRECT` or `LOCAL_VALIDATION`. Only one of this attribute and 'kerberos_password' should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#kerberos_encrypted_password KerberosRealm#kerberos_encrypted_password}
  */
  readonly kerberosEncryptedPassword?: string;
  /**
  * The Domain/Realm password. Required when `connection_type` is `DIRECT` or `LOCAL_VALIDATION`. Only one of this attribute and 'kerberos_encrypted_password' should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#kerberos_password KerberosRealm#kerberos_password}
  */
  readonly kerberosPassword?: string;
  /**
  * The Domain/Realm name used for display in UI screens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#kerberos_realm_name KerberosRealm#kerberos_realm_name}
  */
  readonly kerberosRealmName: string;
  /**
  * The Domain/Realm username. Required when `connection_type` is `DIRECT` or `LOCAL_VALIDATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#kerberos_username KerberosRealm#kerberos_username}
  */
  readonly kerberosUsername?: string;
  /**
  * The Domain Controller/Key Distribution Center Host Action Names. Only applicable when `connection_type` is `DIRECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#key_distribution_centers KerberosRealm#key_distribution_centers}
  */
  readonly keyDistributionCenters?: string[];
  /**
  * The LDAP gateway used by PingFederate to communicate with the Active Directory. Required when `connection_type` is `LDAP_GATEWAY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#ldap_gateway_data_store_ref KerberosRealm#ldap_gateway_data_store_ref}
  */
  readonly ldapGatewayDataStoreRef?: KerberosRealmLdapGatewayDataStoreRef;
  /**
  * The persistent, unique ID for the Kerberos Realm. It can be any combination of `[a-zA-Z0-9._-]`. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#realm_id KerberosRealm#realm_id}
  */
  readonly realmId?: string;
  /**
  * Determines whether the previous encryption keys are retained when the password is updated. Retaining the previous keys allows existing Kerberos tickets to continue to be validated. The default is `false`. Only applicable when `connection_type` is `DIRECT` or `LOCAL_VALIDATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#retain_previous_keys_on_password_change KerberosRealm#retain_previous_keys_on_password_change}
  */
  readonly retainPreviousKeysOnPasswordChange?: boolean | cdktf.IResolvable;
  /**
  * Controls whether the KDC hostnames and the realm name are concatenated in the auto-generated `krb5.conf` file. Only applicable when `connection_type` is `DIRECT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#suppress_domain_name_concatenation KerberosRealm#suppress_domain_name_concatenation}
  */
  readonly suppressDomainNameConcatenation?: boolean | cdktf.IResolvable;
}
export interface KerberosRealmLdapGatewayDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#id KerberosRealm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function kerberosRealmLdapGatewayDataStoreRefToTerraform(struct?: KerberosRealmLdapGatewayDataStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function kerberosRealmLdapGatewayDataStoreRefToHclTerraform(struct?: KerberosRealmLdapGatewayDataStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KerberosRealmLdapGatewayDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KerberosRealmLdapGatewayDataStoreRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KerberosRealmLdapGatewayDataStoreRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm pingfederate_kerberos_realm}
*/
export class KerberosRealm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_kerberos_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KerberosRealm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KerberosRealm to import
  * @param importFromId The id of the existing KerberosRealm that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KerberosRealm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_kerberos_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/kerberos_realm pingfederate_kerberos_realm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KerberosRealmConfig
  */
  public constructor(scope: Construct, id: string, config: KerberosRealmConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_kerberos_realm',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionType = config.connectionType;
    this._kerberosEncryptedPassword = config.kerberosEncryptedPassword;
    this._kerberosPassword = config.kerberosPassword;
    this._kerberosRealmName = config.kerberosRealmName;
    this._kerberosUsername = config.kerberosUsername;
    this._keyDistributionCenters = config.keyDistributionCenters;
    this._ldapGatewayDataStoreRef.internalValue = config.ldapGatewayDataStoreRef;
    this._realmId = config.realmId;
    this._retainPreviousKeysOnPasswordChange = config.retainPreviousKeysOnPasswordChange;
    this._suppressDomainNameConcatenation = config.suppressDomainNameConcatenation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kerberos_encrypted_password - computed: true, optional: true, required: false
  private _kerberosEncryptedPassword?: string; 
  public get kerberosEncryptedPassword() {
    return this.getStringAttribute('kerberos_encrypted_password');
  }
  public set kerberosEncryptedPassword(value: string) {
    this._kerberosEncryptedPassword = value;
  }
  public resetKerberosEncryptedPassword() {
    this._kerberosEncryptedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosEncryptedPasswordInput() {
    return this._kerberosEncryptedPassword;
  }

  // kerberos_password - computed: false, optional: true, required: false
  private _kerberosPassword?: string; 
  public get kerberosPassword() {
    return this.getStringAttribute('kerberos_password');
  }
  public set kerberosPassword(value: string) {
    this._kerberosPassword = value;
  }
  public resetKerberosPassword() {
    this._kerberosPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPasswordInput() {
    return this._kerberosPassword;
  }

  // kerberos_realm_name - computed: false, optional: false, required: true
  private _kerberosRealmName?: string; 
  public get kerberosRealmName() {
    return this.getStringAttribute('kerberos_realm_name');
  }
  public set kerberosRealmName(value: string) {
    this._kerberosRealmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRealmNameInput() {
    return this._kerberosRealmName;
  }

  // kerberos_username - computed: false, optional: true, required: false
  private _kerberosUsername?: string; 
  public get kerberosUsername() {
    return this.getStringAttribute('kerberos_username');
  }
  public set kerberosUsername(value: string) {
    this._kerberosUsername = value;
  }
  public resetKerberosUsername() {
    this._kerberosUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosUsernameInput() {
    return this._kerberosUsername;
  }

  // key_distribution_centers - computed: true, optional: true, required: false
  private _keyDistributionCenters?: string[]; 
  public get keyDistributionCenters() {
    return cdktf.Fn.tolist(this.getListAttribute('key_distribution_centers'));
  }
  public set keyDistributionCenters(value: string[]) {
    this._keyDistributionCenters = value;
  }
  public resetKeyDistributionCenters() {
    this._keyDistributionCenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDistributionCentersInput() {
    return this._keyDistributionCenters;
  }

  // ldap_gateway_data_store_ref - computed: false, optional: true, required: false
  private _ldapGatewayDataStoreRef = new KerberosRealmLdapGatewayDataStoreRefOutputReference(this, "ldap_gateway_data_store_ref");
  public get ldapGatewayDataStoreRef() {
    return this._ldapGatewayDataStoreRef;
  }
  public putLdapGatewayDataStoreRef(value: KerberosRealmLdapGatewayDataStoreRef) {
    this._ldapGatewayDataStoreRef.internalValue = value;
  }
  public resetLdapGatewayDataStoreRef() {
    this._ldapGatewayDataStoreRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGatewayDataStoreRefInput() {
    return this._ldapGatewayDataStoreRef.internalValue;
  }

  // realm_id - computed: true, optional: true, required: false
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  public resetRealmId() {
    this._realmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // retain_previous_keys_on_password_change - computed: true, optional: true, required: false
  private _retainPreviousKeysOnPasswordChange?: boolean | cdktf.IResolvable; 
  public get retainPreviousKeysOnPasswordChange() {
    return this.getBooleanAttribute('retain_previous_keys_on_password_change');
  }
  public set retainPreviousKeysOnPasswordChange(value: boolean | cdktf.IResolvable) {
    this._retainPreviousKeysOnPasswordChange = value;
  }
  public resetRetainPreviousKeysOnPasswordChange() {
    this._retainPreviousKeysOnPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPreviousKeysOnPasswordChangeInput() {
    return this._retainPreviousKeysOnPasswordChange;
  }

  // suppress_domain_name_concatenation - computed: true, optional: true, required: false
  private _suppressDomainNameConcatenation?: boolean | cdktf.IResolvable; 
  public get suppressDomainNameConcatenation() {
    return this.getBooleanAttribute('suppress_domain_name_concatenation');
  }
  public set suppressDomainNameConcatenation(value: boolean | cdktf.IResolvable) {
    this._suppressDomainNameConcatenation = value;
  }
  public resetSuppressDomainNameConcatenation() {
    this._suppressDomainNameConcatenation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressDomainNameConcatenationInput() {
    return this._suppressDomainNameConcatenation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_type: cdktf.stringToTerraform(this._connectionType),
      kerberos_encrypted_password: cdktf.stringToTerraform(this._kerberosEncryptedPassword),
      kerberos_password: cdktf.stringToTerraform(this._kerberosPassword),
      kerberos_realm_name: cdktf.stringToTerraform(this._kerberosRealmName),
      kerberos_username: cdktf.stringToTerraform(this._kerberosUsername),
      key_distribution_centers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyDistributionCenters),
      ldap_gateway_data_store_ref: kerberosRealmLdapGatewayDataStoreRefToTerraform(this._ldapGatewayDataStoreRef.internalValue),
      realm_id: cdktf.stringToTerraform(this._realmId),
      retain_previous_keys_on_password_change: cdktf.booleanToTerraform(this._retainPreviousKeysOnPasswordChange),
      suppress_domain_name_concatenation: cdktf.booleanToTerraform(this._suppressDomainNameConcatenation),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_encrypted_password: {
        value: cdktf.stringToHclTerraform(this._kerberosEncryptedPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_password: {
        value: cdktf.stringToHclTerraform(this._kerberosPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_realm_name: {
        value: cdktf.stringToHclTerraform(this._kerberosRealmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kerberos_username: {
        value: cdktf.stringToHclTerraform(this._kerberosUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_distribution_centers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyDistributionCenters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ldap_gateway_data_store_ref: {
        value: kerberosRealmLdapGatewayDataStoreRefToHclTerraform(this._ldapGatewayDataStoreRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KerberosRealmLdapGatewayDataStoreRef",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_previous_keys_on_password_change: {
        value: cdktf.booleanToHclTerraform(this._retainPreviousKeysOnPasswordChange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_domain_name_concatenation: {
        value: cdktf.booleanToHclTerraform(this._suppressDomainNameConcatenation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
