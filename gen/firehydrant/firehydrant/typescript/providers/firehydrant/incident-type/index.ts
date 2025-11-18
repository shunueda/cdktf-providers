// https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IncidentTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#description IncidentType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#id IncidentType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#name IncidentType#name}
  */
  readonly name: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#template IncidentType#template}
  */
  readonly template: IncidentTypeTemplate;
}
export interface IncidentTypeTemplateImpacts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#condition_id IncidentType#condition_id}
  */
  readonly conditionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#impact_id IncidentType#impact_id}
  */
  readonly impactId: string;
}

export function incidentTypeTemplateImpactsToTerraform(struct?: IncidentTypeTemplateImpacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_id: cdktf.stringToTerraform(struct!.conditionId),
    impact_id: cdktf.stringToTerraform(struct!.impactId),
  }
}


export function incidentTypeTemplateImpactsToHclTerraform(struct?: IncidentTypeTemplateImpacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_id: {
      value: cdktf.stringToHclTerraform(struct!.conditionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impact_id: {
      value: cdktf.stringToHclTerraform(struct!.impactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IncidentTypeTemplateImpactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IncidentTypeTemplateImpacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionId = this._conditionId;
    }
    if (this._impactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.impactId = this._impactId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentTypeTemplateImpacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionId = undefined;
      this._impactId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionId = value.conditionId;
      this._impactId = value.impactId;
    }
  }

  // condition_id - computed: false, optional: false, required: true
  private _conditionId?: string; 
  public get conditionId() {
    return this.getStringAttribute('condition_id');
  }
  public set conditionId(value: string) {
    this._conditionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionIdInput() {
    return this._conditionId;
  }

  // impact_id - computed: false, optional: false, required: true
  private _impactId?: string; 
  public get impactId() {
    return this.getStringAttribute('impact_id');
  }
  public set impactId(value: string) {
    this._impactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get impactIdInput() {
    return this._impactId;
  }
}

export class IncidentTypeTemplateImpactsList extends cdktf.ComplexList {
  public internalValue? : IncidentTypeTemplateImpacts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): IncidentTypeTemplateImpactsOutputReference {
    return new IncidentTypeTemplateImpactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IncidentTypeTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#customer_impact_summary IncidentType#customer_impact_summary}
  */
  readonly customerImpactSummary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#description IncidentType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#priority_slug IncidentType#priority_slug}
  */
  readonly prioritySlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#private_incident IncidentType#private_incident}
  */
  readonly privateIncident?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#runbook_ids IncidentType#runbook_ids}
  */
  readonly runbookIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#severity_slug IncidentType#severity_slug}
  */
  readonly severitySlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#tags IncidentType#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#team_ids IncidentType#team_ids}
  */
  readonly teamIds?: string[];
  /**
  * impacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#impacts IncidentType#impacts}
  */
  readonly impacts?: IncidentTypeTemplateImpacts[] | cdktf.IResolvable;
}

export function incidentTypeTemplateToTerraform(struct?: IncidentTypeTemplateOutputReference | IncidentTypeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_impact_summary: cdktf.stringToTerraform(struct!.customerImpactSummary),
    description: cdktf.stringToTerraform(struct!.description),
    priority_slug: cdktf.stringToTerraform(struct!.prioritySlug),
    private_incident: cdktf.booleanToTerraform(struct!.privateIncident),
    runbook_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.runbookIds),
    severity_slug: cdktf.stringToTerraform(struct!.severitySlug),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    team_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teamIds),
    impacts: cdktf.listMapper(incidentTypeTemplateImpactsToTerraform, true)(struct!.impacts),
  }
}


export function incidentTypeTemplateToHclTerraform(struct?: IncidentTypeTemplateOutputReference | IncidentTypeTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_impact_summary: {
      value: cdktf.stringToHclTerraform(struct!.customerImpactSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_slug: {
      value: cdktf.stringToHclTerraform(struct!.prioritySlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_incident: {
      value: cdktf.booleanToHclTerraform(struct!.privateIncident),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runbook_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.runbookIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity_slug: {
      value: cdktf.stringToHclTerraform(struct!.severitySlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    team_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teamIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    impacts: {
      value: cdktf.listMapperHcl(incidentTypeTemplateImpactsToHclTerraform, true)(struct!.impacts),
      isBlock: true,
      type: "list",
      storageClassType: "IncidentTypeTemplateImpactsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IncidentTypeTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IncidentTypeTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerImpactSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerImpactSummary = this._customerImpactSummary;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._prioritySlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.prioritySlug = this._prioritySlug;
    }
    if (this._privateIncident !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIncident = this._privateIncident;
    }
    if (this._runbookIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookIds = this._runbookIds;
    }
    if (this._severitySlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.severitySlug = this._severitySlug;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._teamIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamIds = this._teamIds;
    }
    if (this._impacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.impacts = this._impacts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IncidentTypeTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerImpactSummary = undefined;
      this._description = undefined;
      this._prioritySlug = undefined;
      this._privateIncident = undefined;
      this._runbookIds = undefined;
      this._severitySlug = undefined;
      this._tags = undefined;
      this._teamIds = undefined;
      this._impacts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerImpactSummary = value.customerImpactSummary;
      this._description = value.description;
      this._prioritySlug = value.prioritySlug;
      this._privateIncident = value.privateIncident;
      this._runbookIds = value.runbookIds;
      this._severitySlug = value.severitySlug;
      this._tags = value.tags;
      this._teamIds = value.teamIds;
      this._impacts.internalValue = value.impacts;
    }
  }

  // customer_impact_summary - computed: false, optional: true, required: false
  private _customerImpactSummary?: string; 
  public get customerImpactSummary() {
    return this.getStringAttribute('customer_impact_summary');
  }
  public set customerImpactSummary(value: string) {
    this._customerImpactSummary = value;
  }
  public resetCustomerImpactSummary() {
    this._customerImpactSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerImpactSummaryInput() {
    return this._customerImpactSummary;
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

  // priority_slug - computed: false, optional: true, required: false
  private _prioritySlug?: string; 
  public get prioritySlug() {
    return this.getStringAttribute('priority_slug');
  }
  public set prioritySlug(value: string) {
    this._prioritySlug = value;
  }
  public resetPrioritySlug() {
    this._prioritySlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioritySlugInput() {
    return this._prioritySlug;
  }

  // private_incident - computed: false, optional: true, required: false
  private _privateIncident?: boolean | cdktf.IResolvable; 
  public get privateIncident() {
    return this.getBooleanAttribute('private_incident');
  }
  public set privateIncident(value: boolean | cdktf.IResolvable) {
    this._privateIncident = value;
  }
  public resetPrivateIncident() {
    this._privateIncident = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIncidentInput() {
    return this._privateIncident;
  }

  // runbook_ids - computed: false, optional: true, required: false
  private _runbookIds?: string[]; 
  public get runbookIds() {
    return this.getListAttribute('runbook_ids');
  }
  public set runbookIds(value: string[]) {
    this._runbookIds = value;
  }
  public resetRunbookIds() {
    this._runbookIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookIdsInput() {
    return this._runbookIds;
  }

  // severity_slug - computed: false, optional: true, required: false
  private _severitySlug?: string; 
  public get severitySlug() {
    return this.getStringAttribute('severity_slug');
  }
  public set severitySlug(value: string) {
    this._severitySlug = value;
  }
  public resetSeveritySlug() {
    this._severitySlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitySlugInput() {
    return this._severitySlug;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // team_ids - computed: false, optional: true, required: false
  private _teamIds?: string[]; 
  public get teamIds() {
    return this.getListAttribute('team_ids');
  }
  public set teamIds(value: string[]) {
    this._teamIds = value;
  }
  public resetTeamIds() {
    this._teamIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdsInput() {
    return this._teamIds;
  }

  // impacts - computed: false, optional: true, required: false
  private _impacts = new IncidentTypeTemplateImpactsList(this, "impacts", false);
  public get impacts() {
    return this._impacts;
  }
  public putImpacts(value: IncidentTypeTemplateImpacts[] | cdktf.IResolvable) {
    this._impacts.internalValue = value;
  }
  public resetImpacts() {
    this._impacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impactsInput() {
    return this._impacts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type firehydrant_incident_type}
*/
export class IncidentType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "firehydrant_incident_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IncidentType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IncidentType to import
  * @param importFromId The id of the existing IncidentType that should be imported. Refer to the {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IncidentType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "firehydrant_incident_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/firehydrant/firehydrant/0.14.11/docs/resources/incident_type firehydrant_incident_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IncidentTypeConfig
  */
  public constructor(scope: Construct, id: string, config: IncidentTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'firehydrant_incident_type',
      terraformGeneratorMetadata: {
        providerName: 'firehydrant',
        providerVersion: '0.14.11',
        providerVersionConstraint: '0.14.11'
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
    this._id = config.id;
    this._name = config.name;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // template - computed: false, optional: false, required: true
  private _template = new IncidentTypeTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: IncidentTypeTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template: incidentTypeTemplateToTerraform(this._template.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      template: {
        value: incidentTypeTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IncidentTypeTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
