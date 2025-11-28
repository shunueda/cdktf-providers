// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosTemplateStackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default virtual system
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#default_vsys DataPanosTemplateStack#default_vsys}
  */
  readonly defaultVsys?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#description DataPanosTemplateStack#description}
  */
  readonly description?: string;
  /**
  * List of devices
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#devices DataPanosTemplateStack#devices}
  */
  readonly devices?: DataPanosTemplateStackDevices[] | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#location DataPanosTemplateStack#location}
  */
  readonly location: DataPanosTemplateStackLocation;
  /**
  * The name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#name DataPanosTemplateStack#name}
  */
  readonly name: string;
  /**
  * List of templates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#templates DataPanosTemplateStack#templates}
  */
  readonly templates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#user_group_source DataPanosTemplateStack#user_group_source}
  */
  readonly userGroupSource?: DataPanosTemplateStackUserGroupSource;
}
export interface DataPanosTemplateStackDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#name DataPanosTemplateStack#name}
  */
  readonly name: string;
}

export function dataPanosTemplateStackDevicesToTerraform(struct?: DataPanosTemplateStackDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosTemplateStackDevicesToHclTerraform(struct?: DataPanosTemplateStackDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosTemplateStackDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosTemplateStackDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosTemplateStackDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataPanosTemplateStackDevicesList extends cdktf.ComplexList {
  public internalValue? : DataPanosTemplateStackDevices[] | cdktf.IResolvable

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
  public get(index: number): DataPanosTemplateStackDevicesOutputReference {
    return new DataPanosTemplateStackDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosTemplateStackLocationPanorama {
  /**
  * The Panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#panorama_device DataPanosTemplateStack#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosTemplateStackLocationPanoramaToTerraform(struct?: DataPanosTemplateStackLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosTemplateStackLocationPanoramaToHclTerraform(struct?: DataPanosTemplateStackLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama_device: {
      value: cdktf.stringToHclTerraform(struct!.panoramaDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosTemplateStackLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosTemplateStackLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosTemplateStackLocationPanorama | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // panorama_device - computed: true, optional: true, required: false
  private _panoramaDevice?: string; 
  public get panoramaDevice() {
    return this.getStringAttribute('panorama_device');
  }
  public set panoramaDevice(value: string) {
    this._panoramaDevice = value;
  }
  public resetPanoramaDevice() {
    this._panoramaDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaDeviceInput() {
    return this._panoramaDevice;
  }
}
export interface DataPanosTemplateStackLocation {
  /**
  * Located in a specific Panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#panorama DataPanosTemplateStack#panorama}
  */
  readonly panorama?: DataPanosTemplateStackLocationPanorama;
}

export function dataPanosTemplateStackLocationToTerraform(struct?: DataPanosTemplateStackLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: dataPanosTemplateStackLocationPanoramaToTerraform(struct!.panorama),
  }
}


export function dataPanosTemplateStackLocationToHclTerraform(struct?: DataPanosTemplateStackLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: dataPanosTemplateStackLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosTemplateStackLocationPanorama",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosTemplateStackLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosTemplateStackLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosTemplateStackLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panorama.internalValue = value.panorama;
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new DataPanosTemplateStackLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: DataPanosTemplateStackLocationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }
}
export interface DataPanosTemplateStackUserGroupSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#master_device DataPanosTemplateStack#master_device}
  */
  readonly masterDevice?: string;
}

export function dataPanosTemplateStackUserGroupSourceToTerraform(struct?: DataPanosTemplateStackUserGroupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    master_device: cdktf.stringToTerraform(struct!.masterDevice),
  }
}


export function dataPanosTemplateStackUserGroupSourceToHclTerraform(struct?: DataPanosTemplateStackUserGroupSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    master_device: {
      value: cdktf.stringToHclTerraform(struct!.masterDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosTemplateStackUserGroupSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosTemplateStackUserGroupSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masterDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterDevice = this._masterDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosTemplateStackUserGroupSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masterDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masterDevice = value.masterDevice;
    }
  }

  // master_device - computed: true, optional: true, required: false
  private _masterDevice?: string; 
  public get masterDevice() {
    return this.getStringAttribute('master_device');
  }
  public set masterDevice(value: string) {
    this._masterDevice = value;
  }
  public resetMasterDevice() {
    this._masterDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterDeviceInput() {
    return this._masterDevice;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack panos_template_stack}
*/
export class DataPanosTemplateStack extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_template_stack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosTemplateStack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosTemplateStack to import
  * @param importFromId The id of the existing DataPanosTemplateStack that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosTemplateStack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_template_stack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/template_stack panos_template_stack} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosTemplateStackConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosTemplateStackConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_template_stack',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.7',
        providerVersionConstraint: '2.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultVsys = config.defaultVsys;
    this._description = config.description;
    this._devices.internalValue = config.devices;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._templates = config.templates;
    this._userGroupSource.internalValue = config.userGroupSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_vsys - computed: true, optional: true, required: false
  private _defaultVsys?: string; 
  public get defaultVsys() {
    return this.getStringAttribute('default_vsys');
  }
  public set defaultVsys(value: string) {
    this._defaultVsys = value;
  }
  public resetDefaultVsys() {
    this._defaultVsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVsysInput() {
    return this._defaultVsys;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // devices - computed: true, optional: true, required: false
  private _devices = new DataPanosTemplateStackDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataPanosTemplateStackDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosTemplateStackLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosTemplateStackLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // templates - computed: true, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return this.getListAttribute('templates');
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // user_group_source - computed: true, optional: true, required: false
  private _userGroupSource = new DataPanosTemplateStackUserGroupSourceOutputReference(this, "user_group_source");
  public get userGroupSource() {
    return this._userGroupSource;
  }
  public putUserGroupSource(value: DataPanosTemplateStackUserGroupSource) {
    this._userGroupSource.internalValue = value;
  }
  public resetUserGroupSource() {
    this._userGroupSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupSourceInput() {
    return this._userGroupSource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_vsys: cdktf.stringToTerraform(this._defaultVsys),
      description: cdktf.stringToTerraform(this._description),
      devices: cdktf.listMapper(dataPanosTemplateStackDevicesToTerraform, false)(this._devices.internalValue),
      location: dataPanosTemplateStackLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      user_group_source: dataPanosTemplateStackUserGroupSourceToTerraform(this._userGroupSource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_vsys: {
        value: cdktf.stringToHclTerraform(this._defaultVsys),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      devices: {
        value: cdktf.listMapperHcl(dataPanosTemplateStackDevicesToHclTerraform, false)(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosTemplateStackDevicesList",
      },
      location: {
        value: dataPanosTemplateStackLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosTemplateStackLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_group_source: {
        value: dataPanosTemplateStackUserGroupSourceToHclTerraform(this._userGroupSource.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosTemplateStackUserGroupSource",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
