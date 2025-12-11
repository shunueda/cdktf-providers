// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertChannelJiraServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the integration is Unidirectional or Bidirectional. Defaults to Unidirectional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#configuration AlertChannelJiraServer#configuration}
  */
  readonly configuration?: string;
  /**
  * A Custom Template JSON file to populate fields in the new Jira issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#custom_template_file AlertChannelJiraServer#custom_template_file}
  */
  readonly customTemplateFile?: string;
  /**
  * The state of the external integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#enabled AlertChannelJiraServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#group_issues_by AlertChannelJiraServer#group_issues_by}
  */
  readonly groupIssuesBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#id AlertChannelJiraServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Jira issue type (such as a Bug) to create when a new Jira issue is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#issue_type AlertChannelJiraServer#issue_type}
  */
  readonly issueType: string;
  /**
  * The URL of your Jira implementation without https protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#jira_url AlertChannelJiraServer#jira_url}
  */
  readonly jiraUrl: string;
  /**
  * The alert channel integration name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#name AlertChannelJiraServer#name}
  */
  readonly name: string;
  /**
  * The password to the Jira user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#password AlertChannelJiraServer#password}
  */
  readonly password: string;
  /**
  * The project key for the Jira project where the new Jira issues should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#project_key AlertChannelJiraServer#project_key}
  */
  readonly projectKey: string;
  /**
  * Whether to test the integration of an alert channel upon creation and modification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#test_integration AlertChannelJiraServer#test_integration}
  */
  readonly testIntegration?: boolean | cdktf.IResolvable;
  /**
  * The Jira user name. Lacework recommends a dedicated Jira user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#username AlertChannelJiraServer#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server lacework_alert_channel_jira_server}
*/
export class AlertChannelJiraServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_alert_channel_jira_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertChannelJiraServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertChannelJiraServer to import
  * @param importFromId The id of the existing AlertChannelJiraServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertChannelJiraServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_alert_channel_jira_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/alert_channel_jira_server lacework_alert_channel_jira_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertChannelJiraServerConfig
  */
  public constructor(scope: Construct, id: string, config: AlertChannelJiraServerConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_alert_channel_jira_server',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration = config.configuration;
    this._customTemplateFile = config.customTemplateFile;
    this._enabled = config.enabled;
    this._groupIssuesBy = config.groupIssuesBy;
    this._id = config.id;
    this._issueType = config.issueType;
    this._jiraUrl = config.jiraUrl;
    this._name = config.name;
    this._password = config.password;
    this._projectKey = config.projectKey;
    this._testIntegration = config.testIntegration;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // created_or_updated_by - computed: true, optional: false, required: false
  public get createdOrUpdatedBy() {
    return this.getStringAttribute('created_or_updated_by');
  }

  // created_or_updated_time - computed: true, optional: false, required: false
  public get createdOrUpdatedTime() {
    return this.getStringAttribute('created_or_updated_time');
  }

  // custom_template_file - computed: false, optional: true, required: false
  private _customTemplateFile?: string; 
  public get customTemplateFile() {
    return this.getStringAttribute('custom_template_file');
  }
  public set customTemplateFile(value: string) {
    this._customTemplateFile = value;
  }
  public resetCustomTemplateFile() {
    this._customTemplateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTemplateFileInput() {
    return this._customTemplateFile;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group_issues_by - computed: false, optional: true, required: false
  private _groupIssuesBy?: string; 
  public get groupIssuesBy() {
    return this.getStringAttribute('group_issues_by');
  }
  public set groupIssuesBy(value: string) {
    this._groupIssuesBy = value;
  }
  public resetGroupIssuesBy() {
    this._groupIssuesBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIssuesByInput() {
    return this._groupIssuesBy;
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

  // intg_guid - computed: true, optional: false, required: false
  public get intgGuid() {
    return this.getStringAttribute('intg_guid');
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

  // jira_url - computed: false, optional: false, required: true
  private _jiraUrl?: string; 
  public get jiraUrl() {
    return this.getStringAttribute('jira_url');
  }
  public set jiraUrl(value: string) {
    this._jiraUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraUrlInput() {
    return this._jiraUrl;
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

  // org_level - computed: true, optional: false, required: false
  public get orgLevel() {
    return this.getBooleanAttribute('org_level');
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

  // test_integration - computed: false, optional: true, required: false
  private _testIntegration?: boolean | cdktf.IResolvable; 
  public get testIntegration() {
    return this.getBooleanAttribute('test_integration');
  }
  public set testIntegration(value: boolean | cdktf.IResolvable) {
    this._testIntegration = value;
  }
  public resetTestIntegration() {
    this._testIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntegrationInput() {
    return this._testIntegration;
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: cdktf.stringToTerraform(this._configuration),
      custom_template_file: cdktf.stringToTerraform(this._customTemplateFile),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group_issues_by: cdktf.stringToTerraform(this._groupIssuesBy),
      id: cdktf.stringToTerraform(this._id),
      issue_type: cdktf.stringToTerraform(this._issueType),
      jira_url: cdktf.stringToTerraform(this._jiraUrl),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      project_key: cdktf.stringToTerraform(this._projectKey),
      test_integration: cdktf.booleanToTerraform(this._testIntegration),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_template_file: {
        value: cdktf.stringToHclTerraform(this._customTemplateFile),
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
      group_issues_by: {
        value: cdktf.stringToHclTerraform(this._groupIssuesBy),
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
      issue_type: {
        value: cdktf.stringToHclTerraform(this._issueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_url: {
        value: cdktf.stringToHclTerraform(this._jiraUrl),
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
      test_integration: {
        value: cdktf.booleanToHclTerraform(this._testIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
