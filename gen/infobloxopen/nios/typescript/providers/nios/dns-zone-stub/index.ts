// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsZoneStubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment for the zone; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#comment DnsZoneStub#comment}
  */
  readonly comment?: string;
  /**
  * Determines whether a zone is disabled or not. When this is set to False, the zone is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#disable DnsZoneStub#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Determines if the name servers that host the zone should not forward queries that end with the domain name of the zone to any configured forwarders.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#disable_forwarding DnsZoneStub#disable_forwarding}
  */
  readonly disableForwarding?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#extattrs DnsZoneStub#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * A forward stub server name server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#external_ns_group DnsZoneStub#external_ns_group}
  */
  readonly externalNsGroup?: string;
  /**
  * The name of this DNS zone. For a reverse zone, this is in "address/cidr" format. For other zones, this is in FQDN format. This value can be in unicode format. Note that for a reverse zone, the corresponding zone_format value should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#fqdn DnsZoneStub#fqdn}
  */
  readonly fqdn: string;
  /**
  * If you enable this flag, other administrators cannot make conflicting changes. This is for administration purposes only. The zone will continue to serve DNS data even when it is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#locked DnsZoneStub#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The flag that determines whether Active Directory is integrated or not. This field is valid only when ms_managed is "STUB", "AUTH_PRIMARY", or "AUTH_BOTH".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#ms_ad_integrated DnsZoneStub#ms_ad_integrated}
  */
  readonly msAdIntegrated?: boolean | cdktf.IResolvable;
  /**
  * Determines whether an Active Directory-integrated zone with a Microsoft DNS server as primary allows dynamic updates. Valid values are: "SECURE" if the zone allows secure updates only. "NONE" if the zone forbids dynamic updates. "ANY" if the zone accepts both secure and nonsecure updates. This field is valid only if ms_managed is either "AUTH_PRIMARY" or "AUTH_BOTH". If the flag ms_ad_integrated is false, the value "SECURE" is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#ms_ddns_mode DnsZoneStub#ms_ddns_mode}
  */
  readonly msDdnsMode?: string;
  /**
  * A stub member name server group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#ns_group DnsZoneStub#ns_group}
  */
  readonly nsGroup?: string;
  /**
  * The RFC2317 prefix value of this DNS zone. Use this field only when the netmask is greater than 24 bits; that is, for a mask between 25 and 31 bits. Enter a prefix, such as the name of the allocated address block. The prefix can be alphanumeric characters, such as 128/26 , 128-189 , or sub-B.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#prefix DnsZoneStub#prefix}
  */
  readonly prefix?: string;
  /**
  * The primary servers (masters) of this stub zone.Note that the stealth/tsig_key/tsig_key_alg/tsig_key_name/use_tsig_key_name fields of the struct will be ignored when set in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#stub_from DnsZoneStub#stub_from}
  */
  readonly stubFrom?: DnsZoneStubStubFrom[] | cdktf.IResolvable;
  /**
  * The Grid member servers of this stub zone. Note that the lead/stealth/grid_replicate/ preferred_primaries/enable_preferred_primaries fields of the struct will be ignored when set in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#stub_members DnsZoneStub#stub_members}
  */
  readonly stubMembers?: DnsZoneStubStubMembers[] | cdktf.IResolvable;
  /**
  * The Microsoft DNS servers of this stub zone. Note that the stealth field of the struct will be ignored when set in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#stub_msservers DnsZoneStub#stub_msservers}
  */
  readonly stubMsservers?: DnsZoneStubStubMsservers[] | cdktf.IResolvable;
  /**
  * The name of the DNS view in which the zone resides. Example "external".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#view DnsZoneStub#view}
  */
  readonly view?: string;
  /**
  * Determines the format of this zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#zone_format DnsZoneStub#zone_format}
  */
  readonly zoneFormat?: string;
}
export interface DnsZoneStubStubFrom {
  /**
  * The IPv4 Address or IPv6 Address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#address DnsZoneStub#address}
  */
  readonly address: string;
  /**
  * A resolvable domain name for the external DNS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#name DnsZoneStub#name}
  */
  readonly name: string;
}

export function dnsZoneStubStubFromToTerraform(struct?: DnsZoneStubStubFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsZoneStubStubFromToHclTerraform(struct?: DnsZoneStubStubFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneStubStubFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneStubStubFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneStubStubFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._name = value.name;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // name - computed: true, optional: false, required: true
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

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_alg - computed: true, optional: false, required: false
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // use_tsig_key_name - computed: true, optional: false, required: false
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
}

export class DnsZoneStubStubFromList extends cdktf.ComplexList {
  public internalValue? : DnsZoneStubStubFrom[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneStubStubFromOutputReference {
    return new DnsZoneStubStubFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneStubStubMembersPreferredPrimaries {
}

export function dnsZoneStubStubMembersPreferredPrimariesToTerraform(struct?: DnsZoneStubStubMembersPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dnsZoneStubStubMembersPreferredPrimariesToHclTerraform(struct?: DnsZoneStubStubMembersPreferredPrimaries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DnsZoneStubStubMembersPreferredPrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneStubStubMembersPreferredPrimaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneStubStubMembersPreferredPrimaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }

  // tsig_key - computed: true, optional: false, required: false
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }

  // tsig_key_alg - computed: true, optional: false, required: false
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }

  // tsig_key_name - computed: true, optional: false, required: false
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }

  // use_tsig_key_name - computed: true, optional: false, required: false
  public get useTsigKeyName() {
    return this.getBooleanAttribute('use_tsig_key_name');
  }
}

export class DnsZoneStubStubMembersPreferredPrimariesList extends cdktf.ComplexList {

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
  public get(index: number): DnsZoneStubStubMembersPreferredPrimariesOutputReference {
    return new DnsZoneStubStubMembersPreferredPrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneStubStubMembers {
  /**
  * The flag represents DNS zone transfers if set to False, and ID Grid Replication if set to True. This flag is ignored if the struct is specified as part of a stub zone or if it is set as grid_member in an authoritative zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#grid_replicate DnsZoneStub#grid_replicate}
  */
  readonly gridReplicate?: boolean | cdktf.IResolvable;
  /**
  * The grid member name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#name DnsZoneStub#name}
  */
  readonly name: string;
}

export function dnsZoneStubStubMembersToTerraform(struct?: DnsZoneStubStubMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grid_replicate: cdktf.booleanToTerraform(struct!.gridReplicate),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dnsZoneStubStubMembersToHclTerraform(struct?: DnsZoneStubStubMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grid_replicate: {
      value: cdktf.booleanToHclTerraform(struct!.gridReplicate),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneStubStubMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneStubStubMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gridReplicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.gridReplicate = this._gridReplicate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneStubStubMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gridReplicate = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gridReplicate = value.gridReplicate;
      this._name = value.name;
    }
  }

  // enable_preferred_primaries - computed: true, optional: false, required: false
  public get enablePreferredPrimaries() {
    return this.getBooleanAttribute('enable_preferred_primaries');
  }

  // grid_replicate - computed: true, optional: true, required: false
  private _gridReplicate?: boolean | cdktf.IResolvable; 
  public get gridReplicate() {
    return this.getBooleanAttribute('grid_replicate');
  }
  public set gridReplicate(value: boolean | cdktf.IResolvable) {
    this._gridReplicate = value;
  }
  public resetGridReplicate() {
    this._gridReplicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gridReplicateInput() {
    return this._gridReplicate;
  }

  // lead - computed: true, optional: false, required: false
  public get lead() {
    return this.getBooleanAttribute('lead');
  }

  // name - computed: true, optional: false, required: true
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

  // preferred_primaries - computed: true, optional: false, required: false
  private _preferredPrimaries = new DnsZoneStubStubMembersPreferredPrimariesList(this, "preferred_primaries", false);
  public get preferredPrimaries() {
    return this._preferredPrimaries;
  }

  // stealth - computed: true, optional: false, required: false
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }
}

export class DnsZoneStubStubMembersList extends cdktf.ComplexList {
  public internalValue? : DnsZoneStubStubMembers[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneStubStubMembersOutputReference {
    return new DnsZoneStubStubMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsZoneStubStubMsservers {
  /**
  * The address of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#address DnsZoneStub#address}
  */
  readonly address: string;
  /**
  * This flag indicates if this server is a synchronization master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#is_master DnsZoneStub#is_master}
  */
  readonly isMaster?: boolean | cdktf.IResolvable;
  /**
  * This address is used when generating the NS record in the zone, which can be different in case of multihomed hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#ns_ip DnsZoneStub#ns_ip}
  */
  readonly nsIp: string;
  /**
  * This name is used when generating the NS record in the zone, which can be different in case of multihomed hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#ns_name DnsZoneStub#ns_name}
  */
  readonly nsName: string;
  /**
  * Set this flag to hide the NS record for the primary name server from DNS queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#stealth DnsZoneStub#stealth}
  */
  readonly stealth?: boolean | cdktf.IResolvable;
}

export function dnsZoneStubStubMsserversToTerraform(struct?: DnsZoneStubStubMsservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    is_master: cdktf.booleanToTerraform(struct!.isMaster),
    ns_ip: cdktf.stringToTerraform(struct!.nsIp),
    ns_name: cdktf.stringToTerraform(struct!.nsName),
    stealth: cdktf.booleanToTerraform(struct!.stealth),
  }
}


export function dnsZoneStubStubMsserversToHclTerraform(struct?: DnsZoneStubStubMsservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_master: {
      value: cdktf.booleanToHclTerraform(struct!.isMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ns_ip: {
      value: cdktf.stringToHclTerraform(struct!.nsIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ns_name: {
      value: cdktf.stringToHclTerraform(struct!.nsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stealth: {
      value: cdktf.booleanToHclTerraform(struct!.stealth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsZoneStubStubMsserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsZoneStubStubMsservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._isMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaster = this._isMaster;
    }
    if (this._nsIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsIp = this._nsIp;
    }
    if (this._nsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsName = this._nsName;
    }
    if (this._stealth !== undefined) {
      hasAnyValues = true;
      internalValueResult.stealth = this._stealth;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsZoneStubStubMsservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._isMaster = undefined;
      this._nsIp = undefined;
      this._nsName = undefined;
      this._stealth = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._isMaster = value.isMaster;
      this._nsIp = value.nsIp;
      this._nsName = value.nsName;
      this._stealth = value.stealth;
    }
  }

  // address - computed: true, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // is_master - computed: true, optional: true, required: false
  private _isMaster?: boolean | cdktf.IResolvable; 
  public get isMaster() {
    return this.getBooleanAttribute('is_master');
  }
  public set isMaster(value: boolean | cdktf.IResolvable) {
    this._isMaster = value;
  }
  public resetIsMaster() {
    this._isMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMasterInput() {
    return this._isMaster;
  }

  // ns_ip - computed: true, optional: false, required: true
  private _nsIp?: string; 
  public get nsIp() {
    return this.getStringAttribute('ns_ip');
  }
  public set nsIp(value: string) {
    this._nsIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsIpInput() {
    return this._nsIp;
  }

  // ns_name - computed: true, optional: false, required: true
  private _nsName?: string; 
  public get nsName() {
    return this.getStringAttribute('ns_name');
  }
  public set nsName(value: string) {
    this._nsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nsNameInput() {
    return this._nsName;
  }

  // shared_with_ms_parent_delegation - computed: true, optional: false, required: false
  public get sharedWithMsParentDelegation() {
    return this.getBooleanAttribute('shared_with_ms_parent_delegation');
  }

  // stealth - computed: true, optional: true, required: false
  private _stealth?: boolean | cdktf.IResolvable; 
  public get stealth() {
    return this.getBooleanAttribute('stealth');
  }
  public set stealth(value: boolean | cdktf.IResolvable) {
    this._stealth = value;
  }
  public resetStealth() {
    this._stealth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stealthInput() {
    return this._stealth;
  }
}

export class DnsZoneStubStubMsserversList extends cdktf.ComplexList {
  public internalValue? : DnsZoneStubStubMsservers[] | cdktf.IResolvable

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
  public get(index: number): DnsZoneStubStubMsserversOutputReference {
    return new DnsZoneStubStubMsserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub nios_dns_zone_stub}
*/
export class DnsZoneStub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dns_zone_stub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsZoneStub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsZoneStub to import
  * @param importFromId The id of the existing DnsZoneStub that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsZoneStub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dns_zone_stub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/dns_zone_stub nios_dns_zone_stub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsZoneStubConfig
  */
  public constructor(scope: Construct, id: string, config: DnsZoneStubConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_dns_zone_stub',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._disable = config.disable;
    this._disableForwarding = config.disableForwarding;
    this._extattrs = config.extattrs;
    this._externalNsGroup = config.externalNsGroup;
    this._fqdn = config.fqdn;
    this._locked = config.locked;
    this._msAdIntegrated = config.msAdIntegrated;
    this._msDdnsMode = config.msDdnsMode;
    this._nsGroup = config.nsGroup;
    this._prefix = config.prefix;
    this._stubFrom.internalValue = config.stubFrom;
    this._stubMembers.internalValue = config.stubMembers;
    this._stubMsservers.internalValue = config.stubMsservers;
    this._view = config.view;
    this._zoneFormat = config.zoneFormat;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // disable_forwarding - computed: true, optional: true, required: false
  private _disableForwarding?: boolean | cdktf.IResolvable; 
  public get disableForwarding() {
    return this.getBooleanAttribute('disable_forwarding');
  }
  public set disableForwarding(value: boolean | cdktf.IResolvable) {
    this._disableForwarding = value;
  }
  public resetDisableForwarding() {
    this._disableForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForwardingInput() {
    return this._disableForwarding;
  }

  // display_domain - computed: true, optional: false, required: false
  public get displayDomain() {
    return this.getStringAttribute('display_domain');
  }

  // dns_fqdn - computed: true, optional: false, required: false
  public get dnsFqdn() {
    return this.getStringAttribute('dns_fqdn');
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // external_ns_group - computed: true, optional: true, required: false
  private _externalNsGroup?: string; 
  public get externalNsGroup() {
    return this.getStringAttribute('external_ns_group');
  }
  public set externalNsGroup(value: string) {
    this._externalNsGroup = value;
  }
  public resetExternalNsGroup() {
    this._externalNsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNsGroupInput() {
    return this._externalNsGroup;
  }

  // fqdn - computed: false, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // locked_by - computed: true, optional: false, required: false
  public get lockedBy() {
    return this.getStringAttribute('locked_by');
  }

  // mask_prefix - computed: true, optional: false, required: false
  public get maskPrefix() {
    return this.getStringAttribute('mask_prefix');
  }

  // ms_ad_integrated - computed: true, optional: true, required: false
  private _msAdIntegrated?: boolean | cdktf.IResolvable; 
  public get msAdIntegrated() {
    return this.getBooleanAttribute('ms_ad_integrated');
  }
  public set msAdIntegrated(value: boolean | cdktf.IResolvable) {
    this._msAdIntegrated = value;
  }
  public resetMsAdIntegrated() {
    this._msAdIntegrated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msAdIntegratedInput() {
    return this._msAdIntegrated;
  }

  // ms_ddns_mode - computed: true, optional: true, required: false
  private _msDdnsMode?: string; 
  public get msDdnsMode() {
    return this.getStringAttribute('ms_ddns_mode');
  }
  public set msDdnsMode(value: string) {
    this._msDdnsMode = value;
  }
  public resetMsDdnsMode() {
    this._msDdnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msDdnsModeInput() {
    return this._msDdnsMode;
  }

  // ms_managed - computed: true, optional: false, required: false
  public get msManaged() {
    return this.getStringAttribute('ms_managed');
  }

  // ms_read_only - computed: true, optional: false, required: false
  public get msReadOnly() {
    return this.getBooleanAttribute('ms_read_only');
  }

  // ms_sync_master_name - computed: true, optional: false, required: false
  public get msSyncMasterName() {
    return this.getStringAttribute('ms_sync_master_name');
  }

  // ns_group - computed: true, optional: true, required: false
  private _nsGroup?: string; 
  public get nsGroup() {
    return this.getStringAttribute('ns_group');
  }
  public set nsGroup(value: string) {
    this._nsGroup = value;
  }
  public resetNsGroup() {
    this._nsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsGroupInput() {
    return this._nsGroup;
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // soa_email - computed: true, optional: false, required: false
  public get soaEmail() {
    return this.getStringAttribute('soa_email');
  }

  // soa_expire - computed: true, optional: false, required: false
  public get soaExpire() {
    return this.getNumberAttribute('soa_expire');
  }

  // soa_mname - computed: true, optional: false, required: false
  public get soaMname() {
    return this.getStringAttribute('soa_mname');
  }

  // soa_negative_ttl - computed: true, optional: false, required: false
  public get soaNegativeTtl() {
    return this.getNumberAttribute('soa_negative_ttl');
  }

  // soa_refresh - computed: true, optional: false, required: false
  public get soaRefresh() {
    return this.getNumberAttribute('soa_refresh');
  }

  // soa_retry - computed: true, optional: false, required: false
  public get soaRetry() {
    return this.getNumberAttribute('soa_retry');
  }

  // soa_serial_number - computed: true, optional: false, required: false
  public get soaSerialNumber() {
    return this.getNumberAttribute('soa_serial_number');
  }

  // stub_from - computed: true, optional: true, required: false
  private _stubFrom = new DnsZoneStubStubFromList(this, "stub_from", false);
  public get stubFrom() {
    return this._stubFrom;
  }
  public putStubFrom(value: DnsZoneStubStubFrom[] | cdktf.IResolvable) {
    this._stubFrom.internalValue = value;
  }
  public resetStubFrom() {
    this._stubFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubFromInput() {
    return this._stubFrom.internalValue;
  }

  // stub_members - computed: true, optional: true, required: false
  private _stubMembers = new DnsZoneStubStubMembersList(this, "stub_members", false);
  public get stubMembers() {
    return this._stubMembers;
  }
  public putStubMembers(value: DnsZoneStubStubMembers[] | cdktf.IResolvable) {
    this._stubMembers.internalValue = value;
  }
  public resetStubMembers() {
    this._stubMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubMembersInput() {
    return this._stubMembers.internalValue;
  }

  // stub_msservers - computed: true, optional: true, required: false
  private _stubMsservers = new DnsZoneStubStubMsserversList(this, "stub_msservers", false);
  public get stubMsservers() {
    return this._stubMsservers;
  }
  public putStubMsservers(value: DnsZoneStubStubMsservers[] | cdktf.IResolvable) {
    this._stubMsservers.internalValue = value;
  }
  public resetStubMsservers() {
    this._stubMsservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubMsserversInput() {
    return this._stubMsservers.internalValue;
  }

  // using_srg_associations - computed: true, optional: false, required: false
  public get usingSrgAssociations() {
    return this.getBooleanAttribute('using_srg_associations');
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // zone_format - computed: true, optional: true, required: false
  private _zoneFormat?: string; 
  public get zoneFormat() {
    return this.getStringAttribute('zone_format');
  }
  public set zoneFormat(value: string) {
    this._zoneFormat = value;
  }
  public resetZoneFormat() {
    this._zoneFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneFormatInput() {
    return this._zoneFormat;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      disable: cdktf.booleanToTerraform(this._disable),
      disable_forwarding: cdktf.booleanToTerraform(this._disableForwarding),
      extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrs),
      external_ns_group: cdktf.stringToTerraform(this._externalNsGroup),
      fqdn: cdktf.stringToTerraform(this._fqdn),
      locked: cdktf.booleanToTerraform(this._locked),
      ms_ad_integrated: cdktf.booleanToTerraform(this._msAdIntegrated),
      ms_ddns_mode: cdktf.stringToTerraform(this._msDdnsMode),
      ns_group: cdktf.stringToTerraform(this._nsGroup),
      prefix: cdktf.stringToTerraform(this._prefix),
      stub_from: cdktf.listMapper(dnsZoneStubStubFromToTerraform, false)(this._stubFrom.internalValue),
      stub_members: cdktf.listMapper(dnsZoneStubStubMembersToTerraform, false)(this._stubMembers.internalValue),
      stub_msservers: cdktf.listMapper(dnsZoneStubStubMsserversToTerraform, false)(this._stubMsservers.internalValue),
      view: cdktf.stringToTerraform(this._view),
      zone_format: cdktf.stringToTerraform(this._zoneFormat),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_forwarding: {
        value: cdktf.booleanToHclTerraform(this._disableForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extattrs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_ns_group: {
        value: cdktf.stringToHclTerraform(this._externalNsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: cdktf.stringToHclTerraform(this._fqdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ms_ad_integrated: {
        value: cdktf.booleanToHclTerraform(this._msAdIntegrated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ms_ddns_mode: {
        value: cdktf.stringToHclTerraform(this._msDdnsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ns_group: {
        value: cdktf.stringToHclTerraform(this._nsGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stub_from: {
        value: cdktf.listMapperHcl(dnsZoneStubStubFromToHclTerraform, false)(this._stubFrom.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneStubStubFromList",
      },
      stub_members: {
        value: cdktf.listMapperHcl(dnsZoneStubStubMembersToHclTerraform, false)(this._stubMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneStubStubMembersList",
      },
      stub_msservers: {
        value: cdktf.listMapperHcl(dnsZoneStubStubMsserversToHclTerraform, false)(this._stubMsservers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsZoneStubStubMsserversList",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_format: {
        value: cdktf.stringToHclTerraform(this._zoneFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
