// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RetrospectiveProcessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Retrospective process ID from which retrospective steps have to be copied. To use starter template for retrospective steps provide value: 'starter_template'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#copy_from RetrospectiveProcess#copy_from}
  */
  readonly copyFrom?: string;
  /**
  * The description of the retrospective process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#description RetrospectiveProcess#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#id RetrospectiveProcess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is the retrospective process default?. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#is_default RetrospectiveProcess#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The name of the retrospective process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#name RetrospectiveProcess#name}
  */
  readonly name: string;
  /**
  * retrospective_process_matching_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#retrospective_process_matching_criteria RetrospectiveProcess#retrospective_process_matching_criteria}
  */
  readonly retrospectiveProcessMatchingCriteria: RetrospectiveProcessRetrospectiveProcessMatchingCriteria;
}
export interface RetrospectiveProcessRetrospectiveProcessMatchingCriteria {
  /**
  * Teams for process matching criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#group_ids RetrospectiveProcess#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Incident types for process matching criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#incident_type_ids RetrospectiveProcess#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * Severities for process matching criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#severity_ids RetrospectiveProcess#severity_ids}
  */
  readonly severityIds?: string[];
}

export function retrospectiveProcessRetrospectiveProcessMatchingCriteriaToTerraform(struct?: RetrospectiveProcessRetrospectiveProcessMatchingCriteriaOutputReference | RetrospectiveProcessRetrospectiveProcessMatchingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    incident_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentTypeIds),
    severity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severityIds),
  }
}


export function retrospectiveProcessRetrospectiveProcessMatchingCriteriaToHclTerraform(struct?: RetrospectiveProcessRetrospectiveProcessMatchingCriteriaOutputReference | RetrospectiveProcessRetrospectiveProcessMatchingCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    incident_type_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.severityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RetrospectiveProcessRetrospectiveProcessMatchingCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RetrospectiveProcessRetrospectiveProcessMatchingCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._incidentTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentTypeIds = this._incidentTypeIds;
    }
    if (this._severityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityIds = this._severityIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RetrospectiveProcessRetrospectiveProcessMatchingCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIds = undefined;
      this._incidentTypeIds = undefined;
      this._severityIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIds = value.groupIds;
      this._incidentTypeIds = value.incidentTypeIds;
      this._severityIds = value.severityIds;
    }
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // incident_type_ids - computed: false, optional: true, required: false
  private _incidentTypeIds?: string[]; 
  public get incidentTypeIds() {
    return this.getListAttribute('incident_type_ids');
  }
  public set incidentTypeIds(value: string[]) {
    this._incidentTypeIds = value;
  }
  public resetIncidentTypeIds() {
    this._incidentTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeIdsInput() {
    return this._incidentTypeIds;
  }

  // severity_ids - computed: false, optional: true, required: false
  private _severityIds?: string[]; 
  public get severityIds() {
    return this.getListAttribute('severity_ids');
  }
  public set severityIds(value: string[]) {
    this._severityIds = value;
  }
  public resetSeverityIds() {
    this._severityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityIdsInput() {
    return this._severityIds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process rootly_retrospective_process}
*/
export class RetrospectiveProcess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_retrospective_process";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RetrospectiveProcess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RetrospectiveProcess to import
  * @param importFromId The id of the existing RetrospectiveProcess that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RetrospectiveProcess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_retrospective_process", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/retrospective_process rootly_retrospective_process} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RetrospectiveProcessConfig
  */
  public constructor(scope: Construct, id: string, config: RetrospectiveProcessConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_retrospective_process',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._copyFrom = config.copyFrom;
    this._description = config.description;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._retrospectiveProcessMatchingCriteria.internalValue = config.retrospectiveProcessMatchingCriteria;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copy_from - computed: false, optional: true, required: false
  private _copyFrom?: string; 
  public get copyFrom() {
    return this.getStringAttribute('copy_from');
  }
  public set copyFrom(value: string) {
    this._copyFrom = value;
  }
  public resetCopyFrom() {
    this._copyFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromInput() {
    return this._copyFrom;
  }

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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // retrospective_process_matching_criteria - computed: false, optional: false, required: true
  private _retrospectiveProcessMatchingCriteria = new RetrospectiveProcessRetrospectiveProcessMatchingCriteriaOutputReference(this, "retrospective_process_matching_criteria");
  public get retrospectiveProcessMatchingCriteria() {
    return this._retrospectiveProcessMatchingCriteria;
  }
  public putRetrospectiveProcessMatchingCriteria(value: RetrospectiveProcessRetrospectiveProcessMatchingCriteria) {
    this._retrospectiveProcessMatchingCriteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retrospectiveProcessMatchingCriteriaInput() {
    return this._retrospectiveProcessMatchingCriteria.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      copy_from: cdktf.stringToTerraform(this._copyFrom),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      retrospective_process_matching_criteria: retrospectiveProcessRetrospectiveProcessMatchingCriteriaToTerraform(this._retrospectiveProcessMatchingCriteria.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copy_from: {
        value: cdktf.stringToHclTerraform(this._copyFrom),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retrospective_process_matching_criteria: {
        value: retrospectiveProcessRetrospectiveProcessMatchingCriteriaToHclTerraform(this._retrospectiveProcessMatchingCriteria.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RetrospectiveProcessRetrospectiveProcessMatchingCriteriaList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
