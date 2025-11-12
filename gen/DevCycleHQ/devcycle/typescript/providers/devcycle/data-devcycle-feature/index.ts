// https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDevcycleFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#key DataDevcycleFeature#key}
  */
  readonly key: string;
  /**
  * Project key that the feature belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#project_key DataDevcycleFeature#project_key}
  */
  readonly projectKey: string;
  /**
  * Feature variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#variables DataDevcycleFeature#variables}
  */
  readonly variables?: DataDevcycleFeatureVariables[] | cdktf.IResolvable;
  /**
  * Feature variations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#variations DataDevcycleFeature#variations}
  */
  readonly variations?: DataDevcycleFeatureVariations[] | cdktf.IResolvable;
}
export interface DataDevcycleFeatureVariables {
  /**
  * Variation feature key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#description DataDevcycleFeature#description}
  */
  readonly description?: string;
  /**
  * Variation key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#key DataDevcycleFeature#key}
  */
  readonly key: string;
  /**
  * Variation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#name DataDevcycleFeature#name}
  */
  readonly name?: string;
  /**
  * Variation type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#type DataDevcycleFeature#type}
  */
  readonly type: string;
}

export function dataDevcycleFeatureVariablesToTerraform(struct?: DataDevcycleFeatureVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataDevcycleFeatureVariablesToHclTerraform(struct?: DataDevcycleFeatureVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDevcycleFeatureVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDevcycleFeatureVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDevcycleFeatureVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._key = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._key = value.key;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // feature_key - computed: true, optional: false, required: false
  public get featureKey() {
    return this.getStringAttribute('feature_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name - computed: false, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataDevcycleFeatureVariablesList extends cdktf.ComplexList {
  public internalValue? : DataDevcycleFeatureVariables[] | cdktf.IResolvable

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
  public get(index: number): DataDevcycleFeatureVariablesOutputReference {
    return new DataDevcycleFeatureVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDevcycleFeatureVariations {
  /**
  * Variation key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#key DataDevcycleFeature#key}
  */
  readonly key: string;
  /**
  * Variation name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#name DataDevcycleFeature#name}
  */
  readonly name: string;
  /**
  * Variation variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#variables DataDevcycleFeature#variables}
  */
  readonly variables: { [key: string]: string };
}

export function dataDevcycleFeatureVariationsToTerraform(struct?: DataDevcycleFeatureVariations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
  }
}


export function dataDevcycleFeatureVariationsToHclTerraform(struct?: DataDevcycleFeatureVariations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDevcycleFeatureVariationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDevcycleFeatureVariations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDevcycleFeatureVariations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._variables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._variables = value.variables;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // variables - computed: false, optional: false, required: true
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}

export class DataDevcycleFeatureVariationsList extends cdktf.ComplexList {
  public internalValue? : DataDevcycleFeatureVariations[] | cdktf.IResolvable

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
  public get(index: number): DataDevcycleFeatureVariationsOutputReference {
    return new DataDevcycleFeatureVariationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature devcycle_feature}
*/
export class DataDevcycleFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "devcycle_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDevcycleFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDevcycleFeature to import
  * @param importFromId The id of the existing DataDevcycleFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDevcycleFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "devcycle_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devcyclehq/devcycle/1.0.2/docs/data-sources/feature devcycle_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDevcycleFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataDevcycleFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'devcycle_feature',
      terraformGeneratorMetadata: {
        providerName: 'devcycle',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._key = config.key;
    this._projectKey = config.projectKey;
    this._variables.internalValue = config.variables;
    this._variations.internalValue = config.variations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataDevcycleFeatureVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataDevcycleFeatureVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // variations - computed: false, optional: true, required: false
  private _variations = new DataDevcycleFeatureVariationsList(this, "variations", false);
  public get variations() {
    return this._variations;
  }
  public putVariations(value: DataDevcycleFeatureVariations[] | cdktf.IResolvable) {
    this._variations.internalValue = value;
  }
  public resetVariations() {
    this._variations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variationsInput() {
    return this._variations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      key: cdktf.stringToTerraform(this._key),
      project_key: cdktf.stringToTerraform(this._projectKey),
      variables: cdktf.listMapper(dataDevcycleFeatureVariablesToTerraform, false)(this._variables.internalValue),
      variations: cdktf.listMapper(dataDevcycleFeatureVariationsToTerraform, false)(this._variations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_key: {
        value: cdktf.stringToHclTerraform(this._projectKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.listMapperHcl(dataDevcycleFeatureVariablesToHclTerraform, false)(this._variables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDevcycleFeatureVariablesList",
      },
      variations: {
        value: cdktf.listMapperHcl(dataDevcycleFeatureVariationsToHclTerraform, false)(this._variations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataDevcycleFeatureVariationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
