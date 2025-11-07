// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorFortinetSdwanConfig extends cdktf.TerraformMetaArguments {
  /**
  * This list allows the IP addresses or subnets to be whitelisted so that they can communicate with the Fortinet SD-WAN instance. The value could be `/32` IPs or can also be a mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#allow_list ConnectorFortinetSdwan#allow_list}
  */
  readonly allowList?: string[];
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#billing_tag_ids ConnectorFortinetSdwan#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#cxp ConnectorFortinetSdwan#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#description ConnectorFortinetSdwan#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#enabled ConnectorFortinetSdwan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#group ConnectorFortinetSdwan#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#id ConnectorFortinetSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#name ConnectorFortinetSdwan#name}
  */
  readonly name: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#size ConnectorFortinetSdwan#size}
  */
  readonly size: string;
  /**
  * The tunnel protocol. It could be either `IPSEC`or `GRE`. Default value is `IPSEC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#tunnel_protocol ConnectorFortinetSdwan#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * target_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#target_segment ConnectorFortinetSdwan#target_segment}
  */
  readonly targetSegment: ConnectorFortinetSdwanTargetSegment[] | cdktf.IResolvable;
  /**
  * wan_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#wan_edge ConnectorFortinetSdwan#wan_edge}
  */
  readonly wanEdge: ConnectorFortinetSdwanWanEdge[] | cdktf.IResolvable;
}
export interface ConnectorFortinetSdwanTargetSegment {
  /**
  * Whether advertise default route of internet connector. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#advertise_default_route ConnectorFortinetSdwan#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Whether advertising On Prem Routes. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#advertise_on_prem_routes ConnectorFortinetSdwan#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * BGP ASN on the customer premise side. A typical value for 2 byte segment is `64523` and `4200064523` for 4 byte segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#gateway_bgp_asn ConnectorFortinetSdwan#gateway_bgp_asn}
  */
  readonly gatewayBgpAsn?: number;
  /**
  * Alkira Segment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#segment_id ConnectorFortinetSdwan#segment_id}
  */
  readonly segmentId: number;
  /**
  * Fortinet SD-WAN Segment name for correlating with Alkria segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#vrf_id ConnectorFortinetSdwan#vrf_id}
  */
  readonly vrfId: number;
}

export function connectorFortinetSdwanTargetSegmentToTerraform(struct?: ConnectorFortinetSdwanTargetSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    gateway_bgp_asn: cdktf.numberToTerraform(struct!.gatewayBgpAsn),
    segment_id: cdktf.numberToTerraform(struct!.segmentId),
    vrf_id: cdktf.numberToTerraform(struct!.vrfId),
  }
}


export function connectorFortinetSdwanTargetSegmentToHclTerraform(struct?: ConnectorFortinetSdwanTargetSegment | cdktf.IResolvable): any {
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
    gateway_bgp_asn: {
      value: cdktf.numberToHclTerraform(struct!.gatewayBgpAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    segment_id: {
      value: cdktf.numberToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf_id: {
      value: cdktf.numberToHclTerraform(struct!.vrfId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorFortinetSdwanTargetSegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorFortinetSdwanTargetSegment | cdktf.IResolvable | undefined {
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
    if (this._gatewayBgpAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayBgpAsn = this._gatewayBgpAsn;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._vrfId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfId = this._vrfId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorFortinetSdwanTargetSegment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._gatewayBgpAsn = undefined;
      this._segmentId = undefined;
      this._vrfId = undefined;
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
      this._gatewayBgpAsn = value.gatewayBgpAsn;
      this._segmentId = value.segmentId;
      this._vrfId = value.vrfId;
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

  // gateway_bgp_asn - computed: false, optional: true, required: false
  private _gatewayBgpAsn?: number; 
  public get gatewayBgpAsn() {
    return this.getNumberAttribute('gateway_bgp_asn');
  }
  public set gatewayBgpAsn(value: number) {
    this._gatewayBgpAsn = value;
  }
  public resetGatewayBgpAsn() {
    this._gatewayBgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayBgpAsnInput() {
    return this._gatewayBgpAsn;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: number; 
  public get segmentId() {
    return this.getNumberAttribute('segment_id');
  }
  public set segmentId(value: number) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // vrf_id - computed: false, optional: false, required: true
  private _vrfId?: number; 
  public get vrfId() {
    return this.getNumberAttribute('vrf_id');
  }
  public set vrfId(value: number) {
    this._vrfId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfIdInput() {
    return this._vrfId;
  }
}

export class ConnectorFortinetSdwanTargetSegmentList extends cdktf.ComplexList {
  public internalValue? : ConnectorFortinetSdwanTargetSegment[] | cdktf.IResolvable

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
  public get(index: number): ConnectorFortinetSdwanTargetSegmentOutputReference {
    return new ConnectorFortinetSdwanTargetSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorFortinetSdwanWanEdge {
  /**
  * The hostname of the WAN Edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#hostname ConnectorFortinetSdwan#hostname}
  */
  readonly hostname: string;
  /**
  * The type of license. Either `PAY_AS_YOU_GO` or `BRING_YOUR_OWN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#license_type ConnectorFortinetSdwan#license_type}
  */
  readonly licenseType: string;
  /**
  * The password of the WAN Edge instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#password ConnectorFortinetSdwan#password}
  */
  readonly password: string;
  /**
  * Serial Number of the WAN Edge. It's only required when `license_type` is `BRING_YOUR_OWN`. It could be set by ENV variable `AK_FORTINET_SDWAN_SERIAL_NUMBER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#serial_number ConnectorFortinetSdwan#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * The username of the WAN Edge instance.The default value is `admin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#username ConnectorFortinetSdwan#username}
  */
  readonly username?: string;
  /**
  * The version of Fortinet WAN Edge. Please check Alkira Portal for all supported versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#version ConnectorFortinetSdwan#version}
  */
  readonly version: string;
}

export function connectorFortinetSdwanWanEdgeToTerraform(struct?: ConnectorFortinetSdwanWanEdge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    password: cdktf.stringToTerraform(struct!.password),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    username: cdktf.stringToTerraform(struct!.username),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function connectorFortinetSdwanWanEdgeToHclTerraform(struct?: ConnectorFortinetSdwanWanEdge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorFortinetSdwanWanEdgeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorFortinetSdwanWanEdge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorFortinetSdwanWanEdge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._licenseType = undefined;
      this._password = undefined;
      this._serialNumber = undefined;
      this._username = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._licenseType = value.licenseType;
      this._password = value.password;
      this._serialNumber = value.serialNumber;
      this._username = value.username;
      this._version = value.version;
    }
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ConnectorFortinetSdwanWanEdgeList extends cdktf.ComplexList {
  public internalValue? : ConnectorFortinetSdwanWanEdge[] | cdktf.IResolvable

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
  public get(index: number): ConnectorFortinetSdwanWanEdgeOutputReference {
    return new ConnectorFortinetSdwanWanEdgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan alkira_connector_fortinet_sdwan}
*/
export class ConnectorFortinetSdwan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_fortinet_sdwan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorFortinetSdwan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorFortinetSdwan to import
  * @param importFromId The id of the existing ConnectorFortinetSdwan that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorFortinetSdwan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_fortinet_sdwan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_fortinet_sdwan alkira_connector_fortinet_sdwan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorFortinetSdwanConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorFortinetSdwanConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_fortinet_sdwan',
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
    this._allowList = config.allowList;
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._targetSegment.internalValue = config.targetSegment;
    this._wanEdge.internalValue = config.wanEdge;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: false, optional: true, required: false
  private _allowList?: string[]; 
  public get allowList() {
    return this.getListAttribute('allow_list');
  }
  public set allowList(value: string[]) {
    this._allowList = value;
  }
  public resetAllowList() {
    this._allowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList;
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

  // target_segment - computed: false, optional: false, required: true
  private _targetSegment = new ConnectorFortinetSdwanTargetSegmentList(this, "target_segment", true);
  public get targetSegment() {
    return this._targetSegment;
  }
  public putTargetSegment(value: ConnectorFortinetSdwanTargetSegment[] | cdktf.IResolvable) {
    this._targetSegment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSegmentInput() {
    return this._targetSegment.internalValue;
  }

  // wan_edge - computed: false, optional: false, required: true
  private _wanEdge = new ConnectorFortinetSdwanWanEdgeList(this, "wan_edge", false);
  public get wanEdge() {
    return this._wanEdge;
  }
  public putWanEdge(value: ConnectorFortinetSdwanWanEdge[] | cdktf.IResolvable) {
    this._wanEdge.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanEdgeInput() {
    return this._wanEdge.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowList),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      target_segment: cdktf.listMapper(connectorFortinetSdwanTargetSegmentToTerraform, true)(this._targetSegment.internalValue),
      wan_edge: cdktf.listMapper(connectorFortinetSdwanWanEdgeToTerraform, true)(this._wanEdge.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      target_segment: {
        value: cdktf.listMapperHcl(connectorFortinetSdwanTargetSegmentToHclTerraform, true)(this._targetSegment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorFortinetSdwanTargetSegmentList",
      },
      wan_edge: {
        value: cdktf.listMapperHcl(connectorFortinetSdwanWanEdgeToHclTerraform, true)(this._wanEdge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorFortinetSdwanWanEdgeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
