// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KnowledgeDocumentVariationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#id KnowledgeDocumentVariation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Knowledge base id of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#knowledge_base_id KnowledgeDocumentVariation#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Knowledge document id of the label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#knowledge_document_id KnowledgeDocumentVariation#knowledge_document_id}
  */
  readonly knowledgeDocumentId: string;
  /**
  * If true, the document will be published with the new variation. If false, the updated document will be in a draft state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#published KnowledgeDocumentVariation#published}
  */
  readonly published?: boolean | cdktf.IResolvable;
  /**
  * knowledge_document_variation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#knowledge_document_variation KnowledgeDocumentVariation#knowledge_document_variation}
  */
  readonly knowledgeDocumentVariation: KnowledgeDocumentVariationKnowledgeDocumentVariation;
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersion {
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersionToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersionToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersionList extends cdktf.ComplexList {

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersionOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties {
  /**
  * The align type for the property. Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the property. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The indentation for the property. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    indentation: cdktf.numberToTerraform(struct!.indentation),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._indentation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._indentation = value.indentation;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImage {
  /**
  * The URL of the page that the hyperlink goes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#hyperlink KnowledgeDocumentVariation#hyperlink}
  */
  readonly hyperlink?: string;
  /**
  * The URL for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#url KnowledgeDocumentVariation#url}
  */
  readonly url: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperlink: cdktf.stringToTerraform(struct!.hyperlink),
    url: cdktf.stringToTerraform(struct!.url),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperlink: {
      value: cdktf.stringToHclTerraform(struct!.hyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperlink = this._hyperlink;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hyperlink = undefined;
      this._url = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hyperlink = value.hyperlink;
      this._url = value.url;
      this._properties.internalValue = value.properties;
    }
  }

  // hyperlink - computed: false, optional: true, required: false
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  public resetHyperlink() {
    this._hyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImagePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties {
  /**
  * The align type for the property. Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the property. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The indentation for the property. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    indentation: cdktf.numberToTerraform(struct!.indentation),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._indentation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._indentation = value.indentation;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImage {
  /**
  * The URL of the page that the hyperlink goes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#hyperlink KnowledgeDocumentVariation#hyperlink}
  */
  readonly hyperlink?: string;
  /**
  * The URL for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#url KnowledgeDocumentVariation#url}
  */
  readonly url: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperlink: cdktf.stringToTerraform(struct!.hyperlink),
    url: cdktf.stringToTerraform(struct!.url),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperlink: {
      value: cdktf.stringToHclTerraform(struct!.hyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperlink = this._hyperlink;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hyperlink = undefined;
      this._url = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hyperlink = value.hyperlink;
      this._url = value.url;
      this._properties.internalValue = value.properties;
    }
  }

  // hyperlink - computed: false, optional: true, required: false
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  public resetHyperlink() {
    this._hyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImagePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties {
  /**
  * The background color for the text. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The font size for the text. The valid values in 'em'.Valid values: XxSmall, XSmall, Small, Medium, Large, XLarge, XxLarge, XxxLarge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#font_size KnowledgeDocumentVariation#font_size}
  */
  readonly fontSize?: string;
  /**
  * The text color for the text. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text_color KnowledgeDocumentVariation#text_color}
  */
  readonly textColor?: string;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    text_color: cdktf.stringToTerraform(struct!.textColor),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._fontSize = undefined;
      this._textColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._fontSize = value.fontSize;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksText {
  /**
  * The URL of the page that the hyperlink goes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#hyperlink KnowledgeDocumentVariation#hyperlink}
  */
  readonly hyperlink?: string;
  /**
  * The unique list of marks (whether it is bold and/or underlined etc.) for the text. Valid values: Bold | Italic | Underline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#marks KnowledgeDocumentVariation#marks}
  */
  readonly marks?: string[];
  /**
  * Text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text KnowledgeDocumentVariation#text}
  */
  readonly text: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperlink: cdktf.stringToTerraform(struct!.hyperlink),
    marks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.marks),
    text: cdktf.stringToTerraform(struct!.text),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperlink: {
      value: cdktf.stringToHclTerraform(struct!.hyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.marks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperlink = this._hyperlink;
    }
    if (this._marks !== undefined) {
      hasAnyValues = true;
      internalValueResult.marks = this._marks;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hyperlink = undefined;
      this._marks = undefined;
      this._text = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hyperlink = value.hyperlink;
      this._marks = value.marks;
      this._text = value.text;
      this._properties.internalValue = value.properties;
    }
  }

  // hyperlink - computed: false, optional: true, required: false
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  public resetHyperlink() {
    this._hyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
  }

  // marks - computed: false, optional: true, required: false
  private _marks?: string[]; 
  public get marks() {
    return cdktf.Fn.tolist(this.getListAttribute('marks'));
  }
  public set marks(value: string[]) {
    this._marks = value;
  }
  public resetMarks() {
    this._marks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marksInput() {
    return this._marks;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties {
  /**
  * The align type for the property. Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the property. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The indentation for the property. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    indentation: cdktf.numberToTerraform(struct!.indentation),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._indentation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._indentation = value.indentation;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideo {
  /**
  * The URL for the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#url KnowledgeDocumentVariation#url}
  */
  readonly url: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._properties.internalValue = value.properties;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks {
  /**
  * The type of the content block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#type KnowledgeDocumentVariation#type}
  */
  readonly type: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#image KnowledgeDocumentVariation#image}
  */
  readonly image?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImage;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text KnowledgeDocumentVariation#text}
  */
  readonly text?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksText;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#video KnowledgeDocumentVariation#video}
  */
  readonly video?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideo;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    image: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageToTerraform(struct!.image),
    text: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextToTerraform(struct!.text),
    video: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoToTerraform(struct!.video),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageList",
    },
    text: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextList",
    },
    video: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._image.internalValue = undefined;
      this._text.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._image.internalValue = value.image;
      this._text.internalValue = value.text;
      this._video.internalValue = value.video;
    }
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

  // image - computed: false, optional: true, required: false
  private _image = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties {
  /**
  * The align type for the list item.Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the list item. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The font size for the list item. The valid values in 'em'.Valid values: XxSmall, XSmall, Small, Medium, Large, XLarge, XxLarge, XxxLarge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#font_size KnowledgeDocumentVariation#font_size}
  */
  readonly fontSize?: string;
  /**
  * The font type for the list item. Valid values: Paragraph, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Preformatted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#font_type KnowledgeDocumentVariation#font_type}
  */
  readonly fontType?: string;
  /**
  * The indentation property for the list item. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
  /**
  * The type of icon for the ordered list.Valid values: Number, LowerAlpha, LowerGreek, LowerRoman, UpperAlpha, UpperRoman, None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#ordered_type KnowledgeDocumentVariation#ordered_type}
  */
  readonly orderedType?: string;
  /**
  * The text color for the list item. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text_color KnowledgeDocumentVariation#text_color}
  */
  readonly textColor?: string;
  /**
  * The type of icon for the unordered list.Valid values: Normal, Square, Circle, None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#unordered_type KnowledgeDocumentVariation#unordered_type}
  */
  readonly unorderedType?: string;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    font_type: cdktf.stringToTerraform(struct!.fontType),
    indentation: cdktf.numberToTerraform(struct!.indentation),
    ordered_type: cdktf.stringToTerraform(struct!.orderedType),
    text_color: cdktf.stringToTerraform(struct!.textColor),
    unordered_type: cdktf.stringToTerraform(struct!.unorderedType),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_type: {
      value: cdktf.stringToHclTerraform(struct!.fontType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ordered_type: {
      value: cdktf.stringToHclTerraform(struct!.orderedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unordered_type: {
      value: cdktf.stringToHclTerraform(struct!.unorderedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontType = this._fontType;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    if (this._orderedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedType = this._orderedType;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    if (this._unorderedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unorderedType = this._unorderedType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._fontSize = undefined;
      this._fontType = undefined;
      this._indentation = undefined;
      this._orderedType = undefined;
      this._textColor = undefined;
      this._unorderedType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._fontSize = value.fontSize;
      this._fontType = value.fontType;
      this._indentation = value.indentation;
      this._orderedType = value.orderedType;
      this._textColor = value.textColor;
      this._unorderedType = value.unorderedType;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_type - computed: false, optional: true, required: false
  private _fontType?: string; 
  public get fontType() {
    return this.getStringAttribute('font_type');
  }
  public set fontType(value: string) {
    this._fontType = value;
  }
  public resetFontType() {
    this._fontType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontTypeInput() {
    return this._fontType;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }

  // ordered_type - computed: false, optional: true, required: false
  private _orderedType?: string; 
  public get orderedType() {
    return this.getStringAttribute('ordered_type');
  }
  public set orderedType(value: string) {
    this._orderedType = value;
  }
  public resetOrderedType() {
    this._orderedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedTypeInput() {
    return this._orderedType;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }

  // unordered_type - computed: false, optional: true, required: false
  private _unorderedType?: string; 
  public get unorderedType() {
    return this.getStringAttribute('unordered_type');
  }
  public set unorderedType(value: string) {
    this._unorderedType = value;
  }
  public resetUnorderedType() {
    this._unorderedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unorderedTypeInput() {
    return this._unorderedType;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks {
  /**
  * The type of the list block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#type KnowledgeDocumentVariation#type}
  */
  readonly type: string;
  /**
  * blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#blocks KnowledgeDocumentVariation#blocks}
  */
  readonly blocks: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    blocks: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksToTerraform, true)(struct!.blocks),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocks: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksToHclTerraform, true)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksList",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._blocks.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._blocks.internalValue = value.blocks;
      this._properties.internalValue = value.properties;
    }
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

  // blocks - computed: false, optional: false, required: true
  private _blocks = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties {
  /**
  * The type of icon for the ordered list.Valid values: Number, LowerAlpha, LowerGreek, LowerRoman, UpperAlpha, UpperRoman, None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#ordered_type KnowledgeDocumentVariation#ordered_type}
  */
  readonly orderedType?: string;
  /**
  * The type of icon for the unordered list.Valid values: Normal, Square, Circle, None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#unordered_type KnowledgeDocumentVariation#unordered_type}
  */
  readonly unorderedType?: string;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ordered_type: cdktf.stringToTerraform(struct!.orderedType),
    unordered_type: cdktf.stringToTerraform(struct!.unorderedType),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ordered_type: {
      value: cdktf.stringToHclTerraform(struct!.orderedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unordered_type: {
      value: cdktf.stringToHclTerraform(struct!.unorderedType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orderedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderedType = this._orderedType;
    }
    if (this._unorderedType !== undefined) {
      hasAnyValues = true;
      internalValueResult.unorderedType = this._unorderedType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orderedType = undefined;
      this._unorderedType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orderedType = value.orderedType;
      this._unorderedType = value.unorderedType;
    }
  }

  // ordered_type - computed: false, optional: true, required: false
  private _orderedType?: string; 
  public get orderedType() {
    return this.getStringAttribute('ordered_type');
  }
  public set orderedType(value: string) {
    this._orderedType = value;
  }
  public resetOrderedType() {
    this._orderedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedTypeInput() {
    return this._orderedType;
  }

  // unordered_type - computed: false, optional: true, required: false
  private _unorderedType?: string; 
  public get unorderedType() {
    return this.getStringAttribute('unordered_type');
  }
  public set unorderedType(value: string) {
    this._unorderedType = value;
  }
  public resetUnorderedType() {
    this._unorderedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unorderedTypeInput() {
    return this._unorderedType;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStruct {
  /**
  * blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#blocks KnowledgeDocumentVariation#blocks}
  */
  readonly blocks?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksToTerraform, true)(struct!.blocks),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksToHclTerraform, true)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksList",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blocks.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blocks.internalValue = value.blocks;
      this._properties.internalValue = value.properties;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties {
  /**
  * The align type for the property. Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the property. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The indentation for the property. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    indentation: cdktf.numberToTerraform(struct!.indentation),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._indentation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._indentation = value.indentation;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImage {
  /**
  * The URL of the page that the hyperlink goes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#hyperlink KnowledgeDocumentVariation#hyperlink}
  */
  readonly hyperlink?: string;
  /**
  * The URL for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#url KnowledgeDocumentVariation#url}
  */
  readonly url: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperlink: cdktf.stringToTerraform(struct!.hyperlink),
    url: cdktf.stringToTerraform(struct!.url),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperlink: {
      value: cdktf.stringToHclTerraform(struct!.hyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperlink = this._hyperlink;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hyperlink = undefined;
      this._url = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hyperlink = value.hyperlink;
      this._url = value.url;
      this._properties.internalValue = value.properties;
    }
  }

  // hyperlink - computed: false, optional: true, required: false
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  public resetHyperlink() {
    this._hyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImagePropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties {
  /**
  * The background color for the text. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The font size for the text. The valid values in 'em'.Valid values: XxSmall, XSmall, Small, Medium, Large, XLarge, XxLarge, XxxLarge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#font_size KnowledgeDocumentVariation#font_size}
  */
  readonly fontSize?: string;
  /**
  * The text color for the text. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text_color KnowledgeDocumentVariation#text_color}
  */
  readonly textColor?: string;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    text_color: cdktf.stringToTerraform(struct!.textColor),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backgroundColor = undefined;
      this._fontSize = undefined;
      this._textColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backgroundColor = value.backgroundColor;
      this._fontSize = value.fontSize;
      this._textColor = value.textColor;
    }
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksText {
  /**
  * The URL of the page that the hyperlink goes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#hyperlink KnowledgeDocumentVariation#hyperlink}
  */
  readonly hyperlink?: string;
  /**
  * The unique list of marks (whether it is bold and/or underlined etc.) for the text. Valid values: Bold | Italic | Underline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#marks KnowledgeDocumentVariation#marks}
  */
  readonly marks?: string[];
  /**
  * Text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text KnowledgeDocumentVariation#text}
  */
  readonly text: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hyperlink: cdktf.stringToTerraform(struct!.hyperlink),
    marks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.marks),
    text: cdktf.stringToTerraform(struct!.text),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksText): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hyperlink: {
      value: cdktf.stringToHclTerraform(struct!.hyperlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.marks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksText | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hyperlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperlink = this._hyperlink;
    }
    if (this._marks !== undefined) {
      hasAnyValues = true;
      internalValueResult.marks = this._marks;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksText | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hyperlink = undefined;
      this._marks = undefined;
      this._text = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hyperlink = value.hyperlink;
      this._marks = value.marks;
      this._text = value.text;
      this._properties.internalValue = value.properties;
    }
  }

  // hyperlink - computed: false, optional: true, required: false
  private _hyperlink?: string; 
  public get hyperlink() {
    return this.getStringAttribute('hyperlink');
  }
  public set hyperlink(value: string) {
    this._hyperlink = value;
  }
  public resetHyperlink() {
    this._hyperlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperlinkInput() {
    return this._hyperlink;
  }

  // marks - computed: false, optional: true, required: false
  private _marks?: string[]; 
  public get marks() {
    return cdktf.Fn.tolist(this.getListAttribute('marks'));
  }
  public set marks(value: string[]) {
    this._marks = value;
  }
  public resetMarks() {
    this._marks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marksInput() {
    return this._marks;
  }

  // text - computed: false, optional: false, required: true
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties {
  /**
  * The align type for the property. Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the property. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The indentation for the property. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    indentation: cdktf.numberToTerraform(struct!.indentation),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._indentation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._indentation = value.indentation;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideo {
  /**
  * The URL for the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#url KnowledgeDocumentVariation#url}
  */
  readonly url: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._properties.internalValue = value.properties;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks {
  /**
  * The type of the content block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#type KnowledgeDocumentVariation#type}
  */
  readonly type: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#image KnowledgeDocumentVariation#image}
  */
  readonly image?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImage;
  /**
  * text block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text KnowledgeDocumentVariation#text}
  */
  readonly text?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksText;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#video KnowledgeDocumentVariation#video}
  */
  readonly video?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideo;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    image: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageToTerraform(struct!.image),
    text: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextToTerraform(struct!.text),
    video: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoToTerraform(struct!.video),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageList",
    },
    text: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextToHclTerraform(struct!.text),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextList",
    },
    video: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._text?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._image.internalValue = undefined;
      this._text.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._image.internalValue = value.image;
      this._text.internalValue = value.text;
      this._video.internalValue = value.video;
    }
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

  // image - computed: false, optional: true, required: false
  private _image = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // text - computed: false, optional: true, required: false
  private _text = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksTextOutputReference(this, "text");
  public get text() {
    return this._text;
  }
  public putText(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksText) {
    this._text.internalValue = value;
  }
  public resetText() {
    this._text.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties {
  /**
  * The align type for the paragraph.Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the paragraph. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The font size for the paragraph. The valid values in 'em'.Valid values: XxSmall, XSmall, Small, Medium, Large, XLarge, XxLarge, XxxLarge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#font_size KnowledgeDocumentVariation#font_size}
  */
  readonly fontSize?: string;
  /**
  * The font type for the paragraph.Valid values: Paragraph, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Preformatted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#font_type KnowledgeDocumentVariation#font_type}
  */
  readonly fontType?: string;
  /**
  * The indentation color for the paragraph. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
  /**
  * The text color for the paragraph. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#text_color KnowledgeDocumentVariation#text_color}
  */
  readonly textColor?: string;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    font_size: cdktf.stringToTerraform(struct!.fontSize),
    font_type: cdktf.stringToTerraform(struct!.fontType),
    indentation: cdktf.numberToTerraform(struct!.indentation),
    text_color: cdktf.stringToTerraform(struct!.textColor),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_size: {
      value: cdktf.stringToHclTerraform(struct!.fontSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    font_type: {
      value: cdktf.stringToHclTerraform(struct!.fontType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_color: {
      value: cdktf.stringToHclTerraform(struct!.textColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._fontSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontSize = this._fontSize;
    }
    if (this._fontType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fontType = this._fontType;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    if (this._textColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.textColor = this._textColor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._fontSize = undefined;
      this._fontType = undefined;
      this._indentation = undefined;
      this._textColor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._fontSize = value.fontSize;
      this._fontType = value.fontType;
      this._indentation = value.indentation;
      this._textColor = value.textColor;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // font_size - computed: false, optional: true, required: false
  private _fontSize?: string; 
  public get fontSize() {
    return this.getStringAttribute('font_size');
  }
  public set fontSize(value: string) {
    this._fontSize = value;
  }
  public resetFontSize() {
    this._fontSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontSizeInput() {
    return this._fontSize;
  }

  // font_type - computed: false, optional: true, required: false
  private _fontType?: string; 
  public get fontType() {
    return this.getStringAttribute('font_type');
  }
  public set fontType(value: string) {
    this._fontType = value;
  }
  public resetFontType() {
    this._fontType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontTypeInput() {
    return this._fontType;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }

  // text_color - computed: false, optional: true, required: false
  private _textColor?: string; 
  public get textColor() {
    return this.getStringAttribute('text_color');
  }
  public set textColor(value: string) {
    this._textColor = value;
  }
  public resetTextColor() {
    this._textColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textColorInput() {
    return this._textColor;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraph {
  /**
  * blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#blocks KnowledgeDocumentVariation#blocks}
  */
  readonly blocks?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks[] | cdktf.IResolvable;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraph): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksToTerraform, true)(struct!.blocks),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraph): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksToHclTerraform, true)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksList",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraph | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraph | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blocks.internalValue = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blocks.internalValue = value.blocks;
      this._properties.internalValue = value.properties;
    }
  }

  // blocks - computed: false, optional: true, required: false
  private _blocks = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  public resetBlocks() {
    this._blocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties {
  /**
  * The align type for the property. Valid values: Center, Left, Right, Justify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#align KnowledgeDocumentVariation#align}
  */
  readonly align?: string;
  /**
  * The background color for the property. The valid values in hex color code representation. For example black color - #000000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#background_color KnowledgeDocumentVariation#background_color}
  */
  readonly backgroundColor?: string;
  /**
  * The indentation for the property. The valid values in 'em'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#indentation KnowledgeDocumentVariation#indentation}
  */
  readonly indentation?: number;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    align: cdktf.stringToTerraform(struct!.align),
    background_color: cdktf.stringToTerraform(struct!.backgroundColor),
    indentation: cdktf.numberToTerraform(struct!.indentation),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    align: {
      value: cdktf.stringToHclTerraform(struct!.align),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background_color: {
      value: cdktf.stringToHclTerraform(struct!.backgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indentation: {
      value: cdktf.numberToHclTerraform(struct!.indentation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._align !== undefined) {
      hasAnyValues = true;
      internalValueResult.align = this._align;
    }
    if (this._backgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backgroundColor = this._backgroundColor;
    }
    if (this._indentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.indentation = this._indentation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._align = undefined;
      this._backgroundColor = undefined;
      this._indentation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._align = value.align;
      this._backgroundColor = value.backgroundColor;
      this._indentation = value.indentation;
    }
  }

  // align - computed: false, optional: true, required: false
  private _align?: string; 
  public get align() {
    return this.getStringAttribute('align');
  }
  public set align(value: string) {
    this._align = value;
  }
  public resetAlign() {
    this._align = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alignInput() {
    return this._align;
  }

  // background_color - computed: false, optional: true, required: false
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  public resetBackgroundColor() {
    this._backgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // indentation - computed: false, optional: true, required: false
  private _indentation?: number; 
  public get indentation() {
    return this.getNumberAttribute('indentation');
  }
  public set indentation(value: number) {
    this._indentation = value;
  }
  public resetIndentation() {
    this._indentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indentationInput() {
    return this._indentation;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideo {
  /**
  * The URL for the video.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#url KnowledgeDocumentVariation#url}
  */
  readonly url: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#properties KnowledgeDocumentVariation#properties}
  */
  readonly properties?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    properties: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesToTerraform, true)(struct!.properties),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._properties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._properties.internalValue = value.properties;
    }
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks {
  /**
  * The type of the block for the body. This determines which body block object (paragraph, list, video or image) would have a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#type KnowledgeDocumentVariation#type}
  */
  readonly type: string;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#image KnowledgeDocumentVariation#image}
  */
  readonly image?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImage;
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#list KnowledgeDocumentVariation#list}
  */
  readonly list?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStruct;
  /**
  * paragraph block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#paragraph KnowledgeDocumentVariation#paragraph}
  */
  readonly paragraph?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraph;
  /**
  * video block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#video KnowledgeDocumentVariation#video}
  */
  readonly video?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideo;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    image: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageToTerraform(struct!.image),
    list: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructToTerraform(struct!.list),
    paragraph: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphToTerraform(struct!.paragraph),
    video: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoToTerraform(struct!.video),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageList",
    },
    list: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructToHclTerraform(struct!.list),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructList",
    },
    paragraph: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphToHclTerraform(struct!.paragraph),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphList",
    },
    video: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoToHclTerraform(struct!.video),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._list?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.list = this._list?.internalValue;
    }
    if (this._paragraph?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paragraph = this._paragraph?.internalValue;
    }
    if (this._video?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.video = this._video?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._image.internalValue = undefined;
      this._list.internalValue = undefined;
      this._paragraph.internalValue = undefined;
      this._video.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._image.internalValue = value.image;
      this._list.internalValue = value.list;
      this._paragraph.internalValue = value.paragraph;
      this._video.internalValue = value.video;
    }
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

  // image - computed: false, optional: true, required: false
  private _image = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // list - computed: false, optional: true, required: false
  private _list = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStructOutputReference(this, "list");
  public get list() {
    return this._list;
  }
  public putList(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksListStruct) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // paragraph - computed: false, optional: true, required: false
  private _paragraph = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraphOutputReference(this, "paragraph");
  public get paragraph() {
    return this._paragraph;
  }
  public putParagraph(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksParagraph) {
    this._paragraph.internalValue = value;
  }
  public resetParagraph() {
    this._paragraph.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paragraphInput() {
    return this._paragraph.internalValue;
  }

  // video - computed: false, optional: true, required: false
  private _video = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideoOutputReference(this, "video");
  public get video() {
    return this._video;
  }
  public putVideo(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksVideo) {
    this._video.internalValue = value;
  }
  public resetVideo() {
    this._video.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoInput() {
    return this._video.internalValue;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationBody {
  /**
  * blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#blocks KnowledgeDocumentVariation#blocks}
  */
  readonly blocks: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocks: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksToTerraform, true)(struct!.blocks),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationBodyToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariationBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocks: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksToHclTerraform, true)(struct!.blocks),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocks = this._blocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blocks.internalValue = value.blocks;
    }
  }

  // blocks - computed: false, optional: false, required: true
  private _blocks = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocksList(this, "blocks", false);
  public get blocks() {
    return this._blocks;
  }
  public putBlocks(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBodyBlocks[] | cdktf.IResolvable) {
    this._blocks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks.internalValue;
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext {
  /**
  * The globally unique identifier for the knowledge context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#context_id KnowledgeDocumentVariation#context_id}
  */
  readonly contextId: string;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationContextsContextToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_id: cdktf.stringToTerraform(struct!.contextId),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationContextsContextToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_id: {
      value: cdktf.stringToHclTerraform(struct!.contextId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextId = this._contextId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contextId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contextId = value.contextId;
    }
  }

  // context_id - computed: false, optional: false, required: true
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContextList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContextOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues {
  /**
  * The globally unique identifier for the knowledge context value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#value_id KnowledgeDocumentVariation#value_id}
  */
  readonly valueId: string;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value_id: cdktf.stringToTerraform(struct!.valueId),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value_id: {
      value: cdktf.stringToHclTerraform(struct!.valueId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._valueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueId = this._valueId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._valueId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._valueId = value.valueId;
    }
  }

  // value_id - computed: false, optional: false, required: true
  private _valueId?: string; 
  public get valueId() {
    return this.getStringAttribute('value_id');
  }
  public set valueId(value: string) {
    this._valueId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueIdInput() {
    return this._valueId;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariationContexts {
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#context KnowledgeDocumentVariation#context}
  */
  readonly context: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext[] | cdktf.IResolvable;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#values KnowledgeDocumentVariation#values}
  */
  readonly values?: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationContextsToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationContextsContextToTerraform, true)(struct!.context),
    values: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesToTerraform, true)(struct!.values),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationContextsToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationContextsContextToHclTerraform, true)(struct!.context),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContextList",
    },
    values: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariationContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariationContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context.internalValue = value.context;
      this._values.internalValue = value.values;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context = new KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContextList(this, "context", false);
  public get context() {
    return this._context;
  }
  public putContext(value: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsContext[] | cdktf.IResolvable) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: KnowledgeDocumentVariationKnowledgeDocumentVariationContextsValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationContextsList extends cdktf.ComplexList {
  public internalValue? : KnowledgeDocumentVariationKnowledgeDocumentVariationContexts[] | cdktf.IResolvable

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
  public get(index: number): KnowledgeDocumentVariationKnowledgeDocumentVariationContextsOutputReference {
    return new KnowledgeDocumentVariationKnowledgeDocumentVariationContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KnowledgeDocumentVariationKnowledgeDocumentVariation {
  /**
  * The name of the variation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#name KnowledgeDocumentVariation#name}
  */
  readonly name?: string;
  /**
  * body block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#body KnowledgeDocumentVariation#body}
  */
  readonly body?: KnowledgeDocumentVariationKnowledgeDocumentVariationBody;
  /**
  * contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#contexts KnowledgeDocumentVariation#contexts}
  */
  readonly contexts?: KnowledgeDocumentVariationKnowledgeDocumentVariationContexts[] | cdktf.IResolvable;
}

export function knowledgeDocumentVariationKnowledgeDocumentVariationToTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    body: knowledgeDocumentVariationKnowledgeDocumentVariationBodyToTerraform(struct!.body),
    contexts: cdktf.listMapper(knowledgeDocumentVariationKnowledgeDocumentVariationContextsToTerraform, true)(struct!.contexts),
  }
}


export function knowledgeDocumentVariationKnowledgeDocumentVariationToHclTerraform(struct?: KnowledgeDocumentVariationKnowledgeDocumentVariationOutputReference | KnowledgeDocumentVariationKnowledgeDocumentVariation): any {
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
    body: {
      value: knowledgeDocumentVariationKnowledgeDocumentVariationBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationBodyList",
    },
    contexts: {
      value: cdktf.listMapperHcl(knowledgeDocumentVariationKnowledgeDocumentVariationContextsToHclTerraform, true)(struct!.contexts),
      isBlock: true,
      type: "list",
      storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationContextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KnowledgeDocumentVariationKnowledgeDocumentVariationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KnowledgeDocumentVariationKnowledgeDocumentVariation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._contexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contexts = this._contexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KnowledgeDocumentVariationKnowledgeDocumentVariation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._body.internalValue = undefined;
      this._contexts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._body.internalValue = value.body;
      this._contexts.internalValue = value.contexts;
    }
  }

  // document_version - computed: true, optional: false, required: false
  private _documentVersion = new KnowledgeDocumentVariationKnowledgeDocumentVariationDocumentVersionList(this, "document_version", false);
  public get documentVersion() {
    return this._documentVersion;
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

  // body - computed: false, optional: true, required: false
  private _body = new KnowledgeDocumentVariationKnowledgeDocumentVariationBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: KnowledgeDocumentVariationKnowledgeDocumentVariationBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // contexts - computed: false, optional: true, required: false
  private _contexts = new KnowledgeDocumentVariationKnowledgeDocumentVariationContextsList(this, "contexts", false);
  public get contexts() {
    return this._contexts;
  }
  public putContexts(value: KnowledgeDocumentVariationKnowledgeDocumentVariationContexts[] | cdktf.IResolvable) {
    this._contexts.internalValue = value;
  }
  public resetContexts() {
    this._contexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextsInput() {
    return this._contexts.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation genesyscloud_knowledge_document_variation}
*/
export class KnowledgeDocumentVariation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_knowledge_document_variation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KnowledgeDocumentVariation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KnowledgeDocumentVariation to import
  * @param importFromId The id of the existing KnowledgeDocumentVariation that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KnowledgeDocumentVariation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_knowledge_document_variation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/knowledge_document_variation genesyscloud_knowledge_document_variation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KnowledgeDocumentVariationConfig
  */
  public constructor(scope: Construct, id: string, config: KnowledgeDocumentVariationConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_knowledge_document_variation',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
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
    this._knowledgeDocumentId = config.knowledgeDocumentId;
    this._published = config.published;
    this._knowledgeDocumentVariation.internalValue = config.knowledgeDocumentVariation;
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

  // knowledge_document_id - computed: false, optional: false, required: true
  private _knowledgeDocumentId?: string; 
  public get knowledgeDocumentId() {
    return this.getStringAttribute('knowledge_document_id');
  }
  public set knowledgeDocumentId(value: string) {
    this._knowledgeDocumentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeDocumentIdInput() {
    return this._knowledgeDocumentId;
  }

  // published - computed: false, optional: true, required: false
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

  // knowledge_document_variation - computed: false, optional: false, required: true
  private _knowledgeDocumentVariation = new KnowledgeDocumentVariationKnowledgeDocumentVariationOutputReference(this, "knowledge_document_variation");
  public get knowledgeDocumentVariation() {
    return this._knowledgeDocumentVariation;
  }
  public putKnowledgeDocumentVariation(value: KnowledgeDocumentVariationKnowledgeDocumentVariation) {
    this._knowledgeDocumentVariation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeDocumentVariationInput() {
    return this._knowledgeDocumentVariation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      knowledge_base_id: cdktf.stringToTerraform(this._knowledgeBaseId),
      knowledge_document_id: cdktf.stringToTerraform(this._knowledgeDocumentId),
      published: cdktf.booleanToTerraform(this._published),
      knowledge_document_variation: knowledgeDocumentVariationKnowledgeDocumentVariationToTerraform(this._knowledgeDocumentVariation.internalValue),
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
      knowledge_document_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeDocumentId),
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
      knowledge_document_variation: {
        value: knowledgeDocumentVariationKnowledgeDocumentVariationToHclTerraform(this._knowledgeDocumentVariation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KnowledgeDocumentVariationKnowledgeDocumentVariationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
