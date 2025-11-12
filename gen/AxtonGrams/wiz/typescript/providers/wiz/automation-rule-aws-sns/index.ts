// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationRuleAwsSnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS SNS body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#aws_sns_body AutomationRuleAwsSns#aws_sns_body}
  */
  readonly awsSnsBody?: string;
  /**
  * Description of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#description AutomationRuleAwsSns#description}
  */
  readonly description: string;
  /**
  * Enabled?
  *     - Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#enabled AutomationRuleAwsSns#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Value should be wrapped in jsonencode() to avoid diff detection. This is required even though the API states it is not required.  Validate is performed by the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#filters AutomationRuleAwsSns#filters}
  */
  readonly filters: string;
  /**
  * Wiz identifier for the Integration to leverage for this action. Must be resource type integration_aws_sns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#integration_id AutomationRuleAwsSns#integration_id}
  */
  readonly integrationId: string;
  /**
  * Name of the automation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#name AutomationRuleAwsSns#name}
  */
  readonly name: string;
  /**
  * Wiz internal ID for a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#project_id AutomationRuleAwsSns#project_id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#trigger_source AutomationRuleAwsSns#trigger_source}
  */
  readonly triggerSource: string;
  /**
  * Trigger type.
  *     - Allowed values: 
  *         - CREATED
  *         - UPDATED
  *         - RESOLVED
  *         - REOPENED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#trigger_type AutomationRuleAwsSns#trigger_type}
  */
  readonly triggerType: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns wiz_automation_rule_aws_sns}
*/
export class AutomationRuleAwsSns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_automation_rule_aws_sns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationRuleAwsSns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationRuleAwsSns to import
  * @param importFromId The id of the existing AutomationRuleAwsSns that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationRuleAwsSns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_automation_rule_aws_sns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/automation_rule_aws_sns wiz_automation_rule_aws_sns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationRuleAwsSnsConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationRuleAwsSnsConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_automation_rule_aws_sns',
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
    this._awsSnsBody = config.awsSnsBody;
    this._description = config.description;
    this._enabled = config.enabled;
    this._filters = config.filters;
    this._integrationId = config.integrationId;
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

  // aws_sns_body - computed: false, optional: true, required: false
  private _awsSnsBody?: string; 
  public get awsSnsBody() {
    return this.getStringAttribute('aws_sns_body');
  }
  public set awsSnsBody(value: string) {
    this._awsSnsBody = value;
  }
  public resetAwsSnsBody() {
    this._awsSnsBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSnsBodyInput() {
    return this._awsSnsBody;
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
      aws_sns_body: cdktf.stringToTerraform(this._awsSnsBody),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filters: cdktf.stringToTerraform(this._filters),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      trigger_source: cdktf.stringToTerraform(this._triggerSource),
      trigger_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggerType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_sns_body: {
        value: cdktf.stringToHclTerraform(this._awsSnsBody),
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
