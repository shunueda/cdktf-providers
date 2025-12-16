// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortalCustomizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#css PortalCustomization#css}
  */
  readonly css?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#layout PortalCustomization#layout}
  */
  readonly layout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#menu PortalCustomization#menu}
  */
  readonly menu?: PortalCustomizationMenu;
  /**
  * The Portal identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#portal_id PortalCustomization#portal_id}
  */
  readonly portalId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#robots PortalCustomization#robots}
  */
  readonly robots?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#spec_renderer PortalCustomization#spec_renderer}
  */
  readonly specRenderer?: PortalCustomizationSpecRenderer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#theme PortalCustomization#theme}
  */
  readonly theme?: PortalCustomizationTheme;
}
export interface PortalCustomizationMenuFooterBottom {
  /**
  * When clicked, open the link in a new window. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#external PortalCustomization#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * The absolute path of a page in a portal with a leading slash. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#path PortalCustomization#path}
  */
  readonly path?: string;
  /**
  * The link display text. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#title PortalCustomization#title}
  */
  readonly title?: string;
  /**
  * Whether a menu item is public or private. Private menu items are only accessible to authenticated users. Not Null; must be one of ["public", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#visibility PortalCustomization#visibility}
  */
  readonly visibility?: string;
}

export function portalCustomizationMenuFooterBottomToTerraform(struct?: PortalCustomizationMenuFooterBottom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.booleanToTerraform(struct!.external),
    path: cdktf.stringToTerraform(struct!.path),
    title: cdktf.stringToTerraform(struct!.title),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function portalCustomizationMenuFooterBottomToHclTerraform(struct?: PortalCustomizationMenuFooterBottom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.booleanToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomizationMenuFooterBottomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortalCustomizationMenuFooterBottom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationMenuFooterBottom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external = undefined;
      this._path = undefined;
      this._title = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external = value.external;
      this._path = value.path;
      this._title = value.title;
      this._visibility = value.visibility;
    }
  }

  // external - computed: true, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // path - computed: true, optional: true, required: false
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

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class PortalCustomizationMenuFooterBottomList extends cdktf.ComplexList {
  public internalValue? : PortalCustomizationMenuFooterBottom[] | cdktf.IResolvable

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
  public get(index: number): PortalCustomizationMenuFooterBottomOutputReference {
    return new PortalCustomizationMenuFooterBottomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortalCustomizationMenuFooterSectionsItems {
  /**
  * When clicked, open the link in a new window. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#external PortalCustomization#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * The absolute path of a page in a portal with a leading slash. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#path PortalCustomization#path}
  */
  readonly path?: string;
  /**
  * The link display text. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#title PortalCustomization#title}
  */
  readonly title?: string;
  /**
  * Whether a menu item is public or private. Private menu items are only accessible to authenticated users. Not Null; must be one of ["public", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#visibility PortalCustomization#visibility}
  */
  readonly visibility?: string;
}

export function portalCustomizationMenuFooterSectionsItemsToTerraform(struct?: PortalCustomizationMenuFooterSectionsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.booleanToTerraform(struct!.external),
    path: cdktf.stringToTerraform(struct!.path),
    title: cdktf.stringToTerraform(struct!.title),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function portalCustomizationMenuFooterSectionsItemsToHclTerraform(struct?: PortalCustomizationMenuFooterSectionsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.booleanToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomizationMenuFooterSectionsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortalCustomizationMenuFooterSectionsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationMenuFooterSectionsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external = undefined;
      this._path = undefined;
      this._title = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external = value.external;
      this._path = value.path;
      this._title = value.title;
      this._visibility = value.visibility;
    }
  }

  // external - computed: true, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // path - computed: true, optional: true, required: false
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

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class PortalCustomizationMenuFooterSectionsItemsList extends cdktf.ComplexList {
  public internalValue? : PortalCustomizationMenuFooterSectionsItems[] | cdktf.IResolvable

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
  public get(index: number): PortalCustomizationMenuFooterSectionsItemsOutputReference {
    return new PortalCustomizationMenuFooterSectionsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortalCustomizationMenuFooterSections {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#items PortalCustomization#items}
  */
  readonly items?: PortalCustomizationMenuFooterSectionsItems[] | cdktf.IResolvable;
  /**
  * The footer menu section title. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#title PortalCustomization#title}
  */
  readonly title?: string;
}

export function portalCustomizationMenuFooterSectionsToTerraform(struct?: PortalCustomizationMenuFooterSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(portalCustomizationMenuFooterSectionsItemsToTerraform, false)(struct!.items),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function portalCustomizationMenuFooterSectionsToHclTerraform(struct?: PortalCustomizationMenuFooterSections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(portalCustomizationMenuFooterSectionsItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "PortalCustomizationMenuFooterSectionsItemsList",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomizationMenuFooterSectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortalCustomizationMenuFooterSections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationMenuFooterSections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
      this._title = value.title;
    }
  }

  // items - computed: true, optional: true, required: false
  private _items = new PortalCustomizationMenuFooterSectionsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: PortalCustomizationMenuFooterSectionsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

export class PortalCustomizationMenuFooterSectionsList extends cdktf.ComplexList {
  public internalValue? : PortalCustomizationMenuFooterSections[] | cdktf.IResolvable

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
  public get(index: number): PortalCustomizationMenuFooterSectionsOutputReference {
    return new PortalCustomizationMenuFooterSectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortalCustomizationMenuMain {
  /**
  * When clicked, open the link in a new window. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#external PortalCustomization#external}
  */
  readonly external?: boolean | cdktf.IResolvable;
  /**
  * The absolute path of a page in a portal with a leading slash. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#path PortalCustomization#path}
  */
  readonly path?: string;
  /**
  * The link display text. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#title PortalCustomization#title}
  */
  readonly title?: string;
  /**
  * Whether a menu item is public or private. Private menu items are only accessible to authenticated users. Not Null; must be one of ["public", "private"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#visibility PortalCustomization#visibility}
  */
  readonly visibility?: string;
}

export function portalCustomizationMenuMainToTerraform(struct?: PortalCustomizationMenuMain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external: cdktf.booleanToTerraform(struct!.external),
    path: cdktf.stringToTerraform(struct!.path),
    title: cdktf.stringToTerraform(struct!.title),
    visibility: cdktf.stringToTerraform(struct!.visibility),
  }
}


export function portalCustomizationMenuMainToHclTerraform(struct?: PortalCustomizationMenuMain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external: {
      value: cdktf.booleanToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visibility: {
      value: cdktf.stringToHclTerraform(struct!.visibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomizationMenuMainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PortalCustomizationMenuMain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._visibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibility = this._visibility;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationMenuMain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._external = undefined;
      this._path = undefined;
      this._title = undefined;
      this._visibility = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._external = value.external;
      this._path = value.path;
      this._title = value.title;
      this._visibility = value.visibility;
    }
  }

  // external - computed: true, optional: true, required: false
  private _external?: boolean | cdktf.IResolvable; 
  public get external() {
    return this.getBooleanAttribute('external');
  }
  public set external(value: boolean | cdktf.IResolvable) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // path - computed: true, optional: true, required: false
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

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // visibility - computed: true, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }
}

export class PortalCustomizationMenuMainList extends cdktf.ComplexList {
  public internalValue? : PortalCustomizationMenuMain[] | cdktf.IResolvable

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
  public get(index: number): PortalCustomizationMenuMainOutputReference {
    return new PortalCustomizationMenuMainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PortalCustomizationMenu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#footer_bottom PortalCustomization#footer_bottom}
  */
  readonly footerBottom?: PortalCustomizationMenuFooterBottom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#footer_sections PortalCustomization#footer_sections}
  */
  readonly footerSections?: PortalCustomizationMenuFooterSections[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#main PortalCustomization#main}
  */
  readonly main?: PortalCustomizationMenuMain[] | cdktf.IResolvable;
}

export function portalCustomizationMenuToTerraform(struct?: PortalCustomizationMenu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    footer_bottom: cdktf.listMapper(portalCustomizationMenuFooterBottomToTerraform, false)(struct!.footerBottom),
    footer_sections: cdktf.listMapper(portalCustomizationMenuFooterSectionsToTerraform, false)(struct!.footerSections),
    main: cdktf.listMapper(portalCustomizationMenuMainToTerraform, false)(struct!.main),
  }
}


export function portalCustomizationMenuToHclTerraform(struct?: PortalCustomizationMenu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    footer_bottom: {
      value: cdktf.listMapperHcl(portalCustomizationMenuFooterBottomToHclTerraform, false)(struct!.footerBottom),
      isBlock: true,
      type: "list",
      storageClassType: "PortalCustomizationMenuFooterBottomList",
    },
    footer_sections: {
      value: cdktf.listMapperHcl(portalCustomizationMenuFooterSectionsToHclTerraform, false)(struct!.footerSections),
      isBlock: true,
      type: "list",
      storageClassType: "PortalCustomizationMenuFooterSectionsList",
    },
    main: {
      value: cdktf.listMapperHcl(portalCustomizationMenuMainToHclTerraform, false)(struct!.main),
      isBlock: true,
      type: "list",
      storageClassType: "PortalCustomizationMenuMainList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomizationMenuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalCustomizationMenu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._footerBottom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerBottom = this._footerBottom?.internalValue;
    }
    if (this._footerSections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.footerSections = this._footerSections?.internalValue;
    }
    if (this._main?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationMenu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._footerBottom.internalValue = undefined;
      this._footerSections.internalValue = undefined;
      this._main.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._footerBottom.internalValue = value.footerBottom;
      this._footerSections.internalValue = value.footerSections;
      this._main.internalValue = value.main;
    }
  }

  // footer_bottom - computed: false, optional: true, required: false
  private _footerBottom = new PortalCustomizationMenuFooterBottomList(this, "footer_bottom", false);
  public get footerBottom() {
    return this._footerBottom;
  }
  public putFooterBottom(value: PortalCustomizationMenuFooterBottom[] | cdktf.IResolvable) {
    this._footerBottom.internalValue = value;
  }
  public resetFooterBottom() {
    this._footerBottom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerBottomInput() {
    return this._footerBottom.internalValue;
  }

  // footer_sections - computed: false, optional: true, required: false
  private _footerSections = new PortalCustomizationMenuFooterSectionsList(this, "footer_sections", false);
  public get footerSections() {
    return this._footerSections;
  }
  public putFooterSections(value: PortalCustomizationMenuFooterSections[] | cdktf.IResolvable) {
    this._footerSections.internalValue = value;
  }
  public resetFooterSections() {
    this._footerSections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerSectionsInput() {
    return this._footerSections.internalValue;
  }

  // main - computed: false, optional: true, required: false
  private _main = new PortalCustomizationMenuMainList(this, "main", false);
  public get main() {
    return this._main;
  }
  public putMain(value: PortalCustomizationMenuMain[] | cdktf.IResolvable) {
    this._main.internalValue = value;
  }
  public resetMain() {
    this._main.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main.internalValue;
  }
}
export interface PortalCustomizationSpecRenderer {
  /**
  * Let users define a custom server URL for endpoints. This will be used to generate code snippets and to test the API. The URL is client-side only and is not saved. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#allow_custom_server_urls PortalCustomization#allow_custom_server_urls}
  */
  readonly allowCustomServerUrls?: boolean | cdktf.IResolvable;
  /**
  * Manage visibility of deprecated endpoints and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#hide_deprecated PortalCustomization#hide_deprecated}
  */
  readonly hideDeprecated?: boolean | cdktf.IResolvable;
  /**
  * Manage visibility of internal endpoints and models. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#hide_internal PortalCustomization#hide_internal}
  */
  readonly hideInternal?: boolean | cdktf.IResolvable;
  /**
  * Display the full spec on a single, scrollable page. If disabled, documentation, endpoints, and schemas appear on separate pages. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#infinite_scroll PortalCustomization#infinite_scroll}
  */
  readonly infiniteScroll?: boolean | cdktf.IResolvable;
  /**
  * Control whether schemas are visible in your API specs. When enabled, schemas appear in the side navigation below the endpoints. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#show_schemas PortalCustomization#show_schemas}
  */
  readonly showSchemas?: boolean | cdktf.IResolvable;
  /**
  * Enables users to open the API spec in Insomnia to explore and send requests with the native client. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#try_it_insomnia PortalCustomization#try_it_insomnia}
  */
  readonly tryItInsomnia?: boolean | cdktf.IResolvable;
  /**
  * Enable in-browser testing for your APIs. All linked gateways must have the CORS plugin configured. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#try_it_ui PortalCustomization#try_it_ui}
  */
  readonly tryItUi?: boolean | cdktf.IResolvable;
}

export function portalCustomizationSpecRendererToTerraform(struct?: PortalCustomizationSpecRenderer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_custom_server_urls: cdktf.booleanToTerraform(struct!.allowCustomServerUrls),
    hide_deprecated: cdktf.booleanToTerraform(struct!.hideDeprecated),
    hide_internal: cdktf.booleanToTerraform(struct!.hideInternal),
    infinite_scroll: cdktf.booleanToTerraform(struct!.infiniteScroll),
    show_schemas: cdktf.booleanToTerraform(struct!.showSchemas),
    try_it_insomnia: cdktf.booleanToTerraform(struct!.tryItInsomnia),
    try_it_ui: cdktf.booleanToTerraform(struct!.tryItUi),
  }
}


export function portalCustomizationSpecRendererToHclTerraform(struct?: PortalCustomizationSpecRenderer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_custom_server_urls: {
      value: cdktf.booleanToHclTerraform(struct!.allowCustomServerUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_deprecated: {
      value: cdktf.booleanToHclTerraform(struct!.hideDeprecated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hide_internal: {
      value: cdktf.booleanToHclTerraform(struct!.hideInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    infinite_scroll: {
      value: cdktf.booleanToHclTerraform(struct!.infiniteScroll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_schemas: {
      value: cdktf.booleanToHclTerraform(struct!.showSchemas),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    try_it_insomnia: {
      value: cdktf.booleanToHclTerraform(struct!.tryItInsomnia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    try_it_ui: {
      value: cdktf.booleanToHclTerraform(struct!.tryItUi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomizationSpecRendererOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalCustomizationSpecRenderer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowCustomServerUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCustomServerUrls = this._allowCustomServerUrls;
    }
    if (this._hideDeprecated !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideDeprecated = this._hideDeprecated;
    }
    if (this._hideInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideInternal = this._hideInternal;
    }
    if (this._infiniteScroll !== undefined) {
      hasAnyValues = true;
      internalValueResult.infiniteScroll = this._infiniteScroll;
    }
    if (this._showSchemas !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSchemas = this._showSchemas;
    }
    if (this._tryItInsomnia !== undefined) {
      hasAnyValues = true;
      internalValueResult.tryItInsomnia = this._tryItInsomnia;
    }
    if (this._tryItUi !== undefined) {
      hasAnyValues = true;
      internalValueResult.tryItUi = this._tryItUi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationSpecRenderer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowCustomServerUrls = undefined;
      this._hideDeprecated = undefined;
      this._hideInternal = undefined;
      this._infiniteScroll = undefined;
      this._showSchemas = undefined;
      this._tryItInsomnia = undefined;
      this._tryItUi = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowCustomServerUrls = value.allowCustomServerUrls;
      this._hideDeprecated = value.hideDeprecated;
      this._hideInternal = value.hideInternal;
      this._infiniteScroll = value.infiniteScroll;
      this._showSchemas = value.showSchemas;
      this._tryItInsomnia = value.tryItInsomnia;
      this._tryItUi = value.tryItUi;
    }
  }

  // allow_custom_server_urls - computed: true, optional: true, required: false
  private _allowCustomServerUrls?: boolean | cdktf.IResolvable; 
  public get allowCustomServerUrls() {
    return this.getBooleanAttribute('allow_custom_server_urls');
  }
  public set allowCustomServerUrls(value: boolean | cdktf.IResolvable) {
    this._allowCustomServerUrls = value;
  }
  public resetAllowCustomServerUrls() {
    this._allowCustomServerUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCustomServerUrlsInput() {
    return this._allowCustomServerUrls;
  }

  // hide_deprecated - computed: true, optional: true, required: false
  private _hideDeprecated?: boolean | cdktf.IResolvable; 
  public get hideDeprecated() {
    return this.getBooleanAttribute('hide_deprecated');
  }
  public set hideDeprecated(value: boolean | cdktf.IResolvable) {
    this._hideDeprecated = value;
  }
  public resetHideDeprecated() {
    this._hideDeprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideDeprecatedInput() {
    return this._hideDeprecated;
  }

  // hide_internal - computed: true, optional: true, required: false
  private _hideInternal?: boolean | cdktf.IResolvable; 
  public get hideInternal() {
    return this.getBooleanAttribute('hide_internal');
  }
  public set hideInternal(value: boolean | cdktf.IResolvable) {
    this._hideInternal = value;
  }
  public resetHideInternal() {
    this._hideInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideInternalInput() {
    return this._hideInternal;
  }

  // infinite_scroll - computed: true, optional: true, required: false
  private _infiniteScroll?: boolean | cdktf.IResolvable; 
  public get infiniteScroll() {
    return this.getBooleanAttribute('infinite_scroll');
  }
  public set infiniteScroll(value: boolean | cdktf.IResolvable) {
    this._infiniteScroll = value;
  }
  public resetInfiniteScroll() {
    this._infiniteScroll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infiniteScrollInput() {
    return this._infiniteScroll;
  }

  // show_schemas - computed: true, optional: true, required: false
  private _showSchemas?: boolean | cdktf.IResolvable; 
  public get showSchemas() {
    return this.getBooleanAttribute('show_schemas');
  }
  public set showSchemas(value: boolean | cdktf.IResolvable) {
    this._showSchemas = value;
  }
  public resetShowSchemas() {
    this._showSchemas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSchemasInput() {
    return this._showSchemas;
  }

  // try_it_insomnia - computed: true, optional: true, required: false
  private _tryItInsomnia?: boolean | cdktf.IResolvable; 
  public get tryItInsomnia() {
    return this.getBooleanAttribute('try_it_insomnia');
  }
  public set tryItInsomnia(value: boolean | cdktf.IResolvable) {
    this._tryItInsomnia = value;
  }
  public resetTryItInsomnia() {
    this._tryItInsomnia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryItInsomniaInput() {
    return this._tryItInsomnia;
  }

  // try_it_ui - computed: true, optional: true, required: false
  private _tryItUi?: boolean | cdktf.IResolvable; 
  public get tryItUi() {
    return this.getBooleanAttribute('try_it_ui');
  }
  public set tryItUi(value: boolean | cdktf.IResolvable) {
    this._tryItUi = value;
  }
  public resetTryItUi() {
    this._tryItUi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryItUiInput() {
    return this._tryItUi;
  }
}
export interface PortalCustomizationThemeColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#primary PortalCustomization#primary}
  */
  readonly primary?: string;
}

export function portalCustomizationThemeColorsToTerraform(struct?: PortalCustomizationThemeColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: cdktf.stringToTerraform(struct!.primary),
  }
}


export function portalCustomizationThemeColorsToHclTerraform(struct?: PortalCustomizationThemeColors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortalCustomizationThemeColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalCustomizationThemeColors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationThemeColors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary = value.primary;
    }
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}
export interface PortalCustomizationTheme {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#colors PortalCustomization#colors}
  */
  readonly colors?: PortalCustomizationThemeColors;
  /**
  * must be one of ["light", "dark", "system"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#mode PortalCustomization#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#name PortalCustomization#name}
  */
  readonly name?: string;
}

export function portalCustomizationThemeToTerraform(struct?: PortalCustomizationTheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: portalCustomizationThemeColorsToTerraform(struct!.colors),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function portalCustomizationThemeToHclTerraform(struct?: PortalCustomizationTheme | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: portalCustomizationThemeColorsToHclTerraform(struct!.colors),
      isBlock: true,
      type: "struct",
      storageClassType: "PortalCustomizationThemeColors",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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

export class PortalCustomizationThemeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PortalCustomizationTheme | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortalCustomizationTheme | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._colors.internalValue = undefined;
      this._mode = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._colors.internalValue = value.colors;
      this._mode = value.mode;
      this._name = value.name;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new PortalCustomizationThemeColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: PortalCustomizationThemeColors) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization konnect_portal_customization}
*/
export class PortalCustomization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_portal_customization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PortalCustomization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PortalCustomization to import
  * @param importFromId The id of the existing PortalCustomization that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PortalCustomization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_portal_customization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/portal_customization konnect_portal_customization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortalCustomizationConfig
  */
  public constructor(scope: Construct, id: string, config: PortalCustomizationConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_portal_customization',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._css = config.css;
    this._layout = config.layout;
    this._menu.internalValue = config.menu;
    this._portalId = config.portalId;
    this._robots = config.robots;
    this._specRenderer.internalValue = config.specRenderer;
    this._theme.internalValue = config.theme;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // css - computed: false, optional: true, required: false
  private _css?: string; 
  public get css() {
    return this.getStringAttribute('css');
  }
  public set css(value: string) {
    this._css = value;
  }
  public resetCss() {
    this._css = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cssInput() {
    return this._css;
  }

  // layout - computed: false, optional: true, required: false
  private _layout?: string; 
  public get layout() {
    return this.getStringAttribute('layout');
  }
  public set layout(value: string) {
    this._layout = value;
  }
  public resetLayout() {
    this._layout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layoutInput() {
    return this._layout;
  }

  // menu - computed: false, optional: true, required: false
  private _menu = new PortalCustomizationMenuOutputReference(this, "menu");
  public get menu() {
    return this._menu;
  }
  public putMenu(value: PortalCustomizationMenu) {
    this._menu.internalValue = value;
  }
  public resetMenu() {
    this._menu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get menuInput() {
    return this._menu.internalValue;
  }

  // portal_id - computed: false, optional: false, required: true
  private _portalId?: string; 
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }
  public set portalId(value: string) {
    this._portalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdInput() {
    return this._portalId;
  }

  // robots - computed: false, optional: true, required: false
  private _robots?: string; 
  public get robots() {
    return this.getStringAttribute('robots');
  }
  public set robots(value: string) {
    this._robots = value;
  }
  public resetRobots() {
    this._robots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robotsInput() {
    return this._robots;
  }

  // spec_renderer - computed: false, optional: true, required: false
  private _specRenderer = new PortalCustomizationSpecRendererOutputReference(this, "spec_renderer");
  public get specRenderer() {
    return this._specRenderer;
  }
  public putSpecRenderer(value: PortalCustomizationSpecRenderer) {
    this._specRenderer.internalValue = value;
  }
  public resetSpecRenderer() {
    this._specRenderer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specRendererInput() {
    return this._specRenderer.internalValue;
  }

  // theme - computed: false, optional: true, required: false
  private _theme = new PortalCustomizationThemeOutputReference(this, "theme");
  public get theme() {
    return this._theme;
  }
  public putTheme(value: PortalCustomizationTheme) {
    this._theme.internalValue = value;
  }
  public resetTheme() {
    this._theme.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      css: cdktf.stringToTerraform(this._css),
      layout: cdktf.stringToTerraform(this._layout),
      menu: portalCustomizationMenuToTerraform(this._menu.internalValue),
      portal_id: cdktf.stringToTerraform(this._portalId),
      robots: cdktf.stringToTerraform(this._robots),
      spec_renderer: portalCustomizationSpecRendererToTerraform(this._specRenderer.internalValue),
      theme: portalCustomizationThemeToTerraform(this._theme.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      css: {
        value: cdktf.stringToHclTerraform(this._css),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layout: {
        value: cdktf.stringToHclTerraform(this._layout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      menu: {
        value: portalCustomizationMenuToHclTerraform(this._menu.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalCustomizationMenu",
      },
      portal_id: {
        value: cdktf.stringToHclTerraform(this._portalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      robots: {
        value: cdktf.stringToHclTerraform(this._robots),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec_renderer: {
        value: portalCustomizationSpecRendererToHclTerraform(this._specRenderer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalCustomizationSpecRenderer",
      },
      theme: {
        value: portalCustomizationThemeToHclTerraform(this._theme.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PortalCustomizationTheme",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
