// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorAkamaiProlexicConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Akamai BGP ASN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#akamai_bgp_asn ConnectorAkamaiProlexic#akamai_bgp_asn}
  */
  readonly akamaiBgpAsn: number;
  /**
  * The Akamai BGP Authentication Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#akamai_bgp_authentication_key ConnectorAkamaiProlexic#akamai_bgp_authentication_key}
  */
  readonly akamaiBgpAuthenticationKey: string;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#billing_tag_ids ConnectorAkamaiProlexic#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#cxp ConnectorAkamaiProlexic#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#description ConnectorAkamaiProlexic#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#enabled ConnectorAkamaiProlexic#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#group ConnectorAkamaiProlexic#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#id ConnectorAkamaiProlexic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#name ConnectorAkamaiProlexic#name}
  */
  readonly name: string;
  /**
  * The ID of segments associated with the connector. Currently, only `1` segment is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#segment_id ConnectorAkamaiProlexic#segment_id}
  */
  readonly segmentId: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#size ConnectorAkamaiProlexic#size}
  */
  readonly size: string;
  /**
  * byoip_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#byoip_options ConnectorAkamaiProlexic#byoip_options}
  */
  readonly byoipOptions: ConnectorAkamaiProlexicByoipOptions[] | cdktf.IResolvable;
  /**
  * tunnel_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#tunnel_configuration ConnectorAkamaiProlexic#tunnel_configuration}
  */
  readonly tunnelConfiguration: ConnectorAkamaiProlexicTunnelConfiguration[] | cdktf.IResolvable;
}
export interface ConnectorAkamaiProlexicByoipOptions {
  /**
  * BYOIP prefix ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#byoip_prefix_id ConnectorAkamaiProlexic#byoip_prefix_id}
  */
  readonly byoipPrefixId: number;
  /**
  * Whether enabling route advertisement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#enable_route_advertisement ConnectorAkamaiProlexic#enable_route_advertisement}
  */
  readonly enableRouteAdvertisement: boolean | cdktf.IResolvable;
}

export function connectorAkamaiProlexicByoipOptionsToTerraform(struct?: ConnectorAkamaiProlexicByoipOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byoip_prefix_id: cdktf.numberToTerraform(struct!.byoipPrefixId),
    enable_route_advertisement: cdktf.booleanToTerraform(struct!.enableRouteAdvertisement),
  }
}


export function connectorAkamaiProlexicByoipOptionsToHclTerraform(struct?: ConnectorAkamaiProlexicByoipOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byoip_prefix_id: {
      value: cdktf.numberToHclTerraform(struct!.byoipPrefixId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_route_advertisement: {
      value: cdktf.booleanToHclTerraform(struct!.enableRouteAdvertisement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAkamaiProlexicByoipOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAkamaiProlexicByoipOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byoipPrefixId !== undefined) {
      hasAnyValues = true;
      internalValueResult.byoipPrefixId = this._byoipPrefixId;
    }
    if (this._enableRouteAdvertisement !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRouteAdvertisement = this._enableRouteAdvertisement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAkamaiProlexicByoipOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byoipPrefixId = undefined;
      this._enableRouteAdvertisement = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byoipPrefixId = value.byoipPrefixId;
      this._enableRouteAdvertisement = value.enableRouteAdvertisement;
    }
  }

  // byoip_prefix_id - computed: false, optional: false, required: true
  private _byoipPrefixId?: number; 
  public get byoipPrefixId() {
    return this.getNumberAttribute('byoip_prefix_id');
  }
  public set byoipPrefixId(value: number) {
    this._byoipPrefixId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipPrefixIdInput() {
    return this._byoipPrefixId;
  }

  // enable_route_advertisement - computed: false, optional: false, required: true
  private _enableRouteAdvertisement?: boolean | cdktf.IResolvable; 
  public get enableRouteAdvertisement() {
    return this.getBooleanAttribute('enable_route_advertisement');
  }
  public set enableRouteAdvertisement(value: boolean | cdktf.IResolvable) {
    this._enableRouteAdvertisement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRouteAdvertisementInput() {
    return this._enableRouteAdvertisement;
  }
}

export class ConnectorAkamaiProlexicByoipOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorAkamaiProlexicByoipOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAkamaiProlexicByoipOptionsOutputReference {
    return new ConnectorAkamaiProlexicByoipOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAkamaiProlexicTunnelConfigurationTunnelIps {
  /**
  * The overlay IP of the GRE tunnel on the Alkira side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#akamai_overlay_tunnel_ip ConnectorAkamaiProlexic#akamai_overlay_tunnel_ip}
  */
  readonly akamaiOverlayTunnelIp: string;
  /**
  * The overlay IP of the GRE tunnel on the Alkira side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#alkira_overlay_tunnel_ip ConnectorAkamaiProlexic#alkira_overlay_tunnel_ip}
  */
  readonly alkiraOverlayTunnelIp: string;
  /**
  * The underlay tunnel IP on the Akamai side to be used to configure tunnels between the Alkira CXP and the Akamai Prolexic service. A RAN (Routed Access Network) is the unit of availability for the Route GRE 3.0 service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#ran_tunnel_ip ConnectorAkamaiProlexic#ran_tunnel_ip}
  */
  readonly ranTunnelIp: string;
}

export function connectorAkamaiProlexicTunnelConfigurationTunnelIpsToTerraform(struct?: ConnectorAkamaiProlexicTunnelConfigurationTunnelIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    akamai_overlay_tunnel_ip: cdktf.stringToTerraform(struct!.akamaiOverlayTunnelIp),
    alkira_overlay_tunnel_ip: cdktf.stringToTerraform(struct!.alkiraOverlayTunnelIp),
    ran_tunnel_ip: cdktf.stringToTerraform(struct!.ranTunnelIp),
  }
}


export function connectorAkamaiProlexicTunnelConfigurationTunnelIpsToHclTerraform(struct?: ConnectorAkamaiProlexicTunnelConfigurationTunnelIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    akamai_overlay_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.akamaiOverlayTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alkira_overlay_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.alkiraOverlayTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ran_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.ranTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAkamaiProlexicTunnelConfigurationTunnelIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAkamaiProlexicTunnelConfigurationTunnelIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._akamaiOverlayTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.akamaiOverlayTunnelIp = this._akamaiOverlayTunnelIp;
    }
    if (this._alkiraOverlayTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alkiraOverlayTunnelIp = this._alkiraOverlayTunnelIp;
    }
    if (this._ranTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ranTunnelIp = this._ranTunnelIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAkamaiProlexicTunnelConfigurationTunnelIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._akamaiOverlayTunnelIp = undefined;
      this._alkiraOverlayTunnelIp = undefined;
      this._ranTunnelIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._akamaiOverlayTunnelIp = value.akamaiOverlayTunnelIp;
      this._alkiraOverlayTunnelIp = value.alkiraOverlayTunnelIp;
      this._ranTunnelIp = value.ranTunnelIp;
    }
  }

  // akamai_overlay_tunnel_ip - computed: false, optional: false, required: true
  private _akamaiOverlayTunnelIp?: string; 
  public get akamaiOverlayTunnelIp() {
    return this.getStringAttribute('akamai_overlay_tunnel_ip');
  }
  public set akamaiOverlayTunnelIp(value: string) {
    this._akamaiOverlayTunnelIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get akamaiOverlayTunnelIpInput() {
    return this._akamaiOverlayTunnelIp;
  }

  // alkira_overlay_tunnel_ip - computed: false, optional: false, required: true
  private _alkiraOverlayTunnelIp?: string; 
  public get alkiraOverlayTunnelIp() {
    return this.getStringAttribute('alkira_overlay_tunnel_ip');
  }
  public set alkiraOverlayTunnelIp(value: string) {
    this._alkiraOverlayTunnelIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alkiraOverlayTunnelIpInput() {
    return this._alkiraOverlayTunnelIp;
  }

  // ran_tunnel_ip - computed: false, optional: false, required: true
  private _ranTunnelIp?: string; 
  public get ranTunnelIp() {
    return this.getStringAttribute('ran_tunnel_ip');
  }
  public set ranTunnelIp(value: string) {
    this._ranTunnelIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ranTunnelIpInput() {
    return this._ranTunnelIp;
  }
}

export class ConnectorAkamaiProlexicTunnelConfigurationTunnelIpsList extends cdktf.ComplexList {
  public internalValue? : ConnectorAkamaiProlexicTunnelConfigurationTunnelIps[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAkamaiProlexicTunnelConfigurationTunnelIpsOutputReference {
    return new ConnectorAkamaiProlexicTunnelConfigurationTunnelIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAkamaiProlexicTunnelConfiguration {
  /**
  * Alkira public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#alkira_public_ip ConnectorAkamaiProlexic#alkira_public_ip}
  */
  readonly alkiraPublicIp: string;
  /**
  * tunnel_ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#tunnel_ips ConnectorAkamaiProlexic#tunnel_ips}
  */
  readonly tunnelIps: ConnectorAkamaiProlexicTunnelConfigurationTunnelIps[] | cdktf.IResolvable;
}

export function connectorAkamaiProlexicTunnelConfigurationToTerraform(struct?: ConnectorAkamaiProlexicTunnelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alkira_public_ip: cdktf.stringToTerraform(struct!.alkiraPublicIp),
    tunnel_ips: cdktf.listMapper(connectorAkamaiProlexicTunnelConfigurationTunnelIpsToTerraform, true)(struct!.tunnelIps),
  }
}


export function connectorAkamaiProlexicTunnelConfigurationToHclTerraform(struct?: ConnectorAkamaiProlexicTunnelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alkira_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.alkiraPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_ips: {
      value: cdktf.listMapperHcl(connectorAkamaiProlexicTunnelConfigurationTunnelIpsToHclTerraform, true)(struct!.tunnelIps),
      isBlock: true,
      type: "set",
      storageClassType: "ConnectorAkamaiProlexicTunnelConfigurationTunnelIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAkamaiProlexicTunnelConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAkamaiProlexicTunnelConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alkiraPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alkiraPublicIp = this._alkiraPublicIp;
    }
    if (this._tunnelIps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelIps = this._tunnelIps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAkamaiProlexicTunnelConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alkiraPublicIp = undefined;
      this._tunnelIps.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alkiraPublicIp = value.alkiraPublicIp;
      this._tunnelIps.internalValue = value.tunnelIps;
    }
  }

  // alkira_public_ip - computed: false, optional: false, required: true
  private _alkiraPublicIp?: string; 
  public get alkiraPublicIp() {
    return this.getStringAttribute('alkira_public_ip');
  }
  public set alkiraPublicIp(value: string) {
    this._alkiraPublicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alkiraPublicIpInput() {
    return this._alkiraPublicIp;
  }

  // tunnel_ips - computed: false, optional: false, required: true
  private _tunnelIps = new ConnectorAkamaiProlexicTunnelConfigurationTunnelIpsList(this, "tunnel_ips", true);
  public get tunnelIps() {
    return this._tunnelIps;
  }
  public putTunnelIps(value: ConnectorAkamaiProlexicTunnelConfigurationTunnelIps[] | cdktf.IResolvable) {
    this._tunnelIps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIpsInput() {
    return this._tunnelIps.internalValue;
  }
}

export class ConnectorAkamaiProlexicTunnelConfigurationList extends cdktf.ComplexList {
  public internalValue? : ConnectorAkamaiProlexicTunnelConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAkamaiProlexicTunnelConfigurationOutputReference {
    return new ConnectorAkamaiProlexicTunnelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic alkira_connector_akamai_prolexic}
*/
export class ConnectorAkamaiProlexic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_akamai_prolexic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorAkamaiProlexic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorAkamaiProlexic to import
  * @param importFromId The id of the existing ConnectorAkamaiProlexic that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorAkamaiProlexic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_akamai_prolexic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_akamai_prolexic alkira_connector_akamai_prolexic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorAkamaiProlexicConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorAkamaiProlexicConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_akamai_prolexic',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._akamaiBgpAsn = config.akamaiBgpAsn;
    this._akamaiBgpAuthenticationKey = config.akamaiBgpAuthenticationKey;
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._segmentId = config.segmentId;
    this._size = config.size;
    this._byoipOptions.internalValue = config.byoipOptions;
    this._tunnelConfiguration.internalValue = config.tunnelConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // akamai_bgp_asn - computed: false, optional: false, required: true
  private _akamaiBgpAsn?: number; 
  public get akamaiBgpAsn() {
    return this.getNumberAttribute('akamai_bgp_asn');
  }
  public set akamaiBgpAsn(value: number) {
    this._akamaiBgpAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get akamaiBgpAsnInput() {
    return this._akamaiBgpAsn;
  }

  // akamai_bgp_authentication_key - computed: false, optional: false, required: true
  private _akamaiBgpAuthenticationKey?: string; 
  public get akamaiBgpAuthenticationKey() {
    return this.getStringAttribute('akamai_bgp_authentication_key');
  }
  public set akamaiBgpAuthenticationKey(value: string) {
    this._akamaiBgpAuthenticationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get akamaiBgpAuthenticationKeyInput() {
    return this._akamaiBgpAuthenticationKey;
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

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
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

  // byoip_options - computed: false, optional: false, required: true
  private _byoipOptions = new ConnectorAkamaiProlexicByoipOptionsList(this, "byoip_options", true);
  public get byoipOptions() {
    return this._byoipOptions;
  }
  public putByoipOptions(value: ConnectorAkamaiProlexicByoipOptions[] | cdktf.IResolvable) {
    this._byoipOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get byoipOptionsInput() {
    return this._byoipOptions.internalValue;
  }

  // tunnel_configuration - computed: false, optional: false, required: true
  private _tunnelConfiguration = new ConnectorAkamaiProlexicTunnelConfigurationList(this, "tunnel_configuration", true);
  public get tunnelConfiguration() {
    return this._tunnelConfiguration;
  }
  public putTunnelConfiguration(value: ConnectorAkamaiProlexicTunnelConfiguration[] | cdktf.IResolvable) {
    this._tunnelConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelConfigurationInput() {
    return this._tunnelConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      akamai_bgp_asn: cdktf.numberToTerraform(this._akamaiBgpAsn),
      akamai_bgp_authentication_key: cdktf.stringToTerraform(this._akamaiBgpAuthenticationKey),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      size: cdktf.stringToTerraform(this._size),
      byoip_options: cdktf.listMapper(connectorAkamaiProlexicByoipOptionsToTerraform, true)(this._byoipOptions.internalValue),
      tunnel_configuration: cdktf.listMapper(connectorAkamaiProlexicTunnelConfigurationToTerraform, true)(this._tunnelConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      akamai_bgp_asn: {
        value: cdktf.numberToHclTerraform(this._akamaiBgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      akamai_bgp_authentication_key: {
        value: cdktf.stringToHclTerraform(this._akamaiBgpAuthenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      byoip_options: {
        value: cdktf.listMapperHcl(connectorAkamaiProlexicByoipOptionsToHclTerraform, true)(this._byoipOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorAkamaiProlexicByoipOptionsList",
      },
      tunnel_configuration: {
        value: cdktf.listMapperHcl(connectorAkamaiProlexicTunnelConfigurationToHclTerraform, true)(this._tunnelConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorAkamaiProlexicTunnelConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
