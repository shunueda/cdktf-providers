// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthLdapServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#advanced_group_matching_enabled AuthLdapServers#advanced_group_matching_enabled}
  */
  readonly advancedGroupMatchingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#bind_type AuthLdapServers#bind_type}
  */
  readonly bindType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#certificate AuthLdapServers#certificate}
  */
  readonly certificate?: AuthLdapServersCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#client_cert AuthLdapServers#client_cert}
  */
  readonly clientCert?: AuthLdapServersClientCert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#client_cert_auth_enabled AuthLdapServers#client_cert_auth_enabled}
  */
  readonly clientCertAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#cnid AuthLdapServers#cnid}
  */
  readonly cnid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#dn AuthLdapServers#dn}
  */
  readonly dn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#group_filter AuthLdapServers#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#group_member_check AuthLdapServers#group_member_check}
  */
  readonly groupMemberCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#group_object_filter AuthLdapServers#group_object_filter}
  */
  readonly groupObjectFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#group_search_base AuthLdapServers#group_search_base}
  */
  readonly groupSearchBase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#member_attribute AuthLdapServers#member_attribute}
  */
  readonly memberAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#password AuthLdapServers#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#password_renewal_enabled AuthLdapServers#password_renewal_enabled}
  */
  readonly passwordRenewalEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#port AuthLdapServers#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#primary_key AuthLdapServers#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#secure_connection AuthLdapServers#secure_connection}
  */
  readonly secureConnection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#server AuthLdapServers#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#server_identity_check_enabled AuthLdapServers#server_identity_check_enabled}
  */
  readonly serverIdentityCheckEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#username AuthLdapServers#username}
  */
  readonly username?: string;
}
export interface AuthLdapServersCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#datasource AuthLdapServers#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#primary_key AuthLdapServers#primary_key}
  */
  readonly primaryKey?: string;
}

export function authLdapServersCertificateToTerraform(struct?: AuthLdapServersCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authLdapServersCertificateToHclTerraform(struct?: AuthLdapServersCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthLdapServersCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthLdapServersCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthLdapServersCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface AuthLdapServersClientCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#datasource AuthLdapServers#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#primary_key AuthLdapServers#primary_key}
  */
  readonly primaryKey?: string;
}

export function authLdapServersClientCertToTerraform(struct?: AuthLdapServersClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authLdapServersClientCertToHclTerraform(struct?: AuthLdapServersClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthLdapServersClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthLdapServersClientCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthLdapServersClientCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers fortisase_auth_ldap_servers}
*/
export class AuthLdapServers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_auth_ldap_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthLdapServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthLdapServers to import
  * @param importFromId The id of the existing AuthLdapServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthLdapServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_auth_ldap_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_ldap_servers fortisase_auth_ldap_servers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthLdapServersConfig
  */
  public constructor(scope: Construct, id: string, config: AuthLdapServersConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_auth_ldap_servers',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedGroupMatchingEnabled = config.advancedGroupMatchingEnabled;
    this._bindType = config.bindType;
    this._certificate.internalValue = config.certificate;
    this._clientCert.internalValue = config.clientCert;
    this._clientCertAuthEnabled = config.clientCertAuthEnabled;
    this._cnid = config.cnid;
    this._dn = config.dn;
    this._groupFilter = config.groupFilter;
    this._groupMemberCheck = config.groupMemberCheck;
    this._groupObjectFilter = config.groupObjectFilter;
    this._groupSearchBase = config.groupSearchBase;
    this._memberAttribute = config.memberAttribute;
    this._password = config.password;
    this._passwordRenewalEnabled = config.passwordRenewalEnabled;
    this._port = config.port;
    this._primaryKey = config.primaryKey;
    this._secureConnection = config.secureConnection;
    this._server = config.server;
    this._serverIdentityCheckEnabled = config.serverIdentityCheckEnabled;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_group_matching_enabled - computed: true, optional: true, required: false
  private _advancedGroupMatchingEnabled?: boolean | cdktf.IResolvable; 
  public get advancedGroupMatchingEnabled() {
    return this.getBooleanAttribute('advanced_group_matching_enabled');
  }
  public set advancedGroupMatchingEnabled(value: boolean | cdktf.IResolvable) {
    this._advancedGroupMatchingEnabled = value;
  }
  public resetAdvancedGroupMatchingEnabled() {
    this._advancedGroupMatchingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedGroupMatchingEnabledInput() {
    return this._advancedGroupMatchingEnabled;
  }

  // bind_type - computed: true, optional: true, required: false
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  public resetBindType() {
    this._bindType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate = new AuthLdapServersCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: AuthLdapServersCertificate) {
    this._certificate.internalValue = value;
  }
  public resetCertificate() {
    this._certificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert = new AuthLdapServersClientCertOutputReference(this, "client_cert");
  public get clientCert() {
    return this._clientCert;
  }
  public putClientCert(value: AuthLdapServersClientCert) {
    this._clientCert.internalValue = value;
  }
  public resetClientCert() {
    this._clientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert.internalValue;
  }

  // client_cert_auth_enabled - computed: true, optional: true, required: false
  private _clientCertAuthEnabled?: boolean | cdktf.IResolvable; 
  public get clientCertAuthEnabled() {
    return this.getBooleanAttribute('client_cert_auth_enabled');
  }
  public set clientCertAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._clientCertAuthEnabled = value;
  }
  public resetClientCertAuthEnabled() {
    this._clientCertAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertAuthEnabledInput() {
    return this._clientCertAuthEnabled;
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

  // dn - computed: true, optional: true, required: false
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

  // group_filter - computed: true, optional: true, required: false
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

  // group_object_filter - computed: true, optional: true, required: false
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

  // group_search_base - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_attribute - computed: true, optional: true, required: false
  private _memberAttribute?: string; 
  public get memberAttribute() {
    return this.getStringAttribute('member_attribute');
  }
  public set memberAttribute(value: string) {
    this._memberAttribute = value;
  }
  public resetMemberAttribute() {
    this._memberAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAttributeInput() {
    return this._memberAttribute;
  }

  // password - computed: true, optional: true, required: false
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

  // password_renewal_enabled - computed: true, optional: true, required: false
  private _passwordRenewalEnabled?: boolean | cdktf.IResolvable; 
  public get passwordRenewalEnabled() {
    return this.getBooleanAttribute('password_renewal_enabled');
  }
  public set passwordRenewalEnabled(value: boolean | cdktf.IResolvable) {
    this._passwordRenewalEnabled = value;
  }
  public resetPasswordRenewalEnabled() {
    this._passwordRenewalEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRenewalEnabledInput() {
    return this._passwordRenewalEnabled;
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

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // secure_connection - computed: true, optional: true, required: false
  private _secureConnection?: boolean | cdktf.IResolvable; 
  public get secureConnection() {
    return this.getBooleanAttribute('secure_connection');
  }
  public set secureConnection(value: boolean | cdktf.IResolvable) {
    this._secureConnection = value;
  }
  public resetSecureConnection() {
    this._secureConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureConnectionInput() {
    return this._secureConnection;
  }

  // server - computed: true, optional: true, required: false
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

  // server_identity_check_enabled - computed: true, optional: true, required: false
  private _serverIdentityCheckEnabled?: boolean | cdktf.IResolvable; 
  public get serverIdentityCheckEnabled() {
    return this.getBooleanAttribute('server_identity_check_enabled');
  }
  public set serverIdentityCheckEnabled(value: boolean | cdktf.IResolvable) {
    this._serverIdentityCheckEnabled = value;
  }
  public resetServerIdentityCheckEnabled() {
    this._serverIdentityCheckEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdentityCheckEnabledInput() {
    return this._serverIdentityCheckEnabled;
  }

  // username - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_group_matching_enabled: cdktf.booleanToTerraform(this._advancedGroupMatchingEnabled),
      bind_type: cdktf.stringToTerraform(this._bindType),
      certificate: authLdapServersCertificateToTerraform(this._certificate.internalValue),
      client_cert: authLdapServersClientCertToTerraform(this._clientCert.internalValue),
      client_cert_auth_enabled: cdktf.booleanToTerraform(this._clientCertAuthEnabled),
      cnid: cdktf.stringToTerraform(this._cnid),
      dn: cdktf.stringToTerraform(this._dn),
      group_filter: cdktf.stringToTerraform(this._groupFilter),
      group_member_check: cdktf.stringToTerraform(this._groupMemberCheck),
      group_object_filter: cdktf.stringToTerraform(this._groupObjectFilter),
      group_search_base: cdktf.stringToTerraform(this._groupSearchBase),
      member_attribute: cdktf.stringToTerraform(this._memberAttribute),
      password: cdktf.stringToTerraform(this._password),
      password_renewal_enabled: cdktf.booleanToTerraform(this._passwordRenewalEnabled),
      port: cdktf.numberToTerraform(this._port),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      secure_connection: cdktf.booleanToTerraform(this._secureConnection),
      server: cdktf.stringToTerraform(this._server),
      server_identity_check_enabled: cdktf.booleanToTerraform(this._serverIdentityCheckEnabled),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_group_matching_enabled: {
        value: cdktf.booleanToHclTerraform(this._advancedGroupMatchingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bind_type: {
        value: cdktf.stringToHclTerraform(this._bindType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: authLdapServersCertificateToHclTerraform(this._certificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthLdapServersCertificate",
      },
      client_cert: {
        value: authLdapServersClientCertToHclTerraform(this._clientCert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthLdapServersClientCert",
      },
      client_cert_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._clientCertAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      group_search_base: {
        value: cdktf.stringToHclTerraform(this._groupSearchBase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_attribute: {
        value: cdktf.stringToHclTerraform(this._memberAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_renewal_enabled: {
        value: cdktf.booleanToHclTerraform(this._passwordRenewalEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_connection: {
        value: cdktf.booleanToHclTerraform(this._secureConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_identity_check_enabled: {
        value: cdktf.booleanToHclTerraform(this._serverIdentityCheckEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
