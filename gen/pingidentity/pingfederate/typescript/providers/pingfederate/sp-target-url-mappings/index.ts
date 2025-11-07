// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpTargetUrlMappingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The actual list of SP connection URL mappings. The order of the items in this list determines the order in which the mappings are evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings#items SpTargetUrlMappings#items}
  */
  readonly items?: SpTargetUrlMappingsItems[] | cdktf.IResolvable;
}
export interface SpTargetUrlMappingsItemsRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings#id SpTargetUrlMappings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spTargetUrlMappingsItemsRefToTerraform(struct?: SpTargetUrlMappingsItemsRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spTargetUrlMappingsItemsRefToHclTerraform(struct?: SpTargetUrlMappingsItemsRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpTargetUrlMappingsItemsRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpTargetUrlMappingsItemsRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpTargetUrlMappingsItemsRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpTargetUrlMappingsItems {
  /**
  * The adapter or connection instance mapped for this URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings#ref SpTargetUrlMappings#ref}
  */
  readonly ref: SpTargetUrlMappingsItemsRef;
  /**
  * The URL mapping type. Options are `SP_ADAPTER` or `SP_CONNECTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings#type SpTargetUrlMappings#type}
  */
  readonly type: string;
  /**
  * The URL that will be compared against the target URL. Use a wildcard (*) to match multiple URLs to the same adapter or connection instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings#url SpTargetUrlMappings#url}
  */
  readonly url: string;
}

export function spTargetUrlMappingsItemsToTerraform(struct?: SpTargetUrlMappingsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: spTargetUrlMappingsItemsRefToTerraform(struct!.ref),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function spTargetUrlMappingsItemsToHclTerraform(struct?: SpTargetUrlMappingsItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: spTargetUrlMappingsItemsRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "SpTargetUrlMappingsItemsRef",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class SpTargetUrlMappingsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SpTargetUrlMappingsItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpTargetUrlMappingsItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref.internalValue = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref.internalValue = value.ref;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // ref - computed: true, optional: false, required: true
  private _ref = new SpTargetUrlMappingsItemsRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: SpTargetUrlMappingsItemsRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
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

  // url - computed: true, optional: false, required: true
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

export class SpTargetUrlMappingsItemsList extends cdktf.ComplexList {
  public internalValue? : SpTargetUrlMappingsItems[] | cdktf.IResolvable

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
  public get(index: number): SpTargetUrlMappingsItemsOutputReference {
    return new SpTargetUrlMappingsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings pingfederate_sp_target_url_mappings}
*/
export class SpTargetUrlMappings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_sp_target_url_mappings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpTargetUrlMappings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpTargetUrlMappings to import
  * @param importFromId The id of the existing SpTargetUrlMappings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpTargetUrlMappings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_sp_target_url_mappings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_target_url_mappings pingfederate_sp_target_url_mappings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpTargetUrlMappingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SpTargetUrlMappingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_sp_target_url_mappings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._items.internalValue = config.items;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: true, required: false
  private _items = new SpTargetUrlMappingsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: SpTargetUrlMappingsItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      items: cdktf.listMapper(spTargetUrlMappingsItemsToTerraform, false)(this._items.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      items: {
        value: cdktf.listMapperHcl(spTargetUrlMappingsItemsToHclTerraform, false)(this._items.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpTargetUrlMappingsItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
