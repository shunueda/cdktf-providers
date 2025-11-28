// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosConfigLogSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#description DataPanosConfigLogSettings#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#email_profiles DataPanosConfigLogSettings#email_profiles}
  */
  readonly emailProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#filter DataPanosConfigLogSettings#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#http_profiles DataPanosConfigLogSettings#http_profiles}
  */
  readonly httpProfiles?: string[];
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#location DataPanosConfigLogSettings#location}
  */
  readonly location: DataPanosConfigLogSettingsLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#name DataPanosConfigLogSettings#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#send_to_panorama DataPanosConfigLogSettings#send_to_panorama}
  */
  readonly sendToPanorama?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#snmp_profiles DataPanosConfigLogSettings#snmp_profiles}
  */
  readonly snmpProfiles?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#syslog_profiles DataPanosConfigLogSettings#syslog_profiles}
  */
  readonly syslogProfiles?: string[];
}
export interface DataPanosConfigLogSettingsLocationPanorama {
}

export function dataPanosConfigLogSettingsLocationPanoramaToTerraform(struct?: DataPanosConfigLogSettingsLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosConfigLogSettingsLocationPanoramaToHclTerraform(struct?: DataPanosConfigLogSettingsLocationPanorama | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosConfigLogSettingsLocationPanoramaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosConfigLogSettingsLocationPanorama | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosConfigLogSettingsLocationPanorama | cdktf.IResolvable | undefined) {
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
export interface DataPanosConfigLogSettingsLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#name DataPanosConfigLogSettings#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#panorama_device DataPanosConfigLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosConfigLogSettingsLocationTemplateToTerraform(struct?: DataPanosConfigLogSettingsLocationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosConfigLogSettingsLocationTemplateToHclTerraform(struct?: DataPanosConfigLogSettingsLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosConfigLogSettingsLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosConfigLogSettingsLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosConfigLogSettingsLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosConfigLogSettingsLocationTemplateStack {
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#name DataPanosConfigLogSettings#name}
  */
  readonly name?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#panorama_device DataPanosConfigLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosConfigLogSettingsLocationTemplateStackToTerraform(struct?: DataPanosConfigLogSettingsLocationTemplateStack | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
  }
}


export function dataPanosConfigLogSettingsLocationTemplateStackToHclTerraform(struct?: DataPanosConfigLogSettingsLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosConfigLogSettingsLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosConfigLogSettingsLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosConfigLogSettingsLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosConfigLogSettingsLocationTemplateStackVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#ngfw_device DataPanosConfigLogSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#panorama_device DataPanosConfigLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * The template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#template_stack DataPanosConfigLogSettings#template_stack}
  */
  readonly templateStack?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#vsys DataPanosConfigLogSettings#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosConfigLogSettingsLocationTemplateStackVsysToTerraform(struct?: DataPanosConfigLogSettingsLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template_stack: cdktf.stringToTerraform(struct!.templateStack),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosConfigLogSettingsLocationTemplateStackVsysToHclTerraform(struct?: DataPanosConfigLogSettingsLocationTemplateStackVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    template_stack: {
      value: cdktf.stringToHclTerraform(struct!.templateStack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosConfigLogSettingsLocationTemplateStackVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosConfigLogSettingsLocationTemplateStackVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._templateStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosConfigLogSettingsLocationTemplateStackVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._templateStack = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._templateStack = value.templateStack;
      this._vsys = value.vsys;
    }
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

  // template_stack - computed: true, optional: true, required: false
  private _templateStack?: string; 
  public get templateStack() {
    return this.getStringAttribute('template_stack');
  }
  public set templateStack(value: string) {
    this._templateStack = value;
  }
  public resetTemplateStack() {
    this._templateStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosConfigLogSettingsLocationTemplateVsys {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#ngfw_device DataPanosConfigLogSettings#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#panorama_device DataPanosConfigLogSettings#panorama_device}
  */
  readonly panoramaDevice?: string;
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#template DataPanosConfigLogSettings#template}
  */
  readonly template?: string;
  /**
  * The vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#vsys DataPanosConfigLogSettings#vsys}
  */
  readonly vsys?: string;
}

export function dataPanosConfigLogSettingsLocationTemplateVsysToTerraform(struct?: DataPanosConfigLogSettingsLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
    panorama_device: cdktf.stringToTerraform(struct!.panoramaDevice),
    template: cdktf.stringToTerraform(struct!.template),
    vsys: cdktf.stringToTerraform(struct!.vsys),
  }
}


export function dataPanosConfigLogSettingsLocationTemplateVsysToHclTerraform(struct?: DataPanosConfigLogSettingsLocationTemplateVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vsys: {
      value: cdktf.stringToHclTerraform(struct!.vsys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosConfigLogSettingsLocationTemplateVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosConfigLogSettingsLocationTemplateVsys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    if (this._panoramaDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.panoramaDevice = this._panoramaDevice;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._vsys !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosConfigLogSettingsLocationTemplateVsys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
      this._panoramaDevice = undefined;
      this._template = undefined;
      this._vsys = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
      this._panoramaDevice = value.panoramaDevice;
      this._template = value.template;
      this._vsys = value.vsys;
    }
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

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // vsys - computed: true, optional: true, required: false
  private _vsys?: string; 
  public get vsys() {
    return this.getStringAttribute('vsys');
  }
  public set vsys(value: string) {
    this._vsys = value;
  }
  public resetVsys() {
    this._vsys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsysInput() {
    return this._vsys;
  }
}
export interface DataPanosConfigLogSettingsLocation {
  /**
  * Located in a panorama.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#panorama DataPanosConfigLogSettings#panorama}
  */
  readonly panorama?: DataPanosConfigLogSettingsLocationPanorama;
  /**
  * A shared resource located within a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#template DataPanosConfigLogSettings#template}
  */
  readonly template?: DataPanosConfigLogSettingsLocationTemplate;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#template_stack DataPanosConfigLogSettings#template_stack}
  */
  readonly templateStack?: DataPanosConfigLogSettingsLocationTemplateStack;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#template_stack_vsys DataPanosConfigLogSettings#template_stack_vsys}
  */
  readonly templateStackVsys?: DataPanosConfigLogSettingsLocationTemplateStackVsys;
  /**
  * Located in a specific template, device and vsys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#template_vsys DataPanosConfigLogSettings#template_vsys}
  */
  readonly templateVsys?: DataPanosConfigLogSettingsLocationTemplateVsys;
}

export function dataPanosConfigLogSettingsLocationToTerraform(struct?: DataPanosConfigLogSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    panorama: dataPanosConfigLogSettingsLocationPanoramaToTerraform(struct!.panorama),
    template: dataPanosConfigLogSettingsLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosConfigLogSettingsLocationTemplateStackToTerraform(struct!.templateStack),
    template_stack_vsys: dataPanosConfigLogSettingsLocationTemplateStackVsysToTerraform(struct!.templateStackVsys),
    template_vsys: dataPanosConfigLogSettingsLocationTemplateVsysToTerraform(struct!.templateVsys),
  }
}


export function dataPanosConfigLogSettingsLocationToHclTerraform(struct?: DataPanosConfigLogSettingsLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    panorama: {
      value: dataPanosConfigLogSettingsLocationPanoramaToHclTerraform(struct!.panorama),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosConfigLogSettingsLocationPanorama",
    },
    template: {
      value: dataPanosConfigLogSettingsLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosConfigLogSettingsLocationTemplate",
    },
    template_stack: {
      value: dataPanosConfigLogSettingsLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosConfigLogSettingsLocationTemplateStack",
    },
    template_stack_vsys: {
      value: dataPanosConfigLogSettingsLocationTemplateStackVsysToHclTerraform(struct!.templateStackVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosConfigLogSettingsLocationTemplateStackVsys",
    },
    template_vsys: {
      value: dataPanosConfigLogSettingsLocationTemplateVsysToHclTerraform(struct!.templateVsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosConfigLogSettingsLocationTemplateVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosConfigLogSettingsLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosConfigLogSettingsLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._panorama?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.panorama = this._panorama?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._templateStackVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStackVsys = this._templateStackVsys?.internalValue;
    }
    if (this._templateVsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVsys = this._templateVsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosConfigLogSettingsLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._panorama.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._templateStackVsys.internalValue = undefined;
      this._templateVsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._panorama.internalValue = value.panorama;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._templateStackVsys.internalValue = value.templateStackVsys;
      this._templateVsys.internalValue = value.templateVsys;
    }
  }

  // panorama - computed: false, optional: true, required: false
  private _panorama = new DataPanosConfigLogSettingsLocationPanoramaOutputReference(this, "panorama");
  public get panorama() {
    return this._panorama;
  }
  public putPanorama(value: DataPanosConfigLogSettingsLocationPanorama) {
    this._panorama.internalValue = value;
  }
  public resetPanorama() {
    this._panorama.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panoramaInput() {
    return this._panorama.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataPanosConfigLogSettingsLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosConfigLogSettingsLocationTemplate) {
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
  private _templateStack = new DataPanosConfigLogSettingsLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosConfigLogSettingsLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // template_stack_vsys - computed: false, optional: true, required: false
  private _templateStackVsys = new DataPanosConfigLogSettingsLocationTemplateStackVsysOutputReference(this, "template_stack_vsys");
  public get templateStackVsys() {
    return this._templateStackVsys;
  }
  public putTemplateStackVsys(value: DataPanosConfigLogSettingsLocationTemplateStackVsys) {
    this._templateStackVsys.internalValue = value;
  }
  public resetTemplateStackVsys() {
    this._templateStackVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackVsysInput() {
    return this._templateStackVsys.internalValue;
  }

  // template_vsys - computed: false, optional: true, required: false
  private _templateVsys = new DataPanosConfigLogSettingsLocationTemplateVsysOutputReference(this, "template_vsys");
  public get templateVsys() {
    return this._templateVsys;
  }
  public putTemplateVsys(value: DataPanosConfigLogSettingsLocationTemplateVsys) {
    this._templateVsys.internalValue = value;
  }
  public resetTemplateVsys() {
    this._templateVsys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVsysInput() {
    return this._templateVsys.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings panos_config_log_settings}
*/
export class DataPanosConfigLogSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_config_log_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosConfigLogSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosConfigLogSettings to import
  * @param importFromId The id of the existing DataPanosConfigLogSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosConfigLogSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_config_log_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/config_log_settings panos_config_log_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosConfigLogSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosConfigLogSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_config_log_settings',
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
    this._emailProfiles = config.emailProfiles;
    this._filter = config.filter;
    this._httpProfiles = config.httpProfiles;
    this._location.internalValue = config.location;
    this._name = config.name;
    this._sendToPanorama = config.sendToPanorama;
    this._snmpProfiles = config.snmpProfiles;
    this._syslogProfiles = config.syslogProfiles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // email_profiles - computed: true, optional: true, required: false
  private _emailProfiles?: string[]; 
  public get emailProfiles() {
    return this.getListAttribute('email_profiles');
  }
  public set emailProfiles(value: string[]) {
    this._emailProfiles = value;
  }
  public resetEmailProfiles() {
    this._emailProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProfilesInput() {
    return this._emailProfiles;
  }

  // filter - computed: true, optional: true, required: false
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

  // http_profiles - computed: true, optional: true, required: false
  private _httpProfiles?: string[]; 
  public get httpProfiles() {
    return this.getListAttribute('http_profiles');
  }
  public set httpProfiles(value: string[]) {
    this._httpProfiles = value;
  }
  public resetHttpProfiles() {
    this._httpProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProfilesInput() {
    return this._httpProfiles;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosConfigLogSettingsLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosConfigLogSettingsLocation) {
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

  // send_to_panorama - computed: true, optional: true, required: false
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

  // snmp_profiles - computed: true, optional: true, required: false
  private _snmpProfiles?: string[]; 
  public get snmpProfiles() {
    return this.getListAttribute('snmp_profiles');
  }
  public set snmpProfiles(value: string[]) {
    this._snmpProfiles = value;
  }
  public resetSnmpProfiles() {
    this._snmpProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpProfilesInput() {
    return this._snmpProfiles;
  }

  // syslog_profiles - computed: true, optional: true, required: false
  private _syslogProfiles?: string[]; 
  public get syslogProfiles() {
    return this.getListAttribute('syslog_profiles');
  }
  public set syslogProfiles(value: string[]) {
    this._syslogProfiles = value;
  }
  public resetSyslogProfiles() {
    this._syslogProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogProfilesInput() {
    return this._syslogProfiles;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      email_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailProfiles),
      filter: cdktf.stringToTerraform(this._filter),
      http_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._httpProfiles),
      location: dataPanosConfigLogSettingsLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      send_to_panorama: cdktf.booleanToTerraform(this._sendToPanorama),
      snmp_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snmpProfiles),
      syslog_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._syslogProfiles),
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
      email_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._httpProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      location: {
        value: dataPanosConfigLogSettingsLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosConfigLogSettingsLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      send_to_panorama: {
        value: cdktf.booleanToHclTerraform(this._sendToPanorama),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snmpProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      syslog_profiles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._syslogProfiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
