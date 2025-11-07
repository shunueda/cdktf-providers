// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorArubaEdgeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#billing_tag_ids ConnectorArubaEdge#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * If enabled the Aruba Edge Connect image supporting the boost mode for given size(or bandwidth) would be deployed in Alkira CXP. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#boost_mode ConnectorArubaEdge#boost_mode}
  */
  readonly boostMode?: boolean | cdktf.IResolvable;
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#cxp ConnectorArubaEdge#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#description ConnectorArubaEdge#description}
  */
  readonly description?: string;
  /**
  * Whether the connector is enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#enabled ConnectorArubaEdge#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#group ConnectorArubaEdge#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#id ConnectorArubaEdge#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#name ConnectorArubaEdge#name}
  */
  readonly name: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM` or `LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#size ConnectorArubaEdge#size}
  */
  readonly size: string;
  /**
  * The tunnel protocol to be used. IPSEC and GRE are the only valid options. IPSEC can only be used with azure. GRE can only be used with AWS. IPSEC is the default selection. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#tunnel_protocol ConnectorArubaEdge#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * The version of the Aruba Edge. Please check Alkira Portal for all supported versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#version ConnectorArubaEdge#version}
  */
  readonly version: string;
  /**
  * aruba_edge_vrf_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#aruba_edge_vrf_mapping ConnectorArubaEdge#aruba_edge_vrf_mapping}
  */
  readonly arubaEdgeVrfMapping: ConnectorArubaEdgeArubaEdgeVrfMapping[] | cdktf.IResolvable;
  /**
  * instances block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#instances ConnectorArubaEdge#instances}
  */
  readonly instances: ConnectorArubaEdgeInstances[] | cdktf.IResolvable;
}
export interface ConnectorArubaEdgeArubaEdgeVrfMapping {
  /**
  * Enables or disables access to the internet when traffic arrives via this connector. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#advertise_default_route ConnectorArubaEdge#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Allow routes from the branch/premises to be advertised to the cloud. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#advertise_on_prem_routes ConnectorArubaEdge#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * The segment of the Aruba Edge connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#aruba_edge_connect_segment ConnectorArubaEdge#aruba_edge_connect_segment}
  */
  readonly arubaEdgeConnectSegment: string;
  /**
  * The gateway BGP ASN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#gateway_bgp_asn ConnectorArubaEdge#gateway_bgp_asn}
  */
  readonly gatewayBgpAsn: number;
  /**
  * The segment ID associated with the Aruba Edge connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#segment_id ConnectorArubaEdge#segment_id}
  */
  readonly segmentId: string;
}

export function connectorArubaEdgeArubaEdgeVrfMappingToTerraform(struct?: ConnectorArubaEdgeArubaEdgeVrfMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    aruba_edge_connect_segment: cdktf.stringToTerraform(struct!.arubaEdgeConnectSegment),
    gateway_bgp_asn: cdktf.numberToTerraform(struct!.gatewayBgpAsn),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
  }
}


export function connectorArubaEdgeArubaEdgeVrfMappingToHclTerraform(struct?: ConnectorArubaEdgeArubaEdgeVrfMapping | cdktf.IResolvable): any {
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
    aruba_edge_connect_segment: {
      value: cdktf.stringToHclTerraform(struct!.arubaEdgeConnectSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_bgp_asn: {
      value: cdktf.numberToHclTerraform(struct!.gatewayBgpAsn),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorArubaEdgeArubaEdgeVrfMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorArubaEdgeArubaEdgeVrfMapping | cdktf.IResolvable | undefined {
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
    if (this._arubaEdgeConnectSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.arubaEdgeConnectSegment = this._arubaEdgeConnectSegment;
    }
    if (this._gatewayBgpAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayBgpAsn = this._gatewayBgpAsn;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorArubaEdgeArubaEdgeVrfMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._arubaEdgeConnectSegment = undefined;
      this._gatewayBgpAsn = undefined;
      this._segmentId = undefined;
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
      this._arubaEdgeConnectSegment = value.arubaEdgeConnectSegment;
      this._gatewayBgpAsn = value.gatewayBgpAsn;
      this._segmentId = value.segmentId;
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

  // aruba_edge_connect_segment - computed: false, optional: false, required: true
  private _arubaEdgeConnectSegment?: string; 
  public get arubaEdgeConnectSegment() {
    return this.getStringAttribute('aruba_edge_connect_segment');
  }
  public set arubaEdgeConnectSegment(value: string) {
    this._arubaEdgeConnectSegment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arubaEdgeConnectSegmentInput() {
    return this._arubaEdgeConnectSegment;
  }

  // gateway_bgp_asn - computed: false, optional: false, required: true
  private _gatewayBgpAsn?: number; 
  public get gatewayBgpAsn() {
    return this.getNumberAttribute('gateway_bgp_asn');
  }
  public set gatewayBgpAsn(value: number) {
    this._gatewayBgpAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayBgpAsnInput() {
    return this._gatewayBgpAsn;
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

export class ConnectorArubaEdgeArubaEdgeVrfMappingList extends cdktf.ComplexList {
  public internalValue? : ConnectorArubaEdgeArubaEdgeVrfMapping[] | cdktf.IResolvable

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
  public get(index: number): ConnectorArubaEdgeArubaEdgeVrfMappingOutputReference {
    return new ConnectorArubaEdgeArubaEdgeVrfMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorArubaEdgeInstances {
  /**
  * The account key generated in Silver Peak orchestrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#account_key ConnectorArubaEdge#account_key}
  */
  readonly accountKey: string;
  /**
  * The account name given in Silver Peak orchestrator registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#account_name ConnectorArubaEdge#account_name}
  */
  readonly accountName: string;
  /**
  * The host name given to the Aruba SD-WAN appliance that appears in Silver Peak orchestrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#host_name ConnectorArubaEdge#host_name}
  */
  readonly hostName: string;
  /**
  * The instance name associated with Aruba Edge Connect instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#name ConnectorArubaEdge#name}
  */
  readonly name: string;
  /**
  * The site tag that appears on the SD-WAN appliance on Silver Peak orchestrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#site_tag ConnectorArubaEdge#site_tag}
  */
  readonly siteTag: string;
}

export function connectorArubaEdgeInstancesToTerraform(struct?: ConnectorArubaEdgeInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_key: cdktf.stringToTerraform(struct!.accountKey),
    account_name: cdktf.stringToTerraform(struct!.accountName),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    name: cdktf.stringToTerraform(struct!.name),
    site_tag: cdktf.stringToTerraform(struct!.siteTag),
  }
}


export function connectorArubaEdgeInstancesToHclTerraform(struct?: ConnectorArubaEdgeInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_key: {
      value: cdktf.stringToHclTerraform(struct!.accountKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_name: {
      value: cdktf.stringToHclTerraform(struct!.accountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
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
    site_tag: {
      value: cdktf.stringToHclTerraform(struct!.siteTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorArubaEdgeInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorArubaEdgeInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey;
    }
    if (this._accountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountName = this._accountName;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._siteTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteTag = this._siteTag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorArubaEdgeInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountKey = undefined;
      this._accountName = undefined;
      this._hostName = undefined;
      this._name = undefined;
      this._siteTag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountKey = value.accountKey;
      this._accountName = value.accountName;
      this._hostName = value.hostName;
      this._name = value.name;
      this._siteTag = value.siteTag;
    }
  }

  // account_key - computed: false, optional: false, required: true
  private _accountKey?: string; 
  public get accountKey() {
    return this.getStringAttribute('account_key');
  }
  public set accountKey(value: string) {
    this._accountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey;
  }

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // site_tag - computed: false, optional: false, required: true
  private _siteTag?: string; 
  public get siteTag() {
    return this.getStringAttribute('site_tag');
  }
  public set siteTag(value: string) {
    this._siteTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTagInput() {
    return this._siteTag;
  }
}

export class ConnectorArubaEdgeInstancesList extends cdktf.ComplexList {
  public internalValue? : ConnectorArubaEdgeInstances[] | cdktf.IResolvable

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
  public get(index: number): ConnectorArubaEdgeInstancesOutputReference {
    return new ConnectorArubaEdgeInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge alkira_connector_aruba_edge}
*/
export class ConnectorArubaEdge extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_aruba_edge";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorArubaEdge resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorArubaEdge to import
  * @param importFromId The id of the existing ConnectorArubaEdge that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorArubaEdge to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_aruba_edge", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_aruba_edge alkira_connector_aruba_edge} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorArubaEdgeConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorArubaEdgeConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_aruba_edge',
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
    this._billingTagIds = config.billingTagIds;
    this._boostMode = config.boostMode;
    this._cxp = config.cxp;
    this._description = config.description;
    this._enabled = config.enabled;
    this._group = config.group;
    this._id = config.id;
    this._name = config.name;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._version = config.version;
    this._arubaEdgeVrfMapping.internalValue = config.arubaEdgeVrfMapping;
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

  // boost_mode - computed: false, optional: true, required: false
  private _boostMode?: boolean | cdktf.IResolvable; 
  public get boostMode() {
    return this.getBooleanAttribute('boost_mode');
  }
  public set boostMode(value: boolean | cdktf.IResolvable) {
    this._boostMode = value;
  }
  public resetBoostMode() {
    this._boostMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostModeInput() {
    return this._boostMode;
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

  // aruba_edge_vrf_mapping - computed: false, optional: false, required: true
  private _arubaEdgeVrfMapping = new ConnectorArubaEdgeArubaEdgeVrfMappingList(this, "aruba_edge_vrf_mapping", true);
  public get arubaEdgeVrfMapping() {
    return this._arubaEdgeVrfMapping;
  }
  public putArubaEdgeVrfMapping(value: ConnectorArubaEdgeArubaEdgeVrfMapping[] | cdktf.IResolvable) {
    this._arubaEdgeVrfMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arubaEdgeVrfMappingInput() {
    return this._arubaEdgeVrfMapping.internalValue;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new ConnectorArubaEdgeInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: ConnectorArubaEdgeInstances[] | cdktf.IResolvable) {
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
      boost_mode: cdktf.booleanToTerraform(this._boostMode),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      version: cdktf.stringToTerraform(this._version),
      aruba_edge_vrf_mapping: cdktf.listMapper(connectorArubaEdgeArubaEdgeVrfMappingToTerraform, true)(this._arubaEdgeVrfMapping.internalValue),
      instances: cdktf.listMapper(connectorArubaEdgeInstancesToTerraform, true)(this._instances.internalValue),
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
      boost_mode: {
        value: cdktf.booleanToHclTerraform(this._boostMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aruba_edge_vrf_mapping: {
        value: cdktf.listMapperHcl(connectorArubaEdgeArubaEdgeVrfMappingToHclTerraform, true)(this._arubaEdgeVrfMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorArubaEdgeArubaEdgeVrfMappingList",
      },
      instances: {
        value: cdktf.listMapperHcl(connectorArubaEdgeInstancesToHclTerraform, true)(this._instances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorArubaEdgeInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
