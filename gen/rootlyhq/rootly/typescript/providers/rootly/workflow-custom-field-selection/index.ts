// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowCustomFieldSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The custom field for this selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection#custom_field_id WorkflowCustomFieldSelection#custom_field_id}
  */
  readonly customFieldId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection#id WorkflowCustomFieldSelection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The trigger condition. Value must be one of `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection#incident_condition WorkflowCustomFieldSelection#incident_condition}
  */
  readonly incidentCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection#selected_option_ids WorkflowCustomFieldSelection#selected_option_ids}
  */
  readonly selectedOptionIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection#values WorkflowCustomFieldSelection#values}
  */
  readonly values?: string[];
  /**
  * The workflow for this selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection#workflow_id WorkflowCustomFieldSelection#workflow_id}
  */
  readonly workflowId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection rootly_workflow_custom_field_selection}
*/
export class WorkflowCustomFieldSelection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_custom_field_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowCustomFieldSelection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowCustomFieldSelection to import
  * @param importFromId The id of the existing WorkflowCustomFieldSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowCustomFieldSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_custom_field_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/resources/workflow_custom_field_selection rootly_workflow_custom_field_selection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowCustomFieldSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowCustomFieldSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_custom_field_selection',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customFieldId = config.customFieldId;
    this._id = config.id;
    this._incidentCondition = config.incidentCondition;
    this._selectedOptionIds = config.selectedOptionIds;
    this._values = config.values;
    this._workflowId = config.workflowId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_field_id - computed: false, optional: false, required: true
  private _customFieldId?: number; 
  public get customFieldId() {
    return this.getNumberAttribute('custom_field_id');
  }
  public set customFieldId(value: number) {
    this._customFieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldIdInput() {
    return this._customFieldId;
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

  // incident_condition - computed: false, optional: true, required: false
  private _incidentCondition?: string; 
  public get incidentCondition() {
    return this.getStringAttribute('incident_condition');
  }
  public set incidentCondition(value: string) {
    this._incidentCondition = value;
  }
  public resetIncidentCondition() {
    this._incidentCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionInput() {
    return this._incidentCondition;
  }

  // selected_option_ids - computed: false, optional: true, required: false
  private _selectedOptionIds?: number[]; 
  public get selectedOptionIds() {
    return this.getNumberListAttribute('selected_option_ids');
  }
  public set selectedOptionIds(value: number[]) {
    this._selectedOptionIds = value;
  }
  public resetSelectedOptionIds() {
    this._selectedOptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedOptionIdsInput() {
    return this._selectedOptionIds;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // workflow_id - computed: true, optional: true, required: false
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_field_id: cdktf.numberToTerraform(this._customFieldId),
      id: cdktf.stringToTerraform(this._id),
      incident_condition: cdktf.stringToTerraform(this._incidentCondition),
      selected_option_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedOptionIds),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_field_id: {
        value: cdktf.numberToHclTerraform(this._customFieldId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_condition: {
        value: cdktf.stringToHclTerraform(this._incidentCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_option_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedOptionIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._values),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
