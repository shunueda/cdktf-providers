// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosNatPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#location DataPanosNatPolicy#location}
  */
  readonly location: DataPanosNatPolicyLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#rules DataPanosNatPolicy#rules}
  */
  readonly rules: DataPanosNatPolicyRules[] | cdktf.IResolvable;
}
export interface DataPanosNatPolicyLocationDeviceGroup {
  /**
  * The device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#name DataPanosNatPolicy#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#panorama_device DataPanosNatPolicy#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#rulebase DataPanosNatPolicy#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosNatPolicyLocationDeviceGroupToTerraform(struct?: DataPanosNatPolicyLocationDeviceGroup | cdktf.IResolvable): any {
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


export function dataPanosNatPolicyLocationDeviceGroupToHclTerraform(struct?: DataPanosNatPolicyLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyLocationShared {
  /**
  * Rulebase name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#rulebase DataPanosNatPolicy#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosNatPolicyLocationSharedToTerraform(struct?: DataPanosNatPolicyLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function dataPanosNatPolicyLocationSharedToHclTerraform(struct?: DataPanosNatPolicyLocationShared | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyLocationShared | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyLocationVsys {
  /**
  * The vsys name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#name DataPanosNatPolicy#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#ngfw_device DataPanosNatPolicy#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosNatPolicyLocationVsysToTerraform(struct?: DataPanosNatPolicyLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosNatPolicyLocationVsysToHclTerraform(struct?: DataPanosNatPolicyLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyLocation {
  /**
  * Located in a specific device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#device_group DataPanosNatPolicy#device_group}
  */
  readonly deviceGroup?: DataPanosNatPolicyLocationDeviceGroup;
  /**
  * Located in a shared rulebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#shared DataPanosNatPolicy#shared}
  */
  readonly shared?: DataPanosNatPolicyLocationShared;
  /**
  * Located in a specific vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#vsys DataPanosNatPolicy#vsys}
  */
  readonly vsys?: DataPanosNatPolicyLocationVsys;
}

export function dataPanosNatPolicyLocationToTerraform(struct?: DataPanosNatPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosNatPolicyLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosNatPolicyLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosNatPolicyLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosNatPolicyLocationToHclTerraform(struct?: DataPanosNatPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosNatPolicyLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyLocationDeviceGroup",
    },
    shared: {
      value: dataPanosNatPolicyLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyLocationShared",
    },
    vsys: {
      value: dataPanosNatPolicyLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DataPanosNatPolicyLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosNatPolicyLocationDeviceGroup) {
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
  private _shared = new DataPanosNatPolicyLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosNatPolicyLocationShared) {
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
  private _vsys = new DataPanosNatPolicyLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosNatPolicyLocationVsys) {
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
export interface DataPanosNatPolicyRulesDestinationTranslationDnsRewrite {
  /**
  * Select direction to apply DNS rewrite
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#direction DataPanosNatPolicy#direction}
  */
  readonly direction?: string;
}

export function dataPanosNatPolicyRulesDestinationTranslationDnsRewriteToTerraform(struct?: DataPanosNatPolicyRulesDestinationTranslationDnsRewrite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
  }
}


export function dataPanosNatPolicyRulesDestinationTranslationDnsRewriteToHclTerraform(struct?: DataPanosNatPolicyRulesDestinationTranslationDnsRewrite | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesDestinationTranslationDnsRewriteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesDestinationTranslationDnsRewrite | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesDestinationTranslationDnsRewrite | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesDestinationTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#dns_rewrite DataPanosNatPolicy#dns_rewrite}
  */
  readonly dnsRewrite?: DataPanosNatPolicyRulesDestinationTranslationDnsRewrite;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_address DataPanosNatPolicy#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_port DataPanosNatPolicy#translated_port}
  */
  readonly translatedPort?: number;
}

export function dataPanosNatPolicyRulesDestinationTranslationToTerraform(struct?: DataPanosNatPolicyRulesDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_rewrite: dataPanosNatPolicyRulesDestinationTranslationDnsRewriteToTerraform(struct!.dnsRewrite),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
    translated_port: cdktf.numberToTerraform(struct!.translatedPort),
  }
}


export function dataPanosNatPolicyRulesDestinationTranslationToHclTerraform(struct?: DataPanosNatPolicyRulesDestinationTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_rewrite: {
      value: dataPanosNatPolicyRulesDestinationTranslationDnsRewriteToHclTerraform(struct!.dnsRewrite),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesDestinationTranslationDnsRewrite",
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

export class DataPanosNatPolicyRulesDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesDestinationTranslation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesDestinationTranslation | cdktf.IResolvable | undefined) {
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
  private _dnsRewrite = new DataPanosNatPolicyRulesDestinationTranslationDnsRewriteOutputReference(this, "dns_rewrite");
  public get dnsRewrite() {
    return this._dnsRewrite;
  }
  public putDnsRewrite(value: DataPanosNatPolicyRulesDestinationTranslationDnsRewrite) {
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
export interface DataPanosNatPolicyRulesDynamicDestinationTranslation {
  /**
  * Distribution algorithm for destination address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#distribution DataPanosNatPolicy#distribution}
  */
  readonly distribution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_address DataPanosNatPolicy#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_port DataPanosNatPolicy#translated_port}
  */
  readonly translatedPort?: number;
}

export function dataPanosNatPolicyRulesDynamicDestinationTranslationToTerraform(struct?: DataPanosNatPolicyRulesDynamicDestinationTranslation | cdktf.IResolvable): any {
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


export function dataPanosNatPolicyRulesDynamicDestinationTranslationToHclTerraform(struct?: DataPanosNatPolicyRulesDynamicDestinationTranslation | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesDynamicDestinationTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesDynamicDestinationTranslation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesDynamicDestinationTranslation | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#floating_ip DataPanosNatPolicy#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#interface DataPanosNatPolicy#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#ip DataPanosNatPolicy#ip}
  */
  readonly ip?: string;
}

export function dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddressToTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable): any {
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


export function dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddressToHclTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#interface_address DataPanosNatPolicy#interface_address}
  */
  readonly interfaceAddress?: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_address DataPanosNatPolicy#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackToTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_address: dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddressToTerraform(struct!.interfaceAddress),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackToHclTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_address: {
      value: dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddressToHclTerraform(struct!.interfaceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress",
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

export class DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback | cdktf.IResolvable | undefined) {
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
  private _interfaceAddress = new DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddressOutputReference(this, "interface_address");
  public get interfaceAddress() {
    return this._interfaceAddress;
  }
  public putInterfaceAddress(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackInterfaceAddress) {
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
export interface DataPanosNatPolicyRulesSourceTranslationDynamicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#fallback DataPanosNatPolicy#fallback}
  */
  readonly fallback?: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_address DataPanosNatPolicy#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function dataPanosNatPolicyRulesSourceTranslationDynamicIpToTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback: dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackToTerraform(struct!.fallback),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesSourceTranslationDynamicIpToHclTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback: {
      value: dataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackToHclTerraform(struct!.fallback),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback",
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

export class DataPanosNatPolicyRulesSourceTranslationDynamicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesSourceTranslationDynamicIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesSourceTranslationDynamicIp | cdktf.IResolvable | undefined) {
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
  private _fallback = new DataPanosNatPolicyRulesSourceTranslationDynamicIpFallbackOutputReference(this, "fallback");
  public get fallback() {
    return this._fallback;
  }
  public putFallback(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpFallback) {
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
export interface DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress {
  /**
  * Floating IP address in HA Active-Active configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#floating_ip DataPanosNatPolicy#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#interface DataPanosNatPolicy#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#ip DataPanosNatPolicy#ip}
  */
  readonly ip?: string;
}

export function dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddressToTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable): any {
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


export function dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddressToHclTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#interface_address DataPanosNatPolicy#interface_address}
  */
  readonly interfaceAddress?: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_address DataPanosNatPolicy#translated_address}
  */
  readonly translatedAddress?: string[];
}

export function dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortToTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_address: dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddressToTerraform(struct!.interfaceAddress),
    translated_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortToHclTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_address: {
      value: dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddressToHclTerraform(struct!.interfaceAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress",
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

export class DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort | cdktf.IResolvable | undefined) {
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
  private _interfaceAddress = new DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddressOutputReference(this, "interface_address");
  public get interfaceAddress() {
    return this._interfaceAddress;
  }
  public putInterfaceAddress(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortInterfaceAddress) {
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
export interface DataPanosNatPolicyRulesSourceTranslationStaticIp {
  /**
  * allow reverse translation from translated address to original address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#bi_directional DataPanosNatPolicy#bi_directional}
  */
  readonly biDirectional?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#translated_address DataPanosNatPolicy#translated_address}
  */
  readonly translatedAddress?: string;
}

export function dataPanosNatPolicyRulesSourceTranslationStaticIpToTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationStaticIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bi_directional: cdktf.stringToTerraform(struct!.biDirectional),
    translated_address: cdktf.stringToTerraform(struct!.translatedAddress),
  }
}


export function dataPanosNatPolicyRulesSourceTranslationStaticIpToHclTerraform(struct?: DataPanosNatPolicyRulesSourceTranslationStaticIp | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesSourceTranslationStaticIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesSourceTranslationStaticIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesSourceTranslationStaticIp | cdktf.IResolvable | undefined) {
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
export interface DataPanosNatPolicyRulesSourceTranslation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#dynamic_ip DataPanosNatPolicy#dynamic_ip}
  */
  readonly dynamicIp?: DataPanosNatPolicyRulesSourceTranslationDynamicIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#dynamic_ip_and_port DataPanosNatPolicy#dynamic_ip_and_port}
  */
  readonly dynamicIpAndPort?: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#static_ip DataPanosNatPolicy#static_ip}
  */
  readonly staticIp?: DataPanosNatPolicyRulesSourceTranslationStaticIp;
}

export function dataPanosNatPolicyRulesSourceTranslationToTerraform(struct?: DataPanosNatPolicyRulesSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic_ip: dataPanosNatPolicyRulesSourceTranslationDynamicIpToTerraform(struct!.dynamicIp),
    dynamic_ip_and_port: dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortToTerraform(struct!.dynamicIpAndPort),
    static_ip: dataPanosNatPolicyRulesSourceTranslationStaticIpToTerraform(struct!.staticIp),
  }
}


export function dataPanosNatPolicyRulesSourceTranslationToHclTerraform(struct?: DataPanosNatPolicyRulesSourceTranslation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic_ip: {
      value: dataPanosNatPolicyRulesSourceTranslationDynamicIpToHclTerraform(struct!.dynamicIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesSourceTranslationDynamicIp",
    },
    dynamic_ip_and_port: {
      value: dataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortToHclTerraform(struct!.dynamicIpAndPort),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort",
    },
    static_ip: {
      value: dataPanosNatPolicyRulesSourceTranslationStaticIpToHclTerraform(struct!.staticIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesSourceTranslationStaticIp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesSourceTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesSourceTranslation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesSourceTranslation | cdktf.IResolvable | undefined) {
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
  private _dynamicIp = new DataPanosNatPolicyRulesSourceTranslationDynamicIpOutputReference(this, "dynamic_ip");
  public get dynamicIp() {
    return this._dynamicIp;
  }
  public putDynamicIp(value: DataPanosNatPolicyRulesSourceTranslationDynamicIp) {
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
  private _dynamicIpAndPort = new DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPortOutputReference(this, "dynamic_ip_and_port");
  public get dynamicIpAndPort() {
    return this._dynamicIpAndPort;
  }
  public putDynamicIpAndPort(value: DataPanosNatPolicyRulesSourceTranslationDynamicIpAndPort) {
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
  private _staticIp = new DataPanosNatPolicyRulesSourceTranslationStaticIpOutputReference(this, "static_ip");
  public get staticIp() {
    return this._staticIp;
  }
  public putStaticIp(value: DataPanosNatPolicyRulesSourceTranslationStaticIp) {
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
export interface DataPanosNatPolicyRulesTargetDevicesVsys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#name DataPanosNatPolicy#name}
  */
  readonly name: string;
}

export function dataPanosNatPolicyRulesTargetDevicesVsysToTerraform(struct?: DataPanosNatPolicyRulesTargetDevicesVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosNatPolicyRulesTargetDevicesVsysToHclTerraform(struct?: DataPanosNatPolicyRulesTargetDevicesVsys | cdktf.IResolvable): any {
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

export class DataPanosNatPolicyRulesTargetDevicesVsysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosNatPolicyRulesTargetDevicesVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesTargetDevicesVsys | cdktf.IResolvable | undefined) {
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

export class DataPanosNatPolicyRulesTargetDevicesVsysList extends cdktf.ComplexList {
  public internalValue? : DataPanosNatPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable

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
  public get(index: number): DataPanosNatPolicyRulesTargetDevicesVsysOutputReference {
    return new DataPanosNatPolicyRulesTargetDevicesVsysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosNatPolicyRulesTargetDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#name DataPanosNatPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#vsys DataPanosNatPolicy#vsys}
  */
  readonly vsys?: DataPanosNatPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable;
}

export function dataPanosNatPolicyRulesTargetDevicesToTerraform(struct?: DataPanosNatPolicyRulesTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vsys: cdktf.listMapper(dataPanosNatPolicyRulesTargetDevicesVsysToTerraform, false)(struct!.vsys),
  }
}


export function dataPanosNatPolicyRulesTargetDevicesToHclTerraform(struct?: DataPanosNatPolicyRulesTargetDevices | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosNatPolicyRulesTargetDevicesVsysToHclTerraform, false)(struct!.vsys),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosNatPolicyRulesTargetDevicesVsysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNatPolicyRulesTargetDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosNatPolicyRulesTargetDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesTargetDevices | cdktf.IResolvable | undefined) {
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
  private _vsys = new DataPanosNatPolicyRulesTargetDevicesVsysList(this, "vsys", false);
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosNatPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable) {
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

export class DataPanosNatPolicyRulesTargetDevicesList extends cdktf.ComplexList {
  public internalValue? : DataPanosNatPolicyRulesTargetDevices[] | cdktf.IResolvable

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
  public get(index: number): DataPanosNatPolicyRulesTargetDevicesOutputReference {
    return new DataPanosNatPolicyRulesTargetDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosNatPolicyRulesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#devices DataPanosNatPolicy#devices}
  */
  readonly devices?: DataPanosNatPolicyRulesTargetDevices[] | cdktf.IResolvable;
  /**
  * Target to all but these specified devices and tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#negate DataPanosNatPolicy#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#tags DataPanosNatPolicy#tags}
  */
  readonly tags?: string[];
}

export function dataPanosNatPolicyRulesTargetToTerraform(struct?: DataPanosNatPolicyRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataPanosNatPolicyRulesTargetDevicesToTerraform, false)(struct!.devices),
    negate: cdktf.booleanToTerraform(struct!.negate),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataPanosNatPolicyRulesTargetToHclTerraform(struct?: DataPanosNatPolicyRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataPanosNatPolicyRulesTargetDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosNatPolicyRulesTargetDevicesList",
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

export class DataPanosNatPolicyRulesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNatPolicyRulesTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRulesTarget | cdktf.IResolvable | undefined) {
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
  private _devices = new DataPanosNatPolicyRulesTargetDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataPanosNatPolicyRulesTargetDevices[] | cdktf.IResolvable) {
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
export interface DataPanosNatPolicyRules {
  /**
  * Device binding configuration in HA Active-Active mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#active_active_device_binding DataPanosNatPolicy#active_active_device_binding}
  */
  readonly activeActiveDeviceBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#description DataPanosNatPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#destination_addresses DataPanosNatPolicy#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#destination_translation DataPanosNatPolicy#destination_translation}
  */
  readonly destinationTranslation?: DataPanosNatPolicyRulesDestinationTranslation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#destination_zone DataPanosNatPolicy#destination_zone}
  */
  readonly destinationZone?: string[];
  /**
  * Disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#disabled DataPanosNatPolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#dynamic_destination_translation DataPanosNatPolicy#dynamic_destination_translation}
  */
  readonly dynamicDestinationTranslation?: DataPanosNatPolicyRulesDynamicDestinationTranslation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#group_tag DataPanosNatPolicy#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#name DataPanosNatPolicy#name}
  */
  readonly name: string;
  /**
  * type of nat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#nat_type DataPanosNatPolicy#nat_type}
  */
  readonly natType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#service DataPanosNatPolicy#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#source_addresses DataPanosNatPolicy#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#source_translation DataPanosNatPolicy#source_translation}
  */
  readonly sourceTranslation?: DataPanosNatPolicyRulesSourceTranslation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#source_zones DataPanosNatPolicy#source_zones}
  */
  readonly sourceZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#tag DataPanosNatPolicy#tag}
  */
  readonly tag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#target DataPanosNatPolicy#target}
  */
  readonly target?: DataPanosNatPolicyRulesTarget;
  /**
  * Egress interface from route lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#to_interface DataPanosNatPolicy#to_interface}
  */
  readonly toInterface?: string;
}

export function dataPanosNatPolicyRulesToTerraform(struct?: DataPanosNatPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_active_device_binding: cdktf.stringToTerraform(struct!.activeActiveDeviceBinding),
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_translation: dataPanosNatPolicyRulesDestinationTranslationToTerraform(struct!.destinationTranslation),
    destination_zone: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationZone),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    dynamic_destination_translation: dataPanosNatPolicyRulesDynamicDestinationTranslationToTerraform(struct!.dynamicDestinationTranslation),
    group_tag: cdktf.stringToTerraform(struct!.groupTag),
    name: cdktf.stringToTerraform(struct!.name),
    nat_type: cdktf.stringToTerraform(struct!.natType),
    service: cdktf.stringToTerraform(struct!.service),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_translation: dataPanosNatPolicyRulesSourceTranslationToTerraform(struct!.sourceTranslation),
    source_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceZones),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
    target: dataPanosNatPolicyRulesTargetToTerraform(struct!.target),
    to_interface: cdktf.stringToTerraform(struct!.toInterface),
  }
}


export function dataPanosNatPolicyRulesToHclTerraform(struct?: DataPanosNatPolicyRules | cdktf.IResolvable): any {
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
      value: dataPanosNatPolicyRulesDestinationTranslationToHclTerraform(struct!.destinationTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesDestinationTranslation",
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
      value: dataPanosNatPolicyRulesDynamicDestinationTranslationToHclTerraform(struct!.dynamicDestinationTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesDynamicDestinationTranslation",
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
      value: dataPanosNatPolicyRulesSourceTranslationToHclTerraform(struct!.sourceTranslation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesSourceTranslation",
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
      value: dataPanosNatPolicyRulesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNatPolicyRulesTarget",
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

export class DataPanosNatPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosNatPolicyRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosNatPolicyRules | cdktf.IResolvable | undefined) {
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
  private _destinationTranslation = new DataPanosNatPolicyRulesDestinationTranslationOutputReference(this, "destination_translation");
  public get destinationTranslation() {
    return this._destinationTranslation;
  }
  public putDestinationTranslation(value: DataPanosNatPolicyRulesDestinationTranslation) {
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
  private _dynamicDestinationTranslation = new DataPanosNatPolicyRulesDynamicDestinationTranslationOutputReference(this, "dynamic_destination_translation");
  public get dynamicDestinationTranslation() {
    return this._dynamicDestinationTranslation;
  }
  public putDynamicDestinationTranslation(value: DataPanosNatPolicyRulesDynamicDestinationTranslation) {
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
  private _sourceTranslation = new DataPanosNatPolicyRulesSourceTranslationOutputReference(this, "source_translation");
  public get sourceTranslation() {
    return this._sourceTranslation;
  }
  public putSourceTranslation(value: DataPanosNatPolicyRulesSourceTranslation) {
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
  private _target = new DataPanosNatPolicyRulesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataPanosNatPolicyRulesTarget) {
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

export class DataPanosNatPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosNatPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosNatPolicyRulesOutputReference {
    return new DataPanosNatPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy panos_nat_policy}
*/
export class DataPanosNatPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_nat_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosNatPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosNatPolicy to import
  * @param importFromId The id of the existing DataPanosNatPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosNatPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_nat_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/nat_policy panos_nat_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosNatPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosNatPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_nat_policy',
      terraformGeneratorMetadata: {
        providerName: 'panos',
        providerVersion: '2.0.6',
        providerVersionConstraint: '2.0.6'
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
  private _location = new DataPanosNatPolicyLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosNatPolicyLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataPanosNatPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataPanosNatPolicyRules[] | cdktf.IResolvable) {
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
      location: dataPanosNatPolicyLocationToTerraform(this._location.internalValue),
      rules: cdktf.listMapper(dataPanosNatPolicyRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosNatPolicyLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosNatPolicyLocation",
      },
      rules: {
        value: cdktf.listMapperHcl(dataPanosNatPolicyRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosNatPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
