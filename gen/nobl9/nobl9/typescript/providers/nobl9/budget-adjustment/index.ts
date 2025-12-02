// https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BudgetAdjustmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional description of the resource. Here, you can add details about who is responsible for the integration (team/owner) or the purpose of creating it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#description BudgetAdjustment#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#display_name BudgetAdjustment#display_name}
  */
  readonly displayName?: string;
  /**
  * The duration of the budget adjustment event. The expected value for this field is a string formatted as a time duration. The duration must be defined with a precision of 1 minute. Example: `1h10m`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#duration BudgetAdjustment#duration}
  */
  readonly duration: string;
  /**
  * The time at which the first event is scheduled to start. The expected value must be a string representing the date and time in RFC3339 format. Example: `2022-12-31T00:00:00Z`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#first_event_start BudgetAdjustment#first_event_start}
  */
  readonly firstEventStart: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#id BudgetAdjustment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#name BudgetAdjustment#name}
  */
  readonly name: string;
  /**
  * The recurrence rule for the budget adjustment event. The expected value is a string in RRULE format. Example: `FREQ=MONTHLY;BYMONTHDAY=1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#rrule BudgetAdjustment#rrule}
  */
  readonly rrule?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#filters BudgetAdjustment#filters}
  */
  readonly filters?: BudgetAdjustmentFilters[] | cdktf.IResolvable;
}
export interface BudgetAdjustmentFiltersSlosSlo {
  /**
  * Unique name of the resource, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#name BudgetAdjustment#name}
  */
  readonly name: string;
  /**
  * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#project BudgetAdjustment#project}
  */
  readonly project: string;
}

export function budgetAdjustmentFiltersSlosSloToTerraform(struct?: BudgetAdjustmentFiltersSlosSlo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function budgetAdjustmentFiltersSlosSloToHclTerraform(struct?: BudgetAdjustmentFiltersSlosSlo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetAdjustmentFiltersSlosSloOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetAdjustmentFiltersSlosSlo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetAdjustmentFiltersSlosSlo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._project = value.project;
    }
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

export class BudgetAdjustmentFiltersSlosSloList extends cdktf.ComplexList {
  public internalValue? : BudgetAdjustmentFiltersSlosSlo[] | cdktf.IResolvable

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
  public get(index: number): BudgetAdjustmentFiltersSlosSloOutputReference {
    return new BudgetAdjustmentFiltersSlosSloOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetAdjustmentFiltersSlos {
  /**
  * slo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#slo BudgetAdjustment#slo}
  */
  readonly slo: BudgetAdjustmentFiltersSlosSlo[] | cdktf.IResolvable;
}

export function budgetAdjustmentFiltersSlosToTerraform(struct?: BudgetAdjustmentFiltersSlos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slo: cdktf.listMapper(budgetAdjustmentFiltersSlosSloToTerraform, true)(struct!.slo),
  }
}


export function budgetAdjustmentFiltersSlosToHclTerraform(struct?: BudgetAdjustmentFiltersSlos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slo: {
      value: cdktf.listMapperHcl(budgetAdjustmentFiltersSlosSloToHclTerraform, true)(struct!.slo),
      isBlock: true,
      type: "list",
      storageClassType: "BudgetAdjustmentFiltersSlosSloList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetAdjustmentFiltersSlosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetAdjustmentFiltersSlos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slo = this._slo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetAdjustmentFiltersSlos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slo.internalValue = value.slo;
    }
  }

  // slo - computed: false, optional: false, required: true
  private _slo = new BudgetAdjustmentFiltersSlosSloList(this, "slo", false);
  public get slo() {
    return this._slo;
  }
  public putSlo(value: BudgetAdjustmentFiltersSlosSlo[] | cdktf.IResolvable) {
    this._slo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloInput() {
    return this._slo.internalValue;
  }
}

export class BudgetAdjustmentFiltersSlosList extends cdktf.ComplexList {
  public internalValue? : BudgetAdjustmentFiltersSlos[] | cdktf.IResolvable

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
  public get(index: number): BudgetAdjustmentFiltersSlosOutputReference {
    return new BudgetAdjustmentFiltersSlosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BudgetAdjustmentFilters {
  /**
  * slos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#slos BudgetAdjustment#slos}
  */
  readonly slos: BudgetAdjustmentFiltersSlos[] | cdktf.IResolvable;
}

export function budgetAdjustmentFiltersToTerraform(struct?: BudgetAdjustmentFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slos: cdktf.listMapper(budgetAdjustmentFiltersSlosToTerraform, true)(struct!.slos),
  }
}


export function budgetAdjustmentFiltersToHclTerraform(struct?: BudgetAdjustmentFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slos: {
      value: cdktf.listMapperHcl(budgetAdjustmentFiltersSlosToHclTerraform, true)(struct!.slos),
      isBlock: true,
      type: "set",
      storageClassType: "BudgetAdjustmentFiltersSlosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BudgetAdjustmentFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BudgetAdjustmentFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slos = this._slos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BudgetAdjustmentFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._slos.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._slos.internalValue = value.slos;
    }
  }

  // slos - computed: false, optional: false, required: true
  private _slos = new BudgetAdjustmentFiltersSlosList(this, "slos", true);
  public get slos() {
    return this._slos;
  }
  public putSlos(value: BudgetAdjustmentFiltersSlos[] | cdktf.IResolvable) {
    this._slos.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slosInput() {
    return this._slos.internalValue;
  }
}

export class BudgetAdjustmentFiltersList extends cdktf.ComplexList {
  public internalValue? : BudgetAdjustmentFilters[] | cdktf.IResolvable

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
  public get(index: number): BudgetAdjustmentFiltersOutputReference {
    return new BudgetAdjustmentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment nobl9_budget_adjustment}
*/
export class BudgetAdjustment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nobl9_budget_adjustment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BudgetAdjustment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BudgetAdjustment to import
  * @param importFromId The id of the existing BudgetAdjustment that should be imported. Refer to the {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BudgetAdjustment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nobl9_budget_adjustment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nobl9/nobl9/0.45.0/docs/resources/budget_adjustment nobl9_budget_adjustment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BudgetAdjustmentConfig
  */
  public constructor(scope: Construct, id: string, config: BudgetAdjustmentConfig) {
    super(scope, id, {
      terraformResourceType: 'nobl9_budget_adjustment',
      terraformGeneratorMetadata: {
        providerName: 'nobl9',
        providerVersion: '0.45.0',
        providerVersionConstraint: '0.45.0'
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
    this._displayName = config.displayName;
    this._duration = config.duration;
    this._firstEventStart = config.firstEventStart;
    this._id = config.id;
    this._name = config.name;
    this._rrule = config.rrule;
    this._filters.internalValue = config.filters;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // first_event_start - computed: false, optional: false, required: true
  private _firstEventStart?: string; 
  public get firstEventStart() {
    return this.getStringAttribute('first_event_start');
  }
  public set firstEventStart(value: string) {
    this._firstEventStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstEventStartInput() {
    return this._firstEventStart;
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

  // rrule - computed: false, optional: true, required: false
  private _rrule?: string; 
  public get rrule() {
    return this.getStringAttribute('rrule');
  }
  public set rrule(value: string) {
    this._rrule = value;
  }
  public resetRrule() {
    this._rrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rruleInput() {
    return this._rrule;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new BudgetAdjustmentFiltersList(this, "filters", true);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: BudgetAdjustmentFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      duration: cdktf.stringToTerraform(this._duration),
      first_event_start: cdktf.stringToTerraform(this._firstEventStart),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rrule: cdktf.stringToTerraform(this._rrule),
      filters: cdktf.listMapper(budgetAdjustmentFiltersToTerraform, true)(this._filters.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_event_start: {
        value: cdktf.stringToHclTerraform(this._firstEventStart),
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
      rrule: {
        value: cdktf.stringToHclTerraform(this._rrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(budgetAdjustmentFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BudgetAdjustmentFiltersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
