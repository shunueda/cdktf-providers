// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthSwgSamlServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#digest_method AuthSwgSamlServer#digest_method}
  */
  readonly digestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#enabled AuthSwgSamlServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#group_match AuthSwgSamlServer#group_match}
  */
  readonly groupMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#group_name AuthSwgSamlServer#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#idp_certificate AuthSwgSamlServer#idp_certificate}
  */
  readonly idpCertificate?: AuthSwgSamlServerIdpCertificate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#idp_entity_id AuthSwgSamlServer#idp_entity_id}
  */
  readonly idpEntityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#idp_log_out_url AuthSwgSamlServer#idp_log_out_url}
  */
  readonly idpLogOutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#idp_sign_on_url AuthSwgSamlServer#idp_sign_on_url}
  */
  readonly idpSignOnUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#primary_key AuthSwgSamlServer#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#scim AuthSwgSamlServer#scim}
  */
  readonly scim?: AuthSwgSamlServerScim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#scim_enabled AuthSwgSamlServer#scim_enabled}
  */
  readonly scimEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#sp_cert AuthSwgSamlServer#sp_cert}
  */
  readonly spCert?: AuthSwgSamlServerSpCert;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#username AuthSwgSamlServer#username}
  */
  readonly username?: string;
}
export interface AuthSwgSamlServerIdpCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#datasource AuthSwgSamlServer#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#primary_key AuthSwgSamlServer#primary_key}
  */
  readonly primaryKey?: string;
}

export function authSwgSamlServerIdpCertificateToTerraform(struct?: AuthSwgSamlServerIdpCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authSwgSamlServerIdpCertificateToHclTerraform(struct?: AuthSwgSamlServerIdpCertificate | cdktf.IResolvable): any {
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

export class AuthSwgSamlServerIdpCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSwgSamlServerIdpCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthSwgSamlServerIdpCertificate | cdktf.IResolvable | undefined) {
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
export interface AuthSwgSamlServerScim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#auth_method AuthSwgSamlServer#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#scim_url AuthSwgSamlServer#scim_url}
  */
  readonly scimUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#token AuthSwgSamlServer#token}
  */
  readonly token?: string;
}

export function authSwgSamlServerScimToTerraform(struct?: AuthSwgSamlServerScim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    scim_url: cdktf.stringToTerraform(struct!.scimUrl),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function authSwgSamlServerScimToHclTerraform(struct?: AuthSwgSamlServerScim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scim_url: {
      value: cdktf.stringToHclTerraform(struct!.scimUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthSwgSamlServerScimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSwgSamlServerScim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._scimUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimUrl = this._scimUrl;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthSwgSamlServerScim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._scimUrl = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._scimUrl = value.scimUrl;
      this._token = value.token;
    }
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // scim_url - computed: true, optional: true, required: false
  private _scimUrl?: string; 
  public get scimUrl() {
    return this.getStringAttribute('scim_url');
  }
  public set scimUrl(value: string) {
    this._scimUrl = value;
  }
  public resetScimUrl() {
    this._scimUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimUrlInput() {
    return this._scimUrl;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface AuthSwgSamlServerSpCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#datasource AuthSwgSamlServer#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#primary_key AuthSwgSamlServer#primary_key}
  */
  readonly primaryKey?: string;
}

export function authSwgSamlServerSpCertToTerraform(struct?: AuthSwgSamlServerSpCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function authSwgSamlServerSpCertToHclTerraform(struct?: AuthSwgSamlServerSpCert | cdktf.IResolvable): any {
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

export class AuthSwgSamlServerSpCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthSwgSamlServerSpCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AuthSwgSamlServerSpCert | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server fortisase_auth_swg_saml_server}
*/
export class AuthSwgSamlServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_auth_swg_saml_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthSwgSamlServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthSwgSamlServer to import
  * @param importFromId The id of the existing AuthSwgSamlServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthSwgSamlServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_auth_swg_saml_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/auth_swg_saml_server fortisase_auth_swg_saml_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthSwgSamlServerConfig
  */
  public constructor(scope: Construct, id: string, config: AuthSwgSamlServerConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_auth_swg_saml_server',
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
    this._digestMethod = config.digestMethod;
    this._enabled = config.enabled;
    this._groupMatch = config.groupMatch;
    this._groupName = config.groupName;
    this._idpCertificate.internalValue = config.idpCertificate;
    this._idpEntityId = config.idpEntityId;
    this._idpLogOutUrl = config.idpLogOutUrl;
    this._idpSignOnUrl = config.idpSignOnUrl;
    this._primaryKey = config.primaryKey;
    this._scim.internalValue = config.scim;
    this._scimEnabled = config.scimEnabled;
    this._spCert.internalValue = config.spCert;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // group_match - computed: true, optional: true, required: false
  private _groupMatch?: string; 
  public get groupMatch() {
    return this.getStringAttribute('group_match');
  }
  public set groupMatch(value: string) {
    this._groupMatch = value;
  }
  public resetGroupMatch() {
    this._groupMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMatchInput() {
    return this._groupMatch;
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
  private _idpCertificate = new AuthSwgSamlServerIdpCertificateOutputReference(this, "idp_certificate");
  public get idpCertificate() {
    return this._idpCertificate;
  }
  public putIdpCertificate(value: AuthSwgSamlServerIdpCertificate) {
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

  // scim - computed: true, optional: true, required: false
  private _scim = new AuthSwgSamlServerScimOutputReference(this, "scim");
  public get scim() {
    return this._scim;
  }
  public putScim(value: AuthSwgSamlServerScim) {
    this._scim.internalValue = value;
  }
  public resetScim() {
    this._scim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimInput() {
    return this._scim.internalValue;
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
  private _spCert = new AuthSwgSamlServerSpCertOutputReference(this, "sp_cert");
  public get spCert() {
    return this._spCert;
  }
  public putSpCert(value: AuthSwgSamlServerSpCert) {
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
      digest_method: cdktf.stringToTerraform(this._digestMethod),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_match: cdktf.stringToTerraform(this._groupMatch),
      group_name: cdktf.stringToTerraform(this._groupName),
      idp_certificate: authSwgSamlServerIdpCertificateToTerraform(this._idpCertificate.internalValue),
      idp_entity_id: cdktf.stringToTerraform(this._idpEntityId),
      idp_log_out_url: cdktf.stringToTerraform(this._idpLogOutUrl),
      idp_sign_on_url: cdktf.stringToTerraform(this._idpSignOnUrl),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      scim: authSwgSamlServerScimToTerraform(this._scim.internalValue),
      scim_enabled: cdktf.booleanToTerraform(this._scimEnabled),
      sp_cert: authSwgSamlServerSpCertToTerraform(this._spCert.internalValue),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest_method: {
        value: cdktf.stringToHclTerraform(this._digestMethod),
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
      group_match: {
        value: cdktf.stringToHclTerraform(this._groupMatch),
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
        value: authSwgSamlServerIdpCertificateToHclTerraform(this._idpCertificate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthSwgSamlServerIdpCertificate",
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
      scim: {
        value: authSwgSamlServerScimToHclTerraform(this._scim.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthSwgSamlServerScim",
      },
      scim_enabled: {
        value: cdktf.booleanToHclTerraform(this._scimEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sp_cert: {
        value: authSwgSamlServerSpCertToHclTerraform(this._spCert.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthSwgSamlServerSpCert",
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
