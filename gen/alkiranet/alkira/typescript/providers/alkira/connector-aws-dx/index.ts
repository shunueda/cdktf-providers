// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorAwsDxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#billing_tag_ids ConnectorAwsDx#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#cxp ConnectorAwsDx#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#description ConnectorAwsDx#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#enabled ConnectorAwsDx#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#group ConnectorAwsDx#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#id ConnectorAwsDx#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#name ConnectorAwsDx#name}
  */
  readonly name: string;
  /**
  * The ID of the scale group associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#scale_group_id ConnectorAwsDx#scale_group_id}
  */
  readonly scaleGroupId?: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE` or `10LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#size ConnectorAwsDx#size}
  */
  readonly size: string;
  /**
  * The tunnel protocol used by the connector.The value should be one of `GRE`, `IPSEC`, `VXLAN`, `VXLAN_GPE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#tunnel_protocol ConnectorAwsDx#tunnel_protocol}
  */
  readonly tunnelProtocol: string;
  /**
  * instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#instance ConnectorAwsDx#instance}
  */
  readonly instance: ConnectorAwsDxInstance[] | cdktf.IResolvable;
}
export interface ConnectorAwsDxInstanceSegmentOptions {
  /**
  * Enable or disable access to the internet when traffic arrives via this connector. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#advertise_default_route ConnectorAwsDx#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Advertise on-prem routes. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#advertise_on_prem_routes ConnectorAwsDx#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * Alkira loopback IP which is set as tunnel 1. The field is applicable only when `tunnel_protocol` is not `IPSEC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#alkira_loopback_ip1 ConnectorAwsDx#alkira_loopback_ip1}
  */
  readonly alkiraLoopbackIp1?: string;
  /**
  * Alkira loopback IP which is set as tunnel 2. The field is applicable only when `tunnel_protocol` is not `IPSEC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#alkira_loopback_ip2 ConnectorAwsDx#alkira_loopback_ip2}
  */
  readonly alkiraLoopbackIp2?: string;
  /**
  * Customer loopback IP which is set as tunnel source. The field is applicable only when `tunnel_protocol` is not `IPSEC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#customer_loopback_ip ConnectorAwsDx#customer_loopback_ip}
  */
  readonly customerLoopbackIp?: string;
  /**
  * Prefix of all loopback IPs, helps to identify the block to reserve IPs from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#loopback_subnet ConnectorAwsDx#loopback_subnet}
  */
  readonly loopbackSubnet: string;
  /**
  * The number of customer loopback IPs needs to be generated by Alkira from `loopback_subnet`.The field is only applicable when `tunnel_protocol` is `IPSEC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#number_of_customer_loopback_ips ConnectorAwsDx#number_of_customer_loopback_ips}
  */
  readonly numberOfCustomerLoopbackIps?: number;
  /**
  * The ASN of customer on-prem side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#on_prem_segment_asn ConnectorAwsDx#on_prem_segment_asn}
  */
  readonly onPremSegmentAsn: number;
  /**
  * The ID of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#segment_id ConnectorAwsDx#segment_id}
  */
  readonly segmentId: string;
  /**
  * The number of tunnels needs to be created for each customer loopback IP. The value must be multiple of `2` (one tunnel per AZ). The field is only applicable when `tunnel_protocol` is `IPSEC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#tunnel_count_per_customer_loopback_ip ConnectorAwsDx#tunnel_count_per_customer_loopback_ip}
  */
  readonly tunnelCountPerCustomerLoopbackIp?: number;
}

export function connectorAwsDxInstanceSegmentOptionsToTerraform(struct?: ConnectorAwsDxInstanceSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    alkira_loopback_ip1: cdktf.stringToTerraform(struct!.alkiraLoopbackIp1),
    alkira_loopback_ip2: cdktf.stringToTerraform(struct!.alkiraLoopbackIp2),
    customer_loopback_ip: cdktf.stringToTerraform(struct!.customerLoopbackIp),
    loopback_subnet: cdktf.stringToTerraform(struct!.loopbackSubnet),
    number_of_customer_loopback_ips: cdktf.numberToTerraform(struct!.numberOfCustomerLoopbackIps),
    on_prem_segment_asn: cdktf.numberToTerraform(struct!.onPremSegmentAsn),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    tunnel_count_per_customer_loopback_ip: cdktf.numberToTerraform(struct!.tunnelCountPerCustomerLoopbackIp),
  }
}


export function connectorAwsDxInstanceSegmentOptionsToHclTerraform(struct?: ConnectorAwsDxInstanceSegmentOptions | cdktf.IResolvable): any {
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
    alkira_loopback_ip1: {
      value: cdktf.stringToHclTerraform(struct!.alkiraLoopbackIp1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alkira_loopback_ip2: {
      value: cdktf.stringToHclTerraform(struct!.alkiraLoopbackIp2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_loopback_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerLoopbackIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_subnet: {
      value: cdktf.stringToHclTerraform(struct!.loopbackSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_customer_loopback_ips: {
      value: cdktf.numberToHclTerraform(struct!.numberOfCustomerLoopbackIps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_prem_segment_asn: {
      value: cdktf.numberToHclTerraform(struct!.onPremSegmentAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_count_per_customer_loopback_ip: {
      value: cdktf.numberToHclTerraform(struct!.tunnelCountPerCustomerLoopbackIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAwsDxInstanceSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAwsDxInstanceSegmentOptions | cdktf.IResolvable | undefined {
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
    if (this._alkiraLoopbackIp1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.alkiraLoopbackIp1 = this._alkiraLoopbackIp1;
    }
    if (this._alkiraLoopbackIp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.alkiraLoopbackIp2 = this._alkiraLoopbackIp2;
    }
    if (this._customerLoopbackIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerLoopbackIp = this._customerLoopbackIp;
    }
    if (this._loopbackSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackSubnet = this._loopbackSubnet;
    }
    if (this._numberOfCustomerLoopbackIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfCustomerLoopbackIps = this._numberOfCustomerLoopbackIps;
    }
    if (this._onPremSegmentAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremSegmentAsn = this._onPremSegmentAsn;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._tunnelCountPerCustomerLoopbackIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelCountPerCustomerLoopbackIp = this._tunnelCountPerCustomerLoopbackIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAwsDxInstanceSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._alkiraLoopbackIp1 = undefined;
      this._alkiraLoopbackIp2 = undefined;
      this._customerLoopbackIp = undefined;
      this._loopbackSubnet = undefined;
      this._numberOfCustomerLoopbackIps = undefined;
      this._onPremSegmentAsn = undefined;
      this._segmentId = undefined;
      this._tunnelCountPerCustomerLoopbackIp = undefined;
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
      this._alkiraLoopbackIp1 = value.alkiraLoopbackIp1;
      this._alkiraLoopbackIp2 = value.alkiraLoopbackIp2;
      this._customerLoopbackIp = value.customerLoopbackIp;
      this._loopbackSubnet = value.loopbackSubnet;
      this._numberOfCustomerLoopbackIps = value.numberOfCustomerLoopbackIps;
      this._onPremSegmentAsn = value.onPremSegmentAsn;
      this._segmentId = value.segmentId;
      this._tunnelCountPerCustomerLoopbackIp = value.tunnelCountPerCustomerLoopbackIp;
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

  // alkira_loopback_ip1 - computed: false, optional: true, required: false
  private _alkiraLoopbackIp1?: string; 
  public get alkiraLoopbackIp1() {
    return this.getStringAttribute('alkira_loopback_ip1');
  }
  public set alkiraLoopbackIp1(value: string) {
    this._alkiraLoopbackIp1 = value;
  }
  public resetAlkiraLoopbackIp1() {
    this._alkiraLoopbackIp1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alkiraLoopbackIp1Input() {
    return this._alkiraLoopbackIp1;
  }

  // alkira_loopback_ip2 - computed: false, optional: true, required: false
  private _alkiraLoopbackIp2?: string; 
  public get alkiraLoopbackIp2() {
    return this.getStringAttribute('alkira_loopback_ip2');
  }
  public set alkiraLoopbackIp2(value: string) {
    this._alkiraLoopbackIp2 = value;
  }
  public resetAlkiraLoopbackIp2() {
    this._alkiraLoopbackIp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alkiraLoopbackIp2Input() {
    return this._alkiraLoopbackIp2;
  }

  // customer_loopback_ip - computed: false, optional: true, required: false
  private _customerLoopbackIp?: string; 
  public get customerLoopbackIp() {
    return this.getStringAttribute('customer_loopback_ip');
  }
  public set customerLoopbackIp(value: string) {
    this._customerLoopbackIp = value;
  }
  public resetCustomerLoopbackIp() {
    this._customerLoopbackIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerLoopbackIpInput() {
    return this._customerLoopbackIp;
  }

  // loopback_subnet - computed: false, optional: false, required: true
  private _loopbackSubnet?: string; 
  public get loopbackSubnet() {
    return this.getStringAttribute('loopback_subnet');
  }
  public set loopbackSubnet(value: string) {
    this._loopbackSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackSubnetInput() {
    return this._loopbackSubnet;
  }

  // number_of_customer_loopback_ips - computed: false, optional: true, required: false
  private _numberOfCustomerLoopbackIps?: number; 
  public get numberOfCustomerLoopbackIps() {
    return this.getNumberAttribute('number_of_customer_loopback_ips');
  }
  public set numberOfCustomerLoopbackIps(value: number) {
    this._numberOfCustomerLoopbackIps = value;
  }
  public resetNumberOfCustomerLoopbackIps() {
    this._numberOfCustomerLoopbackIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfCustomerLoopbackIpsInput() {
    return this._numberOfCustomerLoopbackIps;
  }

  // on_prem_segment_asn - computed: false, optional: false, required: true
  private _onPremSegmentAsn?: number; 
  public get onPremSegmentAsn() {
    return this.getNumberAttribute('on_prem_segment_asn');
  }
  public set onPremSegmentAsn(value: number) {
    this._onPremSegmentAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremSegmentAsnInput() {
    return this._onPremSegmentAsn;
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

  // tunnel_count_per_customer_loopback_ip - computed: false, optional: true, required: false
  private _tunnelCountPerCustomerLoopbackIp?: number; 
  public get tunnelCountPerCustomerLoopbackIp() {
    return this.getNumberAttribute('tunnel_count_per_customer_loopback_ip');
  }
  public set tunnelCountPerCustomerLoopbackIp(value: number) {
    this._tunnelCountPerCustomerLoopbackIp = value;
  }
  public resetTunnelCountPerCustomerLoopbackIp() {
    this._tunnelCountPerCustomerLoopbackIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelCountPerCustomerLoopbackIpInput() {
    return this._tunnelCountPerCustomerLoopbackIp;
  }
}

export class ConnectorAwsDxInstanceSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorAwsDxInstanceSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAwsDxInstanceSegmentOptionsOutputReference {
    return new ConnectorAwsDxInstanceSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAwsDxInstance {
  /**
  * AWS region of the Direct Connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#aws_region ConnectorAwsDx#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The BGP MD5 authentication key forDirect Connect Gateway to verify peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#bgp_auth_key ConnectorAwsDx#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * The BGP MD5 authentication key forAlkira to authenticate CXP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#bgp_auth_key_alkira ConnectorAwsDx#bgp_auth_key_alkira}
  */
  readonly bgpAuthKeyAlkira?: string;
  /**
  * AWS DirctConnect connection ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#connection_id ConnectorAwsDx#connection_id}
  */
  readonly connectionId: string;
  /**
  * ID of AWS credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#credential_id ConnectorAwsDx#credential_id}
  */
  readonly credentialId: string;
  /**
  * The ASN of AWS side of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#dx_asn ConnectorAwsDx#dx_asn}
  */
  readonly dxAsn: number;
  /**
  * Valid IP from underlay_prefix network used on AWS Direct Connect gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#dx_gateway_ip ConnectorAwsDx#dx_gateway_ip}
  */
  readonly dxGatewayIp?: string;
  /**
  * The MAC address of the gateway.It's required if the `tunnel_protocol` is `VXLAN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#gateway_mac_address ConnectorAwsDx#gateway_mac_address}
  */
  readonly gatewayMacAddress?: string;
  /**
  * The name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#name ConnectorAwsDx#name}
  */
  readonly name: string;
  /**
  * The customer underlay ASN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#on_prem_asn ConnectorAwsDx#on_prem_asn}
  */
  readonly onPremAsn: number;
  /**
  * Valid IP from customer gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#on_prem_gateway_ip ConnectorAwsDx#on_prem_gateway_ip}
  */
  readonly onPremGatewayIp?: string;
  /**
  * A `/30` IP prefix for on-premise gateway and DirectConnect gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#underlay_prefix ConnectorAwsDx#underlay_prefix}
  */
  readonly underlayPrefix?: string;
  /**
  * ID of customer facing VLAN provided by the co-location provider, configured for the link between colo provider and the customer router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#vlan_id ConnectorAwsDx#vlan_id}
  */
  readonly vlanId: number;
  /**
  * Customer provided VXLAN Network Identifier (VNI). This field is required only when `tunnel_protocol` is `VXLAN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#vni ConnectorAwsDx#vni}
  */
  readonly vni?: number;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#segment_options ConnectorAwsDx#segment_options}
  */
  readonly segmentOptions: ConnectorAwsDxInstanceSegmentOptions[] | cdktf.IResolvable;
}

export function connectorAwsDxInstanceToTerraform(struct?: ConnectorAwsDxInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    bgp_auth_key: cdktf.stringToTerraform(struct!.bgpAuthKey),
    bgp_auth_key_alkira: cdktf.stringToTerraform(struct!.bgpAuthKeyAlkira),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    dx_asn: cdktf.numberToTerraform(struct!.dxAsn),
    dx_gateway_ip: cdktf.stringToTerraform(struct!.dxGatewayIp),
    gateway_mac_address: cdktf.stringToTerraform(struct!.gatewayMacAddress),
    name: cdktf.stringToTerraform(struct!.name),
    on_prem_asn: cdktf.numberToTerraform(struct!.onPremAsn),
    on_prem_gateway_ip: cdktf.stringToTerraform(struct!.onPremGatewayIp),
    underlay_prefix: cdktf.stringToTerraform(struct!.underlayPrefix),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    vni: cdktf.numberToTerraform(struct!.vni),
    segment_options: cdktf.listMapper(connectorAwsDxInstanceSegmentOptionsToTerraform, true)(struct!.segmentOptions),
  }
}


export function connectorAwsDxInstanceToHclTerraform(struct?: ConnectorAwsDxInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.bgpAuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgp_auth_key_alkira: {
      value: cdktf.stringToHclTerraform(struct!.bgpAuthKeyAlkira),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dx_asn: {
      value: cdktf.numberToHclTerraform(struct!.dxAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dx_gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.dxGatewayIp),
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
    on_prem_asn: {
      value: cdktf.numberToHclTerraform(struct!.onPremAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_prem_gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.onPremGatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    underlay_prefix: {
      value: cdktf.stringToHclTerraform(struct!.underlayPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vni: {
      value: cdktf.numberToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_options: {
      value: cdktf.listMapperHcl(connectorAwsDxInstanceSegmentOptionsToHclTerraform, true)(struct!.segmentOptions),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectorAwsDxInstanceSegmentOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAwsDxInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAwsDxInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._bgpAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAuthKey = this._bgpAuthKey;
    }
    if (this._bgpAuthKeyAlkira !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAuthKeyAlkira = this._bgpAuthKeyAlkira;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._credentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialId = this._credentialId;
    }
    if (this._dxAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dxAsn = this._dxAsn;
    }
    if (this._dxGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dxGatewayIp = this._dxGatewayIp;
    }
    if (this._gatewayMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMacAddress = this._gatewayMacAddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onPremAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremAsn = this._onPremAsn;
    }
    if (this._onPremGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremGatewayIp = this._onPremGatewayIp;
    }
    if (this._underlayPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.underlayPrefix = this._underlayPrefix;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    if (this._segmentOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentOptions = this._segmentOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAwsDxInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._bgpAuthKey = undefined;
      this._bgpAuthKeyAlkira = undefined;
      this._connectionId = undefined;
      this._credentialId = undefined;
      this._dxAsn = undefined;
      this._dxGatewayIp = undefined;
      this._gatewayMacAddress = undefined;
      this._name = undefined;
      this._onPremAsn = undefined;
      this._onPremGatewayIp = undefined;
      this._underlayPrefix = undefined;
      this._vlanId = undefined;
      this._vni = undefined;
      this._segmentOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._bgpAuthKey = value.bgpAuthKey;
      this._bgpAuthKeyAlkira = value.bgpAuthKeyAlkira;
      this._connectionId = value.connectionId;
      this._credentialId = value.credentialId;
      this._dxAsn = value.dxAsn;
      this._dxGatewayIp = value.dxGatewayIp;
      this._gatewayMacAddress = value.gatewayMacAddress;
      this._name = value.name;
      this._onPremAsn = value.onPremAsn;
      this._onPremGatewayIp = value.onPremGatewayIp;
      this._underlayPrefix = value.underlayPrefix;
      this._vlanId = value.vlanId;
      this._vni = value.vni;
      this._segmentOptions.internalValue = value.segmentOptions;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
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

  // bgp_auth_key_alkira - computed: false, optional: true, required: false
  private _bgpAuthKeyAlkira?: string; 
  public get bgpAuthKeyAlkira() {
    return this.getStringAttribute('bgp_auth_key_alkira');
  }
  public set bgpAuthKeyAlkira(value: string) {
    this._bgpAuthKeyAlkira = value;
  }
  public resetBgpAuthKeyAlkira() {
    this._bgpAuthKeyAlkira = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyAlkiraInput() {
    return this._bgpAuthKeyAlkira;
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: string; 
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }
  public set credentialId(value: string) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // dx_asn - computed: false, optional: false, required: true
  private _dxAsn?: number; 
  public get dxAsn() {
    return this.getNumberAttribute('dx_asn');
  }
  public set dxAsn(value: number) {
    this._dxAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dxAsnInput() {
    return this._dxAsn;
  }

  // dx_gateway_ip - computed: false, optional: true, required: false
  private _dxGatewayIp?: string; 
  public get dxGatewayIp() {
    return this.getStringAttribute('dx_gateway_ip');
  }
  public set dxGatewayIp(value: string) {
    this._dxGatewayIp = value;
  }
  public resetDxGatewayIp() {
    this._dxGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dxGatewayIpInput() {
    return this._dxGatewayIp;
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

  // on_prem_asn - computed: false, optional: false, required: true
  private _onPremAsn?: number; 
  public get onPremAsn() {
    return this.getNumberAttribute('on_prem_asn');
  }
  public set onPremAsn(value: number) {
    this._onPremAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremAsnInput() {
    return this._onPremAsn;
  }

  // on_prem_gateway_ip - computed: false, optional: true, required: false
  private _onPremGatewayIp?: string; 
  public get onPremGatewayIp() {
    return this.getStringAttribute('on_prem_gateway_ip');
  }
  public set onPremGatewayIp(value: string) {
    this._onPremGatewayIp = value;
  }
  public resetOnPremGatewayIp() {
    this._onPremGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremGatewayIpInput() {
    return this._onPremGatewayIp;
  }

  // underlay_prefix - computed: false, optional: true, required: false
  private _underlayPrefix?: string; 
  public get underlayPrefix() {
    return this.getStringAttribute('underlay_prefix');
  }
  public set underlayPrefix(value: string) {
    this._underlayPrefix = value;
  }
  public resetUnderlayPrefix() {
    this._underlayPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayPrefixInput() {
    return this._underlayPrefix;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // segment_options - computed: false, optional: false, required: true
  private _segmentOptions = new ConnectorAwsDxInstanceSegmentOptionsList(this, "segment_options", true);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ConnectorAwsDxInstanceSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
  }
}

export class ConnectorAwsDxInstanceList extends cdktf.ComplexList {
  public internalValue? : ConnectorAwsDxInstance[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAwsDxInstanceOutputReference {
    return new ConnectorAwsDxInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx alkira_connector_aws_dx}
*/
export class ConnectorAwsDx extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_aws_dx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorAwsDx resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorAwsDx to import
  * @param importFromId The id of the existing ConnectorAwsDx that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorAwsDx to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_aws_dx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aws_dx alkira_connector_aws_dx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorAwsDxConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorAwsDxConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_aws_dx',
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
    this._name = config.name;
    this._scaleGroupId = config.scaleGroupId;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._instance.internalValue = config.instance;
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

  // instance - computed: false, optional: false, required: true
  private _instance = new ConnectorAwsDxInstanceList(this, "instance", false);
  public get instance() {
    return this._instance;
  }
  public putInstance(value: ConnectorAwsDxInstance[] | cdktf.IResolvable) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
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
      name: cdktf.stringToTerraform(this._name),
      scale_group_id: cdktf.stringToTerraform(this._scaleGroupId),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      instance: cdktf.listMapper(connectorAwsDxInstanceToTerraform, true)(this._instance.internalValue),
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
      instance: {
        value: cdktf.listMapperHcl(connectorAwsDxInstanceToHclTerraform, true)(this._instance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorAwsDxInstanceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
