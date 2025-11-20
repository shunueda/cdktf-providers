// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosLogicalRouterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#location DataPanosLogicalRouter#location}
  */
  readonly location: DataPanosLogicalRouterLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#vrf DataPanosLogicalRouter#vrf}
  */
  readonly vrf?: DataPanosLogicalRouterVrf[] | cdktf.IResolvable;
}
export interface DataPanosLogicalRouterLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ngfw_device DataPanosLogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosLogicalRouterLocationNgfwToTerraform(struct?: DataPanosLogicalRouterLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosLogicalRouterLocationNgfwToHclTerraform(struct?: DataPanosLogicalRouterLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ngfw_device DataPanosLogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#panorama_device DataPanosLogicalRouter#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosLogicalRouterLocationTemplateToTerraform(struct?: DataPanosLogicalRouterLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterLocationTemplateToHclTerraform(struct?: DataPanosLogicalRouterLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ngfw_device DataPanosLogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#panorama_device DataPanosLogicalRouter#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosLogicalRouterLocationTemplateStackToTerraform(struct?: DataPanosLogicalRouterLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterLocationTemplateStackToHclTerraform(struct?: DataPanosLogicalRouterLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterLocationVsys {
  /**
  * The Virtual System name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name?: string;
  /**
  * The NGFW device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ngfw_device DataPanosLogicalRouter#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosLogicalRouterLocationVsysToTerraform(struct?: DataPanosLogicalRouterLocationVsys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosLogicalRouterLocationVsysToHclTerraform(struct?: DataPanosLogicalRouterLocationVsys | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterLocationVsysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterLocationVsys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterLocationVsys | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ngfw DataPanosLogicalRouter#ngfw}
  */
  readonly ngfw?: DataPanosLogicalRouterLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#template DataPanosLogicalRouter#template}
  */
  readonly template?: DataPanosLogicalRouterLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#template_stack DataPanosLogicalRouter#template_stack}
  */
  readonly templateStack?: DataPanosLogicalRouterLocationTemplateStack;
  /**
  * Located in a specific Virtual System
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#vsys DataPanosLogicalRouter#vsys}
  */
  readonly vsys?: DataPanosLogicalRouterLocationVsys;
}

export function dataPanosLogicalRouterLocationToTerraform(struct?: DataPanosLogicalRouterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosLogicalRouterLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosLogicalRouterLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosLogicalRouterLocationTemplateStackToTerraform(struct!.templateStack),
    vsys: dataPanosLogicalRouterLocationVsysToTerraform(struct!.vsys),
  }
}


export function dataPanosLogicalRouterLocationToHclTerraform(struct?: DataPanosLogicalRouterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosLogicalRouterLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterLocationNgfw",
    },
    template: {
      value: dataPanosLogicalRouterLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterLocationTemplate",
    },
    template_stack: {
      value: dataPanosLogicalRouterLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterLocationTemplateStack",
    },
    vsys: {
      value: dataPanosLogicalRouterLocationVsysToHclTerraform(struct!.vsys),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterLocationVsys",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosLogicalRouterLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosLogicalRouterLocationNgfw) {
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
  private _template = new DataPanosLogicalRouterLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosLogicalRouterLocationTemplate) {
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
  private _templateStack = new DataPanosLogicalRouterLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosLogicalRouterLocationTemplateStack) {
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
  private _vsys = new DataPanosLogicalRouterLocationVsysOutputReference(this, "vsys");
  public get vsys() {
    return this._vsys;
  }
  public putVsys(value: DataPanosLogicalRouterLocationVsys) {
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
export interface DataPanosLogicalRouterVrfAdministrativeDistances {
  /**
  * Set BGP AS External Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bgp_external DataPanosLogicalRouter#bgp_external}
  */
  readonly bgpExternal?: number;
  /**
  * Set BGP AS Internal Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bgp_internal DataPanosLogicalRouter#bgp_internal}
  */
  readonly bgpInternal?: number;
  /**
  * Set BGP Local Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bgp_local DataPanosLogicalRouter#bgp_local}
  */
  readonly bgpLocal?: number;
  /**
  * Set OSPF External Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospf_ext DataPanosLogicalRouter#ospf_ext}
  */
  readonly ospfExt?: number;
  /**
  * Set OSPF Inter Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospf_inter DataPanosLogicalRouter#ospf_inter}
  */
  readonly ospfInter?: number;
  /**
  * Set OSPF Intra Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospf_intra DataPanosLogicalRouter#ospf_intra}
  */
  readonly ospfIntra?: number;
  /**
  * Set OSPFv3 External Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospfv3_ext DataPanosLogicalRouter#ospfv3_ext}
  */
  readonly ospfv3Ext?: number;
  /**
  * Set OSPFv3 Inter Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospfv3_inter DataPanosLogicalRouter#ospfv3_inter}
  */
  readonly ospfv3Inter?: number;
  /**
  * Set OSPFv3 Intra Area Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospfv3_intra DataPanosLogicalRouter#ospfv3_intra}
  */
  readonly ospfv3Intra?: number;
  /**
  * Set RIP Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#rip DataPanosLogicalRouter#rip}
  */
  readonly rip?: number;
  /**
  * Set IPv4 Static Routes Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static DataPanosLogicalRouter#static}
  */
  readonly static?: number;
  /**
  * Set IPv6 Static Routes  Administrative Distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static_ipv6 DataPanosLogicalRouter#static_ipv6}
  */
  readonly staticIpv6?: number;
}

export function dataPanosLogicalRouterVrfAdministrativeDistancesToTerraform(struct?: DataPanosLogicalRouterVrfAdministrativeDistances | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfAdministrativeDistancesToHclTerraform(struct?: DataPanosLogicalRouterVrfAdministrativeDistances | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfAdministrativeDistancesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfAdministrativeDistances | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfAdministrativeDistances | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network {
  /**
  * Mark network as backdoor route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#backdoor DataPanosLogicalRouter#backdoor}
  */
  readonly backdoor?: boolean | cdktf.IResolvable;
  /**
  * Multicast Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#multicast DataPanosLogicalRouter#multicast}
  */
  readonly multicast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Unicast Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#unicast DataPanosLogicalRouter#unicast}
  */
  readonly unicast?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network | cdktf.IResolvable | undefined) {
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

  // backdoor - computed: true, optional: true, required: false
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

  // multicast - computed: true, optional: true, required: false
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

  // unicast - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference {
    return new DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#network DataPanosLogicalRouter#network}
  */
  readonly network?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4ToTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.listMapper(dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToTerraform, false)(struct!.network),
  }
}


export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4ToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkToHclTerraform, false)(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4 | cdktf.IResolvable | undefined) {
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

  // network - computed: true, optional: true, required: false
  private _network = new DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4Network[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Unicast Network configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#unicast DataPanosLogicalRouter#unicast}
  */
  readonly unicast?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    unicast: cdktf.booleanToTerraform(struct!.unicast),
  }
}


export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network | cdktf.IResolvable | undefined) {
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

  // unicast - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference {
    return new DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#network DataPanosLogicalRouter#network}
  */
  readonly network?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6ToTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.listMapper(dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToTerraform, false)(struct!.network),
  }
}


export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6ToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkToHclTerraform, false)(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6 | cdktf.IResolvable | undefined) {
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

  // network - computed: true, optional: true, required: false
  private _network = new DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6Network[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfBgpAdvertiseNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6;
}

export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkToTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4ToTerraform(struct!.ipv4),
    ipv6: dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfBgpAdvertiseNetworkToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4",
    },
    ipv6: {
      value: dataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpAdvertiseNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAdvertiseNetwork | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosLogicalRouterVrfBgpAdvertiseNetworkIpv6) {
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
export interface DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4 {
  /**
  * Specify Route-Map to set attributes of aggregate prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#attribute_map DataPanosLogicalRouter#attribute_map}
  */
  readonly attributeMap?: string;
  /**
  * Aggregating Address Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#summary_prefix DataPanosLogicalRouter#summary_prefix}
  */
  readonly summaryPrefix?: string;
  /**
  * Specify Route-Map to select routes to be suppressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#suppress_map DataPanosLogicalRouter#suppress_map}
  */
  readonly suppressMap?: string;
}

export function dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4ToTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4ToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4 | cdktf.IResolvable | undefined) {
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

  // attribute_map - computed: true, optional: true, required: false
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

  // summary_prefix - computed: true, optional: true, required: false
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

  // suppress_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6 {
  /**
  * Specify Route-Map to set attributes of aggregate prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#attribute_map DataPanosLogicalRouter#attribute_map}
  */
  readonly attributeMap?: string;
  /**
  * Aggregating Address Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#summary_prefix DataPanosLogicalRouter#summary_prefix}
  */
  readonly summaryPrefix?: string;
  /**
  * Specify Route-Map to select routes to be suppressed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#suppress_map DataPanosLogicalRouter#suppress_map}
  */
  readonly suppressMap?: string;
}

export function dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6ToTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6ToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6 | cdktf.IResolvable | undefined) {
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

  // attribute_map - computed: true, optional: true, required: false
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

  // summary_prefix - computed: true, optional: true, required: false
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

  // suppress_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpAggregateRoutesType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6;
}

export function dataPanosLogicalRouterVrfBgpAggregateRoutesTypeToTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4ToTerraform(struct!.ipv4),
    ipv6: dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfBgpAggregateRoutesTypeToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4",
    },
    ipv6: {
      value: dataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpAggregateRoutesTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAggregateRoutesType | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosLogicalRouterVrfBgpAggregateRoutesTypeIpv6) {
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
export interface DataPanosLogicalRouterVrfBgpAggregateRoutes {
  /**
  * Generate AS set path attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#as_set DataPanosLogicalRouter#as_set}
  */
  readonly asSet?: boolean | cdktf.IResolvable;
  /**
  * Describe Aggregate Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#description DataPanosLogicalRouter#description}
  */
  readonly description?: string;
  /**
  * Enable Aggregation for this Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Aggregate Routes only if they have same MED Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#same_med DataPanosLogicalRouter#same_med}
  */
  readonly sameMed?: boolean | cdktf.IResolvable;
  /**
  * Send only Summary Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#summary_only DataPanosLogicalRouter#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#type DataPanosLogicalRouter#type}
  */
  readonly type?: DataPanosLogicalRouterVrfBgpAggregateRoutesType;
}

export function dataPanosLogicalRouterVrfBgpAggregateRoutesToTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable): any {
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
    type: dataPanosLogicalRouterVrfBgpAggregateRoutesTypeToTerraform(struct!.type),
  }
}


export function dataPanosLogicalRouterVrfBgpAggregateRoutesToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfBgpAggregateRoutesTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpAggregateRoutesType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpAggregateRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpAggregateRoutes | cdktf.IResolvable | undefined) {
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

  // as_set - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // same_med - computed: true, optional: true, required: false
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

  // summary_only - computed: true, optional: true, required: false
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

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosLogicalRouterVrfBgpAggregateRoutesTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosLogicalRouterVrfBgpAggregateRoutesType) {
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

export class DataPanosLogicalRouterVrfBgpAggregateRoutesList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfBgpAggregateRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfBgpAggregateRoutesOutputReference {
    return new DataPanosLogicalRouterVrfBgpAggregateRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfBgpGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfBgpGlobalBfdToTerraform(struct?: DataPanosLogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfBgpGlobalBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpGlobalBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpGracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * local restart time to advertise to peer Default:120 (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#local_restart_time DataPanosLogicalRouter#local_restart_time}
  */
  readonly localRestartTime?: number;
  /**
  * maximum of peer restart time accepted Default:120 (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#max_peer_restart_time DataPanosLogicalRouter#max_peer_restart_time}
  */
  readonly maxPeerRestartTime?: number;
  /**
  * time to remove stale routes after peer restart Default:120 (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#stale_route_time DataPanosLogicalRouter#stale_route_time}
  */
  readonly staleRouteTime?: number;
}

export function dataPanosLogicalRouterVrfBgpGracefulRestartToTerraform(struct?: DataPanosLogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfBgpGracefulRestartToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpGracefulRestart | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpMed {
  /**
  * always compare MEDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#always_compare_med DataPanosLogicalRouter#always_compare_med}
  */
  readonly alwaysCompareMed?: boolean | cdktf.IResolvable;
  /**
  * deterministic MEDs comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#deterministic_med_comparison DataPanosLogicalRouter#deterministic_med_comparison}
  */
  readonly deterministicMedComparison?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfBgpMedToTerraform(struct?: DataPanosLogicalRouterVrfBgpMed | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_compare_med: cdktf.booleanToTerraform(struct!.alwaysCompareMed),
    deterministic_med_comparison: cdktf.booleanToTerraform(struct!.deterministicMedComparison),
  }
}


export function dataPanosLogicalRouterVrfBgpMedToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpMed | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpMedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpMed | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpMed | cdktf.IResolvable | undefined) {
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

  // always_compare_med - computed: true, optional: true, required: false
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

  // deterministic_med_comparison - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily {
  /**
  * Enable IPv4 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Enable IPv6 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupAddressFamilyToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupAddressFamilyToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions {
  /**
  * Authentication Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Dampening Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#dampening DataPanosLogicalRouter#dampening}
  */
  readonly dampening?: string;
  /**
  * Multi-hop value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#multihop DataPanosLogicalRouter#multihop}
  */
  readonly multihop?: number;
  /**
  * Timer Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#timers DataPanosLogicalRouter#timers}
  */
  readonly timers?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupConnectionOptionsToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfBgpPeerGroupConnectionOptionsToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile {
  /**
  * IPv4 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupFilteringProfileToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupFilteringProfileToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerBfdToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions {
  /**
  * Authentication Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Dampening Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#dampening DataPanosLogicalRouter#dampening}
  */
  readonly dampening?: string;
  /**
  * Multi-hop value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#multihop DataPanosLogicalRouter#multihop}
  */
  readonly multihop?: string;
  /**
  * Timer Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#timers DataPanosLogicalRouter#timers}
  */
  readonly timers?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily {
  /**
  * Enable IPv4 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Enable IPv6 route exchange
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile {
  /**
  * IPv4 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: string;
  /**
  * IPv6 Filtering Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#address_family DataPanosLogicalRouter#address_family}
  */
  readonly addressFamily?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#filtering_profile DataPanosLogicalRouter#filtering_profile}
  */
  readonly filteringProfile?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToTerraform(struct!.addressFamily),
    filtering_profile: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToTerraform(struct!.filteringProfile),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyToHclTerraform(struct!.addressFamily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily",
    },
    filtering_profile: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileToHclTerraform(struct!.filteringProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo | cdktf.IResolvable | undefined) {
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

  // address_family - computed: true, optional: true, required: false
  private _addressFamily = new DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }
  public putAddressFamily(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoAddressFamily) {
    this._addressFamily.internalValue = value;
  }
  public resetAddressFamily() {
    this._addressFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily.internalValue;
  }

  // filtering_profile - computed: true, optional: true, required: false
  private _filteringProfile = new DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }
  public putFilteringProfile(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoFilteringProfile) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes {
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYesToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYesToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#no DataPanosLogicalRouter#no}
  */
  readonly no?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#yes DataPanosLogicalRouter#yes}
  */
  readonly yes?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoToTerraform(struct!.no),
    yes: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYesToTerraform(struct!.yes),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoToHclTerraform(struct!.no),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo",
    },
    yes: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYesToHclTerraform(struct!.yes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit | cdktf.IResolvable | undefined) {
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

  // no - computed: true, optional: true, required: false
  private _no = new DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNoOutputReference(this, "no");
  public get no() {
    return this._no;
  }
  public putNo(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritNo) {
    this._no.internalValue = value;
  }
  public resetNo() {
    this._no.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInput() {
    return this._no.internalValue;
  }

  // yes - computed: true, optional: true, required: false
  private _yes = new DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYesOutputReference(this, "yes");
  public get yes() {
    return this._yes;
  }
  public putYes(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritYes) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress {
  /**
  * interface to accept BGP session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip DataPanosLogicalRouter#ip}
  */
  readonly ip?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddressToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddressToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress | cdktf.IResolvable | undefined) {
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

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress {
  /**
  * Peer FQDN Address Object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#fqdn DataPanosLogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * peer address configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip DataPanosLogicalRouter#ip}
  */
  readonly ip?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddressToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddressToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress | cdktf.IResolvable | undefined) {
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

  // fqdn - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupPeer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bfd DataPanosLogicalRouter#bfd}
  */
  readonly bfd?: DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#connection_options DataPanosLogicalRouter#connection_options}
  */
  readonly connectionOptions?: DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable_sender_side_loop_detection DataPanosLogicalRouter#enable_sender_side_loop_detection}
  */
  readonly enableSenderSideLoopDetection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inherit DataPanosLogicalRouter#inherit}
  */
  readonly inherit?: DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#local_address DataPanosLogicalRouter#local_address}
  */
  readonly localAddress?: DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * If enabled, open messages are not sent to this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#passive DataPanosLogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#peer_address DataPanosLogicalRouter#peer_address}
  */
  readonly peerAddress?: DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress;
  /**
  * peer AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#peer_as DataPanosLogicalRouter#peer_as}
  */
  readonly peerAs?: string;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupPeerToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: dataPanosLogicalRouterVrfBgpPeerGroupPeerBfdToTerraform(struct!.bfd),
    connection_options: dataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsToTerraform(struct!.connectionOptions),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enable_sender_side_loop_detection: cdktf.booleanToTerraform(struct!.enableSenderSideLoopDetection),
    inherit: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritToTerraform(struct!.inherit),
    local_address: dataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddressToTerraform(struct!.localAddress),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    peer_address: dataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddressToTerraform(struct!.peerAddress),
    peer_as: cdktf.stringToTerraform(struct!.peerAs),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupPeerToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd",
    },
    connection_options: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions",
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
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerInheritToHclTerraform(struct!.inherit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit",
    },
    local_address: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress",
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
      value: dataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddressToHclTerraform(struct!.peerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress",
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupPeer | cdktf.IResolvable | undefined) {
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosLogicalRouterVrfBgpPeerGroupPeerBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // connection_options - computed: true, optional: true, required: false
  private _connectionOptions = new DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // enable_sender_side_loop_detection - computed: true, optional: true, required: false
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

  // inherit - computed: true, optional: true, required: false
  private _inherit = new DataPanosLogicalRouterVrfBgpPeerGroupPeerInheritOutputReference(this, "inherit");
  public get inherit() {
    return this._inherit;
  }
  public putInherit(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerInherit) {
    this._inherit.internalValue = value;
  }
  public resetInherit() {
    this._inherit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritInput() {
    return this._inherit.internalValue;
  }

  // local_address - computed: true, optional: true, required: false
  private _localAddress = new DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerLocalAddress) {
    this._localAddress.internalValue = value;
  }
  public resetLocalAddress() {
    this._localAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress.internalValue;
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

  // passive - computed: true, optional: true, required: false
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

  // peer_address - computed: true, optional: true, required: false
  private _peerAddress = new DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: DataPanosLogicalRouterVrfBgpPeerGroupPeerPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // peer_as - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfBgpPeerGroupPeerList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfBgpPeerGroupPeer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfBgpPeerGroupPeerOutputReference {
    return new DataPanosLogicalRouterVrfBgpPeerGroupPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp {
}

export function dataPanosLogicalRouterVrfBgpPeerGroupTypeEbgpToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupTypeEbgpToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp {
}

export function dataPanosLogicalRouterVrfBgpPeerGroupTypeIbgpToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupTypeIbgpToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroupType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ebgp DataPanosLogicalRouter#ebgp}
  */
  readonly ebgp?: DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ibgp DataPanosLogicalRouter#ibgp}
  */
  readonly ibgp?: DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupTypeToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ebgp: dataPanosLogicalRouterVrfBgpPeerGroupTypeEbgpToTerraform(struct!.ebgp),
    ibgp: dataPanosLogicalRouterVrfBgpPeerGroupTypeIbgpToTerraform(struct!.ibgp),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupTypeToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ebgp: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupTypeEbgpToHclTerraform(struct!.ebgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp",
    },
    ibgp: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupTypeIbgpToHclTerraform(struct!.ibgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpPeerGroupTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroupType | cdktf.IResolvable | undefined) {
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

  // ebgp - computed: true, optional: true, required: false
  private _ebgp = new DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgpOutputReference(this, "ebgp");
  public get ebgp() {
    return this._ebgp;
  }
  public putEbgp(value: DataPanosLogicalRouterVrfBgpPeerGroupTypeEbgp) {
    this._ebgp.internalValue = value;
  }
  public resetEbgp() {
    this._ebgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpInput() {
    return this._ebgp.internalValue;
  }

  // ibgp - computed: true, optional: true, required: false
  private _ibgp = new DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgpOutputReference(this, "ibgp");
  public get ibgp() {
    return this._ibgp;
  }
  public putIbgp(value: DataPanosLogicalRouterVrfBgpPeerGroupTypeIbgp) {
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
export interface DataPanosLogicalRouterVrfBgpPeerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#address_family DataPanosLogicalRouter#address_family}
  */
  readonly addressFamily?: DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#connection_options DataPanosLogicalRouter#connection_options}
  */
  readonly connectionOptions?: DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#filtering_profile DataPanosLogicalRouter#filtering_profile}
  */
  readonly filteringProfile?: DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#peer DataPanosLogicalRouter#peer}
  */
  readonly peer?: DataPanosLogicalRouterVrfBgpPeerGroupPeer[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#type DataPanosLogicalRouter#type}
  */
  readonly type?: DataPanosLogicalRouterVrfBgpPeerGroupType;
}

export function dataPanosLogicalRouterVrfBgpPeerGroupToTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: dataPanosLogicalRouterVrfBgpPeerGroupAddressFamilyToTerraform(struct!.addressFamily),
    connection_options: dataPanosLogicalRouterVrfBgpPeerGroupConnectionOptionsToTerraform(struct!.connectionOptions),
    enable: cdktf.booleanToTerraform(struct!.enable),
    filtering_profile: dataPanosLogicalRouterVrfBgpPeerGroupFilteringProfileToTerraform(struct!.filteringProfile),
    name: cdktf.stringToTerraform(struct!.name),
    peer: cdktf.listMapper(dataPanosLogicalRouterVrfBgpPeerGroupPeerToTerraform, false)(struct!.peer),
    type: dataPanosLogicalRouterVrfBgpPeerGroupTypeToTerraform(struct!.type),
  }
}


export function dataPanosLogicalRouterVrfBgpPeerGroupToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpPeerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupAddressFamilyToHclTerraform(struct!.addressFamily),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily",
    },
    connection_options: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filtering_profile: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupFilteringProfileToHclTerraform(struct!.filteringProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfBgpPeerGroupPeerToHclTerraform, false)(struct!.peer),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupPeerList",
    },
    type: {
      value: dataPanosLogicalRouterVrfBgpPeerGroupTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupType",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpPeerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfBgpPeerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpPeerGroup | cdktf.IResolvable | undefined) {
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

  // address_family - computed: true, optional: true, required: false
  private _addressFamily = new DataPanosLogicalRouterVrfBgpPeerGroupAddressFamilyOutputReference(this, "address_family");
  public get addressFamily() {
    return this._addressFamily;
  }
  public putAddressFamily(value: DataPanosLogicalRouterVrfBgpPeerGroupAddressFamily) {
    this._addressFamily.internalValue = value;
  }
  public resetAddressFamily() {
    this._addressFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily.internalValue;
  }

  // connection_options - computed: true, optional: true, required: false
  private _connectionOptions = new DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DataPanosLogicalRouterVrfBgpPeerGroupConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // filtering_profile - computed: true, optional: true, required: false
  private _filteringProfile = new DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfileOutputReference(this, "filtering_profile");
  public get filteringProfile() {
    return this._filteringProfile;
  }
  public putFilteringProfile(value: DataPanosLogicalRouterVrfBgpPeerGroupFilteringProfile) {
    this._filteringProfile.internalValue = value;
  }
  public resetFilteringProfile() {
    this._filteringProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringProfileInput() {
    return this._filteringProfile.internalValue;
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

  // peer - computed: true, optional: true, required: false
  private _peer = new DataPanosLogicalRouterVrfBgpPeerGroupPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: DataPanosLogicalRouterVrfBgpPeerGroupPeer[] | cdktf.IResolvable) {
    this._peer.internalValue = value;
  }
  public resetPeer() {
    this._peer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosLogicalRouterVrfBgpPeerGroupTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosLogicalRouterVrfBgpPeerGroupType) {
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

export class DataPanosLogicalRouterVrfBgpPeerGroupList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfBgpPeerGroup[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfBgpPeerGroupOutputReference {
    return new DataPanosLogicalRouterVrfBgpPeerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4 {
  /**
  * Redistribution Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#unicast DataPanosLogicalRouter#unicast}
  */
  readonly unicast?: string;
}

export function dataPanosLogicalRouterVrfBgpRedistributionProfileIpv4ToTerraform(struct?: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: cdktf.stringToTerraform(struct!.unicast),
  }
}


export function dataPanosLogicalRouterVrfBgpRedistributionProfileIpv4ToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4 | cdktf.IResolvable | undefined) {
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

  // unicast - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6 {
  /**
  * Redistribution Profile Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#unicast DataPanosLogicalRouter#unicast}
  */
  readonly unicast?: string;
}

export function dataPanosLogicalRouterVrfBgpRedistributionProfileIpv6ToTerraform(struct?: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unicast: cdktf.stringToTerraform(struct!.unicast),
  }
}


export function dataPanosLogicalRouterVrfBgpRedistributionProfileIpv6ToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6 | cdktf.IResolvable | undefined) {
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

  // unicast - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfBgpRedistributionProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6;
}

export function dataPanosLogicalRouterVrfBgpRedistributionProfileToTerraform(struct?: DataPanosLogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataPanosLogicalRouterVrfBgpRedistributionProfileIpv4ToTerraform(struct!.ipv4),
    ipv6: dataPanosLogicalRouterVrfBgpRedistributionProfileIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfBgpRedistributionProfileToHclTerraform(struct?: DataPanosLogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataPanosLogicalRouterVrfBgpRedistributionProfileIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4",
    },
    ipv6: {
      value: dataPanosLogicalRouterVrfBgpRedistributionProfileIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfBgpRedistributionProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgpRedistributionProfile | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosLogicalRouterVrfBgpRedistributionProfileIpv6) {
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
export interface DataPanosLogicalRouterVrfBgp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#advertise_network DataPanosLogicalRouter#advertise_network}
  */
  readonly advertiseNetwork?: DataPanosLogicalRouterVrfBgpAdvertiseNetwork;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#aggregate_routes DataPanosLogicalRouter#aggregate_routes}
  */
  readonly aggregateRoutes?: DataPanosLogicalRouterVrfBgpAggregateRoutes[] | cdktf.IResolvable;
  /**
  * Always advertise network routes even if not present in RIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#always_advertise_network_route DataPanosLogicalRouter#always_advertise_network_route}
  */
  readonly alwaysAdvertiseNetworkRoute?: boolean | cdktf.IResolvable;
  /**
  * Global Default Local Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#default_local_preference DataPanosLogicalRouter#default_local_preference}
  */
  readonly defaultLocalPreference?: number;
  /**
  * Support multiple AS in ECMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ecmp_multi_as DataPanosLogicalRouter#ecmp_multi_as}
  */
  readonly ecmpMultiAs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Enforce First AS for EBGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enforce_first_as DataPanosLogicalRouter#enforce_first_as}
  */
  readonly enforceFirstAs?: boolean | cdktf.IResolvable;
  /**
  * Immediately reset session if a link to a directly connected external peer goes down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#fast_external_failover DataPanosLogicalRouter#fast_external_failover}
  */
  readonly fastExternalFailover?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_bfd DataPanosLogicalRouter#global_bfd}
  */
  readonly globalBfd?: DataPanosLogicalRouterVrfBgpGlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#graceful_restart DataPanosLogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: DataPanosLogicalRouterVrfBgpGracefulRestart;
  /**
  * Gracefully Shutdown BGP following RFC-8326
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#graceful_shutdown DataPanosLogicalRouter#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Populate BGP learned route to global route table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#install_route DataPanosLogicalRouter#install_route}
  */
  readonly installRoute?: boolean | cdktf.IResolvable;
  /**
  * local AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#local_as DataPanosLogicalRouter#local_as}
  */
  readonly localAs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#med DataPanosLogicalRouter#med}
  */
  readonly med?: DataPanosLogicalRouterVrfBgpMed;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#peer_group DataPanosLogicalRouter#peer_group}
  */
  readonly peerGroup?: DataPanosLogicalRouterVrfBgpPeerGroup[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#redistribution_profile DataPanosLogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: DataPanosLogicalRouterVrfBgpRedistributionProfile;
  /**
  * router id of this BGP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#router_id DataPanosLogicalRouter#router_id}
  */
  readonly routerId?: string;
}

export function dataPanosLogicalRouterVrfBgpToTerraform(struct?: DataPanosLogicalRouterVrfBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_network: dataPanosLogicalRouterVrfBgpAdvertiseNetworkToTerraform(struct!.advertiseNetwork),
    aggregate_routes: cdktf.listMapper(dataPanosLogicalRouterVrfBgpAggregateRoutesToTerraform, false)(struct!.aggregateRoutes),
    always_advertise_network_route: cdktf.booleanToTerraform(struct!.alwaysAdvertiseNetworkRoute),
    default_local_preference: cdktf.numberToTerraform(struct!.defaultLocalPreference),
    ecmp_multi_as: cdktf.booleanToTerraform(struct!.ecmpMultiAs),
    enable: cdktf.booleanToTerraform(struct!.enable),
    enforce_first_as: cdktf.booleanToTerraform(struct!.enforceFirstAs),
    fast_external_failover: cdktf.booleanToTerraform(struct!.fastExternalFailover),
    global_bfd: dataPanosLogicalRouterVrfBgpGlobalBfdToTerraform(struct!.globalBfd),
    graceful_restart: dataPanosLogicalRouterVrfBgpGracefulRestartToTerraform(struct!.gracefulRestart),
    graceful_shutdown: cdktf.booleanToTerraform(struct!.gracefulShutdown),
    install_route: cdktf.booleanToTerraform(struct!.installRoute),
    local_as: cdktf.stringToTerraform(struct!.localAs),
    med: dataPanosLogicalRouterVrfBgpMedToTerraform(struct!.med),
    peer_group: cdktf.listMapper(dataPanosLogicalRouterVrfBgpPeerGroupToTerraform, false)(struct!.peerGroup),
    redistribution_profile: dataPanosLogicalRouterVrfBgpRedistributionProfileToTerraform(struct!.redistributionProfile),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function dataPanosLogicalRouterVrfBgpToHclTerraform(struct?: DataPanosLogicalRouterVrfBgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_network: {
      value: dataPanosLogicalRouterVrfBgpAdvertiseNetworkToHclTerraform(struct!.advertiseNetwork),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpAdvertiseNetwork",
    },
    aggregate_routes: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfBgpAggregateRoutesToHclTerraform, false)(struct!.aggregateRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfBgpAggregateRoutesList",
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
      value: dataPanosLogicalRouterVrfBgpGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpGlobalBfd",
    },
    graceful_restart: {
      value: dataPanosLogicalRouterVrfBgpGracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpGracefulRestart",
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
      value: dataPanosLogicalRouterVrfBgpMedToHclTerraform(struct!.med),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpMed",
    },
    peer_group: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfBgpPeerGroupToHclTerraform, false)(struct!.peerGroup),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfBgpPeerGroupList",
    },
    redistribution_profile: {
      value: dataPanosLogicalRouterVrfBgpRedistributionProfileToHclTerraform(struct!.redistributionProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgpRedistributionProfile",
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

export class DataPanosLogicalRouterVrfBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfBgp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfBgp | cdktf.IResolvable | undefined) {
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

  // advertise_network - computed: true, optional: true, required: false
  private _advertiseNetwork = new DataPanosLogicalRouterVrfBgpAdvertiseNetworkOutputReference(this, "advertise_network");
  public get advertiseNetwork() {
    return this._advertiseNetwork;
  }
  public putAdvertiseNetwork(value: DataPanosLogicalRouterVrfBgpAdvertiseNetwork) {
    this._advertiseNetwork.internalValue = value;
  }
  public resetAdvertiseNetwork() {
    this._advertiseNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseNetworkInput() {
    return this._advertiseNetwork.internalValue;
  }

  // aggregate_routes - computed: true, optional: true, required: false
  private _aggregateRoutes = new DataPanosLogicalRouterVrfBgpAggregateRoutesList(this, "aggregate_routes", false);
  public get aggregateRoutes() {
    return this._aggregateRoutes;
  }
  public putAggregateRoutes(value: DataPanosLogicalRouterVrfBgpAggregateRoutes[] | cdktf.IResolvable) {
    this._aggregateRoutes.internalValue = value;
  }
  public resetAggregateRoutes() {
    this._aggregateRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateRoutesInput() {
    return this._aggregateRoutes.internalValue;
  }

  // always_advertise_network_route - computed: true, optional: true, required: false
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

  // ecmp_multi_as - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // enforce_first_as - computed: true, optional: true, required: false
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

  // fast_external_failover - computed: true, optional: true, required: false
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

  // global_bfd - computed: true, optional: true, required: false
  private _globalBfd = new DataPanosLogicalRouterVrfBgpGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: DataPanosLogicalRouterVrfBgpGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // graceful_restart - computed: true, optional: true, required: false
  private _gracefulRestart = new DataPanosLogicalRouterVrfBgpGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: DataPanosLogicalRouterVrfBgpGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // graceful_shutdown - computed: true, optional: true, required: false
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

  // install_route - computed: true, optional: true, required: false
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

  // local_as - computed: true, optional: true, required: false
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

  // med - computed: true, optional: true, required: false
  private _med = new DataPanosLogicalRouterVrfBgpMedOutputReference(this, "med");
  public get med() {
    return this._med;
  }
  public putMed(value: DataPanosLogicalRouterVrfBgpMed) {
    this._med.internalValue = value;
  }
  public resetMed() {
    this._med.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get medInput() {
    return this._med.internalValue;
  }

  // peer_group - computed: true, optional: true, required: false
  private _peerGroup = new DataPanosLogicalRouterVrfBgpPeerGroupList(this, "peer_group", false);
  public get peerGroup() {
    return this._peerGroup;
  }
  public putPeerGroup(value: DataPanosLogicalRouterVrfBgpPeerGroup[] | cdktf.IResolvable) {
    this._peerGroup.internalValue = value;
  }
  public resetPeerGroup() {
    this._peerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerGroupInput() {
    return this._peerGroup.internalValue;
  }

  // redistribution_profile - computed: true, optional: true, required: false
  private _redistributionProfile = new DataPanosLogicalRouterVrfBgpRedistributionProfileOutputReference(this, "redistribution_profile");
  public get redistributionProfile() {
    return this._redistributionProfile;
  }
  public putRedistributionProfile(value: DataPanosLogicalRouterVrfBgpRedistributionProfile) {
    this._redistributionProfile.internalValue = value;
  }
  public resetRedistributionProfile() {
    this._redistributionProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributionProfileInput() {
    return this._redistributionProfile.internalValue;
  }

  // router_id - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin {
}

export function dataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinToTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinToHclTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfEcmpAlgorithmIpHash {
  /**
  * User-specified hash seed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#hash_seed DataPanosLogicalRouter#hash_seed}
  */
  readonly hashSeed?: number;
  /**
  * only use source address for hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#src_only DataPanosLogicalRouter#src_only}
  */
  readonly srcOnly?: boolean | cdktf.IResolvable;
  /**
  * use source/destination port for hash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#use_port DataPanosLogicalRouter#use_port}
  */
  readonly usePort?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfEcmpAlgorithmIpHashToTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfEcmpAlgorithmIpHashToHclTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfEcmpAlgorithmIpHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfEcmpAlgorithmIpHash | cdktf.IResolvable | undefined) {
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

  // src_only - computed: true, optional: true, required: false
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

  // use_port - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo {
}

export function dataPanosLogicalRouterVrfEcmpAlgorithmIpModuloToTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfEcmpAlgorithmIpModuloToHclTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfEcmpAlgorithmIpModuloOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * interface ECMP weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#weight DataPanosLogicalRouter#weight}
  */
  readonly weight?: number;
}

export function dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToHclTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface | cdktf.IResolvable | undefined) {
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

export class DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference {
    return new DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinToTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToTerraform, false)(struct!.interface),
  }
}


export function dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinToHclTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin | cdktf.IResolvable | undefined) {
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

  // interface - computed: true, optional: true, required: false
  private _interface = new DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinInterface[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfEcmpAlgorithm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#balanced_round_robin DataPanosLogicalRouter#balanced_round_robin}
  */
  readonly balancedRoundRobin?: DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip_hash DataPanosLogicalRouter#ip_hash}
  */
  readonly ipHash?: DataPanosLogicalRouterVrfEcmpAlgorithmIpHash;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip_modulo DataPanosLogicalRouter#ip_modulo}
  */
  readonly ipModulo?: DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#weighted_round_robin DataPanosLogicalRouter#weighted_round_robin}
  */
  readonly weightedRoundRobin?: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin;
}

export function dataPanosLogicalRouterVrfEcmpAlgorithmToTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balanced_round_robin: dataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinToTerraform(struct!.balancedRoundRobin),
    ip_hash: dataPanosLogicalRouterVrfEcmpAlgorithmIpHashToTerraform(struct!.ipHash),
    ip_modulo: dataPanosLogicalRouterVrfEcmpAlgorithmIpModuloToTerraform(struct!.ipModulo),
    weighted_round_robin: dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinToTerraform(struct!.weightedRoundRobin),
  }
}


export function dataPanosLogicalRouterVrfEcmpAlgorithmToHclTerraform(struct?: DataPanosLogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balanced_round_robin: {
      value: dataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinToHclTerraform(struct!.balancedRoundRobin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin",
    },
    ip_hash: {
      value: dataPanosLogicalRouterVrfEcmpAlgorithmIpHashToHclTerraform(struct!.ipHash),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfEcmpAlgorithmIpHash",
    },
    ip_modulo: {
      value: dataPanosLogicalRouterVrfEcmpAlgorithmIpModuloToHclTerraform(struct!.ipModulo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo",
    },
    weighted_round_robin: {
      value: dataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinToHclTerraform(struct!.weightedRoundRobin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfEcmpAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfEcmpAlgorithm | cdktf.IResolvable | undefined) {
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

  // balanced_round_robin - computed: true, optional: true, required: false
  private _balancedRoundRobin = new DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobinOutputReference(this, "balanced_round_robin");
  public get balancedRoundRobin() {
    return this._balancedRoundRobin;
  }
  public putBalancedRoundRobin(value: DataPanosLogicalRouterVrfEcmpAlgorithmBalancedRoundRobin) {
    this._balancedRoundRobin.internalValue = value;
  }
  public resetBalancedRoundRobin() {
    this._balancedRoundRobin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancedRoundRobinInput() {
    return this._balancedRoundRobin.internalValue;
  }

  // ip_hash - computed: true, optional: true, required: false
  private _ipHash = new DataPanosLogicalRouterVrfEcmpAlgorithmIpHashOutputReference(this, "ip_hash");
  public get ipHash() {
    return this._ipHash;
  }
  public putIpHash(value: DataPanosLogicalRouterVrfEcmpAlgorithmIpHash) {
    this._ipHash.internalValue = value;
  }
  public resetIpHash() {
    this._ipHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipHashInput() {
    return this._ipHash.internalValue;
  }

  // ip_modulo - computed: true, optional: true, required: false
  private _ipModulo = new DataPanosLogicalRouterVrfEcmpAlgorithmIpModuloOutputReference(this, "ip_modulo");
  public get ipModulo() {
    return this._ipModulo;
  }
  public putIpModulo(value: DataPanosLogicalRouterVrfEcmpAlgorithmIpModulo) {
    this._ipModulo.internalValue = value;
  }
  public resetIpModulo() {
    this._ipModulo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModuloInput() {
    return this._ipModulo.internalValue;
  }

  // weighted_round_robin - computed: true, optional: true, required: false
  private _weightedRoundRobin = new DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobinOutputReference(this, "weighted_round_robin");
  public get weightedRoundRobin() {
    return this._weightedRoundRobin;
  }
  public putWeightedRoundRobin(value: DataPanosLogicalRouterVrfEcmpAlgorithmWeightedRoundRobin) {
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
export interface DataPanosLogicalRouterVrfEcmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#algorithm DataPanosLogicalRouter#algorithm}
  */
  readonly algorithm?: DataPanosLogicalRouterVrfEcmpAlgorithm;
  /**
  * enable Equal Cost Multipath routing, change this configuration will result in a virtual router restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Maxmum number of ECMP paths supported, change this configuration will result in a virtual router restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#max_paths DataPanosLogicalRouter#max_paths}
  */
  readonly maxPaths?: number;
  /**
  * force VPN traffic to exit interface that the source-ip belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#strict_source_path DataPanosLogicalRouter#strict_source_path}
  */
  readonly strictSourcePath?: boolean | cdktf.IResolvable;
  /**
  * allows return packets to egress out of the ingress interface of the flow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#symmetric_return DataPanosLogicalRouter#symmetric_return}
  */
  readonly symmetricReturn?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfEcmpToTerraform(struct?: DataPanosLogicalRouterVrfEcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: dataPanosLogicalRouterVrfEcmpAlgorithmToTerraform(struct!.algorithm),
    enable: cdktf.booleanToTerraform(struct!.enable),
    max_paths: cdktf.numberToTerraform(struct!.maxPaths),
    strict_source_path: cdktf.booleanToTerraform(struct!.strictSourcePath),
    symmetric_return: cdktf.booleanToTerraform(struct!.symmetricReturn),
  }
}


export function dataPanosLogicalRouterVrfEcmpToHclTerraform(struct?: DataPanosLogicalRouterVrfEcmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: dataPanosLogicalRouterVrfEcmpAlgorithmToHclTerraform(struct!.algorithm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfEcmpAlgorithm",
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

export class DataPanosLogicalRouterVrfEcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfEcmp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfEcmp | cdktf.IResolvable | undefined) {
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

  // algorithm - computed: true, optional: true, required: false
  private _algorithm = new DataPanosLogicalRouterVrfEcmpAlgorithmOutputReference(this, "algorithm");
  public get algorithm() {
    return this._algorithm;
  }
  public putAlgorithm(value: DataPanosLogicalRouterVrfEcmpAlgorithm) {
    this._algorithm.internalValue = value;
  }
  public resetAlgorithm() {
    this._algorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // strict_source_path - computed: true, optional: true, required: false
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

  // symmetric_return - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface {
  /**
  * ASM/SSM Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#group_filter DataPanosLogicalRouter#group_filter}
  */
  readonly groupFilter?: string;
  /**
  * maximum number of groups allowed on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#max_groups DataPanosLogicalRouter#max_groups}
  */
  readonly maxGroups?: string;
  /**
  * maximum number of source-specific memberships allowed on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#max_sources DataPanosLogicalRouter#max_sources}
  */
  readonly maxSources?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * IGMP Query Timer Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#query_profile DataPanosLogicalRouter#query_profile}
  */
  readonly queryProfile?: string;
  /**
  * robustness variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#robustness DataPanosLogicalRouter#robustness}
  */
  readonly robustness?: string;
  /**
  * drop IGMP packets without Router Alert option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#router_alert_policing DataPanosLogicalRouter#router_alert_policing}
  */
  readonly routerAlertPolicing?: boolean | cdktf.IResolvable;
  /**
  * IGMP version number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#version DataPanosLogicalRouter#version}
  */
  readonly version?: string;
}

export function dataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceToTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface | cdktf.IResolvable | undefined) {
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

  // query_profile - computed: true, optional: true, required: false
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

  // router_alert_policing - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference {
    return new DataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfMulticastIgmpDynamic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfMulticastIgmpDynamicToTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.listMapper(dataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceToTerraform, false)(struct!.interface),
  }
}


export function dataPanosLogicalRouterVrfMulticastIgmpDynamicToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfMulticastIgmpDynamicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastIgmpDynamic | cdktf.IResolvable | undefined) {
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

  // interface - computed: true, optional: true, required: false
  private _interface = new DataPanosLogicalRouterVrfMulticastIgmpDynamicInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataPanosLogicalRouterVrfMulticastIgmpDynamicInterface[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfMulticastIgmpStatic {
  /**
  * group-address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#group_address DataPanosLogicalRouter#group_address}
  */
  readonly groupAddress?: string;
  /**
  * multicast interfaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * source-address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#source_address DataPanosLogicalRouter#source_address}
  */
  readonly sourceAddress?: string;
}

export function dataPanosLogicalRouterVrfMulticastIgmpStaticToTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfMulticastIgmpStaticToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastIgmpStaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastIgmpStatic | cdktf.IResolvable | undefined) {
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

  // group_address - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // source_address - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfMulticastIgmpStaticList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfMulticastIgmpStatic[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfMulticastIgmpStaticOutputReference {
    return new DataPanosLogicalRouterVrfMulticastIgmpStaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfMulticastIgmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#dynamic DataPanosLogicalRouter#dynamic}
  */
  readonly dynamic?: DataPanosLogicalRouterVrfMulticastIgmpDynamic;
  /**
  * enable IGMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static DataPanosLogicalRouter#static}
  */
  readonly static?: DataPanosLogicalRouterVrfMulticastIgmpStatic[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfMulticastIgmpToTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dynamic: dataPanosLogicalRouterVrfMulticastIgmpDynamicToTerraform(struct!.dynamic),
    enable: cdktf.booleanToTerraform(struct!.enable),
    static: cdktf.listMapper(dataPanosLogicalRouterVrfMulticastIgmpStaticToTerraform, false)(struct!.static),
  }
}


export function dataPanosLogicalRouterVrfMulticastIgmpToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastIgmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dynamic: {
      value: dataPanosLogicalRouterVrfMulticastIgmpDynamicToHclTerraform(struct!.dynamic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastIgmpDynamic",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfMulticastIgmpStaticToHclTerraform, false)(struct!.static),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfMulticastIgmpStaticList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfMulticastIgmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastIgmp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastIgmp | cdktf.IResolvable | undefined) {
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

  // dynamic - computed: true, optional: true, required: false
  private _dynamic = new DataPanosLogicalRouterVrfMulticastIgmpDynamicOutputReference(this, "dynamic");
  public get dynamic() {
    return this._dynamic;
  }
  public putDynamic(value: DataPanosLogicalRouterVrfMulticastIgmpDynamic) {
    this._dynamic.internalValue = value;
  }
  public resetDynamic() {
    this._dynamic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // static - computed: true, optional: true, required: false
  private _static = new DataPanosLogicalRouterVrfMulticastIgmpStaticList(this, "static", false);
  public get static() {
    return this._static;
  }
  public putStatic(value: DataPanosLogicalRouterVrfMulticastIgmpStatic[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfMulticastMsdpOriginatorId {
  /**
  * interface of originator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip DataPanosLogicalRouter#ip}
  */
  readonly ip?: string;
}

export function dataPanosLogicalRouterVrfMulticastMsdpOriginatorIdToTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosLogicalRouterVrfMulticastMsdpOriginatorIdToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastMsdpOriginatorIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastMsdpOriginatorId | cdktf.IResolvable | undefined) {
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

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress {
  /**
  * interface to accept MSDP connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * specify exact IP address if interface has multiple addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip DataPanosLogicalRouter#ip}
  */
  readonly ip?: string;
}

export function dataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddressToTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddressToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress | cdktf.IResolvable | undefined) {
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

  // interface - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress {
  /**
  * Peer FQDN Address Object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#fqdn DataPanosLogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * peer address configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip DataPanosLogicalRouter#ip}
  */
  readonly ip?: string;
}

export function dataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddressToTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function dataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddressToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress | cdktf.IResolvable | undefined) {
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

  // fqdn - computed: true, optional: true, required: false
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

  // ip - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfMulticastMsdpPeer {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Inbound SA Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inbound_sa_filter DataPanosLogicalRouter#inbound_sa_filter}
  */
  readonly inboundSaFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#local_address DataPanosLogicalRouter#local_address}
  */
  readonly localAddress?: DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress;
  /**
  * Maximum number of SA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#max_sa DataPanosLogicalRouter#max_sa}
  */
  readonly maxSa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Outbound SA Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#outbound_sa_filter DataPanosLogicalRouter#outbound_sa_filter}
  */
  readonly outboundSaFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#peer_address DataPanosLogicalRouter#peer_address}
  */
  readonly peerAddress?: DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress;
  /**
  * peer AS number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#peer_as DataPanosLogicalRouter#peer_as}
  */
  readonly peerAs?: string;
}

export function dataPanosLogicalRouterVrfMulticastMsdpPeerToTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    enable: cdktf.booleanToTerraform(struct!.enable),
    inbound_sa_filter: cdktf.stringToTerraform(struct!.inboundSaFilter),
    local_address: dataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddressToTerraform(struct!.localAddress),
    max_sa: cdktf.numberToTerraform(struct!.maxSa),
    name: cdktf.stringToTerraform(struct!.name),
    outbound_sa_filter: cdktf.stringToTerraform(struct!.outboundSaFilter),
    peer_address: dataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddressToTerraform(struct!.peerAddress),
    peer_as: cdktf.stringToTerraform(struct!.peerAs),
  }
}


export function dataPanosLogicalRouterVrfMulticastMsdpPeerToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddressToHclTerraform(struct!.localAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress",
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
      value: dataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddressToHclTerraform(struct!.peerAddress),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress",
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

export class DataPanosLogicalRouterVrfMulticastMsdpPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastMsdpPeer | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // inbound_sa_filter - computed: true, optional: true, required: false
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

  // local_address - computed: true, optional: true, required: false
  private _localAddress = new DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddressOutputReference(this, "local_address");
  public get localAddress() {
    return this._localAddress;
  }
  public putLocalAddress(value: DataPanosLogicalRouterVrfMulticastMsdpPeerLocalAddress) {
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

  // outbound_sa_filter - computed: true, optional: true, required: false
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

  // peer_address - computed: true, optional: true, required: false
  private _peerAddress = new DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddressOutputReference(this, "peer_address");
  public get peerAddress() {
    return this._peerAddress;
  }
  public putPeerAddress(value: DataPanosLogicalRouterVrfMulticastMsdpPeerPeerAddress) {
    this._peerAddress.internalValue = value;
  }
  public resetPeerAddress() {
    this._peerAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress.internalValue;
  }

  // peer_as - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfMulticastMsdpPeerList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfMulticastMsdpPeer[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfMulticastMsdpPeerOutputReference {
    return new DataPanosLogicalRouterVrfMulticastMsdpPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfMulticastMsdp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Global authentication profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_authentication DataPanosLogicalRouter#global_authentication}
  */
  readonly globalAuthentication?: string;
  /**
  * Global timer profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_timer DataPanosLogicalRouter#global_timer}
  */
  readonly globalTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#originator_id DataPanosLogicalRouter#originator_id}
  */
  readonly originatorId?: DataPanosLogicalRouterVrfMulticastMsdpOriginatorId;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#peer DataPanosLogicalRouter#peer}
  */
  readonly peer?: DataPanosLogicalRouterVrfMulticastMsdpPeer[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfMulticastMsdpToTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_authentication: cdktf.stringToTerraform(struct!.globalAuthentication),
    global_timer: cdktf.stringToTerraform(struct!.globalTimer),
    originator_id: dataPanosLogicalRouterVrfMulticastMsdpOriginatorIdToTerraform(struct!.originatorId),
    peer: cdktf.listMapper(dataPanosLogicalRouterVrfMulticastMsdpPeerToTerraform, false)(struct!.peer),
  }
}


export function dataPanosLogicalRouterVrfMulticastMsdpToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastMsdp | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfMulticastMsdpOriginatorIdToHclTerraform(struct!.originatorId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastMsdpOriginatorId",
    },
    peer: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfMulticastMsdpPeerToHclTerraform, false)(struct!.peer),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfMulticastMsdpPeerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfMulticastMsdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastMsdp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastMsdp | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // global_authentication - computed: true, optional: true, required: false
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

  // global_timer - computed: true, optional: true, required: false
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

  // originator_id - computed: true, optional: true, required: false
  private _originatorId = new DataPanosLogicalRouterVrfMulticastMsdpOriginatorIdOutputReference(this, "originator_id");
  public get originatorId() {
    return this._originatorId;
  }
  public putOriginatorId(value: DataPanosLogicalRouterVrfMulticastMsdpOriginatorId) {
    this._originatorId.internalValue = value;
  }
  public resetOriginatorId() {
    this._originatorId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIdInput() {
    return this._originatorId.internalValue;
  }

  // peer - computed: true, optional: true, required: false
  private _peer = new DataPanosLogicalRouterVrfMulticastMsdpPeerList(this, "peer", false);
  public get peer() {
    return this._peer;
  }
  public putPeer(value: DataPanosLogicalRouterVrfMulticastMsdpPeer[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfMulticastPimInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#description DataPanosLogicalRouter#description}
  */
  readonly description?: string;
  /**
  * Designated Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#dr_priority DataPanosLogicalRouter#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Interface Timer Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#if_timer DataPanosLogicalRouter#if_timer}
  */
  readonly ifTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Set the filter for neighbor list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#neighbor_filter DataPanosLogicalRouter#neighbor_filter}
  */
  readonly neighborFilter?: string;
  /**
  * Send BSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#send_bsm DataPanosLogicalRouter#send_bsm}
  */
  readonly sendBsm?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfMulticastPimInterfaceToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimInterface | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfMulticastPimInterfaceToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimInterface | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastPimInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimInterface | cdktf.IResolvable | undefined) {
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

  // if_timer - computed: true, optional: true, required: false
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

  // send_bsm - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfMulticastPimInterfaceList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfMulticastPimInterface[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfMulticastPimInterfaceOutputReference {
    return new DataPanosLogicalRouterVrfMulticastPimInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfMulticastPimRpExternalRp {
  /**
  * Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#group_list DataPanosLogicalRouter#group_list}
  */
  readonly groupList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Override learned RP for the same group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#override DataPanosLogicalRouter#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfMulticastPimRpExternalRpToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfMulticastPimRpExternalRpToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastPimRpExternalRpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimRpExternalRp | cdktf.IResolvable | undefined) {
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

  // override - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfMulticastPimRpExternalRpList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfMulticastPimRpExternalRp[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfMulticastPimRpExternalRpOutputReference {
    return new DataPanosLogicalRouterVrfMulticastPimRpExternalRpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp {
  /**
  * candidate RP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#address DataPanosLogicalRouter#address}
  */
  readonly address?: string;
  /**
  * The time interval in seconds between candidate rp advertisements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#advertisement_interval DataPanosLogicalRouter#advertisement_interval}
  */
  readonly advertisementInterval?: number;
  /**
  * Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#group_list DataPanosLogicalRouter#group_list}
  */
  readonly groupList?: string;
  /**
  * candidate RP interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * The priority for this candidate rt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#priority DataPanosLogicalRouter#priority}
  */
  readonly priority?: number;
}

export function dataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRpToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRpToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp | cdktf.IResolvable | undefined) {
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

  // address - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp {
  /**
  * local RP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#address DataPanosLogicalRouter#address}
  */
  readonly address?: string;
  /**
  * Group Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#group_list DataPanosLogicalRouter#group_list}
  */
  readonly groupList?: string;
  /**
  * local RP interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Override learned RP for the same group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#override DataPanosLogicalRouter#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRpToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRpToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp | cdktf.IResolvable | undefined) {
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

  // address - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // override - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfMulticastPimRpLocalRp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#candidate_rp DataPanosLogicalRouter#candidate_rp}
  */
  readonly candidateRp?: DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static_rp DataPanosLogicalRouter#static_rp}
  */
  readonly staticRp?: DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp;
}

export function dataPanosLogicalRouterVrfMulticastPimRpLocalRpToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    candidate_rp: dataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRpToTerraform(struct!.candidateRp),
    static_rp: dataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRpToTerraform(struct!.staticRp),
  }
}


export function dataPanosLogicalRouterVrfMulticastPimRpLocalRpToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    candidate_rp: {
      value: dataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRpToHclTerraform(struct!.candidateRp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp",
    },
    static_rp: {
      value: dataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRpToHclTerraform(struct!.staticRp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfMulticastPimRpLocalRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimRpLocalRp | cdktf.IResolvable | undefined) {
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

  // candidate_rp - computed: true, optional: true, required: false
  private _candidateRp = new DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRpOutputReference(this, "candidate_rp");
  public get candidateRp() {
    return this._candidateRp;
  }
  public putCandidateRp(value: DataPanosLogicalRouterVrfMulticastPimRpLocalRpCandidateRp) {
    this._candidateRp.internalValue = value;
  }
  public resetCandidateRp() {
    this._candidateRp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateRpInput() {
    return this._candidateRp.internalValue;
  }

  // static_rp - computed: true, optional: true, required: false
  private _staticRp = new DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRpOutputReference(this, "static_rp");
  public get staticRp() {
    return this._staticRp;
  }
  public putStaticRp(value: DataPanosLogicalRouterVrfMulticastPimRpLocalRpStaticRp) {
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
export interface DataPanosLogicalRouterVrfMulticastPimRp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#external_rp DataPanosLogicalRouter#external_rp}
  */
  readonly externalRp?: DataPanosLogicalRouterVrfMulticastPimRpExternalRp[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#local_rp DataPanosLogicalRouter#local_rp}
  */
  readonly localRp?: DataPanosLogicalRouterVrfMulticastPimRpLocalRp;
}

export function dataPanosLogicalRouterVrfMulticastPimRpToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_rp: cdktf.listMapper(dataPanosLogicalRouterVrfMulticastPimRpExternalRpToTerraform, false)(struct!.externalRp),
    local_rp: dataPanosLogicalRouterVrfMulticastPimRpLocalRpToTerraform(struct!.localRp),
  }
}


export function dataPanosLogicalRouterVrfMulticastPimRpToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimRp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_rp: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfMulticastPimRpExternalRpToHclTerraform, false)(struct!.externalRp),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimRpExternalRpList",
    },
    local_rp: {
      value: dataPanosLogicalRouterVrfMulticastPimRpLocalRpToHclTerraform(struct!.localRp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimRpLocalRp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfMulticastPimRpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimRp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimRp | cdktf.IResolvable | undefined) {
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

  // external_rp - computed: true, optional: true, required: false
  private _externalRp = new DataPanosLogicalRouterVrfMulticastPimRpExternalRpList(this, "external_rp", false);
  public get externalRp() {
    return this._externalRp;
  }
  public putExternalRp(value: DataPanosLogicalRouterVrfMulticastPimRpExternalRp[] | cdktf.IResolvable) {
    this._externalRp.internalValue = value;
  }
  public resetExternalRp() {
    this._externalRp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRpInput() {
    return this._externalRp.internalValue;
  }

  // local_rp - computed: true, optional: true, required: false
  private _localRp = new DataPanosLogicalRouterVrfMulticastPimRpLocalRpOutputReference(this, "local_rp");
  public get localRp() {
    return this._localRp;
  }
  public putLocalRp(value: DataPanosLogicalRouterVrfMulticastPimRpLocalRp) {
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
export interface DataPanosLogicalRouterVrfMulticastPimSptThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#threshold DataPanosLogicalRouter#threshold}
  */
  readonly threshold?: string;
}

export function dataPanosLogicalRouterVrfMulticastPimSptThresholdToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.stringToTerraform(struct!.threshold),
  }
}


export function dataPanosLogicalRouterVrfMulticastPimSptThresholdToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastPimSptThresholdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimSptThreshold | cdktf.IResolvable | undefined) {
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

export class DataPanosLogicalRouterVrfMulticastPimSptThresholdList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfMulticastPimSptThreshold[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfMulticastPimSptThresholdOutputReference {
    return new DataPanosLogicalRouterVrfMulticastPimSptThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace {
  /**
  * SSM Group Prefix List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#group_list DataPanosLogicalRouter#group_list}
  */
  readonly groupList?: string;
}

export function dataPanosLogicalRouterVrfMulticastPimSsmAddressSpaceToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_list: cdktf.stringToTerraform(struct!.groupList),
  }
}


export function dataPanosLogicalRouterVrfMulticastPimSsmAddressSpaceToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastPimSsmAddressSpaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfMulticastPim {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ASM/SSM group permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#group_permission DataPanosLogicalRouter#group_permission}
  */
  readonly groupPermission?: string;
  /**
  * Global Interface Timer Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#if_timer_global DataPanosLogicalRouter#if_timer_global}
  */
  readonly ifTimerGlobal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: DataPanosLogicalRouterVrfMulticastPimInterface[] | cdktf.IResolvable;
  /**
  * time to wait before aging out a multicast route after data stops, in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_ageout_time DataPanosLogicalRouter#route_ageout_time}
  */
  readonly routeAgeoutTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#rp DataPanosLogicalRouter#rp}
  */
  readonly rp?: DataPanosLogicalRouterVrfMulticastPimRp;
  /**
  * RPF Lookup Preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#rpf_lookup_mode DataPanosLogicalRouter#rpf_lookup_mode}
  */
  readonly rpfLookupMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#spt_threshold DataPanosLogicalRouter#spt_threshold}
  */
  readonly sptThreshold?: DataPanosLogicalRouterVrfMulticastPimSptThreshold[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ssm_address_space DataPanosLogicalRouter#ssm_address_space}
  */
  readonly ssmAddressSpace?: DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace;
}

export function dataPanosLogicalRouterVrfMulticastPimToTerraform(struct?: DataPanosLogicalRouterVrfMulticastPim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    group_permission: cdktf.stringToTerraform(struct!.groupPermission),
    if_timer_global: cdktf.stringToTerraform(struct!.ifTimerGlobal),
    interface: cdktf.listMapper(dataPanosLogicalRouterVrfMulticastPimInterfaceToTerraform, false)(struct!.interface),
    route_ageout_time: cdktf.numberToTerraform(struct!.routeAgeoutTime),
    rp: dataPanosLogicalRouterVrfMulticastPimRpToTerraform(struct!.rp),
    rpf_lookup_mode: cdktf.stringToTerraform(struct!.rpfLookupMode),
    spt_threshold: cdktf.listMapper(dataPanosLogicalRouterVrfMulticastPimSptThresholdToTerraform, false)(struct!.sptThreshold),
    ssm_address_space: dataPanosLogicalRouterVrfMulticastPimSsmAddressSpaceToTerraform(struct!.ssmAddressSpace),
  }
}


export function dataPanosLogicalRouterVrfMulticastPimToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastPim | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfMulticastPimInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimInterfaceList",
    },
    route_ageout_time: {
      value: cdktf.numberToHclTerraform(struct!.routeAgeoutTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp: {
      value: dataPanosLogicalRouterVrfMulticastPimRpToHclTerraform(struct!.rp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimRp",
    },
    rpf_lookup_mode: {
      value: cdktf.stringToHclTerraform(struct!.rpfLookupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spt_threshold: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfMulticastPimSptThresholdToHclTerraform, false)(struct!.sptThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimSptThresholdList",
    },
    ssm_address_space: {
      value: dataPanosLogicalRouterVrfMulticastPimSsmAddressSpaceToHclTerraform(struct!.ssmAddressSpace),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfMulticastPimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastPim | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastPim | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // group_permission - computed: true, optional: true, required: false
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

  // if_timer_global - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
  private _interface = new DataPanosLogicalRouterVrfMulticastPimInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataPanosLogicalRouterVrfMulticastPimInterface[] | cdktf.IResolvable) {
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

  // rp - computed: true, optional: true, required: false
  private _rp = new DataPanosLogicalRouterVrfMulticastPimRpOutputReference(this, "rp");
  public get rp() {
    return this._rp;
  }
  public putRp(value: DataPanosLogicalRouterVrfMulticastPimRp) {
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

  // spt_threshold - computed: true, optional: true, required: false
  private _sptThreshold = new DataPanosLogicalRouterVrfMulticastPimSptThresholdList(this, "spt_threshold", false);
  public get sptThreshold() {
    return this._sptThreshold;
  }
  public putSptThreshold(value: DataPanosLogicalRouterVrfMulticastPimSptThreshold[] | cdktf.IResolvable) {
    this._sptThreshold.internalValue = value;
  }
  public resetSptThreshold() {
    this._sptThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdInput() {
    return this._sptThreshold.internalValue;
  }

  // ssm_address_space - computed: true, optional: true, required: false
  private _ssmAddressSpace = new DataPanosLogicalRouterVrfMulticastPimSsmAddressSpaceOutputReference(this, "ssm_address_space");
  public get ssmAddressSpace() {
    return this._ssmAddressSpace;
  }
  public putSsmAddressSpace(value: DataPanosLogicalRouterVrfMulticastPimSsmAddressSpace) {
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
export interface DataPanosLogicalRouterVrfMulticastStaticRouteNexthop {
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip_address DataPanosLogicalRouter#ip_address}
  */
  readonly ipAddress?: string;
}

export function dataPanosLogicalRouterVrfMulticastStaticRouteNexthopToTerraform(struct?: DataPanosLogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function dataPanosLogicalRouterVrfMulticastStaticRouteNexthopToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfMulticastStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastStaticRouteNexthop | cdktf.IResolvable | undefined) {
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

  // ip_address - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfMulticastStaticRoute {
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#destination DataPanosLogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#nexthop DataPanosLogicalRouter#nexthop}
  */
  readonly nexthop?: DataPanosLogicalRouterVrfMulticastStaticRouteNexthop;
  /**
  * administrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#preference DataPanosLogicalRouter#preference}
  */
  readonly preference?: number;
}

export function dataPanosLogicalRouterVrfMulticastStaticRouteToTerraform(struct?: DataPanosLogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: dataPanosLogicalRouterVrfMulticastStaticRouteNexthopToTerraform(struct!.nexthop),
    preference: cdktf.numberToTerraform(struct!.preference),
  }
}


export function dataPanosLogicalRouterVrfMulticastStaticRouteToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfMulticastStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastStaticRouteNexthop",
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

export class DataPanosLogicalRouterVrfMulticastStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticastStaticRoute | cdktf.IResolvable | undefined) {
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

  // destination - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // nexthop - computed: true, optional: true, required: false
  private _nexthop = new DataPanosLogicalRouterVrfMulticastStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: DataPanosLogicalRouterVrfMulticastStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // preference - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfMulticastStaticRouteList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfMulticastStaticRoute[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfMulticastStaticRouteOutputReference {
    return new DataPanosLogicalRouterVrfMulticastStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfMulticast {
  /**
  * enable multicast protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#igmp DataPanosLogicalRouter#igmp}
  */
  readonly igmp?: DataPanosLogicalRouterVrfMulticastIgmp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#msdp DataPanosLogicalRouter#msdp}
  */
  readonly msdp?: DataPanosLogicalRouterVrfMulticastMsdp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#pim DataPanosLogicalRouter#pim}
  */
  readonly pim?: DataPanosLogicalRouterVrfMulticastPim;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static_route DataPanosLogicalRouter#static_route}
  */
  readonly staticRoute?: DataPanosLogicalRouterVrfMulticastStaticRoute[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfMulticastToTerraform(struct?: DataPanosLogicalRouterVrfMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    igmp: dataPanosLogicalRouterVrfMulticastIgmpToTerraform(struct!.igmp),
    msdp: dataPanosLogicalRouterVrfMulticastMsdpToTerraform(struct!.msdp),
    pim: dataPanosLogicalRouterVrfMulticastPimToTerraform(struct!.pim),
    static_route: cdktf.listMapper(dataPanosLogicalRouterVrfMulticastStaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function dataPanosLogicalRouterVrfMulticastToHclTerraform(struct?: DataPanosLogicalRouterVrfMulticast | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfMulticastIgmpToHclTerraform(struct!.igmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastIgmp",
    },
    msdp: {
      value: dataPanosLogicalRouterVrfMulticastMsdpToHclTerraform(struct!.msdp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastMsdp",
    },
    pim: {
      value: dataPanosLogicalRouterVrfMulticastPimToHclTerraform(struct!.pim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticastPim",
    },
    static_route: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfMulticastStaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfMulticastStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfMulticast | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfMulticast | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // igmp - computed: true, optional: true, required: false
  private _igmp = new DataPanosLogicalRouterVrfMulticastIgmpOutputReference(this, "igmp");
  public get igmp() {
    return this._igmp;
  }
  public putIgmp(value: DataPanosLogicalRouterVrfMulticastIgmp) {
    this._igmp.internalValue = value;
  }
  public resetIgmp() {
    this._igmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpInput() {
    return this._igmp.internalValue;
  }

  // msdp - computed: true, optional: true, required: false
  private _msdp = new DataPanosLogicalRouterVrfMulticastMsdpOutputReference(this, "msdp");
  public get msdp() {
    return this._msdp;
  }
  public putMsdp(value: DataPanosLogicalRouterVrfMulticastMsdp) {
    this._msdp.internalValue = value;
  }
  public resetMsdp() {
    this._msdp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msdpInput() {
    return this._msdp.internalValue;
  }

  // pim - computed: true, optional: true, required: false
  private _pim = new DataPanosLogicalRouterVrfMulticastPimOutputReference(this, "pim");
  public get pim() {
    return this._pim;
  }
  public putPim(value: DataPanosLogicalRouterVrfMulticastPim) {
    this._pim.internalValue = value;
  }
  public resetPim() {
    this._pim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimInput() {
    return this._pim.internalValue;
  }

  // static_route - computed: true, optional: true, required: false
  private _staticRoute = new DataPanosLogicalRouterVrfMulticastStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: DataPanosLogicalRouterVrfMulticastStaticRoute[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfOspfAreaInterfaceBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaInterfaceBfdToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaInterfaceBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaInterfaceBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast {
}

export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Neighbor priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#priority DataPanosLogicalRouter#priority}
  */
  readonly priority?: number;
}

export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined) {
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

export class DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#neighbor DataPanosLogicalRouter#neighbor}
  */
  readonly neighbor?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neighbor: cdktf.listMapper(dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToTerraform, false)(struct!.neighbor),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neighbor: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined) {
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

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P {
}

export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#broadcast DataPanosLogicalRouter#broadcast}
  */
  readonly broadcast?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#p2mp DataPanosLogicalRouter#p2mp}
  */
  readonly p2Mp?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#p2p DataPanosLogicalRouter#p2p}
  */
  readonly p2P?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P;
}

export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType | cdktf.IResolvable | undefined) {
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

  // broadcast - computed: true, optional: true, required: false
  private _broadcast = new DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeBroadcast) {
    this._broadcast.internalValue = value;
  }
  public resetBroadcast() {
    this._broadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast.internalValue;
  }

  // p2mp - computed: true, optional: true, required: false
  private _p2Mp = new DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2Mp) {
    this._p2Mp.internalValue = value;
  }
  public resetP2Mp() {
    this._p2Mp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpInput() {
    return this._p2Mp.internalValue;
  }

  // p2p - computed: true, optional: true, required: false
  private _p2P = new DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeP2P) {
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
export interface DataPanosLogicalRouterVrfOspfAreaInterface {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bfd DataPanosLogicalRouter#bfd}
  */
  readonly bfd?: DataPanosLogicalRouterVrfOspfAreaInterfaceBfd;
  /**
  * Enable OSPF on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#link_type DataPanosLogicalRouter#link_type}
  */
  readonly linkType?: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType;
  /**
  * Cost of OSPF interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Ignore mtu when try to establish adjacency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#mtu_ignore DataPanosLogicalRouter#mtu_ignore}
  */
  readonly mtuIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Suppress the sending of hello packets in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#passive DataPanosLogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority for OSPF designated router selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#priority DataPanosLogicalRouter#priority}
  */
  readonly priority?: number;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#timing DataPanosLogicalRouter#timing}
  */
  readonly timing?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaInterfaceToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: dataPanosLogicalRouterVrfOspfAreaInterfaceBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    link_type: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    mtu_ignore: cdktf.booleanToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    timing: cdktf.stringToTerraform(struct!.timing),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaInterfaceToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaInterface | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfOspfAreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaInterfaceBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_type: {
      value: dataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType",
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

export class DataPanosLogicalRouterVrfOspfAreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaInterface | cdktf.IResolvable | undefined) {
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosLogicalRouterVrfOspfAreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosLogicalRouterVrfOspfAreaInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // link_type - computed: true, optional: true, required: false
  private _linkType = new DataPanosLogicalRouterVrfOspfAreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: DataPanosLogicalRouterVrfOspfAreaInterfaceLinkType) {
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

  // mtu_ignore - computed: true, optional: true, required: false
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

  // passive - computed: true, optional: true, required: false
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

  // timing - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfAreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfAreaInterfaceOutputReference {
    return new DataPanosLogicalRouterVrfOspfAreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfAreaRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#advertise DataPanosLogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
}

export function dataPanosLogicalRouterVrfOspfAreaRangeToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaRangeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaRange | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaRange | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfAreaRangeList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfAreaRangeOutputReference {
    return new DataPanosLogicalRouterVrfOspfAreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#export_list DataPanosLogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#import_list DataPanosLogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inbound_filter_list DataPanosLogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#outbound_filter_list DataPanosLogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeNormalAbrToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfOspfAreaTypeNormalAbrToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr | cdktf.IResolvable | undefined) {
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

  // export_list - computed: true, optional: true, required: false
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

  // import_list - computed: true, optional: true, required: false
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

  // inbound_filter_list - computed: true, optional: true, required: false
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

  // outbound_filter_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfAreaTypeNormal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#abr DataPanosLogicalRouter#abr}
  */
  readonly abr?: DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeNormalToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: dataPanosLogicalRouterVrfOspfAreaTypeNormalAbrToTerraform(struct!.abr),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaTypeNormalToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeNormalAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfAreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeNormal | cdktf.IResolvable | undefined) {
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

  // abr - computed: true, optional: true, required: false
  private _abr = new DataPanosLogicalRouterVrfOspfAreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: DataPanosLogicalRouterVrfOspfAreaTypeNormalAbr) {
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
export interface DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#advertise DataPanosLogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference {
    return new DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#export_list DataPanosLogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#import_list DataPanosLogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inbound_filter_list DataPanosLogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#nssa_ext_range DataPanosLogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#outbound_filter_list DataPanosLogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    nssa_ext_range: cdktf.listMapper(dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList",
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

export class DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr | cdktf.IResolvable | undefined) {
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

  // export_list - computed: true, optional: true, required: false
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

  // import_list - computed: true, optional: true, required: false
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

  // inbound_filter_list - computed: true, optional: true, required: false
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

  // nssa_ext_range - computed: true, optional: true, required: false
  private _nssaExtRange = new DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable) {
    this._nssaExtRange.internalValue = value;
  }
  public resetNssaExtRange() {
    this._nssaExtRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaExtRangeInput() {
    return this._nssaExtRange.internalValue;
  }

  // outbound_filter_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * metric type to be used when redistribute default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric_type DataPanosLogicalRouter#metric_type}
  */
  readonly metricType?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfAreaTypeNssa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#abr DataPanosLogicalRouter#abr}
  */
  readonly abr?: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#default_information_originate DataPanosLogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#no_summary DataPanosLogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeNssaToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrToTerraform(struct!.abr),
    default_information_originate: dataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToTerraform(struct!.defaultInformationOriginate),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaTypeNssaToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeNssaAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr",
    },
    default_information_originate: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate",
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

export class DataPanosLogicalRouterVrfOspfAreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeNssa | cdktf.IResolvable | undefined) {
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

  // abr - computed: true, optional: true, required: false
  private _abr = new DataPanosLogicalRouterVrfOspfAreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: DataPanosLogicalRouterVrfOspfAreaTypeNssaAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate = new DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }
  public putDefaultInformationOriginate(value: DataPanosLogicalRouterVrfOspfAreaTypeNssaDefaultInformationOriginate) {
    this._defaultInformationOriginate.internalValue = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate.internalValue;
  }

  // no_summary - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfAreaTypeStubAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#export_list DataPanosLogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#import_list DataPanosLogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inbound_filter_list DataPanosLogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#outbound_filter_list DataPanosLogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeStubAbrToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfOspfAreaTypeStubAbrToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeStubAbr | cdktf.IResolvable | undefined) {
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

  // export_list - computed: true, optional: true, required: false
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

  // import_list - computed: true, optional: true, required: false
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

  // inbound_filter_list - computed: true, optional: true, required: false
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

  // outbound_filter_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfAreaTypeStub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#abr DataPanosLogicalRouter#abr}
  */
  readonly abr?: DataPanosLogicalRouterVrfOspfAreaTypeStubAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#default_route_metric DataPanosLogicalRouter#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#no_summary DataPanosLogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeStubToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: dataPanosLogicalRouterVrfOspfAreaTypeStubAbrToTerraform(struct!.abr),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaTypeStubToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeStubAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeStubAbr",
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

export class DataPanosLogicalRouterVrfOspfAreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaTypeStub | cdktf.IResolvable | undefined) {
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

  // abr - computed: true, optional: true, required: false
  private _abr = new DataPanosLogicalRouterVrfOspfAreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: DataPanosLogicalRouterVrfOspfAreaTypeStubAbr) {
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

  // no_summary - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfAreaType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#normal DataPanosLogicalRouter#normal}
  */
  readonly normal?: DataPanosLogicalRouterVrfOspfAreaTypeNormal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#nssa DataPanosLogicalRouter#nssa}
  */
  readonly nssa?: DataPanosLogicalRouterVrfOspfAreaTypeNssa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#stub DataPanosLogicalRouter#stub}
  */
  readonly stub?: DataPanosLogicalRouterVrfOspfAreaTypeStub;
}

export function dataPanosLogicalRouterVrfOspfAreaTypeToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: dataPanosLogicalRouterVrfOspfAreaTypeNormalToTerraform(struct!.normal),
    nssa: dataPanosLogicalRouterVrfOspfAreaTypeNssaToTerraform(struct!.nssa),
    stub: dataPanosLogicalRouterVrfOspfAreaTypeStubToTerraform(struct!.stub),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaTypeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeNormal",
    },
    nssa: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeNssa",
    },
    stub: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfAreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaType | cdktf.IResolvable | undefined) {
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

  // normal - computed: true, optional: true, required: false
  private _normal = new DataPanosLogicalRouterVrfOspfAreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: DataPanosLogicalRouterVrfOspfAreaTypeNormal) {
    this._normal.internalValue = value;
  }
  public resetNormal() {
    this._normal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal.internalValue;
  }

  // nssa - computed: true, optional: true, required: false
  private _nssa = new DataPanosLogicalRouterVrfOspfAreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: DataPanosLogicalRouterVrfOspfAreaTypeNssa) {
    this._nssa.internalValue = value;
  }
  public resetNssa() {
    this._nssa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa.internalValue;
  }

  // stub - computed: true, optional: true, required: false
  private _stub = new DataPanosLogicalRouterVrfOspfAreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: DataPanosLogicalRouterVrfOspfAreaTypeStub) {
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
export interface DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaVirtualLinkBfdToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaVirtualLinkBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfAreaVirtualLink {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bfd DataPanosLogicalRouter#bfd}
  */
  readonly bfd?: DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd;
  /**
  * Enable this virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * OSPF instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#instance_id DataPanosLogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * neighbor router id for virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#neighbor_id DataPanosLogicalRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#timing DataPanosLogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * id of transit area, cannot be backbone, stub or NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#transit_area_id DataPanosLogicalRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
}

export function dataPanosLogicalRouterVrfOspfAreaVirtualLinkToTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: dataPanosLogicalRouterVrfOspfAreaVirtualLinkBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    name: cdktf.stringToTerraform(struct!.name),
    neighbor_id: cdktf.stringToTerraform(struct!.neighborId),
    timing: cdktf.stringToTerraform(struct!.timing),
    transit_area_id: cdktf.stringToTerraform(struct!.transitAreaId),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaVirtualLinkToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfOspfAreaVirtualLinkBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd",
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

export class DataPanosLogicalRouterVrfOspfAreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfAreaVirtualLink | cdktf.IResolvable | undefined) {
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosLogicalRouterVrfOspfAreaVirtualLinkBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // neighbor_id - computed: true, optional: true, required: false
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

  // timing - computed: true, optional: true, required: false
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

  // transit_area_id - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfAreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfAreaVirtualLinkOutputReference {
    return new DataPanosLogicalRouterVrfOspfAreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfArea {
  /**
  * Authentication profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: DataPanosLogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#range DataPanosLogicalRouter#range}
  */
  readonly range?: DataPanosLogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#type DataPanosLogicalRouter#type}
  */
  readonly type?: DataPanosLogicalRouterVrfOspfAreaType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#virtual_link DataPanosLogicalRouter#virtual_link}
  */
  readonly virtualLink?: DataPanosLogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfAreaToTerraform(struct?: DataPanosLogicalRouterVrfOspfArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(dataPanosLogicalRouterVrfOspfAreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(dataPanosLogicalRouterVrfOspfAreaRangeToTerraform, false)(struct!.range),
    type: dataPanosLogicalRouterVrfOspfAreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(dataPanosLogicalRouterVrfOspfAreaVirtualLinkToTerraform, false)(struct!.virtualLink),
  }
}


export function dataPanosLogicalRouterVrfOspfAreaToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfArea | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfAreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfAreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaRangeList",
    },
    type: {
      value: dataPanosLogicalRouterVrfOspfAreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfAreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfArea | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfArea | cdktf.IResolvable | undefined) {
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

  // interface - computed: true, optional: true, required: false
  private _interface = new DataPanosLogicalRouterVrfOspfAreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataPanosLogicalRouterVrfOspfAreaInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
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

  // range - computed: true, optional: true, required: false
  private _range = new DataPanosLogicalRouterVrfOspfAreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: DataPanosLogicalRouterVrfOspfAreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosLogicalRouterVrfOspfAreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosLogicalRouterVrfOspfAreaType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // virtual_link - computed: true, optional: true, required: false
  private _virtualLink = new DataPanosLogicalRouterVrfOspfAreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: DataPanosLogicalRouterVrfOspfAreaVirtualLink[] | cdktf.IResolvable) {
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

export class DataPanosLogicalRouterVrfOspfAreaList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfArea[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfAreaOutputReference {
    return new DataPanosLogicalRouterVrfOspfAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfOspfGlobalBfdToTerraform(struct?: DataPanosLogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfOspfGlobalBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfGlobalBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfGracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * maximum local restarting time (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#grace_period DataPanosLogicalRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * enable/disable helping neighboring routers to graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#helper_enable DataPanosLogicalRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * maximum of neighbor restart time accepted (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#max_neighbor_restart_time DataPanosLogicalRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * enable/disable strict LSA checking. Abort GR if lsa change is detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#strict_lsa_checking DataPanosLogicalRouter#strict_lsa_checking}
  */
  readonly strictLsaChecking?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfGracefulRestartToTerraform(struct?: DataPanosLogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfOspfGracefulRestartToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfGracefulRestart | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // helper_enable - computed: true, optional: true, required: false
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

  // strict_lsa_checking - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#area DataPanosLogicalRouter#area}
  */
  readonly area?: DataPanosLogicalRouterVrfOspfArea[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_bfd DataPanosLogicalRouter#global_bfd}
  */
  readonly globalBfd?: DataPanosLogicalRouterVrfOspfGlobalBfd;
  /**
  * Global protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_if_timer DataPanosLogicalRouter#global_if_timer}
  */
  readonly globalIfTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#graceful_restart DataPanosLogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: DataPanosLogicalRouterVrfOspfGracefulRestart;
  /**
  * Redistribution profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#redistribution_profile DataPanosLogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
  /**
  * rfc-1583 compatibility
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#rfc1583 DataPanosLogicalRouter#rfc1583}
  */
  readonly rfc1583?: boolean | cdktf.IResolvable;
  /**
  * router id of this OSPF instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#router_id DataPanosLogicalRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * SPF timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#spf_timer DataPanosLogicalRouter#spf_timer}
  */
  readonly spfTimer?: string;
}

export function dataPanosLogicalRouterVrfOspfToTerraform(struct?: DataPanosLogicalRouterVrfOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.listMapper(dataPanosLogicalRouterVrfOspfAreaToTerraform, false)(struct!.area),
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_bfd: dataPanosLogicalRouterVrfOspfGlobalBfdToTerraform(struct!.globalBfd),
    global_if_timer: cdktf.stringToTerraform(struct!.globalIfTimer),
    graceful_restart: dataPanosLogicalRouterVrfOspfGracefulRestartToTerraform(struct!.gracefulRestart),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
    rfc1583: cdktf.booleanToTerraform(struct!.rfc1583),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    spf_timer: cdktf.stringToTerraform(struct!.spfTimer),
  }
}


export function dataPanosLogicalRouterVrfOspfToHclTerraform(struct?: DataPanosLogicalRouterVrfOspf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfAreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfAreaList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    global_bfd: {
      value: dataPanosLogicalRouterVrfOspfGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfGlobalBfd",
    },
    global_if_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalIfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart: {
      value: dataPanosLogicalRouterVrfOspfGracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfGracefulRestart",
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

export class DataPanosLogicalRouterVrfOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspf | cdktf.IResolvable | undefined) {
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

  // area - computed: true, optional: true, required: false
  private _area = new DataPanosLogicalRouterVrfOspfAreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: DataPanosLogicalRouterVrfOspfArea[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // global_bfd - computed: true, optional: true, required: false
  private _globalBfd = new DataPanosLogicalRouterVrfOspfGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: DataPanosLogicalRouterVrfOspfGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_if_timer - computed: true, optional: true, required: false
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

  // graceful_restart - computed: true, optional: true, required: false
  private _gracefulRestart = new DataPanosLogicalRouterVrfOspfGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: DataPanosLogicalRouterVrfOspfGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // redistribution_profile - computed: true, optional: true, required: false
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

  // rfc1583 - computed: true, optional: true, required: false
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

  // router_id - computed: true, optional: true, required: false
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

  // spf_timer - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceBfdToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast {
}

export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Neighbor priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#priority DataPanosLogicalRouter#priority}
  */
  readonly priority?: number;
}

export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor | cdktf.IResolvable | undefined) {
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

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference {
    return new DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#neighbor DataPanosLogicalRouter#neighbor}
  */
  readonly neighbor?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    neighbor: cdktf.listMapper(dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToTerraform, false)(struct!.neighbor),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    neighbor: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborToHclTerraform, false)(struct!.neighbor),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp | cdktf.IResolvable | undefined) {
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

  // neighbor - computed: true, optional: true, required: false
  private _neighbor = new DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpNeighbor[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P {
}

export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#broadcast DataPanosLogicalRouter#broadcast}
  */
  readonly broadcast?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#p2mp DataPanosLogicalRouter#p2mp}
  */
  readonly p2Mp?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#p2p DataPanosLogicalRouter#p2p}
  */
  readonly p2P?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P;
}

export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToTerraform(struct!.broadcast),
    p2mp: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToTerraform(struct!.p2Mp),
    p2p: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToTerraform(struct!.p2P),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastToHclTerraform(struct!.broadcast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast",
    },
    p2mp: {
      value: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpToHclTerraform(struct!.p2Mp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp",
    },
    p2p: {
      value: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2PToHclTerraform(struct!.p2P),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType | cdktf.IResolvable | undefined) {
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

  // broadcast - computed: true, optional: true, required: false
  private _broadcast = new DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcastOutputReference(this, "broadcast");
  public get broadcast() {
    return this._broadcast;
  }
  public putBroadcast(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeBroadcast) {
    this._broadcast.internalValue = value;
  }
  public resetBroadcast() {
    this._broadcast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast.internalValue;
  }

  // p2mp - computed: true, optional: true, required: false
  private _p2Mp = new DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2MpOutputReference(this, "p2mp");
  public get p2Mp() {
    return this._p2Mp;
  }
  public putP2Mp(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2Mp) {
    this._p2Mp.internalValue = value;
  }
  public resetP2Mp() {
    this._p2Mp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpInput() {
    return this._p2Mp.internalValue;
  }

  // p2p - computed: true, optional: true, required: false
  private _p2P = new DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2POutputReference(this, "p2p");
  public get p2P() {
    return this._p2P;
  }
  public putP2P(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeP2P) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaInterface {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bfd DataPanosLogicalRouter#bfd}
  */
  readonly bfd?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd;
  /**
  * Enable OSPF in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#instance_id DataPanosLogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#link_type DataPanosLogicalRouter#link_type}
  */
  readonly linkType?: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType;
  /**
  * Cost of OSPF interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Ignore mtu when try to establish adjacency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#mtu_ignore DataPanosLogicalRouter#mtu_ignore}
  */
  readonly mtuIgnore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Suppress the sending of hello packets in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#passive DataPanosLogicalRouter#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Priority for OSPF designated router selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#priority DataPanosLogicalRouter#priority}
  */
  readonly priority?: number;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#timing DataPanosLogicalRouter#timing}
  */
  readonly timing?: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: dataPanosLogicalRouterVrfOspfv3AreaInterfaceBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    link_type: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeToTerraform(struct!.linkType),
    metric: cdktf.numberToTerraform(struct!.metric),
    mtu_ignore: cdktf.booleanToTerraform(struct!.mtuIgnore),
    name: cdktf.stringToTerraform(struct!.name),
    passive: cdktf.booleanToTerraform(struct!.passive),
    priority: cdktf.numberToTerraform(struct!.priority),
    timing: cdktf.stringToTerraform(struct!.timing),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaInterfaceToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfOspfv3AreaInterfaceBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd",
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
      value: dataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeToHclTerraform(struct!.linkType),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType",
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

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaInterface | cdktf.IResolvable | undefined) {
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // link_type - computed: true, optional: true, required: false
  private _linkType = new DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkTypeOutputReference(this, "link_type");
  public get linkType() {
    return this._linkType;
  }
  public putLinkType(value: DataPanosLogicalRouterVrfOspfv3AreaInterfaceLinkType) {
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

  // mtu_ignore - computed: true, optional: true, required: false
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

  // passive - computed: true, optional: true, required: false
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

  // timing - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfv3AreaInterfaceList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfv3AreaInterfaceOutputReference {
    return new DataPanosLogicalRouterVrfOspfv3AreaInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfv3AreaRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#advertise DataPanosLogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaRangeToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaRangeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaRange | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfv3AreaRangeList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfv3AreaRangeOutputReference {
    return new DataPanosLogicalRouterVrfOspfv3AreaRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#export_list DataPanosLogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#import_list DataPanosLogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inbound_filter_list DataPanosLogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#outbound_filter_list DataPanosLogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbrToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr | cdktf.IResolvable | undefined) {
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

  // export_list - computed: true, optional: true, required: false
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

  // import_list - computed: true, optional: true, required: false
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

  // inbound_filter_list - computed: true, optional: true, required: false
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

  // outbound_filter_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeNormal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#abr DataPanosLogicalRouter#abr}
  */
  readonly abr?: DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeNormalToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: dataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbrToTerraform(struct!.abr),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaTypeNormalToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfv3AreaTypeNormalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNormal | cdktf.IResolvable | undefined) {
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

  // abr - computed: true, optional: true, required: false
  private _abr = new DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNormalAbr) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange {
  /**
  * do summarization and advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#advertise DataPanosLogicalRouter#advertise}
  */
  readonly advertise?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise: cdktf.booleanToTerraform(struct!.advertise),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange | cdktf.IResolvable | undefined) {
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

  // advertise - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference {
    return new DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#export_list DataPanosLogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#import_list DataPanosLogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inbound_filter_list DataPanosLogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#nssa_ext_range DataPanosLogicalRouter#nssa_ext_range}
  */
  readonly nssaExtRange?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#outbound_filter_list DataPanosLogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    export_list: cdktf.stringToTerraform(struct!.exportList),
    import_list: cdktf.stringToTerraform(struct!.importList),
    inbound_filter_list: cdktf.stringToTerraform(struct!.inboundFilterList),
    nssa_ext_range: cdktf.listMapper(dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToTerraform, false)(struct!.nssaExtRange),
    outbound_filter_list: cdktf.stringToTerraform(struct!.outboundFilterList),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeToHclTerraform, false)(struct!.nssaExtRange),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList",
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr | cdktf.IResolvable | undefined) {
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

  // export_list - computed: true, optional: true, required: false
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

  // import_list - computed: true, optional: true, required: false
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

  // inbound_filter_list - computed: true, optional: true, required: false
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

  // nssa_ext_range - computed: true, optional: true, required: false
  private _nssaExtRange = new DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRangeList(this, "nssa_ext_range", false);
  public get nssaExtRange() {
    return this._nssaExtRange;
  }
  public putNssaExtRange(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrNssaExtRange[] | cdktf.IResolvable) {
    this._nssaExtRange.internalValue = value;
  }
  public resetNssaExtRange() {
    this._nssaExtRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaExtRangeInput() {
    return this._nssaExtRange.internalValue;
  }

  // outbound_filter_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * metric type to be used when redistribute default route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric_type DataPanosLogicalRouter#metric_type}
  */
  readonly metricType?: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeNssa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#abr DataPanosLogicalRouter#abr}
  */
  readonly abr?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#default_information_originate DataPanosLogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#no_summary DataPanosLogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrToTerraform(struct!.abr),
    default_information_originate: dataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToTerraform(struct!.defaultInformationOriginate),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaTypeNssaToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr",
    },
    default_information_originate: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateToHclTerraform(struct!.defaultInformationOriginate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate",
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeNssaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssa | cdktf.IResolvable | undefined) {
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

  // abr - computed: true, optional: true, required: false
  private _abr = new DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaAbr) {
    this._abr.internalValue = value;
  }
  public resetAbr() {
    this._abr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abrInput() {
    return this._abr.internalValue;
  }

  // default_information_originate - computed: true, optional: true, required: false
  private _defaultInformationOriginate = new DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginateOutputReference(this, "default_information_originate");
  public get defaultInformationOriginate() {
    return this._defaultInformationOriginate;
  }
  public putDefaultInformationOriginate(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssaDefaultInformationOriginate) {
    this._defaultInformationOriginate.internalValue = value;
  }
  public resetDefaultInformationOriginate() {
    this._defaultInformationOriginate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInformationOriginateInput() {
    return this._defaultInformationOriginate.internalValue;
  }

  // no_summary - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr {
  /**
  * Set the filter for networks announced to other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#export_list DataPanosLogicalRouter#export_list}
  */
  readonly exportList?: string;
  /**
  * Set the filter for networks announced from other areas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#import_list DataPanosLogicalRouter#import_list}
  */
  readonly importList?: string;
  /**
  * Inbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#inbound_filter_list DataPanosLogicalRouter#inbound_filter_list}
  */
  readonly inboundFilterList?: string;
  /**
  * Outbound filter list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#outbound_filter_list DataPanosLogicalRouter#outbound_filter_list}
  */
  readonly outboundFilterList?: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeStubAbrToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfOspfv3AreaTypeStubAbrToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr | cdktf.IResolvable | undefined) {
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

  // export_list - computed: true, optional: true, required: false
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

  // import_list - computed: true, optional: true, required: false
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

  // inbound_filter_list - computed: true, optional: true, required: false
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

  // outbound_filter_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfv3AreaTypeStub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#abr DataPanosLogicalRouter#abr}
  */
  readonly abr?: DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#default_route_metric DataPanosLogicalRouter#default_route_metric}
  */
  readonly defaultRouteMetric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#no_summary DataPanosLogicalRouter#no_summary}
  */
  readonly noSummary?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeStubToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abr: dataPanosLogicalRouterVrfOspfv3AreaTypeStubAbrToTerraform(struct!.abr),
    default_route_metric: cdktf.numberToTerraform(struct!.defaultRouteMetric),
    no_summary: cdktf.booleanToTerraform(struct!.noSummary),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaTypeStubToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abr: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeStubAbrToHclTerraform(struct!.abr),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr",
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

export class DataPanosLogicalRouterVrfOspfv3AreaTypeStubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaTypeStub | cdktf.IResolvable | undefined) {
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

  // abr - computed: true, optional: true, required: false
  private _abr = new DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbrOutputReference(this, "abr");
  public get abr() {
    return this._abr;
  }
  public putAbr(value: DataPanosLogicalRouterVrfOspfv3AreaTypeStubAbr) {
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

  // no_summary - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfv3AreaType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#normal DataPanosLogicalRouter#normal}
  */
  readonly normal?: DataPanosLogicalRouterVrfOspfv3AreaTypeNormal;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#nssa DataPanosLogicalRouter#nssa}
  */
  readonly nssa?: DataPanosLogicalRouterVrfOspfv3AreaTypeNssa;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#stub DataPanosLogicalRouter#stub}
  */
  readonly stub?: DataPanosLogicalRouterVrfOspfv3AreaTypeStub;
}

export function dataPanosLogicalRouterVrfOspfv3AreaTypeToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    normal: dataPanosLogicalRouterVrfOspfv3AreaTypeNormalToTerraform(struct!.normal),
    nssa: dataPanosLogicalRouterVrfOspfv3AreaTypeNssaToTerraform(struct!.nssa),
    stub: dataPanosLogicalRouterVrfOspfv3AreaTypeStubToTerraform(struct!.stub),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaTypeToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    normal: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeNormalToHclTerraform(struct!.normal),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeNormal",
    },
    nssa: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeNssaToHclTerraform(struct!.nssa),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeNssa",
    },
    stub: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeStubToHclTerraform(struct!.stub),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaTypeStub",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfv3AreaTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaType | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaType | cdktf.IResolvable | undefined) {
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

  // normal - computed: true, optional: true, required: false
  private _normal = new DataPanosLogicalRouterVrfOspfv3AreaTypeNormalOutputReference(this, "normal");
  public get normal() {
    return this._normal;
  }
  public putNormal(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNormal) {
    this._normal.internalValue = value;
  }
  public resetNormal() {
    this._normal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalInput() {
    return this._normal.internalValue;
  }

  // nssa - computed: true, optional: true, required: false
  private _nssa = new DataPanosLogicalRouterVrfOspfv3AreaTypeNssaOutputReference(this, "nssa");
  public get nssa() {
    return this._nssa;
  }
  public putNssa(value: DataPanosLogicalRouterVrfOspfv3AreaTypeNssa) {
    this._nssa.internalValue = value;
  }
  public resetNssa() {
    this._nssa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nssaInput() {
    return this._nssa.internalValue;
  }

  // stub - computed: true, optional: true, required: false
  private _stub = new DataPanosLogicalRouterVrfOspfv3AreaTypeStubOutputReference(this, "stub");
  public get stub() {
    return this._stub;
  }
  public putStub(value: DataPanosLogicalRouterVrfOspfv3AreaTypeStub) {
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
export interface DataPanosLogicalRouterVrfOspfv3AreaVirtualLink {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Enable this virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * OSPFv3 instance ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#instance_id DataPanosLogicalRouter#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * neighbor router id for virtual link
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#neighbor_id DataPanosLogicalRouter#neighbor_id}
  */
  readonly neighborId?: string;
  /**
  * Protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#timing DataPanosLogicalRouter#timing}
  */
  readonly timing?: string;
  /**
  * id of transit area, cannot be backbone, stub or NSSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#transit_area_id DataPanosLogicalRouter#transit_area_id}
  */
  readonly transitAreaId?: string;
}

export function dataPanosLogicalRouterVrfOspfv3AreaVirtualLinkToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfOspfv3AreaVirtualLinkToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3AreaVirtualLinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3AreaVirtualLink | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // neighbor_id - computed: true, optional: true, required: false
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

  // timing - computed: true, optional: true, required: false
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

  // transit_area_id - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfOspfv3AreaVirtualLinkList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfv3AreaVirtualLinkOutputReference {
    return new DataPanosLogicalRouterVrfOspfv3AreaVirtualLinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfv3Area {
  /**
  * Authentication profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: DataPanosLogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#range DataPanosLogicalRouter#range}
  */
  readonly range?: DataPanosLogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#type DataPanosLogicalRouter#type}
  */
  readonly type?: DataPanosLogicalRouterVrfOspfv3AreaType;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#virtual_link DataPanosLogicalRouter#virtual_link}
  */
  readonly virtualLink?: DataPanosLogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfv3AreaToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3Area | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    interface: cdktf.listMapper(dataPanosLogicalRouterVrfOspfv3AreaInterfaceToTerraform, false)(struct!.interface),
    name: cdktf.stringToTerraform(struct!.name),
    range: cdktf.listMapper(dataPanosLogicalRouterVrfOspfv3AreaRangeToTerraform, false)(struct!.range),
    type: dataPanosLogicalRouterVrfOspfv3AreaTypeToTerraform(struct!.type),
    virtual_link: cdktf.listMapper(dataPanosLogicalRouterVrfOspfv3AreaVirtualLinkToTerraform, false)(struct!.virtualLink),
  }
}


export function dataPanosLogicalRouterVrfOspfv3AreaToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3Area | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfv3AreaInterfaceToHclTerraform, false)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaInterfaceList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfv3AreaRangeToHclTerraform, false)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaRangeList",
    },
    type: {
      value: dataPanosLogicalRouterVrfOspfv3AreaTypeToHclTerraform(struct!.type),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaType",
    },
    virtual_link: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfv3AreaVirtualLinkToHclTerraform, false)(struct!.virtualLink),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaVirtualLinkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOspfv3AreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3Area | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3Area | cdktf.IResolvable | undefined) {
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

  // interface - computed: true, optional: true, required: false
  private _interface = new DataPanosLogicalRouterVrfOspfv3AreaInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: DataPanosLogicalRouterVrfOspfv3AreaInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
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

  // range - computed: true, optional: true, required: false
  private _range = new DataPanosLogicalRouterVrfOspfv3AreaRangeList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: DataPanosLogicalRouterVrfOspfv3AreaRange[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type = new DataPanosLogicalRouterVrfOspfv3AreaTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataPanosLogicalRouterVrfOspfv3AreaType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // virtual_link - computed: true, optional: true, required: false
  private _virtualLink = new DataPanosLogicalRouterVrfOspfv3AreaVirtualLinkList(this, "virtual_link", false);
  public get virtualLink() {
    return this._virtualLink;
  }
  public putVirtualLink(value: DataPanosLogicalRouterVrfOspfv3AreaVirtualLink[] | cdktf.IResolvable) {
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

export class DataPanosLogicalRouterVrfOspfv3AreaList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfOspfv3Area[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOspfv3AreaOutputReference {
    return new DataPanosLogicalRouterVrfOspfv3AreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfOspfv3GlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfOspfv3GlobalBfdToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfOspfv3GlobalBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3GlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3GlobalBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfOspfv3GracefulRestart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * maximum local restarting time (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#grace_period DataPanosLogicalRouter#grace_period}
  */
  readonly gracePeriod?: number;
  /**
  * enable/disable helping neighboring routers to graceful restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#helper_enable DataPanosLogicalRouter#helper_enable}
  */
  readonly helperEnable?: boolean | cdktf.IResolvable;
  /**
  * maximum of neighbor restart time accepted (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#max_neighbor_restart_time DataPanosLogicalRouter#max_neighbor_restart_time}
  */
  readonly maxNeighborRestartTime?: number;
  /**
  * enable/disable strict LSA checking. Abort GR if lsa change is detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#strict_lsa_checking DataPanosLogicalRouter#strict_lsa_checking}
  */
  readonly strictLsaChecking?: boolean | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfOspfv3GracefulRestartToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfOspfv3GracefulRestartToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfOspfv3GracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3GracefulRestart | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // helper_enable - computed: true, optional: true, required: false
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

  // strict_lsa_checking - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfOspfv3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#area DataPanosLogicalRouter#area}
  */
  readonly area?: DataPanosLogicalRouterVrfOspfv3Area[] | cdktf.IResolvable;
  /**
  * whether OSPFv3 should set the R- and V6-bits in its Router-LSAs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#disable_transit_traffic DataPanosLogicalRouter#disable_transit_traffic}
  */
  readonly disableTransitTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_bfd DataPanosLogicalRouter#global_bfd}
  */
  readonly globalBfd?: DataPanosLogicalRouterVrfOspfv3GlobalBfd;
  /**
  * Global protocol timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_if_timer DataPanosLogicalRouter#global_if_timer}
  */
  readonly globalIfTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#graceful_restart DataPanosLogicalRouter#graceful_restart}
  */
  readonly gracefulRestart?: DataPanosLogicalRouterVrfOspfv3GracefulRestart;
  /**
  * Redistribution profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#redistribution_profile DataPanosLogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
  /**
  * router id of this OSPFv3 instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#router_id DataPanosLogicalRouter#router_id}
  */
  readonly routerId?: string;
  /**
  * SPF timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#spf_timer DataPanosLogicalRouter#spf_timer}
  */
  readonly spfTimer?: string;
}

export function dataPanosLogicalRouterVrfOspfv3ToTerraform(struct?: DataPanosLogicalRouterVrfOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area: cdktf.listMapper(dataPanosLogicalRouterVrfOspfv3AreaToTerraform, false)(struct!.area),
    disable_transit_traffic: cdktf.booleanToTerraform(struct!.disableTransitTraffic),
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_bfd: dataPanosLogicalRouterVrfOspfv3GlobalBfdToTerraform(struct!.globalBfd),
    global_if_timer: cdktf.stringToTerraform(struct!.globalIfTimer),
    graceful_restart: dataPanosLogicalRouterVrfOspfv3GracefulRestartToTerraform(struct!.gracefulRestart),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
    router_id: cdktf.stringToTerraform(struct!.routerId),
    spf_timer: cdktf.stringToTerraform(struct!.spfTimer),
  }
}


export function dataPanosLogicalRouterVrfOspfv3ToHclTerraform(struct?: DataPanosLogicalRouterVrfOspfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfOspfv3AreaToHclTerraform, false)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3AreaList",
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
      value: dataPanosLogicalRouterVrfOspfv3GlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3GlobalBfd",
    },
    global_if_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalIfTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_restart: {
      value: dataPanosLogicalRouterVrfOspfv3GracefulRestartToHclTerraform(struct!.gracefulRestart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3GracefulRestart",
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

export class DataPanosLogicalRouterVrfOspfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfOspfv3 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfOspfv3 | cdktf.IResolvable | undefined) {
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

  // area - computed: true, optional: true, required: false
  private _area = new DataPanosLogicalRouterVrfOspfv3AreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: DataPanosLogicalRouterVrfOspfv3Area[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // disable_transit_traffic - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // global_bfd - computed: true, optional: true, required: false
  private _globalBfd = new DataPanosLogicalRouterVrfOspfv3GlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: DataPanosLogicalRouterVrfOspfv3GlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_if_timer - computed: true, optional: true, required: false
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

  // graceful_restart - computed: true, optional: true, required: false
  private _gracefulRestart = new DataPanosLogicalRouterVrfOspfv3GracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: DataPanosLogicalRouterVrfOspfv3GracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // redistribution_profile - computed: true, optional: true, required: false
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

  // router_id - computed: true, optional: true, required: false
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

  // spf_timer - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv4Bgp {
  /**
  * Apply Route-Map on BGP Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_map DataPanosLogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function dataPanosLogicalRouterVrfRibFilterIpv4BgpToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv4BgpToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRibFilterIpv4BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv4Bgp | cdktf.IResolvable | undefined) {
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

  // route_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv4Ospf {
  /**
  * Apply Route-Map on OSPF Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_map DataPanosLogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function dataPanosLogicalRouterVrfRibFilterIpv4OspfToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv4OspfToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRibFilterIpv4OspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv4Ospf | cdktf.IResolvable | undefined) {
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

  // route_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv4Rip {
  /**
  * Apply Route-Map on RIP Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_map DataPanosLogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function dataPanosLogicalRouterVrfRibFilterIpv4RipToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv4RipToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRibFilterIpv4RipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv4Rip | cdktf.IResolvable | undefined) {
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

  // route_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv4Static {
  /**
  * Apply Route-Map on Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_map DataPanosLogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function dataPanosLogicalRouterVrfRibFilterIpv4StaticToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv4StaticToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRibFilterIpv4StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv4Static | cdktf.IResolvable | undefined) {
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

  // route_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bgp DataPanosLogicalRouter#bgp}
  */
  readonly bgp?: DataPanosLogicalRouterVrfRibFilterIpv4Bgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospf DataPanosLogicalRouter#ospf}
  */
  readonly ospf?: DataPanosLogicalRouterVrfRibFilterIpv4Ospf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#rip DataPanosLogicalRouter#rip}
  */
  readonly rip?: DataPanosLogicalRouterVrfRibFilterIpv4Rip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static DataPanosLogicalRouter#static}
  */
  readonly static?: DataPanosLogicalRouterVrfRibFilterIpv4Static;
}

export function dataPanosLogicalRouterVrfRibFilterIpv4ToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: dataPanosLogicalRouterVrfRibFilterIpv4BgpToTerraform(struct!.bgp),
    ospf: dataPanosLogicalRouterVrfRibFilterIpv4OspfToTerraform(struct!.ospf),
    rip: dataPanosLogicalRouterVrfRibFilterIpv4RipToTerraform(struct!.rip),
    static: dataPanosLogicalRouterVrfRibFilterIpv4StaticToTerraform(struct!.static),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv4ToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: dataPanosLogicalRouterVrfRibFilterIpv4BgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv4Bgp",
    },
    ospf: {
      value: dataPanosLogicalRouterVrfRibFilterIpv4OspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv4Ospf",
    },
    rip: {
      value: dataPanosLogicalRouterVrfRibFilterIpv4RipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv4Rip",
    },
    static: {
      value: dataPanosLogicalRouterVrfRibFilterIpv4StaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv4Static",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRibFilterIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv4 | cdktf.IResolvable | undefined) {
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

  // bgp - computed: true, optional: true, required: false
  private _bgp = new DataPanosLogicalRouterVrfRibFilterIpv4BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: DataPanosLogicalRouterVrfRibFilterIpv4Bgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospf - computed: true, optional: true, required: false
  private _ospf = new DataPanosLogicalRouterVrfRibFilterIpv4OspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: DataPanosLogicalRouterVrfRibFilterIpv4Ospf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: true, optional: true, required: false
  private _rip = new DataPanosLogicalRouterVrfRibFilterIpv4RipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: DataPanosLogicalRouterVrfRibFilterIpv4Rip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // static - computed: true, optional: true, required: false
  private _static = new DataPanosLogicalRouterVrfRibFilterIpv4StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: DataPanosLogicalRouterVrfRibFilterIpv4Static) {
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
export interface DataPanosLogicalRouterVrfRibFilterIpv6Bgp {
  /**
  * Apply Route-Map on BGP Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_map DataPanosLogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function dataPanosLogicalRouterVrfRibFilterIpv6BgpToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv6BgpToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRibFilterIpv6BgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv6Bgp | cdktf.IResolvable | undefined) {
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

  // route_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3 {
  /**
  * Apply Route-Map on OSPFv3 Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_map DataPanosLogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function dataPanosLogicalRouterVrfRibFilterIpv6Ospfv3ToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv6Ospfv3ToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3 | cdktf.IResolvable | undefined) {
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

  // route_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv6Static {
  /**
  * Apply Route-Map on Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#route_map DataPanosLogicalRouter#route_map}
  */
  readonly routeMap?: string;
}

export function dataPanosLogicalRouterVrfRibFilterIpv6StaticToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_map: cdktf.stringToTerraform(struct!.routeMap),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv6StaticToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRibFilterIpv6StaticOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv6Static | cdktf.IResolvable | undefined) {
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

  // route_map - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRibFilterIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bgp DataPanosLogicalRouter#bgp}
  */
  readonly bgp?: DataPanosLogicalRouterVrfRibFilterIpv6Bgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospfv3 DataPanosLogicalRouter#ospfv3}
  */
  readonly ospfv3?: DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static DataPanosLogicalRouter#static}
  */
  readonly static?: DataPanosLogicalRouterVrfRibFilterIpv6Static;
}

export function dataPanosLogicalRouterVrfRibFilterIpv6ToTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp: dataPanosLogicalRouterVrfRibFilterIpv6BgpToTerraform(struct!.bgp),
    ospfv3: dataPanosLogicalRouterVrfRibFilterIpv6Ospfv3ToTerraform(struct!.ospfv3),
    static: dataPanosLogicalRouterVrfRibFilterIpv6StaticToTerraform(struct!.static),
  }
}


export function dataPanosLogicalRouterVrfRibFilterIpv6ToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp: {
      value: dataPanosLogicalRouterVrfRibFilterIpv6BgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv6Bgp",
    },
    ospfv3: {
      value: dataPanosLogicalRouterVrfRibFilterIpv6Ospfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3",
    },
    static: {
      value: dataPanosLogicalRouterVrfRibFilterIpv6StaticToHclTerraform(struct!.static),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv6Static",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRibFilterIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilterIpv6 | cdktf.IResolvable | undefined) {
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

  // bgp - computed: true, optional: true, required: false
  private _bgp = new DataPanosLogicalRouterVrfRibFilterIpv6BgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: DataPanosLogicalRouterVrfRibFilterIpv6Bgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ospfv3 - computed: true, optional: true, required: false
  private _ospfv3 = new DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: DataPanosLogicalRouterVrfRibFilterIpv6Ospfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // static - computed: true, optional: true, required: false
  private _static = new DataPanosLogicalRouterVrfRibFilterIpv6StaticOutputReference(this, "static");
  public get static() {
    return this._static;
  }
  public putStatic(value: DataPanosLogicalRouterVrfRibFilterIpv6Static) {
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
export interface DataPanosLogicalRouterVrfRibFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv4 DataPanosLogicalRouter#ipv4}
  */
  readonly ipv4?: DataPanosLogicalRouterVrfRibFilterIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: DataPanosLogicalRouterVrfRibFilterIpv6;
}

export function dataPanosLogicalRouterVrfRibFilterToTerraform(struct?: DataPanosLogicalRouterVrfRibFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: dataPanosLogicalRouterVrfRibFilterIpv4ToTerraform(struct!.ipv4),
    ipv6: dataPanosLogicalRouterVrfRibFilterIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfRibFilterToHclTerraform(struct?: DataPanosLogicalRouterVrfRibFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: dataPanosLogicalRouterVrfRibFilterIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv4",
    },
    ipv6: {
      value: dataPanosLogicalRouterVrfRibFilterIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilterIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRibFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRibFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRibFilter | cdktf.IResolvable | undefined) {
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4 = new DataPanosLogicalRouterVrfRibFilterIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: DataPanosLogicalRouterVrfRibFilterIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosLogicalRouterVrfRibFilterIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosLogicalRouterVrfRibFilterIpv6) {
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
export interface DataPanosLogicalRouterVrfRipGlobalBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfRipGlobalBfdToTerraform(struct?: DataPanosLogicalRouterVrfRipGlobalBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfRipGlobalBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfRipGlobalBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRipGlobalBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRipGlobalBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRipGlobalBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#access_list DataPanosLogicalRouter#access_list}
  */
  readonly accessList?: string;
}

export function dataPanosLogicalRouterVrfRipGlobalInboundDistributeListStructToTerraform(struct?: DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
  }
}


export function dataPanosLogicalRouterVrfRipGlobalInboundDistributeListStructToHclTerraform(struct?: DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct | cdktf.IResolvable | undefined) {
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

  // access_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#access_list DataPanosLogicalRouter#access_list}
  */
  readonly accessList?: string;
}

export function dataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStructToTerraform(struct?: DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
  }
}


export function dataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct?: DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct | cdktf.IResolvable | undefined) {
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

  // access_list - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRipInterfacesBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfRipInterfacesBfdToTerraform(struct?: DataPanosLogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfRipInterfacesBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRipInterfacesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRipInterfacesBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#access_list DataPanosLogicalRouter#access_list}
  */
  readonly accessList?: string;
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
}

export function dataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToTerraform(struct?: DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function dataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToHclTerraform(struct?: DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct | cdktf.IResolvable | undefined) {
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

  // access_list - computed: true, optional: true, required: false
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
}
export interface DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct {
  /**
  * access-list name from filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#access_list DataPanosLogicalRouter#access_list}
  */
  readonly accessList?: string;
  /**
  * metric value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
}

export function dataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToTerraform(struct?: DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    metric: cdktf.numberToTerraform(struct!.metric),
  }
}


export function dataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToHclTerraform(struct?: DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct | cdktf.IResolvable | undefined) {
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

  // access_list - computed: true, optional: true, required: false
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
}
export interface DataPanosLogicalRouterVrfRipInterfaces {
  /**
  * Authentication options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#authentication DataPanosLogicalRouter#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bfd DataPanosLogicalRouter#bfd}
  */
  readonly bfd?: DataPanosLogicalRouterVrfRipInterfacesBfd;
  /**
  * Enable RIP on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface_inbound_distribute_list DataPanosLogicalRouter#interface_inbound_distribute_list}
  */
  readonly interfaceInboundDistributeList?: DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface_outbound_distribute_list DataPanosLogicalRouter#interface_outbound_distribute_list}
  */
  readonly interfaceOutboundDistributeList?: DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#mode DataPanosLogicalRouter#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Split horizon options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#split_horizon DataPanosLogicalRouter#split_horizon}
  */
  readonly splitHorizon?: string;
}

export function dataPanosLogicalRouterVrfRipInterfacesToTerraform(struct?: DataPanosLogicalRouterVrfRipInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    bfd: dataPanosLogicalRouterVrfRipInterfacesBfdToTerraform(struct!.bfd),
    enable: cdktf.booleanToTerraform(struct!.enable),
    interface_inbound_distribute_list: dataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToTerraform(struct!.interfaceInboundDistributeList),
    interface_outbound_distribute_list: dataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToTerraform(struct!.interfaceOutboundDistributeList),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    split_horizon: cdktf.stringToTerraform(struct!.splitHorizon),
  }
}


export function dataPanosLogicalRouterVrfRipInterfacesToHclTerraform(struct?: DataPanosLogicalRouterVrfRipInterfaces | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfRipInterfacesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRipInterfacesBfd",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    interface_inbound_distribute_list: {
      value: dataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructToHclTerraform(struct!.interfaceInboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct",
    },
    interface_outbound_distribute_list: {
      value: dataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructToHclTerraform(struct!.interfaceOutboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct",
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

export class DataPanosLogicalRouterVrfRipInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfRipInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRipInterfaces | cdktf.IResolvable | undefined) {
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosLogicalRouterVrfRipInterfacesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosLogicalRouterVrfRipInterfacesBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // enable - computed: true, optional: true, required: false
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

  // interface_inbound_distribute_list - computed: true, optional: true, required: false
  private _interfaceInboundDistributeList = new DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStructOutputReference(this, "interface_inbound_distribute_list");
  public get interfaceInboundDistributeList() {
    return this._interfaceInboundDistributeList;
  }
  public putInterfaceInboundDistributeList(value: DataPanosLogicalRouterVrfRipInterfacesInterfaceInboundDistributeListStruct) {
    this._interfaceInboundDistributeList.internalValue = value;
  }
  public resetInterfaceInboundDistributeList() {
    this._interfaceInboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInboundDistributeListInput() {
    return this._interfaceInboundDistributeList.internalValue;
  }

  // interface_outbound_distribute_list - computed: true, optional: true, required: false
  private _interfaceOutboundDistributeList = new DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStructOutputReference(this, "interface_outbound_distribute_list");
  public get interfaceOutboundDistributeList() {
    return this._interfaceOutboundDistributeList;
  }
  public putInterfaceOutboundDistributeList(value: DataPanosLogicalRouterVrfRipInterfacesInterfaceOutboundDistributeListStruct) {
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

export class DataPanosLogicalRouterVrfRipInterfacesList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfRipInterfaces[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfRipInterfacesOutputReference {
    return new DataPanosLogicalRouterVrfRipInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfRip {
  /**
  * Authentication profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#auth_profile DataPanosLogicalRouter#auth_profile}
  */
  readonly authProfile?: string;
  /**
  * advertise default route in RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#default_information_originate DataPanosLogicalRouter#default_information_originate}
  */
  readonly defaultInformationOriginate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_bfd DataPanosLogicalRouter#global_bfd}
  */
  readonly globalBfd?: DataPanosLogicalRouterVrfRipGlobalBfd;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_inbound_distribute_list DataPanosLogicalRouter#global_inbound_distribute_list}
  */
  readonly globalInboundDistributeList?: DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_outbound_distribute_list DataPanosLogicalRouter#global_outbound_distribute_list}
  */
  readonly globalOutboundDistributeList?: DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct;
  /**
  * timer setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#global_timer DataPanosLogicalRouter#global_timer}
  */
  readonly globalTimer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interfaces DataPanosLogicalRouter#interfaces}
  */
  readonly interfaces?: DataPanosLogicalRouterVrfRipInterfaces[] | cdktf.IResolvable;
  /**
  * Redistribution profile setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#redistribution_profile DataPanosLogicalRouter#redistribution_profile}
  */
  readonly redistributionProfile?: string;
}

export function dataPanosLogicalRouterVrfRipToTerraform(struct?: DataPanosLogicalRouterVrfRip | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_profile: cdktf.stringToTerraform(struct!.authProfile),
    default_information_originate: cdktf.booleanToTerraform(struct!.defaultInformationOriginate),
    enable: cdktf.booleanToTerraform(struct!.enable),
    global_bfd: dataPanosLogicalRouterVrfRipGlobalBfdToTerraform(struct!.globalBfd),
    global_inbound_distribute_list: dataPanosLogicalRouterVrfRipGlobalInboundDistributeListStructToTerraform(struct!.globalInboundDistributeList),
    global_outbound_distribute_list: dataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStructToTerraform(struct!.globalOutboundDistributeList),
    global_timer: cdktf.stringToTerraform(struct!.globalTimer),
    interfaces: cdktf.listMapper(dataPanosLogicalRouterVrfRipInterfacesToTerraform, false)(struct!.interfaces),
    redistribution_profile: cdktf.stringToTerraform(struct!.redistributionProfile),
  }
}


export function dataPanosLogicalRouterVrfRipToHclTerraform(struct?: DataPanosLogicalRouterVrfRip | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfRipGlobalBfdToHclTerraform(struct!.globalBfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRipGlobalBfd",
    },
    global_inbound_distribute_list: {
      value: dataPanosLogicalRouterVrfRipGlobalInboundDistributeListStructToHclTerraform(struct!.globalInboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct",
    },
    global_outbound_distribute_list: {
      value: dataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStructToHclTerraform(struct!.globalOutboundDistributeList),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct",
    },
    global_timer: {
      value: cdktf.stringToHclTerraform(struct!.globalTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfRipInterfacesToHclTerraform, false)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfRipInterfacesList",
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

export class DataPanosLogicalRouterVrfRipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRip | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRip | cdktf.IResolvable | undefined) {
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

  // auth_profile - computed: true, optional: true, required: false
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

  // default_information_originate - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // global_bfd - computed: true, optional: true, required: false
  private _globalBfd = new DataPanosLogicalRouterVrfRipGlobalBfdOutputReference(this, "global_bfd");
  public get globalBfd() {
    return this._globalBfd;
  }
  public putGlobalBfd(value: DataPanosLogicalRouterVrfRipGlobalBfd) {
    this._globalBfd.internalValue = value;
  }
  public resetGlobalBfd() {
    this._globalBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalBfdInput() {
    return this._globalBfd.internalValue;
  }

  // global_inbound_distribute_list - computed: true, optional: true, required: false
  private _globalInboundDistributeList = new DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStructOutputReference(this, "global_inbound_distribute_list");
  public get globalInboundDistributeList() {
    return this._globalInboundDistributeList;
  }
  public putGlobalInboundDistributeList(value: DataPanosLogicalRouterVrfRipGlobalInboundDistributeListStruct) {
    this._globalInboundDistributeList.internalValue = value;
  }
  public resetGlobalInboundDistributeList() {
    this._globalInboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInboundDistributeListInput() {
    return this._globalInboundDistributeList.internalValue;
  }

  // global_outbound_distribute_list - computed: true, optional: true, required: false
  private _globalOutboundDistributeList = new DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStructOutputReference(this, "global_outbound_distribute_list");
  public get globalOutboundDistributeList() {
    return this._globalOutboundDistributeList;
  }
  public putGlobalOutboundDistributeList(value: DataPanosLogicalRouterVrfRipGlobalOutboundDistributeListStruct) {
    this._globalOutboundDistributeList.internalValue = value;
  }
  public resetGlobalOutboundDistributeList() {
    this._globalOutboundDistributeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalOutboundDistributeListInput() {
    return this._globalOutboundDistributeList.internalValue;
  }

  // global_timer - computed: true, optional: true, required: false
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

  // interfaces - computed: true, optional: true, required: false
  private _interfaces = new DataPanosLogicalRouterVrfRipInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: DataPanosLogicalRouterVrfRipInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // redistribution_profile - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfdToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard {
}

export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#discard DataPanosLogicalRouter#discard}
  */
  readonly discard?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard;
  /**
  * nexthop address FQDN address object configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#fqdn DataPanosLogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip_address DataPanosLogicalRouter#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Next-Hop Logical Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#next_lr DataPanosLogicalRouter#next_lr}
  */
  readonly nextLr?: string;
}

export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    next_lr: cdktf.stringToTerraform(struct!.nextLr),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard",
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

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop | cdktf.IResolvable | undefined) {
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

  // discard - computed: true, optional: true, required: false
  private _discard = new DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
  }

  // fqdn - computed: true, optional: true, required: false
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

  // ip_address - computed: true, optional: true, required: false
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

  // next_lr - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations {
  /**
  * ping count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#count DataPanosLogicalRouter#count}
  */
  readonly count?: number;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#destination DataPanosLogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interval DataPanosLogicalRouter#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#source DataPanosLogicalRouter#source}
  */
  readonly source?: string;
}

export function dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
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

  // destination - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#failure_condition DataPanosLogicalRouter#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * hold time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#hold_time DataPanosLogicalRouter#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#monitor_destinations DataPanosLogicalRouter#monitor_destinations}
  */
  readonly monitorDestinations?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // monitor_destinations - computed: true, optional: true, required: false
  private _monitorDestinations = new DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfRoutingTableIpStaticRoute {
  /**
  * adminitrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#administrative_distance DataPanosLogicalRouter#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bfd DataPanosLogicalRouter#bfd}
  */
  readonly bfd?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd;
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#destination DataPanosLogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * metric value (path cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#nexthop DataPanosLogicalRouter#nexthop}
  */
  readonly nexthop?: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#path_monitor DataPanosLogicalRouter#path_monitor}
  */
  readonly pathMonitor?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor;
}

export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    bfd: dataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopToTerraform(struct!.nexthop),
    path_monitor: dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorToTerraform(struct!.pathMonitor),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpStaticRouteToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd",
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
      value: dataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop",
    },
    path_monitor: {
      value: dataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRoute | cdktf.IResolvable | undefined) {
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

  // administrative_distance - computed: true, optional: true, required: false
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // destination - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // nexthop - computed: true, optional: true, required: false
  private _nexthop = new DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // path_monitor - computed: true, optional: true, required: false
  private _pathMonitor = new DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRoutePathMonitor) {
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

export class DataPanosLogicalRouterVrfRoutingTableIpStaticRouteList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfRoutingTableIpStaticRouteOutputReference {
    return new DataPanosLogicalRouterVrfRoutingTableIpStaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfRoutingTableIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static_route DataPanosLogicalRouter#static_route}
  */
  readonly staticRoute?: DataPanosLogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfRoutingTableIpToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(dataPanosLogicalRouterVrfRoutingTableIpStaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfRoutingTableIpStaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRoutingTableIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIp | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIp | cdktf.IResolvable | undefined) {
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

  // static_route - computed: true, optional: true, required: false
  private _staticRoute = new DataPanosLogicalRouterVrfRoutingTableIpStaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: DataPanosLogicalRouterVrfRoutingTableIpStaticRoute[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#profile DataPanosLogicalRouter#profile}
  */
  readonly profile?: string;
}

export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard {
}

export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#discard DataPanosLogicalRouter#discard}
  */
  readonly discard?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard;
  /**
  * nexthop address FQDN address object configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#fqdn DataPanosLogicalRouter#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6_address DataPanosLogicalRouter#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Next-Hop Logical Router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#next_lr DataPanosLogicalRouter#next_lr}
  */
  readonly nextLr?: string;
}

export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    next_lr: cdktf.stringToTerraform(struct!.nextLr),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard",
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

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop | cdktf.IResolvable | undefined) {
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

  // discard - computed: true, optional: true, required: false
  private _discard = new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
  }

  // fqdn - computed: true, optional: true, required: false
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

  // ipv6_address - computed: true, optional: true, required: false
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

  // next_lr - computed: true, optional: true, required: false
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
export interface DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations {
  /**
  * ping count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#count DataPanosLogicalRouter#count}
  */
  readonly count?: number;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#destination DataPanosLogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interval DataPanosLogicalRouter#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#source DataPanosLogicalRouter#source}
  */
  readonly source?: string;
}

export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
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


export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable): any {
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

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
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

  // destination - computed: true, optional: true, required: false
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

  // enable - computed: true, optional: true, required: false
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

  // source - computed: true, optional: true, required: false
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

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference {
    return new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#enable DataPanosLogicalRouter#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#failure_condition DataPanosLogicalRouter#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * hold time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#hold_time DataPanosLogicalRouter#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#monitor_destinations DataPanosLogicalRouter#monitor_destinations}
  */
  readonly monitorDestinations?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor | cdktf.IResolvable | undefined) {
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

  // enable - computed: true, optional: true, required: false
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

  // monitor_destinations - computed: true, optional: true, required: false
  private _monitorDestinations = new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorMonitorDestinations[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute {
  /**
  * adminitrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#administrative_distance DataPanosLogicalRouter#administrative_distance}
  */
  readonly administrativeDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bfd DataPanosLogicalRouter#bfd}
  */
  readonly bfd?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd;
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#destination DataPanosLogicalRouter#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string;
  /**
  * metric value (path cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#metric DataPanosLogicalRouter#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#nexthop DataPanosLogicalRouter#nexthop}
  */
  readonly nexthop?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#path_monitor DataPanosLogicalRouter#path_monitor}
  */
  readonly pathMonitor?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor;
}

export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrative_distance: cdktf.numberToTerraform(struct!.administrativeDistance),
    bfd: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopToTerraform(struct!.nexthop),
    path_monitor: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToTerraform(struct!.pathMonitor),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable): any {
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
      value: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd",
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
      value: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop",
    },
    path_monitor: {
      value: dataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute | cdktf.IResolvable | undefined) {
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

  // administrative_distance - computed: true, optional: true, required: false
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteBfd) {
    this._bfd.internalValue = value;
  }
  public resetBfd() {
    this._bfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd.internalValue;
  }

  // destination - computed: true, optional: true, required: false
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

  // interface - computed: true, optional: true, required: false
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

  // nexthop - computed: true, optional: true, required: false
  private _nexthop = new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // path_monitor - computed: true, optional: true, required: false
  private _pathMonitor = new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoutePathMonitor) {
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

export class DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference {
    return new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosLogicalRouterVrfRoutingTableIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#static_route DataPanosLogicalRouter#static_route}
  */
  readonly staticRoute?: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable;
}

export function dataPanosLogicalRouterVrfRoutingTableIpv6ToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route: cdktf.listMapper(dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteToTerraform, false)(struct!.staticRoute),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableIpv6ToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route: {
      value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteToHclTerraform, false)(struct!.staticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRoutingTableIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTableIpv6 | cdktf.IResolvable | undefined) {
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

  // static_route - computed: true, optional: true, required: false
  private _staticRoute = new DataPanosLogicalRouterVrfRoutingTableIpv6StaticRouteList(this, "static_route", false);
  public get staticRoute() {
    return this._staticRoute;
  }
  public putStaticRoute(value: DataPanosLogicalRouterVrfRoutingTableIpv6StaticRoute[] | cdktf.IResolvable) {
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
export interface DataPanosLogicalRouterVrfRoutingTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ip DataPanosLogicalRouter#ip}
  */
  readonly ip?: DataPanosLogicalRouterVrfRoutingTableIp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ipv6 DataPanosLogicalRouter#ipv6}
  */
  readonly ipv6?: DataPanosLogicalRouterVrfRoutingTableIpv6;
}

export function dataPanosLogicalRouterVrfRoutingTableToTerraform(struct?: DataPanosLogicalRouterVrfRoutingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: dataPanosLogicalRouterVrfRoutingTableIpToTerraform(struct!.ip),
    ipv6: dataPanosLogicalRouterVrfRoutingTableIpv6ToTerraform(struct!.ipv6),
  }
}


export function dataPanosLogicalRouterVrfRoutingTableToHclTerraform(struct?: DataPanosLogicalRouterVrfRoutingTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: dataPanosLogicalRouterVrfRoutingTableIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIp",
    },
    ipv6: {
      value: dataPanosLogicalRouterVrfRoutingTableIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTableIpv6",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfRoutingTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosLogicalRouterVrfRoutingTable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrfRoutingTable | cdktf.IResolvable | undefined) {
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

  // ip - computed: true, optional: true, required: false
  private _ip = new DataPanosLogicalRouterVrfRoutingTableIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: DataPanosLogicalRouterVrfRoutingTableIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6 = new DataPanosLogicalRouterVrfRoutingTableIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: DataPanosLogicalRouterVrfRoutingTableIpv6) {
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
export interface DataPanosLogicalRouterVrf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#administrative_distances DataPanosLogicalRouter#administrative_distances}
  */
  readonly administrativeDistances?: DataPanosLogicalRouterVrfAdministrativeDistances;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#bgp DataPanosLogicalRouter#bgp}
  */
  readonly bgp?: DataPanosLogicalRouterVrfBgp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ecmp DataPanosLogicalRouter#ecmp}
  */
  readonly ecmp?: DataPanosLogicalRouterVrfEcmp;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#interface DataPanosLogicalRouter#interface}
  */
  readonly interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#multicast DataPanosLogicalRouter#multicast}
  */
  readonly multicast?: DataPanosLogicalRouterVrfMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#name DataPanosLogicalRouter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospf DataPanosLogicalRouter#ospf}
  */
  readonly ospf?: DataPanosLogicalRouterVrfOspf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#ospfv3 DataPanosLogicalRouter#ospfv3}
  */
  readonly ospfv3?: DataPanosLogicalRouterVrfOspfv3;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#rib_filter DataPanosLogicalRouter#rib_filter}
  */
  readonly ribFilter?: DataPanosLogicalRouterVrfRibFilter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#rip DataPanosLogicalRouter#rip}
  */
  readonly rip?: DataPanosLogicalRouterVrfRip;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#routing_table DataPanosLogicalRouter#routing_table}
  */
  readonly routingTable?: DataPanosLogicalRouterVrfRoutingTable;
}

export function dataPanosLogicalRouterVrfToTerraform(struct?: DataPanosLogicalRouterVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrative_distances: dataPanosLogicalRouterVrfAdministrativeDistancesToTerraform(struct!.administrativeDistances),
    bgp: dataPanosLogicalRouterVrfBgpToTerraform(struct!.bgp),
    ecmp: dataPanosLogicalRouterVrfEcmpToTerraform(struct!.ecmp),
    interface: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interface),
    multicast: dataPanosLogicalRouterVrfMulticastToTerraform(struct!.multicast),
    name: cdktf.stringToTerraform(struct!.name),
    ospf: dataPanosLogicalRouterVrfOspfToTerraform(struct!.ospf),
    ospfv3: dataPanosLogicalRouterVrfOspfv3ToTerraform(struct!.ospfv3),
    rib_filter: dataPanosLogicalRouterVrfRibFilterToTerraform(struct!.ribFilter),
    rip: dataPanosLogicalRouterVrfRipToTerraform(struct!.rip),
    routing_table: dataPanosLogicalRouterVrfRoutingTableToTerraform(struct!.routingTable),
  }
}


export function dataPanosLogicalRouterVrfToHclTerraform(struct?: DataPanosLogicalRouterVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    administrative_distances: {
      value: dataPanosLogicalRouterVrfAdministrativeDistancesToHclTerraform(struct!.administrativeDistances),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfAdministrativeDistances",
    },
    bgp: {
      value: dataPanosLogicalRouterVrfBgpToHclTerraform(struct!.bgp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfBgp",
    },
    ecmp: {
      value: dataPanosLogicalRouterVrfEcmpToHclTerraform(struct!.ecmp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfEcmp",
    },
    interface: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interface),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    multicast: {
      value: dataPanosLogicalRouterVrfMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfMulticast",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ospf: {
      value: dataPanosLogicalRouterVrfOspfToHclTerraform(struct!.ospf),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspf",
    },
    ospfv3: {
      value: dataPanosLogicalRouterVrfOspfv3ToHclTerraform(struct!.ospfv3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfOspfv3",
    },
    rib_filter: {
      value: dataPanosLogicalRouterVrfRibFilterToHclTerraform(struct!.ribFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRibFilter",
    },
    rip: {
      value: dataPanosLogicalRouterVrfRipToHclTerraform(struct!.rip),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRip",
    },
    routing_table: {
      value: dataPanosLogicalRouterVrfRoutingTableToHclTerraform(struct!.routingTable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosLogicalRouterVrfRoutingTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosLogicalRouterVrfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosLogicalRouterVrf | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosLogicalRouterVrf | cdktf.IResolvable | undefined) {
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

  // administrative_distances - computed: true, optional: true, required: false
  private _administrativeDistances = new DataPanosLogicalRouterVrfAdministrativeDistancesOutputReference(this, "administrative_distances");
  public get administrativeDistances() {
    return this._administrativeDistances;
  }
  public putAdministrativeDistances(value: DataPanosLogicalRouterVrfAdministrativeDistances) {
    this._administrativeDistances.internalValue = value;
  }
  public resetAdministrativeDistances() {
    this._administrativeDistances.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeDistancesInput() {
    return this._administrativeDistances.internalValue;
  }

  // bgp - computed: true, optional: true, required: false
  private _bgp = new DataPanosLogicalRouterVrfBgpOutputReference(this, "bgp");
  public get bgp() {
    return this._bgp;
  }
  public putBgp(value: DataPanosLogicalRouterVrfBgp) {
    this._bgp.internalValue = value;
  }
  public resetBgp() {
    this._bgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp.internalValue;
  }

  // ecmp - computed: true, optional: true, required: false
  private _ecmp = new DataPanosLogicalRouterVrfEcmpOutputReference(this, "ecmp");
  public get ecmp() {
    return this._ecmp;
  }
  public putEcmp(value: DataPanosLogicalRouterVrfEcmp) {
    this._ecmp.internalValue = value;
  }
  public resetEcmp() {
    this._ecmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpInput() {
    return this._ecmp.internalValue;
  }

  // interface - computed: true, optional: true, required: false
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

  // multicast - computed: true, optional: true, required: false
  private _multicast = new DataPanosLogicalRouterVrfMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: DataPanosLogicalRouterVrfMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
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

  // ospf - computed: true, optional: true, required: false
  private _ospf = new DataPanosLogicalRouterVrfOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: DataPanosLogicalRouterVrfOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // ospfv3 - computed: true, optional: true, required: false
  private _ospfv3 = new DataPanosLogicalRouterVrfOspfv3OutputReference(this, "ospfv3");
  public get ospfv3() {
    return this._ospfv3;
  }
  public putOspfv3(value: DataPanosLogicalRouterVrfOspfv3) {
    this._ospfv3.internalValue = value;
  }
  public resetOspfv3() {
    this._ospfv3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfv3Input() {
    return this._ospfv3.internalValue;
  }

  // rib_filter - computed: true, optional: true, required: false
  private _ribFilter = new DataPanosLogicalRouterVrfRibFilterOutputReference(this, "rib_filter");
  public get ribFilter() {
    return this._ribFilter;
  }
  public putRibFilter(value: DataPanosLogicalRouterVrfRibFilter) {
    this._ribFilter.internalValue = value;
  }
  public resetRibFilter() {
    this._ribFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribFilterInput() {
    return this._ribFilter.internalValue;
  }

  // rip - computed: true, optional: true, required: false
  private _rip = new DataPanosLogicalRouterVrfRipOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: DataPanosLogicalRouterVrfRip) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // routing_table - computed: true, optional: true, required: false
  private _routingTable = new DataPanosLogicalRouterVrfRoutingTableOutputReference(this, "routing_table");
  public get routingTable() {
    return this._routingTable;
  }
  public putRoutingTable(value: DataPanosLogicalRouterVrfRoutingTable) {
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

export class DataPanosLogicalRouterVrfList extends cdktf.ComplexList {
  public internalValue? : DataPanosLogicalRouterVrf[] | cdktf.IResolvable

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
  public get(index: number): DataPanosLogicalRouterVrfOutputReference {
    return new DataPanosLogicalRouterVrfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router panos_logical_router}
*/
export class DataPanosLogicalRouter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_logical_router";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosLogicalRouter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosLogicalRouter to import
  * @param importFromId The id of the existing DataPanosLogicalRouter that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosLogicalRouter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_logical_router", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.6/docs/data-sources/logical_router panos_logical_router} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosLogicalRouterConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosLogicalRouterConfig) {
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
  private _location = new DataPanosLogicalRouterLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosLogicalRouterLocation) {
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

  // vrf - computed: true, optional: true, required: false
  private _vrf = new DataPanosLogicalRouterVrfList(this, "vrf", false);
  public get vrf() {
    return this._vrf;
  }
  public putVrf(value: DataPanosLogicalRouterVrf[] | cdktf.IResolvable) {
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
      location: dataPanosLogicalRouterLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      vrf: cdktf.listMapper(dataPanosLogicalRouterVrfToTerraform, false)(this._vrf.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: dataPanosLogicalRouterLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosLogicalRouterLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.listMapperHcl(dataPanosLogicalRouterVrfToHclTerraform, false)(this._vrf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataPanosLogicalRouterVrfList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
