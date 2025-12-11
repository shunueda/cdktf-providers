// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLicenseManagerProductLicenseConsumersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}
  */
  readonly isCompartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}
  */
  readonly productLicenseId: string;
}
export interface DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts {
}

export function dataOciLicenseManagerProductLicenseConsumersItemsMissingProductsToTerraform(struct?: DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLicenseManagerProductLicenseConsumersItemsMissingProductsToHclTerraform(struct?: DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference {
    return new DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciLicenseManagerProductLicenseConsumersItems {
}

export function dataOciLicenseManagerProductLicenseConsumersItemsToTerraform(struct?: DataOciLicenseManagerProductLicenseConsumersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLicenseManagerProductLicenseConsumersItemsToHclTerraform(struct?: DataOciLicenseManagerProductLicenseConsumersItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLicenseManagerProductLicenseConsumersItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLicenseManagerProductLicenseConsumersItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLicenseManagerProductLicenseConsumersItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_all_options_available - computed: true, optional: false, required: false
  public get areAllOptionsAvailable() {
    return this.getBooleanAttribute('are_all_options_available');
  }

  // is_base_license_available - computed: true, optional: false, required: false
  public get isBaseLicenseAvailable() {
    return this.getBooleanAttribute('is_base_license_available');
  }

  // license_unit_type - computed: true, optional: false, required: false
  public get licenseUnitType() {
    return this.getStringAttribute('license_unit_type');
  }

  // license_units_consumed - computed: true, optional: false, required: false
  public get licenseUnitsConsumed() {
    return this.getNumberAttribute('license_units_consumed');
  }

  // missing_products - computed: true, optional: false, required: false
  private _missingProducts = new DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList(this, "missing_products", false);
  public get missingProducts() {
    return this._missingProducts;
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // resource_compartment_id - computed: true, optional: false, required: false
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }

  // resource_compartment_name - computed: true, optional: false, required: false
  public get resourceCompartmentName() {
    return this.getStringAttribute('resource_compartment_name');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_unit_count - computed: true, optional: false, required: false
  public get resourceUnitCount() {
    return this.getNumberAttribute('resource_unit_count');
  }

  // resource_unit_type - computed: true, optional: false, required: false
  public get resourceUnitType() {
    return this.getStringAttribute('resource_unit_type');
  }
}

export class DataOciLicenseManagerProductLicenseConsumersItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLicenseManagerProductLicenseConsumersItemsOutputReference {
    return new DataOciLicenseManagerProductLicenseConsumersItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers oci_license_manager_product_license_consumers}
*/
export class DataOciLicenseManagerProductLicenseConsumers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_license_manager_product_license_consumers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLicenseManagerProductLicenseConsumers to import
  * @param importFromId The id of the existing DataOciLicenseManagerProductLicenseConsumers that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLicenseManagerProductLicenseConsumers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_license_manager_product_license_consumers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/license_manager_product_license_consumers oci_license_manager_product_license_consumers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLicenseManagerProductLicenseConsumersConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLicenseManagerProductLicenseConsumersConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_license_manager_product_license_consumers',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._isCompartmentIdInSubtree = config.isCompartmentIdInSubtree;
    this._productLicenseId = config.productLicenseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
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

  // is_compartment_id_in_subtree - computed: false, optional: true, required: false
  private _isCompartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get isCompartmentIdInSubtree() {
    return this.getBooleanAttribute('is_compartment_id_in_subtree');
  }
  public set isCompartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._isCompartmentIdInSubtree = value;
  }
  public resetIsCompartmentIdInSubtree() {
    this._isCompartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompartmentIdInSubtreeInput() {
    return this._isCompartmentIdInSubtree;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciLicenseManagerProductLicenseConsumersItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // product_license_id - computed: false, optional: false, required: true
  private _productLicenseId?: string; 
  public get productLicenseId() {
    return this.getStringAttribute('product_license_id');
  }
  public set productLicenseId(value: string) {
    this._productLicenseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productLicenseIdInput() {
    return this._productLicenseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      is_compartment_id_in_subtree: cdktf.booleanToTerraform(this._isCompartmentIdInSubtree),
      product_license_id: cdktf.stringToTerraform(this._productLicenseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      is_compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._isCompartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      product_license_id: {
        value: cdktf.stringToHclTerraform(this._productLicenseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
