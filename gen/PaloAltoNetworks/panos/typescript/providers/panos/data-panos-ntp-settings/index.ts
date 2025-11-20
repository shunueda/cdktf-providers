// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosNtpSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#location DataPanosNtpSettings#location}
  */
  readonly location: DataPanosNtpSettingsLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#ntp_servers DataPanosNtpSettings#ntp_servers}
  */
  readonly ntpServers?: DataPanosNtpSettingsNtpServers;
}
export interface DataPanosNtpSettingsLocationSystem {
  /**
  * Device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#device DataPanosNtpSettings#device}
  */
  readonly device?: string;
}

export function dataPanosNtpSettingsLocationSystemToTerraform(struct?: DataPanosNtpSettingsLocationSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
  }
}


export function dataPanosNtpSettingsLocationSystemToHclTerraform(struct?: DataPanosNtpSettingsLocationSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsLocationSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsLocationSystem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsLocationSystem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }
}
export interface DataPanosNtpSettingsLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#name DataPanosNtpSettings#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#ngfw_device DataPanosNtpSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#panorama_device DataPanosNtpSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosNtpSettingsLocationTemplateToTerraform(struct?: DataPanosNtpSettingsLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosNtpSettingsLocationTemplateToHclTerraform(struct?: DataPanosNtpSettingsLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosNtpSettingsLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsLocationTemplate | cdktf.IResolvable | undefined {
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
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsLocationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
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
      this._ngfwDevice = value.ngfwDevice;
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
export interface DataPanosNtpSettingsLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#name DataPanosNtpSettings#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#ngfw_device DataPanosNtpSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#panorama_device DataPanosNtpSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosNtpSettingsLocationTemplateStackToTerraform(struct?: DataPanosNtpSettingsLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosNtpSettingsLocationTemplateStackToHclTerraform(struct?: DataPanosNtpSettingsLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosNtpSettingsLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsLocationTemplateStack | cdktf.IResolvable | undefined {
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
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsLocationTemplateStack | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._ngfwDevice = undefined;
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
      this._ngfwDevice = value.ngfwDevice;
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
export interface DataPanosNtpSettingsLocation {
  /**
  * System-level configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#system DataPanosNtpSettings#system}
  */
  readonly systemAttribute?: DataPanosNtpSettingsLocationSystem;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#template DataPanosNtpSettings#template}
  */
  readonly template?: DataPanosNtpSettingsLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#template_stack DataPanosNtpSettings#template_stack}
  */
  readonly templateStack?: DataPanosNtpSettingsLocationTemplateStack;
}

export function dataPanosNtpSettingsLocationToTerraform(struct?: DataPanosNtpSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system: dataPanosNtpSettingsLocationSystemToTerraform(struct!.systemAttribute),
    template: dataPanosNtpSettingsLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosNtpSettingsLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosNtpSettingsLocationToHclTerraform(struct?: DataPanosNtpSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system: {
      value: dataPanosNtpSettingsLocationSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsLocationSystem",
    },
    template: {
      value: dataPanosNtpSettingsLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsLocationTemplate",
    },
    template_stack: {
      value: dataPanosNtpSettingsLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._system?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._system.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._system.internalValue = value.systemAttribute;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // system - computed: false, optional: true, required: false
  private _system = new DataPanosNtpSettingsLocationSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: DataPanosNtpSettingsLocationSystem) {
    this._system.internalValue = value;
  }
  public resetSystemAttribute() {
    this._system.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosNtpSettingsLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosNtpSettingsLocationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // template_stack - computed: false, optional: true, required: false
  private _templateStack = new DataPanosNtpSettingsLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosNtpSettingsLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }
}
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey {
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined) {
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
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone {
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined) {
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
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
  /**
  * Symmetric Key MD5 String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#authentication_key DataPanosNtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: true, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
  /**
  * Symmetric Key SHA1 Hexadecimal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#authentication_key DataPanosNtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: true, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#md5 DataPanosNtpSettings#md5}
  */
  readonly md5?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#sha1 DataPanosNtpSettings#sha1}
  */
  readonly sha1?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1;
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct!.md5),
    sha1: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct!.sha1),
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5",
    },
    sha1: {
      value: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._sha1.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._sha1.internalValue = value.sha1;
    }
  }

  // md5 - computed: true, optional: true, required: false
  private _md5 = new DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: true, optional: true, required: false
  private _sha1 = new DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }
}
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#algorithm DataPanosNtpSettings#algorithm}
  */
  readonly algorithm?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm;
  /**
  * Symmetric Key Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#key_id DataPanosNtpSettings#key_id}
  */
  readonly keyId?: number;
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct!.algorithm),
    key_id: cdktf.numberToTerraform(struct!.keyId),
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm?.internalValue;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = value.algorithm;
      this._keyId = value.keyId;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm = new DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#autokey DataPanosNtpSettings#autokey}
  */
  readonly autokey?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#none DataPanosNtpSettings#none}
  */
  readonly none?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#symmetric_key DataPanosNtpSettings#symmetric_key}
  */
  readonly symmetricKey?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey;
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autokey: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct!.autokey),
    none: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct!.none),
    symmetric_key: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct!.symmetricKey),
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autokey: {
      value: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct!.autokey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey",
    },
    none: {
      value: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone",
    },
    symmetric_key: {
      value: dataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct!.symmetricKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autokey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autokey = this._autokey?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._symmetricKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKey = this._symmetricKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autokey.internalValue = undefined;
      this._none.internalValue = undefined;
      this._symmetricKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autokey.internalValue = value.autokey;
      this._none.internalValue = value.none;
      this._symmetricKey.internalValue = value.symmetricKey;
    }
  }

  // autokey - computed: true, optional: true, required: false
  private _autokey = new DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }
  public putAutokey(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey) {
    this._autokey.internalValue = value;
  }
  public resetAutokey() {
    this._autokey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // symmetric_key - computed: true, optional: true, required: false
  private _symmetricKey = new DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
  public putSymmetricKey(value: DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey) {
    this._symmetricKey.internalValue = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey.internalValue;
  }
}
export interface DataPanosNtpSettingsNtpServersPrimaryNtpServer {
  /**
  * NTP Server IP Address or Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#ntp_server_address DataPanosNtpSettings#ntp_server_address}
  */
  readonly ntpServerAddress?: string;
}

export function dataPanosNtpSettingsNtpServersPrimaryNtpServerToTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp_server_address: cdktf.stringToTerraform(struct!.ntpServerAddress),
  }
}


export function dataPanosNtpSettingsNtpServersPrimaryNtpServerToHclTerraform(struct?: DataPanosNtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp_server_address: {
      value: cdktf.stringToHclTerraform(struct!.ntpServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersPrimaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntpServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServerAddress = this._ntpServerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ntpServerAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ntpServerAddress = value.ntpServerAddress;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  private _authenticationType = new DataPanosNtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }

  // ntp_server_address - computed: true, optional: true, required: false
  private _ntpServerAddress?: string; 
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
  public set ntpServerAddress(value: string) {
    this._ntpServerAddress = value;
  }
  public resetNtpServerAddress() {
    this._ntpServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerAddressInput() {
    return this._ntpServerAddress;
  }
}
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey {
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined) {
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
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone {
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined) {
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
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
  /**
  * Symmetric Key MD5 String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#authentication_key DataPanosNtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: true, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
  /**
  * Symmetric Key SHA1 Hexadecimal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#authentication_key DataPanosNtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationKey = value.authenticationKey;
    }
  }

  // authentication_key - computed: true, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }
}
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#md5 DataPanosNtpSettings#md5}
  */
  readonly md5?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#sha1 DataPanosNtpSettings#sha1}
  */
  readonly sha1?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1;
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct!.md5),
    sha1: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct!.sha1),
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5",
    },
    sha1: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    if (this._sha1?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha1 = this._sha1?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5.internalValue = undefined;
      this._sha1.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5.internalValue = value.md5;
      this._sha1.internalValue = value.sha1;
    }
  }

  // md5 - computed: true, optional: true, required: false
  private _md5 = new DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: true, optional: true, required: false
  private _sha1 = new DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1) {
    this._sha1.internalValue = value;
  }
  public resetSha1() {
    this._sha1.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha1Input() {
    return this._sha1.internalValue;
  }
}
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#algorithm DataPanosNtpSettings#algorithm}
  */
  readonly algorithm?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm;
  /**
  * Symmetric Key Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#key_id DataPanosNtpSettings#key_id}
  */
  readonly keyId?: number;
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct!.algorithm),
    key_id: cdktf.numberToTerraform(struct!.keyId),
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm?.internalValue;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = value.algorithm;
      this._keyId = value.keyId;
    }
  }

  // algorithm - computed: true, optional: true, required: false
  private _algorithm = new DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#autokey DataPanosNtpSettings#autokey}
  */
  readonly autokey?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#none DataPanosNtpSettings#none}
  */
  readonly none?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#symmetric_key DataPanosNtpSettings#symmetric_key}
  */
  readonly symmetricKey?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey;
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autokey: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct!.autokey),
    none: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct!.none),
    symmetric_key: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct!.symmetricKey),
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autokey: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct!.autokey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey",
    },
    none: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone",
    },
    symmetric_key: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct!.symmetricKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autokey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autokey = this._autokey?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    if (this._symmetricKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricKey = this._symmetricKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autokey.internalValue = undefined;
      this._none.internalValue = undefined;
      this._symmetricKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autokey.internalValue = value.autokey;
      this._none.internalValue = value.none;
      this._symmetricKey.internalValue = value.symmetricKey;
    }
  }

  // autokey - computed: true, optional: true, required: false
  private _autokey = new DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }
  public putAutokey(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey) {
    this._autokey.internalValue = value;
  }
  public resetAutokey() {
    this._autokey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey.internalValue;
  }

  // none - computed: true, optional: true, required: false
  private _none = new DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // symmetric_key - computed: true, optional: true, required: false
  private _symmetricKey = new DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
  public putSymmetricKey(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey) {
    this._symmetricKey.internalValue = value;
  }
  public resetSymmetricKey() {
    this._symmetricKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricKeyInput() {
    return this._symmetricKey.internalValue;
  }
}
export interface DataPanosNtpSettingsNtpServersSecondaryNtpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#authentication_type DataPanosNtpSettings#authentication_type}
  */
  readonly authenticationType?: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType;
  /**
  * NTP Server IP Address or Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#ntp_server_address DataPanosNtpSettings#ntp_server_address}
  */
  readonly ntpServerAddress?: string;
}

export function dataPanosNtpSettingsNtpServersSecondaryNtpServerToTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct!.authenticationType),
    ntp_server_address: cdktf.stringToTerraform(struct!.ntpServerAddress),
  }
}


export function dataPanosNtpSettingsNtpServersSecondaryNtpServerToHclTerraform(struct?: DataPanosNtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct!.authenticationType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType",
    },
    ntp_server_address: {
      value: cdktf.stringToHclTerraform(struct!.ntpServerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersSecondaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType?.internalValue;
    }
    if (this._ntpServerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServerAddress = this._ntpServerAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType.internalValue = undefined;
      this._ntpServerAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType.internalValue = value.authenticationType;
      this._ntpServerAddress = value.ntpServerAddress;
    }
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType = new DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }
  public putAuthenticationType(value: DataPanosNtpSettingsNtpServersSecondaryNtpServerAuthenticationType) {
    this._authenticationType.internalValue = value;
  }
  public resetAuthenticationType() {
    this._authenticationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType.internalValue;
  }

  // ntp_server_address - computed: true, optional: true, required: false
  private _ntpServerAddress?: string; 
  public get ntpServerAddress() {
    return this.getStringAttribute('ntp_server_address');
  }
  public set ntpServerAddress(value: string) {
    this._ntpServerAddress = value;
  }
  public resetNtpServerAddress() {
    this._ntpServerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerAddressInput() {
    return this._ntpServerAddress;
  }
}
export interface DataPanosNtpSettingsNtpServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#primary_ntp_server DataPanosNtpSettings#primary_ntp_server}
  */
  readonly primaryNtpServer?: DataPanosNtpSettingsNtpServersPrimaryNtpServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#secondary_ntp_server DataPanosNtpSettings#secondary_ntp_server}
  */
  readonly secondaryNtpServer?: DataPanosNtpSettingsNtpServersSecondaryNtpServer;
}

export function dataPanosNtpSettingsNtpServersToTerraform(struct?: DataPanosNtpSettingsNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_ntp_server: dataPanosNtpSettingsNtpServersPrimaryNtpServerToTerraform(struct!.primaryNtpServer),
    secondary_ntp_server: dataPanosNtpSettingsNtpServersSecondaryNtpServerToTerraform(struct!.secondaryNtpServer),
  }
}


export function dataPanosNtpSettingsNtpServersToHclTerraform(struct?: DataPanosNtpSettingsNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_ntp_server: {
      value: dataPanosNtpSettingsNtpServersPrimaryNtpServerToHclTerraform(struct!.primaryNtpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersPrimaryNtpServer",
    },
    secondary_ntp_server: {
      value: dataPanosNtpSettingsNtpServersSecondaryNtpServerToHclTerraform(struct!.secondaryNtpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosNtpSettingsNtpServersSecondaryNtpServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosNtpSettingsNtpServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosNtpSettingsNtpServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryNtpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNtpServer = this._primaryNtpServer?.internalValue;
    }
    if (this._secondaryNtpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryNtpServer = this._secondaryNtpServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosNtpSettingsNtpServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryNtpServer.internalValue = undefined;
      this._secondaryNtpServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryNtpServer.internalValue = value.primaryNtpServer;
      this._secondaryNtpServer.internalValue = value.secondaryNtpServer;
    }
  }

  // primary_ntp_server - computed: true, optional: true, required: false
  private _primaryNtpServer = new DataPanosNtpSettingsNtpServersPrimaryNtpServerOutputReference(this, "primary_ntp_server");
  public get primaryNtpServer() {
    return this._primaryNtpServer;
  }
  public putPrimaryNtpServer(value: DataPanosNtpSettingsNtpServersPrimaryNtpServer) {
    this._primaryNtpServer.internalValue = value;
  }
  public resetPrimaryNtpServer() {
    this._primaryNtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNtpServerInput() {
    return this._primaryNtpServer.internalValue;
  }

  // secondary_ntp_server - computed: true, optional: true, required: false
  private _secondaryNtpServer = new DataPanosNtpSettingsNtpServersSecondaryNtpServerOutputReference(this, "secondary_ntp_server");
  public get secondaryNtpServer() {
    return this._secondaryNtpServer;
  }
  public putSecondaryNtpServer(value: DataPanosNtpSettingsNtpServersSecondaryNtpServer) {
    this._secondaryNtpServer.internalValue = value;
  }
  public resetSecondaryNtpServer() {
    this._secondaryNtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNtpServerInput() {
    return this._secondaryNtpServer.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings panos_ntp_settings}
*/
export class DataPanosNtpSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ntp_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosNtpSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosNtpSettings to import
  * @param importFromId The id of the existing DataPanosNtpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosNtpSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ntp_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/ntp_settings panos_ntp_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosNtpSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosNtpSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ntp_settings',
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
    this._ntpServers.internalValue = config.ntpServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosNtpSettingsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosNtpSettingsLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // ntp_servers - computed: true, optional: true, required: false
  private _ntpServers = new DataPanosNtpSettingsNtpServersOutputReference(this, "ntp_servers");
  public get ntpServers() {
    return this._ntpServers;
  }
  public putNtpServers(value: DataPanosNtpSettingsNtpServers) {
    this._ntpServers.internalValue = value;
  }
  public resetNtpServers() {
    this._ntpServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: dataPanosNtpSettingsLocationToTerraform(this._location.internalValue),
      ntp_servers: dataPanosNtpSettingsNtpServersToTerraform(this._ntpServers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosNtpSettingsLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosNtpSettingsLocation",
      },
      ntp_servers: {
        value: dataPanosNtpSettingsNtpServersToHclTerraform(this._ntpServers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosNtpSettingsNtpServers",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
