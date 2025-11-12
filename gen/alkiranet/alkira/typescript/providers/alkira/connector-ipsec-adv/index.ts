// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorIpsecAdvConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable access to the internet when traffic arrives via this connector. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#advertise_default_route ConnectorIpsecAdv#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Additional options for each segment associated with the connector. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#advertise_on_prem_routes ConnectorIpsecAdv#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#billing_tag_ids ConnectorIpsecAdv#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#cxp ConnectorIpsecAdv#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#description ConnectorIpsecAdv#description}
  */
  readonly description?: string;
  /**
  * The destination type of the connector. The value could be `IPSEC_ENDPOINT`, `AWS_VPN_CONNECTION`, `AZURE_VPN_CONNECTION`. The default value is `IPSEC_ENDPOINT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#destination_type ConnectorIpsecAdv#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#enabled ConnectorIpsecAdv#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#group ConnectorIpsecAdv#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#id ConnectorIpsecAdv#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#name ConnectorIpsecAdv#name}
  */
  readonly name: string;
  /**
  * The ID of the segment associated with the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#segment_id ConnectorIpsecAdv#segment_id}
  */
  readonly segmentId: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `4LARGE`, `5LARGE`, `10LARGE` and `20LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#size ConnectorIpsecAdv#size}
  */
  readonly size: string;
  /**
  * The number of tunnels per gateway instance. Default is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#tunnels_per_gateway ConnectorIpsecAdv#tunnels_per_gateway}
  */
  readonly tunnelsPerGateway?: number;
  /**
  * The VPN mode could be only set to `ROUTE_BASED` for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#vpn_mode ConnectorIpsecAdv#vpn_mode}
  */
  readonly vpnMode?: string;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#gateway ConnectorIpsecAdv#gateway}
  */
  readonly gateway: ConnectorIpsecAdvGateway[] | cdktf.IResolvable;
  /**
  * policy_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#policy_options ConnectorIpsecAdv#policy_options}
  */
  readonly policyOptions?: ConnectorIpsecAdvPolicyOptions[] | cdktf.IResolvable;
  /**
  * routing_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#routing_options ConnectorIpsecAdv#routing_options}
  */
  readonly routingOptions?: ConnectorIpsecAdvRoutingOptions[] | cdktf.IResolvable;
}
export interface ConnectorIpsecAdvGatewayTunnelAdvancedOptions {
  /**
  * IKE version, either `IKEv1` or `IKEv2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#ike_version ConnectorIpsecAdv#ike_version}
  */
  readonly ikeVersion: string;
  /**
  * When the value is `false`, CXP will initiate the IKE connection and in all other cases, the customer gateway will initiate the IKE connection. When `gateway_ip_type` is `DYNAMIC`,this field must be `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#initiator ConnectorIpsecAdv#initiator}
  */
  readonly initiator: boolean | cdktf.IResolvable;
  /**
  * IKE identity to use for authentication round, one of `FQDN`, `USER_FQDN`, `KEYID`, `IP_ADDR`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#remote_auth_type ConnectorIpsecAdv#remote_auth_type}
  */
  readonly remoteAuthType: string;
  /**
  * Remote-ID value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#remote_auth_value ConnectorIpsecAdv#remote_auth_value}
  */
  readonly remoteAuthValue: string;
}

export function connectorIpsecAdvGatewayTunnelAdvancedOptionsToTerraform(struct?: ConnectorIpsecAdvGatewayTunnelAdvancedOptionsOutputReference | ConnectorIpsecAdvGatewayTunnelAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    initiator: cdktf.booleanToTerraform(struct!.initiator),
    remote_auth_type: cdktf.stringToTerraform(struct!.remoteAuthType),
    remote_auth_value: cdktf.stringToTerraform(struct!.remoteAuthValue),
  }
}


export function connectorIpsecAdvGatewayTunnelAdvancedOptionsToHclTerraform(struct?: ConnectorIpsecAdvGatewayTunnelAdvancedOptionsOutputReference | ConnectorIpsecAdvGatewayTunnelAdvancedOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator: {
      value: cdktf.booleanToHclTerraform(struct!.initiator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_auth_type: {
      value: cdktf.stringToHclTerraform(struct!.remoteAuthType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_auth_value: {
      value: cdktf.stringToHclTerraform(struct!.remoteAuthValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecAdvGatewayTunnelAdvancedOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectorIpsecAdvGatewayTunnelAdvancedOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._initiator !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiator = this._initiator;
    }
    if (this._remoteAuthType !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAuthType = this._remoteAuthType;
    }
    if (this._remoteAuthValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAuthValue = this._remoteAuthValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecAdvGatewayTunnelAdvancedOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ikeVersion = undefined;
      this._initiator = undefined;
      this._remoteAuthType = undefined;
      this._remoteAuthValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ikeVersion = value.ikeVersion;
      this._initiator = value.initiator;
      this._remoteAuthType = value.remoteAuthType;
      this._remoteAuthValue = value.remoteAuthValue;
    }
  }

  // ike_version - computed: false, optional: false, required: true
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // initiator - computed: false, optional: false, required: true
  private _initiator?: boolean | cdktf.IResolvable; 
  public get initiator() {
    return this.getBooleanAttribute('initiator');
  }
  public set initiator(value: boolean | cdktf.IResolvable) {
    this._initiator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
  }

  // remote_auth_type - computed: false, optional: false, required: true
  private _remoteAuthType?: string; 
  public get remoteAuthType() {
    return this.getStringAttribute('remote_auth_type');
  }
  public set remoteAuthType(value: string) {
    this._remoteAuthType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthTypeInput() {
    return this._remoteAuthType;
  }

  // remote_auth_value - computed: false, optional: false, required: true
  private _remoteAuthValue?: string; 
  public get remoteAuthValue() {
    return this.getStringAttribute('remote_auth_value');
  }
  public set remoteAuthValue(value: string) {
    this._remoteAuthValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthValueInput() {
    return this._remoteAuthValue;
  }
}
export interface ConnectorIpsecAdvGatewayTunnel {
  /**
  * The overlay IP reservation ID of the customer end of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#customer_end_overlay_ip_reservation_id ConnectorIpsecAdv#customer_end_overlay_ip_reservation_id}
  */
  readonly customerEndOverlayIpReservationId: string;
  /**
  * The overlay IP reservation ID of the CXP end of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#cxp_end_overlay_ip_reservation_id ConnectorIpsecAdv#cxp_end_overlay_ip_reservation_id}
  */
  readonly cxpEndOverlayIpReservationId: string;
  /**
  * The public IP reservation ID of the CXP end of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#cxp_end_public_ip_reservation_id ConnectorIpsecAdv#cxp_end_public_ip_reservation_id}
  */
  readonly cxpEndPublicIpReservationId: string;
  /**
  * The pre-shared key of the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#preshared_key ConnectorIpsecAdv#preshared_key}
  */
  readonly presharedKey: string;
  /**
  * The ID of the IPSec Tunnel Profile (`connector_ipsec_tunnel_profile`). `advanced_options` block is required when this is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#profile_id ConnectorIpsecAdv#profile_id}
  */
  readonly profileId?: number;
  /**
  * advanced_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#advanced_options ConnectorIpsecAdv#advanced_options}
  */
  readonly advancedOptions?: ConnectorIpsecAdvGatewayTunnelAdvancedOptions;
}

export function connectorIpsecAdvGatewayTunnelToTerraform(struct?: ConnectorIpsecAdvGatewayTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_end_overlay_ip_reservation_id: cdktf.stringToTerraform(struct!.customerEndOverlayIpReservationId),
    cxp_end_overlay_ip_reservation_id: cdktf.stringToTerraform(struct!.cxpEndOverlayIpReservationId),
    cxp_end_public_ip_reservation_id: cdktf.stringToTerraform(struct!.cxpEndPublicIpReservationId),
    preshared_key: cdktf.stringToTerraform(struct!.presharedKey),
    profile_id: cdktf.numberToTerraform(struct!.profileId),
    advanced_options: connectorIpsecAdvGatewayTunnelAdvancedOptionsToTerraform(struct!.advancedOptions),
  }
}


export function connectorIpsecAdvGatewayTunnelToHclTerraform(struct?: ConnectorIpsecAdvGatewayTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_end_overlay_ip_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.customerEndOverlayIpReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cxp_end_overlay_ip_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.cxpEndOverlayIpReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cxp_end_public_ip_reservation_id: {
      value: cdktf.stringToHclTerraform(struct!.cxpEndPublicIpReservationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preshared_key: {
      value: cdktf.stringToHclTerraform(struct!.presharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_id: {
      value: cdktf.numberToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    advanced_options: {
      value: connectorIpsecAdvGatewayTunnelAdvancedOptionsToHclTerraform(struct!.advancedOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorIpsecAdvGatewayTunnelAdvancedOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecAdvGatewayTunnelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecAdvGatewayTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerEndOverlayIpReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerEndOverlayIpReservationId = this._customerEndOverlayIpReservationId;
    }
    if (this._cxpEndOverlayIpReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxpEndOverlayIpReservationId = this._cxpEndOverlayIpReservationId;
    }
    if (this._cxpEndPublicIpReservationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxpEndPublicIpReservationId = this._cxpEndPublicIpReservationId;
    }
    if (this._presharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.presharedKey = this._presharedKey;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._advancedOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedOptions = this._advancedOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecAdvGatewayTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerEndOverlayIpReservationId = undefined;
      this._cxpEndOverlayIpReservationId = undefined;
      this._cxpEndPublicIpReservationId = undefined;
      this._presharedKey = undefined;
      this._profileId = undefined;
      this._advancedOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerEndOverlayIpReservationId = value.customerEndOverlayIpReservationId;
      this._cxpEndOverlayIpReservationId = value.cxpEndOverlayIpReservationId;
      this._cxpEndPublicIpReservationId = value.cxpEndPublicIpReservationId;
      this._presharedKey = value.presharedKey;
      this._profileId = value.profileId;
      this._advancedOptions.internalValue = value.advancedOptions;
    }
  }

  // customer_end_overlay_ip - computed: true, optional: false, required: false
  public get customerEndOverlayIp() {
    return this.getStringAttribute('customer_end_overlay_ip');
  }

  // customer_end_overlay_ip_reservation_id - computed: false, optional: false, required: true
  private _customerEndOverlayIpReservationId?: string; 
  public get customerEndOverlayIpReservationId() {
    return this.getStringAttribute('customer_end_overlay_ip_reservation_id');
  }
  public set customerEndOverlayIpReservationId(value: string) {
    this._customerEndOverlayIpReservationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerEndOverlayIpReservationIdInput() {
    return this._customerEndOverlayIpReservationId;
  }

  // cxp_end_overlay_ip_reservation_id - computed: false, optional: false, required: true
  private _cxpEndOverlayIpReservationId?: string; 
  public get cxpEndOverlayIpReservationId() {
    return this.getStringAttribute('cxp_end_overlay_ip_reservation_id');
  }
  public set cxpEndOverlayIpReservationId(value: string) {
    this._cxpEndOverlayIpReservationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpEndOverlayIpReservationIdInput() {
    return this._cxpEndOverlayIpReservationId;
  }

  // cxp_end_public_ip_reservation_id - computed: false, optional: false, required: true
  private _cxpEndPublicIpReservationId?: string; 
  public get cxpEndPublicIpReservationId() {
    return this.getStringAttribute('cxp_end_public_ip_reservation_id');
  }
  public set cxpEndPublicIpReservationId(value: string) {
    this._cxpEndPublicIpReservationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpEndPublicIpReservationIdInput() {
    return this._cxpEndPublicIpReservationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // preshared_key - computed: false, optional: false, required: true
  private _presharedKey?: string; 
  public get presharedKey() {
    return this.getStringAttribute('preshared_key');
  }
  public set presharedKey(value: string) {
    this._presharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get presharedKeyInput() {
    return this._presharedKey;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: number; 
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }
  public set profileId(value: number) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // advanced_options - computed: false, optional: true, required: false
  private _advancedOptions = new ConnectorIpsecAdvGatewayTunnelAdvancedOptionsOutputReference(this, "advanced_options");
  public get advancedOptions() {
    return this._advancedOptions;
  }
  public putAdvancedOptions(value: ConnectorIpsecAdvGatewayTunnelAdvancedOptions) {
    this._advancedOptions.internalValue = value;
  }
  public resetAdvancedOptions() {
    this._advancedOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedOptionsInput() {
    return this._advancedOptions.internalValue;
  }
}

export class ConnectorIpsecAdvGatewayTunnelList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecAdvGatewayTunnel[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecAdvGatewayTunnelOutputReference {
    return new ConnectorIpsecAdvGatewayTunnelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorIpsecAdvGateway {
  /**
  * The IP address of the customer gateway. This should be `0.0.0.0` to indicate that this is a dynamic gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#customer_gateway_ip ConnectorIpsecAdv#customer_gateway_ip}
  */
  readonly customerGatewayIp: string;
  /**
  * The value could be `ACTIVE` or`STANDBY`. A gateway in `STANDBY` mode will not be used for traffic unless all other gateways for the connector are down. There can only be one gateway in `STANDBY` mode per connector and there must be at least one gateway that isn't in `STANDBY` mode per connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#ha_mode ConnectorIpsecAdv#ha_mode}
  */
  readonly haMode?: string;
  /**
  * The name of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#name ConnectorIpsecAdv#name}
  */
  readonly name: string;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#tunnel ConnectorIpsecAdv#tunnel}
  */
  readonly tunnel: ConnectorIpsecAdvGatewayTunnel[] | cdktf.IResolvable;
}

export function connectorIpsecAdvGatewayToTerraform(struct?: ConnectorIpsecAdvGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_gateway_ip: cdktf.stringToTerraform(struct!.customerGatewayIp),
    ha_mode: cdktf.stringToTerraform(struct!.haMode),
    name: cdktf.stringToTerraform(struct!.name),
    tunnel: cdktf.listMapper(connectorIpsecAdvGatewayTunnelToTerraform, true)(struct!.tunnel),
  }
}


export function connectorIpsecAdvGatewayToHclTerraform(struct?: ConnectorIpsecAdvGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_gateway_ip: {
      value: cdktf.stringToHclTerraform(struct!.customerGatewayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_mode: {
      value: cdktf.stringToHclTerraform(struct!.haMode),
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
    tunnel: {
      value: cdktf.listMapperHcl(connectorIpsecAdvGatewayTunnelToHclTerraform, true)(struct!.tunnel),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorIpsecAdvGatewayTunnelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecAdvGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecAdvGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerGatewayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGatewayIp = this._customerGatewayIp;
    }
    if (this._haMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.haMode = this._haMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnel = this._tunnel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecAdvGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customerGatewayIp = undefined;
      this._haMode = undefined;
      this._name = undefined;
      this._tunnel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customerGatewayIp = value.customerGatewayIp;
      this._haMode = value.haMode;
      this._name = value.name;
      this._tunnel.internalValue = value.tunnel;
    }
  }

  // customer_gateway_ip - computed: false, optional: false, required: true
  private _customerGatewayIp?: string; 
  public get customerGatewayIp() {
    return this.getStringAttribute('customer_gateway_ip');
  }
  public set customerGatewayIp(value: string) {
    this._customerGatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIpInput() {
    return this._customerGatewayIp;
  }

  // ha_mode - computed: false, optional: true, required: false
  private _haMode?: string; 
  public get haMode() {
    return this.getStringAttribute('ha_mode');
  }
  public set haMode(value: string) {
    this._haMode = value;
  }
  public resetHaMode() {
    this._haMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haModeInput() {
    return this._haMode;
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

  // tunnel - computed: false, optional: false, required: true
  private _tunnel = new ConnectorIpsecAdvGatewayTunnelList(this, "tunnel", false);
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: ConnectorIpsecAdvGatewayTunnel[] | cdktf.IResolvable) {
    this._tunnel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }
}

export class ConnectorIpsecAdvGatewayList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecAdvGateway[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecAdvGatewayOutputReference {
    return new ConnectorIpsecAdvGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorIpsecAdvPolicyOptions {
  /**
  * CXP Prefix List IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#cxp_prefix_list_ids ConnectorIpsecAdv#cxp_prefix_list_ids}
  */
  readonly cxpPrefixListIds: number[];
  /**
  * On-Prem Prefix List IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#on_prem_prefix_list_ids ConnectorIpsecAdv#on_prem_prefix_list_ids}
  */
  readonly onPremPrefixListIds: number[];
}

export function connectorIpsecAdvPolicyOptionsToTerraform(struct?: ConnectorIpsecAdvPolicyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cxp_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.cxpPrefixListIds),
    on_prem_prefix_list_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.onPremPrefixListIds),
  }
}


export function connectorIpsecAdvPolicyOptionsToHclTerraform(struct?: ConnectorIpsecAdvPolicyOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cxp_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.cxpPrefixListIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    on_prem_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.onPremPrefixListIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecAdvPolicyOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecAdvPolicyOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cxpPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.cxpPrefixListIds = this._cxpPrefixListIds;
    }
    if (this._onPremPrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremPrefixListIds = this._onPremPrefixListIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecAdvPolicyOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cxpPrefixListIds = undefined;
      this._onPremPrefixListIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cxpPrefixListIds = value.cxpPrefixListIds;
      this._onPremPrefixListIds = value.onPremPrefixListIds;
    }
  }

  // cxp_prefix_list_ids - computed: false, optional: false, required: true
  private _cxpPrefixListIds?: number[]; 
  public get cxpPrefixListIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('cxp_prefix_list_ids')));
  }
  public set cxpPrefixListIds(value: number[]) {
    this._cxpPrefixListIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpPrefixListIdsInput() {
    return this._cxpPrefixListIds;
  }

  // on_prem_prefix_list_ids - computed: false, optional: false, required: true
  private _onPremPrefixListIds?: number[]; 
  public get onPremPrefixListIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('on_prem_prefix_list_ids')));
  }
  public set onPremPrefixListIds(value: number[]) {
    this._onPremPrefixListIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremPrefixListIdsInput() {
    return this._onPremPrefixListIds;
  }
}

export class ConnectorIpsecAdvPolicyOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecAdvPolicyOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecAdvPolicyOptionsOutputReference {
    return new ConnectorIpsecAdvPolicyOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorIpsecAdvRoutingOptions {
  /**
  * The method to determine the availability of the routes. The value could be `IKE_STATUS` or `IPSEC_INTERFACE_PING`. Default value is `IPSEC_INTERFACE_PING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#availability ConnectorIpsecAdv#availability}
  */
  readonly availability?: string;
  /**
  *  BGP MD5 auth key for Alkira to authenticate Alkira CXP (On Premise Gateway).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#bgp_auth_key ConnectorIpsecAdv#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * The customer gateway ASN to use for dynamic route propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#customer_gateway_asn ConnectorIpsecAdv#customer_gateway_asn}
  */
  readonly customerGatewayAsn?: string;
  /**
  * The ID of prefix list to use for static route propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#prefix_list_id ConnectorIpsecAdv#prefix_list_id}
  */
  readonly prefixListId?: number;
  /**
  * Routing type, one of `STATIC`, `DYNAMIC`, or `BOTH`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#type ConnectorIpsecAdv#type}
  */
  readonly type: string;
}

export function connectorIpsecAdvRoutingOptionsToTerraform(struct?: ConnectorIpsecAdvRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability: cdktf.stringToTerraform(struct!.availability),
    bgp_auth_key: cdktf.stringToTerraform(struct!.bgpAuthKey),
    customer_gateway_asn: cdktf.stringToTerraform(struct!.customerGatewayAsn),
    prefix_list_id: cdktf.numberToTerraform(struct!.prefixListId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function connectorIpsecAdvRoutingOptionsToHclTerraform(struct?: ConnectorIpsecAdvRoutingOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability: {
      value: cdktf.stringToHclTerraform(struct!.availability),
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
    customer_gateway_asn: {
      value: cdktf.stringToHclTerraform(struct!.customerGatewayAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_id: {
      value: cdktf.numberToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorIpsecAdvRoutingOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorIpsecAdvRoutingOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availability !== undefined) {
      hasAnyValues = true;
      internalValueResult.availability = this._availability;
    }
    if (this._bgpAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpAuthKey = this._bgpAuthKey;
    }
    if (this._customerGatewayAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGatewayAsn = this._customerGatewayAsn;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorIpsecAdvRoutingOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availability = undefined;
      this._bgpAuthKey = undefined;
      this._customerGatewayAsn = undefined;
      this._prefixListId = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availability = value.availability;
      this._bgpAuthKey = value.bgpAuthKey;
      this._customerGatewayAsn = value.customerGatewayAsn;
      this._prefixListId = value.prefixListId;
      this._type = value.type;
    }
  }

  // availability - computed: false, optional: true, required: false
  private _availability?: string; 
  public get availability() {
    return this.getStringAttribute('availability');
  }
  public set availability(value: string) {
    this._availability = value;
  }
  public resetAvailability() {
    this._availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability;
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

  // customer_gateway_asn - computed: false, optional: true, required: false
  private _customerGatewayAsn?: string; 
  public get customerGatewayAsn() {
    return this.getStringAttribute('customer_gateway_asn');
  }
  public set customerGatewayAsn(value: string) {
    this._customerGatewayAsn = value;
  }
  public resetCustomerGatewayAsn() {
    this._customerGatewayAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayAsnInput() {
    return this._customerGatewayAsn;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: number; 
  public get prefixListId() {
    return this.getNumberAttribute('prefix_list_id');
  }
  public set prefixListId(value: number) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ConnectorIpsecAdvRoutingOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorIpsecAdvRoutingOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorIpsecAdvRoutingOptionsOutputReference {
    return new ConnectorIpsecAdvRoutingOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv alkira_connector_ipsec_adv}
*/
export class ConnectorIpsecAdv extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_ipsec_adv";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorIpsecAdv resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorIpsecAdv to import
  * @param importFromId The id of the existing ConnectorIpsecAdv that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorIpsecAdv to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_ipsec_adv", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_ipsec_adv alkira_connector_ipsec_adv} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorIpsecAdvConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorIpsecAdvConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_ipsec_adv',
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
    this._advertiseDefaultRoute = config.advertiseDefaultRoute;
    this._advertiseOnPremRoutes = config.advertiseOnPremRoutes;
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._destinationType = config.destinationType;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._segmentId = config.segmentId;
    this._size = config.size;
    this._tunnelsPerGateway = config.tunnelsPerGateway;
    this._vpnMode = config.vpnMode;
    this._gateway.internalValue = config.gateway;
    this._policyOptions.internalValue = config.policyOptions;
    this._routingOptions.internalValue = config.routingOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
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

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
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

  // tunnels_per_gateway - computed: false, optional: true, required: false
  private _tunnelsPerGateway?: number; 
  public get tunnelsPerGateway() {
    return this.getNumberAttribute('tunnels_per_gateway');
  }
  public set tunnelsPerGateway(value: number) {
    this._tunnelsPerGateway = value;
  }
  public resetTunnelsPerGateway() {
    this._tunnelsPerGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelsPerGatewayInput() {
    return this._tunnelsPerGateway;
  }

  // vpn_mode - computed: false, optional: true, required: false
  private _vpnMode?: string; 
  public get vpnMode() {
    return this.getStringAttribute('vpn_mode');
  }
  public set vpnMode(value: string) {
    this._vpnMode = value;
  }
  public resetVpnMode() {
    this._vpnMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnModeInput() {
    return this._vpnMode;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway = new ConnectorIpsecAdvGatewayList(this, "gateway", false);
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: ConnectorIpsecAdvGateway[] | cdktf.IResolvable) {
    this._gateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // policy_options - computed: false, optional: true, required: false
  private _policyOptions = new ConnectorIpsecAdvPolicyOptionsList(this, "policy_options", true);
  public get policyOptions() {
    return this._policyOptions;
  }
  public putPolicyOptions(value: ConnectorIpsecAdvPolicyOptions[] | cdktf.IResolvable) {
    this._policyOptions.internalValue = value;
  }
  public resetPolicyOptions() {
    this._policyOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOptionsInput() {
    return this._policyOptions.internalValue;
  }

  // routing_options - computed: false, optional: true, required: false
  private _routingOptions = new ConnectorIpsecAdvRoutingOptionsList(this, "routing_options", true);
  public get routingOptions() {
    return this._routingOptions;
  }
  public putRoutingOptions(value: ConnectorIpsecAdvRoutingOptions[] | cdktf.IResolvable) {
    this._routingOptions.internalValue = value;
  }
  public resetRoutingOptions() {
    this._routingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingOptionsInput() {
    return this._routingOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertise_default_route: cdktf.booleanToTerraform(this._advertiseDefaultRoute),
      advertise_on_prem_routes: cdktf.booleanToTerraform(this._advertiseOnPremRoutes),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      size: cdktf.stringToTerraform(this._size),
      tunnels_per_gateway: cdktf.numberToTerraform(this._tunnelsPerGateway),
      vpn_mode: cdktf.stringToTerraform(this._vpnMode),
      gateway: cdktf.listMapper(connectorIpsecAdvGatewayToTerraform, true)(this._gateway.internalValue),
      policy_options: cdktf.listMapper(connectorIpsecAdvPolicyOptionsToTerraform, true)(this._policyOptions.internalValue),
      routing_options: cdktf.listMapper(connectorIpsecAdvRoutingOptionsToTerraform, true)(this._routingOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise_default_route: {
        value: cdktf.booleanToHclTerraform(this._advertiseDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advertise_on_prem_routes: {
        value: cdktf.booleanToHclTerraform(this._advertiseOnPremRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
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
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
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
      tunnels_per_gateway: {
        value: cdktf.numberToHclTerraform(this._tunnelsPerGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn_mode: {
        value: cdktf.stringToHclTerraform(this._vpnMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.listMapperHcl(connectorIpsecAdvGatewayToHclTerraform, true)(this._gateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorIpsecAdvGatewayList",
      },
      policy_options: {
        value: cdktf.listMapperHcl(connectorIpsecAdvPolicyOptionsToHclTerraform, true)(this._policyOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorIpsecAdvPolicyOptionsList",
      },
      routing_options: {
        value: cdktf.listMapperHcl(connectorIpsecAdvRoutingOptionsToHclTerraform, true)(this._routingOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorIpsecAdvRoutingOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
