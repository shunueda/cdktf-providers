// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosNatPolicyRulesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#location DataPanosNatPolicyRulesA#location}
  */
  readonly location: DataPanosNatPolicyRulesLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#position DataPanosNatPolicyRulesA#position}
  */
  readonly position: DataPanosNatPolicyRulesPosition;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#rules DataPanosNatPolicyRulesA#rules}
  */
  readonly rules: DataPanosNatPolicyRulesRules[] | cdktf.IResolvable;
}
export interface DataPanosNatPolicyRulesLocationDeviceGroup {
  /**
  * The device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#name DataPanosNatPolicyRulesA#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#panorama_device DataPanosNatPolicyRulesA#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#rulebase DataPanosNatPolicyRulesA#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosNatPolicyRulesLocationDeviceGroupToTerraform(struct?: DataPanosNatPolicyRulesLocationDeviceGroup | cdktf.IResolvable): any {
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


export function dataPanosNatPolicyRulesLocationDeviceGroupToHclTerraform(struct?: DataPanosNatPolicyRulesLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesLocationShared {
  /**
  * Rulebase name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#rulebase DataPanosNatPolicyRulesA#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosNatPolicyRulesLocationSharedToTerraform(struct?: DataPanosNatPolicyRulesLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function dataPanosNatPolicyRulesLocationSharedToHclTerraform(struct?: DataPanosNatPolicyRulesLocationShared | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesLocationShared | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesLocationVsys {
  /**
  * The vsys name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#name DataPanosNatPolicyRulesA#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#ngfw_device DataPanosNatPolicyRulesA#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosNatPolicyRulesLocationVsysToTerraform(struct?: DataPanosNatPolicyRulesLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosNatPolicyRulesLocationVsysToHclTerraform(struct?: DataPanosNatPolicyRulesLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesLocation {
  /**
  * Located in a specific device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#device_group DataPanosNatPolicyRulesA#device_group}
  */
  readonly deviceGroup?: DataPanosNatPolicyRulesLocationDeviceGroup;
  /**
  * Located in a shared rulebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#shared DataPanosNatPolicyRulesA#shared}
  */
  readonly shared?: DataPanosNatPolicyRulesLocationShared;
  /**
  * Located in a specific vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#vsys DataPanosNatPolicyRulesA#vsys}
  */
  readonly vsys?: DataPanosNatPolicyRulesLocationVsys;
}

export function dataPanosNatPolicyRulesLocationToTerraform(struct?: DataPanosNatPolicyRulesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosNatPolicyRulesLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosNatPolicyRulesLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosNatPolicyRulesLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosNatPolicyRulesLocationToHclTerraform(struct?: DataPanosNatPolicyRulesLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosNatPolicyRulesLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesLocationDeviceGroup",
    },
    shared: {
      value: dataPanosNatPolicyRulesLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesLocationShared",
    },
    vsys: {
      value: dataPanosNatPolicyRulesLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DataPanosNatPolicyRulesLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosNatPolicyRulesLocationDeviceGroup) {
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
  private _shared = new DataPanosNatPolicyRulesLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosNatPolicyRulesLocationShared) {
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
  private _vsys = new DataPanosNatPolicyRulesLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosNatPolicyRulesLocationVsys) {
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
export interface DataPanosNatPolicyRulesPosition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#directly DataPanosNatPolicyRulesA#directly}
  */
  readonly directly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#pivot DataPanosNatPolicyRulesA#pivot}
  */
  readonly pivot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#where DataPanosNatPolicyRulesA#where}
  */
  readonly where: string;
}

export function dataPanosNatPolicyRulesPositionToTerraform(struct?: DataPanosNatPolicyRulesPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directly: cdktf.booleanToTerraform(struct!.directly),
    pivot: cdktf.stringToTerraform(struct!.pivot),
    where: cdktf.stringToTerraform(struct!.where),
  }
}


export function dataPanosNatPolicyRulesPositionToHclTerraform(struct?: DataPanosNatPolicyRulesPosition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directly: {
      value: cdktf.booleanToHclTerraform(struct!.directly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pivot: {
      value: cdktf.stringToHclTerraform(struct!.pivot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    where: {
      value: cdktf.stringToHclTerraform(struct!.where),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesPositionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesPosition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directly !== undefined) {
      hasAnyValues = true;
      internalValueResult.directly = this._directly;
    }
    if (this._pivot !== undefined) {
      hasAnyValues = true;
      internalValueResult.pivot = this._pivot;
    }
    if (this._where !== undefined) {
      hasAnyValues = true;
      internalValueResult.where = this._where;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesPosition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directly = undefined;
      this._pivot = undefined;
      this._where = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directly = value.directly;
      this._pivot = value.pivot;
      this._where = value.where;
    }
  }

  // directly - computed: false, optional: true, required: false
  private _directly?: boolean | cdktf.IResolvable; 
  public get directly() {
    return this.getBooleanAttribute('directly');
  }
  public set directly(value: boolean | cdktf.IResolvable) {
    this._directly = value;
  }
  public resetDirectly() {
    this._directly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directlyInput() {
    return this._directly;
  }

  // pivot - computed: false, optional: true, required: false
  private _pivot?: string; 
  public get pivot() {
    return this.getStringAttribute('pivot');
  }
  public set pivot(value: string) {
    this._pivot = value;
  }
  public resetPivot() {
    this._pivot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pivotInput() {
    return this._pivot;
  }

  // where - computed: false, optional: false, required: true
  private _where?: string; 
  public get where() {
    return this.getStringAttribute('where');
  }
  public set where(value: string) {
    this._where = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whereInput() {
    return this._where;
  }
}
export interface DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite {
  /**
  * Select direction to apply DNS rewrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#direction DataPanosNatPolicyRulesA#direction}
  */
  readonly direction?: string;
}

export function dataPanosNatPolicyRulesRulesDestinationTranslationDnsRewriteToTerraform(struct?: DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
  }
}


export function dataPanosNatPolicyRulesRulesDestinationTranslationDnsRewriteToHclTerraform(struct?: DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
    }
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }
}
export interface DataPanosNatPolicyRulesRulesDestinationTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#dns_rewrite DataPanosNatPolicyRulesA#dns_rewrite}
  */
  readonly dnsRewrite?: DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_address DataPanosNatPolicyRulesA#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_port DataPanosNatPolicyRulesA#translated_port}
  */
  readonly translatedPort?: number;
}

export function dataPanosNatPolicyRulesRulesDestinationTranslationToTerraform(struct?: DataPanosNatPolicyRulesRulesDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_rewrite: dataPanosNatPolicyRulesRulesDestinationTranslationDnsRewriteToTerraform(struct!.dnsRewrite),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}


export function dataPanosNatPolicyRulesRulesDestinationTranslationToHclTerraform(struct?: DataPanosNatPolicyRulesRulesDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_rewrite: {
      value: dataPanosNatPolicyRulesRulesDestinationTranslationDnsRewriteToHclTerraform(struct!.dnsRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite",
    },
    translated_address: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_port: {
      value: cdktf.numberToHclTerraform(struct!.translatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesDestinationTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsRewrite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRewrite = this._dnsRewrite?.internalValue;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    if (this._translatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedPort = this._translatedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesDestinationTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsRewrite.internalValue = undefined;
      this._translatedAddress = undefined;
      this._translatedPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsRewrite.internalValue = value.dnsRewrite;
      this._translatedAddress = value.translatedAddress;
      this._translatedPort = value.translatedPort;
    }
  }

  // dns_rewrite - computed: true, optional: true, required: false
  private _dnsRewrite = new DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewriteOutputReference(this, "dns_rewrite");
  public get dnsRewrite() {
    return this._dnsRewrite;
  }
  public putDnsRewrite(value: DataPanosNatPolicyRulesRulesDestinationTranslationDnsRewrite) {
    this._dnsRewrite.internalValue = value;
  }
  public resetDnsRewrite() {
    this._dnsRewrite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRewriteInput() {
    return this._dnsRewrite.internalValue;
  }

  // translated_address - computed: true, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }

  // translated_port - computed: true, optional: true, required: false
  private _translatedPort?: number; 
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
  public set translatedPort(value: number) {
    this._translatedPort = value;
  }
  public resetTranslatedPort() {
    this._translatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }
}
export interface DataPanosNatPolicyRulesRulesDynamicDestinationTranslation {
  /**
  * Distribution algorithm for destination address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#distribution DataPanosNatPolicyRulesA#distribution}
  */
  readonly distribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_address DataPanosNatPolicyRulesA#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_port DataPanosNatPolicyRulesA#translated_port}
  */
  readonly translatedPort?: number;
}

export function dataPanosNatPolicyRulesRulesDynamicDestinationTranslationToTerraform(struct?: DataPanosNatPolicyRulesRulesDynamicDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distribution: cdktf.stringToTerraform(struct!.distribution),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}


export function dataPanosNatPolicyRulesRulesDynamicDestinationTranslationToHclTerraform(struct?: DataPanosNatPolicyRulesRulesDynamicDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distribution: {
      value: cdktf.stringToHclTerraform(struct!.distribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_address: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_port: {
      value: cdktf.numberToHclTerraform(struct!.translatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesDynamicDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesDynamicDestinationTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    if (this._translatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedPort = this._translatedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesDynamicDestinationTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distribution = undefined;
      this._translatedAddress = undefined;
      this._translatedPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distribution = value.distribution;
      this._translatedAddress = value.translatedAddress;
      this._translatedPort = value.translatedPort;
    }
  }

  // distribution - computed: true, optional: true, required: false
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  public resetDistribution() {
    this._distribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // translated_address - computed: true, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }

  // translated_port - computed: true, optional: true, required: false
  private _translatedPort?: number; 
  public get translatedPort() {
    return this.getNumberAttribute('translated_port');
  }
  public set translatedPort(value: number) {
    this._translatedPort = value;
  }
  public resetTranslatedPort() {
    this._translatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
  }
}
export interface DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#floating_ip DataPanosNatPolicyRulesA#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#interface DataPanosNatPolicyRulesA#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#ip DataPanosNatPolicyRulesA#ip}
  */
  readonly ip?: string;
}

export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddressToTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddressToHclTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp = undefined;
      this._interface = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp = value.floatingIp;
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#interface_address DataPanosNatPolicyRulesA#interface_address}
  */
  readonly interfaceAddress?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_address DataPanosNatPolicyRulesA#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackToTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_address: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddressToTerraform(struct!.interfaceAddress),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackToHclTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_address: {
      value: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddressToHclTerraform(struct!.interfaceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress",
    },
    translated_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.translatedAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceAddress = this._interfaceAddress?.internalValue;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceAddress.internalValue = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceAddress.internalValue = value.interfaceAddress;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // interface_address - computed: true, optional: true, required: false
  private _interfaceAddress = new DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddressOutputReference(this, "interface_address");
  public get interfaceAddress() {
    return this._interfaceAddress;
  }
  public putInterfaceAddress(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackInterfaceAddress) {
    this._interfaceAddress.internalValue = value;
  }
  public resetInterfaceAddress() {
    this._interfaceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAddressInput() {
    return this._interfaceAddress.internalValue;
  }

  // translated_address - computed: true, optional: true, required: false
  private _translatedAddress?: string[]; 
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
  public set translatedAddress(value: string[]) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#fallback DataPanosNatPolicyRulesA#fallback}
  */
  readonly fallback?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_address DataPanosNatPolicyRulesA#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpToTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackToTerraform(struct!.fallback),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpToHclTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback: {
      value: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback",
    },
    translated_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.translatedAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallback?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback?.internalValue;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallback.internalValue = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallback.internalValue = value.fallback;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // fallback - computed: true, optional: true, required: false
  private _fallback = new DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpFallback) {
    this._fallback.internalValue = value;
  }
  public resetFallback() {
    this._fallback.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback.internalValue;
  }

  // translated_address - computed: true, optional: true, required: false
  private _translatedAddress?: string[]; 
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
  public set translatedAddress(value: string[]) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#floating_ip DataPanosNatPolicyRulesA#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#interface DataPanosNatPolicyRulesA#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#ip DataPanosNatPolicyRulesA#ip}
  */
  readonly ip?: string;
}

export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddressToTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddressToHclTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp = undefined;
      this._interface = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp = value.floatingIp;
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}
export interface DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#interface_address DataPanosNatPolicyRulesA#interface_address}
  */
  readonly interfaceAddress?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_address DataPanosNatPolicyRulesA#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortToTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_address: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddressToTerraform(struct!.interfaceAddress),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortToHclTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_address: {
      value: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddressToHclTerraform(struct!.interfaceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress",
    },
    translated_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.translatedAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceAddress = this._interfaceAddress?.internalValue;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceAddress.internalValue = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceAddress.internalValue = value.interfaceAddress;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // interface_address - computed: true, optional: true, required: false
  private _interfaceAddress = new DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddressOutputReference(this, "interface_address");
  public get interfaceAddress() {
    return this._interfaceAddress;
  }
  public putInterfaceAddress(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortInterfaceAddress) {
    this._interfaceAddress.internalValue = value;
  }
  public resetInterfaceAddress() {
    this._interfaceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceAddressInput() {
    return this._interfaceAddress.internalValue;
  }

  // translated_address - computed: true, optional: true, required: false
  private _translatedAddress?: string[]; 
  public get translatedAddress() {
    return this.getListAttribute('translated_address');
  }
  public set translatedAddress(value: string[]) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface DataPanosNatPolicyRulesRulesSourceTranslationStaticIp {
  /**
  * allow reverse translation from translated address to original address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#bi_directional DataPanosNatPolicyRulesA#bi_directional}
  */
  readonly biDirectional?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#translated_address DataPanosNatPolicyRulesA#translated_address}
  */
  readonly translatedAddress?: string;
}

export function dataPanosNatPolicyRulesRulesSourceTranslationStaticIpToTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bi_directional: cdktf.stringToTerraform(struct!.biDirectional),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesRulesSourceTranslationStaticIpToHclTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslationStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bi_directional: {
      value: cdktf.stringToHclTerraform(struct!.biDirectional),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translated_address: {
      value: cdktf.stringToHclTerraform(struct!.translatedAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesSourceTranslationStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesSourceTranslationStaticIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._biDirectional !== undefined) {
      hasAnyValues = true;
      internalValueResult.biDirectional = this._biDirectional;
    }
    if (this._translatedAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.translatedAddress = this._translatedAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesSourceTranslationStaticIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._biDirectional = undefined;
      this._translatedAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._biDirectional = value.biDirectional;
      this._translatedAddress = value.translatedAddress;
    }
  }

  // bi_directional - computed: true, optional: true, required: false
  private _biDirectional?: string; 
  public get biDirectional() {
    return this.getStringAttribute('bi_directional');
  }
  public set biDirectional(value: string) {
    this._biDirectional = value;
  }
  public resetBiDirectional() {
    this._biDirectional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biDirectionalInput() {
    return this._biDirectional;
  }

  // translated_address - computed: true, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }
}
export interface DataPanosNatPolicyRulesRulesSourceTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#dynamic_ip DataPanosNatPolicyRulesA#dynamic_ip}
  */
  readonly dynamicIp?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#dynamic_ip_and_port DataPanosNatPolicyRulesA#dynamic_ip_and_port}
  */
  readonly dynamicIpAndPort?: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#static_ip DataPanosNatPolicyRulesA#static_ip}
  */
  readonly staticIp?: DataPanosNatPolicyRulesRulesSourceTranslationStaticIp;
}

export function dataPanosNatPolicyRulesRulesSourceTranslationToTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_ip: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpToTerraform(struct!.dynamicIp),
    dynamic_ip_and_port: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortToTerraform(struct!.dynamicIpAndPort),
    static_ip: dataPanosNatPolicyRulesRulesSourceTranslationStaticIpToTerraform(struct!.staticIp),
  }
}


export function dataPanosNatPolicyRulesRulesSourceTranslationToHclTerraform(struct?: DataPanosNatPolicyRulesRulesSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_ip: {
      value: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpToHclTerraform(struct!.dynamicIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp",
    },
    dynamic_ip_and_port: {
      value: dataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortToHclTerraform(struct!.dynamicIpAndPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort",
    },
    static_ip: {
      value: dataPanosNatPolicyRulesRulesSourceTranslationStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesSourceTranslationStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesSourceTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesSourceTranslation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicIp = this._dynamicIp?.internalValue;
    }
    if (this._dynamicIpAndPort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicIpAndPort = this._dynamicIpAndPort?.internalValue;
    }
    if (this._staticIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIp = this._staticIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRulesSourceTranslation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicIp.internalValue = undefined;
      this._dynamicIpAndPort.internalValue = undefined;
      this._staticIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicIp.internalValue = value.dynamicIp;
      this._dynamicIpAndPort.internalValue = value.dynamicIpAndPort;
      this._staticIp.internalValue = value.staticIp;
    }
  }

  // dynamic_ip - computed: true, optional: true, required: false
  private _dynamicIp = new DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpOutputReference(this, "dynamic_ip");
  public get dynamicIp() {
    return this._dynamicIp;
  }
  public putDynamicIp(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIp) {
    this._dynamicIp.internalValue = value;
  }
  public resetDynamicIp() {
    this._dynamicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIpInput() {
    return this._dynamicIp.internalValue;
  }

  // dynamic_ip_and_port - computed: true, optional: true, required: false
  private _dynamicIpAndPort = new DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPortOutputReference(this, "dynamic_ip_and_port");
  public get dynamicIpAndPort() {
    return this._dynamicIpAndPort;
  }
  public putDynamicIpAndPort(value: DataPanosNatPolicyRulesRulesSourceTranslationDynamicIpAndPort) {
    this._dynamicIpAndPort.internalValue = value;
  }
  public resetDynamicIpAndPort() {
    this._dynamicIpAndPort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIpAndPortInput() {
    return this._dynamicIpAndPort.internalValue;
  }

  // static_ip - computed: true, optional: true, required: false
  private _staticIp = new DataPanosNatPolicyRulesRulesSourceTranslationStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: DataPanosNatPolicyRulesRulesSourceTranslationStaticIp) {
    this._staticIp.internalValue = value;
  }
  public resetStaticIp() {
    this._staticIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp.internalValue;
  }
}
export interface DataPanosNatPolicyRulesRulesTargetDevicesVsys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#name DataPanosNatPolicyRulesA#name}
  */
  readonly name: string;
}

export function dataPanosNatPolicyRulesRulesTargetDevicesVsysToTerraform(struct?: DataPanosNatPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosNatPolicyRulesRulesTargetDevicesVsysToHclTerraform(struct?: DataPanosNatPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesRulesTargetDevicesVsysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosNatPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesRulesTargetDevicesVsys | cdktf.IResolvable | undefined) {
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

export class DataPanosNatPolicyRulesRulesTargetDevicesVsysList extends cdktf.ComplexList {
  public internalValue? : DataPanosNatPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable

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
  public get(index: number): DataPanosNatPolicyRulesRulesTargetDevicesVsysOutputReference {
    return new DataPanosNatPolicyRulesRulesTargetDevicesVsysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosNatPolicyRulesRulesTargetDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#name DataPanosNatPolicyRulesA#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#vsys DataPanosNatPolicyRulesA#vsys}
  */
  readonly vsys?: DataPanosNatPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable;
}

export function dataPanosNatPolicyRulesRulesTargetDevicesToTerraform(struct?: DataPanosNatPolicyRulesRulesTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vsys: cdktf.listMapper(dataPanosNatPolicyRulesRulesTargetDevicesVsysToTerraform, false)(struct!.vsys),
  }
}


export function dataPanosNatPolicyRulesRulesTargetDevicesToHclTerraform(struct?: DataPanosNatPolicyRulesRulesTargetDevices | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosNatPolicyRulesRulesTargetDevicesVsysToHclTerraform, false)(struct!.vsys),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosNatPolicyRulesRulesTargetDevicesVsysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesTargetDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosNatPolicyRulesRulesTargetDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesRulesTargetDevices | cdktf.IResolvable | undefined) {
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

  // vsys - computed: true, optional: true, required: false
  private _vsys = new DataPanosNatPolicyRulesRulesTargetDevicesVsysList(this, "vsys", false);
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosNatPolicyRulesRulesTargetDevicesVsys[] | cdktf.IResolvable) {
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

export class DataPanosNatPolicyRulesRulesTargetDevicesList extends cdktf.ComplexList {
  public internalValue? : DataPanosNatPolicyRulesRulesTargetDevices[] | cdktf.IResolvable

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
  public get(index: number): DataPanosNatPolicyRulesRulesTargetDevicesOutputReference {
    return new DataPanosNatPolicyRulesRulesTargetDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosNatPolicyRulesRulesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#devices DataPanosNatPolicyRulesA#devices}
  */
  readonly devices?: DataPanosNatPolicyRulesRulesTargetDevices[] | cdktf.IResolvable;
  /**
  * Target to all but these specified devices and tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#negate DataPanosNatPolicyRulesA#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#tags DataPanosNatPolicyRulesA#tags}
  */
  readonly tags?: string[];
}

export function dataPanosNatPolicyRulesRulesTargetToTerraform(struct?: DataPanosNatPolicyRulesRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataPanosNatPolicyRulesRulesTargetDevicesToTerraform, false)(struct!.devices),
    negate: cdktf.booleanToTerraform(struct!.negate),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataPanosNatPolicyRulesRulesTargetToHclTerraform(struct?: DataPanosNatPolicyRulesRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataPanosNatPolicyRulesRulesTargetDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosNatPolicyRulesRulesTargetDevicesList",
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

export class DataPanosNatPolicyRulesRulesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesRulesTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesRulesTarget | cdktf.IResolvable | undefined) {
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

  // devices - computed: true, optional: true, required: false
  private _devices = new DataPanosNatPolicyRulesRulesTargetDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataPanosNatPolicyRulesRulesTargetDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // negate - computed: true, optional: true, required: false
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
}
export interface DataPanosNatPolicyRulesRules {
  /**
  * Device binding configuration in HA Active-Active mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#active_active_device_binding DataPanosNatPolicyRulesA#active_active_device_binding}
  */
  readonly activeActiveDeviceBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#description DataPanosNatPolicyRulesA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#destination_addresses DataPanosNatPolicyRulesA#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#destination_translation DataPanosNatPolicyRulesA#destination_translation}
  */
  readonly destinationTranslation?: DataPanosNatPolicyRulesRulesDestinationTranslation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#destination_zone DataPanosNatPolicyRulesA#destination_zone}
  */
  readonly destinationZone?: string[];
  /**
  * Disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#disabled DataPanosNatPolicyRulesA#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#dynamic_destination_translation DataPanosNatPolicyRulesA#dynamic_destination_translation}
  */
  readonly dynamicDestinationTranslation?: DataPanosNatPolicyRulesRulesDynamicDestinationTranslation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#group_tag DataPanosNatPolicyRulesA#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#name DataPanosNatPolicyRulesA#name}
  */
  readonly name: string;
  /**
  * type of nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#nat_type DataPanosNatPolicyRulesA#nat_type}
  */
  readonly natType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#service DataPanosNatPolicyRulesA#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#source_addresses DataPanosNatPolicyRulesA#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#source_translation DataPanosNatPolicyRulesA#source_translation}
  */
  readonly sourceTranslation?: DataPanosNatPolicyRulesRulesSourceTranslation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#source_zones DataPanosNatPolicyRulesA#source_zones}
  */
  readonly sourceZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#tag DataPanosNatPolicyRulesA#tag}
  */
  readonly tag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#target DataPanosNatPolicyRulesA#target}
  */
  readonly target?: DataPanosNatPolicyRulesRulesTarget;
  /**
  * Egress interface from route lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#to_interface DataPanosNatPolicyRulesA#to_interface}
  */
  readonly toInterface?: string;
}

export function dataPanosNatPolicyRulesRulesToTerraform(struct?: DataPanosNatPolicyRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_active_device_binding: cdktf.stringToTerraform(struct!.activeActiveDeviceBinding),
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_translation: dataPanosNatPolicyRulesRulesDestinationTranslationToTerraform(struct!.destinationTranslation),
    destination_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationZone),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    dynamic_destination_translation: dataPanosNatPolicyRulesRulesDynamicDestinationTranslationToTerraform(struct!.dynamicDestinationTranslation),
    group_tag: cdktf.stringToTerraform(struct!.groupTag),
    name: cdktf.stringToTerraform(struct!.name),
    nat_type: cdktf.stringToTerraform(struct!.natType),
    service: cdktf.stringToTerraform(struct!.service),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_translation: dataPanosNatPolicyRulesRulesSourceTranslationToTerraform(struct!.sourceTranslation),
    source_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceZones),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
    target: dataPanosNatPolicyRulesRulesTargetToTerraform(struct!.target),
    to_interface: cdktf.stringToTerraform(struct!.toInterface),
  }
}


export function dataPanosNatPolicyRulesRulesToHclTerraform(struct?: DataPanosNatPolicyRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_active_device_binding: {
      value: cdktf.stringToHclTerraform(struct!.activeActiveDeviceBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    destination_translation: {
      value: dataPanosNatPolicyRulesRulesDestinationTranslationToHclTerraform(struct!.destinationTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesDestinationTranslation",
    },
    destination_zone: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationZone),
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
    dynamic_destination_translation: {
      value: dataPanosNatPolicyRulesRulesDynamicDestinationTranslationToHclTerraform(struct!.dynamicDestinationTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesDynamicDestinationTranslation",
    },
    group_tag: {
      value: cdktf.stringToHclTerraform(struct!.groupTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_type: {
      value: cdktf.stringToHclTerraform(struct!.natType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_translation: {
      value: dataPanosNatPolicyRulesRulesSourceTranslationToHclTerraform(struct!.sourceTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesSourceTranslation",
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
      value: dataPanosNatPolicyRulesRulesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesRulesTarget",
    },
    to_interface: {
      value: cdktf.stringToHclTerraform(struct!.toInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosNatPolicyRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeActiveDeviceBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeActiveDeviceBinding = this._activeActiveDeviceBinding;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._destinationAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAddresses = this._destinationAddresses;
    }
    if (this._destinationTranslation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationTranslation = this._destinationTranslation?.internalValue;
    }
    if (this._destinationZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationZone = this._destinationZone;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dynamicDestinationTranslation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicDestinationTranslation = this._dynamicDestinationTranslation?.internalValue;
    }
    if (this._groupTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTag = this._groupTag;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._natType !== undefined) {
      hasAnyValues = true;
      internalValueResult.natType = this._natType;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._sourceAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddresses = this._sourceAddresses;
    }
    if (this._sourceTranslation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTranslation = this._sourceTranslation?.internalValue;
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
    if (this._toInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.toInterface = this._toInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNatPolicyRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeActiveDeviceBinding = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationTranslation.internalValue = undefined;
      this._destinationZone = undefined;
      this._disabled = undefined;
      this._dynamicDestinationTranslation.internalValue = undefined;
      this._groupTag = undefined;
      this._name = undefined;
      this._natType = undefined;
      this._service = undefined;
      this._sourceAddresses = undefined;
      this._sourceTranslation.internalValue = undefined;
      this._sourceZones = undefined;
      this._tag = undefined;
      this._target.internalValue = undefined;
      this._toInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeActiveDeviceBinding = value.activeActiveDeviceBinding;
      this._description = value.description;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationTranslation.internalValue = value.destinationTranslation;
      this._destinationZone = value.destinationZone;
      this._disabled = value.disabled;
      this._dynamicDestinationTranslation.internalValue = value.dynamicDestinationTranslation;
      this._groupTag = value.groupTag;
      this._name = value.name;
      this._natType = value.natType;
      this._service = value.service;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceTranslation.internalValue = value.sourceTranslation;
      this._sourceZones = value.sourceZones;
      this._tag = value.tag;
      this._target.internalValue = value.target;
      this._toInterface = value.toInterface;
    }
  }

  // active_active_device_binding - computed: true, optional: true, required: false
  private _activeActiveDeviceBinding?: string; 
  public get activeActiveDeviceBinding() {
    return this.getStringAttribute('active_active_device_binding');
  }
  public set activeActiveDeviceBinding(value: string) {
    this._activeActiveDeviceBinding = value;
  }
  public resetActiveActiveDeviceBinding() {
    this._activeActiveDeviceBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeActiveDeviceBindingInput() {
    return this._activeActiveDeviceBinding;
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

  // destination_addresses - computed: true, optional: true, required: false
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

  // destination_translation - computed: true, optional: true, required: false
  private _destinationTranslation = new DataPanosNatPolicyRulesRulesDestinationTranslationOutputReference(this, "destination_translation");
  public get destinationTranslation() {
    return this._destinationTranslation;
  }
  public putDestinationTranslation(value: DataPanosNatPolicyRulesRulesDestinationTranslation) {
    this._destinationTranslation.internalValue = value;
  }
  public resetDestinationTranslation() {
    this._destinationTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTranslationInput() {
    return this._destinationTranslation.internalValue;
  }

  // destination_zone - computed: true, optional: true, required: false
  private _destinationZone?: string[]; 
  public get destinationZone() {
    return this.getListAttribute('destination_zone');
  }
  public set destinationZone(value: string[]) {
    this._destinationZone = value;
  }
  public resetDestinationZone() {
    this._destinationZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationZoneInput() {
    return this._destinationZone;
  }

  // disabled - computed: true, optional: true, required: false
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

  // dynamic_destination_translation - computed: true, optional: true, required: false
  private _dynamicDestinationTranslation = new DataPanosNatPolicyRulesRulesDynamicDestinationTranslationOutputReference(this, "dynamic_destination_translation");
  public get dynamicDestinationTranslation() {
    return this._dynamicDestinationTranslation;
  }
  public putDynamicDestinationTranslation(value: DataPanosNatPolicyRulesRulesDynamicDestinationTranslation) {
    this._dynamicDestinationTranslation.internalValue = value;
  }
  public resetDynamicDestinationTranslation() {
    this._dynamicDestinationTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDestinationTranslationInput() {
    return this._dynamicDestinationTranslation.internalValue;
  }

  // group_tag - computed: true, optional: true, required: false
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

  // nat_type - computed: true, optional: true, required: false
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  public resetNatType() {
    this._natType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // source_addresses - computed: true, optional: true, required: false
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

  // source_translation - computed: true, optional: true, required: false
  private _sourceTranslation = new DataPanosNatPolicyRulesRulesSourceTranslationOutputReference(this, "source_translation");
  public get sourceTranslation() {
    return this._sourceTranslation;
  }
  public putSourceTranslation(value: DataPanosNatPolicyRulesRulesSourceTranslation) {
    this._sourceTranslation.internalValue = value;
  }
  public resetSourceTranslation() {
    this._sourceTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTranslationInput() {
    return this._sourceTranslation.internalValue;
  }

  // source_zones - computed: true, optional: true, required: false
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

  // tag - computed: true, optional: true, required: false
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

  // target - computed: true, optional: true, required: false
  private _target = new DataPanosNatPolicyRulesRulesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataPanosNatPolicyRulesRulesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // to_interface - computed: true, optional: true, required: false
  private _toInterface?: string; 
  public get toInterface() {
    return this.getStringAttribute('to_interface');
  }
  public set toInterface(value: string) {
    this._toInterface = value;
  }
  public resetToInterface() {
    this._toInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInterfaceInput() {
    return this._toInterface;
  }
}

export class DataPanosNatPolicyRulesRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosNatPolicyRulesRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosNatPolicyRulesRulesOutputReference {
    return new DataPanosNatPolicyRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules panos_nat_policy_rules}
*/
export class DataPanosNatPolicyRulesA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_nat_policy_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosNatPolicyRulesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosNatPolicyRulesA to import
  * @param importFromId The id of the existing DataPanosNatPolicyRulesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosNatPolicyRulesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_nat_policy_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/nat_policy_rules panos_nat_policy_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosNatPolicyRulesAConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosNatPolicyRulesAConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_nat_policy_rules',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.5'
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
    this._position.internalValue = config.position;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosNatPolicyRulesLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosNatPolicyRulesLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // position - computed: false, optional: false, required: true
  private _position = new DataPanosNatPolicyRulesPositionOutputReference(this, "position");
  public get position() {
    return this._position;
  }
  public putPosition(value: DataPanosNatPolicyRulesPosition) {
    this._position.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataPanosNatPolicyRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataPanosNatPolicyRulesRules[] | cdktf.IResolvable) {
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
      location: dataPanosNatPolicyRulesLocationToTerraform(this._location.internalValue),
      position: dataPanosNatPolicyRulesPositionToTerraform(this._position.internalValue),
      rules: cdktf.listMapper(dataPanosNatPolicyRulesRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosNatPolicyRulesLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosNatPolicyRulesLocation",
      },
      position: {
        value: dataPanosNatPolicyRulesPositionToHclTerraform(this._position.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosNatPolicyRulesPosition",
      },
      rules: {
        value: cdktf.listMapperHcl(dataPanosNatPolicyRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosNatPolicyRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
