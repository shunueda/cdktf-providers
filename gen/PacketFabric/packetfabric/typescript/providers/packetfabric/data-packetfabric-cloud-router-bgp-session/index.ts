// https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_bgp_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPacketfabricCloudRouterBgpSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Circuit ID of the target cloud router. This starts with "PF-L3-CUST-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_bgp_session#circuit_id DataPacketfabricCloudRouterBgpSession#circuit_id}
  */
  readonly circuitId: string;
  /**
  * The circuit ID of the connection associated with the BGP session. This starts with "PF-L3-CON-".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_bgp_session#connection_id DataPacketfabricCloudRouterBgpSession#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_bgp_session#id DataPacketfabricCloudRouterBgpSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappings {
}

export function dataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappingsToTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappingsToHclTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditional_prefix - computed: true, optional: false, required: false
  public get conditionalPrefix() {
    return this.getStringAttribute('conditional_prefix');
  }

  // private_prefix - computed: true, optional: false, required: false
  public get privatePrefix() {
    return this.getStringAttribute('private_prefix');
  }

  // public_prefix - computed: true, optional: false, required: false
  public get publicPrefix() {
    return this.getStringAttribute('public_prefix');
  }
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappingsOutputReference {
    return new DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCloudRouterBgpSessionBgpSessionsNat {
}

export function dataPacketfabricCloudRouterBgpSessionBgpSessionsNatToTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessionsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterBgpSessionBgpSessionsNatToHclTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessionsNat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPacketfabricCloudRouterBgpSessionBgpSessionsNat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterBgpSessionBgpSessionsNat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // dnat_mappings - computed: true, optional: false, required: false
  private _dnatMappings = new DataPacketfabricCloudRouterBgpSessionBgpSessionsNatDnatMappingsList(this, "dnat_mappings", true);
  public get dnatMappings() {
    return this._dnatMappings;
  }

  // nat_type - computed: true, optional: false, required: false
  public get natType() {
    return this.getStringAttribute('nat_type');
  }

  // pool_prefixes - computed: true, optional: false, required: false
  public get poolPrefixes() {
    return this.getListAttribute('pool_prefixes');
  }

  // pre_nat_sources - computed: true, optional: false, required: false
  public get preNatSources() {
    return this.getListAttribute('pre_nat_sources');
  }
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsNatList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterBgpSessionBgpSessionsNatOutputReference {
    return new DataPacketfabricCloudRouterBgpSessionBgpSessionsNatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixes {
}

export function dataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixesToTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixesToHclTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // as_prepend - computed: true, optional: false, required: false
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }

  // bgp_prefix_uuid - computed: true, optional: false, required: false
  public get bgpPrefixUuid() {
    return this.getStringAttribute('bgp_prefix_uuid');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getNumberAttribute('order');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixesOutputReference {
    return new DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPacketfabricCloudRouterBgpSessionBgpSessions {
}

export function dataPacketfabricCloudRouterBgpSessionBgpSessionsToTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPacketfabricCloudRouterBgpSessionBgpSessionsToHclTerraform(struct?: DataPacketfabricCloudRouterBgpSessionBgpSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataPacketfabricCloudRouterBgpSessionBgpSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPacketfabricCloudRouterBgpSessionBgpSessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_family - computed: true, optional: false, required: false
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }

  // as_prepend - computed: true, optional: false, required: false
  public get asPrepend() {
    return this.getNumberAttribute('as_prepend');
  }

  // bfd_interval - computed: true, optional: false, required: false
  public get bfdInterval() {
    return this.getNumberAttribute('bfd_interval');
  }

  // bfd_multiplier - computed: true, optional: false, required: false
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }

  // bgp_settings_uuid - computed: true, optional: false, required: false
  public get bgpSettingsUuid() {
    return this.getStringAttribute('bgp_settings_uuid');
  }

  // bgp_state - computed: true, optional: false, required: false
  public get bgpState() {
    return this.getStringAttribute('bgp_state');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // include_sub_defaults - computed: true, optional: false, required: false
  public get includeSubDefaults() {
    return this.getBooleanAttribute('include_sub_defaults');
  }

  // l3_address - computed: true, optional: false, required: false
  public get l3Address() {
    return this.getStringAttribute('l3_address');
  }

  // local_preference - computed: true, optional: false, required: false
  public get localPreference() {
    return this.getNumberAttribute('local_preference');
  }

  // med - computed: true, optional: false, required: false
  public get med() {
    return this.getNumberAttribute('med');
  }

  // multihop_ttl - computed: true, optional: false, required: false
  public get multihopTtl() {
    return this.getNumberAttribute('multihop_ttl');
  }

  // nat - computed: true, optional: false, required: false
  private _nat = new DataPacketfabricCloudRouterBgpSessionBgpSessionsNatList(this, "nat", true);
  public get nat() {
    return this._nat;
  }

  // orlonger - computed: true, optional: false, required: false
  public get orlonger() {
    return this.getBooleanAttribute('orlonger');
  }

  // prefixes - computed: true, optional: false, required: false
  private _prefixes = new DataPacketfabricCloudRouterBgpSessionBgpSessionsPrefixesList(this, "prefixes", true);
  public get prefixes() {
    return this._prefixes;
  }

  // remote_address - computed: true, optional: false, required: false
  public get remoteAddress() {
    return this.getStringAttribute('remote_address');
  }

  // remote_asn - computed: true, optional: false, required: false
  public get remoteAsn() {
    return this.getNumberAttribute('remote_asn');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataPacketfabricCloudRouterBgpSessionBgpSessionsList extends cdktf.ComplexList {

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
  public get(index: number): DataPacketfabricCloudRouterBgpSessionBgpSessionsOutputReference {
    return new DataPacketfabricCloudRouterBgpSessionBgpSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_bgp_session packetfabric_cloud_router_bgp_session}
*/
export class DataPacketfabricCloudRouterBgpSession extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "packetfabric_cloud_router_bgp_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPacketfabricCloudRouterBgpSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPacketfabricCloudRouterBgpSession to import
  * @param importFromId The id of the existing DataPacketfabricCloudRouterBgpSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_bgp_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPacketfabricCloudRouterBgpSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "packetfabric_cloud_router_bgp_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/packetfabric/packetfabric/1.9.3/docs/data-sources/cloud_router_bgp_session packetfabric_cloud_router_bgp_session} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPacketfabricCloudRouterBgpSessionConfig
  */
  public constructor(scope: Construct, id: string, config: DataPacketfabricCloudRouterBgpSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'packetfabric_cloud_router_bgp_session',
      terraformGeneratorMetadata: {
        providerName: 'packetfabric',
        providerVersion: '1.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._circuitId = config.circuitId;
    this._connectionId = config.connectionId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp_sessions - computed: true, optional: false, required: false
  private _bgpSessions = new DataPacketfabricCloudRouterBgpSessionBgpSessionsList(this, "bgp_sessions", false);
  public get bgpSessions() {
    return this._bgpSessions;
  }

  // circuit_id - computed: false, optional: false, required: true
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      circuit_id: cdktf.stringToTerraform(this._circuitId),
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      circuit_id: {
        value: cdktf.stringToHclTerraform(this._circuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
