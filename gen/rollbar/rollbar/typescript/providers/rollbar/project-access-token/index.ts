// https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectAccessTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#id ProjectAccessToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The human readable name for the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#name ProjectAccessToken#name}
  */
  readonly name: string;
  /**
  * ID of the Rollbar project to which this token belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#project_id ProjectAccessToken#project_id}
  */
  readonly projectId: number;
  /**
  * Total number of calls allowed within the rate limit window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#rate_limit_window_count ProjectAccessToken#rate_limit_window_count}
  */
  readonly rateLimitWindowCount?: number;
  /**
  * Total number of seconds that makes up the rate limit window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#rate_limit_window_size ProjectAccessToken#rate_limit_window_size}
  */
  readonly rateLimitWindowSize?: number;
  /**
  * List of access scopes granted to the token.  Possible values are "read", "write", "post_server_item", and "post_client_server".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#scopes ProjectAccessToken#scopes}
  */
  readonly scopes: string[];
  /**
  * Status of the token.  Possible values are "enabled" and "disabled"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#status ProjectAccessToken#status}
  */
  readonly status?: string;
  /**
  * Access token type for Rollbar API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#token_type ProjectAccessToken#token_type}
  */
  readonly tokenType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token rollbar_project_access_token}
*/
export class ProjectAccessToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rollbar_project_access_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectAccessToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectAccessToken to import
  * @param importFromId The id of the existing ProjectAccessToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectAccessToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rollbar_project_access_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rollbar/rollbar/1.16.0/docs/resources/project_access_token rollbar_project_access_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectAccessTokenConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectAccessTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'rollbar_project_access_token',
      terraformGeneratorMetadata: {
        providerName: 'rollbar',
        providerVersion: '1.16.0',
        providerVersionConstraint: '1.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._projectId = config.projectId;
    this._rateLimitWindowCount = config.rateLimitWindowCount;
    this._rateLimitWindowSize = config.rateLimitWindowSize;
    this._scopes = config.scopes;
    this._status = config.status;
    this._tokenType = config.tokenType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // cur_rate_limit_window_count - computed: true, optional: false, required: false
  public get curRateLimitWindowCount() {
    return this.getNumberAttribute('cur_rate_limit_window_count');
  }

  // cur_rate_limit_window_start - computed: true, optional: false, required: false
  public get curRateLimitWindowStart() {
    return this.getNumberAttribute('cur_rate_limit_window_start');
  }

  // date_created - computed: true, optional: false, required: false
  public get dateCreated() {
    return this.getNumberAttribute('date_created');
  }

  // date_modified - computed: true, optional: false, required: false
  public get dateModified() {
    return this.getNumberAttribute('date_modified');
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // public_id - computed: true, optional: false, required: false
  public get publicId() {
    return this.getStringAttribute('public_id');
  }

  // rate_limit_window_count - computed: false, optional: true, required: false
  private _rateLimitWindowCount?: number; 
  public get rateLimitWindowCount() {
    return this.getNumberAttribute('rate_limit_window_count');
  }
  public set rateLimitWindowCount(value: number) {
    this._rateLimitWindowCount = value;
  }
  public resetRateLimitWindowCount() {
    this._rateLimitWindowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitWindowCountInput() {
    return this._rateLimitWindowCount;
  }

  // rate_limit_window_size - computed: false, optional: true, required: false
  private _rateLimitWindowSize?: number; 
  public get rateLimitWindowSize() {
    return this.getNumberAttribute('rate_limit_window_size');
  }
  public set rateLimitWindowSize(value: number) {
    this._rateLimitWindowSize = value;
  }
  public resetRateLimitWindowSize() {
    this._rateLimitWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitWindowSizeInput() {
    return this._rateLimitWindowSize;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // token_type - computed: false, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      rate_limit_window_count: cdktf.numberToTerraform(this._rateLimitWindowCount),
      rate_limit_window_size: cdktf.numberToTerraform(this._rateLimitWindowSize),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      status: cdktf.stringToTerraform(this._status),
      token_type: cdktf.stringToTerraform(this._tokenType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_window_count: {
        value: cdktf.numberToHclTerraform(this._rateLimitWindowCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_window_size: {
        value: cdktf.numberToHclTerraform(this._rateLimitWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_type: {
        value: cdktf.stringToHclTerraform(this._tokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
