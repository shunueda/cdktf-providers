// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationRuleJiraTransitionTicketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#description AutomationRuleJiraTransitionTicket#description}
  */
  readonly description?: string;
  /**
  * Enabled?
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#enabled AutomationRuleJiraTransitionTicket#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Value should be wrapped in jsonencode() to avoid diff detection. This is required even though the API states it is not required.  Validate is performed by the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#filters AutomationRuleJiraTransitionTicket#filters}
  */
  readonly filters: string;
  /**
  * Wiz identifier for the Integration to leverage for this action. Must be resource type integration_jira.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#integration_id AutomationRuleJiraTransitionTicket#integration_id}
  */
  readonly integrationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_advanced_fields AutomationRuleJiraTransitionTicket#jira_advanced_fields}
  */
  readonly jiraAdvancedFields?: string;
  /**
  * Upload issues report as attachment Only relevant in CONTROL-triggered Actions.
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_attach_evidence_csv AutomationRuleJiraTransitionTicket#jira_attach_evidence_csv}
  */
  readonly jiraAttachEvidenceCsv?: boolean | cdktf.IResolvable;
  /**
  * Issue Jira comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment AutomationRuleJiraTransitionTicket#jira_comment}
  */
  readonly jiraComment?: string;
  /**
  * Whether or not to send comment during follow-up call, if this is disabled comment will be sent as update field
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_comment_on_transition AutomationRuleJiraTransitionTicket#jira_comment_on_transition}
  */
  readonly jiraCommentOnTransition?: boolean | cdktf.IResolvable;
  /**
  * Issue project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_project AutomationRuleJiraTransitionTicket#jira_project}
  */
  readonly jiraProject?: string;
  /**
  * Issue transition ID or Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#jira_transition_id AutomationRuleJiraTransitionTicket#jira_transition_id}
  */
  readonly jiraTransitionId?: string;
  /**
  * Name of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#name AutomationRuleJiraTransitionTicket#name}
  */
  readonly name: string;
  /**
  * Wiz internal ID for a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#project_id AutomationRuleJiraTransitionTicket#project_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_source AutomationRuleJiraTransitionTicket#trigger_source}
  */
  readonly triggerSource: string;
  /**
  * Trigger type. Must be set to `CREATED` for wiz_automation_rule_jira_transition_ticket.
  *     - Allowed values: 
  *         - CREATED
  *         - UPDATED
  *         - RESOLVED
  *         - REOPENED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#trigger_type AutomationRuleJiraTransitionTicket#trigger_type}
  */
  readonly triggerType: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket wiz_automation_rule_jira_transition_ticket}
*/
export class AutomationRuleJiraTransitionTicket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_automation_rule_jira_transition_ticket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationRuleJiraTransitionTicket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationRuleJiraTransitionTicket to import
  * @param importFromId The id of the existing AutomationRuleJiraTransitionTicket that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationRuleJiraTransitionTicket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_automation_rule_jira_transition_ticket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_jira_transition_ticket wiz_automation_rule_jira_transition_ticket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRuleJiraTransitionTicketConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRuleJiraTransitionTicketConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_automation_rule_jira_transition_ticket',
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
    this._jiraAdvancedFields = config.jiraAdvancedFields;
    this._jiraAttachEvidenceCsv = config.jiraAttachEvidenceCsv;
    this._jiraComment = config.jiraComment;
    this._jiraCommentOnTransition = config.jiraCommentOnTransition;
    this._jiraProject = config.jiraProject;
    this._jiraTransitionId = config.jiraTransitionId;
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

  // jira_advanced_fields - computed: false, optional: true, required: false
  private _jiraAdvancedFields?: string; 
  public get jiraAdvancedFields() {
    return this.getStringAttribute('jira_advanced_fields');
  }
  public set jiraAdvancedFields(value: string) {
    this._jiraAdvancedFields = value;
  }
  public resetJiraAdvancedFields() {
    this._jiraAdvancedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraAdvancedFieldsInput() {
    return this._jiraAdvancedFields;
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

  // jira_comment - computed: false, optional: true, required: false
  private _jiraComment?: string; 
  public get jiraComment() {
    return this.getStringAttribute('jira_comment');
  }
  public set jiraComment(value: string) {
    this._jiraComment = value;
  }
  public resetJiraComment() {
    this._jiraComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraCommentInput() {
    return this._jiraComment;
  }

  // jira_comment_on_transition - computed: false, optional: true, required: false
  private _jiraCommentOnTransition?: boolean | cdktf.IResolvable; 
  public get jiraCommentOnTransition() {
    return this.getBooleanAttribute('jira_comment_on_transition');
  }
  public set jiraCommentOnTransition(value: boolean | cdktf.IResolvable) {
    this._jiraCommentOnTransition = value;
  }
  public resetJiraCommentOnTransition() {
    this._jiraCommentOnTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraCommentOnTransitionInput() {
    return this._jiraCommentOnTransition;
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

  // jira_transition_id - computed: false, optional: true, required: false
  private _jiraTransitionId?: string; 
  public get jiraTransitionId() {
    return this.getStringAttribute('jira_transition_id');
  }
  public set jiraTransitionId(value: string) {
    this._jiraTransitionId = value;
  }
  public resetJiraTransitionId() {
    this._jiraTransitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraTransitionIdInput() {
    return this._jiraTransitionId;
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
      jira_advanced_fields: cdktf.stringToTerraform(this._jiraAdvancedFields),
      jira_attach_evidence_csv: cdktf.booleanToTerraform(this._jiraAttachEvidenceCsv),
      jira_comment: cdktf.stringToTerraform(this._jiraComment),
      jira_comment_on_transition: cdktf.booleanToTerraform(this._jiraCommentOnTransition),
      jira_project: cdktf.stringToTerraform(this._jiraProject),
      jira_transition_id: cdktf.stringToTerraform(this._jiraTransitionId),
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
      jira_advanced_fields: {
        value: cdktf.stringToHclTerraform(this._jiraAdvancedFields),
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
      jira_comment: {
        value: cdktf.stringToHclTerraform(this._jiraComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_comment_on_transition: {
        value: cdktf.booleanToHclTerraform(this._jiraCommentOnTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jira_project: {
        value: cdktf.stringToHclTerraform(this._jiraProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_transition_id: {
        value: cdktf.stringToHclTerraform(this._jiraTransitionId),
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
