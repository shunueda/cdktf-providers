// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectorVersaSdwanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#billing_tag_ids ConnectorVersaSdwan#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * The CXP where the connector should be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#cxp ConnectorVersaSdwan#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#description ConnectorVersaSdwan#description}
  */
  readonly description?: string;
  /**
  * Is the connector enabled. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#enabled ConnectorVersaSdwan#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The global tenant ID of Versa SD-WAN. Default value is `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#global_tenant_id ConnectorVersaSdwan#global_tenant_id}
  */
  readonly globalTenantId?: number;
  /**
  * The group of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#group ConnectorVersaSdwan#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#id ConnectorVersaSdwan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The local ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#local_id ConnectorVersaSdwan#local_id}
  */
  readonly localId: string;
  /**
  * The local public shared key. Default value is`1234`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#local_public_shared_key ConnectorVersaSdwan#local_public_shared_key}
  */
  readonly localPublicSharedKey?: string;
  /**
  * The name of the connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#name ConnectorVersaSdwan#name}
  */
  readonly name: string;
  /**
  * The remote ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#remote_id ConnectorVersaSdwan#remote_id}
  */
  readonly remoteId: string;
  /**
  * The remote public shared key. Default value is`1234`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#remote_public_shared_key ConnectorVersaSdwan#remote_public_shared_key}
  */
  readonly remotePublicSharedKey?: string;
  /**
  * The size of the connector, one of `SMALL`, `MEDIUM`, `LARGE`, `2LARGE`, `5LARGE`. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#size ConnectorVersaSdwan#size}
  */
  readonly size: string;
  /**
  * The tunnel protocol of Versa SD-WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#tunnel_protocol ConnectorVersaSdwan#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * The Versa controller IP/FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#versa_controller_host ConnectorVersaSdwan#versa_controller_host}
  */
  readonly versaControllerHost: string;
  /**
  * versa_vos_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#versa_vos_device ConnectorVersaSdwan#versa_vos_device}
  */
  readonly versaVosDevice: ConnectorVersaSdwanVersaVosDevice[] | cdktf.IResolvable;
  /**
  * vrf_segment_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#vrf_segment_mapping ConnectorVersaSdwan#vrf_segment_mapping}
  */
  readonly vrfSegmentMapping: ConnectorVersaSdwanVrfSegmentMapping[] | cdktf.IResolvable;
}
export interface ConnectorVersaSdwanVersaVosDevice {
  /**
  * The hostname of the VOS Device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#hostname ConnectorVersaSdwan#hostname}
  */
  readonly hostname: string;
  /**
  * Local device serial number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#local_device_serial_number ConnectorVersaSdwan#local_device_serial_number}
  */
  readonly localDeviceSerialNumber: string;
  /**
  * Versa version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#version ConnectorVersaSdwan#version}
  */
  readonly version: string;
}

export function connectorVersaSdwanVersaVosDeviceToTerraform(struct?: ConnectorVersaSdwanVersaVosDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    local_device_serial_number: cdktf.stringToTerraform(struct!.localDeviceSerialNumber),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function connectorVersaSdwanVersaVosDeviceToHclTerraform(struct?: ConnectorVersaSdwanVersaVosDevice | cdktf.IResolvable): any {
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
    local_device_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.localDeviceSerialNumber),
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

export class ConnectorVersaSdwanVersaVosDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorVersaSdwanVersaVosDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._localDeviceSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDeviceSerialNumber = this._localDeviceSerialNumber;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorVersaSdwanVersaVosDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._localDeviceSerialNumber = undefined;
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
      this._localDeviceSerialNumber = value.localDeviceSerialNumber;
      this._version = value.version;
    }
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

  // local_device_serial_number - computed: false, optional: false, required: true
  private _localDeviceSerialNumber?: string; 
  public get localDeviceSerialNumber() {
    return this.getStringAttribute('local_device_serial_number');
  }
  public set localDeviceSerialNumber(value: string) {
    this._localDeviceSerialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDeviceSerialNumberInput() {
    return this._localDeviceSerialNumber;
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

export class ConnectorVersaSdwanVersaVosDeviceList extends cdktf.ComplexList {
  public internalValue? : ConnectorVersaSdwanVersaVosDevice[] | cdktf.IResolvable

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
  public get(index: number): ConnectorVersaSdwanVersaVosDeviceOutputReference {
    return new ConnectorVersaSdwanVersaVosDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectorVersaSdwanVrfSegmentMapping {
  /**
  * Whether advertise default route of internet connector. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#advertise_default_route ConnectorVersaSdwan#advertise_default_route}
  */
  readonly advertiseDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Advertise On Prem Routes. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#advertise_on_prem_routes ConnectorVersaSdwan#advertise_on_prem_routes}
  */
  readonly advertiseOnPremRoutes?: boolean | cdktf.IResolvable;
  /**
  * Segment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#segment_id ConnectorVersaSdwan#segment_id}
  */
  readonly segmentId: number;
  /**
  * BGP ASN on the Versa. A typical value for 2 byte segment is `64523` and `4200064523` for 4 byte segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#versa_bgp_asn ConnectorVersaSdwan#versa_bgp_asn}
  */
  readonly versaBgpAsn: number;
  /**
  * VRF Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#vrf_name ConnectorVersaSdwan#vrf_name}
  */
  readonly vrfName: string;
}

export function connectorVersaSdwanVrfSegmentMappingToTerraform(struct?: ConnectorVersaSdwanVrfSegmentMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_default_route: cdktf.booleanToTerraform(struct!.advertiseDefaultRoute),
    advertise_on_prem_routes: cdktf.booleanToTerraform(struct!.advertiseOnPremRoutes),
    segment_id: cdktf.numberToTerraform(struct!.segmentId),
    versa_bgp_asn: cdktf.numberToTerraform(struct!.versaBgpAsn),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function connectorVersaSdwanVrfSegmentMappingToHclTerraform(struct?: ConnectorVersaSdwanVrfSegmentMapping | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    versa_bgp_asn: {
      value: cdktf.numberToHclTerraform(struct!.versaBgpAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectorVersaSdwanVrfSegmentMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectorVersaSdwanVrfSegmentMapping | cdktf.IResolvable | undefined {
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
    if (this._versaBgpAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.versaBgpAsn = this._versaBgpAsn;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectorVersaSdwanVrfSegmentMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefaultRoute = undefined;
      this._advertiseOnPremRoutes = undefined;
      this._segmentId = undefined;
      this._versaBgpAsn = undefined;
      this._vrfName = undefined;
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
      this._versaBgpAsn = value.versaBgpAsn;
      this._vrfName = value.vrfName;
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

  // versa_bgp_asn - computed: false, optional: false, required: true
  private _versaBgpAsn?: number; 
  public get versaBgpAsn() {
    return this.getNumberAttribute('versa_bgp_asn');
  }
  public set versaBgpAsn(value: number) {
    this._versaBgpAsn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versaBgpAsnInput() {
    return this._versaBgpAsn;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}

export class ConnectorVersaSdwanVrfSegmentMappingList extends cdktf.ComplexList {
  public internalValue? : ConnectorVersaSdwanVrfSegmentMapping[] | cdktf.IResolvable

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
  public get(index: number): ConnectorVersaSdwanVrfSegmentMappingOutputReference {
    return new ConnectorVersaSdwanVrfSegmentMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan alkira_connector_versa_sdwan}
*/
export class ConnectorVersaSdwan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_connector_versa_sdwan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectorVersaSdwan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectorVersaSdwan to import
  * @param importFromId The id of the existing ConnectorVersaSdwan that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectorVersaSdwan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_connector_versa_sdwan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/connector_versa_sdwan alkira_connector_versa_sdwan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectorVersaSdwanConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectorVersaSdwanConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_connector_versa_sdwan',
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
    this._globalTenantId = config.globalTenantId;
    this._group = config.group;
    this._id = config.id;
    this._localId = config.localId;
    this._localPublicSharedKey = config.localPublicSharedKey;
    this._name = config.name;
    this._remoteId = config.remoteId;
    this._remotePublicSharedKey = config.remotePublicSharedKey;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._versaControllerHost = config.versaControllerHost;
    this._versaVosDevice.internalValue = config.versaVosDevice;
    this._vrfSegmentMapping.internalValue = config.vrfSegmentMapping;
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

  // global_tenant_id - computed: false, optional: true, required: false
  private _globalTenantId?: number; 
  public get globalTenantId() {
    return this.getNumberAttribute('global_tenant_id');
  }
  public set globalTenantId(value: number) {
    this._globalTenantId = value;
  }
  public resetGlobalTenantId() {
    this._globalTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalTenantIdInput() {
    return this._globalTenantId;
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

  // local_id - computed: false, optional: false, required: true
  private _localId?: string; 
  public get localId() {
    return this.getStringAttribute('local_id');
  }
  public set localId(value: string) {
    this._localId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIdInput() {
    return this._localId;
  }

  // local_public_shared_key - computed: false, optional: true, required: false
  private _localPublicSharedKey?: string; 
  public get localPublicSharedKey() {
    return this.getStringAttribute('local_public_shared_key');
  }
  public set localPublicSharedKey(value: string) {
    this._localPublicSharedKey = value;
  }
  public resetLocalPublicSharedKey() {
    this._localPublicSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPublicSharedKeyInput() {
    return this._localPublicSharedKey;
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

  // remote_id - computed: false, optional: false, required: true
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_public_shared_key - computed: false, optional: true, required: false
  private _remotePublicSharedKey?: string; 
  public get remotePublicSharedKey() {
    return this.getStringAttribute('remote_public_shared_key');
  }
  public set remotePublicSharedKey(value: string) {
    this._remotePublicSharedKey = value;
  }
  public resetRemotePublicSharedKey() {
    this._remotePublicSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePublicSharedKeyInput() {
    return this._remotePublicSharedKey;
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

  // versa_controller_host - computed: false, optional: false, required: true
  private _versaControllerHost?: string; 
  public get versaControllerHost() {
    return this.getStringAttribute('versa_controller_host');
  }
  public set versaControllerHost(value: string) {
    this._versaControllerHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versaControllerHostInput() {
    return this._versaControllerHost;
  }

  // versa_vos_device - computed: false, optional: false, required: true
  private _versaVosDevice = new ConnectorVersaSdwanVersaVosDeviceList(this, "versa_vos_device", false);
  public get versaVosDevice() {
    return this._versaVosDevice;
  }
  public putVersaVosDevice(value: ConnectorVersaSdwanVersaVosDevice[] | cdktf.IResolvable) {
    this._versaVosDevice.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versaVosDeviceInput() {
    return this._versaVosDevice.internalValue;
  }

  // vrf_segment_mapping - computed: false, optional: false, required: true
  private _vrfSegmentMapping = new ConnectorVersaSdwanVrfSegmentMappingList(this, "vrf_segment_mapping", true);
  public get vrfSegmentMapping() {
    return this._vrfSegmentMapping;
  }
  public putVrfSegmentMapping(value: ConnectorVersaSdwanVrfSegmentMapping[] | cdktf.IResolvable) {
    this._vrfSegmentMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSegmentMappingInput() {
    return this._vrfSegmentMapping.internalValue;
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
      global_tenant_id: cdktf.numberToTerraform(this._globalTenantId),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      local_id: cdktf.stringToTerraform(this._localId),
      local_public_shared_key: cdktf.stringToTerraform(this._localPublicSharedKey),
      name: cdktf.stringToTerraform(this._name),
      remote_id: cdktf.stringToTerraform(this._remoteId),
      remote_public_shared_key: cdktf.stringToTerraform(this._remotePublicSharedKey),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      versa_controller_host: cdktf.stringToTerraform(this._versaControllerHost),
      versa_vos_device: cdktf.listMapper(connectorVersaSdwanVersaVosDeviceToTerraform, true)(this._versaVosDevice.internalValue),
      vrf_segment_mapping: cdktf.listMapper(connectorVersaSdwanVrfSegmentMappingToTerraform, true)(this._vrfSegmentMapping.internalValue),
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
      global_tenant_id: {
        value: cdktf.numberToHclTerraform(this._globalTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      local_id: {
        value: cdktf.stringToHclTerraform(this._localId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_public_shared_key: {
        value: cdktf.stringToHclTerraform(this._localPublicSharedKey),
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
      remote_id: {
        value: cdktf.stringToHclTerraform(this._remoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_public_shared_key: {
        value: cdktf.stringToHclTerraform(this._remotePublicSharedKey),
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
      versa_controller_host: {
        value: cdktf.stringToHclTerraform(this._versaControllerHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      versa_vos_device: {
        value: cdktf.listMapperHcl(connectorVersaSdwanVersaVosDeviceToHclTerraform, true)(this._versaVosDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectorVersaSdwanVersaVosDeviceList",
      },
      vrf_segment_mapping: {
        value: cdktf.listMapperHcl(connectorVersaSdwanVrfSegmentMappingToHclTerraform, true)(this._vrfSegmentMapping.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ConnectorVersaSdwanVrfSegmentMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
