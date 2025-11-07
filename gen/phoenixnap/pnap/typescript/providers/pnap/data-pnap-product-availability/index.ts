// https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPnapProductAvailabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#id DataPnapProductAvailability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#location DataPnapProductAvailability#location}
  */
  readonly location?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#min_quantity DataPnapProductAvailability#min_quantity}
  */
  readonly minQuantity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#product_category DataPnapProductAvailability#product_category}
  */
  readonly productCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#product_code DataPnapProductAvailability#product_code}
  */
  readonly productCode?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#show_only_min_quantity_available DataPnapProductAvailability#show_only_min_quantity_available}
  */
  readonly showOnlyMinQuantityAvailable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#solution DataPnapProductAvailability#solution}
  */
  readonly solution?: string[];
}
export interface DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetails {
}

export function dataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetailsToTerraform(struct?: DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetailsToHclTerraform(struct?: DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_quantity - computed: true, optional: false, required: false
  public get availableQuantity() {
    return this.getNumberAttribute('available_quantity');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // min_quantity_available - computed: true, optional: false, required: false
  public get minQuantityAvailable() {
    return this.getBooleanAttribute('min_quantity_available');
  }

  // min_quantity_requested - computed: true, optional: false, required: false
  public get minQuantityRequested() {
    return this.getNumberAttribute('min_quantity_requested');
  }

  // solutions - computed: true, optional: false, required: false
  public get solutions() {
    return cdktf.Fn.tolist(this.getListAttribute('solutions'));
  }
}

export class DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetailsOutputReference {
    return new DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPnapProductAvailabilityProductAvailabilities {
}

export function dataPnapProductAvailabilityProductAvailabilitiesToTerraform(struct?: DataPnapProductAvailabilityProductAvailabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapProductAvailabilityProductAvailabilitiesToHclTerraform(struct?: DataPnapProductAvailabilityProductAvailabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapProductAvailabilityProductAvailabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapProductAvailabilityProductAvailabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapProductAvailabilityProductAvailabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location_availability_details - computed: true, optional: false, required: false
  private _locationAvailabilityDetails = new DataPnapProductAvailabilityProductAvailabilitiesLocationAvailabilityDetailsList(this, "location_availability_details", false);
  public get locationAvailabilityDetails() {
    return this._locationAvailabilityDetails;
  }

  // product_category - computed: true, optional: false, required: false
  public get productCategory() {
    return this.getStringAttribute('product_category');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
}

export class DataPnapProductAvailabilityProductAvailabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapProductAvailabilityProductAvailabilitiesOutputReference {
    return new DataPnapProductAvailabilityProductAvailabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability pnap_product_availability}
*/
export class DataPnapProductAvailability extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pnap_product_availability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPnapProductAvailability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPnapProductAvailability to import
  * @param importFromId The id of the existing DataPnapProductAvailability that should be imported. Refer to the {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPnapProductAvailability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pnap_product_availability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/product_availability pnap_product_availability} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPnapProductAvailabilityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPnapProductAvailabilityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pnap_product_availability',
      terraformGeneratorMetadata: {
        providerName: 'pnap',
        providerVersion: '0.30.0'
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
    this._location = config.location;
    this._minQuantity = config.minQuantity;
    this._productCategory = config.productCategory;
    this._productCode = config.productCode;
    this._showOnlyMinQuantityAvailable = config.showOnlyMinQuantityAvailable;
    this._solution = config.solution;
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

  // location - computed: false, optional: true, required: false
  private _location?: string[]; 
  public get location() {
    return cdktf.Fn.tolist(this.getListAttribute('location'));
  }
  public set location(value: string[]) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // min_quantity - computed: false, optional: true, required: false
  private _minQuantity?: number; 
  public get minQuantity() {
    return this.getNumberAttribute('min_quantity');
  }
  public set minQuantity(value: number) {
    this._minQuantity = value;
  }
  public resetMinQuantity() {
    this._minQuantity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minQuantityInput() {
    return this._minQuantity;
  }

  // product_availabilities - computed: true, optional: false, required: false
  private _productAvailabilities = new DataPnapProductAvailabilityProductAvailabilitiesList(this, "product_availabilities", false);
  public get productAvailabilities() {
    return this._productAvailabilities;
  }

  // product_category - computed: false, optional: true, required: false
  private _productCategory?: string[]; 
  public get productCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('product_category'));
  }
  public set productCategory(value: string[]) {
    this._productCategory = value;
  }
  public resetProductCategory() {
    this._productCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCategoryInput() {
    return this._productCategory;
  }

  // product_code - computed: false, optional: true, required: false
  private _productCode?: string[]; 
  public get productCode() {
    return cdktf.Fn.tolist(this.getListAttribute('product_code'));
  }
  public set productCode(value: string[]) {
    this._productCode = value;
  }
  public resetProductCode() {
    this._productCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // show_only_min_quantity_available - computed: false, optional: true, required: false
  private _showOnlyMinQuantityAvailable?: boolean | cdktf.IResolvable; 
  public get showOnlyMinQuantityAvailable() {
    return this.getBooleanAttribute('show_only_min_quantity_available');
  }
  public set showOnlyMinQuantityAvailable(value: boolean | cdktf.IResolvable) {
    this._showOnlyMinQuantityAvailable = value;
  }
  public resetShowOnlyMinQuantityAvailable() {
    this._showOnlyMinQuantityAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnlyMinQuantityAvailableInput() {
    return this._showOnlyMinQuantityAvailable;
  }

  // solution - computed: false, optional: true, required: false
  private _solution?: string[]; 
  public get solution() {
    return cdktf.Fn.tolist(this.getListAttribute('solution'));
  }
  public set solution(value: string[]) {
    this._solution = value;
  }
  public resetSolution() {
    this._solution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionInput() {
    return this._solution;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.listMapper(cdktf.stringToTerraform, false)(this._location),
      min_quantity: cdktf.numberToTerraform(this._minQuantity),
      product_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productCategory),
      product_code: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productCode),
      show_only_min_quantity_available: cdktf.booleanToTerraform(this._showOnlyMinQuantityAvailable),
      solution: cdktf.listMapper(cdktf.stringToTerraform, false)(this._solution),
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
      location: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._location),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      min_quantity: {
        value: cdktf.numberToHclTerraform(this._minQuantity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      product_code: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productCode),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      show_only_min_quantity_available: {
        value: cdktf.booleanToHclTerraform(this._showOnlyMinQuantityAvailable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      solution: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._solution),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
