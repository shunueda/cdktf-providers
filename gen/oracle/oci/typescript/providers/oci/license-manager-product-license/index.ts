// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseManagerProductLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#compartment_id LicenseManagerProductLicense#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#defined_tags LicenseManagerProductLicense#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#display_name LicenseManagerProductLicense#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#freeform_tags LicenseManagerProductLicense#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#id LicenseManagerProductLicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#is_vendor_oracle LicenseManagerProductLicense#is_vendor_oracle}
  */
  readonly isVendorOracle: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#license_unit LicenseManagerProductLicense#license_unit}
  */
  readonly licenseUnit: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#vendor_name LicenseManagerProductLicense#vendor_name}
  */
  readonly vendorName?: string;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#images LicenseManagerProductLicense#images}
  */
  readonly images?: LicenseManagerProductLicenseImages[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#timeouts LicenseManagerProductLicense#timeouts}
  */
  readonly timeouts?: LicenseManagerProductLicenseTimeouts;
}
export interface LicenseManagerProductLicenseImages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#listing_id LicenseManagerProductLicense#listing_id}
  */
  readonly listingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#package_version LicenseManagerProductLicense#package_version}
  */
  readonly packageVersion: string;
}

export function licenseManagerProductLicenseImagesToTerraform(struct?: LicenseManagerProductLicenseImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listing_id: cdktf.stringToTerraform(struct!.listingId),
    package_version: cdktf.stringToTerraform(struct!.packageVersion),
  }
}


export function licenseManagerProductLicenseImagesToHclTerraform(struct?: LicenseManagerProductLicenseImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listing_id: {
      value: cdktf.stringToHclTerraform(struct!.listingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_version: {
      value: cdktf.stringToHclTerraform(struct!.packageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseManagerProductLicenseImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseManagerProductLicenseImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.listingId = this._listingId;
    }
    if (this._packageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageVersion = this._packageVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerProductLicenseImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listingId = undefined;
      this._packageVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listingId = value.listingId;
      this._packageVersion = value.packageVersion;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listing_id - computed: false, optional: false, required: true
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
  }

  // listing_name - computed: true, optional: false, required: false
  public get listingName() {
    return this.getStringAttribute('listing_name');
  }

  // package_version - computed: false, optional: false, required: true
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // publisher - computed: true, optional: false, required: false
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
}

export class LicenseManagerProductLicenseImagesList extends cdktf.ComplexList {
  public internalValue? : LicenseManagerProductLicenseImages[] | cdktf.IResolvable

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
  public get(index: number): LicenseManagerProductLicenseImagesOutputReference {
    return new LicenseManagerProductLicenseImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LicenseManagerProductLicenseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#create LicenseManagerProductLicense#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#delete LicenseManagerProductLicense#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#update LicenseManagerProductLicense#update}
  */
  readonly update?: string;
}

export function licenseManagerProductLicenseTimeoutsToTerraform(struct?: LicenseManagerProductLicenseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function licenseManagerProductLicenseTimeoutsToHclTerraform(struct?: LicenseManagerProductLicenseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseManagerProductLicenseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LicenseManagerProductLicenseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseManagerProductLicenseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license oci_license_manager_product_license}
*/
export class LicenseManagerProductLicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_license_manager_product_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseManagerProductLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseManagerProductLicense to import
  * @param importFromId The id of the existing LicenseManagerProductLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseManagerProductLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_license_manager_product_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/license_manager_product_license oci_license_manager_product_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseManagerProductLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseManagerProductLicenseConfig) {
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isVendorOracle = config.isVendorOracle;
    this._licenseUnit = config.licenseUnit;
    this._vendorName = config.vendorName;
    this._images.internalValue = config.images;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_license_record_count - computed: true, optional: false, required: false
  public get activeLicenseRecordCount() {
    return this.getNumberAttribute('active_license_record_count');
  }

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

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_over_subscribed - computed: true, optional: false, required: false
  public get isOverSubscribed() {
    return this.getBooleanAttribute('is_over_subscribed');
  }

  // is_unlimited - computed: true, optional: false, required: false
  public get isUnlimited() {
    return this.getBooleanAttribute('is_unlimited');
  }

  // is_vendor_oracle - computed: false, optional: false, required: true
  private _isVendorOracle?: boolean | cdktf.IResolvable; 
  public get isVendorOracle() {
    return this.getBooleanAttribute('is_vendor_oracle');
  }
  public set isVendorOracle(value: boolean | cdktf.IResolvable) {
    this._isVendorOracle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isVendorOracleInput() {
    return this._isVendorOracle;
  }

  // license_unit - computed: false, optional: false, required: true
  private _licenseUnit?: string; 
  public get licenseUnit() {
    return this.getStringAttribute('license_unit');
  }
  public set licenseUnit(value: string) {
    this._licenseUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseUnitInput() {
    return this._licenseUnit;
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

  // vendor_name - computed: true, optional: true, required: false
  private _vendorName?: string; 
  public get vendorName() {
    return this.getStringAttribute('vendor_name');
  }
  public set vendorName(value: string) {
    this._vendorName = value;
  }
  public resetVendorName() {
    this._vendorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorNameInput() {
    return this._vendorName;
  }

  // images - computed: false, optional: true, required: false
  private _images = new LicenseManagerProductLicenseImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: LicenseManagerProductLicenseImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LicenseManagerProductLicenseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LicenseManagerProductLicenseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_vendor_oracle: cdktf.booleanToTerraform(this._isVendorOracle),
      license_unit: cdktf.stringToTerraform(this._licenseUnit),
      vendor_name: cdktf.stringToTerraform(this._vendorName),
      images: cdktf.listMapper(licenseManagerProductLicenseImagesToTerraform, true)(this._images.internalValue),
      timeouts: licenseManagerProductLicenseTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_vendor_oracle: {
        value: cdktf.booleanToHclTerraform(this._isVendorOracle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      license_unit: {
        value: cdktf.stringToHclTerraform(this._licenseUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_name: {
        value: cdktf.stringToHclTerraform(this._vendorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      images: {
        value: cdktf.listMapperHcl(licenseManagerProductLicenseImagesToHclTerraform, true)(this._images.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseManagerProductLicenseImagesList",
      },
      timeouts: {
        value: licenseManagerProductLicenseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LicenseManagerProductLicenseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
