// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwimImageFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#id SwimImageFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#parameters SwimImageFile#parameters}
  */
  readonly parameters: SwimImageFileParameters;
}
export interface SwimImageFileItemApplicableDevicesForImage {
}

export function swimImageFileItemApplicableDevicesForImageToTerraform(struct?: SwimImageFileItemApplicableDevicesForImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function swimImageFileItemApplicableDevicesForImageToHclTerraform(struct?: SwimImageFileItemApplicableDevicesForImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SwimImageFileItemApplicableDevicesForImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwimImageFileItemApplicableDevicesForImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwimImageFileItemApplicableDevicesForImage | undefined) {
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

export class SwimImageFileItemApplicableDevicesForImageList extends cdktf.ComplexList {

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
  public get(index: number): SwimImageFileItemApplicableDevicesForImageOutputReference {
    return new SwimImageFileItemApplicableDevicesForImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwimImageFileItemProfileInfo {
}

export function swimImageFileItemProfileInfoToTerraform(struct?: SwimImageFileItemProfileInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function swimImageFileItemProfileInfoToHclTerraform(struct?: SwimImageFileItemProfileInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SwimImageFileItemProfileInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwimImageFileItemProfileInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwimImageFileItemProfileInfo | undefined) {
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

export class SwimImageFileItemProfileInfoList extends cdktf.ComplexList {

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
  public get(index: number): SwimImageFileItemProfileInfoOutputReference {
    return new SwimImageFileItemProfileInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwimImageFileItem {
}

export function swimImageFileItemToTerraform(struct?: SwimImageFileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function swimImageFileItemToHclTerraform(struct?: SwimImageFileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SwimImageFileItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwimImageFileItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwimImageFileItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // applicable_devices_for_image - computed: true, optional: false, required: false
  private _applicableDevicesForImage = new SwimImageFileItemApplicableDevicesForImageList(this, "applicable_devices_for_image", false);
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
  private _profileInfo = new SwimImageFileItemProfileInfoList(this, "profile_info", false);
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

export class SwimImageFileItemList extends cdktf.ComplexList {

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
  public get(index: number): SwimImageFileItemOutputReference {
    return new SwimImageFileItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwimImageFileParameters {
  /**
  * File name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#file_name SwimImageFile#file_name}
  */
  readonly fileName: string;
  /**
  * File absolute path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#file_path SwimImageFile#file_path}
  */
  readonly filePath: string;
  /**
  * isThirdParty query parameter. Third party Image check
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#is_third_party SwimImageFile#is_third_party}
  */
  readonly isThirdParty?: boolean | cdktf.IResolvable;
  /**
  * thirdPartyApplicationType query parameter. Third Party Application Type
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#third_party_application_type SwimImageFile#third_party_application_type}
  */
  readonly thirdPartyApplicationType?: string;
  /**
  * thirdPartyImageFamily query parameter. Third Party image family
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#third_party_image_family SwimImageFile#third_party_image_family}
  */
  readonly thirdPartyImageFamily?: string;
  /**
  * thirdPartyVendor query parameter. Third Party Vendor
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#third_party_vendor SwimImageFile#third_party_vendor}
  */
  readonly thirdPartyVendor?: string;
}

export function swimImageFileParametersToTerraform(struct?: SwimImageFileParametersOutputReference | SwimImageFileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    is_third_party: cdktf.booleanToTerraform(struct!.isThirdParty),
    third_party_application_type: cdktf.stringToTerraform(struct!.thirdPartyApplicationType),
    third_party_image_family: cdktf.stringToTerraform(struct!.thirdPartyImageFamily),
    third_party_vendor: cdktf.stringToTerraform(struct!.thirdPartyVendor),
  }
}


export function swimImageFileParametersToHclTerraform(struct?: SwimImageFileParametersOutputReference | SwimImageFileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_path: {
      value: cdktf.stringToHclTerraform(struct!.filePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_third_party: {
      value: cdktf.booleanToHclTerraform(struct!.isThirdParty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    third_party_application_type: {
      value: cdktf.stringToHclTerraform(struct!.thirdPartyApplicationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    third_party_image_family: {
      value: cdktf.stringToHclTerraform(struct!.thirdPartyImageFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    third_party_vendor: {
      value: cdktf.stringToHclTerraform(struct!.thirdPartyVendor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwimImageFileParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwimImageFileParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._filePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePath = this._filePath;
    }
    if (this._isThirdParty !== undefined) {
      hasAnyValues = true;
      internalValueResult.isThirdParty = this._isThirdParty;
    }
    if (this._thirdPartyApplicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyApplicationType = this._thirdPartyApplicationType;
    }
    if (this._thirdPartyImageFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyImageFamily = this._thirdPartyImageFamily;
    }
    if (this._thirdPartyVendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyVendor = this._thirdPartyVendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwimImageFileParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileName = undefined;
      this._filePath = undefined;
      this._isThirdParty = undefined;
      this._thirdPartyApplicationType = undefined;
      this._thirdPartyImageFamily = undefined;
      this._thirdPartyVendor = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileName = value.fileName;
      this._filePath = value.filePath;
      this._isThirdParty = value.isThirdParty;
      this._thirdPartyApplicationType = value.thirdPartyApplicationType;
      this._thirdPartyImageFamily = value.thirdPartyImageFamily;
      this._thirdPartyVendor = value.thirdPartyVendor;
    }
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // is_third_party - computed: false, optional: true, required: false
  private _isThirdParty?: boolean | cdktf.IResolvable; 
  public get isThirdParty() {
    return this.getBooleanAttribute('is_third_party');
  }
  public set isThirdParty(value: boolean | cdktf.IResolvable) {
    this._isThirdParty = value;
  }
  public resetIsThirdParty() {
    this._isThirdParty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isThirdPartyInput() {
    return this._isThirdParty;
  }

  // third_party_application_type - computed: false, optional: true, required: false
  private _thirdPartyApplicationType?: string; 
  public get thirdPartyApplicationType() {
    return this.getStringAttribute('third_party_application_type');
  }
  public set thirdPartyApplicationType(value: string) {
    this._thirdPartyApplicationType = value;
  }
  public resetThirdPartyApplicationType() {
    this._thirdPartyApplicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyApplicationTypeInput() {
    return this._thirdPartyApplicationType;
  }

  // third_party_image_family - computed: false, optional: true, required: false
  private _thirdPartyImageFamily?: string; 
  public get thirdPartyImageFamily() {
    return this.getStringAttribute('third_party_image_family');
  }
  public set thirdPartyImageFamily(value: string) {
    this._thirdPartyImageFamily = value;
  }
  public resetThirdPartyImageFamily() {
    this._thirdPartyImageFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyImageFamilyInput() {
    return this._thirdPartyImageFamily;
  }

  // third_party_vendor - computed: false, optional: true, required: false
  private _thirdPartyVendor?: string; 
  public get thirdPartyVendor() {
    return this.getStringAttribute('third_party_vendor');
  }
  public set thirdPartyVendor(value: string) {
    this._thirdPartyVendor = value;
  }
  public resetThirdPartyVendor() {
    this._thirdPartyVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyVendorInput() {
    return this._thirdPartyVendor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file dnacenter_swim_image_file}
*/
export class SwimImageFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_swim_image_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwimImageFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwimImageFile to import
  * @param importFromId The id of the existing SwimImageFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwimImageFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_swim_image_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/swim_image_file dnacenter_swim_image_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwimImageFileConfig
  */
  public constructor(scope: Construct, id: string, config: SwimImageFileConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_swim_image_file',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new SwimImageFileItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new SwimImageFileParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: SwimImageFileParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: swimImageFileParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: swimImageFileParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwimImageFileParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
