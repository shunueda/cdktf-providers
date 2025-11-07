// https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynonymsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#id Synonyms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the index to apply synonyms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#index_name Synonyms#index_name}
  */
  readonly indexName: string;
  /**
  * synonyms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#synonyms Synonyms#synonyms}
  */
  readonly synonyms: SynonymsSynonyms[] | cdktf.IResolvable;
}
export interface SynonymsSynonyms {
  /**
  * List of corrections of the `word`. Required if type=`altCorrection1` or type=`altCorrection2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#corrections Synonyms#corrections}
  */
  readonly corrections?: string[];
  /**
  * Defines the synonym. A word or expression, used as the basis for the array of synonyms. Required if type=`oneWaySynonym`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#input Synonyms#input}
  */
  readonly input?: string;
  /**
  * Unique identifier for the synonym.It can contain any character, and be of unlimited length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#object_id Synonyms#object_id}
  */
  readonly objectId: string;
  /**
  * Single word, used as the basis for the below array of replacements.  Required if type=`placeholder`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#placeholder Synonyms#placeholder}
  */
  readonly placeholder?: string;
  /**
  * List of replacements of the placeholder. Required if type=`placeholder`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#replacements Synonyms#replacements}
  */
  readonly replacements?: string[];
  /**
  * List of synonyms (up to `20 for type `synonym` and 100 for type `oneWaySynonym`). Required if type=`synonym` or type=`oneWaySynonym`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#synonyms Synonyms#synonyms}
  */
  readonly synonyms?: string[];
  /**
  * The type of the synonym. Possible values are `synonym`, `oneWaySynonym`, `altCorrection1`, `altCorrection2` and `placeholder`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#type Synonyms#type}
  */
  readonly type: string;
  /**
  * Single word, used as the basis for the below array of corrections. Required if type=`altCorrection1` or type=`altCorrection2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#word Synonyms#word}
  */
  readonly word?: string;
}

export function synonymsSynonymsToTerraform(struct?: SynonymsSynonyms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    corrections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.corrections),
    input: cdktf.stringToTerraform(struct!.input),
    object_id: cdktf.stringToTerraform(struct!.objectId),
    placeholder: cdktf.stringToTerraform(struct!.placeholder),
    replacements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replacements),
    synonyms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.synonyms),
    type: cdktf.stringToTerraform(struct!.type),
    word: cdktf.stringToTerraform(struct!.word),
  }
}


export function synonymsSynonymsToHclTerraform(struct?: SynonymsSynonyms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    corrections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.corrections),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    input: {
      value: cdktf.stringToHclTerraform(struct!.input),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_id: {
      value: cdktf.stringToHclTerraform(struct!.objectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placeholder: {
      value: cdktf.stringToHclTerraform(struct!.placeholder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replacements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replacements),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    synonyms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.synonyms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    word: {
      value: cdktf.stringToHclTerraform(struct!.word),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SynonymsSynonymsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SynonymsSynonyms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._corrections !== undefined) {
      hasAnyValues = true;
      internalValueResult.corrections = this._corrections;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._objectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId;
    }
    if (this._placeholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholder = this._placeholder;
    }
    if (this._replacements !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacements = this._replacements;
    }
    if (this._synonyms !== undefined) {
      hasAnyValues = true;
      internalValueResult.synonyms = this._synonyms;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._word !== undefined) {
      hasAnyValues = true;
      internalValueResult.word = this._word;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SynonymsSynonyms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._corrections = undefined;
      this._input = undefined;
      this._objectId = undefined;
      this._placeholder = undefined;
      this._replacements = undefined;
      this._synonyms = undefined;
      this._type = undefined;
      this._word = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._corrections = value.corrections;
      this._input = value.input;
      this._objectId = value.objectId;
      this._placeholder = value.placeholder;
      this._replacements = value.replacements;
      this._synonyms = value.synonyms;
      this._type = value.type;
      this._word = value.word;
    }
  }

  // corrections - computed: false, optional: true, required: false
  private _corrections?: string[]; 
  public get corrections() {
    return cdktf.Fn.tolist(this.getListAttribute('corrections'));
  }
  public set corrections(value: string[]) {
    this._corrections = value;
  }
  public resetCorrections() {
    this._corrections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correctionsInput() {
    return this._corrections;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // placeholder - computed: false, optional: true, required: false
  private _placeholder?: string; 
  public get placeholder() {
    return this.getStringAttribute('placeholder');
  }
  public set placeholder(value: string) {
    this._placeholder = value;
  }
  public resetPlaceholder() {
    this._placeholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderInput() {
    return this._placeholder;
  }

  // replacements - computed: false, optional: true, required: false
  private _replacements?: string[]; 
  public get replacements() {
    return cdktf.Fn.tolist(this.getListAttribute('replacements'));
  }
  public set replacements(value: string[]) {
    this._replacements = value;
  }
  public resetReplacements() {
    this._replacements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementsInput() {
    return this._replacements;
  }

  // synonyms - computed: false, optional: true, required: false
  private _synonyms?: string[]; 
  public get synonyms() {
    return cdktf.Fn.tolist(this.getListAttribute('synonyms'));
  }
  public set synonyms(value: string[]) {
    this._synonyms = value;
  }
  public resetSynonyms() {
    this._synonyms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms;
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

  // word - computed: false, optional: true, required: false
  private _word?: string; 
  public get word() {
    return this.getStringAttribute('word');
  }
  public set word(value: string) {
    this._word = value;
  }
  public resetWord() {
    this._word = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordInput() {
    return this._word;
  }
}

export class SynonymsSynonymsList extends cdktf.ComplexList {
  public internalValue? : SynonymsSynonyms[] | cdktf.IResolvable

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
  public get(index: number): SynonymsSynonymsOutputReference {
    return new SynonymsSynonymsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms algolia_synonyms}
*/
export class Synonyms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "algolia_synonyms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Synonyms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Synonyms to import
  * @param importFromId The id of the existing Synonyms that should be imported. Refer to the {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Synonyms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "algolia_synonyms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/k-yomo/algolia/0.6.2/docs/resources/synonyms algolia_synonyms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynonymsConfig
  */
  public constructor(scope: Construct, id: string, config: SynonymsConfig) {
    super(scope, id, {
      terraformResourceType: 'algolia_synonyms',
      terraformGeneratorMetadata: {
        providerName: 'algolia',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._indexName = config.indexName;
    this._synonyms.internalValue = config.synonyms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // index_name - computed: false, optional: false, required: true
  private _indexName?: string; 
  public get indexName() {
    return this.getStringAttribute('index_name');
  }
  public set indexName(value: string) {
    this._indexName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexNameInput() {
    return this._indexName;
  }

  // synonyms - computed: false, optional: false, required: true
  private _synonyms = new SynonymsSynonymsList(this, "synonyms", true);
  public get synonyms() {
    return this._synonyms;
  }
  public putSynonyms(value: SynonymsSynonyms[] | cdktf.IResolvable) {
    this._synonyms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get synonymsInput() {
    return this._synonyms.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      index_name: cdktf.stringToTerraform(this._indexName),
      synonyms: cdktf.listMapper(synonymsSynonymsToTerraform, true)(this._synonyms.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_name: {
        value: cdktf.stringToHclTerraform(this._indexName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      synonyms: {
        value: cdktf.listMapperHcl(synonymsSynonymsToHclTerraform, true)(this._synonyms.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SynonymsSynonymsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
