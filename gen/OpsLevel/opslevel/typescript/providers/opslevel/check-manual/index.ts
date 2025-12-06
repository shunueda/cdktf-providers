// https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckManualConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the category the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#category CheckManual#category}
  */
  readonly category: string;
  /**
  * The date when the check will be automatically enabled.
  *  If you use this field you should add both 'enabled' and 'enable_on' to the lifecycle ignore_changes settings.
  *  See example in opslevel_check_manual for proper configuration.
  *  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#enable_on CheckManual#enable_on}
  */
  readonly enableOn?: string;
  /**
  * Whether the check is enabled or not.  Do not use this field in tandem with 'enable_on'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#enabled CheckManual#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The id of the filter of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#filter CheckManual#filter}
  */
  readonly filter?: string;
  /**
  * The id of the level the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#level CheckManual#level}
  */
  readonly level: string;
  /**
  * The display name of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#name CheckManual#name}
  */
  readonly name: string;
  /**
  * Additional information to display to the service owner about the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#notes CheckManual#notes}
  */
  readonly notes?: string;
  /**
  * The id of the team that owns the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#owner CheckManual#owner}
  */
  readonly owner?: string;
  /**
  * Defines the minimum frequency of the updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#update_frequency CheckManual#update_frequency}
  */
  readonly updateFrequency?: CheckManualUpdateFrequency;
  /**
  * Whether the check requires a comment or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#update_requires_comment CheckManual#update_requires_comment}
  */
  readonly updateRequiresComment: boolean | cdktf.IResolvable;
}
export interface CheckManualUpdateFrequency {
  /**
  * The date that the check will start to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#starting_date CheckManual#starting_date}
  */
  readonly startingDate: string;
  /**
  * The time scale type for the frequency. One of `day`, `month`, `week`, `year`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#time_scale CheckManual#time_scale}
  */
  readonly timeScale: string;
  /**
  * The value to be used together with the frequency time_scale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#value CheckManual#value}
  */
  readonly value: number;
}

export function checkManualUpdateFrequencyToTerraform(struct?: CheckManualUpdateFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    starting_date: cdktf.stringToTerraform(struct!.startingDate),
    time_scale: cdktf.stringToTerraform(struct!.timeScale),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function checkManualUpdateFrequencyToHclTerraform(struct?: CheckManualUpdateFrequency | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    starting_date: {
      value: cdktf.stringToHclTerraform(struct!.startingDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_scale: {
      value: cdktf.stringToHclTerraform(struct!.timeScale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CheckManualUpdateFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CheckManualUpdateFrequency | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startingDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingDate = this._startingDate;
    }
    if (this._timeScale !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeScale = this._timeScale;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CheckManualUpdateFrequency | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._startingDate = undefined;
      this._timeScale = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._startingDate = value.startingDate;
      this._timeScale = value.timeScale;
      this._value = value.value;
    }
  }

  // starting_date - computed: false, optional: false, required: true
  private _startingDate?: string; 
  public get startingDate() {
    return this.getStringAttribute('starting_date');
  }
  public set startingDate(value: string) {
    this._startingDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingDateInput() {
    return this._startingDate;
  }

  // time_scale - computed: false, optional: false, required: true
  private _timeScale?: string; 
  public get timeScale() {
    return this.getStringAttribute('time_scale');
  }
  public set timeScale(value: string) {
    this._timeScale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeScaleInput() {
    return this._timeScale;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual opslevel_check_manual}
*/
export class CheckManual extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_check_manual";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckManual resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckManual to import
  * @param importFromId The id of the existing CheckManual that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckManual to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_check_manual", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_manual opslevel_check_manual} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckManualConfig
  */
  public constructor(scope: Construct, id: string, config: CheckManualConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_check_manual',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._enableOn = config.enableOn;
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._level = config.level;
    this._name = config.name;
    this._notes = config.notes;
    this._owner = config.owner;
    this._updateFrequency.internalValue = config.updateFrequency;
    this._updateRequiresComment = config.updateRequiresComment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_on - computed: false, optional: true, required: false
  private _enableOn?: string; 
  public get enableOn() {
    return this.getStringAttribute('enable_on');
  }
  public set enableOn(value: string) {
    this._enableOn = value;
  }
  public resetEnableOn() {
    this._enableOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInput() {
    return this._enableOn;
  }

  // enabled - computed: true, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // update_frequency - computed: false, optional: true, required: false
  private _updateFrequency = new CheckManualUpdateFrequencyOutputReference(this, "update_frequency");
  public get updateFrequency() {
    return this._updateFrequency;
  }
  public putUpdateFrequency(value: CheckManualUpdateFrequency) {
    this._updateFrequency.internalValue = value;
  }
  public resetUpdateFrequency() {
    this._updateFrequency.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateFrequencyInput() {
    return this._updateFrequency.internalValue;
  }

  // update_requires_comment - computed: false, optional: false, required: true
  private _updateRequiresComment?: boolean | cdktf.IResolvable; 
  public get updateRequiresComment() {
    return this.getBooleanAttribute('update_requires_comment');
  }
  public set updateRequiresComment(value: boolean | cdktf.IResolvable) {
    this._updateRequiresComment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateRequiresCommentInput() {
    return this._updateRequiresComment;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      enable_on: cdktf.stringToTerraform(this._enableOn),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: cdktf.stringToTerraform(this._filter),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      owner: cdktf.stringToTerraform(this._owner),
      update_frequency: checkManualUpdateFrequencyToTerraform(this._updateFrequency.internalValue),
      update_requires_comment: cdktf.booleanToTerraform(this._updateRequiresComment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_on: {
        value: cdktf.stringToHclTerraform(this._enableOn),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_frequency: {
        value: checkManualUpdateFrequencyToHclTerraform(this._updateFrequency.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CheckManualUpdateFrequency",
      },
      update_requires_comment: {
        value: cdktf.booleanToHclTerraform(this._updateRequiresComment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
