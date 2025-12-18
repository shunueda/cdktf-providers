// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/license_manager_product_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciLicenseManagerProductLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/license_manager_product_license#product_license_id DataOciLicenseManagerProductLicense#product_license_id}
  */
  readonly productLicenseId: string;
}
export interface DataOciLicenseManagerProductLicenseImages {
}

export function dataOciLicenseManagerProductLicenseImagesToTerraform(struct?: DataOciLicenseManagerProductLicenseImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciLicenseManagerProductLicenseImagesToHclTerraform(struct?: DataOciLicenseManagerProductLicenseImages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciLicenseManagerProductLicenseImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciLicenseManagerProductLicenseImages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciLicenseManagerProductLicenseImages | undefined) {
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

  // listing_id - computed: true, optional: false, required: false
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }

  // listing_name - computed: true, optional: false, required: false
  public get listingName() {
    return this.getStringAttribute('listing_name');
  }

  // package_version - computed: true, optional: false, required: false
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }

  // publisher - computed: true, optional: false, required: false
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
}

export class DataOciLicenseManagerProductLicenseImagesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciLicenseManagerProductLicenseImagesOutputReference {
    return new DataOciLicenseManagerProductLicenseImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/license_manager_product_license oci_license_manager_product_license}
*/
export class DataOciLicenseManagerProductLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_license_manager_product_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciLicenseManagerProductLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciLicenseManagerProductLicense to import
  * @param importFromId The id of the existing DataOciLicenseManagerProductLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/license_manager_product_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciLicenseManagerProductLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_license_manager_product_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/license_manager_product_license oci_license_manager_product_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciLicenseManagerProductLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciLicenseManagerProductLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_license_manager_product_license',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._productLicenseId = config.productLicenseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_license_record_count - computed: true, optional: false, required: false
  public get activeLicenseRecordCount() {
    return this.getNumberAttribute('active_license_record_count');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // images - computed: true, optional: false, required: false
  private _images = new DataOciLicenseManagerProductLicenseImagesList(this, "images", false);
  public get images() {
    return this._images;
  }

  // is_over_subscribed - computed: true, optional: false, required: false
  public get isOverSubscribed() {
    return this.getBooleanAttribute('is_over_subscribed');
  }

  // is_unlimited - computed: true, optional: false, required: false
  public get isUnlimited() {
    return this.getBooleanAttribute('is_unlimited');
  }

  // is_vendor_oracle - computed: true, optional: false, required: false
  public get isVendorOracle() {
    return this.getBooleanAttribute('is_vendor_oracle');
  }

  // license_unit - computed: true, optional: false, required: false
  public get licenseUnit() {
    return this.getStringAttribute('license_unit');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_description - computed: true, optional: false, required: false
  public get statusDescription() {
    return this.getStringAttribute('status_description');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // total_active_license_unit_count - computed: true, optional: false, required: false
  public get totalActiveLicenseUnitCount() {
    return this.getNumberAttribute('total_active_license_unit_count');
  }

  // total_license_record_count - computed: true, optional: false, required: false
  public get totalLicenseRecordCount() {
    return this.getNumberAttribute('total_license_record_count');
  }

  // total_license_units_consumed - computed: true, optional: false, required: false
  public get totalLicenseUnitsConsumed() {
    return this.getNumberAttribute('total_license_units_consumed');
  }

  // vendor_name - computed: true, optional: false, required: false
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      product_license_id: cdktf.stringToTerraform(this._productLicenseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
