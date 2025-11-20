// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#annotations Route#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#description Route#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disable Route#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#id Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#labels Route#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#namespace Route#namespace}
  */
  readonly namespace: string;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#routes Route#routes}
  */
  readonly routes: RouteRoutes[] | cdktf.IResolvable;
}
export interface RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#javascript_tag Route#javascript_tag}
  */
  readonly javascriptTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#tag_value Route#tag_value}
  */
  readonly tagValue?: string;
}

export function routeRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_tag: cdktf.stringToTerraform(struct!.javascriptTag),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function routeRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToHclTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_tag: {
      value: cdktf.stringToHclTerraform(struct!.javascriptTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptTag = this._javascriptTag;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._javascriptTag = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._javascriptTag = value.javascriptTag;
      this._tagValue = value.tagValue;
    }
  }

  // javascript_tag - computed: false, optional: true, required: false
  private _javascriptTag?: string; 
  public get javascriptTag() {
    return this.getStringAttribute('javascript_tag');
  }
  public set javascriptTag(value: string) {
    this._javascriptTag = value;
  }
  public resetJavascriptTag() {
    this._javascriptTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptTagInput() {
    return this._javascriptTag;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesOutputReference {
    return new RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesBotDefenseJavascriptInjectionJavascriptTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#javascript_url Route#javascript_url}
  */
  readonly javascriptUrl: string;
  /**
  * tag_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#tag_attributes Route#tag_attributes}
  */
  readonly tagAttributes?: RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes[] | cdktf.IResolvable;
}

export function routeRoutesBotDefenseJavascriptInjectionJavascriptTagsToTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_url: cdktf.stringToTerraform(struct!.javascriptUrl),
    tag_attributes: cdktf.listMapper(routeRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToTerraform, true)(struct!.tagAttributes),
  }
}


export function routeRoutesBotDefenseJavascriptInjectionJavascriptTagsToHclTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_url: {
      value: cdktf.stringToHclTerraform(struct!.javascriptUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_attributes: {
      value: cdktf.listMapperHcl(routeRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesToHclTerraform, true)(struct!.tagAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptUrl = this._javascriptUrl;
    }
    if (this._tagAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagAttributes = this._tagAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesBotDefenseJavascriptInjectionJavascriptTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._javascriptUrl = undefined;
      this._tagAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._javascriptUrl = value.javascriptUrl;
      this._tagAttributes.internalValue = value.tagAttributes;
    }
  }

  // javascript_url - computed: false, optional: false, required: true
  private _javascriptUrl?: string; 
  public get javascriptUrl() {
    return this.getStringAttribute('javascript_url');
  }
  public set javascriptUrl(value: string) {
    this._javascriptUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptUrlInput() {
    return this._javascriptUrl;
  }

  // tag_attributes - computed: false, optional: true, required: false
  private _tagAttributes = new RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributesList(this, "tag_attributes", false);
  public get tagAttributes() {
    return this._tagAttributes;
  }
  public putTagAttributes(value: RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsTagAttributes[] | cdktf.IResolvable) {
    this._tagAttributes.internalValue = value;
  }
  public resetTagAttributes() {
    this._tagAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagAttributesInput() {
    return this._tagAttributes.internalValue;
  }
}

export class RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesBotDefenseJavascriptInjectionJavascriptTags[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsOutputReference {
    return new RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesBotDefenseJavascriptInjection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#javascript_location Route#javascript_location}
  */
  readonly javascriptLocation?: string;
  /**
  * javascript_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#javascript_tags Route#javascript_tags}
  */
  readonly javascriptTags: RouteRoutesBotDefenseJavascriptInjectionJavascriptTags[] | cdktf.IResolvable;
}

export function routeRoutesBotDefenseJavascriptInjectionToTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionOutputReference | RouteRoutesBotDefenseJavascriptInjection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    javascript_location: cdktf.stringToTerraform(struct!.javascriptLocation),
    javascript_tags: cdktf.listMapper(routeRoutesBotDefenseJavascriptInjectionJavascriptTagsToTerraform, true)(struct!.javascriptTags),
  }
}


export function routeRoutesBotDefenseJavascriptInjectionToHclTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionOutputReference | RouteRoutesBotDefenseJavascriptInjection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    javascript_location: {
      value: cdktf.stringToHclTerraform(struct!.javascriptLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    javascript_tags: {
      value: cdktf.listMapperHcl(routeRoutesBotDefenseJavascriptInjectionJavascriptTagsToHclTerraform, true)(struct!.javascriptTags),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesBotDefenseJavascriptInjectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesBotDefenseJavascriptInjection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._javascriptLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptLocation = this._javascriptLocation;
    }
    if (this._javascriptTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptTags = this._javascriptTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesBotDefenseJavascriptInjection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._javascriptLocation = undefined;
      this._javascriptTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._javascriptLocation = value.javascriptLocation;
      this._javascriptTags.internalValue = value.javascriptTags;
    }
  }

  // javascript_location - computed: false, optional: true, required: false
  private _javascriptLocation?: string; 
  public get javascriptLocation() {
    return this.getStringAttribute('javascript_location');
  }
  public set javascriptLocation(value: string) {
    this._javascriptLocation = value;
  }
  public resetJavascriptLocation() {
    this._javascriptLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptLocationInput() {
    return this._javascriptLocation;
  }

  // javascript_tags - computed: false, optional: false, required: true
  private _javascriptTags = new RouteRoutesBotDefenseJavascriptInjectionJavascriptTagsList(this, "javascript_tags", false);
  public get javascriptTags() {
    return this._javascriptTags;
  }
  public putJavascriptTags(value: RouteRoutesBotDefenseJavascriptInjectionJavascriptTags[] | cdktf.IResolvable) {
    this._javascriptTags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptTagsInput() {
    return this._javascriptTags.internalValue;
  }
}
export interface RouteRoutesBotDefenseJavascriptInjectionInlineMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#element_selector Route#element_selector}
  */
  readonly elementSelector: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#insert_content Route#insert_content}
  */
  readonly insertContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#position Route#position}
  */
  readonly position?: string;
}

export function routeRoutesBotDefenseJavascriptInjectionInlineModeToTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionInlineModeOutputReference | RouteRoutesBotDefenseJavascriptInjectionInlineMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    element_selector: cdktf.stringToTerraform(struct!.elementSelector),
    insert_content: cdktf.stringToTerraform(struct!.insertContent),
    position: cdktf.stringToTerraform(struct!.position),
  }
}


export function routeRoutesBotDefenseJavascriptInjectionInlineModeToHclTerraform(struct?: RouteRoutesBotDefenseJavascriptInjectionInlineModeOutputReference | RouteRoutesBotDefenseJavascriptInjectionInlineMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    element_selector: {
      value: cdktf.stringToHclTerraform(struct!.elementSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_content: {
      value: cdktf.stringToHclTerraform(struct!.insertContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    position: {
      value: cdktf.stringToHclTerraform(struct!.position),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesBotDefenseJavascriptInjectionInlineModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesBotDefenseJavascriptInjectionInlineMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elementSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementSelector = this._elementSelector;
    }
    if (this._insertContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertContent = this._insertContent;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesBotDefenseJavascriptInjectionInlineMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elementSelector = undefined;
      this._insertContent = undefined;
      this._position = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elementSelector = value.elementSelector;
      this._insertContent = value.insertContent;
      this._position = value.position;
    }
  }

  // element_selector - computed: false, optional: false, required: true
  private _elementSelector?: string; 
  public get elementSelector() {
    return this.getStringAttribute('element_selector');
  }
  public set elementSelector(value: string) {
    this._elementSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementSelectorInput() {
    return this._elementSelector;
  }

  // insert_content - computed: false, optional: true, required: false
  private _insertContent?: string; 
  public get insertContent() {
    return this.getStringAttribute('insert_content');
  }
  public set insertContent(value: string) {
    this._insertContent = value;
  }
  public resetInsertContent() {
    this._insertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertContentInput() {
    return this._insertContent;
  }

  // position - computed: false, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}
export interface RouteRoutesMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#exact Route#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#invert_match Route#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#presence Route#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#regex Route#regex}
  */
  readonly regex?: string;
}

export function routeRoutesMatchHeadersToTerraform(struct?: RouteRoutesMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function routeRoutesMatchHeadersToHclTerraform(struct?: RouteRoutesMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._invertMatch = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._invertMatch = value.invertMatch;
      this._name = value.name;
      this._presence = value.presence;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class RouteRoutesMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesMatchHeadersOutputReference {
    return new RouteRoutesMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesMatchIncomingPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#no_port_match Route#no_port_match}
  */
  readonly noPortMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#port Route#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#port_ranges Route#port_ranges}
  */
  readonly portRanges?: string;
}

export function routeRoutesMatchIncomingPortToTerraform(struct?: RouteRoutesMatchIncomingPortOutputReference | RouteRoutesMatchIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_port_match: cdktf.booleanToTerraform(struct!.noPortMatch),
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
  }
}


export function routeRoutesMatchIncomingPortToHclTerraform(struct?: RouteRoutesMatchIncomingPortOutputReference | RouteRoutesMatchIncomingPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_port_match: {
      value: cdktf.booleanToHclTerraform(struct!.noPortMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesMatchIncomingPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesMatchIncomingPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noPortMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPortMatch = this._noPortMatch;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesMatchIncomingPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noPortMatch = undefined;
      this._port = undefined;
      this._portRanges = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noPortMatch = value.noPortMatch;
      this._port = value.port;
      this._portRanges = value.portRanges;
    }
  }

  // no_port_match - computed: false, optional: true, required: false
  private _noPortMatch?: boolean | cdktf.IResolvable; 
  public get noPortMatch() {
    return this.getBooleanAttribute('no_port_match');
  }
  public set noPortMatch(value: boolean | cdktf.IResolvable) {
    this._noPortMatch = value;
  }
  public resetNoPortMatch() {
    this._noPortMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPortMatchInput() {
    return this._noPortMatch;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }
}
export interface RouteRoutesMatchPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#path Route#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#prefix Route#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#regex Route#regex}
  */
  readonly regex?: string;
}

export function routeRoutesMatchPathToTerraform(struct?: RouteRoutesMatchPathOutputReference | RouteRoutesMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function routeRoutesMatchPathToHclTerraform(struct?: RouteRoutesMatchPathOutputReference | RouteRoutesMatchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesMatchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesMatchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesMatchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._prefix = undefined;
      this._regex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._prefix = value.prefix;
      this._regex = value.regex;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface RouteRoutesMatchQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#exact Route#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#key Route#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#regex Route#regex}
  */
  readonly regex?: string;
}

export function routeRoutesMatchQueryParamsToTerraform(struct?: RouteRoutesMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    key: cdktf.stringToTerraform(struct!.key),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function routeRoutesMatchQueryParamsToHclTerraform(struct?: RouteRoutesMatchQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
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
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesMatchQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesMatchQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesMatchQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._key = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._key = value.key;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class RouteRoutesMatchQueryParamsList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesMatchQueryParams[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesMatchQueryParamsOutputReference {
    return new RouteRoutesMatchQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#http_method Route#http_method}
  */
  readonly httpMethod?: string;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#headers Route#headers}
  */
  readonly headers?: RouteRoutesMatchHeaders[] | cdktf.IResolvable;
  /**
  * incoming_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#incoming_port Route#incoming_port}
  */
  readonly incomingPort?: RouteRoutesMatchIncomingPort;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#path Route#path}
  */
  readonly path?: RouteRoutesMatchPath;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#query_params Route#query_params}
  */
  readonly queryParams?: RouteRoutesMatchQueryParams[] | cdktf.IResolvable;
}

export function routeRoutesMatchToTerraform(struct?: RouteRoutesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    headers: cdktf.listMapper(routeRoutesMatchHeadersToTerraform, true)(struct!.headers),
    incoming_port: routeRoutesMatchIncomingPortToTerraform(struct!.incomingPort),
    path: routeRoutesMatchPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(routeRoutesMatchQueryParamsToTerraform, true)(struct!.queryParams),
  }
}


export function routeRoutesMatchToHclTerraform(struct?: RouteRoutesMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.listMapperHcl(routeRoutesMatchHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesMatchHeadersList",
    },
    incoming_port: {
      value: routeRoutesMatchIncomingPortToHclTerraform(struct!.incomingPort),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesMatchIncomingPortList",
    },
    path: {
      value: routeRoutesMatchPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesMatchPathList",
    },
    query_params: {
      value: cdktf.listMapperHcl(routeRoutesMatchQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesMatchQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._incomingPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingPort = this._incomingPort?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpMethod = undefined;
      this._headers.internalValue = undefined;
      this._incomingPort.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpMethod = value.httpMethod;
      this._headers.internalValue = value.headers;
      this._incomingPort.internalValue = value.incomingPort;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
    }
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new RouteRoutesMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: RouteRoutesMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // incoming_port - computed: false, optional: true, required: false
  private _incomingPort = new RouteRoutesMatchIncomingPortOutputReference(this, "incoming_port");
  public get incomingPort() {
    return this._incomingPort;
  }
  public putIncomingPort(value: RouteRoutesMatchIncomingPort) {
    this._incomingPort.internalValue = value;
  }
  public resetIncomingPort() {
    this._incomingPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingPortInput() {
    return this._incomingPort.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new RouteRoutesMatchPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: RouteRoutesMatchPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new RouteRoutesMatchQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: RouteRoutesMatchQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }
}

export class RouteRoutesMatchList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesMatch[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesMatchOutputReference {
    return new RouteRoutesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesRequestCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#url Route#url}
  */
  readonly url: string;
}

export function routeRoutesRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueClearSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function routeRoutesRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueClearSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestCookiesToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestCookiesToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#key Route#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding Route#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#version Route#version}
  */
  readonly version?: number;
}

export function routeRoutesRequestCookiesToAddSecretValueVaultSecretInfoToTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function routeRoutesRequestCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
}

export function routeRoutesRequestCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeRoutesRequestCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteRoutesRequestCookiesToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding_type Route#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info Route#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info_internal Route#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#clear_secret_info Route#clear_secret_info}
  */
  readonly clearSecretInfo?: RouteRoutesRequestCookiesToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#vault_secret_info Route#vault_secret_info}
  */
  readonly vaultSecretInfo?: RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#wingman_secret_info Route#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfo;
}

export function routeRoutesRequestCookiesToAddSecretValueToTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueOutputReference | RouteRoutesRequestCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: routeRoutesRequestCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: routeRoutesRequestCookiesToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: routeRoutesRequestCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function routeRoutesRequestCookiesToAddSecretValueToHclTerraform(struct?: RouteRoutesRequestCookiesToAddSecretValueOutputReference | RouteRoutesRequestCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: routeRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: routeRoutesRequestCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestCookiesToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: routeRoutesRequestCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: routeRoutesRequestCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestCookiesToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestCookiesToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: RouteRoutesRequestCookiesToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new RouteRoutesRequestCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: RouteRoutesRequestCookiesToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: RouteRoutesRequestCookiesToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: RouteRoutesRequestCookiesToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface RouteRoutesRequestCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#overwrite Route#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#value Route#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_value Route#secret_value}
  */
  readonly secretValue?: RouteRoutesRequestCookiesToAddSecretValue;
}

export function routeRoutesRequestCookiesToAddToTerraform(struct?: RouteRoutesRequestCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: routeRoutesRequestCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function routeRoutesRequestCookiesToAddToHclTerraform(struct?: RouteRoutesRequestCookiesToAdd | cdktf.IResolvable): any {
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
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: routeRoutesRequestCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestCookiesToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesRequestCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new RouteRoutesRequestCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: RouteRoutesRequestCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class RouteRoutesRequestCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesRequestCookiesToAdd[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesRequestCookiesToAddOutputReference {
    return new RouteRoutesRequestCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesRequestHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#url Route#url}
  */
  readonly url: string;
}

export function routeRoutesRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueClearSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function routeRoutesRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueClearSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#key Route#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding Route#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#version Route#version}
  */
  readonly version?: number;
}

export function routeRoutesRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function routeRoutesRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
}

export function routeRoutesRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeRoutesRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteRoutesRequestHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding_type Route#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info Route#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info_internal Route#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#clear_secret_info Route#clear_secret_info}
  */
  readonly clearSecretInfo?: RouteRoutesRequestHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#vault_secret_info Route#vault_secret_info}
  */
  readonly vaultSecretInfo?: RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#wingman_secret_info Route#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfo;
}

export function routeRoutesRequestHeadersToAddSecretValueToTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueOutputReference | RouteRoutesRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: routeRoutesRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: routeRoutesRequestHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: routeRoutesRequestHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function routeRoutesRequestHeadersToAddSecretValueToHclTerraform(struct?: RouteRoutesRequestHeadersToAddSecretValueOutputReference | RouteRoutesRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: routeRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: routeRoutesRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: routeRoutesRequestHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: routeRoutesRequestHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRequestHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: RouteRoutesRequestHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new RouteRoutesRequestHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: RouteRoutesRequestHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: RouteRoutesRequestHeadersToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: RouteRoutesRequestHeadersToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface RouteRoutesRequestHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#append Route#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#value Route#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_value Route#secret_value}
  */
  readonly secretValue?: RouteRoutesRequestHeadersToAddSecretValue;
}

export function routeRoutesRequestHeadersToAddToTerraform(struct?: RouteRoutesRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: routeRoutesRequestHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function routeRoutesRequestHeadersToAddToHclTerraform(struct?: RouteRoutesRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: routeRoutesRequestHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new RouteRoutesRequestHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: RouteRoutesRequestHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class RouteRoutesRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesRequestHeadersToAddOutputReference {
    return new RouteRoutesRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesResponseCookiesToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#url Route#url}
  */
  readonly url: string;
}

export function routeRoutesResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueClearSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function routeRoutesResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueClearSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseCookiesToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseCookiesToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseCookiesToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#key Route#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding Route#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#version Route#version}
  */
  readonly version?: number;
}

export function routeRoutesResponseCookiesToAddSecretValueVaultSecretInfoToTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function routeRoutesResponseCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
}

export function routeRoutesResponseCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeRoutesResponseCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteRoutesResponseCookiesToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding_type Route#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info Route#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info_internal Route#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#clear_secret_info Route#clear_secret_info}
  */
  readonly clearSecretInfo?: RouteRoutesResponseCookiesToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#vault_secret_info Route#vault_secret_info}
  */
  readonly vaultSecretInfo?: RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#wingman_secret_info Route#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfo;
}

export function routeRoutesResponseCookiesToAddSecretValueToTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueOutputReference | RouteRoutesResponseCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: routeRoutesResponseCookiesToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: routeRoutesResponseCookiesToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: routeRoutesResponseCookiesToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function routeRoutesResponseCookiesToAddSecretValueToHclTerraform(struct?: RouteRoutesResponseCookiesToAddSecretValueOutputReference | RouteRoutesResponseCookiesToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: routeRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: routeRoutesResponseCookiesToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseCookiesToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: routeRoutesResponseCookiesToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: routeRoutesResponseCookiesToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseCookiesToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseCookiesToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseCookiesToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: RouteRoutesResponseCookiesToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new RouteRoutesResponseCookiesToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: RouteRoutesResponseCookiesToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: RouteRoutesResponseCookiesToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: RouteRoutesResponseCookiesToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface RouteRoutesResponseCookiesToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_domain Route#add_domain}
  */
  readonly addDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_expiry Route#add_expiry}
  */
  readonly addExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_httponly Route#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_partitioned Route#add_partitioned}
  */
  readonly addPartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_path Route#add_path}
  */
  readonly addPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_secure Route#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_domain Route#ignore_domain}
  */
  readonly ignoreDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_expiry Route#ignore_expiry}
  */
  readonly ignoreExpiry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_httponly Route#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_max_age Route#ignore_max_age}
  */
  readonly ignoreMaxAge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_partitioned Route#ignore_partitioned}
  */
  readonly ignorePartitioned?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_path Route#ignore_path}
  */
  readonly ignorePath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_samesite Route#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_secure Route#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_value Route#ignore_value}
  */
  readonly ignoreValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#max_age_value Route#max_age_value}
  */
  readonly maxAgeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#overwrite Route#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#samesite_lax Route#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#samesite_none Route#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#samesite_strict Route#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#value Route#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_value Route#secret_value}
  */
  readonly secretValue?: RouteRoutesResponseCookiesToAddSecretValue;
}

export function routeRoutesResponseCookiesToAddToTerraform(struct?: RouteRoutesResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_domain: cdktf.stringToTerraform(struct!.addDomain),
    add_expiry: cdktf.stringToTerraform(struct!.addExpiry),
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_partitioned: cdktf.booleanToTerraform(struct!.addPartitioned),
    add_path: cdktf.stringToTerraform(struct!.addPath),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_domain: cdktf.booleanToTerraform(struct!.ignoreDomain),
    ignore_expiry: cdktf.booleanToTerraform(struct!.ignoreExpiry),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_max_age: cdktf.booleanToTerraform(struct!.ignoreMaxAge),
    ignore_partitioned: cdktf.booleanToTerraform(struct!.ignorePartitioned),
    ignore_path: cdktf.booleanToTerraform(struct!.ignorePath),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    ignore_value: cdktf.booleanToTerraform(struct!.ignoreValue),
    max_age_value: cdktf.numberToTerraform(struct!.maxAgeValue),
    name: cdktf.stringToTerraform(struct!.name),
    overwrite: cdktf.booleanToTerraform(struct!.overwrite),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: routeRoutesResponseCookiesToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function routeRoutesResponseCookiesToAddToHclTerraform(struct?: RouteRoutesResponseCookiesToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_domain: {
      value: cdktf.stringToHclTerraform(struct!.addDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_expiry: {
      value: cdktf.stringToHclTerraform(struct!.addExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.addPartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_path: {
      value: cdktf.stringToHclTerraform(struct!.addPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_domain: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_max_age: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_partitioned: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePartitioned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_path: {
      value: cdktf.booleanToHclTerraform(struct!.ignorePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_value: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_age_value: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite: {
      value: cdktf.booleanToHclTerraform(struct!.overwrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: routeRoutesResponseCookiesToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseCookiesToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseCookiesToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesResponseCookiesToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.addDomain = this._addDomain;
    }
    if (this._addExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.addExpiry = this._addExpiry;
    }
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addPartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPartitioned = this._addPartitioned;
    }
    if (this._addPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.addPath = this._addPath;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDomain = this._ignoreDomain;
    }
    if (this._ignoreExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreExpiry = this._ignoreExpiry;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMaxAge = this._ignoreMaxAge;
    }
    if (this._ignorePartitioned !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePartitioned = this._ignorePartitioned;
    }
    if (this._ignorePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePath = this._ignorePath;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._ignoreValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreValue = this._ignoreValue;
    }
    if (this._maxAgeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeValue = this._maxAgeValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwrite = this._overwrite;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseCookiesToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addDomain = undefined;
      this._addExpiry = undefined;
      this._addHttponly = undefined;
      this._addPartitioned = undefined;
      this._addPath = undefined;
      this._addSecure = undefined;
      this._ignoreDomain = undefined;
      this._ignoreExpiry = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreMaxAge = undefined;
      this._ignorePartitioned = undefined;
      this._ignorePath = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._ignoreValue = undefined;
      this._maxAgeValue = undefined;
      this._name = undefined;
      this._overwrite = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addDomain = value.addDomain;
      this._addExpiry = value.addExpiry;
      this._addHttponly = value.addHttponly;
      this._addPartitioned = value.addPartitioned;
      this._addPath = value.addPath;
      this._addSecure = value.addSecure;
      this._ignoreDomain = value.ignoreDomain;
      this._ignoreExpiry = value.ignoreExpiry;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreMaxAge = value.ignoreMaxAge;
      this._ignorePartitioned = value.ignorePartitioned;
      this._ignorePath = value.ignorePath;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._ignoreValue = value.ignoreValue;
      this._maxAgeValue = value.maxAgeValue;
      this._name = value.name;
      this._overwrite = value.overwrite;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // add_domain - computed: false, optional: true, required: false
  private _addDomain?: string; 
  public get addDomain() {
    return this.getStringAttribute('add_domain');
  }
  public set addDomain(value: string) {
    this._addDomain = value;
  }
  public resetAddDomain() {
    this._addDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDomainInput() {
    return this._addDomain;
  }

  // add_expiry - computed: false, optional: true, required: false
  private _addExpiry?: string; 
  public get addExpiry() {
    return this.getStringAttribute('add_expiry');
  }
  public set addExpiry(value: string) {
    this._addExpiry = value;
  }
  public resetAddExpiry() {
    this._addExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addExpiryInput() {
    return this._addExpiry;
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_partitioned - computed: false, optional: true, required: false
  private _addPartitioned?: boolean | cdktf.IResolvable; 
  public get addPartitioned() {
    return this.getBooleanAttribute('add_partitioned');
  }
  public set addPartitioned(value: boolean | cdktf.IResolvable) {
    this._addPartitioned = value;
  }
  public resetAddPartitioned() {
    this._addPartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPartitionedInput() {
    return this._addPartitioned;
  }

  // add_path - computed: false, optional: true, required: false
  private _addPath?: string; 
  public get addPath() {
    return this.getStringAttribute('add_path');
  }
  public set addPath(value: string) {
    this._addPath = value;
  }
  public resetAddPath() {
    this._addPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addPathInput() {
    return this._addPath;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_domain - computed: false, optional: true, required: false
  private _ignoreDomain?: boolean | cdktf.IResolvable; 
  public get ignoreDomain() {
    return this.getBooleanAttribute('ignore_domain');
  }
  public set ignoreDomain(value: boolean | cdktf.IResolvable) {
    this._ignoreDomain = value;
  }
  public resetIgnoreDomain() {
    this._ignoreDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDomainInput() {
    return this._ignoreDomain;
  }

  // ignore_expiry - computed: false, optional: true, required: false
  private _ignoreExpiry?: boolean | cdktf.IResolvable; 
  public get ignoreExpiry() {
    return this.getBooleanAttribute('ignore_expiry');
  }
  public set ignoreExpiry(value: boolean | cdktf.IResolvable) {
    this._ignoreExpiry = value;
  }
  public resetIgnoreExpiry() {
    this._ignoreExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExpiryInput() {
    return this._ignoreExpiry;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_max_age - computed: false, optional: true, required: false
  private _ignoreMaxAge?: boolean | cdktf.IResolvable; 
  public get ignoreMaxAge() {
    return this.getBooleanAttribute('ignore_max_age');
  }
  public set ignoreMaxAge(value: boolean | cdktf.IResolvable) {
    this._ignoreMaxAge = value;
  }
  public resetIgnoreMaxAge() {
    this._ignoreMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMaxAgeInput() {
    return this._ignoreMaxAge;
  }

  // ignore_partitioned - computed: false, optional: true, required: false
  private _ignorePartitioned?: boolean | cdktf.IResolvable; 
  public get ignorePartitioned() {
    return this.getBooleanAttribute('ignore_partitioned');
  }
  public set ignorePartitioned(value: boolean | cdktf.IResolvable) {
    this._ignorePartitioned = value;
  }
  public resetIgnorePartitioned() {
    this._ignorePartitioned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePartitionedInput() {
    return this._ignorePartitioned;
  }

  // ignore_path - computed: false, optional: true, required: false
  private _ignorePath?: boolean | cdktf.IResolvable; 
  public get ignorePath() {
    return this.getBooleanAttribute('ignore_path');
  }
  public set ignorePath(value: boolean | cdktf.IResolvable) {
    this._ignorePath = value;
  }
  public resetIgnorePath() {
    this._ignorePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePathInput() {
    return this._ignorePath;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
  }

  // ignore_value - computed: false, optional: true, required: false
  private _ignoreValue?: boolean | cdktf.IResolvable; 
  public get ignoreValue() {
    return this.getBooleanAttribute('ignore_value');
  }
  public set ignoreValue(value: boolean | cdktf.IResolvable) {
    this._ignoreValue = value;
  }
  public resetIgnoreValue() {
    this._ignoreValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreValueInput() {
    return this._ignoreValue;
  }

  // max_age_value - computed: false, optional: true, required: false
  private _maxAgeValue?: number; 
  public get maxAgeValue() {
    return this.getNumberAttribute('max_age_value');
  }
  public set maxAgeValue(value: number) {
    this._maxAgeValue = value;
  }
  public resetMaxAgeValue() {
    this._maxAgeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeValueInput() {
    return this._maxAgeValue;
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

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new RouteRoutesResponseCookiesToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: RouteRoutesResponseCookiesToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class RouteRoutesResponseCookiesToAddList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesResponseCookiesToAdd[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesResponseCookiesToAddOutputReference {
    return new RouteRoutesResponseCookiesToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#decryption_provider Route#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#store_provider Route#store_provider}
  */
  readonly storeProvider?: string;
}

export function routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference | RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface RouteRoutesResponseHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#url Route#url}
  */
  readonly url: string;
}

export function routeRoutesResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueClearSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function routeRoutesResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueClearSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
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
}
export interface RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#key Route#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#location Route#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#provider Route#provider}
  */
  readonly provider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding Route#secret_encoding}
  */
  readonly secretEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#version Route#version}
  */
  readonly version?: number;
}

export function routeRoutesResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    location: cdktf.stringToTerraform(struct!.location),
    provider: cdktf.stringToTerraform(struct!.provider),
    secret_encoding: cdktf.stringToTerraform(struct!.secretEncoding),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function routeRoutesResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfo): any {
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
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_encoding: {
      value: cdktf.stringToHclTerraform(struct!.secretEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._secretEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncoding = this._secretEncoding;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._location = undefined;
      this._provider = undefined;
      this._secretEncoding = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._location = value.location;
      this._provider = value.provider;
      this._secretEncoding = value.secretEncoding;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // secret_encoding - computed: false, optional: true, required: false
  private _secretEncoding?: string; 
  public get secretEncoding() {
    return this.getStringAttribute('secret_encoding');
  }
  public set secretEncoding(value: string) {
    this._secretEncoding = value;
  }
  public resetSecretEncoding() {
    this._secretEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingInput() {
    return this._secretEncoding;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
}

export function routeRoutesResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routeRoutesResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference | RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfo): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}
export interface RouteRoutesResponseHeadersToAddSecretValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_encoding_type Route#secret_encoding_type}
  */
  readonly secretEncodingType?: string;
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info Route#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * blindfold_secret_info_internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#blindfold_secret_info_internal Route#blindfold_secret_info_internal}
  */
  readonly blindfoldSecretInfoInternal?: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#clear_secret_info Route#clear_secret_info}
  */
  readonly clearSecretInfo?: RouteRoutesResponseHeadersToAddSecretValueClearSecretInfo;
  /**
  * vault_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#vault_secret_info Route#vault_secret_info}
  */
  readonly vaultSecretInfo?: RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfo;
  /**
  * wingman_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#wingman_secret_info Route#wingman_secret_info}
  */
  readonly wingmanSecretInfo?: RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfo;
}

export function routeRoutesResponseHeadersToAddSecretValueToTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueOutputReference | RouteRoutesResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_encoding_type: cdktf.stringToTerraform(struct!.secretEncodingType),
    blindfold_secret_info: routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    blindfold_secret_info_internal: routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToTerraform(struct!.blindfoldSecretInfoInternal),
    clear_secret_info: routeRoutesResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
    vault_secret_info: routeRoutesResponseHeadersToAddSecretValueVaultSecretInfoToTerraform(struct!.vaultSecretInfo),
    wingman_secret_info: routeRoutesResponseHeadersToAddSecretValueWingmanSecretInfoToTerraform(struct!.wingmanSecretInfo),
  }
}


export function routeRoutesResponseHeadersToAddSecretValueToHclTerraform(struct?: RouteRoutesResponseHeadersToAddSecretValueOutputReference | RouteRoutesResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_encoding_type: {
      value: cdktf.stringToHclTerraform(struct!.secretEncodingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blindfold_secret_info: {
      value: routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    blindfold_secret_info_internal: {
      value: routeRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalToHclTerraform(struct!.blindfoldSecretInfoInternal),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalList",
    },
    clear_secret_info: {
      value: routeRoutesResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseHeadersToAddSecretValueClearSecretInfoList",
    },
    vault_secret_info: {
      value: routeRoutesResponseHeadersToAddSecretValueVaultSecretInfoToHclTerraform(struct!.vaultSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfoList",
    },
    wingman_secret_info: {
      value: routeRoutesResponseHeadersToAddSecretValueWingmanSecretInfoToHclTerraform(struct!.wingmanSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesResponseHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretEncodingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEncodingType = this._secretEncodingType;
    }
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._blindfoldSecretInfoInternal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfoInternal = this._blindfoldSecretInfoInternal?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    if (this._vaultSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretInfo = this._vaultSecretInfo?.internalValue;
    }
    if (this._wingmanSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wingmanSecretInfo = this._wingmanSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretEncodingType = undefined;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._blindfoldSecretInfoInternal.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
      this._vaultSecretInfo.internalValue = undefined;
      this._wingmanSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretEncodingType = value.secretEncodingType;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._blindfoldSecretInfoInternal.internalValue = value.blindfoldSecretInfoInternal;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
      this._vaultSecretInfo.internalValue = value.vaultSecretInfo;
      this._wingmanSecretInfo.internalValue = value.wingmanSecretInfo;
    }
  }

  // secret_encoding_type - computed: false, optional: true, required: false
  private _secretEncodingType?: string; 
  public get secretEncodingType() {
    return this.getStringAttribute('secret_encoding_type');
  }
  public set secretEncodingType(value: string) {
    this._secretEncodingType = value;
  }
  public resetSecretEncodingType() {
    this._secretEncodingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEncodingTypeInput() {
    return this._secretEncodingType;
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // blindfold_secret_info_internal - computed: false, optional: true, required: false
  private _blindfoldSecretInfoInternal = new RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternalOutputReference(this, "blindfold_secret_info_internal");
  public get blindfoldSecretInfoInternal() {
    return this._blindfoldSecretInfoInternal;
  }
  public putBlindfoldSecretInfoInternal(value: RouteRoutesResponseHeadersToAddSecretValueBlindfoldSecretInfoInternal) {
    this._blindfoldSecretInfoInternal.internalValue = value;
  }
  public resetBlindfoldSecretInfoInternal() {
    this._blindfoldSecretInfoInternal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInternalInput() {
    return this._blindfoldSecretInfoInternal.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new RouteRoutesResponseHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: RouteRoutesResponseHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }

  // vault_secret_info - computed: false, optional: true, required: false
  private _vaultSecretInfo = new RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfoOutputReference(this, "vault_secret_info");
  public get vaultSecretInfo() {
    return this._vaultSecretInfo;
  }
  public putVaultSecretInfo(value: RouteRoutesResponseHeadersToAddSecretValueVaultSecretInfo) {
    this._vaultSecretInfo.internalValue = value;
  }
  public resetVaultSecretInfo() {
    this._vaultSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretInfoInput() {
    return this._vaultSecretInfo.internalValue;
  }

  // wingman_secret_info - computed: false, optional: true, required: false
  private _wingmanSecretInfo = new RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfoOutputReference(this, "wingman_secret_info");
  public get wingmanSecretInfo() {
    return this._wingmanSecretInfo;
  }
  public putWingmanSecretInfo(value: RouteRoutesResponseHeadersToAddSecretValueWingmanSecretInfo) {
    this._wingmanSecretInfo.internalValue = value;
  }
  public resetWingmanSecretInfo() {
    this._wingmanSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wingmanSecretInfoInput() {
    return this._wingmanSecretInfo.internalValue;
  }
}
export interface RouteRoutesResponseHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#append Route#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#value Route#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#secret_value Route#secret_value}
  */
  readonly secretValue?: RouteRoutesResponseHeadersToAddSecretValue;
}

export function routeRoutesResponseHeadersToAddToTerraform(struct?: RouteRoutesResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: routeRoutesResponseHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function routeRoutesResponseHeadersToAddToHclTerraform(struct?: RouteRoutesResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: routeRoutesResponseHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new RouteRoutesResponseHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: RouteRoutesResponseHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class RouteRoutesResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesResponseHeadersToAddOutputReference {
    return new RouteRoutesResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesRouteDestinationBufferPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disabled Route#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#max_request_bytes Route#max_request_bytes}
  */
  readonly maxRequestBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#max_request_time Route#max_request_time}
  */
  readonly maxRequestTime?: number;
}

export function routeRoutesRouteDestinationBufferPolicyToTerraform(struct?: RouteRoutesRouteDestinationBufferPolicyOutputReference | RouteRoutesRouteDestinationBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    max_request_bytes: cdktf.numberToTerraform(struct!.maxRequestBytes),
    max_request_time: cdktf.numberToTerraform(struct!.maxRequestTime),
  }
}


export function routeRoutesRouteDestinationBufferPolicyToHclTerraform(struct?: RouteRoutesRouteDestinationBufferPolicyOutputReference | RouteRoutesRouteDestinationBufferPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_request_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_request_time: {
      value: cdktf.numberToHclTerraform(struct!.maxRequestTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationBufferPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationBufferPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._maxRequestBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestBytes = this._maxRequestBytes;
    }
    if (this._maxRequestTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRequestTime = this._maxRequestTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationBufferPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._maxRequestBytes = undefined;
      this._maxRequestTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._maxRequestBytes = value.maxRequestBytes;
      this._maxRequestTime = value.maxRequestTime;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // max_request_bytes - computed: false, optional: true, required: false
  private _maxRequestBytes?: number; 
  public get maxRequestBytes() {
    return this.getNumberAttribute('max_request_bytes');
  }
  public set maxRequestBytes(value: number) {
    this._maxRequestBytes = value;
  }
  public resetMaxRequestBytes() {
    this._maxRequestBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestBytesInput() {
    return this._maxRequestBytes;
  }

  // max_request_time - computed: false, optional: true, required: false
  private _maxRequestTime?: number; 
  public get maxRequestTime() {
    return this.getNumberAttribute('max_request_time');
  }
  public set maxRequestTime(value: number) {
    this._maxRequestTime = value;
  }
  public resetMaxRequestTime() {
    this._maxRequestTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestTimeInput() {
    return this._maxRequestTime;
  }
}
export interface RouteRoutesRouteDestinationCorsPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#allow_credentials Route#allow_credentials}
  */
  readonly allowCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#allow_headers Route#allow_headers}
  */
  readonly allowHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#allow_methods Route#allow_methods}
  */
  readonly allowMethods?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#allow_origin Route#allow_origin}
  */
  readonly allowOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#allow_origin_regex Route#allow_origin_regex}
  */
  readonly allowOriginRegex?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disabled Route#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#expose_headers Route#expose_headers}
  */
  readonly exposeHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#max_age Route#max_age}
  */
  readonly maxAge?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#maximum_age Route#maximum_age}
  */
  readonly maximumAge?: number;
}

export function routeRoutesRouteDestinationCorsPolicyToTerraform(struct?: RouteRoutesRouteDestinationCorsPolicyOutputReference | RouteRoutesRouteDestinationCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_credentials: cdktf.booleanToTerraform(struct!.allowCredentials),
    allow_headers: cdktf.stringToTerraform(struct!.allowHeaders),
    allow_methods: cdktf.stringToTerraform(struct!.allowMethods),
    allow_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOrigin),
    allow_origin_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowOriginRegex),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    expose_headers: cdktf.stringToTerraform(struct!.exposeHeaders),
    max_age: cdktf.stringToTerraform(struct!.maxAge),
    maximum_age: cdktf.numberToTerraform(struct!.maximumAge),
  }
}


export function routeRoutesRouteDestinationCorsPolicyToHclTerraform(struct?: RouteRoutesRouteDestinationCorsPolicyOutputReference | RouteRoutesRouteDestinationCorsPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_headers: {
      value: cdktf.stringToHclTerraform(struct!.allowHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_methods: {
      value: cdktf.stringToHclTerraform(struct!.allowMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_origin: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOrigin),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allow_origin_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowOriginRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expose_headers: {
      value: cdktf.stringToHclTerraform(struct!.exposeHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age: {
      value: cdktf.stringToHclTerraform(struct!.maxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_age: {
      value: cdktf.numberToHclTerraform(struct!.maximumAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationCorsPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationCorsPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCredentials = this._allowCredentials;
    }
    if (this._allowHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowHeaders = this._allowHeaders;
    }
    if (this._allowMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowMethods = this._allowMethods;
    }
    if (this._allowOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrigin = this._allowOrigin;
    }
    if (this._allowOriginRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOriginRegex = this._allowOriginRegex;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._exposeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeHeaders = this._exposeHeaders;
    }
    if (this._maxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAge = this._maxAge;
    }
    if (this._maximumAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumAge = this._maximumAge;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationCorsPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowCredentials = undefined;
      this._allowHeaders = undefined;
      this._allowMethods = undefined;
      this._allowOrigin = undefined;
      this._allowOriginRegex = undefined;
      this._disabled = undefined;
      this._exposeHeaders = undefined;
      this._maxAge = undefined;
      this._maximumAge = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowCredentials = value.allowCredentials;
      this._allowHeaders = value.allowHeaders;
      this._allowMethods = value.allowMethods;
      this._allowOrigin = value.allowOrigin;
      this._allowOriginRegex = value.allowOriginRegex;
      this._disabled = value.disabled;
      this._exposeHeaders = value.exposeHeaders;
      this._maxAge = value.maxAge;
      this._maximumAge = value.maximumAge;
    }
  }

  // allow_credentials - computed: false, optional: true, required: false
  private _allowCredentials?: boolean | cdktf.IResolvable; 
  public get allowCredentials() {
    return this.getBooleanAttribute('allow_credentials');
  }
  public set allowCredentials(value: boolean | cdktf.IResolvable) {
    this._allowCredentials = value;
  }
  public resetAllowCredentials() {
    this._allowCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCredentialsInput() {
    return this._allowCredentials;
  }

  // allow_headers - computed: false, optional: true, required: false
  private _allowHeaders?: string; 
  public get allowHeaders() {
    return this.getStringAttribute('allow_headers');
  }
  public set allowHeaders(value: string) {
    this._allowHeaders = value;
  }
  public resetAllowHeaders() {
    this._allowHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowHeadersInput() {
    return this._allowHeaders;
  }

  // allow_methods - computed: false, optional: true, required: false
  private _allowMethods?: string; 
  public get allowMethods() {
    return this.getStringAttribute('allow_methods');
  }
  public set allowMethods(value: string) {
    this._allowMethods = value;
  }
  public resetAllowMethods() {
    this._allowMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMethodsInput() {
    return this._allowMethods;
  }

  // allow_origin - computed: false, optional: true, required: false
  private _allowOrigin?: string[]; 
  public get allowOrigin() {
    return this.getListAttribute('allow_origin');
  }
  public set allowOrigin(value: string[]) {
    this._allowOrigin = value;
  }
  public resetAllowOrigin() {
    this._allowOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginInput() {
    return this._allowOrigin;
  }

  // allow_origin_regex - computed: false, optional: true, required: false
  private _allowOriginRegex?: string[]; 
  public get allowOriginRegex() {
    return this.getListAttribute('allow_origin_regex');
  }
  public set allowOriginRegex(value: string[]) {
    this._allowOriginRegex = value;
  }
  public resetAllowOriginRegex() {
    this._allowOriginRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOriginRegexInput() {
    return this._allowOriginRegex;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // expose_headers - computed: false, optional: true, required: false
  private _exposeHeaders?: string; 
  public get exposeHeaders() {
    return this.getStringAttribute('expose_headers');
  }
  public set exposeHeaders(value: string) {
    this._exposeHeaders = value;
  }
  public resetExposeHeaders() {
    this._exposeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeHeadersInput() {
    return this._exposeHeaders;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: string; 
  public get maxAge() {
    return this.getStringAttribute('max_age');
  }
  public set maxAge(value: string) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // maximum_age - computed: false, optional: true, required: false
  private _maximumAge?: number; 
  public get maximumAge() {
    return this.getNumberAttribute('maximum_age');
  }
  public set maximumAge(value: number) {
    this._maximumAge = value;
  }
  public resetMaximumAge() {
    this._maximumAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumAgeInput() {
    return this._maximumAge;
  }
}
export interface RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#domains Route#domains}
  */
  readonly domains: string[];
}

export function routeRoutesRouteDestinationCsrfPolicyCustomDomainListStructToTerraform(struct?: RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStructOutputReference | RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
}


export function routeRoutesRouteDestinationCsrfPolicyCustomDomainListStructToHclTerraform(struct?: RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStructOutputReference | RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domains = value.domains;
    }
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }
}
export interface RouteRoutesRouteDestinationCsrfPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#all_load_balancer_domains Route#all_load_balancer_domains}
  */
  readonly allLoadBalancerDomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disabled Route#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * custom_domain_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#custom_domain_list Route#custom_domain_list}
  */
  readonly customDomainList?: RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStruct;
}

export function routeRoutesRouteDestinationCsrfPolicyToTerraform(struct?: RouteRoutesRouteDestinationCsrfPolicyOutputReference | RouteRoutesRouteDestinationCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_load_balancer_domains: cdktf.booleanToTerraform(struct!.allLoadBalancerDomains),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    custom_domain_list: routeRoutesRouteDestinationCsrfPolicyCustomDomainListStructToTerraform(struct!.customDomainList),
  }
}


export function routeRoutesRouteDestinationCsrfPolicyToHclTerraform(struct?: RouteRoutesRouteDestinationCsrfPolicyOutputReference | RouteRoutesRouteDestinationCsrfPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_load_balancer_domains: {
      value: cdktf.booleanToHclTerraform(struct!.allLoadBalancerDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_domain_list: {
      value: routeRoutesRouteDestinationCsrfPolicyCustomDomainListStructToHclTerraform(struct!.customDomainList),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationCsrfPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationCsrfPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allLoadBalancerDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.allLoadBalancerDomains = this._allLoadBalancerDomains;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._customDomainList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomainList = this._customDomainList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationCsrfPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allLoadBalancerDomains = undefined;
      this._disabled = undefined;
      this._customDomainList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allLoadBalancerDomains = value.allLoadBalancerDomains;
      this._disabled = value.disabled;
      this._customDomainList.internalValue = value.customDomainList;
    }
  }

  // all_load_balancer_domains - computed: false, optional: true, required: false
  private _allLoadBalancerDomains?: boolean | cdktf.IResolvable; 
  public get allLoadBalancerDomains() {
    return this.getBooleanAttribute('all_load_balancer_domains');
  }
  public set allLoadBalancerDomains(value: boolean | cdktf.IResolvable) {
    this._allLoadBalancerDomains = value;
  }
  public resetAllLoadBalancerDomains() {
    this._allLoadBalancerDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allLoadBalancerDomainsInput() {
    return this._allLoadBalancerDomains;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // custom_domain_list - computed: false, optional: true, required: false
  private _customDomainList = new RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStructOutputReference(this, "custom_domain_list");
  public get customDomainList() {
    return this._customDomainList;
  }
  public putCustomDomainList(value: RouteRoutesRouteDestinationCsrfPolicyCustomDomainListStruct) {
    this._customDomainList.internalValue = value;
  }
  public resetCustomDomainList() {
    this._customDomainList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainListInput() {
    return this._customDomainList.internalValue;
  }
}
export interface RouteRoutesRouteDestinationDestinationsCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#namespace Route#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#tenant Route#tenant}
  */
  readonly tenant?: string;
}

export function routeRoutesRouteDestinationDestinationsClusterToTerraform(struct?: RouteRoutesRouteDestinationDestinationsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function routeRoutesRouteDestinationDestinationsClusterToHclTerraform(struct?: RouteRoutesRouteDestinationDestinationsCluster | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationDestinationsClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesRouteDestinationDestinationsCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationDestinationsCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class RouteRoutesRouteDestinationDestinationsClusterList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesRouteDestinationDestinationsCluster[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesRouteDestinationDestinationsClusterOutputReference {
    return new RouteRoutesRouteDestinationDestinationsClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesRouteDestinationDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#endpoint_subsets Route#endpoint_subsets}
  */
  readonly endpointSubsets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#priority Route#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#weight Route#weight}
  */
  readonly weight?: number;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#cluster Route#cluster}
  */
  readonly cluster: RouteRoutesRouteDestinationDestinationsCluster[] | cdktf.IResolvable;
}

export function routeRoutesRouteDestinationDestinationsToTerraform(struct?: RouteRoutesRouteDestinationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_subsets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointSubsets),
    priority: cdktf.numberToTerraform(struct!.priority),
    weight: cdktf.numberToTerraform(struct!.weight),
    cluster: cdktf.listMapper(routeRoutesRouteDestinationDestinationsClusterToTerraform, true)(struct!.cluster),
  }
}


export function routeRoutesRouteDestinationDestinationsToHclTerraform(struct?: RouteRoutesRouteDestinationDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_subsets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointSubsets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster: {
      value: cdktf.listMapperHcl(routeRoutesRouteDestinationDestinationsClusterToHclTerraform, true)(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationDestinationsClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesRouteDestinationDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointSubsets = undefined;
      this._priority = undefined;
      this._weight = undefined;
      this._cluster.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointSubsets = value.endpointSubsets;
      this._priority = value.priority;
      this._weight = value.weight;
      this._cluster.internalValue = value.cluster;
    }
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets?: { [key: string]: string }; 
  public get endpointSubsets() {
    return this.getStringMapAttribute('endpoint_subsets');
  }
  public set endpointSubsets(value: { [key: string]: string }) {
    this._endpointSubsets = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

  // cluster - computed: false, optional: false, required: true
  private _cluster = new RouteRoutesRouteDestinationDestinationsClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: RouteRoutesRouteDestinationDestinationsCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }
}

export class RouteRoutesRouteDestinationDestinationsList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesRouteDestinationDestinations[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesRouteDestinationDestinationsOutputReference {
    return new RouteRoutesRouteDestinationDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesRouteDestinationHashPolicyCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_httponly Route#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#add_secure Route#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_httponly Route#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_samesite Route#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ignore_secure Route#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#path Route#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#samesite_lax Route#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#samesite_none Route#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#samesite_strict Route#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#ttl Route#ttl}
  */
  readonly ttl?: number;
}

export function routeRoutesRouteDestinationHashPolicyCookieToTerraform(struct?: RouteRoutesRouteDestinationHashPolicyCookieOutputReference | RouteRoutesRouteDestinationHashPolicyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function routeRoutesRouteDestinationHashPolicyCookieToHclTerraform(struct?: RouteRoutesRouteDestinationHashPolicyCookieOutputReference | RouteRoutesRouteDestinationHashPolicyCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationHashPolicyCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationHashPolicyCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationHashPolicyCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHttponly = undefined;
      this._addSecure = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._name = undefined;
      this._path = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHttponly = value.addHttponly;
      this._addSecure = value.addSecure;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._name = value.name;
      this._path = value.path;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
      this._ttl = value.ttl;
    }
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface RouteRoutesRouteDestinationHashPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#header_name Route#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#source_ip Route#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#terminal Route#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#cookie Route#cookie}
  */
  readonly cookie?: RouteRoutesRouteDestinationHashPolicyCookie;
}

export function routeRoutesRouteDestinationHashPolicyToTerraform(struct?: RouteRoutesRouteDestinationHashPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
    terminal: cdktf.booleanToTerraform(struct!.terminal),
    cookie: routeRoutesRouteDestinationHashPolicyCookieToTerraform(struct!.cookie),
  }
}


export function routeRoutesRouteDestinationHashPolicyToHclTerraform(struct?: RouteRoutesRouteDestinationHashPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    terminal: {
      value: cdktf.booleanToHclTerraform(struct!.terminal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cookie: {
      value: routeRoutesRouteDestinationHashPolicyCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationHashPolicyCookieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationHashPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesRouteDestinationHashPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    if (this._terminal !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminal = this._terminal;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationHashPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerName = undefined;
      this._sourceIp = undefined;
      this._terminal = undefined;
      this._cookie.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerName = value.headerName;
      this._sourceIp = value.sourceIp;
      this._terminal = value.terminal;
      this._cookie.internalValue = value.cookie;
    }
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new RouteRoutesRouteDestinationHashPolicyCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: RouteRoutesRouteDestinationHashPolicyCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }
}

export class RouteRoutesRouteDestinationHashPolicyList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesRouteDestinationHashPolicy[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesRouteDestinationHashPolicyOutputReference {
    return new RouteRoutesRouteDestinationHashPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesRouteDestinationMirrorPolicyCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#namespace Route#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#tenant Route#tenant}
  */
  readonly tenant?: string;
}

export function routeRoutesRouteDestinationMirrorPolicyClusterToTerraform(struct?: RouteRoutesRouteDestinationMirrorPolicyCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function routeRoutesRouteDestinationMirrorPolicyClusterToHclTerraform(struct?: RouteRoutesRouteDestinationMirrorPolicyCluster | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationMirrorPolicyClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesRouteDestinationMirrorPolicyCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationMirrorPolicyCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class RouteRoutesRouteDestinationMirrorPolicyClusterList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesRouteDestinationMirrorPolicyCluster[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesRouteDestinationMirrorPolicyClusterOutputReference {
    return new RouteRoutesRouteDestinationMirrorPolicyClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesRouteDestinationMirrorPolicyPercent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#denominator Route#denominator}
  */
  readonly denominator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#numerator Route#numerator}
  */
  readonly numerator: number;
}

export function routeRoutesRouteDestinationMirrorPolicyPercentToTerraform(struct?: RouteRoutesRouteDestinationMirrorPolicyPercentOutputReference | RouteRoutesRouteDestinationMirrorPolicyPercent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denominator: cdktf.stringToTerraform(struct!.denominator),
    numerator: cdktf.numberToTerraform(struct!.numerator),
  }
}


export function routeRoutesRouteDestinationMirrorPolicyPercentToHclTerraform(struct?: RouteRoutesRouteDestinationMirrorPolicyPercentOutputReference | RouteRoutesRouteDestinationMirrorPolicyPercent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denominator: {
      value: cdktf.stringToHclTerraform(struct!.denominator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numerator: {
      value: cdktf.numberToHclTerraform(struct!.numerator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationMirrorPolicyPercentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationMirrorPolicyPercent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denominator !== undefined) {
      hasAnyValues = true;
      internalValueResult.denominator = this._denominator;
    }
    if (this._numerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.numerator = this._numerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationMirrorPolicyPercent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denominator = undefined;
      this._numerator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denominator = value.denominator;
      this._numerator = value.numerator;
    }
  }

  // denominator - computed: false, optional: false, required: true
  private _denominator?: string; 
  public get denominator() {
    return this.getStringAttribute('denominator');
  }
  public set denominator(value: string) {
    this._denominator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get denominatorInput() {
    return this._denominator;
  }

  // numerator - computed: false, optional: false, required: true
  private _numerator?: number; 
  public get numerator() {
    return this.getNumberAttribute('numerator');
  }
  public set numerator(value: number) {
    this._numerator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numeratorInput() {
    return this._numerator;
  }
}
export interface RouteRoutesRouteDestinationMirrorPolicy {
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#cluster Route#cluster}
  */
  readonly cluster: RouteRoutesRouteDestinationMirrorPolicyCluster[] | cdktf.IResolvable;
  /**
  * percent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#percent Route#percent}
  */
  readonly percent?: RouteRoutesRouteDestinationMirrorPolicyPercent;
}

export function routeRoutesRouteDestinationMirrorPolicyToTerraform(struct?: RouteRoutesRouteDestinationMirrorPolicyOutputReference | RouteRoutesRouteDestinationMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.listMapper(routeRoutesRouteDestinationMirrorPolicyClusterToTerraform, true)(struct!.cluster),
    percent: routeRoutesRouteDestinationMirrorPolicyPercentToTerraform(struct!.percent),
  }
}


export function routeRoutesRouteDestinationMirrorPolicyToHclTerraform(struct?: RouteRoutesRouteDestinationMirrorPolicyOutputReference | RouteRoutesRouteDestinationMirrorPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.listMapperHcl(routeRoutesRouteDestinationMirrorPolicyClusterToHclTerraform, true)(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationMirrorPolicyClusterList",
    },
    percent: {
      value: routeRoutesRouteDestinationMirrorPolicyPercentToHclTerraform(struct!.percent),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationMirrorPolicyPercentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationMirrorPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationMirrorPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._percent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationMirrorPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster.internalValue = undefined;
      this._percent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster.internalValue = value.cluster;
      this._percent.internalValue = value.percent;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new RouteRoutesRouteDestinationMirrorPolicyClusterList(this, "cluster", false);
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: RouteRoutesRouteDestinationMirrorPolicyCluster[] | cdktf.IResolvable) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // percent - computed: false, optional: true, required: false
  private _percent = new RouteRoutesRouteDestinationMirrorPolicyPercentOutputReference(this, "percent");
  public get percent() {
    return this._percent;
  }
  public putPercent(value: RouteRoutesRouteDestinationMirrorPolicyPercent) {
    this._percent.internalValue = value;
  }
  public resetPercent() {
    this._percent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent.internalValue;
  }
}
export interface RouteRoutesRouteDestinationQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#remove_all_params Route#remove_all_params}
  */
  readonly removeAllParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#replace_params Route#replace_params}
  */
  readonly replaceParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#retain_all_params Route#retain_all_params}
  */
  readonly retainAllParams?: boolean | cdktf.IResolvable;
}

export function routeRoutesRouteDestinationQueryParamsToTerraform(struct?: RouteRoutesRouteDestinationQueryParamsOutputReference | RouteRoutesRouteDestinationQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remove_all_params: cdktf.booleanToTerraform(struct!.removeAllParams),
    replace_params: cdktf.stringToTerraform(struct!.replaceParams),
    retain_all_params: cdktf.booleanToTerraform(struct!.retainAllParams),
  }
}


export function routeRoutesRouteDestinationQueryParamsToHclTerraform(struct?: RouteRoutesRouteDestinationQueryParamsOutputReference | RouteRoutesRouteDestinationQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remove_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.removeAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_params: {
      value: cdktf.stringToHclTerraform(struct!.replaceParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.retainAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationQueryParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._removeAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAllParams = this._removeAllParams;
    }
    if (this._replaceParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceParams = this._replaceParams;
    }
    if (this._retainAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAllParams = this._retainAllParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationQueryParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._removeAllParams = undefined;
      this._replaceParams = undefined;
      this._retainAllParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._removeAllParams = value.removeAllParams;
      this._replaceParams = value.replaceParams;
      this._retainAllParams = value.retainAllParams;
    }
  }

  // remove_all_params - computed: false, optional: true, required: false
  private _removeAllParams?: boolean | cdktf.IResolvable; 
  public get removeAllParams() {
    return this.getBooleanAttribute('remove_all_params');
  }
  public set removeAllParams(value: boolean | cdktf.IResolvable) {
    this._removeAllParams = value;
  }
  public resetRemoveAllParams() {
    this._removeAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAllParamsInput() {
    return this._removeAllParams;
  }

  // replace_params - computed: false, optional: true, required: false
  private _replaceParams?: string; 
  public get replaceParams() {
    return this.getStringAttribute('replace_params');
  }
  public set replaceParams(value: string) {
    this._replaceParams = value;
  }
  public resetReplaceParams() {
    this._replaceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceParamsInput() {
    return this._replaceParams;
  }

  // retain_all_params - computed: false, optional: true, required: false
  private _retainAllParams?: boolean | cdktf.IResolvable; 
  public get retainAllParams() {
    return this.getBooleanAttribute('retain_all_params');
  }
  public set retainAllParams(value: boolean | cdktf.IResolvable) {
    this._retainAllParams = value;
  }
  public resetRetainAllParams() {
    this._retainAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAllParamsInput() {
    return this._retainAllParams;
  }
}
export interface RouteRoutesRouteDestinationRegexRewrite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#pattern Route#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#substitution Route#substitution}
  */
  readonly substitution?: string;
}

export function routeRoutesRouteDestinationRegexRewriteToTerraform(struct?: RouteRoutesRouteDestinationRegexRewriteOutputReference | RouteRoutesRouteDestinationRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
    substitution: cdktf.stringToTerraform(struct!.substitution),
  }
}


export function routeRoutesRouteDestinationRegexRewriteToHclTerraform(struct?: RouteRoutesRouteDestinationRegexRewriteOutputReference | RouteRoutesRouteDestinationRegexRewrite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitution: {
      value: cdktf.stringToHclTerraform(struct!.substitution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationRegexRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationRegexRewrite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._substitution !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitution = this._substitution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationRegexRewrite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pattern = undefined;
      this._substitution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pattern = value.pattern;
      this._substitution = value.substitution;
    }
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // substitution - computed: false, optional: true, required: false
  private _substitution?: string; 
  public get substitution() {
    return this.getStringAttribute('substitution');
  }
  public set substitution(value: string) {
    this._substitution = value;
  }
  public resetSubstitution() {
    this._substitution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionInput() {
    return this._substitution;
  }
}
export interface RouteRoutesRouteDestinationRetryPolicyBackOff {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#base_interval Route#base_interval}
  */
  readonly baseInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#max_interval Route#max_interval}
  */
  readonly maxInterval?: number;
}

export function routeRoutesRouteDestinationRetryPolicyBackOffToTerraform(struct?: RouteRoutesRouteDestinationRetryPolicyBackOffOutputReference | RouteRoutesRouteDestinationRetryPolicyBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_interval: cdktf.numberToTerraform(struct!.baseInterval),
    max_interval: cdktf.numberToTerraform(struct!.maxInterval),
  }
}


export function routeRoutesRouteDestinationRetryPolicyBackOffToHclTerraform(struct?: RouteRoutesRouteDestinationRetryPolicyBackOffOutputReference | RouteRoutesRouteDestinationRetryPolicyBackOff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_interval: {
      value: cdktf.numberToHclTerraform(struct!.baseInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_interval: {
      value: cdktf.numberToHclTerraform(struct!.maxInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationRetryPolicyBackOffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationRetryPolicyBackOff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseInterval = this._baseInterval;
    }
    if (this._maxInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInterval = this._maxInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationRetryPolicyBackOff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseInterval = undefined;
      this._maxInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseInterval = value.baseInterval;
      this._maxInterval = value.maxInterval;
    }
  }

  // base_interval - computed: false, optional: true, required: false
  private _baseInterval?: number; 
  public get baseInterval() {
    return this.getNumberAttribute('base_interval');
  }
  public set baseInterval(value: number) {
    this._baseInterval = value;
  }
  public resetBaseInterval() {
    this._baseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseIntervalInput() {
    return this._baseInterval;
  }

  // max_interval - computed: false, optional: true, required: false
  private _maxInterval?: number; 
  public get maxInterval() {
    return this.getNumberAttribute('max_interval');
  }
  public set maxInterval(value: number) {
    this._maxInterval = value;
  }
  public resetMaxInterval() {
    this._maxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntervalInput() {
    return this._maxInterval;
  }
}
export interface RouteRoutesRouteDestinationRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#num_retries Route#num_retries}
  */
  readonly numRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#per_try_timeout Route#per_try_timeout}
  */
  readonly perTryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#retriable_status_codes Route#retriable_status_codes}
  */
  readonly retriableStatusCodes?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#retry_condition Route#retry_condition}
  */
  readonly retryCondition: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#retry_on Route#retry_on}
  */
  readonly retryOn?: string;
  /**
  * back_off block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#back_off Route#back_off}
  */
  readonly backOff?: RouteRoutesRouteDestinationRetryPolicyBackOff;
}

export function routeRoutesRouteDestinationRetryPolicyToTerraform(struct?: RouteRoutesRouteDestinationRetryPolicyOutputReference | RouteRoutesRouteDestinationRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    num_retries: cdktf.numberToTerraform(struct!.numRetries),
    per_try_timeout: cdktf.numberToTerraform(struct!.perTryTimeout),
    retriable_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.retriableStatusCodes),
    retry_condition: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.retryCondition),
    retry_on: cdktf.stringToTerraform(struct!.retryOn),
    back_off: routeRoutesRouteDestinationRetryPolicyBackOffToTerraform(struct!.backOff),
  }
}


export function routeRoutesRouteDestinationRetryPolicyToHclTerraform(struct?: RouteRoutesRouteDestinationRetryPolicyOutputReference | RouteRoutesRouteDestinationRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    num_retries: {
      value: cdktf.numberToHclTerraform(struct!.numRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_try_timeout: {
      value: cdktf.numberToHclTerraform(struct!.perTryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retriable_status_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.retriableStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    retry_condition: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.retryCondition),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_on: {
      value: cdktf.stringToHclTerraform(struct!.retryOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    back_off: {
      value: routeRoutesRouteDestinationRetryPolicyBackOffToHclTerraform(struct!.backOff),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationRetryPolicyBackOffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRetries = this._numRetries;
    }
    if (this._perTryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.perTryTimeout = this._perTryTimeout;
    }
    if (this._retriableStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriableStatusCodes = this._retriableStatusCodes;
    }
    if (this._retryCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCondition = this._retryCondition;
    }
    if (this._retryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryOn = this._retryOn;
    }
    if (this._backOff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backOff = this._backOff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numRetries = undefined;
      this._perTryTimeout = undefined;
      this._retriableStatusCodes = undefined;
      this._retryCondition = undefined;
      this._retryOn = undefined;
      this._backOff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numRetries = value.numRetries;
      this._perTryTimeout = value.perTryTimeout;
      this._retriableStatusCodes = value.retriableStatusCodes;
      this._retryCondition = value.retryCondition;
      this._retryOn = value.retryOn;
      this._backOff.internalValue = value.backOff;
    }
  }

  // num_retries - computed: false, optional: true, required: false
  private _numRetries?: number; 
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }
  public set numRetries(value: number) {
    this._numRetries = value;
  }
  public resetNumRetries() {
    this._numRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRetriesInput() {
    return this._numRetries;
  }

  // per_try_timeout - computed: false, optional: true, required: false
  private _perTryTimeout?: number; 
  public get perTryTimeout() {
    return this.getNumberAttribute('per_try_timeout');
  }
  public set perTryTimeout(value: number) {
    this._perTryTimeout = value;
  }
  public resetPerTryTimeout() {
    this._perTryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perTryTimeoutInput() {
    return this._perTryTimeout;
  }

  // retriable_status_codes - computed: false, optional: true, required: false
  private _retriableStatusCodes?: number[]; 
  public get retriableStatusCodes() {
    return this.getNumberListAttribute('retriable_status_codes');
  }
  public set retriableStatusCodes(value: number[]) {
    this._retriableStatusCodes = value;
  }
  public resetRetriableStatusCodes() {
    this._retriableStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableStatusCodesInput() {
    return this._retriableStatusCodes;
  }

  // retry_condition - computed: false, optional: false, required: true
  private _retryCondition?: string[]; 
  public get retryCondition() {
    return this.getListAttribute('retry_condition');
  }
  public set retryCondition(value: string[]) {
    this._retryCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConditionInput() {
    return this._retryCondition;
  }

  // retry_on - computed: false, optional: true, required: false
  private _retryOn?: string; 
  public get retryOn() {
    return this.getStringAttribute('retry_on');
  }
  public set retryOn(value: string) {
    this._retryOn = value;
  }
  public resetRetryOn() {
    this._retryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnInput() {
    return this._retryOn;
  }

  // back_off - computed: false, optional: true, required: false
  private _backOff = new RouteRoutesRouteDestinationRetryPolicyBackOffOutputReference(this, "back_off");
  public get backOff() {
    return this._backOff;
  }
  public putBackOff(value: RouteRoutesRouteDestinationRetryPolicyBackOff) {
    this._backOff.internalValue = value;
  }
  public resetBackOff() {
    this._backOff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backOffInput() {
    return this._backOff.internalValue;
  }
}
export interface RouteRoutesRouteDestinationSpdyConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#use_spdy Route#use_spdy}
  */
  readonly useSpdy?: boolean | cdktf.IResolvable;
}

export function routeRoutesRouteDestinationSpdyConfigToTerraform(struct?: RouteRoutesRouteDestinationSpdyConfigOutputReference | RouteRoutesRouteDestinationSpdyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_spdy: cdktf.booleanToTerraform(struct!.useSpdy),
  }
}


export function routeRoutesRouteDestinationSpdyConfigToHclTerraform(struct?: RouteRoutesRouteDestinationSpdyConfigOutputReference | RouteRoutesRouteDestinationSpdyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_spdy: {
      value: cdktf.booleanToHclTerraform(struct!.useSpdy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationSpdyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationSpdyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useSpdy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSpdy = this._useSpdy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationSpdyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useSpdy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useSpdy = value.useSpdy;
    }
  }

  // use_spdy - computed: false, optional: true, required: false
  private _useSpdy?: boolean | cdktf.IResolvable; 
  public get useSpdy() {
    return this.getBooleanAttribute('use_spdy');
  }
  public set useSpdy(value: boolean | cdktf.IResolvable) {
    this._useSpdy = value;
  }
  public resetUseSpdy() {
    this._useSpdy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSpdyInput() {
    return this._useSpdy;
  }
}
export interface RouteRoutesRouteDestinationWebSocketConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#use_websocket Route#use_websocket}
  */
  readonly useWebsocket?: boolean | cdktf.IResolvable;
}

export function routeRoutesRouteDestinationWebSocketConfigToTerraform(struct?: RouteRoutesRouteDestinationWebSocketConfigOutputReference | RouteRoutesRouteDestinationWebSocketConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_websocket: cdktf.booleanToTerraform(struct!.useWebsocket),
  }
}


export function routeRoutesRouteDestinationWebSocketConfigToHclTerraform(struct?: RouteRoutesRouteDestinationWebSocketConfigOutputReference | RouteRoutesRouteDestinationWebSocketConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_websocket: {
      value: cdktf.booleanToHclTerraform(struct!.useWebsocket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationWebSocketConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestinationWebSocketConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useWebsocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWebsocket = this._useWebsocket;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestinationWebSocketConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useWebsocket = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useWebsocket = value.useWebsocket;
    }
  }

  // use_websocket - computed: false, optional: true, required: false
  private _useWebsocket?: boolean | cdktf.IResolvable; 
  public get useWebsocket() {
    return this.getBooleanAttribute('use_websocket');
  }
  public set useWebsocket(value: boolean | cdktf.IResolvable) {
    this._useWebsocket = value;
  }
  public resetUseWebsocket() {
    this._useWebsocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWebsocketInput() {
    return this._useWebsocket;
  }
}
export interface RouteRoutesRouteDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#auto_host_rewrite Route#auto_host_rewrite}
  */
  readonly autoHostRewrite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#do_not_retract_cluster Route#do_not_retract_cluster}
  */
  readonly doNotRetractCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#endpoint_subsets Route#endpoint_subsets}
  */
  readonly endpointSubsets?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#host_rewrite Route#host_rewrite}
  */
  readonly hostRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#prefix_rewrite Route#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#priority Route#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#retract_cluster Route#retract_cluster}
  */
  readonly retractCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#timeout Route#timeout}
  */
  readonly timeout?: number;
  /**
  * buffer_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#buffer_policy Route#buffer_policy}
  */
  readonly bufferPolicy?: RouteRoutesRouteDestinationBufferPolicy;
  /**
  * cors_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#cors_policy Route#cors_policy}
  */
  readonly corsPolicy?: RouteRoutesRouteDestinationCorsPolicy;
  /**
  * csrf_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#csrf_policy Route#csrf_policy}
  */
  readonly csrfPolicy?: RouteRoutesRouteDestinationCsrfPolicy;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#destinations Route#destinations}
  */
  readonly destinations: RouteRoutesRouteDestinationDestinations[] | cdktf.IResolvable;
  /**
  * hash_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#hash_policy Route#hash_policy}
  */
  readonly hashPolicy?: RouteRoutesRouteDestinationHashPolicy[] | cdktf.IResolvable;
  /**
  * mirror_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#mirror_policy Route#mirror_policy}
  */
  readonly mirrorPolicy?: RouteRoutesRouteDestinationMirrorPolicy;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#query_params Route#query_params}
  */
  readonly queryParams?: RouteRoutesRouteDestinationQueryParams;
  /**
  * regex_rewrite block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#regex_rewrite Route#regex_rewrite}
  */
  readonly regexRewrite?: RouteRoutesRouteDestinationRegexRewrite;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#retry_policy Route#retry_policy}
  */
  readonly retryPolicy?: RouteRoutesRouteDestinationRetryPolicy;
  /**
  * spdy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#spdy_config Route#spdy_config}
  */
  readonly spdyConfig?: RouteRoutesRouteDestinationSpdyConfig;
  /**
  * web_socket_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#web_socket_config Route#web_socket_config}
  */
  readonly webSocketConfig?: RouteRoutesRouteDestinationWebSocketConfig;
}

export function routeRoutesRouteDestinationToTerraform(struct?: RouteRoutesRouteDestinationOutputReference | RouteRoutesRouteDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_host_rewrite: cdktf.booleanToTerraform(struct!.autoHostRewrite),
    do_not_retract_cluster: cdktf.booleanToTerraform(struct!.doNotRetractCluster),
    endpoint_subsets: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.endpointSubsets),
    host_rewrite: cdktf.stringToTerraform(struct!.hostRewrite),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    priority: cdktf.stringToTerraform(struct!.priority),
    retract_cluster: cdktf.booleanToTerraform(struct!.retractCluster),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    buffer_policy: routeRoutesRouteDestinationBufferPolicyToTerraform(struct!.bufferPolicy),
    cors_policy: routeRoutesRouteDestinationCorsPolicyToTerraform(struct!.corsPolicy),
    csrf_policy: routeRoutesRouteDestinationCsrfPolicyToTerraform(struct!.csrfPolicy),
    destinations: cdktf.listMapper(routeRoutesRouteDestinationDestinationsToTerraform, true)(struct!.destinations),
    hash_policy: cdktf.listMapper(routeRoutesRouteDestinationHashPolicyToTerraform, true)(struct!.hashPolicy),
    mirror_policy: routeRoutesRouteDestinationMirrorPolicyToTerraform(struct!.mirrorPolicy),
    query_params: routeRoutesRouteDestinationQueryParamsToTerraform(struct!.queryParams),
    regex_rewrite: routeRoutesRouteDestinationRegexRewriteToTerraform(struct!.regexRewrite),
    retry_policy: routeRoutesRouteDestinationRetryPolicyToTerraform(struct!.retryPolicy),
    spdy_config: routeRoutesRouteDestinationSpdyConfigToTerraform(struct!.spdyConfig),
    web_socket_config: routeRoutesRouteDestinationWebSocketConfigToTerraform(struct!.webSocketConfig),
  }
}


export function routeRoutesRouteDestinationToHclTerraform(struct?: RouteRoutesRouteDestinationOutputReference | RouteRoutesRouteDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_host_rewrite: {
      value: cdktf.booleanToHclTerraform(struct!.autoHostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    do_not_retract_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.doNotRetractCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_subsets: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.endpointSubsets),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.hostRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.prefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retract_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.retractCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_policy: {
      value: routeRoutesRouteDestinationBufferPolicyToHclTerraform(struct!.bufferPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationBufferPolicyList",
    },
    cors_policy: {
      value: routeRoutesRouteDestinationCorsPolicyToHclTerraform(struct!.corsPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationCorsPolicyList",
    },
    csrf_policy: {
      value: routeRoutesRouteDestinationCsrfPolicyToHclTerraform(struct!.csrfPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationCsrfPolicyList",
    },
    destinations: {
      value: cdktf.listMapperHcl(routeRoutesRouteDestinationDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationDestinationsList",
    },
    hash_policy: {
      value: cdktf.listMapperHcl(routeRoutesRouteDestinationHashPolicyToHclTerraform, true)(struct!.hashPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationHashPolicyList",
    },
    mirror_policy: {
      value: routeRoutesRouteDestinationMirrorPolicyToHclTerraform(struct!.mirrorPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationMirrorPolicyList",
    },
    query_params: {
      value: routeRoutesRouteDestinationQueryParamsToHclTerraform(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationQueryParamsList",
    },
    regex_rewrite: {
      value: routeRoutesRouteDestinationRegexRewriteToHclTerraform(struct!.regexRewrite),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationRegexRewriteList",
    },
    retry_policy: {
      value: routeRoutesRouteDestinationRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationRetryPolicyList",
    },
    spdy_config: {
      value: routeRoutesRouteDestinationSpdyConfigToHclTerraform(struct!.spdyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationSpdyConfigList",
    },
    web_socket_config: {
      value: routeRoutesRouteDestinationWebSocketConfigToHclTerraform(struct!.webSocketConfig),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationWebSocketConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoHostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoHostRewrite = this._autoHostRewrite;
    }
    if (this._doNotRetractCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotRetractCluster = this._doNotRetractCluster;
    }
    if (this._endpointSubsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointSubsets = this._endpointSubsets;
    }
    if (this._hostRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRewrite = this._hostRewrite;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retractCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.retractCluster = this._retractCluster;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._bufferPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferPolicy = this._bufferPolicy?.internalValue;
    }
    if (this._corsPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.corsPolicy = this._corsPolicy?.internalValue;
    }
    if (this._csrfPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csrfPolicy = this._csrfPolicy?.internalValue;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._hashPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashPolicy = this._hashPolicy?.internalValue;
    }
    if (this._mirrorPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrorPolicy = this._mirrorPolicy?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._regexRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexRewrite = this._regexRewrite?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._spdyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spdyConfig = this._spdyConfig?.internalValue;
    }
    if (this._webSocketConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webSocketConfig = this._webSocketConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoHostRewrite = undefined;
      this._doNotRetractCluster = undefined;
      this._endpointSubsets = undefined;
      this._hostRewrite = undefined;
      this._prefixRewrite = undefined;
      this._priority = undefined;
      this._retractCluster = undefined;
      this._timeout = undefined;
      this._bufferPolicy.internalValue = undefined;
      this._corsPolicy.internalValue = undefined;
      this._csrfPolicy.internalValue = undefined;
      this._destinations.internalValue = undefined;
      this._hashPolicy.internalValue = undefined;
      this._mirrorPolicy.internalValue = undefined;
      this._queryParams.internalValue = undefined;
      this._regexRewrite.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._spdyConfig.internalValue = undefined;
      this._webSocketConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoHostRewrite = value.autoHostRewrite;
      this._doNotRetractCluster = value.doNotRetractCluster;
      this._endpointSubsets = value.endpointSubsets;
      this._hostRewrite = value.hostRewrite;
      this._prefixRewrite = value.prefixRewrite;
      this._priority = value.priority;
      this._retractCluster = value.retractCluster;
      this._timeout = value.timeout;
      this._bufferPolicy.internalValue = value.bufferPolicy;
      this._corsPolicy.internalValue = value.corsPolicy;
      this._csrfPolicy.internalValue = value.csrfPolicy;
      this._destinations.internalValue = value.destinations;
      this._hashPolicy.internalValue = value.hashPolicy;
      this._mirrorPolicy.internalValue = value.mirrorPolicy;
      this._queryParams.internalValue = value.queryParams;
      this._regexRewrite.internalValue = value.regexRewrite;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._spdyConfig.internalValue = value.spdyConfig;
      this._webSocketConfig.internalValue = value.webSocketConfig;
    }
  }

  // auto_host_rewrite - computed: false, optional: true, required: false
  private _autoHostRewrite?: boolean | cdktf.IResolvable; 
  public get autoHostRewrite() {
    return this.getBooleanAttribute('auto_host_rewrite');
  }
  public set autoHostRewrite(value: boolean | cdktf.IResolvable) {
    this._autoHostRewrite = value;
  }
  public resetAutoHostRewrite() {
    this._autoHostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoHostRewriteInput() {
    return this._autoHostRewrite;
  }

  // do_not_retract_cluster - computed: false, optional: true, required: false
  private _doNotRetractCluster?: boolean | cdktf.IResolvable; 
  public get doNotRetractCluster() {
    return this.getBooleanAttribute('do_not_retract_cluster');
  }
  public set doNotRetractCluster(value: boolean | cdktf.IResolvable) {
    this._doNotRetractCluster = value;
  }
  public resetDoNotRetractCluster() {
    this._doNotRetractCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotRetractClusterInput() {
    return this._doNotRetractCluster;
  }

  // endpoint_subsets - computed: false, optional: true, required: false
  private _endpointSubsets?: { [key: string]: string }; 
  public get endpointSubsets() {
    return this.getStringMapAttribute('endpoint_subsets');
  }
  public set endpointSubsets(value: { [key: string]: string }) {
    this._endpointSubsets = value;
  }
  public resetEndpointSubsets() {
    this._endpointSubsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSubsetsInput() {
    return this._endpointSubsets;
  }

  // host_rewrite - computed: false, optional: true, required: false
  private _hostRewrite?: string; 
  public get hostRewrite() {
    return this.getStringAttribute('host_rewrite');
  }
  public set hostRewrite(value: string) {
    this._hostRewrite = value;
  }
  public resetHostRewrite() {
    this._hostRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRewriteInput() {
    return this._hostRewrite;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retract_cluster - computed: false, optional: true, required: false
  private _retractCluster?: boolean | cdktf.IResolvable; 
  public get retractCluster() {
    return this.getBooleanAttribute('retract_cluster');
  }
  public set retractCluster(value: boolean | cdktf.IResolvable) {
    this._retractCluster = value;
  }
  public resetRetractCluster() {
    this._retractCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retractClusterInput() {
    return this._retractCluster;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // buffer_policy - computed: false, optional: true, required: false
  private _bufferPolicy = new RouteRoutesRouteDestinationBufferPolicyOutputReference(this, "buffer_policy");
  public get bufferPolicy() {
    return this._bufferPolicy;
  }
  public putBufferPolicy(value: RouteRoutesRouteDestinationBufferPolicy) {
    this._bufferPolicy.internalValue = value;
  }
  public resetBufferPolicy() {
    this._bufferPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPolicyInput() {
    return this._bufferPolicy.internalValue;
  }

  // cors_policy - computed: false, optional: true, required: false
  private _corsPolicy = new RouteRoutesRouteDestinationCorsPolicyOutputReference(this, "cors_policy");
  public get corsPolicy() {
    return this._corsPolicy;
  }
  public putCorsPolicy(value: RouteRoutesRouteDestinationCorsPolicy) {
    this._corsPolicy.internalValue = value;
  }
  public resetCorsPolicy() {
    this._corsPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsPolicyInput() {
    return this._corsPolicy.internalValue;
  }

  // csrf_policy - computed: false, optional: true, required: false
  private _csrfPolicy = new RouteRoutesRouteDestinationCsrfPolicyOutputReference(this, "csrf_policy");
  public get csrfPolicy() {
    return this._csrfPolicy;
  }
  public putCsrfPolicy(value: RouteRoutesRouteDestinationCsrfPolicy) {
    this._csrfPolicy.internalValue = value;
  }
  public resetCsrfPolicy() {
    this._csrfPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csrfPolicyInput() {
    return this._csrfPolicy.internalValue;
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new RouteRoutesRouteDestinationDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: RouteRoutesRouteDestinationDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // hash_policy - computed: false, optional: true, required: false
  private _hashPolicy = new RouteRoutesRouteDestinationHashPolicyList(this, "hash_policy", false);
  public get hashPolicy() {
    return this._hashPolicy;
  }
  public putHashPolicy(value: RouteRoutesRouteDestinationHashPolicy[] | cdktf.IResolvable) {
    this._hashPolicy.internalValue = value;
  }
  public resetHashPolicy() {
    this._hashPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashPolicyInput() {
    return this._hashPolicy.internalValue;
  }

  // mirror_policy - computed: false, optional: true, required: false
  private _mirrorPolicy = new RouteRoutesRouteDestinationMirrorPolicyOutputReference(this, "mirror_policy");
  public get mirrorPolicy() {
    return this._mirrorPolicy;
  }
  public putMirrorPolicy(value: RouteRoutesRouteDestinationMirrorPolicy) {
    this._mirrorPolicy.internalValue = value;
  }
  public resetMirrorPolicy() {
    this._mirrorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorPolicyInput() {
    return this._mirrorPolicy.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new RouteRoutesRouteDestinationQueryParamsOutputReference(this, "query_params");
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: RouteRoutesRouteDestinationQueryParams) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // regex_rewrite - computed: false, optional: true, required: false
  private _regexRewrite = new RouteRoutesRouteDestinationRegexRewriteOutputReference(this, "regex_rewrite");
  public get regexRewrite() {
    return this._regexRewrite;
  }
  public putRegexRewrite(value: RouteRoutesRouteDestinationRegexRewrite) {
    this._regexRewrite.internalValue = value;
  }
  public resetRegexRewrite() {
    this._regexRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRewriteInput() {
    return this._regexRewrite.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new RouteRoutesRouteDestinationRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: RouteRoutesRouteDestinationRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // spdy_config - computed: false, optional: true, required: false
  private _spdyConfig = new RouteRoutesRouteDestinationSpdyConfigOutputReference(this, "spdy_config");
  public get spdyConfig() {
    return this._spdyConfig;
  }
  public putSpdyConfig(value: RouteRoutesRouteDestinationSpdyConfig) {
    this._spdyConfig.internalValue = value;
  }
  public resetSpdyConfig() {
    this._spdyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spdyConfigInput() {
    return this._spdyConfig.internalValue;
  }

  // web_socket_config - computed: false, optional: true, required: false
  private _webSocketConfig = new RouteRoutesRouteDestinationWebSocketConfigOutputReference(this, "web_socket_config");
  public get webSocketConfig() {
    return this._webSocketConfig;
  }
  public putWebSocketConfig(value: RouteRoutesRouteDestinationWebSocketConfig) {
    this._webSocketConfig.internalValue = value;
  }
  public resetWebSocketConfig() {
    this._webSocketConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketConfigInput() {
    return this._webSocketConfig.internalValue;
  }
}
export interface RouteRoutesRouteDirectResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_body Route#response_body}
  */
  readonly responseBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_body_encoded Route#response_body_encoded}
  */
  readonly responseBodyEncoded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_code Route#response_code}
  */
  readonly responseCode?: number;
}

export function routeRoutesRouteDirectResponseToTerraform(struct?: RouteRoutesRouteDirectResponseOutputReference | RouteRoutesRouteDirectResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    response_body: cdktf.stringToTerraform(struct!.responseBody),
    response_body_encoded: cdktf.stringToTerraform(struct!.responseBodyEncoded),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
  }
}


export function routeRoutesRouteDirectResponseToHclTerraform(struct?: RouteRoutesRouteDirectResponseOutputReference | RouteRoutesRouteDirectResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    response_body: {
      value: cdktf.stringToHclTerraform(struct!.responseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_encoded: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteDirectResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteDirectResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBody = this._responseBody;
    }
    if (this._responseBodyEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyEncoded = this._responseBodyEncoded;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteDirectResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._responseBody = undefined;
      this._responseBodyEncoded = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._responseBody = value.responseBody;
      this._responseBodyEncoded = value.responseBodyEncoded;
      this._responseCode = value.responseCode;
    }
  }

  // response_body - computed: false, optional: true, required: false
  private _responseBody?: string; 
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }
  public set responseBody(value: string) {
    this._responseBody = value;
  }
  public resetResponseBody() {
    this._responseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyInput() {
    return this._responseBody;
  }

  // response_body_encoded - computed: false, optional: true, required: false
  private _responseBodyEncoded?: string; 
  public get responseBodyEncoded() {
    return this.getStringAttribute('response_body_encoded');
  }
  public set responseBodyEncoded(value: string) {
    this._responseBodyEncoded = value;
  }
  public resetResponseBodyEncoded() {
    this._responseBodyEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyEncodedInput() {
    return this._responseBodyEncoded;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface RouteRoutesRouteRedirectStripQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#query_params Route#query_params}
  */
  readonly queryParams?: string[];
}

export function routeRoutesRouteRedirectStripQueryParamsToTerraform(struct?: RouteRoutesRouteRedirectStripQueryParamsOutputReference | RouteRoutesRouteRedirectStripQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_params: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryParams),
  }
}


export function routeRoutesRouteRedirectStripQueryParamsToHclTerraform(struct?: RouteRoutesRouteRedirectStripQueryParamsOutputReference | RouteRoutesRouteRedirectStripQueryParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_params: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.queryParams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteRedirectStripQueryParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteRedirectStripQueryParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteRedirectStripQueryParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryParams = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryParams = value.queryParams;
    }
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams?: string[]; 
  public get queryParams() {
    return this.getListAttribute('query_params');
  }
  public set queryParams(value: string[]) {
    this._queryParams = value;
  }
  public resetQueryParams() {
    this._queryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams;
  }
}
export interface RouteRoutesRouteRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#all_params Route#all_params}
  */
  readonly allParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#host_redirect Route#host_redirect}
  */
  readonly hostRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#path_redirect Route#path_redirect}
  */
  readonly pathRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#port_redirect Route#port_redirect}
  */
  readonly portRedirect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#prefix_rewrite Route#prefix_rewrite}
  */
  readonly prefixRewrite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#proto_redirect Route#proto_redirect}
  */
  readonly protoRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#remove_all_params Route#remove_all_params}
  */
  readonly removeAllParams?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#replace_params Route#replace_params}
  */
  readonly replaceParams?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_code Route#response_code}
  */
  readonly responseCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#retain_all_params Route#retain_all_params}
  */
  readonly retainAllParams?: boolean | cdktf.IResolvable;
  /**
  * strip_query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#strip_query_params Route#strip_query_params}
  */
  readonly stripQueryParams?: RouteRoutesRouteRedirectStripQueryParams;
}

export function routeRoutesRouteRedirectToTerraform(struct?: RouteRoutesRouteRedirectOutputReference | RouteRoutesRouteRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_params: cdktf.booleanToTerraform(struct!.allParams),
    host_redirect: cdktf.stringToTerraform(struct!.hostRedirect),
    path_redirect: cdktf.stringToTerraform(struct!.pathRedirect),
    port_redirect: cdktf.numberToTerraform(struct!.portRedirect),
    prefix_rewrite: cdktf.stringToTerraform(struct!.prefixRewrite),
    proto_redirect: cdktf.stringToTerraform(struct!.protoRedirect),
    remove_all_params: cdktf.booleanToTerraform(struct!.removeAllParams),
    replace_params: cdktf.stringToTerraform(struct!.replaceParams),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
    retain_all_params: cdktf.booleanToTerraform(struct!.retainAllParams),
    strip_query_params: routeRoutesRouteRedirectStripQueryParamsToTerraform(struct!.stripQueryParams),
  }
}


export function routeRoutesRouteRedirectToHclTerraform(struct?: RouteRoutesRouteRedirectOutputReference | RouteRoutesRouteRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_params: {
      value: cdktf.booleanToHclTerraform(struct!.allParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_redirect: {
      value: cdktf.stringToHclTerraform(struct!.hostRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_redirect: {
      value: cdktf.stringToHclTerraform(struct!.pathRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_redirect: {
      value: cdktf.numberToHclTerraform(struct!.portRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_rewrite: {
      value: cdktf.stringToHclTerraform(struct!.prefixRewrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto_redirect: {
      value: cdktf.stringToHclTerraform(struct!.protoRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.removeAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replace_params: {
      value: cdktf.stringToHclTerraform(struct!.replaceParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_all_params: {
      value: cdktf.booleanToHclTerraform(struct!.retainAllParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    strip_query_params: {
      value: routeRoutesRouteRedirectStripQueryParamsToHclTerraform(struct!.stripQueryParams),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteRedirectStripQueryParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesRouteRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesRouteRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.allParams = this._allParams;
    }
    if (this._hostRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRedirect = this._hostRedirect;
    }
    if (this._pathRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRedirect = this._pathRedirect;
    }
    if (this._portRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRedirect = this._portRedirect;
    }
    if (this._prefixRewrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixRewrite = this._prefixRewrite;
    }
    if (this._protoRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoRedirect = this._protoRedirect;
    }
    if (this._removeAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAllParams = this._removeAllParams;
    }
    if (this._replaceParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceParams = this._replaceParams;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    if (this._retainAllParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAllParams = this._retainAllParams;
    }
    if (this._stripQueryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stripQueryParams = this._stripQueryParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesRouteRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allParams = undefined;
      this._hostRedirect = undefined;
      this._pathRedirect = undefined;
      this._portRedirect = undefined;
      this._prefixRewrite = undefined;
      this._protoRedirect = undefined;
      this._removeAllParams = undefined;
      this._replaceParams = undefined;
      this._responseCode = undefined;
      this._retainAllParams = undefined;
      this._stripQueryParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allParams = value.allParams;
      this._hostRedirect = value.hostRedirect;
      this._pathRedirect = value.pathRedirect;
      this._portRedirect = value.portRedirect;
      this._prefixRewrite = value.prefixRewrite;
      this._protoRedirect = value.protoRedirect;
      this._removeAllParams = value.removeAllParams;
      this._replaceParams = value.replaceParams;
      this._responseCode = value.responseCode;
      this._retainAllParams = value.retainAllParams;
      this._stripQueryParams.internalValue = value.stripQueryParams;
    }
  }

  // all_params - computed: false, optional: true, required: false
  private _allParams?: boolean | cdktf.IResolvable; 
  public get allParams() {
    return this.getBooleanAttribute('all_params');
  }
  public set allParams(value: boolean | cdktf.IResolvable) {
    this._allParams = value;
  }
  public resetAllParams() {
    this._allParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allParamsInput() {
    return this._allParams;
  }

  // host_redirect - computed: false, optional: true, required: false
  private _hostRedirect?: string; 
  public get hostRedirect() {
    return this.getStringAttribute('host_redirect');
  }
  public set hostRedirect(value: string) {
    this._hostRedirect = value;
  }
  public resetHostRedirect() {
    this._hostRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRedirectInput() {
    return this._hostRedirect;
  }

  // path_redirect - computed: false, optional: true, required: false
  private _pathRedirect?: string; 
  public get pathRedirect() {
    return this.getStringAttribute('path_redirect');
  }
  public set pathRedirect(value: string) {
    this._pathRedirect = value;
  }
  public resetPathRedirect() {
    this._pathRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRedirectInput() {
    return this._pathRedirect;
  }

  // port_redirect - computed: false, optional: true, required: false
  private _portRedirect?: number; 
  public get portRedirect() {
    return this.getNumberAttribute('port_redirect');
  }
  public set portRedirect(value: number) {
    this._portRedirect = value;
  }
  public resetPortRedirect() {
    this._portRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRedirectInput() {
    return this._portRedirect;
  }

  // prefix_rewrite - computed: false, optional: true, required: false
  private _prefixRewrite?: string; 
  public get prefixRewrite() {
    return this.getStringAttribute('prefix_rewrite');
  }
  public set prefixRewrite(value: string) {
    this._prefixRewrite = value;
  }
  public resetPrefixRewrite() {
    this._prefixRewrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixRewriteInput() {
    return this._prefixRewrite;
  }

  // proto_redirect - computed: false, optional: true, required: false
  private _protoRedirect?: string; 
  public get protoRedirect() {
    return this.getStringAttribute('proto_redirect');
  }
  public set protoRedirect(value: string) {
    this._protoRedirect = value;
  }
  public resetProtoRedirect() {
    this._protoRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoRedirectInput() {
    return this._protoRedirect;
  }

  // remove_all_params - computed: false, optional: true, required: false
  private _removeAllParams?: boolean | cdktf.IResolvable; 
  public get removeAllParams() {
    return this.getBooleanAttribute('remove_all_params');
  }
  public set removeAllParams(value: boolean | cdktf.IResolvable) {
    this._removeAllParams = value;
  }
  public resetRemoveAllParams() {
    this._removeAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAllParamsInput() {
    return this._removeAllParams;
  }

  // replace_params - computed: false, optional: true, required: false
  private _replaceParams?: string; 
  public get replaceParams() {
    return this.getStringAttribute('replace_params');
  }
  public set replaceParams(value: string) {
    this._replaceParams = value;
  }
  public resetReplaceParams() {
    this._replaceParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceParamsInput() {
    return this._replaceParams;
  }

  // response_code - computed: false, optional: true, required: false
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // retain_all_params - computed: false, optional: true, required: false
  private _retainAllParams?: boolean | cdktf.IResolvable; 
  public get retainAllParams() {
    return this.getBooleanAttribute('retain_all_params');
  }
  public set retainAllParams(value: boolean | cdktf.IResolvable) {
    this._retainAllParams = value;
  }
  public resetRetainAllParams() {
    this._retainAllParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAllParamsInput() {
    return this._retainAllParams;
  }

  // strip_query_params - computed: false, optional: true, required: false
  private _stripQueryParams = new RouteRoutesRouteRedirectStripQueryParamsOutputReference(this, "strip_query_params");
  public get stripQueryParams() {
    return this._stripQueryParams;
  }
  public putStripQueryParams(value: RouteRoutesRouteRedirectStripQueryParams) {
    this._stripQueryParams.internalValue = value;
  }
  public resetStripQueryParams() {
    this._stripQueryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripQueryParamsInput() {
    return this._stripQueryParams.internalValue;
  }
}
export interface RouteRoutesServicePolicyContextExtensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#context_extensions Route#context_extensions}
  */
  readonly contextExtensions?: { [key: string]: string };
}

export function routeRoutesServicePolicyContextExtensionsToTerraform(struct?: RouteRoutesServicePolicyContextExtensionsOutputReference | RouteRoutesServicePolicyContextExtensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context_extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.contextExtensions),
  }
}


export function routeRoutesServicePolicyContextExtensionsToHclTerraform(struct?: RouteRoutesServicePolicyContextExtensionsOutputReference | RouteRoutesServicePolicyContextExtensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context_extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.contextExtensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesServicePolicyContextExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesServicePolicyContextExtensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contextExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextExtensions = this._contextExtensions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesServicePolicyContextExtensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contextExtensions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contextExtensions = value.contextExtensions;
    }
  }

  // context_extensions - computed: false, optional: true, required: false
  private _contextExtensions?: { [key: string]: string }; 
  public get contextExtensions() {
    return this.getStringMapAttribute('context_extensions');
  }
  public set contextExtensions(value: { [key: string]: string }) {
    this._contextExtensions = value;
  }
  public resetContextExtensions() {
    this._contextExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextExtensionsInput() {
    return this._contextExtensions;
  }
}
export interface RouteRoutesServicePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disable Route#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * context_extensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#context_extensions Route#context_extensions}
  */
  readonly contextExtensions?: RouteRoutesServicePolicyContextExtensions;
}

export function routeRoutesServicePolicyToTerraform(struct?: RouteRoutesServicePolicyOutputReference | RouteRoutesServicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    context_extensions: routeRoutesServicePolicyContextExtensionsToTerraform(struct!.contextExtensions),
  }
}


export function routeRoutesServicePolicyToHclTerraform(struct?: RouteRoutesServicePolicyOutputReference | RouteRoutesServicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    context_extensions: {
      value: routeRoutesServicePolicyContextExtensionsToHclTerraform(struct!.contextExtensions),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesServicePolicyContextExtensionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesServicePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesServicePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._contextExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextExtensions = this._contextExtensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesServicePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._contextExtensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._contextExtensions.internalValue = value.contextExtensions;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // context_extensions - computed: false, optional: true, required: false
  private _contextExtensions = new RouteRoutesServicePolicyContextExtensionsOutputReference(this, "context_extensions");
  public get contextExtensions() {
    return this._contextExtensions;
  }
  public putContextExtensions(value: RouteRoutesServicePolicyContextExtensions) {
    this._contextExtensions.internalValue = value;
  }
  public resetContextExtensions() {
    this._contextExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextExtensionsInput() {
    return this._contextExtensions.internalValue;
  }
}
export interface RouteRoutesWafExclusionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#namespace Route#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#tenant Route#tenant}
  */
  readonly tenant?: string;
}

export function routeRoutesWafExclusionPolicyToTerraform(struct?: RouteRoutesWafExclusionPolicyOutputReference | RouteRoutesWafExclusionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function routeRoutesWafExclusionPolicyToHclTerraform(struct?: RouteRoutesWafExclusionPolicyOutputReference | RouteRoutesWafExclusionPolicy): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesWafExclusionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesWafExclusionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesWafExclusionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface RouteRoutesWafExclusionServicePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#namespace Route#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#tenant Route#tenant}
  */
  readonly tenant?: string;
}

export function routeRoutesWafExclusionServicePolicyToTerraform(struct?: RouteRoutesWafExclusionServicePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function routeRoutesWafExclusionServicePolicyToHclTerraform(struct?: RouteRoutesWafExclusionServicePolicy | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesWafExclusionServicePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesWafExclusionServicePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesWafExclusionServicePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class RouteRoutesWafExclusionServicePolicyList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesWafExclusionServicePolicy[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesWafExclusionServicePolicyOutputReference {
    return new RouteRoutesWafExclusionServicePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesWafTypeAppFirewallAppFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#name Route#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#namespace Route#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#tenant Route#tenant}
  */
  readonly tenant?: string;
}

export function routeRoutesWafTypeAppFirewallAppFirewallToTerraform(struct?: RouteRoutesWafTypeAppFirewallAppFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function routeRoutesWafTypeAppFirewallAppFirewallToHclTerraform(struct?: RouteRoutesWafTypeAppFirewallAppFirewall | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesWafTypeAppFirewallAppFirewallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutesWafTypeAppFirewallAppFirewall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesWafTypeAppFirewallAppFirewall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class RouteRoutesWafTypeAppFirewallAppFirewallList extends cdktf.ComplexList {
  public internalValue? : RouteRoutesWafTypeAppFirewallAppFirewall[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesWafTypeAppFirewallAppFirewallOutputReference {
    return new RouteRoutesWafTypeAppFirewallAppFirewallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteRoutesWafTypeAppFirewall {
  /**
  * app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#app_firewall Route#app_firewall}
  */
  readonly appFirewall: RouteRoutesWafTypeAppFirewallAppFirewall[] | cdktf.IResolvable;
}

export function routeRoutesWafTypeAppFirewallToTerraform(struct?: RouteRoutesWafTypeAppFirewallOutputReference | RouteRoutesWafTypeAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_firewall: cdktf.listMapper(routeRoutesWafTypeAppFirewallAppFirewallToTerraform, true)(struct!.appFirewall),
  }
}


export function routeRoutesWafTypeAppFirewallToHclTerraform(struct?: RouteRoutesWafTypeAppFirewallOutputReference | RouteRoutesWafTypeAppFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_firewall: {
      value: cdktf.listMapperHcl(routeRoutesWafTypeAppFirewallAppFirewallToHclTerraform, true)(struct!.appFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesWafTypeAppFirewallAppFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesWafTypeAppFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesWafTypeAppFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewall = this._appFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesWafTypeAppFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appFirewall.internalValue = value.appFirewall;
    }
  }

  // app_firewall - computed: false, optional: false, required: true
  private _appFirewall = new RouteRoutesWafTypeAppFirewallAppFirewallList(this, "app_firewall", false);
  public get appFirewall() {
    return this._appFirewall;
  }
  public putAppFirewall(value: RouteRoutesWafTypeAppFirewallAppFirewall[] | cdktf.IResolvable) {
    this._appFirewall.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallInput() {
    return this._appFirewall.internalValue;
  }
}
export interface RouteRoutesWafType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disable_waf Route#disable_waf}
  */
  readonly disableWaf?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#inherit_waf Route#inherit_waf}
  */
  readonly inheritWaf?: boolean | cdktf.IResolvable;
  /**
  * app_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#app_firewall Route#app_firewall}
  */
  readonly appFirewall?: RouteRoutesWafTypeAppFirewall;
}

export function routeRoutesWafTypeToTerraform(struct?: RouteRoutesWafTypeOutputReference | RouteRoutesWafType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_waf: cdktf.booleanToTerraform(struct!.disableWaf),
    inherit_waf: cdktf.booleanToTerraform(struct!.inheritWaf),
    app_firewall: routeRoutesWafTypeAppFirewallToTerraform(struct!.appFirewall),
  }
}


export function routeRoutesWafTypeToHclTerraform(struct?: RouteRoutesWafTypeOutputReference | RouteRoutesWafType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_waf: {
      value: cdktf.booleanToHclTerraform(struct!.disableWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherit_waf: {
      value: cdktf.booleanToHclTerraform(struct!.inheritWaf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall: {
      value: routeRoutesWafTypeAppFirewallToHclTerraform(struct!.appFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesWafTypeAppFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesWafTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RouteRoutesWafType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableWaf = this._disableWaf;
    }
    if (this._inheritWaf !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritWaf = this._inheritWaf;
    }
    if (this._appFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewall = this._appFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutesWafType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableWaf = undefined;
      this._inheritWaf = undefined;
      this._appFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableWaf = value.disableWaf;
      this._inheritWaf = value.inheritWaf;
      this._appFirewall.internalValue = value.appFirewall;
    }
  }

  // disable_waf - computed: false, optional: true, required: false
  private _disableWaf?: boolean | cdktf.IResolvable; 
  public get disableWaf() {
    return this.getBooleanAttribute('disable_waf');
  }
  public set disableWaf(value: boolean | cdktf.IResolvable) {
    this._disableWaf = value;
  }
  public resetDisableWaf() {
    this._disableWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWafInput() {
    return this._disableWaf;
  }

  // inherit_waf - computed: false, optional: true, required: false
  private _inheritWaf?: boolean | cdktf.IResolvable; 
  public get inheritWaf() {
    return this.getBooleanAttribute('inherit_waf');
  }
  public set inheritWaf(value: boolean | cdktf.IResolvable) {
    this._inheritWaf = value;
  }
  public resetInheritWaf() {
    this._inheritWaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritWafInput() {
    return this._inheritWaf;
  }

  // app_firewall - computed: false, optional: true, required: false
  private _appFirewall = new RouteRoutesWafTypeAppFirewallOutputReference(this, "app_firewall");
  public get appFirewall() {
    return this._appFirewall;
  }
  public putAppFirewall(value: RouteRoutesWafTypeAppFirewall) {
    this._appFirewall.internalValue = value;
  }
  public resetAppFirewall() {
    this._appFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallInput() {
    return this._appFirewall.internalValue;
  }
}
export interface RouteRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disable_custom_script Route#disable_custom_script}
  */
  readonly disableCustomScript?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#disable_location_add Route#disable_location_add}
  */
  readonly disableLocationAdd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#inherited_bot_defense_javascript_injection Route#inherited_bot_defense_javascript_injection}
  */
  readonly inheritedBotDefenseJavascriptInjection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#inherited_waf_exclusion Route#inherited_waf_exclusion}
  */
  readonly inheritedWafExclusion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#request_cookies_to_remove Route#request_cookies_to_remove}
  */
  readonly requestCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#request_headers_to_remove Route#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_cookies_to_remove Route#response_cookies_to_remove}
  */
  readonly responseCookiesToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_headers_to_remove Route#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#skip_lb_override Route#skip_lb_override}
  */
  readonly skipLbOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#uuid Route#uuid}
  */
  readonly uuid?: string;
  /**
  * bot_defense_javascript_injection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#bot_defense_javascript_injection Route#bot_defense_javascript_injection}
  */
  readonly botDefenseJavascriptInjection?: RouteRoutesBotDefenseJavascriptInjection;
  /**
  * bot_defense_javascript_injection_inline_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#bot_defense_javascript_injection_inline_mode Route#bot_defense_javascript_injection_inline_mode}
  */
  readonly botDefenseJavascriptInjectionInlineMode?: RouteRoutesBotDefenseJavascriptInjectionInlineMode;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#match Route#match}
  */
  readonly match?: RouteRoutesMatch[] | cdktf.IResolvable;
  /**
  * request_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#request_cookies_to_add Route#request_cookies_to_add}
  */
  readonly requestCookiesToAdd?: RouteRoutesRequestCookiesToAdd[] | cdktf.IResolvable;
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#request_headers_to_add Route#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: RouteRoutesRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_cookies_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_cookies_to_add Route#response_cookies_to_add}
  */
  readonly responseCookiesToAdd?: RouteRoutesResponseCookiesToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#response_headers_to_add Route#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: RouteRoutesResponseHeadersToAdd[] | cdktf.IResolvable;
  /**
  * route_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#route_destination Route#route_destination}
  */
  readonly routeDestination?: RouteRoutesRouteDestination;
  /**
  * route_direct_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#route_direct_response Route#route_direct_response}
  */
  readonly routeDirectResponse?: RouteRoutesRouteDirectResponse;
  /**
  * route_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#route_redirect Route#route_redirect}
  */
  readonly routeRedirect?: RouteRoutesRouteRedirect;
  /**
  * service_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#service_policy Route#service_policy}
  */
  readonly servicePolicy?: RouteRoutesServicePolicy;
  /**
  * waf_exclusion_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#waf_exclusion_policy Route#waf_exclusion_policy}
  */
  readonly wafExclusionPolicy: RouteRoutesWafExclusionPolicy;
  /**
  * waf_exclusion_service_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#waf_exclusion_service_policy Route#waf_exclusion_service_policy}
  */
  readonly wafExclusionServicePolicy?: RouteRoutesWafExclusionServicePolicy[] | cdktf.IResolvable;
  /**
  * waf_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#waf_type Route#waf_type}
  */
  readonly wafType?: RouteRoutesWafType;
}

export function routeRoutesToTerraform(struct?: RouteRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_custom_script: cdktf.booleanToTerraform(struct!.disableCustomScript),
    disable_location_add: cdktf.booleanToTerraform(struct!.disableLocationAdd),
    inherited_bot_defense_javascript_injection: cdktf.booleanToTerraform(struct!.inheritedBotDefenseJavascriptInjection),
    inherited_waf_exclusion: cdktf.booleanToTerraform(struct!.inheritedWafExclusion),
    request_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestCookiesToRemove),
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_cookies_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseCookiesToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    skip_lb_override: cdktf.booleanToTerraform(struct!.skipLbOverride),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    bot_defense_javascript_injection: routeRoutesBotDefenseJavascriptInjectionToTerraform(struct!.botDefenseJavascriptInjection),
    bot_defense_javascript_injection_inline_mode: routeRoutesBotDefenseJavascriptInjectionInlineModeToTerraform(struct!.botDefenseJavascriptInjectionInlineMode),
    match: cdktf.listMapper(routeRoutesMatchToTerraform, true)(struct!.match),
    request_cookies_to_add: cdktf.listMapper(routeRoutesRequestCookiesToAddToTerraform, true)(struct!.requestCookiesToAdd),
    request_headers_to_add: cdktf.listMapper(routeRoutesRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_cookies_to_add: cdktf.listMapper(routeRoutesResponseCookiesToAddToTerraform, true)(struct!.responseCookiesToAdd),
    response_headers_to_add: cdktf.listMapper(routeRoutesResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
    route_destination: routeRoutesRouteDestinationToTerraform(struct!.routeDestination),
    route_direct_response: routeRoutesRouteDirectResponseToTerraform(struct!.routeDirectResponse),
    route_redirect: routeRoutesRouteRedirectToTerraform(struct!.routeRedirect),
    service_policy: routeRoutesServicePolicyToTerraform(struct!.servicePolicy),
    waf_exclusion_policy: routeRoutesWafExclusionPolicyToTerraform(struct!.wafExclusionPolicy),
    waf_exclusion_service_policy: cdktf.listMapper(routeRoutesWafExclusionServicePolicyToTerraform, true)(struct!.wafExclusionServicePolicy),
    waf_type: routeRoutesWafTypeToTerraform(struct!.wafType),
  }
}


export function routeRoutesToHclTerraform(struct?: RouteRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_custom_script: {
      value: cdktf.booleanToHclTerraform(struct!.disableCustomScript),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_location_add: {
      value: cdktf.booleanToHclTerraform(struct!.disableLocationAdd),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited_bot_defense_javascript_injection: {
      value: cdktf.booleanToHclTerraform(struct!.inheritedBotDefenseJavascriptInjection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherited_waf_exclusion: {
      value: cdktf.booleanToHclTerraform(struct!.inheritedWafExclusion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_cookies_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestCookiesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_cookies_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseCookiesToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    skip_lb_override: {
      value: cdktf.booleanToHclTerraform(struct!.skipLbOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bot_defense_javascript_injection: {
      value: routeRoutesBotDefenseJavascriptInjectionToHclTerraform(struct!.botDefenseJavascriptInjection),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesBotDefenseJavascriptInjectionList",
    },
    bot_defense_javascript_injection_inline_mode: {
      value: routeRoutesBotDefenseJavascriptInjectionInlineModeToHclTerraform(struct!.botDefenseJavascriptInjectionInlineMode),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesBotDefenseJavascriptInjectionInlineModeList",
    },
    match: {
      value: cdktf.listMapperHcl(routeRoutesMatchToHclTerraform, true)(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesMatchList",
    },
    request_cookies_to_add: {
      value: cdktf.listMapperHcl(routeRoutesRequestCookiesToAddToHclTerraform, true)(struct!.requestCookiesToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestCookiesToAddList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(routeRoutesRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRequestHeadersToAddList",
    },
    response_cookies_to_add: {
      value: cdktf.listMapperHcl(routeRoutesResponseCookiesToAddToHclTerraform, true)(struct!.responseCookiesToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseCookiesToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(routeRoutesResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesResponseHeadersToAddList",
    },
    route_destination: {
      value: routeRoutesRouteDestinationToHclTerraform(struct!.routeDestination),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDestinationList",
    },
    route_direct_response: {
      value: routeRoutesRouteDirectResponseToHclTerraform(struct!.routeDirectResponse),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteDirectResponseList",
    },
    route_redirect: {
      value: routeRoutesRouteRedirectToHclTerraform(struct!.routeRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesRouteRedirectList",
    },
    service_policy: {
      value: routeRoutesServicePolicyToHclTerraform(struct!.servicePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesServicePolicyList",
    },
    waf_exclusion_policy: {
      value: routeRoutesWafExclusionPolicyToHclTerraform(struct!.wafExclusionPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesWafExclusionPolicyList",
    },
    waf_exclusion_service_policy: {
      value: cdktf.listMapperHcl(routeRoutesWafExclusionServicePolicyToHclTerraform, true)(struct!.wafExclusionServicePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesWafExclusionServicePolicyList",
    },
    waf_type: {
      value: routeRoutesWafTypeToHclTerraform(struct!.wafType),
      isBlock: true,
      type: "list",
      storageClassType: "RouteRoutesWafTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableCustomScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCustomScript = this._disableCustomScript;
    }
    if (this._disableLocationAdd !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableLocationAdd = this._disableLocationAdd;
    }
    if (this._inheritedBotDefenseJavascriptInjection !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedBotDefenseJavascriptInjection = this._inheritedBotDefenseJavascriptInjection;
    }
    if (this._inheritedWafExclusion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedWafExclusion = this._inheritedWafExclusion;
    }
    if (this._requestCookiesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookiesToRemove = this._requestCookiesToRemove;
    }
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseCookiesToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCookiesToRemove = this._responseCookiesToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._skipLbOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLbOverride = this._skipLbOverride;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._botDefenseJavascriptInjection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDefenseJavascriptInjection = this._botDefenseJavascriptInjection?.internalValue;
    }
    if (this._botDefenseJavascriptInjectionInlineMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botDefenseJavascriptInjectionInlineMode = this._botDefenseJavascriptInjectionInlineMode?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._requestCookiesToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCookiesToAdd = this._requestCookiesToAdd?.internalValue;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseCookiesToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCookiesToAdd = this._responseCookiesToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    if (this._routeDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDestination = this._routeDestination?.internalValue;
    }
    if (this._routeDirectResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeDirectResponse = this._routeDirectResponse?.internalValue;
    }
    if (this._routeRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRedirect = this._routeRedirect?.internalValue;
    }
    if (this._servicePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePolicy = this._servicePolicy?.internalValue;
    }
    if (this._wafExclusionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafExclusionPolicy = this._wafExclusionPolicy?.internalValue;
    }
    if (this._wafExclusionServicePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafExclusionServicePolicy = this._wafExclusionServicePolicy?.internalValue;
    }
    if (this._wafType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafType = this._wafType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableCustomScript = undefined;
      this._disableLocationAdd = undefined;
      this._inheritedBotDefenseJavascriptInjection = undefined;
      this._inheritedWafExclusion = undefined;
      this._requestCookiesToRemove = undefined;
      this._requestHeadersToRemove = undefined;
      this._responseCookiesToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._skipLbOverride = undefined;
      this._uuid = undefined;
      this._botDefenseJavascriptInjection.internalValue = undefined;
      this._botDefenseJavascriptInjectionInlineMode.internalValue = undefined;
      this._match.internalValue = undefined;
      this._requestCookiesToAdd.internalValue = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseCookiesToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
      this._routeDestination.internalValue = undefined;
      this._routeDirectResponse.internalValue = undefined;
      this._routeRedirect.internalValue = undefined;
      this._servicePolicy.internalValue = undefined;
      this._wafExclusionPolicy.internalValue = undefined;
      this._wafExclusionServicePolicy.internalValue = undefined;
      this._wafType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableCustomScript = value.disableCustomScript;
      this._disableLocationAdd = value.disableLocationAdd;
      this._inheritedBotDefenseJavascriptInjection = value.inheritedBotDefenseJavascriptInjection;
      this._inheritedWafExclusion = value.inheritedWafExclusion;
      this._requestCookiesToRemove = value.requestCookiesToRemove;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseCookiesToRemove = value.responseCookiesToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._skipLbOverride = value.skipLbOverride;
      this._uuid = value.uuid;
      this._botDefenseJavascriptInjection.internalValue = value.botDefenseJavascriptInjection;
      this._botDefenseJavascriptInjectionInlineMode.internalValue = value.botDefenseJavascriptInjectionInlineMode;
      this._match.internalValue = value.match;
      this._requestCookiesToAdd.internalValue = value.requestCookiesToAdd;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseCookiesToAdd.internalValue = value.responseCookiesToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
      this._routeDestination.internalValue = value.routeDestination;
      this._routeDirectResponse.internalValue = value.routeDirectResponse;
      this._routeRedirect.internalValue = value.routeRedirect;
      this._servicePolicy.internalValue = value.servicePolicy;
      this._wafExclusionPolicy.internalValue = value.wafExclusionPolicy;
      this._wafExclusionServicePolicy.internalValue = value.wafExclusionServicePolicy;
      this._wafType.internalValue = value.wafType;
    }
  }

  // disable_custom_script - computed: false, optional: true, required: false
  private _disableCustomScript?: boolean | cdktf.IResolvable; 
  public get disableCustomScript() {
    return this.getBooleanAttribute('disable_custom_script');
  }
  public set disableCustomScript(value: boolean | cdktf.IResolvable) {
    this._disableCustomScript = value;
  }
  public resetDisableCustomScript() {
    this._disableCustomScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCustomScriptInput() {
    return this._disableCustomScript;
  }

  // disable_location_add - computed: false, optional: true, required: false
  private _disableLocationAdd?: boolean | cdktf.IResolvable; 
  public get disableLocationAdd() {
    return this.getBooleanAttribute('disable_location_add');
  }
  public set disableLocationAdd(value: boolean | cdktf.IResolvable) {
    this._disableLocationAdd = value;
  }
  public resetDisableLocationAdd() {
    this._disableLocationAdd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLocationAddInput() {
    return this._disableLocationAdd;
  }

  // inherited_bot_defense_javascript_injection - computed: false, optional: true, required: false
  private _inheritedBotDefenseJavascriptInjection?: boolean | cdktf.IResolvable; 
  public get inheritedBotDefenseJavascriptInjection() {
    return this.getBooleanAttribute('inherited_bot_defense_javascript_injection');
  }
  public set inheritedBotDefenseJavascriptInjection(value: boolean | cdktf.IResolvable) {
    this._inheritedBotDefenseJavascriptInjection = value;
  }
  public resetInheritedBotDefenseJavascriptInjection() {
    this._inheritedBotDefenseJavascriptInjection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedBotDefenseJavascriptInjectionInput() {
    return this._inheritedBotDefenseJavascriptInjection;
  }

  // inherited_waf_exclusion - computed: false, optional: true, required: false
  private _inheritedWafExclusion?: boolean | cdktf.IResolvable; 
  public get inheritedWafExclusion() {
    return this.getBooleanAttribute('inherited_waf_exclusion');
  }
  public set inheritedWafExclusion(value: boolean | cdktf.IResolvable) {
    this._inheritedWafExclusion = value;
  }
  public resetInheritedWafExclusion() {
    this._inheritedWafExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedWafExclusionInput() {
    return this._inheritedWafExclusion;
  }

  // request_cookies_to_remove - computed: false, optional: true, required: false
  private _requestCookiesToRemove?: string[]; 
  public get requestCookiesToRemove() {
    return this.getListAttribute('request_cookies_to_remove');
  }
  public set requestCookiesToRemove(value: string[]) {
    this._requestCookiesToRemove = value;
  }
  public resetRequestCookiesToRemove() {
    this._requestCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToRemoveInput() {
    return this._requestCookiesToRemove;
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_cookies_to_remove - computed: false, optional: true, required: false
  private _responseCookiesToRemove?: string[]; 
  public get responseCookiesToRemove() {
    return this.getListAttribute('response_cookies_to_remove');
  }
  public set responseCookiesToRemove(value: string[]) {
    this._responseCookiesToRemove = value;
  }
  public resetResponseCookiesToRemove() {
    this._responseCookiesToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToRemoveInput() {
    return this._responseCookiesToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // skip_lb_override - computed: false, optional: true, required: false
  private _skipLbOverride?: boolean | cdktf.IResolvable; 
  public get skipLbOverride() {
    return this.getBooleanAttribute('skip_lb_override');
  }
  public set skipLbOverride(value: boolean | cdktf.IResolvable) {
    this._skipLbOverride = value;
  }
  public resetSkipLbOverride() {
    this._skipLbOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLbOverrideInput() {
    return this._skipLbOverride;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // bot_defense_javascript_injection - computed: false, optional: true, required: false
  private _botDefenseJavascriptInjection = new RouteRoutesBotDefenseJavascriptInjectionOutputReference(this, "bot_defense_javascript_injection");
  public get botDefenseJavascriptInjection() {
    return this._botDefenseJavascriptInjection;
  }
  public putBotDefenseJavascriptInjection(value: RouteRoutesBotDefenseJavascriptInjection) {
    this._botDefenseJavascriptInjection.internalValue = value;
  }
  public resetBotDefenseJavascriptInjection() {
    this._botDefenseJavascriptInjection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDefenseJavascriptInjectionInput() {
    return this._botDefenseJavascriptInjection.internalValue;
  }

  // bot_defense_javascript_injection_inline_mode - computed: false, optional: true, required: false
  private _botDefenseJavascriptInjectionInlineMode = new RouteRoutesBotDefenseJavascriptInjectionInlineModeOutputReference(this, "bot_defense_javascript_injection_inline_mode");
  public get botDefenseJavascriptInjectionInlineMode() {
    return this._botDefenseJavascriptInjectionInlineMode;
  }
  public putBotDefenseJavascriptInjectionInlineMode(value: RouteRoutesBotDefenseJavascriptInjectionInlineMode) {
    this._botDefenseJavascriptInjectionInlineMode.internalValue = value;
  }
  public resetBotDefenseJavascriptInjectionInlineMode() {
    this._botDefenseJavascriptInjectionInlineMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botDefenseJavascriptInjectionInlineModeInput() {
    return this._botDefenseJavascriptInjectionInlineMode.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new RouteRoutesMatchList(this, "match", false);
  public get match() {
    return this._match;
  }
  public putMatch(value: RouteRoutesMatch[] | cdktf.IResolvable) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // request_cookies_to_add - computed: false, optional: true, required: false
  private _requestCookiesToAdd = new RouteRoutesRequestCookiesToAddList(this, "request_cookies_to_add", false);
  public get requestCookiesToAdd() {
    return this._requestCookiesToAdd;
  }
  public putRequestCookiesToAdd(value: RouteRoutesRequestCookiesToAdd[] | cdktf.IResolvable) {
    this._requestCookiesToAdd.internalValue = value;
  }
  public resetRequestCookiesToAdd() {
    this._requestCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCookiesToAddInput() {
    return this._requestCookiesToAdd.internalValue;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new RouteRoutesRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: RouteRoutesRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_cookies_to_add - computed: false, optional: true, required: false
  private _responseCookiesToAdd = new RouteRoutesResponseCookiesToAddList(this, "response_cookies_to_add", false);
  public get responseCookiesToAdd() {
    return this._responseCookiesToAdd;
  }
  public putResponseCookiesToAdd(value: RouteRoutesResponseCookiesToAdd[] | cdktf.IResolvable) {
    this._responseCookiesToAdd.internalValue = value;
  }
  public resetResponseCookiesToAdd() {
    this._responseCookiesToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCookiesToAddInput() {
    return this._responseCookiesToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new RouteRoutesResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: RouteRoutesResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }

  // route_destination - computed: false, optional: true, required: false
  private _routeDestination = new RouteRoutesRouteDestinationOutputReference(this, "route_destination");
  public get routeDestination() {
    return this._routeDestination;
  }
  public putRouteDestination(value: RouteRoutesRouteDestination) {
    this._routeDestination.internalValue = value;
  }
  public resetRouteDestination() {
    this._routeDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDestinationInput() {
    return this._routeDestination.internalValue;
  }

  // route_direct_response - computed: false, optional: true, required: false
  private _routeDirectResponse = new RouteRoutesRouteDirectResponseOutputReference(this, "route_direct_response");
  public get routeDirectResponse() {
    return this._routeDirectResponse;
  }
  public putRouteDirectResponse(value: RouteRoutesRouteDirectResponse) {
    this._routeDirectResponse.internalValue = value;
  }
  public resetRouteDirectResponse() {
    this._routeDirectResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeDirectResponseInput() {
    return this._routeDirectResponse.internalValue;
  }

  // route_redirect - computed: false, optional: true, required: false
  private _routeRedirect = new RouteRoutesRouteRedirectOutputReference(this, "route_redirect");
  public get routeRedirect() {
    return this._routeRedirect;
  }
  public putRouteRedirect(value: RouteRoutesRouteRedirect) {
    this._routeRedirect.internalValue = value;
  }
  public resetRouteRedirect() {
    this._routeRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRedirectInput() {
    return this._routeRedirect.internalValue;
  }

  // service_policy - computed: false, optional: true, required: false
  private _servicePolicy = new RouteRoutesServicePolicyOutputReference(this, "service_policy");
  public get servicePolicy() {
    return this._servicePolicy;
  }
  public putServicePolicy(value: RouteRoutesServicePolicy) {
    this._servicePolicy.internalValue = value;
  }
  public resetServicePolicy() {
    this._servicePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePolicyInput() {
    return this._servicePolicy.internalValue;
  }

  // waf_exclusion_policy - computed: false, optional: false, required: true
  private _wafExclusionPolicy = new RouteRoutesWafExclusionPolicyOutputReference(this, "waf_exclusion_policy");
  public get wafExclusionPolicy() {
    return this._wafExclusionPolicy;
  }
  public putWafExclusionPolicy(value: RouteRoutesWafExclusionPolicy) {
    this._wafExclusionPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafExclusionPolicyInput() {
    return this._wafExclusionPolicy.internalValue;
  }

  // waf_exclusion_service_policy - computed: false, optional: true, required: false
  private _wafExclusionServicePolicy = new RouteRoutesWafExclusionServicePolicyList(this, "waf_exclusion_service_policy", false);
  public get wafExclusionServicePolicy() {
    return this._wafExclusionServicePolicy;
  }
  public putWafExclusionServicePolicy(value: RouteRoutesWafExclusionServicePolicy[] | cdktf.IResolvable) {
    this._wafExclusionServicePolicy.internalValue = value;
  }
  public resetWafExclusionServicePolicy() {
    this._wafExclusionServicePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafExclusionServicePolicyInput() {
    return this._wafExclusionServicePolicy.internalValue;
  }

  // waf_type - computed: false, optional: true, required: false
  private _wafType = new RouteRoutesWafTypeOutputReference(this, "waf_type");
  public get wafType() {
    return this._wafType;
  }
  public putWafType(value: RouteRoutesWafType) {
    this._wafType.internalValue = value;
  }
  public resetWafType() {
    this._wafType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafTypeInput() {
    return this._wafType.internalValue;
  }
}

export class RouteRoutesList extends cdktf.ComplexList {
  public internalValue? : RouteRoutes[] | cdktf.IResolvable

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
  public get(index: number): RouteRoutesOutputReference {
    return new RouteRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route volterra_route}
*/
export class Route extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route to import
  * @param importFromId The id of the existing Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/route volterra_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteConfig
  */
  public constructor(scope: Construct, id: string, config: RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_route',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._routes.internalValue = config.routes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // routes - computed: false, optional: false, required: true
  private _routes = new RouteRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: RouteRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      routes: cdktf.listMapper(routeRoutesToTerraform, true)(this._routes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      routes: {
        value: cdktf.listMapperHcl(routeRoutesToHclTerraform, true)(this._routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouteRoutesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
