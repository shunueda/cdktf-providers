// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntivirusSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#application_exceptions AntivirusSecurityProfile#application_exceptions}
  */
  readonly applicationExceptions?: AntivirusSecurityProfileApplicationExceptions[] | cdktf.IResolvable;
  /**
  * Protocol decoders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#decoders AntivirusSecurityProfile#decoders}
  */
  readonly decoders?: AntivirusSecurityProfileDecoders[] | cdktf.IResolvable;
  /**
  * Profile description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#description AntivirusSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#disable_override AntivirusSecurityProfile#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#location AntivirusSecurityProfile#location}
  */
  readonly location: AntivirusSecurityProfileLocation;
  /**
  * Exceptions for ML based file scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#machine_learning_exceptions AntivirusSecurityProfile#machine_learning_exceptions}
  */
  readonly machineLearningExceptions?: AntivirusSecurityProfileMachineLearningExceptions[] | cdktf.IResolvable;
  /**
  * Machine learning models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#machine_learning_models AntivirusSecurityProfile#machine_learning_models}
  */
  readonly machineLearningModels?: AntivirusSecurityProfileMachineLearningModels[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Enable packet capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#packet_capture AntivirusSecurityProfile#packet_capture}
  */
  readonly packetCapture?: boolean | cdktf.IResolvable;
  /**
  * Exceptions for specific threats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#threat_exceptions AntivirusSecurityProfile#threat_exceptions}
  */
  readonly threatExceptions?: AntivirusSecurityProfileThreatExceptions[] | cdktf.IResolvable;
  /**
  * Enable hold mode for WildFire real time signature lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#wfrt_hold_mode AntivirusSecurityProfile#wfrt_hold_mode}
  */
  readonly wfrtHoldMode?: boolean | cdktf.IResolvable;
}
export interface AntivirusSecurityProfileApplicationExceptions {
  /**
  * Action for application exception. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#action AntivirusSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function antivirusSecurityProfileApplicationExceptionsToTerraform(struct?: AntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antivirusSecurityProfileApplicationExceptionsToHclTerraform(struct?: AntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable): any {
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

export class AntivirusSecurityProfileApplicationExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
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

export class AntivirusSecurityProfileApplicationExceptionsList extends cdktf.ComplexList {
  public internalValue? : AntivirusSecurityProfileApplicationExceptions[] | cdktf.IResolvable

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
  public get(index: number): AntivirusSecurityProfileApplicationExceptionsOutputReference {
    return new AntivirusSecurityProfileApplicationExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntivirusSecurityProfileDecoders {
  /**
  * Action for standard antivirus signatures. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#action AntivirusSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Action for malicious threats detected in real-time by the WildFire Inline ML models. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#ml_action AntivirusSecurityProfile#ml_action}
  */
  readonly mlAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Action for signatures generated by the WildFire system. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#wildfire_action AntivirusSecurityProfile#wildfire_action}
  */
  readonly wildfireAction?: string;
}

export function antivirusSecurityProfileDecodersToTerraform(struct?: AntivirusSecurityProfileDecoders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ml_action: cdktf.stringToTerraform(struct!.mlAction),
    name: cdktf.stringToTerraform(struct!.name),
    wildfire_action: cdktf.stringToTerraform(struct!.wildfireAction),
  }
}


export function antivirusSecurityProfileDecodersToHclTerraform(struct?: AntivirusSecurityProfileDecoders | cdktf.IResolvable): any {
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
    ml_action: {
      value: cdktf.stringToHclTerraform(struct!.mlAction),
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
    wildfire_action: {
      value: cdktf.stringToHclTerraform(struct!.wildfireAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntivirusSecurityProfileDecodersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntivirusSecurityProfileDecoders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._mlAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.mlAction = this._mlAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._wildfireAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildfireAction = this._wildfireAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntivirusSecurityProfileDecoders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._mlAction = undefined;
      this._name = undefined;
      this._wildfireAction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._mlAction = value.mlAction;
      this._name = value.name;
      this._wildfireAction = value.wildfireAction;
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

  // ml_action - computed: true, optional: true, required: false
  private _mlAction?: string; 
  public get mlAction() {
    return this.getStringAttribute('ml_action');
  }
  public set mlAction(value: string) {
    this._mlAction = value;
  }
  public resetMlAction() {
    this._mlAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlActionInput() {
    return this._mlAction;
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

  // wildfire_action - computed: true, optional: true, required: false
  private _wildfireAction?: string; 
  public get wildfireAction() {
    return this.getStringAttribute('wildfire_action');
  }
  public set wildfireAction(value: string) {
    this._wildfireAction = value;
  }
  public resetWildfireAction() {
    this._wildfireAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildfireActionInput() {
    return this._wildfireAction;
  }
}

export class AntivirusSecurityProfileDecodersList extends cdktf.ComplexList {
  public internalValue? : AntivirusSecurityProfileDecoders[] | cdktf.IResolvable

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
  public get(index: number): AntivirusSecurityProfileDecodersOutputReference {
    return new AntivirusSecurityProfileDecodersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntivirusSecurityProfileLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#panorama_device AntivirusSecurityProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function antivirusSecurityProfileLocationDeviceGroupToTerraform(struct?: AntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function antivirusSecurityProfileLocationDeviceGroupToHclTerraform(struct?: AntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
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

export class AntivirusSecurityProfileLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface AntivirusSecurityProfileLocationShared {
}

export function antivirusSecurityProfileLocationSharedToTerraform(struct?: AntivirusSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function antivirusSecurityProfileLocationSharedToHclTerraform(struct?: AntivirusSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AntivirusSecurityProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntivirusSecurityProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntivirusSecurityProfileLocationShared | cdktf.IResolvable | undefined) {
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
export interface AntivirusSecurityProfileLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#ngfw_device AntivirusSecurityProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function antivirusSecurityProfileLocationVsysToTerraform(struct?: AntivirusSecurityProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function antivirusSecurityProfileLocationVsysToHclTerraform(struct?: AntivirusSecurityProfileLocationVsys | cdktf.IResolvable): any {
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

export class AntivirusSecurityProfileLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntivirusSecurityProfileLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntivirusSecurityProfileLocationVsys | cdktf.IResolvable | undefined) {
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
export interface AntivirusSecurityProfileLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#device_group AntivirusSecurityProfile#device_group}
  */
  readonly deviceGroup?: AntivirusSecurityProfileLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#shared AntivirusSecurityProfile#shared}
  */
  readonly shared?: AntivirusSecurityProfileLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#vsys AntivirusSecurityProfile#vsys}
  */
  readonly vsys?: AntivirusSecurityProfileLocationVsys;
}

export function antivirusSecurityProfileLocationToTerraform(struct?: AntivirusSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: antivirusSecurityProfileLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: antivirusSecurityProfileLocationSharedToTerraform(struct!.shared),
    vsys: antivirusSecurityProfileLocationVsysToTerraform(struct!.vsys),
  }
}


export function antivirusSecurityProfileLocationToHclTerraform(struct?: AntivirusSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: antivirusSecurityProfileLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "AntivirusSecurityProfileLocationDeviceGroup",
    },
    shared: {
      value: antivirusSecurityProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "AntivirusSecurityProfileLocationShared",
    },
    vsys: {
      value: antivirusSecurityProfileLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "AntivirusSecurityProfileLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntivirusSecurityProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AntivirusSecurityProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntivirusSecurityProfileLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new AntivirusSecurityProfileLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: AntivirusSecurityProfileLocationDeviceGroup) {
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
  private _shared = new AntivirusSecurityProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: AntivirusSecurityProfileLocationShared) {
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
  private _vsys = new AntivirusSecurityProfileLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: AntivirusSecurityProfileLocationVsys) {
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
export interface AntivirusSecurityProfileMachineLearningExceptions {
  /**
  * Exception description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#description AntivirusSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * File name to exclude from enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#filename AntivirusSecurityProfile#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function antivirusSecurityProfileMachineLearningExceptionsToTerraform(struct?: AntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    filename: cdktf.stringToTerraform(struct!.filename),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antivirusSecurityProfileMachineLearningExceptionsToHclTerraform(struct?: AntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable): any {
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
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntivirusSecurityProfileMachineLearningExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._filename = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._filename = value.filename;
      this._name = value.name;
    }
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
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

export class AntivirusSecurityProfileMachineLearningExceptionsList extends cdktf.ComplexList {
  public internalValue? : AntivirusSecurityProfileMachineLearningExceptions[] | cdktf.IResolvable

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
  public get(index: number): AntivirusSecurityProfileMachineLearningExceptionsOutputReference {
    return new AntivirusSecurityProfileMachineLearningExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntivirusSecurityProfileMachineLearningModels {
  /**
  * Action for ML model antivirus signatures. Valid values are: `enable`, `enable(alert-only)`, or `disable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#action AntivirusSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function antivirusSecurityProfileMachineLearningModelsToTerraform(struct?: AntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antivirusSecurityProfileMachineLearningModelsToHclTerraform(struct?: AntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable): any {
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

export class AntivirusSecurityProfileMachineLearningModelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: true, required: false
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

export class AntivirusSecurityProfileMachineLearningModelsList extends cdktf.ComplexList {
  public internalValue? : AntivirusSecurityProfileMachineLearningModels[] | cdktf.IResolvable

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
  public get(index: number): AntivirusSecurityProfileMachineLearningModelsOutputReference {
    return new AntivirusSecurityProfileMachineLearningModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AntivirusSecurityProfileThreatExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#name AntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function antivirusSecurityProfileThreatExceptionsToTerraform(struct?: AntivirusSecurityProfileThreatExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function antivirusSecurityProfileThreatExceptionsToHclTerraform(struct?: AntivirusSecurityProfileThreatExceptions | cdktf.IResolvable): any {
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

export class AntivirusSecurityProfileThreatExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AntivirusSecurityProfileThreatExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AntivirusSecurityProfileThreatExceptions | cdktf.IResolvable | undefined) {
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

export class AntivirusSecurityProfileThreatExceptionsList extends cdktf.ComplexList {
  public internalValue? : AntivirusSecurityProfileThreatExceptions[] | cdktf.IResolvable

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
  public get(index: number): AntivirusSecurityProfileThreatExceptionsOutputReference {
    return new AntivirusSecurityProfileThreatExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile panos_antivirus_security_profile}
*/
export class AntivirusSecurityProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_antivirus_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntivirusSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntivirusSecurityProfile to import
  * @param importFromId The id of the existing AntivirusSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntivirusSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_antivirus_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/antivirus_security_profile panos_antivirus_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntivirusSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AntivirusSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_antivirus_security_profile',
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
    this._applicationExceptions.internalValue = config.applicationExceptions;
    this._decoders.internalValue = config.decoders;
    this._description = config.description;
    this._disableOverride = config.disableOverride;
    this._location.internalValue = config.location;
    this._machineLearningExceptions.internalValue = config.machineLearningExceptions;
    this._machineLearningModels.internalValue = config.machineLearningModels;
    this._name = config.name;
    this._packetCapture = config.packetCapture;
    this._threatExceptions.internalValue = config.threatExceptions;
    this._wfrtHoldMode = config.wfrtHoldMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_exceptions - computed: false, optional: true, required: false
  private _applicationExceptions = new AntivirusSecurityProfileApplicationExceptionsList(this, "application_exceptions", false);
  public get applicationExceptions() {
    return this._applicationExceptions;
  }
  public putApplicationExceptions(value: AntivirusSecurityProfileApplicationExceptions[] | cdktf.IResolvable) {
    this._applicationExceptions.internalValue = value;
  }
  public resetApplicationExceptions() {
    this._applicationExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationExceptionsInput() {
    return this._applicationExceptions.internalValue;
  }

  // decoders - computed: false, optional: true, required: false
  private _decoders = new AntivirusSecurityProfileDecodersList(this, "decoders", false);
  public get decoders() {
    return this._decoders;
  }
  public putDecoders(value: AntivirusSecurityProfileDecoders[] | cdktf.IResolvable) {
    this._decoders.internalValue = value;
  }
  public resetDecoders() {
    this._decoders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodersInput() {
    return this._decoders.internalValue;
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

  // location - computed: false, optional: false, required: true
  private _location = new AntivirusSecurityProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: AntivirusSecurityProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // machine_learning_exceptions - computed: false, optional: true, required: false
  private _machineLearningExceptions = new AntivirusSecurityProfileMachineLearningExceptionsList(this, "machine_learning_exceptions", false);
  public get machineLearningExceptions() {
    return this._machineLearningExceptions;
  }
  public putMachineLearningExceptions(value: AntivirusSecurityProfileMachineLearningExceptions[] | cdktf.IResolvable) {
    this._machineLearningExceptions.internalValue = value;
  }
  public resetMachineLearningExceptions() {
    this._machineLearningExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningExceptionsInput() {
    return this._machineLearningExceptions.internalValue;
  }

  // machine_learning_models - computed: false, optional: true, required: false
  private _machineLearningModels = new AntivirusSecurityProfileMachineLearningModelsList(this, "machine_learning_models", false);
  public get machineLearningModels() {
    return this._machineLearningModels;
  }
  public putMachineLearningModels(value: AntivirusSecurityProfileMachineLearningModels[] | cdktf.IResolvable) {
    this._machineLearningModels.internalValue = value;
  }
  public resetMachineLearningModels() {
    this._machineLearningModels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningModelsInput() {
    return this._machineLearningModels.internalValue;
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

  // packet_capture - computed: false, optional: true, required: false
  private _packetCapture?: boolean | cdktf.IResolvable; 
  public get packetCapture() {
    return this.getBooleanAttribute('packet_capture');
  }
  public set packetCapture(value: boolean | cdktf.IResolvable) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }

  // threat_exceptions - computed: false, optional: true, required: false
  private _threatExceptions = new AntivirusSecurityProfileThreatExceptionsList(this, "threat_exceptions", false);
  public get threatExceptions() {
    return this._threatExceptions;
  }
  public putThreatExceptions(value: AntivirusSecurityProfileThreatExceptions[] | cdktf.IResolvable) {
    this._threatExceptions.internalValue = value;
  }
  public resetThreatExceptions() {
    this._threatExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExceptionsInput() {
    return this._threatExceptions.internalValue;
  }

  // wfrt_hold_mode - computed: false, optional: true, required: false
  private _wfrtHoldMode?: boolean | cdktf.IResolvable; 
  public get wfrtHoldMode() {
    return this.getBooleanAttribute('wfrt_hold_mode');
  }
  public set wfrtHoldMode(value: boolean | cdktf.IResolvable) {
    this._wfrtHoldMode = value;
  }
  public resetWfrtHoldMode() {
    this._wfrtHoldMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfrtHoldModeInput() {
    return this._wfrtHoldMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_exceptions: cdktf.listMapper(antivirusSecurityProfileApplicationExceptionsToTerraform, false)(this._applicationExceptions.internalValue),
      decoders: cdktf.listMapper(antivirusSecurityProfileDecodersToTerraform, false)(this._decoders.internalValue),
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      location: antivirusSecurityProfileLocationToTerraform(this._location.internalValue),
      machine_learning_exceptions: cdktf.listMapper(antivirusSecurityProfileMachineLearningExceptionsToTerraform, false)(this._machineLearningExceptions.internalValue),
      machine_learning_models: cdktf.listMapper(antivirusSecurityProfileMachineLearningModelsToTerraform, false)(this._machineLearningModels.internalValue),
      name: cdktf.stringToTerraform(this._name),
      packet_capture: cdktf.booleanToTerraform(this._packetCapture),
      threat_exceptions: cdktf.listMapper(antivirusSecurityProfileThreatExceptionsToTerraform, false)(this._threatExceptions.internalValue),
      wfrt_hold_mode: cdktf.booleanToTerraform(this._wfrtHoldMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_exceptions: {
        value: cdktf.listMapperHcl(antivirusSecurityProfileApplicationExceptionsToHclTerraform, false)(this._applicationExceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusSecurityProfileApplicationExceptionsList",
      },
      decoders: {
        value: cdktf.listMapperHcl(antivirusSecurityProfileDecodersToHclTerraform, false)(this._decoders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusSecurityProfileDecodersList",
      },
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
      location: {
        value: antivirusSecurityProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AntivirusSecurityProfileLocation",
      },
      machine_learning_exceptions: {
        value: cdktf.listMapperHcl(antivirusSecurityProfileMachineLearningExceptionsToHclTerraform, false)(this._machineLearningExceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusSecurityProfileMachineLearningExceptionsList",
      },
      machine_learning_models: {
        value: cdktf.listMapperHcl(antivirusSecurityProfileMachineLearningModelsToHclTerraform, false)(this._machineLearningModels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusSecurityProfileMachineLearningModelsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture: {
        value: cdktf.booleanToHclTerraform(this._packetCapture),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      threat_exceptions: {
        value: cdktf.listMapperHcl(antivirusSecurityProfileThreatExceptionsToHclTerraform, false)(this._threatExceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntivirusSecurityProfileThreatExceptionsList",
      },
      wfrt_hold_mode: {
        value: cdktf.booleanToHclTerraform(this._wfrtHoldMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
