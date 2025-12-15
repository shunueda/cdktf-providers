// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceendpointAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AWS access key ID for signing programmatic requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#access_key_id ServiceendpointAws#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#description ServiceendpointAws#description}
  */
  readonly description?: string;
  /**
  * A unique identifier that is used by third parties when assuming roles in their customers' accounts, aka cross-account role access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#external_id ServiceendpointAws#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#id ServiceendpointAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#project_id ServiceendpointAws#project_id}
  */
  readonly projectId: string;
  /**
  * Optional identifier for the assumed role session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#role_session_name ServiceendpointAws#role_session_name}
  */
  readonly roleSessionName?: string;
  /**
  * The Amazon Resource Name (ARN) of the role to assume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#role_to_assume ServiceendpointAws#role_to_assume}
  */
  readonly roleToAssume?: string;
  /**
  * The AWS secret access key for signing programmatic requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#secret_access_key ServiceendpointAws#secret_access_key}
  */
  readonly secretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#service_endpoint_name ServiceendpointAws#service_endpoint_name}
  */
  readonly serviceEndpointName: string;
  /**
  * The AWS session token for signing programmatic requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#session_token ServiceendpointAws#session_token}
  */
  readonly sessionToken?: string;
  /**
  * Enable this to attempt getting credentials with OIDC token from Azure Devops.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#use_oidc ServiceendpointAws#use_oidc}
  */
  readonly useOidc?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#timeouts ServiceendpointAws#timeouts}
  */
  readonly timeouts?: ServiceendpointAwsTimeouts;
}
export interface ServiceendpointAwsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#create ServiceendpointAws#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#delete ServiceendpointAws#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#read ServiceendpointAws#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#update ServiceendpointAws#update}
  */
  readonly update?: string;
}

export function serviceendpointAwsTimeoutsToTerraform(struct?: ServiceendpointAwsTimeouts | cdktf.IResolvable): any {
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


export function serviceendpointAwsTimeoutsToHclTerraform(struct?: ServiceendpointAwsTimeouts | cdktf.IResolvable): any {
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

export class ServiceendpointAwsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceendpointAwsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceendpointAwsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws azuredevops_serviceendpoint_aws}
*/
export class ServiceendpointAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_serviceendpoint_aws";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceendpointAws resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceendpointAws to import
  * @param importFromId The id of the existing ServiceendpointAws that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceendpointAws to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_serviceendpoint_aws", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/serviceendpoint_aws azuredevops_serviceendpoint_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceendpointAwsConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceendpointAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_serviceendpoint_aws',
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
    this._accessKeyId = config.accessKeyId;
    this._description = config.description;
    this._externalId = config.externalId;
    this._id = config.id;
    this._projectId = config.projectId;
    this._roleSessionName = config.roleSessionName;
    this._roleToAssume = config.roleToAssume;
    this._secretAccessKey = config.secretAccessKey;
    this._serviceEndpointName = config.serviceEndpointName;
    this._sessionToken = config.sessionToken;
    this._useOidc = config.useOidc;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

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

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
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

  // role_session_name - computed: false, optional: true, required: false
  private _roleSessionName?: string; 
  public get roleSessionName() {
    return this.getStringAttribute('role_session_name');
  }
  public set roleSessionName(value: string) {
    this._roleSessionName = value;
  }
  public resetRoleSessionName() {
    this._roleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSessionNameInput() {
    return this._roleSessionName;
  }

  // role_to_assume - computed: false, optional: true, required: false
  private _roleToAssume?: string; 
  public get roleToAssume() {
    return this.getStringAttribute('role_to_assume');
  }
  public set roleToAssume(value: string) {
    this._roleToAssume = value;
  }
  public resetRoleToAssume() {
    this._roleToAssume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleToAssumeInput() {
    return this._roleToAssume;
  }

  // secret_access_key - computed: false, optional: true, required: false
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  public resetSecretAccessKey() {
    this._secretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
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

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // use_oidc - computed: false, optional: true, required: false
  private _useOidc?: boolean | cdktf.IResolvable; 
  public get useOidc() {
    return this.getBooleanAttribute('use_oidc');
  }
  public set useOidc(value: boolean | cdktf.IResolvable) {
    this._useOidc = value;
  }
  public resetUseOidc() {
    this._useOidc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOidcInput() {
    return this._useOidc;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceendpointAwsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceendpointAwsTimeouts) {
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
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      description: cdktf.stringToTerraform(this._description),
      external_id: cdktf.stringToTerraform(this._externalId),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      role_session_name: cdktf.stringToTerraform(this._roleSessionName),
      role_to_assume: cdktf.stringToTerraform(this._roleToAssume),
      secret_access_key: cdktf.stringToTerraform(this._secretAccessKey),
      service_endpoint_name: cdktf.stringToTerraform(this._serviceEndpointName),
      session_token: cdktf.stringToTerraform(this._sessionToken),
      use_oidc: cdktf.booleanToTerraform(this._useOidc),
      timeouts: serviceendpointAwsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
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
      external_id: {
        value: cdktf.stringToHclTerraform(this._externalId),
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
      role_session_name: {
        value: cdktf.stringToHclTerraform(this._roleSessionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_to_assume: {
        value: cdktf.stringToHclTerraform(this._roleToAssume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_access_key: {
        value: cdktf.stringToHclTerraform(this._secretAccessKey),
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
      session_token: {
        value: cdktf.stringToHclTerraform(this._sessionToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_oidc: {
        value: cdktf.booleanToHclTerraform(this._useOidc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: serviceendpointAwsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceendpointAwsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
