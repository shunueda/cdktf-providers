// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointDynamicsLifecycleServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#authorization_endpoint ServiceendpointDynamicsLifecycleServices#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#client_id ServiceendpointDynamicsLifecycleServices#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#description ServiceendpointDynamicsLifecycleServices#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#id ServiceendpointDynamicsLifecycleServices#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#lifecycle_services_api_endpoint ServiceendpointDynamicsLifecycleServices#lifecycle_services_api_endpoint}
  */
  readonly lifecycleServicesApiEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#password ServiceendpointDynamicsLifecycleServices#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#project_id ServiceendpointDynamicsLifecycleServices#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#service_endpoint_name ServiceendpointDynamicsLifecycleServices#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#username ServiceendpointDynamicsLifecycleServices#username}
  */
  readonly username: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#timeouts ServiceendpointDynamicsLifecycleServices#timeouts}
  */
  readonly timeouts?: ServiceendpointDynamicsLifecycleServicesTimeouts;
}
export interface ServiceendpointDynamicsLifecycleServicesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#create ServiceendpointDynamicsLifecycleServices#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#delete ServiceendpointDynamicsLifecycleServices#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#read ServiceendpointDynamicsLifecycleServices#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#update ServiceendpointDynamicsLifecycleServices#update}
  */
  readonly update?: string;
}

export function serviceendpointDynamicsLifecycleServicesTimeoutsToTerraform(struct?: ServiceendpointDynamicsLifecycleServicesTimeouts | cdktf.IResolvable): any {
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


export function serviceendpointDynamicsLifecycleServicesTimeoutsToHclTerraform(struct?: ServiceendpointDynamicsLifecycleServicesTimeouts | cdktf.IResolvable): any {
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

export class ServiceendpointDynamicsLifecycleServicesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointDynamicsLifecycleServicesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceendpointDynamicsLifecycleServicesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services azuredevops_serviceendpoint_dynamics_lifecycle_services}
*/
export class ServiceendpointDynamicsLifecycleServices extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_dynamics_lifecycle_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointDynamicsLifecycleServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointDynamicsLifecycleServices to import
  * @param importFromId The id of the existing ServiceendpointDynamicsLifecycleServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointDynamicsLifecycleServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_dynamics_lifecycle_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_dynamics_lifecycle_services azuredevops_serviceendpoint_dynamics_lifecycle_services} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointDynamicsLifecycleServicesConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointDynamicsLifecycleServicesConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_dynamics_lifecycle_services',
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
    this._authorizationEndpoint = config.authorizationEndpoint;
    this._clientId = config.clientId;
    this._description = config.description;
    this._id = config.id;
    this._lifecycleServicesApiEndpoint = config.lifecycleServicesApiEndpoint;
    this._password = config.password;
    this._projectId = config.projectId;
    this._serviceEndpointName = config.serviceEndpointName;
    this._username = config.username;
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

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
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

  // lifecycle_services_api_endpoint - computed: false, optional: false, required: true
  private _lifecycleServicesApiEndpoint?: string; 
  public get lifecycleServicesApiEndpoint() {
    return this.getStringAttribute('lifecycle_services_api_endpoint');
  }
  public set lifecycleServicesApiEndpoint(value: string) {
    this._lifecycleServicesApiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleServicesApiEndpointInput() {
    return this._lifecycleServicesApiEndpoint;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointDynamicsLifecycleServicesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointDynamicsLifecycleServicesTimeouts) {
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
      authorization_endpoint: cdktf.stringToTerraform(this._authorizationEndpoint),
      client_id: cdktf.stringToTerraform(this._clientId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lifecycle_services_api_endpoint: cdktf.stringToTerraform(this._lifecycleServicesApiEndpoint),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.stringToTerraform(this._projectId),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      username: cdktf.stringToTerraform(this._username),
      timeouts: serviceendpointDynamicsLifecycleServicesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._authorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_services_api_endpoint: {
        value: cdktf.stringToHclTerraform(this._lifecycleServicesApiEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: serviceendpointDynamicsLifecycleServicesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointDynamicsLifecycleServicesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
