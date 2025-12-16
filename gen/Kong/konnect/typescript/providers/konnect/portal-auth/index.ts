// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalAuthConfig extends cdktf.TerraformMetaArguments {
  /**
  * The organization has basic auth enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#basic_auth_enabled PortalAuth#basic_auth_enabled}
  */
  readonly basicAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether IdP groups determine the Konnect Portal teams a developer has.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#idp_mapping_enabled PortalAuth#idp_mapping_enabled}
  */
  readonly idpMappingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether a Konnect Identity Admin assigns teams to a developer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#konnect_mapping_enabled PortalAuth#konnect_mapping_enabled}
  */
  readonly konnectMappingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Deprecated. Use the [Identity Provider API](https://developer.konghq.com/api/konnect/portal-management/v3/#/operations/update-portal-identity-provider) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#oidc_auth_enabled PortalAuth#oidc_auth_enabled}
  */
  readonly oidcAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Deprecated. Use the [Identity Provider API](https://developer.konghq.com/api/konnect/portal-management/v3/#/operations/update-portal-identity-provider) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#oidc_claim_mappings PortalAuth#oidc_claim_mappings}
  */
  readonly oidcClaimMappings?: PortalAuthOidcClaimMappings;
  /**
  * Deprecated. Use the [Identity Provider API](https://developer.konghq.com/api/konnect/portal-management/v3/#/operations/update-portal-identity-provider) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#oidc_client_id PortalAuth#oidc_client_id}
  */
  readonly oidcClientId?: string;
  /**
  * Deprecated. Use the [Identity Provider API](https://developer.konghq.com/api/konnect/portal-management/v3/#/operations/update-portal-identity-provider) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#oidc_client_secret PortalAuth#oidc_client_secret}
  */
  readonly oidcClientSecret?: string;
  /**
  * Deprecated. Use the [Identity Provider API](https://developer.konghq.com/api/konnect/portal-management/v3/#/operations/update-portal-identity-provider) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#oidc_issuer PortalAuth#oidc_issuer}
  */
  readonly oidcIssuer?: string;
  /**
  * Deprecated. Use the [Identity Provider API](https://developer.konghq.com/api/konnect/portal-management/v3/#/operations/update-portal-identity-provider) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#oidc_scopes PortalAuth#oidc_scopes}
  */
  readonly oidcScopes?: string[];
  /**
  * IdP groups determine the Portal Teams a developer has. Replaced by idp_mapping_enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#oidc_team_mapping_enabled PortalAuth#oidc_team_mapping_enabled}
  */
  readonly oidcTeamMappingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#portal_id PortalAuth#portal_id}
  */
  readonly portalId: string;
  /**
  * Deprecated. Use the [Identity Provider API](https://developer.konghq.com/api/konnect/portal-management/v3/#/operations/update-portal-identity-provider) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#saml_auth_enabled PortalAuth#saml_auth_enabled}
  */
  readonly samlAuthEnabled?: boolean | cdktf.IResolvable;
}
export interface PortalAuthOidcClaimMappings {
  /**
  * Default: "email"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#email PortalAuth#email}
  */
  readonly email?: string;
  /**
  * Default: "groups"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#groups PortalAuth#groups}
  */
  readonly groups?: string;
  /**
  * Default: "name"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#name PortalAuth#name}
  */
  readonly name?: string;
}

export function portalAuthOidcClaimMappingsToTerraform(struct?: PortalAuthOidcClaimMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    groups: cdktf.stringToTerraform(struct!.groups),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function portalAuthOidcClaimMappingsToHclTerraform(struct?: PortalAuthOidcClaimMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class PortalAuthOidcClaimMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAuthOidcClaimMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAuthOidcClaimMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._groups = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._groups = value.groups;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // name - computed: true, optional: true, required: false
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
export interface PortalAuthOidcConfigClaimMappings {
}

export function portalAuthOidcConfigClaimMappingsToTerraform(struct?: PortalAuthOidcConfigClaimMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portalAuthOidcConfigClaimMappingsToHclTerraform(struct?: PortalAuthOidcConfigClaimMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortalAuthOidcConfigClaimMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAuthOidcConfigClaimMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAuthOidcConfigClaimMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getStringAttribute('groups');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export interface PortalAuthOidcConfig {
}

export function portalAuthOidcConfigToTerraform(struct?: PortalAuthOidcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function portalAuthOidcConfigToHclTerraform(struct?: PortalAuthOidcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PortalAuthOidcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalAuthOidcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalAuthOidcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // claim_mappings - computed: true, optional: false, required: false
  private _claimMappings = new PortalAuthOidcConfigClaimMappingsOutputReference(this, "claim_mappings");
  public get claimMappings() {
    return this._claimMappings;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth konnect_portal_auth}
*/
export class PortalAuth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_auth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalAuth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalAuth to import
  * @param importFromId The id of the existing PortalAuth that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalAuth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_auth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_auth konnect_portal_auth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalAuthConfig
  */
  public constructor(scope: Construct, id: string, config: PortalAuthConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_auth',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicAuthEnabled = config.basicAuthEnabled;
    this._idpMappingEnabled = config.idpMappingEnabled;
    this._konnectMappingEnabled = config.konnectMappingEnabled;
    this._oidcAuthEnabled = config.oidcAuthEnabled;
    this._oidcClaimMappings.internalValue = config.oidcClaimMappings;
    this._oidcClientId = config.oidcClientId;
    this._oidcClientSecret = config.oidcClientSecret;
    this._oidcIssuer = config.oidcIssuer;
    this._oidcScopes = config.oidcScopes;
    this._oidcTeamMappingEnabled = config.oidcTeamMappingEnabled;
    this._portalId = config.portalId;
    this._samlAuthEnabled = config.samlAuthEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_auth_enabled - computed: true, optional: true, required: false
  private _basicAuthEnabled?: boolean | cdktf.IResolvable; 
  public get basicAuthEnabled() {
    return this.getBooleanAttribute('basic_auth_enabled');
  }
  public set basicAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._basicAuthEnabled = value;
  }
  public resetBasicAuthEnabled() {
    this._basicAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthEnabledInput() {
    return this._basicAuthEnabled;
  }

  // idp_mapping_enabled - computed: true, optional: true, required: false
  private _idpMappingEnabled?: boolean | cdktf.IResolvable; 
  public get idpMappingEnabled() {
    return this.getBooleanAttribute('idp_mapping_enabled');
  }
  public set idpMappingEnabled(value: boolean | cdktf.IResolvable) {
    this._idpMappingEnabled = value;
  }
  public resetIdpMappingEnabled() {
    this._idpMappingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMappingEnabledInput() {
    return this._idpMappingEnabled;
  }

  // konnect_mapping_enabled - computed: true, optional: true, required: false
  private _konnectMappingEnabled?: boolean | cdktf.IResolvable; 
  public get konnectMappingEnabled() {
    return this.getBooleanAttribute('konnect_mapping_enabled');
  }
  public set konnectMappingEnabled(value: boolean | cdktf.IResolvable) {
    this._konnectMappingEnabled = value;
  }
  public resetKonnectMappingEnabled() {
    this._konnectMappingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get konnectMappingEnabledInput() {
    return this._konnectMappingEnabled;
  }

  // oidc_auth_enabled - computed: true, optional: true, required: false
  private _oidcAuthEnabled?: boolean | cdktf.IResolvable; 
  public get oidcAuthEnabled() {
    return this.getBooleanAttribute('oidc_auth_enabled');
  }
  public set oidcAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._oidcAuthEnabled = value;
  }
  public resetOidcAuthEnabled() {
    this._oidcAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAuthEnabledInput() {
    return this._oidcAuthEnabled;
  }

  // oidc_claim_mappings - computed: true, optional: true, required: false
  private _oidcClaimMappings = new PortalAuthOidcClaimMappingsOutputReference(this, "oidc_claim_mappings");
  public get oidcClaimMappings() {
    return this._oidcClaimMappings;
  }
  public putOidcClaimMappings(value: PortalAuthOidcClaimMappings) {
    this._oidcClaimMappings.internalValue = value;
  }
  public resetOidcClaimMappings() {
    this._oidcClaimMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClaimMappingsInput() {
    return this._oidcClaimMappings.internalValue;
  }

  // oidc_client_id - computed: false, optional: true, required: false
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  public resetOidcClientId() {
    this._oidcClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_client_secret - computed: false, optional: true, required: false
  private _oidcClientSecret?: string; 
  public get oidcClientSecret() {
    return this.getStringAttribute('oidc_client_secret');
  }
  public set oidcClientSecret(value: string) {
    this._oidcClientSecret = value;
  }
  public resetOidcClientSecret() {
    this._oidcClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretInput() {
    return this._oidcClientSecret;
  }

  // oidc_config - computed: true, optional: false, required: false
  private _oidcConfig = new PortalAuthOidcConfigOutputReference(this, "oidc_config");
  public get oidcConfig() {
    return this._oidcConfig;
  }

  // oidc_issuer - computed: false, optional: true, required: false
  private _oidcIssuer?: string; 
  public get oidcIssuer() {
    return this.getStringAttribute('oidc_issuer');
  }
  public set oidcIssuer(value: string) {
    this._oidcIssuer = value;
  }
  public resetOidcIssuer() {
    this._oidcIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIssuerInput() {
    return this._oidcIssuer;
  }

  // oidc_scopes - computed: false, optional: true, required: false
  private _oidcScopes?: string[]; 
  public get oidcScopes() {
    return this.getListAttribute('oidc_scopes');
  }
  public set oidcScopes(value: string[]) {
    this._oidcScopes = value;
  }
  public resetOidcScopes() {
    this._oidcScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopesInput() {
    return this._oidcScopes;
  }

  // oidc_team_mapping_enabled - computed: true, optional: true, required: false
  private _oidcTeamMappingEnabled?: boolean | cdktf.IResolvable; 
  public get oidcTeamMappingEnabled() {
    return this.getBooleanAttribute('oidc_team_mapping_enabled');
  }
  public set oidcTeamMappingEnabled(value: boolean | cdktf.IResolvable) {
    this._oidcTeamMappingEnabled = value;
  }
  public resetOidcTeamMappingEnabled() {
    this._oidcTeamMappingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTeamMappingEnabledInput() {
    return this._oidcTeamMappingEnabled;
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // saml_auth_enabled - computed: true, optional: true, required: false
  private _samlAuthEnabled?: boolean | cdktf.IResolvable; 
  public get samlAuthEnabled() {
    return this.getBooleanAttribute('saml_auth_enabled');
  }
  public set samlAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._samlAuthEnabled = value;
  }
  public resetSamlAuthEnabled() {
    this._samlAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlAuthEnabledInput() {
    return this._samlAuthEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basic_auth_enabled: cdktf.booleanToTerraform(this._basicAuthEnabled),
      idp_mapping_enabled: cdktf.booleanToTerraform(this._idpMappingEnabled),
      konnect_mapping_enabled: cdktf.booleanToTerraform(this._konnectMappingEnabled),
      oidc_auth_enabled: cdktf.booleanToTerraform(this._oidcAuthEnabled),
      oidc_claim_mappings: portalAuthOidcClaimMappingsToTerraform(this._oidcClaimMappings.internalValue),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      oidc_client_secret: cdktf.stringToTerraform(this._oidcClientSecret),
      oidc_issuer: cdktf.stringToTerraform(this._oidcIssuer),
      oidc_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidcScopes),
      oidc_team_mapping_enabled: cdktf.booleanToTerraform(this._oidcTeamMappingEnabled),
      portal_id: cdktf.stringToTerraform(this._portalId),
      saml_auth_enabled: cdktf.booleanToTerraform(this._samlAuthEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basic_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._basicAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idp_mapping_enabled: {
        value: cdktf.booleanToHclTerraform(this._idpMappingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      konnect_mapping_enabled: {
        value: cdktf.booleanToHclTerraform(this._konnectMappingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._oidcAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_claim_mappings: {
        value: portalAuthOidcClaimMappingsToHclTerraform(this._oidcClaimMappings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalAuthOidcClaimMappings",
      },
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret: {
        value: cdktf.stringToHclTerraform(this._oidcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_issuer: {
        value: cdktf.stringToHclTerraform(this._oidcIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidcScopes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      oidc_team_mapping_enabled: {
        value: cdktf.booleanToHclTerraform(this._oidcTeamMappingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._samlAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
