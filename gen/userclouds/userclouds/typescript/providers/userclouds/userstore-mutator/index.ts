// https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserstoreMutatorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#access_policy UserstoreMutator#access_policy}
  */
  readonly accessPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#columns UserstoreMutator#columns}
  */
  readonly columns: UserstoreMutatorColumns[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#description UserstoreMutator#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#id UserstoreMutator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#name UserstoreMutator#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#selector_config UserstoreMutator#selector_config}
  */
  readonly selectorConfig: UserstoreMutatorSelectorConfig;
}
export interface UserstoreMutatorColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#column UserstoreMutator#column}
  */
  readonly column?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#normalizer UserstoreMutator#normalizer}
  */
  readonly normalizer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#validator UserstoreMutator#validator}
  */
  readonly validator?: string;
}

export function userstoreMutatorColumnsToTerraform(struct?: UserstoreMutatorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column: cdktf.stringToTerraform(struct!.column),
    normalizer: cdktf.stringToTerraform(struct!.normalizer),
    validator: cdktf.stringToTerraform(struct!.validator),
  }
}


export function userstoreMutatorColumnsToHclTerraform(struct?: UserstoreMutatorColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column: {
      value: cdktf.stringToHclTerraform(struct!.column),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    normalizer: {
      value: cdktf.stringToHclTerraform(struct!.normalizer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validator: {
      value: cdktf.stringToHclTerraform(struct!.validator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserstoreMutatorColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserstoreMutatorColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._normalizer !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalizer = this._normalizer;
    }
    if (this._validator !== undefined) {
      hasAnyValues = true;
      internalValueResult.validator = this._validator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserstoreMutatorColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._column = undefined;
      this._normalizer = undefined;
      this._validator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._column = value.column;
      this._normalizer = value.normalizer;
      this._validator = value.validator;
    }
  }

  // column - computed: true, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // normalizer - computed: true, optional: true, required: false
  private _normalizer?: string; 
  public get normalizer() {
    return this.getStringAttribute('normalizer');
  }
  public set normalizer(value: string) {
    this._normalizer = value;
  }
  public resetNormalizer() {
    this._normalizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalizerInput() {
    return this._normalizer;
  }

  // validator - computed: true, optional: true, required: false
  private _validator?: string; 
  public get validator() {
    return this.getStringAttribute('validator');
  }
  public set validator(value: string) {
    this._validator = value;
  }
  public resetValidator() {
    this._validator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorInput() {
    return this._validator;
  }
}

export class UserstoreMutatorColumnsList extends cdktf.ComplexList {
  public internalValue? : UserstoreMutatorColumns[] | cdktf.IResolvable

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
  public get(index: number): UserstoreMutatorColumnsOutputReference {
    return new UserstoreMutatorColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserstoreMutatorSelectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#where_clause UserstoreMutator#where_clause}
  */
  readonly whereClause?: string;
}

export function userstoreMutatorSelectorConfigToTerraform(struct?: UserstoreMutatorSelectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    where_clause: cdktf.stringToTerraform(struct!.whereClause),
  }
}


export function userstoreMutatorSelectorConfigToHclTerraform(struct?: UserstoreMutatorSelectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    where_clause: {
      value: cdktf.stringToHclTerraform(struct!.whereClause),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserstoreMutatorSelectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserstoreMutatorSelectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._whereClause !== undefined) {
      hasAnyValues = true;
      internalValueResult.whereClause = this._whereClause;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserstoreMutatorSelectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._whereClause = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._whereClause = value.whereClause;
    }
  }

  // where_clause - computed: true, optional: true, required: false
  private _whereClause?: string; 
  public get whereClause() {
    return this.getStringAttribute('where_clause');
  }
  public set whereClause(value: string) {
    this._whereClause = value;
  }
  public resetWhereClause() {
    this._whereClause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whereClauseInput() {
    return this._whereClause;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator userclouds_userstore_mutator}
*/
export class UserstoreMutator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "userclouds_userstore_mutator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserstoreMutator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserstoreMutator to import
  * @param importFromId The id of the existing UserstoreMutator that should be imported. Refer to the {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserstoreMutator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "userclouds_userstore_mutator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_mutator userclouds_userstore_mutator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserstoreMutatorConfig
  */
  public constructor(scope: Construct, id: string, config: UserstoreMutatorConfig) {
    super(scope, id, {
      terraformResourceType: 'userclouds_userstore_mutator',
      terraformGeneratorMetadata: {
        providerName: 'userclouds',
        providerVersion: '0.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicy = config.accessPolicy;
    this._columns.internalValue = config.columns;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._selectorConfig.internalValue = config.selectorConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: false, required: true
  private _accessPolicy?: string; 
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy;
  }

  // columns - computed: false, optional: false, required: true
  private _columns = new UserstoreMutatorColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: UserstoreMutatorColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
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

  // selector_config - computed: false, optional: false, required: true
  private _selectorConfig = new UserstoreMutatorSelectorConfigOutputReference(this, "selector_config");
  public get selectorConfig() {
    return this._selectorConfig;
  }
  public putSelectorConfig(value: UserstoreMutatorSelectorConfig) {
    this._selectorConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorConfigInput() {
    return this._selectorConfig.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      columns: cdktf.listMapper(userstoreMutatorColumnsToTerraform, false)(this._columns.internalValue),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      selector_config: userstoreMutatorSelectorConfigToTerraform(this._selectorConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy: {
        value: cdktf.stringToHclTerraform(this._accessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      columns: {
        value: cdktf.listMapperHcl(userstoreMutatorColumnsToHclTerraform, false)(this._columns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserstoreMutatorColumnsList",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selector_config: {
        value: userstoreMutatorSelectorConfigToHclTerraform(this._selectorConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserstoreMutatorSelectorConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
