// https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AllocationGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allocation group description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#description AllocationGroup#description}
  */
  readonly description?: string;
  /**
  * Allocation group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#name AllocationGroup#name}
  */
  readonly name: string;
  /**
  * Array of allocation rules for this group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#rules AllocationGroup#rules}
  */
  readonly rules: AllocationGroupRules[] | cdktf.IResolvable;
  /**
  * Custom label for any values that do not fit into attributions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#unallocated_costs AllocationGroup#unallocated_costs}
  */
  readonly unallocatedCosts?: string;
}
export interface AllocationGroupRulesComponents {
  /**
  * Include null values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#include_null AllocationGroup#include_null}
  */
  readonly includeNull?: boolean | cdktf.IResolvable;
  /**
  * If true, all selected values will be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#inverse_selection AllocationGroup#inverse_selection}
  */
  readonly inverseSelection?: boolean | cdktf.IResolvable;
  /**
  * Key of a dimension. Examples: "billing_account_id", "country", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#key AllocationGroup#key}
  */
  readonly key: string;
  /**
  * Filter mode to apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#mode AllocationGroup#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#type AllocationGroup#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#values AllocationGroup#values}
  */
  readonly values: string[];
}

export function allocationGroupRulesComponentsToTerraform(struct?: AllocationGroupRulesComponents | cdktf.IResolvable): any {
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


export function allocationGroupRulesComponentsToHclTerraform(struct?: AllocationGroupRulesComponents | cdktf.IResolvable): any {
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

export class AllocationGroupRulesComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AllocationGroupRulesComponents | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AllocationGroupRulesComponents | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: true
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

  // mode - computed: true, optional: false, required: true
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

  // type - computed: true, optional: false, required: true
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

  // values - computed: true, optional: false, required: true
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

export class AllocationGroupRulesComponentsList extends cdktf.ComplexList {
  public internalValue? : AllocationGroupRulesComponents[] | cdktf.IResolvable

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
  public get(index: number): AllocationGroupRulesComponentsOutputReference {
    return new AllocationGroupRulesComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AllocationGroupRules {
  /**
  * Action to perform with this rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#action AllocationGroup#action}
  */
  readonly action: string;
  /**
  * List of allocation filter components (required for 'create' or 'update' action)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#components AllocationGroup#components}
  */
  readonly components?: AllocationGroupRulesComponents[] | cdktf.IResolvable;
  /**
  * Description for the allocation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#description AllocationGroup#description}
  */
  readonly description?: string;
  /**
  * Formula for combining components (A is the first component, B is the second one, etc.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#formula AllocationGroup#formula}
  */
  readonly formula?: string;
  /**
  * ID of existing allocation (required for 'update' or 'select' action)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#id AllocationGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name for the allocation rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#name AllocationGroup#name}
  */
  readonly name?: string;
}

export function allocationGroupRulesToTerraform(struct?: AllocationGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    components: cdktf.listMapper(allocationGroupRulesComponentsToTerraform, false)(struct!.components),
    description: cdktf.stringToTerraform(struct!.description),
    formula: cdktf.stringToTerraform(struct!.formula),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function allocationGroupRulesToHclTerraform(struct?: AllocationGroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: cdktf.listMapperHcl(allocationGroupRulesComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "AllocationGroupRulesComponentsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    formula: {
      value: cdktf.stringToHclTerraform(struct!.formula),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AllocationGroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AllocationGroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._formula !== undefined) {
      hasAnyValues = true;
      internalValueResult.formula = this._formula;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AllocationGroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._components.internalValue = undefined;
      this._description = undefined;
      this._formula = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._components.internalValue = value.components;
      this._description = value.description;
      this._formula = value.formula;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // allocation_type - computed: true, optional: false, required: false
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }

  // components - computed: true, optional: true, required: false
  private _components = new AllocationGroupRulesComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: AllocationGroupRulesComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
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

  // formula - computed: true, optional: true, required: false
  private _formula?: string; 
  public get formula() {
    return this.getStringAttribute('formula');
  }
  public set formula(value: string) {
    this._formula = value;
  }
  public resetFormula() {
    this._formula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formulaInput() {
    return this._formula;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // url_ui - computed: true, optional: false, required: false
  public get urlUi() {
    return this.getStringAttribute('url_ui');
  }
}

export class AllocationGroupRulesList extends cdktf.ComplexList {
  public internalValue? : AllocationGroupRules[] | cdktf.IResolvable

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
  public get(index: number): AllocationGroupRulesOutputReference {
    return new AllocationGroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group doit_allocation_group}
*/
export class AllocationGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doit_allocation_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AllocationGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AllocationGroup to import
  * @param importFromId The id of the existing AllocationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AllocationGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doit_allocation_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/doitintl/doit/0.25.0/docs/resources/allocation_group doit_allocation_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AllocationGroupConfig
  */
  public constructor(scope: Construct, id: string, config: AllocationGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'doit_allocation_group',
      terraformGeneratorMetadata: {
        providerName: 'doit',
        providerVersion: '0.25.0'
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
    this._rules.internalValue = config.rules;
    this._unallocatedCosts = config.unallocatedCosts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_type - computed: true, optional: false, required: false
  public get allocationType() {
    return this.getStringAttribute('allocation_type');
  }

  // cloud - computed: true, optional: false, required: false
  public get cloud() {
    return this.getStringAttribute('cloud');
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

  // rules - computed: false, optional: false, required: true
  private _rules = new AllocationGroupRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: AllocationGroupRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getNumberAttribute('time_created');
  }

  // time_modified - computed: true, optional: false, required: false
  public get timeModified() {
    return this.getNumberAttribute('time_modified');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unallocated_costs - computed: true, optional: true, required: false
  private _unallocatedCosts?: string; 
  public get unallocatedCosts() {
    return this.getStringAttribute('unallocated_costs');
  }
  public set unallocatedCosts(value: string) {
    this._unallocatedCosts = value;
  }
  public resetUnallocatedCosts() {
    this._unallocatedCosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unallocatedCostsInput() {
    return this._unallocatedCosts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(allocationGroupRulesToTerraform, false)(this._rules.internalValue),
      unallocated_costs: cdktf.stringToTerraform(this._unallocatedCosts),
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
      rules: {
        value: cdktf.listMapperHcl(allocationGroupRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AllocationGroupRulesList",
      },
      unallocated_costs: {
        value: cdktf.stringToHclTerraform(this._unallocatedCosts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
