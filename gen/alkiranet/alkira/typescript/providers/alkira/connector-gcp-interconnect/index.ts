// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorGcpInterconnectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#billing_tag_ids ConnectorGcpInterconnect#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#cxp ConnectorGcpInterconnect#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#description ConnectorGcpInterconnect#description}
  */
  readonly description?: string;
  /**
  * Whether the connector is enabled. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#enabled ConnectorGcpInterconnect#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#group ConnectorGcpInterconnect#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#id ConnectorGcpInterconnect#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of prefixes that should be associated with the connector. Eg :["10.30.0.0/24"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#loopback_prefixes ConnectorGcpInterconnect#loopback_prefixes}
  */
  readonly loopbackPrefixes: string[];
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#name ConnectorGcpInterconnect#name}
  */
  readonly name: string;
  /**
  * The ID of the scale group associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#scale_group_id ConnectorGcpInterconnect#scale_group_id}
  */
  readonly scaleGroupId?: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE` or `10LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#size ConnectorGcpInterconnect#size}
  */
  readonly size: string;
  /**
  * The tunnel protocol used by the connector.Can be one of `GRE`, `IPSEC`, `VXLAN`, or `VXLAN_GPE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#tunnel_protocol ConnectorGcpInterconnect#tunnel_protocol}
  */
  readonly tunnelProtocol: string;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#instances ConnectorGcpInterconnect#instances}
  */
  readonly instances: ConnectorGcpInterconnectInstances[] | cdktf.IResolvable;
}
export interface ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways {
  /**
  * The customer gateway IP address which is set as tunnel source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#loopback_ip ConnectorGcpInterconnect#loopback_ip}
  */
  readonly loopbackIp?: string;
  /**
  * Number of tunnels per customer gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#tunnel_count ConnectorGcpInterconnect#tunnel_count}
  */
  readonly tunnelCount: number;
}

export function connectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysToTerraform(struct?: ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    loopback_ip: cdktf.stringToTerraform(struct!.loopbackIp),
    tunnel_count: cdktf.numberToTerraform(struct!.tunnelCount),
  }
}


export function connectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysToHclTerraform(struct?: ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    loopback_ip: {
      value: cdktf.stringToHclTerraform(struct!.loopbackIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_count: {
      value: cdktf.numberToHclTerraform(struct!.tunnelCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loopbackIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackIp = this._loopbackIp;
    }
    if (this._tunnelCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCount = this._tunnelCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loopbackIp = undefined;
      this._tunnelCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loopbackIp = value.loopbackIp;
      this._tunnelCount = value.tunnelCount;
    }
  }

  // loopback_ip - computed: false, optional: true, required: false
  private _loopbackIp?: string; 
  public get loopbackIp() {
    return this.getStringAttribute('loopback_ip');
  }
  public set loopbackIp(value: string) {
    this._loopbackIp = value;
  }
  public resetLoopbackIp() {
    this._loopbackIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIpInput() {
    return this._loopbackIp;
  }

  // tunnel_count - computed: false, optional: false, required: true
  private _tunnelCount?: number; 
  public get tunnelCount() {
    return this.getNumberAttribute('tunnel_count');
  }
  public set tunnelCount(value: number) {
    this._tunnelCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCountInput() {
    return this._tunnelCount;
  }
}

export class ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysList extends cdktf.ComplexList {
  public internalValue? : ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways[] | cdktf.IResolvable

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
  public get(index: number): ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysOutputReference {
    return new ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorGcpInterconnectInstancesSegmentOptions {
  /**
  * Enable or disable access to the internet when traffic arrives via this connector. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#advertise_default_route ConnectorGcpInterconnect#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Advertise on-prem routes. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#advertise_on_prem_routes ConnectorGcpInterconnect#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * The ID of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#segment_id ConnectorGcpInterconnect#segment_id}
  */
  readonly segmentId: string;
  /**
  * customer_gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#customer_gateways ConnectorGcpInterconnect#customer_gateways}
  */
  readonly customerGateways: ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways[] | cdktf.IResolvable;
}

export function connectorGcpInterconnectInstancesSegmentOptionsToTerraform(struct?: ConnectorGcpInterconnectInstancesSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    customer_gateways: cdktf.listMapper(connectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysToTerraform, true)(struct!.customerGateways),
  }
}


export function connectorGcpInterconnectInstancesSegmentOptionsToHclTerraform(struct?: ConnectorGcpInterconnectInstancesSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_default_route: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseDefaultRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_prem_routes: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnPremRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_gateways: {
      value: cdktf.listMapperHcl(connectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysToHclTerraform, true)(struct!.customerGateways),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorGcpInterconnectInstancesSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorGcpInterconnectInstancesSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseDefaultRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseDefaultRoute = this._advertiseDefaultRoute;
    }
    if (this._advertiseOnPremRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPremRoutes = this._advertiseOnPremRoutes;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._customerGateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGateways = this._customerGateways?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorGcpInterconnectInstancesSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._segmentId = undefined;
      this._customerGateways.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = value.advertiseDefaultRoute;
      this._advertiseOnPremRoutes = value.advertiseOnPremRoutes;
      this._segmentId = value.segmentId;
      this._customerGateways.internalValue = value.customerGateways;
    }
  }

  // advertise_default_route - computed: false, optional: true, required: false
  private _advertiseDefaultRoute?: boolean | cdktf.IResolvable; 
  public get advertiseDefaultRoute() {
    return this.getBooleanAttribute('advertise_default_route');
  }
  public set advertiseDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._advertiseDefaultRoute = value;
  }
  public resetAdvertiseDefaultRoute() {
    this._advertiseDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDefaultRouteInput() {
    return this._advertiseDefaultRoute;
  }

  // advertise_on_prem_routes - computed: false, optional: true, required: false
  private _advertiseOnPremRoutes?: boolean | cdktf.IResolvable; 
  public get advertiseOnPremRoutes() {
    return this.getBooleanAttribute('advertise_on_prem_routes');
  }
  public set advertiseOnPremRoutes(value: boolean | cdktf.IResolvable) {
    this._advertiseOnPremRoutes = value;
  }
  public resetAdvertiseOnPremRoutes() {
    this._advertiseOnPremRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPremRoutesInput() {
    return this._advertiseOnPremRoutes;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // customer_gateways - computed: false, optional: false, required: true
  private _customerGateways = new ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGatewaysList(this, "customer_gateways", false);
  public get customerGateways() {
    return this._customerGateways;
  }
  public putCustomerGateways(value: ConnectorGcpInterconnectInstancesSegmentOptionsCustomerGateways[] | cdktf.IResolvable) {
    this._customerGateways.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewaysInput() {
    return this._customerGateways.internalValue;
  }
}

export class ConnectorGcpInterconnectInstancesSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorGcpInterconnectInstancesSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorGcpInterconnectInstancesSegmentOptionsOutputReference {
    return new ConnectorGcpInterconnectInstancesSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorGcpInterconnectInstances {
  /**
  * The BGP MD5 authentication key to authenticate Alkira CXP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#bgp_auth_key ConnectorGcpInterconnect#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * The customer ASN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#customer_asn ConnectorGcpInterconnect#customer_asn}
  */
  readonly customerAsn: number;
  /**
  * The Availability domain of the instance. The value could be one of `AVAILABILITY_DOMAIN_1` or `AVAILABILITY_DOMAIN_2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#edge_availability_domain ConnectorGcpInterconnect#edge_availability_domain}
  */
  readonly edgeAvailabilityDomain: string;
  /**
  * The MAC address of the gateway.It's required if the `tunnel_protocol` is `VXLAN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#gateway_mac_address ConnectorGcpInterconnect#gateway_mac_address}
  */
  readonly gatewayMacAddress?: string;
  /**
  * The name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#name ConnectorGcpInterconnect#name}
  */
  readonly name: string;
  /**
  * The VXLAN Network Identifier.It's required if the `tunnel_protocol` is `VXLAN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#vni_id ConnectorGcpInterconnect#vni_id}
  */
  readonly vniId?: number;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#segment_options ConnectorGcpInterconnect#segment_options}
  */
  readonly segmentOptions: ConnectorGcpInterconnectInstancesSegmentOptions[] | cdktf.IResolvable;
}

export function connectorGcpInterconnectInstancesToTerraform(struct?: ConnectorGcpInterconnectInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_auth_key: cdktf.stringToTerraform(struct!.bgpAuthKey),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    edge_availability_domain: cdktf.stringToTerraform(struct!.edgeAvailabilityDomain),
    gateway_mac_address: cdktf.stringToTerraform(struct!.gatewayMacAddress),
    name: cdktf.stringToTerraform(struct!.name),
    vni_id: cdktf.numberToTerraform(struct!.vniId),
    segment_options: cdktf.listMapper(connectorGcpInterconnectInstancesSegmentOptionsToTerraform, true)(struct!.segmentOptions),
  }
}


export function connectorGcpInterconnectInstancesToHclTerraform(struct?: ConnectorGcpInterconnectInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.bgpAuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    edge_availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.edgeAvailabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayMacAddress),
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
    vni_id: {
      value: cdktf.numberToHclTerraform(struct!.vniId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_options: {
      value: cdktf.listMapperHcl(connectorGcpInterconnectInstancesSegmentOptionsToHclTerraform, true)(struct!.segmentOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorGcpInterconnectInstancesSegmentOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorGcpInterconnectInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorGcpInterconnectInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAuthKey = this._bgpAuthKey;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._edgeAvailabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeAvailabilityDomain = this._edgeAvailabilityDomain;
    }
    if (this._gatewayMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMacAddress = this._gatewayMacAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vniId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniId = this._vniId;
    }
    if (this._segmentOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentOptions = this._segmentOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorGcpInterconnectInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bgpAuthKey = undefined;
      this._customerAsn = undefined;
      this._edgeAvailabilityDomain = undefined;
      this._gatewayMacAddress = undefined;
      this._name = undefined;
      this._vniId = undefined;
      this._segmentOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bgpAuthKey = value.bgpAuthKey;
      this._customerAsn = value.customerAsn;
      this._edgeAvailabilityDomain = value.edgeAvailabilityDomain;
      this._gatewayMacAddress = value.gatewayMacAddress;
      this._name = value.name;
      this._vniId = value.vniId;
      this._segmentOptions.internalValue = value.segmentOptions;
    }
  }

  // bgp_auth_key - computed: false, optional: true, required: false
  private _bgpAuthKey?: string; 
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string) {
    this._bgpAuthKey = value;
  }
  public resetBgpAuthKey() {
    this._bgpAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyInput() {
    return this._bgpAuthKey;
  }

  // customer_asn - computed: false, optional: false, required: true
  private _customerAsn?: number; 
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }
  public set customerAsn(value: number) {
    this._customerAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAsnInput() {
    return this._customerAsn;
  }

  // edge_availability_domain - computed: false, optional: false, required: true
  private _edgeAvailabilityDomain?: string; 
  public get edgeAvailabilityDomain() {
    return this.getStringAttribute('edge_availability_domain');
  }
  public set edgeAvailabilityDomain(value: string) {
    this._edgeAvailabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeAvailabilityDomainInput() {
    return this._edgeAvailabilityDomain;
  }

  // gateway_mac_address - computed: false, optional: true, required: false
  private _gatewayMacAddress?: string; 
  public get gatewayMacAddress() {
    return this.getStringAttribute('gateway_mac_address');
  }
  public set gatewayMacAddress(value: string) {
    this._gatewayMacAddress = value;
  }
  public resetGatewayMacAddress() {
    this._gatewayMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayMacAddressInput() {
    return this._gatewayMacAddress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // vni_id - computed: false, optional: true, required: false
  private _vniId?: number; 
  public get vniId() {
    return this.getNumberAttribute('vni_id');
  }
  public set vniId(value: number) {
    this._vniId = value;
  }
  public resetVniId() {
    this._vniId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniIdInput() {
    return this._vniId;
  }

  // segment_options - computed: false, optional: false, required: true
  private _segmentOptions = new ConnectorGcpInterconnectInstancesSegmentOptionsList(this, "segment_options", false);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ConnectorGcpInterconnectInstancesSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
  }
}

export class ConnectorGcpInterconnectInstancesList extends cdktf.ComplexList {
  public internalValue? : ConnectorGcpInterconnectInstances[] | cdktf.IResolvable

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
  public get(index: number): ConnectorGcpInterconnectInstancesOutputReference {
    return new ConnectorGcpInterconnectInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect alkira_connector_gcp_interconnect}
*/
export class ConnectorGcpInterconnect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_gcp_interconnect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorGcpInterconnect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorGcpInterconnect to import
  * @param importFromId The id of the existing ConnectorGcpInterconnect that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorGcpInterconnect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_gcp_interconnect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_gcp_interconnect alkira_connector_gcp_interconnect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorGcpInterconnectConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorGcpInterconnectConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_gcp_interconnect',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2',
        providerVersionConstraint: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._loopbackPrefixes = config.loopbackPrefixes;
    this._name = config.name;
    this._scaleGroupId = config.scaleGroupId;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._instances.internalValue = config.instances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // implicit_group_id - computed: true, optional: false, required: false
  public get implicitGroupId() {
    return this.getNumberAttribute('implicit_group_id');
  }

  // loopback_prefixes - computed: false, optional: false, required: true
  private _loopbackPrefixes?: string[]; 
  public get loopbackPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('loopback_prefixes'));
  }
  public set loopbackPrefixes(value: string[]) {
    this._loopbackPrefixes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackPrefixesInput() {
    return this._loopbackPrefixes;
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

  // scale_group_id - computed: false, optional: true, required: false
  private _scaleGroupId?: string; 
  public get scaleGroupId() {
    return this.getStringAttribute('scale_group_id');
  }
  public set scaleGroupId(value: string) {
    this._scaleGroupId = value;
  }
  public resetScaleGroupId() {
    this._scaleGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleGroupIdInput() {
    return this._scaleGroupId;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tunnel_protocol - computed: false, optional: false, required: true
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new ConnectorGcpInterconnectInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: ConnectorGcpInterconnectInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      loopback_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loopbackPrefixes),
      name: cdktf.stringToTerraform(this._name),
      scale_group_id: cdktf.stringToTerraform(this._scaleGroupId),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      instances: cdktf.listMapper(connectorGcpInterconnectInstancesToTerraform, true)(this._instances.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loopbackPrefixes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_group_id: {
        value: cdktf.stringToHclTerraform(this._scaleGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instances: {
        value: cdktf.listMapperHcl(connectorGcpInterconnectInstancesToHclTerraform, true)(this._instances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorGcpInterconnectInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
