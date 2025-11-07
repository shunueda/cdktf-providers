// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthVpnSamlServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#application_id AuthVpnSamlServer#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#digest_method AuthVpnSamlServer#digest_method}
  */
  readonly digestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#domain_name AuthVpnSamlServer#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#enabled AuthVpnSamlServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#entra_id_enabled AuthVpnSamlServer#entra_id_enabled}
  */
  readonly entraIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#group_id AuthVpnSamlServer#group_id}
  */
  readonly groupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#group_name AuthVpnSamlServer#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#idp_certificate AuthVpnSamlServer#idp_certificate}
  */
  readonly idpCertificate?: AuthVpnSamlServerIdpCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#idp_entity_id AuthVpnSamlServer#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#idp_log_out_url AuthVpnSamlServer#idp_log_out_url}
  */
  readonly idpLogOutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#idp_sign_on_url AuthVpnSamlServer#idp_sign_on_url}
  */
  readonly idpSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#primary_key AuthVpnSamlServer#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#scim_enabled AuthVpnSamlServer#scim_enabled}
  */
  readonly scimEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#sp_cert AuthVpnSamlServer#sp_cert}
  */
  readonly spCert?: AuthVpnSamlServerSpCert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#username AuthVpnSamlServer#username}
  */
  readonly username?: string;
}
export interface AuthVpnSamlServerIdpCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#datasource AuthVpnSamlServer#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#primary_key AuthVpnSamlServer#primary_key}
  */
  readonly primaryKey?: string;
}

export function authVpnSamlServerIdpCertificateToTerraform(struct?: AuthVpnSamlServerIdpCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authVpnSamlServerIdpCertificateToHclTerraform(struct?: AuthVpnSamlServerIdpCertificate | cdktf.IResolvable): any {
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

export class AuthVpnSamlServerIdpCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthVpnSamlServerIdpCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthVpnSamlServerIdpCertificate | cdktf.IResolvable | undefined) {
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
export interface AuthVpnSamlServerSpCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#datasource AuthVpnSamlServer#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#primary_key AuthVpnSamlServer#primary_key}
  */
  readonly primaryKey?: string;
}

export function authVpnSamlServerSpCertToTerraform(struct?: AuthVpnSamlServerSpCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authVpnSamlServerSpCertToHclTerraform(struct?: AuthVpnSamlServerSpCert | cdktf.IResolvable): any {
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

export class AuthVpnSamlServerSpCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthVpnSamlServerSpCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthVpnSamlServerSpCert | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server fortisase_auth_vpn_saml_server}
*/
export class AuthVpnSamlServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_auth_vpn_saml_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthVpnSamlServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthVpnSamlServer to import
  * @param importFromId The id of the existing AuthVpnSamlServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthVpnSamlServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_auth_vpn_saml_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_vpn_saml_server fortisase_auth_vpn_saml_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthVpnSamlServerConfig
  */
  public constructor(scope: Construct, id: string, config: AuthVpnSamlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_auth_vpn_saml_server',
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
    this._applicationId = config.applicationId;
    this._digestMethod = config.digestMethod;
    this._domainName = config.domainName;
    this._enabled = config.enabled;
    this._entraIdEnabled = config.entraIdEnabled;
    this._groupId = config.groupId;
    this._groupName = config.groupName;
    this._idpCertificate.internalValue = config.idpCertificate;
    this._idpEntityId = config.idpEntityId;
    this._idpLogOutUrl = config.idpLogOutUrl;
    this._idpSignOnUrl = config.idpSignOnUrl;
    this._primaryKey = config.primaryKey;
    this._scimEnabled = config.scimEnabled;
    this._spCert.internalValue = config.spCert;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // digest_method - computed: true, optional: true, required: false
  private _digestMethod?: string; 
  public get digestMethod() {
    return this.getStringAttribute('digest_method');
  }
  public set digestMethod(value: string) {
    this._digestMethod = value;
  }
  public resetDigestMethod() {
    this._digestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestMethodInput() {
    return this._digestMethod;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entra_id_enabled - computed: true, optional: true, required: false
  private _entraIdEnabled?: boolean | cdktf.IResolvable; 
  public get entraIdEnabled() {
    return this.getBooleanAttribute('entra_id_enabled');
  }
  public set entraIdEnabled(value: boolean | cdktf.IResolvable) {
    this._entraIdEnabled = value;
  }
  public resetEntraIdEnabled() {
    this._entraIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entraIdEnabledInput() {
    return this._entraIdEnabled;
  }

  // group_id - computed: true, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_certificate - computed: true, optional: true, required: false
  private _idpCertificate = new AuthVpnSamlServerIdpCertificateOutputReference(this, "idp_certificate");
  public get idpCertificate() {
    return this._idpCertificate;
  }
  public putIdpCertificate(value: AuthVpnSamlServerIdpCertificate) {
    this._idpCertificate.internalValue = value;
  }
  public resetIdpCertificate() {
    this._idpCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertificateInput() {
    return this._idpCertificate.internalValue;
  }

  // idp_entity_id - computed: true, optional: true, required: false
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  public resetIdpEntityId() {
    this._idpEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // idp_log_out_url - computed: true, optional: true, required: false
  private _idpLogOutUrl?: string; 
  public get idpLogOutUrl() {
    return this.getStringAttribute('idp_log_out_url');
  }
  public set idpLogOutUrl(value: string) {
    this._idpLogOutUrl = value;
  }
  public resetIdpLogOutUrl() {
    this._idpLogOutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpLogOutUrlInput() {
    return this._idpLogOutUrl;
  }

  // idp_sign_on_url - computed: true, optional: true, required: false
  private _idpSignOnUrl?: string; 
  public get idpSignOnUrl() {
    return this.getStringAttribute('idp_sign_on_url');
  }
  public set idpSignOnUrl(value: string) {
    this._idpSignOnUrl = value;
  }
  public resetIdpSignOnUrl() {
    this._idpSignOnUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSignOnUrlInput() {
    return this._idpSignOnUrl;
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

  // scim_enabled - computed: true, optional: true, required: false
  private _scimEnabled?: boolean | cdktf.IResolvable; 
  public get scimEnabled() {
    return this.getBooleanAttribute('scim_enabled');
  }
  public set scimEnabled(value: boolean | cdktf.IResolvable) {
    this._scimEnabled = value;
  }
  public resetScimEnabled() {
    this._scimEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimEnabledInput() {
    return this._scimEnabled;
  }

  // sp_cert - computed: true, optional: true, required: false
  private _spCert = new AuthVpnSamlServerSpCertOutputReference(this, "sp_cert");
  public get spCert() {
    return this._spCert;
  }
  public putSpCert(value: AuthVpnSamlServerSpCert) {
    this._spCert.internalValue = value;
  }
  public resetSpCert() {
    this._spCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spCertInput() {
    return this._spCert.internalValue;
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
      application_id: cdktf.stringToTerraform(this._applicationId),
      digest_method: cdktf.stringToTerraform(this._digestMethod),
      domain_name: cdktf.stringToTerraform(this._domainName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entra_id_enabled: cdktf.booleanToTerraform(this._entraIdEnabled),
      group_id: cdktf.stringToTerraform(this._groupId),
      group_name: cdktf.stringToTerraform(this._groupName),
      idp_certificate: authVpnSamlServerIdpCertificateToTerraform(this._idpCertificate.internalValue),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_log_out_url: cdktf.stringToTerraform(this._idpLogOutUrl),
      idp_sign_on_url: cdktf.stringToTerraform(this._idpSignOnUrl),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      scim_enabled: cdktf.booleanToTerraform(this._scimEnabled),
      sp_cert: authVpnSamlServerSpCertToTerraform(this._spCert.internalValue),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_method: {
        value: cdktf.stringToHclTerraform(this._digestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entra_id_enabled: {
        value: cdktf.booleanToHclTerraform(this._entraIdEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_certificate: {
        value: authVpnSamlServerIdpCertificateToHclTerraform(this._idpCertificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthVpnSamlServerIdpCertificate",
      },
      idp_entity_id: {
        value: cdktf.stringToHclTerraform(this._idpEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_log_out_url: {
        value: cdktf.stringToHclTerraform(this._idpLogOutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_sign_on_url: {
        value: cdktf.stringToHclTerraform(this._idpSignOnUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_enabled: {
        value: cdktf.booleanToHclTerraform(this._scimEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sp_cert: {
        value: authVpnSamlServerSpCertToHclTerraform(this._spCert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthVpnSamlServerSpCert",
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
