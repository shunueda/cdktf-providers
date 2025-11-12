// https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/bgp_peer_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPnapBgpPeerGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/bgp_peer_group#id DataPnapBgpPeerGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/bgp_peer_group#location DataPnapBgpPeerGroup#location}
  */
  readonly location?: string;
}
export interface DataPnapBgpPeerGroupActiveAsnDetails {
}

export function dataPnapBgpPeerGroupActiveAsnDetailsToTerraform(struct?: DataPnapBgpPeerGroupActiveAsnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapBgpPeerGroupActiveAsnDetailsToHclTerraform(struct?: DataPnapBgpPeerGroupActiveAsnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapBgpPeerGroupActiveAsnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapBgpPeerGroupActiveAsnDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapBgpPeerGroupActiveAsnDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // is_bring_your_own - computed: true, optional: false, required: false
  public get isBringYourOwn() {
    return this.getBooleanAttribute('is_bring_your_own');
  }

  // verification_reason - computed: true, optional: false, required: false
  public get verificationReason() {
    return this.getStringAttribute('verification_reason');
  }

  // verification_status - computed: true, optional: false, required: false
  public get verificationStatus() {
    return this.getStringAttribute('verification_status');
  }
}

export class DataPnapBgpPeerGroupActiveAsnDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapBgpPeerGroupActiveAsnDetailsOutputReference {
    return new DataPnapBgpPeerGroupActiveAsnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPnapBgpPeerGroupIpPrefixes {
}

export function dataPnapBgpPeerGroupIpPrefixesToTerraform(struct?: DataPnapBgpPeerGroupIpPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapBgpPeerGroupIpPrefixesToHclTerraform(struct?: DataPnapBgpPeerGroupIpPrefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapBgpPeerGroupIpPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapBgpPeerGroupIpPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapBgpPeerGroupIpPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // ip_allocation_id - computed: true, optional: false, required: false
  public get ipAllocationId() {
    return this.getStringAttribute('ip_allocation_id');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataPnapBgpPeerGroupIpPrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapBgpPeerGroupIpPrefixesOutputReference {
    return new DataPnapBgpPeerGroupIpPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPnapBgpPeerGroupIpv4Prefixes {
}

export function dataPnapBgpPeerGroupIpv4PrefixesToTerraform(struct?: DataPnapBgpPeerGroupIpv4Prefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapBgpPeerGroupIpv4PrefixesToHclTerraform(struct?: DataPnapBgpPeerGroupIpv4Prefixes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapBgpPeerGroupIpv4PrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapBgpPeerGroupIpv4Prefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapBgpPeerGroupIpv4Prefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // in_use - computed: true, optional: false, required: false
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }

  // ipv4_allocation_id - computed: true, optional: false, required: false
  public get ipv4AllocationId() {
    return this.getStringAttribute('ipv4_allocation_id');
  }

  // is_bring_your_own_ip - computed: true, optional: false, required: false
  public get isBringYourOwnIp() {
    return this.getBooleanAttribute('is_bring_your_own_ip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataPnapBgpPeerGroupIpv4PrefixesList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapBgpPeerGroupIpv4PrefixesOutputReference {
    return new DataPnapBgpPeerGroupIpv4PrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPnapBgpPeerGroupTargetAsnDetails {
}

export function dataPnapBgpPeerGroupTargetAsnDetailsToTerraform(struct?: DataPnapBgpPeerGroupTargetAsnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPnapBgpPeerGroupTargetAsnDetailsToHclTerraform(struct?: DataPnapBgpPeerGroupTargetAsnDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPnapBgpPeerGroupTargetAsnDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPnapBgpPeerGroupTargetAsnDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPnapBgpPeerGroupTargetAsnDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asn - computed: true, optional: false, required: false
  public get asn() {
    return this.getNumberAttribute('asn');
  }

  // is_bring_your_own - computed: true, optional: false, required: false
  public get isBringYourOwn() {
    return this.getBooleanAttribute('is_bring_your_own');
  }

  // verification_reason - computed: true, optional: false, required: false
  public get verificationReason() {
    return this.getStringAttribute('verification_reason');
  }

  // verification_status - computed: true, optional: false, required: false
  public get verificationStatus() {
    return this.getStringAttribute('verification_status');
  }
}

export class DataPnapBgpPeerGroupTargetAsnDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPnapBgpPeerGroupTargetAsnDetailsOutputReference {
    return new DataPnapBgpPeerGroupTargetAsnDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/bgp_peer_group pnap_bgp_peer_group}
*/
export class DataPnapBgpPeerGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pnap_bgp_peer_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPnapBgpPeerGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPnapBgpPeerGroup to import
  * @param importFromId The id of the existing DataPnapBgpPeerGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/bgp_peer_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPnapBgpPeerGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pnap_bgp_peer_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/data-sources/bgp_peer_group pnap_bgp_peer_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPnapBgpPeerGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPnapBgpPeerGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pnap_bgp_peer_group',
      terraformGeneratorMetadata: {
        providerName: 'pnap',
        providerVersion: '0.30.0',
        providerVersionConstraint: '0.30.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_asn_details - computed: true, optional: false, required: false
  private _activeAsnDetails = new DataPnapBgpPeerGroupActiveAsnDetailsList(this, "active_asn_details", false);
  public get activeAsnDetails() {
    return this._activeAsnDetails;
  }

  // advertised_routes - computed: true, optional: false, required: false
  public get advertisedRoutes() {
    return this.getStringAttribute('advertised_routes');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // ebgp_multi_hop - computed: true, optional: false, required: false
  public get ebgpMultiHop() {
    return this.getNumberAttribute('ebgp_multi_hop');
  }

  // hold_timer_seconds - computed: true, optional: false, required: false
  public get holdTimerSeconds() {
    return this.getNumberAttribute('hold_timer_seconds');
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

  // ip_prefixes - computed: true, optional: false, required: false
  private _ipPrefixes = new DataPnapBgpPeerGroupIpPrefixesList(this, "ip_prefixes", false);
  public get ipPrefixes() {
    return this._ipPrefixes;
  }

  // ipv4_prefixes - computed: true, optional: false, required: false
  private _ipv4Prefixes = new DataPnapBgpPeerGroupIpv4PrefixesList(this, "ipv4_prefixes", false);
  public get ipv4Prefixes() {
    return this._ipv4Prefixes;
  }

  // keep_alive_timer_seconds - computed: true, optional: false, required: false
  public get keepAliveTimerSeconds() {
    return this.getNumberAttribute('keep_alive_timer_seconds');
  }

  // last_updated_on - computed: true, optional: false, required: false
  public get lastUpdatedOn() {
    return this.getStringAttribute('last_updated_on');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // peering_loopbacks_v4 - computed: true, optional: false, required: false
  public get peeringLoopbacksV4() {
    return cdktf.Fn.tolist(this.getListAttribute('peering_loopbacks_v4'));
  }

  // peering_loopbacks_v6 - computed: true, optional: false, required: false
  public get peeringLoopbacksV6() {
    return cdktf.Fn.tolist(this.getListAttribute('peering_loopbacks_v6'));
  }

  // rpki_roa_origin_asn - computed: true, optional: false, required: false
  public get rpkiRoaOriginAsn() {
    return this.getNumberAttribute('rpki_roa_origin_asn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_asn_details - computed: true, optional: false, required: false
  private _targetAsnDetails = new DataPnapBgpPeerGroupTargetAsnDetailsList(this, "target_asn_details", false);
  public get targetAsnDetails() {
    return this._targetAsnDetails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
