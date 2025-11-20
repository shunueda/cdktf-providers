// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosDefaultSecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#location DataPanosDefaultSecurityPolicy#location}
  */
  readonly location: DataPanosDefaultSecurityPolicyLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#rules DataPanosDefaultSecurityPolicy#rules}
  */
  readonly rules: DataPanosDefaultSecurityPolicyRules[] | cdktf.IResolvable;
}
export interface DataPanosDefaultSecurityPolicyLocationDeviceGroup {
  /**
  * The device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#name DataPanosDefaultSecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * The panorama device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#panorama_device DataPanosDefaultSecurityPolicy#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosDefaultSecurityPolicyLocationDeviceGroupToTerraform(struct?: DataPanosDefaultSecurityPolicyLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosDefaultSecurityPolicyLocationDeviceGroupToHclTerraform(struct?: DataPanosDefaultSecurityPolicyLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosDefaultSecurityPolicyLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDefaultSecurityPolicyLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDefaultSecurityPolicyLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosDefaultSecurityPolicyLocationShared {
}

export function dataPanosDefaultSecurityPolicyLocationSharedToTerraform(struct?: DataPanosDefaultSecurityPolicyLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosDefaultSecurityPolicyLocationSharedToHclTerraform(struct?: DataPanosDefaultSecurityPolicyLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosDefaultSecurityPolicyLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDefaultSecurityPolicyLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDefaultSecurityPolicyLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosDefaultSecurityPolicyLocation {
  /**
  * Located in a specific device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#device_group DataPanosDefaultSecurityPolicy#device_group}
  */
  readonly deviceGroup?: DataPanosDefaultSecurityPolicyLocationDeviceGroup;
  /**
  * Located in a shared rulebase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#shared DataPanosDefaultSecurityPolicy#shared}
  */
  readonly shared?: DataPanosDefaultSecurityPolicyLocationShared;
}

export function dataPanosDefaultSecurityPolicyLocationToTerraform(struct?: DataPanosDefaultSecurityPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosDefaultSecurityPolicyLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosDefaultSecurityPolicyLocationSharedToTerraform(struct!.shared),
  }
}


export function dataPanosDefaultSecurityPolicyLocationToHclTerraform(struct?: DataPanosDefaultSecurityPolicyLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosDefaultSecurityPolicyLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDefaultSecurityPolicyLocationDeviceGroup",
    },
    shared: {
      value: dataPanosDefaultSecurityPolicyLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDefaultSecurityPolicyLocationShared",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDefaultSecurityPolicyLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDefaultSecurityPolicyLocation | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDefaultSecurityPolicyLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceGroup.internalValue = undefined;
      this._shared.internalValue = undefined;
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
    }
  }

  // device_group - computed: false, optional: true, required: false
  private _deviceGroup = new DataPanosDefaultSecurityPolicyLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosDefaultSecurityPolicyLocationDeviceGroup) {
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
  private _shared = new DataPanosDefaultSecurityPolicyLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosDefaultSecurityPolicyLocationShared) {
    this._shared.internalValue = value;
  }
  public resetShared() {
    this._shared.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared.internalValue;
  }
}
export interface DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#data_filtering DataPanosDefaultSecurityPolicy#data_filtering}
  */
  readonly dataFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#file_blocking DataPanosDefaultSecurityPolicy#file_blocking}
  */
  readonly fileBlocking?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#gtp DataPanosDefaultSecurityPolicy#gtp}
  */
  readonly gtp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#sctp DataPanosDefaultSecurityPolicy#sctp}
  */
  readonly sctp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#spyware DataPanosDefaultSecurityPolicy#spyware}
  */
  readonly spyware?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#url_filtering DataPanosDefaultSecurityPolicy#url_filtering}
  */
  readonly urlFiltering?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#virus DataPanosDefaultSecurityPolicy#virus}
  */
  readonly virus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#vulnerability DataPanosDefaultSecurityPolicy#vulnerability}
  */
  readonly vulnerability?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#wildfire_analysis DataPanosDefaultSecurityPolicy#wildfire_analysis}
  */
  readonly wildfireAnalysis?: string[];
}

export function dataPanosDefaultSecurityPolicyRulesProfileSettingProfilesToTerraform(struct?: DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable): any {
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


export function dataPanosDefaultSecurityPolicyRulesProfileSettingProfilesToHclTerraform(struct?: DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable): any {
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

export class DataPanosDefaultSecurityPolicyRulesProfileSettingProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles | cdktf.IResolvable | undefined) {
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
export interface DataPanosDefaultSecurityPolicyRulesProfileSetting {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#group DataPanosDefaultSecurityPolicy#group}
  */
  readonly group?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#profiles DataPanosDefaultSecurityPolicy#profiles}
  */
  readonly profiles?: DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles;
}

export function dataPanosDefaultSecurityPolicyRulesProfileSettingToTerraform(struct?: DataPanosDefaultSecurityPolicyRulesProfileSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.group),
    profiles: dataPanosDefaultSecurityPolicyRulesProfileSettingProfilesToTerraform(struct!.profiles),
  }
}


export function dataPanosDefaultSecurityPolicyRulesProfileSettingToHclTerraform(struct?: DataPanosDefaultSecurityPolicyRulesProfileSetting | cdktf.IResolvable): any {
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
      value: dataPanosDefaultSecurityPolicyRulesProfileSettingProfilesToHclTerraform(struct!.profiles),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDefaultSecurityPolicyRulesProfileSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosDefaultSecurityPolicyRulesProfileSetting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosDefaultSecurityPolicyRulesProfileSetting | cdktf.IResolvable | undefined) {
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
  private _profiles = new DataPanosDefaultSecurityPolicyRulesProfileSettingProfilesOutputReference(this, "profiles");
  public get profiles() {
    return this._profiles;
  }
  public putProfiles(value: DataPanosDefaultSecurityPolicyRulesProfileSettingProfiles) {
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
export interface DataPanosDefaultSecurityPolicyRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#action DataPanosDefaultSecurityPolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#group_tag DataPanosDefaultSecurityPolicy#group_tag}
  */
  readonly groupTag?: string;
  /**
  * Send ICMP unreachable error when action is drop or reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#icmp_unreachable DataPanosDefaultSecurityPolicy#icmp_unreachable}
  */
  readonly icmpUnreachable?: boolean | cdktf.IResolvable;
  /**
  * Log at session end (required for certain ACC tables)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#log_end DataPanosDefaultSecurityPolicy#log_end}
  */
  readonly logEnd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#log_setting DataPanosDefaultSecurityPolicy#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log at session start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#log_start DataPanosDefaultSecurityPolicy#log_start}
  */
  readonly logStart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#name DataPanosDefaultSecurityPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#profile_setting DataPanosDefaultSecurityPolicy#profile_setting}
  */
  readonly profileSetting?: DataPanosDefaultSecurityPolicyRulesProfileSetting;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#tag DataPanosDefaultSecurityPolicy#tag}
  */
  readonly tag?: string[];
}

export function dataPanosDefaultSecurityPolicyRulesToTerraform(struct?: DataPanosDefaultSecurityPolicyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    group_tag: cdktf.stringToTerraform(struct!.groupTag),
    icmp_unreachable: cdktf.booleanToTerraform(struct!.icmpUnreachable),
    log_end: cdktf.booleanToTerraform(struct!.logEnd),
    log_setting: cdktf.stringToTerraform(struct!.logSetting),
    log_start: cdktf.booleanToTerraform(struct!.logStart),
    name: cdktf.stringToTerraform(struct!.name),
    profile_setting: dataPanosDefaultSecurityPolicyRulesProfileSettingToTerraform(struct!.profileSetting),
    tag: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tag),
  }
}


export function dataPanosDefaultSecurityPolicyRulesToHclTerraform(struct?: DataPanosDefaultSecurityPolicyRules | cdktf.IResolvable): any {
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
    profile_setting: {
      value: dataPanosDefaultSecurityPolicyRulesProfileSettingToHclTerraform(struct!.profileSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosDefaultSecurityPolicyRulesProfileSetting",
    },
    tag: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tag),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosDefaultSecurityPolicyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosDefaultSecurityPolicyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
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
    if (this._profileSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileSetting = this._profileSetting?.internalValue;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosDefaultSecurityPolicyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._groupTag = undefined;
      this._icmpUnreachable = undefined;
      this._logEnd = undefined;
      this._logSetting = undefined;
      this._logStart = undefined;
      this._name = undefined;
      this._profileSetting.internalValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._groupTag = value.groupTag;
      this._icmpUnreachable = value.icmpUnreachable;
      this._logEnd = value.logEnd;
      this._logSetting = value.logSetting;
      this._logStart = value.logStart;
      this._name = value.name;
      this._profileSetting.internalValue = value.profileSetting;
      this._tag = value.tag;
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

  // profile_setting - computed: true, optional: true, required: false
  private _profileSetting = new DataPanosDefaultSecurityPolicyRulesProfileSettingOutputReference(this, "profile_setting");
  public get profileSetting() {
    return this._profileSetting;
  }
  public putProfileSetting(value: DataPanosDefaultSecurityPolicyRulesProfileSetting) {
    this._profileSetting.internalValue = value;
  }
  public resetProfileSetting() {
    this._profileSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileSettingInput() {
    return this._profileSetting.internalValue;
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
}

export class DataPanosDefaultSecurityPolicyRulesList extends cdktf.ComplexList {
  public internalValue? : DataPanosDefaultSecurityPolicyRules[] | cdktf.IResolvable

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
  public get(index: number): DataPanosDefaultSecurityPolicyRulesOutputReference {
    return new DataPanosDefaultSecurityPolicyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy panos_default_security_policy}
*/
export class DataPanosDefaultSecurityPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_default_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosDefaultSecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosDefaultSecurityPolicy to import
  * @param importFromId The id of the existing DataPanosDefaultSecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosDefaultSecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_default_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/default_security_policy panos_default_security_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosDefaultSecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosDefaultSecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_default_security_policy',
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
  private _location = new DataPanosDefaultSecurityPolicyLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosDefaultSecurityPolicyLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataPanosDefaultSecurityPolicyRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataPanosDefaultSecurityPolicyRules[] | cdktf.IResolvable) {
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
      location: dataPanosDefaultSecurityPolicyLocationToTerraform(this._location.internalValue),
      rules: cdktf.listMapper(dataPanosDefaultSecurityPolicyRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosDefaultSecurityPolicyLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosDefaultSecurityPolicyLocation",
      },
      rules: {
        value: cdktf.listMapperHcl(dataPanosDefaultSecurityPolicyRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosDefaultSecurityPolicyRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
