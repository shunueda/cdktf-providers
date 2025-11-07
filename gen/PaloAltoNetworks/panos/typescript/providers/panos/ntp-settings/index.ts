// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#location NtpSettings#location}
  */
  readonly location: NtpSettingsLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#ntp_servers NtpSettings#ntp_servers}
  */
  readonly ntpServers?: NtpSettingsNtpServers;
}
export interface NtpSettingsLocationSystem {
  /**
  * Device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#device NtpSettings#device}
  */
  readonly device?: string;
}

export function ntpSettingsLocationSystemToTerraform(struct?: NtpSettingsLocationSystem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
  }
}


export function ntpSettingsLocationSystemToHclTerraform(struct?: NtpSettingsLocationSystem | cdktf.IResolvable): any {
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

export class NtpSettingsLocationSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsLocationSystem | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsLocationSystem | cdktf.IResolvable | undefined) {
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
export interface NtpSettingsLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#name NtpSettings#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#ngfw_device NtpSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#panorama_device NtpSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function ntpSettingsLocationTemplateToTerraform(struct?: NtpSettingsLocationTemplate | cdktf.IResolvable): any {
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


export function ntpSettingsLocationTemplateToHclTerraform(struct?: NtpSettingsLocationTemplate | cdktf.IResolvable): any {
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

export class NtpSettingsLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface NtpSettingsLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#name NtpSettings#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#ngfw_device NtpSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#panorama_device NtpSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function ntpSettingsLocationTemplateStackToTerraform(struct?: NtpSettingsLocationTemplateStack | cdktf.IResolvable): any {
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


export function ntpSettingsLocationTemplateStackToHclTerraform(struct?: NtpSettingsLocationTemplateStack | cdktf.IResolvable): any {
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

export class NtpSettingsLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface NtpSettingsLocation {
  /**
  * System-level configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#system NtpSettings#system}
  */
  readonly systemAttribute?: NtpSettingsLocationSystem;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#template NtpSettings#template}
  */
  readonly template?: NtpSettingsLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#template_stack NtpSettings#template_stack}
  */
  readonly templateStack?: NtpSettingsLocationTemplateStack;
}

export function ntpSettingsLocationToTerraform(struct?: NtpSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system: ntpSettingsLocationSystemToTerraform(struct!.systemAttribute),
    template: ntpSettingsLocationTemplateToTerraform(struct!.template),
    template_stack: ntpSettingsLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function ntpSettingsLocationToHclTerraform(struct?: NtpSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system: {
      value: ntpSettingsLocationSystemToHclTerraform(struct!.systemAttribute),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsLocationSystem",
    },
    template: {
      value: ntpSettingsLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsLocationTemplate",
    },
    template_stack: {
      value: ntpSettingsLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpSettingsLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsLocation | cdktf.IResolvable | undefined) {
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
  private _system = new NtpSettingsLocationSystemOutputReference(this, "system");
  public get systemAttribute() {
    return this._system;
  }
  public putSystemAttribute(value: NtpSettingsLocationSystem) {
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
  private _template = new NtpSettingsLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: NtpSettingsLocationTemplate) {
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
  private _templateStack = new NtpSettingsLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: NtpSettingsLocationTemplateStack) {
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
export interface NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey {
}

export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined) {
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
export interface NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone {
}

export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined) {
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
export interface NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
  /**
  * Symmetric Key MD5 String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#authentication_key NtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
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

export class NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined) {
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

  // authentication_key - computed: false, optional: true, required: false
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
export interface NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
  /**
  * Symmetric Key SHA1 Hexadecimal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#authentication_key NtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
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

export class NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined) {
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

  // authentication_key - computed: false, optional: true, required: false
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
export interface NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#md5 NtpSettings#md5}
  */
  readonly md5?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#sha1 NtpSettings#sha1}
  */
  readonly sha1?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1;
}

export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct!.md5),
    sha1: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct!.sha1),
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5",
    },
    sha1: {
      value: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined) {
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

  // md5 - computed: false, optional: true, required: false
  private _md5 = new NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1) {
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
export interface NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#algorithm NtpSettings#algorithm}
  */
  readonly algorithm?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm;
  /**
  * Symmetric Key Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#key_id NtpSettings#key_id}
  */
  readonly keyId: number;
}

export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct!.algorithm),
    key_id: cdktf.numberToTerraform(struct!.keyId),
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm",
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

export class NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined) {
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

  // algorithm - computed: false, optional: true, required: false
  private _algorithm = new NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface NtpSettingsNtpServersPrimaryNtpServerAuthenticationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#autokey NtpSettings#autokey}
  */
  readonly autokey?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#none NtpSettings#none}
  */
  readonly none?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#symmetric_key NtpSettings#symmetric_key}
  */
  readonly symmetricKey?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey;
}

export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autokey: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToTerraform(struct!.autokey),
    none: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToTerraform(struct!.none),
    symmetric_key: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct!.symmetricKey),
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autokey: {
      value: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct!.autokey),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey",
    },
    none: {
      value: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone",
    },
    symmetric_key: {
      value: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct!.symmetricKey),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationType | cdktf.IResolvable | undefined) {
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

  // autokey - computed: false, optional: true, required: false
  private _autokey = new NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }
  public putAutokey(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeAutokey) {
    this._autokey.internalValue = value;
  }
  public resetAutokey() {
    this._autokey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // symmetric_key - computed: false, optional: true, required: false
  private _symmetricKey = new NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
  public putSymmetricKey(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeSymmetricKey) {
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
export interface NtpSettingsNtpServersPrimaryNtpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#authentication_type NtpSettings#authentication_type}
  */
  readonly authenticationType: NtpSettingsNtpServersPrimaryNtpServerAuthenticationType;
  /**
  * NTP Server IP Address or Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#ntp_server_address NtpSettings#ntp_server_address}
  */
  readonly ntpServerAddress?: string;
}

export function ntpSettingsNtpServersPrimaryNtpServerToTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeToTerraform(struct!.authenticationType),
    ntp_server_address: cdktf.stringToTerraform(struct!.ntpServerAddress),
  }
}


export function ntpSettingsNtpServersPrimaryNtpServerToHclTerraform(struct?: NtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: ntpSettingsNtpServersPrimaryNtpServerAuthenticationTypeToHclTerraform(struct!.authenticationType),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServerAuthenticationType",
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

export class NtpSettingsNtpServersPrimaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersPrimaryNtpServer | cdktf.IResolvable | undefined) {
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

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType = new NtpSettingsNtpServersPrimaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }
  public putAuthenticationType(value: NtpSettingsNtpServersPrimaryNtpServerAuthenticationType) {
    this._authenticationType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType.internalValue;
  }

  // ntp_server_address - computed: false, optional: true, required: false
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
export interface NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey {
}

export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey | cdktf.IResolvable | undefined) {
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
export interface NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone {
}

export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone | cdktf.IResolvable | undefined) {
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
export interface NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 {
  /**
  * Symmetric Key MD5 String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#authentication_key NtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable): any {
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

export class NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5 | cdktf.IResolvable | undefined) {
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

  // authentication_key - computed: false, optional: true, required: false
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
export interface NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 {
  /**
  * Symmetric Key SHA1 Hexadecimal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#authentication_key NtpSettings#authentication_key}
  */
  readonly authenticationKey?: string;
}

export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable): any {
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

export class NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1 | cdktf.IResolvable | undefined) {
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

  // authentication_key - computed: false, optional: true, required: false
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
export interface NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#md5 NtpSettings#md5}
  */
  readonly md5?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#sha1 NtpSettings#sha1}
  */
  readonly sha1?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1;
}

export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToTerraform(struct!.md5),
    sha1: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToTerraform(struct!.sha1),
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5: {
      value: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5ToHclTerraform(struct!.md5),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5",
    },
    sha1: {
      value: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1ToHclTerraform(struct!.sha1),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm | cdktf.IResolvable | undefined) {
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

  // md5 - computed: false, optional: true, required: false
  private _md5 = new NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5OutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmMd5) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }

  // sha1 - computed: false, optional: true, required: false
  private _sha1 = new NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1OutputReference(this, "sha1");
  public get sha1() {
    return this._sha1;
  }
  public putSha1(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmSha1) {
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
export interface NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#algorithm NtpSettings#algorithm}
  */
  readonly algorithm?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm;
  /**
  * Symmetric Key Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#key_id NtpSettings#key_id}
  */
  readonly keyId: number;
}

export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToTerraform(struct!.algorithm),
    key_id: cdktf.numberToTerraform(struct!.keyId),
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm",
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

export class NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey | cdktf.IResolvable | undefined) {
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

  // algorithm - computed: false, optional: true, required: false
  private _algorithm = new NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface NtpSettingsNtpServersSecondaryNtpServerAuthenticationType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#autokey NtpSettings#autokey}
  */
  readonly autokey?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#none NtpSettings#none}
  */
  readonly none?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#symmetric_key NtpSettings#symmetric_key}
  */
  readonly symmetricKey?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey;
}

export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autokey: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToTerraform(struct!.autokey),
    none: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToTerraform(struct!.none),
    symmetric_key: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToTerraform(struct!.symmetricKey),
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autokey: {
      value: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyToHclTerraform(struct!.autokey),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey",
    },
    none: {
      value: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone",
    },
    symmetric_key: {
      value: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyToHclTerraform(struct!.symmetricKey),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationType | cdktf.IResolvable | undefined) {
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

  // autokey - computed: false, optional: true, required: false
  private _autokey = new NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokeyOutputReference(this, "autokey");
  public get autokey() {
    return this._autokey;
  }
  public putAutokey(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeAutokey) {
    this._autokey.internalValue = value;
  }
  public resetAutokey() {
    this._autokey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }

  // symmetric_key - computed: false, optional: true, required: false
  private _symmetricKey = new NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKeyOutputReference(this, "symmetric_key");
  public get symmetricKey() {
    return this._symmetricKey;
  }
  public putSymmetricKey(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeSymmetricKey) {
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
export interface NtpSettingsNtpServersSecondaryNtpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#authentication_type NtpSettings#authentication_type}
  */
  readonly authenticationType?: NtpSettingsNtpServersSecondaryNtpServerAuthenticationType;
  /**
  * NTP Server IP Address or Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#ntp_server_address NtpSettings#ntp_server_address}
  */
  readonly ntpServerAddress?: string;
}

export function ntpSettingsNtpServersSecondaryNtpServerToTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToTerraform(struct!.authenticationType),
    ntp_server_address: cdktf.stringToTerraform(struct!.ntpServerAddress),
  }
}


export function ntpSettingsNtpServersSecondaryNtpServerToHclTerraform(struct?: NtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: ntpSettingsNtpServersSecondaryNtpServerAuthenticationTypeToHclTerraform(struct!.authenticationType),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServerAuthenticationType",
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

export class NtpSettingsNtpServersSecondaryNtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServersSecondaryNtpServer | cdktf.IResolvable | undefined) {
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

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType = new NtpSettingsNtpServersSecondaryNtpServerAuthenticationTypeOutputReference(this, "authentication_type");
  public get authenticationType() {
    return this._authenticationType;
  }
  public putAuthenticationType(value: NtpSettingsNtpServersSecondaryNtpServerAuthenticationType) {
    this._authenticationType.internalValue = value;
  }
  public resetAuthenticationType() {
    this._authenticationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType.internalValue;
  }

  // ntp_server_address - computed: false, optional: true, required: false
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
export interface NtpSettingsNtpServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#primary_ntp_server NtpSettings#primary_ntp_server}
  */
  readonly primaryNtpServer?: NtpSettingsNtpServersPrimaryNtpServer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#secondary_ntp_server NtpSettings#secondary_ntp_server}
  */
  readonly secondaryNtpServer?: NtpSettingsNtpServersSecondaryNtpServer;
}

export function ntpSettingsNtpServersToTerraform(struct?: NtpSettingsNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_ntp_server: ntpSettingsNtpServersPrimaryNtpServerToTerraform(struct!.primaryNtpServer),
    secondary_ntp_server: ntpSettingsNtpServersSecondaryNtpServerToTerraform(struct!.secondaryNtpServer),
  }
}


export function ntpSettingsNtpServersToHclTerraform(struct?: NtpSettingsNtpServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_ntp_server: {
      value: ntpSettingsNtpServersPrimaryNtpServerToHclTerraform(struct!.primaryNtpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersPrimaryNtpServer",
    },
    secondary_ntp_server: {
      value: ntpSettingsNtpServersSecondaryNtpServerToHclTerraform(struct!.secondaryNtpServer),
      isBlock: true,
      type: "struct",
      storageClassType: "NtpSettingsNtpServersSecondaryNtpServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NtpSettingsNtpServersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NtpSettingsNtpServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NtpSettingsNtpServers | cdktf.IResolvable | undefined) {
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

  // primary_ntp_server - computed: false, optional: true, required: false
  private _primaryNtpServer = new NtpSettingsNtpServersPrimaryNtpServerOutputReference(this, "primary_ntp_server");
  public get primaryNtpServer() {
    return this._primaryNtpServer;
  }
  public putPrimaryNtpServer(value: NtpSettingsNtpServersPrimaryNtpServer) {
    this._primaryNtpServer.internalValue = value;
  }
  public resetPrimaryNtpServer() {
    this._primaryNtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNtpServerInput() {
    return this._primaryNtpServer.internalValue;
  }

  // secondary_ntp_server - computed: false, optional: true, required: false
  private _secondaryNtpServer = new NtpSettingsNtpServersSecondaryNtpServerOutputReference(this, "secondary_ntp_server");
  public get secondaryNtpServer() {
    return this._secondaryNtpServer;
  }
  public putSecondaryNtpServer(value: NtpSettingsNtpServersSecondaryNtpServer) {
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
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings panos_ntp_settings}
*/
export class NtpSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_ntp_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NtpSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NtpSettings to import
  * @param importFromId The id of the existing NtpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NtpSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_ntp_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/ntp_settings panos_ntp_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: NtpSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_ntp_settings',
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
    this._ntpServers.internalValue = config.ntpServers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new NtpSettingsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: NtpSettingsLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers = new NtpSettingsNtpServersOutputReference(this, "ntp_servers");
  public get ntpServers() {
    return this._ntpServers;
  }
  public putNtpServers(value: NtpSettingsNtpServers) {
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
      location: ntpSettingsLocationToTerraform(this._location.internalValue),
      ntp_servers: ntpSettingsNtpServersToTerraform(this._ntpServers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: ntpSettingsLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NtpSettingsLocation",
      },
      ntp_servers: {
        value: ntpSettingsNtpServersToHclTerraform(this._ntpServers.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NtpSettingsNtpServers",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
