// https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * An environment the token has access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token#environment ApiToken#environment}
  */
  readonly environment?: string;
  /**
  * When the token expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token#expires_at ApiToken#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * A project the token belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token#project ApiToken#project}
  */
  readonly project?: string;
  /**
  * The list of projects this token has access to. If the token has access to specific projects they will be listed here. If the token has access to all projects it will be represented as `[*]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token#projects ApiToken#projects}
  */
  readonly projects?: string[];
  /**
  * The name of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token#token_name ApiToken#token_name}
  */
  readonly tokenName?: string;
  /**
  * The type of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token#type ApiToken#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token unleash_api_token}
*/
export class ApiToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "unleash_api_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiToken to import
  * @param importFromId The id of the existing ApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "unleash_api_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/unleash/unleash/3.1.11/docs/resources/api_token unleash_api_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApiTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'unleash_api_token',
      terraformGeneratorMetadata: {
        providerName: 'unleash',
        providerVersion: '3.1.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environment = config.environment;
    this._expiresAt = config.expiresAt;
    this._project = config.project;
    this._projects = config.projects;
    this._tokenName = config.tokenName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // environment - computed: true, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // expires_at - computed: false, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // projects - computed: true, optional: true, required: false
  private _projects?: string[]; 
  public get projects() {
    return cdktf.Fn.tolist(this.getListAttribute('projects'));
  }
  public set projects(value: string[]) {
    this._projects = value;
  }
  public resetProjects() {
    this._projects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects;
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // token_name - computed: false, optional: true, required: false
  private _tokenName?: string; 
  public get tokenName() {
    return this.getStringAttribute('token_name');
  }
  public set tokenName(value: string) {
    this._tokenName = value;
  }
  public resetTokenName() {
    this._tokenName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameInput() {
    return this._tokenName;
  }

  // type - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment: cdktf.stringToTerraform(this._environment),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      project: cdktf.stringToTerraform(this._project),
      projects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projects),
      token_name: cdktf.stringToTerraform(this._tokenName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      projects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projects),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_name: {
        value: cdktf.stringToHclTerraform(this._tokenName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
