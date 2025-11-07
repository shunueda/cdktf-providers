// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedirectValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Settings for local redirect validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#redirect_validation_local_settings RedirectValidation#redirect_validation_local_settings}
  */
  readonly redirectValidationLocalSettings?: RedirectValidationRedirectValidationLocalSettings;
  /**
  * Settings for partner redirect validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#redirect_validation_partner_settings RedirectValidation#redirect_validation_partner_settings}
  */
  readonly redirectValidationPartnerSettings?: RedirectValidationRedirectValidationPartnerSettings;
}
export interface RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct {
  /**
  * Allow any query parameters and fragment in the resource. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#allow_query_and_fragment RedirectValidation#allow_query_and_fragment}
  */
  readonly allowQueryAndFragment?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for IdP discovery validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#idp_discovery RedirectValidation#idp_discovery}
  */
  readonly idpDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for in error resource validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#in_error_resource RedirectValidation#in_error_resource}
  */
  readonly inErrorResource?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for SLO redirect validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#target_resource_slo RedirectValidation#target_resource_slo}
  */
  readonly targetResourceSlo?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for SSO redirect validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#target_resource_sso RedirectValidation#target_resource_sso}
  */
  readonly targetResourceSso?: boolean | cdktf.IResolvable;
  /**
  * URI of a valid resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#valid_uri RedirectValidation#valid_uri}
  */
  readonly validUri: string;
}

export function redirectValidationRedirectValidationLocalSettingsUriAllowListStructToTerraform(struct?: RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_query_and_fragment: cdktf.booleanToTerraform(struct!.allowQueryAndFragment),
    idp_discovery: cdktf.booleanToTerraform(struct!.idpDiscovery),
    in_error_resource: cdktf.booleanToTerraform(struct!.inErrorResource),
    target_resource_slo: cdktf.booleanToTerraform(struct!.targetResourceSlo),
    target_resource_sso: cdktf.booleanToTerraform(struct!.targetResourceSso),
    valid_uri: cdktf.stringToTerraform(struct!.validUri),
  }
}


export function redirectValidationRedirectValidationLocalSettingsUriAllowListStructToHclTerraform(struct?: RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_query_and_fragment: {
      value: cdktf.booleanToHclTerraform(struct!.allowQueryAndFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.idpDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    in_error_resource: {
      value: cdktf.booleanToHclTerraform(struct!.inErrorResource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_resource_slo: {
      value: cdktf.booleanToHclTerraform(struct!.targetResourceSlo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_resource_sso: {
      value: cdktf.booleanToHclTerraform(struct!.targetResourceSso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_uri: {
      value: cdktf.stringToHclTerraform(struct!.validUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedirectValidationRedirectValidationLocalSettingsUriAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowQueryAndFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQueryAndFragment = this._allowQueryAndFragment;
    }
    if (this._idpDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpDiscovery = this._idpDiscovery;
    }
    if (this._inErrorResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.inErrorResource = this._inErrorResource;
    }
    if (this._targetResourceSlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceSlo = this._targetResourceSlo;
    }
    if (this._targetResourceSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceSso = this._targetResourceSso;
    }
    if (this._validUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.validUri = this._validUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowQueryAndFragment = undefined;
      this._idpDiscovery = undefined;
      this._inErrorResource = undefined;
      this._targetResourceSlo = undefined;
      this._targetResourceSso = undefined;
      this._validUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowQueryAndFragment = value.allowQueryAndFragment;
      this._idpDiscovery = value.idpDiscovery;
      this._inErrorResource = value.inErrorResource;
      this._targetResourceSlo = value.targetResourceSlo;
      this._targetResourceSso = value.targetResourceSso;
      this._validUri = value.validUri;
    }
  }

  // allow_query_and_fragment - computed: true, optional: true, required: false
  private _allowQueryAndFragment?: boolean | cdktf.IResolvable; 
  public get allowQueryAndFragment() {
    return this.getBooleanAttribute('allow_query_and_fragment');
  }
  public set allowQueryAndFragment(value: boolean | cdktf.IResolvable) {
    this._allowQueryAndFragment = value;
  }
  public resetAllowQueryAndFragment() {
    this._allowQueryAndFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryAndFragmentInput() {
    return this._allowQueryAndFragment;
  }

  // idp_discovery - computed: true, optional: true, required: false
  private _idpDiscovery?: boolean | cdktf.IResolvable; 
  public get idpDiscovery() {
    return this.getBooleanAttribute('idp_discovery');
  }
  public set idpDiscovery(value: boolean | cdktf.IResolvable) {
    this._idpDiscovery = value;
  }
  public resetIdpDiscovery() {
    this._idpDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpDiscoveryInput() {
    return this._idpDiscovery;
  }

  // in_error_resource - computed: true, optional: true, required: false
  private _inErrorResource?: boolean | cdktf.IResolvable; 
  public get inErrorResource() {
    return this.getBooleanAttribute('in_error_resource');
  }
  public set inErrorResource(value: boolean | cdktf.IResolvable) {
    this._inErrorResource = value;
  }
  public resetInErrorResource() {
    this._inErrorResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inErrorResourceInput() {
    return this._inErrorResource;
  }

  // target_resource_slo - computed: true, optional: true, required: false
  private _targetResourceSlo?: boolean | cdktf.IResolvable; 
  public get targetResourceSlo() {
    return this.getBooleanAttribute('target_resource_slo');
  }
  public set targetResourceSlo(value: boolean | cdktf.IResolvable) {
    this._targetResourceSlo = value;
  }
  public resetTargetResourceSlo() {
    this._targetResourceSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceSloInput() {
    return this._targetResourceSlo;
  }

  // target_resource_sso - computed: true, optional: true, required: false
  private _targetResourceSso?: boolean | cdktf.IResolvable; 
  public get targetResourceSso() {
    return this.getBooleanAttribute('target_resource_sso');
  }
  public set targetResourceSso(value: boolean | cdktf.IResolvable) {
    this._targetResourceSso = value;
  }
  public resetTargetResourceSso() {
    this._targetResourceSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceSsoInput() {
    return this._targetResourceSso;
  }

  // valid_uri - computed: true, optional: false, required: true
  private _validUri?: string; 
  public get validUri() {
    return this.getStringAttribute('valid_uri');
  }
  public set validUri(value: string) {
    this._validUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validUriInput() {
    return this._validUri;
  }
}

export class RedirectValidationRedirectValidationLocalSettingsUriAllowListStructList extends cdktf.ComplexList {
  public internalValue? : RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): RedirectValidationRedirectValidationLocalSettingsUriAllowListStructOutputReference {
    return new RedirectValidationRedirectValidationLocalSettingsUriAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedirectValidationRedirectValidationLocalSettingsWhiteListStruct {
  /**
  * Allow any query parameters and fragment in the resource. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#allow_query_and_fragment RedirectValidation#allow_query_and_fragment}
  */
  readonly allowQueryAndFragment?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for IdP discovery validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#idp_discovery RedirectValidation#idp_discovery}
  */
  readonly idpDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for in error resource validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#in_error_resource RedirectValidation#in_error_resource}
  */
  readonly inErrorResource?: boolean | cdktf.IResolvable;
  /**
  * Require HTTPS for accessing this resource. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#require_https RedirectValidation#require_https}
  */
  readonly requireHttps?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for SLO redirect validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#target_resource_slo RedirectValidation#target_resource_slo}
  */
  readonly targetResourceSlo?: boolean | cdktf.IResolvable;
  /**
  * Enable this target resource for SSO redirect validation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#target_resource_sso RedirectValidation#target_resource_sso}
  */
  readonly targetResourceSso?: boolean | cdktf.IResolvable;
  /**
  * Domain of a valid resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#valid_domain RedirectValidation#valid_domain}
  */
  readonly validDomain: string;
  /**
  * Path of a valid resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#valid_path RedirectValidation#valid_path}
  */
  readonly validPath?: string;
}

export function redirectValidationRedirectValidationLocalSettingsWhiteListStructToTerraform(struct?: RedirectValidationRedirectValidationLocalSettingsWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_query_and_fragment: cdktf.booleanToTerraform(struct!.allowQueryAndFragment),
    idp_discovery: cdktf.booleanToTerraform(struct!.idpDiscovery),
    in_error_resource: cdktf.booleanToTerraform(struct!.inErrorResource),
    require_https: cdktf.booleanToTerraform(struct!.requireHttps),
    target_resource_slo: cdktf.booleanToTerraform(struct!.targetResourceSlo),
    target_resource_sso: cdktf.booleanToTerraform(struct!.targetResourceSso),
    valid_domain: cdktf.stringToTerraform(struct!.validDomain),
    valid_path: cdktf.stringToTerraform(struct!.validPath),
  }
}


export function redirectValidationRedirectValidationLocalSettingsWhiteListStructToHclTerraform(struct?: RedirectValidationRedirectValidationLocalSettingsWhiteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_query_and_fragment: {
      value: cdktf.booleanToHclTerraform(struct!.allowQueryAndFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.idpDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    in_error_resource: {
      value: cdktf.booleanToHclTerraform(struct!.inErrorResource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_https: {
      value: cdktf.booleanToHclTerraform(struct!.requireHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_resource_slo: {
      value: cdktf.booleanToHclTerraform(struct!.targetResourceSlo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_resource_sso: {
      value: cdktf.booleanToHclTerraform(struct!.targetResourceSso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_domain: {
      value: cdktf.stringToHclTerraform(struct!.validDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_path: {
      value: cdktf.stringToHclTerraform(struct!.validPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedirectValidationRedirectValidationLocalSettingsWhiteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RedirectValidationRedirectValidationLocalSettingsWhiteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowQueryAndFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQueryAndFragment = this._allowQueryAndFragment;
    }
    if (this._idpDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpDiscovery = this._idpDiscovery;
    }
    if (this._inErrorResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.inErrorResource = this._inErrorResource;
    }
    if (this._requireHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireHttps = this._requireHttps;
    }
    if (this._targetResourceSlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceSlo = this._targetResourceSlo;
    }
    if (this._targetResourceSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetResourceSso = this._targetResourceSso;
    }
    if (this._validDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.validDomain = this._validDomain;
    }
    if (this._validPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.validPath = this._validPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectValidationRedirectValidationLocalSettingsWhiteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowQueryAndFragment = undefined;
      this._idpDiscovery = undefined;
      this._inErrorResource = undefined;
      this._requireHttps = undefined;
      this._targetResourceSlo = undefined;
      this._targetResourceSso = undefined;
      this._validDomain = undefined;
      this._validPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowQueryAndFragment = value.allowQueryAndFragment;
      this._idpDiscovery = value.idpDiscovery;
      this._inErrorResource = value.inErrorResource;
      this._requireHttps = value.requireHttps;
      this._targetResourceSlo = value.targetResourceSlo;
      this._targetResourceSso = value.targetResourceSso;
      this._validDomain = value.validDomain;
      this._validPath = value.validPath;
    }
  }

  // allow_query_and_fragment - computed: true, optional: true, required: false
  private _allowQueryAndFragment?: boolean | cdktf.IResolvable; 
  public get allowQueryAndFragment() {
    return this.getBooleanAttribute('allow_query_and_fragment');
  }
  public set allowQueryAndFragment(value: boolean | cdktf.IResolvable) {
    this._allowQueryAndFragment = value;
  }
  public resetAllowQueryAndFragment() {
    this._allowQueryAndFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQueryAndFragmentInput() {
    return this._allowQueryAndFragment;
  }

  // idp_discovery - computed: true, optional: true, required: false
  private _idpDiscovery?: boolean | cdktf.IResolvable; 
  public get idpDiscovery() {
    return this.getBooleanAttribute('idp_discovery');
  }
  public set idpDiscovery(value: boolean | cdktf.IResolvable) {
    this._idpDiscovery = value;
  }
  public resetIdpDiscovery() {
    this._idpDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpDiscoveryInput() {
    return this._idpDiscovery;
  }

  // in_error_resource - computed: true, optional: true, required: false
  private _inErrorResource?: boolean | cdktf.IResolvable; 
  public get inErrorResource() {
    return this.getBooleanAttribute('in_error_resource');
  }
  public set inErrorResource(value: boolean | cdktf.IResolvable) {
    this._inErrorResource = value;
  }
  public resetInErrorResource() {
    this._inErrorResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inErrorResourceInput() {
    return this._inErrorResource;
  }

  // require_https - computed: true, optional: true, required: false
  private _requireHttps?: boolean | cdktf.IResolvable; 
  public get requireHttps() {
    return this.getBooleanAttribute('require_https');
  }
  public set requireHttps(value: boolean | cdktf.IResolvable) {
    this._requireHttps = value;
  }
  public resetRequireHttps() {
    this._requireHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireHttpsInput() {
    return this._requireHttps;
  }

  // target_resource_slo - computed: true, optional: true, required: false
  private _targetResourceSlo?: boolean | cdktf.IResolvable; 
  public get targetResourceSlo() {
    return this.getBooleanAttribute('target_resource_slo');
  }
  public set targetResourceSlo(value: boolean | cdktf.IResolvable) {
    this._targetResourceSlo = value;
  }
  public resetTargetResourceSlo() {
    this._targetResourceSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceSloInput() {
    return this._targetResourceSlo;
  }

  // target_resource_sso - computed: true, optional: true, required: false
  private _targetResourceSso?: boolean | cdktf.IResolvable; 
  public get targetResourceSso() {
    return this.getBooleanAttribute('target_resource_sso');
  }
  public set targetResourceSso(value: boolean | cdktf.IResolvable) {
    this._targetResourceSso = value;
  }
  public resetTargetResourceSso() {
    this._targetResourceSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceSsoInput() {
    return this._targetResourceSso;
  }

  // valid_domain - computed: true, optional: false, required: true
  private _validDomain?: string; 
  public get validDomain() {
    return this.getStringAttribute('valid_domain');
  }
  public set validDomain(value: string) {
    this._validDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validDomainInput() {
    return this._validDomain;
  }

  // valid_path - computed: true, optional: true, required: false
  private _validPath?: string; 
  public get validPath() {
    return this.getStringAttribute('valid_path');
  }
  public set validPath(value: string) {
    this._validPath = value;
  }
  public resetValidPath() {
    this._validPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPathInput() {
    return this._validPath;
  }
}

export class RedirectValidationRedirectValidationLocalSettingsWhiteListStructList extends cdktf.ComplexList {
  public internalValue? : RedirectValidationRedirectValidationLocalSettingsWhiteListStruct[] | cdktf.IResolvable

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
  public get(index: number): RedirectValidationRedirectValidationLocalSettingsWhiteListStructOutputReference {
    return new RedirectValidationRedirectValidationLocalSettingsWhiteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RedirectValidationRedirectValidationLocalSettings {
  /**
  * Enable validation for error resource. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#enable_in_error_resource_validation RedirectValidation#enable_in_error_resource_validation}
  */
  readonly enableInErrorResourceValidation?: boolean | cdktf.IResolvable;
  /**
  * Enable target resource validation for IdP discovery. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#enable_target_resource_validation_for_idp_discovery RedirectValidation#enable_target_resource_validation_for_idp_discovery}
  */
  readonly enableTargetResourceValidationForIdpDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Enable target resource validation for SLO. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#enable_target_resource_validation_for_slo RedirectValidation#enable_target_resource_validation_for_slo}
  */
  readonly enableTargetResourceValidationForSlo?: boolean | cdktf.IResolvable;
  /**
  * Enable target resource validation for SSO. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#enable_target_resource_validation_for_sso RedirectValidation#enable_target_resource_validation_for_sso}
  */
  readonly enableTargetResourceValidationForSso?: boolean | cdktf.IResolvable;
  /**
  * List of URIs that are designated as valid target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#uri_allow_list RedirectValidation#uri_allow_list}
  */
  readonly uriAllowList?: RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct[] | cdktf.IResolvable;
  /**
  * List of URLs that are designated as valid target resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#white_list RedirectValidation#white_list}
  */
  readonly whiteList?: RedirectValidationRedirectValidationLocalSettingsWhiteListStruct[] | cdktf.IResolvable;
}

export function redirectValidationRedirectValidationLocalSettingsToTerraform(struct?: RedirectValidationRedirectValidationLocalSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_in_error_resource_validation: cdktf.booleanToTerraform(struct!.enableInErrorResourceValidation),
    enable_target_resource_validation_for_idp_discovery: cdktf.booleanToTerraform(struct!.enableTargetResourceValidationForIdpDiscovery),
    enable_target_resource_validation_for_slo: cdktf.booleanToTerraform(struct!.enableTargetResourceValidationForSlo),
    enable_target_resource_validation_for_sso: cdktf.booleanToTerraform(struct!.enableTargetResourceValidationForSso),
    uri_allow_list: cdktf.listMapper(redirectValidationRedirectValidationLocalSettingsUriAllowListStructToTerraform, false)(struct!.uriAllowList),
    white_list: cdktf.listMapper(redirectValidationRedirectValidationLocalSettingsWhiteListStructToTerraform, false)(struct!.whiteList),
  }
}


export function redirectValidationRedirectValidationLocalSettingsToHclTerraform(struct?: RedirectValidationRedirectValidationLocalSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_in_error_resource_validation: {
      value: cdktf.booleanToHclTerraform(struct!.enableInErrorResourceValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_target_resource_validation_for_idp_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.enableTargetResourceValidationForIdpDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_target_resource_validation_for_slo: {
      value: cdktf.booleanToHclTerraform(struct!.enableTargetResourceValidationForSlo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_target_resource_validation_for_sso: {
      value: cdktf.booleanToHclTerraform(struct!.enableTargetResourceValidationForSso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uri_allow_list: {
      value: cdktf.listMapperHcl(redirectValidationRedirectValidationLocalSettingsUriAllowListStructToHclTerraform, false)(struct!.uriAllowList),
      isBlock: true,
      type: "set",
      storageClassType: "RedirectValidationRedirectValidationLocalSettingsUriAllowListStructList",
    },
    white_list: {
      value: cdktf.listMapperHcl(redirectValidationRedirectValidationLocalSettingsWhiteListStructToHclTerraform, false)(struct!.whiteList),
      isBlock: true,
      type: "set",
      storageClassType: "RedirectValidationRedirectValidationLocalSettingsWhiteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedirectValidationRedirectValidationLocalSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedirectValidationRedirectValidationLocalSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableInErrorResourceValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInErrorResourceValidation = this._enableInErrorResourceValidation;
    }
    if (this._enableTargetResourceValidationForIdpDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTargetResourceValidationForIdpDiscovery = this._enableTargetResourceValidationForIdpDiscovery;
    }
    if (this._enableTargetResourceValidationForSlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTargetResourceValidationForSlo = this._enableTargetResourceValidationForSlo;
    }
    if (this._enableTargetResourceValidationForSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTargetResourceValidationForSso = this._enableTargetResourceValidationForSso;
    }
    if (this._uriAllowList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriAllowList = this._uriAllowList?.internalValue;
    }
    if (this._whiteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectValidationRedirectValidationLocalSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableInErrorResourceValidation = undefined;
      this._enableTargetResourceValidationForIdpDiscovery = undefined;
      this._enableTargetResourceValidationForSlo = undefined;
      this._enableTargetResourceValidationForSso = undefined;
      this._uriAllowList.internalValue = undefined;
      this._whiteList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableInErrorResourceValidation = value.enableInErrorResourceValidation;
      this._enableTargetResourceValidationForIdpDiscovery = value.enableTargetResourceValidationForIdpDiscovery;
      this._enableTargetResourceValidationForSlo = value.enableTargetResourceValidationForSlo;
      this._enableTargetResourceValidationForSso = value.enableTargetResourceValidationForSso;
      this._uriAllowList.internalValue = value.uriAllowList;
      this._whiteList.internalValue = value.whiteList;
    }
  }

  // enable_in_error_resource_validation - computed: true, optional: true, required: false
  private _enableInErrorResourceValidation?: boolean | cdktf.IResolvable; 
  public get enableInErrorResourceValidation() {
    return this.getBooleanAttribute('enable_in_error_resource_validation');
  }
  public set enableInErrorResourceValidation(value: boolean | cdktf.IResolvable) {
    this._enableInErrorResourceValidation = value;
  }
  public resetEnableInErrorResourceValidation() {
    this._enableInErrorResourceValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInErrorResourceValidationInput() {
    return this._enableInErrorResourceValidation;
  }

  // enable_target_resource_validation_for_idp_discovery - computed: true, optional: true, required: false
  private _enableTargetResourceValidationForIdpDiscovery?: boolean | cdktf.IResolvable; 
  public get enableTargetResourceValidationForIdpDiscovery() {
    return this.getBooleanAttribute('enable_target_resource_validation_for_idp_discovery');
  }
  public set enableTargetResourceValidationForIdpDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableTargetResourceValidationForIdpDiscovery = value;
  }
  public resetEnableTargetResourceValidationForIdpDiscovery() {
    this._enableTargetResourceValidationForIdpDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTargetResourceValidationForIdpDiscoveryInput() {
    return this._enableTargetResourceValidationForIdpDiscovery;
  }

  // enable_target_resource_validation_for_slo - computed: true, optional: true, required: false
  private _enableTargetResourceValidationForSlo?: boolean | cdktf.IResolvable; 
  public get enableTargetResourceValidationForSlo() {
    return this.getBooleanAttribute('enable_target_resource_validation_for_slo');
  }
  public set enableTargetResourceValidationForSlo(value: boolean | cdktf.IResolvable) {
    this._enableTargetResourceValidationForSlo = value;
  }
  public resetEnableTargetResourceValidationForSlo() {
    this._enableTargetResourceValidationForSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTargetResourceValidationForSloInput() {
    return this._enableTargetResourceValidationForSlo;
  }

  // enable_target_resource_validation_for_sso - computed: true, optional: true, required: false
  private _enableTargetResourceValidationForSso?: boolean | cdktf.IResolvable; 
  public get enableTargetResourceValidationForSso() {
    return this.getBooleanAttribute('enable_target_resource_validation_for_sso');
  }
  public set enableTargetResourceValidationForSso(value: boolean | cdktf.IResolvable) {
    this._enableTargetResourceValidationForSso = value;
  }
  public resetEnableTargetResourceValidationForSso() {
    this._enableTargetResourceValidationForSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTargetResourceValidationForSsoInput() {
    return this._enableTargetResourceValidationForSso;
  }

  // uri_allow_list - computed: true, optional: true, required: false
  private _uriAllowList = new RedirectValidationRedirectValidationLocalSettingsUriAllowListStructList(this, "uri_allow_list", true);
  public get uriAllowList() {
    return this._uriAllowList;
  }
  public putUriAllowList(value: RedirectValidationRedirectValidationLocalSettingsUriAllowListStruct[] | cdktf.IResolvable) {
    this._uriAllowList.internalValue = value;
  }
  public resetUriAllowList() {
    this._uriAllowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriAllowListInput() {
    return this._uriAllowList.internalValue;
  }

  // white_list - computed: true, optional: true, required: false
  private _whiteList = new RedirectValidationRedirectValidationLocalSettingsWhiteListStructList(this, "white_list", true);
  public get whiteList() {
    return this._whiteList;
  }
  public putWhiteList(value: RedirectValidationRedirectValidationLocalSettingsWhiteListStruct[] | cdktf.IResolvable) {
    this._whiteList.internalValue = value;
  }
  public resetWhiteList() {
    this._whiteList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList.internalValue;
  }
}
export interface RedirectValidationRedirectValidationPartnerSettings {
  /**
  * Enable wreply validation for SLO. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#enable_wreply_validation_slo RedirectValidation#enable_wreply_validation_slo}
  */
  readonly enableWreplyValidationSlo?: boolean | cdktf.IResolvable;
}

export function redirectValidationRedirectValidationPartnerSettingsToTerraform(struct?: RedirectValidationRedirectValidationPartnerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_wreply_validation_slo: cdktf.booleanToTerraform(struct!.enableWreplyValidationSlo),
  }
}


export function redirectValidationRedirectValidationPartnerSettingsToHclTerraform(struct?: RedirectValidationRedirectValidationPartnerSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_wreply_validation_slo: {
      value: cdktf.booleanToHclTerraform(struct!.enableWreplyValidationSlo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedirectValidationRedirectValidationPartnerSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedirectValidationRedirectValidationPartnerSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableWreplyValidationSlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableWreplyValidationSlo = this._enableWreplyValidationSlo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedirectValidationRedirectValidationPartnerSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableWreplyValidationSlo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableWreplyValidationSlo = value.enableWreplyValidationSlo;
    }
  }

  // enable_wreply_validation_slo - computed: true, optional: true, required: false
  private _enableWreplyValidationSlo?: boolean | cdktf.IResolvable; 
  public get enableWreplyValidationSlo() {
    return this.getBooleanAttribute('enable_wreply_validation_slo');
  }
  public set enableWreplyValidationSlo(value: boolean | cdktf.IResolvable) {
    this._enableWreplyValidationSlo = value;
  }
  public resetEnableWreplyValidationSlo() {
    this._enableWreplyValidationSlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableWreplyValidationSloInput() {
    return this._enableWreplyValidationSlo;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation pingfederate_redirect_validation}
*/
export class RedirectValidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_redirect_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedirectValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedirectValidation to import
  * @param importFromId The id of the existing RedirectValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedirectValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_redirect_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/redirect_validation pingfederate_redirect_validation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedirectValidationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RedirectValidationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_redirect_validation',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._redirectValidationLocalSettings.internalValue = config.redirectValidationLocalSettings;
    this._redirectValidationPartnerSettings.internalValue = config.redirectValidationPartnerSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // redirect_validation_local_settings - computed: true, optional: true, required: false
  private _redirectValidationLocalSettings = new RedirectValidationRedirectValidationLocalSettingsOutputReference(this, "redirect_validation_local_settings");
  public get redirectValidationLocalSettings() {
    return this._redirectValidationLocalSettings;
  }
  public putRedirectValidationLocalSettings(value: RedirectValidationRedirectValidationLocalSettings) {
    this._redirectValidationLocalSettings.internalValue = value;
  }
  public resetRedirectValidationLocalSettings() {
    this._redirectValidationLocalSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectValidationLocalSettingsInput() {
    return this._redirectValidationLocalSettings.internalValue;
  }

  // redirect_validation_partner_settings - computed: true, optional: true, required: false
  private _redirectValidationPartnerSettings = new RedirectValidationRedirectValidationPartnerSettingsOutputReference(this, "redirect_validation_partner_settings");
  public get redirectValidationPartnerSettings() {
    return this._redirectValidationPartnerSettings;
  }
  public putRedirectValidationPartnerSettings(value: RedirectValidationRedirectValidationPartnerSettings) {
    this._redirectValidationPartnerSettings.internalValue = value;
  }
  public resetRedirectValidationPartnerSettings() {
    this._redirectValidationPartnerSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectValidationPartnerSettingsInput() {
    return this._redirectValidationPartnerSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      redirect_validation_local_settings: redirectValidationRedirectValidationLocalSettingsToTerraform(this._redirectValidationLocalSettings.internalValue),
      redirect_validation_partner_settings: redirectValidationRedirectValidationPartnerSettingsToTerraform(this._redirectValidationPartnerSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      redirect_validation_local_settings: {
        value: redirectValidationRedirectValidationLocalSettingsToHclTerraform(this._redirectValidationLocalSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedirectValidationRedirectValidationLocalSettings",
      },
      redirect_validation_partner_settings: {
        value: redirectValidationRedirectValidationPartnerSettingsToHclTerraform(this._redirectValidationPartnerSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedirectValidationRedirectValidationPartnerSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
