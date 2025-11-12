// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSamlIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defines the attribute mappings for SAML 2.0 Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#attribute_names CloudSamlIdentityProvider#attribute_names}
  */
  readonly attributeNames: CloudSamlIdentityProviderAttributeNames;
  /**
  * Auth Domain name of the SAML 2.0 Identity Provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#auth_domain_name CloudSamlIdentityProvider#auth_domain_name}
  */
  readonly authDomainName: string;
  /**
  * The authentication context. Valid values are `Unspecified`, `UserNameAndPassword`, `X509Cert`, `IntegratedWinAuth`, `Kerberos`, `PasswordProtectedTransport` and `TLSClient`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#authentication_context CloudSamlIdentityProvider#authentication_context}
  */
  readonly authenticationContext: string;
  /**
  * The authentication context comparison type. Valid values are `Exact` and `Minimum`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#authentication_context_comparison CloudSamlIdentityProvider#authentication_context_comparison}
  */
  readonly authenticationContextComparison: string;
  /**
  * The file path of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#cert_file_path CloudSamlIdentityProvider#cert_file_path}
  */
  readonly certFilePath: string;
  /**
  * The entity ID of the SAML 2.0 Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#entity_id CloudSamlIdentityProvider#entity_id}
  */
  readonly entityId: string;
  /**
  * The binding of the logout service. Valid values are `HttpPost` and `HttpRedirect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#logout_binding CloudSamlIdentityProvider#logout_binding}
  */
  readonly logoutBinding?: string;
  /**
  * The URL of the logout service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#logout_url CloudSamlIdentityProvider#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Name of the SAML 2.0 Identity Provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#name CloudSamlIdentityProvider#name}
  */
  readonly name: string;
  /**
  * The SAML response. Valid values are `SignEitherResponseOrAssertion`, `MustSignResponse`, and `MustSignAssertion`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#saml_response CloudSamlIdentityProvider#saml_response}
  */
  readonly samlResponse: string;
  /**
  * Whether to sign the authentication request. Valid values are `Yes` and `No`. Defaults to `Yes`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#sign_auth_request CloudSamlIdentityProvider#sign_auth_request}
  */
  readonly signAuthRequest?: string;
  /**
  * Whether to sign the logout request. Valid values are `Yes` and `No`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#sign_logout_request CloudSamlIdentityProvider#sign_logout_request}
  */
  readonly signLogoutRequest?: string;
  /**
  * The binding of the single sign-on service. Valid values are `HttpPost` and `HttpRedirect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#single_sign_on_service_binding CloudSamlIdentityProvider#single_sign_on_service_binding}
  */
  readonly singleSignOnServiceBinding: string;
  /**
  * The URL of the single sign-on service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#single_sign_on_service_url CloudSamlIdentityProvider#single_sign_on_service_url}
  */
  readonly singleSignOnServiceUrl: string;
  /**
  * Whether to use the Scoped Entity Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#use_scoped_entity_id CloudSamlIdentityProvider#use_scoped_entity_id}
  */
  readonly useScopedEntityId?: boolean | cdktf.IResolvable;
}
export interface CloudSamlIdentityProviderAttributeNames {
  /**
  * The attribute name for the user's Active Directory domain. Defaults to `cip_domain`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#ad_domain CloudSamlIdentityProvider#ad_domain}
  */
  readonly adDomain?: string;
  /**
  * The attribute name for the user's Active Directory forest. Defaults to `cip_forest`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#ad_forest CloudSamlIdentityProvider#ad_forest}
  */
  readonly adForest?: string;
  /**
  * The attribute name for the user's Active Directory object identifier. Defaults to `cip_oid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#ad_object_identifier CloudSamlIdentityProvider#ad_object_identifier}
  */
  readonly adObjectIdentifier?: string;
  /**
  * The attribute name for the user's email. Defaults to `cip_email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#email CloudSamlIdentityProvider#email}
  */
  readonly email?: string;
  /**
  * The attribute name for the user's security identifier. Defaults to `cip_sid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#security_identifier CloudSamlIdentityProvider#security_identifier}
  */
  readonly securityIdentifier?: string;
  /**
  * The attribute name for the user's display name. Defaults to `displayName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#user_display_name CloudSamlIdentityProvider#user_display_name}
  */
  readonly userDisplayName?: string;
  /**
  * The attribute name for the user's family name. Defaults to `familyName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#user_family_name CloudSamlIdentityProvider#user_family_name}
  */
  readonly userFamilyName?: string;
  /**
  * The attribute name for the user's given name. Defaults to `givenName`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#user_given_name CloudSamlIdentityProvider#user_given_name}
  */
  readonly userGivenName?: string;
  /**
  * The attribute name for the user's principal name. Defaults to `cip_upn`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#user_principal_name CloudSamlIdentityProvider#user_principal_name}
  */
  readonly userPrincipalName?: string;
}

export function cloudSamlIdentityProviderAttributeNamesToTerraform(struct?: CloudSamlIdentityProviderAttributeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_domain: cdktf.stringToTerraform(struct!.adDomain),
    ad_forest: cdktf.stringToTerraform(struct!.adForest),
    ad_object_identifier: cdktf.stringToTerraform(struct!.adObjectIdentifier),
    email: cdktf.stringToTerraform(struct!.email),
    security_identifier: cdktf.stringToTerraform(struct!.securityIdentifier),
    user_display_name: cdktf.stringToTerraform(struct!.userDisplayName),
    user_family_name: cdktf.stringToTerraform(struct!.userFamilyName),
    user_given_name: cdktf.stringToTerraform(struct!.userGivenName),
    user_principal_name: cdktf.stringToTerraform(struct!.userPrincipalName),
  }
}


export function cloudSamlIdentityProviderAttributeNamesToHclTerraform(struct?: CloudSamlIdentityProviderAttributeNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_domain: {
      value: cdktf.stringToHclTerraform(struct!.adDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ad_forest: {
      value: cdktf.stringToHclTerraform(struct!.adForest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ad_object_identifier: {
      value: cdktf.stringToHclTerraform(struct!.adObjectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_identifier: {
      value: cdktf.stringToHclTerraform(struct!.securityIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_display_name: {
      value: cdktf.stringToHclTerraform(struct!.userDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_family_name: {
      value: cdktf.stringToHclTerraform(struct!.userFamilyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_given_name: {
      value: cdktf.stringToHclTerraform(struct!.userGivenName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_principal_name: {
      value: cdktf.stringToHclTerraform(struct!.userPrincipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSamlIdentityProviderAttributeNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudSamlIdentityProviderAttributeNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDomain = this._adDomain;
    }
    if (this._adForest !== undefined) {
      hasAnyValues = true;
      internalValueResult.adForest = this._adForest;
    }
    if (this._adObjectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.adObjectIdentifier = this._adObjectIdentifier;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._securityIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityIdentifier = this._securityIdentifier;
    }
    if (this._userDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDisplayName = this._userDisplayName;
    }
    if (this._userFamilyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFamilyName = this._userFamilyName;
    }
    if (this._userGivenName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGivenName = this._userGivenName;
    }
    if (this._userPrincipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPrincipalName = this._userPrincipalName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSamlIdentityProviderAttributeNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adDomain = undefined;
      this._adForest = undefined;
      this._adObjectIdentifier = undefined;
      this._email = undefined;
      this._securityIdentifier = undefined;
      this._userDisplayName = undefined;
      this._userFamilyName = undefined;
      this._userGivenName = undefined;
      this._userPrincipalName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adDomain = value.adDomain;
      this._adForest = value.adForest;
      this._adObjectIdentifier = value.adObjectIdentifier;
      this._email = value.email;
      this._securityIdentifier = value.securityIdentifier;
      this._userDisplayName = value.userDisplayName;
      this._userFamilyName = value.userFamilyName;
      this._userGivenName = value.userGivenName;
      this._userPrincipalName = value.userPrincipalName;
    }
  }

  // ad_domain - computed: true, optional: true, required: false
  private _adDomain?: string; 
  public get adDomain() {
    return this.getStringAttribute('ad_domain');
  }
  public set adDomain(value: string) {
    this._adDomain = value;
  }
  public resetAdDomain() {
    this._adDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDomainInput() {
    return this._adDomain;
  }

  // ad_forest - computed: true, optional: true, required: false
  private _adForest?: string; 
  public get adForest() {
    return this.getStringAttribute('ad_forest');
  }
  public set adForest(value: string) {
    this._adForest = value;
  }
  public resetAdForest() {
    this._adForest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adForestInput() {
    return this._adForest;
  }

  // ad_object_identifier - computed: true, optional: true, required: false
  private _adObjectIdentifier?: string; 
  public get adObjectIdentifier() {
    return this.getStringAttribute('ad_object_identifier');
  }
  public set adObjectIdentifier(value: string) {
    this._adObjectIdentifier = value;
  }
  public resetAdObjectIdentifier() {
    this._adObjectIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adObjectIdentifierInput() {
    return this._adObjectIdentifier;
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

  // security_identifier - computed: true, optional: true, required: false
  private _securityIdentifier?: string; 
  public get securityIdentifier() {
    return this.getStringAttribute('security_identifier');
  }
  public set securityIdentifier(value: string) {
    this._securityIdentifier = value;
  }
  public resetSecurityIdentifier() {
    this._securityIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityIdentifierInput() {
    return this._securityIdentifier;
  }

  // user_display_name - computed: true, optional: true, required: false
  private _userDisplayName?: string; 
  public get userDisplayName() {
    return this.getStringAttribute('user_display_name');
  }
  public set userDisplayName(value: string) {
    this._userDisplayName = value;
  }
  public resetUserDisplayName() {
    this._userDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDisplayNameInput() {
    return this._userDisplayName;
  }

  // user_family_name - computed: true, optional: true, required: false
  private _userFamilyName?: string; 
  public get userFamilyName() {
    return this.getStringAttribute('user_family_name');
  }
  public set userFamilyName(value: string) {
    this._userFamilyName = value;
  }
  public resetUserFamilyName() {
    this._userFamilyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFamilyNameInput() {
    return this._userFamilyName;
  }

  // user_given_name - computed: true, optional: true, required: false
  private _userGivenName?: string; 
  public get userGivenName() {
    return this.getStringAttribute('user_given_name');
  }
  public set userGivenName(value: string) {
    this._userGivenName = value;
  }
  public resetUserGivenName() {
    this._userGivenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGivenNameInput() {
    return this._userGivenName;
  }

  // user_principal_name - computed: true, optional: true, required: false
  private _userPrincipalName?: string; 
  public get userPrincipalName() {
    return this.getStringAttribute('user_principal_name');
  }
  public set userPrincipalName(value: string) {
    this._userPrincipalName = value;
  }
  public resetUserPrincipalName() {
    this._userPrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrincipalNameInput() {
    return this._userPrincipalName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider citrix_cloud_saml_identity_provider}
*/
export class CloudSamlIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_cloud_saml_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSamlIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSamlIdentityProvider to import
  * @param importFromId The id of the existing CloudSamlIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSamlIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_cloud_saml_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/cloud_saml_identity_provider citrix_cloud_saml_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSamlIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSamlIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_cloud_saml_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30',
        providerVersionConstraint: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeNames.internalValue = config.attributeNames;
    this._authDomainName = config.authDomainName;
    this._authenticationContext = config.authenticationContext;
    this._authenticationContextComparison = config.authenticationContextComparison;
    this._certFilePath = config.certFilePath;
    this._entityId = config.entityId;
    this._logoutBinding = config.logoutBinding;
    this._logoutUrl = config.logoutUrl;
    this._name = config.name;
    this._samlResponse = config.samlResponse;
    this._signAuthRequest = config.signAuthRequest;
    this._signLogoutRequest = config.signLogoutRequest;
    this._singleSignOnServiceBinding = config.singleSignOnServiceBinding;
    this._singleSignOnServiceUrl = config.singleSignOnServiceUrl;
    this._useScopedEntityId = config.useScopedEntityId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_names - computed: false, optional: false, required: true
  private _attributeNames = new CloudSamlIdentityProviderAttributeNamesOutputReference(this, "attribute_names");
  public get attributeNames() {
    return this._attributeNames;
  }
  public putAttributeNames(value: CloudSamlIdentityProviderAttributeNames) {
    this._attributeNames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames.internalValue;
  }

  // auth_domain_name - computed: false, optional: false, required: true
  private _authDomainName?: string; 
  public get authDomainName() {
    return this.getStringAttribute('auth_domain_name');
  }
  public set authDomainName(value: string) {
    this._authDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authDomainNameInput() {
    return this._authDomainName;
  }

  // authentication_context - computed: false, optional: false, required: true
  private _authenticationContext?: string; 
  public get authenticationContext() {
    return this.getStringAttribute('authentication_context');
  }
  public set authenticationContext(value: string) {
    this._authenticationContext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationContextInput() {
    return this._authenticationContext;
  }

  // authentication_context_comparison - computed: false, optional: false, required: true
  private _authenticationContextComparison?: string; 
  public get authenticationContextComparison() {
    return this.getStringAttribute('authentication_context_comparison');
  }
  public set authenticationContextComparison(value: string) {
    this._authenticationContextComparison = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationContextComparisonInput() {
    return this._authenticationContextComparison;
  }

  // cert_common_name - computed: true, optional: false, required: false
  public get certCommonName() {
    return this.getStringAttribute('cert_common_name');
  }

  // cert_expiration - computed: true, optional: false, required: false
  public get certExpiration() {
    return this.getStringAttribute('cert_expiration');
  }

  // cert_file_path - computed: false, optional: false, required: true
  private _certFilePath?: string; 
  public get certFilePath() {
    return this.getStringAttribute('cert_file_path');
  }
  public set certFilePath(value: string) {
    this._certFilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certFilePathInput() {
    return this._certFilePath;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logout_binding - computed: false, optional: true, required: false
  private _logoutBinding?: string; 
  public get logoutBinding() {
    return this.getStringAttribute('logout_binding');
  }
  public set logoutBinding(value: string) {
    this._logoutBinding = value;
  }
  public resetLogoutBinding() {
    this._logoutBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutBindingInput() {
    return this._logoutBinding;
  }

  // logout_url - computed: true, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // saml_response - computed: false, optional: false, required: true
  private _samlResponse?: string; 
  public get samlResponse() {
    return this.getStringAttribute('saml_response');
  }
  public set samlResponse(value: string) {
    this._samlResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlResponseInput() {
    return this._samlResponse;
  }

  // scoped_entity_id_suffix - computed: true, optional: false, required: false
  public get scopedEntityIdSuffix() {
    return this.getStringAttribute('scoped_entity_id_suffix');
  }

  // sign_auth_request - computed: true, optional: true, required: false
  private _signAuthRequest?: string; 
  public get signAuthRequest() {
    return this.getStringAttribute('sign_auth_request');
  }
  public set signAuthRequest(value: string) {
    this._signAuthRequest = value;
  }
  public resetSignAuthRequest() {
    this._signAuthRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAuthRequestInput() {
    return this._signAuthRequest;
  }

  // sign_logout_request - computed: false, optional: true, required: false
  private _signLogoutRequest?: string; 
  public get signLogoutRequest() {
    return this.getStringAttribute('sign_logout_request');
  }
  public set signLogoutRequest(value: string) {
    this._signLogoutRequest = value;
  }
  public resetSignLogoutRequest() {
    this._signLogoutRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signLogoutRequestInput() {
    return this._signLogoutRequest;
  }

  // single_sign_on_service_binding - computed: false, optional: false, required: true
  private _singleSignOnServiceBinding?: string; 
  public get singleSignOnServiceBinding() {
    return this.getStringAttribute('single_sign_on_service_binding');
  }
  public set singleSignOnServiceBinding(value: string) {
    this._singleSignOnServiceBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnServiceBindingInput() {
    return this._singleSignOnServiceBinding;
  }

  // single_sign_on_service_url - computed: false, optional: false, required: true
  private _singleSignOnServiceUrl?: string; 
  public get singleSignOnServiceUrl() {
    return this.getStringAttribute('single_sign_on_service_url');
  }
  public set singleSignOnServiceUrl(value: string) {
    this._singleSignOnServiceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnServiceUrlInput() {
    return this._singleSignOnServiceUrl;
  }

  // use_scoped_entity_id - computed: true, optional: true, required: false
  private _useScopedEntityId?: boolean | cdktf.IResolvable; 
  public get useScopedEntityId() {
    return this.getBooleanAttribute('use_scoped_entity_id');
  }
  public set useScopedEntityId(value: boolean | cdktf.IResolvable) {
    this._useScopedEntityId = value;
  }
  public resetUseScopedEntityId() {
    this._useScopedEntityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScopedEntityIdInput() {
    return this._useScopedEntityId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_names: cloudSamlIdentityProviderAttributeNamesToTerraform(this._attributeNames.internalValue),
      auth_domain_name: cdktf.stringToTerraform(this._authDomainName),
      authentication_context: cdktf.stringToTerraform(this._authenticationContext),
      authentication_context_comparison: cdktf.stringToTerraform(this._authenticationContextComparison),
      cert_file_path: cdktf.stringToTerraform(this._certFilePath),
      entity_id: cdktf.stringToTerraform(this._entityId),
      logout_binding: cdktf.stringToTerraform(this._logoutBinding),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      name: cdktf.stringToTerraform(this._name),
      saml_response: cdktf.stringToTerraform(this._samlResponse),
      sign_auth_request: cdktf.stringToTerraform(this._signAuthRequest),
      sign_logout_request: cdktf.stringToTerraform(this._signLogoutRequest),
      single_sign_on_service_binding: cdktf.stringToTerraform(this._singleSignOnServiceBinding),
      single_sign_on_service_url: cdktf.stringToTerraform(this._singleSignOnServiceUrl),
      use_scoped_entity_id: cdktf.booleanToTerraform(this._useScopedEntityId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_names: {
        value: cloudSamlIdentityProviderAttributeNamesToHclTerraform(this._attributeNames.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudSamlIdentityProviderAttributeNames",
      },
      auth_domain_name: {
        value: cdktf.stringToHclTerraform(this._authDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_context: {
        value: cdktf.stringToHclTerraform(this._authenticationContext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_context_comparison: {
        value: cdktf.stringToHclTerraform(this._authenticationContextComparison),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_file_path: {
        value: cdktf.stringToHclTerraform(this._certFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_binding: {
        value: cdktf.stringToHclTerraform(this._logoutBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
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
      saml_response: {
        value: cdktf.stringToHclTerraform(this._samlResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_auth_request: {
        value: cdktf.stringToHclTerraform(this._signAuthRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_logout_request: {
        value: cdktf.stringToHclTerraform(this._signLogoutRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_service_binding: {
        value: cdktf.stringToHclTerraform(this._singleSignOnServiceBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_service_url: {
        value: cdktf.stringToHclTerraform(this._singleSignOnServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_scoped_entity_id: {
        value: cdktf.booleanToHclTerraform(this._useScopedEntityId),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
