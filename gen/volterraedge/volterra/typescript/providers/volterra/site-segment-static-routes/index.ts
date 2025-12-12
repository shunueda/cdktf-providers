// https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteSegmentStaticRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#annotations SiteSegmentStaticRoutes#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#description SiteSegmentStaticRoutes#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#disable SiteSegmentStaticRoutes#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#id SiteSegmentStaticRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#labels SiteSegmentStaticRoutes#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#name SiteSegmentStaticRoutes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#nameserver_v4 SiteSegmentStaticRoutes#nameserver_v4}
  */
  readonly nameserverV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#nameserver_v6 SiteSegmentStaticRoutes#nameserver_v6}
  */
  readonly nameserverV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#namespace SiteSegmentStaticRoutes#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#secondary_nameserver_v4 SiteSegmentStaticRoutes#secondary_nameserver_v4}
  */
  readonly secondaryNameserverV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#secondary_nameserver_v6 SiteSegmentStaticRoutes#secondary_nameserver_v6}
  */
  readonly secondaryNameserverV6?: string;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#site SiteSegmentStaticRoutes#site}
  */
  readonly site: SiteSegmentStaticRoutesSite[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#static_routes SiteSegmentStaticRoutes#static_routes}
  */
  readonly staticRoutes?: SiteSegmentStaticRoutesStaticRoutes[] | cdktf.IResolvable;
  /**
  * static_v6_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#static_v6_routes SiteSegmentStaticRoutes#static_v6_routes}
  */
  readonly staticV6Routes?: SiteSegmentStaticRoutesStaticV6Routes[] | cdktf.IResolvable;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#virtual_network SiteSegmentStaticRoutes#virtual_network}
  */
  readonly virtualNetwork: SiteSegmentStaticRoutesVirtualNetwork[] | cdktf.IResolvable;
}
export interface SiteSegmentStaticRoutesSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#name SiteSegmentStaticRoutes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#namespace SiteSegmentStaticRoutes#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#tenant SiteSegmentStaticRoutes#tenant}
  */
  readonly tenant?: string;
}

export function siteSegmentStaticRoutesSiteToTerraform(struct?: SiteSegmentStaticRoutesSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function siteSegmentStaticRoutesSiteToHclTerraform(struct?: SiteSegmentStaticRoutesSite | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class SiteSegmentStaticRoutesSiteList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesSite[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesSiteOutputReference {
    return new SiteSegmentStaticRoutesSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSegmentStaticRoutesStaticRoutesNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#name SiteSegmentStaticRoutes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#namespace SiteSegmentStaticRoutes#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#tenant SiteSegmentStaticRoutes#tenant}
  */
  readonly tenant?: string;
}

export function siteSegmentStaticRoutesStaticRoutesNexthopInterfaceToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function siteSegmentStaticRoutesStaticRoutesNexthopInterfaceToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopInterface | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesNexthopInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesNexthopInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class SiteSegmentStaticRoutesStaticRoutesNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesStaticRoutesNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesStaticRoutesNexthopInterfaceOutputReference {
    return new SiteSegmentStaticRoutesStaticRoutesNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#addr SiteSegmentStaticRoutes#addr}
  */
  readonly addr?: string;
}

export function siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4ToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4OutputReference | SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4OutputReference | SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#addr SiteSegmentStaticRoutes#addr}
  */
  readonly addr?: string;
}

export function siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6ToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6OutputReference | SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6OutputReference | SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv4 SiteSegmentStaticRoutes#ipv4}
  */
  readonly ipv4?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv6 SiteSegmentStaticRoutes#ipv6}
  */
  readonly ipv6?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6;
}

export function siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressOutputReference | SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressOutputReference | SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddress | undefined {
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

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressIpv6) {
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
export interface SiteSegmentStaticRoutesStaticRoutesNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#type SiteSegmentStaticRoutes#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#interface SiteSegmentStaticRoutes#interface}
  */
  readonly interface?: SiteSegmentStaticRoutesStaticRoutesNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#nexthop_address SiteSegmentStaticRoutes#nexthop_address}
  */
  readonly nexthopAddress?: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddress;
}

export function siteSegmentStaticRoutesStaticRoutesNexthopToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopOutputReference | SiteSegmentStaticRoutesStaticRoutesNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(siteSegmentStaticRoutesStaticRoutesNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function siteSegmentStaticRoutesStaticRoutesNexthopToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesNexthopOutputReference | SiteSegmentStaticRoutesStaticRoutesNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(siteSegmentStaticRoutesStaticRoutesNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesNexthopInterfaceList",
    },
    nexthop_address: {
      value: siteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new SiteSegmentStaticRoutesStaticRoutesNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SiteSegmentStaticRoutesStaticRoutesNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: SiteSegmentStaticRoutesStaticRoutesNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#plen SiteSegmentStaticRoutes#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#prefix SiteSegmentStaticRoutes#prefix}
  */
  readonly prefix?: string;
}

export function siteSegmentStaticRoutesStaticRoutesSubnetsIpv4ToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4OutputReference | SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function siteSegmentStaticRoutesStaticRoutesSubnetsIpv4ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4OutputReference | SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#plen SiteSegmentStaticRoutes#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#prefix SiteSegmentStaticRoutes#prefix}
  */
  readonly prefix?: string;
}

export function siteSegmentStaticRoutesStaticRoutesSubnetsIpv6ToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6OutputReference | SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function siteSegmentStaticRoutesStaticRoutesSubnetsIpv6ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6OutputReference | SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface SiteSegmentStaticRoutesStaticRoutesSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv4 SiteSegmentStaticRoutes#ipv4}
  */
  readonly ipv4?: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv6 SiteSegmentStaticRoutes#ipv6}
  */
  readonly ipv6?: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6;
}

export function siteSegmentStaticRoutesStaticRoutesSubnetsToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: siteSegmentStaticRoutesStaticRoutesSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: siteSegmentStaticRoutesStaticRoutesSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function siteSegmentStaticRoutesStaticRoutesSubnetsToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutesSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: siteSegmentStaticRoutesStaticRoutesSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4List",
    },
    ipv6: {
      value: siteSegmentStaticRoutesStaticRoutesSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutesSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutesSubnets | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv4) {
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
  private _ipv6 = new SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: SiteSegmentStaticRoutesStaticRoutesSubnetsIpv6) {
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

export class SiteSegmentStaticRoutesStaticRoutesSubnetsList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesStaticRoutesSubnets[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesStaticRoutesSubnetsOutputReference {
    return new SiteSegmentStaticRoutesStaticRoutesSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSegmentStaticRoutesStaticRoutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#attrs SiteSegmentStaticRoutes#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#labels SiteSegmentStaticRoutes#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#nexthop SiteSegmentStaticRoutes#nexthop}
  */
  readonly nexthop?: SiteSegmentStaticRoutesStaticRoutesNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#subnets SiteSegmentStaticRoutes#subnets}
  */
  readonly subnets: SiteSegmentStaticRoutesStaticRoutesSubnets[] | cdktf.IResolvable;
}

export function siteSegmentStaticRoutesStaticRoutesToTerraform(struct?: SiteSegmentStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: siteSegmentStaticRoutesStaticRoutesNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(siteSegmentStaticRoutesStaticRoutesSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function siteSegmentStaticRoutesStaticRoutesToHclTerraform(struct?: SiteSegmentStaticRoutesStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: siteSegmentStaticRoutesStaticRoutesNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(siteSegmentStaticRoutesStaticRoutesSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticRoutesSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new SiteSegmentStaticRoutesStaticRoutesNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: SiteSegmentStaticRoutesStaticRoutesNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new SiteSegmentStaticRoutesStaticRoutesSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: SiteSegmentStaticRoutesStaticRoutesSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class SiteSegmentStaticRoutesStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesStaticRoutesOutputReference {
    return new SiteSegmentStaticRoutesStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#name SiteSegmentStaticRoutes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#namespace SiteSegmentStaticRoutes#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#tenant SiteSegmentStaticRoutes#tenant}
  */
  readonly tenant?: string;
}

export function siteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class SiteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceOutputReference {
    return new SiteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#addr SiteSegmentStaticRoutes#addr}
  */
  readonly addr?: string;
}

export function siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4ToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4OutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4OutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#addr SiteSegmentStaticRoutes#addr}
  */
  readonly addr?: string;
}

export function siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6ToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6OutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6OutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv4 SiteSegmentStaticRoutes#ipv4}
  */
  readonly ipv4?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv6 SiteSegmentStaticRoutes#ipv6}
  */
  readonly ipv6?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6;
}

export function siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressOutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressOutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddress | undefined {
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

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressIpv6) {
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
export interface SiteSegmentStaticRoutesStaticV6RoutesNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#type SiteSegmentStaticRoutes#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#interface SiteSegmentStaticRoutes#interface}
  */
  readonly interface?: SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#nexthop_address SiteSegmentStaticRoutes#nexthop_address}
  */
  readonly nexthopAddress?: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddress;
}

export function siteSegmentStaticRoutesStaticV6RoutesNexthopToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopOutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(siteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesNexthopToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesNexthopOutputReference | SiteSegmentStaticRoutesStaticV6RoutesNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.listMapperHcl(siteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceList",
    },
    nexthop_address: {
      value: siteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesNexthop | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    if (this._nexthopAddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthopAddress = this._nexthopAddress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesNexthop | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._interface.internalValue = undefined;
      this._nexthopAddress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._interface.internalValue = value.interface;
      this._nexthopAddress.internalValue = value.nexthopAddress;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new SiteSegmentStaticRoutesStaticV6RoutesNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // nexthop_address - computed: false, optional: true, required: false
  private _nexthopAddress = new SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: SiteSegmentStaticRoutesStaticV6RoutesNexthopNexthopAddress) {
    this._nexthopAddress.internalValue = value;
  }
  public resetNexthopAddress() {
    this._nexthopAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopAddressInput() {
    return this._nexthopAddress.internalValue;
  }
}
export interface SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#plen SiteSegmentStaticRoutes#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#prefix SiteSegmentStaticRoutes#prefix}
  */
  readonly prefix?: string;
}

export function siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4ToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4OutputReference | SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4OutputReference | SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#plen SiteSegmentStaticRoutes#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#prefix SiteSegmentStaticRoutes#prefix}
  */
  readonly prefix?: string;
}

export function siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6ToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6OutputReference | SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6ToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6OutputReference | SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plen: {
      value: cdktf.numberToHclTerraform(struct!.plen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._plen !== undefined) {
      hasAnyValues = true;
      internalValueResult.plen = this._plen;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._plen = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._plen = value.plen;
      this._prefix = value.prefix;
    }
  }

  // plen - computed: false, optional: true, required: false
  private _plen?: number; 
  public get plen() {
    return this.getNumberAttribute('plen');
  }
  public set plen(value: number) {
    this._plen = value;
  }
  public resetPlen() {
    this._plen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plenInput() {
    return this._plen;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface SiteSegmentStaticRoutesStaticV6RoutesSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv4 SiteSegmentStaticRoutes#ipv4}
  */
  readonly ipv4?: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#ipv6 SiteSegmentStaticRoutes#ipv6}
  */
  readonly ipv6?: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6;
}

export function siteSegmentStaticRoutesStaticV6RoutesSubnetsToTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesSubnetsToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6RoutesSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4List",
    },
    ipv6: {
      value: siteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesStaticV6RoutesSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6RoutesSubnets | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv4) {
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
  private _ipv6 = new SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: SiteSegmentStaticRoutesStaticV6RoutesSubnetsIpv6) {
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

export class SiteSegmentStaticRoutesStaticV6RoutesSubnetsList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesStaticV6RoutesSubnets[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesStaticV6RoutesSubnetsOutputReference {
    return new SiteSegmentStaticRoutesStaticV6RoutesSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSegmentStaticRoutesStaticV6Routes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#attrs SiteSegmentStaticRoutes#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#labels SiteSegmentStaticRoutes#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#nexthop SiteSegmentStaticRoutes#nexthop}
  */
  readonly nexthop?: SiteSegmentStaticRoutesStaticV6RoutesNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#subnets SiteSegmentStaticRoutes#subnets}
  */
  readonly subnets: SiteSegmentStaticRoutesStaticV6RoutesSubnets[] | cdktf.IResolvable;
}

export function siteSegmentStaticRoutesStaticV6RoutesToTerraform(struct?: SiteSegmentStaticRoutesStaticV6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: siteSegmentStaticRoutesStaticV6RoutesNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(siteSegmentStaticRoutesStaticV6RoutesSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function siteSegmentStaticRoutesStaticV6RoutesToHclTerraform(struct?: SiteSegmentStaticRoutesStaticV6Routes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.attrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    nexthop: {
      value: siteSegmentStaticRoutesStaticV6RoutesNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(siteSegmentStaticRoutesStaticV6RoutesSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesStaticV6RoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesStaticV6Routes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.attrs = this._attrs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nexthop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nexthop = this._nexthop?.internalValue;
    }
    if (this._subnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesStaticV6Routes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attrs = value.attrs;
      this._labels = value.labels;
      this._nexthop.internalValue = value.nexthop;
      this._subnets.internalValue = value.subnets;
    }
  }

  // attrs - computed: false, optional: true, required: false
  private _attrs?: string[]; 
  public get attrs() {
    return this.getListAttribute('attrs');
  }
  public set attrs(value: string[]) {
    this._attrs = value;
  }
  public resetAttrs() {
    this._attrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrsInput() {
    return this._attrs;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // nexthop - computed: false, optional: true, required: false
  private _nexthop = new SiteSegmentStaticRoutesStaticV6RoutesNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: SiteSegmentStaticRoutesStaticV6RoutesNexthop) {
    this._nexthop.internalValue = value;
  }
  public resetNexthop() {
    this._nexthop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopInput() {
    return this._nexthop.internalValue;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets = new SiteSegmentStaticRoutesStaticV6RoutesSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: SiteSegmentStaticRoutesStaticV6RoutesSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}

export class SiteSegmentStaticRoutesStaticV6RoutesList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesStaticV6Routes[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesStaticV6RoutesOutputReference {
    return new SiteSegmentStaticRoutesStaticV6RoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteSegmentStaticRoutesVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#name SiteSegmentStaticRoutes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#namespace SiteSegmentStaticRoutes#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#tenant SiteSegmentStaticRoutes#tenant}
  */
  readonly tenant?: string;
}

export function siteSegmentStaticRoutesVirtualNetworkToTerraform(struct?: SiteSegmentStaticRoutesVirtualNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function siteSegmentStaticRoutesVirtualNetworkToHclTerraform(struct?: SiteSegmentStaticRoutesVirtualNetwork | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteSegmentStaticRoutesVirtualNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteSegmentStaticRoutesVirtualNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteSegmentStaticRoutesVirtualNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class SiteSegmentStaticRoutesVirtualNetworkList extends cdktf.ComplexList {
  public internalValue? : SiteSegmentStaticRoutesVirtualNetwork[] | cdktf.IResolvable

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
  public get(index: number): SiteSegmentStaticRoutesVirtualNetworkOutputReference {
    return new SiteSegmentStaticRoutesVirtualNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes volterra_site_segment_static_routes}
*/
export class SiteSegmentStaticRoutes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_site_segment_static_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SiteSegmentStaticRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SiteSegmentStaticRoutes to import
  * @param importFromId The id of the existing SiteSegmentStaticRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SiteSegmentStaticRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_site_segment_static_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/site_segment_static_routes volterra_site_segment_static_routes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteSegmentStaticRoutesConfig
  */
  public constructor(scope: Construct, id: string, config: SiteSegmentStaticRoutesConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_site_segment_static_routes',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._nameserverV4 = config.nameserverV4;
    this._nameserverV6 = config.nameserverV6;
    this._namespace = config.namespace;
    this._secondaryNameserverV4 = config.secondaryNameserverV4;
    this._secondaryNameserverV6 = config.secondaryNameserverV6;
    this._site.internalValue = config.site;
    this._staticRoutes.internalValue = config.staticRoutes;
    this._staticV6Routes.internalValue = config.staticV6Routes;
    this._virtualNetwork.internalValue = config.virtualNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // nameserver_v4 - computed: false, optional: true, required: false
  private _nameserverV4?: string; 
  public get nameserverV4() {
    return this.getStringAttribute('nameserver_v4');
  }
  public set nameserverV4(value: string) {
    this._nameserverV4 = value;
  }
  public resetNameserverV4() {
    this._nameserverV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverV4Input() {
    return this._nameserverV4;
  }

  // nameserver_v6 - computed: false, optional: true, required: false
  private _nameserverV6?: string; 
  public get nameserverV6() {
    return this.getStringAttribute('nameserver_v6');
  }
  public set nameserverV6(value: string) {
    this._nameserverV6 = value;
  }
  public resetNameserverV6() {
    this._nameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverV6Input() {
    return this._nameserverV6;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // secondary_nameserver_v4 - computed: false, optional: true, required: false
  private _secondaryNameserverV4?: string; 
  public get secondaryNameserverV4() {
    return this.getStringAttribute('secondary_nameserver_v4');
  }
  public set secondaryNameserverV4(value: string) {
    this._secondaryNameserverV4 = value;
  }
  public resetSecondaryNameserverV4() {
    this._secondaryNameserverV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNameserverV4Input() {
    return this._secondaryNameserverV4;
  }

  // secondary_nameserver_v6 - computed: false, optional: true, required: false
  private _secondaryNameserverV6?: string; 
  public get secondaryNameserverV6() {
    return this.getStringAttribute('secondary_nameserver_v6');
  }
  public set secondaryNameserverV6(value: string) {
    this._secondaryNameserverV6 = value;
  }
  public resetSecondaryNameserverV6() {
    this._secondaryNameserverV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryNameserverV6Input() {
    return this._secondaryNameserverV6;
  }

  // site - computed: false, optional: false, required: true
  private _site = new SiteSegmentStaticRoutesSiteList(this, "site", false);
  public get site() {
    return this._site;
  }
  public putSite(value: SiteSegmentStaticRoutesSite[] | cdktf.IResolvable) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new SiteSegmentStaticRoutesStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: SiteSegmentStaticRoutesStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }

  // static_v6_routes - computed: false, optional: true, required: false
  private _staticV6Routes = new SiteSegmentStaticRoutesStaticV6RoutesList(this, "static_v6_routes", false);
  public get staticV6Routes() {
    return this._staticV6Routes;
  }
  public putStaticV6Routes(value: SiteSegmentStaticRoutesStaticV6Routes[] | cdktf.IResolvable) {
    this._staticV6Routes.internalValue = value;
  }
  public resetStaticV6Routes() {
    this._staticV6Routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticV6RoutesInput() {
    return this._staticV6Routes.internalValue;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork = new SiteSegmentStaticRoutesVirtualNetworkList(this, "virtual_network", false);
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: SiteSegmentStaticRoutesVirtualNetwork[] | cdktf.IResolvable) {
    this._virtualNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      nameserver_v4: cdktf.stringToTerraform(this._nameserverV4),
      nameserver_v6: cdktf.stringToTerraform(this._nameserverV6),
      namespace: cdktf.stringToTerraform(this._namespace),
      secondary_nameserver_v4: cdktf.stringToTerraform(this._secondaryNameserverV4),
      secondary_nameserver_v6: cdktf.stringToTerraform(this._secondaryNameserverV6),
      site: cdktf.listMapper(siteSegmentStaticRoutesSiteToTerraform, true)(this._site.internalValue),
      static_routes: cdktf.listMapper(siteSegmentStaticRoutesStaticRoutesToTerraform, true)(this._staticRoutes.internalValue),
      static_v6_routes: cdktf.listMapper(siteSegmentStaticRoutesStaticV6RoutesToTerraform, true)(this._staticV6Routes.internalValue),
      virtual_network: cdktf.listMapper(siteSegmentStaticRoutesVirtualNetworkToTerraform, true)(this._virtualNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver_v4: {
        value: cdktf.stringToHclTerraform(this._nameserverV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameserver_v6: {
        value: cdktf.stringToHclTerraform(this._nameserverV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_nameserver_v4: {
        value: cdktf.stringToHclTerraform(this._secondaryNameserverV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_nameserver_v6: {
        value: cdktf.stringToHclTerraform(this._secondaryNameserverV6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: cdktf.listMapperHcl(siteSegmentStaticRoutesSiteToHclTerraform, true)(this._site.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteSegmentStaticRoutesSiteList",
      },
      static_routes: {
        value: cdktf.listMapperHcl(siteSegmentStaticRoutesStaticRoutesToHclTerraform, true)(this._staticRoutes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteSegmentStaticRoutesStaticRoutesList",
      },
      static_v6_routes: {
        value: cdktf.listMapperHcl(siteSegmentStaticRoutesStaticV6RoutesToHclTerraform, true)(this._staticV6Routes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteSegmentStaticRoutesStaticV6RoutesList",
      },
      virtual_network: {
        value: cdktf.listMapperHcl(siteSegmentStaticRoutesVirtualNetworkToHclTerraform, true)(this._virtualNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteSegmentStaticRoutesVirtualNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
