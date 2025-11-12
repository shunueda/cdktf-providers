// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorAzureExpressrouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#billing_tag_ids ConnectorAzureExpressroute#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#cxp ConnectorAzureExpressroute#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#description ConnectorAzureExpressroute#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#enabled ConnectorAzureExpressroute#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#group ConnectorAzureExpressroute#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#id ConnectorAzureExpressroute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#name ConnectorAzureExpressroute#name}
  */
  readonly name: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE`, `10LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#size ConnectorAzureExpressroute#size}
  */
  readonly size: string;
  /**
  * The tunnel protocol. One of `VXLAN`, `VXLAN_GPE`, `IPSEC`. Default is `VXLAN_GPE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#tunnel_protocol ConnectorAzureExpressroute#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * IP address prefix for VWAN Hub. This should be a `/23` prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#vhub_prefix ConnectorAzureExpressroute#vhub_prefix}
  */
  readonly vhubPrefix: string;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#instances ConnectorAzureExpressroute#instances}
  */
  readonly instances: ConnectorAzureExpressrouteInstances[] | cdktf.IResolvable;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#segment_options ConnectorAzureExpressroute#segment_options}
  */
  readonly segmentOptions: ConnectorAzureExpressrouteSegmentOptions[] | cdktf.IResolvable;
}
export interface ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel {
  /**
  * The IKE protocol version. Currently, only `IKEv2` is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#ike_version ConnectorAzureExpressroute#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Whether this endpoint initiates the tunnel connection. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#initiator ConnectorAzureExpressroute#initiator}
  */
  readonly initiator?: boolean | cdktf.IResolvable;
  /**
  * A unique name for the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#name ConnectorAzureExpressroute#name}
  */
  readonly name: string;
  /**
  * The pre-shared key for tunnel authentication. This field is sensitive and will not be displayed in logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#pre_shared_key ConnectorAzureExpressroute#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * The ID of the IPSec Tunnel Profile (`connector_ipsec_tunnel_profile`). 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#profile_id ConnectorAzureExpressroute#profile_id}
  */
  readonly profileId?: number;
  /**
  * The authentication type for the remote endpoint. Only `FQDN` iscurrently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#remote_auth_type ConnectorAzureExpressroute#remote_auth_type}
  */
  readonly remoteAuthType?: string;
  /**
  * The authentication value for the remote endpoint. This field is sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#remote_auth_value ConnectorAzureExpressroute#remote_auth_value}
  */
  readonly remoteAuthValue?: string;
}

export function connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelToTerraform(struct?: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    initiator: cdktf.booleanToTerraform(struct!.initiator),
    name: cdktf.stringToTerraform(struct!.name),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
    profile_id: cdktf.numberToTerraform(struct!.profileId),
    remote_auth_type: cdktf.stringToTerraform(struct!.remoteAuthType),
    remote_auth_value: cdktf.stringToTerraform(struct!.remoteAuthValue),
  }
}


export function connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelToHclTerraform(struct?: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
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

export class ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
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

  public set internalValue(value: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeVersion = undefined;
      this._initiator = undefined;
      this._name = undefined;
      this._preSharedKey = undefined;
      this._profileId = undefined;
      this._remoteAuthType = undefined;
      this._remoteAuthValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeVersion = value.ikeVersion;
      this._initiator = value.initiator;
      this._name = value.name;
      this._preSharedKey = value.preSharedKey;
      this._profileId = value.profileId;
      this._remoteAuthType = value.remoteAuthType;
      this._remoteAuthValue = value.remoteAuthValue;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // initiator - computed: false, optional: true, required: false
  private _initiator?: boolean | cdktf.IResolvable; 
  public get initiator() {
    return this.getBooleanAttribute('initiator');
  }
  public set initiator(value: boolean | cdktf.IResolvable) {
    this._initiator = value;
  }
  public resetInitiator() {
    this._initiator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorInput() {
    return this._initiator;
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

  // pre_shared_key - computed: false, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
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

  // remote_auth_type - computed: false, optional: true, required: false
  private _remoteAuthType?: string; 
  public get remoteAuthType() {
    return this.getStringAttribute('remote_auth_type');
  }
  public set remoteAuthType(value: string) {
    this._remoteAuthType = value;
  }
  public resetRemoteAuthType() {
    this._remoteAuthType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthTypeInput() {
    return this._remoteAuthType;
  }

  // remote_auth_value - computed: false, optional: true, required: false
  private _remoteAuthValue?: string; 
  public get remoteAuthValue() {
    return this.getStringAttribute('remote_auth_value');
  }
  public set remoteAuthValue(value: string) {
    this._remoteAuthValue = value;
  }
  public resetRemoteAuthValue() {
    this._remoteAuthValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAuthValueInput() {
    return this._remoteAuthValue;
  }
}

export class ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelOutputReference {
    return new ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway {
  /**
  * A unique name for the customer gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#name ConnectorAzureExpressroute#name}
  */
  readonly name: string;
  /**
  * tunnel block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#tunnel ConnectorAzureExpressroute#tunnel}
  */
  readonly tunnel: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel[] | cdktf.IResolvable;
}

export function connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayToTerraform(struct?: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tunnel: cdktf.listMapper(connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelToTerraform, true)(struct!.tunnel),
  }
}


export function connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayToHclTerraform(struct?: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway | cdktf.IResolvable): any {
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
    tunnel: {
      value: cdktf.listMapperHcl(connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelToHclTerraform, true)(struct!.tunnel),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._tunnel.internalValue = value.tunnel;
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

  // tunnel - computed: false, optional: false, required: true
  private _tunnel = new ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnelList(this, "tunnel", false);
  public get tunnel() {
    return this._tunnel;
  }
  public putTunnel(value: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayTunnel[] | cdktf.IResolvable) {
    this._tunnel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInput() {
    return this._tunnel.internalValue;
  }
}

export class ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayOutputReference {
    return new ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAzureExpressrouteInstancesIpsecCustomerGateway {
  /**
  * The ID of a segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#segment_id ConnectorAzureExpressroute#segment_id}
  */
  readonly segmentId: string;
  /**
  * customer_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#customer_gateway ConnectorAzureExpressroute#customer_gateway}
  */
  readonly customerGateway: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway[] | cdktf.IResolvable;
}

export function connectorAzureExpressrouteInstancesIpsecCustomerGatewayToTerraform(struct?: ConnectorAzureExpressrouteInstancesIpsecCustomerGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    customer_gateway: cdktf.listMapper(connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayToTerraform, true)(struct!.customerGateway),
  }
}


export function connectorAzureExpressrouteInstancesIpsecCustomerGatewayToHclTerraform(struct?: ConnectorAzureExpressrouteInstancesIpsecCustomerGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_gateway: {
      value: cdktf.listMapperHcl(connectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayToHclTerraform, true)(struct!.customerGateway),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAzureExpressrouteInstancesIpsecCustomerGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._customerGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerGateway = this._customerGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAzureExpressrouteInstancesIpsecCustomerGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._segmentId = undefined;
      this._customerGateway.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._segmentId = value.segmentId;
      this._customerGateway.internalValue = value.customerGateway;
    }
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

  // customer_gateway - computed: false, optional: false, required: true
  private _customerGateway = new ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGatewayList(this, "customer_gateway", false);
  public get customerGateway() {
    return this._customerGateway;
  }
  public putCustomerGateway(value: ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayCustomerGateway[] | cdktf.IResolvable) {
    this._customerGateway.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayInput() {
    return this._customerGateway.internalValue;
  }
}

export class ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureExpressrouteInstancesIpsecCustomerGateway[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayOutputReference {
    return new ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAzureExpressrouteInstances {
  /**
  * An opaque identifier generated when storing Azure VNET credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#credential_id ConnectorAzureExpressroute#credential_id}
  */
  readonly credentialId: string;
  /**
  * ExpressRoute circuit ID from Azure. ExpressRoute Circuit should have a private peering connection provisioned, also an valid authorization key associated with it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#expressroute_circuit_id ConnectorAzureExpressroute#expressroute_circuit_id}
  */
  readonly expressrouteCircuitId: string;
  /**
  * An array containing the mac addresses of VXLAN gateways reachable through ExpressRoute circuit. The field is only expected if VXLAN tunnel protocol is selected, and 2 gateway MAC addresses are expected only if `redundant_router` is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#gateway_mac_address ConnectorAzureExpressroute#gateway_mac_address}
  */
  readonly gatewayMacAddress?: string[];
  /**
  * A `/26` subnet from which loopback IPs would be used to establish underlay VXLAN GPE tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#loopback_subnet ConnectorAzureExpressroute#loopback_subnet}
  */
  readonly loopbackSubnet: string;
  /**
  * User provided connector instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#name ConnectorAzureExpressroute#name}
  */
  readonly name: string;
  /**
  * Indicates if ExpressRoute Circuit terminates on redundant routers on customer side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#redundant_router ConnectorAzureExpressroute#redundant_router}
  */
  readonly redundantRouter?: boolean | cdktf.IResolvable;
  /**
  * This is an optional field if the `tunnel_protocol` is `VXLAN`. If not specified Alkira allocates unique VNI from the range `[16773023, 16777215]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#virtual_network_interface ConnectorAzureExpressroute#virtual_network_interface}
  */
  readonly virtualNetworkInterface?: number[];
  /**
  * ipsec_customer_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#ipsec_customer_gateway ConnectorAzureExpressroute#ipsec_customer_gateway}
  */
  readonly ipsecCustomerGateway?: ConnectorAzureExpressrouteInstancesIpsecCustomerGateway[] | cdktf.IResolvable;
}

export function connectorAzureExpressrouteInstancesToTerraform(struct?: ConnectorAzureExpressrouteInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_id: cdktf.stringToTerraform(struct!.credentialId),
    expressroute_circuit_id: cdktf.stringToTerraform(struct!.expressrouteCircuitId),
    gateway_mac_address: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gatewayMacAddress),
    loopback_subnet: cdktf.stringToTerraform(struct!.loopbackSubnet),
    name: cdktf.stringToTerraform(struct!.name),
    redundant_router: cdktf.booleanToTerraform(struct!.redundantRouter),
    virtual_network_interface: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.virtualNetworkInterface),
    ipsec_customer_gateway: cdktf.listMapper(connectorAzureExpressrouteInstancesIpsecCustomerGatewayToTerraform, true)(struct!.ipsecCustomerGateway),
  }
}


export function connectorAzureExpressrouteInstancesToHclTerraform(struct?: ConnectorAzureExpressrouteInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expressroute_circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.expressrouteCircuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_mac_address: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gatewayMacAddress),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    loopback_subnet: {
      value: cdktf.stringToHclTerraform(struct!.loopbackSubnet),
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
    redundant_router: {
      value: cdktf.booleanToHclTerraform(struct!.redundantRouter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtual_network_interface: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.virtualNetworkInterface),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    ipsec_customer_gateway: {
      value: cdktf.listMapperHcl(connectorAzureExpressrouteInstancesIpsecCustomerGatewayToHclTerraform, true)(struct!.ipsecCustomerGateway),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAzureExpressrouteInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAzureExpressrouteInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialId = this._credentialId;
    }
    if (this._expressrouteCircuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressrouteCircuitId = this._expressrouteCircuitId;
    }
    if (this._gatewayMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayMacAddress = this._gatewayMacAddress;
    }
    if (this._loopbackSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackSubnet = this._loopbackSubnet;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._redundantRouter !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundantRouter = this._redundantRouter;
    }
    if (this._virtualNetworkInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkInterface = this._virtualNetworkInterface;
    }
    if (this._ipsecCustomerGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCustomerGateway = this._ipsecCustomerGateway?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAzureExpressrouteInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialId = undefined;
      this._expressrouteCircuitId = undefined;
      this._gatewayMacAddress = undefined;
      this._loopbackSubnet = undefined;
      this._name = undefined;
      this._redundantRouter = undefined;
      this._virtualNetworkInterface = undefined;
      this._ipsecCustomerGateway.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialId = value.credentialId;
      this._expressrouteCircuitId = value.expressrouteCircuitId;
      this._gatewayMacAddress = value.gatewayMacAddress;
      this._loopbackSubnet = value.loopbackSubnet;
      this._name = value.name;
      this._redundantRouter = value.redundantRouter;
      this._virtualNetworkInterface = value.virtualNetworkInterface;
      this._ipsecCustomerGateway.internalValue = value.ipsecCustomerGateway;
    }
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

  // expressroute_circuit_id - computed: false, optional: false, required: true
  private _expressrouteCircuitId?: string; 
  public get expressrouteCircuitId() {
    return this.getStringAttribute('expressroute_circuit_id');
  }
  public set expressrouteCircuitId(value: string) {
    this._expressrouteCircuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressrouteCircuitIdInput() {
    return this._expressrouteCircuitId;
  }

  // gateway_mac_address - computed: false, optional: true, required: false
  private _gatewayMacAddress?: string[]; 
  public get gatewayMacAddress() {
    return this.getListAttribute('gateway_mac_address');
  }
  public set gatewayMacAddress(value: string[]) {
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

  // redundant_router - computed: false, optional: true, required: false
  private _redundantRouter?: boolean | cdktf.IResolvable; 
  public get redundantRouter() {
    return this.getBooleanAttribute('redundant_router');
  }
  public set redundantRouter(value: boolean | cdktf.IResolvable) {
    this._redundantRouter = value;
  }
  public resetRedundantRouter() {
    this._redundantRouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantRouterInput() {
    return this._redundantRouter;
  }

  // virtual_network_interface - computed: false, optional: true, required: false
  private _virtualNetworkInterface?: number[]; 
  public get virtualNetworkInterface() {
    return this.getNumberListAttribute('virtual_network_interface');
  }
  public set virtualNetworkInterface(value: number[]) {
    this._virtualNetworkInterface = value;
  }
  public resetVirtualNetworkInterface() {
    this._virtualNetworkInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInterfaceInput() {
    return this._virtualNetworkInterface;
  }

  // ipsec_customer_gateway - computed: false, optional: true, required: false
  private _ipsecCustomerGateway = new ConnectorAzureExpressrouteInstancesIpsecCustomerGatewayList(this, "ipsec_customer_gateway", false);
  public get ipsecCustomerGateway() {
    return this._ipsecCustomerGateway;
  }
  public putIpsecCustomerGateway(value: ConnectorAzureExpressrouteInstancesIpsecCustomerGateway[] | cdktf.IResolvable) {
    this._ipsecCustomerGateway.internalValue = value;
  }
  public resetIpsecCustomerGateway() {
    this._ipsecCustomerGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCustomerGatewayInput() {
    return this._ipsecCustomerGateway.internalValue;
  }
}

export class ConnectorAzureExpressrouteInstancesList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureExpressrouteInstances[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureExpressrouteInstancesOutputReference {
    return new ConnectorAzureExpressrouteInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorAzureExpressrouteSegmentOptions {
  /**
  * Allow routes from the branch/premises to be advertised to the cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#advertise_on_prem_routes ConnectorAzureExpressroute#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * ASN on the customer premise side.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#customer_asn ConnectorAzureExpressroute#customer_asn}
  */
  readonly customerAsn: number;
  /**
  * Enable or disable access to the internet when traffic arrives via this connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#disable_internet_exit ConnectorAzureExpressroute#disable_internet_exit}
  */
  readonly disableInternetExit?: boolean | cdktf.IResolvable;
  /**
  * The ID of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#segment_id ConnectorAzureExpressroute#segment_id}
  */
  readonly segmentId: string;
}

export function connectorAzureExpressrouteSegmentOptionsToTerraform(struct?: ConnectorAzureExpressrouteSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    customer_asn: cdktf.numberToTerraform(struct!.customerAsn),
    disable_internet_exit: cdktf.booleanToTerraform(struct!.disableInternetExit),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
  }
}


export function connectorAzureExpressrouteSegmentOptionsToHclTerraform(struct?: ConnectorAzureExpressrouteSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_prem_routes: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnPremRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    customer_asn: {
      value: cdktf.numberToHclTerraform(struct!.customerAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_internet_exit: {
      value: cdktf.booleanToHclTerraform(struct!.disableInternetExit),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorAzureExpressrouteSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorAzureExpressrouteSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnPremRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPremRoutes = this._advertiseOnPremRoutes;
    }
    if (this._customerAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerAsn = this._customerAsn;
    }
    if (this._disableInternetExit !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableInternetExit = this._disableInternetExit;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorAzureExpressrouteSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._customerAsn = undefined;
      this._disableInternetExit = undefined;
      this._segmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseOnPremRoutes = value.advertiseOnPremRoutes;
      this._customerAsn = value.customerAsn;
      this._disableInternetExit = value.disableInternetExit;
      this._segmentId = value.segmentId;
    }
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

  // disable_internet_exit - computed: false, optional: true, required: false
  private _disableInternetExit?: boolean | cdktf.IResolvable; 
  public get disableInternetExit() {
    return this.getBooleanAttribute('disable_internet_exit');
  }
  public set disableInternetExit(value: boolean | cdktf.IResolvable) {
    this._disableInternetExit = value;
  }
  public resetDisableInternetExit() {
    this._disableInternetExit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInternetExitInput() {
    return this._disableInternetExit;
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
}

export class ConnectorAzureExpressrouteSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ConnectorAzureExpressrouteSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ConnectorAzureExpressrouteSegmentOptionsOutputReference {
    return new ConnectorAzureExpressrouteSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute alkira_connector_azure_expressroute}
*/
export class ConnectorAzureExpressroute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_azure_expressroute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorAzureExpressroute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorAzureExpressroute to import
  * @param importFromId The id of the existing ConnectorAzureExpressroute that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorAzureExpressroute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_azure_expressroute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_azure_expressroute alkira_connector_azure_expressroute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorAzureExpressrouteConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorAzureExpressrouteConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_azure_expressroute',
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
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._vhubPrefix = config.vhubPrefix;
    this._instances.internalValue = config.instances;
    this._segmentOptions.internalValue = config.segmentOptions;
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

  // tunnel_protocol - computed: false, optional: true, required: false
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  public resetTunnelProtocol() {
    this._tunnelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // vhub_prefix - computed: false, optional: false, required: true
  private _vhubPrefix?: string; 
  public get vhubPrefix() {
    return this.getStringAttribute('vhub_prefix');
  }
  public set vhubPrefix(value: string) {
    this._vhubPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vhubPrefixInput() {
    return this._vhubPrefix;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new ConnectorAzureExpressrouteInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: ConnectorAzureExpressrouteInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // segment_options - computed: false, optional: false, required: true
  private _segmentOptions = new ConnectorAzureExpressrouteSegmentOptionsList(this, "segment_options", false);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ConnectorAzureExpressrouteSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
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
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      vhub_prefix: cdktf.stringToTerraform(this._vhubPrefix),
      instances: cdktf.listMapper(connectorAzureExpressrouteInstancesToTerraform, true)(this._instances.internalValue),
      segment_options: cdktf.listMapper(connectorAzureExpressrouteSegmentOptionsToTerraform, true)(this._segmentOptions.internalValue),
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
      vhub_prefix: {
        value: cdktf.stringToHclTerraform(this._vhubPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instances: {
        value: cdktf.listMapperHcl(connectorAzureExpressrouteInstancesToHclTerraform, true)(this._instances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorAzureExpressrouteInstancesList",
      },
      segment_options: {
        value: cdktf.listMapperHcl(connectorAzureExpressrouteSegmentOptionsToHclTerraform, true)(this._segmentOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorAzureExpressrouteSegmentOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
