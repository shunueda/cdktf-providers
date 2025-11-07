// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team#description Team#description}
  */
  readonly description?: string;
  /**
  * The name of the Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * The role to assign to the provided Users. Defaults to 'editor' which has editor permissions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team#role Team#role}
  */
  readonly role?: string;
  /**
  * The User emails to associate to the Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team#user_emails Team#user_emails}
  */
  readonly userEmails?: string[];
  /**
  * The User tokens to associate to the Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team#user_tokens Team#user_tokens}
  */
  readonly userTokens?: string[];
  /**
  * The Workspace tokens to associate to the Team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team#workspace_tokens Team#workspace_tokens}
  */
  readonly workspaceTokens?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team vantage_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/team vantage_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_team',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68'
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
    this._name = config.name;
    this._role = config.role;
    this._userEmails = config.userEmails;
    this._userTokens = config.userTokens;
    this._workspaceTokens = config.workspaceTokens;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // user_emails - computed: true, optional: true, required: false
  private _userEmails?: string[]; 
  public get userEmails() {
    return this.getListAttribute('user_emails');
  }
  public set userEmails(value: string[]) {
    this._userEmails = value;
  }
  public resetUserEmails() {
    this._userEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailsInput() {
    return this._userEmails;
  }

  // user_tokens - computed: true, optional: true, required: false
  private _userTokens?: string[]; 
  public get userTokens() {
    return this.getListAttribute('user_tokens');
  }
  public set userTokens(value: string[]) {
    this._userTokens = value;
  }
  public resetUserTokens() {
    this._userTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokensInput() {
    return this._userTokens;
  }

  // workspace_tokens - computed: true, optional: true, required: false
  private _workspaceTokens?: string[]; 
  public get workspaceTokens() {
    return this.getListAttribute('workspace_tokens');
  }
  public set workspaceTokens(value: string[]) {
    this._workspaceTokens = value;
  }
  public resetWorkspaceTokens() {
    this._workspaceTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceTokensInput() {
    return this._workspaceTokens;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      role: cdktf.stringToTerraform(this._role),
      user_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userEmails),
      user_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userTokens),
      workspace_tokens: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceTokens),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workspace_tokens: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceTokens),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
