// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointGithubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#description ServiceendpointGithub#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#id ServiceendpointGithub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#project_id ServiceendpointGithub#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#service_endpoint_name ServiceendpointGithub#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * auth_oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#auth_oauth ServiceendpointGithub#auth_oauth}
  */
  readonly authOauth?: ServiceendpointGithubAuthOauth;
  /**
  * auth_personal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#auth_personal ServiceendpointGithub#auth_personal}
  */
  readonly authPersonal?: ServiceendpointGithubAuthPersonal;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#timeouts ServiceendpointGithub#timeouts}
  */
  readonly timeouts?: ServiceendpointGithubTimeouts;
}
export interface ServiceendpointGithubAuthOauth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#oauth_configuration_id ServiceendpointGithub#oauth_configuration_id}
  */
  readonly oauthConfigurationId: string;
}

export function serviceendpointGithubAuthOauthToTerraform(struct?: ServiceendpointGithubAuthOauthOutputReference | ServiceendpointGithubAuthOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_configuration_id: cdktf.stringToTerraform(struct!.oauthConfigurationId),
  }
}


export function serviceendpointGithubAuthOauthToHclTerraform(struct?: ServiceendpointGithubAuthOauthOutputReference | ServiceendpointGithubAuthOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oauth_configuration_id: {
      value: cdktf.stringToHclTerraform(struct!.oauthConfigurationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointGithubAuthOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointGithubAuthOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oauthConfigurationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfigurationId = this._oauthConfigurationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointGithubAuthOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oauthConfigurationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oauthConfigurationId = value.oauthConfigurationId;
    }
  }

  // oauth_configuration_id - computed: false, optional: false, required: true
  private _oauthConfigurationId?: string; 
  public get oauthConfigurationId() {
    return this.getStringAttribute('oauth_configuration_id');
  }
  public set oauthConfigurationId(value: string) {
    this._oauthConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigurationIdInput() {
    return this._oauthConfigurationId;
  }
}
export interface ServiceendpointGithubAuthPersonal {
  /**
  * The GitHub personal access token which should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#personal_access_token ServiceendpointGithub#personal_access_token}
  */
  readonly personalAccessToken: string;
}

export function serviceendpointGithubAuthPersonalToTerraform(struct?: ServiceendpointGithubAuthPersonalOutputReference | ServiceendpointGithubAuthPersonal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    personal_access_token: cdktf.stringToTerraform(struct!.personalAccessToken),
  }
}


export function serviceendpointGithubAuthPersonalToHclTerraform(struct?: ServiceendpointGithubAuthPersonalOutputReference | ServiceendpointGithubAuthPersonal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    personal_access_token: {
      value: cdktf.stringToHclTerraform(struct!.personalAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceendpointGithubAuthPersonalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceendpointGithubAuthPersonal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._personalAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.personalAccessToken = this._personalAccessToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceendpointGithubAuthPersonal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._personalAccessToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._personalAccessToken = value.personalAccessToken;
    }
  }

  // personal_access_token - computed: false, optional: false, required: true
  private _personalAccessToken?: string; 
  public get personalAccessToken() {
    return this.getStringAttribute('personal_access_token');
  }
  public set personalAccessToken(value: string) {
    this._personalAccessToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get personalAccessTokenInput() {
    return this._personalAccessToken;
  }
}
export interface ServiceendpointGithubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#create ServiceendpointGithub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#delete ServiceendpointGithub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#read ServiceendpointGithub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#update ServiceendpointGithub#update}
  */
  readonly update?: string;
}

export function serviceendpointGithubTimeoutsToTerraform(struct?: ServiceendpointGithubTimeouts | cdktf.IResolvable): any {
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


export function serviceendpointGithubTimeoutsToHclTerraform(struct?: ServiceendpointGithubTimeouts | cdktf.IResolvable): any {
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

export class ServiceendpointGithubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointGithubTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceendpointGithubTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github azuredevops_serviceendpoint_github}
*/
export class ServiceendpointGithub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_github";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointGithub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointGithub to import
  * @param importFromId The id of the existing ServiceendpointGithub that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointGithub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_github", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_github azuredevops_serviceendpoint_github} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointGithubConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointGithubConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_github',
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
    this._serviceEndpointName = config.serviceEndpointName;
    this._authOauth.internalValue = config.authOauth;
    this._authPersonal.internalValue = config.authPersonal;
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

  // auth_oauth - computed: false, optional: true, required: false
  private _authOauth = new ServiceendpointGithubAuthOauthOutputReference(this, "auth_oauth");
  public get authOauth() {
    return this._authOauth;
  }
  public putAuthOauth(value: ServiceendpointGithubAuthOauth) {
    this._authOauth.internalValue = value;
  }
  public resetAuthOauth() {
    this._authOauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authOauthInput() {
    return this._authOauth.internalValue;
  }

  // auth_personal - computed: false, optional: true, required: false
  private _authPersonal = new ServiceendpointGithubAuthPersonalOutputReference(this, "auth_personal");
  public get authPersonal() {
    return this._authPersonal;
  }
  public putAuthPersonal(value: ServiceendpointGithubAuthPersonal) {
    this._authPersonal.internalValue = value;
  }
  public resetAuthPersonal() {
    this._authPersonal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPersonalInput() {
    return this._authPersonal.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointGithubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointGithubTimeouts) {
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
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      auth_oauth: serviceendpointGithubAuthOauthToTerraform(this._authOauth.internalValue),
      auth_personal: serviceendpointGithubAuthPersonalToTerraform(this._authPersonal.internalValue),
      timeouts: serviceendpointGithubTimeoutsToTerraform(this._timeouts.internalValue),
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
      service_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._serviceEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_oauth: {
        value: serviceendpointGithubAuthOauthToHclTerraform(this._authOauth.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceendpointGithubAuthOauthList",
      },
      auth_personal: {
        value: serviceendpointGithubAuthPersonalToHclTerraform(this._authPersonal.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceendpointGithubAuthPersonalList",
      },
      timeouts: {
        value: serviceendpointGithubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointGithubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
