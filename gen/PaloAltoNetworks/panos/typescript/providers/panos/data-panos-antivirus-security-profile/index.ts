// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosAntivirusSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#application_exceptions DataPanosAntivirusSecurityProfile#application_exceptions}
  */
  readonly applicationExceptions?: DataPanosAntivirusSecurityProfileApplicationExceptions[] | cdktf.IResolvable;
  /**
  * Protocol decoders
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#decoders DataPanosAntivirusSecurityProfile#decoders}
  */
  readonly decoders?: DataPanosAntivirusSecurityProfileDecoders[] | cdktf.IResolvable;
  /**
  * Profile description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#description DataPanosAntivirusSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * Disable object override in child device groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#disable_override DataPanosAntivirusSecurityProfile#disable_override}
  */
  readonly disableOverride?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#location DataPanosAntivirusSecurityProfile#location}
  */
  readonly location: DataPanosAntivirusSecurityProfileLocation;
  /**
  * Exceptions for ML based file scans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#machine_learning_exceptions DataPanosAntivirusSecurityProfile#machine_learning_exceptions}
  */
  readonly machineLearningExceptions?: DataPanosAntivirusSecurityProfileMachineLearningExceptions[] | cdktf.IResolvable;
  /**
  * Machine learning models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#machine_learning_models DataPanosAntivirusSecurityProfile#machine_learning_models}
  */
  readonly machineLearningModels?: DataPanosAntivirusSecurityProfileMachineLearningModels[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Enable packet capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#packet_capture DataPanosAntivirusSecurityProfile#packet_capture}
  */
  readonly packetCapture?: boolean | cdktf.IResolvable;
  /**
  * Exceptions for specific threats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#threat_exceptions DataPanosAntivirusSecurityProfile#threat_exceptions}
  */
  readonly threatExceptions?: DataPanosAntivirusSecurityProfileThreatExceptions[] | cdktf.IResolvable;
  /**
  * Enable hold mode for WildFire real time signature lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#wfrt_hold_mode DataPanosAntivirusSecurityProfile#wfrt_hold_mode}
  */
  readonly wfrtHoldMode?: boolean | cdktf.IResolvable;
}
export interface DataPanosAntivirusSecurityProfileApplicationExceptions {
  /**
  * Action for application exception. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#action DataPanosAntivirusSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntivirusSecurityProfileApplicationExceptionsToTerraform(struct?: DataPanosAntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosAntivirusSecurityProfileApplicationExceptionsToHclTerraform(struct?: DataPanosAntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable): any {
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

export class DataPanosAntivirusSecurityProfileApplicationExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileApplicationExceptions | cdktf.IResolvable | undefined) {
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

export class DataPanosAntivirusSecurityProfileApplicationExceptionsList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntivirusSecurityProfileApplicationExceptions[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntivirusSecurityProfileApplicationExceptionsOutputReference {
    return new DataPanosAntivirusSecurityProfileApplicationExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntivirusSecurityProfileDecoders {
  /**
  * Action for standard antivirus signatures. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#action DataPanosAntivirusSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Action for malicious threats detected in real-time by the WildFire Inline ML models. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#ml_action DataPanosAntivirusSecurityProfile#ml_action}
  */
  readonly mlAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name: string;
  /**
  * Action for signatures generated by the WildFire system. Valid values are: `default` (default), `allow`, `alert`, `drop`, `reset-client`, `reset-server`, or `reset-both`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#wildfire_action DataPanosAntivirusSecurityProfile#wildfire_action}
  */
  readonly wildfireAction?: string;
}

export function dataPanosAntivirusSecurityProfileDecodersToTerraform(struct?: DataPanosAntivirusSecurityProfileDecoders | cdktf.IResolvable): any {
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


export function dataPanosAntivirusSecurityProfileDecodersToHclTerraform(struct?: DataPanosAntivirusSecurityProfileDecoders | cdktf.IResolvable): any {
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

export class DataPanosAntivirusSecurityProfileDecodersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntivirusSecurityProfileDecoders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileDecoders | cdktf.IResolvable | undefined) {
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

export class DataPanosAntivirusSecurityProfileDecodersList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntivirusSecurityProfileDecoders[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntivirusSecurityProfileDecodersOutputReference {
    return new DataPanosAntivirusSecurityProfileDecodersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntivirusSecurityProfileLocationDeviceGroup {
  /**
  * Device Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * Panorama device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#panorama_device DataPanosAntivirusSecurityProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosAntivirusSecurityProfileLocationDeviceGroupToTerraform(struct?: DataPanosAntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosAntivirusSecurityProfileLocationDeviceGroupToHclTerraform(struct?: DataPanosAntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable): any {
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

export class DataPanosAntivirusSecurityProfileLocationDeviceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileLocationDeviceGroup | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntivirusSecurityProfileLocationShared {
}

export function dataPanosAntivirusSecurityProfileLocationSharedToTerraform(struct?: DataPanosAntivirusSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosAntivirusSecurityProfileLocationSharedToHclTerraform(struct?: DataPanosAntivirusSecurityProfileLocationShared | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosAntivirusSecurityProfileLocationSharedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntivirusSecurityProfileLocationShared | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosAntivirusSecurityProfileLocationShared | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntivirusSecurityProfileLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#ngfw_device DataPanosAntivirusSecurityProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosAntivirusSecurityProfileLocationVsysToTerraform(struct?: DataPanosAntivirusSecurityProfileLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosAntivirusSecurityProfileLocationVsysToHclTerraform(struct?: DataPanosAntivirusSecurityProfileLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosAntivirusSecurityProfileLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntivirusSecurityProfileLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosAntivirusSecurityProfileLocation {
  /**
  * Located in a specific Device Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#device_group DataPanosAntivirusSecurityProfile#device_group}
  */
  readonly deviceGroup?: DataPanosAntivirusSecurityProfileLocationDeviceGroup;
  /**
  * Panorama shared object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#shared DataPanosAntivirusSecurityProfile#shared}
  */
  readonly shared?: DataPanosAntivirusSecurityProfileLocationShared;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#vsys DataPanosAntivirusSecurityProfile#vsys}
  */
  readonly vsys?: DataPanosAntivirusSecurityProfileLocationVsys;
}

export function dataPanosAntivirusSecurityProfileLocationToTerraform(struct?: DataPanosAntivirusSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_group: dataPanosAntivirusSecurityProfileLocationDeviceGroupToTerraform(struct!.deviceGroup),
    shared: dataPanosAntivirusSecurityProfileLocationSharedToTerraform(struct!.shared),
    vsys: dataPanosAntivirusSecurityProfileLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosAntivirusSecurityProfileLocationToHclTerraform(struct?: DataPanosAntivirusSecurityProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_group: {
      value: dataPanosAntivirusSecurityProfileLocationDeviceGroupToHclTerraform(struct!.deviceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntivirusSecurityProfileLocationDeviceGroup",
    },
    shared: {
      value: dataPanosAntivirusSecurityProfileLocationSharedToHclTerraform(struct!.shared),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntivirusSecurityProfileLocationShared",
    },
    vsys: {
      value: dataPanosAntivirusSecurityProfileLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosAntivirusSecurityProfileLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosAntivirusSecurityProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosAntivirusSecurityProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileLocation | cdktf.IResolvable | undefined) {
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
  private _deviceGroup = new DataPanosAntivirusSecurityProfileLocationDeviceGroupOutputReference(this, "device_group");
  public get deviceGroup() {
    return this._deviceGroup;
  }
  public putDeviceGroup(value: DataPanosAntivirusSecurityProfileLocationDeviceGroup) {
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
  private _shared = new DataPanosAntivirusSecurityProfileLocationSharedOutputReference(this, "shared");
  public get shared() {
    return this._shared;
  }
  public putShared(value: DataPanosAntivirusSecurityProfileLocationShared) {
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
  private _vsys = new DataPanosAntivirusSecurityProfileLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosAntivirusSecurityProfileLocationVsys) {
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
export interface DataPanosAntivirusSecurityProfileMachineLearningExceptions {
  /**
  * Exception description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#description DataPanosAntivirusSecurityProfile#description}
  */
  readonly description?: string;
  /**
  * File name to exclude from enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#filename DataPanosAntivirusSecurityProfile#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntivirusSecurityProfileMachineLearningExceptionsToTerraform(struct?: DataPanosAntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable): any {
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


export function dataPanosAntivirusSecurityProfileMachineLearningExceptionsToHclTerraform(struct?: DataPanosAntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable): any {
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

export class DataPanosAntivirusSecurityProfileMachineLearningExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileMachineLearningExceptions | cdktf.IResolvable | undefined) {
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

  // filename - computed: true, optional: true, required: false
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

export class DataPanosAntivirusSecurityProfileMachineLearningExceptionsList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntivirusSecurityProfileMachineLearningExceptions[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntivirusSecurityProfileMachineLearningExceptionsOutputReference {
    return new DataPanosAntivirusSecurityProfileMachineLearningExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntivirusSecurityProfileMachineLearningModels {
  /**
  * Action for ML model antivirus signatures. Valid values are: `enable`, `enable(alert-only)`, or `disable`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#action DataPanosAntivirusSecurityProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntivirusSecurityProfileMachineLearningModelsToTerraform(struct?: DataPanosAntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosAntivirusSecurityProfileMachineLearningModelsToHclTerraform(struct?: DataPanosAntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable): any {
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

export class DataPanosAntivirusSecurityProfileMachineLearningModelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileMachineLearningModels | cdktf.IResolvable | undefined) {
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

export class DataPanosAntivirusSecurityProfileMachineLearningModelsList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntivirusSecurityProfileMachineLearningModels[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntivirusSecurityProfileMachineLearningModelsOutputReference {
    return new DataPanosAntivirusSecurityProfileMachineLearningModelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosAntivirusSecurityProfileThreatExceptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#name DataPanosAntivirusSecurityProfile#name}
  */
  readonly name: string;
}

export function dataPanosAntivirusSecurityProfileThreatExceptionsToTerraform(struct?: DataPanosAntivirusSecurityProfileThreatExceptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosAntivirusSecurityProfileThreatExceptionsToHclTerraform(struct?: DataPanosAntivirusSecurityProfileThreatExceptions | cdktf.IResolvable): any {
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

export class DataPanosAntivirusSecurityProfileThreatExceptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosAntivirusSecurityProfileThreatExceptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosAntivirusSecurityProfileThreatExceptions | cdktf.IResolvable | undefined) {
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

export class DataPanosAntivirusSecurityProfileThreatExceptionsList extends cdktf.ComplexList {
  public internalValue? : DataPanosAntivirusSecurityProfileThreatExceptions[] | cdktf.IResolvable

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
  public get(index: number): DataPanosAntivirusSecurityProfileThreatExceptionsOutputReference {
    return new DataPanosAntivirusSecurityProfileThreatExceptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile panos_antivirus_security_profile}
*/
export class DataPanosAntivirusSecurityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_antivirus_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosAntivirusSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosAntivirusSecurityProfile to import
  * @param importFromId The id of the existing DataPanosAntivirusSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosAntivirusSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_antivirus_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/antivirus_security_profile panos_antivirus_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosAntivirusSecurityProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosAntivirusSecurityProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_antivirus_security_profile',
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

  // application_exceptions - computed: true, optional: true, required: false
  private _applicationExceptions = new DataPanosAntivirusSecurityProfileApplicationExceptionsList(this, "application_exceptions", false);
  public get applicationExceptions() {
    return this._applicationExceptions;
  }
  public putApplicationExceptions(value: DataPanosAntivirusSecurityProfileApplicationExceptions[] | cdktf.IResolvable) {
    this._applicationExceptions.internalValue = value;
  }
  public resetApplicationExceptions() {
    this._applicationExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationExceptionsInput() {
    return this._applicationExceptions.internalValue;
  }

  // decoders - computed: true, optional: true, required: false
  private _decoders = new DataPanosAntivirusSecurityProfileDecodersList(this, "decoders", false);
  public get decoders() {
    return this._decoders;
  }
  public putDecoders(value: DataPanosAntivirusSecurityProfileDecoders[] | cdktf.IResolvable) {
    this._decoders.internalValue = value;
  }
  public resetDecoders() {
    this._decoders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodersInput() {
    return this._decoders.internalValue;
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
  private _location = new DataPanosAntivirusSecurityProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosAntivirusSecurityProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // machine_learning_exceptions - computed: true, optional: true, required: false
  private _machineLearningExceptions = new DataPanosAntivirusSecurityProfileMachineLearningExceptionsList(this, "machine_learning_exceptions", false);
  public get machineLearningExceptions() {
    return this._machineLearningExceptions;
  }
  public putMachineLearningExceptions(value: DataPanosAntivirusSecurityProfileMachineLearningExceptions[] | cdktf.IResolvable) {
    this._machineLearningExceptions.internalValue = value;
  }
  public resetMachineLearningExceptions() {
    this._machineLearningExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningExceptionsInput() {
    return this._machineLearningExceptions.internalValue;
  }

  // machine_learning_models - computed: true, optional: true, required: false
  private _machineLearningModels = new DataPanosAntivirusSecurityProfileMachineLearningModelsList(this, "machine_learning_models", false);
  public get machineLearningModels() {
    return this._machineLearningModels;
  }
  public putMachineLearningModels(value: DataPanosAntivirusSecurityProfileMachineLearningModels[] | cdktf.IResolvable) {
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

  // packet_capture - computed: true, optional: true, required: false
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

  // threat_exceptions - computed: true, optional: true, required: false
  private _threatExceptions = new DataPanosAntivirusSecurityProfileThreatExceptionsList(this, "threat_exceptions", false);
  public get threatExceptions() {
    return this._threatExceptions;
  }
  public putThreatExceptions(value: DataPanosAntivirusSecurityProfileThreatExceptions[] | cdktf.IResolvable) {
    this._threatExceptions.internalValue = value;
  }
  public resetThreatExceptions() {
    this._threatExceptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExceptionsInput() {
    return this._threatExceptions.internalValue;
  }

  // wfrt_hold_mode - computed: true, optional: true, required: false
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
      application_exceptions: cdktf.listMapper(dataPanosAntivirusSecurityProfileApplicationExceptionsToTerraform, false)(this._applicationExceptions.internalValue),
      decoders: cdktf.listMapper(dataPanosAntivirusSecurityProfileDecodersToTerraform, false)(this._decoders.internalValue),
      description: cdktf.stringToTerraform(this._description),
      disable_override: cdktf.stringToTerraform(this._disableOverride),
      location: dataPanosAntivirusSecurityProfileLocationToTerraform(this._location.internalValue),
      machine_learning_exceptions: cdktf.listMapper(dataPanosAntivirusSecurityProfileMachineLearningExceptionsToTerraform, false)(this._machineLearningExceptions.internalValue),
      machine_learning_models: cdktf.listMapper(dataPanosAntivirusSecurityProfileMachineLearningModelsToTerraform, false)(this._machineLearningModels.internalValue),
      name: cdktf.stringToTerraform(this._name),
      packet_capture: cdktf.booleanToTerraform(this._packetCapture),
      threat_exceptions: cdktf.listMapper(dataPanosAntivirusSecurityProfileThreatExceptionsToTerraform, false)(this._threatExceptions.internalValue),
      wfrt_hold_mode: cdktf.booleanToTerraform(this._wfrtHoldMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_exceptions: {
        value: cdktf.listMapperHcl(dataPanosAntivirusSecurityProfileApplicationExceptionsToHclTerraform, false)(this._applicationExceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntivirusSecurityProfileApplicationExceptionsList",
      },
      decoders: {
        value: cdktf.listMapperHcl(dataPanosAntivirusSecurityProfileDecodersToHclTerraform, false)(this._decoders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntivirusSecurityProfileDecodersList",
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
        value: dataPanosAntivirusSecurityProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosAntivirusSecurityProfileLocation",
      },
      machine_learning_exceptions: {
        value: cdktf.listMapperHcl(dataPanosAntivirusSecurityProfileMachineLearningExceptionsToHclTerraform, false)(this._machineLearningExceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntivirusSecurityProfileMachineLearningExceptionsList",
      },
      machine_learning_models: {
        value: cdktf.listMapperHcl(dataPanosAntivirusSecurityProfileMachineLearningModelsToHclTerraform, false)(this._machineLearningModels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntivirusSecurityProfileMachineLearningModelsList",
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
        value: cdktf.listMapperHcl(dataPanosAntivirusSecurityProfileThreatExceptionsToHclTerraform, false)(this._threatExceptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosAntivirusSecurityProfileThreatExceptionsList",
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
