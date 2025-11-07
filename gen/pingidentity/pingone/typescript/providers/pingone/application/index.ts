// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object that specifies group access control settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#access_control_group_options Application#access_control_group_options}
  */
  readonly accessControlGroupOptions?: ApplicationAccessControlGroupOptions;
  /**
  * A string that specifies the user role required to access the application.  A user is an admin user if the user has one or more admin roles assigned, such as `Organization Admin`, `Environment Admin`, `Identity Data Admin`, or `Client Application Developer`.  Options are `ADMIN_USERS_ONLY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#access_control_role_type Application#access_control_role_type}
  */
  readonly accessControlRoleType?: string;
  /**
  * A string that specifies the description of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * A boolean that specifies whether the application is enabled in the environment.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The PingOne resource ID of the environment to create and manage the application in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#environment_id Application#environment_id}
  */
  readonly environmentId: string;
  /**
  * A single object that specifies External link application specific settings.  Exactly one of the following must be defined: `external_link_options`, `oidc_options`, `saml_options`, `wsfed_options`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#external_link_options Application#external_link_options}
  */
  readonly externalLinkOptions?: ApplicationExternalLinkOptions;
  /**
  * A boolean to specify whether the application is hidden in the application portal despite the configured group access policy.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#hidden_from_app_portal Application#hidden_from_app_portal}
  */
  readonly hiddenFromAppPortal?: boolean | cdktf.IResolvable;
  /**
  * A single object that specifies settings for the application icon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#icon Application#icon}
  */
  readonly icon?: ApplicationIcon;
  /**
  * A string that specifies the custom login page URL for the application. If you set the `login_page_url` property for applications in an environment that sets a custom domain, the URL should include the top-level domain and at least one additional domain level. **Warning** To avoid issues with third-party cookies in some browsers, a custom domain must be used, giving your PingOne environment the same parent domain as your authentication application. For more information about custom domains, see Custom domains.  The provided URL is expected to use the `https://` schema.  The `http` schema is permitted where the host is `localhost` or `127.0.0.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#login_page_url Application#login_page_url}
  */
  readonly loginPageUrl?: string;
  /**
  * A string that specifies the name of the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * A single object that specifies OIDC/OAuth application specific settings.  Exactly one of the following must be defined: `external_link_options`, `oidc_options`, `saml_options`, `wsfed_options`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#oidc_options Application#oidc_options}
  */
  readonly oidcOptions?: ApplicationOidcOptions;
  /**
  * A single object that specifies SAML application specific settings.  Exactly one of the following must be defined: `external_link_options`, `oidc_options`, `saml_options`, `wsfed_options`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#saml_options Application#saml_options}
  */
  readonly samlOptions?: ApplicationSamlOptions;
  /**
  * An array of strings that specifies the list of labels associated with the application.  Options are `PING_FED_CONNECTION_INTEGRATION`.  Conflicts with `external_link_options`, `saml_options`, `wsfed_options`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#tags Application#tags}
  */
  readonly tags?: string[];
  /**
  * A single object that specifies WS-Fed application specific settings.  Exactly one of the following must be defined: `external_link_options`, `oidc_options`, `saml_options`, `wsfed_options`.  If this object is added or removed, a replacement plan is triggered.  Parameters within the object are subject to their own immutability rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#wsfed_options Application#wsfed_options}
  */
  readonly wsfedOptions?: ApplicationWsfedOptions;
}
export interface ApplicationAccessControlGroupOptions {
  /**
  * A set that specifies the group IDs for the groups the actor must belong to for access to the application.  Values must be valid PingOne Resource IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#groups Application#groups}
  */
  readonly groups: string[];
  /**
  * A string that specifies the group type required to access the application.  Options are `ALL_GROUPS` (the actor must belong to all groups listed in the `groups` property), `ANY_GROUP` (the actor must belong to at least one group listed in the `groups` property).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#type Application#type}
  */
  readonly type: string;
}

export function applicationAccessControlGroupOptionsToTerraform(struct?: ApplicationAccessControlGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationAccessControlGroupOptionsToHclTerraform(struct?: ApplicationAccessControlGroupOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationAccessControlGroupOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationAccessControlGroupOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationAccessControlGroupOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._type = value.type;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApplicationExternalLinkOptions {
  /**
  * A string that specifies the custom home page URL for the application.  Both `http://` and `https://` URLs are permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#home_page_url Application#home_page_url}
  */
  readonly homePageUrl: string;
}

export function applicationExternalLinkOptionsToTerraform(struct?: ApplicationExternalLinkOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    home_page_url: cdktf.stringToTerraform(struct!.homePageUrl),
  }
}


export function applicationExternalLinkOptionsToHclTerraform(struct?: ApplicationExternalLinkOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    home_page_url: {
      value: cdktf.stringToHclTerraform(struct!.homePageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationExternalLinkOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationExternalLinkOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._homePageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.homePageUrl = this._homePageUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationExternalLinkOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._homePageUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._homePageUrl = value.homePageUrl;
    }
  }

  // home_page_url - computed: false, optional: false, required: true
  private _homePageUrl?: string; 
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }
  public set homePageUrl(value: string) {
    this._homePageUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get homePageUrlInput() {
    return this._homePageUrl;
  }
}
export interface ApplicationIcon {
  /**
  * A string that specifies the URL for the application icon.  Both `http://` and `https://` are permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#href Application#href}
  */
  readonly href: string;
  /**
  * A string that specifies the ID for the application icon.  Must be a valid PingOne Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function applicationIconToTerraform(struct?: ApplicationIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function applicationIconToHclTerraform(struct?: ApplicationIcon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ApplicationIconOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationIcon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationIcon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
      this._id = value.id;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
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
export interface ApplicationOidcOptionsCertificateBasedAuthentication {
  /**
  * A string that represents a PingOne ID for the issuance certificate key.  The key must be of type `ISSUANCE`.  Must be a valid PingOne Resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#key_id Application#key_id}
  */
  readonly keyId: string;
}

export function applicationOidcOptionsCertificateBasedAuthenticationToTerraform(struct?: ApplicationOidcOptionsCertificateBasedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function applicationOidcOptionsCertificateBasedAuthenticationToHclTerraform(struct?: ApplicationOidcOptionsCertificateBasedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOidcOptionsCertificateBasedAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOidcOptionsCertificateBasedAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOidcOptionsCertificateBasedAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ApplicationOidcOptionsCorsSettings {
  /**
  * A string that specifies the behavior of how Authorization and Authentication APIs interact with CORS requests that reference the application.  Options are `ALLOW_NO_ORIGINS` (rejects all CORS requests), `ALLOW_SPECIFIC_ORIGINS` (rejects all CORS requests except those listed in `origins`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#behavior Application#behavior}
  */
  readonly behavior: string;
  /**
  * A set of strings that represent the origins from which CORS requests to the Authorization and Authentication APIs are allowed.  Each value must be a `http` or `https` URL without a path.  The host may be a domain name (including `localhost`), or an IPv4 address.  Subdomains may use the wildcard (`*`) to match any string.  Must be non-empty when `behavior` is `ALLOW_SPECIFIC_ORIGINS` and must be omitted or empty when `behavior` is `ALLOW_NO_ORIGINS`.  Limited to 20 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#origins Application#origins}
  */
  readonly origins?: string[];
}

export function applicationOidcOptionsCorsSettingsToTerraform(struct?: ApplicationOidcOptionsCorsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
  }
}


export function applicationOidcOptionsCorsSettingsToHclTerraform(struct?: ApplicationOidcOptionsCorsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOidcOptionsCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOidcOptionsCorsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOidcOptionsCorsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._origins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._origins = value.origins;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // origins - computed: false, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }
}
export interface ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration {
  /**
  * An integer that specifies the number of minutes or hours that specify the duration between successful integrity detection calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#amount Application#amount}
  */
  readonly amount: number;
  /**
  * A string that specifies the time units of the cache `amount` parameter.  Options are `HOURS`, `MINUTES`.  Defaults to `MINUTES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#units Application#units}
  */
  readonly units?: string;
}

export function applicationOidcOptionsMobileAppIntegrityDetectionCacheDurationToTerraform(struct?: ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amount: cdktf.numberToTerraform(struct!.amount),
    units: cdktf.stringToTerraform(struct!.units),
  }
}


export function applicationOidcOptionsMobileAppIntegrityDetectionCacheDurationToHclTerraform(struct?: ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    units: {
      value: cdktf.stringToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amount = undefined;
      this._units = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amount = value.amount;
      this._units = value.units;
    }
  }

  // amount - computed: true, optional: false, required: true
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }

  // units - computed: true, optional: true, required: false
  private _units?: string; 
  public get units() {
    return this.getStringAttribute('units');
  }
  public set units(value: string) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}
export interface ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay {
  /**
  * Play Integrity verdict decryption key from your Google Play Services account. This parameter must be provided if you have set `verification_type` to `INTERNAL`.  Conflicts with `service_account_credentials_json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#decryption_key Application#decryption_key}
  */
  readonly decryptionKey?: string;
  /**
  * Contents of the JSON file that represents your Service Account Credentials. This parameter must be provided if you have set `verification_type` to `GOOGLE`.  Conflicts with `decryption_key`, `verification_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#service_account_credentials_json Application#service_account_credentials_json}
  */
  readonly serviceAccountCredentialsJson?: string;
  /**
  * Play Integrity verdict signature verification key from your Google Play Services account. This parameter must be provided if you have set `verification_type` to `INTERNAL`.  Conflicts with `service_account_credentials_json`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#verification_key Application#verification_key}
  */
  readonly verificationKey?: string;
  /**
  * The type of verification that should be used.  Options are `GOOGLE`, `INTERNAL`.  Using internal verification will not count against your Google API call quota. The value you select for this attribute determines what other parameters you must provide. When set to `GOOGLE`, you must provide `service_account_credentials_json`. When set to `INTERNAL`, you must provide both `decryption_key` and `verification_key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#verification_type Application#verification_type}
  */
  readonly verificationType: string;
}

export function applicationOidcOptionsMobileAppIntegrityDetectionGooglePlayToTerraform(struct?: ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_key: cdktf.stringToTerraform(struct!.decryptionKey),
    service_account_credentials_json: cdktf.stringToTerraform(struct!.serviceAccountCredentialsJson),
    verification_key: cdktf.stringToTerraform(struct!.verificationKey),
    verification_type: cdktf.stringToTerraform(struct!.verificationType),
  }
}


export function applicationOidcOptionsMobileAppIntegrityDetectionGooglePlayToHclTerraform(struct?: ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_key: {
      value: cdktf.stringToHclTerraform(struct!.decryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_credentials_json: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountCredentialsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_key: {
      value: cdktf.stringToHclTerraform(struct!.verificationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_type: {
      value: cdktf.stringToHclTerraform(struct!.verificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionKey = this._decryptionKey;
    }
    if (this._serviceAccountCredentialsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountCredentialsJson = this._serviceAccountCredentialsJson;
    }
    if (this._verificationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationKey = this._verificationKey;
    }
    if (this._verificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationType = this._verificationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decryptionKey = undefined;
      this._serviceAccountCredentialsJson = undefined;
      this._verificationKey = undefined;
      this._verificationType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decryptionKey = value.decryptionKey;
      this._serviceAccountCredentialsJson = value.serviceAccountCredentialsJson;
      this._verificationKey = value.verificationKey;
      this._verificationType = value.verificationType;
    }
  }

  // decryption_key - computed: true, optional: true, required: false
  private _decryptionKey?: string; 
  public get decryptionKey() {
    return this.getStringAttribute('decryption_key');
  }
  public set decryptionKey(value: string) {
    this._decryptionKey = value;
  }
  public resetDecryptionKey() {
    this._decryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionKeyInput() {
    return this._decryptionKey;
  }

  // service_account_credentials_json - computed: true, optional: true, required: false
  private _serviceAccountCredentialsJson?: string; 
  public get serviceAccountCredentialsJson() {
    return this.getStringAttribute('service_account_credentials_json');
  }
  public set serviceAccountCredentialsJson(value: string) {
    this._serviceAccountCredentialsJson = value;
  }
  public resetServiceAccountCredentialsJson() {
    this._serviceAccountCredentialsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountCredentialsJsonInput() {
    return this._serviceAccountCredentialsJson;
  }

  // verification_key - computed: true, optional: true, required: false
  private _verificationKey?: string; 
  public get verificationKey() {
    return this.getStringAttribute('verification_key');
  }
  public set verificationKey(value: string) {
    this._verificationKey = value;
  }
  public resetVerificationKey() {
    this._verificationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationKeyInput() {
    return this._verificationKey;
  }

  // verification_type - computed: true, optional: false, required: true
  private _verificationType?: string; 
  public get verificationType() {
    return this.getStringAttribute('verification_type');
  }
  public set verificationType(value: string) {
    this._verificationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationTypeInput() {
    return this._verificationType;
  }
}
export interface ApplicationOidcOptionsMobileAppIntegrityDetection {
  /**
  * A single object that specifies settings for the caching duration of successful integrity detection calls.  Every attestation request entails a certain time tradeoff. You can choose to cache successful integrity detection calls for a predefined duration, between a minimum of 1 minute and a maximum of 48 hours. If integrity detection is ENABLED, the cache duration must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#cache_duration Application#cache_duration}
  */
  readonly cacheDuration?: ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration;
  /**
  * A boolean that specifies whether device integrity detection takes place on mobile devices.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * You can enable device integrity checking separately for Android and iOS by setting `enabled` to `true` and then using `excluded_platforms` to specify the OS where you do not want to use device integrity checking. The values to use are `GOOGLE` and `IOS` (all upper case). Note that this is implemented as an array even though currently you can only include a single value.  If `GOOGLE` is not included in this list, the `google_play` attribute block must be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#excluded_platforms Application#excluded_platforms}
  */
  readonly excludedPlatforms?: string[];
  /**
  * A single object that describes Google Play Integrity API credential settings for Android device integrity detection.  Required when `excluded_platforms` is unset or does not include `GOOGLE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#google_play Application#google_play}
  */
  readonly googlePlay?: ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay;
}

export function applicationOidcOptionsMobileAppIntegrityDetectionToTerraform(struct?: ApplicationOidcOptionsMobileAppIntegrityDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_duration: applicationOidcOptionsMobileAppIntegrityDetectionCacheDurationToTerraform(struct!.cacheDuration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    excluded_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPlatforms),
    google_play: applicationOidcOptionsMobileAppIntegrityDetectionGooglePlayToTerraform(struct!.googlePlay),
  }
}


export function applicationOidcOptionsMobileAppIntegrityDetectionToHclTerraform(struct?: ApplicationOidcOptionsMobileAppIntegrityDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_duration: {
      value: applicationOidcOptionsMobileAppIntegrityDetectionCacheDurationToHclTerraform(struct!.cacheDuration),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPlatforms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    google_play: {
      value: applicationOidcOptionsMobileAppIntegrityDetectionGooglePlayToHclTerraform(struct!.googlePlay),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOidcOptionsMobileAppIntegrityDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOidcOptionsMobileAppIntegrityDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheDuration = this._cacheDuration?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludedPlatforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPlatforms = this._excludedPlatforms;
    }
    if (this._googlePlay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googlePlay = this._googlePlay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOidcOptionsMobileAppIntegrityDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheDuration.internalValue = undefined;
      this._enabled = undefined;
      this._excludedPlatforms = undefined;
      this._googlePlay.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheDuration.internalValue = value.cacheDuration;
      this._enabled = value.enabled;
      this._excludedPlatforms = value.excludedPlatforms;
      this._googlePlay.internalValue = value.googlePlay;
    }
  }

  // cache_duration - computed: true, optional: true, required: false
  private _cacheDuration = new ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDurationOutputReference(this, "cache_duration");
  public get cacheDuration() {
    return this._cacheDuration;
  }
  public putCacheDuration(value: ApplicationOidcOptionsMobileAppIntegrityDetectionCacheDuration) {
    this._cacheDuration.internalValue = value;
  }
  public resetCacheDuration() {
    this._cacheDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheDurationInput() {
    return this._cacheDuration.internalValue;
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

  // excluded_platforms - computed: true, optional: true, required: false
  private _excludedPlatforms?: string[]; 
  public get excludedPlatforms() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_platforms'));
  }
  public set excludedPlatforms(value: string[]) {
    this._excludedPlatforms = value;
  }
  public resetExcludedPlatforms() {
    this._excludedPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPlatformsInput() {
    return this._excludedPlatforms;
  }

  // google_play - computed: true, optional: true, required: false
  private _googlePlay = new ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlayOutputReference(this, "google_play");
  public get googlePlay() {
    return this._googlePlay;
  }
  public putGooglePlay(value: ApplicationOidcOptionsMobileAppIntegrityDetectionGooglePlay) {
    this._googlePlay.internalValue = value;
  }
  public resetGooglePlay() {
    this._googlePlay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googlePlayInput() {
    return this._googlePlay.internalValue;
  }
}
export interface ApplicationOidcOptionsMobileApp {
  /**
  * A string that specifies the bundle associated with the application, for push notifications in native apps. The value of the `bundle_id` property is unique per environment, and once defined, is immutable.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#bundle_id Application#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * The unique identifier for the app on the device and in the Huawei Mobile Service AppGallery. The value of this property is unique per environment, and once defined, is immutable.  Required with `huawei_package_name`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#huawei_app_id Application#huawei_app_id}
  */
  readonly huaweiAppId?: string;
  /**
  * The package name associated with the application, for push notifications in native apps. The value of this property is unique per environment, and once defined, is immutable.  Required with `huawei_app_id`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#huawei_package_name Application#huawei_package_name}
  */
  readonly huaweiPackageName?: string;
  /**
  * A single object that specifies mobile application integrity detection settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#integrity_detection Application#integrity_detection}
  */
  readonly integrityDetection?: ApplicationOidcOptionsMobileAppIntegrityDetection;
  /**
  * A string that specifies the package name associated with the application, for push notifications in native apps. The value of the `package_name` property is unique per environment, and once defined, is immutable.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#package_name Application#package_name}
  */
  readonly packageName?: string;
  /**
  * The amount of time a passcode should be displayed before being replaced with a new passcode - must be between `30` and `60` seconds.  Defaults to `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#passcode_refresh_seconds Application#passcode_refresh_seconds}
  */
  readonly passcodeRefreshSeconds?: number;
  /**
  * A string that specifies a URI prefix that enables direct triggering of the mobile application when scanning a QR code. The URI prefix can be set to a universal link with a valid value (which can be a URL address that starts with `HTTP://` or `HTTPS://`, such as `https://www.bxretail.org`), or an app schema, which is just a string and requires no special validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#universal_app_link Application#universal_app_link}
  */
  readonly universalAppLink?: string;
}

export function applicationOidcOptionsMobileAppToTerraform(struct?: ApplicationOidcOptionsMobileApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_id: cdktf.stringToTerraform(struct!.bundleId),
    huawei_app_id: cdktf.stringToTerraform(struct!.huaweiAppId),
    huawei_package_name: cdktf.stringToTerraform(struct!.huaweiPackageName),
    integrity_detection: applicationOidcOptionsMobileAppIntegrityDetectionToTerraform(struct!.integrityDetection),
    package_name: cdktf.stringToTerraform(struct!.packageName),
    passcode_refresh_seconds: cdktf.numberToTerraform(struct!.passcodeRefreshSeconds),
    universal_app_link: cdktf.stringToTerraform(struct!.universalAppLink),
  }
}


export function applicationOidcOptionsMobileAppToHclTerraform(struct?: ApplicationOidcOptionsMobileApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.bundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    huawei_app_id: {
      value: cdktf.stringToHclTerraform(struct!.huaweiAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    huawei_package_name: {
      value: cdktf.stringToHclTerraform(struct!.huaweiPackageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    integrity_detection: {
      value: applicationOidcOptionsMobileAppIntegrityDetectionToHclTerraform(struct!.integrityDetection),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationOidcOptionsMobileAppIntegrityDetection",
    },
    package_name: {
      value: cdktf.stringToHclTerraform(struct!.packageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passcode_refresh_seconds: {
      value: cdktf.numberToHclTerraform(struct!.passcodeRefreshSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    universal_app_link: {
      value: cdktf.stringToHclTerraform(struct!.universalAppLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOidcOptionsMobileAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOidcOptionsMobileApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleId = this._bundleId;
    }
    if (this._huaweiAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.huaweiAppId = this._huaweiAppId;
    }
    if (this._huaweiPackageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.huaweiPackageName = this._huaweiPackageName;
    }
    if (this._integrityDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrityDetection = this._integrityDetection?.internalValue;
    }
    if (this._packageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageName = this._packageName;
    }
    if (this._passcodeRefreshSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeRefreshSeconds = this._passcodeRefreshSeconds;
    }
    if (this._universalAppLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.universalAppLink = this._universalAppLink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOidcOptionsMobileApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleId = undefined;
      this._huaweiAppId = undefined;
      this._huaweiPackageName = undefined;
      this._integrityDetection.internalValue = undefined;
      this._packageName = undefined;
      this._passcodeRefreshSeconds = undefined;
      this._universalAppLink = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleId = value.bundleId;
      this._huaweiAppId = value.huaweiAppId;
      this._huaweiPackageName = value.huaweiPackageName;
      this._integrityDetection.internalValue = value.integrityDetection;
      this._packageName = value.packageName;
      this._passcodeRefreshSeconds = value.passcodeRefreshSeconds;
      this._universalAppLink = value.universalAppLink;
    }
  }

  // bundle_id - computed: true, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // huawei_app_id - computed: true, optional: true, required: false
  private _huaweiAppId?: string; 
  public get huaweiAppId() {
    return this.getStringAttribute('huawei_app_id');
  }
  public set huaweiAppId(value: string) {
    this._huaweiAppId = value;
  }
  public resetHuaweiAppId() {
    this._huaweiAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huaweiAppIdInput() {
    return this._huaweiAppId;
  }

  // huawei_package_name - computed: true, optional: true, required: false
  private _huaweiPackageName?: string; 
  public get huaweiPackageName() {
    return this.getStringAttribute('huawei_package_name');
  }
  public set huaweiPackageName(value: string) {
    this._huaweiPackageName = value;
  }
  public resetHuaweiPackageName() {
    this._huaweiPackageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huaweiPackageNameInput() {
    return this._huaweiPackageName;
  }

  // integrity_detection - computed: true, optional: true, required: false
  private _integrityDetection = new ApplicationOidcOptionsMobileAppIntegrityDetectionOutputReference(this, "integrity_detection");
  public get integrityDetection() {
    return this._integrityDetection;
  }
  public putIntegrityDetection(value: ApplicationOidcOptionsMobileAppIntegrityDetection) {
    this._integrityDetection.internalValue = value;
  }
  public resetIntegrityDetection() {
    this._integrityDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityDetectionInput() {
    return this._integrityDetection.internalValue;
  }

  // package_name - computed: true, optional: true, required: false
  private _packageName?: string; 
  public get packageName() {
    return this.getStringAttribute('package_name');
  }
  public set packageName(value: string) {
    this._packageName = value;
  }
  public resetPackageName() {
    this._packageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNameInput() {
    return this._packageName;
  }

  // passcode_refresh_seconds - computed: true, optional: true, required: false
  private _passcodeRefreshSeconds?: number; 
  public get passcodeRefreshSeconds() {
    return this.getNumberAttribute('passcode_refresh_seconds');
  }
  public set passcodeRefreshSeconds(value: number) {
    this._passcodeRefreshSeconds = value;
  }
  public resetPasscodeRefreshSeconds() {
    this._passcodeRefreshSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeRefreshSecondsInput() {
    return this._passcodeRefreshSeconds;
  }

  // universal_app_link - computed: true, optional: true, required: false
  private _universalAppLink?: string; 
  public get universalAppLink() {
    return this.getStringAttribute('universal_app_link');
  }
  public set universalAppLink(value: string) {
    this._universalAppLink = value;
  }
  public resetUniversalAppLink() {
    this._universalAppLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalAppLinkInput() {
    return this._universalAppLink;
  }
}
export interface ApplicationOidcOptions {
  /**
  * A boolean that, when set to `true` (the default), if you attempt to reuse the refresh token, the authorization server immediately revokes the reused refresh token, as well as all descendant tokens. Setting this to null equates to a `false` setting.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#additional_refresh_token_replay_protection_enabled Application#additional_refresh_token_replay_protection_enabled}
  */
  readonly additionalRefreshTokenReplayProtectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean to specify whether wildcards are allowed in redirect URIs. For more information, see [Wildcards in Redirect URIs](https://docs.pingidentity.com/csh?context=p1_c_wildcard_redirect_uri).  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#allow_wildcard_in_redirect_uris Application#allow_wildcard_in_redirect_uris}
  */
  readonly allowWildcardInRedirectUris?: boolean | cdktf.IResolvable;
  /**
  * A single object that specifies Certificate based authentication settings. This parameter block can only be set where the application's `type` parameter is set to `NATIVE_APP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#certificate_based_authentication Application#certificate_based_authentication}
  */
  readonly certificateBasedAuthentication?: ApplicationOidcOptionsCertificateBasedAuthentication;
  /**
  * A single object that allows customization of how the Authorization and Authentication APIs interact with CORS requests that reference the application. If omitted, the application allows CORS requests from any origin except for operations that expose sensitive information (e.g. `/as/authorize` and `/as/token`).  This is legacy behavior, and it is recommended that applications migrate to include specific CORS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#cors_settings Application#cors_settings}
  */
  readonly corsSettings?: ApplicationOidcOptionsCorsSettings;
  /**
  * A string that specifies an optional custom verification URI that is returned for the `/device_authorization` endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#device_custom_verification_uri Application#device_custom_verification_uri}
  */
  readonly deviceCustomVerificationUri?: string;
  /**
  * A string that specifies a unique identifier within an environment for a device authorization grant flow to provide a short identifier to the application. This property is ignored when the `device_custom_verification_uri` property is configured. The string can contain any letters, numbers, and some special characters (regex: `a-zA-Z0-9_-`). It can have a length of no more than `50` characters (min/max=`1`/`50`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#device_path_id Application#device_path_id}
  */
  readonly devicePathId?: string;
  /**
  * An integer that specifies the frequency (in seconds) for the client to poll the `/as/token` endpoint. This property is required only for applications in which the `grant_types` property is set to `DEVICE_CODE`. The default value is `5` seconds. It can have a value of no more than `60` seconds (min/max=`1`/`60`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#device_polling_interval Application#device_polling_interval}
  */
  readonly devicePollingInterval?: number;
  /**
  * An integer that specifies the length of time (in seconds) that the `userCode` and `deviceCode` returned by the `/device_authorization` endpoint are valid. This property is required only for applications in which the `grant_types` property is set to `DEVICE_CODE`. The default value is `600` seconds. It can have a value of no more than `3600` seconds (min/max=`1`/`3600`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#device_timeout Application#device_timeout}
  */
  readonly deviceTimeout?: number;
  /**
  * A list that specifies the grant type for the authorization request.  Options are `AUTHORIZATION_CODE`, `CLIENT_CREDENTIALS`, `DEVICE_CODE`, `IMPLICIT`, `REFRESH_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#grant_types Application#grant_types}
  */
  readonly grantTypes: string[];
  /**
  * A string that specifies the custom home page URL for the application.  The provided URL is expected to use the `https://` schema.  The `http` schema is permitted where the host is `localhost` or `127.0.0.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#home_page_url Application#home_page_url}
  */
  readonly homePageUrl?: string;
  /**
  * A boolean flag to allow signoff without access to the session token cookie.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#idp_signoff Application#idp_signoff}
  */
  readonly idpSignoff?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the URI to use for third-parties to begin the sign-on process for the application. If specified, PingOne redirects users to this URI to initiate SSO to PingOne. The application is responsible for implementing the relevant OIDC flow when the initiate login URI is requested. This property is required if you want the application to appear in the PingOne Application Portal. See the OIDC specification section of [Initiating Login from a Third Party](https://openid.net/specs/openid-connect-core-1_0.html#ThirdPartyInitiatedLogin) for more information.  The provided URL is expected to use the `https://` schema.  The `http` schema is permitted where the host is `localhost` or `127.0.0.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#initiate_login_uri Application#initiate_login_uri}
  */
  readonly initiateLoginUri?: string;
  /**
  * A string that specifies a JWKS string that validates the signature of signed JWTs for applications that use the `PRIVATE_KEY_JWT` option for the `token_endpoint_auth_method`. This property is required when `token_endpoint_auth_method` is `PRIVATE_KEY_JWT` and the `jwks_url` property is empty. For more information, see [Create a private_key_jwt JWKS string](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-private_key_jwt-jwks-string). This property is also required if the optional `request` property JWT on the authorize endpoint is signed using the RS256 (or RS384, RS512) signing algorithm and the `jwks_url` property is empty. For more infornmation about signing the `request` property JWT, see [Create a request property JWT](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-request-property-jwt).  Conflicts with `jwks_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#jwks Application#jwks}
  */
  readonly jwks?: string;
  /**
  * A string that specifies a URL (supports `https://` only) that provides access to a JWKS string that validates the signature of signed JWTs for applications that use the `PRIVATE_KEY_JWT` option for the `token_endpoint_auth_method`. This property is required when `token_endpoint_auth_method` is `PRIVATE_KEY_JWT` and the `jwks` property is empty. For more information, see [Create a private_key_jwt JWKS string](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-private_key_jwt-jwks-string). This property is also required if the optional `request` property JWT on the authorize endpoint is signed using the RS256 (or RS384, RS512) signing algorithm and the `jwks` property is empty. For more infornmation about signing the `request` property JWT, see [Create a request property JWT](https://apidocs.pingidentity.com/pingone/platform/v1/api/#create-a-request-property-jwt).  Conflicts with `jwks`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#jwks_url Application#jwks_url}
  */
  readonly jwksUrl?: string;
  /**
  * A single object that specifies Mobile application integration settings for `NATIVE_APP` type applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#mobile_app Application#mobile_app}
  */
  readonly mobileApp?: ApplicationOidcOptionsMobileApp;
  /**
  * A string that specifies whether pushed authorization requests (PAR) are required.  Options are `OPTIONAL`, `REQUIRED`.  Defaults to `OPTIONAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#par_requirement Application#par_requirement}
  */
  readonly parRequirement?: string;
  /**
  * An integer that specifies the pushed authorization request (PAR) timeout in seconds.  Valid values are between `1` and `600`.  Defaults to `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#par_timeout Application#par_timeout}
  */
  readonly parTimeout?: number;
  /**
  * A string that specifies how `PKCE` request parameters are handled on the authorize request.  Options are `OPTIONAL`, `REQUIRED`, `S256_REQUIRED`.  Defaults to `OPTIONAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#pkce_enforcement Application#pkce_enforcement}
  */
  readonly pkceEnforcement?: string;
  /**
  * A list of strings that specifies the URLs that the browser can be redirected to after logout.  The provided URLs are expected to use the `https://`, `http://` schema, or a custom mobile native schema (e.g., `org.bxretail.app://logout`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#post_logout_redirect_uris Application#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * A list of strings that specifies the allowed callback URIs for the authentication response.    The provided URLs are expected to use the `https://` schema, or a custom mobile native schema (e.g., `org.bxretail.app://callback`).  The `http` schema is only permitted where the host is `localhost` or `127.0.0.1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * An integer that specifies the lifetime in seconds of the refresh token. Valid values are between `60` and `2147483647`. If the `refresh_token_rolling_duration` property is specified for the application, then this property value must be less than or equal to the value of `refresh_token_rolling_duration`. After this property is set, the value cannot be nullified - this will reset the value back to the default. This value is used to generate the value for the exp claim when minting a new refresh token.  Defaults to `2592000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#refresh_token_duration Application#refresh_token_duration}
  */
  readonly refreshTokenDuration?: number;
  /**
  * An integer that specifies the number of seconds a refresh token can be exchanged before re-authentication is required. Valid values are between `60` and `2147483647`. After this property is set, the value cannot be nullified - this will force recreation of the resource. This value is used to generate the value for the exp claim when minting a new refresh token.  Defaults to `15552000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#refresh_token_rolling_duration Application#refresh_token_rolling_duration}
  */
  readonly refreshTokenRollingDuration?: number;
  /**
  * The number of seconds that a refresh token may be reused after having been exchanged for a new set of tokens. This is useful in the case of network errors on the client. Valid values are between `0` and `86400` seconds. `Null` is treated the same as `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#refresh_token_rolling_grace_period_duration Application#refresh_token_rolling_grace_period_duration}
  */
  readonly refreshTokenRollingGracePeriodDuration?: number;
  /**
  * A boolean that indicates that the Java Web Token (JWT) for the [request query](https://openid.net/specs/openid-connect-core-1_0.html#RequestObject) parameter is required to be signed. If `false` or null, a signed request object is not required. Both `support_unsigned_request_object` and this property cannot be set to `true`.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#require_signed_request_object Application#require_signed_request_object}
  */
  readonly requireSignedRequestObject?: boolean | cdktf.IResolvable;
  /**
  * A list that specifies the code or token type returned by an authorization request.  Options are `CODE`, `ID_TOKEN`, `TOKEN`.  Note that `CODE` cannot be used in an authorization request with `TOKEN` or `ID_TOKEN` because PingOne does not currently support OIDC hybrid flows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#response_types Application#response_types}
  */
  readonly responseTypes?: string[];
  /**
  * A boolean that specifies whether the request query parameter JWT is allowed to be unsigned. If `false` or null, an unsigned request object is not allowed.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#support_unsigned_request_object Application#support_unsigned_request_object}
  */
  readonly supportUnsignedRequestObject?: boolean | cdktf.IResolvable;
  /**
  * The URI for the application. If specified, PingOne will redirect application users to this URI after a user is authenticated. In the PingOne admin console, this becomes the value of the `target_link_uri` parameter used for the Initiate Single Sign-On URL field.  Both `http://` and `https://` URLs are permitted as well as custom mobile native schema (e.g., `org.bxretail.app://target`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#target_link_uri Application#target_link_uri}
  */
  readonly targetLinkUri?: string;
  /**
  * A string that specifies the client authentication methods supported by the token endpoint.  Options are `CLIENT_SECRET_BASIC`, `CLIENT_SECRET_JWT`, `CLIENT_SECRET_POST`, `NONE`, `PRIVATE_KEY_JWT`.  When `PRIVATE_KEY_JWT` is configured, either `jwks` or `jwks_url` must also be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#token_endpoint_auth_method Application#token_endpoint_auth_method}
  */
  readonly tokenEndpointAuthMethod: string;
  /**
  * A string that specifies the type associated with the application.  Options are `CUSTOM_APP`, `NATIVE_APP`, `SERVICE`, `SINGLE_PAGE_APP`, `WEB_APP`, `WORKER`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#type Application#type}
  */
  readonly type: string;
}

export function applicationOidcOptionsToTerraform(struct?: ApplicationOidcOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_refresh_token_replay_protection_enabled: cdktf.booleanToTerraform(struct!.additionalRefreshTokenReplayProtectionEnabled),
    allow_wildcard_in_redirect_uris: cdktf.booleanToTerraform(struct!.allowWildcardInRedirectUris),
    certificate_based_authentication: applicationOidcOptionsCertificateBasedAuthenticationToTerraform(struct!.certificateBasedAuthentication),
    cors_settings: applicationOidcOptionsCorsSettingsToTerraform(struct!.corsSettings),
    device_custom_verification_uri: cdktf.stringToTerraform(struct!.deviceCustomVerificationUri),
    device_path_id: cdktf.stringToTerraform(struct!.devicePathId),
    device_polling_interval: cdktf.numberToTerraform(struct!.devicePollingInterval),
    device_timeout: cdktf.numberToTerraform(struct!.deviceTimeout),
    grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grantTypes),
    home_page_url: cdktf.stringToTerraform(struct!.homePageUrl),
    idp_signoff: cdktf.booleanToTerraform(struct!.idpSignoff),
    initiate_login_uri: cdktf.stringToTerraform(struct!.initiateLoginUri),
    jwks: cdktf.stringToTerraform(struct!.jwks),
    jwks_url: cdktf.stringToTerraform(struct!.jwksUrl),
    mobile_app: applicationOidcOptionsMobileAppToTerraform(struct!.mobileApp),
    par_requirement: cdktf.stringToTerraform(struct!.parRequirement),
    par_timeout: cdktf.numberToTerraform(struct!.parTimeout),
    pkce_enforcement: cdktf.stringToTerraform(struct!.pkceEnforcement),
    post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postLogoutRedirectUris),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    refresh_token_duration: cdktf.numberToTerraform(struct!.refreshTokenDuration),
    refresh_token_rolling_duration: cdktf.numberToTerraform(struct!.refreshTokenRollingDuration),
    refresh_token_rolling_grace_period_duration: cdktf.numberToTerraform(struct!.refreshTokenRollingGracePeriodDuration),
    require_signed_request_object: cdktf.booleanToTerraform(struct!.requireSignedRequestObject),
    response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseTypes),
    support_unsigned_request_object: cdktf.booleanToTerraform(struct!.supportUnsignedRequestObject),
    target_link_uri: cdktf.stringToTerraform(struct!.targetLinkUri),
    token_endpoint_auth_method: cdktf.stringToTerraform(struct!.tokenEndpointAuthMethod),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationOidcOptionsToHclTerraform(struct?: ApplicationOidcOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_refresh_token_replay_protection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.additionalRefreshTokenReplayProtectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_wildcard_in_redirect_uris: {
      value: cdktf.booleanToHclTerraform(struct!.allowWildcardInRedirectUris),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_based_authentication: {
      value: applicationOidcOptionsCertificateBasedAuthenticationToHclTerraform(struct!.certificateBasedAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationOidcOptionsCertificateBasedAuthentication",
    },
    cors_settings: {
      value: applicationOidcOptionsCorsSettingsToHclTerraform(struct!.corsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationOidcOptionsCorsSettings",
    },
    device_custom_verification_uri: {
      value: cdktf.stringToHclTerraform(struct!.deviceCustomVerificationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_path_id: {
      value: cdktf.stringToHclTerraform(struct!.devicePathId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.devicePollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_timeout: {
      value: cdktf.numberToHclTerraform(struct!.deviceTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grant_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grantTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    home_page_url: {
      value: cdktf.stringToHclTerraform(struct!.homePageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_signoff: {
      value: cdktf.booleanToHclTerraform(struct!.idpSignoff),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initiate_login_uri: {
      value: cdktf.stringToHclTerraform(struct!.initiateLoginUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_url: {
      value: cdktf.stringToHclTerraform(struct!.jwksUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mobile_app: {
      value: applicationOidcOptionsMobileAppToHclTerraform(struct!.mobileApp),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationOidcOptionsMobileApp",
    },
    par_requirement: {
      value: cdktf.stringToHclTerraform(struct!.parRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    par_timeout: {
      value: cdktf.numberToHclTerraform(struct!.parTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkce_enforcement: {
      value: cdktf.stringToHclTerraform(struct!.pkceEnforcement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_logout_redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postLogoutRedirectUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    refresh_token_duration: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_rolling_duration: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenRollingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_rolling_grace_period_duration: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenRollingGracePeriodDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_signed_request_object: {
      value: cdktf.booleanToHclTerraform(struct!.requireSignedRequestObject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    response_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    support_unsigned_request_object: {
      value: cdktf.booleanToHclTerraform(struct!.supportUnsignedRequestObject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_link_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetLinkUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_auth_method: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointAuthMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOidcOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationOidcOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRefreshTokenReplayProtectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRefreshTokenReplayProtectionEnabled = this._additionalRefreshTokenReplayProtectionEnabled;
    }
    if (this._allowWildcardInRedirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowWildcardInRedirectUris = this._allowWildcardInRedirectUris;
    }
    if (this._certificateBasedAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateBasedAuthentication = this._certificateBasedAuthentication?.internalValue;
    }
    if (this._corsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsSettings = this._corsSettings?.internalValue;
    }
    if (this._deviceCustomVerificationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCustomVerificationUri = this._deviceCustomVerificationUri;
    }
    if (this._devicePathId !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePathId = this._devicePathId;
    }
    if (this._devicePollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePollingInterval = this._devicePollingInterval;
    }
    if (this._deviceTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceTimeout = this._deviceTimeout;
    }
    if (this._grantTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantTypes = this._grantTypes;
    }
    if (this._homePageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.homePageUrl = this._homePageUrl;
    }
    if (this._idpSignoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSignoff = this._idpSignoff;
    }
    if (this._initiateLoginUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiateLoginUri = this._initiateLoginUri;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._jwksUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUrl = this._jwksUrl;
    }
    if (this._mobileApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobileApp = this._mobileApp?.internalValue;
    }
    if (this._parRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.parRequirement = this._parRequirement;
    }
    if (this._parTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.parTimeout = this._parTimeout;
    }
    if (this._pkceEnforcement !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkceEnforcement = this._pkceEnforcement;
    }
    if (this._postLogoutRedirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.postLogoutRedirectUris = this._postLogoutRedirectUris;
    }
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._refreshTokenDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenDuration = this._refreshTokenDuration;
    }
    if (this._refreshTokenRollingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRollingDuration = this._refreshTokenRollingDuration;
    }
    if (this._refreshTokenRollingGracePeriodDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRollingGracePeriodDuration = this._refreshTokenRollingGracePeriodDuration;
    }
    if (this._requireSignedRequestObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSignedRequestObject = this._requireSignedRequestObject;
    }
    if (this._responseTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTypes = this._responseTypes;
    }
    if (this._supportUnsignedRequestObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportUnsignedRequestObject = this._supportUnsignedRequestObject;
    }
    if (this._targetLinkUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetLinkUri = this._targetLinkUri;
    }
    if (this._tokenEndpointAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointAuthMethod = this._tokenEndpointAuthMethod;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOidcOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalRefreshTokenReplayProtectionEnabled = undefined;
      this._allowWildcardInRedirectUris = undefined;
      this._certificateBasedAuthentication.internalValue = undefined;
      this._corsSettings.internalValue = undefined;
      this._deviceCustomVerificationUri = undefined;
      this._devicePathId = undefined;
      this._devicePollingInterval = undefined;
      this._deviceTimeout = undefined;
      this._grantTypes = undefined;
      this._homePageUrl = undefined;
      this._idpSignoff = undefined;
      this._initiateLoginUri = undefined;
      this._jwks = undefined;
      this._jwksUrl = undefined;
      this._mobileApp.internalValue = undefined;
      this._parRequirement = undefined;
      this._parTimeout = undefined;
      this._pkceEnforcement = undefined;
      this._postLogoutRedirectUris = undefined;
      this._redirectUris = undefined;
      this._refreshTokenDuration = undefined;
      this._refreshTokenRollingDuration = undefined;
      this._refreshTokenRollingGracePeriodDuration = undefined;
      this._requireSignedRequestObject = undefined;
      this._responseTypes = undefined;
      this._supportUnsignedRequestObject = undefined;
      this._targetLinkUri = undefined;
      this._tokenEndpointAuthMethod = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalRefreshTokenReplayProtectionEnabled = value.additionalRefreshTokenReplayProtectionEnabled;
      this._allowWildcardInRedirectUris = value.allowWildcardInRedirectUris;
      this._certificateBasedAuthentication.internalValue = value.certificateBasedAuthentication;
      this._corsSettings.internalValue = value.corsSettings;
      this._deviceCustomVerificationUri = value.deviceCustomVerificationUri;
      this._devicePathId = value.devicePathId;
      this._devicePollingInterval = value.devicePollingInterval;
      this._deviceTimeout = value.deviceTimeout;
      this._grantTypes = value.grantTypes;
      this._homePageUrl = value.homePageUrl;
      this._idpSignoff = value.idpSignoff;
      this._initiateLoginUri = value.initiateLoginUri;
      this._jwks = value.jwks;
      this._jwksUrl = value.jwksUrl;
      this._mobileApp.internalValue = value.mobileApp;
      this._parRequirement = value.parRequirement;
      this._parTimeout = value.parTimeout;
      this._pkceEnforcement = value.pkceEnforcement;
      this._postLogoutRedirectUris = value.postLogoutRedirectUris;
      this._redirectUris = value.redirectUris;
      this._refreshTokenDuration = value.refreshTokenDuration;
      this._refreshTokenRollingDuration = value.refreshTokenRollingDuration;
      this._refreshTokenRollingGracePeriodDuration = value.refreshTokenRollingGracePeriodDuration;
      this._requireSignedRequestObject = value.requireSignedRequestObject;
      this._responseTypes = value.responseTypes;
      this._supportUnsignedRequestObject = value.supportUnsignedRequestObject;
      this._targetLinkUri = value.targetLinkUri;
      this._tokenEndpointAuthMethod = value.tokenEndpointAuthMethod;
      this._type = value.type;
    }
  }

  // additional_refresh_token_replay_protection_enabled - computed: true, optional: true, required: false
  private _additionalRefreshTokenReplayProtectionEnabled?: boolean | cdktf.IResolvable; 
  public get additionalRefreshTokenReplayProtectionEnabled() {
    return this.getBooleanAttribute('additional_refresh_token_replay_protection_enabled');
  }
  public set additionalRefreshTokenReplayProtectionEnabled(value: boolean | cdktf.IResolvable) {
    this._additionalRefreshTokenReplayProtectionEnabled = value;
  }
  public resetAdditionalRefreshTokenReplayProtectionEnabled() {
    this._additionalRefreshTokenReplayProtectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRefreshTokenReplayProtectionEnabledInput() {
    return this._additionalRefreshTokenReplayProtectionEnabled;
  }

  // allow_wildcard_in_redirect_uris - computed: true, optional: true, required: false
  private _allowWildcardInRedirectUris?: boolean | cdktf.IResolvable; 
  public get allowWildcardInRedirectUris() {
    return this.getBooleanAttribute('allow_wildcard_in_redirect_uris');
  }
  public set allowWildcardInRedirectUris(value: boolean | cdktf.IResolvable) {
    this._allowWildcardInRedirectUris = value;
  }
  public resetAllowWildcardInRedirectUris() {
    this._allowWildcardInRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowWildcardInRedirectUrisInput() {
    return this._allowWildcardInRedirectUris;
  }

  // certificate_based_authentication - computed: false, optional: true, required: false
  private _certificateBasedAuthentication = new ApplicationOidcOptionsCertificateBasedAuthenticationOutputReference(this, "certificate_based_authentication");
  public get certificateBasedAuthentication() {
    return this._certificateBasedAuthentication;
  }
  public putCertificateBasedAuthentication(value: ApplicationOidcOptionsCertificateBasedAuthentication) {
    this._certificateBasedAuthentication.internalValue = value;
  }
  public resetCertificateBasedAuthentication() {
    this._certificateBasedAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBasedAuthenticationInput() {
    return this._certificateBasedAuthentication.internalValue;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // cors_settings - computed: false, optional: true, required: false
  private _corsSettings = new ApplicationOidcOptionsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }
  public putCorsSettings(value: ApplicationOidcOptionsCorsSettings) {
    this._corsSettings.internalValue = value;
  }
  public resetCorsSettings() {
    this._corsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsSettingsInput() {
    return this._corsSettings.internalValue;
  }

  // device_custom_verification_uri - computed: false, optional: true, required: false
  private _deviceCustomVerificationUri?: string; 
  public get deviceCustomVerificationUri() {
    return this.getStringAttribute('device_custom_verification_uri');
  }
  public set deviceCustomVerificationUri(value: string) {
    this._deviceCustomVerificationUri = value;
  }
  public resetDeviceCustomVerificationUri() {
    this._deviceCustomVerificationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCustomVerificationUriInput() {
    return this._deviceCustomVerificationUri;
  }

  // device_path_id - computed: false, optional: true, required: false
  private _devicePathId?: string; 
  public get devicePathId() {
    return this.getStringAttribute('device_path_id');
  }
  public set devicePathId(value: string) {
    this._devicePathId = value;
  }
  public resetDevicePathId() {
    this._devicePathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePathIdInput() {
    return this._devicePathId;
  }

  // device_polling_interval - computed: true, optional: true, required: false
  private _devicePollingInterval?: number; 
  public get devicePollingInterval() {
    return this.getNumberAttribute('device_polling_interval');
  }
  public set devicePollingInterval(value: number) {
    this._devicePollingInterval = value;
  }
  public resetDevicePollingInterval() {
    this._devicePollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePollingIntervalInput() {
    return this._devicePollingInterval;
  }

  // device_timeout - computed: true, optional: true, required: false
  private _deviceTimeout?: number; 
  public get deviceTimeout() {
    return this.getNumberAttribute('device_timeout');
  }
  public set deviceTimeout(value: number) {
    this._deviceTimeout = value;
  }
  public resetDeviceTimeout() {
    this._deviceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTimeoutInput() {
    return this._deviceTimeout;
  }

  // grant_types - computed: false, optional: false, required: true
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
  }

  // home_page_url - computed: false, optional: true, required: false
  private _homePageUrl?: string; 
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }
  public set homePageUrl(value: string) {
    this._homePageUrl = value;
  }
  public resetHomePageUrl() {
    this._homePageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePageUrlInput() {
    return this._homePageUrl;
  }

  // idp_signoff - computed: true, optional: true, required: false
  private _idpSignoff?: boolean | cdktf.IResolvable; 
  public get idpSignoff() {
    return this.getBooleanAttribute('idp_signoff');
  }
  public set idpSignoff(value: boolean | cdktf.IResolvable) {
    this._idpSignoff = value;
  }
  public resetIdpSignoff() {
    this._idpSignoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSignoffInput() {
    return this._idpSignoff;
  }

  // initiate_login_uri - computed: false, optional: true, required: false
  private _initiateLoginUri?: string; 
  public get initiateLoginUri() {
    return this.getStringAttribute('initiate_login_uri');
  }
  public set initiateLoginUri(value: string) {
    this._initiateLoginUri = value;
  }
  public resetInitiateLoginUri() {
    this._initiateLoginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiateLoginUriInput() {
    return this._initiateLoginUri;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // jwks_url - computed: false, optional: true, required: false
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  public resetJwksUrl() {
    this._jwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
  }

  // mobile_app - computed: true, optional: true, required: false
  private _mobileApp = new ApplicationOidcOptionsMobileAppOutputReference(this, "mobile_app");
  public get mobileApp() {
    return this._mobileApp;
  }
  public putMobileApp(value: ApplicationOidcOptionsMobileApp) {
    this._mobileApp.internalValue = value;
  }
  public resetMobileApp() {
    this._mobileApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileAppInput() {
    return this._mobileApp.internalValue;
  }

  // par_requirement - computed: true, optional: true, required: false
  private _parRequirement?: string; 
  public get parRequirement() {
    return this.getStringAttribute('par_requirement');
  }
  public set parRequirement(value: string) {
    this._parRequirement = value;
  }
  public resetParRequirement() {
    this._parRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parRequirementInput() {
    return this._parRequirement;
  }

  // par_timeout - computed: true, optional: true, required: false
  private _parTimeout?: number; 
  public get parTimeout() {
    return this.getNumberAttribute('par_timeout');
  }
  public set parTimeout(value: number) {
    this._parTimeout = value;
  }
  public resetParTimeout() {
    this._parTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parTimeoutInput() {
    return this._parTimeout;
  }

  // pkce_enforcement - computed: true, optional: true, required: false
  private _pkceEnforcement?: string; 
  public get pkceEnforcement() {
    return this.getStringAttribute('pkce_enforcement');
  }
  public set pkceEnforcement(value: string) {
    this._pkceEnforcement = value;
  }
  public resetPkceEnforcement() {
    this._pkceEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceEnforcementInput() {
    return this._pkceEnforcement;
  }

  // post_logout_redirect_uris - computed: false, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
  }
  public set postLogoutRedirectUris(value: string[]) {
    this._postLogoutRedirectUris = value;
  }
  public resetPostLogoutRedirectUris() {
    this._postLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUrisInput() {
    return this._postLogoutRedirectUris;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_token_duration - computed: true, optional: true, required: false
  private _refreshTokenDuration?: number; 
  public get refreshTokenDuration() {
    return this.getNumberAttribute('refresh_token_duration');
  }
  public set refreshTokenDuration(value: number) {
    this._refreshTokenDuration = value;
  }
  public resetRefreshTokenDuration() {
    this._refreshTokenDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenDurationInput() {
    return this._refreshTokenDuration;
  }

  // refresh_token_rolling_duration - computed: true, optional: true, required: false
  private _refreshTokenRollingDuration?: number; 
  public get refreshTokenRollingDuration() {
    return this.getNumberAttribute('refresh_token_rolling_duration');
  }
  public set refreshTokenRollingDuration(value: number) {
    this._refreshTokenRollingDuration = value;
  }
  public resetRefreshTokenRollingDuration() {
    this._refreshTokenRollingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingDurationInput() {
    return this._refreshTokenRollingDuration;
  }

  // refresh_token_rolling_grace_period_duration - computed: false, optional: true, required: false
  private _refreshTokenRollingGracePeriodDuration?: number; 
  public get refreshTokenRollingGracePeriodDuration() {
    return this.getNumberAttribute('refresh_token_rolling_grace_period_duration');
  }
  public set refreshTokenRollingGracePeriodDuration(value: number) {
    this._refreshTokenRollingGracePeriodDuration = value;
  }
  public resetRefreshTokenRollingGracePeriodDuration() {
    this._refreshTokenRollingGracePeriodDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingGracePeriodDurationInput() {
    return this._refreshTokenRollingGracePeriodDuration;
  }

  // require_signed_request_object - computed: true, optional: true, required: false
  private _requireSignedRequestObject?: boolean | cdktf.IResolvable; 
  public get requireSignedRequestObject() {
    return this.getBooleanAttribute('require_signed_request_object');
  }
  public set requireSignedRequestObject(value: boolean | cdktf.IResolvable) {
    this._requireSignedRequestObject = value;
  }
  public resetRequireSignedRequestObject() {
    this._requireSignedRequestObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedRequestObjectInput() {
    return this._requireSignedRequestObject;
  }

  // response_types - computed: false, optional: true, required: false
  private _responseTypes?: string[]; 
  public get responseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('response_types'));
  }
  public set responseTypes(value: string[]) {
    this._responseTypes = value;
  }
  public resetResponseTypes() {
    this._responseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTypesInput() {
    return this._responseTypes;
  }

  // support_unsigned_request_object - computed: true, optional: true, required: false
  private _supportUnsignedRequestObject?: boolean | cdktf.IResolvable; 
  public get supportUnsignedRequestObject() {
    return this.getBooleanAttribute('support_unsigned_request_object');
  }
  public set supportUnsignedRequestObject(value: boolean | cdktf.IResolvable) {
    this._supportUnsignedRequestObject = value;
  }
  public resetSupportUnsignedRequestObject() {
    this._supportUnsignedRequestObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUnsignedRequestObjectInput() {
    return this._supportUnsignedRequestObject;
  }

  // target_link_uri - computed: false, optional: true, required: false
  private _targetLinkUri?: string; 
  public get targetLinkUri() {
    return this.getStringAttribute('target_link_uri');
  }
  public set targetLinkUri(value: string) {
    this._targetLinkUri = value;
  }
  public resetTargetLinkUri() {
    this._targetLinkUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetLinkUriInput() {
    return this._targetLinkUri;
  }

  // token_endpoint_auth_method - computed: false, optional: false, required: true
  private _tokenEndpointAuthMethod?: string; 
  public get tokenEndpointAuthMethod() {
    return this.getStringAttribute('token_endpoint_auth_method');
  }
  public set tokenEndpointAuthMethod(value: string) {
    this._tokenEndpointAuthMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthMethodInput() {
    return this._tokenEndpointAuthMethod;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ApplicationSamlOptionsCorsSettings {
  /**
  * A string that specifies the behavior of how Authorization and Authentication APIs interact with CORS requests that reference the application.  Options are `ALLOW_NO_ORIGINS` (rejects all CORS requests), `ALLOW_SPECIFIC_ORIGINS` (rejects all CORS requests except those listed in `origins`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#behavior Application#behavior}
  */
  readonly behavior: string;
  /**
  * A set of strings that represent the origins from which CORS requests to the Authorization and Authentication APIs are allowed.  Each value must be a `http` or `https` URL without a path.  The host may be a domain name (including `localhost`), or an IPv4 address.  Subdomains may use the wildcard (`*`) to match any string.  Must be non-empty when `behavior` is `ALLOW_SPECIFIC_ORIGINS` and must be omitted or empty when `behavior` is `ALLOW_NO_ORIGINS`.  Limited to 20 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#origins Application#origins}
  */
  readonly origins?: string[];
}

export function applicationSamlOptionsCorsSettingsToTerraform(struct?: ApplicationSamlOptionsCorsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
  }
}


export function applicationSamlOptionsCorsSettingsToHclTerraform(struct?: ApplicationSamlOptionsCorsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOptionsCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSamlOptionsCorsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlOptionsCorsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._origins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._origins = value.origins;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // origins - computed: false, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }
}
export interface ApplicationSamlOptionsIdpSigningKey {
  /**
  * Specifies the signature algorithm of the key. For RSA keys, options are `SHA256withRSA`, `SHA384withRSA` and `SHA512withRSA`. For elliptical curve (EC) keys, options are `SHA256withECDSA`, `SHA384withECDSA` and `SHA512withECDSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#algorithm Application#algorithm}
  */
  readonly algorithm: string;
  /**
  * An ID for the certificate key pair to be used by the identity provider to sign assertions and responses.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#key_id Application#key_id}
  */
  readonly keyId: string;
}

export function applicationSamlOptionsIdpSigningKeyToTerraform(struct?: ApplicationSamlOptionsIdpSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function applicationSamlOptionsIdpSigningKeyToHclTerraform(struct?: ApplicationSamlOptionsIdpSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOptionsIdpSigningKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSamlOptionsIdpSigningKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlOptionsIdpSigningKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._keyId = value.keyId;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ApplicationSamlOptionsSpEncryptionCertificate {
  /**
  * A string that specifies the unique identifier of the encryption public certificate that has been uploaded to PingOne.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function applicationSamlOptionsSpEncryptionCertificateToTerraform(struct?: ApplicationSamlOptionsSpEncryptionCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function applicationSamlOptionsSpEncryptionCertificateToHclTerraform(struct?: ApplicationSamlOptionsSpEncryptionCertificate | cdktf.IResolvable): any {
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

export class ApplicationSamlOptionsSpEncryptionCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSamlOptionsSpEncryptionCertificate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationSamlOptionsSpEncryptionCertificate | cdktf.IResolvable | undefined) {
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
export interface ApplicationSamlOptionsSpEncryption {
  /**
  * The algorithm to use when encrypting assertions.  Options are `AES_128`, `AES_256`, `TRIPLEDES`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#algorithm Application#algorithm}
  */
  readonly algorithm: string;
  /**
  * A single object that specifies the certificate settings used to encrypt SAML assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#certificate Application#certificate}
  */
  readonly certificate: ApplicationSamlOptionsSpEncryptionCertificate;
}

export function applicationSamlOptionsSpEncryptionToTerraform(struct?: ApplicationSamlOptionsSpEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    certificate: applicationSamlOptionsSpEncryptionCertificateToTerraform(struct!.certificate),
  }
}


export function applicationSamlOptionsSpEncryptionToHclTerraform(struct?: ApplicationSamlOptionsSpEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: applicationSamlOptionsSpEncryptionCertificateToHclTerraform(struct!.certificate),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSamlOptionsSpEncryptionCertificate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOptionsSpEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSamlOptionsSpEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._certificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlOptionsSpEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._certificate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._certificate.internalValue = value.certificate;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // certificate - computed: false, optional: false, required: true
  private _certificate = new ApplicationSamlOptionsSpEncryptionCertificateOutputReference(this, "certificate");
  public get certificate() {
    return this._certificate;
  }
  public putCertificate(value: ApplicationSamlOptionsSpEncryptionCertificate) {
    this._certificate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate.internalValue;
  }
}
export interface ApplicationSamlOptionsSpVerification {
  /**
  * A boolean that specifies whether the Authn Request signing should be enforced.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#authn_request_signed Application#authn_request_signed}
  */
  readonly authnRequestSigned?: boolean | cdktf.IResolvable;
  /**
  * A list that specifies the certificate IDs used to verify the service provider signature.  Values must be valid PingOne resource IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#certificate_ids Application#certificate_ids}
  */
  readonly certificateIds: string[];
}

export function applicationSamlOptionsSpVerificationToTerraform(struct?: ApplicationSamlOptionsSpVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authn_request_signed: cdktf.booleanToTerraform(struct!.authnRequestSigned),
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
  }
}


export function applicationSamlOptionsSpVerificationToHclTerraform(struct?: ApplicationSamlOptionsSpVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authn_request_signed: {
      value: cdktf.booleanToHclTerraform(struct!.authnRequestSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOptionsSpVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSamlOptionsSpVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authnRequestSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnRequestSigned = this._authnRequestSigned;
    }
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlOptionsSpVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authnRequestSigned = undefined;
      this._certificateIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authnRequestSigned = value.authnRequestSigned;
      this._certificateIds = value.certificateIds;
    }
  }

  // authn_request_signed - computed: true, optional: true, required: false
  private _authnRequestSigned?: boolean | cdktf.IResolvable; 
  public get authnRequestSigned() {
    return this.getBooleanAttribute('authn_request_signed');
  }
  public set authnRequestSigned(value: boolean | cdktf.IResolvable) {
    this._authnRequestSigned = value;
  }
  public resetAuthnRequestSigned() {
    this._authnRequestSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnRequestSignedInput() {
    return this._authnRequestSigned;
  }

  // certificate_ids - computed: false, optional: false, required: true
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }
}
export interface ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds {
  /**
  * Indicates whether the virtual server identified by the associated `vs_id` is to be used as the default virtual server. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#default Application#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * This must be a valid SAML entity ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#vs_id Application#vs_id}
  */
  readonly vsId: string;
}

export function applicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsToTerraform(struct?: ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    vs_id: cdktf.stringToTerraform(struct!.vsId),
  }
}


export function applicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsToHclTerraform(struct?: ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vs_id: {
      value: cdktf.stringToHclTerraform(struct!.vsId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._vsId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsId = this._vsId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._vsId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._vsId = value.vsId;
    }
  }

  // default - computed: true, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // vs_id - computed: false, optional: false, required: true
  private _vsId?: string; 
  public get vsId() {
    return this.getStringAttribute('vs_id');
  }
  public set vsId(value: string) {
    this._vsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsIdInput() {
    return this._vsId;
  }
}

export class ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsList extends cdktf.ComplexList {
  public internalValue? : ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsOutputReference {
    return new ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSamlOptionsVirtualServerIdSettings {
  /**
  * Indicates whether the virtual server ID or IDs specified are to be used. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Required if `enabled` is `true`. Contains the list of virtual server ID or IDs to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#virtual_server_ids Application#virtual_server_ids}
  */
  readonly virtualServerIds?: ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds[] | cdktf.IResolvable;
}

export function applicationSamlOptionsVirtualServerIdSettingsToTerraform(struct?: ApplicationSamlOptionsVirtualServerIdSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    virtual_server_ids: cdktf.listMapper(applicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsToTerraform, false)(struct!.virtualServerIds),
  }
}


export function applicationSamlOptionsVirtualServerIdSettingsToHclTerraform(struct?: ApplicationSamlOptionsVirtualServerIdSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtual_server_ids: {
      value: cdktf.listMapperHcl(applicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsToHclTerraform, false)(struct!.virtualServerIds),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOptionsVirtualServerIdSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSamlOptionsVirtualServerIdSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._virtualServerIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerIds = this._virtualServerIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlOptionsVirtualServerIdSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._virtualServerIds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._virtualServerIds.internalValue = value.virtualServerIds;
    }
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

  // virtual_server_ids - computed: false, optional: true, required: false
  private _virtualServerIds = new ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIdsList(this, "virtual_server_ids", false);
  public get virtualServerIds() {
    return this._virtualServerIds;
  }
  public putVirtualServerIds(value: ApplicationSamlOptionsVirtualServerIdSettingsVirtualServerIds[] | cdktf.IResolvable) {
    this._virtualServerIds.internalValue = value;
  }
  public resetVirtualServerIds() {
    this._virtualServerIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdsInput() {
    return this._virtualServerIds.internalValue;
  }
}
export interface ApplicationSamlOptions {
  /**
  * A list of string that specifies the Assertion Consumer Service URLs. The first URL in the list is used as default (there must be at least one URL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#acs_urls Application#acs_urls}
  */
  readonly acsUrls: string[];
  /**
  * An integer that specifies the assertion validity duration in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#assertion_duration Application#assertion_duration}
  */
  readonly assertionDuration: number;
  /**
  * A boolean that specifies whether the SAML assertion itself should be signed.  Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#assertion_signed_enabled Application#assertion_signed_enabled}
  */
  readonly assertionSignedEnabled?: boolean | cdktf.IResolvable;
  /**
  * A single object that allows customization of how the Authorization and Authentication APIs interact with CORS requests that reference the application. If omitted, the application allows CORS requests from any origin except for operations that expose sensitive information (e.g. `/as/authorize` and `/as/token`).  This is legacy behavior, and it is recommended that applications migrate to include specific CORS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#cors_settings Application#cors_settings}
  */
  readonly corsSettings?: ApplicationSamlOptionsCorsSettings;
  /**
  * A string that specfies a default URL used as the `RelayState` parameter by the IdP to deep link into the application after authentication. This value can be overridden by the `applicationUrl` query parameter for [GET Identity Provider Initiated SSO](https://apidocs.pingidentity.com/pingone/platform/v1/api/#get-identity-provider-initiated-sso). Although both of these parameters are generally URLs, because they are used as deep links, this is not enforced. If neither `defaultTargetUrl` nor `applicationUrl` is specified during a SAML authentication flow, no `RelayState` value is supplied to the application. The `defaultTargetUrl` (or the `applicationUrl`) value is passed to the SAML application’s ACS URL as a separate `RelayState` key value (not within the SAMLResponse key value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#default_target_url Application#default_target_url}
  */
  readonly defaultTargetUrl?: string;
  /**
  * A boolean that specifies whether `requestedAuthnContext` is taken into account in policy decision-making.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#enable_requested_authn_context Application#enable_requested_authn_context}
  */
  readonly enableRequestedAuthnContext?: boolean | cdktf.IResolvable;
  /**
  * A string that specifies the custom home page URL for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#home_page_url Application#home_page_url}
  */
  readonly homePageUrl?: string;
  /**
  * SAML application assertion/response signing key settings.  Use with `assertion_signed_enabled` to enable assertion signing and/or `response_is_signed` to enable response signing.  It's highly recommended, and best practice, to define signing key settings for the configured SAML application.  However if this property is omitted, the default signing certificate for the environment is used.  This parameter will become a required field in the next major release of the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#idp_signing_key Application#idp_signing_key}
  */
  readonly idpSigningKey: ApplicationSamlOptionsIdpSigningKey;
  /**
  * A string that specifies the format of the Subject NameID attibute in the SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#nameid_format Application#nameid_format}
  */
  readonly nameidFormat?: string;
  /**
  * A boolean that specifies whether the SAML assertion response itself should be signed.  Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#response_is_signed Application#response_is_signed}
  */
  readonly responseIsSigned?: boolean | cdktf.IResolvable;
  /**
  * An integer that specifies a value for if the SAML application requires a different `SessionNotOnOrAfter` attribute value within the `AuthnStatement` element than the `NotOnOrAfter` value set by the `assertion_duration` property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#session_not_on_or_after_duration Application#session_not_on_or_after_duration}
  */
  readonly sessionNotOnOrAfterDuration?: number;
  /**
  * A string that specifies the binding protocol to be used for the logout response.  Options are `HTTP_POST`, `HTTP_REDIRECT`.  Existing configurations with no data default to `HTTP_POST`.  Defaults to `HTTP_POST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#slo_binding Application#slo_binding}
  */
  readonly sloBinding?: string;
  /**
  * A string that specifies the logout endpoint URL. This is an optional property. However, if a logout endpoint URL is not defined, logout actions result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#slo_endpoint Application#slo_endpoint}
  */
  readonly sloEndpoint?: string;
  /**
  * A string that specifies the endpoint URL to submit the logout response. If a value is not provided, the `slo_endpoint` property value is used to submit SLO response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#slo_response_endpoint Application#slo_response_endpoint}
  */
  readonly sloResponseEndpoint?: string;
  /**
  * An integer that defines how long (hours) PingOne can exchange logout messages with the application, specifically a logout request from the application, since the initial request.  The minimum value is `0` hour and the maximum is `24` hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#slo_window Application#slo_window}
  */
  readonly sloWindow?: number;
  /**
  * A single object that specifies settings for PingOne to encrypt SAML assertions to be sent to the application. Assertions are not encrypted by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#sp_encryption Application#sp_encryption}
  */
  readonly spEncryption?: ApplicationSamlOptionsSpEncryption;
  /**
  * A string that specifies the service provider entity ID used to lookup the application. This is a required property and is unique within the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#sp_entity_id Application#sp_entity_id}
  */
  readonly spEntityId: string;
  /**
  * A single object item that specifies SP signature verification settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#sp_verification Application#sp_verification}
  */
  readonly spVerification?: ApplicationSamlOptionsSpVerification;
  /**
  * A string that specifies the type associated with the application.  Options are `CUSTOM_APP`, `WEB_APP`.  Defaults to `WEB_APP`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#type Application#type}
  */
  readonly type?: string;
  /**
  * Contains the virtual server ID or IDs to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#virtual_server_id_settings Application#virtual_server_id_settings}
  */
  readonly virtualServerIdSettings?: ApplicationSamlOptionsVirtualServerIdSettings;
}

export function applicationSamlOptionsToTerraform(struct?: ApplicationSamlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acs_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acsUrls),
    assertion_duration: cdktf.numberToTerraform(struct!.assertionDuration),
    assertion_signed_enabled: cdktf.booleanToTerraform(struct!.assertionSignedEnabled),
    cors_settings: applicationSamlOptionsCorsSettingsToTerraform(struct!.corsSettings),
    default_target_url: cdktf.stringToTerraform(struct!.defaultTargetUrl),
    enable_requested_authn_context: cdktf.booleanToTerraform(struct!.enableRequestedAuthnContext),
    home_page_url: cdktf.stringToTerraform(struct!.homePageUrl),
    idp_signing_key: applicationSamlOptionsIdpSigningKeyToTerraform(struct!.idpSigningKey),
    nameid_format: cdktf.stringToTerraform(struct!.nameidFormat),
    response_is_signed: cdktf.booleanToTerraform(struct!.responseIsSigned),
    session_not_on_or_after_duration: cdktf.numberToTerraform(struct!.sessionNotOnOrAfterDuration),
    slo_binding: cdktf.stringToTerraform(struct!.sloBinding),
    slo_endpoint: cdktf.stringToTerraform(struct!.sloEndpoint),
    slo_response_endpoint: cdktf.stringToTerraform(struct!.sloResponseEndpoint),
    slo_window: cdktf.numberToTerraform(struct!.sloWindow),
    sp_encryption: applicationSamlOptionsSpEncryptionToTerraform(struct!.spEncryption),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
    sp_verification: applicationSamlOptionsSpVerificationToTerraform(struct!.spVerification),
    type: cdktf.stringToTerraform(struct!.type),
    virtual_server_id_settings: applicationSamlOptionsVirtualServerIdSettingsToTerraform(struct!.virtualServerIdSettings),
  }
}


export function applicationSamlOptionsToHclTerraform(struct?: ApplicationSamlOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acs_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acsUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    assertion_duration: {
      value: cdktf.numberToHclTerraform(struct!.assertionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assertion_signed_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.assertionSignedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cors_settings: {
      value: applicationSamlOptionsCorsSettingsToHclTerraform(struct!.corsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSamlOptionsCorsSettings",
    },
    default_target_url: {
      value: cdktf.stringToHclTerraform(struct!.defaultTargetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_requested_authn_context: {
      value: cdktf.booleanToHclTerraform(struct!.enableRequestedAuthnContext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    home_page_url: {
      value: cdktf.stringToHclTerraform(struct!.homePageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_signing_key: {
      value: applicationSamlOptionsIdpSigningKeyToHclTerraform(struct!.idpSigningKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSamlOptionsIdpSigningKey",
    },
    nameid_format: {
      value: cdktf.stringToHclTerraform(struct!.nameidFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_is_signed: {
      value: cdktf.booleanToHclTerraform(struct!.responseIsSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_not_on_or_after_duration: {
      value: cdktf.numberToHclTerraform(struct!.sessionNotOnOrAfterDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slo_binding: {
      value: cdktf.stringToHclTerraform(struct!.sloBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.sloEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_response_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.sloResponseEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_window: {
      value: cdktf.numberToHclTerraform(struct!.sloWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_encryption: {
      value: applicationSamlOptionsSpEncryptionToHclTerraform(struct!.spEncryption),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSamlOptionsSpEncryption",
    },
    sp_entity_id: {
      value: cdktf.stringToHclTerraform(struct!.spEntityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_verification: {
      value: applicationSamlOptionsSpVerificationToHclTerraform(struct!.spVerification),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSamlOptionsSpVerification",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_server_id_settings: {
      value: applicationSamlOptionsVirtualServerIdSettingsToHclTerraform(struct!.virtualServerIdSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationSamlOptionsVirtualServerIdSettings",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationSamlOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acsUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsUrls = this._acsUrls;
    }
    if (this._assertionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionDuration = this._assertionDuration;
    }
    if (this._assertionSignedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionSignedEnabled = this._assertionSignedEnabled;
    }
    if (this._corsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsSettings = this._corsSettings?.internalValue;
    }
    if (this._defaultTargetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetUrl = this._defaultTargetUrl;
    }
    if (this._enableRequestedAuthnContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRequestedAuthnContext = this._enableRequestedAuthnContext;
    }
    if (this._homePageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.homePageUrl = this._homePageUrl;
    }
    if (this._idpSigningKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSigningKey = this._idpSigningKey?.internalValue;
    }
    if (this._nameidFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameidFormat = this._nameidFormat;
    }
    if (this._responseIsSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseIsSigned = this._responseIsSigned;
    }
    if (this._sessionNotOnOrAfterDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionNotOnOrAfterDuration = this._sessionNotOnOrAfterDuration;
    }
    if (this._sloBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloBinding = this._sloBinding;
    }
    if (this._sloEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloEndpoint = this._sloEndpoint;
    }
    if (this._sloResponseEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloResponseEndpoint = this._sloResponseEndpoint;
    }
    if (this._sloWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloWindow = this._sloWindow;
    }
    if (this._spEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEncryption = this._spEncryption?.internalValue;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    if (this._spVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spVerification = this._spVerification?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._virtualServerIdSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServerIdSettings = this._virtualServerIdSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acsUrls = undefined;
      this._assertionDuration = undefined;
      this._assertionSignedEnabled = undefined;
      this._corsSettings.internalValue = undefined;
      this._defaultTargetUrl = undefined;
      this._enableRequestedAuthnContext = undefined;
      this._homePageUrl = undefined;
      this._idpSigningKey.internalValue = undefined;
      this._nameidFormat = undefined;
      this._responseIsSigned = undefined;
      this._sessionNotOnOrAfterDuration = undefined;
      this._sloBinding = undefined;
      this._sloEndpoint = undefined;
      this._sloResponseEndpoint = undefined;
      this._sloWindow = undefined;
      this._spEncryption.internalValue = undefined;
      this._spEntityId = undefined;
      this._spVerification.internalValue = undefined;
      this._type = undefined;
      this._virtualServerIdSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acsUrls = value.acsUrls;
      this._assertionDuration = value.assertionDuration;
      this._assertionSignedEnabled = value.assertionSignedEnabled;
      this._corsSettings.internalValue = value.corsSettings;
      this._defaultTargetUrl = value.defaultTargetUrl;
      this._enableRequestedAuthnContext = value.enableRequestedAuthnContext;
      this._homePageUrl = value.homePageUrl;
      this._idpSigningKey.internalValue = value.idpSigningKey;
      this._nameidFormat = value.nameidFormat;
      this._responseIsSigned = value.responseIsSigned;
      this._sessionNotOnOrAfterDuration = value.sessionNotOnOrAfterDuration;
      this._sloBinding = value.sloBinding;
      this._sloEndpoint = value.sloEndpoint;
      this._sloResponseEndpoint = value.sloResponseEndpoint;
      this._sloWindow = value.sloWindow;
      this._spEncryption.internalValue = value.spEncryption;
      this._spEntityId = value.spEntityId;
      this._spVerification.internalValue = value.spVerification;
      this._type = value.type;
      this._virtualServerIdSettings.internalValue = value.virtualServerIdSettings;
    }
  }

  // acs_urls - computed: false, optional: false, required: true
  private _acsUrls?: string[]; 
  public get acsUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('acs_urls'));
  }
  public set acsUrls(value: string[]) {
    this._acsUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acsUrlsInput() {
    return this._acsUrls;
  }

  // assertion_duration - computed: false, optional: false, required: true
  private _assertionDuration?: number; 
  public get assertionDuration() {
    return this.getNumberAttribute('assertion_duration');
  }
  public set assertionDuration(value: number) {
    this._assertionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionDurationInput() {
    return this._assertionDuration;
  }

  // assertion_signed_enabled - computed: true, optional: true, required: false
  private _assertionSignedEnabled?: boolean | cdktf.IResolvable; 
  public get assertionSignedEnabled() {
    return this.getBooleanAttribute('assertion_signed_enabled');
  }
  public set assertionSignedEnabled(value: boolean | cdktf.IResolvable) {
    this._assertionSignedEnabled = value;
  }
  public resetAssertionSignedEnabled() {
    this._assertionSignedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionSignedEnabledInput() {
    return this._assertionSignedEnabled;
  }

  // cors_settings - computed: false, optional: true, required: false
  private _corsSettings = new ApplicationSamlOptionsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }
  public putCorsSettings(value: ApplicationSamlOptionsCorsSettings) {
    this._corsSettings.internalValue = value;
  }
  public resetCorsSettings() {
    this._corsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsSettingsInput() {
    return this._corsSettings.internalValue;
  }

  // default_target_url - computed: false, optional: true, required: false
  private _defaultTargetUrl?: string; 
  public get defaultTargetUrl() {
    return this.getStringAttribute('default_target_url');
  }
  public set defaultTargetUrl(value: string) {
    this._defaultTargetUrl = value;
  }
  public resetDefaultTargetUrl() {
    this._defaultTargetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetUrlInput() {
    return this._defaultTargetUrl;
  }

  // enable_requested_authn_context - computed: false, optional: true, required: false
  private _enableRequestedAuthnContext?: boolean | cdktf.IResolvable; 
  public get enableRequestedAuthnContext() {
    return this.getBooleanAttribute('enable_requested_authn_context');
  }
  public set enableRequestedAuthnContext(value: boolean | cdktf.IResolvable) {
    this._enableRequestedAuthnContext = value;
  }
  public resetEnableRequestedAuthnContext() {
    this._enableRequestedAuthnContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRequestedAuthnContextInput() {
    return this._enableRequestedAuthnContext;
  }

  // home_page_url - computed: false, optional: true, required: false
  private _homePageUrl?: string; 
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }
  public set homePageUrl(value: string) {
    this._homePageUrl = value;
  }
  public resetHomePageUrl() {
    this._homePageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePageUrlInput() {
    return this._homePageUrl;
  }

  // idp_signing_key - computed: false, optional: false, required: true
  private _idpSigningKey = new ApplicationSamlOptionsIdpSigningKeyOutputReference(this, "idp_signing_key");
  public get idpSigningKey() {
    return this._idpSigningKey;
  }
  public putIdpSigningKey(value: ApplicationSamlOptionsIdpSigningKey) {
    this._idpSigningKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSigningKeyInput() {
    return this._idpSigningKey.internalValue;
  }

  // nameid_format - computed: false, optional: true, required: false
  private _nameidFormat?: string; 
  public get nameidFormat() {
    return this.getStringAttribute('nameid_format');
  }
  public set nameidFormat(value: string) {
    this._nameidFormat = value;
  }
  public resetNameidFormat() {
    this._nameidFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameidFormatInput() {
    return this._nameidFormat;
  }

  // response_is_signed - computed: true, optional: true, required: false
  private _responseIsSigned?: boolean | cdktf.IResolvable; 
  public get responseIsSigned() {
    return this.getBooleanAttribute('response_is_signed');
  }
  public set responseIsSigned(value: boolean | cdktf.IResolvable) {
    this._responseIsSigned = value;
  }
  public resetResponseIsSigned() {
    this._responseIsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseIsSignedInput() {
    return this._responseIsSigned;
  }

  // session_not_on_or_after_duration - computed: false, optional: true, required: false
  private _sessionNotOnOrAfterDuration?: number; 
  public get sessionNotOnOrAfterDuration() {
    return this.getNumberAttribute('session_not_on_or_after_duration');
  }
  public set sessionNotOnOrAfterDuration(value: number) {
    this._sessionNotOnOrAfterDuration = value;
  }
  public resetSessionNotOnOrAfterDuration() {
    this._sessionNotOnOrAfterDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNotOnOrAfterDurationInput() {
    return this._sessionNotOnOrAfterDuration;
  }

  // slo_binding - computed: true, optional: true, required: false
  private _sloBinding?: string; 
  public get sloBinding() {
    return this.getStringAttribute('slo_binding');
  }
  public set sloBinding(value: string) {
    this._sloBinding = value;
  }
  public resetSloBinding() {
    this._sloBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloBindingInput() {
    return this._sloBinding;
  }

  // slo_endpoint - computed: false, optional: true, required: false
  private _sloEndpoint?: string; 
  public get sloEndpoint() {
    return this.getStringAttribute('slo_endpoint');
  }
  public set sloEndpoint(value: string) {
    this._sloEndpoint = value;
  }
  public resetSloEndpoint() {
    this._sloEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloEndpointInput() {
    return this._sloEndpoint;
  }

  // slo_response_endpoint - computed: false, optional: true, required: false
  private _sloResponseEndpoint?: string; 
  public get sloResponseEndpoint() {
    return this.getStringAttribute('slo_response_endpoint');
  }
  public set sloResponseEndpoint(value: string) {
    this._sloResponseEndpoint = value;
  }
  public resetSloResponseEndpoint() {
    this._sloResponseEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloResponseEndpointInput() {
    return this._sloResponseEndpoint;
  }

  // slo_window - computed: false, optional: true, required: false
  private _sloWindow?: number; 
  public get sloWindow() {
    return this.getNumberAttribute('slo_window');
  }
  public set sloWindow(value: number) {
    this._sloWindow = value;
  }
  public resetSloWindow() {
    this._sloWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloWindowInput() {
    return this._sloWindow;
  }

  // sp_encryption - computed: false, optional: true, required: false
  private _spEncryption = new ApplicationSamlOptionsSpEncryptionOutputReference(this, "sp_encryption");
  public get spEncryption() {
    return this._spEncryption;
  }
  public putSpEncryption(value: ApplicationSamlOptionsSpEncryption) {
    this._spEncryption.internalValue = value;
  }
  public resetSpEncryption() {
    this._spEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spEncryptionInput() {
    return this._spEncryption.internalValue;
  }

  // sp_entity_id - computed: false, optional: false, required: true
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }

  // sp_verification - computed: false, optional: true, required: false
  private _spVerification = new ApplicationSamlOptionsSpVerificationOutputReference(this, "sp_verification");
  public get spVerification() {
    return this._spVerification;
  }
  public putSpVerification(value: ApplicationSamlOptionsSpVerification) {
    this._spVerification.internalValue = value;
  }
  public resetSpVerification() {
    this._spVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spVerificationInput() {
    return this._spVerification.internalValue;
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

  // virtual_server_id_settings - computed: false, optional: true, required: false
  private _virtualServerIdSettings = new ApplicationSamlOptionsVirtualServerIdSettingsOutputReference(this, "virtual_server_id_settings");
  public get virtualServerIdSettings() {
    return this._virtualServerIdSettings;
  }
  public putVirtualServerIdSettings(value: ApplicationSamlOptionsVirtualServerIdSettings) {
    this._virtualServerIdSettings.internalValue = value;
  }
  public resetVirtualServerIdSettings() {
    this._virtualServerIdSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerIdSettingsInput() {
    return this._virtualServerIdSettings.internalValue;
  }
}
export interface ApplicationWsfedOptionsCorsSettings {
  /**
  * A string that specifies the behavior of how Authorization and Authentication APIs interact with CORS requests that reference the application.  Options are `ALLOW_NO_ORIGINS` (rejects all CORS requests), `ALLOW_SPECIFIC_ORIGINS` (rejects all CORS requests except those listed in `origins`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#behavior Application#behavior}
  */
  readonly behavior: string;
  /**
  * A set of strings that represent the origins from which CORS requests to the Authorization and Authentication APIs are allowed.  Each value must be a `http` or `https` URL without a path.  The host may be a domain name (including `localhost`), or an IPv4 address.  Subdomains may use the wildcard (`*`) to match any string.  Must be non-empty when `behavior` is `ALLOW_SPECIFIC_ORIGINS` and must be omitted or empty when `behavior` is `ALLOW_NO_ORIGINS`.  Limited to 20 values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#origins Application#origins}
  */
  readonly origins?: string[];
}

export function applicationWsfedOptionsCorsSettingsToTerraform(struct?: ApplicationWsfedOptionsCorsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origins),
  }
}


export function applicationWsfedOptionsCorsSettingsToHclTerraform(struct?: ApplicationWsfedOptionsCorsSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationWsfedOptionsCorsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationWsfedOptionsCorsSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._origins !== undefined) {
      hasAnyValues = true;
      internalValueResult.origins = this._origins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWsfedOptionsCorsSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._origins = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._origins = value.origins;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // origins - computed: false, optional: true, required: false
  private _origins?: string[]; 
  public get origins() {
    return cdktf.Fn.tolist(this.getListAttribute('origins'));
  }
  public set origins(value: string[]) {
    this._origins = value;
  }
  public resetOrigins() {
    this._origins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originsInput() {
    return this._origins;
  }
}
export interface ApplicationWsfedOptionsIdpSigningKey {
  /**
  * Specifies the signature algorithm of the key. For RSA keys, options are `SHA256withRSA`, `SHA384withRSA` and `SHA512withRSA`. For elliptical curve (EC) keys, options are `SHA256withECDSA`, `SHA384withECDSA` and `SHA512withECDSA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#algorithm Application#algorithm}
  */
  readonly algorithm: string;
  /**
  * An ID for the certificate key pair to be used by the identity provider to sign assertions and responses.  Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#key_id Application#key_id}
  */
  readonly keyId: string;
}

export function applicationWsfedOptionsIdpSigningKeyToTerraform(struct?: ApplicationWsfedOptionsIdpSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function applicationWsfedOptionsIdpSigningKeyToHclTerraform(struct?: ApplicationWsfedOptionsIdpSigningKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationWsfedOptionsIdpSigningKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationWsfedOptionsIdpSigningKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWsfedOptionsIdpSigningKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm = value.algorithm;
      this._keyId = value.keyId;
    }
  }

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ApplicationWsfedOptionsKerberosGatewaysUserType {
  /**
  * The UUID of a user type in the list of `userTypes` for the LDAP gateway. Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function applicationWsfedOptionsKerberosGatewaysUserTypeToTerraform(struct?: ApplicationWsfedOptionsKerberosGatewaysUserType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function applicationWsfedOptionsKerberosGatewaysUserTypeToHclTerraform(struct?: ApplicationWsfedOptionsKerberosGatewaysUserType | cdktf.IResolvable): any {
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

export class ApplicationWsfedOptionsKerberosGatewaysUserTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationWsfedOptionsKerberosGatewaysUserType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationWsfedOptionsKerberosGatewaysUserType | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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
}
export interface ApplicationWsfedOptionsKerberosGateways {
  /**
  * The UUID of the LDAP gateway. Must be a valid PingOne resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The gateway type. This must be "LDAP".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#type Application#type}
  */
  readonly type?: string;
  /**
  * The object reference to the user type in the list of "userTypes" for the LDAP gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#user_type Application#user_type}
  */
  readonly userType: ApplicationWsfedOptionsKerberosGatewaysUserType;
}

export function applicationWsfedOptionsKerberosGatewaysToTerraform(struct?: ApplicationWsfedOptionsKerberosGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
    user_type: applicationWsfedOptionsKerberosGatewaysUserTypeToTerraform(struct!.userType),
  }
}


export function applicationWsfedOptionsKerberosGatewaysToHclTerraform(struct?: ApplicationWsfedOptionsKerberosGateways | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_type: {
      value: applicationWsfedOptionsKerberosGatewaysUserTypeToHclTerraform(struct!.userType),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationWsfedOptionsKerberosGatewaysUserType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationWsfedOptionsKerberosGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationWsfedOptionsKerberosGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userType = this._userType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWsfedOptionsKerberosGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
      this._userType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
      this._userType.internalValue = value.userType;
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

  // user_type - computed: false, optional: false, required: true
  private _userType = new ApplicationWsfedOptionsKerberosGatewaysUserTypeOutputReference(this, "user_type");
  public get userType() {
    return this._userType;
  }
  public putUserType(value: ApplicationWsfedOptionsKerberosGatewaysUserType) {
    this._userType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType.internalValue;
  }
}

export class ApplicationWsfedOptionsKerberosGatewaysList extends cdktf.ComplexList {
  public internalValue? : ApplicationWsfedOptionsKerberosGateways[] | cdktf.IResolvable

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
  public get(index: number): ApplicationWsfedOptionsKerberosGatewaysOutputReference {
    return new ApplicationWsfedOptionsKerberosGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationWsfedOptionsKerberos {
  /**
  * The LDAP gateway properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#gateways Application#gateways}
  */
  readonly gateways?: ApplicationWsfedOptionsKerberosGateways[] | cdktf.IResolvable;
}

export function applicationWsfedOptionsKerberosToTerraform(struct?: ApplicationWsfedOptionsKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateways: cdktf.listMapper(applicationWsfedOptionsKerberosGatewaysToTerraform, false)(struct!.gateways),
  }
}


export function applicationWsfedOptionsKerberosToHclTerraform(struct?: ApplicationWsfedOptionsKerberos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateways: {
      value: cdktf.listMapperHcl(applicationWsfedOptionsKerberosGatewaysToHclTerraform, false)(struct!.gateways),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationWsfedOptionsKerberosGatewaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationWsfedOptionsKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationWsfedOptionsKerberos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWsfedOptionsKerberos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateways.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateways.internalValue = value.gateways;
    }
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways = new ApplicationWsfedOptionsKerberosGatewaysList(this, "gateways", true);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: ApplicationWsfedOptionsKerberosGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }
}
export interface ApplicationWsfedOptions {
  /**
  * The service provider ID. The default value is `urn:federation:MicrosoftOnline`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#audience_restriction Application#audience_restriction}
  */
  readonly audienceRestriction?: string;
  /**
  * A single object that allows customization of how the Authorization and Authentication APIs interact with CORS requests that reference the application. If omitted, the application allows CORS requests from any origin except for operations that expose sensitive information (e.g. `/as/authorize` and `/as/token`).  This is legacy behavior, and it is recommended that applications migrate to include specific CORS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#cors_settings Application#cors_settings}
  */
  readonly corsSettings?: ApplicationWsfedOptionsCorsSettings;
  /**
  * The federated domain name (for example, the Azure custom domain).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#domain_name Application#domain_name}
  */
  readonly domainName: string;
  /**
  * Contains the information about the signing of requests by the identity provider (IdP).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#idp_signing_key Application#idp_signing_key}
  */
  readonly idpSigningKey: ApplicationWsfedOptionsIdpSigningKey;
  /**
  * The Kerberos authentication settings. Leave this out of the configuration to disable Kerberos authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#kerberos Application#kerberos}
  */
  readonly kerberos?: ApplicationWsfedOptionsKerberos;
  /**
  * The URL that the replying party (such as, Office365) uses to accept submissions of RequestSecurityTokenResponse messages that are a result of SSO requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#reply_url Application#reply_url}
  */
  readonly replyUrl: string;
  /**
  * The single logout endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#slo_endpoint Application#slo_endpoint}
  */
  readonly sloEndpoint?: string;
  /**
  * The format to use for the SubjectNameIdentifier element. Options are `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified`, `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#subject_name_identifier_format Application#subject_name_identifier_format}
  */
  readonly subjectNameIdentifierFormat?: string;
  /**
  * A string that specifies the type associated with the application. This is a required property. Options are `WEB_APP`, `CUSTOM_APP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#type Application#type}
  */
  readonly type: string;
}

export function applicationWsfedOptionsToTerraform(struct?: ApplicationWsfedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience_restriction: cdktf.stringToTerraform(struct!.audienceRestriction),
    cors_settings: applicationWsfedOptionsCorsSettingsToTerraform(struct!.corsSettings),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    idp_signing_key: applicationWsfedOptionsIdpSigningKeyToTerraform(struct!.idpSigningKey),
    kerberos: applicationWsfedOptionsKerberosToTerraform(struct!.kerberos),
    reply_url: cdktf.stringToTerraform(struct!.replyUrl),
    slo_endpoint: cdktf.stringToTerraform(struct!.sloEndpoint),
    subject_name_identifier_format: cdktf.stringToTerraform(struct!.subjectNameIdentifierFormat),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function applicationWsfedOptionsToHclTerraform(struct?: ApplicationWsfedOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience_restriction: {
      value: cdktf.stringToHclTerraform(struct!.audienceRestriction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cors_settings: {
      value: applicationWsfedOptionsCorsSettingsToHclTerraform(struct!.corsSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationWsfedOptionsCorsSettings",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_signing_key: {
      value: applicationWsfedOptionsIdpSigningKeyToHclTerraform(struct!.idpSigningKey),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationWsfedOptionsIdpSigningKey",
    },
    kerberos: {
      value: applicationWsfedOptionsKerberosToHclTerraform(struct!.kerberos),
      isBlock: true,
      type: "struct",
      storageClassType: "ApplicationWsfedOptionsKerberos",
    },
    reply_url: {
      value: cdktf.stringToHclTerraform(struct!.replyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.sloEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name_identifier_format: {
      value: cdktf.stringToHclTerraform(struct!.subjectNameIdentifierFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationWsfedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApplicationWsfedOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audienceRestriction !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceRestriction = this._audienceRestriction;
    }
    if (this._corsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsSettings = this._corsSettings?.internalValue;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._idpSigningKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSigningKey = this._idpSigningKey?.internalValue;
    }
    if (this._kerberos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberos = this._kerberos?.internalValue;
    }
    if (this._replyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyUrl = this._replyUrl;
    }
    if (this._sloEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloEndpoint = this._sloEndpoint;
    }
    if (this._subjectNameIdentifierFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectNameIdentifierFormat = this._subjectNameIdentifierFormat;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationWsfedOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audienceRestriction = undefined;
      this._corsSettings.internalValue = undefined;
      this._domainName = undefined;
      this._idpSigningKey.internalValue = undefined;
      this._kerberos.internalValue = undefined;
      this._replyUrl = undefined;
      this._sloEndpoint = undefined;
      this._subjectNameIdentifierFormat = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audienceRestriction = value.audienceRestriction;
      this._corsSettings.internalValue = value.corsSettings;
      this._domainName = value.domainName;
      this._idpSigningKey.internalValue = value.idpSigningKey;
      this._kerberos.internalValue = value.kerberos;
      this._replyUrl = value.replyUrl;
      this._sloEndpoint = value.sloEndpoint;
      this._subjectNameIdentifierFormat = value.subjectNameIdentifierFormat;
      this._type = value.type;
    }
  }

  // audience_restriction - computed: true, optional: true, required: false
  private _audienceRestriction?: string; 
  public get audienceRestriction() {
    return this.getStringAttribute('audience_restriction');
  }
  public set audienceRestriction(value: string) {
    this._audienceRestriction = value;
  }
  public resetAudienceRestriction() {
    this._audienceRestriction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceRestrictionInput() {
    return this._audienceRestriction;
  }

  // cors_settings - computed: false, optional: true, required: false
  private _corsSettings = new ApplicationWsfedOptionsCorsSettingsOutputReference(this, "cors_settings");
  public get corsSettings() {
    return this._corsSettings;
  }
  public putCorsSettings(value: ApplicationWsfedOptionsCorsSettings) {
    this._corsSettings.internalValue = value;
  }
  public resetCorsSettings() {
    this._corsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsSettingsInput() {
    return this._corsSettings.internalValue;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // idp_signing_key - computed: false, optional: false, required: true
  private _idpSigningKey = new ApplicationWsfedOptionsIdpSigningKeyOutputReference(this, "idp_signing_key");
  public get idpSigningKey() {
    return this._idpSigningKey;
  }
  public putIdpSigningKey(value: ApplicationWsfedOptionsIdpSigningKey) {
    this._idpSigningKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSigningKeyInput() {
    return this._idpSigningKey.internalValue;
  }

  // kerberos - computed: false, optional: true, required: false
  private _kerberos = new ApplicationWsfedOptionsKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }
  public putKerberos(value: ApplicationWsfedOptionsKerberos) {
    this._kerberos.internalValue = value;
  }
  public resetKerberos() {
    this._kerberos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosInput() {
    return this._kerberos.internalValue;
  }

  // reply_url - computed: false, optional: false, required: true
  private _replyUrl?: string; 
  public get replyUrl() {
    return this.getStringAttribute('reply_url');
  }
  public set replyUrl(value: string) {
    this._replyUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replyUrlInput() {
    return this._replyUrl;
  }

  // slo_endpoint - computed: false, optional: true, required: false
  private _sloEndpoint?: string; 
  public get sloEndpoint() {
    return this.getStringAttribute('slo_endpoint');
  }
  public set sloEndpoint(value: string) {
    this._sloEndpoint = value;
  }
  public resetSloEndpoint() {
    this._sloEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloEndpointInput() {
    return this._sloEndpoint;
  }

  // subject_name_identifier_format - computed: false, optional: true, required: false
  private _subjectNameIdentifierFormat?: string; 
  public get subjectNameIdentifierFormat() {
    return this.getStringAttribute('subject_name_identifier_format');
  }
  public set subjectNameIdentifierFormat(value: string) {
    this._subjectNameIdentifierFormat = value;
  }
  public resetSubjectNameIdentifierFormat() {
    this._subjectNameIdentifierFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameIdentifierFormatInput() {
    return this._subjectNameIdentifierFormat;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application pingone_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/application pingone_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_application',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
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
    this._accessControlGroupOptions.internalValue = config.accessControlGroupOptions;
    this._accessControlRoleType = config.accessControlRoleType;
    this._description = config.description;
    this._enabled = config.enabled;
    this._environmentId = config.environmentId;
    this._externalLinkOptions.internalValue = config.externalLinkOptions;
    this._hiddenFromAppPortal = config.hiddenFromAppPortal;
    this._icon.internalValue = config.icon;
    this._loginPageUrl = config.loginPageUrl;
    this._name = config.name;
    this._oidcOptions.internalValue = config.oidcOptions;
    this._samlOptions.internalValue = config.samlOptions;
    this._tags = config.tags;
    this._wsfedOptions.internalValue = config.wsfedOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_group_options - computed: false, optional: true, required: false
  private _accessControlGroupOptions = new ApplicationAccessControlGroupOptionsOutputReference(this, "access_control_group_options");
  public get accessControlGroupOptions() {
    return this._accessControlGroupOptions;
  }
  public putAccessControlGroupOptions(value: ApplicationAccessControlGroupOptions) {
    this._accessControlGroupOptions.internalValue = value;
  }
  public resetAccessControlGroupOptions() {
    this._accessControlGroupOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlGroupOptionsInput() {
    return this._accessControlGroupOptions.internalValue;
  }

  // access_control_role_type - computed: true, optional: true, required: false
  private _accessControlRoleType?: string; 
  public get accessControlRoleType() {
    return this.getStringAttribute('access_control_role_type');
  }
  public set accessControlRoleType(value: string) {
    this._accessControlRoleType = value;
  }
  public resetAccessControlRoleType() {
    this._accessControlRoleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlRoleTypeInput() {
    return this._accessControlRoleType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // external_link_options - computed: false, optional: true, required: false
  private _externalLinkOptions = new ApplicationExternalLinkOptionsOutputReference(this, "external_link_options");
  public get externalLinkOptions() {
    return this._externalLinkOptions;
  }
  public putExternalLinkOptions(value: ApplicationExternalLinkOptions) {
    this._externalLinkOptions.internalValue = value;
  }
  public resetExternalLinkOptions() {
    this._externalLinkOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLinkOptionsInput() {
    return this._externalLinkOptions.internalValue;
  }

  // hidden_from_app_portal - computed: true, optional: true, required: false
  private _hiddenFromAppPortal?: boolean | cdktf.IResolvable; 
  public get hiddenFromAppPortal() {
    return this.getBooleanAttribute('hidden_from_app_portal');
  }
  public set hiddenFromAppPortal(value: boolean | cdktf.IResolvable) {
    this._hiddenFromAppPortal = value;
  }
  public resetHiddenFromAppPortal() {
    this._hiddenFromAppPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenFromAppPortalInput() {
    return this._hiddenFromAppPortal;
  }

  // icon - computed: false, optional: true, required: false
  private _icon = new ApplicationIconOutputReference(this, "icon");
  public get icon() {
    return this._icon;
  }
  public putIcon(value: ApplicationIcon) {
    this._icon.internalValue = value;
  }
  public resetIcon() {
    this._icon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_page_url - computed: false, optional: true, required: false
  private _loginPageUrl?: string; 
  public get loginPageUrl() {
    return this.getStringAttribute('login_page_url');
  }
  public set loginPageUrl(value: string) {
    this._loginPageUrl = value;
  }
  public resetLoginPageUrl() {
    this._loginPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPageUrlInput() {
    return this._loginPageUrl;
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

  // oidc_options - computed: false, optional: true, required: false
  private _oidcOptions = new ApplicationOidcOptionsOutputReference(this, "oidc_options");
  public get oidcOptions() {
    return this._oidcOptions;
  }
  public putOidcOptions(value: ApplicationOidcOptions) {
    this._oidcOptions.internalValue = value;
  }
  public resetOidcOptions() {
    this._oidcOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcOptionsInput() {
    return this._oidcOptions.internalValue;
  }

  // saml_options - computed: false, optional: true, required: false
  private _samlOptions = new ApplicationSamlOptionsOutputReference(this, "saml_options");
  public get samlOptions() {
    return this._samlOptions;
  }
  public putSamlOptions(value: ApplicationSamlOptions) {
    this._samlOptions.internalValue = value;
  }
  public resetSamlOptions() {
    this._samlOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlOptionsInput() {
    return this._samlOptions.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // wsfed_options - computed: false, optional: true, required: false
  private _wsfedOptions = new ApplicationWsfedOptionsOutputReference(this, "wsfed_options");
  public get wsfedOptions() {
    return this._wsfedOptions;
  }
  public putWsfedOptions(value: ApplicationWsfedOptions) {
    this._wsfedOptions.internalValue = value;
  }
  public resetWsfedOptions() {
    this._wsfedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsfedOptionsInput() {
    return this._wsfedOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_group_options: applicationAccessControlGroupOptionsToTerraform(this._accessControlGroupOptions.internalValue),
      access_control_role_type: cdktf.stringToTerraform(this._accessControlRoleType),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      external_link_options: applicationExternalLinkOptionsToTerraform(this._externalLinkOptions.internalValue),
      hidden_from_app_portal: cdktf.booleanToTerraform(this._hiddenFromAppPortal),
      icon: applicationIconToTerraform(this._icon.internalValue),
      login_page_url: cdktf.stringToTerraform(this._loginPageUrl),
      name: cdktf.stringToTerraform(this._name),
      oidc_options: applicationOidcOptionsToTerraform(this._oidcOptions.internalValue),
      saml_options: applicationSamlOptionsToTerraform(this._samlOptions.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      wsfed_options: applicationWsfedOptionsToTerraform(this._wsfedOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_group_options: {
        value: applicationAccessControlGroupOptionsToHclTerraform(this._accessControlGroupOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationAccessControlGroupOptions",
      },
      access_control_role_type: {
        value: cdktf.stringToHclTerraform(this._accessControlRoleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_link_options: {
        value: applicationExternalLinkOptionsToHclTerraform(this._externalLinkOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationExternalLinkOptions",
      },
      hidden_from_app_portal: {
        value: cdktf.booleanToHclTerraform(this._hiddenFromAppPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon: {
        value: applicationIconToHclTerraform(this._icon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationIcon",
      },
      login_page_url: {
        value: cdktf.stringToHclTerraform(this._loginPageUrl),
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
      oidc_options: {
        value: applicationOidcOptionsToHclTerraform(this._oidcOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationOidcOptions",
      },
      saml_options: {
        value: applicationSamlOptionsToHclTerraform(this._samlOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationSamlOptions",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wsfed_options: {
        value: applicationWsfedOptionsToHclTerraform(this._wsfedOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApplicationWsfedOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
