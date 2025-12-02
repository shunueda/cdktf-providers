// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KnowledgeDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#id KnowledgeDocument#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Knowledge base id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#knowledge_base_id KnowledgeDocument#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * *DEPRECATED: By Default a document created will be in Draft. In order to Publish a document, use knowledge_document_variation instead.* If true, the knowledge document will be published. If false, it will be a draft. The document can only be published if it has document variations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#published KnowledgeDocument#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * knowledge_document block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#knowledge_document KnowledgeDocument#knowledge_document}
  */
  readonly knowledgeDocument: KnowledgeDocumentKnowledgeDocument;
}
export interface KnowledgeDocumentKnowledgeDocumentAlternatives {
  /**
  * Autocomplete enabled for the alternate phrase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#autocomplete KnowledgeDocument#autocomplete}
  */
  readonly autocomplete?: boolean | cdktf.IResolvable;
  /**
  * Alternate phrasing to the document title.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#phrase KnowledgeDocument#phrase}
  */
  readonly phrase: string;
}

export function knowledgeDocumentKnowledgeDocumentAlternativesToTerraform(struct?: KnowledgeDocumentKnowledgeDocumentAlternatives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autocomplete: cdktf.booleanToTerraform(struct!.autocomplete),
    phrase: cdktf.stringToTerraform(struct!.phrase),
  }
}


export function knowledgeDocumentKnowledgeDocumentAlternativesToHclTerraform(struct?: KnowledgeDocumentKnowledgeDocumentAlternatives | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autocomplete: {
      value: cdktf.booleanToHclTerraform(struct!.autocomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    phrase: {
      value: cdktf.stringToHclTerraform(struct!.phrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentKnowledgeDocumentAlternativesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentKnowledgeDocumentAlternatives | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autocomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autocomplete = this._autocomplete;
    }
    if (this._phrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phrase = this._phrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentKnowledgeDocumentAlternatives | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autocomplete = undefined;
      this._phrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autocomplete = value.autocomplete;
      this._phrase = value.phrase;
    }
  }

  // autocomplete - computed: false, optional: true, required: false
  private _autocomplete?: boolean | cdktf.IResolvable; 
  public get autocomplete() {
    return this.getBooleanAttribute('autocomplete');
  }
  public set autocomplete(value: boolean | cdktf.IResolvable) {
    this._autocomplete = value;
  }
  public resetAutocomplete() {
    this._autocomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocompleteInput() {
    return this._autocomplete;
  }

  // phrase - computed: false, optional: false, required: true
  private _phrase?: string; 
  public get phrase() {
    return this.getStringAttribute('phrase');
  }
  public set phrase(value: string) {
    this._phrase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phraseInput() {
    return this._phrase;
  }
}

export class KnowledgeDocumentKnowledgeDocumentAlternativesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentKnowledgeDocumentAlternatives[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentKnowledgeDocumentAlternativesOutputReference {
    return new KnowledgeDocumentKnowledgeDocumentAlternativesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentKnowledgeDocument {
  /**
  * The name of the category associated with the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#category_name KnowledgeDocument#category_name}
  */
  readonly categoryName?: string;
  /**
  * The names of labels associated with the document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#label_names KnowledgeDocument#label_names}
  */
  readonly labelNames?: string[];
  /**
  * Document title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#title KnowledgeDocument#title}
  */
  readonly title: string;
  /**
  * Indicates if the knowledge document should be included in search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#visible KnowledgeDocument#visible}
  */
  readonly visible: boolean | cdktf.IResolvable;
  /**
  * alternatives block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#alternatives KnowledgeDocument#alternatives}
  */
  readonly alternatives?: KnowledgeDocumentKnowledgeDocumentAlternatives[] | cdktf.IResolvable;
}

export function knowledgeDocumentKnowledgeDocumentToTerraform(struct?: KnowledgeDocumentKnowledgeDocumentOutputReference | KnowledgeDocumentKnowledgeDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_name: cdktf.stringToTerraform(struct!.categoryName),
    label_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelNames),
    title: cdktf.stringToTerraform(struct!.title),
    visible: cdktf.booleanToTerraform(struct!.visible),
    alternatives: cdktf.listMapper(knowledgeDocumentKnowledgeDocumentAlternativesToTerraform, true)(struct!.alternatives),
  }
}


export function knowledgeDocumentKnowledgeDocumentToHclTerraform(struct?: KnowledgeDocumentKnowledgeDocumentOutputReference | KnowledgeDocumentKnowledgeDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_name: {
      value: cdktf.stringToHclTerraform(struct!.categoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alternatives: {
      value: cdktf.listMapperHcl(knowledgeDocumentKnowledgeDocumentAlternativesToHclTerraform, true)(struct!.alternatives),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentKnowledgeDocumentAlternativesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentKnowledgeDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentKnowledgeDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryName = this._categoryName;
    }
    if (this._labelNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelNames = this._labelNames;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._alternatives?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternatives = this._alternatives?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentKnowledgeDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categoryName = undefined;
      this._labelNames = undefined;
      this._title = undefined;
      this._visible = undefined;
      this._alternatives.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categoryName = value.categoryName;
      this._labelNames = value.labelNames;
      this._title = value.title;
      this._visible = value.visible;
      this._alternatives.internalValue = value.alternatives;
    }
  }

  // category_name - computed: false, optional: true, required: false
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  public resetCategoryName() {
    this._categoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }

  // label_names - computed: false, optional: true, required: false
  private _labelNames?: string[]; 
  public get labelNames() {
    return this.getListAttribute('label_names');
  }
  public set labelNames(value: string[]) {
    this._labelNames = value;
  }
  public resetLabelNames() {
    this._labelNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNamesInput() {
    return this._labelNames;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visible - computed: false, optional: false, required: true
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // alternatives - computed: false, optional: true, required: false
  private _alternatives = new KnowledgeDocumentKnowledgeDocumentAlternativesList(this, "alternatives", false);
  public get alternatives() {
    return this._alternatives;
  }
  public putAlternatives(value: KnowledgeDocumentKnowledgeDocumentAlternatives[] | cdktf.IResolvable) {
    this._alternatives.internalValue = value;
  }
  public resetAlternatives() {
    this._alternatives.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativesInput() {
    return this._alternatives.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document genesyscloud_knowledge_document}
*/
export class KnowledgeDocument extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_knowledge_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KnowledgeDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KnowledgeDocument to import
  * @param importFromId The id of the existing KnowledgeDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KnowledgeDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_knowledge_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.72.2/docs/resources/knowledge_document genesyscloud_knowledge_document} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KnowledgeDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: KnowledgeDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_knowledge_document',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.72.2',
        providerVersionConstraint: '1.72.2'
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
    this._knowledgeBaseId = config.knowledgeBaseId;
    this._published = config.published;
    this._knowledgeDocument.internalValue = config.knowledgeDocument;
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

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
  }

  // published - computed: true, optional: true, required: false
  private _published?: boolean | cdktf.IResolvable; 
  public get published() {
    return this.getBooleanAttribute('published');
  }
  public set published(value: boolean | cdktf.IResolvable) {
    this._published = value;
  }
  public resetPublished() {
    this._published = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishedInput() {
    return this._published;
  }

  // knowledge_document - computed: false, optional: false, required: true
  private _knowledgeDocument = new KnowledgeDocumentKnowledgeDocumentOutputReference(this, "knowledge_document");
  public get knowledgeDocument() {
    return this._knowledgeDocument;
  }
  public putKnowledgeDocument(value: KnowledgeDocumentKnowledgeDocument) {
    this._knowledgeDocument.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeDocumentInput() {
    return this._knowledgeDocument.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_id: cdktf.stringToTerraform(this._knowledgeBaseId),
      published: cdktf.booleanToTerraform(this._published),
      knowledge_document: knowledgeDocumentKnowledgeDocumentToTerraform(this._knowledgeDocument.internalValue),
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
      knowledge_base_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      published: {
        value: cdktf.booleanToHclTerraform(this._published),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      knowledge_document: {
        value: knowledgeDocumentKnowledgeDocumentToHclTerraform(this._knowledgeDocument.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KnowledgeDocumentKnowledgeDocumentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
