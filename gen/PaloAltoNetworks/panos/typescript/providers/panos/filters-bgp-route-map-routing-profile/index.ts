// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FiltersBgpRouteMapRoutingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describe BGP Route Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#description FiltersBgpRouteMapRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#location FiltersBgpRouteMapRoutingProfile#location}
  */
  readonly location: FiltersBgpRouteMapRoutingProfileLocation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#name FiltersBgpRouteMapRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#route_map FiltersBgpRouteMapRoutingProfile#route_map}
  */
  readonly routeMap?: FiltersBgpRouteMapRoutingProfileRouteMap[] | cdktf.IResolvable;
}
export interface FiltersBgpRouteMapRoutingProfileLocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ngfw_device FiltersBgpRouteMapRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function filtersBgpRouteMapRoutingProfileLocationNgfwToTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function filtersBgpRouteMapRoutingProfileLocationNgfwToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocationNgfw | cdktf.IResolvable): any {
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

export class FiltersBgpRouteMapRoutingProfileLocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileLocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileLocationNgfw | cdktf.IResolvable | undefined) {
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
export interface FiltersBgpRouteMapRoutingProfileLocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#name FiltersBgpRouteMapRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ngfw_device FiltersBgpRouteMapRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#panorama_device FiltersBgpRouteMapRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function filtersBgpRouteMapRoutingProfileLocationTemplateToTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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


export function filtersBgpRouteMapRoutingProfileLocationTemplateToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocationTemplate | cdktf.IResolvable): any {
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

export class FiltersBgpRouteMapRoutingProfileLocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileLocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileLocationTemplate | cdktf.IResolvable | undefined) {
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
export interface FiltersBgpRouteMapRoutingProfileLocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#name FiltersBgpRouteMapRoutingProfile#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ngfw_device FiltersBgpRouteMapRoutingProfile#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#panorama_device FiltersBgpRouteMapRoutingProfile#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function filtersBgpRouteMapRoutingProfileLocationTemplateStackToTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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


export function filtersBgpRouteMapRoutingProfileLocationTemplateStackToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocationTemplateStack | cdktf.IResolvable): any {
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

export class FiltersBgpRouteMapRoutingProfileLocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileLocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface FiltersBgpRouteMapRoutingProfileLocation {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ngfw FiltersBgpRouteMapRoutingProfile#ngfw}
  */
  readonly ngfw?: FiltersBgpRouteMapRoutingProfileLocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#template FiltersBgpRouteMapRoutingProfile#template}
  */
  readonly template?: FiltersBgpRouteMapRoutingProfileLocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#template_stack FiltersBgpRouteMapRoutingProfile#template_stack}
  */
  readonly templateStack?: FiltersBgpRouteMapRoutingProfileLocationTemplateStack;
}

export function filtersBgpRouteMapRoutingProfileLocationToTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: filtersBgpRouteMapRoutingProfileLocationNgfwToTerraform(struct!.ngfw),
    template: filtersBgpRouteMapRoutingProfileLocationTemplateToTerraform(struct!.template),
    template_stack: filtersBgpRouteMapRoutingProfileLocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function filtersBgpRouteMapRoutingProfileLocationToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: filtersBgpRouteMapRoutingProfileLocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileLocationNgfw",
    },
    template: {
      value: filtersBgpRouteMapRoutingProfileLocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileLocationTemplate",
    },
    template_stack: {
      value: filtersBgpRouteMapRoutingProfileLocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileLocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileLocation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileLocation | cdktf.IResolvable | undefined) {
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
  private _ngfw = new FiltersBgpRouteMapRoutingProfileLocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: FiltersBgpRouteMapRoutingProfileLocationNgfw) {
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
  private _template = new FiltersBgpRouteMapRoutingProfileLocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: FiltersBgpRouteMapRoutingProfileLocationTemplate) {
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
  private _templateStack = new FiltersBgpRouteMapRoutingProfileLocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: FiltersBgpRouteMapRoutingProfileLocationTemplateStack) {
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
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address {
  /**
  * Access-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#access_list FiltersBgpRouteMapRoutingProfile#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#prefix_list FiltersBgpRouteMapRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4AddressToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4AddressToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
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

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop {
  /**
  * Access-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#access_list FiltersBgpRouteMapRoutingProfile#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#prefix_list FiltersBgpRouteMapRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHopToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHopToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
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

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource {
  /**
  * Access-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#access_list FiltersBgpRouteMapRoutingProfile#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#prefix_list FiltersBgpRouteMapRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSourceToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSourceToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
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

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#address FiltersBgpRouteMapRoutingProfile#address}
  */
  readonly address?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#next_hop FiltersBgpRouteMapRoutingProfile#next_hop}
  */
  readonly nextHop?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#route_source FiltersBgpRouteMapRoutingProfile#route_source}
  */
  readonly routeSource?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4ToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4AddressToTerraform(struct!.address),
    next_hop: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHopToTerraform(struct!.nextHop),
    route_source: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSourceToTerraform(struct!.routeSource),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4ToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address",
    },
    next_hop: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop",
    },
    route_source: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSourceToHclTerraform(struct!.routeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    if (this._routeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSource = this._routeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
      this._routeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
      this._routeSource.internalValue = value.routeSource;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4Address) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }

  // route_source - computed: false, optional: true, required: false
  private _routeSource = new FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSourceOutputReference(this, "route_source");
  public get routeSource() {
    return this._routeSource;
  }
  public putRouteSource(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4RouteSource) {
    this._routeSource.internalValue = value;
  }
  public resetRouteSource() {
    this._routeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSourceInput() {
    return this._routeSource.internalValue;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address {
  /**
  * Access-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#access_list FiltersBgpRouteMapRoutingProfile#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#prefix_list FiltersBgpRouteMapRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6AddressToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6AddressToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6AddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
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

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop {
  /**
  * Access-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#access_list FiltersBgpRouteMapRoutingProfile#access_list}
  */
  readonly accessList?: string;
  /**
  * Prefix-List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#prefix_list FiltersBgpRouteMapRoutingProfile#prefix_list}
  */
  readonly prefixList?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHopToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    prefix_list: cdktf.stringToTerraform(struct!.prefixList),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHopToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop | cdktf.IResolvable): any {
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
    prefix_list: {
      value: cdktf.stringToHclTerraform(struct!.prefixList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._prefixList !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixList = this._prefixList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._prefixList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._prefixList = value.prefixList;
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

  // prefix_list - computed: false, optional: true, required: false
  private _prefixList?: string; 
  public get prefixList() {
    return this.getStringAttribute('prefix_list');
  }
  public set prefixList(value: string) {
    this._prefixList = value;
  }
  public resetPrefixList() {
    this._prefixList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListInput() {
    return this._prefixList;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#address FiltersBgpRouteMapRoutingProfile#address}
  */
  readonly address?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#next_hop FiltersBgpRouteMapRoutingProfile#next_hop}
  */
  readonly nextHop?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6ToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6AddressToTerraform(struct!.address),
    next_hop: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHopToTerraform(struct!.nextHop),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6ToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6AddressToHclTerraform(struct!.address),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address",
    },
    next_hop: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHopToHclTerraform(struct!.nextHop),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address?.internalValue;
    }
    if (this._nextHop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address.internalValue = undefined;
      this._nextHop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address.internalValue = value.address;
      this._nextHop.internalValue = value.nextHop;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address = new FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6AddressOutputReference(this, "address");
  public get address() {
    return this._address;
  }
  public putAddress(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6Address) {
    this._address.internalValue = value;
  }
  public resetAddress() {
    this._address.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address.internalValue;
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop = new FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHopOutputReference(this, "next_hop");
  public get nextHop() {
    return this._nextHop;
  }
  public putNextHop(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6NextHop) {
    this._nextHop.internalValue = value;
  }
  public resetNextHop() {
    this._nextHop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop.internalValue;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapMatch {
  /**
  * AS Path Access List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#as_path_access_list FiltersBgpRouteMapRoutingProfile#as_path_access_list}
  */
  readonly asPathAccessList?: string;
  /**
  * Extended Community Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#extended_community FiltersBgpRouteMapRoutingProfile#extended_community}
  */
  readonly extendedCommunity?: string;
  /**
  * Match Interface of the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#interface FiltersBgpRouteMapRoutingProfile#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ipv4 FiltersBgpRouteMapRoutingProfile#ipv4}
  */
  readonly ipv4?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ipv6 FiltersBgpRouteMapRoutingProfile#ipv6}
  */
  readonly ipv6?: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6;
  /**
  * Large Community Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#large_community FiltersBgpRouteMapRoutingProfile#large_community}
  */
  readonly largeCommunity?: string;
  /**
  * Match Local Preference of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#local_preference FiltersBgpRouteMapRoutingProfile#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Match Metric (BGP MED) of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#metric FiltersBgpRouteMapRoutingProfile#metric}
  */
  readonly metric?: number;
  /**
  * Match origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#origin FiltersBgpRouteMapRoutingProfile#origin}
  */
  readonly origin?: string;
  /**
  * Match Peer Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#peer FiltersBgpRouteMapRoutingProfile#peer}
  */
  readonly peer?: string;
  /**
  * Regular Community Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#regular_community FiltersBgpRouteMapRoutingProfile#regular_community}
  */
  readonly regularCommunity?: string;
  /**
  * Match Tag of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#tag FiltersBgpRouteMapRoutingProfile#tag}
  */
  readonly tag?: number;
}

export function filtersBgpRouteMapRoutingProfileRouteMapMatchToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_path_access_list: cdktf.stringToTerraform(struct!.asPathAccessList),
    extended_community: cdktf.stringToTerraform(struct!.extendedCommunity),
    interface: cdktf.stringToTerraform(struct!.interface),
    ipv4: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4ToTerraform(struct!.ipv4),
    ipv6: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6ToTerraform(struct!.ipv6),
    large_community: cdktf.stringToTerraform(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: cdktf.numberToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    peer: cdktf.stringToTerraform(struct!.peer),
    regular_community: cdktf.stringToTerraform(struct!.regularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapMatchToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_path_access_list: {
      value: cdktf.stringToHclTerraform(struct!.asPathAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extended_community: {
      value: cdktf.stringToHclTerraform(struct!.extendedCommunity),
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
    ipv4: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4",
    },
    ipv6: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6",
    },
    large_community: {
      value: cdktf.stringToHclTerraform(struct!.largeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer: {
      value: cdktf.stringToHclTerraform(struct!.peer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regular_community: {
      value: cdktf.stringToHclTerraform(struct!.regularCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asPathAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.asPathAccessList = this._asPathAccessList;
    }
    if (this._extendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunity = this._extendedCommunity;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._largeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._peer !== undefined) {
      hasAnyValues = true;
      internalValueResult.peer = this._peer;
    }
    if (this._regularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularCommunity = this._regularCommunity;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asPathAccessList = undefined;
      this._extendedCommunity = undefined;
      this._interface = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._largeCommunity = undefined;
      this._localPreference = undefined;
      this._metric = undefined;
      this._origin = undefined;
      this._peer = undefined;
      this._regularCommunity = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asPathAccessList = value.asPathAccessList;
      this._extendedCommunity = value.extendedCommunity;
      this._interface = value.interface;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
      this._largeCommunity = value.largeCommunity;
      this._localPreference = value.localPreference;
      this._metric = value.metric;
      this._origin = value.origin;
      this._peer = value.peer;
      this._regularCommunity = value.regularCommunity;
      this._tag = value.tag;
    }
  }

  // as_path_access_list - computed: false, optional: true, required: false
  private _asPathAccessList?: string; 
  public get asPathAccessList() {
    return this.getStringAttribute('as_path_access_list');
  }
  public set asPathAccessList(value: string) {
    this._asPathAccessList = value;
  }
  public resetAsPathAccessList() {
    this._asPathAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asPathAccessListInput() {
    return this._asPathAccessList;
  }

  // extended_community - computed: false, optional: true, required: false
  private _extendedCommunity?: string; 
  public get extendedCommunity() {
    return this.getStringAttribute('extended_community');
  }
  public set extendedCommunity(value: string) {
    this._extendedCommunity = value;
  }
  public resetExtendedCommunity() {
    this._extendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityInput() {
    return this._extendedCommunity;
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

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv4) {
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
  private _ipv6 = new FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: FiltersBgpRouteMapRoutingProfileRouteMapMatchIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string; 
  public get largeCommunity() {
    return this.getStringAttribute('large_community');
  }
  public set largeCommunity(value: string) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // peer - computed: false, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // regular_community - computed: false, optional: true, required: false
  private _regularCommunity?: string; 
  public get regularCommunity() {
    return this.getStringAttribute('regular_community');
  }
  public set regularCommunity(value: string) {
    this._regularCommunity = value;
  }
  public resetRegularCommunity() {
    this._regularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularCommunityInput() {
    return this._regularCommunity;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator {
  /**
  * Set BGP Aggregator AS <1-4294967295>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#as FiltersBgpRouteMapRoutingProfile#as}
  */
  readonly as?: number;
  /**
  * Set BGP Aggregator Router ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#router_id FiltersBgpRouteMapRoutingProfile#router_id}
  */
  readonly routerId?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapSetAggregatorToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as: cdktf.numberToTerraform(struct!.as),
    router_id: cdktf.stringToTerraform(struct!.routerId),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapSetAggregatorToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as: {
      value: cdktf.numberToHclTerraform(struct!.as),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class FiltersBgpRouteMapRoutingProfileRouteMapSetAggregatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._as !== undefined) {
      hasAnyValues = true;
      internalValueResult.as = this._as;
    }
    if (this._routerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerId = this._routerId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._as = undefined;
      this._routerId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._as = value.as;
      this._routerId = value.routerId;
    }
  }

  // as - computed: false, optional: true, required: false
  private _as?: number; 
  public get as() {
    return this.getNumberAttribute('as');
  }
  public set as(value: number) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
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
export interface FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4 {
  /**
  * Set IPv4 Next-Hop Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#next_hop FiltersBgpRouteMapRoutingProfile#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Set Source IPv4 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#source_address FiltersBgpRouteMapRoutingProfile#source_address}
  */
  readonly sourceAddress?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapSetIpv4ToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapSetIpv4ToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
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

export class FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextHop = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextHop = value.nextHop;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
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
export interface FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6 {
  /**
  * Set IPv6 Next-Hop Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#next_hop FiltersBgpRouteMapRoutingProfile#next_hop}
  */
  readonly nextHop?: string;
  /**
  * Set Source IPv6 Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#source_address FiltersBgpRouteMapRoutingProfile#source_address}
  */
  readonly sourceAddress?: string;
}

export function filtersBgpRouteMapRoutingProfileRouteMapSetIpv6ToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapSetIpv6ToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
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

export class FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nextHop = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nextHop = value.nextHop;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
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
export interface FiltersBgpRouteMapRoutingProfileRouteMapSetMetric {
  /**
  * Set Metric action (BGP MED) of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#action FiltersBgpRouteMapRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Set Metric value (BGP MED) of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#value FiltersBgpRouteMapRoutingProfile#value}
  */
  readonly value?: number;
}

export function filtersBgpRouteMapRoutingProfileRouteMapSetMetricToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapSetMetricToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSetMetric | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapSetMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapSetMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapSetMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface FiltersBgpRouteMapRoutingProfileRouteMapSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#aggregator FiltersBgpRouteMapRoutingProfile#aggregator}
  */
  readonly aggregator?: FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#aspath_exclude FiltersBgpRouteMapRoutingProfile#aspath_exclude}
  */
  readonly aspathExclude?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#aspath_prepend FiltersBgpRouteMapRoutingProfile#aspath_prepend}
  */
  readonly aspathPrepend?: number[];
  /**
  * Enable BGP atomic aggregate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#atomic_aggregate FiltersBgpRouteMapRoutingProfile#atomic_aggregate}
  */
  readonly atomicAggregate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#extended_community FiltersBgpRouteMapRoutingProfile#extended_community}
  */
  readonly extendedCommunity?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ipv4 FiltersBgpRouteMapRoutingProfile#ipv4}
  */
  readonly ipv4?: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ipv6 FiltersBgpRouteMapRoutingProfile#ipv6}
  */
  readonly ipv6?: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6;
  /**
  * If enabled, IPv6 prefixes will prefer global address over link-local address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#ipv6_nexthop_prefer_global FiltersBgpRouteMapRoutingProfile#ipv6_nexthop_prefer_global}
  */
  readonly ipv6NexthopPreferGlobal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#large_community FiltersBgpRouteMapRoutingProfile#large_community}
  */
  readonly largeCommunity?: string[];
  /**
  * Set Local Preference of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#local_preference FiltersBgpRouteMapRoutingProfile#local_preference}
  */
  readonly localPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#metric FiltersBgpRouteMapRoutingProfile#metric}
  */
  readonly metric?: FiltersBgpRouteMapRoutingProfileRouteMapSetMetric;
  /**
  * Set BGP origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#origin FiltersBgpRouteMapRoutingProfile#origin}
  */
  readonly origin?: string;
  /**
  * Set BGP Originator Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#originator_id FiltersBgpRouteMapRoutingProfile#originator_id}
  */
  readonly originatorId?: string;
  /**
  * If enabled, set community will overwite existing large communities, instead of appending
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#overwrite_large_community FiltersBgpRouteMapRoutingProfile#overwrite_large_community}
  */
  readonly overwriteLargeCommunity?: boolean | cdktf.IResolvable;
  /**
  * If enabled, set community will overwite existing communities, instead of appending
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#overwrite_regular_community FiltersBgpRouteMapRoutingProfile#overwrite_regular_community}
  */
  readonly overwriteRegularCommunity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#regular_community FiltersBgpRouteMapRoutingProfile#regular_community}
  */
  readonly regularCommunity?: string[];
  /**
  * Remove Large Community Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#remove_large_community FiltersBgpRouteMapRoutingProfile#remove_large_community}
  */
  readonly removeLargeCommunity?: string;
  /**
  * Remove Regular Community Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#remove_regular_community FiltersBgpRouteMapRoutingProfile#remove_regular_community}
  */
  readonly removeRegularCommunity?: string;
  /**
  * Set Tag of route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#tag FiltersBgpRouteMapRoutingProfile#tag}
  */
  readonly tag?: number;
  /**
  * Set BGP weight of the route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#weight FiltersBgpRouteMapRoutingProfile#weight}
  */
  readonly weight?: number;
}

export function filtersBgpRouteMapRoutingProfileRouteMapSetToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator: filtersBgpRouteMapRoutingProfileRouteMapSetAggregatorToTerraform(struct!.aggregator),
    aspath_exclude: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.aspathExclude),
    aspath_prepend: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.aspathPrepend),
    atomic_aggregate: cdktf.booleanToTerraform(struct!.atomicAggregate),
    extended_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extendedCommunity),
    ipv4: filtersBgpRouteMapRoutingProfileRouteMapSetIpv4ToTerraform(struct!.ipv4),
    ipv6: filtersBgpRouteMapRoutingProfileRouteMapSetIpv6ToTerraform(struct!.ipv6),
    ipv6_nexthop_prefer_global: cdktf.booleanToTerraform(struct!.ipv6NexthopPreferGlobal),
    large_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.largeCommunity),
    local_preference: cdktf.numberToTerraform(struct!.localPreference),
    metric: filtersBgpRouteMapRoutingProfileRouteMapSetMetricToTerraform(struct!.metric),
    origin: cdktf.stringToTerraform(struct!.origin),
    originator_id: cdktf.stringToTerraform(struct!.originatorId),
    overwrite_large_community: cdktf.booleanToTerraform(struct!.overwriteLargeCommunity),
    overwrite_regular_community: cdktf.booleanToTerraform(struct!.overwriteRegularCommunity),
    regular_community: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regularCommunity),
    remove_large_community: cdktf.stringToTerraform(struct!.removeLargeCommunity),
    remove_regular_community: cdktf.stringToTerraform(struct!.removeRegularCommunity),
    tag: cdktf.numberToTerraform(struct!.tag),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapSetToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMapSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator: {
      value: filtersBgpRouteMapRoutingProfileRouteMapSetAggregatorToHclTerraform(struct!.aggregator),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator",
    },
    aspath_exclude: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.aspathExclude),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    aspath_prepend: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.aspathPrepend),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    atomic_aggregate: {
      value: cdktf.booleanToHclTerraform(struct!.atomicAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extended_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extendedCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4: {
      value: filtersBgpRouteMapRoutingProfileRouteMapSetIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4",
    },
    ipv6: {
      value: filtersBgpRouteMapRoutingProfileRouteMapSetIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6",
    },
    ipv6_nexthop_prefer_global: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6NexthopPreferGlobal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    large_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.largeCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    local_preference: {
      value: cdktf.numberToHclTerraform(struct!.localPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: filtersBgpRouteMapRoutingProfileRouteMapSetMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapSetMetric",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    originator_id: {
      value: cdktf.stringToHclTerraform(struct!.originatorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overwrite_large_community: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteLargeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite_regular_community: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteRegularCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regular_community: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regularCommunity),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remove_large_community: {
      value: cdktf.stringToHclTerraform(struct!.removeLargeCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_regular_community: {
      value: cdktf.stringToHclTerraform(struct!.removeRegularCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.numberToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class FiltersBgpRouteMapRoutingProfileRouteMapSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMapSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregator = this._aggregator?.internalValue;
    }
    if (this._aspathExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspathExclude = this._aspathExclude;
    }
    if (this._aspathPrepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.aspathPrepend = this._aspathPrepend;
    }
    if (this._atomicAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.atomicAggregate = this._atomicAggregate;
    }
    if (this._extendedCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedCommunity = this._extendedCommunity;
    }
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._ipv6NexthopPreferGlobal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NexthopPreferGlobal = this._ipv6NexthopPreferGlobal;
    }
    if (this._largeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCommunity = this._largeCommunity;
    }
    if (this._localPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPreference = this._localPreference;
    }
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._originatorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.originatorId = this._originatorId;
    }
    if (this._overwriteLargeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteLargeCommunity = this._overwriteLargeCommunity;
    }
    if (this._overwriteRegularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteRegularCommunity = this._overwriteRegularCommunity;
    }
    if (this._regularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.regularCommunity = this._regularCommunity;
    }
    if (this._removeLargeCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeLargeCommunity = this._removeLargeCommunity;
    }
    if (this._removeRegularCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeRegularCommunity = this._removeRegularCommunity;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMapSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregator.internalValue = undefined;
      this._aspathExclude = undefined;
      this._aspathPrepend = undefined;
      this._atomicAggregate = undefined;
      this._extendedCommunity = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._ipv6NexthopPreferGlobal = undefined;
      this._largeCommunity = undefined;
      this._localPreference = undefined;
      this._metric.internalValue = undefined;
      this._origin = undefined;
      this._originatorId = undefined;
      this._overwriteLargeCommunity = undefined;
      this._overwriteRegularCommunity = undefined;
      this._regularCommunity = undefined;
      this._removeLargeCommunity = undefined;
      this._removeRegularCommunity = undefined;
      this._tag = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregator.internalValue = value.aggregator;
      this._aspathExclude = value.aspathExclude;
      this._aspathPrepend = value.aspathPrepend;
      this._atomicAggregate = value.atomicAggregate;
      this._extendedCommunity = value.extendedCommunity;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
      this._ipv6NexthopPreferGlobal = value.ipv6NexthopPreferGlobal;
      this._largeCommunity = value.largeCommunity;
      this._localPreference = value.localPreference;
      this._metric.internalValue = value.metric;
      this._origin = value.origin;
      this._originatorId = value.originatorId;
      this._overwriteLargeCommunity = value.overwriteLargeCommunity;
      this._overwriteRegularCommunity = value.overwriteRegularCommunity;
      this._regularCommunity = value.regularCommunity;
      this._removeLargeCommunity = value.removeLargeCommunity;
      this._removeRegularCommunity = value.removeRegularCommunity;
      this._tag = value.tag;
      this._weight = value.weight;
    }
  }

  // aggregator - computed: false, optional: true, required: false
  private _aggregator = new FiltersBgpRouteMapRoutingProfileRouteMapSetAggregatorOutputReference(this, "aggregator");
  public get aggregator() {
    return this._aggregator;
  }
  public putAggregator(value: FiltersBgpRouteMapRoutingProfileRouteMapSetAggregator) {
    this._aggregator.internalValue = value;
  }
  public resetAggregator() {
    this._aggregator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorInput() {
    return this._aggregator.internalValue;
  }

  // aspath_exclude - computed: false, optional: true, required: false
  private _aspathExclude?: number[]; 
  public get aspathExclude() {
    return this.getNumberListAttribute('aspath_exclude');
  }
  public set aspathExclude(value: number[]) {
    this._aspathExclude = value;
  }
  public resetAspathExclude() {
    this._aspathExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspathExcludeInput() {
    return this._aspathExclude;
  }

  // aspath_prepend - computed: false, optional: true, required: false
  private _aspathPrepend?: number[]; 
  public get aspathPrepend() {
    return this.getNumberListAttribute('aspath_prepend');
  }
  public set aspathPrepend(value: number[]) {
    this._aspathPrepend = value;
  }
  public resetAspathPrepend() {
    this._aspathPrepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspathPrependInput() {
    return this._aspathPrepend;
  }

  // atomic_aggregate - computed: false, optional: true, required: false
  private _atomicAggregate?: boolean | cdktf.IResolvable; 
  public get atomicAggregate() {
    return this.getBooleanAttribute('atomic_aggregate');
  }
  public set atomicAggregate(value: boolean | cdktf.IResolvable) {
    this._atomicAggregate = value;
  }
  public resetAtomicAggregate() {
    this._atomicAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atomicAggregateInput() {
    return this._atomicAggregate;
  }

  // extended_community - computed: false, optional: true, required: false
  private _extendedCommunity?: string[]; 
  public get extendedCommunity() {
    return this.getListAttribute('extended_community');
  }
  public set extendedCommunity(value: string[]) {
    this._extendedCommunity = value;
  }
  public resetExtendedCommunity() {
    this._extendedCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedCommunityInput() {
    return this._extendedCommunity;
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv4) {
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
  private _ipv6 = new FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: FiltersBgpRouteMapRoutingProfileRouteMapSetIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // ipv6_nexthop_prefer_global - computed: false, optional: true, required: false
  private _ipv6NexthopPreferGlobal?: boolean | cdktf.IResolvable; 
  public get ipv6NexthopPreferGlobal() {
    return this.getBooleanAttribute('ipv6_nexthop_prefer_global');
  }
  public set ipv6NexthopPreferGlobal(value: boolean | cdktf.IResolvable) {
    this._ipv6NexthopPreferGlobal = value;
  }
  public resetIpv6NexthopPreferGlobal() {
    this._ipv6NexthopPreferGlobal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NexthopPreferGlobalInput() {
    return this._ipv6NexthopPreferGlobal;
  }

  // large_community - computed: false, optional: true, required: false
  private _largeCommunity?: string[]; 
  public get largeCommunity() {
    return this.getListAttribute('large_community');
  }
  public set largeCommunity(value: string[]) {
    this._largeCommunity = value;
  }
  public resetLargeCommunity() {
    this._largeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCommunityInput() {
    return this._largeCommunity;
  }

  // local_preference - computed: false, optional: true, required: false
  private _localPreference?: number; 
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }
  public set localPreference(value: number) {
    this._localPreference = value;
  }
  public resetLocalPreference() {
    this._localPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPreferenceInput() {
    return this._localPreference;
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new FiltersBgpRouteMapRoutingProfileRouteMapSetMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: FiltersBgpRouteMapRoutingProfileRouteMapSetMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // originator_id - computed: false, optional: true, required: false
  private _originatorId?: string; 
  public get originatorId() {
    return this.getStringAttribute('originator_id');
  }
  public set originatorId(value: string) {
    this._originatorId = value;
  }
  public resetOriginatorId() {
    this._originatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originatorIdInput() {
    return this._originatorId;
  }

  // overwrite_large_community - computed: false, optional: true, required: false
  private _overwriteLargeCommunity?: boolean | cdktf.IResolvable; 
  public get overwriteLargeCommunity() {
    return this.getBooleanAttribute('overwrite_large_community');
  }
  public set overwriteLargeCommunity(value: boolean | cdktf.IResolvable) {
    this._overwriteLargeCommunity = value;
  }
  public resetOverwriteLargeCommunity() {
    this._overwriteLargeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteLargeCommunityInput() {
    return this._overwriteLargeCommunity;
  }

  // overwrite_regular_community - computed: false, optional: true, required: false
  private _overwriteRegularCommunity?: boolean | cdktf.IResolvable; 
  public get overwriteRegularCommunity() {
    return this.getBooleanAttribute('overwrite_regular_community');
  }
  public set overwriteRegularCommunity(value: boolean | cdktf.IResolvable) {
    this._overwriteRegularCommunity = value;
  }
  public resetOverwriteRegularCommunity() {
    this._overwriteRegularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteRegularCommunityInput() {
    return this._overwriteRegularCommunity;
  }

  // regular_community - computed: false, optional: true, required: false
  private _regularCommunity?: string[]; 
  public get regularCommunity() {
    return this.getListAttribute('regular_community');
  }
  public set regularCommunity(value: string[]) {
    this._regularCommunity = value;
  }
  public resetRegularCommunity() {
    this._regularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularCommunityInput() {
    return this._regularCommunity;
  }

  // remove_large_community - computed: false, optional: true, required: false
  private _removeLargeCommunity?: string; 
  public get removeLargeCommunity() {
    return this.getStringAttribute('remove_large_community');
  }
  public set removeLargeCommunity(value: string) {
    this._removeLargeCommunity = value;
  }
  public resetRemoveLargeCommunity() {
    this._removeLargeCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeLargeCommunityInput() {
    return this._removeLargeCommunity;
  }

  // remove_regular_community - computed: false, optional: true, required: false
  private _removeRegularCommunity?: string; 
  public get removeRegularCommunity() {
    return this.getStringAttribute('remove_regular_community');
  }
  public set removeRegularCommunity(value: string) {
    this._removeRegularCommunity = value;
  }
  public resetRemoveRegularCommunity() {
    this._removeRegularCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeRegularCommunityInput() {
    return this._removeRegularCommunity;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // weight - computed: false, optional: true, required: false
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
export interface FiltersBgpRouteMapRoutingProfileRouteMap {
  /**
  * Permit or Deny (default) Route Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#action FiltersBgpRouteMapRoutingProfile#action}
  */
  readonly action?: string;
  /**
  * Describe Route Map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#description FiltersBgpRouteMapRoutingProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#match FiltersBgpRouteMapRoutingProfile#match}
  */
  readonly match?: FiltersBgpRouteMapRoutingProfileRouteMapMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#name FiltersBgpRouteMapRoutingProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#set FiltersBgpRouteMapRoutingProfile#set}
  */
  readonly set?: FiltersBgpRouteMapRoutingProfileRouteMapSet;
}

export function filtersBgpRouteMapRoutingProfileRouteMapToTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    match: filtersBgpRouteMapRoutingProfileRouteMapMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
    set: filtersBgpRouteMapRoutingProfileRouteMapSetToTerraform(struct!.set),
  }
}


export function filtersBgpRouteMapRoutingProfileRouteMapToHclTerraform(struct?: FiltersBgpRouteMapRoutingProfileRouteMap | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match: {
      value: filtersBgpRouteMapRoutingProfileRouteMapMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapMatch",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set: {
      value: filtersBgpRouteMapRoutingProfileRouteMapSetToHclTerraform(struct!.set),
      isBlock: true,
      type: "struct",
      storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FiltersBgpRouteMapRoutingProfileRouteMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FiltersBgpRouteMapRoutingProfileRouteMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FiltersBgpRouteMapRoutingProfileRouteMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._description = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._description = value.description;
      this._match.internalValue = value.match;
      this._name = value.name;
      this._set.internalValue = value.set;
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

  // match - computed: false, optional: true, required: false
  private _match = new FiltersBgpRouteMapRoutingProfileRouteMapMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: FiltersBgpRouteMapRoutingProfileRouteMapMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

  // set - computed: false, optional: true, required: false
  private _set = new FiltersBgpRouteMapRoutingProfileRouteMapSetOutputReference(this, "set");
  public get set() {
    return this._set;
  }
  public putSet(value: FiltersBgpRouteMapRoutingProfileRouteMapSet) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}

export class FiltersBgpRouteMapRoutingProfileRouteMapList extends cdktf.ComplexList {
  public internalValue? : FiltersBgpRouteMapRoutingProfileRouteMap[] | cdktf.IResolvable

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
  public get(index: number): FiltersBgpRouteMapRoutingProfileRouteMapOutputReference {
    return new FiltersBgpRouteMapRoutingProfileRouteMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile panos_filters_bgp_route_map_routing_profile}
*/
export class FiltersBgpRouteMapRoutingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_filters_bgp_route_map_routing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FiltersBgpRouteMapRoutingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FiltersBgpRouteMapRoutingProfile to import
  * @param importFromId The id of the existing FiltersBgpRouteMapRoutingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FiltersBgpRouteMapRoutingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_filters_bgp_route_map_routing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/resources/filters_bgp_route_map_routing_profile panos_filters_bgp_route_map_routing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FiltersBgpRouteMapRoutingProfileConfig
  */
  public constructor(scope: Construct, id: string, config: FiltersBgpRouteMapRoutingProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'panos_filters_bgp_route_map_routing_profile',
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
    this._location.internalValue = config.location;
    this._name = config.name;
    this._routeMap.internalValue = config.routeMap;
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

  // location - computed: false, optional: false, required: true
  private _location = new FiltersBgpRouteMapRoutingProfileLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: FiltersBgpRouteMapRoutingProfileLocation) {
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

  // route_map - computed: false, optional: true, required: false
  private _routeMap = new FiltersBgpRouteMapRoutingProfileRouteMapList(this, "route_map", false);
  public get routeMap() {
    return this._routeMap;
  }
  public putRouteMap(value: FiltersBgpRouteMapRoutingProfileRouteMap[] | cdktf.IResolvable) {
    this._routeMap.internalValue = value;
  }
  public resetRouteMap() {
    this._routeMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      location: filtersBgpRouteMapRoutingProfileLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      route_map: cdktf.listMapper(filtersBgpRouteMapRoutingProfileRouteMapToTerraform, false)(this._routeMap.internalValue),
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
      location: {
        value: filtersBgpRouteMapRoutingProfileLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FiltersBgpRouteMapRoutingProfileLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map: {
        value: cdktf.listMapperHcl(filtersBgpRouteMapRoutingProfileRouteMapToHclTerraform, false)(this._routeMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FiltersBgpRouteMapRoutingProfileRouteMapList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
