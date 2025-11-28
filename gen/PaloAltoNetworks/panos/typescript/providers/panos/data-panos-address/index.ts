// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#description DataPanosAddress#description}
  */
  readonly description?: string;
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#disable_override DataPanosAddress#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * The FQDN value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#fqdn DataPanosAddress#fqdn}
  */
  readonly fqdn?: string;
  /**
  * The IP netmask value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#ip_netmask DataPanosAddress#ip_netmask}
  */
  readonly ipNetmask?: string;
  /**
  * The IP range value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#ip_range DataPanosAddress#ip_range}
  */
  readonly ipRange?: string;
  /**
  * The IP wildcard value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#ip_wildcard DataPanosAddress#ip_wildcard}
  */
  readonly ipWildcard?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#location DataPanosAddress#location}
  */
  readonly location: DataPanosAddressLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#name DataPanosAddress#name}
  */
  readonly name: string;
  /**
  * The administrative tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#tags DataPanosAddress#tags}
  */
  readonly tags?: string[];
}
export interface DataPanosAddressLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#name DataPanosAddress#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#panorama_device DataPanosAddress#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosAddressLocationDeviceGroupToTerraform(struct?: DataPanosAddressLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosAddressLocationDeviceGroupToHclTerraform(struct?: DataPanosAddressLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosAddressLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAddressLocationDeviceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAddressLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._panoramaDevice = value.panoramaDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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
export interface DataPanosAddressLocationShared {
}

export function dataPanosAddressLocationSharedToTerraform(struct?: DataPanosAddressLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAddressLocationSharedToHclTerraform(struct?: DataPanosAddressLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAddressLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAddressLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAddressLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DataPanosAddressLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#name DataPanosAddress#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#ngfw_device DataPanosAddress#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosAddressLocationVsysToTerraform(struct?: DataPanosAddressLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosAddressLocationVsysToHclTerraform(struct?: DataPanosAddressLocationVsys | cdktf.IResolvable): any {
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
    ngfw_device: {
      value: cdktf.stringToHclTerraform(struct!.ngfwDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAddressLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAddressLocationVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAddressLocationVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._ngfwDevice = value.ngfwDevice;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // ngfw_device - computed: true, optional: true, required: false
  private _ngfwDevice?: string; 
  public get ngfwDevice() {
    return this.getStringAttribute('ngfw_device');
  }
  public set ngfwDevice(value: string) {
    this._ngfwDevice = value;
  }
  public resetNgfwDevice() {
    this._ngfwDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwDeviceInput() {
    return this._ngfwDevice;
  }
}
export interface DataPanosAddressLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#device_group DataPanosAddress#device_group}
  */
  readonly deviceGroup?: DataPanosAddressLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#shared DataPanosAddress#shared}
  */
  readonly shared?: DataPanosAddressLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#vsys DataPanosAddress#vsys}
  */
  readonly vsys?: DataPanosAddressLocationVsys;
}

export function dataPanosAddressLocationToTerraform(struct?: DataPanosAddressLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosAddressLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosAddressLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosAddressLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosAddressLocationToHclTerraform(struct?: DataPanosAddressLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosAddressLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAddressLocationDeviceGroup",
    },
    shared: {
      value: dataPanosAddressLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAddressLocationShared",
    },
    vsys: {
      value: dataPanosAddressLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAddressLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAddressLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAddressLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceGroup = this._deviceGroup?.internalValue;
    }
    if (this._shared?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAddressLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = undefined;
      this._shared.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = value.deviceGroup;
      this._shared.internalValue = value.shared;
      this._vsys.internalValue = value.vsys;
    }
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup = new DataPanosAddressLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosAddressLocationDeviceGroup) {
    this._deviceGroup.internalValue = value;
  }
  public resetDeviceGroup() {
    this._deviceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceGroupInput() {
    return this._deviceGroup.internalValue;
  }

  // shared - computed: false, optional: true, required: false
  private _shared = new DataPanosAddressLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosAddressLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new DataPanosAddressLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosAddressLocationVsys) {
    this._vsys.internalValue = value;
  }
  public resetVsys() {
    this._vsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address panos_address}
*/
export class DataPanosAddress extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosAddress to import
  * @param importFromId The id of the existing DataPanosAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/address panos_address} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosAddressConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_address',
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
    this._description = config.description;
    this._disableOverride = config.disableOverride;
    this._fqdn = config.fqdn;
    this._ipNetmask = config.ipNetmask;
    this._ipRange = config.ipRange;
    this._ipWildcard = config.ipWildcard;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disable_override - computed: true, optional: true, required: false
  private _disableOverride?: string; 
  public get disableOverride() {
    return this.getStringAttribute('disable_override');
  }
  public set disableOverride(value: string) {
    this._disableOverride = value;
  }
  public resetDisableOverride() {
    this._disableOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOverrideInput() {
    return this._disableOverride;
  }

  // fqdn - computed: true, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_netmask - computed: true, optional: true, required: false
  private _ipNetmask?: string; 
  public get ipNetmask() {
    return this.getStringAttribute('ip_netmask');
  }
  public set ipNetmask(value: string) {
    this._ipNetmask = value;
  }
  public resetIpNetmask() {
    this._ipNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetmaskInput() {
    return this._ipNetmask;
  }

  // ip_range - computed: true, optional: true, required: false
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  public resetIpRange() {
    this._ipRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // ip_wildcard - computed: true, optional: true, required: false
  private _ipWildcard?: string; 
  public get ipWildcard() {
    return this.getStringAttribute('ip_wildcard');
  }
  public set ipWildcard(value: string) {
    this._ipWildcard = value;
  }
  public resetIpWildcard() {
    this._ipWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipWildcardInput() {
    return this._ipWildcard;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosAddressLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosAddressLocation) {
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

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      ip_netmask: cdktf.stringToTerraform(this._ipNetmask),
      ip_range: cdktf.stringToTerraform(this._ipRange),
      ip_wildcard: cdktf.stringToTerraform(this._ipWildcard),
      location: dataPanosAddressLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_override: {
        value: cdktf.stringToHclTerraform(this._disableOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_netmask: {
        value: cdktf.stringToHclTerraform(this._ipNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range: {
        value: cdktf.stringToHclTerraform(this._ipRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_wildcard: {
        value: cdktf.stringToHclTerraform(this._ipWildcard),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: dataPanosAddressLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAddressLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
