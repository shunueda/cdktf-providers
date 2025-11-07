// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationRuleServicenowUpdateTicketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#description AutomationRuleServicenowUpdateTicket#description}
  */
  readonly description: string;
  /**
  * Enabled?
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#enabled AutomationRuleServicenowUpdateTicket#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Value should be wrapped in jsonencode() to avoid diff detection. This is required even though the API states it is not required.  Validate is performed by the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#filters AutomationRuleServicenowUpdateTicket#filters}
  */
  readonly filters: string;
  /**
  * Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#integration_id AutomationRuleServicenowUpdateTicket#integration_id}
  */
  readonly integrationId: string;
  /**
  * Name of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#name AutomationRuleServicenowUpdateTicket#name}
  */
  readonly name: string;
  /**
  * Wiz internal ID for a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#project_id AutomationRuleServicenowUpdateTicket#project_id}
  */
  readonly projectId?: string;
  /**
  * Upload issues report as attachment Only relevant in CONTROL-triggered Actions.
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_attach_issues_report AutomationRuleServicenowUpdateTicket#servicenow_attach_issues_report}
  */
  readonly servicenowAttachIssuesReport?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_fields AutomationRuleServicenowUpdateTicket#servicenow_fields}
  */
  readonly servicenowFields?: string;
  /**
  * Table name to which new tickets will be added to, e.g: 'incident'.
  *     - Defaults to `incident`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#servicenow_table_name AutomationRuleServicenowUpdateTicket#servicenow_table_name}
  */
  readonly servicenowTableName?: string;
  /**
  * Trigger source.
  *     - Allowed values: 
  *         - ISSUES
  *         - CLOUD_EVENTS
  *         - CONTROL
  *         - CONFIGURATION_FINDING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_source AutomationRuleServicenowUpdateTicket#trigger_source}
  */
  readonly triggerSource: string;
  /**
  * Trigger type. Must be set to `CREATED` for wiz_automation_rule_servicenow_update_ticket.
  *     - Allowed values: 
  *         - CREATED
  *         - UPDATED
  *         - RESOLVED
  *         - REOPENED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#trigger_type AutomationRuleServicenowUpdateTicket#trigger_type}
  */
  readonly triggerType: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket wiz_automation_rule_servicenow_update_ticket}
*/
export class AutomationRuleServicenowUpdateTicket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_automation_rule_servicenow_update_ticket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationRuleServicenowUpdateTicket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationRuleServicenowUpdateTicket to import
  * @param importFromId The id of the existing AutomationRuleServicenowUpdateTicket that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationRuleServicenowUpdateTicket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_automation_rule_servicenow_update_ticket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_servicenow_update_ticket wiz_automation_rule_servicenow_update_ticket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRuleServicenowUpdateTicketConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRuleServicenowUpdateTicketConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_automation_rule_servicenow_update_ticket',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
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
    this._name = config.name;
    this._projectId = config.projectId;
    this._servicenowAttachIssuesReport = config.servicenowAttachIssuesReport;
    this._servicenowFields = config.servicenowFields;
    this._servicenowTableName = config.servicenowTableName;
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

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // servicenow_attach_issues_report - computed: false, optional: true, required: false
  private _servicenowAttachIssuesReport?: boolean | cdktf.IResolvable; 
  public get servicenowAttachIssuesReport() {
    return this.getBooleanAttribute('servicenow_attach_issues_report');
  }
  public set servicenowAttachIssuesReport(value: boolean | cdktf.IResolvable) {
    this._servicenowAttachIssuesReport = value;
  }
  public resetServicenowAttachIssuesReport() {
    this._servicenowAttachIssuesReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowAttachIssuesReportInput() {
    return this._servicenowAttachIssuesReport;
  }

  // servicenow_fields - computed: false, optional: true, required: false
  private _servicenowFields?: string; 
  public get servicenowFields() {
    return this.getStringAttribute('servicenow_fields');
  }
  public set servicenowFields(value: string) {
    this._servicenowFields = value;
  }
  public resetServicenowFields() {
    this._servicenowFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowFieldsInput() {
    return this._servicenowFields;
  }

  // servicenow_table_name - computed: false, optional: true, required: false
  private _servicenowTableName?: string; 
  public get servicenowTableName() {
    return this.getStringAttribute('servicenow_table_name');
  }
  public set servicenowTableName(value: string) {
    this._servicenowTableName = value;
  }
  public resetServicenowTableName() {
    this._servicenowTableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenowTableNameInput() {
    return this._servicenowTableName;
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
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      servicenow_attach_issues_report: cdktf.booleanToTerraform(this._servicenowAttachIssuesReport),
      servicenow_fields: cdktf.stringToTerraform(this._servicenowFields),
      servicenow_table_name: cdktf.stringToTerraform(this._servicenowTableName),
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
      servicenow_attach_issues_report: {
        value: cdktf.booleanToHclTerraform(this._servicenowAttachIssuesReport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      servicenow_fields: {
        value: cdktf.stringToHclTerraform(this._servicenowFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicenow_table_name: {
        value: cdktf.stringToHclTerraform(this._servicenowTableName),
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
