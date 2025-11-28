// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DecryptionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#location DecryptionPolicy#location}
  */
  readonly location: DecryptionPolicyLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#rules DecryptionPolicy#rules}
  */
  readonly rules: DecryptionPolicyRules[] | cdktf.IResolvable;
}
export interface DecryptionPolicyLocationDeviceGroup {
  /**
  * The device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#name DecryptionPolicy#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#panorama_device DecryptionPolicy#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#rulebase DecryptionPolicy#rulebase}
  */
  readonly rulebase?: string;
}

export function decryptionPolicyLocationDeviceGroupToTerraform(struct?: DecryptionPolicyLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function decryptionPolicyLocationDeviceGroupToHclTerraform(struct?: DecryptionPolicyLocationDeviceGroup | cdktf.IResolvable): any {
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
    rulebase: {
      value: cdktf.stringToHclTerraform(struct!.rulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyLocationDeviceGroup | cdktf.IResolvable | undefined {
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
    if (this._rulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulebase = this._rulebase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyLocationDeviceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._panoramaDevice = undefined;
      this._rulebase = undefined;
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
      this._rulebase = value.rulebase;
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

  // rulebase - computed: true, optional: true, required: false
  private _rulebase?: string; 
  public get rulebase() {
    return this.getStringAttribute('rulebase');
  }
  public set rulebase(value: string) {
    this._rulebase = value;
  }
  public resetRulebase() {
    this._rulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulebaseInput() {
    return this._rulebase;
  }
}
export interface DecryptionPolicyLocationShared {
  /**
  * Rulebase name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#rulebase DecryptionPolicy#rulebase}
  */
  readonly rulebase?: string;
}

export function decryptionPolicyLocationSharedToTerraform(struct?: DecryptionPolicyLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function decryptionPolicyLocationSharedToHclTerraform(struct?: DecryptionPolicyLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rulebase: {
      value: cdktf.stringToHclTerraform(struct!.rulebase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rulebase !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulebase = this._rulebase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyLocationShared | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rulebase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rulebase = value.rulebase;
    }
  }

  // rulebase - computed: true, optional: true, required: false
  private _rulebase?: string; 
  public get rulebase() {
    return this.getStringAttribute('rulebase');
  }
  public set rulebase(value: string) {
    this._rulebase = value;
  }
  public resetRulebase() {
    this._rulebase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulebaseInput() {
    return this._rulebase;
  }
}
export interface DecryptionPolicyLocationVsys {
  /**
  * The vsys name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#name DecryptionPolicy#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#ngfw_device DecryptionPolicy#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function decryptionPolicyLocationVsysToTerraform(struct?: DecryptionPolicyLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function decryptionPolicyLocationVsysToHclTerraform(struct?: DecryptionPolicyLocationVsys | cdktf.IResolvable): any {
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

export class DecryptionPolicyLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DecryptionPolicyLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DecryptionPolicyLocation {
  /**
  * Located in a specific device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#device_group DecryptionPolicy#device_group}
  */
  readonly deviceGroup?: DecryptionPolicyLocationDeviceGroup;
  /**
  * Located in a shared rulebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#shared DecryptionPolicy#shared}
  */
  readonly shared?: DecryptionPolicyLocationShared;
  /**
  * Located in a specific vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#vsys DecryptionPolicy#vsys}
  */
  readonly vsys?: DecryptionPolicyLocationVsys;
}

export function decryptionPolicyLocationToTerraform(struct?: DecryptionPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: decryptionPolicyLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: decryptionPolicyLocationSharedToTerraform(struct!.shared),
    vsys: decryptionPolicyLocationVsysToTerraform(struct!.vsys),
  }
}


export function decryptionPolicyLocationToHclTerraform(struct?: DecryptionPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: decryptionPolicyLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyLocationDeviceGroup",
    },
    shared: {
      value: decryptionPolicyLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyLocationShared",
    },
    vsys: {
      value: decryptionPolicyLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DecryptionPolicyLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DecryptionPolicyLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DecryptionPolicyLocationDeviceGroup) {
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
  private _shared = new DecryptionPolicyLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DecryptionPolicyLocationShared) {
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
  private _vsys = new DecryptionPolicyLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DecryptionPolicyLocationVsys) {
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
export interface DecryptionPolicyRulesTargetDevicesVsys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#name DecryptionPolicy#name}
  */
  readonly name: string;
}

export function decryptionPolicyRulesTargetDevicesVsysToTerraform(struct?: DecryptionPolicyRulesTargetDevicesVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function decryptionPolicyRulesTargetDevicesVsysToHclTerraform(struct?: DecryptionPolicyRulesTargetDevicesVsys | cdktf.IResolvable): any {
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

export class DecryptionPolicyRulesTargetDevicesVsysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DecryptionPolicyRulesTargetDevicesVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DecryptionPolicyRulesTargetDevicesVsys | cdktf.IResolvable | undefined) {
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
}

export class DecryptionPolicyRulesTargetDevicesVsysList extends cdktf.ComplexList {
  public internalValue? : DecryptionPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable

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
  public get(index: number): DecryptionPolicyRulesTargetDevicesVsysOutputReference {
    return new DecryptionPolicyRulesTargetDevicesVsysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DecryptionPolicyRulesTargetDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#name DecryptionPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#vsys DecryptionPolicy#vsys}
  */
  readonly vsys?: DecryptionPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable;
}

export function decryptionPolicyRulesTargetDevicesToTerraform(struct?: DecryptionPolicyRulesTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vsys: cdktf.listMapper(decryptionPolicyRulesTargetDevicesVsysToTerraform, false)(struct!.vsys),
  }
}


export function decryptionPolicyRulesTargetDevicesToHclTerraform(struct?: DecryptionPolicyRulesTargetDevices | cdktf.IResolvable): any {
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
    vsys: {
      value: cdktf.listMapperHcl(decryptionPolicyRulesTargetDevicesVsysToHclTerraform, false)(struct!.vsys),
      isBlock: true,
      type: "list",
      storageClassType: "DecryptionPolicyRulesTargetDevicesVsysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyRulesTargetDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DecryptionPolicyRulesTargetDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyRulesTargetDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vsys.internalValue = value.vsys;
    }
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

  // vsys - computed: false, optional: true, required: false
  private _vsys = new DecryptionPolicyRulesTargetDevicesVsysList(this, "vsys", false);
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DecryptionPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable) {
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

export class DecryptionPolicyRulesTargetDevicesList extends cdktf.ComplexList {
  public internalValue? : DecryptionPolicyRulesTargetDevices[] | cdktf.IResolvable

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
  public get(index: number): DecryptionPolicyRulesTargetDevicesOutputReference {
    return new DecryptionPolicyRulesTargetDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DecryptionPolicyRulesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#devices DecryptionPolicy#devices}
  */
  readonly devices?: DecryptionPolicyRulesTargetDevices[] | cdktf.IResolvable;
  /**
  * Target to all but these specified devices and tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#negate DecryptionPolicy#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#tags DecryptionPolicy#tags}
  */
  readonly tags?: string[];
}

export function decryptionPolicyRulesTargetToTerraform(struct?: DecryptionPolicyRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(decryptionPolicyRulesTargetDevicesToTerraform, false)(struct!.devices),
    negate: cdktf.booleanToTerraform(struct!.negate),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function decryptionPolicyRulesTargetToHclTerraform(struct?: DecryptionPolicyRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(decryptionPolicyRulesTargetDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DecryptionPolicyRulesTargetDevicesList",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyRulesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyRulesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyRulesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices.internalValue = undefined;
      this._negate = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices.internalValue = value.devices;
      this._negate = value.negate;
      this._tags = value.tags;
    }
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new DecryptionPolicyRulesTargetDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DecryptionPolicyRulesTargetDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // tags - computed: false, optional: true, required: false
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
}
export interface DecryptionPolicyRulesTypeSshProxy {
}

export function decryptionPolicyRulesTypeSshProxyToTerraform(struct?: DecryptionPolicyRulesTypeSshProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function decryptionPolicyRulesTypeSshProxyToHclTerraform(struct?: DecryptionPolicyRulesTypeSshProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DecryptionPolicyRulesTypeSshProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyRulesTypeSshProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyRulesTypeSshProxy | cdktf.IResolvable | undefined) {
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
export interface DecryptionPolicyRulesTypeSslForwardProxy {
}

export function decryptionPolicyRulesTypeSslForwardProxyToTerraform(struct?: DecryptionPolicyRulesTypeSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function decryptionPolicyRulesTypeSslForwardProxyToHclTerraform(struct?: DecryptionPolicyRulesTypeSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DecryptionPolicyRulesTypeSslForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyRulesTypeSslForwardProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyRulesTypeSslForwardProxy | cdktf.IResolvable | undefined) {
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
export interface DecryptionPolicyRulesTypeSslInboundInspection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#certificates DecryptionPolicy#certificates}
  */
  readonly certificates?: string[];
}

export function decryptionPolicyRulesTypeSslInboundInspectionToTerraform(struct?: DecryptionPolicyRulesTypeSslInboundInspection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificates),
  }
}


export function decryptionPolicyRulesTypeSslInboundInspectionToHclTerraform(struct?: DecryptionPolicyRulesTypeSslInboundInspection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificates: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyRulesTypeSslInboundInspectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyRulesTypeSslInboundInspection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyRulesTypeSslInboundInspection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificates = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificates = value.certificates;
    }
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }
}
export interface DecryptionPolicyRulesType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#ssh_proxy DecryptionPolicy#ssh_proxy}
  */
  readonly sshProxy?: DecryptionPolicyRulesTypeSshProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#ssl_forward_proxy DecryptionPolicy#ssl_forward_proxy}
  */
  readonly sslForwardProxy?: DecryptionPolicyRulesTypeSslForwardProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#ssl_inbound_inspection DecryptionPolicy#ssl_inbound_inspection}
  */
  readonly sslInboundInspection?: DecryptionPolicyRulesTypeSslInboundInspection;
}

export function decryptionPolicyRulesTypeToTerraform(struct?: DecryptionPolicyRulesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_proxy: decryptionPolicyRulesTypeSshProxyToTerraform(struct!.sshProxy),
    ssl_forward_proxy: decryptionPolicyRulesTypeSslForwardProxyToTerraform(struct!.sslForwardProxy),
    ssl_inbound_inspection: decryptionPolicyRulesTypeSslInboundInspectionToTerraform(struct!.sslInboundInspection),
  }
}


export function decryptionPolicyRulesTypeToHclTerraform(struct?: DecryptionPolicyRulesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_proxy: {
      value: decryptionPolicyRulesTypeSshProxyToHclTerraform(struct!.sshProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyRulesTypeSshProxy",
    },
    ssl_forward_proxy: {
      value: decryptionPolicyRulesTypeSslForwardProxyToHclTerraform(struct!.sslForwardProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyRulesTypeSslForwardProxy",
    },
    ssl_inbound_inspection: {
      value: decryptionPolicyRulesTypeSslInboundInspectionToHclTerraform(struct!.sslInboundInspection),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyRulesTypeSslInboundInspection",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyRulesTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionPolicyRulesType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshProxy = this._sshProxy?.internalValue;
    }
    if (this._sslForwardProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslForwardProxy = this._sslForwardProxy?.internalValue;
    }
    if (this._sslInboundInspection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInboundInspection = this._sslInboundInspection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyRulesType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sshProxy.internalValue = undefined;
      this._sslForwardProxy.internalValue = undefined;
      this._sslInboundInspection.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sshProxy.internalValue = value.sshProxy;
      this._sslForwardProxy.internalValue = value.sslForwardProxy;
      this._sslInboundInspection.internalValue = value.sslInboundInspection;
    }
  }

  // ssh_proxy - computed: false, optional: true, required: false
  private _sshProxy = new DecryptionPolicyRulesTypeSshProxyOutputReference(this, "ssh_proxy");
  public get sshProxy() {
    return this._sshProxy;
  }
  public putSshProxy(value: DecryptionPolicyRulesTypeSshProxy) {
    this._sshProxy.internalValue = value;
  }
  public resetSshProxy() {
    this._sshProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshProxyInput() {
    return this._sshProxy.internalValue;
  }

  // ssl_forward_proxy - computed: false, optional: true, required: false
  private _sslForwardProxy = new DecryptionPolicyRulesTypeSslForwardProxyOutputReference(this, "ssl_forward_proxy");
  public get sslForwardProxy() {
    return this._sslForwardProxy;
  }
  public putSslForwardProxy(value: DecryptionPolicyRulesTypeSslForwardProxy) {
    this._sslForwardProxy.internalValue = value;
  }
  public resetSslForwardProxy() {
    this._sslForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForwardProxyInput() {
    return this._sslForwardProxy.internalValue;
  }

  // ssl_inbound_inspection - computed: false, optional: true, required: false
  private _sslInboundInspection = new DecryptionPolicyRulesTypeSslInboundInspectionOutputReference(this, "ssl_inbound_inspection");
  public get sslInboundInspection() {
    return this._sslInboundInspection;
  }
  public putSslInboundInspection(value: DecryptionPolicyRulesTypeSslInboundInspection) {
    this._sslInboundInspection.internalValue = value;
  }
  public resetSslInboundInspection() {
    this._sslInboundInspection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInboundInspectionInput() {
    return this._sslInboundInspection.internalValue;
  }
}
export interface DecryptionPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#action DecryptionPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#category DecryptionPolicy#category}
  */
  readonly category?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#description DecryptionPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#destination_addresses DecryptionPolicy#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#destination_hip DecryptionPolicy#destination_hip}
  */
  readonly destinationHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#destination_zones DecryptionPolicy#destination_zones}
  */
  readonly destinationZones?: string[];
  /**
  * Disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#disabled DecryptionPolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#group_tag DecryptionPolicy#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Log unsuccessful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#log_fail DecryptionPolicy#log_fail}
  */
  readonly logFail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#log_setting DecryptionPolicy#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log successful TLS handshakes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#log_success DecryptionPolicy#log_success}
  */
  readonly logSuccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#name DecryptionPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#negate_destination DecryptionPolicy#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#negate_source DecryptionPolicy#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * packet-broker profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#packet_broker_profile DecryptionPolicy#packet_broker_profile}
  */
  readonly packetBrokerProfile?: string;
  /**
  * decryption profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#profile DecryptionPolicy#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#services DecryptionPolicy#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#source_addresses DecryptionPolicy#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#source_hip DecryptionPolicy#source_hip}
  */
  readonly sourceHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#source_user DecryptionPolicy#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#source_zones DecryptionPolicy#source_zones}
  */
  readonly sourceZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#tag DecryptionPolicy#tag}
  */
  readonly tag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#target DecryptionPolicy#target}
  */
  readonly target?: DecryptionPolicyRulesTarget;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#type DecryptionPolicy#type}
  */
  readonly type?: DecryptionPolicyRulesType;
}

export function decryptionPolicyRulesToTerraform(struct?: DecryptionPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationHip),
    destination_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationZones),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    group_tag: cdktf.stringToTerraform(struct!.groupTag),
    log_fail: cdktf.booleanToTerraform(struct!.logFail),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    log_success: cdktf.booleanToTerraform(struct!.logSuccess),
    name: cdktf.stringToTerraform(struct!.name),
    negate_destination: cdktf.booleanToTerraform(struct!.negateDestination),
    negate_source: cdktf.booleanToTerraform(struct!.negateSource),
    packet_broker_profile: cdktf.stringToTerraform(struct!.packetBrokerProfile),
    profile: cdktf.stringToTerraform(struct!.profile),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceHip),
    source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUser),
    source_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceZones),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
    target: decryptionPolicyRulesTargetToTerraform(struct!.target),
    type: decryptionPolicyRulesTypeToTerraform(struct!.type),
  }
}


export function decryptionPolicyRulesToHclTerraform(struct?: DecryptionPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.category),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_hip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationHip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_tag: {
      value: cdktf.stringToHclTerraform(struct!.groupTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_fail: {
      value: cdktf.booleanToHclTerraform(struct!.logFail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_setting: {
      value: cdktf.stringToHclTerraform(struct!.logSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_success: {
      value: cdktf.booleanToHclTerraform(struct!.logSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    negate_destination: {
      value: cdktf.booleanToHclTerraform(struct!.negateDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate_source: {
      value: cdktf.booleanToHclTerraform(struct!.negateSource),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    packet_broker_profile: {
      value: cdktf.stringToHclTerraform(struct!.packetBrokerProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_hip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceHip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_user: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUser),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: decryptionPolicyRulesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyRulesTarget",
    },
    type: {
      value: decryptionPolicyRulesTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionPolicyRulesType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DecryptionPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationHip !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationHip = this._destinationHip;
    }
    if (this._destinationZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationZones = this._destinationZones;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._groupTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTag = this._groupTag;
    }
    if (this._logFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFail = this._logFail;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._logSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSuccess = this._logSuccess;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._negateDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateDestination = this._negateDestination;
    }
    if (this._negateSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.negateSource = this._negateSource;
    }
    if (this._packetBrokerProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetBrokerProfile = this._packetBrokerProfile;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceHip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHip = this._sourceHip;
    }
    if (this._sourceUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUser = this._sourceUser;
    }
    if (this._sourceZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceZones = this._sourceZones;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationHip = undefined;
      this._destinationZones = undefined;
      this._disabled = undefined;
      this._groupTag = undefined;
      this._logFail = undefined;
      this._logSetting = undefined;
      this._logSuccess = undefined;
      this._name = undefined;
      this._negateDestination = undefined;
      this._negateSource = undefined;
      this._packetBrokerProfile = undefined;
      this._profile = undefined;
      this._services = undefined;
      this._sourceAddresses = undefined;
      this._sourceHip = undefined;
      this._sourceUser = undefined;
      this._sourceZones = undefined;
      this._tag = undefined;
      this._target.internalValue = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category = value.category;
      this._description = value.description;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationHip = value.destinationHip;
      this._destinationZones = value.destinationZones;
      this._disabled = value.disabled;
      this._groupTag = value.groupTag;
      this._logFail = value.logFail;
      this._logSetting = value.logSetting;
      this._logSuccess = value.logSuccess;
      this._name = value.name;
      this._negateDestination = value.negateDestination;
      this._negateSource = value.negateSource;
      this._packetBrokerProfile = value.packetBrokerProfile;
      this._profile = value.profile;
      this._services = value.services;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceHip = value.sourceHip;
      this._sourceUser = value.sourceUser;
      this._sourceZones = value.sourceZones;
      this._tag = value.tag;
      this._target.internalValue = value.target;
      this._type.internalValue = value.type;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string[]; 
  public get category() {
    return this.getListAttribute('category');
  }
  public set category(value: string[]) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: false, optional: true, required: false
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

  // destination_addresses - computed: false, optional: true, required: false
  private _destinationAddresses?: string[]; 
  public get destinationAddresses() {
    return this.getListAttribute('destination_addresses');
  }
  public set destinationAddresses(value: string[]) {
    this._destinationAddresses = value;
  }
  public resetDestinationAddresses() {
    this._destinationAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAddressesInput() {
    return this._destinationAddresses;
  }

  // destination_hip - computed: false, optional: true, required: false
  private _destinationHip?: string[]; 
  public get destinationHip() {
    return this.getListAttribute('destination_hip');
  }
  public set destinationHip(value: string[]) {
    this._destinationHip = value;
  }
  public resetDestinationHip() {
    this._destinationHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHipInput() {
    return this._destinationHip;
  }

  // destination_zones - computed: false, optional: true, required: false
  private _destinationZones?: string[]; 
  public get destinationZones() {
    return this.getListAttribute('destination_zones');
  }
  public set destinationZones(value: string[]) {
    this._destinationZones = value;
  }
  public resetDestinationZones() {
    this._destinationZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZonesInput() {
    return this._destinationZones;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // group_tag - computed: false, optional: true, required: false
  private _groupTag?: string; 
  public get groupTag() {
    return this.getStringAttribute('group_tag');
  }
  public set groupTag(value: string) {
    this._groupTag = value;
  }
  public resetGroupTag() {
    this._groupTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupTagInput() {
    return this._groupTag;
  }

  // log_fail - computed: false, optional: true, required: false
  private _logFail?: boolean | cdktf.IResolvable; 
  public get logFail() {
    return this.getBooleanAttribute('log_fail');
  }
  public set logFail(value: boolean | cdktf.IResolvable) {
    this._logFail = value;
  }
  public resetLogFail() {
    this._logFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFailInput() {
    return this._logFail;
  }

  // log_setting - computed: false, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // log_success - computed: false, optional: true, required: false
  private _logSuccess?: boolean | cdktf.IResolvable; 
  public get logSuccess() {
    return this.getBooleanAttribute('log_success');
  }
  public set logSuccess(value: boolean | cdktf.IResolvable) {
    this._logSuccess = value;
  }
  public resetLogSuccess() {
    this._logSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSuccessInput() {
    return this._logSuccess;
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

  // negate_destination - computed: false, optional: true, required: false
  private _negateDestination?: boolean | cdktf.IResolvable; 
  public get negateDestination() {
    return this.getBooleanAttribute('negate_destination');
  }
  public set negateDestination(value: boolean | cdktf.IResolvable) {
    this._negateDestination = value;
  }
  public resetNegateDestination() {
    this._negateDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateDestinationInput() {
    return this._negateDestination;
  }

  // negate_source - computed: false, optional: true, required: false
  private _negateSource?: boolean | cdktf.IResolvable; 
  public get negateSource() {
    return this.getBooleanAttribute('negate_source');
  }
  public set negateSource(value: boolean | cdktf.IResolvable) {
    this._negateSource = value;
  }
  public resetNegateSource() {
    this._negateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateSourceInput() {
    return this._negateSource;
  }

  // packet_broker_profile - computed: false, optional: true, required: false
  private _packetBrokerProfile?: string; 
  public get packetBrokerProfile() {
    return this.getStringAttribute('packet_broker_profile');
  }
  public set packetBrokerProfile(value: string) {
    this._packetBrokerProfile = value;
  }
  public resetPacketBrokerProfile() {
    this._packetBrokerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetBrokerProfileInput() {
    return this._packetBrokerProfile;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // source_addresses - computed: false, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return this.getListAttribute('source_addresses');
  }
  public set sourceAddresses(value: string[]) {
    this._sourceAddresses = value;
  }
  public resetSourceAddresses() {
    this._sourceAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressesInput() {
    return this._sourceAddresses;
  }

  // source_hip - computed: false, optional: true, required: false
  private _sourceHip?: string[]; 
  public get sourceHip() {
    return this.getListAttribute('source_hip');
  }
  public set sourceHip(value: string[]) {
    this._sourceHip = value;
  }
  public resetSourceHip() {
    this._sourceHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHipInput() {
    return this._sourceHip;
  }

  // source_user - computed: false, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // source_zones - computed: false, optional: true, required: false
  private _sourceZones?: string[]; 
  public get sourceZones() {
    return this.getListAttribute('source_zones');
  }
  public set sourceZones(value: string[]) {
    this._sourceZones = value;
  }
  public resetSourceZones() {
    this._sourceZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceZonesInput() {
    return this._sourceZones;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DecryptionPolicyRulesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DecryptionPolicyRulesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new DecryptionPolicyRulesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DecryptionPolicyRulesType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class DecryptionPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : DecryptionPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): DecryptionPolicyRulesOutputReference {
    return new DecryptionPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy panos_decryption_policy}
*/
export class DecryptionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_decryption_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DecryptionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DecryptionPolicy to import
  * @param importFromId The id of the existing DecryptionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DecryptionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_decryption_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/decryption_policy panos_decryption_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DecryptionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DecryptionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_decryption_policy',
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
    this._location.internalValue = config.location;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new DecryptionPolicyLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DecryptionPolicyLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DecryptionPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DecryptionPolicyRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: decryptionPolicyLocationToTerraform(this._location.internalValue),
      rules: cdktf.listMapper(decryptionPolicyRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: decryptionPolicyLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DecryptionPolicyLocation",
      },
      rules: {
        value: cdktf.listMapperHcl(decryptionPolicyRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DecryptionPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
