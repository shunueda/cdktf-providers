// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterSwimImageDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * applicationType query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#application_type DataDnacenterSwimImageDetails#application_type}
  */
  readonly applicationType?: string;
  /**
  * createdTime query parameter. time in milliseconds (epoch format)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#created_time DataDnacenterSwimImageDetails#created_time}
  */
  readonly createdTime?: number;
  /**
  * family query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#family DataDnacenterSwimImageDetails#family}
  */
  readonly family?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#id DataDnacenterSwimImageDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * imageIntegrityStatus query parameter. imageIntegrityStatus FAILURE, UNKNOWN, VERIFIED
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#image_integrity_status DataDnacenterSwimImageDetails#image_integrity_status}
  */
  readonly imageIntegrityStatus?: string;
  /**
  * imageName query parameter. image Name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#image_name DataDnacenterSwimImageDetails#image_name}
  */
  readonly imageName?: string;
  /**
  * imageSeries query parameter. image Series
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#image_series DataDnacenterSwimImageDetails#image_series}
  */
  readonly imageSeries?: string;
  /**
  * imageSizeGreaterThan query parameter. size in bytes
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#image_size_greater_than DataDnacenterSwimImageDetails#image_size_greater_than}
  */
  readonly imageSizeGreaterThan?: number;
  /**
  * imageSizeLesserThan query parameter. size in bytes
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#image_size_lesser_than DataDnacenterSwimImageDetails#image_size_lesser_than}
  */
  readonly imageSizeLesserThan?: number;
  /**
  * imageUuid query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#image_uuid DataDnacenterSwimImageDetails#image_uuid}
  */
  readonly imageUuid?: string;
  /**
  * isCCOLatest query parameter. is latest from cisco.com
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#is_cco_latest DataDnacenterSwimImageDetails#is_cco_latest}
  */
  readonly isCcoLatest?: boolean | cdktf.IResolvable;
  /**
  * isCCORecommended query parameter. is recommended from cisco.com
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#is_cco_recommended DataDnacenterSwimImageDetails#is_cco_recommended}
  */
  readonly isCcoRecommended?: boolean | cdktf.IResolvable;
  /**
  * isTaggedGolden query parameter. is Tagged Golden
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#is_tagged_golden DataDnacenterSwimImageDetails#is_tagged_golden}
  */
  readonly isTaggedGolden?: boolean | cdktf.IResolvable;
  /**
  * limit query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#limit DataDnacenterSwimImageDetails#limit}
  */
  readonly limit?: number;
  /**
  * name query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#name DataDnacenterSwimImageDetails#name}
  */
  readonly name?: string;
  /**
  * offset query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#offset DataDnacenterSwimImageDetails#offset}
  */
  readonly offset?: number;
  /**
  * sortBy query parameter. sort results by this field
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#sort_by DataDnacenterSwimImageDetails#sort_by}
  */
  readonly sortBy?: string;
  /**
  * sortOrder query parameter. sort order 'asc' or 'des'. Default is asc
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#sort_order DataDnacenterSwimImageDetails#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * version query parameter. software Image Version
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#version DataDnacenterSwimImageDetails#version}
  */
  readonly version?: string;
}
export interface DataDnacenterSwimImageDetailsItemsApplicableDevicesForImage {
}

export function dataDnacenterSwimImageDetailsItemsApplicableDevicesForImageToTerraform(struct?: DataDnacenterSwimImageDetailsItemsApplicableDevicesForImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSwimImageDetailsItemsApplicableDevicesForImageToHclTerraform(struct?: DataDnacenterSwimImageDetailsItemsApplicableDevicesForImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSwimImageDetailsItemsApplicableDevicesForImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSwimImageDetailsItemsApplicableDevicesForImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSwimImageDetailsItemsApplicableDevicesForImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // mdf_id - computed: true, optional: false, required: false
  public get mdfId() {
    return this.getStringAttribute('mdf_id');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getListAttribute('product_id');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }
}

export class DataDnacenterSwimImageDetailsItemsApplicableDevicesForImageList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSwimImageDetailsItemsApplicableDevicesForImageOutputReference {
    return new DataDnacenterSwimImageDetailsItemsApplicableDevicesForImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSwimImageDetailsItemsProfileInfo {
}

export function dataDnacenterSwimImageDetailsItemsProfileInfoToTerraform(struct?: DataDnacenterSwimImageDetailsItemsProfileInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSwimImageDetailsItemsProfileInfoToHclTerraform(struct?: DataDnacenterSwimImageDetailsItemsProfileInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSwimImageDetailsItemsProfileInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSwimImageDetailsItemsProfileInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSwimImageDetailsItemsProfileInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // extended_attributes - computed: true, optional: false, required: false
  public get extendedAttributes() {
    return this.getStringAttribute('extended_attributes');
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
  }

  // product_type - computed: true, optional: false, required: false
  public get productType() {
    return this.getStringAttribute('product_type');
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // shares - computed: true, optional: false, required: false
  public get shares() {
    return this.getNumberAttribute('shares');
  }

  // v_cpu - computed: true, optional: false, required: false
  public get vCpu() {
    return this.getNumberAttribute('v_cpu');
  }
}

export class DataDnacenterSwimImageDetailsItemsProfileInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSwimImageDetailsItemsProfileInfoOutputReference {
    return new DataDnacenterSwimImageDetailsItemsProfileInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterSwimImageDetailsItems {
}

export function dataDnacenterSwimImageDetailsItemsToTerraform(struct?: DataDnacenterSwimImageDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSwimImageDetailsItemsToHclTerraform(struct?: DataDnacenterSwimImageDetailsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSwimImageDetailsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSwimImageDetailsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSwimImageDetailsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_devices_for_image - computed: true, optional: false, required: false
  private _applicableDevicesForImage = new DataDnacenterSwimImageDetailsItemsApplicableDevicesForImageList(this, "applicable_devices_for_image", false);
  public get applicableDevicesForImage() {
    return this._applicableDevicesForImage;
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // extended_attributes - computed: true, optional: false, required: false
  public get extendedAttributes() {
    return this.getStringAttribute('extended_attributes');
  }

  // family - computed: true, optional: false, required: false
  public get family() {
    return this.getStringAttribute('family');
  }

  // feature - computed: true, optional: false, required: false
  public get feature() {
    return this.getStringAttribute('feature');
  }

  // file_service_id - computed: true, optional: false, required: false
  public get fileServiceId() {
    return this.getStringAttribute('file_service_id');
  }

  // file_size - computed: true, optional: false, required: false
  public get fileSize() {
    return this.getStringAttribute('file_size');
  }

  // image_integrity_status - computed: true, optional: false, required: false
  public get imageIntegrityStatus() {
    return this.getStringAttribute('image_integrity_status');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // image_series - computed: true, optional: false, required: false
  public get imageSeries() {
    return this.getListAttribute('image_series');
  }

  // image_source - computed: true, optional: false, required: false
  public get imageSource() {
    return this.getStringAttribute('image_source');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // image_uuid - computed: true, optional: false, required: false
  public get imageUuid() {
    return this.getStringAttribute('image_uuid');
  }

  // import_source_type - computed: true, optional: false, required: false
  public get importSourceType() {
    return this.getStringAttribute('import_source_type');
  }

  // is_tagged_golden - computed: true, optional: false, required: false
  public get isTaggedGolden() {
    return this.getStringAttribute('is_tagged_golden');
  }

  // md5_checksum - computed: true, optional: false, required: false
  public get md5Checksum() {
    return this.getStringAttribute('md5_checksum');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // profile_info - computed: true, optional: false, required: false
  private _profileInfo = new DataDnacenterSwimImageDetailsItemsProfileInfoList(this, "profile_info", false);
  public get profileInfo() {
    return this._profileInfo;
  }

  // sha_check_sum - computed: true, optional: false, required: false
  public get shaCheckSum() {
    return this.getStringAttribute('sha_check_sum');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataDnacenterSwimImageDetailsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSwimImageDetailsItemsOutputReference {
    return new DataDnacenterSwimImageDetailsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details dnacenter_swim_image_details}
*/
export class DataDnacenterSwimImageDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_swim_image_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterSwimImageDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterSwimImageDetails to import
  * @param importFromId The id of the existing DataDnacenterSwimImageDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterSwimImageDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_swim_image_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/swim_image_details dnacenter_swim_image_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterSwimImageDetailsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterSwimImageDetailsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_swim_image_details',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationType = config.applicationType;
    this._createdTime = config.createdTime;
    this._family = config.family;
    this._id = config.id;
    this._imageIntegrityStatus = config.imageIntegrityStatus;
    this._imageName = config.imageName;
    this._imageSeries = config.imageSeries;
    this._imageSizeGreaterThan = config.imageSizeGreaterThan;
    this._imageSizeLesserThan = config.imageSizeLesserThan;
    this._imageUuid = config.imageUuid;
    this._isCcoLatest = config.isCcoLatest;
    this._isCcoRecommended = config.isCcoRecommended;
    this._isTaggedGolden = config.isTaggedGolden;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_type - computed: false, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // created_time - computed: false, optional: true, required: false
  private _createdTime?: number; 
  public get createdTime() {
    return this.getNumberAttribute('created_time');
  }
  public set createdTime(value: number) {
    this._createdTime = value;
  }
  public resetCreatedTime() {
    this._createdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimeInput() {
    return this._createdTime;
  }

  // family - computed: false, optional: true, required: false
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
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

  // image_integrity_status - computed: false, optional: true, required: false
  private _imageIntegrityStatus?: string; 
  public get imageIntegrityStatus() {
    return this.getStringAttribute('image_integrity_status');
  }
  public set imageIntegrityStatus(value: string) {
    this._imageIntegrityStatus = value;
  }
  public resetImageIntegrityStatus() {
    this._imageIntegrityStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIntegrityStatusInput() {
    return this._imageIntegrityStatus;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_series - computed: false, optional: true, required: false
  private _imageSeries?: string; 
  public get imageSeries() {
    return this.getStringAttribute('image_series');
  }
  public set imageSeries(value: string) {
    this._imageSeries = value;
  }
  public resetImageSeries() {
    this._imageSeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSeriesInput() {
    return this._imageSeries;
  }

  // image_size_greater_than - computed: false, optional: true, required: false
  private _imageSizeGreaterThan?: number; 
  public get imageSizeGreaterThan() {
    return this.getNumberAttribute('image_size_greater_than');
  }
  public set imageSizeGreaterThan(value: number) {
    this._imageSizeGreaterThan = value;
  }
  public resetImageSizeGreaterThan() {
    this._imageSizeGreaterThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSizeGreaterThanInput() {
    return this._imageSizeGreaterThan;
  }

  // image_size_lesser_than - computed: false, optional: true, required: false
  private _imageSizeLesserThan?: number; 
  public get imageSizeLesserThan() {
    return this.getNumberAttribute('image_size_lesser_than');
  }
  public set imageSizeLesserThan(value: number) {
    this._imageSizeLesserThan = value;
  }
  public resetImageSizeLesserThan() {
    this._imageSizeLesserThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSizeLesserThanInput() {
    return this._imageSizeLesserThan;
  }

  // image_uuid - computed: false, optional: true, required: false
  private _imageUuid?: string; 
  public get imageUuid() {
    return this.getStringAttribute('image_uuid');
  }
  public set imageUuid(value: string) {
    this._imageUuid = value;
  }
  public resetImageUuid() {
    this._imageUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUuidInput() {
    return this._imageUuid;
  }

  // is_cco_latest - computed: false, optional: true, required: false
  private _isCcoLatest?: boolean | cdktf.IResolvable; 
  public get isCcoLatest() {
    return this.getBooleanAttribute('is_cco_latest');
  }
  public set isCcoLatest(value: boolean | cdktf.IResolvable) {
    this._isCcoLatest = value;
  }
  public resetIsCcoLatest() {
    this._isCcoLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCcoLatestInput() {
    return this._isCcoLatest;
  }

  // is_cco_recommended - computed: false, optional: true, required: false
  private _isCcoRecommended?: boolean | cdktf.IResolvable; 
  public get isCcoRecommended() {
    return this.getBooleanAttribute('is_cco_recommended');
  }
  public set isCcoRecommended(value: boolean | cdktf.IResolvable) {
    this._isCcoRecommended = value;
  }
  public resetIsCcoRecommended() {
    this._isCcoRecommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCcoRecommendedInput() {
    return this._isCcoRecommended;
  }

  // is_tagged_golden - computed: false, optional: true, required: false
  private _isTaggedGolden?: boolean | cdktf.IResolvable; 
  public get isTaggedGolden() {
    return this.getBooleanAttribute('is_tagged_golden');
  }
  public set isTaggedGolden(value: boolean | cdktf.IResolvable) {
    this._isTaggedGolden = value;
  }
  public resetIsTaggedGolden() {
    this._isTaggedGolden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTaggedGoldenInput() {
    return this._isTaggedGolden;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterSwimImageDetailsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_type: cdktf.stringToTerraform(this._applicationType),
      created_time: cdktf.numberToTerraform(this._createdTime),
      family: cdktf.stringToTerraform(this._family),
      id: cdktf.stringToTerraform(this._id),
      image_integrity_status: cdktf.stringToTerraform(this._imageIntegrityStatus),
      image_name: cdktf.stringToTerraform(this._imageName),
      image_series: cdktf.stringToTerraform(this._imageSeries),
      image_size_greater_than: cdktf.numberToTerraform(this._imageSizeGreaterThan),
      image_size_lesser_than: cdktf.numberToTerraform(this._imageSizeLesserThan),
      image_uuid: cdktf.stringToTerraform(this._imageUuid),
      is_cco_latest: cdktf.booleanToTerraform(this._isCcoLatest),
      is_cco_recommended: cdktf.booleanToTerraform(this._isCcoRecommended),
      is_tagged_golden: cdktf.booleanToTerraform(this._isTaggedGolden),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_type: {
        value: cdktf.stringToHclTerraform(this._applicationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_time: {
        value: cdktf.numberToHclTerraform(this._createdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      family: {
        value: cdktf.stringToHclTerraform(this._family),
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
      image_integrity_status: {
        value: cdktf.stringToHclTerraform(this._imageIntegrityStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_series: {
        value: cdktf.stringToHclTerraform(this._imageSeries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_size_greater_than: {
        value: cdktf.numberToHclTerraform(this._imageSizeGreaterThan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_size_lesser_than: {
        value: cdktf.numberToHclTerraform(this._imageSizeLesserThan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      image_uuid: {
        value: cdktf.stringToHclTerraform(this._imageUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_cco_latest: {
        value: cdktf.booleanToHclTerraform(this._isCcoLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_cco_recommended: {
        value: cdktf.booleanToHclTerraform(this._isCcoRecommended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_tagged_golden: {
        value: cdktf.booleanToHclTerraform(this._isTaggedGolden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
