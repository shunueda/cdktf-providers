// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosBgpDampeningRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe BGP Dampening Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#description DataPanosBgpDampeningRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * Half-life for the penalty Default:15 (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#half_life DataPanosBgpDampeningRoutingProfile#half_life}
  */
  readonly halfLife?: number;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#location DataPanosBgpDampeningRoutingProfile#location}
  */
  readonly location: DataPanosBgpDampeningRoutingProfileLocation;
  /**
  * Maximum duration (in minutes) a route can be suppressed. Default:60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#max_suppress_limit DataPanosBgpDampeningRoutingProfile#max_suppress_limit}
  */
  readonly maxSuppressLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#name DataPanosBgpDampeningRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Value to start reusing a route. Default:750
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#reuse_limit DataPanosBgpDampeningRoutingProfile#reuse_limit}
  */
  readonly reuseLimit?: number;
  /**
  * Value to start supressing the route. Default:2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#suppress_limit DataPanosBgpDampeningRoutingProfile#suppress_limit}
  */
  readonly suppressLimit?: number;
}
export interface DataPanosBgpDampeningRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#ngfw_device DataPanosBgpDampeningRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosBgpDampeningRoutingProfileLocationNgfwToTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosBgpDampeningRoutingProfileLocationNgfwToHclTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosBgpDampeningRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpDampeningRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpDampeningRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpDampeningRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#name DataPanosBgpDampeningRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#ngfw_device DataPanosBgpDampeningRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#panorama_device DataPanosBgpDampeningRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosBgpDampeningRoutingProfileLocationTemplateToTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosBgpDampeningRoutingProfileLocationTemplateToHclTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosBgpDampeningRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpDampeningRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpDampeningRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpDampeningRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#name DataPanosBgpDampeningRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#ngfw_device DataPanosBgpDampeningRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#panorama_device DataPanosBgpDampeningRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosBgpDampeningRoutingProfileLocationTemplateStackToTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosBgpDampeningRoutingProfileLocationTemplateStackToHclTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosBgpDampeningRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpDampeningRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosBgpDampeningRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosBgpDampeningRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#ngfw DataPanosBgpDampeningRoutingProfile#ngfw}
  */
  readonly ngfw?: DataPanosBgpDampeningRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#template DataPanosBgpDampeningRoutingProfile#template}
  */
  readonly template?: DataPanosBgpDampeningRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#template_stack DataPanosBgpDampeningRoutingProfile#template_stack}
  */
  readonly templateStack?: DataPanosBgpDampeningRoutingProfileLocationTemplateStack;
}

export function dataPanosBgpDampeningRoutingProfileLocationToTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosBgpDampeningRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosBgpDampeningRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosBgpDampeningRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosBgpDampeningRoutingProfileLocationToHclTerraform(struct?: DataPanosBgpDampeningRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosBgpDampeningRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpDampeningRoutingProfileLocationNgfw",
    },
    template: {
      value: dataPanosBgpDampeningRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpDampeningRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: dataPanosBgpDampeningRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosBgpDampeningRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosBgpDampeningRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosBgpDampeningRoutingProfileLocation | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosBgpDampeningRoutingProfileLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ngfw.internalValue = undefined;
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
      this._ngfw.internalValue = value.ngfw;
      this._template.internalValue = value.template;
      this._templateStack.internalValue = value.templateStack;
    }
  }

  // ngfw - computed: false, optional: true, required: false
  private _ngfw = new DataPanosBgpDampeningRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosBgpDampeningRoutingProfileLocationNgfw) {
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
  private _template = new DataPanosBgpDampeningRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosBgpDampeningRoutingProfileLocationTemplate) {
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
  private _templateStack = new DataPanosBgpDampeningRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosBgpDampeningRoutingProfileLocationTemplateStack) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile panos_bgp_dampening_routing_profile}
*/
export class DataPanosBgpDampeningRoutingProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_bgp_dampening_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosBgpDampeningRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosBgpDampeningRoutingProfile to import
  * @param importFromId The id of the existing DataPanosBgpDampeningRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosBgpDampeningRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_bgp_dampening_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/bgp_dampening_routing_profile panos_bgp_dampening_routing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosBgpDampeningRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataPanosBgpDampeningRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_bgp_dampening_routing_profile',
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
    this._halfLife = config.halfLife;
    this._location.internalValue = config.location;
    this._maxSuppressLimit = config.maxSuppressLimit;
    this._name = config.name;
    this._reuseLimit = config.reuseLimit;
    this._suppressLimit = config.suppressLimit;
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

  // half_life - computed: true, optional: true, required: false
  private _halfLife?: number; 
  public get halfLife() {
    return this.getNumberAttribute('half_life');
  }
  public set halfLife(value: number) {
    this._halfLife = value;
  }
  public resetHalfLife() {
    this._halfLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfLifeInput() {
    return this._halfLife;
  }

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosBgpDampeningRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosBgpDampeningRoutingProfileLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // max_suppress_limit - computed: true, optional: true, required: false
  private _maxSuppressLimit?: number; 
  public get maxSuppressLimit() {
    return this.getNumberAttribute('max_suppress_limit');
  }
  public set maxSuppressLimit(value: number) {
    this._maxSuppressLimit = value;
  }
  public resetMaxSuppressLimit() {
    this._maxSuppressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSuppressLimitInput() {
    return this._maxSuppressLimit;
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

  // reuse_limit - computed: true, optional: true, required: false
  private _reuseLimit?: number; 
  public get reuseLimit() {
    return this.getNumberAttribute('reuse_limit');
  }
  public set reuseLimit(value: number) {
    this._reuseLimit = value;
  }
  public resetReuseLimit() {
    this._reuseLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseLimitInput() {
    return this._reuseLimit;
  }

  // suppress_limit - computed: true, optional: true, required: false
  private _suppressLimit?: number; 
  public get suppressLimit() {
    return this.getNumberAttribute('suppress_limit');
  }
  public set suppressLimit(value: number) {
    this._suppressLimit = value;
  }
  public resetSuppressLimit() {
    this._suppressLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressLimitInput() {
    return this._suppressLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      half_life: cdktf.numberToTerraform(this._halfLife),
      location: dataPanosBgpDampeningRoutingProfileLocationToTerraform(this._location.internalValue),
      max_suppress_limit: cdktf.numberToTerraform(this._maxSuppressLimit),
      name: cdktf.stringToTerraform(this._name),
      reuse_limit: cdktf.numberToTerraform(this._reuseLimit),
      suppress_limit: cdktf.numberToTerraform(this._suppressLimit),
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
      half_life: {
        value: cdktf.numberToHclTerraform(this._halfLife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      location: {
        value: dataPanosBgpDampeningRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosBgpDampeningRoutingProfileLocation",
      },
      max_suppress_limit: {
        value: cdktf.numberToHclTerraform(this._maxSuppressLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse_limit: {
        value: cdktf.numberToHclTerraform(this._reuseLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suppress_limit: {
        value: cdktf.numberToHclTerraform(this._suppressLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
