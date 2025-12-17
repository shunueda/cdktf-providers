// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_patch_name Image#controller_patch_name}
  */
  readonly controllerPatchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_patch_ref Image#controller_patch_ref}
  */
  readonly controllerPatchRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#duration Image#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#end_time Image#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#fips_mode_transition_applicable Image#fips_mode_transition_applicable}
  */
  readonly fipsModeTransitionApplicable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#id Image#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#name Image#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#progress Image#progress}
  */
  readonly progress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_patch_name Image#se_patch_name}
  */
  readonly sePatchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_patch_ref Image#se_patch_ref}
  */
  readonly sePatchRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#start_time Image#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#tasks_completed Image#tasks_completed}
  */
  readonly tasksCompleted?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#tenant_ref Image#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#total_tasks Image#total_tasks}
  */
  readonly totalTasks?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#type Image#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#uber_bundle Image#uber_bundle}
  */
  readonly uberBundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#uuid Image#uuid}
  */
  readonly uuid?: string;
  /**
  * cloud_info_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#cloud_info_values Image#cloud_info_values}
  */
  readonly cloudInfoValues?: ImageCloudInfoValues[] | cdktf.IResolvable;
  /**
  * controller_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_info Image#controller_info}
  */
  readonly controllerInfo?: ImageControllerInfo[] | cdktf.IResolvable;
  /**
  * events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#events Image#events}
  */
  readonly events?: ImageEvents[] | cdktf.IResolvable;
  /**
  * img_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#img_state Image#img_state}
  */
  readonly imgState?: ImageImgState[] | cdktf.IResolvable;
  /**
  * migrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#migrations Image#migrations}
  */
  readonly migrations?: ImageMigrations[] | cdktf.IResolvable;
  /**
  * se_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_info Image#se_info}
  */
  readonly seInfo?: ImageSeInfo[] | cdktf.IResolvable;
}
export interface ImageCloudInfoValuesCloudDataValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#key Image#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#values Image#values}
  */
  readonly values?: string[];
}

export function imageCloudInfoValuesCloudDataValuesToTerraform(struct?: ImageCloudInfoValuesCloudDataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function imageCloudInfoValuesCloudDataValuesToHclTerraform(struct?: ImageCloudInfoValuesCloudDataValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageCloudInfoValuesCloudDataValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageCloudInfoValuesCloudDataValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageCloudInfoValuesCloudDataValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ImageCloudInfoValuesCloudDataValuesList extends cdktf.ComplexList {
  public internalValue? : ImageCloudInfoValuesCloudDataValues[] | cdktf.IResolvable

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
  public get(index: number): ImageCloudInfoValuesCloudDataValuesOutputReference {
    return new ImageCloudInfoValuesCloudDataValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageCloudInfoValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#cloud_name Image#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * cloud_data_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#cloud_data_values Image#cloud_data_values}
  */
  readonly cloudDataValues?: ImageCloudInfoValuesCloudDataValues[] | cdktf.IResolvable;
}

export function imageCloudInfoValuesToTerraform(struct?: ImageCloudInfoValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_name: cdktf.stringToTerraform(struct!.cloudName),
    cloud_data_values: cdktf.listMapper(imageCloudInfoValuesCloudDataValuesToTerraform, true)(struct!.cloudDataValues),
  }
}


export function imageCloudInfoValuesToHclTerraform(struct?: ImageCloudInfoValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_data_values: {
      value: cdktf.listMapperHcl(imageCloudInfoValuesCloudDataValuesToHclTerraform, true)(struct!.cloudDataValues),
      isBlock: true,
      type: "list",
      storageClassType: "ImageCloudInfoValuesCloudDataValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageCloudInfoValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageCloudInfoValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudName = this._cloudName;
    }
    if (this._cloudDataValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudDataValues = this._cloudDataValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageCloudInfoValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudName = undefined;
      this._cloudDataValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudName = value.cloudName;
      this._cloudDataValues.internalValue = value.cloudDataValues;
    }
  }

  // cloud_name - computed: true, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // cloud_data_values - computed: false, optional: true, required: false
  private _cloudDataValues = new ImageCloudInfoValuesCloudDataValuesList(this, "cloud_data_values", false);
  public get cloudDataValues() {
    return this._cloudDataValues;
  }
  public putCloudDataValues(value: ImageCloudInfoValuesCloudDataValues[] | cdktf.IResolvable) {
    this._cloudDataValues.internalValue = value;
  }
  public resetCloudDataValues() {
    this._cloudDataValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudDataValuesInput() {
    return this._cloudDataValues.internalValue;
  }
}

export class ImageCloudInfoValuesList extends cdktf.ComplexList {
  public internalValue? : ImageCloudInfoValues[] | cdktf.IResolvable

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
  public get(index: number): ImageCloudInfoValuesOutputReference {
    return new ImageCloudInfoValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageControllerInfoBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#build_no Image#build_no}
  */
  readonly buildNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#date Image#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#min_version Image#min_version}
  */
  readonly minVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch_version Image#patch_version}
  */
  readonly patchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#product Image#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#product_name Image#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#remote_image_ref Image#remote_image_ref}
  */
  readonly remoteImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#tag Image#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#version Image#version}
  */
  readonly version?: string;
}

export function imageControllerInfoBuildToTerraform(struct?: ImageControllerInfoBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_no: cdktf.stringToTerraform(struct!.buildNo),
    date: cdktf.stringToTerraform(struct!.date),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    patch_version: cdktf.stringToTerraform(struct!.patchVersion),
    product: cdktf.stringToTerraform(struct!.product),
    product_name: cdktf.stringToTerraform(struct!.productName),
    remote_image_ref: cdktf.stringToTerraform(struct!.remoteImageRef),
    tag: cdktf.stringToTerraform(struct!.tag),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function imageControllerInfoBuildToHclTerraform(struct?: ImageControllerInfoBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_no: {
      value: cdktf.stringToHclTerraform(struct!.buildNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_version: {
      value: cdktf.stringToHclTerraform(struct!.patchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_name: {
      value: cdktf.stringToHclTerraform(struct!.productName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_image_ref: {
      value: cdktf.stringToHclTerraform(struct!.remoteImageRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageControllerInfoBuildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageControllerInfoBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildNo = this._buildNo;
    }
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._patchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersion = this._patchVersion;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._productName !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName;
    }
    if (this._remoteImageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteImageRef = this._remoteImageRef;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageControllerInfoBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildNo = undefined;
      this._date = undefined;
      this._minVersion = undefined;
      this._patchVersion = undefined;
      this._product = undefined;
      this._productName = undefined;
      this._remoteImageRef = undefined;
      this._tag = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildNo = value.buildNo;
      this._date = value.date;
      this._minVersion = value.minVersion;
      this._patchVersion = value.patchVersion;
      this._product = value.product;
      this._productName = value.productName;
      this._remoteImageRef = value.remoteImageRef;
      this._tag = value.tag;
      this._version = value.version;
    }
  }

  // build_no - computed: true, optional: true, required: false
  private _buildNo?: string; 
  public get buildNo() {
    return this.getStringAttribute('build_no');
  }
  public set buildNo(value: string) {
    this._buildNo = value;
  }
  public resetBuildNo() {
    this._buildNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildNoInput() {
    return this._buildNo;
  }

  // date - computed: true, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // min_version - computed: true, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
  }

  // product - computed: true, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // remote_image_ref - computed: true, optional: true, required: false
  private _remoteImageRef?: string; 
  public get remoteImageRef() {
    return this.getStringAttribute('remote_image_ref');
  }
  public set remoteImageRef(value: string) {
    this._remoteImageRef = value;
  }
  public resetRemoteImageRef() {
    this._remoteImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteImageRefInput() {
    return this._remoteImageRef;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // version - computed: true, optional: true, required: false
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
}

export class ImageControllerInfoBuildList extends cdktf.ComplexList {
  public internalValue? : ImageControllerInfoBuild[] | cdktf.IResolvable

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
  public get(index: number): ImageControllerInfoBuildOutputReference {
    return new ImageControllerInfoBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageControllerInfoPatchRebootListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch_version Image#patch_version}
  */
  readonly patchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#reboot Image#reboot}
  */
  readonly reboot?: string;
}

export function imageControllerInfoPatchRebootListStructToTerraform(struct?: ImageControllerInfoPatchRebootListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_version: cdktf.stringToTerraform(struct!.patchVersion),
    reboot: cdktf.stringToTerraform(struct!.reboot),
  }
}


export function imageControllerInfoPatchRebootListStructToHclTerraform(struct?: ImageControllerInfoPatchRebootListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_version: {
      value: cdktf.stringToHclTerraform(struct!.patchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageControllerInfoPatchRebootListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageControllerInfoPatchRebootListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersion = this._patchVersion;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageControllerInfoPatchRebootListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patchVersion = undefined;
      this._reboot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patchVersion = value.patchVersion;
      this._reboot = value.reboot;
    }
  }

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
  }

  // reboot - computed: true, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }
}

export class ImageControllerInfoPatchRebootListStructList extends cdktf.ComplexList {
  public internalValue? : ImageControllerInfoPatchRebootListStruct[] | cdktf.IResolvable

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
  public get(index: number): ImageControllerInfoPatchRebootListStructOutputReference {
    return new ImageControllerInfoPatchRebootListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageControllerInfoPatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch_type Image#patch_type}
  */
  readonly patchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#reboot Image#reboot}
  */
  readonly reboot?: string;
  /**
  * reboot_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#reboot_list Image#reboot_list}
  */
  readonly rebootList?: ImageControllerInfoPatchRebootListStruct[] | cdktf.IResolvable;
}

export function imageControllerInfoPatchToTerraform(struct?: ImageControllerInfoPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_type: cdktf.stringToTerraform(struct!.patchType),
    reboot: cdktf.stringToTerraform(struct!.reboot),
    reboot_list: cdktf.listMapper(imageControllerInfoPatchRebootListStructToTerraform, true)(struct!.rebootList),
  }
}


export function imageControllerInfoPatchToHclTerraform(struct?: ImageControllerInfoPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_type: {
      value: cdktf.stringToHclTerraform(struct!.patchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot_list: {
      value: cdktf.listMapperHcl(imageControllerInfoPatchRebootListStructToHclTerraform, true)(struct!.rebootList),
      isBlock: true,
      type: "list",
      storageClassType: "ImageControllerInfoPatchRebootListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageControllerInfoPatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageControllerInfoPatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchType = this._patchType;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    if (this._rebootList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootList = this._rebootList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageControllerInfoPatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patchType = undefined;
      this._reboot = undefined;
      this._rebootList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patchType = value.patchType;
      this._reboot = value.reboot;
      this._rebootList.internalValue = value.rebootList;
    }
  }

  // patch_type - computed: true, optional: true, required: false
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  public resetPatchType() {
    this._patchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
  }

  // reboot - computed: true, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // reboot_list - computed: false, optional: true, required: false
  private _rebootList = new ImageControllerInfoPatchRebootListStructList(this, "reboot_list", false);
  public get rebootList() {
    return this._rebootList;
  }
  public putRebootList(value: ImageControllerInfoPatchRebootListStruct[] | cdktf.IResolvable) {
    this._rebootList.internalValue = value;
  }
  public resetRebootList() {
    this._rebootList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootListInput() {
    return this._rebootList.internalValue;
  }
}

export class ImageControllerInfoPatchList extends cdktf.ComplexList {
  public internalValue? : ImageControllerInfoPatch[] | cdktf.IResolvable

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
  public get(index: number): ImageControllerInfoPatchOutputReference {
    return new ImageControllerInfoPatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageControllerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#hash Image#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#path Image#path}
  */
  readonly path?: string;
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#build Image#build}
  */
  readonly buildAttribute?: ImageControllerInfoBuild[] | cdktf.IResolvable;
  /**
  * patch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch Image#patch}
  */
  readonly patch?: ImageControllerInfoPatch[] | cdktf.IResolvable;
}

export function imageControllerInfoToTerraform(struct?: ImageControllerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    path: cdktf.stringToTerraform(struct!.path),
    build: cdktf.listMapper(imageControllerInfoBuildToTerraform, true)(struct!.buildAttribute),
    patch: cdktf.listMapper(imageControllerInfoPatchToTerraform, true)(struct!.patch),
  }
}


export function imageControllerInfoToHclTerraform(struct?: ImageControllerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build: {
      value: cdktf.listMapperHcl(imageControllerInfoBuildToHclTerraform, true)(struct!.buildAttribute),
      isBlock: true,
      type: "set",
      storageClassType: "ImageControllerInfoBuildList",
    },
    patch: {
      value: cdktf.listMapperHcl(imageControllerInfoPatchToHclTerraform, true)(struct!.patch),
      isBlock: true,
      type: "set",
      storageClassType: "ImageControllerInfoPatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageControllerInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageControllerInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._build?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build?.internalValue;
    }
    if (this._patch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageControllerInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._path = undefined;
      this._build.internalValue = undefined;
      this._patch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._path = value.path;
      this._build.internalValue = value.buildAttribute;
      this._patch.internalValue = value.patch;
    }
  }

  // hash - computed: true, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // build - computed: false, optional: true, required: false
  private _build = new ImageControllerInfoBuildList(this, "build", true);
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: ImageControllerInfoBuild[] | cdktf.IResolvable) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // patch - computed: false, optional: true, required: false
  private _patch = new ImageControllerInfoPatchList(this, "patch", true);
  public get patch() {
    return this._patch;
  }
  public putPatch(value: ImageControllerInfoPatch[] | cdktf.IResolvable) {
    this._patch.internalValue = value;
  }
  public resetPatch() {
    this._patch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch.internalValue;
  }
}

export class ImageControllerInfoList extends cdktf.ComplexList {
  public internalValue? : ImageControllerInfo[] | cdktf.IResolvable

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
  public get(index: number): ImageControllerInfoOutputReference {
    return new ImageControllerInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageEventsNodesEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#addr Image#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#type Image#type}
  */
  readonly type: string;
}

export function imageEventsNodesEventsIpToTerraform(struct?: ImageEventsNodesEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function imageEventsNodesEventsIpToHclTerraform(struct?: ImageEventsNodesEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageEventsNodesEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageEventsNodesEventsIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageEventsNodesEventsIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
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
}

export class ImageEventsNodesEventsIpList extends cdktf.ComplexList {
  public internalValue? : ImageEventsNodesEventsIp[] | cdktf.IResolvable

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
  public get(index: number): ImageEventsNodesEventsIpOutputReference {
    return new ImageEventsNodesEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageEventsNodesEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#duration Image#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#end_time Image#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#message Image#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#start_time Image#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#status Image#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#sub_tasks Image#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#ip Image#ip}
  */
  readonly ip?: ImageEventsNodesEventsIp[] | cdktf.IResolvable;
}

export function imageEventsNodesEventsToTerraform(struct?: ImageEventsNodesEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    message: cdktf.stringToTerraform(struct!.message),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    sub_tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subTasks),
    ip: cdktf.listMapper(imageEventsNodesEventsIpToTerraform, true)(struct!.ip),
  }
}


export function imageEventsNodesEventsToHclTerraform(struct?: ImageEventsNodesEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_tasks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subTasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.listMapperHcl(imageEventsNodesEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "ImageEventsNodesEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageEventsNodesEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageEventsNodesEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTasks = this._subTasks;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageEventsNodesEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._message = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._subTasks = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._message = value.message;
      this._startTime = value.startTime;
      this._status = value.status;
      this._subTasks = value.subTasks;
      this._ip.internalValue = value.ip;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sub_tasks - computed: false, optional: true, required: false
  private _subTasks?: string[]; 
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }
  public set subTasks(value: string[]) {
    this._subTasks = value;
  }
  public resetSubTasks() {
    this._subTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTasksInput() {
    return this._subTasks;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ImageEventsNodesEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ImageEventsNodesEventsIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ImageEventsNodesEventsList extends cdktf.ComplexList {
  public internalValue? : ImageEventsNodesEvents[] | cdktf.IResolvable

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
  public get(index: number): ImageEventsNodesEventsOutputReference {
    return new ImageEventsNodesEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageEventsSubEventsIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#addr Image#addr}
  */
  readonly addr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#type Image#type}
  */
  readonly type: string;
}

export function imageEventsSubEventsIpToTerraform(struct?: ImageEventsSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function imageEventsSubEventsIpToHclTerraform(struct?: ImageEventsSubEventsIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageEventsSubEventsIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageEventsSubEventsIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageEventsSubEventsIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addr = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addr = value.addr;
      this._type = value.type;
    }
  }

  // addr - computed: false, optional: false, required: true
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

  // type - computed: false, optional: false, required: true
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
}

export class ImageEventsSubEventsIpList extends cdktf.ComplexList {
  public internalValue? : ImageEventsSubEventsIp[] | cdktf.IResolvable

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
  public get(index: number): ImageEventsSubEventsIpOutputReference {
    return new ImageEventsSubEventsIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageEventsSubEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#duration Image#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#end_time Image#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#message Image#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#start_time Image#start_time}
  */
  readonly startTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#status Image#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#sub_tasks Image#sub_tasks}
  */
  readonly subTasks?: string[];
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#ip Image#ip}
  */
  readonly ip?: ImageEventsSubEventsIp[] | cdktf.IResolvable;
}

export function imageEventsSubEventsToTerraform(struct?: ImageEventsSubEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    message: cdktf.stringToTerraform(struct!.message),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    status: cdktf.stringToTerraform(struct!.status),
    sub_tasks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subTasks),
    ip: cdktf.listMapper(imageEventsSubEventsIpToTerraform, true)(struct!.ip),
  }
}


export function imageEventsSubEventsToHclTerraform(struct?: ImageEventsSubEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_tasks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subTasks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip: {
      value: cdktf.listMapperHcl(imageEventsSubEventsIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "set",
      storageClassType: "ImageEventsSubEventsIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageEventsSubEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageEventsSubEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._subTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTasks = this._subTasks;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageEventsSubEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._endTime = undefined;
      this._message = undefined;
      this._startTime = undefined;
      this._status = undefined;
      this._subTasks = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._endTime = value.endTime;
      this._message = value.message;
      this._startTime = value.startTime;
      this._status = value.status;
      this._subTasks = value.subTasks;
      this._ip.internalValue = value.ip;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // sub_tasks - computed: false, optional: true, required: false
  private _subTasks?: string[]; 
  public get subTasks() {
    return this.getListAttribute('sub_tasks');
  }
  public set subTasks(value: string[]) {
    this._subTasks = value;
  }
  public resetSubTasks() {
    this._subTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTasksInput() {
    return this._subTasks;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ImageEventsSubEventsIpList(this, "ip", true);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ImageEventsSubEventsIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ImageEventsSubEventsList extends cdktf.ComplexList {
  public internalValue? : ImageEventsSubEvents[] | cdktf.IResolvable

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
  public get(index: number): ImageEventsSubEventsOutputReference {
    return new ImageEventsSubEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageEvents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#task_name Image#task_name}
  */
  readonly taskName?: string;
  /**
  * nodes_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#nodes_events Image#nodes_events}
  */
  readonly nodesEvents?: ImageEventsNodesEvents[] | cdktf.IResolvable;
  /**
  * sub_events block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#sub_events Image#sub_events}
  */
  readonly subEvents?: ImageEventsSubEvents[] | cdktf.IResolvable;
}

export function imageEventsToTerraform(struct?: ImageEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    task_name: cdktf.stringToTerraform(struct!.taskName),
    nodes_events: cdktf.listMapper(imageEventsNodesEventsToTerraform, true)(struct!.nodesEvents),
    sub_events: cdktf.listMapper(imageEventsSubEventsToTerraform, true)(struct!.subEvents),
  }
}


export function imageEventsToHclTerraform(struct?: ImageEvents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    task_name: {
      value: cdktf.stringToHclTerraform(struct!.taskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodes_events: {
      value: cdktf.listMapperHcl(imageEventsNodesEventsToHclTerraform, true)(struct!.nodesEvents),
      isBlock: true,
      type: "list",
      storageClassType: "ImageEventsNodesEventsList",
    },
    sub_events: {
      value: cdktf.listMapperHcl(imageEventsSubEventsToHclTerraform, true)(struct!.subEvents),
      isBlock: true,
      type: "list",
      storageClassType: "ImageEventsSubEventsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageEvents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskName = this._taskName;
    }
    if (this._nodesEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodesEvents = this._nodesEvents?.internalValue;
    }
    if (this._subEvents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subEvents = this._subEvents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageEvents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taskName = undefined;
      this._nodesEvents.internalValue = undefined;
      this._subEvents.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taskName = value.taskName;
      this._nodesEvents.internalValue = value.nodesEvents;
      this._subEvents.internalValue = value.subEvents;
    }
  }

  // task_name - computed: true, optional: true, required: false
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  public resetTaskName() {
    this._taskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // nodes_events - computed: false, optional: true, required: false
  private _nodesEvents = new ImageEventsNodesEventsList(this, "nodes_events", false);
  public get nodesEvents() {
    return this._nodesEvents;
  }
  public putNodesEvents(value: ImageEventsNodesEvents[] | cdktf.IResolvable) {
    this._nodesEvents.internalValue = value;
  }
  public resetNodesEvents() {
    this._nodesEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesEventsInput() {
    return this._nodesEvents.internalValue;
  }

  // sub_events - computed: false, optional: true, required: false
  private _subEvents = new ImageEventsSubEventsList(this, "sub_events", false);
  public get subEvents() {
    return this._subEvents;
  }
  public putSubEvents(value: ImageEventsSubEvents[] | cdktf.IResolvable) {
    this._subEvents.internalValue = value;
  }
  public resetSubEvents() {
    this._subEvents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subEventsInput() {
    return this._subEvents.internalValue;
  }
}

export class ImageEventsList extends cdktf.ComplexList {
  public internalValue? : ImageEvents[] | cdktf.IResolvable

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
  public get(index: number): ImageEventsOutputReference {
    return new ImageEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageImgStateLastChangedTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#secs Image#secs}
  */
  readonly secs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#usecs Image#usecs}
  */
  readonly usecs: string;
}

export function imageImgStateLastChangedTimeToTerraform(struct?: ImageImgStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secs: cdktf.stringToTerraform(struct!.secs),
    usecs: cdktf.stringToTerraform(struct!.usecs),
  }
}


export function imageImgStateLastChangedTimeToHclTerraform(struct?: ImageImgStateLastChangedTime | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secs: {
      value: cdktf.stringToHclTerraform(struct!.secs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usecs: {
      value: cdktf.stringToHclTerraform(struct!.usecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageImgStateLastChangedTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageImgStateLastChangedTime | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secs !== undefined) {
      hasAnyValues = true;
      internalValueResult.secs = this._secs;
    }
    if (this._usecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.usecs = this._usecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageImgStateLastChangedTime | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secs = undefined;
      this._usecs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secs = value.secs;
      this._usecs = value.usecs;
    }
  }

  // secs - computed: false, optional: false, required: true
  private _secs?: string; 
  public get secs() {
    return this.getStringAttribute('secs');
  }
  public set secs(value: string) {
    this._secs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secsInput() {
    return this._secs;
  }

  // usecs - computed: false, optional: false, required: true
  private _usecs?: string; 
  public get usecs() {
    return this.getStringAttribute('usecs');
  }
  public set usecs(value: string) {
    this._usecs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usecsInput() {
    return this._usecs;
  }
}

export class ImageImgStateLastChangedTimeList extends cdktf.ComplexList {
  public internalValue? : ImageImgStateLastChangedTime[] | cdktf.IResolvable

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
  public get(index: number): ImageImgStateLastChangedTimeOutputReference {
    return new ImageImgStateLastChangedTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageImgState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#reason Image#reason}
  */
  readonly reason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#state Image#state}
  */
  readonly state?: string;
  /**
  * last_changed_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#last_changed_time Image#last_changed_time}
  */
  readonly lastChangedTime?: ImageImgStateLastChangedTime[] | cdktf.IResolvable;
}

export function imageImgStateToTerraform(struct?: ImageImgState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reason: cdktf.stringToTerraform(struct!.reason),
    state: cdktf.stringToTerraform(struct!.state),
    last_changed_time: cdktf.listMapper(imageImgStateLastChangedTimeToTerraform, true)(struct!.lastChangedTime),
  }
}


export function imageImgStateToHclTerraform(struct?: ImageImgState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_changed_time: {
      value: cdktf.listMapperHcl(imageImgStateLastChangedTimeToHclTerraform, true)(struct!.lastChangedTime),
      isBlock: true,
      type: "set",
      storageClassType: "ImageImgStateLastChangedTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageImgStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageImgState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._lastChangedTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastChangedTime = this._lastChangedTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageImgState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reason = undefined;
      this._state = undefined;
      this._lastChangedTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reason = value.reason;
      this._state = value.state;
      this._lastChangedTime.internalValue = value.lastChangedTime;
    }
  }

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // last_changed_time - computed: false, optional: true, required: false
  private _lastChangedTime = new ImageImgStateLastChangedTimeList(this, "last_changed_time", true);
  public get lastChangedTime() {
    return this._lastChangedTime;
  }
  public putLastChangedTime(value: ImageImgStateLastChangedTime[] | cdktf.IResolvable) {
    this._lastChangedTime.internalValue = value;
  }
  public resetLastChangedTime() {
    this._lastChangedTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastChangedTimeInput() {
    return this._lastChangedTime.internalValue;
  }
}

export class ImageImgStateList extends cdktf.ComplexList {
  public internalValue? : ImageImgState[] | cdktf.IResolvable

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
  public get(index: number): ImageImgStateOutputReference {
    return new ImageImgStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageMigrations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#api_version Image#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_host_min_free_disk_size Image#controller_host_min_free_disk_size}
  */
  readonly controllerHostMinFreeDiskSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_min_cores Image#controller_min_cores}
  */
  readonly controllerMinCores?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_min_docker_version Image#controller_min_docker_version}
  */
  readonly controllerMinDockerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_min_free_disk_size Image#controller_min_free_disk_size}
  */
  readonly controllerMinFreeDiskSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_min_memory Image#controller_min_memory}
  */
  readonly controllerMinMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#controller_min_total_disk Image#controller_min_total_disk}
  */
  readonly controllerMinTotalDisk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#max_active_versions Image#max_active_versions}
  */
  readonly maxActiveVersions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#min_supported_api_version Image#min_supported_api_version}
  */
  readonly minSupportedApiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#podman_controller_host_min_free_disk_size Image#podman_controller_host_min_free_disk_size}
  */
  readonly podmanControllerHostMinFreeDiskSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#podman_se_host_min_free_disk_size Image#podman_se_host_min_free_disk_size}
  */
  readonly podmanSeHostMinFreeDiskSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#rollback_controller_disk_space Image#rollback_controller_disk_space}
  */
  readonly rollbackControllerDiskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#rollback_se_disk_space Image#rollback_se_disk_space}
  */
  readonly rollbackSeDiskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_host_min_free_disk_size Image#se_host_min_free_disk_size}
  */
  readonly seHostMinFreeDiskSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_min_cores Image#se_min_cores}
  */
  readonly seMinCores?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_min_free_disk_size Image#se_min_free_disk_size}
  */
  readonly seMinFreeDiskSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_min_memory Image#se_min_memory}
  */
  readonly seMinMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#se_min_total_disk Image#se_min_total_disk}
  */
  readonly seMinTotalDisk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#versions Image#versions}
  */
  readonly versions?: string[];
}

export function imageMigrationsToTerraform(struct?: ImageMigrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    controller_host_min_free_disk_size: cdktf.stringToTerraform(struct!.controllerHostMinFreeDiskSize),
    controller_min_cores: cdktf.stringToTerraform(struct!.controllerMinCores),
    controller_min_docker_version: cdktf.stringToTerraform(struct!.controllerMinDockerVersion),
    controller_min_free_disk_size: cdktf.stringToTerraform(struct!.controllerMinFreeDiskSize),
    controller_min_memory: cdktf.stringToTerraform(struct!.controllerMinMemory),
    controller_min_total_disk: cdktf.stringToTerraform(struct!.controllerMinTotalDisk),
    max_active_versions: cdktf.stringToTerraform(struct!.maxActiveVersions),
    min_supported_api_version: cdktf.stringToTerraform(struct!.minSupportedApiVersion),
    podman_controller_host_min_free_disk_size: cdktf.stringToTerraform(struct!.podmanControllerHostMinFreeDiskSize),
    podman_se_host_min_free_disk_size: cdktf.stringToTerraform(struct!.podmanSeHostMinFreeDiskSize),
    rollback_controller_disk_space: cdktf.stringToTerraform(struct!.rollbackControllerDiskSpace),
    rollback_se_disk_space: cdktf.stringToTerraform(struct!.rollbackSeDiskSpace),
    se_host_min_free_disk_size: cdktf.stringToTerraform(struct!.seHostMinFreeDiskSize),
    se_min_cores: cdktf.stringToTerraform(struct!.seMinCores),
    se_min_free_disk_size: cdktf.stringToTerraform(struct!.seMinFreeDiskSize),
    se_min_memory: cdktf.stringToTerraform(struct!.seMinMemory),
    se_min_total_disk: cdktf.stringToTerraform(struct!.seMinTotalDisk),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function imageMigrationsToHclTerraform(struct?: ImageMigrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_host_min_free_disk_size: {
      value: cdktf.stringToHclTerraform(struct!.controllerHostMinFreeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_min_cores: {
      value: cdktf.stringToHclTerraform(struct!.controllerMinCores),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_min_docker_version: {
      value: cdktf.stringToHclTerraform(struct!.controllerMinDockerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_min_free_disk_size: {
      value: cdktf.stringToHclTerraform(struct!.controllerMinFreeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_min_memory: {
      value: cdktf.stringToHclTerraform(struct!.controllerMinMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_min_total_disk: {
      value: cdktf.stringToHclTerraform(struct!.controllerMinTotalDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_active_versions: {
      value: cdktf.stringToHclTerraform(struct!.maxActiveVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_supported_api_version: {
      value: cdktf.stringToHclTerraform(struct!.minSupportedApiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    podman_controller_host_min_free_disk_size: {
      value: cdktf.stringToHclTerraform(struct!.podmanControllerHostMinFreeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    podman_se_host_min_free_disk_size: {
      value: cdktf.stringToHclTerraform(struct!.podmanSeHostMinFreeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollback_controller_disk_space: {
      value: cdktf.stringToHclTerraform(struct!.rollbackControllerDiskSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rollback_se_disk_space: {
      value: cdktf.stringToHclTerraform(struct!.rollbackSeDiskSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_host_min_free_disk_size: {
      value: cdktf.stringToHclTerraform(struct!.seHostMinFreeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_min_cores: {
      value: cdktf.stringToHclTerraform(struct!.seMinCores),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_min_free_disk_size: {
      value: cdktf.stringToHclTerraform(struct!.seMinFreeDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_min_memory: {
      value: cdktf.stringToHclTerraform(struct!.seMinMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    se_min_total_disk: {
      value: cdktf.stringToHclTerraform(struct!.seMinTotalDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageMigrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageMigrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._controllerHostMinFreeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerHostMinFreeDiskSize = this._controllerHostMinFreeDiskSize;
    }
    if (this._controllerMinCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerMinCores = this._controllerMinCores;
    }
    if (this._controllerMinDockerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerMinDockerVersion = this._controllerMinDockerVersion;
    }
    if (this._controllerMinFreeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerMinFreeDiskSize = this._controllerMinFreeDiskSize;
    }
    if (this._controllerMinMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerMinMemory = this._controllerMinMemory;
    }
    if (this._controllerMinTotalDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerMinTotalDisk = this._controllerMinTotalDisk;
    }
    if (this._maxActiveVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxActiveVersions = this._maxActiveVersions;
    }
    if (this._minSupportedApiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSupportedApiVersion = this._minSupportedApiVersion;
    }
    if (this._podmanControllerHostMinFreeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.podmanControllerHostMinFreeDiskSize = this._podmanControllerHostMinFreeDiskSize;
    }
    if (this._podmanSeHostMinFreeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.podmanSeHostMinFreeDiskSize = this._podmanSeHostMinFreeDiskSize;
    }
    if (this._rollbackControllerDiskSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackControllerDiskSpace = this._rollbackControllerDiskSpace;
    }
    if (this._rollbackSeDiskSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollbackSeDiskSpace = this._rollbackSeDiskSpace;
    }
    if (this._seHostMinFreeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seHostMinFreeDiskSize = this._seHostMinFreeDiskSize;
    }
    if (this._seMinCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMinCores = this._seMinCores;
    }
    if (this._seMinFreeDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMinFreeDiskSize = this._seMinFreeDiskSize;
    }
    if (this._seMinMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMinMemory = this._seMinMemory;
    }
    if (this._seMinTotalDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.seMinTotalDisk = this._seMinTotalDisk;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageMigrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._controllerHostMinFreeDiskSize = undefined;
      this._controllerMinCores = undefined;
      this._controllerMinDockerVersion = undefined;
      this._controllerMinFreeDiskSize = undefined;
      this._controllerMinMemory = undefined;
      this._controllerMinTotalDisk = undefined;
      this._maxActiveVersions = undefined;
      this._minSupportedApiVersion = undefined;
      this._podmanControllerHostMinFreeDiskSize = undefined;
      this._podmanSeHostMinFreeDiskSize = undefined;
      this._rollbackControllerDiskSpace = undefined;
      this._rollbackSeDiskSpace = undefined;
      this._seHostMinFreeDiskSize = undefined;
      this._seMinCores = undefined;
      this._seMinFreeDiskSize = undefined;
      this._seMinMemory = undefined;
      this._seMinTotalDisk = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._controllerHostMinFreeDiskSize = value.controllerHostMinFreeDiskSize;
      this._controllerMinCores = value.controllerMinCores;
      this._controllerMinDockerVersion = value.controllerMinDockerVersion;
      this._controllerMinFreeDiskSize = value.controllerMinFreeDiskSize;
      this._controllerMinMemory = value.controllerMinMemory;
      this._controllerMinTotalDisk = value.controllerMinTotalDisk;
      this._maxActiveVersions = value.maxActiveVersions;
      this._minSupportedApiVersion = value.minSupportedApiVersion;
      this._podmanControllerHostMinFreeDiskSize = value.podmanControllerHostMinFreeDiskSize;
      this._podmanSeHostMinFreeDiskSize = value.podmanSeHostMinFreeDiskSize;
      this._rollbackControllerDiskSpace = value.rollbackControllerDiskSpace;
      this._rollbackSeDiskSpace = value.rollbackSeDiskSpace;
      this._seHostMinFreeDiskSize = value.seHostMinFreeDiskSize;
      this._seMinCores = value.seMinCores;
      this._seMinFreeDiskSize = value.seMinFreeDiskSize;
      this._seMinMemory = value.seMinMemory;
      this._seMinTotalDisk = value.seMinTotalDisk;
      this._versions = value.versions;
    }
  }

  // api_version - computed: true, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // controller_host_min_free_disk_size - computed: false, optional: true, required: false
  private _controllerHostMinFreeDiskSize?: string; 
  public get controllerHostMinFreeDiskSize() {
    return this.getStringAttribute('controller_host_min_free_disk_size');
  }
  public set controllerHostMinFreeDiskSize(value: string) {
    this._controllerHostMinFreeDiskSize = value;
  }
  public resetControllerHostMinFreeDiskSize() {
    this._controllerHostMinFreeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerHostMinFreeDiskSizeInput() {
    return this._controllerHostMinFreeDiskSize;
  }

  // controller_min_cores - computed: false, optional: true, required: false
  private _controllerMinCores?: string; 
  public get controllerMinCores() {
    return this.getStringAttribute('controller_min_cores');
  }
  public set controllerMinCores(value: string) {
    this._controllerMinCores = value;
  }
  public resetControllerMinCores() {
    this._controllerMinCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerMinCoresInput() {
    return this._controllerMinCores;
  }

  // controller_min_docker_version - computed: false, optional: true, required: false
  private _controllerMinDockerVersion?: string; 
  public get controllerMinDockerVersion() {
    return this.getStringAttribute('controller_min_docker_version');
  }
  public set controllerMinDockerVersion(value: string) {
    this._controllerMinDockerVersion = value;
  }
  public resetControllerMinDockerVersion() {
    this._controllerMinDockerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerMinDockerVersionInput() {
    return this._controllerMinDockerVersion;
  }

  // controller_min_free_disk_size - computed: false, optional: true, required: false
  private _controllerMinFreeDiskSize?: string; 
  public get controllerMinFreeDiskSize() {
    return this.getStringAttribute('controller_min_free_disk_size');
  }
  public set controllerMinFreeDiskSize(value: string) {
    this._controllerMinFreeDiskSize = value;
  }
  public resetControllerMinFreeDiskSize() {
    this._controllerMinFreeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerMinFreeDiskSizeInput() {
    return this._controllerMinFreeDiskSize;
  }

  // controller_min_memory - computed: false, optional: true, required: false
  private _controllerMinMemory?: string; 
  public get controllerMinMemory() {
    return this.getStringAttribute('controller_min_memory');
  }
  public set controllerMinMemory(value: string) {
    this._controllerMinMemory = value;
  }
  public resetControllerMinMemory() {
    this._controllerMinMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerMinMemoryInput() {
    return this._controllerMinMemory;
  }

  // controller_min_total_disk - computed: false, optional: true, required: false
  private _controllerMinTotalDisk?: string; 
  public get controllerMinTotalDisk() {
    return this.getStringAttribute('controller_min_total_disk');
  }
  public set controllerMinTotalDisk(value: string) {
    this._controllerMinTotalDisk = value;
  }
  public resetControllerMinTotalDisk() {
    this._controllerMinTotalDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerMinTotalDiskInput() {
    return this._controllerMinTotalDisk;
  }

  // max_active_versions - computed: false, optional: true, required: false
  private _maxActiveVersions?: string; 
  public get maxActiveVersions() {
    return this.getStringAttribute('max_active_versions');
  }
  public set maxActiveVersions(value: string) {
    this._maxActiveVersions = value;
  }
  public resetMaxActiveVersions() {
    this._maxActiveVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxActiveVersionsInput() {
    return this._maxActiveVersions;
  }

  // min_supported_api_version - computed: true, optional: true, required: false
  private _minSupportedApiVersion?: string; 
  public get minSupportedApiVersion() {
    return this.getStringAttribute('min_supported_api_version');
  }
  public set minSupportedApiVersion(value: string) {
    this._minSupportedApiVersion = value;
  }
  public resetMinSupportedApiVersion() {
    this._minSupportedApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSupportedApiVersionInput() {
    return this._minSupportedApiVersion;
  }

  // podman_controller_host_min_free_disk_size - computed: false, optional: true, required: false
  private _podmanControllerHostMinFreeDiskSize?: string; 
  public get podmanControllerHostMinFreeDiskSize() {
    return this.getStringAttribute('podman_controller_host_min_free_disk_size');
  }
  public set podmanControllerHostMinFreeDiskSize(value: string) {
    this._podmanControllerHostMinFreeDiskSize = value;
  }
  public resetPodmanControllerHostMinFreeDiskSize() {
    this._podmanControllerHostMinFreeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podmanControllerHostMinFreeDiskSizeInput() {
    return this._podmanControllerHostMinFreeDiskSize;
  }

  // podman_se_host_min_free_disk_size - computed: false, optional: true, required: false
  private _podmanSeHostMinFreeDiskSize?: string; 
  public get podmanSeHostMinFreeDiskSize() {
    return this.getStringAttribute('podman_se_host_min_free_disk_size');
  }
  public set podmanSeHostMinFreeDiskSize(value: string) {
    this._podmanSeHostMinFreeDiskSize = value;
  }
  public resetPodmanSeHostMinFreeDiskSize() {
    this._podmanSeHostMinFreeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podmanSeHostMinFreeDiskSizeInput() {
    return this._podmanSeHostMinFreeDiskSize;
  }

  // rollback_controller_disk_space - computed: false, optional: true, required: false
  private _rollbackControllerDiskSpace?: string; 
  public get rollbackControllerDiskSpace() {
    return this.getStringAttribute('rollback_controller_disk_space');
  }
  public set rollbackControllerDiskSpace(value: string) {
    this._rollbackControllerDiskSpace = value;
  }
  public resetRollbackControllerDiskSpace() {
    this._rollbackControllerDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackControllerDiskSpaceInput() {
    return this._rollbackControllerDiskSpace;
  }

  // rollback_se_disk_space - computed: false, optional: true, required: false
  private _rollbackSeDiskSpace?: string; 
  public get rollbackSeDiskSpace() {
    return this.getStringAttribute('rollback_se_disk_space');
  }
  public set rollbackSeDiskSpace(value: string) {
    this._rollbackSeDiskSpace = value;
  }
  public resetRollbackSeDiskSpace() {
    this._rollbackSeDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackSeDiskSpaceInput() {
    return this._rollbackSeDiskSpace;
  }

  // se_host_min_free_disk_size - computed: false, optional: true, required: false
  private _seHostMinFreeDiskSize?: string; 
  public get seHostMinFreeDiskSize() {
    return this.getStringAttribute('se_host_min_free_disk_size');
  }
  public set seHostMinFreeDiskSize(value: string) {
    this._seHostMinFreeDiskSize = value;
  }
  public resetSeHostMinFreeDiskSize() {
    this._seHostMinFreeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seHostMinFreeDiskSizeInput() {
    return this._seHostMinFreeDiskSize;
  }

  // se_min_cores - computed: false, optional: true, required: false
  private _seMinCores?: string; 
  public get seMinCores() {
    return this.getStringAttribute('se_min_cores');
  }
  public set seMinCores(value: string) {
    this._seMinCores = value;
  }
  public resetSeMinCores() {
    this._seMinCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMinCoresInput() {
    return this._seMinCores;
  }

  // se_min_free_disk_size - computed: false, optional: true, required: false
  private _seMinFreeDiskSize?: string; 
  public get seMinFreeDiskSize() {
    return this.getStringAttribute('se_min_free_disk_size');
  }
  public set seMinFreeDiskSize(value: string) {
    this._seMinFreeDiskSize = value;
  }
  public resetSeMinFreeDiskSize() {
    this._seMinFreeDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMinFreeDiskSizeInput() {
    return this._seMinFreeDiskSize;
  }

  // se_min_memory - computed: false, optional: true, required: false
  private _seMinMemory?: string; 
  public get seMinMemory() {
    return this.getStringAttribute('se_min_memory');
  }
  public set seMinMemory(value: string) {
    this._seMinMemory = value;
  }
  public resetSeMinMemory() {
    this._seMinMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMinMemoryInput() {
    return this._seMinMemory;
  }

  // se_min_total_disk - computed: false, optional: true, required: false
  private _seMinTotalDisk?: string; 
  public get seMinTotalDisk() {
    return this.getStringAttribute('se_min_total_disk');
  }
  public set seMinTotalDisk(value: string) {
    this._seMinTotalDisk = value;
  }
  public resetSeMinTotalDisk() {
    this._seMinTotalDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seMinTotalDiskInput() {
    return this._seMinTotalDisk;
  }

  // versions - computed: false, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return this.getListAttribute('versions');
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class ImageMigrationsList extends cdktf.ComplexList {
  public internalValue? : ImageMigrations[] | cdktf.IResolvable

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
  public get(index: number): ImageMigrationsOutputReference {
    return new ImageMigrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageSeInfoBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#build_no Image#build_no}
  */
  readonly buildNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#date Image#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#min_version Image#min_version}
  */
  readonly minVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch_version Image#patch_version}
  */
  readonly patchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#product Image#product}
  */
  readonly product?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#product_name Image#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#remote_image_ref Image#remote_image_ref}
  */
  readonly remoteImageRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#tag Image#tag}
  */
  readonly tag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#version Image#version}
  */
  readonly version?: string;
}

export function imageSeInfoBuildToTerraform(struct?: ImageSeInfoBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_no: cdktf.stringToTerraform(struct!.buildNo),
    date: cdktf.stringToTerraform(struct!.date),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    patch_version: cdktf.stringToTerraform(struct!.patchVersion),
    product: cdktf.stringToTerraform(struct!.product),
    product_name: cdktf.stringToTerraform(struct!.productName),
    remote_image_ref: cdktf.stringToTerraform(struct!.remoteImageRef),
    tag: cdktf.stringToTerraform(struct!.tag),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function imageSeInfoBuildToHclTerraform(struct?: ImageSeInfoBuild | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_no: {
      value: cdktf.stringToHclTerraform(struct!.buildNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_version: {
      value: cdktf.stringToHclTerraform(struct!.patchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product: {
      value: cdktf.stringToHclTerraform(struct!.product),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    product_name: {
      value: cdktf.stringToHclTerraform(struct!.productName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_image_ref: {
      value: cdktf.stringToHclTerraform(struct!.remoteImageRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageSeInfoBuildOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageSeInfoBuild | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildNo = this._buildNo;
    }
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._patchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersion = this._patchVersion;
    }
    if (this._product !== undefined) {
      hasAnyValues = true;
      internalValueResult.product = this._product;
    }
    if (this._productName !== undefined) {
      hasAnyValues = true;
      internalValueResult.productName = this._productName;
    }
    if (this._remoteImageRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteImageRef = this._remoteImageRef;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageSeInfoBuild | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildNo = undefined;
      this._date = undefined;
      this._minVersion = undefined;
      this._patchVersion = undefined;
      this._product = undefined;
      this._productName = undefined;
      this._remoteImageRef = undefined;
      this._tag = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildNo = value.buildNo;
      this._date = value.date;
      this._minVersion = value.minVersion;
      this._patchVersion = value.patchVersion;
      this._product = value.product;
      this._productName = value.productName;
      this._remoteImageRef = value.remoteImageRef;
      this._tag = value.tag;
      this._version = value.version;
    }
  }

  // build_no - computed: true, optional: true, required: false
  private _buildNo?: string; 
  public get buildNo() {
    return this.getStringAttribute('build_no');
  }
  public set buildNo(value: string) {
    this._buildNo = value;
  }
  public resetBuildNo() {
    this._buildNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildNoInput() {
    return this._buildNo;
  }

  // date - computed: true, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // min_version - computed: true, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
  }

  // product - computed: true, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // remote_image_ref - computed: true, optional: true, required: false
  private _remoteImageRef?: string; 
  public get remoteImageRef() {
    return this.getStringAttribute('remote_image_ref');
  }
  public set remoteImageRef(value: string) {
    this._remoteImageRef = value;
  }
  public resetRemoteImageRef() {
    this._remoteImageRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteImageRefInput() {
    return this._remoteImageRef;
  }

  // tag - computed: true, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // version - computed: true, optional: true, required: false
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
}

export class ImageSeInfoBuildList extends cdktf.ComplexList {
  public internalValue? : ImageSeInfoBuild[] | cdktf.IResolvable

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
  public get(index: number): ImageSeInfoBuildOutputReference {
    return new ImageSeInfoBuildOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageSeInfoPatchRebootListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch_version Image#patch_version}
  */
  readonly patchVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#reboot Image#reboot}
  */
  readonly reboot?: string;
}

export function imageSeInfoPatchRebootListStructToTerraform(struct?: ImageSeInfoPatchRebootListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_version: cdktf.stringToTerraform(struct!.patchVersion),
    reboot: cdktf.stringToTerraform(struct!.reboot),
  }
}


export function imageSeInfoPatchRebootListStructToHclTerraform(struct?: ImageSeInfoPatchRebootListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_version: {
      value: cdktf.stringToHclTerraform(struct!.patchVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageSeInfoPatchRebootListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageSeInfoPatchRebootListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchVersion = this._patchVersion;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageSeInfoPatchRebootListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patchVersion = undefined;
      this._reboot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patchVersion = value.patchVersion;
      this._reboot = value.reboot;
    }
  }

  // patch_version - computed: true, optional: true, required: false
  private _patchVersion?: string; 
  public get patchVersion() {
    return this.getStringAttribute('patch_version');
  }
  public set patchVersion(value: string) {
    this._patchVersion = value;
  }
  public resetPatchVersion() {
    this._patchVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchVersionInput() {
    return this._patchVersion;
  }

  // reboot - computed: true, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }
}

export class ImageSeInfoPatchRebootListStructList extends cdktf.ComplexList {
  public internalValue? : ImageSeInfoPatchRebootListStruct[] | cdktf.IResolvable

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
  public get(index: number): ImageSeInfoPatchRebootListStructOutputReference {
    return new ImageSeInfoPatchRebootListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageSeInfoPatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch_type Image#patch_type}
  */
  readonly patchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#reboot Image#reboot}
  */
  readonly reboot?: string;
  /**
  * reboot_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#reboot_list Image#reboot_list}
  */
  readonly rebootList?: ImageSeInfoPatchRebootListStruct[] | cdktf.IResolvable;
}

export function imageSeInfoPatchToTerraform(struct?: ImageSeInfoPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_type: cdktf.stringToTerraform(struct!.patchType),
    reboot: cdktf.stringToTerraform(struct!.reboot),
    reboot_list: cdktf.listMapper(imageSeInfoPatchRebootListStructToTerraform, true)(struct!.rebootList),
  }
}


export function imageSeInfoPatchToHclTerraform(struct?: ImageSeInfoPatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_type: {
      value: cdktf.stringToHclTerraform(struct!.patchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot: {
      value: cdktf.stringToHclTerraform(struct!.reboot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reboot_list: {
      value: cdktf.listMapperHcl(imageSeInfoPatchRebootListStructToHclTerraform, true)(struct!.rebootList),
      isBlock: true,
      type: "list",
      storageClassType: "ImageSeInfoPatchRebootListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageSeInfoPatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageSeInfoPatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchType = this._patchType;
    }
    if (this._reboot !== undefined) {
      hasAnyValues = true;
      internalValueResult.reboot = this._reboot;
    }
    if (this._rebootList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootList = this._rebootList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageSeInfoPatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._patchType = undefined;
      this._reboot = undefined;
      this._rebootList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._patchType = value.patchType;
      this._reboot = value.reboot;
      this._rebootList.internalValue = value.rebootList;
    }
  }

  // patch_type - computed: true, optional: true, required: false
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  public resetPatchType() {
    this._patchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
  }

  // reboot - computed: true, optional: true, required: false
  private _reboot?: string; 
  public get reboot() {
    return this.getStringAttribute('reboot');
  }
  public set reboot(value: string) {
    this._reboot = value;
  }
  public resetReboot() {
    this._reboot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootInput() {
    return this._reboot;
  }

  // reboot_list - computed: false, optional: true, required: false
  private _rebootList = new ImageSeInfoPatchRebootListStructList(this, "reboot_list", false);
  public get rebootList() {
    return this._rebootList;
  }
  public putRebootList(value: ImageSeInfoPatchRebootListStruct[] | cdktf.IResolvable) {
    this._rebootList.internalValue = value;
  }
  public resetRebootList() {
    this._rebootList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootListInput() {
    return this._rebootList.internalValue;
  }
}

export class ImageSeInfoPatchList extends cdktf.ComplexList {
  public internalValue? : ImageSeInfoPatch[] | cdktf.IResolvable

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
  public get(index: number): ImageSeInfoPatchOutputReference {
    return new ImageSeInfoPatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageSeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#hash Image#hash}
  */
  readonly hash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#path Image#path}
  */
  readonly path?: string;
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#build Image#build}
  */
  readonly buildAttribute?: ImageSeInfoBuild[] | cdktf.IResolvable;
  /**
  * patch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#patch Image#patch}
  */
  readonly patch?: ImageSeInfoPatch[] | cdktf.IResolvable;
}

export function imageSeInfoToTerraform(struct?: ImageSeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash: cdktf.stringToTerraform(struct!.hash),
    path: cdktf.stringToTerraform(struct!.path),
    build: cdktf.listMapper(imageSeInfoBuildToTerraform, true)(struct!.buildAttribute),
    patch: cdktf.listMapper(imageSeInfoPatchToTerraform, true)(struct!.patch),
  }
}


export function imageSeInfoToHclTerraform(struct?: ImageSeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash: {
      value: cdktf.stringToHclTerraform(struct!.hash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build: {
      value: cdktf.listMapperHcl(imageSeInfoBuildToHclTerraform, true)(struct!.buildAttribute),
      isBlock: true,
      type: "set",
      storageClassType: "ImageSeInfoBuildList",
    },
    patch: {
      value: cdktf.listMapperHcl(imageSeInfoPatchToHclTerraform, true)(struct!.patch),
      isBlock: true,
      type: "set",
      storageClassType: "ImageSeInfoPatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageSeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageSeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._build?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildAttribute = this._build?.internalValue;
    }
    if (this._patch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageSeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hash = undefined;
      this._path = undefined;
      this._build.internalValue = undefined;
      this._patch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hash = value.hash;
      this._path = value.path;
      this._build.internalValue = value.buildAttribute;
      this._patch.internalValue = value.patch;
    }
  }

  // hash - computed: true, optional: true, required: false
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  public resetHash() {
    this._hash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // build - computed: false, optional: true, required: false
  private _build = new ImageSeInfoBuildList(this, "build", true);
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: ImageSeInfoBuild[] | cdktf.IResolvable) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // patch - computed: false, optional: true, required: false
  private _patch = new ImageSeInfoPatchList(this, "patch", true);
  public get patch() {
    return this._patch;
  }
  public putPatch(value: ImageSeInfoPatch[] | cdktf.IResolvable) {
    this._patch.internalValue = value;
  }
  public resetPatch() {
    this._patch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch.internalValue;
  }
}

export class ImageSeInfoList extends cdktf.ComplexList {
  public internalValue? : ImageSeInfo[] | cdktf.IResolvable

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
  public get(index: number): ImageSeInfoOutputReference {
    return new ImageSeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image avi_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/resources/image avi_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_image',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controllerPatchName = config.controllerPatchName;
    this._controllerPatchRef = config.controllerPatchRef;
    this._duration = config.duration;
    this._endTime = config.endTime;
    this._fipsModeTransitionApplicable = config.fipsModeTransitionApplicable;
    this._id = config.id;
    this._name = config.name;
    this._progress = config.progress;
    this._sePatchName = config.sePatchName;
    this._sePatchRef = config.sePatchRef;
    this._startTime = config.startTime;
    this._tasksCompleted = config.tasksCompleted;
    this._tenantRef = config.tenantRef;
    this._totalTasks = config.totalTasks;
    this._type = config.type;
    this._uberBundle = config.uberBundle;
    this._uuid = config.uuid;
    this._cloudInfoValues.internalValue = config.cloudInfoValues;
    this._controllerInfo.internalValue = config.controllerInfo;
    this._events.internalValue = config.events;
    this._imgState.internalValue = config.imgState;
    this._migrations.internalValue = config.migrations;
    this._seInfo.internalValue = config.seInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // controller_patch_name - computed: true, optional: true, required: false
  private _controllerPatchName?: string; 
  public get controllerPatchName() {
    return this.getStringAttribute('controller_patch_name');
  }
  public set controllerPatchName(value: string) {
    this._controllerPatchName = value;
  }
  public resetControllerPatchName() {
    this._controllerPatchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPatchNameInput() {
    return this._controllerPatchName;
  }

  // controller_patch_ref - computed: true, optional: true, required: false
  private _controllerPatchRef?: string; 
  public get controllerPatchRef() {
    return this.getStringAttribute('controller_patch_ref');
  }
  public set controllerPatchRef(value: string) {
    this._controllerPatchRef = value;
  }
  public resetControllerPatchRef() {
    this._controllerPatchRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerPatchRefInput() {
    return this._controllerPatchRef;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // fips_mode_transition_applicable - computed: false, optional: true, required: false
  private _fipsModeTransitionApplicable?: string; 
  public get fipsModeTransitionApplicable() {
    return this.getStringAttribute('fips_mode_transition_applicable');
  }
  public set fipsModeTransitionApplicable(value: string) {
    this._fipsModeTransitionApplicable = value;
  }
  public resetFipsModeTransitionApplicable() {
    this._fipsModeTransitionApplicable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsModeTransitionApplicableInput() {
    return this._fipsModeTransitionApplicable;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // progress - computed: false, optional: true, required: false
  private _progress?: string; 
  public get progress() {
    return this.getStringAttribute('progress');
  }
  public set progress(value: string) {
    this._progress = value;
  }
  public resetProgress() {
    this._progress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressInput() {
    return this._progress;
  }

  // se_patch_name - computed: true, optional: true, required: false
  private _sePatchName?: string; 
  public get sePatchName() {
    return this.getStringAttribute('se_patch_name');
  }
  public set sePatchName(value: string) {
    this._sePatchName = value;
  }
  public resetSePatchName() {
    this._sePatchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePatchNameInput() {
    return this._sePatchName;
  }

  // se_patch_ref - computed: true, optional: true, required: false
  private _sePatchRef?: string; 
  public get sePatchRef() {
    return this.getStringAttribute('se_patch_ref');
  }
  public set sePatchRef(value: string) {
    this._sePatchRef = value;
  }
  public resetSePatchRef() {
    this._sePatchRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sePatchRefInput() {
    return this._sePatchRef;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // tasks_completed - computed: false, optional: true, required: false
  private _tasksCompleted?: string; 
  public get tasksCompleted() {
    return this.getStringAttribute('tasks_completed');
  }
  public set tasksCompleted(value: string) {
    this._tasksCompleted = value;
  }
  public resetTasksCompleted() {
    this._tasksCompleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tasksCompletedInput() {
    return this._tasksCompleted;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // total_tasks - computed: false, optional: true, required: false
  private _totalTasks?: string; 
  public get totalTasks() {
    return this.getStringAttribute('total_tasks');
  }
  public set totalTasks(value: string) {
    this._totalTasks = value;
  }
  public resetTotalTasks() {
    this._totalTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTasksInput() {
    return this._totalTasks;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uber_bundle - computed: false, optional: true, required: false
  private _uberBundle?: string; 
  public get uberBundle() {
    return this.getStringAttribute('uber_bundle');
  }
  public set uberBundle(value: string) {
    this._uberBundle = value;
  }
  public resetUberBundle() {
    this._uberBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uberBundleInput() {
    return this._uberBundle;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // cloud_info_values - computed: false, optional: true, required: false
  private _cloudInfoValues = new ImageCloudInfoValuesList(this, "cloud_info_values", false);
  public get cloudInfoValues() {
    return this._cloudInfoValues;
  }
  public putCloudInfoValues(value: ImageCloudInfoValues[] | cdktf.IResolvable) {
    this._cloudInfoValues.internalValue = value;
  }
  public resetCloudInfoValues() {
    this._cloudInfoValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInfoValuesInput() {
    return this._cloudInfoValues.internalValue;
  }

  // controller_info - computed: false, optional: true, required: false
  private _controllerInfo = new ImageControllerInfoList(this, "controller_info", true);
  public get controllerInfo() {
    return this._controllerInfo;
  }
  public putControllerInfo(value: ImageControllerInfo[] | cdktf.IResolvable) {
    this._controllerInfo.internalValue = value;
  }
  public resetControllerInfo() {
    this._controllerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInfoInput() {
    return this._controllerInfo.internalValue;
  }

  // events - computed: false, optional: true, required: false
  private _events = new ImageEventsList(this, "events", false);
  public get events() {
    return this._events;
  }
  public putEvents(value: ImageEvents[] | cdktf.IResolvable) {
    this._events.internalValue = value;
  }
  public resetEvents() {
    this._events.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events.internalValue;
  }

  // img_state - computed: false, optional: true, required: false
  private _imgState = new ImageImgStateList(this, "img_state", true);
  public get imgState() {
    return this._imgState;
  }
  public putImgState(value: ImageImgState[] | cdktf.IResolvable) {
    this._imgState.internalValue = value;
  }
  public resetImgState() {
    this._imgState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgStateInput() {
    return this._imgState.internalValue;
  }

  // migrations - computed: false, optional: true, required: false
  private _migrations = new ImageMigrationsList(this, "migrations", true);
  public get migrations() {
    return this._migrations;
  }
  public putMigrations(value: ImageMigrations[] | cdktf.IResolvable) {
    this._migrations.internalValue = value;
  }
  public resetMigrations() {
    this._migrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationsInput() {
    return this._migrations.internalValue;
  }

  // se_info - computed: false, optional: true, required: false
  private _seInfo = new ImageSeInfoList(this, "se_info", true);
  public get seInfo() {
    return this._seInfo;
  }
  public putSeInfo(value: ImageSeInfo[] | cdktf.IResolvable) {
    this._seInfo.internalValue = value;
  }
  public resetSeInfo() {
    this._seInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seInfoInput() {
    return this._seInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      controller_patch_name: cdktf.stringToTerraform(this._controllerPatchName),
      controller_patch_ref: cdktf.stringToTerraform(this._controllerPatchRef),
      duration: cdktf.stringToTerraform(this._duration),
      end_time: cdktf.stringToTerraform(this._endTime),
      fips_mode_transition_applicable: cdktf.stringToTerraform(this._fipsModeTransitionApplicable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      progress: cdktf.stringToTerraform(this._progress),
      se_patch_name: cdktf.stringToTerraform(this._sePatchName),
      se_patch_ref: cdktf.stringToTerraform(this._sePatchRef),
      start_time: cdktf.stringToTerraform(this._startTime),
      tasks_completed: cdktf.stringToTerraform(this._tasksCompleted),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      total_tasks: cdktf.stringToTerraform(this._totalTasks),
      type: cdktf.stringToTerraform(this._type),
      uber_bundle: cdktf.stringToTerraform(this._uberBundle),
      uuid: cdktf.stringToTerraform(this._uuid),
      cloud_info_values: cdktf.listMapper(imageCloudInfoValuesToTerraform, true)(this._cloudInfoValues.internalValue),
      controller_info: cdktf.listMapper(imageControllerInfoToTerraform, true)(this._controllerInfo.internalValue),
      events: cdktf.listMapper(imageEventsToTerraform, true)(this._events.internalValue),
      img_state: cdktf.listMapper(imageImgStateToTerraform, true)(this._imgState.internalValue),
      migrations: cdktf.listMapper(imageMigrationsToTerraform, true)(this._migrations.internalValue),
      se_info: cdktf.listMapper(imageSeInfoToTerraform, true)(this._seInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      controller_patch_name: {
        value: cdktf.stringToHclTerraform(this._controllerPatchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      controller_patch_ref: {
        value: cdktf.stringToHclTerraform(this._controllerPatchRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips_mode_transition_applicable: {
        value: cdktf.stringToHclTerraform(this._fipsModeTransitionApplicable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      progress: {
        value: cdktf.stringToHclTerraform(this._progress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_patch_name: {
        value: cdktf.stringToHclTerraform(this._sePatchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      se_patch_ref: {
        value: cdktf.stringToHclTerraform(this._sePatchRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tasks_completed: {
        value: cdktf.stringToHclTerraform(this._tasksCompleted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      total_tasks: {
        value: cdktf.stringToHclTerraform(this._totalTasks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uber_bundle: {
        value: cdktf.stringToHclTerraform(this._uberBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_info_values: {
        value: cdktf.listMapperHcl(imageCloudInfoValuesToHclTerraform, true)(this._cloudInfoValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageCloudInfoValuesList",
      },
      controller_info: {
        value: cdktf.listMapperHcl(imageControllerInfoToHclTerraform, true)(this._controllerInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImageControllerInfoList",
      },
      events: {
        value: cdktf.listMapperHcl(imageEventsToHclTerraform, true)(this._events.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageEventsList",
      },
      img_state: {
        value: cdktf.listMapperHcl(imageImgStateToHclTerraform, true)(this._imgState.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImageImgStateList",
      },
      migrations: {
        value: cdktf.listMapperHcl(imageMigrationsToHclTerraform, true)(this._migrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImageMigrationsList",
      },
      se_info: {
        value: cdktf.listMapperHcl(imageSeInfoToHclTerraform, true)(this._seInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ImageSeInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
