// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointMavenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#description ServiceendpointMaven#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#id ServiceendpointMaven#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#project_id ServiceendpointMaven#project_id}
  */
  readonly projectId: string;
  /**
  * This is the ID of the server that matches the id element of the repository/mirror that Maven tries to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#repository_id ServiceendpointMaven#repository_id}
  */
  readonly repositoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#service_endpoint_name ServiceendpointMaven#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * Url for the Maven Repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#url ServiceendpointMaven#url}
  */
  readonly url: string;
  /**
  * authentication_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#authentication_basic ServiceendpointMaven#authentication_basic}
  */
  readonly authenticationBasic?: ServiceendpointMavenAuthenticationBasic;
  /**
  * authentication_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#authentication_token ServiceendpointMaven#authentication_token}
  */
  readonly authenticationToken?: ServiceendpointMavenAuthenticationToken;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#timeouts ServiceendpointMaven#timeouts}
  */
  readonly timeouts?: ServiceendpointMavenTimeouts;
}
export interface ServiceendpointMavenAuthenticationBasic {
  /**
  * The Maven password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#password ServiceendpointMaven#password}
  */
  readonly password: string;
  /**
  * The Maven user name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#username ServiceendpointMaven#username}
  */
  readonly username: string;
}

export function serviceendpointMavenAuthenticationBasicToTerraform(struct?: ServiceendpointMavenAuthenticationBasicOutputReference | ServiceendpointMavenAuthenticationBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceendpointMavenAuthenticationBasicToHclTerraform(struct?: ServiceendpointMavenAuthenticationBasicOutputReference | ServiceendpointMavenAuthenticationBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointMavenAuthenticationBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointMavenAuthenticationBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointMavenAuthenticationBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface ServiceendpointMavenAuthenticationToken {
  /**
  * The Maven access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#token ServiceendpointMaven#token}
  */
  readonly token: string;
}

export function serviceendpointMavenAuthenticationTokenToTerraform(struct?: ServiceendpointMavenAuthenticationTokenOutputReference | ServiceendpointMavenAuthenticationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function serviceendpointMavenAuthenticationTokenToHclTerraform(struct?: ServiceendpointMavenAuthenticationTokenOutputReference | ServiceendpointMavenAuthenticationToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ServiceendpointMavenAuthenticationTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointMavenAuthenticationToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointMavenAuthenticationToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._token = value.token;
    }
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface ServiceendpointMavenTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#create ServiceendpointMaven#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#delete ServiceendpointMaven#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#read ServiceendpointMaven#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#update ServiceendpointMaven#update}
  */
  readonly update?: string;
}

export function serviceendpointMavenTimeoutsToTerraform(struct?: ServiceendpointMavenTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceendpointMavenTimeoutsToHclTerraform(struct?: ServiceendpointMavenTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointMavenTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointMavenTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointMavenTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven azuredevops_serviceendpoint_maven}
*/
export class ServiceendpointMaven extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_maven";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointMaven resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointMaven to import
  * @param importFromId The id of the existing ServiceendpointMaven that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointMaven to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_maven", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_maven azuredevops_serviceendpoint_maven} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointMavenConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointMavenConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_maven',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._projectId = config.projectId;
    this._repositoryId = config.repositoryId;
    this._serviceEndpointName = config.serviceEndpointName;
    this._url = config.url;
    this._authenticationBasic.internalValue = config.authenticationBasic;
    this._authenticationToken.internalValue = config.authenticationToken;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization - computed: true, optional: false, required: false
  private _authorization = new cdktf.StringMap(this, "authorization");
  public get authorization() {
    return this._authorization;
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

  // id - computed: true, optional: true, required: false
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // service_endpoint_name - computed: false, optional: false, required: true
  private _serviceEndpointName?: string; 
  public get serviceEndpointName() {
    return this.getStringAttribute('service_endpoint_name');
  }
  public set serviceEndpointName(value: string) {
    this._serviceEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndpointNameInput() {
    return this._serviceEndpointName;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // authentication_basic - computed: false, optional: true, required: false
  private _authenticationBasic = new ServiceendpointMavenAuthenticationBasicOutputReference(this, "authentication_basic");
  public get authenticationBasic() {
    return this._authenticationBasic;
  }
  public putAuthenticationBasic(value: ServiceendpointMavenAuthenticationBasic) {
    this._authenticationBasic.internalValue = value;
  }
  public resetAuthenticationBasic() {
    this._authenticationBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationBasicInput() {
    return this._authenticationBasic.internalValue;
  }

  // authentication_token - computed: false, optional: true, required: false
  private _authenticationToken = new ServiceendpointMavenAuthenticationTokenOutputReference(this, "authentication_token");
  public get authenticationToken() {
    return this._authenticationToken;
  }
  public putAuthenticationToken(value: ServiceendpointMavenAuthenticationToken) {
    this._authenticationToken.internalValue = value;
  }
  public resetAuthenticationToken() {
    this._authenticationToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointMavenTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointMavenTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      url: cdktf.stringToTerraform(this._url),
      authentication_basic: serviceendpointMavenAuthenticationBasicToTerraform(this._authenticationBasic.internalValue),
      authentication_token: serviceendpointMavenAuthenticationTokenToTerraform(this._authenticationToken.internalValue),
      timeouts: serviceendpointMavenTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_basic: {
        value: serviceendpointMavenAuthenticationBasicToHclTerraform(this._authenticationBasic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointMavenAuthenticationBasicList",
      },
      authentication_token: {
        value: serviceendpointMavenAuthenticationTokenToHclTerraform(this._authenticationToken.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceendpointMavenAuthenticationTokenList",
      },
      timeouts: {
        value: serviceendpointMavenTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointMavenTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
