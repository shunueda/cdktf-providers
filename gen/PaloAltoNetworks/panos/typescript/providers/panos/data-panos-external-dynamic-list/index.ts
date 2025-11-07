// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosExternalDynamicListConfig extends cdktf.TerraformMetaArguments {
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#disable_override DataPanosExternalDynamicList#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#location DataPanosExternalDynamicList#location}
  */
  readonly location: DataPanosExternalDynamicListLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#name DataPanosExternalDynamicList#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#type DataPanosExternalDynamicList#type}
  */
  readonly type?: DataPanosExternalDynamicListType;
}
export interface DataPanosExternalDynamicListLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#name DataPanosExternalDynamicList#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#panorama_device DataPanosExternalDynamicList#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosExternalDynamicListLocationDeviceGroupToTerraform(struct?: DataPanosExternalDynamicListLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosExternalDynamicListLocationDeviceGroupToHclTerraform(struct?: DataPanosExternalDynamicListLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosExternalDynamicListLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosExternalDynamicListLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListLocationShared {
}

export function dataPanosExternalDynamicListLocationSharedToTerraform(struct?: DataPanosExternalDynamicListLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListLocationSharedToHclTerraform(struct?: DataPanosExternalDynamicListLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#name DataPanosExternalDynamicList#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#ngfw_device DataPanosExternalDynamicList#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosExternalDynamicListLocationVsysToTerraform(struct?: DataPanosExternalDynamicListLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosExternalDynamicListLocationVsysToHclTerraform(struct?: DataPanosExternalDynamicListLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosExternalDynamicListLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosExternalDynamicListLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#device_group DataPanosExternalDynamicList#device_group}
  */
  readonly deviceGroup?: DataPanosExternalDynamicListLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#shared DataPanosExternalDynamicList#shared}
  */
  readonly shared?: DataPanosExternalDynamicListLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#vsys DataPanosExternalDynamicList#vsys}
  */
  readonly vsys?: DataPanosExternalDynamicListLocationVsys;
}

export function dataPanosExternalDynamicListLocationToTerraform(struct?: DataPanosExternalDynamicListLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosExternalDynamicListLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosExternalDynamicListLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosExternalDynamicListLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosExternalDynamicListLocationToHclTerraform(struct?: DataPanosExternalDynamicListLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosExternalDynamicListLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListLocationDeviceGroup",
    },
    shared: {
      value: dataPanosExternalDynamicListLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListLocationShared",
    },
    vsys: {
      value: dataPanosExternalDynamicListLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosExternalDynamicListLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DataPanosExternalDynamicListLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosExternalDynamicListLocationDeviceGroup) {
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
  private _shared = new DataPanosExternalDynamicListLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosExternalDynamicListLocationShared) {
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
  private _vsys = new DataPanosExternalDynamicListLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosExternalDynamicListLocationVsys) {
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
export interface DataPanosExternalDynamicListTypeDomainAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#password DataPanosExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#username DataPanosExternalDynamicList#username}
  */
  readonly username?: string;
}

export function dataPanosExternalDynamicListTypeDomainAuthToTerraform(struct?: DataPanosExternalDynamicListTypeDomainAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataPanosExternalDynamicListTypeDomainAuthToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomainAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeDomainAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomainAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomainAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataPanosExternalDynamicListTypeDomainRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
}

export function dataPanosExternalDynamicListTypeDomainRecurringDailyToTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosExternalDynamicListTypeDomainRecurringDailyToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeDomainRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomainRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosExternalDynamicListTypeDomainRecurringFiveMinute {
}

export function dataPanosExternalDynamicListTypeDomainRecurringFiveMinuteToTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeDomainRecurringFiveMinuteToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeDomainRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomainRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeDomainRecurringHourly {
}

export function dataPanosExternalDynamicListTypeDomainRecurringHourlyToTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeDomainRecurringHourlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeDomainRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomainRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeDomainRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_month DataPanosExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function dataPanosExternalDynamicListTypeDomainRecurringMonthlyToTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function dataPanosExternalDynamicListTypeDomainRecurringMonthlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeDomainRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomainRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface DataPanosExternalDynamicListTypeDomainRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_week DataPanosExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosExternalDynamicListTypeDomainRecurringWeeklyToTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosExternalDynamicListTypeDomainRecurringWeeklyToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeDomainRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomainRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosExternalDynamicListTypeDomainRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#daily DataPanosExternalDynamicList#daily}
  */
  readonly daily?: DataPanosExternalDynamicListTypeDomainRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#five_minute DataPanosExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: DataPanosExternalDynamicListTypeDomainRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#hourly DataPanosExternalDynamicList#hourly}
  */
  readonly hourly?: DataPanosExternalDynamicListTypeDomainRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#monthly DataPanosExternalDynamicList#monthly}
  */
  readonly monthly?: DataPanosExternalDynamicListTypeDomainRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#weekly DataPanosExternalDynamicList#weekly}
  */
  readonly weekly?: DataPanosExternalDynamicListTypeDomainRecurringWeekly;
}

export function dataPanosExternalDynamicListTypeDomainRecurringToTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosExternalDynamicListTypeDomainRecurringDailyToTerraform(struct!.daily),
    five_minute: dataPanosExternalDynamicListTypeDomainRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: dataPanosExternalDynamicListTypeDomainRecurringHourlyToTerraform(struct!.hourly),
    monthly: dataPanosExternalDynamicListTypeDomainRecurringMonthlyToTerraform(struct!.monthly),
    weekly: dataPanosExternalDynamicListTypeDomainRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosExternalDynamicListTypeDomainRecurringToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomainRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosExternalDynamicListTypeDomainRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomainRecurringDaily",
    },
    five_minute: {
      value: dataPanosExternalDynamicListTypeDomainRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomainRecurringFiveMinute",
    },
    hourly: {
      value: dataPanosExternalDynamicListTypeDomainRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomainRecurringHourly",
    },
    monthly: {
      value: dataPanosExternalDynamicListTypeDomainRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomainRecurringMonthly",
    },
    weekly: {
      value: dataPanosExternalDynamicListTypeDomainRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomainRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeDomainRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomainRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomainRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosExternalDynamicListTypeDomainRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosExternalDynamicListTypeDomainRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: true, optional: true, required: false
  private _fiveMinute = new DataPanosExternalDynamicListTypeDomainRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: DataPanosExternalDynamicListTypeDomainRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosExternalDynamicListTypeDomainRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosExternalDynamicListTypeDomainRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: true, optional: true, required: false
  private _monthly = new DataPanosExternalDynamicListTypeDomainRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: DataPanosExternalDynamicListTypeDomainRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosExternalDynamicListTypeDomainRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosExternalDynamicListTypeDomainRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosExternalDynamicListTypeDomain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#auth DataPanosExternalDynamicList#auth}
  */
  readonly auth?: DataPanosExternalDynamicListTypeDomainAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#certificate_profile DataPanosExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#description DataPanosExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#exception_list DataPanosExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Enable/Disable expand domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#expand_domain DataPanosExternalDynamicList#expand_domain}
  */
  readonly expandDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#recurring DataPanosExternalDynamicList#recurring}
  */
  readonly recurring?: DataPanosExternalDynamicListTypeDomainRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: string;
}

export function dataPanosExternalDynamicListTypeDomainToTerraform(struct?: DataPanosExternalDynamicListTypeDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataPanosExternalDynamicListTypeDomainAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    expand_domain: cdktf.booleanToTerraform(struct!.expandDomain),
    recurring: dataPanosExternalDynamicListTypeDomainRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypeDomainToHclTerraform(struct?: DataPanosExternalDynamicListTypeDomain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataPanosExternalDynamicListTypeDomainAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomainAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
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
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    expand_domain: {
      value: cdktf.booleanToHclTerraform(struct!.expandDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recurring: {
      value: dataPanosExternalDynamicListTypeDomainRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomainRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeDomainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeDomain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._expandDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandDomain = this._expandDomain;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeDomain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._expandDomain = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._expandDomain = value.expandDomain;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new DataPanosExternalDynamicListTypeDomainAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataPanosExternalDynamicListTypeDomainAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: true, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // expand_domain - computed: true, optional: true, required: false
  private _expandDomain?: boolean | cdktf.IResolvable; 
  public get expandDomain() {
    return this.getBooleanAttribute('expand_domain');
  }
  public set expandDomain(value: boolean | cdktf.IResolvable) {
    this._expandDomain = value;
  }
  public resetExpandDomain() {
    this._expandDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandDomainInput() {
    return this._expandDomain;
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosExternalDynamicListTypeDomainRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosExternalDynamicListTypeDomainRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataPanosExternalDynamicListTypeImeiAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#password DataPanosExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#username DataPanosExternalDynamicList#username}
  */
  readonly username?: string;
}

export function dataPanosExternalDynamicListTypeImeiAuthToTerraform(struct?: DataPanosExternalDynamicListTypeImeiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataPanosExternalDynamicListTypeImeiAuthToHclTerraform(struct?: DataPanosExternalDynamicListTypeImeiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImeiAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImeiAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImeiAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataPanosExternalDynamicListTypeImeiRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
}

export function dataPanosExternalDynamicListTypeImeiRecurringDailyToTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosExternalDynamicListTypeImeiRecurringDailyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImeiRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImeiRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosExternalDynamicListTypeImeiRecurringFiveMinute {
}

export function dataPanosExternalDynamicListTypeImeiRecurringFiveMinuteToTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeImeiRecurringFiveMinuteToHclTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeImeiRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImeiRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeImeiRecurringHourly {
}

export function dataPanosExternalDynamicListTypeImeiRecurringHourlyToTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeImeiRecurringHourlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeImeiRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImeiRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeImeiRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_month DataPanosExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function dataPanosExternalDynamicListTypeImeiRecurringMonthlyToTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function dataPanosExternalDynamicListTypeImeiRecurringMonthlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImeiRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImeiRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface DataPanosExternalDynamicListTypeImeiRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_week DataPanosExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosExternalDynamicListTypeImeiRecurringWeeklyToTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosExternalDynamicListTypeImeiRecurringWeeklyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImeiRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImeiRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosExternalDynamicListTypeImeiRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#daily DataPanosExternalDynamicList#daily}
  */
  readonly daily?: DataPanosExternalDynamicListTypeImeiRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#five_minute DataPanosExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: DataPanosExternalDynamicListTypeImeiRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#hourly DataPanosExternalDynamicList#hourly}
  */
  readonly hourly?: DataPanosExternalDynamicListTypeImeiRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#monthly DataPanosExternalDynamicList#monthly}
  */
  readonly monthly?: DataPanosExternalDynamicListTypeImeiRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#weekly DataPanosExternalDynamicList#weekly}
  */
  readonly weekly?: DataPanosExternalDynamicListTypeImeiRecurringWeekly;
}

export function dataPanosExternalDynamicListTypeImeiRecurringToTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosExternalDynamicListTypeImeiRecurringDailyToTerraform(struct!.daily),
    five_minute: dataPanosExternalDynamicListTypeImeiRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: dataPanosExternalDynamicListTypeImeiRecurringHourlyToTerraform(struct!.hourly),
    monthly: dataPanosExternalDynamicListTypeImeiRecurringMonthlyToTerraform(struct!.monthly),
    weekly: dataPanosExternalDynamicListTypeImeiRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosExternalDynamicListTypeImeiRecurringToHclTerraform(struct?: DataPanosExternalDynamicListTypeImeiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosExternalDynamicListTypeImeiRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImeiRecurringDaily",
    },
    five_minute: {
      value: dataPanosExternalDynamicListTypeImeiRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImeiRecurringFiveMinute",
    },
    hourly: {
      value: dataPanosExternalDynamicListTypeImeiRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImeiRecurringHourly",
    },
    monthly: {
      value: dataPanosExternalDynamicListTypeImeiRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImeiRecurringMonthly",
    },
    weekly: {
      value: dataPanosExternalDynamicListTypeImeiRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImeiRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImeiRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImeiRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImeiRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosExternalDynamicListTypeImeiRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosExternalDynamicListTypeImeiRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: true, optional: true, required: false
  private _fiveMinute = new DataPanosExternalDynamicListTypeImeiRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: DataPanosExternalDynamicListTypeImeiRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosExternalDynamicListTypeImeiRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosExternalDynamicListTypeImeiRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: true, optional: true, required: false
  private _monthly = new DataPanosExternalDynamicListTypeImeiRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: DataPanosExternalDynamicListTypeImeiRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosExternalDynamicListTypeImeiRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosExternalDynamicListTypeImeiRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosExternalDynamicListTypeImei {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#auth DataPanosExternalDynamicList#auth}
  */
  readonly auth?: DataPanosExternalDynamicListTypeImeiAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#certificate_profile DataPanosExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#description DataPanosExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#exception_list DataPanosExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#recurring DataPanosExternalDynamicList#recurring}
  */
  readonly recurring?: DataPanosExternalDynamicListTypeImeiRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: string;
}

export function dataPanosExternalDynamicListTypeImeiToTerraform(struct?: DataPanosExternalDynamicListTypeImei | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataPanosExternalDynamicListTypeImeiAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: dataPanosExternalDynamicListTypeImeiRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypeImeiToHclTerraform(struct?: DataPanosExternalDynamicListTypeImei | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataPanosExternalDynamicListTypeImeiAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImeiAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
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
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: dataPanosExternalDynamicListTypeImeiRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImeiRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImei | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImei | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new DataPanosExternalDynamicListTypeImeiAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataPanosExternalDynamicListTypeImeiAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: true, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosExternalDynamicListTypeImeiRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosExternalDynamicListTypeImeiRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataPanosExternalDynamicListTypeImsiAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#password DataPanosExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#username DataPanosExternalDynamicList#username}
  */
  readonly username?: string;
}

export function dataPanosExternalDynamicListTypeImsiAuthToTerraform(struct?: DataPanosExternalDynamicListTypeImsiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataPanosExternalDynamicListTypeImsiAuthToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsiAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImsiAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsiAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsiAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataPanosExternalDynamicListTypeImsiRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
}

export function dataPanosExternalDynamicListTypeImsiRecurringDailyToTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosExternalDynamicListTypeImsiRecurringDailyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImsiRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsiRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosExternalDynamicListTypeImsiRecurringFiveMinute {
}

export function dataPanosExternalDynamicListTypeImsiRecurringFiveMinuteToTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeImsiRecurringFiveMinuteToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeImsiRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsiRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeImsiRecurringHourly {
}

export function dataPanosExternalDynamicListTypeImsiRecurringHourlyToTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeImsiRecurringHourlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeImsiRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsiRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeImsiRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_month DataPanosExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function dataPanosExternalDynamicListTypeImsiRecurringMonthlyToTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function dataPanosExternalDynamicListTypeImsiRecurringMonthlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImsiRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsiRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface DataPanosExternalDynamicListTypeImsiRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_week DataPanosExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosExternalDynamicListTypeImsiRecurringWeeklyToTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosExternalDynamicListTypeImsiRecurringWeeklyToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImsiRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsiRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosExternalDynamicListTypeImsiRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#daily DataPanosExternalDynamicList#daily}
  */
  readonly daily?: DataPanosExternalDynamicListTypeImsiRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#five_minute DataPanosExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: DataPanosExternalDynamicListTypeImsiRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#hourly DataPanosExternalDynamicList#hourly}
  */
  readonly hourly?: DataPanosExternalDynamicListTypeImsiRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#monthly DataPanosExternalDynamicList#monthly}
  */
  readonly monthly?: DataPanosExternalDynamicListTypeImsiRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#weekly DataPanosExternalDynamicList#weekly}
  */
  readonly weekly?: DataPanosExternalDynamicListTypeImsiRecurringWeekly;
}

export function dataPanosExternalDynamicListTypeImsiRecurringToTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosExternalDynamicListTypeImsiRecurringDailyToTerraform(struct!.daily),
    five_minute: dataPanosExternalDynamicListTypeImsiRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: dataPanosExternalDynamicListTypeImsiRecurringHourlyToTerraform(struct!.hourly),
    monthly: dataPanosExternalDynamicListTypeImsiRecurringMonthlyToTerraform(struct!.monthly),
    weekly: dataPanosExternalDynamicListTypeImsiRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosExternalDynamicListTypeImsiRecurringToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsiRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosExternalDynamicListTypeImsiRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsiRecurringDaily",
    },
    five_minute: {
      value: dataPanosExternalDynamicListTypeImsiRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsiRecurringFiveMinute",
    },
    hourly: {
      value: dataPanosExternalDynamicListTypeImsiRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsiRecurringHourly",
    },
    monthly: {
      value: dataPanosExternalDynamicListTypeImsiRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsiRecurringMonthly",
    },
    weekly: {
      value: dataPanosExternalDynamicListTypeImsiRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsiRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImsiRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsiRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsiRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosExternalDynamicListTypeImsiRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosExternalDynamicListTypeImsiRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: true, optional: true, required: false
  private _fiveMinute = new DataPanosExternalDynamicListTypeImsiRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: DataPanosExternalDynamicListTypeImsiRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosExternalDynamicListTypeImsiRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosExternalDynamicListTypeImsiRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: true, optional: true, required: false
  private _monthly = new DataPanosExternalDynamicListTypeImsiRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: DataPanosExternalDynamicListTypeImsiRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosExternalDynamicListTypeImsiRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosExternalDynamicListTypeImsiRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosExternalDynamicListTypeImsi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#auth DataPanosExternalDynamicList#auth}
  */
  readonly auth?: DataPanosExternalDynamicListTypeImsiAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#certificate_profile DataPanosExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#description DataPanosExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#exception_list DataPanosExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#recurring DataPanosExternalDynamicList#recurring}
  */
  readonly recurring?: DataPanosExternalDynamicListTypeImsiRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: string;
}

export function dataPanosExternalDynamicListTypeImsiToTerraform(struct?: DataPanosExternalDynamicListTypeImsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataPanosExternalDynamicListTypeImsiAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: dataPanosExternalDynamicListTypeImsiRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypeImsiToHclTerraform(struct?: DataPanosExternalDynamicListTypeImsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataPanosExternalDynamicListTypeImsiAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsiAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
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
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: dataPanosExternalDynamicListTypeImsiRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsiRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeImsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeImsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeImsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new DataPanosExternalDynamicListTypeImsiAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataPanosExternalDynamicListTypeImsiAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: true, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosExternalDynamicListTypeImsiRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosExternalDynamicListTypeImsiRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataPanosExternalDynamicListTypeIpAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#password DataPanosExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#username DataPanosExternalDynamicList#username}
  */
  readonly username?: string;
}

export function dataPanosExternalDynamicListTypeIpAuthToTerraform(struct?: DataPanosExternalDynamicListTypeIpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataPanosExternalDynamicListTypeIpAuthToHclTerraform(struct?: DataPanosExternalDynamicListTypeIpAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeIpAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIpAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIpAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataPanosExternalDynamicListTypeIpRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
}

export function dataPanosExternalDynamicListTypeIpRecurringDailyToTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosExternalDynamicListTypeIpRecurringDailyToHclTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeIpRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIpRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosExternalDynamicListTypeIpRecurringFiveMinute {
}

export function dataPanosExternalDynamicListTypeIpRecurringFiveMinuteToTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeIpRecurringFiveMinuteToHclTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeIpRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIpRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeIpRecurringHourly {
}

export function dataPanosExternalDynamicListTypeIpRecurringHourlyToTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeIpRecurringHourlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeIpRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIpRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeIpRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_month DataPanosExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function dataPanosExternalDynamicListTypeIpRecurringMonthlyToTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function dataPanosExternalDynamicListTypeIpRecurringMonthlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeIpRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIpRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface DataPanosExternalDynamicListTypeIpRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_week DataPanosExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosExternalDynamicListTypeIpRecurringWeeklyToTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosExternalDynamicListTypeIpRecurringWeeklyToHclTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeIpRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIpRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosExternalDynamicListTypeIpRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#daily DataPanosExternalDynamicList#daily}
  */
  readonly daily?: DataPanosExternalDynamicListTypeIpRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#five_minute DataPanosExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: DataPanosExternalDynamicListTypeIpRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#hourly DataPanosExternalDynamicList#hourly}
  */
  readonly hourly?: DataPanosExternalDynamicListTypeIpRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#monthly DataPanosExternalDynamicList#monthly}
  */
  readonly monthly?: DataPanosExternalDynamicListTypeIpRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#weekly DataPanosExternalDynamicList#weekly}
  */
  readonly weekly?: DataPanosExternalDynamicListTypeIpRecurringWeekly;
}

export function dataPanosExternalDynamicListTypeIpRecurringToTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosExternalDynamicListTypeIpRecurringDailyToTerraform(struct!.daily),
    five_minute: dataPanosExternalDynamicListTypeIpRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: dataPanosExternalDynamicListTypeIpRecurringHourlyToTerraform(struct!.hourly),
    monthly: dataPanosExternalDynamicListTypeIpRecurringMonthlyToTerraform(struct!.monthly),
    weekly: dataPanosExternalDynamicListTypeIpRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosExternalDynamicListTypeIpRecurringToHclTerraform(struct?: DataPanosExternalDynamicListTypeIpRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosExternalDynamicListTypeIpRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIpRecurringDaily",
    },
    five_minute: {
      value: dataPanosExternalDynamicListTypeIpRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIpRecurringFiveMinute",
    },
    hourly: {
      value: dataPanosExternalDynamicListTypeIpRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIpRecurringHourly",
    },
    monthly: {
      value: dataPanosExternalDynamicListTypeIpRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIpRecurringMonthly",
    },
    weekly: {
      value: dataPanosExternalDynamicListTypeIpRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIpRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeIpRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIpRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIpRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosExternalDynamicListTypeIpRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosExternalDynamicListTypeIpRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: true, optional: true, required: false
  private _fiveMinute = new DataPanosExternalDynamicListTypeIpRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: DataPanosExternalDynamicListTypeIpRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosExternalDynamicListTypeIpRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosExternalDynamicListTypeIpRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: true, optional: true, required: false
  private _monthly = new DataPanosExternalDynamicListTypeIpRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: DataPanosExternalDynamicListTypeIpRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosExternalDynamicListTypeIpRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosExternalDynamicListTypeIpRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosExternalDynamicListTypeIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#auth DataPanosExternalDynamicList#auth}
  */
  readonly auth?: DataPanosExternalDynamicListTypeIpAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#certificate_profile DataPanosExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#description DataPanosExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#exception_list DataPanosExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#recurring DataPanosExternalDynamicList#recurring}
  */
  readonly recurring?: DataPanosExternalDynamicListTypeIpRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: string;
}

export function dataPanosExternalDynamicListTypeIpToTerraform(struct?: DataPanosExternalDynamicListTypeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataPanosExternalDynamicListTypeIpAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: dataPanosExternalDynamicListTypeIpRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypeIpToHclTerraform(struct?: DataPanosExternalDynamicListTypeIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataPanosExternalDynamicListTypeIpAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIpAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
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
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: dataPanosExternalDynamicListTypeIpRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIpRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new DataPanosExternalDynamicListTypeIpAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataPanosExternalDynamicListTypeIpAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: true, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosExternalDynamicListTypeIpRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosExternalDynamicListTypeIpRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataPanosExternalDynamicListTypePredefinedIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#description DataPanosExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#exception_list DataPanosExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: string;
}

export function dataPanosExternalDynamicListTypePredefinedIpToTerraform(struct?: DataPanosExternalDynamicListTypePredefinedIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypePredefinedIpToHclTerraform(struct?: DataPanosExternalDynamicListTypePredefinedIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypePredefinedIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypePredefinedIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypePredefinedIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._url = value.url;
    }
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

  // exception_list - computed: true, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataPanosExternalDynamicListTypePredefinedUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#description DataPanosExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#exception_list DataPanosExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: string;
}

export function dataPanosExternalDynamicListTypePredefinedUrlToTerraform(struct?: DataPanosExternalDynamicListTypePredefinedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypePredefinedUrlToHclTerraform(struct?: DataPanosExternalDynamicListTypePredefinedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypePredefinedUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypePredefinedUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypePredefinedUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._url = value.url;
    }
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

  // exception_list - computed: true, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataPanosExternalDynamicListTypeUrlAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#password DataPanosExternalDynamicList#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#username DataPanosExternalDynamicList#username}
  */
  readonly username?: string;
}

export function dataPanosExternalDynamicListTypeUrlAuthToTerraform(struct?: DataPanosExternalDynamicListTypeUrlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataPanosExternalDynamicListTypeUrlAuthToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrlAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeUrlAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrlAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrlAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataPanosExternalDynamicListTypeUrlRecurringDaily {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
}

export function dataPanosExternalDynamicListTypeUrlRecurringDailyToTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
  }
}


export function dataPanosExternalDynamicListTypeUrlRecurringDailyToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeUrlRecurringDailyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrlRecurringDaily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }
}
export interface DataPanosExternalDynamicListTypeUrlRecurringFiveMinute {
}

export function dataPanosExternalDynamicListTypeUrlRecurringFiveMinuteToTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeUrlRecurringFiveMinuteToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeUrlRecurringFiveMinuteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrlRecurringFiveMinute | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeUrlRecurringHourly {
}

export function dataPanosExternalDynamicListTypeUrlRecurringHourlyToTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosExternalDynamicListTypeUrlRecurringHourlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosExternalDynamicListTypeUrlRecurringHourlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrlRecurringHourly | cdktf.IResolvable | undefined) {
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
export interface DataPanosExternalDynamicListTypeUrlRecurringMonthly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_month DataPanosExternalDynamicList#day_of_month}
  */
  readonly dayOfMonth?: number;
}

export function dataPanosExternalDynamicListTypeUrlRecurringMonthlyToTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
  }
}


export function dataPanosExternalDynamicListTypeUrlRecurringMonthlyToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeUrlRecurringMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrlRecurringMonthly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfMonth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfMonth = value.dayOfMonth;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }
}
export interface DataPanosExternalDynamicListTypeUrlRecurringWeekly {
  /**
  * Time specification hh (e.g. 20)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#at DataPanosExternalDynamicList#at}
  */
  readonly at?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#day_of_week DataPanosExternalDynamicList#day_of_week}
  */
  readonly dayOfWeek?: string;
}

export function dataPanosExternalDynamicListTypeUrlRecurringWeeklyToTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    at: cdktf.stringToTerraform(struct!.at),
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}


export function dataPanosExternalDynamicListTypeUrlRecurringWeeklyToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    at: {
      value: cdktf.stringToHclTerraform(struct!.at),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeUrlRecurringWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._at !== undefined) {
      hasAnyValues = true;
      internalValueResult.at = this._at;
    }
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrlRecurringWeekly | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._at = undefined;
      this._dayOfWeek = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._at = value.at;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // at - computed: true, optional: true, required: false
  private _at?: string; 
  public get at() {
    return this.getStringAttribute('at');
  }
  public set at(value: string) {
    this._at = value;
  }
  public resetAt() {
    this._at = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atInput() {
    return this._at;
  }

  // day_of_week - computed: true, optional: true, required: false
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  public resetDayOfWeek() {
    this._dayOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface DataPanosExternalDynamicListTypeUrlRecurring {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#daily DataPanosExternalDynamicList#daily}
  */
  readonly daily?: DataPanosExternalDynamicListTypeUrlRecurringDaily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#five_minute DataPanosExternalDynamicList#five_minute}
  */
  readonly fiveMinute?: DataPanosExternalDynamicListTypeUrlRecurringFiveMinute;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#hourly DataPanosExternalDynamicList#hourly}
  */
  readonly hourly?: DataPanosExternalDynamicListTypeUrlRecurringHourly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#monthly DataPanosExternalDynamicList#monthly}
  */
  readonly monthly?: DataPanosExternalDynamicListTypeUrlRecurringMonthly;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#weekly DataPanosExternalDynamicList#weekly}
  */
  readonly weekly?: DataPanosExternalDynamicListTypeUrlRecurringWeekly;
}

export function dataPanosExternalDynamicListTypeUrlRecurringToTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: dataPanosExternalDynamicListTypeUrlRecurringDailyToTerraform(struct!.daily),
    five_minute: dataPanosExternalDynamicListTypeUrlRecurringFiveMinuteToTerraform(struct!.fiveMinute),
    hourly: dataPanosExternalDynamicListTypeUrlRecurringHourlyToTerraform(struct!.hourly),
    monthly: dataPanosExternalDynamicListTypeUrlRecurringMonthlyToTerraform(struct!.monthly),
    weekly: dataPanosExternalDynamicListTypeUrlRecurringWeeklyToTerraform(struct!.weekly),
  }
}


export function dataPanosExternalDynamicListTypeUrlRecurringToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrlRecurring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: dataPanosExternalDynamicListTypeUrlRecurringDailyToHclTerraform(struct!.daily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrlRecurringDaily",
    },
    five_minute: {
      value: dataPanosExternalDynamicListTypeUrlRecurringFiveMinuteToHclTerraform(struct!.fiveMinute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrlRecurringFiveMinute",
    },
    hourly: {
      value: dataPanosExternalDynamicListTypeUrlRecurringHourlyToHclTerraform(struct!.hourly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrlRecurringHourly",
    },
    monthly: {
      value: dataPanosExternalDynamicListTypeUrlRecurringMonthlyToHclTerraform(struct!.monthly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrlRecurringMonthly",
    },
    weekly: {
      value: dataPanosExternalDynamicListTypeUrlRecurringWeeklyToHclTerraform(struct!.weekly),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrlRecurringWeekly",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeUrlRecurringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrlRecurring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily?.internalValue;
    }
    if (this._fiveMinute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fiveMinute = this._fiveMinute?.internalValue;
    }
    if (this._hourly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourly = this._hourly?.internalValue;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrlRecurring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily.internalValue = undefined;
      this._fiveMinute.internalValue = undefined;
      this._hourly.internalValue = undefined;
      this._monthly.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily.internalValue = value.daily;
      this._fiveMinute.internalValue = value.fiveMinute;
      this._hourly.internalValue = value.hourly;
      this._monthly.internalValue = value.monthly;
      this._weekly.internalValue = value.weekly;
    }
  }

  // daily - computed: true, optional: true, required: false
  private _daily = new DataPanosExternalDynamicListTypeUrlRecurringDailyOutputReference(this, "daily");
  public get daily() {
    return this._daily;
  }
  public putDaily(value: DataPanosExternalDynamicListTypeUrlRecurringDaily) {
    this._daily.internalValue = value;
  }
  public resetDaily() {
    this._daily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily.internalValue;
  }

  // five_minute - computed: true, optional: true, required: false
  private _fiveMinute = new DataPanosExternalDynamicListTypeUrlRecurringFiveMinuteOutputReference(this, "five_minute");
  public get fiveMinute() {
    return this._fiveMinute;
  }
  public putFiveMinute(value: DataPanosExternalDynamicListTypeUrlRecurringFiveMinute) {
    this._fiveMinute.internalValue = value;
  }
  public resetFiveMinute() {
    this._fiveMinute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fiveMinuteInput() {
    return this._fiveMinute.internalValue;
  }

  // hourly - computed: true, optional: true, required: false
  private _hourly = new DataPanosExternalDynamicListTypeUrlRecurringHourlyOutputReference(this, "hourly");
  public get hourly() {
    return this._hourly;
  }
  public putHourly(value: DataPanosExternalDynamicListTypeUrlRecurringHourly) {
    this._hourly.internalValue = value;
  }
  public resetHourly() {
    this._hourly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourlyInput() {
    return this._hourly.internalValue;
  }

  // monthly - computed: true, optional: true, required: false
  private _monthly = new DataPanosExternalDynamicListTypeUrlRecurringMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: DataPanosExternalDynamicListTypeUrlRecurringMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // weekly - computed: true, optional: true, required: false
  private _weekly = new DataPanosExternalDynamicListTypeUrlRecurringWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: DataPanosExternalDynamicListTypeUrlRecurringWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface DataPanosExternalDynamicListTypeUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#auth DataPanosExternalDynamicList#auth}
  */
  readonly auth?: DataPanosExternalDynamicListTypeUrlAuth;
  /**
  * Profile for authenticating client certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#certificate_profile DataPanosExternalDynamicList#certificate_profile}
  */
  readonly certificateProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#description DataPanosExternalDynamicList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#exception_list DataPanosExternalDynamicList#exception_list}
  */
  readonly exceptionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#recurring DataPanosExternalDynamicList#recurring}
  */
  readonly recurring?: DataPanosExternalDynamicListTypeUrlRecurring;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: string;
}

export function dataPanosExternalDynamicListTypeUrlToTerraform(struct?: DataPanosExternalDynamicListTypeUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: dataPanosExternalDynamicListTypeUrlAuthToTerraform(struct!.auth),
    certificate_profile: cdktf.stringToTerraform(struct!.certificateProfile),
    description: cdktf.stringToTerraform(struct!.description),
    exception_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exceptionList),
    recurring: dataPanosExternalDynamicListTypeUrlRecurringToTerraform(struct!.recurring),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypeUrlToHclTerraform(struct?: DataPanosExternalDynamicListTypeUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: dataPanosExternalDynamicListTypeUrlAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrlAuth",
    },
    certificate_profile: {
      value: cdktf.stringToHclTerraform(struct!.certificateProfile),
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
    exception_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exceptionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recurring: {
      value: dataPanosExternalDynamicListTypeUrlRecurringToHclTerraform(struct!.recurring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrlRecurring",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListTypeUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._certificateProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProfile = this._certificateProfile;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._exceptionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionList = this._exceptionList;
    }
    if (this._recurring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurring = this._recurring?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListTypeUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._certificateProfile = undefined;
      this._description = undefined;
      this._exceptionList = undefined;
      this._recurring.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._certificateProfile = value.certificateProfile;
      this._description = value.description;
      this._exceptionList = value.exceptionList;
      this._recurring.internalValue = value.recurring;
      this._url = value.url;
    }
  }

  // auth - computed: true, optional: true, required: false
  private _auth = new DataPanosExternalDynamicListTypeUrlAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataPanosExternalDynamicListTypeUrlAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // certificate_profile - computed: true, optional: true, required: false
  private _certificateProfile?: string; 
  public get certificateProfile() {
    return this.getStringAttribute('certificate_profile');
  }
  public set certificateProfile(value: string) {
    this._certificateProfile = value;
  }
  public resetCertificateProfile() {
    this._certificateProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProfileInput() {
    return this._certificateProfile;
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

  // exception_list - computed: true, optional: true, required: false
  private _exceptionList?: string[]; 
  public get exceptionList() {
    return this.getListAttribute('exception_list');
  }
  public set exceptionList(value: string[]) {
    this._exceptionList = value;
  }
  public resetExceptionList() {
    this._exceptionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionListInput() {
    return this._exceptionList;
  }

  // recurring - computed: true, optional: true, required: false
  private _recurring = new DataPanosExternalDynamicListTypeUrlRecurringOutputReference(this, "recurring");
  public get recurring() {
    return this._recurring;
  }
  public putRecurring(value: DataPanosExternalDynamicListTypeUrlRecurring) {
    this._recurring.internalValue = value;
  }
  public resetRecurring() {
    this._recurring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringInput() {
    return this._recurring.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataPanosExternalDynamicListType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#domain DataPanosExternalDynamicList#domain}
  */
  readonly domain?: DataPanosExternalDynamicListTypeDomain;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#imei DataPanosExternalDynamicList#imei}
  */
  readonly imei?: DataPanosExternalDynamicListTypeImei;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#imsi DataPanosExternalDynamicList#imsi}
  */
  readonly imsi?: DataPanosExternalDynamicListTypeImsi;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#ip DataPanosExternalDynamicList#ip}
  */
  readonly ip?: DataPanosExternalDynamicListTypeIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#predefined_ip DataPanosExternalDynamicList#predefined_ip}
  */
  readonly predefinedIp?: DataPanosExternalDynamicListTypePredefinedIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#predefined_url DataPanosExternalDynamicList#predefined_url}
  */
  readonly predefinedUrl?: DataPanosExternalDynamicListTypePredefinedUrl;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#url DataPanosExternalDynamicList#url}
  */
  readonly url?: DataPanosExternalDynamicListTypeUrl;
}

export function dataPanosExternalDynamicListTypeToTerraform(struct?: DataPanosExternalDynamicListType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: dataPanosExternalDynamicListTypeDomainToTerraform(struct!.domain),
    imei: dataPanosExternalDynamicListTypeImeiToTerraform(struct!.imei),
    imsi: dataPanosExternalDynamicListTypeImsiToTerraform(struct!.imsi),
    ip: dataPanosExternalDynamicListTypeIpToTerraform(struct!.ip),
    predefined_ip: dataPanosExternalDynamicListTypePredefinedIpToTerraform(struct!.predefinedIp),
    predefined_url: dataPanosExternalDynamicListTypePredefinedUrlToTerraform(struct!.predefinedUrl),
    url: dataPanosExternalDynamicListTypeUrlToTerraform(struct!.url),
  }
}


export function dataPanosExternalDynamicListTypeToHclTerraform(struct?: DataPanosExternalDynamicListType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: dataPanosExternalDynamicListTypeDomainToHclTerraform(struct!.domain),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeDomain",
    },
    imei: {
      value: dataPanosExternalDynamicListTypeImeiToHclTerraform(struct!.imei),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImei",
    },
    imsi: {
      value: dataPanosExternalDynamicListTypeImsiToHclTerraform(struct!.imsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeImsi",
    },
    ip: {
      value: dataPanosExternalDynamicListTypeIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeIp",
    },
    predefined_ip: {
      value: dataPanosExternalDynamicListTypePredefinedIpToHclTerraform(struct!.predefinedIp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypePredefinedIp",
    },
    predefined_url: {
      value: dataPanosExternalDynamicListTypePredefinedUrlToHclTerraform(struct!.predefinedUrl),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypePredefinedUrl",
    },
    url: {
      value: dataPanosExternalDynamicListTypeUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosExternalDynamicListTypeUrl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosExternalDynamicListTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosExternalDynamicListType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain?.internalValue;
    }
    if (this._imei?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imei = this._imei?.internalValue;
    }
    if (this._imsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsi = this._imsi?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._predefinedIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedIp = this._predefinedIp?.internalValue;
    }
    if (this._predefinedUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedUrl = this._predefinedUrl?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosExternalDynamicListType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain.internalValue = undefined;
      this._imei.internalValue = undefined;
      this._imsi.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._predefinedIp.internalValue = undefined;
      this._predefinedUrl.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain.internalValue = value.domain;
      this._imei.internalValue = value.imei;
      this._imsi.internalValue = value.imsi;
      this._ip.internalValue = value.ip;
      this._predefinedIp.internalValue = value.predefinedIp;
      this._predefinedUrl.internalValue = value.predefinedUrl;
      this._url.internalValue = value.url;
    }
  }

  // domain - computed: true, optional: true, required: false
  private _domain = new DataPanosExternalDynamicListTypeDomainOutputReference(this, "domain");
  public get domain() {
    return this._domain;
  }
  public putDomain(value: DataPanosExternalDynamicListTypeDomain) {
    this._domain.internalValue = value;
  }
  public resetDomain() {
    this._domain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain.internalValue;
  }

  // imei - computed: true, optional: true, required: false
  private _imei = new DataPanosExternalDynamicListTypeImeiOutputReference(this, "imei");
  public get imei() {
    return this._imei;
  }
  public putImei(value: DataPanosExternalDynamicListTypeImei) {
    this._imei.internalValue = value;
  }
  public resetImei() {
    this._imei.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imeiInput() {
    return this._imei.internalValue;
  }

  // imsi - computed: true, optional: true, required: false
  private _imsi = new DataPanosExternalDynamicListTypeImsiOutputReference(this, "imsi");
  public get imsi() {
    return this._imsi;
  }
  public putImsi(value: DataPanosExternalDynamicListTypeImsi) {
    this._imsi.internalValue = value;
  }
  public resetImsi() {
    this._imsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiInput() {
    return this._imsi.internalValue;
  }

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosExternalDynamicListTypeIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosExternalDynamicListTypeIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // predefined_ip - computed: true, optional: true, required: false
  private _predefinedIp = new DataPanosExternalDynamicListTypePredefinedIpOutputReference(this, "predefined_ip");
  public get predefinedIp() {
    return this._predefinedIp;
  }
  public putPredefinedIp(value: DataPanosExternalDynamicListTypePredefinedIp) {
    this._predefinedIp.internalValue = value;
  }
  public resetPredefinedIp() {
    this._predefinedIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedIpInput() {
    return this._predefinedIp.internalValue;
  }

  // predefined_url - computed: true, optional: true, required: false
  private _predefinedUrl = new DataPanosExternalDynamicListTypePredefinedUrlOutputReference(this, "predefined_url");
  public get predefinedUrl() {
    return this._predefinedUrl;
  }
  public putPredefinedUrl(value: DataPanosExternalDynamicListTypePredefinedUrl) {
    this._predefinedUrl.internalValue = value;
  }
  public resetPredefinedUrl() {
    this._predefinedUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedUrlInput() {
    return this._predefinedUrl.internalValue;
  }

  // url - computed: true, optional: true, required: false
  private _url = new DataPanosExternalDynamicListTypeUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: DataPanosExternalDynamicListTypeUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list panos_external_dynamic_list}
*/
export class DataPanosExternalDynamicList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_external_dynamic_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosExternalDynamicList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosExternalDynamicList to import
  * @param importFromId The id of the existing DataPanosExternalDynamicList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosExternalDynamicList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_external_dynamic_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/data-sources/external_dynamic_list panos_external_dynamic_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosExternalDynamicListConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosExternalDynamicListConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_external_dynamic_list',
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
    this._disableOverride = config.disableOverride;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._type.internalValue = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosExternalDynamicListLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosExternalDynamicListLocation) {
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

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosExternalDynamicListTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosExternalDynamicListType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      location: dataPanosExternalDynamicListLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      type: dataPanosExternalDynamicListTypeToTerraform(this._type.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_override: {
        value: cdktf.stringToHclTerraform(this._disableOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: dataPanosExternalDynamicListLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosExternalDynamicListLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: dataPanosExternalDynamicListTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosExternalDynamicListType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
