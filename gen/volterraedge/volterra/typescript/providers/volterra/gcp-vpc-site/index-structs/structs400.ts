import * as cdktf from 'cdktf';
import { GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface,
gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform,
gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform,
GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList,
GcpVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies,
gcpVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesToTerraform,
gcpVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesToHclTerraform,
GcpVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference,
GcpVpcSiteVoltstackClusterActiveForwardProxyPolicies,
gcpVpcSiteVoltstackClusterActiveForwardProxyPoliciesToTerraform,
gcpVpcSiteVoltstackClusterActiveForwardProxyPoliciesToHclTerraform,
GcpVpcSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference,
GcpVpcSiteVoltstackClusterActiveNetworkPolicies,
gcpVpcSiteVoltstackClusterActiveNetworkPoliciesToTerraform,
gcpVpcSiteVoltstackClusterActiveNetworkPoliciesToHclTerraform,
GcpVpcSiteVoltstackClusterActiveNetworkPoliciesOutputReference,
GcpVpcSiteVoltstackClusterDcClusterGroup,
gcpVpcSiteVoltstackClusterDcClusterGroupToTerraform,
gcpVpcSiteVoltstackClusterDcClusterGroupToHclTerraform,
GcpVpcSiteVoltstackClusterDcClusterGroupOutputReference,
GcpVpcSiteVoltstackClusterGlobalNetworkListStruct,
gcpVpcSiteVoltstackClusterGlobalNetworkListStructToTerraform,
gcpVpcSiteVoltstackClusterGlobalNetworkListStructToHclTerraform,
GcpVpcSiteVoltstackClusterGlobalNetworkListStructOutputReference,
GcpVpcSiteVoltstackClusterK8SCluster,
gcpVpcSiteVoltstackClusterK8SClusterToTerraform,
gcpVpcSiteVoltstackClusterK8SClusterToHclTerraform,
GcpVpcSiteVoltstackClusterK8SClusterOutputReference } from './structs0'
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#addr GcpVpcSite#addr}
  */
  readonly addr?: string;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4): any {
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

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4 | undefined) {
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
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#addr GcpVpcSite#addr}
  */
  readonly addr?: string;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6): any {
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

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6 | undefined) {
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
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#ipv4 GcpVpcSite#ipv4}
  */
  readonly ipv4?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#ipv6 GcpVpcSite#ipv6}
  */
  readonly ipv6?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToTerraform(struct!.ipv4),
    ipv6: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToTerraform(struct!.ipv6),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4List",
    },
    ipv6: {
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined {
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

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress | undefined) {
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
  private _ipv4 = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv4) {
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
  private _ipv6 = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressIpv6) {
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
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#type GcpVpcSite#type}
  */
  readonly type?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#interface GcpVpcSite#interface}
  */
  readonly interface?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable;
  /**
  * nexthop_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#nexthop_address GcpVpcSite#nexthop_address}
  */
  readonly nexthopAddress?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    interface: cdktf.listMapper(gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToTerraform, true)(struct!.interface),
    nexthop_address: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToTerraform(struct!.nexthopAddress),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop): any {
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
      value: cdktf.listMapperHcl(gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList",
    },
    nexthop_address: {
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressToHclTerraform(struct!.nexthopAddress),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined {
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

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop | undefined) {
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
  private _interface = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopInterface[] | cdktf.IResolvable) {
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
  private _nexthopAddress = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddressOutputReference(this, "nexthop_address");
  public get nexthopAddress() {
    return this._nexthopAddress;
  }
  public putNexthopAddress(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopNexthopAddress) {
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
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#plen GcpVpcSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#prefix GcpVpcSite#prefix}
  */
  readonly prefix?: string;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4): any {
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

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined {
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

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4 | undefined) {
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
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#plen GcpVpcSite#plen}
  */
  readonly plen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#prefix GcpVpcSite#prefix}
  */
  readonly prefix?: string;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plen: cdktf.numberToTerraform(struct!.plen),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6): any {
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

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined {
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

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6 | undefined) {
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
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#ipv4 GcpVpcSite#ipv4}
  */
  readonly ipv4?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#ipv6 GcpVpcSite#ipv6}
  */
  readonly ipv6?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToTerraform(struct!.ipv4),
    ipv6: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToTerraform(struct!.ipv6),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4List",
    },
    ipv6: {
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets | cdktf.IResolvable | undefined) {
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
  private _ipv4 = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv4) {
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
  private _ipv6 = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsIpv6) {
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

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList extends cdktf.ComplexList {
  public internalValue? : GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable

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
  public get(index: number): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference {
    return new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#attrs GcpVpcSite#attrs}
  */
  readonly attrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#labels GcpVpcSite#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * nexthop block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#nexthop GcpVpcSite#nexthop}
  */
  readonly nexthop?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop;
  /**
  * subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#subnets GcpVpcSite#subnets}
  */
  readonly subnets: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attrs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    nexthop: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToTerraform(struct!.nexthop),
    subnets: cdktf.listMapper(gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToTerraform, true)(struct!.subnets),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute): any {
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
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopToHclTerraform(struct!.nexthop),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopList",
    },
    subnets: {
      value: cdktf.listMapperHcl(gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsToHclTerraform, true)(struct!.subnets),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined {
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

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attrs = undefined;
      this._labels = undefined;
      this._nexthop.internalValue = undefined;
      this._subnets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _nexthop = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthopOutputReference(this, "nexthop");
  public get nexthop() {
    return this._nexthop;
  }
  public putNexthop(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteNexthop) {
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
  private _subnets = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnetsList(this, "subnets", false);
  public get subnets() {
    return this._subnets;
  }
  public putSubnets(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteSubnets[] | cdktf.IResolvable) {
    this._subnets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets.internalValue;
  }
}
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#simple_static_route GcpVpcSite#simple_static_route}
  */
  readonly simpleStaticRoute?: string;
  /**
  * custom_static_route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#custom_static_route GcpVpcSite#custom_static_route}
  */
  readonly customStaticRoute?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_static_route: cdktf.stringToTerraform(struct!.simpleStaticRoute),
    custom_static_route: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToTerraform(struct!.customStaticRoute),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_static_route: {
      value: cdktf.stringToHclTerraform(struct!.simpleStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_static_route: {
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteToHclTerraform(struct!.customStaticRoute),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleStaticRoute = this._simpleStaticRoute;
    }
    if (this._customStaticRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customStaticRoute = this._customStaticRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = undefined;
      this._customStaticRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._simpleStaticRoute = value.simpleStaticRoute;
      this._customStaticRoute.internalValue = value.customStaticRoute;
    }
  }

  // simple_static_route - computed: false, optional: true, required: false
  private _simpleStaticRoute?: string; 
  public get simpleStaticRoute() {
    return this.getStringAttribute('simple_static_route');
  }
  public set simpleStaticRoute(value: string) {
    this._simpleStaticRoute = value;
  }
  public resetSimpleStaticRoute() {
    this._simpleStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleStaticRouteInput() {
    return this._simpleStaticRoute;
  }

  // custom_static_route - computed: false, optional: true, required: false
  private _customStaticRoute = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRouteOutputReference(this, "custom_static_route");
  public get customStaticRoute() {
    return this._customStaticRoute;
  }
  public putCustomStaticRoute(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListCustomStaticRoute) {
    this._customStaticRoute.internalValue = value;
  }
  public resetCustomStaticRoute() {
    this._customStaticRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customStaticRouteInput() {
    return this._customStaticRoute.internalValue;
  }
}

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructList extends cdktf.ComplexList {
  public internalValue? : GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable

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
  public get(index: number): GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructOutputReference {
    return new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpVpcSiteVoltstackClusterOutsideStaticRoutes {
  /**
  * static_route_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#static_route_list GcpVpcSite#static_route_list}
  */
  readonly staticRouteList: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable;
}

export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesToTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_route_list: cdktf.listMapper(gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToTerraform, true)(struct!.staticRouteList),
  }
}


export function gcpVpcSiteVoltstackClusterOutsideStaticRoutesToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutsideStaticRoutesOutputReference | GcpVpcSiteVoltstackClusterOutsideStaticRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_route_list: {
      value: cdktf.listMapperHcl(gcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructToHclTerraform, true)(struct!.staticRouteList),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterOutsideStaticRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterOutsideStaticRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticRouteList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRouteList = this._staticRouteList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticRouteList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticRouteList.internalValue = value.staticRouteList;
    }
  }

  // static_route_list - computed: false, optional: false, required: true
  private _staticRouteList = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStructList(this, "static_route_list", false);
  public get staticRouteList() {
    return this._staticRouteList;
  }
  public putStaticRouteList(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutesStaticRouteListStruct[] | cdktf.IResolvable) {
    this._staticRouteList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteListInput() {
    return this._staticRouteList.internalValue;
  }
}
export interface GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#f5_orchestrated_routing GcpVpcSite#f5_orchestrated_routing}
  */
  readonly f5OrchestratedRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#manual_routing GcpVpcSite#manual_routing}
  */
  readonly manualRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#name GcpVpcSite#name}
  */
  readonly name: string;
}

export function gcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkToTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_orchestrated_routing: cdktf.booleanToTerraform(struct!.f5OrchestratedRouting),
    manual_routing: cdktf.booleanToTerraform(struct!.manualRouting),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkToHclTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_orchestrated_routing: {
      value: cdktf.booleanToHclTerraform(struct!.f5OrchestratedRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_routing: {
      value: cdktf.booleanToHclTerraform(struct!.manualRouting),
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

export class GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5OrchestratedRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5OrchestratedRouting = this._f5OrchestratedRouting;
    }
    if (this._manualRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualRouting = this._manualRouting;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5OrchestratedRouting = undefined;
      this._manualRouting = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5OrchestratedRouting = value.f5OrchestratedRouting;
      this._manualRouting = value.manualRouting;
      this._name = value.name;
    }
  }

  // f5_orchestrated_routing - computed: false, optional: true, required: false
  private _f5OrchestratedRouting?: boolean | cdktf.IResolvable; 
  public get f5OrchestratedRouting() {
    return this.getBooleanAttribute('f5_orchestrated_routing');
  }
  public set f5OrchestratedRouting(value: boolean | cdktf.IResolvable) {
    this._f5OrchestratedRouting = value;
  }
  public resetF5OrchestratedRouting() {
    this._f5OrchestratedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5OrchestratedRoutingInput() {
    return this._f5OrchestratedRouting;
  }

  // manual_routing - computed: false, optional: true, required: false
  private _manualRouting?: boolean | cdktf.IResolvable; 
  public get manualRouting() {
    return this.getBooleanAttribute('manual_routing');
  }
  public set manualRouting(value: boolean | cdktf.IResolvable) {
    this._manualRouting = value;
  }
  public resetManualRouting() {
    this._manualRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRoutingInput() {
    return this._manualRouting;
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
export interface GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#name GcpVpcSite#name}
  */
  readonly name: string;
}

export function gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkToTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkToHclTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetwork): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#autogenerate GcpVpcSite#autogenerate}
  */
  readonly autogenerate?: boolean | cdktf.IResolvable;
}

export function gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateToTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autogenerate: cdktf.booleanToTerraform(struct!.autogenerate),
  }
}


export function gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateToHclTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autogenerate: {
      value: cdktf.booleanToHclTerraform(struct!.autogenerate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autogenerate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autogenerate = this._autogenerate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autogenerate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autogenerate = value.autogenerate;
    }
  }

  // autogenerate - computed: false, optional: true, required: false
  private _autogenerate?: boolean | cdktf.IResolvable; 
  public get autogenerate() {
    return this.getBooleanAttribute('autogenerate');
  }
  public set autogenerate(value: boolean | cdktf.IResolvable) {
    this._autogenerate = value;
  }
  public resetAutogenerate() {
    this._autogenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autogenerateInput() {
    return this._autogenerate;
  }
}
export interface GcpVpcSiteVoltstackClusterSiteLocalNetwork {
  /**
  * existing_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#existing_network GcpVpcSite#existing_network}
  */
  readonly existingNetwork?: GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetwork;
  /**
  * new_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#new_network GcpVpcSite#new_network}
  */
  readonly newNetwork?: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetwork;
  /**
  * new_network_autogenerate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#new_network_autogenerate GcpVpcSite#new_network_autogenerate}
  */
  readonly newNetworkAutogenerate?: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerate;
}

export function gcpVpcSiteVoltstackClusterSiteLocalNetworkToTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_network: gcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkToTerraform(struct!.existingNetwork),
    new_network: gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkToTerraform(struct!.newNetwork),
    new_network_autogenerate: gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateToTerraform(struct!.newNetworkAutogenerate),
  }
}


export function gcpVpcSiteVoltstackClusterSiteLocalNetworkToHclTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalNetworkOutputReference | GcpVpcSiteVoltstackClusterSiteLocalNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_network: {
      value: gcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkToHclTerraform(struct!.existingNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkList",
    },
    new_network: {
      value: gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkToHclTerraform(struct!.newNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkList",
    },
    new_network_autogenerate: {
      value: gcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateToHclTerraform(struct!.newNetworkAutogenerate),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterSiteLocalNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterSiteLocalNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingNetwork = this._existingNetwork?.internalValue;
    }
    if (this._newNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newNetwork = this._newNetwork?.internalValue;
    }
    if (this._newNetworkAutogenerate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newNetworkAutogenerate = this._newNetworkAutogenerate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterSiteLocalNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingNetwork.internalValue = undefined;
      this._newNetwork.internalValue = undefined;
      this._newNetworkAutogenerate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingNetwork.internalValue = value.existingNetwork;
      this._newNetwork.internalValue = value.newNetwork;
      this._newNetworkAutogenerate.internalValue = value.newNetworkAutogenerate;
    }
  }

  // existing_network - computed: false, optional: true, required: false
  private _existingNetwork = new GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetworkOutputReference(this, "existing_network");
  public get existingNetwork() {
    return this._existingNetwork;
  }
  public putExistingNetwork(value: GcpVpcSiteVoltstackClusterSiteLocalNetworkExistingNetwork) {
    this._existingNetwork.internalValue = value;
  }
  public resetExistingNetwork() {
    this._existingNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingNetworkInput() {
    return this._existingNetwork.internalValue;
  }

  // new_network - computed: false, optional: true, required: false
  private _newNetwork = new GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkOutputReference(this, "new_network");
  public get newNetwork() {
    return this._newNetwork;
  }
  public putNewNetwork(value: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetwork) {
    this._newNetwork.internalValue = value;
  }
  public resetNewNetwork() {
    this._newNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNetworkInput() {
    return this._newNetwork.internalValue;
  }

  // new_network_autogenerate - computed: false, optional: true, required: false
  private _newNetworkAutogenerate = new GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerateOutputReference(this, "new_network_autogenerate");
  public get newNetworkAutogenerate() {
    return this._newNetworkAutogenerate;
  }
  public putNewNetworkAutogenerate(value: GcpVpcSiteVoltstackClusterSiteLocalNetworkNewNetworkAutogenerate) {
    this._newNetworkAutogenerate.internalValue = value;
  }
  public resetNewNetworkAutogenerate() {
    this._newNetworkAutogenerate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newNetworkAutogenerateInput() {
    return this._newNetworkAutogenerate.internalValue;
  }
}
export interface GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#subnet_name GcpVpcSite#subnet_name}
  */
  readonly subnetName: string;
}

export function gcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetToTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetOutputReference | GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
  }
}


export function gcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetToHclTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetOutputReference | GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetName = value.subnetName;
    }
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }
}
export interface GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#primary_ipv4 GcpVpcSite#primary_ipv4}
  */
  readonly primaryIpv4: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#subnet_name GcpVpcSite#subnet_name}
  */
  readonly subnetName?: string;
}

export function gcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetToTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetOutputReference | GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_ipv4: cdktf.stringToTerraform(struct!.primaryIpv4),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
  }
}


export function gcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetToHclTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetOutputReference | GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.primaryIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_name: {
      value: cdktf.stringToHclTerraform(struct!.subnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpv4 = this._primaryIpv4;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primaryIpv4 = undefined;
      this._subnetName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primaryIpv4 = value.primaryIpv4;
      this._subnetName = value.subnetName;
    }
  }

  // primary_ipv4 - computed: false, optional: false, required: true
  private _primaryIpv4?: string; 
  public get primaryIpv4() {
    return this.getStringAttribute('primary_ipv4');
  }
  public set primaryIpv4(value: string) {
    this._primaryIpv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpv4Input() {
    return this._primaryIpv4;
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }
}
export interface GcpVpcSiteVoltstackClusterSiteLocalSubnet {
  /**
  * existing_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#existing_subnet GcpVpcSite#existing_subnet}
  */
  readonly existingSubnet?: GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnet;
  /**
  * new_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#new_subnet GcpVpcSite#new_subnet}
  */
  readonly newSubnet?: GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnet;
}

export function gcpVpcSiteVoltstackClusterSiteLocalSubnetToTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalSubnetOutputReference | GcpVpcSiteVoltstackClusterSiteLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    existing_subnet: gcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetToTerraform(struct!.existingSubnet),
    new_subnet: gcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetToTerraform(struct!.newSubnet),
  }
}


export function gcpVpcSiteVoltstackClusterSiteLocalSubnetToHclTerraform(struct?: GcpVpcSiteVoltstackClusterSiteLocalSubnetOutputReference | GcpVpcSiteVoltstackClusterSiteLocalSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    existing_subnet: {
      value: gcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetToHclTerraform(struct!.existingSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetList",
    },
    new_subnet: {
      value: gcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetToHclTerraform(struct!.newSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterSiteLocalSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterSiteLocalSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existingSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingSubnet = this._existingSubnet?.internalValue;
    }
    if (this._newSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSubnet = this._newSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterSiteLocalSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._existingSubnet.internalValue = undefined;
      this._newSubnet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._existingSubnet.internalValue = value.existingSubnet;
      this._newSubnet.internalValue = value.newSubnet;
    }
  }

  // existing_subnet - computed: false, optional: true, required: false
  private _existingSubnet = new GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnetOutputReference(this, "existing_subnet");
  public get existingSubnet() {
    return this._existingSubnet;
  }
  public putExistingSubnet(value: GcpVpcSiteVoltstackClusterSiteLocalSubnetExistingSubnet) {
    this._existingSubnet.internalValue = value;
  }
  public resetExistingSubnet() {
    this._existingSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSubnetInput() {
    return this._existingSubnet.internalValue;
  }

  // new_subnet - computed: false, optional: true, required: false
  private _newSubnet = new GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnetOutputReference(this, "new_subnet");
  public get newSubnet() {
    return this._newSubnet;
  }
  public putNewSubnet(value: GcpVpcSiteVoltstackClusterSiteLocalSubnetNewSubnet) {
    this._newSubnet.internalValue = value;
  }
  public resetNewSubnet() {
    this._newSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSubnetInput() {
    return this._newSubnet.internalValue;
  }
}
export interface GcpVpcSiteVoltstackClusterStorageClassListStorageClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#default_storage_class GcpVpcSite#default_storage_class}
  */
  readonly defaultStorageClass?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#storage_class_name GcpVpcSite#storage_class_name}
  */
  readonly storageClassName: string;
}

export function gcpVpcSiteVoltstackClusterStorageClassListStorageClassesToTerraform(struct?: GcpVpcSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_storage_class: cdktf.booleanToTerraform(struct!.defaultStorageClass),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
  }
}


export function gcpVpcSiteVoltstackClusterStorageClassListStorageClassesToHclTerraform(struct?: GcpVpcSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_storage_class: {
      value: cdktf.booleanToHclTerraform(struct!.defaultStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterStorageClassListStorageClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpVpcSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorageClass = this._defaultStorageClass;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterStorageClassListStorageClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultStorageClass = undefined;
      this._storageClassName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultStorageClass = value.defaultStorageClass;
      this._storageClassName = value.storageClassName;
    }
  }

  // default_storage_class - computed: false, optional: true, required: false
  private _defaultStorageClass?: boolean | cdktf.IResolvable; 
  public get defaultStorageClass() {
    return this.getBooleanAttribute('default_storage_class');
  }
  public set defaultStorageClass(value: boolean | cdktf.IResolvable) {
    this._defaultStorageClass = value;
  }
  public resetDefaultStorageClass() {
    this._defaultStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageClassInput() {
    return this._defaultStorageClass;
  }

  // storage_class_name - computed: false, optional: false, required: true
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }
}

export class GcpVpcSiteVoltstackClusterStorageClassListStorageClassesList extends cdktf.ComplexList {
  public internalValue? : GcpVpcSiteVoltstackClusterStorageClassListStorageClasses[] | cdktf.IResolvable

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
  public get(index: number): GcpVpcSiteVoltstackClusterStorageClassListStorageClassesOutputReference {
    return new GcpVpcSiteVoltstackClusterStorageClassListStorageClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GcpVpcSiteVoltstackClusterStorageClassListStruct {
  /**
  * storage_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#storage_classes GcpVpcSite#storage_classes}
  */
  readonly storageClasses?: GcpVpcSiteVoltstackClusterStorageClassListStorageClasses[] | cdktf.IResolvable;
}

export function gcpVpcSiteVoltstackClusterStorageClassListStructToTerraform(struct?: GcpVpcSiteVoltstackClusterStorageClassListStructOutputReference | GcpVpcSiteVoltstackClusterStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage_classes: cdktf.listMapper(gcpVpcSiteVoltstackClusterStorageClassListStorageClassesToTerraform, true)(struct!.storageClasses),
  }
}


export function gcpVpcSiteVoltstackClusterStorageClassListStructToHclTerraform(struct?: GcpVpcSiteVoltstackClusterStorageClassListStructOutputReference | GcpVpcSiteVoltstackClusterStorageClassListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage_classes: {
      value: cdktf.listMapperHcl(gcpVpcSiteVoltstackClusterStorageClassListStorageClassesToHclTerraform, true)(struct!.storageClasses),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterStorageClassListStorageClassesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterStorageClassListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackClusterStorageClassListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storageClasses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClasses = this._storageClasses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackClusterStorageClassListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._storageClasses.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._storageClasses.internalValue = value.storageClasses;
    }
  }

  // storage_classes - computed: false, optional: true, required: false
  private _storageClasses = new GcpVpcSiteVoltstackClusterStorageClassListStorageClassesList(this, "storage_classes", false);
  public get storageClasses() {
    return this._storageClasses;
  }
  public putStorageClasses(value: GcpVpcSiteVoltstackClusterStorageClassListStorageClasses[] | cdktf.IResolvable) {
    this._storageClasses.internalValue = value;
  }
  public resetStorageClasses() {
    this._storageClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassesInput() {
    return this._storageClasses.internalValue;
  }
}
export interface GcpVpcSiteVoltstackCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#default_storage GcpVpcSite#default_storage}
  */
  readonly defaultStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#forward_proxy_allow_all GcpVpcSite#forward_proxy_allow_all}
  */
  readonly forwardProxyAllowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#gcp_certified_hw GcpVpcSite#gcp_certified_hw}
  */
  readonly gcpCertifiedHw: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#gcp_zone_names GcpVpcSite#gcp_zone_names}
  */
  readonly gcpZoneNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#no_dc_cluster_group GcpVpcSite#no_dc_cluster_group}
  */
  readonly noDcClusterGroup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#no_forward_proxy GcpVpcSite#no_forward_proxy}
  */
  readonly noForwardProxy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#no_global_network GcpVpcSite#no_global_network}
  */
  readonly noGlobalNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#no_k8s_cluster GcpVpcSite#no_k8s_cluster}
  */
  readonly noK8SCluster?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#no_network_policy GcpVpcSite#no_network_policy}
  */
  readonly noNetworkPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#no_outside_static_routes GcpVpcSite#no_outside_static_routes}
  */
  readonly noOutsideStaticRoutes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#node_number GcpVpcSite#node_number}
  */
  readonly nodeNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#sm_connection_public_ip GcpVpcSite#sm_connection_public_ip}
  */
  readonly smConnectionPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#sm_connection_pvt_ip GcpVpcSite#sm_connection_pvt_ip}
  */
  readonly smConnectionPvtIp?: boolean | cdktf.IResolvable;
  /**
  * active_enhanced_firewall_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#active_enhanced_firewall_policies GcpVpcSite#active_enhanced_firewall_policies}
  */
  readonly activeEnhancedFirewallPolicies?: GcpVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies;
  /**
  * active_forward_proxy_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#active_forward_proxy_policies GcpVpcSite#active_forward_proxy_policies}
  */
  readonly activeForwardProxyPolicies?: GcpVpcSiteVoltstackClusterActiveForwardProxyPolicies;
  /**
  * active_network_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#active_network_policies GcpVpcSite#active_network_policies}
  */
  readonly activeNetworkPolicies?: GcpVpcSiteVoltstackClusterActiveNetworkPolicies;
  /**
  * dc_cluster_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#dc_cluster_group GcpVpcSite#dc_cluster_group}
  */
  readonly dcClusterGroup?: GcpVpcSiteVoltstackClusterDcClusterGroup;
  /**
  * global_network_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#global_network_list GcpVpcSite#global_network_list}
  */
  readonly globalNetworkList?: GcpVpcSiteVoltstackClusterGlobalNetworkListStruct;
  /**
  * k8s_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#k8s_cluster GcpVpcSite#k8s_cluster}
  */
  readonly k8SCluster?: GcpVpcSiteVoltstackClusterK8SCluster;
  /**
  * outside_static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#outside_static_routes GcpVpcSite#outside_static_routes}
  */
  readonly outsideStaticRoutes?: GcpVpcSiteVoltstackClusterOutsideStaticRoutes;
  /**
  * site_local_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#site_local_network GcpVpcSite#site_local_network}
  */
  readonly siteLocalNetwork?: GcpVpcSiteVoltstackClusterSiteLocalNetwork;
  /**
  * site_local_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#site_local_subnet GcpVpcSite#site_local_subnet}
  */
  readonly siteLocalSubnet?: GcpVpcSiteVoltstackClusterSiteLocalSubnet;
  /**
  * storage_class_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/gcp_vpc_site#storage_class_list GcpVpcSite#storage_class_list}
  */
  readonly storageClassList?: GcpVpcSiteVoltstackClusterStorageClassListStruct;
}

export function gcpVpcSiteVoltstackClusterToTerraform(struct?: GcpVpcSiteVoltstackClusterOutputReference | GcpVpcSiteVoltstackCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_storage: cdktf.booleanToTerraform(struct!.defaultStorage),
    forward_proxy_allow_all: cdktf.booleanToTerraform(struct!.forwardProxyAllowAll),
    gcp_certified_hw: cdktf.stringToTerraform(struct!.gcpCertifiedHw),
    gcp_zone_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gcpZoneNames),
    no_dc_cluster_group: cdktf.booleanToTerraform(struct!.noDcClusterGroup),
    no_forward_proxy: cdktf.booleanToTerraform(struct!.noForwardProxy),
    no_global_network: cdktf.booleanToTerraform(struct!.noGlobalNetwork),
    no_k8s_cluster: cdktf.booleanToTerraform(struct!.noK8SCluster),
    no_network_policy: cdktf.booleanToTerraform(struct!.noNetworkPolicy),
    no_outside_static_routes: cdktf.booleanToTerraform(struct!.noOutsideStaticRoutes),
    node_number: cdktf.numberToTerraform(struct!.nodeNumber),
    sm_connection_public_ip: cdktf.booleanToTerraform(struct!.smConnectionPublicIp),
    sm_connection_pvt_ip: cdktf.booleanToTerraform(struct!.smConnectionPvtIp),
    active_enhanced_firewall_policies: gcpVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesToTerraform(struct!.activeEnhancedFirewallPolicies),
    active_forward_proxy_policies: gcpVpcSiteVoltstackClusterActiveForwardProxyPoliciesToTerraform(struct!.activeForwardProxyPolicies),
    active_network_policies: gcpVpcSiteVoltstackClusterActiveNetworkPoliciesToTerraform(struct!.activeNetworkPolicies),
    dc_cluster_group: gcpVpcSiteVoltstackClusterDcClusterGroupToTerraform(struct!.dcClusterGroup),
    global_network_list: gcpVpcSiteVoltstackClusterGlobalNetworkListStructToTerraform(struct!.globalNetworkList),
    k8s_cluster: gcpVpcSiteVoltstackClusterK8SClusterToTerraform(struct!.k8SCluster),
    outside_static_routes: gcpVpcSiteVoltstackClusterOutsideStaticRoutesToTerraform(struct!.outsideStaticRoutes),
    site_local_network: gcpVpcSiteVoltstackClusterSiteLocalNetworkToTerraform(struct!.siteLocalNetwork),
    site_local_subnet: gcpVpcSiteVoltstackClusterSiteLocalSubnetToTerraform(struct!.siteLocalSubnet),
    storage_class_list: gcpVpcSiteVoltstackClusterStorageClassListStructToTerraform(struct!.storageClassList),
  }
}


export function gcpVpcSiteVoltstackClusterToHclTerraform(struct?: GcpVpcSiteVoltstackClusterOutputReference | GcpVpcSiteVoltstackCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_storage: {
      value: cdktf.booleanToHclTerraform(struct!.defaultStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_proxy_allow_all: {
      value: cdktf.booleanToHclTerraform(struct!.forwardProxyAllowAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gcp_certified_hw: {
      value: cdktf.stringToHclTerraform(struct!.gcpCertifiedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_zone_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gcpZoneNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    no_dc_cluster_group: {
      value: cdktf.booleanToHclTerraform(struct!.noDcClusterGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_forward_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.noForwardProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_global_network: {
      value: cdktf.booleanToHclTerraform(struct!.noGlobalNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_k8s_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.noK8SCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_network_policy: {
      value: cdktf.booleanToHclTerraform(struct!.noNetworkPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_outside_static_routes: {
      value: cdktf.booleanToHclTerraform(struct!.noOutsideStaticRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_number: {
      value: cdktf.numberToHclTerraform(struct!.nodeNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sm_connection_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sm_connection_pvt_ip: {
      value: cdktf.booleanToHclTerraform(struct!.smConnectionPvtIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    active_enhanced_firewall_policies: {
      value: gcpVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesToHclTerraform(struct!.activeEnhancedFirewallPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesList",
    },
    active_forward_proxy_policies: {
      value: gcpVpcSiteVoltstackClusterActiveForwardProxyPoliciesToHclTerraform(struct!.activeForwardProxyPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterActiveForwardProxyPoliciesList",
    },
    active_network_policies: {
      value: gcpVpcSiteVoltstackClusterActiveNetworkPoliciesToHclTerraform(struct!.activeNetworkPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterActiveNetworkPoliciesList",
    },
    dc_cluster_group: {
      value: gcpVpcSiteVoltstackClusterDcClusterGroupToHclTerraform(struct!.dcClusterGroup),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterDcClusterGroupList",
    },
    global_network_list: {
      value: gcpVpcSiteVoltstackClusterGlobalNetworkListStructToHclTerraform(struct!.globalNetworkList),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterGlobalNetworkListStructList",
    },
    k8s_cluster: {
      value: gcpVpcSiteVoltstackClusterK8SClusterToHclTerraform(struct!.k8SCluster),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterK8SClusterList",
    },
    outside_static_routes: {
      value: gcpVpcSiteVoltstackClusterOutsideStaticRoutesToHclTerraform(struct!.outsideStaticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterOutsideStaticRoutesList",
    },
    site_local_network: {
      value: gcpVpcSiteVoltstackClusterSiteLocalNetworkToHclTerraform(struct!.siteLocalNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterSiteLocalNetworkList",
    },
    site_local_subnet: {
      value: gcpVpcSiteVoltstackClusterSiteLocalSubnetToHclTerraform(struct!.siteLocalSubnet),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterSiteLocalSubnetList",
    },
    storage_class_list: {
      value: gcpVpcSiteVoltstackClusterStorageClassListStructToHclTerraform(struct!.storageClassList),
      isBlock: true,
      type: "list",
      storageClassType: "GcpVpcSiteVoltstackClusterStorageClassListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpVpcSiteVoltstackClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GcpVpcSiteVoltstackCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorage = this._defaultStorage;
    }
    if (this._forwardProxyAllowAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardProxyAllowAll = this._forwardProxyAllowAll;
    }
    if (this._gcpCertifiedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpCertifiedHw = this._gcpCertifiedHw;
    }
    if (this._gcpZoneNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpZoneNames = this._gcpZoneNames;
    }
    if (this._noDcClusterGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDcClusterGroup = this._noDcClusterGroup;
    }
    if (this._noForwardProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noForwardProxy = this._noForwardProxy;
    }
    if (this._noGlobalNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGlobalNetwork = this._noGlobalNetwork;
    }
    if (this._noK8SCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.noK8SCluster = this._noK8SCluster;
    }
    if (this._noNetworkPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNetworkPolicy = this._noNetworkPolicy;
    }
    if (this._noOutsideStaticRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOutsideStaticRoutes = this._noOutsideStaticRoutes;
    }
    if (this._nodeNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNumber = this._nodeNumber;
    }
    if (this._smConnectionPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPublicIp = this._smConnectionPublicIp;
    }
    if (this._smConnectionPvtIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smConnectionPvtIp = this._smConnectionPvtIp;
    }
    if (this._activeEnhancedFirewallPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeEnhancedFirewallPolicies = this._activeEnhancedFirewallPolicies?.internalValue;
    }
    if (this._activeForwardProxyPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeForwardProxyPolicies = this._activeForwardProxyPolicies?.internalValue;
    }
    if (this._activeNetworkPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeNetworkPolicies = this._activeNetworkPolicies?.internalValue;
    }
    if (this._dcClusterGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcClusterGroup = this._dcClusterGroup?.internalValue;
    }
    if (this._globalNetworkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalNetworkList = this._globalNetworkList?.internalValue;
    }
    if (this._k8SCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SCluster = this._k8SCluster?.internalValue;
    }
    if (this._outsideStaticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideStaticRoutes = this._outsideStaticRoutes?.internalValue;
    }
    if (this._siteLocalNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalNetwork = this._siteLocalNetwork?.internalValue;
    }
    if (this._siteLocalSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteLocalSubnet = this._siteLocalSubnet?.internalValue;
    }
    if (this._storageClassList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassList = this._storageClassList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpVpcSiteVoltstackCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultStorage = undefined;
      this._forwardProxyAllowAll = undefined;
      this._gcpCertifiedHw = undefined;
      this._gcpZoneNames = undefined;
      this._noDcClusterGroup = undefined;
      this._noForwardProxy = undefined;
      this._noGlobalNetwork = undefined;
      this._noK8SCluster = undefined;
      this._noNetworkPolicy = undefined;
      this._noOutsideStaticRoutes = undefined;
      this._nodeNumber = undefined;
      this._smConnectionPublicIp = undefined;
      this._smConnectionPvtIp = undefined;
      this._activeEnhancedFirewallPolicies.internalValue = undefined;
      this._activeForwardProxyPolicies.internalValue = undefined;
      this._activeNetworkPolicies.internalValue = undefined;
      this._dcClusterGroup.internalValue = undefined;
      this._globalNetworkList.internalValue = undefined;
      this._k8SCluster.internalValue = undefined;
      this._outsideStaticRoutes.internalValue = undefined;
      this._siteLocalNetwork.internalValue = undefined;
      this._siteLocalSubnet.internalValue = undefined;
      this._storageClassList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultStorage = value.defaultStorage;
      this._forwardProxyAllowAll = value.forwardProxyAllowAll;
      this._gcpCertifiedHw = value.gcpCertifiedHw;
      this._gcpZoneNames = value.gcpZoneNames;
      this._noDcClusterGroup = value.noDcClusterGroup;
      this._noForwardProxy = value.noForwardProxy;
      this._noGlobalNetwork = value.noGlobalNetwork;
      this._noK8SCluster = value.noK8SCluster;
      this._noNetworkPolicy = value.noNetworkPolicy;
      this._noOutsideStaticRoutes = value.noOutsideStaticRoutes;
      this._nodeNumber = value.nodeNumber;
      this._smConnectionPublicIp = value.smConnectionPublicIp;
      this._smConnectionPvtIp = value.smConnectionPvtIp;
      this._activeEnhancedFirewallPolicies.internalValue = value.activeEnhancedFirewallPolicies;
      this._activeForwardProxyPolicies.internalValue = value.activeForwardProxyPolicies;
      this._activeNetworkPolicies.internalValue = value.activeNetworkPolicies;
      this._dcClusterGroup.internalValue = value.dcClusterGroup;
      this._globalNetworkList.internalValue = value.globalNetworkList;
      this._k8SCluster.internalValue = value.k8SCluster;
      this._outsideStaticRoutes.internalValue = value.outsideStaticRoutes;
      this._siteLocalNetwork.internalValue = value.siteLocalNetwork;
      this._siteLocalSubnet.internalValue = value.siteLocalSubnet;
      this._storageClassList.internalValue = value.storageClassList;
    }
  }

  // default_storage - computed: false, optional: true, required: false
  private _defaultStorage?: boolean | cdktf.IResolvable; 
  public get defaultStorage() {
    return this.getBooleanAttribute('default_storage');
  }
  public set defaultStorage(value: boolean | cdktf.IResolvable) {
    this._defaultStorage = value;
  }
  public resetDefaultStorage() {
    this._defaultStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageInput() {
    return this._defaultStorage;
  }

  // forward_proxy_allow_all - computed: false, optional: true, required: false
  private _forwardProxyAllowAll?: boolean | cdktf.IResolvable; 
  public get forwardProxyAllowAll() {
    return this.getBooleanAttribute('forward_proxy_allow_all');
  }
  public set forwardProxyAllowAll(value: boolean | cdktf.IResolvable) {
    this._forwardProxyAllowAll = value;
  }
  public resetForwardProxyAllowAll() {
    this._forwardProxyAllowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardProxyAllowAllInput() {
    return this._forwardProxyAllowAll;
  }

  // gcp_certified_hw - computed: false, optional: false, required: true
  private _gcpCertifiedHw?: string; 
  public get gcpCertifiedHw() {
    return this.getStringAttribute('gcp_certified_hw');
  }
  public set gcpCertifiedHw(value: string) {
    this._gcpCertifiedHw = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpCertifiedHwInput() {
    return this._gcpCertifiedHw;
  }

  // gcp_zone_names - computed: false, optional: false, required: true
  private _gcpZoneNames?: string[]; 
  public get gcpZoneNames() {
    return this.getListAttribute('gcp_zone_names');
  }
  public set gcpZoneNames(value: string[]) {
    this._gcpZoneNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpZoneNamesInput() {
    return this._gcpZoneNames;
  }

  // no_dc_cluster_group - computed: false, optional: true, required: false
  private _noDcClusterGroup?: boolean | cdktf.IResolvable; 
  public get noDcClusterGroup() {
    return this.getBooleanAttribute('no_dc_cluster_group');
  }
  public set noDcClusterGroup(value: boolean | cdktf.IResolvable) {
    this._noDcClusterGroup = value;
  }
  public resetNoDcClusterGroup() {
    this._noDcClusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDcClusterGroupInput() {
    return this._noDcClusterGroup;
  }

  // no_forward_proxy - computed: false, optional: true, required: false
  private _noForwardProxy?: boolean | cdktf.IResolvable; 
  public get noForwardProxy() {
    return this.getBooleanAttribute('no_forward_proxy');
  }
  public set noForwardProxy(value: boolean | cdktf.IResolvable) {
    this._noForwardProxy = value;
  }
  public resetNoForwardProxy() {
    this._noForwardProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noForwardProxyInput() {
    return this._noForwardProxy;
  }

  // no_global_network - computed: false, optional: true, required: false
  private _noGlobalNetwork?: boolean | cdktf.IResolvable; 
  public get noGlobalNetwork() {
    return this.getBooleanAttribute('no_global_network');
  }
  public set noGlobalNetwork(value: boolean | cdktf.IResolvable) {
    this._noGlobalNetwork = value;
  }
  public resetNoGlobalNetwork() {
    this._noGlobalNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGlobalNetworkInput() {
    return this._noGlobalNetwork;
  }

  // no_k8s_cluster - computed: false, optional: true, required: false
  private _noK8SCluster?: boolean | cdktf.IResolvable; 
  public get noK8SCluster() {
    return this.getBooleanAttribute('no_k8s_cluster');
  }
  public set noK8SCluster(value: boolean | cdktf.IResolvable) {
    this._noK8SCluster = value;
  }
  public resetNoK8SCluster() {
    this._noK8SCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noK8SClusterInput() {
    return this._noK8SCluster;
  }

  // no_network_policy - computed: false, optional: true, required: false
  private _noNetworkPolicy?: boolean | cdktf.IResolvable; 
  public get noNetworkPolicy() {
    return this.getBooleanAttribute('no_network_policy');
  }
  public set noNetworkPolicy(value: boolean | cdktf.IResolvable) {
    this._noNetworkPolicy = value;
  }
  public resetNoNetworkPolicy() {
    this._noNetworkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNetworkPolicyInput() {
    return this._noNetworkPolicy;
  }

  // no_outside_static_routes - computed: false, optional: true, required: false
  private _noOutsideStaticRoutes?: boolean | cdktf.IResolvable; 
  public get noOutsideStaticRoutes() {
    return this.getBooleanAttribute('no_outside_static_routes');
  }
  public set noOutsideStaticRoutes(value: boolean | cdktf.IResolvable) {
    this._noOutsideStaticRoutes = value;
  }
  public resetNoOutsideStaticRoutes() {
    this._noOutsideStaticRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOutsideStaticRoutesInput() {
    return this._noOutsideStaticRoutes;
  }

  // node_number - computed: false, optional: true, required: false
  private _nodeNumber?: number; 
  public get nodeNumber() {
    return this.getNumberAttribute('node_number');
  }
  public set nodeNumber(value: number) {
    this._nodeNumber = value;
  }
  public resetNodeNumber() {
    this._nodeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNumberInput() {
    return this._nodeNumber;
  }

  // sm_connection_public_ip - computed: false, optional: true, required: false
  private _smConnectionPublicIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPublicIp() {
    return this.getBooleanAttribute('sm_connection_public_ip');
  }
  public set smConnectionPublicIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPublicIp = value;
  }
  public resetSmConnectionPublicIp() {
    this._smConnectionPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPublicIpInput() {
    return this._smConnectionPublicIp;
  }

  // sm_connection_pvt_ip - computed: false, optional: true, required: false
  private _smConnectionPvtIp?: boolean | cdktf.IResolvable; 
  public get smConnectionPvtIp() {
    return this.getBooleanAttribute('sm_connection_pvt_ip');
  }
  public set smConnectionPvtIp(value: boolean | cdktf.IResolvable) {
    this._smConnectionPvtIp = value;
  }
  public resetSmConnectionPvtIp() {
    this._smConnectionPvtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smConnectionPvtIpInput() {
    return this._smConnectionPvtIp;
  }

  // active_enhanced_firewall_policies - computed: false, optional: true, required: false
  private _activeEnhancedFirewallPolicies = new GcpVpcSiteVoltstackClusterActiveEnhancedFirewallPoliciesOutputReference(this, "active_enhanced_firewall_policies");
  public get activeEnhancedFirewallPolicies() {
    return this._activeEnhancedFirewallPolicies;
  }
  public putActiveEnhancedFirewallPolicies(value: GcpVpcSiteVoltstackClusterActiveEnhancedFirewallPolicies) {
    this._activeEnhancedFirewallPolicies.internalValue = value;
  }
  public resetActiveEnhancedFirewallPolicies() {
    this._activeEnhancedFirewallPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeEnhancedFirewallPoliciesInput() {
    return this._activeEnhancedFirewallPolicies.internalValue;
  }

  // active_forward_proxy_policies - computed: false, optional: true, required: false
  private _activeForwardProxyPolicies = new GcpVpcSiteVoltstackClusterActiveForwardProxyPoliciesOutputReference(this, "active_forward_proxy_policies");
  public get activeForwardProxyPolicies() {
    return this._activeForwardProxyPolicies;
  }
  public putActiveForwardProxyPolicies(value: GcpVpcSiteVoltstackClusterActiveForwardProxyPolicies) {
    this._activeForwardProxyPolicies.internalValue = value;
  }
  public resetActiveForwardProxyPolicies() {
    this._activeForwardProxyPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeForwardProxyPoliciesInput() {
    return this._activeForwardProxyPolicies.internalValue;
  }

  // active_network_policies - computed: false, optional: true, required: false
  private _activeNetworkPolicies = new GcpVpcSiteVoltstackClusterActiveNetworkPoliciesOutputReference(this, "active_network_policies");
  public get activeNetworkPolicies() {
    return this._activeNetworkPolicies;
  }
  public putActiveNetworkPolicies(value: GcpVpcSiteVoltstackClusterActiveNetworkPolicies) {
    this._activeNetworkPolicies.internalValue = value;
  }
  public resetActiveNetworkPolicies() {
    this._activeNetworkPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNetworkPoliciesInput() {
    return this._activeNetworkPolicies.internalValue;
  }

  // dc_cluster_group - computed: false, optional: true, required: false
  private _dcClusterGroup = new GcpVpcSiteVoltstackClusterDcClusterGroupOutputReference(this, "dc_cluster_group");
  public get dcClusterGroup() {
    return this._dcClusterGroup;
  }
  public putDcClusterGroup(value: GcpVpcSiteVoltstackClusterDcClusterGroup) {
    this._dcClusterGroup.internalValue = value;
  }
  public resetDcClusterGroup() {
    this._dcClusterGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcClusterGroupInput() {
    return this._dcClusterGroup.internalValue;
  }

  // global_network_list - computed: false, optional: true, required: false
  private _globalNetworkList = new GcpVpcSiteVoltstackClusterGlobalNetworkListStructOutputReference(this, "global_network_list");
  public get globalNetworkList() {
    return this._globalNetworkList;
  }
  public putGlobalNetworkList(value: GcpVpcSiteVoltstackClusterGlobalNetworkListStruct) {
    this._globalNetworkList.internalValue = value;
  }
  public resetGlobalNetworkList() {
    this._globalNetworkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetworkListInput() {
    return this._globalNetworkList.internalValue;
  }

  // k8s_cluster - computed: false, optional: true, required: false
  private _k8SCluster = new GcpVpcSiteVoltstackClusterK8SClusterOutputReference(this, "k8s_cluster");
  public get k8SCluster() {
    return this._k8SCluster;
  }
  public putK8SCluster(value: GcpVpcSiteVoltstackClusterK8SCluster) {
    this._k8SCluster.internalValue = value;
  }
  public resetK8SCluster() {
    this._k8SCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SClusterInput() {
    return this._k8SCluster.internalValue;
  }

  // outside_static_routes - computed: false, optional: true, required: false
  private _outsideStaticRoutes = new GcpVpcSiteVoltstackClusterOutsideStaticRoutesOutputReference(this, "outside_static_routes");
  public get outsideStaticRoutes() {
    return this._outsideStaticRoutes;
  }
  public putOutsideStaticRoutes(value: GcpVpcSiteVoltstackClusterOutsideStaticRoutes) {
    this._outsideStaticRoutes.internalValue = value;
  }
  public resetOutsideStaticRoutes() {
    this._outsideStaticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideStaticRoutesInput() {
    return this._outsideStaticRoutes.internalValue;
  }

  // site_local_network - computed: false, optional: true, required: false
  private _siteLocalNetwork = new GcpVpcSiteVoltstackClusterSiteLocalNetworkOutputReference(this, "site_local_network");
  public get siteLocalNetwork() {
    return this._siteLocalNetwork;
  }
  public putSiteLocalNetwork(value: GcpVpcSiteVoltstackClusterSiteLocalNetwork) {
    this._siteLocalNetwork.internalValue = value;
  }
  public resetSiteLocalNetwork() {
    this._siteLocalNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalNetworkInput() {
    return this._siteLocalNetwork.internalValue;
  }

  // site_local_subnet - computed: false, optional: true, required: false
  private _siteLocalSubnet = new GcpVpcSiteVoltstackClusterSiteLocalSubnetOutputReference(this, "site_local_subnet");
  public get siteLocalSubnet() {
    return this._siteLocalSubnet;
  }
  public putSiteLocalSubnet(value: GcpVpcSiteVoltstackClusterSiteLocalSubnet) {
    this._siteLocalSubnet.internalValue = value;
  }
  public resetSiteLocalSubnet() {
    this._siteLocalSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLocalSubnetInput() {
    return this._siteLocalSubnet.internalValue;
  }

  // storage_class_list - computed: false, optional: true, required: false
  private _storageClassList = new GcpVpcSiteVoltstackClusterStorageClassListStructOutputReference(this, "storage_class_list");
  public get storageClassList() {
    return this._storageClassList;
  }
  public putStorageClassList(value: GcpVpcSiteVoltstackClusterStorageClassListStruct) {
    this._storageClassList.internalValue = value;
  }
  public resetStorageClassList() {
    this._storageClassList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassListInput() {
    return this._storageClassList.internalValue;
  }
}
