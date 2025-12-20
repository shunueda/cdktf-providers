// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#app_service_id AppEndpoint#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#bucket AppEndpoint#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#cluster_id AppEndpoint#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#cors AppEndpoint#cors}
  */
  readonly cors?: AppEndpointCors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#delta_sync_enabled AppEndpoint#delta_sync_enabled}
  */
  readonly deltaSyncEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#name AppEndpoint#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#oidc AppEndpoint#oidc}
  */
  readonly oidc?: AppEndpointOidc[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#organization_id AppEndpoint#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#project_id AppEndpoint#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#scopes AppEndpoint#scopes}
  */
  readonly scopes?: { [key: string]: AppEndpointScopes } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#user_xattr_key AppEndpoint#user_xattr_key}
  */
  readonly userXattrKey?: string;
}
export interface AppEndpointCors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#disabled AppEndpoint#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#headers AppEndpoint#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#login_origin AppEndpoint#login_origin}
  */
  readonly loginOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#max_age AppEndpoint#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#origin AppEndpoint#origin}
  */
  readonly origin?: string[];
}

export function appEndpointCorsToTerraform(struct?: AppEndpointCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    login_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.loginOrigin),
    max_age: cdktf.numberToTerraform(struct!.maxAge),
    origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.origin),
  }
}


export function appEndpointCorsToHclTerraform(struct?: AppEndpointCors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    login_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.loginOrigin),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    max_age: {
      value: cdktf.numberToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.origin),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppEndpointCorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AppEndpointCors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._loginOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginOrigin = this._loginOrigin;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEndpointCors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._headers = undefined;
      this._loginOrigin = undefined;
      this._maxAge = undefined;
      this._origin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._headers = value.headers;
      this._loginOrigin = value.loginOrigin;
      this._maxAge = value.maxAge;
      this._origin = value.origin;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // login_origin - computed: false, optional: true, required: false
  private _loginOrigin?: string[]; 
  public get loginOrigin() {
    return cdktf.Fn.tolist(this.getListAttribute('login_origin'));
  }
  public set loginOrigin(value: string[]) {
    this._loginOrigin = value;
  }
  public resetLoginOrigin() {
    this._loginOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginOriginInput() {
    return this._loginOrigin;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string[]; 
  public get origin() {
    return cdktf.Fn.tolist(this.getListAttribute('origin'));
  }
  public set origin(value: string[]) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }
}
export interface AppEndpointOidc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#client_id AppEndpoint#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#discovery_url AppEndpoint#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#issuer AppEndpoint#issuer}
  */
  readonly issuer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#register AppEndpoint#register}
  */
  readonly register?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#roles_claim AppEndpoint#roles_claim}
  */
  readonly rolesClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#user_prefix AppEndpoint#user_prefix}
  */
  readonly userPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#username_claim AppEndpoint#username_claim}
  */
  readonly usernameClaim?: string;
}

export function appEndpointOidcToTerraform(struct?: AppEndpointOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    discovery_url: cdktf.stringToTerraform(struct!.discoveryUrl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    register: cdktf.booleanToTerraform(struct!.register),
    roles_claim: cdktf.stringToTerraform(struct!.rolesClaim),
    user_prefix: cdktf.stringToTerraform(struct!.userPrefix),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function appEndpointOidcToHclTerraform(struct?: AppEndpointOidc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register: {
      value: cdktf.booleanToHclTerraform(struct!.register),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    roles_claim: {
      value: cdktf.stringToHclTerraform(struct!.rolesClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_prefix: {
      value: cdktf.stringToHclTerraform(struct!.userPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppEndpointOidcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppEndpointOidc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._register !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register;
    }
    if (this._rolesClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolesClaim = this._rolesClaim;
    }
    if (this._userPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPrefix = this._userPrefix;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEndpointOidc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._discoveryUrl = undefined;
      this._issuer = undefined;
      this._register = undefined;
      this._rolesClaim = undefined;
      this._userPrefix = undefined;
      this._usernameClaim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._discoveryUrl = value.discoveryUrl;
      this._issuer = value.issuer;
      this._register = value.register;
      this._rolesClaim = value.rolesClaim;
      this._userPrefix = value.userPrefix;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // discovery_url - computed: true, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }

  // register - computed: true, optional: true, required: false
  private _register?: boolean | cdktf.IResolvable; 
  public get register() {
    return this.getBooleanAttribute('register');
  }
  public set register(value: boolean | cdktf.IResolvable) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // roles_claim - computed: true, optional: true, required: false
  private _rolesClaim?: string; 
  public get rolesClaim() {
    return this.getStringAttribute('roles_claim');
  }
  public set rolesClaim(value: string) {
    this._rolesClaim = value;
  }
  public resetRolesClaim() {
    this._rolesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesClaimInput() {
    return this._rolesClaim;
  }

  // user_prefix - computed: true, optional: true, required: false
  private _userPrefix?: string; 
  public get userPrefix() {
    return this.getStringAttribute('user_prefix');
  }
  public set userPrefix(value: string) {
    this._userPrefix = value;
  }
  public resetUserPrefix() {
    this._userPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPrefixInput() {
    return this._userPrefix;
  }

  // username_claim - computed: true, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}

export class AppEndpointOidcList extends cdktf.ComplexList {
  public internalValue? : AppEndpointOidc[] | cdktf.IResolvable

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
  public get(index: number): AppEndpointOidcOutputReference {
    return new AppEndpointOidcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppEndpointRequireResync {
}

export function appEndpointRequireResyncToTerraform(struct?: AppEndpointRequireResync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appEndpointRequireResyncToHclTerraform(struct?: AppEndpointRequireResync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppEndpointRequireResyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppEndpointRequireResync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEndpointRequireResync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    return cdktf.Fn.tolist(this.getListAttribute('items'));
  }
}

export class AppEndpointRequireResyncMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): AppEndpointRequireResyncOutputReference {
    return new AppEndpointRequireResyncOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AppEndpointScopesCollections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#access_control_function AppEndpoint#access_control_function}
  */
  readonly accessControlFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#import_filter AppEndpoint#import_filter}
  */
  readonly importFilter?: string;
}

export function appEndpointScopesCollectionsToTerraform(struct?: AppEndpointScopesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_control_function: cdktf.stringToTerraform(struct!.accessControlFunction),
    import_filter: cdktf.stringToTerraform(struct!.importFilter),
  }
}


export function appEndpointScopesCollectionsToHclTerraform(struct?: AppEndpointScopesCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_control_function: {
      value: cdktf.stringToHclTerraform(struct!.accessControlFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_filter: {
      value: cdktf.stringToHclTerraform(struct!.importFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppEndpointScopesCollectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppEndpointScopesCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessControlFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessControlFunction = this._accessControlFunction;
    }
    if (this._importFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.importFilter = this._importFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEndpointScopesCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessControlFunction = undefined;
      this._importFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessControlFunction = value.accessControlFunction;
      this._importFilter = value.importFilter;
    }
  }

  // access_control_function - computed: true, optional: true, required: false
  private _accessControlFunction?: string; 
  public get accessControlFunction() {
    return this.getStringAttribute('access_control_function');
  }
  public set accessControlFunction(value: string) {
    this._accessControlFunction = value;
  }
  public resetAccessControlFunction() {
    this._accessControlFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlFunctionInput() {
    return this._accessControlFunction;
  }

  // import_filter - computed: true, optional: true, required: false
  private _importFilter?: string; 
  public get importFilter() {
    return this.getStringAttribute('import_filter');
  }
  public set importFilter(value: string) {
    this._importFilter = value;
  }
  public resetImportFilter() {
    this._importFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importFilterInput() {
    return this._importFilter;
  }
}

export class AppEndpointScopesCollectionsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AppEndpointScopesCollections } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): AppEndpointScopesCollectionsOutputReference {
    return new AppEndpointScopesCollectionsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface AppEndpointScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#collections AppEndpoint#collections}
  */
  readonly collections?: { [key: string]: AppEndpointScopesCollections } | cdktf.IResolvable;
}

export function appEndpointScopesToTerraform(struct?: AppEndpointScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collections: cdktf.hashMapper(appEndpointScopesCollectionsToTerraform)(struct!.collections),
  }
}


export function appEndpointScopesToHclTerraform(struct?: AppEndpointScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collections: {
      value: cdktf.hashMapperHcl(appEndpointScopesCollectionsToHclTerraform)(struct!.collections),
      isBlock: true,
      type: "map",
      storageClassType: "AppEndpointScopesCollectionsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppEndpointScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): AppEndpointScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppEndpointScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collections.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collections.internalValue = value.collections;
    }
  }

  // collections - computed: false, optional: true, required: false
  private _collections = new AppEndpointScopesCollectionsMap(this, "collections");
  public get collections() {
    return this._collections;
  }
  public putCollections(value: { [key: string]: AppEndpointScopesCollections } | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }
}

export class AppEndpointScopesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: AppEndpointScopes } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): AppEndpointScopesOutputReference {
    return new AppEndpointScopesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint couchbase-capella_app_endpoint}
*/
export class AppEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_app_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppEndpoint to import
  * @param importFromId The id of the existing AppEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_app_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint couchbase-capella_app_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: AppEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_app_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appServiceId = config.appServiceId;
    this._bucket = config.bucket;
    this._clusterId = config.clusterId;
    this._cors.internalValue = config.cors;
    this._deltaSyncEnabled = config.deltaSyncEnabled;
    this._name = config.name;
    this._oidc.internalValue = config.oidc;
    this._organizationId = config.organizationId;
    this._projectId = config.projectId;
    this._scopes.internalValue = config.scopes;
    this._userXattrKey = config.userXattrKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_url - computed: true, optional: false, required: false
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId?: string; 
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cors - computed: false, optional: true, required: false
  private _cors = new AppEndpointCorsOutputReference(this, "cors");
  public get cors() {
    return this._cors;
  }
  public putCors(value: AppEndpointCors) {
    this._cors.internalValue = value;
  }
  public resetCors() {
    this._cors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors.internalValue;
  }

  // delta_sync_enabled - computed: true, optional: true, required: false
  private _deltaSyncEnabled?: boolean | cdktf.IResolvable; 
  public get deltaSyncEnabled() {
    return this.getBooleanAttribute('delta_sync_enabled');
  }
  public set deltaSyncEnabled(value: boolean | cdktf.IResolvable) {
    this._deltaSyncEnabled = value;
  }
  public resetDeltaSyncEnabled() {
    this._deltaSyncEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaSyncEnabledInput() {
    return this._deltaSyncEnabled;
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
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

  // oidc - computed: false, optional: true, required: false
  private _oidc = new AppEndpointOidcList(this, "oidc", false);
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: AppEndpointOidc[] | cdktf.IResolvable) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_url - computed: true, optional: false, required: false
  public get publicUrl() {
    return this.getStringAttribute('public_url');
  }

  // require_resync - computed: true, optional: false, required: false
  private _requireResync = new AppEndpointRequireResyncMap(this, "require_resync");
  public get requireResync() {
    return this._requireResync;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new AppEndpointScopesMap(this, "scopes");
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: { [key: string]: AppEndpointScopes } | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_xattr_key - computed: true, optional: true, required: false
  private _userXattrKey?: string; 
  public get userXattrKey() {
    return this.getStringAttribute('user_xattr_key');
  }
  public set userXattrKey(value: string) {
    this._userXattrKey = value;
  }
  public resetUserXattrKey() {
    this._userXattrKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userXattrKeyInput() {
    return this._userXattrKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      bucket: cdktf.stringToTerraform(this._bucket),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cors: appEndpointCorsToTerraform(this._cors.internalValue),
      delta_sync_enabled: cdktf.booleanToTerraform(this._deltaSyncEnabled),
      name: cdktf.stringToTerraform(this._name),
      oidc: cdktf.listMapper(appEndpointOidcToTerraform, false)(this._oidc.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      project_id: cdktf.stringToTerraform(this._projectId),
      scopes: cdktf.hashMapper(appEndpointScopesToTerraform)(this._scopes.internalValue),
      user_xattr_key: cdktf.stringToTerraform(this._userXattrKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_service_id: {
        value: cdktf.stringToHclTerraform(this._appServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors: {
        value: appEndpointCorsToHclTerraform(this._cors.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AppEndpointCors",
      },
      delta_sync_enabled: {
        value: cdktf.booleanToHclTerraform(this._deltaSyncEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc: {
        value: cdktf.listMapperHcl(appEndpointOidcToHclTerraform, false)(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppEndpointOidcList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.hashMapperHcl(appEndpointScopesToHclTerraform)(this._scopes.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "AppEndpointScopesMap",
      },
      user_xattr_key: {
        value: cdktf.stringToHclTerraform(this._userXattrKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
