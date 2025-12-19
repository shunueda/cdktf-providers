// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScfFunctionAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias description information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#description ScfFunctionAlias#description}
  */
  readonly description?: string;
  /**
  * Function name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#function_name ScfFunctionAlias#function_name}
  */
  readonly functionName: string;
  /**
  * Master version pointed to by the alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#function_version ScfFunctionAlias#function_version}
  */
  readonly functionVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#id ScfFunctionAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Alias name, which must be unique in the function, can contain 1 to 64 letters, digits, _, and -, and must begin with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#name ScfFunctionAlias#name}
  */
  readonly name: string;
  /**
  * Function namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#namespace ScfFunctionAlias#namespace}
  */
  readonly namespace?: string;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#routing_config ScfFunctionAlias#routing_config}
  */
  readonly routingConfig?: ScfFunctionAliasRoutingConfig;
}
export interface ScfFunctionAliasRoutingConfigAdditionalVersionMatches {
  /**
  * Rule requirements for range match:It should be described in an open or closed range, i.e., (a,b) or [a,b], where both a and b are integersRule requirements for exact match:Exact string match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#expression ScfFunctionAlias#expression}
  */
  readonly expression: string;
  /**
  * Matching rule key. When the API is called, pass in the key to route the request to the specified version based on the matching ruleHeader method:Enter invoke.headers.User for key and pass in RoutingKey:{User:value} when invoking a function through invoke for invocation based on rule matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#key ScfFunctionAlias#key}
  */
  readonly key: string;
  /**
  * Match method. Valid values:range: Range matchexact: exact string match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#method ScfFunctionAlias#method}
  */
  readonly method: string;
  /**
  * Function version name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#version ScfFunctionAlias#version}
  */
  readonly version: string;
}

export function scfFunctionAliasRoutingConfigAdditionalVersionMatchesToTerraform(struct?: ScfFunctionAliasRoutingConfigAdditionalVersionMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    key: cdktf.stringToTerraform(struct!.key),
    method: cdktf.stringToTerraform(struct!.method),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function scfFunctionAliasRoutingConfigAdditionalVersionMatchesToHclTerraform(struct?: ScfFunctionAliasRoutingConfigAdditionalVersionMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
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
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionAliasRoutingConfigAdditionalVersionMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfFunctionAliasRoutingConfigAdditionalVersionMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionAliasRoutingConfigAdditionalVersionMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._key = undefined;
      this._method = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._key = value.key;
      this._method = value.method;
      this._version = value.version;
    }
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ScfFunctionAliasRoutingConfigAdditionalVersionMatchesList extends cdktf.ComplexList {
  public internalValue? : ScfFunctionAliasRoutingConfigAdditionalVersionMatches[] | cdktf.IResolvable

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
  public get(index: number): ScfFunctionAliasRoutingConfigAdditionalVersionMatchesOutputReference {
    return new ScfFunctionAliasRoutingConfigAdditionalVersionMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfFunctionAliasRoutingConfigAdditionalVersionWeights {
  /**
  * Function version name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#version ScfFunctionAlias#version}
  */
  readonly version: string;
  /**
  * Version weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#weight ScfFunctionAlias#weight}
  */
  readonly weight: number;
}

export function scfFunctionAliasRoutingConfigAdditionalVersionWeightsToTerraform(struct?: ScfFunctionAliasRoutingConfigAdditionalVersionWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function scfFunctionAliasRoutingConfigAdditionalVersionWeightsToHclTerraform(struct?: ScfFunctionAliasRoutingConfigAdditionalVersionWeights | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionAliasRoutingConfigAdditionalVersionWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ScfFunctionAliasRoutingConfigAdditionalVersionWeights | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionAliasRoutingConfigAdditionalVersionWeights | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
      this._weight = value.weight;
    }
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ScfFunctionAliasRoutingConfigAdditionalVersionWeightsList extends cdktf.ComplexList {
  public internalValue? : ScfFunctionAliasRoutingConfigAdditionalVersionWeights[] | cdktf.IResolvable

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
  public get(index: number): ScfFunctionAliasRoutingConfigAdditionalVersionWeightsOutputReference {
    return new ScfFunctionAliasRoutingConfigAdditionalVersionWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ScfFunctionAliasRoutingConfig {
  /**
  * additional_version_matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#additional_version_matches ScfFunctionAlias#additional_version_matches}
  */
  readonly additionalVersionMatches?: ScfFunctionAliasRoutingConfigAdditionalVersionMatches[] | cdktf.IResolvable;
  /**
  * additional_version_weights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#additional_version_weights ScfFunctionAlias#additional_version_weights}
  */
  readonly additionalVersionWeights?: ScfFunctionAliasRoutingConfigAdditionalVersionWeights[] | cdktf.IResolvable;
}

export function scfFunctionAliasRoutingConfigToTerraform(struct?: ScfFunctionAliasRoutingConfigOutputReference | ScfFunctionAliasRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_version_matches: cdktf.listMapper(scfFunctionAliasRoutingConfigAdditionalVersionMatchesToTerraform, true)(struct!.additionalVersionMatches),
    additional_version_weights: cdktf.listMapper(scfFunctionAliasRoutingConfigAdditionalVersionWeightsToTerraform, true)(struct!.additionalVersionWeights),
  }
}


export function scfFunctionAliasRoutingConfigToHclTerraform(struct?: ScfFunctionAliasRoutingConfigOutputReference | ScfFunctionAliasRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_version_matches: {
      value: cdktf.listMapperHcl(scfFunctionAliasRoutingConfigAdditionalVersionMatchesToHclTerraform, true)(struct!.additionalVersionMatches),
      isBlock: true,
      type: "list",
      storageClassType: "ScfFunctionAliasRoutingConfigAdditionalVersionMatchesList",
    },
    additional_version_weights: {
      value: cdktf.listMapperHcl(scfFunctionAliasRoutingConfigAdditionalVersionWeightsToHclTerraform, true)(struct!.additionalVersionWeights),
      isBlock: true,
      type: "list",
      storageClassType: "ScfFunctionAliasRoutingConfigAdditionalVersionWeightsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScfFunctionAliasRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ScfFunctionAliasRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVersionMatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVersionMatches = this._additionalVersionMatches?.internalValue;
    }
    if (this._additionalVersionWeights?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVersionWeights = this._additionalVersionWeights?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScfFunctionAliasRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalVersionMatches.internalValue = undefined;
      this._additionalVersionWeights.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalVersionMatches.internalValue = value.additionalVersionMatches;
      this._additionalVersionWeights.internalValue = value.additionalVersionWeights;
    }
  }

  // additional_version_matches - computed: false, optional: true, required: false
  private _additionalVersionMatches = new ScfFunctionAliasRoutingConfigAdditionalVersionMatchesList(this, "additional_version_matches", false);
  public get additionalVersionMatches() {
    return this._additionalVersionMatches;
  }
  public putAdditionalVersionMatches(value: ScfFunctionAliasRoutingConfigAdditionalVersionMatches[] | cdktf.IResolvable) {
    this._additionalVersionMatches.internalValue = value;
  }
  public resetAdditionalVersionMatches() {
    this._additionalVersionMatches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVersionMatchesInput() {
    return this._additionalVersionMatches.internalValue;
  }

  // additional_version_weights - computed: false, optional: true, required: false
  private _additionalVersionWeights = new ScfFunctionAliasRoutingConfigAdditionalVersionWeightsList(this, "additional_version_weights", false);
  public get additionalVersionWeights() {
    return this._additionalVersionWeights;
  }
  public putAdditionalVersionWeights(value: ScfFunctionAliasRoutingConfigAdditionalVersionWeights[] | cdktf.IResolvable) {
    this._additionalVersionWeights.internalValue = value;
  }
  public resetAdditionalVersionWeights() {
    this._additionalVersionWeights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVersionWeightsInput() {
    return this._additionalVersionWeights.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias tencentcloud_scf_function_alias}
*/
export class ScfFunctionAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_scf_function_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScfFunctionAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScfFunctionAlias to import
  * @param importFromId The id of the existing ScfFunctionAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScfFunctionAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_scf_function_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/scf_function_alias tencentcloud_scf_function_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScfFunctionAliasConfig
  */
  public constructor(scope: Construct, id: string, config: ScfFunctionAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_scf_function_alias',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._functionName = config.functionName;
    this._functionVersion = config.functionVersion;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._routingConfig.internalValue = config.routingConfig;
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

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
  }

  // function_version - computed: false, optional: false, required: true
  private _functionVersion?: string; 
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new ScfFunctionAliasRoutingConfigOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: ScfFunctionAliasRoutingConfig) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      function_name: cdktf.stringToTerraform(this._functionName),
      function_version: cdktf.stringToTerraform(this._functionVersion),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      routing_config: scfFunctionAliasRoutingConfigToTerraform(this._routingConfig.internalValue),
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
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_version: {
        value: cdktf.stringToHclTerraform(this._functionVersion),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_config: {
        value: scfFunctionAliasRoutingConfigToHclTerraform(this._routingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ScfFunctionAliasRoutingConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
