// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthorizeDecisionEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * A string that specifies alternative unique identifier for the endpoint, which provides a method for locating the resource by a known, fixed identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#alternate_id AuthorizeDecisionEndpoint#alternate_id}
  */
  readonly alternateId?: string;
  /**
  * A string that specifies the ID of the Authorization Version deployed to this endpoint. Versioning allows independent development and deployment of policies. If omitted, the endpoint always uses the latest policy version available from the policy editor service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#authorization_version_id AuthorizeDecisionEndpoint#authorization_version_id}
  */
  readonly authorizationVersionId?: string;
  /**
  * A string that specifies the description of the policy decision resource. Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#description AuthorizeDecisionEndpoint#description}
  */
  readonly description?: string;
  /**
  * The ID of the environment to create the decision endpoint in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#environment_id AuthorizeDecisionEndpoint#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#id AuthorizeDecisionEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A string that specifies the policy decision resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#name AuthorizeDecisionEndpoint#name}
  */
  readonly name: string;
  /**
  * A boolean that specifies whether to record a limited history of recent decision requests and responses, which can be queried through a separate API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#record_recent_requests AuthorizeDecisionEndpoint#record_recent_requests}
  */
  readonly recordRecentRequests: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint pingone_authorize_decision_endpoint}
*/
export class AuthorizeDecisionEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_authorize_decision_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthorizeDecisionEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthorizeDecisionEndpoint to import
  * @param importFromId The id of the existing AuthorizeDecisionEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthorizeDecisionEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_authorize_decision_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/authorize_decision_endpoint pingone_authorize_decision_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthorizeDecisionEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: AuthorizeDecisionEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_authorize_decision_endpoint',
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
    this._alternateId = config.alternateId;
    this._authorizationVersionId = config.authorizationVersionId;
    this._description = config.description;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._name = config.name;
    this._recordRecentRequests = config.recordRecentRequests;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_id - computed: false, optional: true, required: false
  private _alternateId?: string; 
  public get alternateId() {
    return this.getStringAttribute('alternate_id');
  }
  public set alternateId(value: string) {
    this._alternateId = value;
  }
  public resetAlternateId() {
    this._alternateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateIdInput() {
    return this._alternateId;
  }

  // authorization_version_id - computed: false, optional: true, required: false
  private _authorizationVersionId?: string; 
  public get authorizationVersionId() {
    return this.getStringAttribute('authorization_version_id');
  }
  public set authorizationVersionId(value: string) {
    this._authorizationVersionId = value;
  }
  public resetAuthorizationVersionId() {
    this._authorizationVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationVersionIdInput() {
    return this._authorizationVersionId;
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

  // owned - computed: true, optional: false, required: false
  public get owned() {
    return this.getBooleanAttribute('owned');
  }

  // record_recent_requests - computed: false, optional: false, required: true
  private _recordRecentRequests?: boolean | cdktf.IResolvable; 
  public get recordRecentRequests() {
    return this.getBooleanAttribute('record_recent_requests');
  }
  public set recordRecentRequests(value: boolean | cdktf.IResolvable) {
    this._recordRecentRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordRecentRequestsInput() {
    return this._recordRecentRequests;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alternate_id: cdktf.stringToTerraform(this._alternateId),
      authorization_version_id: cdktf.stringToTerraform(this._authorizationVersionId),
      description: cdktf.stringToTerraform(this._description),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      record_recent_requests: cdktf.booleanToTerraform(this._recordRecentRequests),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alternate_id: {
        value: cdktf.stringToHclTerraform(this._alternateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_version_id: {
        value: cdktf.stringToHclTerraform(this._authorizationVersionId),
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
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_recent_requests: {
        value: cdktf.booleanToHclTerraform(this._recordRecentRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
