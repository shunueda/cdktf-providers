// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/desktops_desktop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDesktopsDesktopConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/desktops_desktop#desktop_id DataOciDesktopsDesktop#desktop_id}
  */
  readonly desktopId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/desktops_desktop#id DataOciDesktopsDesktop#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataOciDesktopsDesktopDevicePolicy {
}

export function dataOciDesktopsDesktopDevicePolicyToTerraform(struct?: DataOciDesktopsDesktopDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopDevicePolicyToHclTerraform(struct?: DataOciDesktopsDesktopDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopDevicePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopDevicePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopDevicePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_mode - computed: true, optional: false, required: false
  public get audioMode() {
    return this.getStringAttribute('audio_mode');
  }

  // cdm_mode - computed: true, optional: false, required: false
  public get cdmMode() {
    return this.getStringAttribute('cdm_mode');
  }

  // clipboard_mode - computed: true, optional: false, required: false
  public get clipboardMode() {
    return this.getStringAttribute('clipboard_mode');
  }

  // is_display_enabled - computed: true, optional: false, required: false
  public get isDisplayEnabled() {
    return this.getBooleanAttribute('is_display_enabled');
  }

  // is_keyboard_enabled - computed: true, optional: false, required: false
  public get isKeyboardEnabled() {
    return this.getBooleanAttribute('is_keyboard_enabled');
  }

  // is_pointer_enabled - computed: true, optional: false, required: false
  public get isPointerEnabled() {
    return this.getBooleanAttribute('is_pointer_enabled');
  }

  // is_printing_enabled - computed: true, optional: false, required: false
  public get isPrintingEnabled() {
    return this.getBooleanAttribute('is_printing_enabled');
  }
}

export class DataOciDesktopsDesktopDevicePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopDevicePolicyOutputReference {
    return new DataOciDesktopsDesktopDevicePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopHostingOptionsImage {
}

export function dataOciDesktopsDesktopHostingOptionsImageToTerraform(struct?: DataOciDesktopsDesktopHostingOptionsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopHostingOptionsImageToHclTerraform(struct?: DataOciDesktopsDesktopHostingOptionsImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopHostingOptionsImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopHostingOptionsImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopHostingOptionsImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
}

export class DataOciDesktopsDesktopHostingOptionsImageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopHostingOptionsImageOutputReference {
    return new DataOciDesktopsDesktopHostingOptionsImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDesktopsDesktopHostingOptions {
}

export function dataOciDesktopsDesktopHostingOptionsToTerraform(struct?: DataOciDesktopsDesktopHostingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDesktopsDesktopHostingOptionsToHclTerraform(struct?: DataOciDesktopsDesktopHostingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDesktopsDesktopHostingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDesktopsDesktopHostingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDesktopsDesktopHostingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connect_address - computed: true, optional: false, required: false
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }

  // image - computed: true, optional: false, required: false
  private _image = new DataOciDesktopsDesktopHostingOptionsImageList(this, "image", false);
  public get image() {
    return this._image;
  }
}

export class DataOciDesktopsDesktopHostingOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDesktopsDesktopHostingOptionsOutputReference {
    return new DataOciDesktopsDesktopHostingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/desktops_desktop oci_desktops_desktop}
*/
export class DataOciDesktopsDesktop extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_desktops_desktop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDesktopsDesktop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDesktopsDesktop to import
  * @param importFromId The id of the existing DataOciDesktopsDesktop that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/desktops_desktop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDesktopsDesktop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_desktops_desktop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/desktops_desktop oci_desktops_desktop} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDesktopsDesktopConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDesktopsDesktopConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_desktops_desktop',
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
    this._desktopId = config.desktopId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // desktop_id - computed: false, optional: false, required: true
  private _desktopId?: string; 
  public get desktopId() {
    return this.getStringAttribute('desktop_id');
  }
  public set desktopId(value: string) {
    this._desktopId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopIdInput() {
    return this._desktopId;
  }

  // device_policy - computed: true, optional: false, required: false
  private _devicePolicy = new DataOciDesktopsDesktopDevicePolicyList(this, "device_policy", false);
  public get devicePolicy() {
    return this._devicePolicy;
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

  // hosting_options - computed: true, optional: false, required: false
  private _hostingOptions = new DataOciDesktopsDesktopHostingOptionsList(this, "hosting_options", false);
  public get hostingOptions() {
    return this._hostingOptions;
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

  // pool_id - computed: true, optional: false, required: false
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desktop_id: cdktf.stringToTerraform(this._desktopId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desktop_id: {
        value: cdktf.stringToHclTerraform(this._desktopId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
