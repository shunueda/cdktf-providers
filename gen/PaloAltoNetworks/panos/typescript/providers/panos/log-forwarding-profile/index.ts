// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogForwardingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#description LogForwardingProfile#description}
  */
  readonly description?: string;
  /**
  * disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#disable_override LogForwardingProfile#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * Enabling enhanced-application-logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#enhanced_application_logging LogForwardingProfile#enhanced_application_logging}
  */
  readonly enhancedApplicationLogging?: boolean | cdktf.IResolvable;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#location LogForwardingProfile#location}
  */
  readonly location: LogForwardingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#match_list LogForwardingProfile#match_list}
  */
  readonly matchList?: LogForwardingProfileMatchListStruct[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#name LogForwardingProfile#name}
  */
  readonly name: string;
}
export interface LogForwardingProfileLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#name LogForwardingProfile#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#panorama_device LogForwardingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function logForwardingProfileLocationDeviceGroupToTerraform(struct?: LogForwardingProfileLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function logForwardingProfileLocationDeviceGroupToHclTerraform(struct?: LogForwardingProfileLocationDeviceGroup | cdktf.IResolvable): any {
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

export class LogForwardingProfileLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogForwardingProfileLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface LogForwardingProfileLocationShared {
}

export function logForwardingProfileLocationSharedToTerraform(struct?: LogForwardingProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logForwardingProfileLocationSharedToHclTerraform(struct?: LogForwardingProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogForwardingProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileLocationShared | cdktf.IResolvable | undefined) {
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
export interface LogForwardingProfileLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#device_group LogForwardingProfile#device_group}
  */
  readonly deviceGroup?: LogForwardingProfileLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#shared LogForwardingProfile#shared}
  */
  readonly shared?: LogForwardingProfileLocationShared;
}

export function logForwardingProfileLocationToTerraform(struct?: LogForwardingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: logForwardingProfileLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: logForwardingProfileLocationSharedToTerraform(struct!.shared),
  }
}


export function logForwardingProfileLocationToHclTerraform(struct?: LogForwardingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: logForwardingProfileLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileLocationDeviceGroup",
    },
    shared: {
      value: logForwardingProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileLocationShared",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogForwardingProfileLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new LogForwardingProfileLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: LogForwardingProfileLocationDeviceGroup) {
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
  private _shared = new LogForwardingProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: LogForwardingProfileLocationShared) {
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
export interface LogForwardingProfileMatchListActionsTypeIntegration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#action LogForwardingProfile#action}
  */
  readonly action?: string;
}

export function logForwardingProfileMatchListActionsTypeIntegrationToTerraform(struct?: LogForwardingProfileMatchListActionsTypeIntegration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function logForwardingProfileMatchListActionsTypeIntegrationToHclTerraform(struct?: LogForwardingProfileMatchListActionsTypeIntegration | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListActionsTypeIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileMatchListActionsTypeIntegration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActionsTypeIntegration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
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
}
export interface LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost {
}

export function logForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhostToTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhostToHclTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost | cdktf.IResolvable | undefined) {
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
export interface LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama {
}

export function logForwardingProfileMatchListActionsTypeTaggingRegistrationPanoramaToTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logForwardingProfileMatchListActionsTypeTaggingRegistrationPanoramaToHclTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama | cdktf.IResolvable | undefined) {
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
export interface LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#http_profile LogForwardingProfile#http_profile}
  */
  readonly httpProfile?: string;
}

export function logForwardingProfileMatchListActionsTypeTaggingRegistrationRemoteToTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_profile: cdktf.stringToTerraform(struct!.httpProfile),
  }
}


export function logForwardingProfileMatchListActionsTypeTaggingRegistrationRemoteToHclTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_profile: {
      value: cdktf.stringToHclTerraform(struct!.httpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProfile = this._httpProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpProfile = value.httpProfile;
    }
  }

  // http_profile - computed: false, optional: true, required: false
  private _httpProfile?: string; 
  public get httpProfile() {
    return this.getStringAttribute('http_profile');
  }
  public set httpProfile(value: string) {
    this._httpProfile = value;
  }
  public resetHttpProfile() {
    this._httpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProfileInput() {
    return this._httpProfile;
  }
}
export interface LogForwardingProfileMatchListActionsTypeTaggingRegistration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#localhost LogForwardingProfile#localhost}
  */
  readonly localhost?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#panorama LogForwardingProfile#panorama}
  */
  readonly panorama?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#remote LogForwardingProfile#remote}
  */
  readonly remote?: LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote;
}

export function logForwardingProfileMatchListActionsTypeTaggingRegistrationToTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost: logForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhostToTerraform(struct!.localhost),
    panorama: logForwardingProfileMatchListActionsTypeTaggingRegistrationPanoramaToTerraform(struct!.panorama),
    remote: logForwardingProfileMatchListActionsTypeTaggingRegistrationRemoteToTerraform(struct!.remote),
  }
}


export function logForwardingProfileMatchListActionsTypeTaggingRegistrationToHclTerraform(struct?: LogForwardingProfileMatchListActionsTypeTaggingRegistration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost: {
      value: logForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhostToHclTerraform(struct!.localhost),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost",
    },
    panorama: {
      value: logForwardingProfileMatchListActionsTypeTaggingRegistrationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama",
    },
    remote: {
      value: logForwardingProfileMatchListActionsTypeTaggingRegistrationRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListActionsTypeTaggingRegistrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileMatchListActionsTypeTaggingRegistration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhost = this._localhost?.internalValue;
    }
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActionsTypeTaggingRegistration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhost.internalValue = undefined;
      this._panorama.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhost.internalValue = value.localhost;
      this._panorama.internalValue = value.panorama;
      this._remote.internalValue = value.remote;
    }
  }

  // localhost - computed: false, optional: true, required: false
  private _localhost = new LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhostOutputReference(this, "localhost");
  public get localhost() {
    return this._localhost;
  }
  public putLocalhost(value: LogForwardingProfileMatchListActionsTypeTaggingRegistrationLocalhost) {
    this._localhost.internalValue = value;
  }
  public resetLocalhost() {
    this._localhost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostInput() {
    return this._localhost.internalValue;
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: LogForwardingProfileMatchListActionsTypeTaggingRegistrationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: LogForwardingProfileMatchListActionsTypeTaggingRegistrationRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface LogForwardingProfileMatchListActionsTypeTagging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#action LogForwardingProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#registration LogForwardingProfile#registration}
  */
  readonly registration?: LogForwardingProfileMatchListActionsTypeTaggingRegistration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#tags LogForwardingProfile#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#target LogForwardingProfile#target}
  */
  readonly target?: string;
  /**
  * timeout in minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#timeout LogForwardingProfile#timeout}
  */
  readonly timeout?: number;
}

export function logForwardingProfileMatchListActionsTypeTaggingToTerraform(struct?: LogForwardingProfileMatchListActionsTypeTagging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    registration: logForwardingProfileMatchListActionsTypeTaggingRegistrationToTerraform(struct!.registration),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    target: cdktf.stringToTerraform(struct!.target),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function logForwardingProfileMatchListActionsTypeTaggingToHclTerraform(struct?: LogForwardingProfileMatchListActionsTypeTagging | cdktf.IResolvable): any {
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
    registration: {
      value: logForwardingProfileMatchListActionsTypeTaggingRegistrationToHclTerraform(struct!.registration),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileMatchListActionsTypeTaggingRegistration",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListActionsTypeTaggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileMatchListActionsTypeTagging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._registration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registration = this._registration?.internalValue;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActionsTypeTagging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._registration.internalValue = undefined;
      this._tags = undefined;
      this._target = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._registration.internalValue = value.registration;
      this._tags = value.tags;
      this._target = value.target;
      this._timeout = value.timeout;
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

  // registration - computed: false, optional: true, required: false
  private _registration = new LogForwardingProfileMatchListActionsTypeTaggingRegistrationOutputReference(this, "registration");
  public get registration() {
    return this._registration;
  }
  public putRegistration(value: LogForwardingProfileMatchListActionsTypeTaggingRegistration) {
    this._registration.internalValue = value;
  }
  public resetRegistration() {
    this._registration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationInput() {
    return this._registration.internalValue;
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

  // target - computed: true, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface LogForwardingProfileMatchListActionsType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#integration LogForwardingProfile#integration}
  */
  readonly integration?: LogForwardingProfileMatchListActionsTypeIntegration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#tagging LogForwardingProfile#tagging}
  */
  readonly tagging?: LogForwardingProfileMatchListActionsTypeTagging;
}

export function logForwardingProfileMatchListActionsTypeToTerraform(struct?: LogForwardingProfileMatchListActionsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration: logForwardingProfileMatchListActionsTypeIntegrationToTerraform(struct!.integration),
    tagging: logForwardingProfileMatchListActionsTypeTaggingToTerraform(struct!.tagging),
  }
}


export function logForwardingProfileMatchListActionsTypeToHclTerraform(struct?: LogForwardingProfileMatchListActionsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration: {
      value: logForwardingProfileMatchListActionsTypeIntegrationToHclTerraform(struct!.integration),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileMatchListActionsTypeIntegration",
    },
    tagging: {
      value: logForwardingProfileMatchListActionsTypeTaggingToHclTerraform(struct!.tagging),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileMatchListActionsTypeTagging",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListActionsTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogForwardingProfileMatchListActionsType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integration = this._integration?.internalValue;
    }
    if (this._tagging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagging = this._tagging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActionsType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integration.internalValue = undefined;
      this._tagging.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integration.internalValue = value.integration;
      this._tagging.internalValue = value.tagging;
    }
  }

  // integration - computed: false, optional: true, required: false
  private _integration = new LogForwardingProfileMatchListActionsTypeIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: LogForwardingProfileMatchListActionsTypeIntegration) {
    this._integration.internalValue = value;
  }
  public resetIntegration() {
    this._integration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }

  // tagging - computed: false, optional: true, required: false
  private _tagging = new LogForwardingProfileMatchListActionsTypeTaggingOutputReference(this, "tagging");
  public get tagging() {
    return this._tagging;
  }
  public putTagging(value: LogForwardingProfileMatchListActionsTypeTagging) {
    this._tagging.internalValue = value;
  }
  public resetTagging() {
    this._tagging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggingInput() {
    return this._tagging.internalValue;
  }
}
export interface LogForwardingProfileMatchListActions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#name LogForwardingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#type LogForwardingProfile#type}
  */
  readonly type?: LogForwardingProfileMatchListActionsType;
}

export function logForwardingProfileMatchListActionsToTerraform(struct?: LogForwardingProfileMatchListActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: logForwardingProfileMatchListActionsTypeToTerraform(struct!.type),
  }
}


export function logForwardingProfileMatchListActionsToHclTerraform(struct?: LogForwardingProfileMatchListActions | cdktf.IResolvable): any {
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
    type: {
      value: logForwardingProfileMatchListActionsTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "LogForwardingProfileMatchListActionsType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwardingProfileMatchListActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type.internalValue = value.type;
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

  // type - computed: false, optional: true, required: false
  private _type = new LogForwardingProfileMatchListActionsTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: LogForwardingProfileMatchListActionsType) {
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

export class LogForwardingProfileMatchListActionsList extends cdktf.ComplexList {
  public internalValue? : LogForwardingProfileMatchListActions[] | cdktf.IResolvable

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
  public get(index: number): LogForwardingProfileMatchListActionsOutputReference {
    return new LogForwardingProfileMatchListActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogForwardingProfileMatchListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#action_desc LogForwardingProfile#action_desc}
  */
  readonly actionDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#actions LogForwardingProfile#actions}
  */
  readonly actions?: LogForwardingProfileMatchListActions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#filter LogForwardingProfile#filter}
  */
  readonly filter?: string;
  /**
  * Pick log type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#log_type LogForwardingProfile#log_type}
  */
  readonly logType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#name LogForwardingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#quarantine LogForwardingProfile#quarantine}
  */
  readonly quarantine?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#send_email LogForwardingProfile#send_email}
  */
  readonly sendEmail?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#send_http LogForwardingProfile#send_http}
  */
  readonly sendHttp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#send_snmptrap LogForwardingProfile#send_snmptrap}
  */
  readonly sendSnmptrap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#send_syslog LogForwardingProfile#send_syslog}
  */
  readonly sendSyslog?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#send_to_panorama LogForwardingProfile#send_to_panorama}
  */
  readonly sendToPanorama?: boolean | cdktf.IResolvable;
}

export function logForwardingProfileMatchListStructToTerraform(struct?: LogForwardingProfileMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_desc: cdktf.stringToTerraform(struct!.actionDesc),
    actions: cdktf.listMapper(logForwardingProfileMatchListActionsToTerraform, false)(struct!.actions),
    filter: cdktf.stringToTerraform(struct!.filter),
    log_type: cdktf.stringToTerraform(struct!.logType),
    name: cdktf.stringToTerraform(struct!.name),
    quarantine: cdktf.booleanToTerraform(struct!.quarantine),
    send_email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendEmail),
    send_http: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendHttp),
    send_snmptrap: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendSnmptrap),
    send_syslog: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sendSyslog),
    send_to_panorama: cdktf.booleanToTerraform(struct!.sendToPanorama),
  }
}


export function logForwardingProfileMatchListStructToHclTerraform(struct?: LogForwardingProfileMatchListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_desc: {
      value: cdktf.stringToHclTerraform(struct!.actionDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktf.listMapperHcl(logForwardingProfileMatchListActionsToHclTerraform, false)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "LogForwardingProfileMatchListActionsList",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
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
    quarantine: {
      value: cdktf.booleanToHclTerraform(struct!.quarantine),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendEmail),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_http: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendHttp),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_snmptrap: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendSnmptrap),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_syslog: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sendSyslog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_to_panorama: {
      value: cdktf.booleanToHclTerraform(struct!.sendToPanorama),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwardingProfileMatchListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwardingProfileMatchListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDesc = this._actionDesc;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._quarantine !== undefined) {
      hasAnyValues = true;
      internalValueResult.quarantine = this._quarantine;
    }
    if (this._sendEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendEmail = this._sendEmail;
    }
    if (this._sendHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendHttp = this._sendHttp;
    }
    if (this._sendSnmptrap !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendSnmptrap = this._sendSnmptrap;
    }
    if (this._sendSyslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendSyslog = this._sendSyslog;
    }
    if (this._sendToPanorama !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendToPanorama = this._sendToPanorama;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwardingProfileMatchListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionDesc = undefined;
      this._actions.internalValue = undefined;
      this._filter = undefined;
      this._logType = undefined;
      this._name = undefined;
      this._quarantine = undefined;
      this._sendEmail = undefined;
      this._sendHttp = undefined;
      this._sendSnmptrap = undefined;
      this._sendSyslog = undefined;
      this._sendToPanorama = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionDesc = value.actionDesc;
      this._actions.internalValue = value.actions;
      this._filter = value.filter;
      this._logType = value.logType;
      this._name = value.name;
      this._quarantine = value.quarantine;
      this._sendEmail = value.sendEmail;
      this._sendHttp = value.sendHttp;
      this._sendSnmptrap = value.sendSnmptrap;
      this._sendSyslog = value.sendSyslog;
      this._sendToPanorama = value.sendToPanorama;
    }
  }

  // action_desc - computed: false, optional: true, required: false
  private _actionDesc?: string; 
  public get actionDesc() {
    return this.getStringAttribute('action_desc');
  }
  public set actionDesc(value: string) {
    this._actionDesc = value;
  }
  public resetActionDesc() {
    this._actionDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDescInput() {
    return this._actionDesc;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new LogForwardingProfileMatchListActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: LogForwardingProfileMatchListActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
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

  // quarantine - computed: false, optional: true, required: false
  private _quarantine?: boolean | cdktf.IResolvable; 
  public get quarantine() {
    return this.getBooleanAttribute('quarantine');
  }
  public set quarantine(value: boolean | cdktf.IResolvable) {
    this._quarantine = value;
  }
  public resetQuarantine() {
    this._quarantine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineInput() {
    return this._quarantine;
  }

  // send_email - computed: false, optional: true, required: false
  private _sendEmail?: string[]; 
  public get sendEmail() {
    return this.getListAttribute('send_email');
  }
  public set sendEmail(value: string[]) {
    this._sendEmail = value;
  }
  public resetSendEmail() {
    this._sendEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailInput() {
    return this._sendEmail;
  }

  // send_http - computed: false, optional: true, required: false
  private _sendHttp?: string[]; 
  public get sendHttp() {
    return this.getListAttribute('send_http');
  }
  public set sendHttp(value: string[]) {
    this._sendHttp = value;
  }
  public resetSendHttp() {
    this._sendHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendHttpInput() {
    return this._sendHttp;
  }

  // send_snmptrap - computed: false, optional: true, required: false
  private _sendSnmptrap?: string[]; 
  public get sendSnmptrap() {
    return this.getListAttribute('send_snmptrap');
  }
  public set sendSnmptrap(value: string[]) {
    this._sendSnmptrap = value;
  }
  public resetSendSnmptrap() {
    this._sendSnmptrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSnmptrapInput() {
    return this._sendSnmptrap;
  }

  // send_syslog - computed: false, optional: true, required: false
  private _sendSyslog?: string[]; 
  public get sendSyslog() {
    return this.getListAttribute('send_syslog');
  }
  public set sendSyslog(value: string[]) {
    this._sendSyslog = value;
  }
  public resetSendSyslog() {
    this._sendSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendSyslogInput() {
    return this._sendSyslog;
  }

  // send_to_panorama - computed: false, optional: true, required: false
  private _sendToPanorama?: boolean | cdktf.IResolvable; 
  public get sendToPanorama() {
    return this.getBooleanAttribute('send_to_panorama');
  }
  public set sendToPanorama(value: boolean | cdktf.IResolvable) {
    this._sendToPanorama = value;
  }
  public resetSendToPanorama() {
    this._sendToPanorama = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendToPanoramaInput() {
    return this._sendToPanorama;
  }
}

export class LogForwardingProfileMatchListStructList extends cdktf.ComplexList {
  public internalValue? : LogForwardingProfileMatchListStruct[] | cdktf.IResolvable

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
  public get(index: number): LogForwardingProfileMatchListStructOutputReference {
    return new LogForwardingProfileMatchListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile panos_log_forwarding_profile}
*/
export class LogForwardingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_log_forwarding_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogForwardingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogForwardingProfile to import
  * @param importFromId The id of the existing LogForwardingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogForwardingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_log_forwarding_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/log_forwarding_profile panos_log_forwarding_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogForwardingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LogForwardingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_log_forwarding_profile',
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
    this._enhancedApplicationLogging = config.enhancedApplicationLogging;
    this._location.internalValue = config.location;
    this._matchList.internalValue = config.matchList;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disable_override - computed: false, optional: true, required: false
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

  // enhanced_application_logging - computed: false, optional: true, required: false
  private _enhancedApplicationLogging?: boolean | cdktf.IResolvable; 
  public get enhancedApplicationLogging() {
    return this.getBooleanAttribute('enhanced_application_logging');
  }
  public set enhancedApplicationLogging(value: boolean | cdktf.IResolvable) {
    this._enhancedApplicationLogging = value;
  }
  public resetEnhancedApplicationLogging() {
    this._enhancedApplicationLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedApplicationLoggingInput() {
    return this._enhancedApplicationLogging;
  }

  // location - computed: false, optional: false, required: true
  private _location = new LogForwardingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: LogForwardingProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // match_list - computed: false, optional: true, required: false
  private _matchList = new LogForwardingProfileMatchListStructList(this, "match_list", false);
  public get matchList() {
    return this._matchList;
  }
  public putMatchList(value: LogForwardingProfileMatchListStruct[] | cdktf.IResolvable) {
    this._matchList.internalValue = value;
  }
  public resetMatchList() {
    this._matchList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchListInput() {
    return this._matchList.internalValue;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      enhanced_application_logging: cdktf.booleanToTerraform(this._enhancedApplicationLogging),
      location: logForwardingProfileLocationToTerraform(this._location.internalValue),
      match_list: cdktf.listMapper(logForwardingProfileMatchListStructToTerraform, false)(this._matchList.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      enhanced_application_logging: {
        value: cdktf.booleanToHclTerraform(this._enhancedApplicationLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: logForwardingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogForwardingProfileLocation",
      },
      match_list: {
        value: cdktf.listMapperHcl(logForwardingProfileMatchListStructToHclTerraform, false)(this._matchList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogForwardingProfileMatchListStructList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
