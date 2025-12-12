// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowFormFieldConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The custom field for this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#form_field_id WorkflowFormFieldCondition#form_field_id}
  */
  readonly formFieldId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#id WorkflowFormFieldCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The trigger condition. Value must be one of `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#incident_condition WorkflowFormFieldCondition#incident_condition}
  */
  readonly incidentCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#selected_catalog_entity_ids WorkflowFormFieldCondition#selected_catalog_entity_ids}
  */
  readonly selectedCatalogEntityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#selected_functionality_ids WorkflowFormFieldCondition#selected_functionality_ids}
  */
  readonly selectedFunctionalityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#selected_group_ids WorkflowFormFieldCondition#selected_group_ids}
  */
  readonly selectedGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#selected_option_ids WorkflowFormFieldCondition#selected_option_ids}
  */
  readonly selectedOptionIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#selected_service_ids WorkflowFormFieldCondition#selected_service_ids}
  */
  readonly selectedServiceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#selected_user_ids WorkflowFormFieldCondition#selected_user_ids}
  */
  readonly selectedUserIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#values WorkflowFormFieldCondition#values}
  */
  readonly values?: string[];
  /**
  * The workflow for this condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#workflow_id WorkflowFormFieldCondition#workflow_id}
  */
  readonly workflowId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition rootly_workflow_form_field_condition}
*/
export class WorkflowFormFieldCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_form_field_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowFormFieldCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowFormFieldCondition to import
  * @param importFromId The id of the existing WorkflowFormFieldCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowFormFieldCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_form_field_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_form_field_condition rootly_workflow_form_field_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowFormFieldConditionConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowFormFieldConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_form_field_condition',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._formFieldId = config.formFieldId;
    this._id = config.id;
    this._incidentCondition = config.incidentCondition;
    this._selectedCatalogEntityIds = config.selectedCatalogEntityIds;
    this._selectedFunctionalityIds = config.selectedFunctionalityIds;
    this._selectedGroupIds = config.selectedGroupIds;
    this._selectedOptionIds = config.selectedOptionIds;
    this._selectedServiceIds = config.selectedServiceIds;
    this._selectedUserIds = config.selectedUserIds;
    this._values = config.values;
    this._workflowId = config.workflowId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form_field_id - computed: false, optional: false, required: true
  private _formFieldId?: string; 
  public get formFieldId() {
    return this.getStringAttribute('form_field_id');
  }
  public set formFieldId(value: string) {
    this._formFieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldIdInput() {
    return this._formFieldId;
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

  // selected_catalog_entity_ids - computed: false, optional: true, required: false
  private _selectedCatalogEntityIds?: string[]; 
  public get selectedCatalogEntityIds() {
    return this.getListAttribute('selected_catalog_entity_ids');
  }
  public set selectedCatalogEntityIds(value: string[]) {
    this._selectedCatalogEntityIds = value;
  }
  public resetSelectedCatalogEntityIds() {
    this._selectedCatalogEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedCatalogEntityIdsInput() {
    return this._selectedCatalogEntityIds;
  }

  // selected_functionality_ids - computed: false, optional: true, required: false
  private _selectedFunctionalityIds?: string[]; 
  public get selectedFunctionalityIds() {
    return this.getListAttribute('selected_functionality_ids');
  }
  public set selectedFunctionalityIds(value: string[]) {
    this._selectedFunctionalityIds = value;
  }
  public resetSelectedFunctionalityIds() {
    this._selectedFunctionalityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedFunctionalityIdsInput() {
    return this._selectedFunctionalityIds;
  }

  // selected_group_ids - computed: false, optional: true, required: false
  private _selectedGroupIds?: string[]; 
  public get selectedGroupIds() {
    return this.getListAttribute('selected_group_ids');
  }
  public set selectedGroupIds(value: string[]) {
    this._selectedGroupIds = value;
  }
  public resetSelectedGroupIds() {
    this._selectedGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedGroupIdsInput() {
    return this._selectedGroupIds;
  }

  // selected_option_ids - computed: false, optional: true, required: false
  private _selectedOptionIds?: string[]; 
  public get selectedOptionIds() {
    return this.getListAttribute('selected_option_ids');
  }
  public set selectedOptionIds(value: string[]) {
    this._selectedOptionIds = value;
  }
  public resetSelectedOptionIds() {
    this._selectedOptionIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedOptionIdsInput() {
    return this._selectedOptionIds;
  }

  // selected_service_ids - computed: false, optional: true, required: false
  private _selectedServiceIds?: string[]; 
  public get selectedServiceIds() {
    return this.getListAttribute('selected_service_ids');
  }
  public set selectedServiceIds(value: string[]) {
    this._selectedServiceIds = value;
  }
  public resetSelectedServiceIds() {
    this._selectedServiceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedServiceIdsInput() {
    return this._selectedServiceIds;
  }

  // selected_user_ids - computed: false, optional: true, required: false
  private _selectedUserIds?: number[]; 
  public get selectedUserIds() {
    return this.getNumberListAttribute('selected_user_ids');
  }
  public set selectedUserIds(value: number[]) {
    this._selectedUserIds = value;
  }
  public resetSelectedUserIds() {
    this._selectedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedUserIdsInput() {
    return this._selectedUserIds;
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
      form_field_id: cdktf.stringToTerraform(this._formFieldId),
      id: cdktf.stringToTerraform(this._id),
      incident_condition: cdktf.stringToTerraform(this._incidentCondition),
      selected_catalog_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedCatalogEntityIds),
      selected_functionality_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedFunctionalityIds),
      selected_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedGroupIds),
      selected_option_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedOptionIds),
      selected_service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._selectedServiceIds),
      selected_user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._selectedUserIds),
      values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._values),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      form_field_id: {
        value: cdktf.stringToHclTerraform(this._formFieldId),
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
      incident_condition: {
        value: cdktf.stringToHclTerraform(this._incidentCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selected_catalog_entity_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedCatalogEntityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      selected_functionality_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedFunctionalityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      selected_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      selected_option_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedOptionIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      selected_service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._selectedServiceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      selected_user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._selectedUserIds),
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
