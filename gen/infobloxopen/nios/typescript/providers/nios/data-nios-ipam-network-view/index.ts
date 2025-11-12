// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosIpamNetworkViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#extattrfilters DataNiosIpamNetworkView#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#filters DataNiosIpamNetworkView#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#max_results DataNiosIpamNetworkView#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#paging DataNiosIpamNetworkView#paging}
  */
  readonly paging?: number;
}
export interface DataNiosIpamNetworkViewResultAssociatedMembers {
}

export function dataNiosIpamNetworkViewResultAssociatedMembersToTerraform(struct?: DataNiosIpamNetworkViewResultAssociatedMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosIpamNetworkViewResultAssociatedMembersToHclTerraform(struct?: DataNiosIpamNetworkViewResultAssociatedMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosIpamNetworkViewResultAssociatedMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamNetworkViewResultAssociatedMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultAssociatedMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failovers - computed: true, optional: false, required: false
  public get failovers() {
    return this.getListAttribute('failovers');
  }

  // member - computed: true, optional: false, required: false
  public get member() {
    return this.getStringAttribute('member');
  }
}

export class DataNiosIpamNetworkViewResultAssociatedMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataNiosIpamNetworkViewResultAssociatedMembersOutputReference {
    return new DataNiosIpamNetworkViewResultAssociatedMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamNetworkViewResultCloudInfoDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#ipv4addr DataNiosIpamNetworkView#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#ipv6addr DataNiosIpamNetworkView#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#name DataNiosIpamNetworkView#name}
  */
  readonly name?: string;
}

export function dataNiosIpamNetworkViewResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosIpamNetworkViewResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosIpamNetworkViewResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosIpamNetworkViewResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
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

export class DataNiosIpamNetworkViewResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamNetworkViewResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface DataNiosIpamNetworkViewResultCloudInfo {
  /**
  * The Cloud Platform Appliance to which authority of the object is delegated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#delegated_member DataNiosIpamNetworkView#delegated_member}
  */
  readonly delegatedMember?: DataNiosIpamNetworkViewResultCloudInfoDelegatedMember;
}

export function dataNiosIpamNetworkViewResultCloudInfoToTerraform(struct?: DataNiosIpamNetworkViewResultCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_member: dataNiosIpamNetworkViewResultCloudInfoDelegatedMemberToTerraform(struct!.delegatedMember),
  }
}


export function dataNiosIpamNetworkViewResultCloudInfoToHclTerraform(struct?: DataNiosIpamNetworkViewResultCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_member: {
      value: dataNiosIpamNetworkViewResultCloudInfoDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamNetworkViewResultCloudInfoDelegatedMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamNetworkViewResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamNetworkViewResultCloudInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegatedMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedMember = this._delegatedMember?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultCloudInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegatedMember.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegatedMember.internalValue = value.delegatedMember;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: true, required: false
  private _delegatedMember = new DataNiosIpamNetworkViewResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: DataNiosIpamNetworkViewResultCloudInfoDelegatedMember) {
    this._delegatedMember.internalValue = value;
  }
  public resetDelegatedMember() {
    this._delegatedMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedMemberInput() {
    return this._delegatedMember.internalValue;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}
export interface DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone {
  /**
  * The reference to the DNS zone object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#ref DataNiosIpamNetworkView#ref}
  */
  readonly ref: string;
}

export function dataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZoneToTerraform(struct?: DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.stringToTerraform(struct!.ref),
  }
}


export function dataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZoneToHclTerraform(struct?: DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref = value.ref;
    }
  }

  // ref - computed: true, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }
}
export interface DataNiosIpamNetworkViewResultDdnsZonePrimaries {
  /**
  * The IP address of the External server. Valid when zone_match is "EXTERNAL" or "ANY_EXTERNAL".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#dns_ext_primary DataNiosIpamNetworkView#dns_ext_primary}
  */
  readonly dnsExtPrimary?: string;
  /**
  * The name of external zone in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#dns_ext_zone DataNiosIpamNetworkView#dns_ext_zone}
  */
  readonly dnsExtZone?: string;
  /**
  * The name of a Grid member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#dns_grid_primary DataNiosIpamNetworkView#dns_grid_primary}
  */
  readonly dnsGridPrimary?: string;
  /**
  * The ref of a DNS zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#dns_grid_zone DataNiosIpamNetworkView#dns_grid_zone}
  */
  readonly dnsGridZone?: DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone;
  /**
  * Indicate matching type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#zone_match DataNiosIpamNetworkView#zone_match}
  */
  readonly zoneMatch: string;
}

export function dataNiosIpamNetworkViewResultDdnsZonePrimariesToTerraform(struct?: DataNiosIpamNetworkViewResultDdnsZonePrimaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ext_primary: cdktf.stringToTerraform(struct!.dnsExtPrimary),
    dns_ext_zone: cdktf.stringToTerraform(struct!.dnsExtZone),
    dns_grid_primary: cdktf.stringToTerraform(struct!.dnsGridPrimary),
    dns_grid_zone: dataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZoneToTerraform(struct!.dnsGridZone),
    zone_match: cdktf.stringToTerraform(struct!.zoneMatch),
  }
}


export function dataNiosIpamNetworkViewResultDdnsZonePrimariesToHclTerraform(struct?: DataNiosIpamNetworkViewResultDdnsZonePrimaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ext_primary: {
      value: cdktf.stringToHclTerraform(struct!.dnsExtPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ext_zone: {
      value: cdktf.stringToHclTerraform(struct!.dnsExtZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_grid_primary: {
      value: cdktf.stringToHclTerraform(struct!.dnsGridPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_grid_zone: {
      value: dataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZoneToHclTerraform(struct!.dnsGridZone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone",
    },
    zone_match: {
      value: cdktf.stringToHclTerraform(struct!.zoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamNetworkViewResultDdnsZonePrimariesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamNetworkViewResultDdnsZonePrimaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsExtPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsExtPrimary = this._dnsExtPrimary;
    }
    if (this._dnsExtZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsExtZone = this._dnsExtZone;
    }
    if (this._dnsGridPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsGridPrimary = this._dnsGridPrimary;
    }
    if (this._dnsGridZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsGridZone = this._dnsGridZone?.internalValue;
    }
    if (this._zoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMatch = this._zoneMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultDdnsZonePrimaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsExtPrimary = undefined;
      this._dnsExtZone = undefined;
      this._dnsGridPrimary = undefined;
      this._dnsGridZone.internalValue = undefined;
      this._zoneMatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsExtPrimary = value.dnsExtPrimary;
      this._dnsExtZone = value.dnsExtZone;
      this._dnsGridPrimary = value.dnsGridPrimary;
      this._dnsGridZone.internalValue = value.dnsGridZone;
      this._zoneMatch = value.zoneMatch;
    }
  }

  // dns_ext_primary - computed: true, optional: true, required: false
  private _dnsExtPrimary?: string; 
  public get dnsExtPrimary() {
    return this.getStringAttribute('dns_ext_primary');
  }
  public set dnsExtPrimary(value: string) {
    this._dnsExtPrimary = value;
  }
  public resetDnsExtPrimary() {
    this._dnsExtPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsExtPrimaryInput() {
    return this._dnsExtPrimary;
  }

  // dns_ext_zone - computed: true, optional: true, required: false
  private _dnsExtZone?: string; 
  public get dnsExtZone() {
    return this.getStringAttribute('dns_ext_zone');
  }
  public set dnsExtZone(value: string) {
    this._dnsExtZone = value;
  }
  public resetDnsExtZone() {
    this._dnsExtZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsExtZoneInput() {
    return this._dnsExtZone;
  }

  // dns_grid_primary - computed: true, optional: true, required: false
  private _dnsGridPrimary?: string; 
  public get dnsGridPrimary() {
    return this.getStringAttribute('dns_grid_primary');
  }
  public set dnsGridPrimary(value: string) {
    this._dnsGridPrimary = value;
  }
  public resetDnsGridPrimary() {
    this._dnsGridPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsGridPrimaryInput() {
    return this._dnsGridPrimary;
  }

  // dns_grid_zone - computed: true, optional: true, required: false
  private _dnsGridZone = new DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZoneOutputReference(this, "dns_grid_zone");
  public get dnsGridZone() {
    return this._dnsGridZone;
  }
  public putDnsGridZone(value: DataNiosIpamNetworkViewResultDdnsZonePrimariesDnsGridZone) {
    this._dnsGridZone.internalValue = value;
  }
  public resetDnsGridZone() {
    this._dnsGridZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsGridZoneInput() {
    return this._dnsGridZone.internalValue;
  }

  // zone_match - computed: true, optional: false, required: true
  private _zoneMatch?: string; 
  public get zoneMatch() {
    return this.getStringAttribute('zone_match');
  }
  public set zoneMatch(value: string) {
    this._zoneMatch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMatchInput() {
    return this._zoneMatch;
  }
}

export class DataNiosIpamNetworkViewResultDdnsZonePrimariesList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamNetworkViewResultDdnsZonePrimaries[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamNetworkViewResultDdnsZonePrimariesOutputReference {
    return new DataNiosIpamNetworkViewResultDdnsZonePrimariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamNetworkViewResultFederatedRealms {
  /**
  * The federated realm id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#id DataNiosIpamNetworkView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The federated realm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#name DataNiosIpamNetworkView#name}
  */
  readonly name: string;
}

export function dataNiosIpamNetworkViewResultFederatedRealmsToTerraform(struct?: DataNiosIpamNetworkViewResultFederatedRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosIpamNetworkViewResultFederatedRealmsToHclTerraform(struct?: DataNiosIpamNetworkViewResultFederatedRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataNiosIpamNetworkViewResultFederatedRealmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamNetworkViewResultFederatedRealms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultFederatedRealms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataNiosIpamNetworkViewResultFederatedRealmsList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamNetworkViewResultFederatedRealms[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamNetworkViewResultFederatedRealmsOutputReference {
    return new DataNiosIpamNetworkViewResultFederatedRealmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamNetworkViewResultMsAdUserData {
}

export function dataNiosIpamNetworkViewResultMsAdUserDataToTerraform(struct?: DataNiosIpamNetworkViewResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosIpamNetworkViewResultMsAdUserDataToHclTerraform(struct?: DataNiosIpamNetworkViewResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosIpamNetworkViewResultMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamNetworkViewResultMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultMsAdUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface DataNiosIpamNetworkViewResultRemoteForwardZones {
  /**
  * The FQDN of the remote server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#fqdn DataNiosIpamNetworkView#fqdn}
  */
  readonly fqdn: string;
  /**
  * The principal name in which GSS-TSIG for dynamic updates is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#gss_tsig_dns_principal DataNiosIpamNetworkView#gss_tsig_dns_principal}
  */
  readonly gssTsigDnsPrincipal?: string;
  /**
  * The domain in which GSS-TSIG for dynamic updates is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#gss_tsig_domain DataNiosIpamNetworkView#gss_tsig_domain}
  */
  readonly gssTsigDomain?: string;
  /**
  * The key type to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#key_type DataNiosIpamNetworkView#key_type}
  */
  readonly keyType?: string;
  /**
  * The remote server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#server_address DataNiosIpamNetworkView#server_address}
  */
  readonly serverAddress: string;
  /**
  * The TSIG key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#tsig_key DataNiosIpamNetworkView#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key alorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#tsig_key_alg DataNiosIpamNetworkView#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The name of the TSIG key. The key name entered here must match the TSIG key name on the external name server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#tsig_key_name DataNiosIpamNetworkView#tsig_key_name}
  */
  readonly tsigKeyName?: string;
}

export function dataNiosIpamNetworkViewResultRemoteForwardZonesToTerraform(struct?: DataNiosIpamNetworkViewResultRemoteForwardZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    gss_tsig_dns_principal: cdktf.stringToTerraform(struct!.gssTsigDnsPrincipal),
    gss_tsig_domain: cdktf.stringToTerraform(struct!.gssTsigDomain),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
  }
}


export function dataNiosIpamNetworkViewResultRemoteForwardZonesToHclTerraform(struct?: DataNiosIpamNetworkViewResultRemoteForwardZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_dns_principal: {
      value: cdktf.stringToHclTerraform(struct!.gssTsigDnsPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_domain: {
      value: cdktf.stringToHclTerraform(struct!.gssTsigDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: cdktf.stringToHclTerraform(struct!.tsigKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_alg: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamNetworkViewResultRemoteForwardZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamNetworkViewResultRemoteForwardZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._gssTsigDnsPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigDnsPrincipal = this._gssTsigDnsPrincipal;
    }
    if (this._gssTsigDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigDomain = this._gssTsigDomain;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlg = this._tsigKeyAlg;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultRemoteForwardZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._gssTsigDnsPrincipal = undefined;
      this._gssTsigDomain = undefined;
      this._keyType = undefined;
      this._serverAddress = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._gssTsigDnsPrincipal = value.gssTsigDnsPrincipal;
      this._gssTsigDomain = value.gssTsigDomain;
      this._keyType = value.keyType;
      this._serverAddress = value.serverAddress;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
    }
  }

  // fqdn - computed: true, optional: false, required: true
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

  // gss_tsig_dns_principal - computed: true, optional: true, required: false
  private _gssTsigDnsPrincipal?: string; 
  public get gssTsigDnsPrincipal() {
    return this.getStringAttribute('gss_tsig_dns_principal');
  }
  public set gssTsigDnsPrincipal(value: string) {
    this._gssTsigDnsPrincipal = value;
  }
  public resetGssTsigDnsPrincipal() {
    this._gssTsigDnsPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigDnsPrincipalInput() {
    return this._gssTsigDnsPrincipal;
  }

  // gss_tsig_domain - computed: true, optional: true, required: false
  private _gssTsigDomain?: string; 
  public get gssTsigDomain() {
    return this.getStringAttribute('gss_tsig_domain');
  }
  public set gssTsigDomain(value: string) {
    this._gssTsigDomain = value;
  }
  public resetGssTsigDomain() {
    this._gssTsigDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigDomainInput() {
    return this._gssTsigDomain;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // server_address - computed: true, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey?: string; 
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }
  public set tsigKey(value: string) {
    this._tsigKey = value;
  }
  public resetTsigKey() {
    this._tsigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey;
  }

  // tsig_key_alg - computed: true, optional: true, required: false
  private _tsigKeyAlg?: string; 
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }
  public set tsigKeyAlg(value: string) {
    this._tsigKeyAlg = value;
  }
  public resetTsigKeyAlg() {
    this._tsigKeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgInput() {
    return this._tsigKeyAlg;
  }

  // tsig_key_name - computed: true, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }
}

export class DataNiosIpamNetworkViewResultRemoteForwardZonesList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamNetworkViewResultRemoteForwardZones[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamNetworkViewResultRemoteForwardZonesOutputReference {
    return new DataNiosIpamNetworkViewResultRemoteForwardZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamNetworkViewResultRemoteReverseZones {
  /**
  * The FQDN of the remote server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#fqdn DataNiosIpamNetworkView#fqdn}
  */
  readonly fqdn: string;
  /**
  * The principal name in which GSS-TSIG for dynamic updates is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#gss_tsig_dns_principal DataNiosIpamNetworkView#gss_tsig_dns_principal}
  */
  readonly gssTsigDnsPrincipal?: string;
  /**
  * The domain in which GSS-TSIG for dynamic updates is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#gss_tsig_domain DataNiosIpamNetworkView#gss_tsig_domain}
  */
  readonly gssTsigDomain?: string;
  /**
  * The key type to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#key_type DataNiosIpamNetworkView#key_type}
  */
  readonly keyType?: string;
  /**
  * The remote server IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#server_address DataNiosIpamNetworkView#server_address}
  */
  readonly serverAddress: string;
  /**
  * The TSIG key value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#tsig_key DataNiosIpamNetworkView#tsig_key}
  */
  readonly tsigKey?: string;
  /**
  * The TSIG key alorithm name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#tsig_key_alg DataNiosIpamNetworkView#tsig_key_alg}
  */
  readonly tsigKeyAlg?: string;
  /**
  * The name of the TSIG key. The key name entered here must match the TSIG key name on the external name server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#tsig_key_name DataNiosIpamNetworkView#tsig_key_name}
  */
  readonly tsigKeyName?: string;
}

export function dataNiosIpamNetworkViewResultRemoteReverseZonesToTerraform(struct?: DataNiosIpamNetworkViewResultRemoteReverseZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    gss_tsig_dns_principal: cdktf.stringToTerraform(struct!.gssTsigDnsPrincipal),
    gss_tsig_domain: cdktf.stringToTerraform(struct!.gssTsigDomain),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    tsig_key: cdktf.stringToTerraform(struct!.tsigKey),
    tsig_key_alg: cdktf.stringToTerraform(struct!.tsigKeyAlg),
    tsig_key_name: cdktf.stringToTerraform(struct!.tsigKeyName),
  }
}


export function dataNiosIpamNetworkViewResultRemoteReverseZonesToHclTerraform(struct?: DataNiosIpamNetworkViewResultRemoteReverseZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_dns_principal: {
      value: cdktf.stringToHclTerraform(struct!.gssTsigDnsPrincipal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gss_tsig_domain: {
      value: cdktf.stringToHclTerraform(struct!.gssTsigDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key: {
      value: cdktf.stringToHclTerraform(struct!.tsigKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_alg: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_key_name: {
      value: cdktf.stringToHclTerraform(struct!.tsigKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamNetworkViewResultRemoteReverseZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamNetworkViewResultRemoteReverseZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._gssTsigDnsPrincipal !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigDnsPrincipal = this._gssTsigDnsPrincipal;
    }
    if (this._gssTsigDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.gssTsigDomain = this._gssTsigDomain;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._tsigKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKey = this._tsigKey;
    }
    if (this._tsigKeyAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyAlg = this._tsigKeyAlg;
    }
    if (this._tsigKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigKeyName = this._tsigKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResultRemoteReverseZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._gssTsigDnsPrincipal = undefined;
      this._gssTsigDomain = undefined;
      this._keyType = undefined;
      this._serverAddress = undefined;
      this._tsigKey = undefined;
      this._tsigKeyAlg = undefined;
      this._tsigKeyName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._gssTsigDnsPrincipal = value.gssTsigDnsPrincipal;
      this._gssTsigDomain = value.gssTsigDomain;
      this._keyType = value.keyType;
      this._serverAddress = value.serverAddress;
      this._tsigKey = value.tsigKey;
      this._tsigKeyAlg = value.tsigKeyAlg;
      this._tsigKeyName = value.tsigKeyName;
    }
  }

  // fqdn - computed: true, optional: false, required: true
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

  // gss_tsig_dns_principal - computed: true, optional: true, required: false
  private _gssTsigDnsPrincipal?: string; 
  public get gssTsigDnsPrincipal() {
    return this.getStringAttribute('gss_tsig_dns_principal');
  }
  public set gssTsigDnsPrincipal(value: string) {
    this._gssTsigDnsPrincipal = value;
  }
  public resetGssTsigDnsPrincipal() {
    this._gssTsigDnsPrincipal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigDnsPrincipalInput() {
    return this._gssTsigDnsPrincipal;
  }

  // gss_tsig_domain - computed: true, optional: true, required: false
  private _gssTsigDomain?: string; 
  public get gssTsigDomain() {
    return this.getStringAttribute('gss_tsig_domain');
  }
  public set gssTsigDomain(value: string) {
    this._gssTsigDomain = value;
  }
  public resetGssTsigDomain() {
    this._gssTsigDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gssTsigDomainInput() {
    return this._gssTsigDomain;
  }

  // key_type - computed: true, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
  }

  // server_address - computed: true, optional: false, required: true
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // tsig_key - computed: true, optional: true, required: false
  private _tsigKey?: string; 
  public get tsigKey() {
    return this.getStringAttribute('tsig_key');
  }
  public set tsigKey(value: string) {
    this._tsigKey = value;
  }
  public resetTsigKey() {
    this._tsigKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyInput() {
    return this._tsigKey;
  }

  // tsig_key_alg - computed: true, optional: true, required: false
  private _tsigKeyAlg?: string; 
  public get tsigKeyAlg() {
    return this.getStringAttribute('tsig_key_alg');
  }
  public set tsigKeyAlg(value: string) {
    this._tsigKeyAlg = value;
  }
  public resetTsigKeyAlg() {
    this._tsigKeyAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyAlgInput() {
    return this._tsigKeyAlg;
  }

  // tsig_key_name - computed: true, optional: true, required: false
  private _tsigKeyName?: string; 
  public get tsigKeyName() {
    return this.getStringAttribute('tsig_key_name');
  }
  public set tsigKeyName(value: string) {
    this._tsigKeyName = value;
  }
  public resetTsigKeyName() {
    this._tsigKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyNameInput() {
    return this._tsigKeyName;
  }
}

export class DataNiosIpamNetworkViewResultRemoteReverseZonesList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamNetworkViewResultRemoteReverseZones[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamNetworkViewResultRemoteReverseZonesOutputReference {
    return new DataNiosIpamNetworkViewResultRemoteReverseZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamNetworkViewResult {
  /**
  * The cloud information associated with the view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#cloud_info DataNiosIpamNetworkView#cloud_info}
  */
  readonly cloudInfo?: DataNiosIpamNetworkViewResultCloudInfo;
  /**
  * Comment for the network view; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#comment DataNiosIpamNetworkView#comment}
  */
  readonly comment?: string;
  /**
  * DNS views that will receive the updates if you enable the appliance to send updates to Grid members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#ddns_dns_view DataNiosIpamNetworkView#ddns_dns_view}
  */
  readonly ddnsDnsView?: string;
  /**
  * An array of Ddns Zone Primary dhcpddns structs that lists the information of primary zone to wich DDNS updates should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#ddns_zone_primaries DataNiosIpamNetworkView#ddns_zone_primaries}
  */
  readonly ddnsZonePrimaries?: DataNiosIpamNetworkViewResultDdnsZonePrimaries[] | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#extattrs DataNiosIpamNetworkView#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This field contains the federated realms associated to this network view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#federated_realms DataNiosIpamNetworkView#federated_realms}
  */
  readonly federatedRealms?: DataNiosIpamNetworkViewResultFederatedRealms[] | cdktf.IResolvable;
  /**
  * The list of linked authoritative DNS zones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#internal_forward_zones DataNiosIpamNetworkView#internal_forward_zones}
  */
  readonly internalForwardZones?: string[];
  /**
  * This field controls whether this object is synchronized with the Multi-Grid Master. If this field is set to True, objects are not synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#mgm_private DataNiosIpamNetworkView#mgm_private}
  */
  readonly mgmPrivate?: boolean | cdktf.IResolvable;
  /**
  * Name of the network view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#name DataNiosIpamNetworkView#name}
  */
  readonly name: string;
  /**
  * The list of forward-mapping zones to which the DHCP server sends the updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#remote_forward_zones DataNiosIpamNetworkView#remote_forward_zones}
  */
  readonly remoteForwardZones?: DataNiosIpamNetworkViewResultRemoteForwardZones[] | cdktf.IResolvable;
  /**
  * The list of reverse-mapping zones to which the DHCP server sends the updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#remote_reverse_zones DataNiosIpamNetworkView#remote_reverse_zones}
  */
  readonly remoteReverseZones?: DataNiosIpamNetworkViewResultRemoteReverseZones[] | cdktf.IResolvable;
}

export function dataNiosIpamNetworkViewResultToTerraform(struct?: DataNiosIpamNetworkViewResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_info: dataNiosIpamNetworkViewResultCloudInfoToTerraform(struct!.cloudInfo),
    comment: cdktf.stringToTerraform(struct!.comment),
    ddns_dns_view: cdktf.stringToTerraform(struct!.ddnsDnsView),
    ddns_zone_primaries: cdktf.listMapper(dataNiosIpamNetworkViewResultDdnsZonePrimariesToTerraform, false)(struct!.ddnsZonePrimaries),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    federated_realms: cdktf.listMapper(dataNiosIpamNetworkViewResultFederatedRealmsToTerraform, false)(struct!.federatedRealms),
    internal_forward_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.internalForwardZones),
    mgm_private: cdktf.booleanToTerraform(struct!.mgmPrivate),
    name: cdktf.stringToTerraform(struct!.name),
    remote_forward_zones: cdktf.listMapper(dataNiosIpamNetworkViewResultRemoteForwardZonesToTerraform, false)(struct!.remoteForwardZones),
    remote_reverse_zones: cdktf.listMapper(dataNiosIpamNetworkViewResultRemoteReverseZonesToTerraform, false)(struct!.remoteReverseZones),
  }
}


export function dataNiosIpamNetworkViewResultToHclTerraform(struct?: DataNiosIpamNetworkViewResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_info: {
      value: dataNiosIpamNetworkViewResultCloudInfoToHclTerraform(struct!.cloudInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamNetworkViewResultCloudInfo",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_dns_view: {
      value: cdktf.stringToHclTerraform(struct!.ddnsDnsView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_zone_primaries: {
      value: cdktf.listMapperHcl(dataNiosIpamNetworkViewResultDdnsZonePrimariesToHclTerraform, false)(struct!.ddnsZonePrimaries),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamNetworkViewResultDdnsZonePrimariesList",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    federated_realms: {
      value: cdktf.listMapperHcl(dataNiosIpamNetworkViewResultFederatedRealmsToHclTerraform, false)(struct!.federatedRealms),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamNetworkViewResultFederatedRealmsList",
    },
    internal_forward_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.internalForwardZones),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mgm_private: {
      value: cdktf.booleanToHclTerraform(struct!.mgmPrivate),
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
    remote_forward_zones: {
      value: cdktf.listMapperHcl(dataNiosIpamNetworkViewResultRemoteForwardZonesToHclTerraform, false)(struct!.remoteForwardZones),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamNetworkViewResultRemoteForwardZonesList",
    },
    remote_reverse_zones: {
      value: cdktf.listMapperHcl(dataNiosIpamNetworkViewResultRemoteReverseZonesToHclTerraform, false)(struct!.remoteReverseZones),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamNetworkViewResultRemoteReverseZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamNetworkViewResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamNetworkViewResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInfo = this._cloudInfo?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._ddnsDnsView !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDnsView = this._ddnsDnsView;
    }
    if (this._ddnsZonePrimaries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsZonePrimaries = this._ddnsZonePrimaries?.internalValue;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._federatedRealms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedRealms = this._federatedRealms?.internalValue;
    }
    if (this._internalForwardZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalForwardZones = this._internalForwardZones;
    }
    if (this._mgmPrivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmPrivate = this._mgmPrivate;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remoteForwardZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteForwardZones = this._remoteForwardZones?.internalValue;
    }
    if (this._remoteReverseZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteReverseZones = this._remoteReverseZones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamNetworkViewResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudInfo.internalValue = undefined;
      this._comment = undefined;
      this._ddnsDnsView = undefined;
      this._ddnsZonePrimaries.internalValue = undefined;
      this._extattrs = undefined;
      this._federatedRealms.internalValue = undefined;
      this._internalForwardZones = undefined;
      this._mgmPrivate = undefined;
      this._name = undefined;
      this._remoteForwardZones.internalValue = undefined;
      this._remoteReverseZones.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudInfo.internalValue = value.cloudInfo;
      this._comment = value.comment;
      this._ddnsDnsView = value.ddnsDnsView;
      this._ddnsZonePrimaries.internalValue = value.ddnsZonePrimaries;
      this._extattrs = value.extattrs;
      this._federatedRealms.internalValue = value.federatedRealms;
      this._internalForwardZones = value.internalForwardZones;
      this._mgmPrivate = value.mgmPrivate;
      this._name = value.name;
      this._remoteForwardZones.internalValue = value.remoteForwardZones;
      this._remoteReverseZones.internalValue = value.remoteReverseZones;
    }
  }

  // associated_dns_views - computed: true, optional: false, required: false
  public get associatedDnsViews() {
    return this.getListAttribute('associated_dns_views');
  }

  // associated_members - computed: true, optional: false, required: false
  private _associatedMembers = new DataNiosIpamNetworkViewResultAssociatedMembersList(this, "associated_members", false);
  public get associatedMembers() {
    return this._associatedMembers;
  }

  // cloud_info - computed: true, optional: true, required: false
  private _cloudInfo = new DataNiosIpamNetworkViewResultCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }
  public putCloudInfo(value: DataNiosIpamNetworkViewResultCloudInfo) {
    this._cloudInfo.internalValue = value;
  }
  public resetCloudInfo() {
    this._cloudInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInfoInput() {
    return this._cloudInfo.internalValue;
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

  // ddns_dns_view - computed: true, optional: true, required: false
  private _ddnsDnsView?: string; 
  public get ddnsDnsView() {
    return this.getStringAttribute('ddns_dns_view');
  }
  public set ddnsDnsView(value: string) {
    this._ddnsDnsView = value;
  }
  public resetDdnsDnsView() {
    this._ddnsDnsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDnsViewInput() {
    return this._ddnsDnsView;
  }

  // ddns_zone_primaries - computed: true, optional: true, required: false
  private _ddnsZonePrimaries = new DataNiosIpamNetworkViewResultDdnsZonePrimariesList(this, "ddns_zone_primaries", false);
  public get ddnsZonePrimaries() {
    return this._ddnsZonePrimaries;
  }
  public putDdnsZonePrimaries(value: DataNiosIpamNetworkViewResultDdnsZonePrimaries[] | cdktf.IResolvable) {
    this._ddnsZonePrimaries.internalValue = value;
  }
  public resetDdnsZonePrimaries() {
    this._ddnsZonePrimaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsZonePrimariesInput() {
    return this._ddnsZonePrimaries.internalValue;
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

  // federated_realms - computed: true, optional: true, required: false
  private _federatedRealms = new DataNiosIpamNetworkViewResultFederatedRealmsList(this, "federated_realms", false);
  public get federatedRealms() {
    return this._federatedRealms;
  }
  public putFederatedRealms(value: DataNiosIpamNetworkViewResultFederatedRealms[] | cdktf.IResolvable) {
    this._federatedRealms.internalValue = value;
  }
  public resetFederatedRealms() {
    this._federatedRealms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedRealmsInput() {
    return this._federatedRealms.internalValue;
  }

  // internal_forward_zones - computed: true, optional: true, required: false
  private _internalForwardZones?: string[]; 
  public get internalForwardZones() {
    return this.getListAttribute('internal_forward_zones');
  }
  public set internalForwardZones(value: string[]) {
    this._internalForwardZones = value;
  }
  public resetInternalForwardZones() {
    this._internalForwardZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalForwardZonesInput() {
    return this._internalForwardZones;
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // mgm_private - computed: true, optional: true, required: false
  private _mgmPrivate?: boolean | cdktf.IResolvable; 
  public get mgmPrivate() {
    return this.getBooleanAttribute('mgm_private');
  }
  public set mgmPrivate(value: boolean | cdktf.IResolvable) {
    this._mgmPrivate = value;
  }
  public resetMgmPrivate() {
    this._mgmPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmPrivateInput() {
    return this._mgmPrivate;
  }

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new DataNiosIpamNetworkViewResultMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // remote_forward_zones - computed: true, optional: true, required: false
  private _remoteForwardZones = new DataNiosIpamNetworkViewResultRemoteForwardZonesList(this, "remote_forward_zones", false);
  public get remoteForwardZones() {
    return this._remoteForwardZones;
  }
  public putRemoteForwardZones(value: DataNiosIpamNetworkViewResultRemoteForwardZones[] | cdktf.IResolvable) {
    this._remoteForwardZones.internalValue = value;
  }
  public resetRemoteForwardZones() {
    this._remoteForwardZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteForwardZonesInput() {
    return this._remoteForwardZones.internalValue;
  }

  // remote_reverse_zones - computed: true, optional: true, required: false
  private _remoteReverseZones = new DataNiosIpamNetworkViewResultRemoteReverseZonesList(this, "remote_reverse_zones", false);
  public get remoteReverseZones() {
    return this._remoteReverseZones;
  }
  public putRemoteReverseZones(value: DataNiosIpamNetworkViewResultRemoteReverseZones[] | cdktf.IResolvable) {
    this._remoteReverseZones.internalValue = value;
  }
  public resetRemoteReverseZones() {
    this._remoteReverseZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteReverseZonesInput() {
    return this._remoteReverseZones.internalValue;
  }
}

export class DataNiosIpamNetworkViewResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamNetworkViewResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamNetworkViewResultOutputReference {
    return new DataNiosIpamNetworkViewResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view nios_ipam_network_view}
*/
export class DataNiosIpamNetworkView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_ipam_network_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosIpamNetworkView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosIpamNetworkView to import
  * @param importFromId The id of the existing DataNiosIpamNetworkView that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosIpamNetworkView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_ipam_network_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_network_view nios_ipam_network_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosIpamNetworkViewConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosIpamNetworkViewConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_ipam_network_view',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosIpamNetworkViewResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
