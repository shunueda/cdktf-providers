// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SetCloudSiteInfoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#id SetCloudSiteInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#name SetCloudSiteInfo#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#private_ips SetCloudSiteInfo#private_ips}
  */
  readonly privateIps: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#public_ips SetCloudSiteInfo#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#site_type SetCloudSiteInfo#site_type}
  */
  readonly siteType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#vpc_id SetCloudSiteInfo#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#vpc_name SetCloudSiteInfo#vpc_name}
  */
  readonly vpcName?: string;
  /**
  * direct_connect_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#direct_connect_info SetCloudSiteInfo#direct_connect_info}
  */
  readonly directConnectInfo?: SetCloudSiteInfoDirectConnectInfo[] | cdktf.IResolvable;
  /**
  * express_route_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#express_route_info SetCloudSiteInfo#express_route_info}
  */
  readonly expressRouteInfo?: SetCloudSiteInfoExpressRouteInfo[] | cdktf.IResolvable;
  /**
  * node_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#node_info SetCloudSiteInfo#node_info}
  */
  readonly nodeInfo?: SetCloudSiteInfoNodeInfo[] | cdktf.IResolvable;
  /**
  * spoke_vnet_prefix_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#spoke_vnet_prefix_info SetCloudSiteInfo#spoke_vnet_prefix_info}
  */
  readonly spokeVnetPrefixInfo?: SetCloudSiteInfoSpokeVnetPrefixInfo[] | cdktf.IResolvable;
  /**
  * subnet_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#subnet_ids SetCloudSiteInfo#subnet_ids}
  */
  readonly subnetIds?: SetCloudSiteInfoSubnetIds[] | cdktf.IResolvable;
  /**
  * vnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#vnet SetCloudSiteInfo#vnet}
  */
  readonly vnet?: SetCloudSiteInfoVnet[] | cdktf.IResolvable;
}
export interface SetCloudSiteInfoDirectConnectInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#asn SetCloudSiteInfo#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#direct_connect_gateway_id SetCloudSiteInfo#direct_connect_gateway_id}
  */
  readonly directConnectGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#vgw_id SetCloudSiteInfo#vgw_id}
  */
  readonly vgwId?: string;
}

export function setCloudSiteInfoDirectConnectInfoToTerraform(struct?: SetCloudSiteInfoDirectConnectInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    direct_connect_gateway_id: cdktf.stringToTerraform(struct!.directConnectGatewayId),
    vgw_id: cdktf.stringToTerraform(struct!.vgwId),
  }
}


export function setCloudSiteInfoDirectConnectInfoToHclTerraform(struct?: SetCloudSiteInfoDirectConnectInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    direct_connect_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.directConnectGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vgw_id: {
      value: cdktf.stringToHclTerraform(struct!.vgwId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoDirectConnectInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoDirectConnectInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._directConnectGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directConnectGatewayId = this._directConnectGatewayId;
    }
    if (this._vgwId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vgwId = this._vgwId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoDirectConnectInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._directConnectGatewayId = undefined;
      this._vgwId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._directConnectGatewayId = value.directConnectGatewayId;
      this._vgwId = value.vgwId;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // direct_connect_gateway_id - computed: false, optional: true, required: false
  private _directConnectGatewayId?: string; 
  public get directConnectGatewayId() {
    return this.getStringAttribute('direct_connect_gateway_id');
  }
  public set directConnectGatewayId(value: string) {
    this._directConnectGatewayId = value;
  }
  public resetDirectConnectGatewayId() {
    this._directConnectGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectGatewayIdInput() {
    return this._directConnectGatewayId;
  }

  // vgw_id - computed: false, optional: true, required: false
  private _vgwId?: string; 
  public get vgwId() {
    return this.getStringAttribute('vgw_id');
  }
  public set vgwId(value: string) {
    this._vgwId = value;
  }
  public resetVgwId() {
    this._vgwId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgwIdInput() {
    return this._vgwId;
  }
}

export class SetCloudSiteInfoDirectConnectInfoList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoDirectConnectInfo[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoDirectConnectInfoOutputReference {
    return new SetCloudSiteInfoDirectConnectInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoExpressRouteInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#route_server_asn SetCloudSiteInfo#route_server_asn}
  */
  readonly routeServerAsn: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#route_server_ips SetCloudSiteInfo#route_server_ips}
  */
  readonly routeServerIps: string[];
}

export function setCloudSiteInfoExpressRouteInfoToTerraform(struct?: SetCloudSiteInfoExpressRouteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    route_server_asn: cdktf.numberToTerraform(struct!.routeServerAsn),
    route_server_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.routeServerIps),
  }
}


export function setCloudSiteInfoExpressRouteInfoToHclTerraform(struct?: SetCloudSiteInfoExpressRouteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    route_server_asn: {
      value: cdktf.numberToHclTerraform(struct!.routeServerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_server_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.routeServerIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoExpressRouteInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoExpressRouteInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routeServerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerAsn = this._routeServerAsn;
    }
    if (this._routeServerIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeServerIps = this._routeServerIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoExpressRouteInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routeServerAsn = undefined;
      this._routeServerIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routeServerAsn = value.routeServerAsn;
      this._routeServerIps = value.routeServerIps;
    }
  }

  // route_server_asn - computed: false, optional: false, required: true
  private _routeServerAsn?: number; 
  public get routeServerAsn() {
    return this.getNumberAttribute('route_server_asn');
  }
  public set routeServerAsn(value: number) {
    this._routeServerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerAsnInput() {
    return this._routeServerAsn;
  }

  // route_server_ips - computed: false, optional: false, required: true
  private _routeServerIps?: string[]; 
  public get routeServerIps() {
    return this.getListAttribute('route_server_ips');
  }
  public set routeServerIps(value: string[]) {
    this._routeServerIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routeServerIpsInput() {
    return this._routeServerIps;
  }
}

export class SetCloudSiteInfoExpressRouteInfoList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoExpressRouteInfo[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoExpressRouteInfoOutputReference {
    return new SetCloudSiteInfoExpressRouteInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoNodeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#node_id SetCloudSiteInfo#node_id}
  */
  readonly nodeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#node_instance_name SetCloudSiteInfo#node_instance_name}
  */
  readonly nodeInstanceName: string;
}

export function setCloudSiteInfoNodeInfoToTerraform(struct?: SetCloudSiteInfoNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    node_instance_name: cdktf.stringToTerraform(struct!.nodeInstanceName),
  }
}


export function setCloudSiteInfoNodeInfoToHclTerraform(struct?: SetCloudSiteInfoNodeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_instance_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeInstanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoNodeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoNodeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._nodeInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeInstanceName = this._nodeInstanceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoNodeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeId = undefined;
      this._nodeInstanceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeId = value.nodeId;
      this._nodeInstanceName = value.nodeInstanceName;
    }
  }

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // node_instance_name - computed: false, optional: false, required: true
  private _nodeInstanceName?: string; 
  public get nodeInstanceName() {
    return this.getStringAttribute('node_instance_name');
  }
  public set nodeInstanceName(value: string) {
    this._nodeInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInstanceNameInput() {
    return this._nodeInstanceName;
  }
}

export class SetCloudSiteInfoNodeInfoList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoNodeInfo[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoNodeInfoOutputReference {
    return new SetCloudSiteInfoNodeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoSpokeVnetPrefixInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#prefixes SetCloudSiteInfo#prefixes}
  */
  readonly prefixes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#resource_group SetCloudSiteInfo#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#vnet_name SetCloudSiteInfo#vnet_name}
  */
  readonly vnetName: string;
}

export function setCloudSiteInfoSpokeVnetPrefixInfoToTerraform(struct?: SetCloudSiteInfoSpokeVnetPrefixInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
  }
}


export function setCloudSiteInfoSpokeVnetPrefixInfoToHclTerraform(struct?: SetCloudSiteInfoSpokeVnetPrefixInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoSpokeVnetPrefixInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoSpokeVnetPrefixInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoSpokeVnetPrefixInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefixes = undefined;
      this._resourceGroup = undefined;
      this._vnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefixes = value.prefixes;
      this._resourceGroup = value.resourceGroup;
      this._vnetName = value.vnetName;
    }
  }

  // prefixes - computed: false, optional: false, required: true
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // vnet_name - computed: false, optional: false, required: true
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }
}

export class SetCloudSiteInfoSpokeVnetPrefixInfoList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoSpokeVnetPrefixInfo[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoSpokeVnetPrefixInfoOutputReference {
    return new SetCloudSiteInfoSpokeVnetPrefixInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoSubnetIdsInsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#az_name SetCloudSiteInfo#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#id SetCloudSiteInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#ipv4_prefix SetCloudSiteInfo#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
}

export function setCloudSiteInfoSubnetIdsInsideSubnetToTerraform(struct?: SetCloudSiteInfoSubnetIdsInsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    id: cdktf.stringToTerraform(struct!.id),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
  }
}


export function setCloudSiteInfoSubnetIdsInsideSubnetToHclTerraform(struct?: SetCloudSiteInfoSubnetIdsInsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoSubnetIdsInsideSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoSubnetIdsInsideSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoSubnetIdsInsideSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._id = undefined;
      this._ipv4Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._id = value.id;
      this._ipv4Prefix = value.ipv4Prefix;
    }
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // id - computed: false, optional: true, required: false
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

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }
}

export class SetCloudSiteInfoSubnetIdsInsideSubnetList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoSubnetIdsInsideSubnet[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoSubnetIdsInsideSubnetOutputReference {
    return new SetCloudSiteInfoSubnetIdsInsideSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoSubnetIdsOutsideSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#az_name SetCloudSiteInfo#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#id SetCloudSiteInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#ipv4_prefix SetCloudSiteInfo#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
}

export function setCloudSiteInfoSubnetIdsOutsideSubnetToTerraform(struct?: SetCloudSiteInfoSubnetIdsOutsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    id: cdktf.stringToTerraform(struct!.id),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
  }
}


export function setCloudSiteInfoSubnetIdsOutsideSubnetToHclTerraform(struct?: SetCloudSiteInfoSubnetIdsOutsideSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoSubnetIdsOutsideSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoSubnetIdsOutsideSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoSubnetIdsOutsideSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._id = undefined;
      this._ipv4Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._id = value.id;
      this._ipv4Prefix = value.ipv4Prefix;
    }
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // id - computed: false, optional: true, required: false
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

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }
}

export class SetCloudSiteInfoSubnetIdsOutsideSubnetList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoSubnetIdsOutsideSubnet[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoSubnetIdsOutsideSubnetOutputReference {
    return new SetCloudSiteInfoSubnetIdsOutsideSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoSubnetIdsWorkloadSubnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#az_name SetCloudSiteInfo#az_name}
  */
  readonly azName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#id SetCloudSiteInfo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#ipv4_prefix SetCloudSiteInfo#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
}

export function setCloudSiteInfoSubnetIdsWorkloadSubnetToTerraform(struct?: SetCloudSiteInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    id: cdktf.stringToTerraform(struct!.id),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
  }
}


export function setCloudSiteInfoSubnetIdsWorkloadSubnetToHclTerraform(struct?: SetCloudSiteInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoSubnetIdsWorkloadSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoSubnetIdsWorkloadSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._id = undefined;
      this._ipv4Prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._id = value.id;
      this._ipv4Prefix = value.ipv4Prefix;
    }
  }

  // az_name - computed: false, optional: true, required: false
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  public resetAzName() {
    this._azName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // id - computed: false, optional: true, required: false
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

  // ipv4_prefix - computed: false, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }
}

export class SetCloudSiteInfoSubnetIdsWorkloadSubnetList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoSubnetIdsWorkloadSubnet[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoSubnetIdsWorkloadSubnetOutputReference {
    return new SetCloudSiteInfoSubnetIdsWorkloadSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoSubnetIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#az SetCloudSiteInfo#az}
  */
  readonly az?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#inside_subnet_id SetCloudSiteInfo#inside_subnet_id}
  */
  readonly insideSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#outside_subnet_id SetCloudSiteInfo#outside_subnet_id}
  */
  readonly outsideSubnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#workload_subnet_id SetCloudSiteInfo#workload_subnet_id}
  */
  readonly workloadSubnetId?: string;
  /**
  * inside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#inside_subnet SetCloudSiteInfo#inside_subnet}
  */
  readonly insideSubnet?: SetCloudSiteInfoSubnetIdsInsideSubnet[] | cdktf.IResolvable;
  /**
  * outside_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#outside_subnet SetCloudSiteInfo#outside_subnet}
  */
  readonly outsideSubnet?: SetCloudSiteInfoSubnetIdsOutsideSubnet[] | cdktf.IResolvable;
  /**
  * workload_subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#workload_subnet SetCloudSiteInfo#workload_subnet}
  */
  readonly workloadSubnet?: SetCloudSiteInfoSubnetIdsWorkloadSubnet[] | cdktf.IResolvable;
}

export function setCloudSiteInfoSubnetIdsToTerraform(struct?: SetCloudSiteInfoSubnetIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az: cdktf.stringToTerraform(struct!.az),
    inside_subnet_id: cdktf.stringToTerraform(struct!.insideSubnetId),
    outside_subnet_id: cdktf.stringToTerraform(struct!.outsideSubnetId),
    workload_subnet_id: cdktf.stringToTerraform(struct!.workloadSubnetId),
    inside_subnet: cdktf.listMapper(setCloudSiteInfoSubnetIdsInsideSubnetToTerraform, true)(struct!.insideSubnet),
    outside_subnet: cdktf.listMapper(setCloudSiteInfoSubnetIdsOutsideSubnetToTerraform, true)(struct!.outsideSubnet),
    workload_subnet: cdktf.listMapper(setCloudSiteInfoSubnetIdsWorkloadSubnetToTerraform, true)(struct!.workloadSubnet),
  }
}


export function setCloudSiteInfoSubnetIdsToHclTerraform(struct?: SetCloudSiteInfoSubnetIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az: {
      value: cdktf.stringToHclTerraform(struct!.az),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.insideSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outside_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.outsideSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload_subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.workloadSubnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside_subnet: {
      value: cdktf.listMapperHcl(setCloudSiteInfoSubnetIdsInsideSubnetToHclTerraform, true)(struct!.insideSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "SetCloudSiteInfoSubnetIdsInsideSubnetList",
    },
    outside_subnet: {
      value: cdktf.listMapperHcl(setCloudSiteInfoSubnetIdsOutsideSubnetToHclTerraform, true)(struct!.outsideSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "SetCloudSiteInfoSubnetIdsOutsideSubnetList",
    },
    workload_subnet: {
      value: cdktf.listMapperHcl(setCloudSiteInfoSubnetIdsWorkloadSubnetToHclTerraform, true)(struct!.workloadSubnet),
      isBlock: true,
      type: "set",
      storageClassType: "SetCloudSiteInfoSubnetIdsWorkloadSubnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoSubnetIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoSubnetIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._az !== undefined) {
      hasAnyValues = true;
      internalValueResult.az = this._az;
    }
    if (this._insideSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSubnetId = this._insideSubnetId;
    }
    if (this._outsideSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSubnetId = this._outsideSubnetId;
    }
    if (this._workloadSubnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSubnetId = this._workloadSubnetId;
    }
    if (this._insideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSubnet = this._insideSubnet?.internalValue;
    }
    if (this._outsideSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSubnet = this._outsideSubnet?.internalValue;
    }
    if (this._workloadSubnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSubnet = this._workloadSubnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoSubnetIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._az = undefined;
      this._insideSubnetId = undefined;
      this._outsideSubnetId = undefined;
      this._workloadSubnetId = undefined;
      this._insideSubnet.internalValue = undefined;
      this._outsideSubnet.internalValue = undefined;
      this._workloadSubnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._az = value.az;
      this._insideSubnetId = value.insideSubnetId;
      this._outsideSubnetId = value.outsideSubnetId;
      this._workloadSubnetId = value.workloadSubnetId;
      this._insideSubnet.internalValue = value.insideSubnet;
      this._outsideSubnet.internalValue = value.outsideSubnet;
      this._workloadSubnet.internalValue = value.workloadSubnet;
    }
  }

  // az - computed: false, optional: true, required: false
  private _az?: string; 
  public get az() {
    return this.getStringAttribute('az');
  }
  public set az(value: string) {
    this._az = value;
  }
  public resetAz() {
    this._az = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azInput() {
    return this._az;
  }

  // inside_subnet_id - computed: false, optional: true, required: false
  private _insideSubnetId?: string; 
  public get insideSubnetId() {
    return this.getStringAttribute('inside_subnet_id');
  }
  public set insideSubnetId(value: string) {
    this._insideSubnetId = value;
  }
  public resetInsideSubnetId() {
    this._insideSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSubnetIdInput() {
    return this._insideSubnetId;
  }

  // outside_subnet_id - computed: false, optional: true, required: false
  private _outsideSubnetId?: string; 
  public get outsideSubnetId() {
    return this.getStringAttribute('outside_subnet_id');
  }
  public set outsideSubnetId(value: string) {
    this._outsideSubnetId = value;
  }
  public resetOutsideSubnetId() {
    this._outsideSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSubnetIdInput() {
    return this._outsideSubnetId;
  }

  // workload_subnet_id - computed: false, optional: true, required: false
  private _workloadSubnetId?: string; 
  public get workloadSubnetId() {
    return this.getStringAttribute('workload_subnet_id');
  }
  public set workloadSubnetId(value: string) {
    this._workloadSubnetId = value;
  }
  public resetWorkloadSubnetId() {
    this._workloadSubnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSubnetIdInput() {
    return this._workloadSubnetId;
  }

  // inside_subnet - computed: false, optional: true, required: false
  private _insideSubnet = new SetCloudSiteInfoSubnetIdsInsideSubnetList(this, "inside_subnet", true);
  public get insideSubnet() {
    return this._insideSubnet;
  }
  public putInsideSubnet(value: SetCloudSiteInfoSubnetIdsInsideSubnet[] | cdktf.IResolvable) {
    this._insideSubnet.internalValue = value;
  }
  public resetInsideSubnet() {
    this._insideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSubnetInput() {
    return this._insideSubnet.internalValue;
  }

  // outside_subnet - computed: false, optional: true, required: false
  private _outsideSubnet = new SetCloudSiteInfoSubnetIdsOutsideSubnetList(this, "outside_subnet", true);
  public get outsideSubnet() {
    return this._outsideSubnet;
  }
  public putOutsideSubnet(value: SetCloudSiteInfoSubnetIdsOutsideSubnet[] | cdktf.IResolvable) {
    this._outsideSubnet.internalValue = value;
  }
  public resetOutsideSubnet() {
    this._outsideSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSubnetInput() {
    return this._outsideSubnet.internalValue;
  }

  // workload_subnet - computed: false, optional: true, required: false
  private _workloadSubnet = new SetCloudSiteInfoSubnetIdsWorkloadSubnetList(this, "workload_subnet", true);
  public get workloadSubnet() {
    return this._workloadSubnet;
  }
  public putWorkloadSubnet(value: SetCloudSiteInfoSubnetIdsWorkloadSubnet[] | cdktf.IResolvable) {
    this._workloadSubnet.internalValue = value;
  }
  public resetWorkloadSubnet() {
    this._workloadSubnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSubnetInput() {
    return this._workloadSubnet.internalValue;
  }
}

export class SetCloudSiteInfoSubnetIdsList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoSubnetIds[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoSubnetIdsOutputReference {
    return new SetCloudSiteInfoSubnetIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SetCloudSiteInfoVnet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#resource_id SetCloudSiteInfo#resource_id}
  */
  readonly resourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#vnet_name SetCloudSiteInfo#vnet_name}
  */
  readonly vnetName: string;
}

export function setCloudSiteInfoVnetToTerraform(struct?: SetCloudSiteInfoVnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    vnet_name: cdktf.stringToTerraform(struct!.vnetName),
  }
}


export function setCloudSiteInfoVnetToHclTerraform(struct?: SetCloudSiteInfoVnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vnet_name: {
      value: cdktf.stringToHclTerraform(struct!.vnetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SetCloudSiteInfoVnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SetCloudSiteInfoVnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._vnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetName = this._vnetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SetCloudSiteInfoVnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._vnetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._vnetName = value.vnetName;
    }
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // vnet_name - computed: false, optional: false, required: true
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }
}

export class SetCloudSiteInfoVnetList extends cdktf.ComplexList {
  public internalValue? : SetCloudSiteInfoVnet[] | cdktf.IResolvable

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
  public get(index: number): SetCloudSiteInfoVnetOutputReference {
    return new SetCloudSiteInfoVnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info volterra_set_cloud_site_info}
*/
export class SetCloudSiteInfo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_set_cloud_site_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SetCloudSiteInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SetCloudSiteInfo to import
  * @param importFromId The id of the existing SetCloudSiteInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SetCloudSiteInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_set_cloud_site_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/set_cloud_site_info volterra_set_cloud_site_info} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SetCloudSiteInfoConfig
  */
  public constructor(scope: Construct, id: string, config: SetCloudSiteInfoConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_set_cloud_site_info',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._privateIps = config.privateIps;
    this._publicIps = config.publicIps;
    this._siteType = config.siteType;
    this._vpcId = config.vpcId;
    this._vpcName = config.vpcName;
    this._directConnectInfo.internalValue = config.directConnectInfo;
    this._expressRouteInfo.internalValue = config.expressRouteInfo;
    this._nodeInfo.internalValue = config.nodeInfo;
    this._spokeVnetPrefixInfo.internalValue = config.spokeVnetPrefixInfo;
    this._subnetIds.internalValue = config.subnetIds;
    this._vnet.internalValue = config.vnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // private_ips - computed: false, optional: false, required: true
  private _privateIps?: string[]; 
  public get privateIps() {
    return this.getListAttribute('private_ips');
  }
  public set privateIps(value: string[]) {
    this._privateIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpsInput() {
    return this._privateIps;
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
  }

  // site_type - computed: false, optional: false, required: true
  private _siteType?: string; 
  public get siteType() {
    return this.getStringAttribute('site_type');
  }
  public set siteType(value: string) {
    this._siteType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypeInput() {
    return this._siteType;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: false, optional: true, required: false
  private _vpcName?: string; 
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
  public set vpcName(value: string) {
    this._vpcName = value;
  }
  public resetVpcName() {
    this._vpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNameInput() {
    return this._vpcName;
  }

  // direct_connect_info - computed: false, optional: true, required: false
  private _directConnectInfo = new SetCloudSiteInfoDirectConnectInfoList(this, "direct_connect_info", true);
  public get directConnectInfo() {
    return this._directConnectInfo;
  }
  public putDirectConnectInfo(value: SetCloudSiteInfoDirectConnectInfo[] | cdktf.IResolvable) {
    this._directConnectInfo.internalValue = value;
  }
  public resetDirectConnectInfo() {
    this._directConnectInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectInfoInput() {
    return this._directConnectInfo.internalValue;
  }

  // express_route_info - computed: false, optional: true, required: false
  private _expressRouteInfo = new SetCloudSiteInfoExpressRouteInfoList(this, "express_route_info", true);
  public get expressRouteInfo() {
    return this._expressRouteInfo;
  }
  public putExpressRouteInfo(value: SetCloudSiteInfoExpressRouteInfo[] | cdktf.IResolvable) {
    this._expressRouteInfo.internalValue = value;
  }
  public resetExpressRouteInfo() {
    this._expressRouteInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressRouteInfoInput() {
    return this._expressRouteInfo.internalValue;
  }

  // node_info - computed: false, optional: true, required: false
  private _nodeInfo = new SetCloudSiteInfoNodeInfoList(this, "node_info", false);
  public get nodeInfo() {
    return this._nodeInfo;
  }
  public putNodeInfo(value: SetCloudSiteInfoNodeInfo[] | cdktf.IResolvable) {
    this._nodeInfo.internalValue = value;
  }
  public resetNodeInfo() {
    this._nodeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeInfoInput() {
    return this._nodeInfo.internalValue;
  }

  // spoke_vnet_prefix_info - computed: false, optional: true, required: false
  private _spokeVnetPrefixInfo = new SetCloudSiteInfoSpokeVnetPrefixInfoList(this, "spoke_vnet_prefix_info", false);
  public get spokeVnetPrefixInfo() {
    return this._spokeVnetPrefixInfo;
  }
  public putSpokeVnetPrefixInfo(value: SetCloudSiteInfoSpokeVnetPrefixInfo[] | cdktf.IResolvable) {
    this._spokeVnetPrefixInfo.internalValue = value;
  }
  public resetSpokeVnetPrefixInfo() {
    this._spokeVnetPrefixInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokeVnetPrefixInfoInput() {
    return this._spokeVnetPrefixInfo.internalValue;
  }

  // subnet_ids - computed: false, optional: true, required: false
  private _subnetIds = new SetCloudSiteInfoSubnetIdsList(this, "subnet_ids", false);
  public get subnetIds() {
    return this._subnetIds;
  }
  public putSubnetIds(value: SetCloudSiteInfoSubnetIds[] | cdktf.IResolvable) {
    this._subnetIds.internalValue = value;
  }
  public resetSubnetIds() {
    this._subnetIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds.internalValue;
  }

  // vnet - computed: false, optional: true, required: false
  private _vnet = new SetCloudSiteInfoVnetList(this, "vnet", true);
  public get vnet() {
    return this._vnet;
  }
  public putVnet(value: SetCloudSiteInfoVnet[] | cdktf.IResolvable) {
    this._vnet.internalValue = value;
  }
  public resetVnet() {
    this._vnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._privateIps),
      public_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._publicIps),
      site_type: cdktf.stringToTerraform(this._siteType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpc_name: cdktf.stringToTerraform(this._vpcName),
      direct_connect_info: cdktf.listMapper(setCloudSiteInfoDirectConnectInfoToTerraform, true)(this._directConnectInfo.internalValue),
      express_route_info: cdktf.listMapper(setCloudSiteInfoExpressRouteInfoToTerraform, true)(this._expressRouteInfo.internalValue),
      node_info: cdktf.listMapper(setCloudSiteInfoNodeInfoToTerraform, true)(this._nodeInfo.internalValue),
      spoke_vnet_prefix_info: cdktf.listMapper(setCloudSiteInfoSpokeVnetPrefixInfoToTerraform, true)(this._spokeVnetPrefixInfo.internalValue),
      subnet_ids: cdktf.listMapper(setCloudSiteInfoSubnetIdsToTerraform, true)(this._subnetIds.internalValue),
      vnet: cdktf.listMapper(setCloudSiteInfoVnetToTerraform, true)(this._vnet.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._privateIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._publicIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      site_type: {
        value: cdktf.stringToHclTerraform(this._siteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_name: {
        value: cdktf.stringToHclTerraform(this._vpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_connect_info: {
        value: cdktf.listMapperHcl(setCloudSiteInfoDirectConnectInfoToHclTerraform, true)(this._directConnectInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SetCloudSiteInfoDirectConnectInfoList",
      },
      express_route_info: {
        value: cdktf.listMapperHcl(setCloudSiteInfoExpressRouteInfoToHclTerraform, true)(this._expressRouteInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SetCloudSiteInfoExpressRouteInfoList",
      },
      node_info: {
        value: cdktf.listMapperHcl(setCloudSiteInfoNodeInfoToHclTerraform, true)(this._nodeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SetCloudSiteInfoNodeInfoList",
      },
      spoke_vnet_prefix_info: {
        value: cdktf.listMapperHcl(setCloudSiteInfoSpokeVnetPrefixInfoToHclTerraform, true)(this._spokeVnetPrefixInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SetCloudSiteInfoSpokeVnetPrefixInfoList",
      },
      subnet_ids: {
        value: cdktf.listMapperHcl(setCloudSiteInfoSubnetIdsToHclTerraform, true)(this._subnetIds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SetCloudSiteInfoSubnetIdsList",
      },
      vnet: {
        value: cdktf.listMapperHcl(setCloudSiteInfoVnetToHclTerraform, true)(this._vnet.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SetCloudSiteInfoVnetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
