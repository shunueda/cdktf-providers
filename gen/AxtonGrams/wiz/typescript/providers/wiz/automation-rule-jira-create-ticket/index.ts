// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationRuleJiraCreateTicketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#description AutomationRuleJiraCreateTicket#description}
  */
  readonly description?: string;
  /**
  * Enabled?
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#enabled AutomationRuleJiraCreateTicket#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Value should be wrapped in jsonencode() to avoid diff detection. This is required even though the API states it is not required.  Validate is performed by the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#filters AutomationRuleJiraCreateTicket#filters}
  */
  readonly filters: string;
  /**
  * Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#integration_id AutomationRuleJiraCreateTicket#integration_id}
  */
  readonly integrationId: string;
  /**
  * Issue alternative description field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_alternative_description_field AutomationRuleJiraCreateTicket#jira_alternative_description_field}
  */
  readonly jiraAlternativeDescriptionField?: string;
  /**
  * Issue assignee
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_assignee AutomationRuleJiraCreateTicket#jira_assignee}
  */
  readonly jiraAssignee?: string;
  /**
  * Upload issue evidence CSV as attachment?
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_attach_evidence_csv AutomationRuleJiraCreateTicket#jira_attach_evidence_csv}
  */
  readonly jiraAttachEvidenceCsv?: boolean | cdktf.IResolvable;
  /**
  * Issue components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_components AutomationRuleJiraCreateTicket#jira_components}
  */
  readonly jiraComponents?: string[];
  /**
  * Custom configuration fields as specified in Jira. Make sure you add the fields that are configured as required in Jira Project, otherwise ticket creation will fail. Must be valid JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_custom_fields AutomationRuleJiraCreateTicket#jira_custom_fields}
  */
  readonly jiraCustomFields?: string;
  /**
  * Issue description
  *     - Defaults to `Description:  {{issue.description}}\nStatus:       {{issue.status}}\nCreated:      {{issue.createdAt}}\nSeverity:     {{issue.severity}}\nProject:      {{#issue.projects}}{{name}}, {{/issue.projects}}\n\n---\nResource:\t            {{issue.entitySnapshot.name}}\nType:\t                {{issue.entitySnapshot.nativeType}}\nCloud Platform:\t        {{issue.entitySnapshot.cloudPlatform}}\nCloud Resource URL:     {{issue.entitySnapshot.cloudProviderURL}}\nSubscription Name (ID): {{issue.entitySnapshot.subscriptionName}} ({{issue.entitySnapshot.subscriptionExternalId}})\nRegion:\t                {{issue.entitySnapshot.region}}\nPlease click the following link to proceed to investigate the issue:\nhttps://{{wizDomain}}/issues#~(issue~'{{issue.id}})\nSource Automation Rule: {{ruleName}}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_description AutomationRuleJiraCreateTicket#jira_description}
  */
  readonly jiraDescription?: string;
  /**
  * Issue fix versions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_fix_version AutomationRuleJiraCreateTicket#jira_fix_version}
  */
  readonly jiraFixVersion?: string[];
  /**
  * Issue type
  *     - Defaults to `Vulnerability`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_issue_type AutomationRuleJiraCreateTicket#jira_issue_type}
  */
  readonly jiraIssueType?: string;
  /**
  * Issue labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_labels AutomationRuleJiraCreateTicket#jira_labels}
  */
  readonly jiraLabels?: string[];
  /**
  * Issue priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_priority AutomationRuleJiraCreateTicket#jira_priority}
  */
  readonly jiraPriority?: string;
  /**
  * Issue project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_project AutomationRuleJiraCreateTicket#jira_project}
  */
  readonly jiraProject?: string;
  /**
  * Issue summary
  *     - Defaults to `Wiz Issue: {{control.name}}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#jira_summary AutomationRuleJiraCreateTicket#jira_summary}
  */
  readonly jiraSummary?: string;
  /**
  * Name of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#name AutomationRuleJiraCreateTicket#name}
  */
  readonly name: string;
  /**
  * Wiz internal ID for a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#project_id AutomationRuleJiraCreateTicket#project_id}
  */
  readonly projectId?: string;
  /**
  * Trigger source.
  *     - Allowed values: 
  *         - ISSUES
  *         - CLOUD_EVENTS
  *         - CONTROL
  *         - CONFIGURATION_FINDING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_source AutomationRuleJiraCreateTicket#trigger_source}
  */
  readonly triggerSource: string;
  /**
  * Trigger type. Must be set to `CREATED` for wiz_automation_rule_jira_create_ticket.
  *     - Allowed values: 
  *         - CREATED
  *         - UPDATED
  *         - RESOLVED
  *         - REOPENED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#trigger_type AutomationRuleJiraCreateTicket#trigger_type}
  */
  readonly triggerType: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket wiz_automation_rule_jira_create_ticket}
*/
export class AutomationRuleJiraCreateTicket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_automation_rule_jira_create_ticket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationRuleJiraCreateTicket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationRuleJiraCreateTicket to import
  * @param importFromId The id of the existing AutomationRuleJiraCreateTicket that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationRuleJiraCreateTicket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_automation_rule_jira_create_ticket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_create_ticket wiz_automation_rule_jira_create_ticket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRuleJiraCreateTicketConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRuleJiraCreateTicketConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_automation_rule_jira_create_ticket',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5',
        providerVersionConstraint: '1.2.5'
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
    this._enabled = config.enabled;
    this._filters = config.filters;
    this._integrationId = config.integrationId;
    this._jiraAlternativeDescriptionField = config.jiraAlternativeDescriptionField;
    this._jiraAssignee = config.jiraAssignee;
    this._jiraAttachEvidenceCsv = config.jiraAttachEvidenceCsv;
    this._jiraComponents = config.jiraComponents;
    this._jiraCustomFields = config.jiraCustomFields;
    this._jiraDescription = config.jiraDescription;
    this._jiraFixVersion = config.jiraFixVersion;
    this._jiraIssueType = config.jiraIssueType;
    this._jiraLabels = config.jiraLabels;
    this._jiraPriority = config.jiraPriority;
    this._jiraProject = config.jiraProject;
    this._jiraSummary = config.jiraSummary;
    this._name = config.name;
    this._projectId = config.projectId;
    this._triggerSource = config.triggerSource;
    this._triggerType = config.triggerType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_id - computed: true, optional: false, required: false
  public get actionId() {
    return this.getStringAttribute('action_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // filters - computed: false, optional: false, required: true
  private _filters?: string; 
  public get filters() {
    return this.getStringAttribute('filters');
  }
  public set filters(value: string) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_id - computed: false, optional: false, required: true
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // jira_alternative_description_field - computed: false, optional: true, required: false
  private _jiraAlternativeDescriptionField?: string; 
  public get jiraAlternativeDescriptionField() {
    return this.getStringAttribute('jira_alternative_description_field');
  }
  public set jiraAlternativeDescriptionField(value: string) {
    this._jiraAlternativeDescriptionField = value;
  }
  public resetJiraAlternativeDescriptionField() {
    this._jiraAlternativeDescriptionField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraAlternativeDescriptionFieldInput() {
    return this._jiraAlternativeDescriptionField;
  }

  // jira_assignee - computed: false, optional: true, required: false
  private _jiraAssignee?: string; 
  public get jiraAssignee() {
    return this.getStringAttribute('jira_assignee');
  }
  public set jiraAssignee(value: string) {
    this._jiraAssignee = value;
  }
  public resetJiraAssignee() {
    this._jiraAssignee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraAssigneeInput() {
    return this._jiraAssignee;
  }

  // jira_attach_evidence_csv - computed: false, optional: true, required: false
  private _jiraAttachEvidenceCsv?: boolean | cdktf.IResolvable; 
  public get jiraAttachEvidenceCsv() {
    return this.getBooleanAttribute('jira_attach_evidence_csv');
  }
  public set jiraAttachEvidenceCsv(value: boolean | cdktf.IResolvable) {
    this._jiraAttachEvidenceCsv = value;
  }
  public resetJiraAttachEvidenceCsv() {
    this._jiraAttachEvidenceCsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraAttachEvidenceCsvInput() {
    return this._jiraAttachEvidenceCsv;
  }

  // jira_components - computed: false, optional: true, required: false
  private _jiraComponents?: string[]; 
  public get jiraComponents() {
    return this.getListAttribute('jira_components');
  }
  public set jiraComponents(value: string[]) {
    this._jiraComponents = value;
  }
  public resetJiraComponents() {
    this._jiraComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraComponentsInput() {
    return this._jiraComponents;
  }

  // jira_custom_fields - computed: false, optional: true, required: false
  private _jiraCustomFields?: string; 
  public get jiraCustomFields() {
    return this.getStringAttribute('jira_custom_fields');
  }
  public set jiraCustomFields(value: string) {
    this._jiraCustomFields = value;
  }
  public resetJiraCustomFields() {
    this._jiraCustomFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraCustomFieldsInput() {
    return this._jiraCustomFields;
  }

  // jira_description - computed: false, optional: true, required: false
  private _jiraDescription?: string; 
  public get jiraDescription() {
    return this.getStringAttribute('jira_description');
  }
  public set jiraDescription(value: string) {
    this._jiraDescription = value;
  }
  public resetJiraDescription() {
    this._jiraDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraDescriptionInput() {
    return this._jiraDescription;
  }

  // jira_fix_version - computed: false, optional: true, required: false
  private _jiraFixVersion?: string[]; 
  public get jiraFixVersion() {
    return this.getListAttribute('jira_fix_version');
  }
  public set jiraFixVersion(value: string[]) {
    this._jiraFixVersion = value;
  }
  public resetJiraFixVersion() {
    this._jiraFixVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraFixVersionInput() {
    return this._jiraFixVersion;
  }

  // jira_issue_type - computed: false, optional: true, required: false
  private _jiraIssueType?: string; 
  public get jiraIssueType() {
    return this.getStringAttribute('jira_issue_type');
  }
  public set jiraIssueType(value: string) {
    this._jiraIssueType = value;
  }
  public resetJiraIssueType() {
    this._jiraIssueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIssueTypeInput() {
    return this._jiraIssueType;
  }

  // jira_labels - computed: false, optional: true, required: false
  private _jiraLabels?: string[]; 
  public get jiraLabels() {
    return this.getListAttribute('jira_labels');
  }
  public set jiraLabels(value: string[]) {
    this._jiraLabels = value;
  }
  public resetJiraLabels() {
    this._jiraLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraLabelsInput() {
    return this._jiraLabels;
  }

  // jira_priority - computed: false, optional: true, required: false
  private _jiraPriority?: string; 
  public get jiraPriority() {
    return this.getStringAttribute('jira_priority');
  }
  public set jiraPriority(value: string) {
    this._jiraPriority = value;
  }
  public resetJiraPriority() {
    this._jiraPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraPriorityInput() {
    return this._jiraPriority;
  }

  // jira_project - computed: false, optional: true, required: false
  private _jiraProject?: string; 
  public get jiraProject() {
    return this.getStringAttribute('jira_project');
  }
  public set jiraProject(value: string) {
    this._jiraProject = value;
  }
  public resetJiraProject() {
    this._jiraProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraProjectInput() {
    return this._jiraProject;
  }

  // jira_summary - computed: false, optional: true, required: false
  private _jiraSummary?: string; 
  public get jiraSummary() {
    return this.getStringAttribute('jira_summary');
  }
  public set jiraSummary(value: string) {
    this._jiraSummary = value;
  }
  public resetJiraSummary() {
    this._jiraSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraSummaryInput() {
    return this._jiraSummary;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // trigger_source - computed: false, optional: false, required: true
  private _triggerSource?: string; 
  public get triggerSource() {
    return this.getStringAttribute('trigger_source');
  }
  public set triggerSource(value: string) {
    this._triggerSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSourceInput() {
    return this._triggerSource;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string[]; 
  public get triggerType() {
    return this.getListAttribute('trigger_type');
  }
  public set triggerType(value: string[]) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filters: cdktf.stringToTerraform(this._filters),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      jira_alternative_description_field: cdktf.stringToTerraform(this._jiraAlternativeDescriptionField),
      jira_assignee: cdktf.stringToTerraform(this._jiraAssignee),
      jira_attach_evidence_csv: cdktf.booleanToTerraform(this._jiraAttachEvidenceCsv),
      jira_components: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jiraComponents),
      jira_custom_fields: cdktf.stringToTerraform(this._jiraCustomFields),
      jira_description: cdktf.stringToTerraform(this._jiraDescription),
      jira_fix_version: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jiraFixVersion),
      jira_issue_type: cdktf.stringToTerraform(this._jiraIssueType),
      jira_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jiraLabels),
      jira_priority: cdktf.stringToTerraform(this._jiraPriority),
      jira_project: cdktf.stringToTerraform(this._jiraProject),
      jira_summary: cdktf.stringToTerraform(this._jiraSummary),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      trigger_source: cdktf.stringToTerraform(this._triggerSource),
      trigger_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerType),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filters: {
        value: cdktf.stringToHclTerraform(this._filters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_alternative_description_field: {
        value: cdktf.stringToHclTerraform(this._jiraAlternativeDescriptionField),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_assignee: {
        value: cdktf.stringToHclTerraform(this._jiraAssignee),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_attach_evidence_csv: {
        value: cdktf.booleanToHclTerraform(this._jiraAttachEvidenceCsv),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jira_components: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jiraComponents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      jira_custom_fields: {
        value: cdktf.stringToHclTerraform(this._jiraCustomFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_description: {
        value: cdktf.stringToHclTerraform(this._jiraDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_fix_version: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jiraFixVersion),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      jira_issue_type: {
        value: cdktf.stringToHclTerraform(this._jiraIssueType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jiraLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      jira_priority: {
        value: cdktf.stringToHclTerraform(this._jiraPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_project: {
        value: cdktf.stringToHclTerraform(this._jiraProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_summary: {
        value: cdktf.stringToHclTerraform(this._jiraSummary),
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
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_source: {
        value: cdktf.stringToHclTerraform(this._triggerSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggerType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
