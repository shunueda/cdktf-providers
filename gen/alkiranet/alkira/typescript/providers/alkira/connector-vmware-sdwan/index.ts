// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorVmwareSdwanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#billing_tag_ids ConnectorVmwareSdwan#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#cxp ConnectorVmwareSdwan#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#description ConnectorVmwareSdwan#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#enabled ConnectorVmwareSdwan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#group ConnectorVmwareSdwan#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#id ConnectorVmwareSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#name ConnectorVmwareSdwan#name}
  */
  readonly name: string;
  /**
  * VMWare (Velo) Orchestrator portal host address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#orchestrator_host ConnectorVmwareSdwan#orchestrator_host}
  */
  readonly orchestratorHost: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#size ConnectorVmwareSdwan#size}
  */
  readonly size: string;
  /**
  * Only supported tunnel protocol is `IPSEC` for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#tunnel_protocol ConnectorVmwareSdwan#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * The version of VMWARE SD-WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#version ConnectorVmwareSdwan#version}
  */
  readonly version: string;
  /**
  * target_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#target_segment ConnectorVmwareSdwan#target_segment}
  */
  readonly targetSegment: ConnectorVmwareSdwanTargetSegment[] | cdktf.IResolvable;
  /**
  * virtual_edge block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#virtual_edge ConnectorVmwareSdwan#virtual_edge}
  */
  readonly virtualEdge: ConnectorVmwareSdwanVirtualEdge[] | cdktf.IResolvable;
}
export interface ConnectorVmwareSdwanTargetSegment {
  /**
  * Whether advertise default route of internet connector. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#advertise_default_route ConnectorVmwareSdwan#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Whether advertising On Prem Routes. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#advertise_on_prem_routes ConnectorVmwareSdwan#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * BGP ASN on the customer premise side. A typical value for 2 byte segment is `64523` and `4200064523` for 4 byte segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#gateway_bgp_asn ConnectorVmwareSdwan#gateway_bgp_asn}
  */
  readonly gatewayBgpAsn?: number;
  /**
  * Alkira Segment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#segment_id ConnectorVmwareSdwan#segment_id}
  */
  readonly segmentId: number;
  /**
  * VMWare SD-WAN Segment name for correlating with Alkria segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#vmware_sdwan_segment_name ConnectorVmwareSdwan#vmware_sdwan_segment_name}
  */
  readonly vmwareSdwanSegmentName: string;
}

export function connectorVmwareSdwanTargetSegmentToTerraform(struct?: ConnectorVmwareSdwanTargetSegment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    gateway_bgp_asn: cdktf.numberToTerraform(struct!.gatewayBgpAsn),
    segment_id: cdktf.numberToTerraform(struct!.segmentId),
    vmware_sdwan_segment_name: cdktf.stringToTerraform(struct!.vmwareSdwanSegmentName),
  }
}


export function connectorVmwareSdwanTargetSegmentToHclTerraform(struct?: ConnectorVmwareSdwanTargetSegment | cdktf.IResolvable): any {
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
    vmware_sdwan_segment_name: {
      value: cdktf.stringToHclTerraform(struct!.vmwareSdwanSegmentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorVmwareSdwanTargetSegmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorVmwareSdwanTargetSegment | cdktf.IResolvable | undefined {
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
    if (this._vmwareSdwanSegmentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmwareSdwanSegmentName = this._vmwareSdwanSegmentName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorVmwareSdwanTargetSegment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._gatewayBgpAsn = undefined;
      this._segmentId = undefined;
      this._vmwareSdwanSegmentName = undefined;
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
      this._vmwareSdwanSegmentName = value.vmwareSdwanSegmentName;
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

  // vmware_sdwan_segment_name - computed: false, optional: false, required: true
  private _vmwareSdwanSegmentName?: string; 
  public get vmwareSdwanSegmentName() {
    return this.getStringAttribute('vmware_sdwan_segment_name');
  }
  public set vmwareSdwanSegmentName(value: string) {
    this._vmwareSdwanSegmentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareSdwanSegmentNameInput() {
    return this._vmwareSdwanSegmentName;
  }
}

export class ConnectorVmwareSdwanTargetSegmentList extends cdktf.ComplexList {
  public internalValue? : ConnectorVmwareSdwanTargetSegment[] | cdktf.IResolvable

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
  public get(index: number): ConnectorVmwareSdwanTargetSegmentOutputReference {
    return new ConnectorVmwareSdwanTargetSegmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorVmwareSdwanVirtualEdge {
  /**
  * Activation code generated in VMWare orchestrator account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#activation_code ConnectorVmwareSdwan#activation_code}
  */
  readonly activationCode: string;
  /**
  * The hostname of the virtual edge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#hostname ConnectorVmwareSdwan#hostname}
  */
  readonly hostname: string;
}

export function connectorVmwareSdwanVirtualEdgeToTerraform(struct?: ConnectorVmwareSdwanVirtualEdge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_code: cdktf.stringToTerraform(struct!.activationCode),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function connectorVmwareSdwanVirtualEdgeToHclTerraform(struct?: ConnectorVmwareSdwanVirtualEdge | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activation_code: {
      value: cdktf.stringToHclTerraform(struct!.activationCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorVmwareSdwanVirtualEdgeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorVmwareSdwanVirtualEdge | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationCode = this._activationCode;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorVmwareSdwanVirtualEdge | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activationCode = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activationCode = value.activationCode;
      this._hostname = value.hostname;
    }
  }

  // activation_code - computed: false, optional: false, required: true
  private _activationCode?: string; 
  public get activationCode() {
    return this.getStringAttribute('activation_code');
  }
  public set activationCode(value: string) {
    this._activationCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activationCodeInput() {
    return this._activationCode;
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
}

export class ConnectorVmwareSdwanVirtualEdgeList extends cdktf.ComplexList {
  public internalValue? : ConnectorVmwareSdwanVirtualEdge[] | cdktf.IResolvable

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
  public get(index: number): ConnectorVmwareSdwanVirtualEdgeOutputReference {
    return new ConnectorVmwareSdwanVirtualEdgeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan alkira_connector_vmware_sdwan}
*/
export class ConnectorVmwareSdwan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_vmware_sdwan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorVmwareSdwan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorVmwareSdwan to import
  * @param importFromId The id of the existing ConnectorVmwareSdwan that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorVmwareSdwan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_vmware_sdwan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_vmware_sdwan alkira_connector_vmware_sdwan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorVmwareSdwanConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorVmwareSdwanConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_vmware_sdwan',
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
    this._orchestratorHost = config.orchestratorHost;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._version = config.version;
    this._targetSegment.internalValue = config.targetSegment;
    this._virtualEdge.internalValue = config.virtualEdge;
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

  // orchestrator_host - computed: false, optional: false, required: true
  private _orchestratorHost?: string; 
  public get orchestratorHost() {
    return this.getStringAttribute('orchestrator_host');
  }
  public set orchestratorHost(value: string) {
    this._orchestratorHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratorHostInput() {
    return this._orchestratorHost;
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

  // target_segment - computed: false, optional: false, required: true
  private _targetSegment = new ConnectorVmwareSdwanTargetSegmentList(this, "target_segment", true);
  public get targetSegment() {
    return this._targetSegment;
  }
  public putTargetSegment(value: ConnectorVmwareSdwanTargetSegment[] | cdktf.IResolvable) {
    this._targetSegment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSegmentInput() {
    return this._targetSegment.internalValue;
  }

  // virtual_edge - computed: false, optional: false, required: true
  private _virtualEdge = new ConnectorVmwareSdwanVirtualEdgeList(this, "virtual_edge", false);
  public get virtualEdge() {
    return this._virtualEdge;
  }
  public putVirtualEdge(value: ConnectorVmwareSdwanVirtualEdge[] | cdktf.IResolvable) {
    this._virtualEdge.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualEdgeInput() {
    return this._virtualEdge.internalValue;
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
      orchestrator_host: cdktf.stringToTerraform(this._orchestratorHost),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      version: cdktf.stringToTerraform(this._version),
      target_segment: cdktf.listMapper(connectorVmwareSdwanTargetSegmentToTerraform, true)(this._targetSegment.internalValue),
      virtual_edge: cdktf.listMapper(connectorVmwareSdwanVirtualEdgeToTerraform, true)(this._virtualEdge.internalValue),
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
      orchestrator_host: {
        value: cdktf.stringToHclTerraform(this._orchestratorHost),
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
      target_segment: {
        value: cdktf.listMapperHcl(connectorVmwareSdwanTargetSegmentToHclTerraform, true)(this._targetSegment.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorVmwareSdwanTargetSegmentList",
      },
      virtual_edge: {
        value: cdktf.listMapperHcl(connectorVmwareSdwanVirtualEdgeToHclTerraform, true)(this._virtualEdge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorVmwareSdwanVirtualEdgeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
