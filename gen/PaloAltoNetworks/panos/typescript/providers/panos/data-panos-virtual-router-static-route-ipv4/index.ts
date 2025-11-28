// https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPanosVirtualRouterStaticRouteIpv4Config extends cdktf.TerraformMetaArguments {
  /**
  * adminitrative distance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#admin_dist DataPanosVirtualRouterStaticRouteIpv4#admin_dist}
  */
  readonly adminDist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#bfd DataPanosVirtualRouterStaticRouteIpv4#bfd}
  */
  readonly bfd?: DataPanosVirtualRouterStaticRouteIpv4Bfd;
  /**
  * Destination IP address/prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#destination DataPanosVirtualRouterStaticRouteIpv4#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#interface DataPanosVirtualRouterStaticRouteIpv4#interface}
  */
  readonly interface?: string;
  /**
  * The location of this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#location DataPanosVirtualRouterStaticRouteIpv4#location}
  */
  readonly location: DataPanosVirtualRouterStaticRouteIpv4Location;
  /**
  * metric value (path cost)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#metric DataPanosVirtualRouterStaticRouteIpv4#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#name DataPanosVirtualRouterStaticRouteIpv4#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#nexthop DataPanosVirtualRouterStaticRouteIpv4#nexthop}
  */
  readonly nexthop?: DataPanosVirtualRouterStaticRouteIpv4Nexthop;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#path_monitor DataPanosVirtualRouterStaticRouteIpv4#path_monitor}
  */
  readonly pathMonitor?: DataPanosVirtualRouterStaticRouteIpv4PathMonitor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#route_table DataPanosVirtualRouterStaticRouteIpv4#route_table}
  */
  readonly routeTable?: DataPanosVirtualRouterStaticRouteIpv4RouteTable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#virtual_router DataPanosVirtualRouterStaticRouteIpv4#virtual_router}
  */
  readonly virtualRouter?: string;
}
export interface DataPanosVirtualRouterStaticRouteIpv4Bfd {
  /**
  * BFD profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#profile DataPanosVirtualRouterStaticRouteIpv4#profile}
  */
  readonly profile?: string;
}

export function dataPanosVirtualRouterStaticRouteIpv4BfdToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4Bfd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4BfdToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4Bfd | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterStaticRouteIpv4BfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4Bfd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4Bfd | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4LocationNgfw {
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#ngfw_device DataPanosVirtualRouterStaticRouteIpv4#ngfw_device}
  */
  readonly ngfwDevice?: string;
}

export function dataPanosVirtualRouterStaticRouteIpv4LocationNgfwToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4LocationNgfw | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw_device: cdktf.stringToTerraform(struct!.ngfwDevice),
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4LocationNgfwToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4LocationNgfw | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterStaticRouteIpv4LocationNgfwOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4LocationNgfw | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4LocationNgfw | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4LocationTemplate {
  /**
  * Specific Panorama template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#name DataPanosVirtualRouterStaticRouteIpv4#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#ngfw_device DataPanosVirtualRouterStaticRouteIpv4#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#panorama_device DataPanosVirtualRouterStaticRouteIpv4#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosVirtualRouterStaticRouteIpv4LocationTemplateToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4LocationTemplate | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterStaticRouteIpv4LocationTemplateToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4LocationTemplate | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterStaticRouteIpv4LocationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4LocationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4LocationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack {
  /**
  * Specific Panorama template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#name DataPanosVirtualRouterStaticRouteIpv4#name}
  */
  readonly name?: string;
  /**
  * The NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#ngfw_device DataPanosVirtualRouterStaticRouteIpv4#ngfw_device}
  */
  readonly ngfwDevice?: string;
  /**
  * Specific Panorama device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#panorama_device DataPanosVirtualRouterStaticRouteIpv4#panorama_device}
  */
  readonly panoramaDevice?: string;
}

export function dataPanosVirtualRouterStaticRouteIpv4LocationTemplateStackToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterStaticRouteIpv4LocationTemplateStackToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStackOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4Location {
  /**
  * Located in a specific NGFW device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#ngfw DataPanosVirtualRouterStaticRouteIpv4#ngfw}
  */
  readonly ngfw?: DataPanosVirtualRouterStaticRouteIpv4LocationNgfw;
  /**
  * Located in a specific template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#template DataPanosVirtualRouterStaticRouteIpv4#template}
  */
  readonly template?: DataPanosVirtualRouterStaticRouteIpv4LocationTemplate;
  /**
  * Located in a specific template stack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#template_stack DataPanosVirtualRouterStaticRouteIpv4#template_stack}
  */
  readonly templateStack?: DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack;
}

export function dataPanosVirtualRouterStaticRouteIpv4LocationToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ngfw: dataPanosVirtualRouterStaticRouteIpv4LocationNgfwToTerraform(struct!.ngfw),
    template: dataPanosVirtualRouterStaticRouteIpv4LocationTemplateToTerraform(struct!.template),
    template_stack: dataPanosVirtualRouterStaticRouteIpv4LocationTemplateStackToTerraform(struct!.templateStack),
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4LocationToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ngfw: {
      value: dataPanosVirtualRouterStaticRouteIpv4LocationNgfwToHclTerraform(struct!.ngfw),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4LocationNgfw",
    },
    template: {
      value: dataPanosVirtualRouterStaticRouteIpv4LocationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4LocationTemplate",
    },
    template_stack: {
      value: dataPanosVirtualRouterStaticRouteIpv4LocationTemplateStackToHclTerraform(struct!.templateStack),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterStaticRouteIpv4LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4Location | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4Location | cdktf.IResolvable | undefined) {
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
  private _ngfw = new DataPanosVirtualRouterStaticRouteIpv4LocationNgfwOutputReference(this, "ngfw");
  public get ngfw() {
    return this._ngfw;
  }
  public putNgfw(value: DataPanosVirtualRouterStaticRouteIpv4LocationNgfw) {
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
  private _template = new DataPanosVirtualRouterStaticRouteIpv4LocationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataPanosVirtualRouterStaticRouteIpv4LocationTemplate) {
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
  private _templateStack = new DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStackOutputReference(this, "template_stack");
  public get templateStack() {
    return this._templateStack;
  }
  public putTemplateStack(value: DataPanosVirtualRouterStaticRouteIpv4LocationTemplateStack) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard {
}

export function dataPanosVirtualRouterStaticRouteIpv4NexthopDiscardToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4NexthopDiscardToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterStaticRouteIpv4NexthopDiscardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4NexthopReceive {
}

export function dataPanosVirtualRouterStaticRouteIpv4NexthopReceiveToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4NexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4NexthopReceiveToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4NexthopReceive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterStaticRouteIpv4NexthopReceiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4NexthopReceive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4NexthopReceive | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4Nexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#discard DataPanosVirtualRouterStaticRouteIpv4#discard}
  */
  readonly discard?: DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard;
  /**
  * nexthop address FQDN address object configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#fqdn DataPanosVirtualRouterStaticRouteIpv4#fqdn}
  */
  readonly fqdn?: string;
  /**
  * Next hop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#ip_address DataPanosVirtualRouterStaticRouteIpv4#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Next hop virtual router
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#next_vr DataPanosVirtualRouterStaticRouteIpv4#next_vr}
  */
  readonly nextVr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#receive DataPanosVirtualRouterStaticRouteIpv4#receive}
  */
  readonly receive?: DataPanosVirtualRouterStaticRouteIpv4NexthopReceive;
}

export function dataPanosVirtualRouterStaticRouteIpv4NexthopToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4Nexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discard: dataPanosVirtualRouterStaticRouteIpv4NexthopDiscardToTerraform(struct!.discard),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    next_vr: cdktf.stringToTerraform(struct!.nextVr),
    receive: dataPanosVirtualRouterStaticRouteIpv4NexthopReceiveToTerraform(struct!.receive),
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4NexthopToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4Nexthop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discard: {
      value: dataPanosVirtualRouterStaticRouteIpv4NexthopDiscardToHclTerraform(struct!.discard),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard",
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
      value: dataPanosVirtualRouterStaticRouteIpv4NexthopReceiveToHclTerraform(struct!.receive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4NexthopReceive",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterStaticRouteIpv4NexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4Nexthop | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4Nexthop | cdktf.IResolvable | undefined) {
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

  // discard - computed: true, optional: true, required: false
  private _discard = new DataPanosVirtualRouterStaticRouteIpv4NexthopDiscardOutputReference(this, "discard");
  public get discard() {
    return this._discard;
  }
  public putDiscard(value: DataPanosVirtualRouterStaticRouteIpv4NexthopDiscard) {
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

  // next_vr - computed: true, optional: true, required: false
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

  // receive - computed: true, optional: true, required: false
  private _receive = new DataPanosVirtualRouterStaticRouteIpv4NexthopReceiveOutputReference(this, "receive");
  public get receive() {
    return this._receive;
  }
  public putReceive(value: DataPanosVirtualRouterStaticRouteIpv4NexthopReceive) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations {
  /**
  * ping count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#count DataPanosVirtualRouterStaticRouteIpv4#count}
  */
  readonly count?: number;
  /**
  * Destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#destination DataPanosVirtualRouterStaticRouteIpv4#destination}
  */
  readonly destination?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#enable DataPanosVirtualRouterStaticRouteIpv4#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * ping interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#interval DataPanosVirtualRouterStaticRouteIpv4#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#name DataPanosVirtualRouterStaticRouteIpv4#name}
  */
  readonly name: string;
  /**
  * Source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#source DataPanosVirtualRouterStaticRouteIpv4#source}
  */
  readonly source?: string;
}

export function dataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations | cdktf.IResolvable): any {
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


export function dataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations | cdktf.IResolvable): any {
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

export class DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations | cdktf.IResolvable | undefined) {
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

export class DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsOutputReference {
    return new DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPanosVirtualRouterStaticRouteIpv4PathMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#enable DataPanosVirtualRouterStaticRouteIpv4#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * failure condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#failure_condition DataPanosVirtualRouterStaticRouteIpv4#failure_condition}
  */
  readonly failureCondition?: string;
  /**
  * hold time (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#hold_time DataPanosVirtualRouterStaticRouteIpv4#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#monitor_destinations DataPanosVirtualRouterStaticRouteIpv4#monitor_destinations}
  */
  readonly monitorDestinations?: DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations[] | cdktf.IResolvable;
}

export function dataPanosVirtualRouterStaticRouteIpv4PathMonitorToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4PathMonitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    failure_condition: cdktf.stringToTerraform(struct!.failureCondition),
    hold_time: cdktf.numberToTerraform(struct!.holdTime),
    monitor_destinations: cdktf.listMapper(dataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsToTerraform, false)(struct!.monitorDestinations),
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4PathMonitorToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4PathMonitor | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsToHclTerraform, false)(struct!.monitorDestinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterStaticRouteIpv4PathMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4PathMonitor | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4PathMonitor | cdktf.IResolvable | undefined) {
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
  private _monitorDestinations = new DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinationsList(this, "monitor_destinations", false);
  public get monitorDestinations() {
    return this._monitorDestinations;
  }
  public putMonitorDestinations(value: DataPanosVirtualRouterStaticRouteIpv4PathMonitorMonitorDestinations[] | cdktf.IResolvable) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth {
}

export function dataPanosVirtualRouterStaticRouteIpv4RouteTableBothToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4RouteTableBothToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterStaticRouteIpv4RouteTableBothOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast {
}

export function dataPanosVirtualRouterStaticRouteIpv4RouteTableMulticastToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4RouteTableMulticastToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall {
}

export function dataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstallToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstallToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast {
}

export function dataPanosVirtualRouterStaticRouteIpv4RouteTableUnicastToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4RouteTableUnicastToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast | cdktf.IResolvable | undefined) {
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
export interface DataPanosVirtualRouterStaticRouteIpv4RouteTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#both DataPanosVirtualRouterStaticRouteIpv4#both}
  */
  readonly both?: DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#multicast DataPanosVirtualRouterStaticRouteIpv4#multicast}
  */
  readonly multicast?: DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#no_install DataPanosVirtualRouterStaticRouteIpv4#no_install}
  */
  readonly noInstall?: DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#unicast DataPanosVirtualRouterStaticRouteIpv4#unicast}
  */
  readonly unicast?: DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast;
}

export function dataPanosVirtualRouterStaticRouteIpv4RouteTableToTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    both: dataPanosVirtualRouterStaticRouteIpv4RouteTableBothToTerraform(struct!.both),
    multicast: dataPanosVirtualRouterStaticRouteIpv4RouteTableMulticastToTerraform(struct!.multicast),
    no_install: dataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstallToTerraform(struct!.noInstall),
    unicast: dataPanosVirtualRouterStaticRouteIpv4RouteTableUnicastToTerraform(struct!.unicast),
  }
}


export function dataPanosVirtualRouterStaticRouteIpv4RouteTableToHclTerraform(struct?: DataPanosVirtualRouterStaticRouteIpv4RouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    both: {
      value: dataPanosVirtualRouterStaticRouteIpv4RouteTableBothToHclTerraform(struct!.both),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth",
    },
    multicast: {
      value: dataPanosVirtualRouterStaticRouteIpv4RouteTableMulticastToHclTerraform(struct!.multicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast",
    },
    no_install: {
      value: dataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstallToHclTerraform(struct!.noInstall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall",
    },
    unicast: {
      value: dataPanosVirtualRouterStaticRouteIpv4RouteTableUnicastToHclTerraform(struct!.unicast),
      isBlock: true,
      type: "struct",
      storageClassType: "DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPanosVirtualRouterStaticRouteIpv4RouteTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPanosVirtualRouterStaticRouteIpv4RouteTable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataPanosVirtualRouterStaticRouteIpv4RouteTable | cdktf.IResolvable | undefined) {
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

  // both - computed: true, optional: true, required: false
  private _both = new DataPanosVirtualRouterStaticRouteIpv4RouteTableBothOutputReference(this, "both");
  public get both() {
    return this._both;
  }
  public putBoth(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableBoth) {
    this._both.internalValue = value;
  }
  public resetBoth() {
    this._both.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bothInput() {
    return this._both.internalValue;
  }

  // multicast - computed: true, optional: true, required: false
  private _multicast = new DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
  }

  // no_install - computed: true, optional: true, required: false
  private _noInstall = new DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstallOutputReference(this, "no_install");
  public get noInstall() {
    return this._noInstall;
  }
  public putNoInstall(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableNoInstall) {
    this._noInstall.internalValue = value;
  }
  public resetNoInstall() {
    this._noInstall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noInstallInput() {
    return this._noInstall.internalValue;
  }

  // unicast - computed: true, optional: true, required: false
  private _unicast = new DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicastOutputReference(this, "unicast");
  public get unicast() {
    return this._unicast;
  }
  public putUnicast(value: DataPanosVirtualRouterStaticRouteIpv4RouteTableUnicast) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4 panos_virtual_router_static_route_ipv4}
*/
export class DataPanosVirtualRouterStaticRouteIpv4 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "panos_virtual_router_static_route_ipv4";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPanosVirtualRouterStaticRouteIpv4 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPanosVirtualRouterStaticRouteIpv4 to import
  * @param importFromId The id of the existing DataPanosVirtualRouterStaticRouteIpv4 that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPanosVirtualRouterStaticRouteIpv4 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "panos_virtual_router_static_route_ipv4", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/panos/2.0.7/docs/data-sources/virtual_router_static_route_ipv4 panos_virtual_router_static_route_ipv4} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPanosVirtualRouterStaticRouteIpv4Config
  */
  public constructor(scope: Construct, id: string, config: DataPanosVirtualRouterStaticRouteIpv4Config) {
    super(scope, id, {
      terraformResourceType: 'panos_virtual_router_static_route_ipv4',
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
    this._adminDist = config.adminDist;
    this._bfd.internalValue = config.bfd;
    this._destination = config.destination;
    this._interface = config.interface;
    this._location.internalValue = config.location;
    this._metric = config.metric;
    this._name = config.name;
    this._nexthop.internalValue = config.nexthop;
    this._pathMonitor.internalValue = config.pathMonitor;
    this._routeTable.internalValue = config.routeTable;
    this._virtualRouter = config.virtualRouter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_dist - computed: true, optional: true, required: false
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

  // bfd - computed: true, optional: true, required: false
  private _bfd = new DataPanosVirtualRouterStaticRouteIpv4BfdOutputReference(this, "bfd");
  public get bfd() {
    return this._bfd;
  }
  public putBfd(value: DataPanosVirtualRouterStaticRouteIpv4Bfd) {
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

  // location - computed: false, optional: false, required: true
  private _location = new DataPanosVirtualRouterStaticRouteIpv4LocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: DataPanosVirtualRouterStaticRouteIpv4Location) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // nexthop - computed: true, optional: true, required: false
  private _nexthop = new DataPanosVirtualRouterStaticRouteIpv4NexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: DataPanosVirtualRouterStaticRouteIpv4Nexthop) {
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
  private _pathMonitor = new DataPanosVirtualRouterStaticRouteIpv4PathMonitorOutputReference(this, "path_monitor");
  public get pathMonitor() {
    return this._pathMonitor;
  }
  public putPathMonitor(value: DataPanosVirtualRouterStaticRouteIpv4PathMonitor) {
    this._pathMonitor.internalValue = value;
  }
  public resetPathMonitor() {
    this._pathMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathMonitorInput() {
    return this._pathMonitor.internalValue;
  }

  // route_table - computed: true, optional: true, required: false
  private _routeTable = new DataPanosVirtualRouterStaticRouteIpv4RouteTableOutputReference(this, "route_table");
  public get routeTable() {
    return this._routeTable;
  }
  public putRouteTable(value: DataPanosVirtualRouterStaticRouteIpv4RouteTable) {
    this._routeTable.internalValue = value;
  }
  public resetRouteTable() {
    this._routeTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable.internalValue;
  }

  // virtual_router - computed: true, optional: true, required: false
  private _virtualRouter?: string; 
  public get virtualRouter() {
    return this.getStringAttribute('virtual_router');
  }
  public set virtualRouter(value: string) {
    this._virtualRouter = value;
  }
  public resetVirtualRouter() {
    this._virtualRouter = undefined;
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
      admin_dist: cdktf.numberToTerraform(this._adminDist),
      bfd: dataPanosVirtualRouterStaticRouteIpv4BfdToTerraform(this._bfd.internalValue),
      destination: cdktf.stringToTerraform(this._destination),
      interface: cdktf.stringToTerraform(this._interface),
      location: dataPanosVirtualRouterStaticRouteIpv4LocationToTerraform(this._location.internalValue),
      metric: cdktf.numberToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      nexthop: dataPanosVirtualRouterStaticRouteIpv4NexthopToTerraform(this._nexthop.internalValue),
      path_monitor: dataPanosVirtualRouterStaticRouteIpv4PathMonitorToTerraform(this._pathMonitor.internalValue),
      route_table: dataPanosVirtualRouterStaticRouteIpv4RouteTableToTerraform(this._routeTable.internalValue),
      virtual_router: cdktf.stringToTerraform(this._virtualRouter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_dist: {
        value: cdktf.numberToHclTerraform(this._adminDist),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd: {
        value: dataPanosVirtualRouterStaticRouteIpv4BfdToHclTerraform(this._bfd.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterStaticRouteIpv4Bfd",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: dataPanosVirtualRouterStaticRouteIpv4LocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterStaticRouteIpv4Location",
      },
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
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
      nexthop: {
        value: dataPanosVirtualRouterStaticRouteIpv4NexthopToHclTerraform(this._nexthop.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterStaticRouteIpv4Nexthop",
      },
      path_monitor: {
        value: dataPanosVirtualRouterStaticRouteIpv4PathMonitorToHclTerraform(this._pathMonitor.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterStaticRouteIpv4PathMonitor",
      },
      route_table: {
        value: dataPanosVirtualRouterStaticRouteIpv4RouteTableToHclTerraform(this._routeTable.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPanosVirtualRouterStaticRouteIpv4RouteTable",
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
