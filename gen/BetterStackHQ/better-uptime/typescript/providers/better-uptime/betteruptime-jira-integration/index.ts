// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetteruptimeJiraIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to automatically create issues in Jira on incident start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration#automatic_issue_creation BetteruptimeJiraIntegration#automatic_issue_creation}
  */
  readonly automaticIssueCreation?: boolean | cdktf.IResolvable;
  /**
  * Due to required authentication in Jira, the integration has to be created and removed in Better Stack web UI. You can set the ID of the Jira Integration to control in Better Stack, and it will be auto-imported during resource creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration#better_stack_id BetteruptimeJiraIntegration#better_stack_id}
  */
  readonly betterStackId?: string;
  /**
  * JSON object representing Jira fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration#jira_fields_json BetteruptimeJiraIntegration#jira_fields_json}
  */
  readonly jiraFieldsJson?: string;
  /**
  * The Jira issue type ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration#jira_issue_type_id BetteruptimeJiraIntegration#jira_issue_type_id}
  */
  readonly jiraIssueTypeId?: string;
  /**
  * The Jira project key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration#jira_project_key BetteruptimeJiraIntegration#jira_project_key}
  */
  readonly jiraProjectKey?: string;
  /**
  * The name of the Jira Integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration#name BetteruptimeJiraIntegration#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration betteruptime_jira_integration}
*/
export class BetteruptimeJiraIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_jira_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetteruptimeJiraIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetteruptimeJiraIntegration to import
  * @param importFromId The id of the existing BetteruptimeJiraIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetteruptimeJiraIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_jira_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/resources/betteruptime_jira_integration betteruptime_jira_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetteruptimeJiraIntegrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BetteruptimeJiraIntegrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_jira_integration',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticIssueCreation = config.automaticIssueCreation;
    this._betterStackId = config.betterStackId;
    this._jiraFieldsJson = config.jiraFieldsJson;
    this._jiraIssueTypeId = config.jiraIssueTypeId;
    this._jiraProjectKey = config.jiraProjectKey;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_issue_creation - computed: true, optional: true, required: false
  private _automaticIssueCreation?: boolean | cdktf.IResolvable; 
  public get automaticIssueCreation() {
    return this.getBooleanAttribute('automatic_issue_creation');
  }
  public set automaticIssueCreation(value: boolean | cdktf.IResolvable) {
    this._automaticIssueCreation = value;
  }
  public resetAutomaticIssueCreation() {
    this._automaticIssueCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticIssueCreationInput() {
    return this._automaticIssueCreation;
  }

  // better_stack_id - computed: false, optional: true, required: false
  private _betterStackId?: string; 
  public get betterStackId() {
    return this.getStringAttribute('better_stack_id');
  }
  public set betterStackId(value: string) {
    this._betterStackId = value;
  }
  public resetBetterStackId() {
    this._betterStackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betterStackIdInput() {
    return this._betterStackId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jira_fields_json - computed: true, optional: true, required: false
  private _jiraFieldsJson?: string; 
  public get jiraFieldsJson() {
    return this.getStringAttribute('jira_fields_json');
  }
  public set jiraFieldsJson(value: string) {
    this._jiraFieldsJson = value;
  }
  public resetJiraFieldsJson() {
    this._jiraFieldsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraFieldsJsonInput() {
    return this._jiraFieldsJson;
  }

  // jira_issue_type_id - computed: true, optional: true, required: false
  private _jiraIssueTypeId?: string; 
  public get jiraIssueTypeId() {
    return this.getStringAttribute('jira_issue_type_id');
  }
  public set jiraIssueTypeId(value: string) {
    this._jiraIssueTypeId = value;
  }
  public resetJiraIssueTypeId() {
    this._jiraIssueTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueTypeIdInput() {
    return this._jiraIssueTypeId;
  }

  // jira_project_key - computed: true, optional: true, required: false
  private _jiraProjectKey?: string; 
  public get jiraProjectKey() {
    return this.getStringAttribute('jira_project_key');
  }
  public set jiraProjectKey(value: string) {
    this._jiraProjectKey = value;
  }
  public resetJiraProjectKey() {
    this._jiraProjectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraProjectKeyInput() {
    return this._jiraProjectKey;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automatic_issue_creation: cdktf.booleanToTerraform(this._automaticIssueCreation),
      better_stack_id: cdktf.stringToTerraform(this._betterStackId),
      jira_fields_json: cdktf.stringToTerraform(this._jiraFieldsJson),
      jira_issue_type_id: cdktf.stringToTerraform(this._jiraIssueTypeId),
      jira_project_key: cdktf.stringToTerraform(this._jiraProjectKey),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_issue_creation: {
        value: cdktf.booleanToHclTerraform(this._automaticIssueCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      better_stack_id: {
        value: cdktf.stringToHclTerraform(this._betterStackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_fields_json: {
        value: cdktf.stringToHclTerraform(this._jiraFieldsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_issue_type_id: {
        value: cdktf.stringToHclTerraform(this._jiraIssueTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_project_key: {
        value: cdktf.stringToHclTerraform(this._jiraProjectKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
