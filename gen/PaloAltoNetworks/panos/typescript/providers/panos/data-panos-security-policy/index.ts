// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#location DataPanosSecurityPolicy#location}
  */
  readonly location: DataPanosSecurityPolicyLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#rules DataPanosSecurityPolicy#rules}
  */
  readonly rules: DataPanosSecurityPolicyRules[] | cdktf.IResolvable;
}
export interface DataPanosSecurityPolicyLocationDeviceGroup {
  /**
  * The device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#name DataPanosSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#panorama_device DataPanosSecurityPolicy#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The rulebase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#rulebase DataPanosSecurityPolicy#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosSecurityPolicyLocationDeviceGroupToTerraform(struct?: DataPanosSecurityPolicyLocationDeviceGroup | cdktf.IResolvable): any {
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


export function dataPanosSecurityPolicyLocationDeviceGroupToHclTerraform(struct?: DataPanosSecurityPolicyLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosSecurityPolicyLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosSecurityPolicyLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosSecurityPolicyLocationShared {
  /**
  * Rulebase name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#rulebase DataPanosSecurityPolicy#rulebase}
  */
  readonly rulebase?: string;
}

export function dataPanosSecurityPolicyLocationSharedToTerraform(struct?: DataPanosSecurityPolicyLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rulebase: cdktf.stringToTerraform(struct!.rulebase),
  }
}


export function dataPanosSecurityPolicyLocationSharedToHclTerraform(struct?: DataPanosSecurityPolicyLocationShared | cdktf.IResolvable): any {
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

export class DataPanosSecurityPolicyLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyLocationShared | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosSecurityPolicyLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosSecurityPolicyLocationVsys {
  /**
  * The vsys name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#name DataPanosSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#ngfw_device DataPanosSecurityPolicy#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosSecurityPolicyLocationVsysToTerraform(struct?: DataPanosSecurityPolicyLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosSecurityPolicyLocationVsysToHclTerraform(struct?: DataPanosSecurityPolicyLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosSecurityPolicyLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosSecurityPolicyLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosSecurityPolicyLocation {
  /**
  * Located in a specific device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#device_group DataPanosSecurityPolicy#device_group}
  */
  readonly deviceGroup?: DataPanosSecurityPolicyLocationDeviceGroup;
  /**
  * Located in a shared rulebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#shared DataPanosSecurityPolicy#shared}
  */
  readonly shared?: DataPanosSecurityPolicyLocationShared;
  /**
  * Located in a specific vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#vsys DataPanosSecurityPolicy#vsys}
  */
  readonly vsys?: DataPanosSecurityPolicyLocationVsys;
}

export function dataPanosSecurityPolicyLocationToTerraform(struct?: DataPanosSecurityPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosSecurityPolicyLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosSecurityPolicyLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosSecurityPolicyLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosSecurityPolicyLocationToHclTerraform(struct?: DataPanosSecurityPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosSecurityPolicyLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyLocationDeviceGroup",
    },
    shared: {
      value: dataPanosSecurityPolicyLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyLocationShared",
    },
    vsys: {
      value: dataPanosSecurityPolicyLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSecurityPolicyLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosSecurityPolicyLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DataPanosSecurityPolicyLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosSecurityPolicyLocationDeviceGroup) {
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
  private _shared = new DataPanosSecurityPolicyLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosSecurityPolicyLocationShared) {
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
  private _vsys = new DataPanosSecurityPolicyLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosSecurityPolicyLocationVsys) {
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
export interface DataPanosSecurityPolicyRulesProfileSettingProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#data_filtering DataPanosSecurityPolicy#data_filtering}
  */
  readonly dataFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#file_blocking DataPanosSecurityPolicy#file_blocking}
  */
  readonly fileBlocking?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#gtp DataPanosSecurityPolicy#gtp}
  */
  readonly gtp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#sctp DataPanosSecurityPolicy#sctp}
  */
  readonly sctp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#spyware DataPanosSecurityPolicy#spyware}
  */
  readonly spyware?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#url_filtering DataPanosSecurityPolicy#url_filtering}
  */
  readonly urlFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#virus DataPanosSecurityPolicy#virus}
  */
  readonly virus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#vulnerability DataPanosSecurityPolicy#vulnerability}
  */
  readonly vulnerability?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#wildfire_analysis DataPanosSecurityPolicy#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string[];
}

export function dataPanosSecurityPolicyRulesProfileSettingProfilesToTerraform(struct?: DataPanosSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataFiltering),
    file_blocking: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileBlocking),
    gtp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gtp),
    sctp: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sctp),
    spyware: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.spyware),
    url_filtering: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlFiltering),
    virus: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.virus),
    vulnerability: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vulnerability),
    wildfire_analysis: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wildfireAnalysis),
  }
}


export function dataPanosSecurityPolicyRulesProfileSettingProfilesToHclTerraform(struct?: DataPanosSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_filtering: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataFiltering),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_blocking: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileBlocking),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gtp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gtp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sctp: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sctp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spyware: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.spyware),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url_filtering: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlFiltering),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    virus: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.virus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vulnerability: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vulnerability),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wildfire_analysis: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wildfireAnalysis),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSecurityPolicyRulesProfileSettingProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFiltering = this._dataFiltering;
    }
    if (this._fileBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlocking = this._fileBlocking;
    }
    if (this._gtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtp = this._gtp;
    }
    if (this._sctp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctp = this._sctp;
    }
    if (this._spyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.spyware = this._spyware;
    }
    if (this._urlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFiltering = this._urlFiltering;
    }
    if (this._virus !== undefined) {
      hasAnyValues = true;
      internalValueResult.virus = this._virus;
    }
    if (this._vulnerability !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerability = this._vulnerability;
    }
    if (this._wildfireAnalysis !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAnalysis = this._wildfireAnalysis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataFiltering = undefined;
      this._fileBlocking = undefined;
      this._gtp = undefined;
      this._sctp = undefined;
      this._spyware = undefined;
      this._urlFiltering = undefined;
      this._virus = undefined;
      this._vulnerability = undefined;
      this._wildfireAnalysis = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataFiltering = value.dataFiltering;
      this._fileBlocking = value.fileBlocking;
      this._gtp = value.gtp;
      this._sctp = value.sctp;
      this._spyware = value.spyware;
      this._urlFiltering = value.urlFiltering;
      this._virus = value.virus;
      this._vulnerability = value.vulnerability;
      this._wildfireAnalysis = value.wildfireAnalysis;
    }
  }

  // data_filtering - computed: true, optional: true, required: false
  private _dataFiltering?: string[]; 
  public get dataFiltering() {
    return this.getListAttribute('data_filtering');
  }
  public set dataFiltering(value: string[]) {
    this._dataFiltering = value;
  }
  public resetDataFiltering() {
    this._dataFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFilteringInput() {
    return this._dataFiltering;
  }

  // file_blocking - computed: true, optional: true, required: false
  private _fileBlocking?: string[]; 
  public get fileBlocking() {
    return this.getListAttribute('file_blocking');
  }
  public set fileBlocking(value: string[]) {
    this._fileBlocking = value;
  }
  public resetFileBlocking() {
    this._fileBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingInput() {
    return this._fileBlocking;
  }

  // gtp - computed: true, optional: true, required: false
  private _gtp?: string[]; 
  public get gtp() {
    return this.getListAttribute('gtp');
  }
  public set gtp(value: string[]) {
    this._gtp = value;
  }
  public resetGtp() {
    this._gtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInput() {
    return this._gtp;
  }

  // sctp - computed: true, optional: true, required: false
  private _sctp?: string[]; 
  public get sctp() {
    return this.getListAttribute('sctp');
  }
  public set sctp(value: string[]) {
    this._sctp = value;
  }
  public resetSctp() {
    this._sctp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInput() {
    return this._sctp;
  }

  // spyware - computed: true, optional: true, required: false
  private _spyware?: string[]; 
  public get spyware() {
    return this.getListAttribute('spyware');
  }
  public set spyware(value: string[]) {
    this._spyware = value;
  }
  public resetSpyware() {
    this._spyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spywareInput() {
    return this._spyware;
  }

  // url_filtering - computed: true, optional: true, required: false
  private _urlFiltering?: string[]; 
  public get urlFiltering() {
    return this.getListAttribute('url_filtering');
  }
  public set urlFiltering(value: string[]) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // virus - computed: true, optional: true, required: false
  private _virus?: string[]; 
  public get virus() {
    return this.getListAttribute('virus');
  }
  public set virus(value: string[]) {
    this._virus = value;
  }
  public resetVirus() {
    this._virus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virusInput() {
    return this._virus;
  }

  // vulnerability - computed: true, optional: true, required: false
  private _vulnerability?: string[]; 
  public get vulnerability() {
    return this.getListAttribute('vulnerability');
  }
  public set vulnerability(value: string[]) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }

  // wildfire_analysis - computed: true, optional: true, required: false
  private _wildfireAnalysis?: string[]; 
  public get wildfireAnalysis() {
    return this.getListAttribute('wildfire_analysis');
  }
  public set wildfireAnalysis(value: string[]) {
    this._wildfireAnalysis = value;
  }
  public resetWildfireAnalysis() {
    this._wildfireAnalysis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireAnalysisInput() {
    return this._wildfireAnalysis;
  }
}
export interface DataPanosSecurityPolicyRulesProfileSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#group DataPanosSecurityPolicy#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#profiles DataPanosSecurityPolicy#profiles}
  */
  readonly profiles?: DataPanosSecurityPolicyRulesProfileSettingProfiles;
}

export function dataPanosSecurityPolicyRulesProfileSettingToTerraform(struct?: DataPanosSecurityPolicyRulesProfileSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    profiles: dataPanosSecurityPolicyRulesProfileSettingProfilesToTerraform(struct!.profiles),
  }
}


export function dataPanosSecurityPolicyRulesProfileSettingToHclTerraform(struct?: DataPanosSecurityPolicyRulesProfileSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.group),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    profiles: {
      value: dataPanosSecurityPolicyRulesProfileSettingProfilesToHclTerraform(struct!.profiles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyRulesProfileSettingProfiles",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSecurityPolicyRulesProfileSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyRulesProfileSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._profiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSecurityPolicyRulesProfileSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._profiles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._profiles.internalValue = value.profiles;
    }
  }

  // group - computed: true, optional: true, required: false
  private _group?: string[]; 
  public get group() {
    return this.getListAttribute('group');
  }
  public set group(value: string[]) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // profiles - computed: true, optional: true, required: false
  private _profiles = new DataPanosSecurityPolicyRulesProfileSettingProfilesOutputReference(this, "profiles");
  public get profiles() {
    return this._profiles;
  }
  public putProfiles(value: DataPanosSecurityPolicyRulesProfileSettingProfiles) {
    this._profiles.internalValue = value;
  }
  public resetProfiles() {
    this._profiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles.internalValue;
  }
}
export interface DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow {
}

export function dataPanosSecurityPolicyRulesQosMarkingFollowC2SFlowToTerraform(struct?: DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosSecurityPolicyRulesQosMarkingFollowC2SFlowToHclTerraform(struct?: DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow | cdktf.IResolvable | undefined) {
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
export interface DataPanosSecurityPolicyRulesQosMarking {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#follow_c2s_flow DataPanosSecurityPolicy#follow_c2s_flow}
  */
  readonly followC2SFlow?: DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow;
  /**
  * IP DSCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#ip_dscp DataPanosSecurityPolicy#ip_dscp}
  */
  readonly ipDscp?: string;
  /**
  * IP Precedence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#ip_precedence DataPanosSecurityPolicy#ip_precedence}
  */
  readonly ipPrecedence?: string;
}

export function dataPanosSecurityPolicyRulesQosMarkingToTerraform(struct?: DataPanosSecurityPolicyRulesQosMarking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_c2s_flow: dataPanosSecurityPolicyRulesQosMarkingFollowC2SFlowToTerraform(struct!.followC2SFlow),
    ip_dscp: cdktf.stringToTerraform(struct!.ipDscp),
    ip_precedence: cdktf.stringToTerraform(struct!.ipPrecedence),
  }
}


export function dataPanosSecurityPolicyRulesQosMarkingToHclTerraform(struct?: DataPanosSecurityPolicyRulesQosMarking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_c2s_flow: {
      value: dataPanosSecurityPolicyRulesQosMarkingFollowC2SFlowToHclTerraform(struct!.followC2SFlow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow",
    },
    ip_dscp: {
      value: cdktf.stringToHclTerraform(struct!.ipDscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_precedence: {
      value: cdktf.stringToHclTerraform(struct!.ipPrecedence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSecurityPolicyRulesQosMarkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyRulesQosMarking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followC2SFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.followC2SFlow = this._followC2SFlow?.internalValue;
    }
    if (this._ipDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDscp = this._ipDscp;
    }
    if (this._ipPrecedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrecedence = this._ipPrecedence;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSecurityPolicyRulesQosMarking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._followC2SFlow.internalValue = undefined;
      this._ipDscp = undefined;
      this._ipPrecedence = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._followC2SFlow.internalValue = value.followC2SFlow;
      this._ipDscp = value.ipDscp;
      this._ipPrecedence = value.ipPrecedence;
    }
  }

  // follow_c2s_flow - computed: true, optional: true, required: false
  private _followC2SFlow = new DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlowOutputReference(this, "follow_c2s_flow");
  public get followC2SFlow() {
    return this._followC2SFlow;
  }
  public putFollowC2SFlow(value: DataPanosSecurityPolicyRulesQosMarkingFollowC2SFlow) {
    this._followC2SFlow.internalValue = value;
  }
  public resetFollowC2SFlow() {
    this._followC2SFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followC2SFlowInput() {
    return this._followC2SFlow.internalValue;
  }

  // ip_dscp - computed: true, optional: true, required: false
  private _ipDscp?: string; 
  public get ipDscp() {
    return this.getStringAttribute('ip_dscp');
  }
  public set ipDscp(value: string) {
    this._ipDscp = value;
  }
  public resetIpDscp() {
    this._ipDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDscpInput() {
    return this._ipDscp;
  }

  // ip_precedence - computed: true, optional: true, required: false
  private _ipPrecedence?: string; 
  public get ipPrecedence() {
    return this.getStringAttribute('ip_precedence');
  }
  public set ipPrecedence(value: string) {
    this._ipPrecedence = value;
  }
  public resetIpPrecedence() {
    this._ipPrecedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrecedenceInput() {
    return this._ipPrecedence;
  }
}
export interface DataPanosSecurityPolicyRulesQos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#marking DataPanosSecurityPolicy#marking}
  */
  readonly marking?: DataPanosSecurityPolicyRulesQosMarking;
}

export function dataPanosSecurityPolicyRulesQosToTerraform(struct?: DataPanosSecurityPolicyRulesQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    marking: dataPanosSecurityPolicyRulesQosMarkingToTerraform(struct!.marking),
  }
}


export function dataPanosSecurityPolicyRulesQosToHclTerraform(struct?: DataPanosSecurityPolicyRulesQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    marking: {
      value: dataPanosSecurityPolicyRulesQosMarkingToHclTerraform(struct!.marking),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyRulesQosMarking",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSecurityPolicyRulesQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyRulesQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._marking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.marking = this._marking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSecurityPolicyRulesQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._marking.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._marking.internalValue = value.marking;
    }
  }

  // marking - computed: true, optional: true, required: false
  private _marking = new DataPanosSecurityPolicyRulesQosMarkingOutputReference(this, "marking");
  public get marking() {
    return this._marking;
  }
  public putMarking(value: DataPanosSecurityPolicyRulesQosMarking) {
    this._marking.internalValue = value;
  }
  public resetMarking() {
    this._marking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markingInput() {
    return this._marking.internalValue;
  }
}
export interface DataPanosSecurityPolicyRulesTargetDevicesVsys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#name DataPanosSecurityPolicy#name}
  */
  readonly name: string;
}

export function dataPanosSecurityPolicyRulesTargetDevicesVsysToTerraform(struct?: DataPanosSecurityPolicyRulesTargetDevicesVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosSecurityPolicyRulesTargetDevicesVsysToHclTerraform(struct?: DataPanosSecurityPolicyRulesTargetDevicesVsys | cdktf.IResolvable): any {
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

export class DataPanosSecurityPolicyRulesTargetDevicesVsysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosSecurityPolicyRulesTargetDevicesVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosSecurityPolicyRulesTargetDevicesVsys | cdktf.IResolvable | undefined) {
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

export class DataPanosSecurityPolicyRulesTargetDevicesVsysList extends cdktf.ComplexList {
  public internalValue? : DataPanosSecurityPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable

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
  public get(index: number): DataPanosSecurityPolicyRulesTargetDevicesVsysOutputReference {
    return new DataPanosSecurityPolicyRulesTargetDevicesVsysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosSecurityPolicyRulesTargetDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#name DataPanosSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#vsys DataPanosSecurityPolicy#vsys}
  */
  readonly vsys?: DataPanosSecurityPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable;
}

export function dataPanosSecurityPolicyRulesTargetDevicesToTerraform(struct?: DataPanosSecurityPolicyRulesTargetDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vsys: cdktf.listMapper(dataPanosSecurityPolicyRulesTargetDevicesVsysToTerraform, false)(struct!.vsys),
  }
}


export function dataPanosSecurityPolicyRulesTargetDevicesToHclTerraform(struct?: DataPanosSecurityPolicyRulesTargetDevices | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosSecurityPolicyRulesTargetDevicesVsysToHclTerraform, false)(struct!.vsys),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosSecurityPolicyRulesTargetDevicesVsysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSecurityPolicyRulesTargetDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosSecurityPolicyRulesTargetDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosSecurityPolicyRulesTargetDevices | cdktf.IResolvable | undefined) {
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
  private _vsys = new DataPanosSecurityPolicyRulesTargetDevicesVsysList(this, "vsys", false);
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosSecurityPolicyRulesTargetDevicesVsys[] | cdktf.IResolvable) {
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

export class DataPanosSecurityPolicyRulesTargetDevicesList extends cdktf.ComplexList {
  public internalValue? : DataPanosSecurityPolicyRulesTargetDevices[] | cdktf.IResolvable

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
  public get(index: number): DataPanosSecurityPolicyRulesTargetDevicesOutputReference {
    return new DataPanosSecurityPolicyRulesTargetDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosSecurityPolicyRulesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#devices DataPanosSecurityPolicy#devices}
  */
  readonly devices?: DataPanosSecurityPolicyRulesTargetDevices[] | cdktf.IResolvable;
  /**
  * Target to all but these specified devices and tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#negate DataPanosSecurityPolicy#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#tags DataPanosSecurityPolicy#tags}
  */
  readonly tags?: string[];
}

export function dataPanosSecurityPolicyRulesTargetToTerraform(struct?: DataPanosSecurityPolicyRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataPanosSecurityPolicyRulesTargetDevicesToTerraform, false)(struct!.devices),
    negate: cdktf.booleanToTerraform(struct!.negate),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dataPanosSecurityPolicyRulesTargetToHclTerraform(struct?: DataPanosSecurityPolicyRulesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataPanosSecurityPolicyRulesTargetDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosSecurityPolicyRulesTargetDevicesList",
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

export class DataPanosSecurityPolicyRulesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosSecurityPolicyRulesTarget | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosSecurityPolicyRulesTarget | cdktf.IResolvable | undefined) {
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
  private _devices = new DataPanosSecurityPolicyRulesTargetDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataPanosSecurityPolicyRulesTargetDevices[] | cdktf.IResolvable) {
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
export interface DataPanosSecurityPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#action DataPanosSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#applications DataPanosSecurityPolicy#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#category DataPanosSecurityPolicy#category}
  */
  readonly category?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#description DataPanosSecurityPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#destination_addresses DataPanosSecurityPolicy#destination_addresses}
  */
  readonly destinationAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#destination_hip DataPanosSecurityPolicy#destination_hip}
  */
  readonly destinationHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#destination_zones DataPanosSecurityPolicy#destination_zones}
  */
  readonly destinationZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#disable_inspect DataPanosSecurityPolicy#disable_inspect}
  */
  readonly disableInspect?: boolean | cdktf.IResolvable;
  /**
  * Disable inspection of server side traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#disable_server_response_inspection DataPanosSecurityPolicy#disable_server_response_inspection}
  */
  readonly disableServerResponseInspection?: boolean | cdktf.IResolvable;
  /**
  * Disable the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#disabled DataPanosSecurityPolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#group_tag DataPanosSecurityPolicy#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Send ICMP unreachable error when action is drop or reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#icmp_unreachable DataPanosSecurityPolicy#icmp_unreachable}
  */
  readonly icmpUnreachable?: boolean | cdktf.IResolvable;
  /**
  * Log at session end (required for certain ACC tables)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#log_end DataPanosSecurityPolicy#log_end}
  */
  readonly logEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#log_setting DataPanosSecurityPolicy#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log at session start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#log_start DataPanosSecurityPolicy#log_start}
  */
  readonly logStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#name DataPanosSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#negate_destination DataPanosSecurityPolicy#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#negate_source DataPanosSecurityPolicy#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#profile_setting DataPanosSecurityPolicy#profile_setting}
  */
  readonly profileSetting?: DataPanosSecurityPolicyRulesProfileSetting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#qos DataPanosSecurityPolicy#qos}
  */
  readonly qos?: DataPanosSecurityPolicyRulesQos;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#rule_type DataPanosSecurityPolicy#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#schedule DataPanosSecurityPolicy#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#services DataPanosSecurityPolicy#services}
  */
  readonly services?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#source_addresses DataPanosSecurityPolicy#source_addresses}
  */
  readonly sourceAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#source_hip DataPanosSecurityPolicy#source_hip}
  */
  readonly sourceHip?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#source_imei DataPanosSecurityPolicy#source_imei}
  */
  readonly sourceImei?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#source_imsi DataPanosSecurityPolicy#source_imsi}
  */
  readonly sourceImsi?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#source_nw_slice DataPanosSecurityPolicy#source_nw_slice}
  */
  readonly sourceNwSlice?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#source_users DataPanosSecurityPolicy#source_users}
  */
  readonly sourceUsers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#source_zones DataPanosSecurityPolicy#source_zones}
  */
  readonly sourceZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#tag DataPanosSecurityPolicy#tag}
  */
  readonly tag?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#target DataPanosSecurityPolicy#target}
  */
  readonly target?: DataPanosSecurityPolicyRulesTarget;
}

export function dataPanosSecurityPolicyRulesToTerraform(struct?: DataPanosSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    category: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.category),
    description: cdktf.stringToTerraform(struct!.description),
    destination_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationAddresses),
    destination_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationHip),
    destination_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationZones),
    disable_inspect: cdktf.booleanToTerraform(struct!.disableInspect),
    disable_server_response_inspection: cdktf.booleanToTerraform(struct!.disableServerResponseInspection),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    group_tag: cdktf.stringToTerraform(struct!.groupTag),
    icmp_unreachable: cdktf.booleanToTerraform(struct!.icmpUnreachable),
    log_end: cdktf.booleanToTerraform(struct!.logEnd),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    log_start: cdktf.booleanToTerraform(struct!.logStart),
    name: cdktf.stringToTerraform(struct!.name),
    negate_destination: cdktf.booleanToTerraform(struct!.negateDestination),
    negate_source: cdktf.booleanToTerraform(struct!.negateSource),
    profile_setting: dataPanosSecurityPolicyRulesProfileSettingToTerraform(struct!.profileSetting),
    qos: dataPanosSecurityPolicyRulesQosToTerraform(struct!.qos),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    source_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceAddresses),
    source_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceHip),
    source_imei: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceImei),
    source_imsi: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceImsi),
    source_nw_slice: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNwSlice),
    source_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUsers),
    source_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceZones),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
    target: dataPanosSecurityPolicyRulesTargetToTerraform(struct!.target),
  }
}


export function dataPanosSecurityPolicyRulesToHclTerraform(struct?: DataPanosSecurityPolicyRules | cdktf.IResolvable): any {
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
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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
      type: "set",
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
      type: "set",
      storageClassType: "stringList",
    },
    disable_inspect: {
      value: cdktf.booleanToHclTerraform(struct!.disableInspect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_server_response_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.disableServerResponseInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    icmp_unreachable: {
      value: cdktf.booleanToHclTerraform(struct!.icmpUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_end: {
      value: cdktf.booleanToHclTerraform(struct!.logEnd),
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
    log_start: {
      value: cdktf.booleanToHclTerraform(struct!.logStart),
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
    profile_setting: {
      value: dataPanosSecurityPolicyRulesProfileSettingToHclTerraform(struct!.profileSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyRulesProfileSetting",
    },
    qos: {
      value: dataPanosSecurityPolicyRulesQosToHclTerraform(struct!.qos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyRulesQos",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_hip: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceHip),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_imei: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceImei),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_imsi: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceImsi),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_nw_slice: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNwSlice),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    source_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: dataPanosSecurityPolicyRulesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosSecurityPolicyRulesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosSecurityPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosSecurityPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
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
    if (this._disableInspect !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInspect = this._disableInspect;
    }
    if (this._disableServerResponseInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableServerResponseInspection = this._disableServerResponseInspection;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._groupTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupTag = this._groupTag;
    }
    if (this._icmpUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpUnreachable = this._icmpUnreachable;
    }
    if (this._logEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnd = this._logEnd;
    }
    if (this._logSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSetting = this._logSetting;
    }
    if (this._logStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStart = this._logStart;
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
    if (this._profileSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileSetting = this._profileSetting?.internalValue;
    }
    if (this._qos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qos = this._qos?.internalValue;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
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
    if (this._sourceImei !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImei = this._sourceImei;
    }
    if (this._sourceImsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImsi = this._sourceImsi;
    }
    if (this._sourceNwSlice !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNwSlice = this._sourceNwSlice;
    }
    if (this._sourceUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUsers = this._sourceUsers;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosSecurityPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._applications = undefined;
      this._category = undefined;
      this._description = undefined;
      this._destinationAddresses = undefined;
      this._destinationHip = undefined;
      this._destinationZones = undefined;
      this._disableInspect = undefined;
      this._disableServerResponseInspection = undefined;
      this._disabled = undefined;
      this._groupTag = undefined;
      this._icmpUnreachable = undefined;
      this._logEnd = undefined;
      this._logSetting = undefined;
      this._logStart = undefined;
      this._name = undefined;
      this._negateDestination = undefined;
      this._negateSource = undefined;
      this._profileSetting.internalValue = undefined;
      this._qos.internalValue = undefined;
      this._ruleType = undefined;
      this._schedule = undefined;
      this._services = undefined;
      this._sourceAddresses = undefined;
      this._sourceHip = undefined;
      this._sourceImei = undefined;
      this._sourceImsi = undefined;
      this._sourceNwSlice = undefined;
      this._sourceUsers = undefined;
      this._sourceZones = undefined;
      this._tag = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._applications = value.applications;
      this._category = value.category;
      this._description = value.description;
      this._destinationAddresses = value.destinationAddresses;
      this._destinationHip = value.destinationHip;
      this._destinationZones = value.destinationZones;
      this._disableInspect = value.disableInspect;
      this._disableServerResponseInspection = value.disableServerResponseInspection;
      this._disabled = value.disabled;
      this._groupTag = value.groupTag;
      this._icmpUnreachable = value.icmpUnreachable;
      this._logEnd = value.logEnd;
      this._logSetting = value.logSetting;
      this._logStart = value.logStart;
      this._name = value.name;
      this._negateDestination = value.negateDestination;
      this._negateSource = value.negateSource;
      this._profileSetting.internalValue = value.profileSetting;
      this._qos.internalValue = value.qos;
      this._ruleType = value.ruleType;
      this._schedule = value.schedule;
      this._services = value.services;
      this._sourceAddresses = value.sourceAddresses;
      this._sourceHip = value.sourceHip;
      this._sourceImei = value.sourceImei;
      this._sourceImsi = value.sourceImsi;
      this._sourceNwSlice = value.sourceNwSlice;
      this._sourceUsers = value.sourceUsers;
      this._sourceZones = value.sourceZones;
      this._tag = value.tag;
      this._target.internalValue = value.target;
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

  // applications - computed: true, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // category - computed: true, optional: true, required: false
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
    return cdktf.Fn.tolist(this.getListAttribute('destination_addresses'));
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

  // destination_hip - computed: true, optional: true, required: false
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

  // destination_zones - computed: true, optional: true, required: false
  private _destinationZones?: string[]; 
  public get destinationZones() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_zones'));
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

  // disable_inspect - computed: true, optional: true, required: false
  private _disableInspect?: boolean | cdktf.IResolvable; 
  public get disableInspect() {
    return this.getBooleanAttribute('disable_inspect');
  }
  public set disableInspect(value: boolean | cdktf.IResolvable) {
    this._disableInspect = value;
  }
  public resetDisableInspect() {
    this._disableInspect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInspectInput() {
    return this._disableInspect;
  }

  // disable_server_response_inspection - computed: true, optional: true, required: false
  private _disableServerResponseInspection?: boolean | cdktf.IResolvable; 
  public get disableServerResponseInspection() {
    return this.getBooleanAttribute('disable_server_response_inspection');
  }
  public set disableServerResponseInspection(value: boolean | cdktf.IResolvable) {
    this._disableServerResponseInspection = value;
  }
  public resetDisableServerResponseInspection() {
    this._disableServerResponseInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableServerResponseInspectionInput() {
    return this._disableServerResponseInspection;
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

  // icmp_unreachable - computed: true, optional: true, required: false
  private _icmpUnreachable?: boolean | cdktf.IResolvable; 
  public get icmpUnreachable() {
    return this.getBooleanAttribute('icmp_unreachable');
  }
  public set icmpUnreachable(value: boolean | cdktf.IResolvable) {
    this._icmpUnreachable = value;
  }
  public resetIcmpUnreachable() {
    this._icmpUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUnreachableInput() {
    return this._icmpUnreachable;
  }

  // log_end - computed: true, optional: true, required: false
  private _logEnd?: boolean | cdktf.IResolvable; 
  public get logEnd() {
    return this.getBooleanAttribute('log_end');
  }
  public set logEnd(value: boolean | cdktf.IResolvable) {
    this._logEnd = value;
  }
  public resetLogEnd() {
    this._logEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEndInput() {
    return this._logEnd;
  }

  // log_setting - computed: true, optional: true, required: false
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

  // log_start - computed: true, optional: true, required: false
  private _logStart?: boolean | cdktf.IResolvable; 
  public get logStart() {
    return this.getBooleanAttribute('log_start');
  }
  public set logStart(value: boolean | cdktf.IResolvable) {
    this._logStart = value;
  }
  public resetLogStart() {
    this._logStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStartInput() {
    return this._logStart;
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

  // negate_destination - computed: true, optional: true, required: false
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

  // negate_source - computed: true, optional: true, required: false
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

  // profile_setting - computed: true, optional: true, required: false
  private _profileSetting = new DataPanosSecurityPolicyRulesProfileSettingOutputReference(this, "profile_setting");
  public get profileSetting() {
    return this._profileSetting;
  }
  public putProfileSetting(value: DataPanosSecurityPolicyRulesProfileSetting) {
    this._profileSetting.internalValue = value;
  }
  public resetProfileSetting() {
    this._profileSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileSettingInput() {
    return this._profileSetting.internalValue;
  }

  // qos - computed: true, optional: true, required: false
  private _qos = new DataPanosSecurityPolicyRulesQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }
  public putQos(value: DataPanosSecurityPolicyRulesQos) {
    this._qos.internalValue = value;
  }
  public resetQos() {
    this._qos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos.internalValue;
  }

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // services - computed: true, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
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

  // source_addresses - computed: true, optional: true, required: false
  private _sourceAddresses?: string[]; 
  public get sourceAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('source_addresses'));
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

  // source_hip - computed: true, optional: true, required: false
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

  // source_imei - computed: true, optional: true, required: false
  private _sourceImei?: string[]; 
  public get sourceImei() {
    return this.getListAttribute('source_imei');
  }
  public set sourceImei(value: string[]) {
    this._sourceImei = value;
  }
  public resetSourceImei() {
    this._sourceImei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImeiInput() {
    return this._sourceImei;
  }

  // source_imsi - computed: true, optional: true, required: false
  private _sourceImsi?: string[]; 
  public get sourceImsi() {
    return this.getListAttribute('source_imsi');
  }
  public set sourceImsi(value: string[]) {
    this._sourceImsi = value;
  }
  public resetSourceImsi() {
    this._sourceImsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImsiInput() {
    return this._sourceImsi;
  }

  // source_nw_slice - computed: true, optional: true, required: false
  private _sourceNwSlice?: string[]; 
  public get sourceNwSlice() {
    return this.getListAttribute('source_nw_slice');
  }
  public set sourceNwSlice(value: string[]) {
    this._sourceNwSlice = value;
  }
  public resetSourceNwSlice() {
    this._sourceNwSlice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNwSliceInput() {
    return this._sourceNwSlice;
  }

  // source_users - computed: true, optional: true, required: false
  private _sourceUsers?: string[]; 
  public get sourceUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('source_users'));
  }
  public set sourceUsers(value: string[]) {
    this._sourceUsers = value;
  }
  public resetSourceUsers() {
    this._sourceUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUsersInput() {
    return this._sourceUsers;
  }

  // source_zones - computed: true, optional: true, required: false
  private _sourceZones?: string[]; 
  public get sourceZones() {
    return cdktf.Fn.tolist(this.getListAttribute('source_zones'));
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
  private _target = new DataPanosSecurityPolicyRulesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataPanosSecurityPolicyRulesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataPanosSecurityPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosSecurityPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosSecurityPolicyRulesOutputReference {
    return new DataPanosSecurityPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy panos_security_policy}
*/
export class DataPanosSecurityPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosSecurityPolicy to import
  * @param importFromId The id of the existing DataPanosSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/security_policy panos_security_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_security_policy',
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
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosSecurityPolicyLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosSecurityPolicyLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataPanosSecurityPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataPanosSecurityPolicyRules[] | cdktf.IResolvable) {
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
      location: dataPanosSecurityPolicyLocationToTerraform(this._location.internalValue),
      rules: cdktf.listMapper(dataPanosSecurityPolicyRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosSecurityPolicyLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosSecurityPolicyLocation",
      },
      rules: {
        value: cdktf.listMapperHcl(dataPanosSecurityPolicyRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosSecurityPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
