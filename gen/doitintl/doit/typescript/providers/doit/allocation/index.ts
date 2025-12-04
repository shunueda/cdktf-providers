// https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#description Allocation#description}
  */
  readonly description?: string;
  /**
  * The name of the allocation. Must be unique within the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#name Allocation#name}
  */
  readonly name: string;
  /**
  * The configuration that defines the allocation rules and matching conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#rule Allocation#rule}
  */
  readonly rule: AllocationRule;
}
export interface AllocationRuleComponents {
  /**
  * Include null values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#include_null Allocation#include_null}
  */
  readonly includeNull?: boolean | cdktf.IResolvable;
  /**
  * If true, all selected values will be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#inverse_selection Allocation#inverse_selection}
  */
  readonly inverseSelection?: boolean | cdktf.IResolvable;
  /**
  * Key of a dimension. Examples: "billing_account_id", "country", etc. Dimension must exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#key Allocation#key}
  */
  readonly key: string;
  /**
  * Filter mode to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#mode Allocation#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#type Allocation#type}
  */
  readonly type: string;
  /**
  * Values to filter on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#values Allocation#values}
  */
  readonly values: string[];
}

export function allocationRuleComponentsToTerraform(struct?: AllocationRuleComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_null: cdktf.booleanToTerraform(struct!.includeNull),
    inverse_selection: cdktf.booleanToTerraform(struct!.inverseSelection),
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.stringToTerraform(struct!.mode),
    type: cdktf.stringToTerraform(struct!.type),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function allocationRuleComponentsToHclTerraform(struct?: AllocationRuleComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_null: {
      value: cdktf.booleanToHclTerraform(struct!.includeNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inverse_selection: {
      value: cdktf.booleanToHclTerraform(struct!.inverseSelection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AllocationRuleComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AllocationRuleComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNull = this._includeNull;
    }
    if (this._inverseSelection !== undefined) {
      hasAnyValues = true;
      internalValueResult.inverseSelection = this._inverseSelection;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AllocationRuleComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeNull = undefined;
      this._inverseSelection = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._type = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeNull = value.includeNull;
      this._inverseSelection = value.inverseSelection;
      this._key = value.key;
      this._mode = value.mode;
      this._type = value.type;
      this._values = value.values;
    }
  }

  // include_null - computed: true, optional: true, required: false
  private _includeNull?: boolean | cdktf.IResolvable; 
  public get includeNull() {
    return this.getBooleanAttribute('include_null');
  }
  public set includeNull(value: boolean | cdktf.IResolvable) {
    this._includeNull = value;
  }
  public resetIncludeNull() {
    this._includeNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNullInput() {
    return this._includeNull;
  }

  // inverse_selection - computed: true, optional: true, required: false
  private _inverseSelection?: boolean | cdktf.IResolvable; 
  public get inverseSelection() {
    return this.getBooleanAttribute('inverse_selection');
  }
  public set inverseSelection(value: boolean | cdktf.IResolvable) {
    this._inverseSelection = value;
  }
  public resetInverseSelection() {
    this._inverseSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inverseSelectionInput() {
    return this._inverseSelection;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AllocationRuleComponentsList extends cdktf.ComplexList {
  public internalValue? : AllocationRuleComponents[] | cdktf.IResolvable

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
  public get(index: number): AllocationRuleComponentsOutputReference {
    return new AllocationRuleComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AllocationRule {
  /**
  * List of allocation filter components
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#components Allocation#components}
  */
  readonly components: AllocationRuleComponents[] | cdktf.IResolvable;
  /**
  * Formula for combining components (A is the first component, B is the second one, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#formula Allocation#formula}
  */
  readonly formula: string;
}

export function allocationRuleToTerraform(struct?: AllocationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(allocationRuleComponentsToTerraform, false)(struct!.components),
    formula: cdktf.stringToTerraform(struct!.formula),
  }
}


export function allocationRuleToHclTerraform(struct?: AllocationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(allocationRuleComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "AllocationRuleComponentsList",
    },
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AllocationRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AllocationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AllocationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._formula = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._formula = value.formula;
    }
  }

  // components - computed: false, optional: false, required: true
  private _components = new AllocationRuleComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: AllocationRuleComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // formula - computed: false, optional: false, required: true
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation doit_allocation}
*/
export class Allocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doit_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Allocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Allocation to import
  * @param importFromId The id of the existing Allocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Allocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doit_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doitintl/doit/0.26.0/docs/resources/allocation doit_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllocationConfig
  */
  public constructor(scope: Construct, id: string, config: AllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'doit_allocation',
      terraformGeneratorMetadata: {
        providerName: 'doit',
        providerVersion: '0.26.0',
        providerVersionConstraint: '0.26.0'
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
    this._name = config.name;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_type - computed: true, optional: false, required: false
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }

  // anomaly_detection - computed: true, optional: false, required: false
  public get anomalyDetection() {
    return this.getBooleanAttribute('anomaly_detection');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rule - computed: false, optional: false, required: true
  private _rule = new AllocationRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: AllocationRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rule: allocationRuleToTerraform(this._rule.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: allocationRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AllocationRule",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
