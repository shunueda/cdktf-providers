// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementDataTypeWeightedKeywordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#color ManagementDataTypeWeightedKeywords#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#comments ManagementDataTypeWeightedKeywords#comments}
  */
  readonly comments?: string;
  /**
  * For built-in data types, the description explains the purpose of this type of data representation. For custom-made data types, you can use this field to provide more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#description ManagementDataTypeWeightedKeywords#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#id ManagementDataTypeWeightedKeywords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#ignore_errors ManagementDataTypeWeightedKeywords#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#ignore_warnings ManagementDataTypeWeightedKeywords#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#name ManagementDataTypeWeightedKeywords#name}
  */
  readonly name: string;
  /**
  * Define the number of appearances, by weight, of all the keywords that, beyond this threshold,  the data containing this list of words or phrases will be recognized as data to be protected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#sum_of_weights_threshold ManagementDataTypeWeightedKeywords#sum_of_weights_threshold}
  */
  readonly sumOfWeightsThreshold?: number;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#tags ManagementDataTypeWeightedKeywords#tags}
  */
  readonly tags?: string[];
  /**
  * weighted_keywords block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#weighted_keywords ManagementDataTypeWeightedKeywords#weighted_keywords}
  */
  readonly weightedKeywords: ManagementDataTypeWeightedKeywordsWeightedKeywords[] | cdktf.IResolvable;
}
export interface ManagementDataTypeWeightedKeywordsWeightedKeywords {
  /**
  * keyword or regular expression to be weighted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#keyword ManagementDataTypeWeightedKeywords#keyword}
  */
  readonly keyword: string;
  /**
  * Max weight of the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#max_weight ManagementDataTypeWeightedKeywords#max_weight}
  */
  readonly maxWeight?: number;
  /**
  * Determine whether to consider the expression as a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#regex ManagementDataTypeWeightedKeywords#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Weight of the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#weight ManagementDataTypeWeightedKeywords#weight}
  */
  readonly weight?: number;
}

export function managementDataTypeWeightedKeywordsWeightedKeywordsToTerraform(struct?: ManagementDataTypeWeightedKeywordsWeightedKeywords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyword: cdktf.stringToTerraform(struct!.keyword),
    max_weight: cdktf.numberToTerraform(struct!.maxWeight),
    regex: cdktf.booleanToTerraform(struct!.regex),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function managementDataTypeWeightedKeywordsWeightedKeywordsToHclTerraform(struct?: ManagementDataTypeWeightedKeywordsWeightedKeywords | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyword: {
      value: cdktf.stringToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_weight: {
      value: cdktf.numberToHclTerraform(struct!.maxWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ManagementDataTypeWeightedKeywordsWeightedKeywordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementDataTypeWeightedKeywordsWeightedKeywords | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._maxWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWeight = this._maxWeight;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementDataTypeWeightedKeywordsWeightedKeywords | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyword = undefined;
      this._maxWeight = undefined;
      this._regex = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyword = value.keyword;
      this._maxWeight = value.maxWeight;
      this._regex = value.regex;
      this._weight = value.weight;
    }
  }

  // keyword - computed: false, optional: false, required: true
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // max_weight - computed: false, optional: true, required: false
  private _maxWeight?: number; 
  public get maxWeight() {
    return this.getNumberAttribute('max_weight');
  }
  public set maxWeight(value: number) {
    this._maxWeight = value;
  }
  public resetMaxWeight() {
    this._maxWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWeightInput() {
    return this._maxWeight;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ManagementDataTypeWeightedKeywordsWeightedKeywordsList extends cdktf.ComplexList {
  public internalValue? : ManagementDataTypeWeightedKeywordsWeightedKeywords[] | cdktf.IResolvable

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
  public get(index: number): ManagementDataTypeWeightedKeywordsWeightedKeywordsOutputReference {
    return new ManagementDataTypeWeightedKeywordsWeightedKeywordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords checkpoint_management_data_type_weighted_keywords}
*/
export class ManagementDataTypeWeightedKeywords extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_data_type_weighted_keywords";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementDataTypeWeightedKeywords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementDataTypeWeightedKeywords to import
  * @param importFromId The id of the existing ManagementDataTypeWeightedKeywords that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementDataTypeWeightedKeywords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_data_type_weighted_keywords", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_data_type_weighted_keywords checkpoint_management_data_type_weighted_keywords} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementDataTypeWeightedKeywordsConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementDataTypeWeightedKeywordsConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_data_type_weighted_keywords',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._comments = config.comments;
    this._description = config.description;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._sumOfWeightsThreshold = config.sumOfWeightsThreshold;
    this._tags = config.tags;
    this._weightedKeywords.internalValue = config.weightedKeywords;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // sum_of_weights_threshold - computed: false, optional: true, required: false
  private _sumOfWeightsThreshold?: number; 
  public get sumOfWeightsThreshold() {
    return this.getNumberAttribute('sum_of_weights_threshold');
  }
  public set sumOfWeightsThreshold(value: number) {
    this._sumOfWeightsThreshold = value;
  }
  public resetSumOfWeightsThreshold() {
    this._sumOfWeightsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumOfWeightsThresholdInput() {
    return this._sumOfWeightsThreshold;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // weighted_keywords - computed: false, optional: false, required: true
  private _weightedKeywords = new ManagementDataTypeWeightedKeywordsWeightedKeywordsList(this, "weighted_keywords", false);
  public get weightedKeywords() {
    return this._weightedKeywords;
  }
  public putWeightedKeywords(value: ManagementDataTypeWeightedKeywordsWeightedKeywords[] | cdktf.IResolvable) {
    this._weightedKeywords.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedKeywordsInput() {
    return this._weightedKeywords.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      sum_of_weights_threshold: cdktf.numberToTerraform(this._sumOfWeightsThreshold),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      weighted_keywords: cdktf.listMapper(managementDataTypeWeightedKeywordsWeightedKeywordsToTerraform, true)(this._weightedKeywords.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
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
      sum_of_weights_threshold: {
        value: cdktf.numberToHclTerraform(this._sumOfWeightsThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      weighted_keywords: {
        value: cdktf.listMapperHcl(managementDataTypeWeightedKeywordsWeightedKeywordsToHclTerraform, true)(this._weightedKeywords.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementDataTypeWeightedKeywordsWeightedKeywordsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
