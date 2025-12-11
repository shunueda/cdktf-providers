// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceCatalogPrivateApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}
  */
  readonly logoFileBase64Encoded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}
  */
  readonly longDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}
  */
  readonly shortDescription: string;
  /**
  * package_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#package_details ServiceCatalogPrivateApplication#package_details}
  */
  readonly packageDetails: ServiceCatalogPrivateApplicationPackageDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#timeouts ServiceCatalogPrivateApplication#timeouts}
  */
  readonly timeouts?: ServiceCatalogPrivateApplicationTimeouts;
}
export interface ServiceCatalogPrivateApplicationLogo {
}

export function serviceCatalogPrivateApplicationLogoToTerraform(struct?: ServiceCatalogPrivateApplicationLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serviceCatalogPrivateApplicationLogoToHclTerraform(struct?: ServiceCatalogPrivateApplicationLogo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServiceCatalogPrivateApplicationLogoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCatalogPrivateApplicationLogo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCatalogPrivateApplicationLogo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_url - computed: true, optional: false, required: false
  public get contentUrl() {
    return this.getStringAttribute('content_url');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // mime_type - computed: true, optional: false, required: false
  public get mimeType() {
    return this.getStringAttribute('mime_type');
  }
}

export class ServiceCatalogPrivateApplicationLogoList extends cdktf.ComplexList {

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
  public get(index: number): ServiceCatalogPrivateApplicationLogoOutputReference {
    return new ServiceCatalogPrivateApplicationLogoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCatalogPrivateApplicationPackageDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}
  */
  readonly packageType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}
  */
  readonly version: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}
  */
  readonly zipFileBase64Encoded: string;
}

export function serviceCatalogPrivateApplicationPackageDetailsToTerraform(struct?: ServiceCatalogPrivateApplicationPackageDetailsOutputReference | ServiceCatalogPrivateApplicationPackageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_type: cdktf.stringToTerraform(struct!.packageType),
    version: cdktf.stringToTerraform(struct!.version),
    zip_file_base64encoded: cdktf.stringToTerraform(struct!.zipFileBase64Encoded),
  }
}


export function serviceCatalogPrivateApplicationPackageDetailsToHclTerraform(struct?: ServiceCatalogPrivateApplicationPackageDetailsOutputReference | ServiceCatalogPrivateApplicationPackageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_type: {
      value: cdktf.stringToHclTerraform(struct!.packageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip_file_base64encoded: {
      value: cdktf.stringToHclTerraform(struct!.zipFileBase64Encoded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCatalogPrivateApplicationPackageDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceCatalogPrivateApplicationPackageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageType = this._packageType;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._zipFileBase64Encoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.zipFileBase64Encoded = this._zipFileBase64Encoded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCatalogPrivateApplicationPackageDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packageType = undefined;
      this._version = undefined;
      this._zipFileBase64Encoded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packageType = value.packageType;
      this._version = value.version;
      this._zipFileBase64Encoded = value.zipFileBase64Encoded;
    }
  }

  // package_type - computed: false, optional: false, required: true
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zip_file_base64encoded - computed: false, optional: false, required: true
  private _zipFileBase64Encoded?: string; 
  public get zipFileBase64Encoded() {
    return this.getStringAttribute('zip_file_base64encoded');
  }
  public set zipFileBase64Encoded(value: string) {
    this._zipFileBase64Encoded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zipFileBase64EncodedInput() {
    return this._zipFileBase64Encoded;
  }
}
export interface ServiceCatalogPrivateApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}
  */
  readonly update?: string;
}

export function serviceCatalogPrivateApplicationTimeoutsToTerraform(struct?: ServiceCatalogPrivateApplicationTimeouts | cdktf.IResolvable): any {
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


export function serviceCatalogPrivateApplicationTimeoutsToHclTerraform(struct?: ServiceCatalogPrivateApplicationTimeouts | cdktf.IResolvable): any {
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

export class ServiceCatalogPrivateApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceCatalogPrivateApplicationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceCatalogPrivateApplicationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application oci_service_catalog_private_application}
*/
export class ServiceCatalogPrivateApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_catalog_private_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCatalogPrivateApplication to import
  * @param importFromId The id of the existing ServiceCatalogPrivateApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCatalogPrivateApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_catalog_private_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/service_catalog_private_application oci_service_catalog_private_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceCatalogPrivateApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceCatalogPrivateApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_service_catalog_private_application',
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
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._logoFileBase64Encoded = config.logoFileBase64Encoded;
    this._longDescription = config.longDescription;
    this._shortDescription = config.shortDescription;
    this._packageDetails.internalValue = config.packageDetails;
    this._timeouts.internalValue = config.timeouts;
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

  // logo - computed: true, optional: false, required: false
  private _logo = new ServiceCatalogPrivateApplicationLogoList(this, "logo", false);
  public get logo() {
    return this._logo;
  }

  // logo_file_base64encoded - computed: true, optional: true, required: false
  private _logoFileBase64Encoded?: string; 
  public get logoFileBase64Encoded() {
    return this.getStringAttribute('logo_file_base64encoded');
  }
  public set logoFileBase64Encoded(value: string) {
    this._logoFileBase64Encoded = value;
  }
  public resetLogoFileBase64Encoded() {
    this._logoFileBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoFileBase64EncodedInput() {
    return this._logoFileBase64Encoded;
  }

  // long_description - computed: true, optional: true, required: false
  private _longDescription?: string; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription;
  }

  // package_type - computed: true, optional: false, required: false
  public get packageType() {
    return this.getStringAttribute('package_type');
  }

  // short_description - computed: false, optional: false, required: true
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // package_details - computed: false, optional: false, required: true
  private _packageDetails = new ServiceCatalogPrivateApplicationPackageDetailsOutputReference(this, "package_details");
  public get packageDetails() {
    return this._packageDetails;
  }
  public putPackageDetails(value: ServiceCatalogPrivateApplicationPackageDetails) {
    this._packageDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageDetailsInput() {
    return this._packageDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceCatalogPrivateApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceCatalogPrivateApplicationTimeouts) {
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
      logo_file_base64encoded: cdktf.stringToTerraform(this._logoFileBase64Encoded),
      long_description: cdktf.stringToTerraform(this._longDescription),
      short_description: cdktf.stringToTerraform(this._shortDescription),
      package_details: serviceCatalogPrivateApplicationPackageDetailsToTerraform(this._packageDetails.internalValue),
      timeouts: serviceCatalogPrivateApplicationTimeoutsToTerraform(this._timeouts.internalValue),
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
      logo_file_base64encoded: {
        value: cdktf.stringToHclTerraform(this._logoFileBase64Encoded),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      long_description: {
        value: cdktf.stringToHclTerraform(this._longDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_description: {
        value: cdktf.stringToHclTerraform(this._shortDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_details: {
        value: serviceCatalogPrivateApplicationPackageDetailsToHclTerraform(this._packageDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCatalogPrivateApplicationPackageDetailsList",
      },
      timeouts: {
        value: serviceCatalogPrivateApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceCatalogPrivateApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
