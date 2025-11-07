// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualRouterStaticRoutesIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#location VirtualRouterStaticRoutesIpv6#location}
  */
  readonly location: VirtualRouterStaticRoutesIpv6Location;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#static_routes VirtualRouterStaticRoutesIpv6#static_routes}
  */
  readonly staticRoutes: VirtualRouterStaticRoutesIpv6StaticRoutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#virtual_router VirtualRouterStaticRoutesIpv6#virtual_router}
  */
  readonly virtualRouter: string;
}
export interface VirtualRouterStaticRoutesIpv6LocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#ngfw_device VirtualRouterStaticRoutesIpv6#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function virtualRouterStaticRoutesIpv6LocationNgfwToTerraform(struct?: VirtualRouterStaticRoutesIpv6LocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function virtualRouterStaticRoutesIpv6LocationNgfwToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6LocationNgfw | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv6LocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6LocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv6LocationNgfw | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6LocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#name VirtualRouterStaticRoutesIpv6#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#ngfw_device VirtualRouterStaticRoutesIpv6#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#panorama_device VirtualRouterStaticRoutesIpv6#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function virtualRouterStaticRoutesIpv6LocationTemplateToTerraform(struct?: VirtualRouterStaticRoutesIpv6LocationTemplate | cdktf.IResolvable): any {
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


export function virtualRouterStaticRoutesIpv6LocationTemplateToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6LocationTemplate | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv6LocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6LocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv6LocationTemplate | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6LocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#name VirtualRouterStaticRoutesIpv6#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#ngfw_device VirtualRouterStaticRoutesIpv6#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#panorama_device VirtualRouterStaticRoutesIpv6#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function virtualRouterStaticRoutesIpv6LocationTemplateStackToTerraform(struct?: VirtualRouterStaticRoutesIpv6LocationTemplateStack | cdktf.IResolvable): any {
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


export function virtualRouterStaticRoutesIpv6LocationTemplateStackToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6LocationTemplateStack | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv6LocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6LocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv6LocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6Location {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#ngfw VirtualRouterStaticRoutesIpv6#ngfw}
  */
  readonly ngfw?: VirtualRouterStaticRoutesIpv6LocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#template VirtualRouterStaticRoutesIpv6#template}
  */
  readonly template?: VirtualRouterStaticRoutesIpv6LocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#template_stack VirtualRouterStaticRoutesIpv6#template_stack}
  */
  readonly templateStack?: VirtualRouterStaticRoutesIpv6LocationTemplateStack;
}

export function virtualRouterStaticRoutesIpv6LocationToTerraform(struct?: VirtualRouterStaticRoutesIpv6Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: virtualRouterStaticRoutesIpv6LocationNgfwToTerraform(struct!.ngfw),
    template: virtualRouterStaticRoutesIpv6LocationTemplateToTerraform(struct!.template),
    template_stack: virtualRouterStaticRoutesIpv6LocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function virtualRouterStaticRoutesIpv6LocationToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: virtualRouterStaticRoutesIpv6LocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6LocationNgfw",
    },
    template: {
      value: virtualRouterStaticRoutesIpv6LocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6LocationTemplate",
    },
    template_stack: {
      value: virtualRouterStaticRoutesIpv6LocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6LocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv6LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6Location | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv6Location | cdktf.IResolvable | undefined) {
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
  private _ngfw = new VirtualRouterStaticRoutesIpv6LocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: VirtualRouterStaticRoutesIpv6LocationNgfw) {
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
  private _template = new VirtualRouterStaticRoutesIpv6LocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: VirtualRouterStaticRoutesIpv6LocationTemplate) {
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
  private _templateStack = new VirtualRouterStaticRoutesIpv6LocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: VirtualRouterStaticRoutesIpv6LocationTemplateStack) {
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
export interface VirtualRouterStaticRoutesIpv6StaticRoutesBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#profile VirtualRouterStaticRoutesIpv6#profile}
  */
  readonly profile?: string;
}

export function virtualRouterStaticRoutesIpv6StaticRoutesBfdToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesBfdToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesBfd | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv6StaticRoutesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesBfd | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard {
}

export function virtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscardToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscardToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive {
}

export function virtualRouterStaticRoutesIpv6StaticRoutesNexthopReceiveToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesNexthopReceiveToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6StaticRoutesNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#discard VirtualRouterStaticRoutesIpv6#discard}
  */
  readonly discard?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard;
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#ipv6_address VirtualRouterStaticRoutesIpv6#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Next hop virtual router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#next_vr VirtualRouterStaticRoutesIpv6#next_vr}
  */
  readonly nextVr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#receive VirtualRouterStaticRoutesIpv6#receive}
  */
  readonly receive?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive;
}

export function virtualRouterStaticRoutesIpv6StaticRoutesNexthopToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: virtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscardToTerraform(struct!.discard),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    next_vr: cdktf.stringToTerraform(struct!.nextVr),
    receive: virtualRouterStaticRoutesIpv6StaticRoutesNexthopReceiveToTerraform(struct!.receive),
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesNexthopToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: virtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_vr: {
      value: cdktf.stringToHclTerraform(struct!.nextVr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive: {
      value: virtualRouterStaticRoutesIpv6StaticRoutesNexthopReceiveToHclTerraform(struct!.receive),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesNexthop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discard = this._discard?.internalValue;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._nextVr !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextVr = this._nextVr;
    }
    if (this._receive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard.internalValue = undefined;
      this._ipv6Address = undefined;
      this._nextVr = undefined;
      this._receive.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discard.internalValue = value.discard;
      this._ipv6Address = value.ipv6Address;
      this._nextVr = value.nextVr;
      this._receive.internalValue = value.receive;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard = new VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopDiscard) {
    this._discard.internalValue = value;
  }
  public resetDiscard() {
    this._discard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardInput() {
    return this._discard.internalValue;
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

  // next_vr - computed: false, optional: true, required: false
  private _nextVr?: string; 
  public get nextVr() {
    return this.getStringAttribute('next_vr');
  }
  public set nextVr(value: string) {
    this._nextVr = value;
  }
  public resetNextVr() {
    this._nextVr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextVrInput() {
    return this._nextVr;
  }

  // receive - computed: false, optional: true, required: false
  private _receive = new VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }
  public putReceive(value: VirtualRouterStaticRoutesIpv6StaticRoutesNexthopReceive) {
    this._receive.internalValue = value;
  }
  public resetReceive() {
    this._receive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive.internalValue;
  }
}
export interface VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations {
  /**
  * ping count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#count VirtualRouterStaticRoutesIpv6#count}
  */
  readonly count?: number;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#destination VirtualRouterStaticRoutesIpv6#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#enable VirtualRouterStaticRoutesIpv6#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#interval VirtualRouterStaticRoutesIpv6#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#name VirtualRouterStaticRoutesIpv6#name}
  */
  readonly name: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#source VirtualRouterStaticRoutesIpv6#source}
  */
  readonly source?: string;
}

export function virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable): any {
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


export function virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
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

export class VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsOutputReference {
    return new VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#enable VirtualRouterStaticRoutesIpv6#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#failure_condition VirtualRouterStaticRoutesIpv6#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * hold time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#hold_time VirtualRouterStaticRoutesIpv6#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#monitor_destinations VirtualRouterStaticRoutesIpv6#monitor_destinations}
  */
  readonly monitorDestinations?: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor | cdktf.IResolvable | undefined) {
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
  private _monitorDestinations = new VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorMonitorDestinations[] | cdktf.IResolvable) {
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
export interface VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall {
}

export function virtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstallToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstallToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast {
}

export function virtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicastToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicastToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#no_install VirtualRouterStaticRoutesIpv6#no_install}
  */
  readonly noInstall?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#unicast VirtualRouterStaticRoutesIpv6#unicast}
  */
  readonly unicast?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast;
}

export function virtualRouterStaticRoutesIpv6StaticRoutesRouteTableToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_install: virtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstallToTerraform(struct!.noInstall),
    unicast: virtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicastToTerraform(struct!.unicast),
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesRouteTableToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_install: {
      value: virtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstallToHclTerraform(struct!.noInstall),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall",
    },
    unicast: {
      value: virtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noInstall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noInstall = this._noInstall?.internalValue;
    }
    if (this._unicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicast = this._unicast?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noInstall.internalValue = undefined;
      this._unicast.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noInstall.internalValue = value.noInstall;
      this._unicast.internalValue = value.unicast;
    }
  }

  // no_install - computed: false, optional: true, required: false
  private _noInstall = new VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }
  public putNoInstall(value: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableNoInstall) {
    this._noInstall.internalValue = value;
  }
  public resetNoInstall() {
    this._noInstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInstallInput() {
    return this._noInstall.internalValue;
  }

  // unicast - computed: false, optional: true, required: false
  private _unicast = new VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableUnicast) {
    this._unicast.internalValue = value;
  }
  public resetUnicast() {
    this._unicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastInput() {
    return this._unicast.internalValue;
  }
}
export interface VirtualRouterStaticRoutesIpv6StaticRoutes {
  /**
  * adminitrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#admin_dist VirtualRouterStaticRoutesIpv6#admin_dist}
  */
  readonly adminDist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#bfd VirtualRouterStaticRoutesIpv6#bfd}
  */
  readonly bfd?: VirtualRouterStaticRoutesIpv6StaticRoutesBfd;
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#destination VirtualRouterStaticRoutesIpv6#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#interface VirtualRouterStaticRoutesIpv6#interface}
  */
  readonly interface?: string;
  /**
  * metric value (path cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#metric VirtualRouterStaticRoutesIpv6#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#name VirtualRouterStaticRoutesIpv6#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#nexthop VirtualRouterStaticRoutesIpv6#nexthop}
  */
  readonly nexthop?: VirtualRouterStaticRoutesIpv6StaticRoutesNexthop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#path_monitor VirtualRouterStaticRoutesIpv6#path_monitor}
  */
  readonly pathMonitor?: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#route_table VirtualRouterStaticRoutesIpv6#route_table}
  */
  readonly routeTable?: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable;
}

export function virtualRouterStaticRoutesIpv6StaticRoutesToTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_dist: cdktf.numberToTerraform(struct!.adminDist),
    bfd: virtualRouterStaticRoutesIpv6StaticRoutesBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: virtualRouterStaticRoutesIpv6StaticRoutesNexthopToTerraform(struct!.nexthop),
    path_monitor: virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorToTerraform(struct!.pathMonitor),
    route_table: virtualRouterStaticRoutesIpv6StaticRoutesRouteTableToTerraform(struct!.routeTable),
  }
}


export function virtualRouterStaticRoutesIpv6StaticRoutesToHclTerraform(struct?: VirtualRouterStaticRoutesIpv6StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_dist: {
      value: cdktf.numberToHclTerraform(struct!.adminDist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bfd: {
      value: virtualRouterStaticRoutesIpv6StaticRoutesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesBfd",
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
      value: virtualRouterStaticRoutesIpv6StaticRoutesNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesNexthop",
    },
    path_monitor: {
      value: virtualRouterStaticRoutesIpv6StaticRoutesPathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor",
    },
    route_table: {
      value: virtualRouterStaticRoutesIpv6StaticRoutesRouteTableToHclTerraform(struct!.routeTable),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterStaticRoutesIpv6StaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminDist !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminDist = this._adminDist;
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
    if (this._routeTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTable = this._routeTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv6StaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminDist = undefined;
      this._bfd.internalValue = undefined;
      this._destination = undefined;
      this._interface = undefined;
      this._metric = undefined;
      this._name = undefined;
      this._nexthop.internalValue = undefined;
      this._pathMonitor.internalValue = undefined;
      this._routeTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminDist = value.adminDist;
      this._bfd.internalValue = value.bfd;
      this._destination = value.destination;
      this._interface = value.interface;
      this._metric = value.metric;
      this._name = value.name;
      this._nexthop.internalValue = value.nexthop;
      this._pathMonitor.internalValue = value.pathMonitor;
      this._routeTable.internalValue = value.routeTable;
    }
  }

  // admin_dist - computed: false, optional: true, required: false
  private _adminDist?: number; 
  public get adminDist() {
    return this.getNumberAttribute('admin_dist');
  }
  public set adminDist(value: number) {
    this._adminDist = value;
  }
  public resetAdminDist() {
    this._adminDist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistInput() {
    return this._adminDist;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd = new VirtualRouterStaticRoutesIpv6StaticRoutesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VirtualRouterStaticRoutesIpv6StaticRoutesBfd) {
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
  private _nexthop = new VirtualRouterStaticRoutesIpv6StaticRoutesNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: VirtualRouterStaticRoutesIpv6StaticRoutesNexthop) {
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
  private _pathMonitor = new VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: VirtualRouterStaticRoutesIpv6StaticRoutesPathMonitor) {
    this._pathMonitor.internalValue = value;
  }
  public resetPathMonitor() {
    this._pathMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMonitorInput() {
    return this._pathMonitor.internalValue;
  }

  // route_table - computed: false, optional: true, required: false
  private _routeTable = new VirtualRouterStaticRoutesIpv6StaticRoutesRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
  public putRouteTable(value: VirtualRouterStaticRoutesIpv6StaticRoutesRouteTable) {
    this._routeTable.internalValue = value;
  }
  public resetRouteTable() {
    this._routeTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable.internalValue;
  }
}

export class VirtualRouterStaticRoutesIpv6StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterStaticRoutesIpv6StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterStaticRoutesIpv6StaticRoutesOutputReference {
    return new VirtualRouterStaticRoutesIpv6StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6 panos_virtual_router_static_routes_ipv6}
*/
export class VirtualRouterStaticRoutesIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_virtual_router_static_routes_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualRouterStaticRoutesIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualRouterStaticRoutesIpv6 to import
  * @param importFromId The id of the existing VirtualRouterStaticRoutesIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualRouterStaticRoutesIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_virtual_router_static_routes_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv6 panos_virtual_router_static_routes_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualRouterStaticRoutesIpv6Config
  */
  public constructor(scope: Construct, id: string, config: VirtualRouterStaticRoutesIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'panos_virtual_router_static_routes_ipv6',
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
    this._staticRoutes.internalValue = config.staticRoutes;
    this._virtualRouter = config.virtualRouter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location - computed: false, optional: false, required: true
  private _location = new VirtualRouterStaticRoutesIpv6LocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: VirtualRouterStaticRoutesIpv6Location) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VirtualRouterStaticRoutesIpv6StaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VirtualRouterStaticRoutesIpv6StaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // virtual_router - computed: false, optional: false, required: true
  private _virtualRouter?: string; 
  public get virtualRouter() {
    return this.getStringAttribute('virtual_router');
  }
  public set virtualRouter(value: string) {
    this._virtualRouter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterInput() {
    return this._virtualRouter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: virtualRouterStaticRoutesIpv6LocationToTerraform(this._location.internalValue),
      static_routes: cdktf.listMapper(virtualRouterStaticRoutesIpv6StaticRoutesToTerraform, false)(this._staticRoutes.internalValue),
      virtual_router: cdktf.stringToTerraform(this._virtualRouter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: virtualRouterStaticRoutesIpv6LocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterStaticRoutesIpv6Location",
      },
      static_routes: {
        value: cdktf.listMapperHcl(virtualRouterStaticRoutesIpv6StaticRoutesToHclTerraform, false)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterStaticRoutesIpv6StaticRoutesList",
      },
      virtual_router: {
        value: cdktf.stringToHclTerraform(this._virtualRouter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
