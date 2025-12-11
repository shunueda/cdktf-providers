// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface JiraIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API token for the user email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#api_token JiraIntegration#api_token}
  */
  readonly apiToken?: string;
  /**
  * Jira display name for the assignee
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#assignee_display_name JiraIntegration#assignee_display_name}
  */
  readonly assigneeDisplayName?: string;
  /**
  * Jira user name for the assignee
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#assignee_name JiraIntegration#assignee_name}
  */
  readonly assigneeName: string;
  /**
  * Authentication method used when creating the Jira integration. One of `EmailAndToken` or `UsernameAndPassword`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#auth_method JiraIntegration#auth_method}
  */
  readonly authMethod: string;
  /**
  * Base URL of the Jira instance that's integrated with SignalFx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#base_url JiraIntegration#base_url}
  */
  readonly baseUrl: string;
  /**
  * Whether the integration is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#enabled JiraIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#id JiraIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Issue type (for example, Story) for tickets that Jira creates for detector notifications. Splunk Observability Cloud validates issue types, so you must specify a type that's valid for the Jira project specified in `projectKey`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#issue_type JiraIntegration#issue_type}
  */
  readonly issueType: string;
  /**
  * Name of the integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#name JiraIntegration#name}
  */
  readonly name: string;
  /**
  * Password used to authenticate the Jira integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#password JiraIntegration#password}
  */
  readonly password?: string;
  /**
  * Jira key of an existing project. When Jira creates a new ticket for a detector notification, the ticket is assigned to this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#project_key JiraIntegration#project_key}
  */
  readonly projectKey: string;
  /**
  * Email address used to authenticate the Jira integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#user_email JiraIntegration#user_email}
  */
  readonly userEmail?: string;
  /**
  * User name used to authenticate the Jira integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#username JiraIntegration#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration signalfx_jira_integration}
*/
export class JiraIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_jira_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a JiraIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the JiraIntegration to import
  * @param importFromId The id of the existing JiraIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the JiraIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_jira_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/jira_integration signalfx_jira_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options JiraIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: JiraIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_jira_integration',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiToken = config.apiToken;
    this._assigneeDisplayName = config.assigneeDisplayName;
    this._assigneeName = config.assigneeName;
    this._authMethod = config.authMethod;
    this._baseUrl = config.baseUrl;
    this._enabled = config.enabled;
    this._id = config.id;
    this._issueType = config.issueType;
    this._name = config.name;
    this._password = config.password;
    this._projectKey = config.projectKey;
    this._userEmail = config.userEmail;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // assignee_display_name - computed: false, optional: true, required: false
  private _assigneeDisplayName?: string; 
  public get assigneeDisplayName() {
    return this.getStringAttribute('assignee_display_name');
  }
  public set assigneeDisplayName(value: string) {
    this._assigneeDisplayName = value;
  }
  public resetAssigneeDisplayName() {
    this._assigneeDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeDisplayNameInput() {
    return this._assigneeDisplayName;
  }

  // assignee_name - computed: false, optional: false, required: true
  private _assigneeName?: string; 
  public get assigneeName() {
    return this.getStringAttribute('assignee_name');
  }
  public set assigneeName(value: string) {
    this._assigneeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeNameInput() {
    return this._assigneeName;
  }

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // enabled - computed: false, optional: false, required: true
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

  // issue_type - computed: false, optional: false, required: true
  private _issueType?: string; 
  public get issueType() {
    return this.getStringAttribute('issue_type');
  }
  public set issueType(value: string) {
    this._issueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueTypeInput() {
    return this._issueType;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // user_email - computed: false, optional: true, required: false
  private _userEmail?: string; 
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }
  public set userEmail(value: string) {
    this._userEmail = value;
  }
  public resetUserEmail() {
    this._userEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEmailInput() {
    return this._userEmail;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      assignee_display_name: cdktf.stringToTerraform(this._assigneeDisplayName),
      assignee_name: cdktf.stringToTerraform(this._assigneeName),
      auth_method: cdktf.stringToTerraform(this._authMethod),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      issue_type: cdktf.stringToTerraform(this._issueType),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      project_key: cdktf.stringToTerraform(this._projectKey),
      user_email: cdktf.stringToTerraform(this._userEmail),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignee_display_name: {
        value: cdktf.stringToHclTerraform(this._assigneeDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignee_name: {
        value: cdktf.stringToHclTerraform(this._assigneeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issue_type: {
        value: cdktf.stringToHclTerraform(this._issueType),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_email: {
        value: cdktf.stringToHclTerraform(this._userEmail),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
