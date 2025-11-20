// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#location LogicalRouter#location}
  */
  readonly location: LogicalRouterLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#vrf LogicalRouter#vrf}
  */
  readonly vrf?: LogicalRouterVrf[] | cdktf.IResolvable;
}
export interface LogicalRouterLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ngfw_device LogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function logicalRouterLocationNgfwToTerraform(struct?: LogicalRouterLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function logicalRouterLocationNgfwToHclTerraform(struct?: LogicalRouterLocationNgfw | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterLocationNgfw | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfwDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfwDevice = this._ngfwDevice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterLocationNgfw | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfwDevice = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfwDevice = value.ngfwDevice;
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
}
export interface LogicalRouterLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ngfw_device LogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#panorama_device LogicalRouter#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function logicalRouterLocationTemplateToTerraform(struct?: LogicalRouterLocationTemplate | cdktf.IResolvable): any {
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


export function logicalRouterLocationTemplateToHclTerraform(struct?: LogicalRouterLocationTemplate | cdktf.IResolvable): any {
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

export class LogicalRouterLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ngfw_device LogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#panorama_device LogicalRouter#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function logicalRouterLocationTemplateStackToTerraform(struct?: LogicalRouterLocationTemplateStack | cdktf.IResolvable): any {
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


export function logicalRouterLocationTemplateStackToHclTerraform(struct?: LogicalRouterLocationTemplateStack | cdktf.IResolvable): any {
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

export class LogicalRouterLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ngfw_device LogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function logicalRouterLocationVsysToTerraform(struct?: LogicalRouterLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function logicalRouterLocationVsysToHclTerraform(struct?: LogicalRouterLocationVsys | cdktf.IResolvable): any {
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

export class LogicalRouterLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalRouterLocationVsys | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ngfw LogicalRouter#ngfw}
  */
  readonly ngfw?: LogicalRouterLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#template LogicalRouter#template}
  */
  readonly template?: LogicalRouterLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#template_stack LogicalRouter#template_stack}
  */
  readonly templateStack?: LogicalRouterLocationTemplateStack;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#vsys LogicalRouter#vsys}
  */
  readonly vsys?: LogicalRouterLocationVsys;
}

export function logicalRouterLocationToTerraform(struct?: LogicalRouterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: logicalRouterLocationNgfwToTerraform(struct!.ngfw),
    template: logicalRouterLocationTemplateToTerraform(struct!.template),
    template_stack: logicalRouterLocationTemplateStackToTerraform(struct!.templateStack),
    vsys: logicalRouterLocationVsysToTerraform(struct!.vsys),
  }
}


export function logicalRouterLocationToHclTerraform(struct?: LogicalRouterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: logicalRouterLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterLocationNgfw",
    },
    template: {
      value: logicalRouterLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterLocationTemplate",
    },
    template_stack: {
      value: logicalRouterLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterLocationTemplateStack",
    },
    vsys: {
      value: logicalRouterLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ngfw?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ngfw = this._ngfw?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._templateStack?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateStack = this._templateStack?.internalValue;
    }
    if (this._vsys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsys = this._vsys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
      this._template.internalValue = undefined;
      this._templateStack.internalValue = undefined;
      this._vsys.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
      this._vsys.internalValue = value.vsys;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new LogicalRouterLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: LogicalRouterLocationNgfw) {
    this._ngfw.internalValue = value;
  }
  public resetNgfw() {
    this._ngfw.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ngfwInput() {
    return this._ngfw.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new LogicalRouterLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: LogicalRouterLocationTemplate) {
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
  private _templateStack = new LogicalRouterLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: LogicalRouterLocationTemplateStack) {
    this._templateStack.internalValue = value;
  }
  public resetTemplateStack() {
    this._templateStack.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateStackInput() {
    return this._templateStack.internalValue;
  }

  // vsys - computed: false, optional: true, required: false
  private _vsys = new LogicalRouterLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: LogicalRouterLocationVsys) {
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
export interface LogicalRouterVrfAdministrativeDistances {
  /**
  * Set BGP AS External Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bgp_external LogicalRouter#bgp_external}
  */
  readonly bgpExternal?: number;
  /**
  * Set BGP AS Internal Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bgp_internal LogicalRouter#bgp_internal}
  */
  readonly bgpInternal?: number;
  /**
  * Set BGP Local Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bgp_local LogicalRouter#bgp_local}
  */
  readonly bgpLocal?: number;
  /**
  * Set OSPF External Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospf_ext LogicalRouter#ospf_ext}
  */
  readonly ospfExt?: number;
  /**
  * Set OSPF Inter Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospf_inter LogicalRouter#ospf_inter}
  */
  readonly ospfInter?: number;
  /**
  * Set OSPF Intra Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospf_intra LogicalRouter#ospf_intra}
  */
  readonly ospfIntra?: number;
  /**
  * Set OSPFv3 External Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospfv3_ext LogicalRouter#ospfv3_ext}
  */
  readonly ospfv3Ext?: number;
  /**
  * Set OSPFv3 Inter Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospfv3_inter LogicalRouter#ospfv3_inter}
  */
  readonly ospfv3Inter?: number;
  /**
  * Set OSPFv3 Intra Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospfv3_intra LogicalRouter#ospfv3_intra}
  */
  readonly ospfv3Intra?: number;
  /**
  * Set RIP Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#rip LogicalRouter#rip}
  */
  readonly rip?: number;
  /**
  * Set IPv4 Static Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static LogicalRouter#static}
  */
  readonly static?: number;
  /**
  * Set IPv6 Static Routes  Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static_ipv6 LogicalRouter#static_ipv6}
  */
  readonly staticIpv6?: number;
}

export function logicalRouterVrfAdministrativeDistancesToTerraform(struct?: LogicalRouterVrfAdministrativeDistances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_external: cdktf.numberToTerraform(struct!.bgpExternal),
    bgp_internal: cdktf.numberToTerraform(struct!.bgpInternal),
    bgp_local: cdktf.numberToTerraform(struct!.bgpLocal),
    ospf_ext: cdktf.numberToTerraform(struct!.ospfExt),
    ospf_inter: cdktf.numberToTerraform(struct!.ospfInter),
    ospf_intra: cdktf.numberToTerraform(struct!.ospfIntra),
    ospfv3_ext: cdktf.numberToTerraform(struct!.ospfv3Ext),
    ospfv3_inter: cdktf.numberToTerraform(struct!.ospfv3Inter),
    ospfv3_intra: cdktf.numberToTerraform(struct!.ospfv3Intra),
    rip: cdktf.numberToTerraform(struct!.rip),
    static: cdktf.numberToTerraform(struct!.static),
    static_ipv6: cdktf.numberToTerraform(struct!.staticIpv6),
  }
}


export function logicalRouterVrfAdministrativeDistancesToHclTerraform(struct?: LogicalRouterVrfAdministrativeDistances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_external: {
      value: cdktf.numberToHclTerraform(struct!.bgpExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_internal: {
      value: cdktf.numberToHclTerraform(struct!.bgpInternal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_local: {
      value: cdktf.numberToHclTerraform(struct!.bgpLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf_ext: {
      value: cdktf.numberToHclTerraform(struct!.ospfExt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf_inter: {
      value: cdktf.numberToHclTerraform(struct!.ospfInter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf_intra: {
      value: cdktf.numberToHclTerraform(struct!.ospfIntra),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfv3_ext: {
      value: cdktf.numberToHclTerraform(struct!.ospfv3Ext),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfv3_inter: {
      value: cdktf.numberToHclTerraform(struct!.ospfv3Inter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospfv3_intra: {
      value: cdktf.numberToHclTerraform(struct!.ospfv3Intra),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfAdministrativeDistancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfAdministrativeDistances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpExternal = this._bgpExternal;
    }
    if (this._bgpInternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpInternal = this._bgpInternal;
    }
    if (this._bgpLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLocal = this._bgpLocal;
    }
    if (this._ospfExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfExt = this._ospfExt;
    }
    if (this._ospfInter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfInter = this._ospfInter;
    }
    if (this._ospfIntra !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfIntra = this._ospfIntra;
    }
    if (this._ospfv3Ext !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3Ext = this._ospfv3Ext;
    }
    if (this._ospfv3Inter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3Inter = this._ospfv3Inter;
    }
    if (this._ospfv3Intra !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3Intra = this._ospfv3Intra;
    }
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._staticIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6 = this._staticIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfAdministrativeDistances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpExternal = undefined;
      this._bgpInternal = undefined;
      this._bgpLocal = undefined;
      this._ospfExt = undefined;
      this._ospfInter = undefined;
      this._ospfIntra = undefined;
      this._ospfv3Ext = undefined;
      this._ospfv3Inter = undefined;
      this._ospfv3Intra = undefined;
      this._rip = undefined;
      this._static = undefined;
      this._staticIpv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpExternal = value.bgpExternal;
      this._bgpInternal = value.bgpInternal;
      this._bgpLocal = value.bgpLocal;
      this._ospfExt = value.ospfExt;
      this._ospfInter = value.ospfInter;
      this._ospfIntra = value.ospfIntra;
      this._ospfv3Ext = value.ospfv3Ext;
      this._ospfv3Inter = value.ospfv3Inter;
      this._ospfv3Intra = value.ospfv3Intra;
      this._rip = value.rip;
      this._static = value.static;
      this._staticIpv6 = value.staticIpv6;
    }
  }

  // bgp_external - computed: true, optional: true, required: false
  private _bgpExternal?: number; 
  public get bgpExternal() {
    return this.getNumberAttribute('bgp_external');
  }
  public set bgpExternal(value: number) {
    this._bgpExternal = value;
  }
  public resetBgpExternal() {
    this._bgpExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpExternalInput() {
    return this._bgpExternal;
  }

  // bgp_internal - computed: true, optional: true, required: false
  private _bgpInternal?: number; 
  public get bgpInternal() {
    return this.getNumberAttribute('bgp_internal');
  }
  public set bgpInternal(value: number) {
    this._bgpInternal = value;
  }
  public resetBgpInternal() {
    this._bgpInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInternalInput() {
    return this._bgpInternal;
  }

  // bgp_local - computed: true, optional: true, required: false
  private _bgpLocal?: number; 
  public get bgpLocal() {
    return this.getNumberAttribute('bgp_local');
  }
  public set bgpLocal(value: number) {
    this._bgpLocal = value;
  }
  public resetBgpLocal() {
    this._bgpLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLocalInput() {
    return this._bgpLocal;
  }

  // ospf_ext - computed: true, optional: true, required: false
  private _ospfExt?: number; 
  public get ospfExt() {
    return this.getNumberAttribute('ospf_ext');
  }
  public set ospfExt(value: number) {
    this._ospfExt = value;
  }
  public resetOspfExt() {
    this._ospfExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfExtInput() {
    return this._ospfExt;
  }

  // ospf_inter - computed: true, optional: true, required: false
  private _ospfInter?: number; 
  public get ospfInter() {
    return this.getNumberAttribute('ospf_inter');
  }
  public set ospfInter(value: number) {
    this._ospfInter = value;
  }
  public resetOspfInter() {
    this._ospfInter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInterInput() {
    return this._ospfInter;
  }

  // ospf_intra - computed: true, optional: true, required: false
  private _ospfIntra?: number; 
  public get ospfIntra() {
    return this.getNumberAttribute('ospf_intra');
  }
  public set ospfIntra(value: number) {
    this._ospfIntra = value;
  }
  public resetOspfIntra() {
    this._ospfIntra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfIntraInput() {
    return this._ospfIntra;
  }

  // ospfv3_ext - computed: true, optional: true, required: false
  private _ospfv3Ext?: number; 
  public get ospfv3Ext() {
    return this.getNumberAttribute('ospfv3_ext');
  }
  public set ospfv3Ext(value: number) {
    this._ospfv3Ext = value;
  }
  public resetOspfv3Ext() {
    this._ospfv3Ext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3ExtInput() {
    return this._ospfv3Ext;
  }

  // ospfv3_inter - computed: true, optional: true, required: false
  private _ospfv3Inter?: number; 
  public get ospfv3Inter() {
    return this.getNumberAttribute('ospfv3_inter');
  }
  public set ospfv3Inter(value: number) {
    this._ospfv3Inter = value;
  }
  public resetOspfv3Inter() {
    this._ospfv3Inter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3InterInput() {
    return this._ospfv3Inter;
  }

  // ospfv3_intra - computed: true, optional: true, required: false
  private _ospfv3Intra?: number; 
  public get ospfv3Intra() {
    return this.getNumberAttribute('ospfv3_intra');
  }
  public set ospfv3Intra(value: number) {
    this._ospfv3Intra = value;
  }
  public resetOspfv3Intra() {
    this._ospfv3Intra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3IntraInput() {
    return this._ospfv3Intra;
  }

  // rip - computed: true, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
  }

  // static - computed: true, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
  }

  // static_ipv6 - computed: true, optional: true, required: false
  private _staticIpv6?: number; 
  public get staticIpv6() {
    return this.getNumberAttribute('static_ipv6');
  }
  public set staticIpv6(value: number) {
    this._staticIpv6 = value;
  }
  public resetStaticIpv6() {
    this._staticIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6Input() {
    return this._staticIpv6;
  }
}
export interface LogicalRouterVrfBgpAdvertiseNetworkIpv4Network {
  /**
  * Mark network as backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#backdoor LogicalRouter#backdoor}
  */
  readonly backdoor?: boolean | cdktf.IResolvable;
  /**
  * Multicast Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#multicast LogicalRouter#multicast}
  */
  readonly multicast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Unicast Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#unicast LogicalRouter#unicast}
  */
  readonly unicast?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backdoor: cdktf.booleanToTerraform(struct!.backdoor),
    multicast: cdktf.booleanToTerraform(struct!.multicast),
    name: cdktf.stringToTerraform(struct!.name),
    unicast: cdktf.booleanToTerraform(struct!.unicast),
  }
}


export function logicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToHclTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backdoor: {
      value: cdktf.booleanToHclTerraform(struct!.backdoor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multicast: {
      value: cdktf.booleanToHclTerraform(struct!.multicast),
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
    unicast: {
      value: cdktf.booleanToHclTerraform(struct!.unicast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backdoor !== undefined) {
      hasAnyValues = true;
      internalValueResult.backdoor = this._backdoor;
    }
    if (this._multicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backdoor = undefined;
      this._multicast = undefined;
      this._name = undefined;
      this._unicast = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backdoor = value.backdoor;
      this._multicast = value.multicast;
      this._name = value.name;
      this._unicast = value.unicast;
    }
  }

  // backdoor - computed: false, optional: true, required: false
  private _backdoor?: boolean | cdktf.IResolvable; 
  public get backdoor() {
    return this.getBooleanAttribute('backdoor');
  }
  public set backdoor(value: boolean | cdktf.IResolvable) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast?: boolean | cdktf.IResolvable; 
  public get multicast() {
    return this.getBooleanAttribute('multicast');
  }
  public set multicast(value: boolean | cdktf.IResolvable) {
    this._multicast = value;
  }
  public resetMulticast() {
    this._multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast;
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

  // unicast - computed: false, optional: true, required: false
  private _unicast?: boolean | cdktf.IResolvable; 
  public get unicast() {
    return this.getBooleanAttribute('unicast');
  }
  public set unicast(value: boolean | cdktf.IResolvable) {
    this._unicast = value;
  }
  public resetUnicast() {
    this._unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast;
  }
}

export class LogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfBgpAdvertiseNetworkIpv4Network[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference {
    return new LogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfBgpAdvertiseNetworkIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#network LogicalRouter#network}
  */
  readonly network?: LogicalRouterVrfBgpAdvertiseNetworkIpv4Network[] | cdktf.IResolvable;
}

export function logicalRouterVrfBgpAdvertiseNetworkIpv4ToTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.listMapper(logicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToTerraform, false)(struct!.network),
  }
}


export function logicalRouterVrfBgpAdvertiseNetworkIpv4ToHclTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.listMapperHcl(logicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToHclTerraform, false)(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAdvertiseNetworkIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network.internalValue = value.network;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network = new LogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: LogicalRouterVrfBgpAdvertiseNetworkIpv4Network[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface LogicalRouterVrfBgpAdvertiseNetworkIpv6Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Unicast Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#unicast LogicalRouter#unicast}
  */
  readonly unicast?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unicast: cdktf.booleanToTerraform(struct!.unicast),
  }
}


export function logicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToHclTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable): any {
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
    unicast: {
      value: cdktf.booleanToHclTerraform(struct!.unicast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._unicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._unicast = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._unicast = value.unicast;
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

  // unicast - computed: false, optional: true, required: false
  private _unicast?: boolean | cdktf.IResolvable; 
  public get unicast() {
    return this.getBooleanAttribute('unicast');
  }
  public set unicast(value: boolean | cdktf.IResolvable) {
    this._unicast = value;
  }
  public resetUnicast() {
    this._unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast;
  }
}

export class LogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfBgpAdvertiseNetworkIpv6Network[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference {
    return new LogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfBgpAdvertiseNetworkIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#network LogicalRouter#network}
  */
  readonly network?: LogicalRouterVrfBgpAdvertiseNetworkIpv6Network[] | cdktf.IResolvable;
}

export function logicalRouterVrfBgpAdvertiseNetworkIpv6ToTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.listMapper(logicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToTerraform, false)(struct!.network),
  }
}


export function logicalRouterVrfBgpAdvertiseNetworkIpv6ToHclTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.listMapperHcl(logicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToHclTerraform, false)(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAdvertiseNetworkIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network.internalValue = value.network;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network = new LogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: LogicalRouterVrfBgpAdvertiseNetworkIpv6Network[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface LogicalRouterVrfBgpAdvertiseNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: LogicalRouterVrfBgpAdvertiseNetworkIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: LogicalRouterVrfBgpAdvertiseNetworkIpv6;
}

export function logicalRouterVrfBgpAdvertiseNetworkToTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: logicalRouterVrfBgpAdvertiseNetworkIpv4ToTerraform(struct!.ipv4),
    ipv6: logicalRouterVrfBgpAdvertiseNetworkIpv6ToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfBgpAdvertiseNetworkToHclTerraform(struct?: LogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: logicalRouterVrfBgpAdvertiseNetworkIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpAdvertiseNetworkIpv4",
    },
    ipv6: {
      value: logicalRouterVrfBgpAdvertiseNetworkIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpAdvertiseNetworkIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAdvertiseNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new LogicalRouterVrfBgpAdvertiseNetworkIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: LogicalRouterVrfBgpAdvertiseNetworkIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new LogicalRouterVrfBgpAdvertiseNetworkIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: LogicalRouterVrfBgpAdvertiseNetworkIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface LogicalRouterVrfBgpAggregateRoutesTypeIpv4 {
  /**
  * Specify Route-Map to set attributes of aggregate prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#attribute_map LogicalRouter#attribute_map}
  */
  readonly attributeMap?: string;
  /**
  * Aggregating Address Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#summary_prefix LogicalRouter#summary_prefix}
  */
  readonly summaryPrefix?: string;
  /**
  * Specify Route-Map to select routes to be suppressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#suppress_map LogicalRouter#suppress_map}
  */
  readonly suppressMap?: string;
}

export function logicalRouterVrfBgpAggregateRoutesTypeIpv4ToTerraform(struct?: LogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_map: cdktf.stringToTerraform(struct!.attributeMap),
    summary_prefix: cdktf.stringToTerraform(struct!.summaryPrefix),
    suppress_map: cdktf.stringToTerraform(struct!.suppressMap),
  }
}


export function logicalRouterVrfBgpAggregateRoutesTypeIpv4ToHclTerraform(struct?: LogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_map: {
      value: cdktf.stringToHclTerraform(struct!.attributeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_prefix: {
      value: cdktf.stringToHclTerraform(struct!.summaryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_map: {
      value: cdktf.stringToHclTerraform(struct!.suppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAggregateRoutesTypeIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMap = this._attributeMap;
    }
    if (this._summaryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryPrefix = this._summaryPrefix;
    }
    if (this._suppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressMap = this._suppressMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeMap = undefined;
      this._summaryPrefix = undefined;
      this._suppressMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeMap = value.attributeMap;
      this._summaryPrefix = value.summaryPrefix;
      this._suppressMap = value.suppressMap;
    }
  }

  // attribute_map - computed: false, optional: true, required: false
  private _attributeMap?: string; 
  public get attributeMap() {
    return this.getStringAttribute('attribute_map');
  }
  public set attributeMap(value: string) {
    this._attributeMap = value;
  }
  public resetAttributeMap() {
    this._attributeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMapInput() {
    return this._attributeMap;
  }

  // summary_prefix - computed: false, optional: true, required: false
  private _summaryPrefix?: string; 
  public get summaryPrefix() {
    return this.getStringAttribute('summary_prefix');
  }
  public set summaryPrefix(value: string) {
    this._summaryPrefix = value;
  }
  public resetSummaryPrefix() {
    this._summaryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryPrefixInput() {
    return this._summaryPrefix;
  }

  // suppress_map - computed: false, optional: true, required: false
  private _suppressMap?: string; 
  public get suppressMap() {
    return this.getStringAttribute('suppress_map');
  }
  public set suppressMap(value: string) {
    this._suppressMap = value;
  }
  public resetSuppressMap() {
    this._suppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressMapInput() {
    return this._suppressMap;
  }
}
export interface LogicalRouterVrfBgpAggregateRoutesTypeIpv6 {
  /**
  * Specify Route-Map to set attributes of aggregate prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#attribute_map LogicalRouter#attribute_map}
  */
  readonly attributeMap?: string;
  /**
  * Aggregating Address Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#summary_prefix LogicalRouter#summary_prefix}
  */
  readonly summaryPrefix?: string;
  /**
  * Specify Route-Map to select routes to be suppressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#suppress_map LogicalRouter#suppress_map}
  */
  readonly suppressMap?: string;
}

export function logicalRouterVrfBgpAggregateRoutesTypeIpv6ToTerraform(struct?: LogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_map: cdktf.stringToTerraform(struct!.attributeMap),
    summary_prefix: cdktf.stringToTerraform(struct!.summaryPrefix),
    suppress_map: cdktf.stringToTerraform(struct!.suppressMap),
  }
}


export function logicalRouterVrfBgpAggregateRoutesTypeIpv6ToHclTerraform(struct?: LogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_map: {
      value: cdktf.stringToHclTerraform(struct!.attributeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_prefix: {
      value: cdktf.stringToHclTerraform(struct!.summaryPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suppress_map: {
      value: cdktf.stringToHclTerraform(struct!.suppressMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAggregateRoutesTypeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeMap = this._attributeMap;
    }
    if (this._summaryPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryPrefix = this._summaryPrefix;
    }
    if (this._suppressMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressMap = this._suppressMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeMap = undefined;
      this._summaryPrefix = undefined;
      this._suppressMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeMap = value.attributeMap;
      this._summaryPrefix = value.summaryPrefix;
      this._suppressMap = value.suppressMap;
    }
  }

  // attribute_map - computed: false, optional: true, required: false
  private _attributeMap?: string; 
  public get attributeMap() {
    return this.getStringAttribute('attribute_map');
  }
  public set attributeMap(value: string) {
    this._attributeMap = value;
  }
  public resetAttributeMap() {
    this._attributeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMapInput() {
    return this._attributeMap;
  }

  // summary_prefix - computed: false, optional: true, required: false
  private _summaryPrefix?: string; 
  public get summaryPrefix() {
    return this.getStringAttribute('summary_prefix');
  }
  public set summaryPrefix(value: string) {
    this._summaryPrefix = value;
  }
  public resetSummaryPrefix() {
    this._summaryPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryPrefixInput() {
    return this._summaryPrefix;
  }

  // suppress_map - computed: false, optional: true, required: false
  private _suppressMap?: string; 
  public get suppressMap() {
    return this.getStringAttribute('suppress_map');
  }
  public set suppressMap(value: string) {
    this._suppressMap = value;
  }
  public resetSuppressMap() {
    this._suppressMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressMapInput() {
    return this._suppressMap;
  }
}
export interface LogicalRouterVrfBgpAggregateRoutesType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: LogicalRouterVrfBgpAggregateRoutesTypeIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: LogicalRouterVrfBgpAggregateRoutesTypeIpv6;
}

export function logicalRouterVrfBgpAggregateRoutesTypeToTerraform(struct?: LogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: logicalRouterVrfBgpAggregateRoutesTypeIpv4ToTerraform(struct!.ipv4),
    ipv6: logicalRouterVrfBgpAggregateRoutesTypeIpv6ToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfBgpAggregateRoutesTypeToHclTerraform(struct?: LogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: logicalRouterVrfBgpAggregateRoutesTypeIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpAggregateRoutesTypeIpv4",
    },
    ipv6: {
      value: logicalRouterVrfBgpAggregateRoutesTypeIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpAggregateRoutesTypeIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAggregateRoutesTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new LogicalRouterVrfBgpAggregateRoutesTypeIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: LogicalRouterVrfBgpAggregateRoutesTypeIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new LogicalRouterVrfBgpAggregateRoutesTypeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: LogicalRouterVrfBgpAggregateRoutesTypeIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface LogicalRouterVrfBgpAggregateRoutes {
  /**
  * Generate AS set path attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#as_set LogicalRouter#as_set}
  */
  readonly asSet?: boolean | cdktf.IResolvable;
  /**
  * Describe Aggregate Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#description LogicalRouter#description}
  */
  readonly description?: string;
  /**
  * Enable Aggregation for this Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Aggregate Routes only if they have same MED Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#same_med LogicalRouter#same_med}
  */
  readonly sameMed?: boolean | cdktf.IResolvable;
  /**
  * Send only Summary Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#summary_only LogicalRouter#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: LogicalRouterVrfBgpAggregateRoutesType;
}

export function logicalRouterVrfBgpAggregateRoutesToTerraform(struct?: LogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_set: cdktf.booleanToTerraform(struct!.asSet),
    description: cdktf.stringToTerraform(struct!.description),
    enable: cdktf.booleanToTerraform(struct!.enable),
    name: cdktf.stringToTerraform(struct!.name),
    same_med: cdktf.booleanToTerraform(struct!.sameMed),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
    type: logicalRouterVrfBgpAggregateRoutesTypeToTerraform(struct!.type),
  }
}


export function logicalRouterVrfBgpAggregateRoutesToHclTerraform(struct?: LogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_set: {
      value: cdktf.booleanToHclTerraform(struct!.asSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
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
    same_med: {
      value: cdktf.booleanToHclTerraform(struct!.sameMed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    summary_only: {
      value: cdktf.booleanToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: logicalRouterVrfBgpAggregateRoutesTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpAggregateRoutesType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpAggregateRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.asSet = this._asSet;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sameMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameMed = this._sameMed;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asSet = undefined;
      this._description = undefined;
      this._enable = undefined;
      this._name = undefined;
      this._sameMed = undefined;
      this._summaryOnly = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asSet = value.asSet;
      this._description = value.description;
      this._enable = value.enable;
      this._name = value.name;
      this._sameMed = value.sameMed;
      this._summaryOnly = value.summaryOnly;
      this._type.internalValue = value.type;
    }
  }

  // as_set - computed: false, optional: true, required: false
  private _asSet?: boolean | cdktf.IResolvable; 
  public get asSet() {
    return this.getBooleanAttribute('as_set');
  }
  public set asSet(value: boolean | cdktf.IResolvable) {
    this._asSet = value;
  }
  public resetAsSet() {
    this._asSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asSetInput() {
    return this._asSet;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // same_med - computed: false, optional: true, required: false
  private _sameMed?: boolean | cdktf.IResolvable; 
  public get sameMed() {
    return this.getBooleanAttribute('same_med');
  }
  public set sameMed(value: boolean | cdktf.IResolvable) {
    this._sameMed = value;
  }
  public resetSameMed() {
    this._sameMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameMedInput() {
    return this._sameMed;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: boolean | cdktf.IResolvable; 
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }
  public set summaryOnly(value: boolean | cdktf.IResolvable) {
    this._summaryOnly = value;
  }
  public resetSummaryOnly() {
    this._summaryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyInput() {
    return this._summaryOnly;
  }

  // type - computed: false, optional: true, required: false
  private _type = new LogicalRouterVrfBgpAggregateRoutesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: LogicalRouterVrfBgpAggregateRoutesType) {
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

export class LogicalRouterVrfBgpAggregateRoutesList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfBgpAggregateRoutes[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfBgpAggregateRoutesOutputReference {
    return new LogicalRouterVrfBgpAggregateRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfBgpGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfBgpGlobalBfdToTerraform(struct?: LogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfBgpGlobalBfdToHclTerraform(struct?: LogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfBgpGracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * local restart time to advertise to peer Default:120 (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#local_restart_time LogicalRouter#local_restart_time}
  */
  readonly localRestartTime?: number;
  /**
  * maximum of peer restart time accepted Default:120 (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#max_peer_restart_time LogicalRouter#max_peer_restart_time}
  */
  readonly maxPeerRestartTime?: number;
  /**
  * time to remove stale routes after peer restart Default:120 (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#stale_route_time LogicalRouter#stale_route_time}
  */
  readonly staleRouteTime?: number;
}

export function logicalRouterVrfBgpGracefulRestartToTerraform(struct?: LogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    local_restart_time: cdktf.numberToTerraform(struct!.localRestartTime),
    max_peer_restart_time: cdktf.numberToTerraform(struct!.maxPeerRestartTime),
    stale_route_time: cdktf.numberToTerraform(struct!.staleRouteTime),
  }
}


export function logicalRouterVrfBgpGracefulRestartToHclTerraform(struct?: LogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_restart_time: {
      value: cdktf.numberToHclTerraform(struct!.localRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_peer_restart_time: {
      value: cdktf.numberToHclTerraform(struct!.maxPeerRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stale_route_time: {
      value: cdktf.numberToHclTerraform(struct!.staleRouteTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._localRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRestartTime = this._localRestartTime;
    }
    if (this._maxPeerRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPeerRestartTime = this._maxPeerRestartTime;
    }
    if (this._staleRouteTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleRouteTime = this._staleRouteTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._localRestartTime = undefined;
      this._maxPeerRestartTime = undefined;
      this._staleRouteTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._localRestartTime = value.localRestartTime;
      this._maxPeerRestartTime = value.maxPeerRestartTime;
      this._staleRouteTime = value.staleRouteTime;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // local_restart_time - computed: true, optional: true, required: false
  private _localRestartTime?: number; 
  public get localRestartTime() {
    return this.getNumberAttribute('local_restart_time');
  }
  public set localRestartTime(value: number) {
    this._localRestartTime = value;
  }
  public resetLocalRestartTime() {
    this._localRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRestartTimeInput() {
    return this._localRestartTime;
  }

  // max_peer_restart_time - computed: true, optional: true, required: false
  private _maxPeerRestartTime?: number; 
  public get maxPeerRestartTime() {
    return this.getNumberAttribute('max_peer_restart_time');
  }
  public set maxPeerRestartTime(value: number) {
    this._maxPeerRestartTime = value;
  }
  public resetMaxPeerRestartTime() {
    this._maxPeerRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPeerRestartTimeInput() {
    return this._maxPeerRestartTime;
  }

  // stale_route_time - computed: true, optional: true, required: false
  private _staleRouteTime?: number; 
  public get staleRouteTime() {
    return this.getNumberAttribute('stale_route_time');
  }
  public set staleRouteTime(value: number) {
    this._staleRouteTime = value;
  }
  public resetStaleRouteTime() {
    this._staleRouteTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleRouteTimeInput() {
    return this._staleRouteTime;
  }
}
export interface LogicalRouterVrfBgpMed {
  /**
  * always compare MEDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#always_compare_med LogicalRouter#always_compare_med}
  */
  readonly alwaysCompareMed?: boolean | cdktf.IResolvable;
  /**
  * deterministic MEDs comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#deterministic_med_comparison LogicalRouter#deterministic_med_comparison}
  */
  readonly deterministicMedComparison?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfBgpMedToTerraform(struct?: LogicalRouterVrfBgpMed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_compare_med: cdktf.booleanToTerraform(struct!.alwaysCompareMed),
    deterministic_med_comparison: cdktf.booleanToTerraform(struct!.deterministicMedComparison),
  }
}


export function logicalRouterVrfBgpMedToHclTerraform(struct?: LogicalRouterVrfBgpMed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_compare_med: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysCompareMed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deterministic_med_comparison: {
      value: cdktf.booleanToHclTerraform(struct!.deterministicMedComparison),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpMedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpMed | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysCompareMed !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysCompareMed = this._alwaysCompareMed;
    }
    if (this._deterministicMedComparison !== undefined) {
      hasAnyValues = true;
      internalValueResult.deterministicMedComparison = this._deterministicMedComparison;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpMed | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alwaysCompareMed = undefined;
      this._deterministicMedComparison = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alwaysCompareMed = value.alwaysCompareMed;
      this._deterministicMedComparison = value.deterministicMedComparison;
    }
  }

  // always_compare_med - computed: false, optional: true, required: false
  private _alwaysCompareMed?: boolean | cdktf.IResolvable; 
  public get alwaysCompareMed() {
    return this.getBooleanAttribute('always_compare_med');
  }
  public set alwaysCompareMed(value: boolean | cdktf.IResolvable) {
    this._alwaysCompareMed = value;
  }
  public resetAlwaysCompareMed() {
    this._alwaysCompareMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedInput() {
    return this._alwaysCompareMed;
  }

  // deterministic_med_comparison - computed: false, optional: true, required: false
  private _deterministicMedComparison?: boolean | cdktf.IResolvable; 
  public get deterministicMedComparison() {
    return this.getBooleanAttribute('deterministic_med_comparison');
  }
  public set deterministicMedComparison(value: boolean | cdktf.IResolvable) {
    this._deterministicMedComparison = value;
  }
  public resetDeterministicMedComparison() {
    this._deterministicMedComparison = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedComparisonInput() {
    return this._deterministicMedComparison;
  }
}
export interface LogicalRouterVrfBgpPeerGroupAddressFamily {
  /**
  * Enable IPv4 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Enable IPv6 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function logicalRouterVrfBgpPeerGroupAddressFamilyToTerraform(struct?: LogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfBgpPeerGroupAddressFamilyToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface LogicalRouterVrfBgpPeerGroupConnectionOptions {
  /**
  * Authentication Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Dampening Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#dampening LogicalRouter#dampening}
  */
  readonly dampening?: string;
  /**
  * Multi-hop value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#multihop LogicalRouter#multihop}
  */
  readonly multihop?: number;
  /**
  * Timer Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#timers LogicalRouter#timers}
  */
  readonly timers?: string;
}

export function logicalRouterVrfBgpPeerGroupConnectionOptionsToTerraform(struct?: LogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    dampening: cdktf.stringToTerraform(struct!.dampening),
    multihop: cdktf.numberToTerraform(struct!.multihop),
    timers: cdktf.stringToTerraform(struct!.timers),
  }
}


export function logicalRouterVrfBgpPeerGroupConnectionOptionsToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dampening: {
      value: cdktf.stringToHclTerraform(struct!.dampening),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multihop: {
      value: cdktf.numberToHclTerraform(struct!.multihop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timers: {
      value: cdktf.stringToHclTerraform(struct!.timers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._dampening !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampening = this._dampening;
    }
    if (this._multihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihop = this._multihop;
    }
    if (this._timers !== undefined) {
      hasAnyValues = true;
      internalValueResult.timers = this._timers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._dampening = undefined;
      this._multihop = undefined;
      this._timers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._dampening = value.dampening;
      this._multihop = value.multihop;
      this._timers = value.timers;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // dampening - computed: false, optional: true, required: false
  private _dampening?: string; 
  public get dampening() {
    return this.getStringAttribute('dampening');
  }
  public set dampening(value: string) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // multihop - computed: true, optional: true, required: false
  private _multihop?: number; 
  public get multihop() {
    return this.getNumberAttribute('multihop');
  }
  public set multihop(value: number) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
  }

  // timers - computed: false, optional: true, required: false
  private _timers?: string; 
  public get timers() {
    return this.getStringAttribute('timers');
  }
  public set timers(value: string) {
    this._timers = value;
  }
  public resetTimers() {
    this._timers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers;
  }
}
export interface LogicalRouterVrfBgpPeerGroupFilteringProfile {
  /**
  * IPv4 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function logicalRouterVrfBgpPeerGroupFilteringProfileToTerraform(struct?: LogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfBgpPeerGroupFilteringProfileToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface LogicalRouterVrfBgpPeerGroupPeerBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfBgpPeerGroupPeerBfdToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerBfdToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupPeerBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfBgpPeerGroupPeerConnectionOptions {
  /**
  * Authentication Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Dampening Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#dampening LogicalRouter#dampening}
  */
  readonly dampening?: string;
  /**
  * Multi-hop value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#multihop LogicalRouter#multihop}
  */
  readonly multihop?: string;
  /**
  * Timer Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#timers LogicalRouter#timers}
  */
  readonly timers?: string;
}

export function logicalRouterVrfBgpPeerGroupPeerConnectionOptionsToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    dampening: cdktf.stringToTerraform(struct!.dampening),
    multihop: cdktf.stringToTerraform(struct!.multihop),
    timers: cdktf.stringToTerraform(struct!.timers),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerConnectionOptionsToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dampening: {
      value: cdktf.stringToHclTerraform(struct!.dampening),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multihop: {
      value: cdktf.stringToHclTerraform(struct!.multihop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timers: {
      value: cdktf.stringToHclTerraform(struct!.timers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._dampening !== undefined) {
      hasAnyValues = true;
      internalValueResult.dampening = this._dampening;
    }
    if (this._multihop !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihop = this._multihop;
    }
    if (this._timers !== undefined) {
      hasAnyValues = true;
      internalValueResult.timers = this._timers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._dampening = undefined;
      this._multihop = undefined;
      this._timers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._dampening = value.dampening;
      this._multihop = value.multihop;
      this._timers = value.timers;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // dampening - computed: true, optional: true, required: false
  private _dampening?: string; 
  public get dampening() {
    return this.getStringAttribute('dampening');
  }
  public set dampening(value: string) {
    this._dampening = value;
  }
  public resetDampening() {
    this._dampening = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningInput() {
    return this._dampening;
  }

  // multihop - computed: true, optional: true, required: false
  private _multihop?: string; 
  public get multihop() {
    return this.getStringAttribute('multihop');
  }
  public set multihop(value: string) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
  }

  // timers - computed: true, optional: true, required: false
  private _timers?: string; 
  public get timers() {
    return this.getStringAttribute('timers');
  }
  public set timers(value: string) {
    this._timers = value;
  }
  public resetTimers() {
    this._timers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timersInput() {
    return this._timers;
  }
}
export interface LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily {
  /**
  * Enable IPv4 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Enable IPv6 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function logicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile {
  /**
  * IPv4 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function logicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface LogicalRouterVrfBgpPeerGroupPeerInheritNo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#address_family LogicalRouter#address_family}
  */
  readonly addressFamily?: LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#filtering_profile LogicalRouter#filtering_profile}
  */
  readonly filteringProfile?: LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile;
}

export function logicalRouterVrfBgpPeerGroupPeerInheritNoToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: logicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToTerraform(struct!.addressFamily),
    filtering_profile: logicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToTerraform(struct!.filteringProfile),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerInheritNoToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: logicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToHclTerraform(struct!.addressFamily),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily",
    },
    filtering_profile: {
      value: logicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToHclTerraform(struct!.filteringProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupPeerInheritNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily?.internalValue;
    }
    if (this._filteringProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringProfile = this._filteringProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily.internalValue = undefined;
      this._filteringProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily.internalValue = value.addressFamily;
      this._filteringProfile.internalValue = value.filteringProfile;
    }
  }

  // address_family - computed: false, optional: true, required: false
  private _addressFamily = new LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }
  public putAddressFamily(value: LogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily) {
    this._addressFamily.internalValue = value;
  }
  public resetAddressFamily() {
    this._addressFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily.internalValue;
  }

  // filtering_profile - computed: false, optional: true, required: false
  private _filteringProfile = new LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }
  public putFilteringProfile(value: LogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile) {
    this._filteringProfile.internalValue = value;
  }
  public resetFilteringProfile() {
    this._filteringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringProfileInput() {
    return this._filteringProfile.internalValue;
  }
}
export interface LogicalRouterVrfBgpPeerGroupPeerInheritYes {
}

export function logicalRouterVrfBgpPeerGroupPeerInheritYesToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfBgpPeerGroupPeerInheritYesToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfBgpPeerGroupPeerInheritYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfBgpPeerGroupPeerInherit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#no LogicalRouter#no}
  */
  readonly no?: LogicalRouterVrfBgpPeerGroupPeerInheritNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#yes LogicalRouter#yes}
  */
  readonly yes?: LogicalRouterVrfBgpPeerGroupPeerInheritYes;
}

export function logicalRouterVrfBgpPeerGroupPeerInheritToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: logicalRouterVrfBgpPeerGroupPeerInheritNoToTerraform(struct!.no),
    yes: logicalRouterVrfBgpPeerGroupPeerInheritYesToTerraform(struct!.yes),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerInheritToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: logicalRouterVrfBgpPeerGroupPeerInheritNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerInheritNo",
    },
    yes: {
      value: logicalRouterVrfBgpPeerGroupPeerInheritYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerInheritYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupPeerInheritOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._no?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.no = this._no?.internalValue;
    }
    if (this._yes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yes = this._yes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._no.internalValue = undefined;
      this._yes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._no.internalValue = value.no;
      this._yes.internalValue = value.yes;
    }
  }

  // no - computed: false, optional: true, required: false
  private _no = new LogicalRouterVrfBgpPeerGroupPeerInheritNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: LogicalRouterVrfBgpPeerGroupPeerInheritNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: false, optional: true, required: false
  private _yes = new LogicalRouterVrfBgpPeerGroupPeerInheritYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: LogicalRouterVrfBgpPeerGroupPeerInheritYes) {
    this._yes.internalValue = value;
  }
  public resetYes() {
    this._yes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yesInput() {
    return this._yes.internalValue;
  }
}
export interface LogicalRouterVrfBgpPeerGroupPeerLocalAddress {
  /**
  * interface to accept BGP session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip LogicalRouter#ip}
  */
  readonly ip?: string;
}

export function logicalRouterVrfBgpPeerGroupPeerLocalAddressToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerLocalAddressToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class LogicalRouterVrfBgpPeerGroupPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // interface - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfBgpPeerGroupPeerPeerAddress {
  /**
  * Peer FQDN Address Object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#fqdn LogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * peer address configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip LogicalRouter#ip}
  */
  readonly ip?: string;
}

export function logicalRouterVrfBgpPeerGroupPeerPeerAddressToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerPeerAddressToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
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

export class LogicalRouterVrfBgpPeerGroupPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ip = value.ip;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfBgpPeerGroupPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfBgpPeerGroupPeerBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#connection_options LogicalRouter#connection_options}
  */
  readonly connectionOptions?: LogicalRouterVrfBgpPeerGroupPeerConnectionOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable_sender_side_loop_detection LogicalRouter#enable_sender_side_loop_detection}
  */
  readonly enableSenderSideLoopDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inherit LogicalRouter#inherit}
  */
  readonly inherit?: LogicalRouterVrfBgpPeerGroupPeerInherit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#local_address LogicalRouter#local_address}
  */
  readonly localAddress?: LogicalRouterVrfBgpPeerGroupPeerLocalAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * If enabled, open messages are not sent to this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#peer_address LogicalRouter#peer_address}
  */
  readonly peerAddress?: LogicalRouterVrfBgpPeerGroupPeerPeerAddress;
  /**
  * peer AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#peer_as LogicalRouter#peer_as}
  */
  readonly peerAs?: string;
}

export function logicalRouterVrfBgpPeerGroupPeerToTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: logicalRouterVrfBgpPeerGroupPeerBfdToTerraform(struct!.bfd),
    connection_options: logicalRouterVrfBgpPeerGroupPeerConnectionOptionsToTerraform(struct!.connectionOptions),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_sender_side_loop_detection: cdktf.booleanToTerraform(struct!.enableSenderSideLoopDetection),
    inherit: logicalRouterVrfBgpPeerGroupPeerInheritToTerraform(struct!.inherit),
    local_address: logicalRouterVrfBgpPeerGroupPeerLocalAddressToTerraform(struct!.localAddress),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    peer_address: logicalRouterVrfBgpPeerGroupPeerPeerAddressToTerraform(struct!.peerAddress),
    peer_as: cdktf.stringToTerraform(struct!.peerAs),
  }
}


export function logicalRouterVrfBgpPeerGroupPeerToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: logicalRouterVrfBgpPeerGroupPeerBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerBfd",
    },
    connection_options: {
      value: logicalRouterVrfBgpPeerGroupPeerConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerConnectionOptions",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sender_side_loop_detection: {
      value: cdktf.booleanToHclTerraform(struct!.enableSenderSideLoopDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inherit: {
      value: logicalRouterVrfBgpPeerGroupPeerInheritToHclTerraform(struct!.inherit),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerInherit",
    },
    local_address: {
      value: logicalRouterVrfBgpPeerGroupPeerLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerLocalAddress",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_address: {
      value: logicalRouterVrfBgpPeerGroupPeerPeerAddressToHclTerraform(struct!.peerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerPeerAddress",
    },
    peer_as: {
      value: cdktf.stringToHclTerraform(struct!.peerAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enableSenderSideLoopDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSenderSideLoopDetection = this._enableSenderSideLoopDetection;
    }
    if (this._inherit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inherit = this._inherit?.internalValue;
    }
    if (this._localAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._peerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAddress = this._peerAddress?.internalValue;
    }
    if (this._peerAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAs = this._peerAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bfd.internalValue = undefined;
      this._connectionOptions.internalValue = undefined;
      this._enable = undefined;
      this._enableSenderSideLoopDetection = undefined;
      this._inherit.internalValue = undefined;
      this._localAddress.internalValue = undefined;
      this._name = undefined;
      this._passive = undefined;
      this._peerAddress.internalValue = undefined;
      this._peerAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bfd.internalValue = value.bfd;
      this._connectionOptions.internalValue = value.connectionOptions;
      this._enable = value.enable;
      this._enableSenderSideLoopDetection = value.enableSenderSideLoopDetection;
      this._inherit.internalValue = value.inherit;
      this._localAddress.internalValue = value.localAddress;
      this._name = value.name;
      this._passive = value.passive;
      this._peerAddress.internalValue = value.peerAddress;
      this._peerAs = value.peerAs;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfBgpPeerGroupPeerBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfBgpPeerGroupPeerBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new LogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: LogicalRouterVrfBgpPeerGroupPeerConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enable_sender_side_loop_detection - computed: false, optional: true, required: false
  private _enableSenderSideLoopDetection?: boolean | cdktf.IResolvable; 
  public get enableSenderSideLoopDetection() {
    return this.getBooleanAttribute('enable_sender_side_loop_detection');
  }
  public set enableSenderSideLoopDetection(value: boolean | cdktf.IResolvable) {
    this._enableSenderSideLoopDetection = value;
  }
  public resetEnableSenderSideLoopDetection() {
    this._enableSenderSideLoopDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSenderSideLoopDetectionInput() {
    return this._enableSenderSideLoopDetection;
  }

  // inherit - computed: false, optional: true, required: false
  private _inherit = new LogicalRouterVrfBgpPeerGroupPeerInheritOutputReference(this, "inherit");
  public get inherit() {
    return this._inherit;
  }
  public putInherit(value: LogicalRouterVrfBgpPeerGroupPeerInherit) {
    this._inherit.internalValue = value;
  }
  public resetInherit() {
    this._inherit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritInput() {
    return this._inherit.internalValue;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress = new LogicalRouterVrfBgpPeerGroupPeerLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: LogicalRouterVrfBgpPeerGroupPeerLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
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

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // peer_address - computed: false, optional: true, required: false
  private _peerAddress = new LogicalRouterVrfBgpPeerGroupPeerPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: LogicalRouterVrfBgpPeerGroupPeerPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // peer_as - computed: false, optional: true, required: false
  private _peerAs?: string; 
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }
  public set peerAs(value: string) {
    this._peerAs = value;
  }
  public resetPeerAs() {
    this._peerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsInput() {
    return this._peerAs;
  }
}

export class LogicalRouterVrfBgpPeerGroupPeerList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfBgpPeerGroupPeer[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfBgpPeerGroupPeerOutputReference {
    return new LogicalRouterVrfBgpPeerGroupPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfBgpPeerGroupTypeEbgp {
}

export function logicalRouterVrfBgpPeerGroupTypeEbgpToTerraform(struct?: LogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfBgpPeerGroupTypeEbgpToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfBgpPeerGroupTypeEbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfBgpPeerGroupTypeIbgp {
}

export function logicalRouterVrfBgpPeerGroupTypeIbgpToTerraform(struct?: LogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfBgpPeerGroupTypeIbgpToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfBgpPeerGroupTypeIbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfBgpPeerGroupType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ebgp LogicalRouter#ebgp}
  */
  readonly ebgp?: LogicalRouterVrfBgpPeerGroupTypeEbgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ibgp LogicalRouter#ibgp}
  */
  readonly ibgp?: LogicalRouterVrfBgpPeerGroupTypeIbgp;
}

export function logicalRouterVrfBgpPeerGroupTypeToTerraform(struct?: LogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebgp: logicalRouterVrfBgpPeerGroupTypeEbgpToTerraform(struct!.ebgp),
    ibgp: logicalRouterVrfBgpPeerGroupTypeIbgpToTerraform(struct!.ibgp),
  }
}


export function logicalRouterVrfBgpPeerGroupTypeToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebgp: {
      value: logicalRouterVrfBgpPeerGroupTypeEbgpToHclTerraform(struct!.ebgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupTypeEbgp",
    },
    ibgp: {
      value: logicalRouterVrfBgpPeerGroupTypeIbgpToHclTerraform(struct!.ibgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupTypeIbgp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ebgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgp = this._ebgp?.internalValue;
    }
    if (this._ibgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibgp = this._ibgp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ebgp.internalValue = undefined;
      this._ibgp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ebgp.internalValue = value.ebgp;
      this._ibgp.internalValue = value.ibgp;
    }
  }

  // ebgp - computed: false, optional: true, required: false
  private _ebgp = new LogicalRouterVrfBgpPeerGroupTypeEbgpOutputReference(this, "ebgp");
  public get ebgp() {
    return this._ebgp;
  }
  public putEbgp(value: LogicalRouterVrfBgpPeerGroupTypeEbgp) {
    this._ebgp.internalValue = value;
  }
  public resetEbgp() {
    this._ebgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpInput() {
    return this._ebgp.internalValue;
  }

  // ibgp - computed: false, optional: true, required: false
  private _ibgp = new LogicalRouterVrfBgpPeerGroupTypeIbgpOutputReference(this, "ibgp");
  public get ibgp() {
    return this._ibgp;
  }
  public putIbgp(value: LogicalRouterVrfBgpPeerGroupTypeIbgp) {
    this._ibgp.internalValue = value;
  }
  public resetIbgp() {
    this._ibgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpInput() {
    return this._ibgp.internalValue;
  }
}
export interface LogicalRouterVrfBgpPeerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#address_family LogicalRouter#address_family}
  */
  readonly addressFamily?: LogicalRouterVrfBgpPeerGroupAddressFamily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#connection_options LogicalRouter#connection_options}
  */
  readonly connectionOptions?: LogicalRouterVrfBgpPeerGroupConnectionOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#filtering_profile LogicalRouter#filtering_profile}
  */
  readonly filteringProfile?: LogicalRouterVrfBgpPeerGroupFilteringProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#peer LogicalRouter#peer}
  */
  readonly peer?: LogicalRouterVrfBgpPeerGroupPeer[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: LogicalRouterVrfBgpPeerGroupType;
}

export function logicalRouterVrfBgpPeerGroupToTerraform(struct?: LogicalRouterVrfBgpPeerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: logicalRouterVrfBgpPeerGroupAddressFamilyToTerraform(struct!.addressFamily),
    connection_options: logicalRouterVrfBgpPeerGroupConnectionOptionsToTerraform(struct!.connectionOptions),
    enable: cdktf.booleanToTerraform(struct!.enable),
    filtering_profile: logicalRouterVrfBgpPeerGroupFilteringProfileToTerraform(struct!.filteringProfile),
    name: cdktf.stringToTerraform(struct!.name),
    peer: cdktf.listMapper(logicalRouterVrfBgpPeerGroupPeerToTerraform, false)(struct!.peer),
    type: logicalRouterVrfBgpPeerGroupTypeToTerraform(struct!.type),
  }
}


export function logicalRouterVrfBgpPeerGroupToHclTerraform(struct?: LogicalRouterVrfBgpPeerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: logicalRouterVrfBgpPeerGroupAddressFamilyToHclTerraform(struct!.addressFamily),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupAddressFamily",
    },
    connection_options: {
      value: logicalRouterVrfBgpPeerGroupConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupConnectionOptions",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filtering_profile: {
      value: logicalRouterVrfBgpPeerGroupFilteringProfileToHclTerraform(struct!.filteringProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupFilteringProfile",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer: {
      value: cdktf.listMapperHcl(logicalRouterVrfBgpPeerGroupPeerToHclTerraform, false)(struct!.peer),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfBgpPeerGroupPeerList",
    },
    type: {
      value: logicalRouterVrfBgpPeerGroupTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpPeerGroupType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpPeerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfBgpPeerGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily?.internalValue;
    }
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filteringProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filteringProfile = this._filteringProfile?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpPeerGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily.internalValue = undefined;
      this._connectionOptions.internalValue = undefined;
      this._enable = undefined;
      this._filteringProfile.internalValue = undefined;
      this._name = undefined;
      this._peer.internalValue = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily.internalValue = value.addressFamily;
      this._connectionOptions.internalValue = value.connectionOptions;
      this._enable = value.enable;
      this._filteringProfile.internalValue = value.filteringProfile;
      this._name = value.name;
      this._peer.internalValue = value.peer;
      this._type.internalValue = value.type;
    }
  }

  // address_family - computed: false, optional: true, required: false
  private _addressFamily = new LogicalRouterVrfBgpPeerGroupAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }
  public putAddressFamily(value: LogicalRouterVrfBgpPeerGroupAddressFamily) {
    this._addressFamily.internalValue = value;
  }
  public resetAddressFamily() {
    this._addressFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily.internalValue;
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new LogicalRouterVrfBgpPeerGroupConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: LogicalRouterVrfBgpPeerGroupConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // filtering_profile - computed: false, optional: true, required: false
  private _filteringProfile = new LogicalRouterVrfBgpPeerGroupFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }
  public putFilteringProfile(value: LogicalRouterVrfBgpPeerGroupFilteringProfile) {
    this._filteringProfile.internalValue = value;
  }
  public resetFilteringProfile() {
    this._filteringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringProfileInput() {
    return this._filteringProfile.internalValue;
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

  // peer - computed: false, optional: true, required: false
  private _peer = new LogicalRouterVrfBgpPeerGroupPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: LogicalRouterVrfBgpPeerGroupPeer[] | cdktf.IResolvable) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new LogicalRouterVrfBgpPeerGroupTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: LogicalRouterVrfBgpPeerGroupType) {
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

export class LogicalRouterVrfBgpPeerGroupList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfBgpPeerGroup[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfBgpPeerGroupOutputReference {
    return new LogicalRouterVrfBgpPeerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfBgpRedistributionProfileIpv4 {
  /**
  * Redistribution Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#unicast LogicalRouter#unicast}
  */
  readonly unicast?: string;
}

export function logicalRouterVrfBgpRedistributionProfileIpv4ToTerraform(struct?: LogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: cdktf.stringToTerraform(struct!.unicast),
  }
}


export function logicalRouterVrfBgpRedistributionProfileIpv4ToHclTerraform(struct?: LogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: cdktf.stringToHclTerraform(struct!.unicast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpRedistributionProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unicast = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unicast = value.unicast;
    }
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast?: string; 
  public get unicast() {
    return this.getStringAttribute('unicast');
  }
  public set unicast(value: string) {
    this._unicast = value;
  }
  public resetUnicast() {
    this._unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast;
  }
}
export interface LogicalRouterVrfBgpRedistributionProfileIpv6 {
  /**
  * Redistribution Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#unicast LogicalRouter#unicast}
  */
  readonly unicast?: string;
}

export function logicalRouterVrfBgpRedistributionProfileIpv6ToTerraform(struct?: LogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: cdktf.stringToTerraform(struct!.unicast),
  }
}


export function logicalRouterVrfBgpRedistributionProfileIpv6ToHclTerraform(struct?: LogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unicast: {
      value: cdktf.stringToHclTerraform(struct!.unicast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpRedistributionProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unicast = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unicast = value.unicast;
    }
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast?: string; 
  public get unicast() {
    return this.getStringAttribute('unicast');
  }
  public set unicast(value: string) {
    this._unicast = value;
  }
  public resetUnicast() {
    this._unicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast;
  }
}
export interface LogicalRouterVrfBgpRedistributionProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: LogicalRouterVrfBgpRedistributionProfileIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: LogicalRouterVrfBgpRedistributionProfileIpv6;
}

export function logicalRouterVrfBgpRedistributionProfileToTerraform(struct?: LogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: logicalRouterVrfBgpRedistributionProfileIpv4ToTerraform(struct!.ipv4),
    ipv6: logicalRouterVrfBgpRedistributionProfileIpv6ToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfBgpRedistributionProfileToHclTerraform(struct?: LogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: logicalRouterVrfBgpRedistributionProfileIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpRedistributionProfileIpv4",
    },
    ipv6: {
      value: logicalRouterVrfBgpRedistributionProfileIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpRedistributionProfileIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpRedistributionProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new LogicalRouterVrfBgpRedistributionProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: LogicalRouterVrfBgpRedistributionProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new LogicalRouterVrfBgpRedistributionProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: LogicalRouterVrfBgpRedistributionProfileIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface LogicalRouterVrfBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#advertise_network LogicalRouter#advertise_network}
  */
  readonly advertiseNetwork?: LogicalRouterVrfBgpAdvertiseNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#aggregate_routes LogicalRouter#aggregate_routes}
  */
  readonly aggregateRoutes?: LogicalRouterVrfBgpAggregateRoutes[] | cdktf.IResolvable;
  /**
  * Always advertise network routes even if not present in RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#always_advertise_network_route LogicalRouter#always_advertise_network_route}
  */
  readonly alwaysAdvertiseNetworkRoute?: boolean | cdktf.IResolvable;
  /**
  * Global Default Local Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#default_local_preference LogicalRouter#default_local_preference}
  */
  readonly defaultLocalPreference?: number;
  /**
  * Support multiple AS in ECMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ecmp_multi_as LogicalRouter#ecmp_multi_as}
  */
  readonly ecmpMultiAs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Enforce First AS for EBGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enforce_first_as LogicalRouter#enforce_first_as}
  */
  readonly enforceFirstAs?: boolean | cdktf.IResolvable;
  /**
  * Immediately reset session if a link to a directly connected external peer goes down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#fast_external_failover LogicalRouter#fast_external_failover}
  */
  readonly fastExternalFailover?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_bfd LogicalRouter#global_bfd}
  */
  readonly globalBfd?: LogicalRouterVrfBgpGlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#graceful_restart LogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: LogicalRouterVrfBgpGracefulRestart;
  /**
  * Gracefully Shutdown BGP following RFC-8326
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#graceful_shutdown LogicalRouter#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Populate BGP learned route to global route table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#install_route LogicalRouter#install_route}
  */
  readonly installRoute?: boolean | cdktf.IResolvable;
  /**
  * local AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#local_as LogicalRouter#local_as}
  */
  readonly localAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#med LogicalRouter#med}
  */
  readonly med?: LogicalRouterVrfBgpMed;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#peer_group LogicalRouter#peer_group}
  */
  readonly peerGroup?: LogicalRouterVrfBgpPeerGroup[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#redistribution_profile LogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: LogicalRouterVrfBgpRedistributionProfile;
  /**
  * router id of this BGP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#router_id LogicalRouter#router_id}
  */
  readonly routerId?: string;
}

export function logicalRouterVrfBgpToTerraform(struct?: LogicalRouterVrfBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_network: logicalRouterVrfBgpAdvertiseNetworkToTerraform(struct!.advertiseNetwork),
    aggregate_routes: cdktf.listMapper(logicalRouterVrfBgpAggregateRoutesToTerraform, false)(struct!.aggregateRoutes),
    always_advertise_network_route: cdktf.booleanToTerraform(struct!.alwaysAdvertiseNetworkRoute),
    default_local_preference: cdktf.numberToTerraform(struct!.defaultLocalPreference),
    ecmp_multi_as: cdktf.booleanToTerraform(struct!.ecmpMultiAs),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enforce_first_as: cdktf.booleanToTerraform(struct!.enforceFirstAs),
    fast_external_failover: cdktf.booleanToTerraform(struct!.fastExternalFailover),
    global_bfd: logicalRouterVrfBgpGlobalBfdToTerraform(struct!.globalBfd),
    graceful_restart: logicalRouterVrfBgpGracefulRestartToTerraform(struct!.gracefulRestart),
    graceful_shutdown: cdktf.booleanToTerraform(struct!.gracefulShutdown),
    install_route: cdktf.booleanToTerraform(struct!.installRoute),
    local_as: cdktf.stringToTerraform(struct!.localAs),
    med: logicalRouterVrfBgpMedToTerraform(struct!.med),
    peer_group: cdktf.listMapper(logicalRouterVrfBgpPeerGroupToTerraform, false)(struct!.peerGroup),
    redistribution_profile: logicalRouterVrfBgpRedistributionProfileToTerraform(struct!.redistributionProfile),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function logicalRouterVrfBgpToHclTerraform(struct?: LogicalRouterVrfBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_network: {
      value: logicalRouterVrfBgpAdvertiseNetworkToHclTerraform(struct!.advertiseNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpAdvertiseNetwork",
    },
    aggregate_routes: {
      value: cdktf.listMapperHcl(logicalRouterVrfBgpAggregateRoutesToHclTerraform, false)(struct!.aggregateRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfBgpAggregateRoutesList",
    },
    always_advertise_network_route: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysAdvertiseNetworkRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_local_preference: {
      value: cdktf.numberToHclTerraform(struct!.defaultLocalPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ecmp_multi_as: {
      value: cdktf.booleanToHclTerraform(struct!.ecmpMultiAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_first_as: {
      value: cdktf.booleanToHclTerraform(struct!.enforceFirstAs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fast_external_failover: {
      value: cdktf.booleanToHclTerraform(struct!.fastExternalFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_bfd: {
      value: logicalRouterVrfBgpGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpGlobalBfd",
    },
    graceful_restart: {
      value: logicalRouterVrfBgpGracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpGracefulRestart",
    },
    graceful_shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.gracefulShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    install_route: {
      value: cdktf.booleanToHclTerraform(struct!.installRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_as: {
      value: cdktf.stringToHclTerraform(struct!.localAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    med: {
      value: logicalRouterVrfBgpMedToHclTerraform(struct!.med),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpMed",
    },
    peer_group: {
      value: cdktf.listMapperHcl(logicalRouterVrfBgpPeerGroupToHclTerraform, false)(struct!.peerGroup),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfBgpPeerGroupList",
    },
    redistribution_profile: {
      value: logicalRouterVrfBgpRedistributionProfileToHclTerraform(struct!.redistributionProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgpRedistributionProfile",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfBgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseNetwork = this._advertiseNetwork?.internalValue;
    }
    if (this._aggregateRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateRoutes = this._aggregateRoutes?.internalValue;
    }
    if (this._alwaysAdvertiseNetworkRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysAdvertiseNetworkRoute = this._alwaysAdvertiseNetworkRoute;
    }
    if (this._defaultLocalPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLocalPreference = this._defaultLocalPreference;
    }
    if (this._ecmpMultiAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmpMultiAs = this._ecmpMultiAs;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._enforceFirstAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceFirstAs = this._enforceFirstAs;
    }
    if (this._fastExternalFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastExternalFailover = this._fastExternalFailover;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._gracefulRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart?.internalValue;
    }
    if (this._gracefulShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdown = this._gracefulShutdown;
    }
    if (this._installRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.installRoute = this._installRoute;
    }
    if (this._localAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAs = this._localAs;
    }
    if (this._med?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.med = this._med?.internalValue;
    }
    if (this._peerGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerGroup = this._peerGroup?.internalValue;
    }
    if (this._redistributionProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionProfile = this._redistributionProfile?.internalValue;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfBgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseNetwork.internalValue = undefined;
      this._aggregateRoutes.internalValue = undefined;
      this._alwaysAdvertiseNetworkRoute = undefined;
      this._defaultLocalPreference = undefined;
      this._ecmpMultiAs = undefined;
      this._enable = undefined;
      this._enforceFirstAs = undefined;
      this._fastExternalFailover = undefined;
      this._globalBfd.internalValue = undefined;
      this._gracefulRestart.internalValue = undefined;
      this._gracefulShutdown = undefined;
      this._installRoute = undefined;
      this._localAs = undefined;
      this._med.internalValue = undefined;
      this._peerGroup.internalValue = undefined;
      this._redistributionProfile.internalValue = undefined;
      this._routerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseNetwork.internalValue = value.advertiseNetwork;
      this._aggregateRoutes.internalValue = value.aggregateRoutes;
      this._alwaysAdvertiseNetworkRoute = value.alwaysAdvertiseNetworkRoute;
      this._defaultLocalPreference = value.defaultLocalPreference;
      this._ecmpMultiAs = value.ecmpMultiAs;
      this._enable = value.enable;
      this._enforceFirstAs = value.enforceFirstAs;
      this._fastExternalFailover = value.fastExternalFailover;
      this._globalBfd.internalValue = value.globalBfd;
      this._gracefulRestart.internalValue = value.gracefulRestart;
      this._gracefulShutdown = value.gracefulShutdown;
      this._installRoute = value.installRoute;
      this._localAs = value.localAs;
      this._med.internalValue = value.med;
      this._peerGroup.internalValue = value.peerGroup;
      this._redistributionProfile.internalValue = value.redistributionProfile;
      this._routerId = value.routerId;
    }
  }

  // advertise_network - computed: false, optional: true, required: false
  private _advertiseNetwork = new LogicalRouterVrfBgpAdvertiseNetworkOutputReference(this, "advertise_network");
  public get advertiseNetwork() {
    return this._advertiseNetwork;
  }
  public putAdvertiseNetwork(value: LogicalRouterVrfBgpAdvertiseNetwork) {
    this._advertiseNetwork.internalValue = value;
  }
  public resetAdvertiseNetwork() {
    this._advertiseNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseNetworkInput() {
    return this._advertiseNetwork.internalValue;
  }

  // aggregate_routes - computed: false, optional: true, required: false
  private _aggregateRoutes = new LogicalRouterVrfBgpAggregateRoutesList(this, "aggregate_routes", false);
  public get aggregateRoutes() {
    return this._aggregateRoutes;
  }
  public putAggregateRoutes(value: LogicalRouterVrfBgpAggregateRoutes[] | cdktf.IResolvable) {
    this._aggregateRoutes.internalValue = value;
  }
  public resetAggregateRoutes() {
    this._aggregateRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateRoutesInput() {
    return this._aggregateRoutes.internalValue;
  }

  // always_advertise_network_route - computed: false, optional: true, required: false
  private _alwaysAdvertiseNetworkRoute?: boolean | cdktf.IResolvable; 
  public get alwaysAdvertiseNetworkRoute() {
    return this.getBooleanAttribute('always_advertise_network_route');
  }
  public set alwaysAdvertiseNetworkRoute(value: boolean | cdktf.IResolvable) {
    this._alwaysAdvertiseNetworkRoute = value;
  }
  public resetAlwaysAdvertiseNetworkRoute() {
    this._alwaysAdvertiseNetworkRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysAdvertiseNetworkRouteInput() {
    return this._alwaysAdvertiseNetworkRoute;
  }

  // default_local_preference - computed: true, optional: true, required: false
  private _defaultLocalPreference?: number; 
  public get defaultLocalPreference() {
    return this.getNumberAttribute('default_local_preference');
  }
  public set defaultLocalPreference(value: number) {
    this._defaultLocalPreference = value;
  }
  public resetDefaultLocalPreference() {
    this._defaultLocalPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocalPreferenceInput() {
    return this._defaultLocalPreference;
  }

  // ecmp_multi_as - computed: false, optional: true, required: false
  private _ecmpMultiAs?: boolean | cdktf.IResolvable; 
  public get ecmpMultiAs() {
    return this.getBooleanAttribute('ecmp_multi_as');
  }
  public set ecmpMultiAs(value: boolean | cdktf.IResolvable) {
    this._ecmpMultiAs = value;
  }
  public resetEcmpMultiAs() {
    this._ecmpMultiAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpMultiAsInput() {
    return this._ecmpMultiAs;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // enforce_first_as - computed: false, optional: true, required: false
  private _enforceFirstAs?: boolean | cdktf.IResolvable; 
  public get enforceFirstAs() {
    return this.getBooleanAttribute('enforce_first_as');
  }
  public set enforceFirstAs(value: boolean | cdktf.IResolvable) {
    this._enforceFirstAs = value;
  }
  public resetEnforceFirstAs() {
    this._enforceFirstAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstAsInput() {
    return this._enforceFirstAs;
  }

  // fast_external_failover - computed: false, optional: true, required: false
  private _fastExternalFailover?: boolean | cdktf.IResolvable; 
  public get fastExternalFailover() {
    return this.getBooleanAttribute('fast_external_failover');
  }
  public set fastExternalFailover(value: boolean | cdktf.IResolvable) {
    this._fastExternalFailover = value;
  }
  public resetFastExternalFailover() {
    this._fastExternalFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastExternalFailoverInput() {
    return this._fastExternalFailover;
  }

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new LogicalRouterVrfBgpGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: LogicalRouterVrfBgpGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new LogicalRouterVrfBgpGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: LogicalRouterVrfBgpGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // graceful_shutdown - computed: false, optional: true, required: false
  private _gracefulShutdown?: boolean | cdktf.IResolvable; 
  public get gracefulShutdown() {
    return this.getBooleanAttribute('graceful_shutdown');
  }
  public set gracefulShutdown(value: boolean | cdktf.IResolvable) {
    this._gracefulShutdown = value;
  }
  public resetGracefulShutdown() {
    this._gracefulShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownInput() {
    return this._gracefulShutdown;
  }

  // install_route - computed: false, optional: true, required: false
  private _installRoute?: boolean | cdktf.IResolvable; 
  public get installRoute() {
    return this.getBooleanAttribute('install_route');
  }
  public set installRoute(value: boolean | cdktf.IResolvable) {
    this._installRoute = value;
  }
  public resetInstallRoute() {
    this._installRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installRouteInput() {
    return this._installRoute;
  }

  // local_as - computed: false, optional: true, required: false
  private _localAs?: string; 
  public get localAs() {
    return this.getStringAttribute('local_as');
  }
  public set localAs(value: string) {
    this._localAs = value;
  }
  public resetLocalAs() {
    this._localAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsInput() {
    return this._localAs;
  }

  // med - computed: false, optional: true, required: false
  private _med = new LogicalRouterVrfBgpMedOutputReference(this, "med");
  public get med() {
    return this._med;
  }
  public putMed(value: LogicalRouterVrfBgpMed) {
    this._med.internalValue = value;
  }
  public resetMed() {
    this._med.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med.internalValue;
  }

  // peer_group - computed: false, optional: true, required: false
  private _peerGroup = new LogicalRouterVrfBgpPeerGroupList(this, "peer_group", false);
  public get peerGroup() {
    return this._peerGroup;
  }
  public putPeerGroup(value: LogicalRouterVrfBgpPeerGroup[] | cdktf.IResolvable) {
    this._peerGroup.internalValue = value;
  }
  public resetPeerGroup() {
    this._peerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup.internalValue;
  }

  // redistribution_profile - computed: false, optional: true, required: false
  private _redistributionProfile = new LogicalRouterVrfBgpRedistributionProfileOutputReference(this, "redistribution_profile");
  public get redistributionProfile() {
    return this._redistributionProfile;
  }
  public putRedistributionProfile(value: LogicalRouterVrfBgpRedistributionProfile) {
    this._redistributionProfile.internalValue = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile.internalValue;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }
}
export interface LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin {
}

export function logicalRouterVrfEcmpAlgorithmBalancedRoundRobinToTerraform(struct?: LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfEcmpAlgorithmBalancedRoundRobinToHclTerraform(struct?: LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfEcmpAlgorithmBalancedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfEcmpAlgorithmIpHash {
  /**
  * User-specified hash seed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#hash_seed LogicalRouter#hash_seed}
  */
  readonly hashSeed?: number;
  /**
  * only use source address for hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#src_only LogicalRouter#src_only}
  */
  readonly srcOnly?: boolean | cdktf.IResolvable;
  /**
  * use source/destination port for hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#use_port LogicalRouter#use_port}
  */
  readonly usePort?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfEcmpAlgorithmIpHashToTerraform(struct?: LogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_seed: cdktf.numberToTerraform(struct!.hashSeed),
    src_only: cdktf.booleanToTerraform(struct!.srcOnly),
    use_port: cdktf.booleanToTerraform(struct!.usePort),
  }
}


export function logicalRouterVrfEcmpAlgorithmIpHashToHclTerraform(struct?: LogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_seed: {
      value: cdktf.numberToHclTerraform(struct!.hashSeed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_only: {
      value: cdktf.booleanToHclTerraform(struct!.srcOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_port: {
      value: cdktf.booleanToHclTerraform(struct!.usePort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfEcmpAlgorithmIpHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashSeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashSeed = this._hashSeed;
    }
    if (this._srcOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOnly = this._srcOnly;
    }
    if (this._usePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePort = this._usePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hashSeed = undefined;
      this._srcOnly = undefined;
      this._usePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hashSeed = value.hashSeed;
      this._srcOnly = value.srcOnly;
      this._usePort = value.usePort;
    }
  }

  // hash_seed - computed: true, optional: true, required: false
  private _hashSeed?: number; 
  public get hashSeed() {
    return this.getNumberAttribute('hash_seed');
  }
  public set hashSeed(value: number) {
    this._hashSeed = value;
  }
  public resetHashSeed() {
    this._hashSeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashSeedInput() {
    return this._hashSeed;
  }

  // src_only - computed: false, optional: true, required: false
  private _srcOnly?: boolean | cdktf.IResolvable; 
  public get srcOnly() {
    return this.getBooleanAttribute('src_only');
  }
  public set srcOnly(value: boolean | cdktf.IResolvable) {
    this._srcOnly = value;
  }
  public resetSrcOnly() {
    this._srcOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOnlyInput() {
    return this._srcOnly;
  }

  // use_port - computed: false, optional: true, required: false
  private _usePort?: boolean | cdktf.IResolvable; 
  public get usePort() {
    return this.getBooleanAttribute('use_port');
  }
  public set usePort(value: boolean | cdktf.IResolvable) {
    this._usePort = value;
  }
  public resetUsePort() {
    this._usePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePortInput() {
    return this._usePort;
  }
}
export interface LogicalRouterVrfEcmpAlgorithmIpModulo {
}

export function logicalRouterVrfEcmpAlgorithmIpModuloToTerraform(struct?: LogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfEcmpAlgorithmIpModuloToHclTerraform(struct?: LogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfEcmpAlgorithmIpModuloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * interface ECMP weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#weight LogicalRouter#weight}
  */
  readonly weight?: number;
}

export function logicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToTerraform(struct?: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function logicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToHclTerraform(struct?: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable): any {
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
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._weight = value.weight;
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

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference {
    return new LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface[] | cdktf.IResolvable;
}

export function logicalRouterVrfEcmpAlgorithmWeightedRoundRobinToTerraform(struct?: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(logicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToTerraform, false)(struct!.interface),
  }
}


export function logicalRouterVrfEcmpAlgorithmWeightedRoundRobinToHclTerraform(struct?: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(logicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface.internalValue = value.interface;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface LogicalRouterVrfEcmpAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#balanced_round_robin LogicalRouter#balanced_round_robin}
  */
  readonly balancedRoundRobin?: LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip_hash LogicalRouter#ip_hash}
  */
  readonly ipHash?: LogicalRouterVrfEcmpAlgorithmIpHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip_modulo LogicalRouter#ip_modulo}
  */
  readonly ipModulo?: LogicalRouterVrfEcmpAlgorithmIpModulo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#weighted_round_robin LogicalRouter#weighted_round_robin}
  */
  readonly weightedRoundRobin?: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin;
}

export function logicalRouterVrfEcmpAlgorithmToTerraform(struct?: LogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balanced_round_robin: logicalRouterVrfEcmpAlgorithmBalancedRoundRobinToTerraform(struct!.balancedRoundRobin),
    ip_hash: logicalRouterVrfEcmpAlgorithmIpHashToTerraform(struct!.ipHash),
    ip_modulo: logicalRouterVrfEcmpAlgorithmIpModuloToTerraform(struct!.ipModulo),
    weighted_round_robin: logicalRouterVrfEcmpAlgorithmWeightedRoundRobinToTerraform(struct!.weightedRoundRobin),
  }
}


export function logicalRouterVrfEcmpAlgorithmToHclTerraform(struct?: LogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balanced_round_robin: {
      value: logicalRouterVrfEcmpAlgorithmBalancedRoundRobinToHclTerraform(struct!.balancedRoundRobin),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin",
    },
    ip_hash: {
      value: logicalRouterVrfEcmpAlgorithmIpHashToHclTerraform(struct!.ipHash),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfEcmpAlgorithmIpHash",
    },
    ip_modulo: {
      value: logicalRouterVrfEcmpAlgorithmIpModuloToHclTerraform(struct!.ipModulo),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfEcmpAlgorithmIpModulo",
    },
    weighted_round_robin: {
      value: logicalRouterVrfEcmpAlgorithmWeightedRoundRobinToHclTerraform(struct!.weightedRoundRobin),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfEcmpAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balancedRoundRobin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancedRoundRobin = this._balancedRoundRobin?.internalValue;
    }
    if (this._ipHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipHash = this._ipHash?.internalValue;
    }
    if (this._ipModulo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipModulo = this._ipModulo?.internalValue;
    }
    if (this._weightedRoundRobin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedRoundRobin = this._weightedRoundRobin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._balancedRoundRobin.internalValue = undefined;
      this._ipHash.internalValue = undefined;
      this._ipModulo.internalValue = undefined;
      this._weightedRoundRobin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._balancedRoundRobin.internalValue = value.balancedRoundRobin;
      this._ipHash.internalValue = value.ipHash;
      this._ipModulo.internalValue = value.ipModulo;
      this._weightedRoundRobin.internalValue = value.weightedRoundRobin;
    }
  }

  // balanced_round_robin - computed: false, optional: true, required: false
  private _balancedRoundRobin = new LogicalRouterVrfEcmpAlgorithmBalancedRoundRobinOutputReference(this, "balanced_round_robin");
  public get balancedRoundRobin() {
    return this._balancedRoundRobin;
  }
  public putBalancedRoundRobin(value: LogicalRouterVrfEcmpAlgorithmBalancedRoundRobin) {
    this._balancedRoundRobin.internalValue = value;
  }
  public resetBalancedRoundRobin() {
    this._balancedRoundRobin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancedRoundRobinInput() {
    return this._balancedRoundRobin.internalValue;
  }

  // ip_hash - computed: false, optional: true, required: false
  private _ipHash = new LogicalRouterVrfEcmpAlgorithmIpHashOutputReference(this, "ip_hash");
  public get ipHash() {
    return this._ipHash;
  }
  public putIpHash(value: LogicalRouterVrfEcmpAlgorithmIpHash) {
    this._ipHash.internalValue = value;
  }
  public resetIpHash() {
    this._ipHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHashInput() {
    return this._ipHash.internalValue;
  }

  // ip_modulo - computed: false, optional: true, required: false
  private _ipModulo = new LogicalRouterVrfEcmpAlgorithmIpModuloOutputReference(this, "ip_modulo");
  public get ipModulo() {
    return this._ipModulo;
  }
  public putIpModulo(value: LogicalRouterVrfEcmpAlgorithmIpModulo) {
    this._ipModulo.internalValue = value;
  }
  public resetIpModulo() {
    this._ipModulo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModuloInput() {
    return this._ipModulo.internalValue;
  }

  // weighted_round_robin - computed: false, optional: true, required: false
  private _weightedRoundRobin = new LogicalRouterVrfEcmpAlgorithmWeightedRoundRobinOutputReference(this, "weighted_round_robin");
  public get weightedRoundRobin() {
    return this._weightedRoundRobin;
  }
  public putWeightedRoundRobin(value: LogicalRouterVrfEcmpAlgorithmWeightedRoundRobin) {
    this._weightedRoundRobin.internalValue = value;
  }
  public resetWeightedRoundRobin() {
    this._weightedRoundRobin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedRoundRobinInput() {
    return this._weightedRoundRobin.internalValue;
  }
}
export interface LogicalRouterVrfEcmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#algorithm LogicalRouter#algorithm}
  */
  readonly algorithm?: LogicalRouterVrfEcmpAlgorithm;
  /**
  * enable Equal Cost Multipath routing, change this configuration will result in a virtual router restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Maxmum number of ECMP paths supported, change this configuration will result in a virtual router restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#max_paths LogicalRouter#max_paths}
  */
  readonly maxPaths?: number;
  /**
  * force VPN traffic to exit interface that the source-ip belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#strict_source_path LogicalRouter#strict_source_path}
  */
  readonly strictSourcePath?: boolean | cdktf.IResolvable;
  /**
  * allows return packets to egress out of the ingress interface of the flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#symmetric_return LogicalRouter#symmetric_return}
  */
  readonly symmetricReturn?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfEcmpToTerraform(struct?: LogicalRouterVrfEcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: logicalRouterVrfEcmpAlgorithmToTerraform(struct!.algorithm),
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_paths: cdktf.numberToTerraform(struct!.maxPaths),
    strict_source_path: cdktf.booleanToTerraform(struct!.strictSourcePath),
    symmetric_return: cdktf.booleanToTerraform(struct!.symmetricReturn),
  }
}


export function logicalRouterVrfEcmpToHclTerraform(struct?: LogicalRouterVrfEcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: logicalRouterVrfEcmpAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfEcmpAlgorithm",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_paths: {
      value: cdktf.numberToHclTerraform(struct!.maxPaths),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_source_path: {
      value: cdktf.booleanToHclTerraform(struct!.strictSourcePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    symmetric_return: {
      value: cdktf.booleanToHclTerraform(struct!.symmetricReturn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfEcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfEcmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._maxPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPaths = this._maxPaths;
    }
    if (this._strictSourcePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictSourcePath = this._strictSourcePath;
    }
    if (this._symmetricReturn !== undefined) {
      hasAnyValues = true;
      internalValueResult.symmetricReturn = this._symmetricReturn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfEcmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = undefined;
      this._enable = undefined;
      this._maxPaths = undefined;
      this._strictSourcePath = undefined;
      this._symmetricReturn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithm.internalValue = value.algorithm;
      this._enable = value.enable;
      this._maxPaths = value.maxPaths;
      this._strictSourcePath = value.strictSourcePath;
      this._symmetricReturn = value.symmetricReturn;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm = new LogicalRouterVrfEcmpAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: LogicalRouterVrfEcmpAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // max_paths - computed: true, optional: true, required: false
  private _maxPaths?: number; 
  public get maxPaths() {
    return this.getNumberAttribute('max_paths');
  }
  public set maxPaths(value: number) {
    this._maxPaths = value;
  }
  public resetMaxPaths() {
    this._maxPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPathsInput() {
    return this._maxPaths;
  }

  // strict_source_path - computed: false, optional: true, required: false
  private _strictSourcePath?: boolean | cdktf.IResolvable; 
  public get strictSourcePath() {
    return this.getBooleanAttribute('strict_source_path');
  }
  public set strictSourcePath(value: boolean | cdktf.IResolvable) {
    this._strictSourcePath = value;
  }
  public resetStrictSourcePath() {
    this._strictSourcePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictSourcePathInput() {
    return this._strictSourcePath;
  }

  // symmetric_return - computed: false, optional: true, required: false
  private _symmetricReturn?: boolean | cdktf.IResolvable; 
  public get symmetricReturn() {
    return this.getBooleanAttribute('symmetric_return');
  }
  public set symmetricReturn(value: boolean | cdktf.IResolvable) {
    this._symmetricReturn = value;
  }
  public resetSymmetricReturn() {
    this._symmetricReturn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symmetricReturnInput() {
    return this._symmetricReturn;
  }
}
export interface LogicalRouterVrfMulticastIgmpDynamicInterface {
  /**
  * ASM/SSM Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#group_filter LogicalRouter#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * maximum number of groups allowed on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#max_groups LogicalRouter#max_groups}
  */
  readonly maxGroups?: string;
  /**
  * maximum number of source-specific memberships allowed on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#max_sources LogicalRouter#max_sources}
  */
  readonly maxSources?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * IGMP Query Timer Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#query_profile LogicalRouter#query_profile}
  */
  readonly queryProfile?: string;
  /**
  * robustness variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#robustness LogicalRouter#robustness}
  */
  readonly robustness?: string;
  /**
  * drop IGMP packets without Router Alert option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#router_alert_policing LogicalRouter#router_alert_policing}
  */
  readonly routerAlertPolicing?: boolean | cdktf.IResolvable;
  /**
  * IGMP version number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#version LogicalRouter#version}
  */
  readonly version?: string;
}

export function logicalRouterVrfMulticastIgmpDynamicInterfaceToTerraform(struct?: LogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_filter: cdktf.stringToTerraform(struct!.groupFilter),
    max_groups: cdktf.stringToTerraform(struct!.maxGroups),
    max_sources: cdktf.stringToTerraform(struct!.maxSources),
    name: cdktf.stringToTerraform(struct!.name),
    query_profile: cdktf.stringToTerraform(struct!.queryProfile),
    robustness: cdktf.stringToTerraform(struct!.robustness),
    router_alert_policing: cdktf.booleanToTerraform(struct!.routerAlertPolicing),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function logicalRouterVrfMulticastIgmpDynamicInterfaceToHclTerraform(struct?: LogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_filter: {
      value: cdktf.stringToHclTerraform(struct!.groupFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_groups: {
      value: cdktf.stringToHclTerraform(struct!.maxGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_sources: {
      value: cdktf.stringToHclTerraform(struct!.maxSources),
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
    query_profile: {
      value: cdktf.stringToHclTerraform(struct!.queryProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    robustness: {
      value: cdktf.stringToHclTerraform(struct!.robustness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_alert_policing: {
      value: cdktf.booleanToHclTerraform(struct!.routerAlertPolicing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupFilter = this._groupFilter;
    }
    if (this._maxGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGroups = this._maxGroups;
    }
    if (this._maxSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSources = this._maxSources;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._queryProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryProfile = this._queryProfile;
    }
    if (this._robustness !== undefined) {
      hasAnyValues = true;
      internalValueResult.robustness = this._robustness;
    }
    if (this._routerAlertPolicing !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerAlertPolicing = this._routerAlertPolicing;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupFilter = undefined;
      this._maxGroups = undefined;
      this._maxSources = undefined;
      this._name = undefined;
      this._queryProfile = undefined;
      this._robustness = undefined;
      this._routerAlertPolicing = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupFilter = value.groupFilter;
      this._maxGroups = value.maxGroups;
      this._maxSources = value.maxSources;
      this._name = value.name;
      this._queryProfile = value.queryProfile;
      this._robustness = value.robustness;
      this._routerAlertPolicing = value.routerAlertPolicing;
      this._version = value.version;
    }
  }

  // group_filter - computed: true, optional: true, required: false
  private _groupFilter?: string; 
  public get groupFilter() {
    return this.getStringAttribute('group_filter');
  }
  public set groupFilter(value: string) {
    this._groupFilter = value;
  }
  public resetGroupFilter() {
    this._groupFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupFilterInput() {
    return this._groupFilter;
  }

  // max_groups - computed: true, optional: true, required: false
  private _maxGroups?: string; 
  public get maxGroups() {
    return this.getStringAttribute('max_groups');
  }
  public set maxGroups(value: string) {
    this._maxGroups = value;
  }
  public resetMaxGroups() {
    this._maxGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupsInput() {
    return this._maxGroups;
  }

  // max_sources - computed: true, optional: true, required: false
  private _maxSources?: string; 
  public get maxSources() {
    return this.getStringAttribute('max_sources');
  }
  public set maxSources(value: string) {
    this._maxSources = value;
  }
  public resetMaxSources() {
    this._maxSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSourcesInput() {
    return this._maxSources;
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

  // query_profile - computed: false, optional: true, required: false
  private _queryProfile?: string; 
  public get queryProfile() {
    return this.getStringAttribute('query_profile');
  }
  public set queryProfile(value: string) {
    this._queryProfile = value;
  }
  public resetQueryProfile() {
    this._queryProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryProfileInput() {
    return this._queryProfile;
  }

  // robustness - computed: true, optional: true, required: false
  private _robustness?: string; 
  public get robustness() {
    return this.getStringAttribute('robustness');
  }
  public set robustness(value: string) {
    this._robustness = value;
  }
  public resetRobustness() {
    this._robustness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robustnessInput() {
    return this._robustness;
  }

  // router_alert_policing - computed: false, optional: true, required: false
  private _routerAlertPolicing?: boolean | cdktf.IResolvable; 
  public get routerAlertPolicing() {
    return this.getBooleanAttribute('router_alert_policing');
  }
  public set routerAlertPolicing(value: boolean | cdktf.IResolvable) {
    this._routerAlertPolicing = value;
  }
  public resetRouterAlertPolicing() {
    this._routerAlertPolicing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerAlertPolicingInput() {
    return this._routerAlertPolicing;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class LogicalRouterVrfMulticastIgmpDynamicInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfMulticastIgmpDynamicInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference {
    return new LogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfMulticastIgmpDynamic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfMulticastIgmpDynamicInterface[] | cdktf.IResolvable;
}

export function logicalRouterVrfMulticastIgmpDynamicToTerraform(struct?: LogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(logicalRouterVrfMulticastIgmpDynamicInterfaceToTerraform, false)(struct!.interface),
  }
}


export function logicalRouterVrfMulticastIgmpDynamicToHclTerraform(struct?: LogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(logicalRouterVrfMulticastIgmpDynamicInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfMulticastIgmpDynamicInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastIgmpDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interface.internalValue = value.interface;
    }
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new LogicalRouterVrfMulticastIgmpDynamicInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfMulticastIgmpDynamicInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}
export interface LogicalRouterVrfMulticastIgmpStatic {
  /**
  * group-address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#group_address LogicalRouter#group_address}
  */
  readonly groupAddress?: string;
  /**
  * multicast interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * source-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#source_address LogicalRouter#source_address}
  */
  readonly sourceAddress?: string;
}

export function logicalRouterVrfMulticastIgmpStaticToTerraform(struct?: LogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_address: cdktf.stringToTerraform(struct!.groupAddress),
    interface: cdktf.stringToTerraform(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function logicalRouterVrfMulticastIgmpStaticToHclTerraform(struct?: LogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_address: {
      value: cdktf.stringToHclTerraform(struct!.groupAddress),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastIgmpStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAddress = this._groupAddress;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAddress = undefined;
      this._interface = undefined;
      this._name = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAddress = value.groupAddress;
      this._interface = value.interface;
      this._name = value.name;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // group_address - computed: false, optional: true, required: false
  private _groupAddress?: string; 
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }
  public set groupAddress(value: string) {
    this._groupAddress = value;
  }
  public resetGroupAddress() {
    this._groupAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddressInput() {
    return this._groupAddress;
  }

  // interface - computed: false, optional: true, required: false
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

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}

export class LogicalRouterVrfMulticastIgmpStaticList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfMulticastIgmpStatic[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfMulticastIgmpStaticOutputReference {
    return new LogicalRouterVrfMulticastIgmpStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfMulticastIgmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#dynamic LogicalRouter#dynamic}
  */
  readonly dynamic?: LogicalRouterVrfMulticastIgmpDynamic;
  /**
  * enable IGMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static LogicalRouter#static}
  */
  readonly static?: LogicalRouterVrfMulticastIgmpStatic[] | cdktf.IResolvable;
}

export function logicalRouterVrfMulticastIgmpToTerraform(struct?: LogicalRouterVrfMulticastIgmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: logicalRouterVrfMulticastIgmpDynamicToTerraform(struct!.dynamic),
    enable: cdktf.booleanToTerraform(struct!.enable),
    static: cdktf.listMapper(logicalRouterVrfMulticastIgmpStaticToTerraform, false)(struct!.static),
  }
}


export function logicalRouterVrfMulticastIgmpToHclTerraform(struct?: LogicalRouterVrfMulticastIgmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: logicalRouterVrfMulticastIgmpDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastIgmpDynamic",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static: {
      value: cdktf.listMapperHcl(logicalRouterVrfMulticastIgmpStaticToHclTerraform, false)(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfMulticastIgmpStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastIgmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastIgmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = undefined;
      this._enable = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamic.internalValue = value.dynamic;
      this._enable = value.enable;
      this._static.internalValue = value.static;
    }
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic = new LogicalRouterVrfMulticastIgmpDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: LogicalRouterVrfMulticastIgmpDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // static - computed: false, optional: true, required: false
  private _static = new LogicalRouterVrfMulticastIgmpStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
  public putStatic(value: LogicalRouterVrfMulticastIgmpStatic[] | cdktf.IResolvable) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface LogicalRouterVrfMulticastMsdpOriginatorId {
  /**
  * interface of originator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip LogicalRouter#ip}
  */
  readonly ip?: string;
}

export function logicalRouterVrfMulticastMsdpOriginatorIdToTerraform(struct?: LogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function logicalRouterVrfMulticastMsdpOriginatorIdToHclTerraform(struct?: LogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class LogicalRouterVrfMulticastMsdpOriginatorIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: LogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // interface - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfMulticastMsdpPeerLocalAddress {
  /**
  * interface to accept MSDP connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip LogicalRouter#ip}
  */
  readonly ip?: string;
}

export function logicalRouterVrfMulticastMsdpPeerLocalAddressToTerraform(struct?: LogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function logicalRouterVrfMulticastMsdpPeerLocalAddressToHclTerraform(struct?: LogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class LogicalRouterVrfMulticastMsdpPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: LogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._interface = value.interface;
      this._ip = value.ip;
    }
  }

  // interface - computed: false, optional: true, required: false
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

  // ip - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfMulticastMsdpPeerPeerAddress {
  /**
  * Peer FQDN Address Object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#fqdn LogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * peer address configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip LogicalRouter#ip}
  */
  readonly ip?: string;
}

export function logicalRouterVrfMulticastMsdpPeerPeerAddressToTerraform(struct?: LogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function logicalRouterVrfMulticastMsdpPeerPeerAddressToHclTerraform(struct?: LogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
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

export class LogicalRouterVrfMulticastMsdpPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._ip = value.ip;
    }
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip - computed: false, optional: true, required: false
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
export interface LogicalRouterVrfMulticastMsdpPeer {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Inbound SA Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inbound_sa_filter LogicalRouter#inbound_sa_filter}
  */
  readonly inboundSaFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#local_address LogicalRouter#local_address}
  */
  readonly localAddress?: LogicalRouterVrfMulticastMsdpPeerLocalAddress;
  /**
  * Maximum number of SA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#max_sa LogicalRouter#max_sa}
  */
  readonly maxSa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Outbound SA Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#outbound_sa_filter LogicalRouter#outbound_sa_filter}
  */
  readonly outboundSaFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#peer_address LogicalRouter#peer_address}
  */
  readonly peerAddress?: LogicalRouterVrfMulticastMsdpPeerPeerAddress;
  /**
  * peer AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#peer_as LogicalRouter#peer_as}
  */
  readonly peerAs?: string;
}

export function logicalRouterVrfMulticastMsdpPeerToTerraform(struct?: LogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    enable: cdktf.booleanToTerraform(struct!.enable),
    inbound_sa_filter: cdktf.stringToTerraform(struct!.inboundSaFilter),
    local_address: logicalRouterVrfMulticastMsdpPeerLocalAddressToTerraform(struct!.localAddress),
    max_sa: cdktf.numberToTerraform(struct!.maxSa),
    name: cdktf.stringToTerraform(struct!.name),
    outbound_sa_filter: cdktf.stringToTerraform(struct!.outboundSaFilter),
    peer_address: logicalRouterVrfMulticastMsdpPeerPeerAddressToTerraform(struct!.peerAddress),
    peer_as: cdktf.stringToTerraform(struct!.peerAs),
  }
}


export function logicalRouterVrfMulticastMsdpPeerToHclTerraform(struct?: LogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inbound_sa_filter: {
      value: cdktf.stringToHclTerraform(struct!.inboundSaFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_address: {
      value: logicalRouterVrfMulticastMsdpPeerLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastMsdpPeerLocalAddress",
    },
    max_sa: {
      value: cdktf.numberToHclTerraform(struct!.maxSa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_sa_filter: {
      value: cdktf.stringToHclTerraform(struct!.outboundSaFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_address: {
      value: logicalRouterVrfMulticastMsdpPeerPeerAddressToHclTerraform(struct!.peerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastMsdpPeerPeerAddress",
    },
    peer_as: {
      value: cdktf.stringToHclTerraform(struct!.peerAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastMsdpPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._inboundSaFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundSaFilter = this._inboundSaFilter;
    }
    if (this._localAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAddress = this._localAddress?.internalValue;
    }
    if (this._maxSa !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSa = this._maxSa;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._outboundSaFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundSaFilter = this._outboundSaFilter;
    }
    if (this._peerAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAddress = this._peerAddress?.internalValue;
    }
    if (this._peerAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAs = this._peerAs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._enable = undefined;
      this._inboundSaFilter = undefined;
      this._localAddress.internalValue = undefined;
      this._maxSa = undefined;
      this._name = undefined;
      this._outboundSaFilter = undefined;
      this._peerAddress.internalValue = undefined;
      this._peerAs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._enable = value.enable;
      this._inboundSaFilter = value.inboundSaFilter;
      this._localAddress.internalValue = value.localAddress;
      this._maxSa = value.maxSa;
      this._name = value.name;
      this._outboundSaFilter = value.outboundSaFilter;
      this._peerAddress.internalValue = value.peerAddress;
      this._peerAs = value.peerAs;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // inbound_sa_filter - computed: false, optional: true, required: false
  private _inboundSaFilter?: string; 
  public get inboundSaFilter() {
    return this.getStringAttribute('inbound_sa_filter');
  }
  public set inboundSaFilter(value: string) {
    this._inboundSaFilter = value;
  }
  public resetInboundSaFilter() {
    this._inboundSaFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundSaFilterInput() {
    return this._inboundSaFilter;
  }

  // local_address - computed: false, optional: true, required: false
  private _localAddress = new LogicalRouterVrfMulticastMsdpPeerLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: LogicalRouterVrfMulticastMsdpPeerLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
  }

  // max_sa - computed: true, optional: true, required: false
  private _maxSa?: number; 
  public get maxSa() {
    return this.getNumberAttribute('max_sa');
  }
  public set maxSa(value: number) {
    this._maxSa = value;
  }
  public resetMaxSa() {
    this._maxSa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSaInput() {
    return this._maxSa;
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

  // outbound_sa_filter - computed: false, optional: true, required: false
  private _outboundSaFilter?: string; 
  public get outboundSaFilter() {
    return this.getStringAttribute('outbound_sa_filter');
  }
  public set outboundSaFilter(value: string) {
    this._outboundSaFilter = value;
  }
  public resetOutboundSaFilter() {
    this._outboundSaFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundSaFilterInput() {
    return this._outboundSaFilter;
  }

  // peer_address - computed: false, optional: true, required: false
  private _peerAddress = new LogicalRouterVrfMulticastMsdpPeerPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: LogicalRouterVrfMulticastMsdpPeerPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // peer_as - computed: false, optional: true, required: false
  private _peerAs?: string; 
  public get peerAs() {
    return this.getStringAttribute('peer_as');
  }
  public set peerAs(value: string) {
    this._peerAs = value;
  }
  public resetPeerAs() {
    this._peerAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAsInput() {
    return this._peerAs;
  }
}

export class LogicalRouterVrfMulticastMsdpPeerList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfMulticastMsdpPeer[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfMulticastMsdpPeerOutputReference {
    return new LogicalRouterVrfMulticastMsdpPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfMulticastMsdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Global authentication profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_authentication LogicalRouter#global_authentication}
  */
  readonly globalAuthentication?: string;
  /**
  * Global timer profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_timer LogicalRouter#global_timer}
  */
  readonly globalTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#originator_id LogicalRouter#originator_id}
  */
  readonly originatorId?: LogicalRouterVrfMulticastMsdpOriginatorId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#peer LogicalRouter#peer}
  */
  readonly peer?: LogicalRouterVrfMulticastMsdpPeer[] | cdktf.IResolvable;
}

export function logicalRouterVrfMulticastMsdpToTerraform(struct?: LogicalRouterVrfMulticastMsdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_authentication: cdktf.stringToTerraform(struct!.globalAuthentication),
    global_timer: cdktf.stringToTerraform(struct!.globalTimer),
    originator_id: logicalRouterVrfMulticastMsdpOriginatorIdToTerraform(struct!.originatorId),
    peer: cdktf.listMapper(logicalRouterVrfMulticastMsdpPeerToTerraform, false)(struct!.peer),
  }
}


export function logicalRouterVrfMulticastMsdpToHclTerraform(struct?: LogicalRouterVrfMulticastMsdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_authentication: {
      value: cdktf.stringToHclTerraform(struct!.globalAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    originator_id: {
      value: logicalRouterVrfMulticastMsdpOriginatorIdToHclTerraform(struct!.originatorId),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastMsdpOriginatorId",
    },
    peer: {
      value: cdktf.listMapperHcl(logicalRouterVrfMulticastMsdpPeerToHclTerraform, false)(struct!.peer),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfMulticastMsdpPeerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastMsdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastMsdp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._globalAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalAuthentication = this._globalAuthentication;
    }
    if (this._globalTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalTimer = this._globalTimer;
    }
    if (this._originatorId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatorId = this._originatorId?.internalValue;
    }
    if (this._peer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastMsdp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._globalAuthentication = undefined;
      this._globalTimer = undefined;
      this._originatorId.internalValue = undefined;
      this._peer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._globalAuthentication = value.globalAuthentication;
      this._globalTimer = value.globalTimer;
      this._originatorId.internalValue = value.originatorId;
      this._peer.internalValue = value.peer;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // global_authentication - computed: false, optional: true, required: false
  private _globalAuthentication?: string; 
  public get globalAuthentication() {
    return this.getStringAttribute('global_authentication');
  }
  public set globalAuthentication(value: string) {
    this._globalAuthentication = value;
  }
  public resetGlobalAuthentication() {
    this._globalAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalAuthenticationInput() {
    return this._globalAuthentication;
  }

  // global_timer - computed: false, optional: true, required: false
  private _globalTimer?: string; 
  public get globalTimer() {
    return this.getStringAttribute('global_timer');
  }
  public set globalTimer(value: string) {
    this._globalTimer = value;
  }
  public resetGlobalTimer() {
    this._globalTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTimerInput() {
    return this._globalTimer;
  }

  // originator_id - computed: false, optional: true, required: false
  private _originatorId = new LogicalRouterVrfMulticastMsdpOriginatorIdOutputReference(this, "originator_id");
  public get originatorId() {
    return this._originatorId;
  }
  public putOriginatorId(value: LogicalRouterVrfMulticastMsdpOriginatorId) {
    this._originatorId.internalValue = value;
  }
  public resetOriginatorId() {
    this._originatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIdInput() {
    return this._originatorId.internalValue;
  }

  // peer - computed: false, optional: true, required: false
  private _peer = new LogicalRouterVrfMulticastMsdpPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: LogicalRouterVrfMulticastMsdpPeer[] | cdktf.IResolvable) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }
}
export interface LogicalRouterVrfMulticastPimInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#description LogicalRouter#description}
  */
  readonly description?: string;
  /**
  * Designated Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#dr_priority LogicalRouter#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Interface Timer Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#if_timer LogicalRouter#if_timer}
  */
  readonly ifTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Set the filter for neighbor list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#neighbor_filter LogicalRouter#neighbor_filter}
  */
  readonly neighborFilter?: string;
  /**
  * Send BSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#send_bsm LogicalRouter#send_bsm}
  */
  readonly sendBsm?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfMulticastPimInterfaceToTerraform(struct?: LogicalRouterVrfMulticastPimInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dr_priority: cdktf.numberToTerraform(struct!.drPriority),
    if_timer: cdktf.stringToTerraform(struct!.ifTimer),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor_filter: cdktf.stringToTerraform(struct!.neighborFilter),
    send_bsm: cdktf.booleanToTerraform(struct!.sendBsm),
  }
}


export function logicalRouterVrfMulticastPimInterfaceToHclTerraform(struct?: LogicalRouterVrfMulticastPimInterface | cdktf.IResolvable): any {
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
    dr_priority: {
      value: cdktf.numberToHclTerraform(struct!.drPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    if_timer: {
      value: cdktf.stringToHclTerraform(struct!.ifTimer),
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
    neighbor_filter: {
      value: cdktf.stringToHclTerraform(struct!.neighborFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_bsm: {
      value: cdktf.booleanToHclTerraform(struct!.sendBsm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfMulticastPimInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._drPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.drPriority = this._drPriority;
    }
    if (this._ifTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifTimer = this._ifTimer;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighborFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborFilter = this._neighborFilter;
    }
    if (this._sendBsm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendBsm = this._sendBsm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._drPriority = undefined;
      this._ifTimer = undefined;
      this._name = undefined;
      this._neighborFilter = undefined;
      this._sendBsm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._drPriority = value.drPriority;
      this._ifTimer = value.ifTimer;
      this._name = value.name;
      this._neighborFilter = value.neighborFilter;
      this._sendBsm = value.sendBsm;
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

  // dr_priority - computed: true, optional: true, required: false
  private _drPriority?: number; 
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }
  public set drPriority(value: number) {
    this._drPriority = value;
  }
  public resetDrPriority() {
    this._drPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drPriorityInput() {
    return this._drPriority;
  }

  // if_timer - computed: false, optional: true, required: false
  private _ifTimer?: string; 
  public get ifTimer() {
    return this.getStringAttribute('if_timer');
  }
  public set ifTimer(value: string) {
    this._ifTimer = value;
  }
  public resetIfTimer() {
    this._ifTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTimerInput() {
    return this._ifTimer;
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

  // neighbor_filter - computed: true, optional: true, required: false
  private _neighborFilter?: string; 
  public get neighborFilter() {
    return this.getStringAttribute('neighbor_filter');
  }
  public set neighborFilter(value: string) {
    this._neighborFilter = value;
  }
  public resetNeighborFilter() {
    this._neighborFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborFilterInput() {
    return this._neighborFilter;
  }

  // send_bsm - computed: false, optional: true, required: false
  private _sendBsm?: boolean | cdktf.IResolvable; 
  public get sendBsm() {
    return this.getBooleanAttribute('send_bsm');
  }
  public set sendBsm(value: boolean | cdktf.IResolvable) {
    this._sendBsm = value;
  }
  public resetSendBsm() {
    this._sendBsm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendBsmInput() {
    return this._sendBsm;
  }
}

export class LogicalRouterVrfMulticastPimInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfMulticastPimInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfMulticastPimInterfaceOutputReference {
    return new LogicalRouterVrfMulticastPimInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfMulticastPimRpExternalRp {
  /**
  * Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#group_list LogicalRouter#group_list}
  */
  readonly groupList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Override learned RP for the same group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#override LogicalRouter#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfMulticastPimRpExternalRpToTerraform(struct?: LogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_list: cdktf.stringToTerraform(struct!.groupList),
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function logicalRouterVrfMulticastPimRpExternalRpToHclTerraform(struct?: LogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_list: {
      value: cdktf.stringToHclTerraform(struct!.groupList),
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
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimRpExternalRpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupList = undefined;
      this._name = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupList = value.groupList;
      this._name = value.name;
      this._override = value.override;
    }
  }

  // group_list - computed: true, optional: true, required: false
  private _groupList?: string; 
  public get groupList() {
    return this.getStringAttribute('group_list');
  }
  public set groupList(value: string) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}

export class LogicalRouterVrfMulticastPimRpExternalRpList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfMulticastPimRpExternalRp[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfMulticastPimRpExternalRpOutputReference {
    return new LogicalRouterVrfMulticastPimRpExternalRpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfMulticastPimRpLocalRpCandidateRp {
  /**
  * candidate RP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#address LogicalRouter#address}
  */
  readonly address?: string;
  /**
  * The time interval in seconds between candidate rp advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#advertisement_interval LogicalRouter#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#group_list LogicalRouter#group_list}
  */
  readonly groupList?: string;
  /**
  * candidate RP interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * The priority for this candidate rt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
}

export function logicalRouterVrfMulticastPimRpLocalRpCandidateRpToTerraform(struct?: LogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    advertisement_interval: cdktf.numberToTerraform(struct!.advertisementInterval),
    group_list: cdktf.stringToTerraform(struct!.groupList),
    interface: cdktf.stringToTerraform(struct!.interface),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function logicalRouterVrfMulticastPimRpLocalRpCandidateRpToHclTerraform(struct?: LogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    advertisement_interval: {
      value: cdktf.numberToHclTerraform(struct!.advertisementInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_list: {
      value: cdktf.stringToHclTerraform(struct!.groupList),
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimRpLocalRpCandidateRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._advertisementInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisementInterval = this._advertisementInterval;
    }
    if (this._groupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._advertisementInterval = undefined;
      this._groupList = undefined;
      this._interface = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._advertisementInterval = value.advertisementInterval;
      this._groupList = value.groupList;
      this._interface = value.interface;
      this._priority = value.priority;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // advertisement_interval - computed: true, optional: true, required: false
  private _advertisementInterval?: number; 
  public get advertisementInterval() {
    return this.getNumberAttribute('advertisement_interval');
  }
  public set advertisementInterval(value: number) {
    this._advertisementInterval = value;
  }
  public resetAdvertisementInterval() {
    this._advertisementInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisementIntervalInput() {
    return this._advertisementInterval;
  }

  // group_list - computed: true, optional: true, required: false
  private _groupList?: string; 
  public get groupList() {
    return this.getStringAttribute('group_list');
  }
  public set groupList(value: string) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
  }

  // interface - computed: false, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface LogicalRouterVrfMulticastPimRpLocalRpStaticRp {
  /**
  * local RP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#address LogicalRouter#address}
  */
  readonly address?: string;
  /**
  * Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#group_list LogicalRouter#group_list}
  */
  readonly groupList?: string;
  /**
  * local RP interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Override learned RP for the same group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#override LogicalRouter#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfMulticastPimRpLocalRpStaticRpToTerraform(struct?: LogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    group_list: cdktf.stringToTerraform(struct!.groupList),
    interface: cdktf.stringToTerraform(struct!.interface),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}


export function logicalRouterVrfMulticastPimRpLocalRpStaticRpToHclTerraform(struct?: LogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_list: {
      value: cdktf.stringToHclTerraform(struct!.groupList),
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
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimRpLocalRpStaticRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._groupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._groupList = undefined;
      this._interface = undefined;
      this._override = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._groupList = value.groupList;
      this._interface = value.interface;
      this._override = value.override;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // group_list - computed: true, optional: true, required: false
  private _groupList?: string; 
  public get groupList() {
    return this.getStringAttribute('group_list');
  }
  public set groupList(value: string) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
  }

  // interface - computed: false, optional: true, required: false
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }
}
export interface LogicalRouterVrfMulticastPimRpLocalRp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#candidate_rp LogicalRouter#candidate_rp}
  */
  readonly candidateRp?: LogicalRouterVrfMulticastPimRpLocalRpCandidateRp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static_rp LogicalRouter#static_rp}
  */
  readonly staticRp?: LogicalRouterVrfMulticastPimRpLocalRpStaticRp;
}

export function logicalRouterVrfMulticastPimRpLocalRpToTerraform(struct?: LogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    candidate_rp: logicalRouterVrfMulticastPimRpLocalRpCandidateRpToTerraform(struct!.candidateRp),
    static_rp: logicalRouterVrfMulticastPimRpLocalRpStaticRpToTerraform(struct!.staticRp),
  }
}


export function logicalRouterVrfMulticastPimRpLocalRpToHclTerraform(struct?: LogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    candidate_rp: {
      value: logicalRouterVrfMulticastPimRpLocalRpCandidateRpToHclTerraform(struct!.candidateRp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastPimRpLocalRpCandidateRp",
    },
    static_rp: {
      value: logicalRouterVrfMulticastPimRpLocalRpStaticRpToHclTerraform(struct!.staticRp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastPimRpLocalRpStaticRp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimRpLocalRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._candidateRp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.candidateRp = this._candidateRp?.internalValue;
    }
    if (this._staticRp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRp = this._staticRp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._candidateRp.internalValue = undefined;
      this._staticRp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._candidateRp.internalValue = value.candidateRp;
      this._staticRp.internalValue = value.staticRp;
    }
  }

  // candidate_rp - computed: false, optional: true, required: false
  private _candidateRp = new LogicalRouterVrfMulticastPimRpLocalRpCandidateRpOutputReference(this, "candidate_rp");
  public get candidateRp() {
    return this._candidateRp;
  }
  public putCandidateRp(value: LogicalRouterVrfMulticastPimRpLocalRpCandidateRp) {
    this._candidateRp.internalValue = value;
  }
  public resetCandidateRp() {
    this._candidateRp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateRpInput() {
    return this._candidateRp.internalValue;
  }

  // static_rp - computed: false, optional: true, required: false
  private _staticRp = new LogicalRouterVrfMulticastPimRpLocalRpStaticRpOutputReference(this, "static_rp");
  public get staticRp() {
    return this._staticRp;
  }
  public putStaticRp(value: LogicalRouterVrfMulticastPimRpLocalRpStaticRp) {
    this._staticRp.internalValue = value;
  }
  public resetStaticRp() {
    this._staticRp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRpInput() {
    return this._staticRp.internalValue;
  }
}
export interface LogicalRouterVrfMulticastPimRp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#external_rp LogicalRouter#external_rp}
  */
  readonly externalRp?: LogicalRouterVrfMulticastPimRpExternalRp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#local_rp LogicalRouter#local_rp}
  */
  readonly localRp?: LogicalRouterVrfMulticastPimRpLocalRp;
}

export function logicalRouterVrfMulticastPimRpToTerraform(struct?: LogicalRouterVrfMulticastPimRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_rp: cdktf.listMapper(logicalRouterVrfMulticastPimRpExternalRpToTerraform, false)(struct!.externalRp),
    local_rp: logicalRouterVrfMulticastPimRpLocalRpToTerraform(struct!.localRp),
  }
}


export function logicalRouterVrfMulticastPimRpToHclTerraform(struct?: LogicalRouterVrfMulticastPimRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_rp: {
      value: cdktf.listMapperHcl(logicalRouterVrfMulticastPimRpExternalRpToHclTerraform, false)(struct!.externalRp),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfMulticastPimRpExternalRpList",
    },
    local_rp: {
      value: logicalRouterVrfMulticastPimRpLocalRpToHclTerraform(struct!.localRp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastPimRpLocalRp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastPimRp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalRp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalRp = this._externalRp?.internalValue;
    }
    if (this._localRp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRp = this._localRp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimRp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalRp.internalValue = undefined;
      this._localRp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalRp.internalValue = value.externalRp;
      this._localRp.internalValue = value.localRp;
    }
  }

  // external_rp - computed: false, optional: true, required: false
  private _externalRp = new LogicalRouterVrfMulticastPimRpExternalRpList(this, "external_rp", false);
  public get externalRp() {
    return this._externalRp;
  }
  public putExternalRp(value: LogicalRouterVrfMulticastPimRpExternalRp[] | cdktf.IResolvable) {
    this._externalRp.internalValue = value;
  }
  public resetExternalRp() {
    this._externalRp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRpInput() {
    return this._externalRp.internalValue;
  }

  // local_rp - computed: false, optional: true, required: false
  private _localRp = new LogicalRouterVrfMulticastPimRpLocalRpOutputReference(this, "local_rp");
  public get localRp() {
    return this._localRp;
  }
  public putLocalRp(value: LogicalRouterVrfMulticastPimRpLocalRp) {
    this._localRp.internalValue = value;
  }
  public resetLocalRp() {
    this._localRp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localRpInput() {
    return this._localRp.internalValue;
  }
}
export interface LogicalRouterVrfMulticastPimSptThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#threshold LogicalRouter#threshold}
  */
  readonly threshold?: string;
}

export function logicalRouterVrfMulticastPimSptThresholdToTerraform(struct?: LogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function logicalRouterVrfMulticastPimSptThresholdToHclTerraform(struct?: LogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable): any {
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
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimSptThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._threshold = value.threshold;
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

  // threshold - computed: true, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class LogicalRouterVrfMulticastPimSptThresholdList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfMulticastPimSptThreshold[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfMulticastPimSptThresholdOutputReference {
    return new LogicalRouterVrfMulticastPimSptThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfMulticastPimSsmAddressSpace {
  /**
  * SSM Group Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#group_list LogicalRouter#group_list}
  */
  readonly groupList?: string;
}

export function logicalRouterVrfMulticastPimSsmAddressSpaceToTerraform(struct?: LogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_list: cdktf.stringToTerraform(struct!.groupList),
  }
}


export function logicalRouterVrfMulticastPimSsmAddressSpaceToHclTerraform(struct?: LogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_list: {
      value: cdktf.stringToHclTerraform(struct!.groupList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimSsmAddressSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupList = value.groupList;
    }
  }

  // group_list - computed: true, optional: true, required: false
  private _groupList?: string; 
  public get groupList() {
    return this.getStringAttribute('group_list');
  }
  public set groupList(value: string) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
  }
}
export interface LogicalRouterVrfMulticastPim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ASM/SSM group permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#group_permission LogicalRouter#group_permission}
  */
  readonly groupPermission?: string;
  /**
  * Global Interface Timer Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#if_timer_global LogicalRouter#if_timer_global}
  */
  readonly ifTimerGlobal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfMulticastPimInterface[] | cdktf.IResolvable;
  /**
  * time to wait before aging out a multicast route after data stops, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_ageout_time LogicalRouter#route_ageout_time}
  */
  readonly routeAgeoutTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#rp LogicalRouter#rp}
  */
  readonly rp?: LogicalRouterVrfMulticastPimRp;
  /**
  * RPF Lookup Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#rpf_lookup_mode LogicalRouter#rpf_lookup_mode}
  */
  readonly rpfLookupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#spt_threshold LogicalRouter#spt_threshold}
  */
  readonly sptThreshold?: LogicalRouterVrfMulticastPimSptThreshold[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ssm_address_space LogicalRouter#ssm_address_space}
  */
  readonly ssmAddressSpace?: LogicalRouterVrfMulticastPimSsmAddressSpace;
}

export function logicalRouterVrfMulticastPimToTerraform(struct?: LogicalRouterVrfMulticastPim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_permission: cdktf.stringToTerraform(struct!.groupPermission),
    if_timer_global: cdktf.stringToTerraform(struct!.ifTimerGlobal),
    interface: cdktf.listMapper(logicalRouterVrfMulticastPimInterfaceToTerraform, false)(struct!.interface),
    route_ageout_time: cdktf.numberToTerraform(struct!.routeAgeoutTime),
    rp: logicalRouterVrfMulticastPimRpToTerraform(struct!.rp),
    rpf_lookup_mode: cdktf.stringToTerraform(struct!.rpfLookupMode),
    spt_threshold: cdktf.listMapper(logicalRouterVrfMulticastPimSptThresholdToTerraform, false)(struct!.sptThreshold),
    ssm_address_space: logicalRouterVrfMulticastPimSsmAddressSpaceToTerraform(struct!.ssmAddressSpace),
  }
}


export function logicalRouterVrfMulticastPimToHclTerraform(struct?: LogicalRouterVrfMulticastPim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_permission: {
      value: cdktf.stringToHclTerraform(struct!.groupPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_timer_global: {
      value: cdktf.stringToHclTerraform(struct!.ifTimerGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(logicalRouterVrfMulticastPimInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfMulticastPimInterfaceList",
    },
    route_ageout_time: {
      value: cdktf.numberToHclTerraform(struct!.routeAgeoutTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp: {
      value: logicalRouterVrfMulticastPimRpToHclTerraform(struct!.rp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastPimRp",
    },
    rpf_lookup_mode: {
      value: cdktf.stringToHclTerraform(struct!.rpfLookupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spt_threshold: {
      value: cdktf.listMapperHcl(logicalRouterVrfMulticastPimSptThresholdToHclTerraform, false)(struct!.sptThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfMulticastPimSptThresholdList",
    },
    ssm_address_space: {
      value: logicalRouterVrfMulticastPimSsmAddressSpaceToHclTerraform(struct!.ssmAddressSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastPimSsmAddressSpace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastPimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastPim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._groupPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPermission = this._groupPermission;
    }
    if (this._ifTimerGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifTimerGlobal = this._ifTimerGlobal;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._routeAgeoutTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAgeoutTime = this._routeAgeoutTime;
    }
    if (this._rp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rp = this._rp?.internalValue;
    }
    if (this._rpfLookupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpfLookupMode = this._rpfLookupMode;
    }
    if (this._sptThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sptThreshold = this._sptThreshold?.internalValue;
    }
    if (this._ssmAddressSpace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmAddressSpace = this._ssmAddressSpace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastPim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._groupPermission = undefined;
      this._ifTimerGlobal = undefined;
      this._interface.internalValue = undefined;
      this._routeAgeoutTime = undefined;
      this._rp.internalValue = undefined;
      this._rpfLookupMode = undefined;
      this._sptThreshold.internalValue = undefined;
      this._ssmAddressSpace.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._groupPermission = value.groupPermission;
      this._ifTimerGlobal = value.ifTimerGlobal;
      this._interface.internalValue = value.interface;
      this._routeAgeoutTime = value.routeAgeoutTime;
      this._rp.internalValue = value.rp;
      this._rpfLookupMode = value.rpfLookupMode;
      this._sptThreshold.internalValue = value.sptThreshold;
      this._ssmAddressSpace.internalValue = value.ssmAddressSpace;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // group_permission - computed: false, optional: true, required: false
  private _groupPermission?: string; 
  public get groupPermission() {
    return this.getStringAttribute('group_permission');
  }
  public set groupPermission(value: string) {
    this._groupPermission = value;
  }
  public resetGroupPermission() {
    this._groupPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPermissionInput() {
    return this._groupPermission;
  }

  // if_timer_global - computed: false, optional: true, required: false
  private _ifTimerGlobal?: string; 
  public get ifTimerGlobal() {
    return this.getStringAttribute('if_timer_global');
  }
  public set ifTimerGlobal(value: string) {
    this._ifTimerGlobal = value;
  }
  public resetIfTimerGlobal() {
    this._ifTimerGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifTimerGlobalInput() {
    return this._ifTimerGlobal;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new LogicalRouterVrfMulticastPimInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfMulticastPimInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // route_ageout_time - computed: true, optional: true, required: false
  private _routeAgeoutTime?: number; 
  public get routeAgeoutTime() {
    return this.getNumberAttribute('route_ageout_time');
  }
  public set routeAgeoutTime(value: number) {
    this._routeAgeoutTime = value;
  }
  public resetRouteAgeoutTime() {
    this._routeAgeoutTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAgeoutTimeInput() {
    return this._routeAgeoutTime;
  }

  // rp - computed: false, optional: true, required: false
  private _rp = new LogicalRouterVrfMulticastPimRpOutputReference(this, "rp");
  public get rp() {
    return this._rp;
  }
  public putRp(value: LogicalRouterVrfMulticastPimRp) {
    this._rp.internalValue = value;
  }
  public resetRp() {
    this._rp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpInput() {
    return this._rp.internalValue;
  }

  // rpf_lookup_mode - computed: true, optional: true, required: false
  private _rpfLookupMode?: string; 
  public get rpfLookupMode() {
    return this.getStringAttribute('rpf_lookup_mode');
  }
  public set rpfLookupMode(value: string) {
    this._rpfLookupMode = value;
  }
  public resetRpfLookupMode() {
    this._rpfLookupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpfLookupModeInput() {
    return this._rpfLookupMode;
  }

  // spt_threshold - computed: false, optional: true, required: false
  private _sptThreshold = new LogicalRouterVrfMulticastPimSptThresholdList(this, "spt_threshold", false);
  public get sptThreshold() {
    return this._sptThreshold;
  }
  public putSptThreshold(value: LogicalRouterVrfMulticastPimSptThreshold[] | cdktf.IResolvable) {
    this._sptThreshold.internalValue = value;
  }
  public resetSptThreshold() {
    this._sptThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdInput() {
    return this._sptThreshold.internalValue;
  }

  // ssm_address_space - computed: false, optional: true, required: false
  private _ssmAddressSpace = new LogicalRouterVrfMulticastPimSsmAddressSpaceOutputReference(this, "ssm_address_space");
  public get ssmAddressSpace() {
    return this._ssmAddressSpace;
  }
  public putSsmAddressSpace(value: LogicalRouterVrfMulticastPimSsmAddressSpace) {
    this._ssmAddressSpace.internalValue = value;
  }
  public resetSsmAddressSpace() {
    this._ssmAddressSpace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmAddressSpaceInput() {
    return this._ssmAddressSpace.internalValue;
  }
}
export interface LogicalRouterVrfMulticastStaticRouteNexthop {
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip_address LogicalRouter#ip_address}
  */
  readonly ipAddress?: string;
}

export function logicalRouterVrfMulticastStaticRouteNexthopToTerraform(struct?: LogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function logicalRouterVrfMulticastStaticRouteNexthopToHclTerraform(struct?: LogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}
export interface LogicalRouterVrfMulticastStaticRoute {
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#nexthop LogicalRouter#nexthop}
  */
  readonly nexthop?: LogicalRouterVrfMulticastStaticRouteNexthop;
  /**
  * administrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#preference LogicalRouter#preference}
  */
  readonly preference?: number;
}

export function logicalRouterVrfMulticastStaticRouteToTerraform(struct?: LogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: logicalRouterVrfMulticastStaticRouteNexthopToTerraform(struct!.nexthop),
    preference: cdktf.numberToTerraform(struct!.preference),
  }
}


export function logicalRouterVrfMulticastStaticRouteToHclTerraform(struct?: LogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop: {
      value: logicalRouterVrfMulticastStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastStaticRouteNexthop",
    },
    preference: {
      value: cdktf.numberToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._name = undefined;
      this._nexthop.internalValue = undefined;
      this._preference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination = value.destination;
      this._interface = value.interface;
      this._name = value.name;
      this._nexthop.internalValue = value.nexthop;
      this._preference = value.preference;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // interface - computed: false, optional: true, required: false
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new LogicalRouterVrfMulticastStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: LogicalRouterVrfMulticastStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }
}

export class LogicalRouterVrfMulticastStaticRouteList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfMulticastStaticRoute[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfMulticastStaticRouteOutputReference {
    return new LogicalRouterVrfMulticastStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfMulticast {
  /**
  * enable multicast protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#igmp LogicalRouter#igmp}
  */
  readonly igmp?: LogicalRouterVrfMulticastIgmp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#msdp LogicalRouter#msdp}
  */
  readonly msdp?: LogicalRouterVrfMulticastMsdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#pim LogicalRouter#pim}
  */
  readonly pim?: LogicalRouterVrfMulticastPim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static_route LogicalRouter#static_route}
  */
  readonly staticRoute?: LogicalRouterVrfMulticastStaticRoute[] | cdktf.IResolvable;
}

export function logicalRouterVrfMulticastToTerraform(struct?: LogicalRouterVrfMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    igmp: logicalRouterVrfMulticastIgmpToTerraform(struct!.igmp),
    msdp: logicalRouterVrfMulticastMsdpToTerraform(struct!.msdp),
    pim: logicalRouterVrfMulticastPimToTerraform(struct!.pim),
    static_route: cdktf.listMapper(logicalRouterVrfMulticastStaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function logicalRouterVrfMulticastToHclTerraform(struct?: LogicalRouterVrfMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    igmp: {
      value: logicalRouterVrfMulticastIgmpToHclTerraform(struct!.igmp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastIgmp",
    },
    msdp: {
      value: logicalRouterVrfMulticastMsdpToHclTerraform(struct!.msdp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastMsdp",
    },
    pim: {
      value: logicalRouterVrfMulticastPimToHclTerraform(struct!.pim),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticastPim",
    },
    static_route: {
      value: cdktf.listMapperHcl(logicalRouterVrfMulticastStaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfMulticastStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._igmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmp = this._igmp?.internalValue;
    }
    if (this._msdp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msdp = this._msdp?.internalValue;
    }
    if (this._pim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pim = this._pim?.internalValue;
    }
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfMulticast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._igmp.internalValue = undefined;
      this._msdp.internalValue = undefined;
      this._pim.internalValue = undefined;
      this._staticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._igmp.internalValue = value.igmp;
      this._msdp.internalValue = value.msdp;
      this._pim.internalValue = value.pim;
      this._staticRoute.internalValue = value.staticRoute;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // igmp - computed: false, optional: true, required: false
  private _igmp = new LogicalRouterVrfMulticastIgmpOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }
  public putIgmp(value: LogicalRouterVrfMulticastIgmp) {
    this._igmp.internalValue = value;
  }
  public resetIgmp() {
    this._igmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpInput() {
    return this._igmp.internalValue;
  }

  // msdp - computed: false, optional: true, required: false
  private _msdp = new LogicalRouterVrfMulticastMsdpOutputReference(this, "msdp");
  public get msdp() {
    return this._msdp;
  }
  public putMsdp(value: LogicalRouterVrfMulticastMsdp) {
    this._msdp.internalValue = value;
  }
  public resetMsdp() {
    this._msdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msdpInput() {
    return this._msdp.internalValue;
  }

  // pim - computed: false, optional: true, required: false
  private _pim = new LogicalRouterVrfMulticastPimOutputReference(this, "pim");
  public get pim() {
    return this._pim;
  }
  public putPim(value: LogicalRouterVrfMulticastPim) {
    this._pim.internalValue = value;
  }
  public resetPim() {
    this._pim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimInput() {
    return this._pim.internalValue;
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new LogicalRouterVrfMulticastStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: LogicalRouterVrfMulticastStaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }
}
export interface LogicalRouterVrfOspfAreaInterfaceBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfAreaInterfaceBfdToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfAreaInterfaceBfdToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast {
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Neighbor priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#neighbor LogicalRouter#neighbor}
  */
  readonly neighbor?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neighbor: cdktf.listMapper(logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform, false)(struct!.neighbor),
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neighbor: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = value.neighbor;
    }
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}
export interface LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P {
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfAreaInterfaceLinkType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#broadcast LogicalRouter#broadcast}
  */
  readonly broadcast?: LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#p2mp LogicalRouter#p2mp}
  */
  readonly p2Mp?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#p2p LogicalRouter#p2p}
  */
  readonly p2P?: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P;
}

export function logicalRouterVrfOspfAreaInterfaceLinkTypeToTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function logicalRouterVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast?.internalValue;
    }
    if (this._p2Mp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2Mp = this._p2Mp?.internalValue;
    }
    if (this._p2P?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2P = this._p2P?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcast.internalValue = undefined;
      this._p2Mp.internalValue = undefined;
      this._p2P.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcast.internalValue = value.broadcast;
      this._p2Mp.internalValue = value.p2Mp;
      this._p2P.internalValue = value.p2P;
    }
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast = new LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast) {
    this._broadcast.internalValue = value;
  }
  public resetBroadcast() {
    this._broadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast.internalValue;
  }

  // p2mp - computed: false, optional: true, required: false
  private _p2Mp = new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp) {
    this._p2Mp.internalValue = value;
  }
  public resetP2Mp() {
    this._p2Mp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpInput() {
    return this._p2Mp.internalValue;
  }

  // p2p - computed: false, optional: true, required: false
  private _p2P = new LogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: LogicalRouterVrfOspfAreaInterfaceLinkTypeP2P) {
    this._p2P.internalValue = value;
  }
  public resetP2P() {
    this._p2P.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PInput() {
    return this._p2P.internalValue;
  }
}
export interface LogicalRouterVrfOspfAreaInterface {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfOspfAreaInterfaceBfd;
  /**
  * Enable OSPF on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#link_type LogicalRouter#link_type}
  */
  readonly linkType?: LogicalRouterVrfOspfAreaInterfaceLinkType;
  /**
  * Cost of OSPF interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Ignore mtu when try to establish adjacency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#mtu_ignore LogicalRouter#mtu_ignore}
  */
  readonly mtuIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Suppress the sending of hello packets in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority for OSPF designated router selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
}

export function logicalRouterVrfOspfAreaInterfaceToTerraform(struct?: LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfOspfAreaInterfaceBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    link_type: logicalRouterVrfOspfAreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    mtu_ignore: cdktf.booleanToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    timing: cdktf.stringToTerraform(struct!.timing),
  }
}


export function logicalRouterVrfOspfAreaInterfaceToHclTerraform(struct?: LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: logicalRouterVrfOspfAreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_type: {
      value: logicalRouterVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceLinkType",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.booleanToHclTerraform(struct!.mtuIgnore),
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
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._linkType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._linkType.internalValue = undefined;
      this._metric = undefined;
      this._mtuIgnore = undefined;
      this._name = undefined;
      this._passive = undefined;
      this._priority = undefined;
      this._timing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._bfd.internalValue = value.bfd;
      this._enable = value.enable;
      this._linkType.internalValue = value.linkType;
      this._metric = value.metric;
      this._mtuIgnore = value.mtuIgnore;
      this._name = value.name;
      this._passive = value.passive;
      this._priority = value.priority;
      this._timing = value.timing;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfOspfAreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfOspfAreaInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType = new LogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: LogicalRouterVrfOspfAreaInterfaceLinkType) {
    this._linkType.internalValue = value;
  }
  public resetLinkType() {
    this._linkType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType.internalValue;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: boolean | cdktf.IResolvable; 
  public get mtuIgnore() {
    return this.getBooleanAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: boolean | cdktf.IResolvable) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
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

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }
}

export class LogicalRouterVrfOspfAreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaInterfaceOutputReference {
    return new LogicalRouterVrfOspfAreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
}

export function logicalRouterVrfOspfAreaRangeToTerraform(struct?: LogicalRouterVrfOspfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logicalRouterVrfOspfAreaRangeToHclTerraform(struct?: LogicalRouterVrfOspfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._name = value.name;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

export class LogicalRouterVrfOspfAreaRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaRangeOutputReference {
    return new LogicalRouterVrfOspfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaTypeNormalAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfAreaTypeNormalAbrToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfAreaTypeNormalAbrToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNormal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfAreaTypeNormalAbr;
}

export function logicalRouterVrfOspfAreaTypeNormalToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfAreaTypeNormalAbrToTerraform(struct!.abr),
  }
}


export function logicalRouterVrfOspfAreaTypeNormalToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfAreaTypeNormalAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNormalAbr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfAreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfAreaTypeNormalAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
}

export function logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._name = value.name;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

export class LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference {
    return new LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssaAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#nssa_ext_range LogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfAreaTypeNssaAbrToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    nssa_ext_range: cdktf.listMapper(logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaAbrToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._nssaExtRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaExtRange = this._nssaExtRange?.internalValue;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._nssaExtRange.internalValue = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._nssaExtRange.internalValue = value.nssaExtRange;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // nssa_ext_range - computed: false, optional: true, required: false
  private _nssaExtRange = new LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: LogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable) {
    this._nssaExtRange.internalValue = value;
  }
  public resetNssaExtRange() {
    this._nssaExtRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaExtRangeInput() {
    return this._nssaExtRange.internalValue;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * metric type to be used when redistribute default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric_type LogicalRouter#metric_type}
  */
  readonly metricType?: string;
}

export function logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }
}
export interface LogicalRouterVrfOspfAreaTypeNssa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfAreaTypeNssaAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#default_information_originate LogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaTypeNssaToTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfAreaTypeNssaAbrToTerraform(struct!.abr),
    default_information_originate: logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct!.defaultInformationOriginate),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function logicalRouterVrfOspfAreaTypeNssaToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfAreaTypeNssaAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaAbr",
    },
    default_information_originate: {
      value: logicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._defaultInformationOriginate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate?.internalValue;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._defaultInformationOriginate.internalValue = undefined;
      this._noSummary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._defaultInformationOriginate.internalValue = value.defaultInformationOriginate;
      this._noSummary = value.noSummary;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfAreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfAreaTypeNssaAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate = new LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }
  public putDefaultInformationOriginate(value: LogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate) {
    this._defaultInformationOriginate.internalValue = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate.internalValue;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }
}
export interface LogicalRouterVrfOspfAreaTypeStubAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfAreaTypeStubAbrToTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfAreaTypeStubAbrToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfAreaTypeStub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfAreaTypeStubAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#default_route_metric LogicalRouter#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaTypeStubToTerraform(struct?: LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfAreaTypeStubAbrToTerraform(struct!.abr),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function logicalRouterVrfOspfAreaTypeStubToHclTerraform(struct?: LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfAreaTypeStubAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeStubAbr",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._defaultRouteMetric = undefined;
      this._noSummary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._noSummary = value.noSummary;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfAreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfAreaTypeStubAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }

  // default_route_metric - computed: true, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }
}
export interface LogicalRouterVrfOspfAreaType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#normal LogicalRouter#normal}
  */
  readonly normal?: LogicalRouterVrfOspfAreaTypeNormal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#nssa LogicalRouter#nssa}
  */
  readonly nssa?: LogicalRouterVrfOspfAreaTypeNssa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#stub LogicalRouter#stub}
  */
  readonly stub?: LogicalRouterVrfOspfAreaTypeStub;
}

export function logicalRouterVrfOspfAreaTypeToTerraform(struct?: LogicalRouterVrfOspfAreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: logicalRouterVrfOspfAreaTypeNormalToTerraform(struct!.normal),
    nssa: logicalRouterVrfOspfAreaTypeNssaToTerraform(struct!.nssa),
    stub: logicalRouterVrfOspfAreaTypeStubToTerraform(struct!.stub),
  }
}


export function logicalRouterVrfOspfAreaTypeToHclTerraform(struct?: LogicalRouterVrfOspfAreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: logicalRouterVrfOspfAreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNormal",
    },
    nssa: {
      value: logicalRouterVrfOspfAreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeNssa",
    },
    stub: {
      value: logicalRouterVrfOspfAreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._normal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal?.internalValue;
    }
    if (this._nssa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssa = this._nssa?.internalValue;
    }
    if (this._stub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._normal.internalValue = undefined;
      this._nssa.internalValue = undefined;
      this._stub.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._normal.internalValue = value.normal;
      this._nssa.internalValue = value.nssa;
      this._stub.internalValue = value.stub;
    }
  }

  // normal - computed: false, optional: true, required: false
  private _normal = new LogicalRouterVrfOspfAreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: LogicalRouterVrfOspfAreaTypeNormal) {
    this._normal.internalValue = value;
  }
  public resetNormal() {
    this._normal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal.internalValue;
  }

  // nssa - computed: false, optional: true, required: false
  private _nssa = new LogicalRouterVrfOspfAreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: LogicalRouterVrfOspfAreaTypeNssa) {
    this._nssa.internalValue = value;
  }
  public resetNssa() {
    this._nssa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa.internalValue;
  }

  // stub - computed: false, optional: true, required: false
  private _stub = new LogicalRouterVrfOspfAreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: LogicalRouterVrfOspfAreaTypeStub) {
    this._stub.internalValue = value;
  }
  public resetStub() {
    this._stub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub.internalValue;
  }
}
export interface LogicalRouterVrfOspfAreaVirtualLinkBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfAreaVirtualLinkBfdToTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfAreaVirtualLinkBfdToHclTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfOspfAreaVirtualLink {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfOspfAreaVirtualLinkBfd;
  /**
  * Enable this virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * OSPF instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#instance_id LogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * neighbor router id for virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#neighbor_id LogicalRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * id of transit area, cannot be backbone, stub or NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#transit_area_id LogicalRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
}

export function logicalRouterVrfOspfAreaVirtualLinkToTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfOspfAreaVirtualLinkBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor_id: cdktf.stringToTerraform(struct!.neighborId),
    timing: cdktf.stringToTerraform(struct!.timing),
    transit_area_id: cdktf.stringToTerraform(struct!.transitAreaId),
  }
}


export function logicalRouterVrfOspfAreaVirtualLinkToHclTerraform(struct?: LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: logicalRouterVrfOspfAreaVirtualLinkBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaVirtualLinkBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_id: {
      value: cdktf.stringToHclTerraform(struct!.neighborId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_area_id: {
      value: cdktf.stringToHclTerraform(struct!.transitAreaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighborId !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborId = this._neighborId;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._transitAreaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitAreaId = this._transitAreaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._instanceId = undefined;
      this._name = undefined;
      this._neighborId = undefined;
      this._timing = undefined;
      this._transitAreaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._bfd.internalValue = value.bfd;
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._name = value.name;
      this._neighborId = value.neighborId;
      this._timing = value.timing;
      this._transitAreaId = value.transitAreaId;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfOspfAreaVirtualLinkBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // neighbor_id - computed: false, optional: true, required: false
  private _neighborId?: string; 
  public get neighborId() {
    return this.getStringAttribute('neighbor_id');
  }
  public set neighborId(value: string) {
    this._neighborId = value;
  }
  public resetNeighborId() {
    this._neighborId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborIdInput() {
    return this._neighborId;
  }

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }

  // transit_area_id - computed: false, optional: true, required: false
  private _transitAreaId?: string; 
  public get transitAreaId() {
    return this.getStringAttribute('transit_area_id');
  }
  public set transitAreaId(value: string) {
    this._transitAreaId = value;
  }
  public resetTransitAreaId() {
    this._transitAreaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitAreaIdInput() {
    return this._transitAreaId;
  }
}

export class LogicalRouterVrfOspfAreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaVirtualLinkOutputReference {
    return new LogicalRouterVrfOspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfArea {
  /**
  * Authentication profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#range LogicalRouter#range}
  */
  readonly range?: LogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: LogicalRouterVrfOspfAreaType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#virtual_link LogicalRouter#virtual_link}
  */
  readonly virtualLink?: LogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfAreaToTerraform(struct?: LogicalRouterVrfOspfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(logicalRouterVrfOspfAreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(logicalRouterVrfOspfAreaRangeToTerraform, false)(struct!.range),
    type: logicalRouterVrfOspfAreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(logicalRouterVrfOspfAreaVirtualLinkToTerraform, false)(struct!.virtualLink),
  }
}


export function logicalRouterVrfOspfAreaToHclTerraform(struct?: LogicalRouterVrfOspfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaRangeList",
    },
    type: {
      value: logicalRouterVrfOspfAreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfAreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfArea | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._virtualLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLink = this._virtualLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfArea | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._interface.internalValue = undefined;
      this._name = undefined;
      this._range.internalValue = undefined;
      this._type.internalValue = undefined;
      this._virtualLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._interface.internalValue = value.interface;
      this._name = value.name;
      this._range.internalValue = value.range;
      this._type.internalValue = value.type;
      this._virtualLink.internalValue = value.virtualLink;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new LogicalRouterVrfOspfAreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
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

  // range - computed: false, optional: true, required: false
  private _range = new LogicalRouterVrfOspfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: LogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new LogicalRouterVrfOspfAreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: LogicalRouterVrfOspfAreaType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // virtual_link - computed: false, optional: true, required: false
  private _virtualLink = new LogicalRouterVrfOspfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: LogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }
}

export class LogicalRouterVrfOspfAreaList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfArea[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfAreaOutputReference {
    return new LogicalRouterVrfOspfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfGlobalBfdToTerraform(struct?: LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfGlobalBfdToHclTerraform(struct?: LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfOspfGracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * maximum local restarting time (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#grace_period LogicalRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * enable/disable helping neighboring routers to graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#helper_enable LogicalRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * maximum of neighbor restart time accepted (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#max_neighbor_restart_time LogicalRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * enable/disable strict LSA checking. Abort GR if lsa change is detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#strict_lsa_checking LogicalRouter#strict_lsa_checking}
  */
  readonly strictLsaChecking?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfGracefulRestartToTerraform(struct?: LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    helper_enable: cdktf.booleanToTerraform(struct!.helperEnable),
    max_neighbor_restart_time: cdktf.numberToTerraform(struct!.maxNeighborRestartTime),
    strict_lsa_checking: cdktf.booleanToTerraform(struct!.strictLsaChecking),
  }
}


export function logicalRouterVrfOspfGracefulRestartToHclTerraform(struct?: LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    helper_enable: {
      value: cdktf.booleanToHclTerraform(struct!.helperEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_neighbor_restart_time: {
      value: cdktf.numberToHclTerraform(struct!.maxNeighborRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_lsa_checking: {
      value: cdktf.booleanToHclTerraform(struct!.strictLsaChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._helperEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperEnable = this._helperEnable;
    }
    if (this._maxNeighborRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNeighborRestartTime = this._maxNeighborRestartTime;
    }
    if (this._strictLsaChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLsaChecking = this._strictLsaChecking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._gracePeriod = undefined;
      this._helperEnable = undefined;
      this._maxNeighborRestartTime = undefined;
      this._strictLsaChecking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._gracePeriod = value.gracePeriod;
      this._helperEnable = value.helperEnable;
      this._maxNeighborRestartTime = value.maxNeighborRestartTime;
      this._strictLsaChecking = value.strictLsaChecking;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // helper_enable - computed: false, optional: true, required: false
  private _helperEnable?: boolean | cdktf.IResolvable; 
  public get helperEnable() {
    return this.getBooleanAttribute('helper_enable');
  }
  public set helperEnable(value: boolean | cdktf.IResolvable) {
    this._helperEnable = value;
  }
  public resetHelperEnable() {
    this._helperEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperEnableInput() {
    return this._helperEnable;
  }

  // max_neighbor_restart_time - computed: true, optional: true, required: false
  private _maxNeighborRestartTime?: number; 
  public get maxNeighborRestartTime() {
    return this.getNumberAttribute('max_neighbor_restart_time');
  }
  public set maxNeighborRestartTime(value: number) {
    this._maxNeighborRestartTime = value;
  }
  public resetMaxNeighborRestartTime() {
    this._maxNeighborRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborRestartTimeInput() {
    return this._maxNeighborRestartTime;
  }

  // strict_lsa_checking - computed: false, optional: true, required: false
  private _strictLsaChecking?: boolean | cdktf.IResolvable; 
  public get strictLsaChecking() {
    return this.getBooleanAttribute('strict_lsa_checking');
  }
  public set strictLsaChecking(value: boolean | cdktf.IResolvable) {
    this._strictLsaChecking = value;
  }
  public resetStrictLsaChecking() {
    this._strictLsaChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLsaCheckingInput() {
    return this._strictLsaChecking;
  }
}
export interface LogicalRouterVrfOspf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#area LogicalRouter#area}
  */
  readonly area?: LogicalRouterVrfOspfArea[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_bfd LogicalRouter#global_bfd}
  */
  readonly globalBfd?: LogicalRouterVrfOspfGlobalBfd;
  /**
  * Global protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_if_timer LogicalRouter#global_if_timer}
  */
  readonly globalIfTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#graceful_restart LogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: LogicalRouterVrfOspfGracefulRestart;
  /**
  * Redistribution profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#redistribution_profile LogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
  /**
  * rfc-1583 compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#rfc1583 LogicalRouter#rfc1583}
  */
  readonly rfc1583?: boolean | cdktf.IResolvable;
  /**
  * router id of this OSPF instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#router_id LogicalRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * SPF timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#spf_timer LogicalRouter#spf_timer}
  */
  readonly spfTimer?: string;
}

export function logicalRouterVrfOspfToTerraform(struct?: LogicalRouterVrfOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.listMapper(logicalRouterVrfOspfAreaToTerraform, false)(struct!.area),
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_bfd: logicalRouterVrfOspfGlobalBfdToTerraform(struct!.globalBfd),
    global_if_timer: cdktf.stringToTerraform(struct!.globalIfTimer),
    graceful_restart: logicalRouterVrfOspfGracefulRestartToTerraform(struct!.gracefulRestart),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
    rfc1583: cdktf.booleanToTerraform(struct!.rfc1583),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    spf_timer: cdktf.stringToTerraform(struct!.spfTimer),
  }
}


export function logicalRouterVrfOspfToHclTerraform(struct?: LogicalRouterVrfOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfAreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfAreaList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_bfd: {
      value: logicalRouterVrfOspfGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfGlobalBfd",
    },
    global_if_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalIfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart: {
      value: logicalRouterVrfOspfGracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfGracefulRestart",
    },
    redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.redistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rfc1583: {
      value: cdktf.booleanToHclTerraform(struct!.rfc1583),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spf_timer: {
      value: cdktf.stringToHclTerraform(struct!.spfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._globalIfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalIfTimer = this._globalIfTimer;
    }
    if (this._gracefulRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart?.internalValue;
    }
    if (this._redistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionProfile = this._redistributionProfile;
    }
    if (this._rfc1583 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfc1583 = this._rfc1583;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._spfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.spfTimer = this._spfTimer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area.internalValue = undefined;
      this._enable = undefined;
      this._globalBfd.internalValue = undefined;
      this._globalIfTimer = undefined;
      this._gracefulRestart.internalValue = undefined;
      this._redistributionProfile = undefined;
      this._rfc1583 = undefined;
      this._routerId = undefined;
      this._spfTimer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area.internalValue = value.area;
      this._enable = value.enable;
      this._globalBfd.internalValue = value.globalBfd;
      this._globalIfTimer = value.globalIfTimer;
      this._gracefulRestart.internalValue = value.gracefulRestart;
      this._redistributionProfile = value.redistributionProfile;
      this._rfc1583 = value.rfc1583;
      this._routerId = value.routerId;
      this._spfTimer = value.spfTimer;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area = new LogicalRouterVrfOspfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: LogicalRouterVrfOspfArea[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new LogicalRouterVrfOspfGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: LogicalRouterVrfOspfGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_if_timer - computed: false, optional: true, required: false
  private _globalIfTimer?: string; 
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }
  public set globalIfTimer(value: string) {
    this._globalIfTimer = value;
  }
  public resetGlobalIfTimer() {
    this._globalIfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalIfTimerInput() {
    return this._globalIfTimer;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new LogicalRouterVrfOspfGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: LogicalRouterVrfOspfGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // redistribution_profile - computed: false, optional: true, required: false
  private _redistributionProfile?: string; 
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
  public set redistributionProfile(value: string) {
    this._redistributionProfile = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile;
  }

  // rfc1583 - computed: false, optional: true, required: false
  private _rfc1583?: boolean | cdktf.IResolvable; 
  public get rfc1583() {
    return this.getBooleanAttribute('rfc1583');
  }
  public set rfc1583(value: boolean | cdktf.IResolvable) {
    this._rfc1583 = value;
  }
  public resetRfc1583() {
    this._rfc1583 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfc1583Input() {
    return this._rfc1583;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // spf_timer - computed: false, optional: true, required: false
  private _spfTimer?: string; 
  public get spfTimer() {
    return this.getStringAttribute('spf_timer');
  }
  public set spfTimer(value: string) {
    this._spfTimer = value;
  }
  public resetSpfTimer() {
    this._spfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfTimerInput() {
    return this._spfTimer;
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfv3AreaInterfaceBfdToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceBfdToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast {
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Neighbor priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#neighbor LogicalRouter#neighbor}
  */
  readonly neighbor?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neighbor: cdktf.listMapper(logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform, false)(struct!.neighbor),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neighbor: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._neighbor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighbor = this._neighbor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._neighbor.internalValue = value.neighbor;
    }
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }
}
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P {
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfOspfv3AreaInterfaceLinkType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#broadcast LogicalRouter#broadcast}
  */
  readonly broadcast?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#p2mp LogicalRouter#p2mp}
  */
  readonly p2Mp?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#p2p LogicalRouter#p2p}
  */
  readonly p2P?: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P;
}

export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast?.internalValue;
    }
    if (this._p2Mp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2Mp = this._p2Mp?.internalValue;
    }
    if (this._p2P?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2P = this._p2P?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._broadcast.internalValue = undefined;
      this._p2Mp.internalValue = undefined;
      this._p2P.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._broadcast.internalValue = value.broadcast;
      this._p2Mp.internalValue = value.p2Mp;
      this._p2P.internalValue = value.p2P;
    }
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast) {
    this._broadcast.internalValue = value;
  }
  public resetBroadcast() {
    this._broadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast.internalValue;
  }

  // p2mp - computed: false, optional: true, required: false
  private _p2Mp = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp) {
    this._p2Mp.internalValue = value;
  }
  public resetP2Mp() {
    this._p2Mp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpInput() {
    return this._p2Mp.internalValue;
  }

  // p2p - computed: false, optional: true, required: false
  private _p2P = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: LogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P) {
    this._p2P.internalValue = value;
  }
  public resetP2P() {
    this._p2P.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PInput() {
    return this._p2P.internalValue;
  }
}
export interface LogicalRouterVrfOspfv3AreaInterface {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfOspfv3AreaInterfaceBfd;
  /**
  * Enable OSPF in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#instance_id LogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#link_type LogicalRouter#link_type}
  */
  readonly linkType?: LogicalRouterVrfOspfv3AreaInterfaceLinkType;
  /**
  * Cost of OSPF interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Ignore mtu when try to establish adjacency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#mtu_ignore LogicalRouter#mtu_ignore}
  */
  readonly mtuIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Suppress the sending of hello packets in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#passive LogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority for OSPF designated router selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#priority LogicalRouter#priority}
  */
  readonly priority?: number;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
}

export function logicalRouterVrfOspfv3AreaInterfaceToTerraform(struct?: LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfOspfv3AreaInterfaceBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    link_type: logicalRouterVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    mtu_ignore: cdktf.booleanToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    timing: cdktf.stringToTerraform(struct!.timing),
  }
}


export function logicalRouterVrfOspfv3AreaInterfaceToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: logicalRouterVrfOspfv3AreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_type: {
      value: logicalRouterVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceLinkType",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.booleanToHclTerraform(struct!.mtuIgnore),
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
    passive: {
      value: cdktf.booleanToHclTerraform(struct!.passive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._linkType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passive !== undefined) {
      hasAnyValues = true;
      internalValueResult.passive = this._passive;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._instanceId = undefined;
      this._linkType.internalValue = undefined;
      this._metric = undefined;
      this._mtuIgnore = undefined;
      this._name = undefined;
      this._passive = undefined;
      this._priority = undefined;
      this._timing = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._bfd.internalValue = value.bfd;
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._linkType.internalValue = value.linkType;
      this._metric = value.metric;
      this._mtuIgnore = value.mtuIgnore;
      this._name = value.name;
      this._passive = value.passive;
      this._priority = value.priority;
      this._timing = value.timing;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfOspfv3AreaInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // link_type - computed: false, optional: true, required: false
  private _linkType = new LogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: LogicalRouterVrfOspfv3AreaInterfaceLinkType) {
    this._linkType.internalValue = value;
  }
  public resetLinkType() {
    this._linkType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType.internalValue;
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: boolean | cdktf.IResolvable; 
  public get mtuIgnore() {
    return this.getBooleanAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: boolean | cdktf.IResolvable) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
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

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }
}

export class LogicalRouterVrfOspfv3AreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaInterfaceOutputReference {
    return new LogicalRouterVrfOspfv3AreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
}

export function logicalRouterVrfOspfv3AreaRangeToTerraform(struct?: LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logicalRouterVrfOspfv3AreaRangeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._name = value.name;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

export class LogicalRouterVrfOspfv3AreaRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaRangeOutputReference {
    return new LogicalRouterVrfOspfv3AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNormalAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfv3AreaTypeNormalAbrToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNormal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfv3AreaTypeNormalAbr;
}

export function logicalRouterVrfOspfv3AreaTypeNormalToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfv3AreaTypeNormalAbrToTerraform(struct!.abr),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNormalToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNormalAbr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfv3AreaTypeNormalAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#advertise LogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
}

export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise: {
      value: cdktf.booleanToHclTerraform(struct!.advertise),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertise = this._advertise;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertise = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertise = value.advertise;
      this._name = value.name;
    }
  }

  // advertise - computed: false, optional: true, required: false
  private _advertise?: boolean | cdktf.IResolvable; 
  public get advertise() {
    return this.getBooleanAttribute('advertise');
  }
  public set advertise(value: boolean | cdktf.IResolvable) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
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

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference {
    return new LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssaAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#nssa_ext_range LogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfv3AreaTypeNssaAbrToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    nssa_ext_range: cdktf.listMapper(logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nssa_ext_range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._nssaExtRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssaExtRange = this._nssaExtRange?.internalValue;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._nssaExtRange.internalValue = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._nssaExtRange.internalValue = value.nssaExtRange;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // nssa_ext_range - computed: false, optional: true, required: false
  private _nssaExtRange = new LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: LogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable) {
    this._nssaExtRange.internalValue = value;
  }
  public resetNssaExtRange() {
    this._nssaExtRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaExtRangeInput() {
    return this._nssaExtRange.internalValue;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * metric type to be used when redistribute default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric_type LogicalRouter#metric_type}
  */
  readonly metricType?: string;
}

export function logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._metricType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._metricType = value.metricType;
    }
  }

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_type - computed: true, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeNssa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfv3AreaTypeNssaAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#default_information_originate LogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaTypeNssaToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfv3AreaTypeNssaAbrToTerraform(struct!.abr),
    default_information_originate: logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct!.defaultInformationOriginate),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function logicalRouterVrfOspfv3AreaTypeNssaToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaAbr",
    },
    default_information_originate: {
      value: logicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._defaultInformationOriginate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate?.internalValue;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._defaultInformationOriginate.internalValue = undefined;
      this._noSummary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._defaultInformationOriginate.internalValue = value.defaultInformationOriginate;
      this._noSummary = value.noSummary;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfv3AreaTypeNssaAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate = new LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }
  public putDefaultInformationOriginate(value: LogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate) {
    this._defaultInformationOriginate.internalValue = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate.internalValue;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeStubAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#export_list LogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#import_list LogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#inbound_filter_list LogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#outbound_filter_list LogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function logicalRouterVrfOspfv3AreaTypeStubAbrToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function logicalRouterVrfOspfv3AreaTypeStubAbrToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    export_list: {
      value: cdktf.stringToHclTerraform(struct!.exportList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_list: {
      value: cdktf.stringToHclTerraform(struct!.importList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.inboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_filter_list: {
      value: cdktf.stringToHclTerraform(struct!.outboundFilterList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exportList !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportList = this._exportList;
    }
    if (this._importList !== undefined) {
      hasAnyValues = true;
      internalValueResult.importList = this._importList;
    }
    if (this._inboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFilterList = this._inboundFilterList;
    }
    if (this._outboundFilterList !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFilterList = this._outboundFilterList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exportList = undefined;
      this._importList = undefined;
      this._inboundFilterList = undefined;
      this._outboundFilterList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exportList = value.exportList;
      this._importList = value.importList;
      this._inboundFilterList = value.inboundFilterList;
      this._outboundFilterList = value.outboundFilterList;
    }
  }

  // export_list - computed: false, optional: true, required: false
  private _exportList?: string; 
  public get exportList() {
    return this.getStringAttribute('export_list');
  }
  public set exportList(value: string) {
    this._exportList = value;
  }
  public resetExportList() {
    this._exportList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportListInput() {
    return this._exportList;
  }

  // import_list - computed: false, optional: true, required: false
  private _importList?: string; 
  public get importList() {
    return this.getStringAttribute('import_list');
  }
  public set importList(value: string) {
    this._importList = value;
  }
  public resetImportList() {
    this._importList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importListInput() {
    return this._importList;
  }

  // inbound_filter_list - computed: false, optional: true, required: false
  private _inboundFilterList?: string; 
  public get inboundFilterList() {
    return this.getStringAttribute('inbound_filter_list');
  }
  public set inboundFilterList(value: string) {
    this._inboundFilterList = value;
  }
  public resetInboundFilterList() {
    this._inboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilterListInput() {
    return this._inboundFilterList;
  }

  // outbound_filter_list - computed: false, optional: true, required: false
  private _outboundFilterList?: string; 
  public get outboundFilterList() {
    return this.getStringAttribute('outbound_filter_list');
  }
  public set outboundFilterList(value: string) {
    this._outboundFilterList = value;
  }
  public resetOutboundFilterList() {
    this._outboundFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFilterListInput() {
    return this._outboundFilterList;
  }
}
export interface LogicalRouterVrfOspfv3AreaTypeStub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#abr LogicalRouter#abr}
  */
  readonly abr?: LogicalRouterVrfOspfv3AreaTypeStubAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#default_route_metric LogicalRouter#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#no_summary LogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaTypeStubToTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: logicalRouterVrfOspfv3AreaTypeStubAbrToTerraform(struct!.abr),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function logicalRouterVrfOspfv3AreaTypeStubToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: logicalRouterVrfOspfv3AreaTypeStubAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeStubAbr",
    },
    default_route_metric: {
      value: cdktf.numberToHclTerraform(struct!.defaultRouteMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_summary: {
      value: cdktf.booleanToHclTerraform(struct!.noSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.abr = this._abr?.internalValue;
    }
    if (this._defaultRouteMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRouteMetric = this._defaultRouteMetric;
    }
    if (this._noSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSummary = this._noSummary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abr.internalValue = undefined;
      this._defaultRouteMetric = undefined;
      this._noSummary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abr.internalValue = value.abr;
      this._defaultRouteMetric = value.defaultRouteMetric;
      this._noSummary = value.noSummary;
    }
  }

  // abr - computed: false, optional: true, required: false
  private _abr = new LogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: LogicalRouterVrfOspfv3AreaTypeStubAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }

  // default_route_metric - computed: true, optional: true, required: false
  private _defaultRouteMetric?: number; 
  public get defaultRouteMetric() {
    return this.getNumberAttribute('default_route_metric');
  }
  public set defaultRouteMetric(value: number) {
    this._defaultRouteMetric = value;
  }
  public resetDefaultRouteMetric() {
    this._defaultRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteMetricInput() {
    return this._defaultRouteMetric;
  }

  // no_summary - computed: false, optional: true, required: false
  private _noSummary?: boolean | cdktf.IResolvable; 
  public get noSummary() {
    return this.getBooleanAttribute('no_summary');
  }
  public set noSummary(value: boolean | cdktf.IResolvable) {
    this._noSummary = value;
  }
  public resetNoSummary() {
    this._noSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSummaryInput() {
    return this._noSummary;
  }
}
export interface LogicalRouterVrfOspfv3AreaType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#normal LogicalRouter#normal}
  */
  readonly normal?: LogicalRouterVrfOspfv3AreaTypeNormal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#nssa LogicalRouter#nssa}
  */
  readonly nssa?: LogicalRouterVrfOspfv3AreaTypeNssa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#stub LogicalRouter#stub}
  */
  readonly stub?: LogicalRouterVrfOspfv3AreaTypeStub;
}

export function logicalRouterVrfOspfv3AreaTypeToTerraform(struct?: LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: logicalRouterVrfOspfv3AreaTypeNormalToTerraform(struct!.normal),
    nssa: logicalRouterVrfOspfv3AreaTypeNssaToTerraform(struct!.nssa),
    stub: logicalRouterVrfOspfv3AreaTypeStubToTerraform(struct!.stub),
  }
}


export function logicalRouterVrfOspfv3AreaTypeToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: logicalRouterVrfOspfv3AreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNormal",
    },
    nssa: {
      value: logicalRouterVrfOspfv3AreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeNssa",
    },
    stub: {
      value: logicalRouterVrfOspfv3AreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._normal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normal = this._normal?.internalValue;
    }
    if (this._nssa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nssa = this._nssa?.internalValue;
    }
    if (this._stub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stub = this._stub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._normal.internalValue = undefined;
      this._nssa.internalValue = undefined;
      this._stub.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._normal.internalValue = value.normal;
      this._nssa.internalValue = value.nssa;
      this._stub.internalValue = value.stub;
    }
  }

  // normal - computed: false, optional: true, required: false
  private _normal = new LogicalRouterVrfOspfv3AreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: LogicalRouterVrfOspfv3AreaTypeNormal) {
    this._normal.internalValue = value;
  }
  public resetNormal() {
    this._normal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal.internalValue;
  }

  // nssa - computed: false, optional: true, required: false
  private _nssa = new LogicalRouterVrfOspfv3AreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: LogicalRouterVrfOspfv3AreaTypeNssa) {
    this._nssa.internalValue = value;
  }
  public resetNssa() {
    this._nssa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa.internalValue;
  }

  // stub - computed: false, optional: true, required: false
  private _stub = new LogicalRouterVrfOspfv3AreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: LogicalRouterVrfOspfv3AreaTypeStub) {
    this._stub.internalValue = value;
  }
  public resetStub() {
    this._stub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubInput() {
    return this._stub.internalValue;
  }
}
export interface LogicalRouterVrfOspfv3AreaVirtualLink {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Enable this virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#instance_id LogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * neighbor router id for virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#neighbor_id LogicalRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#timing LogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * id of transit area, cannot be backbone, stub or NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#transit_area_id LogicalRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
}

export function logicalRouterVrfOspfv3AreaVirtualLinkToTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor_id: cdktf.stringToTerraform(struct!.neighborId),
    timing: cdktf.stringToTerraform(struct!.timing),
    transit_area_id: cdktf.stringToTerraform(struct!.transitAreaId),
  }
}


export function logicalRouterVrfOspfv3AreaVirtualLinkToHclTerraform(struct?: LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    neighbor_id: {
      value: cdktf.stringToHclTerraform(struct!.neighborId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transit_area_id: {
      value: cdktf.stringToHclTerraform(struct!.transitAreaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._neighborId !== undefined) {
      hasAnyValues = true;
      internalValueResult.neighborId = this._neighborId;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._transitAreaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.transitAreaId = this._transitAreaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._enable = undefined;
      this._instanceId = undefined;
      this._name = undefined;
      this._neighborId = undefined;
      this._timing = undefined;
      this._transitAreaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._enable = value.enable;
      this._instanceId = value.instanceId;
      this._name = value.name;
      this._neighborId = value.neighborId;
      this._timing = value.timing;
      this._transitAreaId = value.transitAreaId;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // neighbor_id - computed: false, optional: true, required: false
  private _neighborId?: string; 
  public get neighborId() {
    return this.getStringAttribute('neighbor_id');
  }
  public set neighborId(value: string) {
    this._neighborId = value;
  }
  public resetNeighborId() {
    this._neighborId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborIdInput() {
    return this._neighborId;
  }

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }

  // transit_area_id - computed: false, optional: true, required: false
  private _transitAreaId?: string; 
  public get transitAreaId() {
    return this.getStringAttribute('transit_area_id');
  }
  public set transitAreaId(value: string) {
    this._transitAreaId = value;
  }
  public resetTransitAreaId() {
    this._transitAreaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitAreaIdInput() {
    return this._transitAreaId;
  }
}

export class LogicalRouterVrfOspfv3AreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaVirtualLinkOutputReference {
    return new LogicalRouterVrfOspfv3AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3Area {
  /**
  * Authentication profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: LogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#range LogicalRouter#range}
  */
  readonly range?: LogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#type LogicalRouter#type}
  */
  readonly type?: LogicalRouterVrfOspfv3AreaType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#virtual_link LogicalRouter#virtual_link}
  */
  readonly virtualLink?: LogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3AreaToTerraform(struct?: LogicalRouterVrfOspfv3Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(logicalRouterVrfOspfv3AreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(logicalRouterVrfOspfv3AreaRangeToTerraform, false)(struct!.range),
    type: logicalRouterVrfOspfv3AreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(logicalRouterVrfOspfv3AreaVirtualLinkToTerraform, false)(struct!.virtualLink),
  }
}


export function logicalRouterVrfOspfv3AreaToHclTerraform(struct?: LogicalRouterVrfOspfv3Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaRangeList",
    },
    type: {
      value: logicalRouterVrfOspfv3AreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3AreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfOspfv3Area | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    if (this._virtualLink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualLink = this._virtualLink?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3Area | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._interface.internalValue = undefined;
      this._name = undefined;
      this._range.internalValue = undefined;
      this._type.internalValue = undefined;
      this._virtualLink.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._interface.internalValue = value.interface;
      this._name = value.name;
      this._range.internalValue = value.range;
      this._type.internalValue = value.type;
      this._virtualLink.internalValue = value.virtualLink;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new LogicalRouterVrfOspfv3AreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: LogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
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

  // range - computed: false, optional: true, required: false
  private _range = new LogicalRouterVrfOspfv3AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: LogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type = new LogicalRouterVrfOspfv3AreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: LogicalRouterVrfOspfv3AreaType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // virtual_link - computed: false, optional: true, required: false
  private _virtualLink = new LogicalRouterVrfOspfv3AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: LogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable) {
    this._virtualLink.internalValue = value;
  }
  public resetVirtualLink() {
    this._virtualLink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualLinkInput() {
    return this._virtualLink.internalValue;
  }
}

export class LogicalRouterVrfOspfv3AreaList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfOspfv3Area[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOspfv3AreaOutputReference {
    return new LogicalRouterVrfOspfv3AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfOspfv3GlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfOspfv3GlobalBfdToTerraform(struct?: LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfOspfv3GlobalBfdToHclTerraform(struct?: LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3GlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfOspfv3GracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * maximum local restarting time (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#grace_period LogicalRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * enable/disable helping neighboring routers to graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#helper_enable LogicalRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * maximum of neighbor restart time accepted (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#max_neighbor_restart_time LogicalRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * enable/disable strict LSA checking. Abort GR if lsa change is detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#strict_lsa_checking LogicalRouter#strict_lsa_checking}
  */
  readonly strictLsaChecking?: boolean | cdktf.IResolvable;
}

export function logicalRouterVrfOspfv3GracefulRestartToTerraform(struct?: LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    grace_period: cdktf.numberToTerraform(struct!.gracePeriod),
    helper_enable: cdktf.booleanToTerraform(struct!.helperEnable),
    max_neighbor_restart_time: cdktf.numberToTerraform(struct!.maxNeighborRestartTime),
    strict_lsa_checking: cdktf.booleanToTerraform(struct!.strictLsaChecking),
  }
}


export function logicalRouterVrfOspfv3GracefulRestartToHclTerraform(struct?: LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grace_period: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    helper_enable: {
      value: cdktf.booleanToHclTerraform(struct!.helperEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_neighbor_restart_time: {
      value: cdktf.numberToHclTerraform(struct!.maxNeighborRestartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_lsa_checking: {
      value: cdktf.booleanToHclTerraform(struct!.strictLsaChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3GracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._helperEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperEnable = this._helperEnable;
    }
    if (this._maxNeighborRestartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNeighborRestartTime = this._maxNeighborRestartTime;
    }
    if (this._strictLsaChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLsaChecking = this._strictLsaChecking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._gracePeriod = undefined;
      this._helperEnable = undefined;
      this._maxNeighborRestartTime = undefined;
      this._strictLsaChecking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._gracePeriod = value.gracePeriod;
      this._helperEnable = value.helperEnable;
      this._maxNeighborRestartTime = value.maxNeighborRestartTime;
      this._strictLsaChecking = value.strictLsaChecking;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: number; 
  public get gracePeriod() {
    return this.getNumberAttribute('grace_period');
  }
  public set gracePeriod(value: number) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // helper_enable - computed: false, optional: true, required: false
  private _helperEnable?: boolean | cdktf.IResolvable; 
  public get helperEnable() {
    return this.getBooleanAttribute('helper_enable');
  }
  public set helperEnable(value: boolean | cdktf.IResolvable) {
    this._helperEnable = value;
  }
  public resetHelperEnable() {
    this._helperEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperEnableInput() {
    return this._helperEnable;
  }

  // max_neighbor_restart_time - computed: true, optional: true, required: false
  private _maxNeighborRestartTime?: number; 
  public get maxNeighborRestartTime() {
    return this.getNumberAttribute('max_neighbor_restart_time');
  }
  public set maxNeighborRestartTime(value: number) {
    this._maxNeighborRestartTime = value;
  }
  public resetMaxNeighborRestartTime() {
    this._maxNeighborRestartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNeighborRestartTimeInput() {
    return this._maxNeighborRestartTime;
  }

  // strict_lsa_checking - computed: false, optional: true, required: false
  private _strictLsaChecking?: boolean | cdktf.IResolvable; 
  public get strictLsaChecking() {
    return this.getBooleanAttribute('strict_lsa_checking');
  }
  public set strictLsaChecking(value: boolean | cdktf.IResolvable) {
    this._strictLsaChecking = value;
  }
  public resetStrictLsaChecking() {
    this._strictLsaChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLsaCheckingInput() {
    return this._strictLsaChecking;
  }
}
export interface LogicalRouterVrfOspfv3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#area LogicalRouter#area}
  */
  readonly area?: LogicalRouterVrfOspfv3Area[] | cdktf.IResolvable;
  /**
  * whether OSPFv3 should set the R- and V6-bits in its Router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#disable_transit_traffic LogicalRouter#disable_transit_traffic}
  */
  readonly disableTransitTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_bfd LogicalRouter#global_bfd}
  */
  readonly globalBfd?: LogicalRouterVrfOspfv3GlobalBfd;
  /**
  * Global protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_if_timer LogicalRouter#global_if_timer}
  */
  readonly globalIfTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#graceful_restart LogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: LogicalRouterVrfOspfv3GracefulRestart;
  /**
  * Redistribution profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#redistribution_profile LogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
  /**
  * router id of this OSPFv3 instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#router_id LogicalRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * SPF timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#spf_timer LogicalRouter#spf_timer}
  */
  readonly spfTimer?: string;
}

export function logicalRouterVrfOspfv3ToTerraform(struct?: LogicalRouterVrfOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.listMapper(logicalRouterVrfOspfv3AreaToTerraform, false)(struct!.area),
    disable_transit_traffic: cdktf.booleanToTerraform(struct!.disableTransitTraffic),
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_bfd: logicalRouterVrfOspfv3GlobalBfdToTerraform(struct!.globalBfd),
    global_if_timer: cdktf.stringToTerraform(struct!.globalIfTimer),
    graceful_restart: logicalRouterVrfOspfv3GracefulRestartToTerraform(struct!.gracefulRestart),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    spf_timer: cdktf.stringToTerraform(struct!.spfTimer),
  }
}


export function logicalRouterVrfOspfv3ToHclTerraform(struct?: LogicalRouterVrfOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.listMapperHcl(logicalRouterVrfOspfv3AreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfOspfv3AreaList",
    },
    disable_transit_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.disableTransitTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_bfd: {
      value: logicalRouterVrfOspfv3GlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3GlobalBfd",
    },
    global_if_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalIfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart: {
      value: logicalRouterVrfOspfv3GracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3GracefulRestart",
    },
    redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.redistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    router_id: {
      value: cdktf.stringToHclTerraform(struct!.routerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spf_timer: {
      value: cdktf.stringToHclTerraform(struct!.spfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfOspfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._area?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area?.internalValue;
    }
    if (this._disableTransitTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTransitTraffic = this._disableTransitTraffic;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._globalIfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalIfTimer = this._globalIfTimer;
    }
    if (this._gracefulRestart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulRestart = this._gracefulRestart?.internalValue;
    }
    if (this._redistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionProfile = this._redistributionProfile;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    if (this._spfTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.spfTimer = this._spfTimer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfOspfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._area.internalValue = undefined;
      this._disableTransitTraffic = undefined;
      this._enable = undefined;
      this._globalBfd.internalValue = undefined;
      this._globalIfTimer = undefined;
      this._gracefulRestart.internalValue = undefined;
      this._redistributionProfile = undefined;
      this._routerId = undefined;
      this._spfTimer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._area.internalValue = value.area;
      this._disableTransitTraffic = value.disableTransitTraffic;
      this._enable = value.enable;
      this._globalBfd.internalValue = value.globalBfd;
      this._globalIfTimer = value.globalIfTimer;
      this._gracefulRestart.internalValue = value.gracefulRestart;
      this._redistributionProfile = value.redistributionProfile;
      this._routerId = value.routerId;
      this._spfTimer = value.spfTimer;
    }
  }

  // area - computed: false, optional: true, required: false
  private _area = new LogicalRouterVrfOspfv3AreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: LogicalRouterVrfOspfv3Area[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // disable_transit_traffic - computed: false, optional: true, required: false
  private _disableTransitTraffic?: boolean | cdktf.IResolvable; 
  public get disableTransitTraffic() {
    return this.getBooleanAttribute('disable_transit_traffic');
  }
  public set disableTransitTraffic(value: boolean | cdktf.IResolvable) {
    this._disableTransitTraffic = value;
  }
  public resetDisableTransitTraffic() {
    this._disableTransitTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTransitTrafficInput() {
    return this._disableTransitTraffic;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new LogicalRouterVrfOspfv3GlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: LogicalRouterVrfOspfv3GlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_if_timer - computed: false, optional: true, required: false
  private _globalIfTimer?: string; 
  public get globalIfTimer() {
    return this.getStringAttribute('global_if_timer');
  }
  public set globalIfTimer(value: string) {
    this._globalIfTimer = value;
  }
  public resetGlobalIfTimer() {
    this._globalIfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalIfTimerInput() {
    return this._globalIfTimer;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new LogicalRouterVrfOspfv3GracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: LogicalRouterVrfOspfv3GracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // redistribution_profile - computed: false, optional: true, required: false
  private _redistributionProfile?: string; 
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
  public set redistributionProfile(value: string) {
    this._redistributionProfile = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile;
  }

  // router_id - computed: false, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // spf_timer - computed: false, optional: true, required: false
  private _spfTimer?: string; 
  public get spfTimer() {
    return this.getStringAttribute('spf_timer');
  }
  public set spfTimer(value: string) {
    this._spfTimer = value;
  }
  public resetSpfTimer() {
    this._spfTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfTimerInput() {
    return this._spfTimer;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Bgp {
  /**
  * Apply Route-Map on BGP Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4BgpToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4BgpToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Ospf {
  /**
  * Apply Route-Map on OSPF Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4OspfToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4OspfToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Rip {
  /**
  * Apply Route-Map on RIP Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4RipToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4RipToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4Static {
  /**
  * Apply Route-Map on Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv4StaticToTerraform(struct?: LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv4StaticToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bgp LogicalRouter#bgp}
  */
  readonly bgp?: LogicalRouterVrfRibFilterIpv4Bgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospf LogicalRouter#ospf}
  */
  readonly ospf?: LogicalRouterVrfRibFilterIpv4Ospf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#rip LogicalRouter#rip}
  */
  readonly rip?: LogicalRouterVrfRibFilterIpv4Rip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static LogicalRouter#static}
  */
  readonly static?: LogicalRouterVrfRibFilterIpv4Static;
}

export function logicalRouterVrfRibFilterIpv4ToTerraform(struct?: LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: logicalRouterVrfRibFilterIpv4BgpToTerraform(struct!.bgp),
    ospf: logicalRouterVrfRibFilterIpv4OspfToTerraform(struct!.ospf),
    rip: logicalRouterVrfRibFilterIpv4RipToTerraform(struct!.rip),
    static: logicalRouterVrfRibFilterIpv4StaticToTerraform(struct!.static),
  }
}


export function logicalRouterVrfRibFilterIpv4ToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: logicalRouterVrfRibFilterIpv4BgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Bgp",
    },
    ospf: {
      value: logicalRouterVrfRibFilterIpv4OspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Ospf",
    },
    rip: {
      value: logicalRouterVrfRibFilterIpv4RipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Rip",
    },
    static: {
      value: logicalRouterVrfRibFilterIpv4StaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4Static",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._ospf.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._ospf.internalValue = value.ospf;
      this._rip.internalValue = value.rip;
      this._static.internalValue = value.static;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new LogicalRouterVrfRibFilterIpv4BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: LogicalRouterVrfRibFilterIpv4Bgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new LogicalRouterVrfRibFilterIpv4OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: LogicalRouterVrfRibFilterIpv4Ospf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new LogicalRouterVrfRibFilterIpv4RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: LogicalRouterVrfRibFilterIpv4Rip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new LogicalRouterVrfRibFilterIpv4StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: LogicalRouterVrfRibFilterIpv4Static) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface LogicalRouterVrfRibFilterIpv6Bgp {
  /**
  * Apply Route-Map on BGP Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv6BgpToTerraform(struct?: LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv6BgpToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv6Ospfv3 {
  /**
  * Apply Route-Map on OSPFv3 Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv6Ospfv3ToTerraform(struct?: LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv6Ospfv3ToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6Ospfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv6Static {
  /**
  * Apply Route-Map on Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#route_map LogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function logicalRouterVrfRibFilterIpv6StaticToTerraform(struct?: LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function logicalRouterVrfRibFilterIpv6StaticToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeMap = value.routeMap;
    }
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }
}
export interface LogicalRouterVrfRibFilterIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bgp LogicalRouter#bgp}
  */
  readonly bgp?: LogicalRouterVrfRibFilterIpv6Bgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospfv3 LogicalRouter#ospfv3}
  */
  readonly ospfv3?: LogicalRouterVrfRibFilterIpv6Ospfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static LogicalRouter#static}
  */
  readonly static?: LogicalRouterVrfRibFilterIpv6Static;
}

export function logicalRouterVrfRibFilterIpv6ToTerraform(struct?: LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: logicalRouterVrfRibFilterIpv6BgpToTerraform(struct!.bgp),
    ospfv3: logicalRouterVrfRibFilterIpv6Ospfv3ToTerraform(struct!.ospfv3),
    static: logicalRouterVrfRibFilterIpv6StaticToTerraform(struct!.static),
  }
}


export function logicalRouterVrfRibFilterIpv6ToHclTerraform(struct?: LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: logicalRouterVrfRibFilterIpv6BgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6Bgp",
    },
    ospfv3: {
      value: logicalRouterVrfRibFilterIpv6Ospfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6Ospfv3",
    },
    static: {
      value: logicalRouterVrfRibFilterIpv6StaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6Static",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._ospfv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3?.internalValue;
    }
    if (this._static?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgp.internalValue = undefined;
      this._ospfv3.internalValue = undefined;
      this._static.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgp.internalValue = value.bgp;
      this._ospfv3.internalValue = value.ospfv3;
      this._static.internalValue = value.static;
    }
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new LogicalRouterVrfRibFilterIpv6BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: LogicalRouterVrfRibFilterIpv6Bgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospfv3 - computed: false, optional: true, required: false
  private _ospfv3 = new LogicalRouterVrfRibFilterIpv6Ospfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: LogicalRouterVrfRibFilterIpv6Ospfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // static - computed: false, optional: true, required: false
  private _static = new LogicalRouterVrfRibFilterIpv6StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: LogicalRouterVrfRibFilterIpv6Static) {
    this._static.internalValue = value;
  }
  public resetStatic() {
    this._static.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static.internalValue;
  }
}
export interface LogicalRouterVrfRibFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv4 LogicalRouter#ipv4}
  */
  readonly ipv4?: LogicalRouterVrfRibFilterIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: LogicalRouterVrfRibFilterIpv6;
}

export function logicalRouterVrfRibFilterToTerraform(struct?: LogicalRouterVrfRibFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: logicalRouterVrfRibFilterIpv4ToTerraform(struct!.ipv4),
    ipv6: logicalRouterVrfRibFilterIpv6ToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfRibFilterToHclTerraform(struct?: LogicalRouterVrfRibFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: logicalRouterVrfRibFilterIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv4",
    },
    ipv6: {
      value: logicalRouterVrfRibFilterIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilterIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRibFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRibFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRibFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new LogicalRouterVrfRibFilterIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: LogicalRouterVrfRibFilterIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new LogicalRouterVrfRibFilterIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: LogicalRouterVrfRibFilterIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface LogicalRouterVrfRipGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRipGlobalBfdToTerraform(struct?: LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRipGlobalBfdToHclTerraform(struct?: LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipGlobalBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfRipGlobalInboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
}

export function logicalRouterVrfRipGlobalInboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
  }
}


export function logicalRouterVrfRipGlobalInboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }
}
export interface LogicalRouterVrfRipGlobalOutboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
}

export function logicalRouterVrfRipGlobalOutboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
  }
}


export function logicalRouterVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }
}
export interface LogicalRouterVrfRipInterfacesBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRipInterfacesBfdToTerraform(struct?: LogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRipInterfacesBfdToHclTerraform(struct?: LogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
}

export function logicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function logicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._metric = value.metric;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}
export interface LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#access_list LogicalRouter#access_list}
  */
  readonly accessList?: string;
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
}

export function logicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToTerraform(struct?: LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function logicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToHclTerraform(struct?: LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._metric = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._metric = value.metric;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }
}
export interface LogicalRouterVrfRipInterfaces {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#authentication LogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfRipInterfacesBfd;
  /**
  * Enable RIP on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface_inbound_distribute_list LogicalRouter#interface_inbound_distribute_list}
  */
  readonly interfaceInboundDistributeList?: LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface_outbound_distribute_list LogicalRouter#interface_outbound_distribute_list}
  */
  readonly interfaceOutboundDistributeList?: LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#mode LogicalRouter#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Split horizon options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#split_horizon LogicalRouter#split_horizon}
  */
  readonly splitHorizon?: string;
}

export function logicalRouterVrfRipInterfacesToTerraform(struct?: LogicalRouterVrfRipInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: logicalRouterVrfRipInterfacesBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interface_inbound_distribute_list: logicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToTerraform(struct!.interfaceInboundDistributeList),
    interface_outbound_distribute_list: logicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToTerraform(struct!.interfaceOutboundDistributeList),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    split_horizon: cdktf.stringToTerraform(struct!.splitHorizon),
  }
}


export function logicalRouterVrfRipInterfacesToHclTerraform(struct?: LogicalRouterVrfRipInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd: {
      value: logicalRouterVrfRipInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipInterfacesBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_inbound_distribute_list: {
      value: logicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToHclTerraform(struct!.interfaceInboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct",
    },
    interface_outbound_distribute_list: {
      value: logicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToHclTerraform(struct!.interfaceOutboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    split_horizon: {
      value: cdktf.stringToHclTerraform(struct!.splitHorizon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRipInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interfaceInboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceInboundDistributeList = this._interfaceInboundDistributeList?.internalValue;
    }
    if (this._interfaceOutboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceOutboundDistributeList = this._interfaceOutboundDistributeList?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._splitHorizon !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizon = this._splitHorizon;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRipInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._bfd.internalValue = undefined;
      this._enable = undefined;
      this._interfaceInboundDistributeList.internalValue = undefined;
      this._interfaceOutboundDistributeList.internalValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._splitHorizon = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._bfd.internalValue = value.bfd;
      this._enable = value.enable;
      this._interfaceInboundDistributeList.internalValue = value.interfaceInboundDistributeList;
      this._interfaceOutboundDistributeList.internalValue = value.interfaceOutboundDistributeList;
      this._mode = value.mode;
      this._name = value.name;
      this._splitHorizon = value.splitHorizon;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfRipInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfRipInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // interface_inbound_distribute_list - computed: false, optional: true, required: false
  private _interfaceInboundDistributeList = new LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructOutputReference(this, "interface_inbound_distribute_list");
  public get interfaceInboundDistributeList() {
    return this._interfaceInboundDistributeList;
  }
  public putInterfaceInboundDistributeList(value: LogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct) {
    this._interfaceInboundDistributeList.internalValue = value;
  }
  public resetInterfaceInboundDistributeList() {
    this._interfaceInboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInboundDistributeListInput() {
    return this._interfaceInboundDistributeList.internalValue;
  }

  // interface_outbound_distribute_list - computed: false, optional: true, required: false
  private _interfaceOutboundDistributeList = new LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructOutputReference(this, "interface_outbound_distribute_list");
  public get interfaceOutboundDistributeList() {
    return this._interfaceOutboundDistributeList;
  }
  public putInterfaceOutboundDistributeList(value: LogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct) {
    this._interfaceOutboundDistributeList.internalValue = value;
  }
  public resetInterfaceOutboundDistributeList() {
    this._interfaceOutboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceOutboundDistributeListInput() {
    return this._interfaceOutboundDistributeList.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // split_horizon - computed: true, optional: true, required: false
  private _splitHorizon?: string; 
  public get splitHorizon() {
    return this.getStringAttribute('split_horizon');
  }
  public set splitHorizon(value: string) {
    this._splitHorizon = value;
  }
  public resetSplitHorizon() {
    this._splitHorizon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonInput() {
    return this._splitHorizon;
  }
}

export class LogicalRouterVrfRipInterfacesList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRipInterfaces[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRipInterfacesOutputReference {
    return new LogicalRouterVrfRipInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRip {
  /**
  * Authentication profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#auth_profile LogicalRouter#auth_profile}
  */
  readonly authProfile?: string;
  /**
  * advertise default route in RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#default_information_originate LogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_bfd LogicalRouter#global_bfd}
  */
  readonly globalBfd?: LogicalRouterVrfRipGlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_inbound_distribute_list LogicalRouter#global_inbound_distribute_list}
  */
  readonly globalInboundDistributeList?: LogicalRouterVrfRipGlobalInboundDistributeListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_outbound_distribute_list LogicalRouter#global_outbound_distribute_list}
  */
  readonly globalOutboundDistributeList?: LogicalRouterVrfRipGlobalOutboundDistributeListStruct;
  /**
  * timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#global_timer LogicalRouter#global_timer}
  */
  readonly globalTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interfaces LogicalRouter#interfaces}
  */
  readonly interfaces?: LogicalRouterVrfRipInterfaces[] | cdktf.IResolvable;
  /**
  * Redistribution profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#redistribution_profile LogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
}

export function logicalRouterVrfRipToTerraform(struct?: LogicalRouterVrfRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_profile: cdktf.stringToTerraform(struct!.authProfile),
    default_information_originate: cdktf.booleanToTerraform(struct!.defaultInformationOriginate),
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_bfd: logicalRouterVrfRipGlobalBfdToTerraform(struct!.globalBfd),
    global_inbound_distribute_list: logicalRouterVrfRipGlobalInboundDistributeListStructToTerraform(struct!.globalInboundDistributeList),
    global_outbound_distribute_list: logicalRouterVrfRipGlobalOutboundDistributeListStructToTerraform(struct!.globalOutboundDistributeList),
    global_timer: cdktf.stringToTerraform(struct!.globalTimer),
    interfaces: cdktf.listMapper(logicalRouterVrfRipInterfacesToTerraform, false)(struct!.interfaces),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
  }
}


export function logicalRouterVrfRipToHclTerraform(struct?: LogicalRouterVrfRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_profile: {
      value: cdktf.stringToHclTerraform(struct!.authProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_information_originate: {
      value: cdktf.booleanToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_bfd: {
      value: logicalRouterVrfRipGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipGlobalBfd",
    },
    global_inbound_distribute_list: {
      value: logicalRouterVrfRipGlobalInboundDistributeListStructToHclTerraform(struct!.globalInboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipGlobalInboundDistributeListStruct",
    },
    global_outbound_distribute_list: {
      value: logicalRouterVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct!.globalOutboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRipGlobalOutboundDistributeListStruct",
    },
    global_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(logicalRouterVrfRipInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRipInterfacesList",
    },
    redistribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.redistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRip | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProfile = this._authProfile;
    }
    if (this._defaultInformationOriginate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInformationOriginate = this._defaultInformationOriginate;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._globalBfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalBfd = this._globalBfd?.internalValue;
    }
    if (this._globalInboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalInboundDistributeList = this._globalInboundDistributeList?.internalValue;
    }
    if (this._globalOutboundDistributeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalOutboundDistributeList = this._globalOutboundDistributeList?.internalValue;
    }
    if (this._globalTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalTimer = this._globalTimer;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._redistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributionProfile = this._redistributionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRip | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authProfile = undefined;
      this._defaultInformationOriginate = undefined;
      this._enable = undefined;
      this._globalBfd.internalValue = undefined;
      this._globalInboundDistributeList.internalValue = undefined;
      this._globalOutboundDistributeList.internalValue = undefined;
      this._globalTimer = undefined;
      this._interfaces.internalValue = undefined;
      this._redistributionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authProfile = value.authProfile;
      this._defaultInformationOriginate = value.defaultInformationOriginate;
      this._enable = value.enable;
      this._globalBfd.internalValue = value.globalBfd;
      this._globalInboundDistributeList.internalValue = value.globalInboundDistributeList;
      this._globalOutboundDistributeList.internalValue = value.globalOutboundDistributeList;
      this._globalTimer = value.globalTimer;
      this._interfaces.internalValue = value.interfaces;
      this._redistributionProfile = value.redistributionProfile;
    }
  }

  // auth_profile - computed: false, optional: true, required: false
  private _authProfile?: string; 
  public get authProfile() {
    return this.getStringAttribute('auth_profile');
  }
  public set authProfile(value: string) {
    this._authProfile = value;
  }
  public resetAuthProfile() {
    this._authProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProfileInput() {
    return this._authProfile;
  }

  // default_information_originate - computed: false, optional: true, required: false
  private _defaultInformationOriginate?: boolean | cdktf.IResolvable; 
  public get defaultInformationOriginate() {
    return this.getBooleanAttribute('default_information_originate');
  }
  public set defaultInformationOriginate(value: boolean | cdktf.IResolvable) {
    this._defaultInformationOriginate = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // global_bfd - computed: false, optional: true, required: false
  private _globalBfd = new LogicalRouterVrfRipGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: LogicalRouterVrfRipGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_inbound_distribute_list - computed: false, optional: true, required: false
  private _globalInboundDistributeList = new LogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference(this, "global_inbound_distribute_list");
  public get globalInboundDistributeList() {
    return this._globalInboundDistributeList;
  }
  public putGlobalInboundDistributeList(value: LogicalRouterVrfRipGlobalInboundDistributeListStruct) {
    this._globalInboundDistributeList.internalValue = value;
  }
  public resetGlobalInboundDistributeList() {
    this._globalInboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInboundDistributeListInput() {
    return this._globalInboundDistributeList.internalValue;
  }

  // global_outbound_distribute_list - computed: false, optional: true, required: false
  private _globalOutboundDistributeList = new LogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference(this, "global_outbound_distribute_list");
  public get globalOutboundDistributeList() {
    return this._globalOutboundDistributeList;
  }
  public putGlobalOutboundDistributeList(value: LogicalRouterVrfRipGlobalOutboundDistributeListStruct) {
    this._globalOutboundDistributeList.internalValue = value;
  }
  public resetGlobalOutboundDistributeList() {
    this._globalOutboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutboundDistributeListInput() {
    return this._globalOutboundDistributeList.internalValue;
  }

  // global_timer - computed: false, optional: true, required: false
  private _globalTimer?: string; 
  public get globalTimer() {
    return this.getStringAttribute('global_timer');
  }
  public set globalTimer(value: string) {
    this._globalTimer = value;
  }
  public resetGlobalTimer() {
    this._globalTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTimerInput() {
    return this._globalTimer;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new LogicalRouterVrfRipInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: LogicalRouterVrfRipInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // redistribution_profile - computed: false, optional: true, required: false
  private _redistributionProfile?: string; 
  public get redistributionProfile() {
    return this.getStringAttribute('redistribution_profile');
  }
  public set redistributionProfile(value: string) {
    this._redistributionProfile = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRouteBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRoutingTableIpStaticRouteBfdToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard {
}

export function logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#discard LogicalRouter#discard}
  */
  readonly discard?: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard;
  /**
  * nexthop address FQDN address object configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#fqdn LogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip_address LogicalRouter#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Next-Hop Logical Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#next_lr LogicalRouter#next_lr}
  */
  readonly nextLr?: string;
}

export function logicalRouterVrfRoutingTableIpStaticRouteNexthopToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    next_lr: cdktf.stringToTerraform(struct!.nextLr),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: logicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_lr: {
      value: cdktf.stringToHclTerraform(struct!.nextLr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._nextLr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLr = this._nextLr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard.internalValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
      this._nextLr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard.internalValue = value.discard;
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
      this._nextLr = value.nextLr;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard = new LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // next_lr - computed: false, optional: true, required: false
  private _nextLr?: string; 
  public get nextLr() {
    return this.getStringAttribute('next_lr');
  }
  public set nextLr(value: string) {
    this._nextLr = value;
  }
  public resetNextLr() {
    this._nextLr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLrInput() {
    return this._nextLr;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations {
  /**
  * ping count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#count LogicalRouter#count}
  */
  readonly count?: number;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interval LogicalRouter#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#source LogicalRouter#source}
  */
  readonly source?: string;
}

export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._destination = undefined;
      this._enable = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._destination = value.destination;
      this._enable = value.enable;
      this._interval = value.interval;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#failure_condition LogicalRouter#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * hold time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#hold_time LogicalRouter#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#monitor_destinations LogicalRouter#monitor_destinations}
  */
  readonly monitorDestinations?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_condition: {
      value: cdktf.stringToHclTerraform(struct!.failureCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_destinations: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._failureCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCondition = this._failureCondition;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._monitorDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDestinations = this._monitorDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._failureCondition = undefined;
      this._holdTime = undefined;
      this._monitorDestinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._failureCondition = value.failureCondition;
      this._holdTime = value.holdTime;
      this._monitorDestinations.internalValue = value.monitorDestinations;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // failure_condition - computed: true, optional: true, required: false
  private _failureCondition?: string; 
  public get failureCondition() {
    return this.getStringAttribute('failure_condition');
  }
  public set failureCondition(value: string) {
    this._failureCondition = value;
  }
  public resetFailureCondition() {
    this._failureCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionInput() {
    return this._failureCondition;
  }

  // hold_time - computed: true, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // monitor_destinations - computed: false, optional: true, required: false
  private _monitorDestinations = new LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable) {
    this._monitorDestinations.internalValue = value;
  }
  public resetMonitorDestinations() {
    this._monitorDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDestinationsInput() {
    return this._monitorDestinations.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpStaticRoute {
  /**
  * adminitrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#administrative_distance LogicalRouter#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfRoutingTableIpStaticRouteBfd;
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * metric value (path cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#nexthop LogicalRouter#nexthop}
  */
  readonly nexthop?: LogicalRouterVrfRoutingTableIpStaticRouteNexthop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#path_monitor LogicalRouter#path_monitor}
  */
  readonly pathMonitor?: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor;
}

export function logicalRouterVrfRoutingTableIpStaticRouteToTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    bfd: logicalRouterVrfRoutingTableIpStaticRouteBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: logicalRouterVrfRoutingTableIpStaticRouteNexthopToTerraform(struct!.nexthop),
    path_monitor: logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct!.pathMonitor),
  }
}


export function logicalRouterVrfRoutingTableIpStaticRouteToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrative_distance: {
      value: cdktf.numberToHclTerraform(struct!.administrativeDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: logicalRouterVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteBfd",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
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
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop: {
      value: logicalRouterVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteNexthop",
    },
    path_monitor: {
      value: logicalRouterVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administrativeDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistance = this._administrativeDistance;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._pathMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMonitor = this._pathMonitor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._administrativeDistance = undefined;
      this._bfd.internalValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._nexthop.internalValue = undefined;
      this._pathMonitor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._administrativeDistance = value.administrativeDistance;
      this._bfd.internalValue = value.bfd;
      this._destination = value.destination;
      this._interface = value.interface;
      this._metric = value.metric;
      this._name = value.name;
      this._nexthop.internalValue = value.nexthop;
      this._pathMonitor.internalValue = value.pathMonitor;
    }
  }

  // administrative_distance - computed: false, optional: true, required: false
  private _administrativeDistance?: number; 
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }
  public set administrativeDistance(value: number) {
    this._administrativeDistance = value;
  }
  public resetAdministrativeDistance() {
    this._administrativeDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceInput() {
    return this._administrativeDistance;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfRoutingTableIpStaticRouteBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // interface - computed: false, optional: true, required: false
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

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new LogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: LogicalRouterVrfRoutingTableIpStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // path_monitor - computed: false, optional: true, required: false
  private _pathMonitor = new LogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: LogicalRouterVrfRoutingTableIpStaticRoutePathMonitor) {
    this._pathMonitor.internalValue = value;
  }
  public resetPathMonitor() {
    this._pathMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMonitorInput() {
    return this._pathMonitor.internalValue;
  }
}

export class LogicalRouterVrfRoutingTableIpStaticRouteList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpStaticRouteOutputReference {
    return new LogicalRouterVrfRoutingTableIpStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static_route LogicalRouter#static_route}
  */
  readonly staticRoute?: LogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpToTerraform(struct?: LogicalRouterVrfRoutingTableIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(logicalRouterVrfRoutingTableIpStaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function logicalRouterVrfRoutingTableIpToHclTerraform(struct?: LogicalRouterVrfRoutingTableIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpStaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new LogicalRouterVrfRoutingTableIpStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: LogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#profile LogicalRouter#profile}
  */
  readonly profile?: string;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard {
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#discard LogicalRouter#discard}
  */
  readonly discard?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard;
  /**
  * nexthop address FQDN address object configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#fqdn LogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6_address LogicalRouter#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Next-Hop Logical Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#next_lr LogicalRouter#next_lr}
  */
  readonly nextLr?: string;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    next_lr: cdktf.stringToTerraform(struct!.nextLr),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_lr: {
      value: cdktf.stringToHclTerraform(struct!.nextLr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard?.internalValue;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nextLr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextLr = this._nextLr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard.internalValue = undefined;
      this._fqdn = undefined;
      this._ipv6Address = undefined;
      this._nextLr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard.internalValue = value.discard;
      this._fqdn = value.fqdn;
      this._ipv6Address = value.ipv6Address;
      this._nextLr = value.nextLr;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard = new LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // next_lr - computed: false, optional: true, required: false
  private _nextLr?: string; 
  public get nextLr() {
    return this.getStringAttribute('next_lr');
  }
  public set nextLr(value: string) {
    this._nextLr = value;
  }
  public resetNextLr() {
    this._nextLr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextLrInput() {
    return this._nextLr;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations {
  /**
  * ping count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#count LogicalRouter#count}
  */
  readonly count?: number;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interval LogicalRouter#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#source LogicalRouter#source}
  */
  readonly source?: string;
}

export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    destination: cdktf.stringToTerraform(struct!.destination),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interval: cdktf.numberToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._destination = undefined;
      this._enable = undefined;
      this._interval = undefined;
      this._name = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._destination = value.destination;
      this._enable = value.enable;
      this._interval = value.interval;
      this._name = value.name;
      this._source = value.source;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#enable LogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#failure_condition LogicalRouter#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * hold time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#hold_time LogicalRouter#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#monitor_destinations LogicalRouter#monitor_destinations}
  */
  readonly monitorDestinations?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    failure_condition: {
      value: cdktf.stringToHclTerraform(struct!.failureCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_time: {
      value: cdktf.numberToHclTerraform(struct!.holdTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_destinations: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._failureCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureCondition = this._failureCondition;
    }
    if (this._holdTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdTime = this._holdTime;
    }
    if (this._monitorDestinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorDestinations = this._monitorDestinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._failureCondition = undefined;
      this._holdTime = undefined;
      this._monitorDestinations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._failureCondition = value.failureCondition;
      this._holdTime = value.holdTime;
      this._monitorDestinations.internalValue = value.monitorDestinations;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // failure_condition - computed: true, optional: true, required: false
  private _failureCondition?: string; 
  public get failureCondition() {
    return this.getStringAttribute('failure_condition');
  }
  public set failureCondition(value: string) {
    this._failureCondition = value;
  }
  public resetFailureCondition() {
    this._failureCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureConditionInput() {
    return this._failureCondition;
  }

  // hold_time - computed: true, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // monitor_destinations - computed: false, optional: true, required: false
  private _monitorDestinations = new LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable) {
    this._monitorDestinations.internalValue = value;
  }
  public resetMonitorDestinations() {
    this._monitorDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorDestinationsInput() {
    return this._monitorDestinations.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTableIpv6StaticRoute {
  /**
  * adminitrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#administrative_distance LogicalRouter#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bfd LogicalRouter#bfd}
  */
  readonly bfd?: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd;
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#destination LogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * metric value (path cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#metric LogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#nexthop LogicalRouter#nexthop}
  */
  readonly nexthop?: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#path_monitor LogicalRouter#path_monitor}
  */
  readonly pathMonitor?: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor;
}

export function logicalRouterVrfRoutingTableIpv6StaticRouteToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    bfd: logicalRouterVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct!.nexthop),
    path_monitor: logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct!.pathMonitor),
  }
}


export function logicalRouterVrfRoutingTableIpv6StaticRouteToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrative_distance: {
      value: cdktf.numberToHclTerraform(struct!.administrativeDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteBfd",
    },
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
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
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nexthop: {
      value: logicalRouterVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop",
    },
    path_monitor: {
      value: logicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administrativeDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistance = this._administrativeDistance;
    }
    if (this._bfd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd?.internalValue;
    }
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._pathMonitor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathMonitor = this._pathMonitor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._administrativeDistance = undefined;
      this._bfd.internalValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._nexthop.internalValue = undefined;
      this._pathMonitor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._administrativeDistance = value.administrativeDistance;
      this._bfd.internalValue = value.bfd;
      this._destination = value.destination;
      this._interface = value.interface;
      this._metric = value.metric;
      this._name = value.name;
      this._nexthop.internalValue = value.nexthop;
      this._pathMonitor.internalValue = value.pathMonitor;
    }
  }

  // administrative_distance - computed: false, optional: true, required: false
  private _administrativeDistance?: number; 
  public get administrativeDistance() {
    return this.getNumberAttribute('administrative_distance');
  }
  public set administrativeDistance(value: number) {
    this._administrativeDistance = value;
  }
  public resetAdministrativeDistance() {
    this._administrativeDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistanceInput() {
    return this._administrativeDistance;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new LogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: LogicalRouterVrfRoutingTableIpv6StaticRouteBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // interface - computed: false, optional: true, required: false
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

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new LogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: LogicalRouterVrfRoutingTableIpv6StaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // path_monitor - computed: false, optional: true, required: false
  private _pathMonitor = new LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: LogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor) {
    this._pathMonitor.internalValue = value;
  }
  public resetPathMonitor() {
    this._pathMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMonitorInput() {
    return this._pathMonitor.internalValue;
  }
}

export class LogicalRouterVrfRoutingTableIpv6StaticRouteList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference {
    return new LogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalRouterVrfRoutingTableIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#static_route LogicalRouter#static_route}
  */
  readonly staticRoute?: LogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable;
}

export function logicalRouterVrfRoutingTableIpv6ToTerraform(struct?: LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(logicalRouterVrfRoutingTableIpv6StaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function logicalRouterVrfRoutingTableIpv6ToHclTerraform(struct?: LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(logicalRouterVrfRoutingTableIpv6StaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6StaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoute = this._staticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._staticRoute.internalValue = value.staticRoute;
    }
  }

  // static_route - computed: false, optional: true, required: false
  private _staticRoute = new LogicalRouterVrfRoutingTableIpv6StaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: LogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable) {
    this._staticRoute.internalValue = value;
  }
  public resetStaticRoute() {
    this._staticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteInput() {
    return this._staticRoute.internalValue;
  }
}
export interface LogicalRouterVrfRoutingTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ip LogicalRouter#ip}
  */
  readonly ip?: LogicalRouterVrfRoutingTableIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ipv6 LogicalRouter#ipv6}
  */
  readonly ipv6?: LogicalRouterVrfRoutingTableIpv6;
}

export function logicalRouterVrfRoutingTableToTerraform(struct?: LogicalRouterVrfRoutingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: logicalRouterVrfRoutingTableIpToTerraform(struct!.ip),
    ipv6: logicalRouterVrfRoutingTableIpv6ToTerraform(struct!.ipv6),
  }
}


export function logicalRouterVrfRoutingTableToHclTerraform(struct?: LogicalRouterVrfRoutingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: logicalRouterVrfRoutingTableIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIp",
    },
    ipv6: {
      value: logicalRouterVrfRoutingTableIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTableIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfRoutingTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LogicalRouterVrfRoutingTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrfRoutingTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip.internalValue = value.ip;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new LogicalRouterVrfRoutingTableIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: LogicalRouterVrfRoutingTableIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new LogicalRouterVrfRoutingTableIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: LogicalRouterVrfRoutingTableIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface LogicalRouterVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#administrative_distances LogicalRouter#administrative_distances}
  */
  readonly administrativeDistances?: LogicalRouterVrfAdministrativeDistances;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#bgp LogicalRouter#bgp}
  */
  readonly bgp?: LogicalRouterVrfBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ecmp LogicalRouter#ecmp}
  */
  readonly ecmp?: LogicalRouterVrfEcmp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#interface LogicalRouter#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#multicast LogicalRouter#multicast}
  */
  readonly multicast?: LogicalRouterVrfMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#name LogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospf LogicalRouter#ospf}
  */
  readonly ospf?: LogicalRouterVrfOspf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#ospfv3 LogicalRouter#ospfv3}
  */
  readonly ospfv3?: LogicalRouterVrfOspfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#rib_filter LogicalRouter#rib_filter}
  */
  readonly ribFilter?: LogicalRouterVrfRibFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#rip LogicalRouter#rip}
  */
  readonly rip?: LogicalRouterVrfRip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#routing_table LogicalRouter#routing_table}
  */
  readonly routingTable?: LogicalRouterVrfRoutingTable;
}

export function logicalRouterVrfToTerraform(struct?: LogicalRouterVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrative_distances: logicalRouterVrfAdministrativeDistancesToTerraform(struct!.administrativeDistances),
    bgp: logicalRouterVrfBgpToTerraform(struct!.bgp),
    ecmp: logicalRouterVrfEcmpToTerraform(struct!.ecmp),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    multicast: logicalRouterVrfMulticastToTerraform(struct!.multicast),
    name: cdktf.stringToTerraform(struct!.name),
    ospf: logicalRouterVrfOspfToTerraform(struct!.ospf),
    ospfv3: logicalRouterVrfOspfv3ToTerraform(struct!.ospfv3),
    rib_filter: logicalRouterVrfRibFilterToTerraform(struct!.ribFilter),
    rip: logicalRouterVrfRipToTerraform(struct!.rip),
    routing_table: logicalRouterVrfRoutingTableToTerraform(struct!.routingTable),
  }
}


export function logicalRouterVrfToHclTerraform(struct?: LogicalRouterVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrative_distances: {
      value: logicalRouterVrfAdministrativeDistancesToHclTerraform(struct!.administrativeDistances),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfAdministrativeDistances",
    },
    bgp: {
      value: logicalRouterVrfBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfBgp",
    },
    ecmp: {
      value: logicalRouterVrfEcmpToHclTerraform(struct!.ecmp),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfEcmp",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multicast: {
      value: logicalRouterVrfMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfMulticast",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: logicalRouterVrfOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspf",
    },
    ospfv3: {
      value: logicalRouterVrfOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfOspfv3",
    },
    rib_filter: {
      value: logicalRouterVrfRibFilterToHclTerraform(struct!.ribFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRibFilter",
    },
    rip: {
      value: logicalRouterVrfRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRip",
    },
    routing_table: {
      value: logicalRouterVrfRoutingTableToHclTerraform(struct!.routingTable),
      isBlock: true,
      type: "struct",
      storageClassType: "LogicalRouterVrfRoutingTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalRouterVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalRouterVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administrativeDistances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrativeDistances = this._administrativeDistances?.internalValue;
    }
    if (this._bgp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgp = this._bgp?.internalValue;
    }
    if (this._ecmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecmp = this._ecmp?.internalValue;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ospf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf?.internalValue;
    }
    if (this._ospfv3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfv3 = this._ospfv3?.internalValue;
    }
    if (this._ribFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ribFilter = this._ribFilter?.internalValue;
    }
    if (this._rip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip?.internalValue;
    }
    if (this._routingTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingTable = this._routingTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalRouterVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._administrativeDistances.internalValue = undefined;
      this._bgp.internalValue = undefined;
      this._ecmp.internalValue = undefined;
      this._interface = undefined;
      this._multicast.internalValue = undefined;
      this._name = undefined;
      this._ospf.internalValue = undefined;
      this._ospfv3.internalValue = undefined;
      this._ribFilter.internalValue = undefined;
      this._rip.internalValue = undefined;
      this._routingTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._administrativeDistances.internalValue = value.administrativeDistances;
      this._bgp.internalValue = value.bgp;
      this._ecmp.internalValue = value.ecmp;
      this._interface = value.interface;
      this._multicast.internalValue = value.multicast;
      this._name = value.name;
      this._ospf.internalValue = value.ospf;
      this._ospfv3.internalValue = value.ospfv3;
      this._ribFilter.internalValue = value.ribFilter;
      this._rip.internalValue = value.rip;
      this._routingTable.internalValue = value.routingTable;
    }
  }

  // administrative_distances - computed: false, optional: true, required: false
  private _administrativeDistances = new LogicalRouterVrfAdministrativeDistancesOutputReference(this, "administrative_distances");
  public get administrativeDistances() {
    return this._administrativeDistances;
  }
  public putAdministrativeDistances(value: LogicalRouterVrfAdministrativeDistances) {
    this._administrativeDistances.internalValue = value;
  }
  public resetAdministrativeDistances() {
    this._administrativeDistances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistancesInput() {
    return this._administrativeDistances.internalValue;
  }

  // bgp - computed: false, optional: true, required: false
  private _bgp = new LogicalRouterVrfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: LogicalRouterVrfBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ecmp - computed: false, optional: true, required: false
  private _ecmp = new LogicalRouterVrfEcmpOutputReference(this, "ecmp");
  public get ecmp() {
    return this._ecmp;
  }
  public putEcmp(value: LogicalRouterVrfEcmp) {
    this._ecmp.internalValue = value;
  }
  public resetEcmp() {
    this._ecmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpInput() {
    return this._ecmp.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return this.getListAttribute('interface');
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new LogicalRouterVrfMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: LogicalRouterVrfMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
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

  // ospf - computed: false, optional: true, required: false
  private _ospf = new LogicalRouterVrfOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: LogicalRouterVrfOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ospfv3 - computed: false, optional: true, required: false
  private _ospfv3 = new LogicalRouterVrfOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: LogicalRouterVrfOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // rib_filter - computed: false, optional: true, required: false
  private _ribFilter = new LogicalRouterVrfRibFilterOutputReference(this, "rib_filter");
  public get ribFilter() {
    return this._ribFilter;
  }
  public putRibFilter(value: LogicalRouterVrfRibFilter) {
    this._ribFilter.internalValue = value;
  }
  public resetRibFilter() {
    this._ribFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribFilterInput() {
    return this._ribFilter.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new LogicalRouterVrfRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: LogicalRouterVrfRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // routing_table - computed: false, optional: true, required: false
  private _routingTable = new LogicalRouterVrfRoutingTableOutputReference(this, "routing_table");
  public get routingTable() {
    return this._routingTable;
  }
  public putRoutingTable(value: LogicalRouterVrfRoutingTable) {
    this._routingTable.internalValue = value;
  }
  public resetRoutingTable() {
    this._routingTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTableInput() {
    return this._routingTable.internalValue;
  }
}

export class LogicalRouterVrfList extends cdktf.ComplexList {
  public internalValue? : LogicalRouterVrf[] | cdktf.IResolvable

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
  public get(index: number): LogicalRouterVrfOutputReference {
    return new LogicalRouterVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router panos_logical_router}
*/
export class LogicalRouter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_logical_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalRouter to import
  * @param importFromId The id of the existing LogicalRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_logical_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/resources/logical_router panos_logical_router} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalRouterConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_logical_router',
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
    this._name = config.name;
    this._vrf.internalValue = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new LogicalRouterLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: LogicalRouterLocation) {
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

  // vrf - computed: false, optional: true, required: false
  private _vrf = new LogicalRouterVrfList(this, "vrf", false);
  public get vrf() {
    return this._vrf;
  }
  public putVrf(value: LogicalRouterVrf[] | cdktf.IResolvable) {
    this._vrf.internalValue = value;
  }
  public resetVrf() {
    this._vrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: logicalRouterLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      vrf: cdktf.listMapper(logicalRouterVrfToTerraform, false)(this._vrf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: logicalRouterLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LogicalRouterLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.listMapperHcl(logicalRouterVrfToHclTerraform, false)(this._vrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicalRouterVrfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
