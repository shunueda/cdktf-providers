// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizeApiServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A single object that specifies properties related to access control settings of the API service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#access_control AuthorizeApiService#access_control}
  */
  readonly accessControl?: AuthorizeApiServiceAccessControl;
  /**
  * A single object that specifies properties related to the authorization server that will issue access tokens used to access the APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#authorization_server AuthorizeApiService#authorization_server}
  */
  readonly authorizationServer: AuthorizeApiServiceAuthorizationServer;
  /**
  * A set of strings that specifies the possible base URLs that an end-user will use to access the APIs hosted on the customer's API service. Multiple base URLs may be specified to support cases where the same API may be available from multiple URLs (for example, from a user-friendly domain URL and an internal domain URL). Base URLs must be valid absolute URLs with the `https` or `http` scheme. If the path component is non-empty, it must not end in a trailing slash. The path must not contain empty backslash, dot, or double-dot segments. It must not have a query or fragment present, and the host portion of the authority must be a DNS hostname or valid IP (IPv4 or IPv6). The length must be less than or equal to 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#base_urls AuthorizeApiService#base_urls}
  */
  readonly baseUrls: string[];
  /**
  * A container object for fields related to the user directory used to issue access tokens for accessing the APIs. If not provided, `directory.type` will default to `PINGONE_SSO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#directory AuthorizeApiService#directory}
  */
  readonly directory?: AuthorizeApiServiceDirectory;
  /**
  * The ID of the environment to create and manage the API Service in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#environment_id AuthorizeApiService#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the API service resource name. The name value must be unique among all API services, and it must be a valid resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#name AuthorizeApiService#name}
  */
  readonly name: string;
}
export interface AuthorizeApiServiceAccessControlCustom {
  /**
  * A boolean that, if set to `true`, means the custom policy will be used for the endpoint.  Defaults to `false`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#enabled AuthorizeApiService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function authorizeApiServiceAccessControlCustomToTerraform(struct?: AuthorizeApiServiceAccessControlCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function authorizeApiServiceAccessControlCustomToHclTerraform(struct?: AuthorizeApiServiceAccessControlCustom): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceAccessControlCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceAccessControlCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceAccessControlCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface AuthorizeApiServiceAccessControl {
  /**
  * A single object that defines if the operation will use custom policy rather than the "Group" or "Scope" access control requirement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#custom AuthorizeApiService#custom}
  */
  readonly custom: AuthorizeApiServiceAccessControlCustom;
}

export function authorizeApiServiceAccessControlToTerraform(struct?: AuthorizeApiServiceAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: authorizeApiServiceAccessControlCustomToTerraform(struct!.custom),
  }
}


export function authorizeApiServiceAccessControlToHclTerraform(struct?: AuthorizeApiServiceAccessControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: authorizeApiServiceAccessControlCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "struct",
      storageClassType: "AuthorizeApiServiceAccessControlCustom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthorizeApiServiceAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceAccessControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceAccessControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom.internalValue = value.custom;
    }
  }

  // custom - computed: true, optional: false, required: true
  private _custom = new AuthorizeApiServiceAccessControlCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AuthorizeApiServiceAccessControlCustom) {
    this._custom.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}
export interface AuthorizeApiServiceAuthorizationServer {
  /**
  * A string that specifies the UUID of the custom PingOne resource. The resource defines the characteristics of the OAuth 2.0 access tokens used to get access to the APIs on the API service such as the audience and scopes. This property must identify a PingOne resource with a `type` property value of `CUSTOM`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#resource_id AuthorizeApiService#resource_id}
  */
  readonly resourceId?: string;
  /**
  * A string that specifies the type of authorization server that will issue access tokens. Must be the same value as the `directory.type` field. If `EXTERNAL`, the `resource` field must not be provided.  Options are `EXTERNAL`, `PINGONE_SSO`.  Defaults to `PINGONE_SSO`.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#type AuthorizeApiService#type}
  */
  readonly type: string;
}

export function authorizeApiServiceAuthorizationServerToTerraform(struct?: AuthorizeApiServiceAuthorizationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function authorizeApiServiceAuthorizationServerToHclTerraform(struct?: AuthorizeApiServiceAuthorizationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
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

export class AuthorizeApiServiceAuthorizationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceAuthorizationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceAuthorizationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._type = value.type;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
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
export interface AuthorizeApiServiceDirectory {
  /**
  * A string that specifies the type of directory that will be used to issue access tokens.  Options are `EXTERNAL`, `PINGONE_SSO`.  Defaults to `PINGONE_SSO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#type AuthorizeApiService#type}
  */
  readonly type: string;
}

export function authorizeApiServiceDirectoryToTerraform(struct?: AuthorizeApiServiceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function authorizeApiServiceDirectoryToHclTerraform(struct?: AuthorizeApiServiceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AuthorizeApiServiceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthorizeApiServiceDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthorizeApiServiceDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: true, optional: false, required: true
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service pingone_authorize_api_service}
*/
export class AuthorizeApiService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_authorize_api_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizeApiService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizeApiService to import
  * @param importFromId The id of the existing AuthorizeApiService that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizeApiService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_authorize_api_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_api_service pingone_authorize_api_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizeApiServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizeApiServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_authorize_api_service',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControl.internalValue = config.accessControl;
    this._authorizationServer.internalValue = config.authorizationServer;
    this._baseUrls = config.baseUrls;
    this._directory.internalValue = config.directory;
    this._environmentId = config.environmentId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control - computed: true, optional: true, required: false
  private _accessControl = new AuthorizeApiServiceAccessControlOutputReference(this, "access_control");
  public get accessControl() {
    return this._accessControl;
  }
  public putAccessControl(value: AuthorizeApiServiceAccessControl) {
    this._accessControl.internalValue = value;
  }
  public resetAccessControl() {
    this._accessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlInput() {
    return this._accessControl.internalValue;
  }

  // authorization_server - computed: false, optional: false, required: true
  private _authorizationServer = new AuthorizeApiServiceAuthorizationServerOutputReference(this, "authorization_server");
  public get authorizationServer() {
    return this._authorizationServer;
  }
  public putAuthorizationServer(value: AuthorizeApiServiceAuthorizationServer) {
    this._authorizationServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationServerInput() {
    return this._authorizationServer.internalValue;
  }

  // base_urls - computed: false, optional: false, required: true
  private _baseUrls?: string[]; 
  public get baseUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('base_urls'));
  }
  public set baseUrls(value: string[]) {
    this._baseUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlsInput() {
    return this._baseUrls;
  }

  // directory - computed: true, optional: true, required: false
  private _directory = new AuthorizeApiServiceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: AuthorizeApiServiceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control: authorizeApiServiceAccessControlToTerraform(this._accessControl.internalValue),
      authorization_server: authorizeApiServiceAuthorizationServerToTerraform(this._authorizationServer.internalValue),
      base_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._baseUrls),
      directory: authorizeApiServiceDirectoryToTerraform(this._directory.internalValue),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control: {
        value: authorizeApiServiceAccessControlToHclTerraform(this._accessControl.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthorizeApiServiceAccessControl",
      },
      authorization_server: {
        value: authorizeApiServiceAuthorizationServerToHclTerraform(this._authorizationServer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthorizeApiServiceAuthorizationServer",
      },
      base_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._baseUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      directory: {
        value: authorizeApiServiceDirectoryToHclTerraform(this._directory.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthorizeApiServiceDirectory",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
