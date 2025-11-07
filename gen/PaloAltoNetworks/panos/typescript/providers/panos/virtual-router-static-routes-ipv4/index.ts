// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualRouterStaticRoutesIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#location VirtualRouterStaticRoutesIpv4#location}
  */
  readonly location: VirtualRouterStaticRoutesIpv4Location;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#static_routes VirtualRouterStaticRoutesIpv4#static_routes}
  */
  readonly staticRoutes: VirtualRouterStaticRoutesIpv4StaticRoutes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#virtual_router VirtualRouterStaticRoutesIpv4#virtual_router}
  */
  readonly virtualRouter: string;
}
export interface VirtualRouterStaticRoutesIpv4LocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#ngfw_device VirtualRouterStaticRoutesIpv4#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function virtualRouterStaticRoutesIpv4LocationNgfwToTerraform(struct?: VirtualRouterStaticRoutesIpv4LocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function virtualRouterStaticRoutesIpv4LocationNgfwToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4LocationNgfw | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv4LocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4LocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4LocationNgfw | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4LocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#name VirtualRouterStaticRoutesIpv4#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#ngfw_device VirtualRouterStaticRoutesIpv4#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#panorama_device VirtualRouterStaticRoutesIpv4#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function virtualRouterStaticRoutesIpv4LocationTemplateToTerraform(struct?: VirtualRouterStaticRoutesIpv4LocationTemplate | cdktf.IResolvable): any {
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


export function virtualRouterStaticRoutesIpv4LocationTemplateToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4LocationTemplate | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv4LocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4LocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4LocationTemplate | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4LocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#name VirtualRouterStaticRoutesIpv4#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#ngfw_device VirtualRouterStaticRoutesIpv4#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#panorama_device VirtualRouterStaticRoutesIpv4#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function virtualRouterStaticRoutesIpv4LocationTemplateStackToTerraform(struct?: VirtualRouterStaticRoutesIpv4LocationTemplateStack | cdktf.IResolvable): any {
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


export function virtualRouterStaticRoutesIpv4LocationTemplateStackToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4LocationTemplateStack | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv4LocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4LocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4LocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4Location {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#ngfw VirtualRouterStaticRoutesIpv4#ngfw}
  */
  readonly ngfw?: VirtualRouterStaticRoutesIpv4LocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#template VirtualRouterStaticRoutesIpv4#template}
  */
  readonly template?: VirtualRouterStaticRoutesIpv4LocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#template_stack VirtualRouterStaticRoutesIpv4#template_stack}
  */
  readonly templateStack?: VirtualRouterStaticRoutesIpv4LocationTemplateStack;
}

export function virtualRouterStaticRoutesIpv4LocationToTerraform(struct?: VirtualRouterStaticRoutesIpv4Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: virtualRouterStaticRoutesIpv4LocationNgfwToTerraform(struct!.ngfw),
    template: virtualRouterStaticRoutesIpv4LocationTemplateToTerraform(struct!.template),
    template_stack: virtualRouterStaticRoutesIpv4LocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function virtualRouterStaticRoutesIpv4LocationToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: virtualRouterStaticRoutesIpv4LocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4LocationNgfw",
    },
    template: {
      value: virtualRouterStaticRoutesIpv4LocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4LocationTemplate",
    },
    template_stack: {
      value: virtualRouterStaticRoutesIpv4LocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4LocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv4LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4Location | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4Location | cdktf.IResolvable | undefined) {
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
  private _ngfw = new VirtualRouterStaticRoutesIpv4LocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: VirtualRouterStaticRoutesIpv4LocationNgfw) {
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
  private _template = new VirtualRouterStaticRoutesIpv4LocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: VirtualRouterStaticRoutesIpv4LocationTemplate) {
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
  private _templateStack = new VirtualRouterStaticRoutesIpv4LocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: VirtualRouterStaticRoutesIpv4LocationTemplateStack) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesBfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#profile VirtualRouterStaticRoutesIpv4#profile}
  */
  readonly profile?: string;
}

export function virtualRouterStaticRoutesIpv4StaticRoutesBfdToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesBfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesBfdToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesBfd | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv4StaticRoutesBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesBfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesBfd | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard {
}

export function virtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscardToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscardToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive {
}

export function virtualRouterStaticRoutesIpv4StaticRoutesNexthopReceiveToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesNexthopReceiveToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#discard VirtualRouterStaticRoutesIpv4#discard}
  */
  readonly discard?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard;
  /**
  * nexthop address FQDN address object configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#fqdn VirtualRouterStaticRoutesIpv4#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#ip_address VirtualRouterStaticRoutesIpv4#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Next hop virtual router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#next_vr VirtualRouterStaticRoutesIpv4#next_vr}
  */
  readonly nextVr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#receive VirtualRouterStaticRoutesIpv4#receive}
  */
  readonly receive?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive;
}

export function virtualRouterStaticRoutesIpv4StaticRoutesNexthopToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: virtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    next_vr: cdktf.stringToTerraform(struct!.nextVr),
    receive: virtualRouterStaticRoutesIpv4StaticRoutesNexthopReceiveToTerraform(struct!.receive),
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesNexthopToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard",
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
    next_vr: {
      value: cdktf.stringToHclTerraform(struct!.nextVr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receive: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesNexthopReceiveToHclTerraform(struct!.receive),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesNexthop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesNexthop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discard.internalValue = undefined;
      this._fqdn = undefined;
      this._ipAddress = undefined;
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
      this._fqdn = value.fqdn;
      this._ipAddress = value.ipAddress;
      this._nextVr = value.nextVr;
      this._receive.internalValue = value.receive;
    }
  }

  // discard - computed: false, optional: true, required: false
  private _discard = new VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopDiscard) {
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
  private _receive = new VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }
  public putReceive(value: VirtualRouterStaticRoutesIpv4StaticRoutesNexthopReceive) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations {
  /**
  * ping count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#count VirtualRouterStaticRoutesIpv4#count}
  */
  readonly count?: number;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#destination VirtualRouterStaticRoutesIpv4#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#enable VirtualRouterStaticRoutesIpv4#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#interval VirtualRouterStaticRoutesIpv4#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#name VirtualRouterStaticRoutesIpv4#name}
  */
  readonly name: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#source VirtualRouterStaticRoutesIpv4#source}
  */
  readonly source?: string;
}

export function virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable): any {
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


export function virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable): any {
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

export class VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
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

export class VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsOutputReference {
    return new VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#enable VirtualRouterStaticRoutesIpv4#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#failure_condition VirtualRouterStaticRoutesIpv4#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * hold time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#hold_time VirtualRouterStaticRoutesIpv4#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#monitor_destinations VirtualRouterStaticRoutesIpv4#monitor_destinations}
  */
  readonly monitorDestinations?: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor | cdktf.IResolvable | undefined) {
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
  private _monitorDestinations = new VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorMonitorDestinations[] | cdktf.IResolvable) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth {
}

export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableBothToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableBothToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast {
}

export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticastToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticastToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall {
}

export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstallToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstallToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast {
}

export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicastToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicastToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast | cdktf.IResolvable | undefined) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#both VirtualRouterStaticRoutesIpv4#both}
  */
  readonly both?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#multicast VirtualRouterStaticRoutesIpv4#multicast}
  */
  readonly multicast?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#no_install VirtualRouterStaticRoutesIpv4#no_install}
  */
  readonly noInstall?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#unicast VirtualRouterStaticRoutesIpv4#unicast}
  */
  readonly unicast?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast;
}

export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    both: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableBothToTerraform(struct!.both),
    multicast: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticastToTerraform(struct!.multicast),
    no_install: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstallToTerraform(struct!.noInstall),
    unicast: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicastToTerraform(struct!.unicast),
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesRouteTableToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    both: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth",
    },
    multicast: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast",
    },
    no_install: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstallToHclTerraform(struct!.noInstall),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall",
    },
    unicast: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._both?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.both = this._both?.internalValue;
    }
    if (this._multicast?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast?.internalValue;
    }
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._both.internalValue = undefined;
      this._multicast.internalValue = undefined;
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
      this._both.internalValue = value.both;
      this._multicast.internalValue = value.multicast;
      this._noInstall.internalValue = value.noInstall;
      this._unicast.internalValue = value.unicast;
    }
  }

  // both - computed: false, optional: true, required: false
  private _both = new VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // no_install - computed: false, optional: true, required: false
  private _noInstall = new VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }
  public putNoInstall(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableNoInstall) {
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
  private _unicast = new VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableUnicast) {
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
export interface VirtualRouterStaticRoutesIpv4StaticRoutes {
  /**
  * adminitrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#admin_dist VirtualRouterStaticRoutesIpv4#admin_dist}
  */
  readonly adminDist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#bfd VirtualRouterStaticRoutesIpv4#bfd}
  */
  readonly bfd?: VirtualRouterStaticRoutesIpv4StaticRoutesBfd;
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#destination VirtualRouterStaticRoutesIpv4#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#interface VirtualRouterStaticRoutesIpv4#interface}
  */
  readonly interface?: string;
  /**
  * metric value (path cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#metric VirtualRouterStaticRoutesIpv4#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#name VirtualRouterStaticRoutesIpv4#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#nexthop VirtualRouterStaticRoutesIpv4#nexthop}
  */
  readonly nexthop?: VirtualRouterStaticRoutesIpv4StaticRoutesNexthop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#path_monitor VirtualRouterStaticRoutesIpv4#path_monitor}
  */
  readonly pathMonitor?: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#route_table VirtualRouterStaticRoutesIpv4#route_table}
  */
  readonly routeTable?: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable;
}

export function virtualRouterStaticRoutesIpv4StaticRoutesToTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_dist: cdktf.numberToTerraform(struct!.adminDist),
    bfd: virtualRouterStaticRoutesIpv4StaticRoutesBfdToTerraform(struct!.bfd),
    destination: cdktf.stringToTerraform(struct!.destination),
    interface: cdktf.stringToTerraform(struct!.interface),
    metric: cdktf.numberToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    nexthop: virtualRouterStaticRoutesIpv4StaticRoutesNexthopToTerraform(struct!.nexthop),
    path_monitor: virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorToTerraform(struct!.pathMonitor),
    route_table: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableToTerraform(struct!.routeTable),
  }
}


export function virtualRouterStaticRoutesIpv4StaticRoutesToHclTerraform(struct?: VirtualRouterStaticRoutesIpv4StaticRoutes | cdktf.IResolvable): any {
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
      value: virtualRouterStaticRoutesIpv4StaticRoutesBfdToHclTerraform(struct!.bfd),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesBfd",
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
      value: virtualRouterStaticRoutesIpv4StaticRoutesNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesNexthop",
    },
    path_monitor: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesPathMonitorToHclTerraform(struct!.pathMonitor),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor",
    },
    route_table: {
      value: virtualRouterStaticRoutesIpv4StaticRoutesRouteTableToHclTerraform(struct!.routeTable),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualRouterStaticRoutesIpv4StaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualRouterStaticRoutesIpv4StaticRoutes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VirtualRouterStaticRoutesIpv4StaticRoutes | cdktf.IResolvable | undefined) {
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
  private _bfd = new VirtualRouterStaticRoutesIpv4StaticRoutesBfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: VirtualRouterStaticRoutesIpv4StaticRoutesBfd) {
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
  private _nexthop = new VirtualRouterStaticRoutesIpv4StaticRoutesNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: VirtualRouterStaticRoutesIpv4StaticRoutesNexthop) {
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
  private _pathMonitor = new VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: VirtualRouterStaticRoutesIpv4StaticRoutesPathMonitor) {
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
  private _routeTable = new VirtualRouterStaticRoutesIpv4StaticRoutesRouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
  public putRouteTable(value: VirtualRouterStaticRoutesIpv4StaticRoutesRouteTable) {
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

export class VirtualRouterStaticRoutesIpv4StaticRoutesList extends cdktf.ComplexList {
  public internalValue? : VirtualRouterStaticRoutesIpv4StaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): VirtualRouterStaticRoutesIpv4StaticRoutesOutputReference {
    return new VirtualRouterStaticRoutesIpv4StaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4 panos_virtual_router_static_routes_ipv4}
*/
export class VirtualRouterStaticRoutesIpv4 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_virtual_router_static_routes_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualRouterStaticRoutesIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualRouterStaticRoutesIpv4 to import
  * @param importFromId The id of the existing VirtualRouterStaticRoutesIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualRouterStaticRoutesIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_virtual_router_static_routes_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.5/docs/resources/virtual_router_static_routes_ipv4 panos_virtual_router_static_routes_ipv4} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualRouterStaticRoutesIpv4Config
  */
  public constructor(scope: Construct, id: string, config: VirtualRouterStaticRoutesIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'panos_virtual_router_static_routes_ipv4',
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
  private _location = new VirtualRouterStaticRoutesIpv4LocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: VirtualRouterStaticRoutesIpv4Location) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes = new VirtualRouterStaticRoutesIpv4StaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: VirtualRouterStaticRoutesIpv4StaticRoutes[] | cdktf.IResolvable) {
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
      location: virtualRouterStaticRoutesIpv4LocationToTerraform(this._location.internalValue),
      static_routes: cdktf.listMapper(virtualRouterStaticRoutesIpv4StaticRoutesToTerraform, false)(this._staticRoutes.internalValue),
      virtual_router: cdktf.stringToTerraform(this._virtualRouter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: virtualRouterStaticRoutesIpv4LocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualRouterStaticRoutesIpv4Location",
      },
      static_routes: {
        value: cdktf.listMapperHcl(virtualRouterStaticRoutesIpv4StaticRoutesToHclTerraform, false)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualRouterStaticRoutesIpv4StaticRoutesList",
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
