// https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * A two-digit country code as per [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#countries Store#countries}
  */
  readonly countries?: string[];
  /**
  * Set of ResourceIdentifier to a Channel with ProductDistribution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#distribution_channels Store#distribution_channels}
  */
  readonly distributionChannels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#id Store#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-specific unique identifier for the store. The key is mandatory and immutable. It is used to reference the store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#key Store#key}
  */
  readonly key: string;
  /**
  * [IETF Language Tag](https://en.wikipedia.org/wiki/IETF_language_tag)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#languages Store#languages}
  */
  readonly languages?: string[];
  /**
  * [LocalizedString](https://docs.commercetools.com/api/types#localizedstring)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#name Store#name}
  */
  readonly name?: { [key: string]: string };
  /**
  * Set of ResourceIdentifier of Channels with InventorySupply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#supply_channels Store#supply_channels}
  */
  readonly supplyChannels?: string[];
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#custom Store#custom}
  */
  readonly custom?: StoreCustom;
  /**
  * product_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#product_selection Store#product_selection}
  */
  readonly productSelection?: StoreProductSelection[] | cdktf.IResolvable;
}
export interface StoreCustom {
  /**
  * Custom fields for this resource. Note that the values need to be provided as JSON encoded strings: `my-value = jsonencode({"key": "value"})`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#fields Store#fields}
  */
  readonly fields?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#type_id Store#type_id}
  */
  readonly typeId: string;
}

export function storeCustomToTerraform(struct?: StoreCustomOutputReference | StoreCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fields),
    type_id: cdktf.stringToTerraform(struct!.typeId),
  }
}


export function storeCustomToHclTerraform(struct?: StoreCustomOutputReference | StoreCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fields),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    type_id: {
      value: cdktf.stringToHclTerraform(struct!.typeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StoreCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._typeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeId = this._typeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields = undefined;
      this._typeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields = value.fields;
      this._typeId = value.typeId;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: { [key: string]: string }; 
  public get fields() {
    return this.getStringMapAttribute('fields');
  }
  public set fields(value: { [key: string]: string }) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // type_id - computed: false, optional: false, required: true
  private _typeId?: string; 
  public get typeId() {
    return this.getStringAttribute('type_id');
  }
  public set typeId(value: string) {
    this._typeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdInput() {
    return this._typeId;
  }
}
export interface StoreProductSelection {
  /**
  * If true, all Products assigned to this Product Selection are part of the Store's assortment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#active Store#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Resource Identifier of a ProductSelection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#product_selection_id Store#product_selection_id}
  */
  readonly productSelectionId: string;
}

export function storeProductSelectionToTerraform(struct?: StoreProductSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    product_selection_id: cdktf.stringToTerraform(struct!.productSelectionId),
  }
}


export function storeProductSelectionToHclTerraform(struct?: StoreProductSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    product_selection_id: {
      value: cdktf.stringToHclTerraform(struct!.productSelectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StoreProductSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StoreProductSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._productSelectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.productSelectionId = this._productSelectionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StoreProductSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._productSelectionId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._productSelectionId = value.productSelectionId;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // product_selection_id - computed: false, optional: false, required: true
  private _productSelectionId?: string; 
  public get productSelectionId() {
    return this.getStringAttribute('product_selection_id');
  }
  public set productSelectionId(value: string) {
    this._productSelectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productSelectionIdInput() {
    return this._productSelectionId;
  }
}

export class StoreProductSelectionList extends cdktf.ComplexList {
  public internalValue? : StoreProductSelection[] | cdktf.IResolvable

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
  public get(index: number): StoreProductSelectionOutputReference {
    return new StoreProductSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store commercetools_store}
*/
export class Store extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commercetools_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Store resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Store to import
  * @param importFromId The id of the existing Store that should be imported. Refer to the {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Store to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commercetools_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/labd/commercetools/1.21.1/docs/resources/store commercetools_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StoreConfig
  */
  public constructor(scope: Construct, id: string, config: StoreConfig) {
    super(scope, id, {
      terraformResourceType: 'commercetools_store',
      terraformGeneratorMetadata: {
        providerName: 'commercetools',
        providerVersion: '1.21.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._countries = config.countries;
    this._distributionChannels = config.distributionChannels;
    this._id = config.id;
    this._key = config.key;
    this._languages = config.languages;
    this._name = config.name;
    this._supplyChannels = config.supplyChannels;
    this._custom.internalValue = config.custom;
    this._productSelection.internalValue = config.productSelection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // distribution_channels - computed: false, optional: true, required: false
  private _distributionChannels?: string[]; 
  public get distributionChannels() {
    return this.getListAttribute('distribution_channels');
  }
  public set distributionChannels(value: string[]) {
    this._distributionChannels = value;
  }
  public resetDistributionChannels() {
    this._distributionChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionChannelsInput() {
    return this._distributionChannels;
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

  // languages - computed: false, optional: true, required: false
  private _languages?: string[]; 
  public get languages() {
    return this.getListAttribute('languages');
  }
  public set languages(value: string[]) {
    this._languages = value;
  }
  public resetLanguages() {
    this._languages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languagesInput() {
    return this._languages;
  }

  // name - computed: false, optional: true, required: false
  private _name?: { [key: string]: string }; 
  public get name() {
    return this.getStringMapAttribute('name');
  }
  public set name(value: { [key: string]: string }) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // supply_channels - computed: false, optional: true, required: false
  private _supplyChannels?: string[]; 
  public get supplyChannels() {
    return this.getListAttribute('supply_channels');
  }
  public set supplyChannels(value: string[]) {
    this._supplyChannels = value;
  }
  public resetSupplyChannels() {
    this._supplyChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplyChannelsInput() {
    return this._supplyChannels;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new StoreCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: StoreCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // product_selection - computed: false, optional: true, required: false
  private _productSelection = new StoreProductSelectionList(this, "product_selection", true);
  public get productSelection() {
    return this._productSelection;
  }
  public putProductSelection(value: StoreProductSelection[] | cdktf.IResolvable) {
    this._productSelection.internalValue = value;
  }
  public resetProductSelection() {
    this._productSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productSelectionInput() {
    return this._productSelection.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._countries),
      distribution_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._distributionChannels),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      languages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._languages),
      name: cdktf.hashMapper(cdktf.stringToTerraform)(this._name),
      supply_channels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supplyChannels),
      custom: storeCustomToTerraform(this._custom.internalValue),
      product_selection: cdktf.listMapper(storeProductSelectionToTerraform, true)(this._productSelection.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._countries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      distribution_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._distributionChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      languages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._languages),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._name),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      supply_channels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supplyChannels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom: {
        value: storeCustomToHclTerraform(this._custom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StoreCustomList",
      },
      product_selection: {
        value: cdktf.listMapperHcl(storeProductSelectionToHclTerraform, true)(this._productSelection.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StoreProductSelectionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
