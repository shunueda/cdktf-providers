// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HubAndSpokeTopologyPolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#description HubAndSpokeTopologyPolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#name HubAndSpokeTopologyPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of topologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#topologies HubAndSpokeTopologyPolicyDefinition#topologies}
  */
  readonly topologies: HubAndSpokeTopologyPolicyDefinitionTopologies[] | cdktf.IResolvable;
  /**
  * VPN list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#vpn_list_id HubAndSpokeTopologyPolicyDefinition#vpn_list_id}
  */
  readonly vpnListId?: string;
  /**
  * VPN list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#vpn_list_version HubAndSpokeTopologyPolicyDefinition#vpn_list_version}
  */
  readonly vpnListVersion?: number;
}
export interface HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs {
  /**
  * List of IPv4 prefix list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#ipv4_prefix_list_ids HubAndSpokeTopologyPolicyDefinition#ipv4_prefix_list_ids}
  */
  readonly ipv4PrefixListIds?: string[];
  /**
  * List of IPv6 prefix list IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#ipv6_prefix_list_ids HubAndSpokeTopologyPolicyDefinition#ipv6_prefix_list_ids}
  */
  readonly ipv6PrefixListIds?: string[];
  /**
  * Preference, multiple of 10 (for example 70, 80, 90, 100). The higher the value the higher the priority of the associated hub (required when `all_hubs_are_equal` is 'false')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#preference HubAndSpokeTopologyPolicyDefinition#preference}
  */
  readonly preference?: string;
  /**
  * Site list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#site_list_id HubAndSpokeTopologyPolicyDefinition#site_list_id}
  */
  readonly siteListId?: string;
  /**
  * Site list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#site_list_version HubAndSpokeTopologyPolicyDefinition#site_list_version}
  */
  readonly siteListVersion?: number;
}

export function hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsToTerraform(struct?: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4PrefixListIds),
    ipv6_prefix_list_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6PrefixListIds),
    preference: cdktf.stringToTerraform(struct!.preference),
    site_list_id: cdktf.stringToTerraform(struct!.siteListId),
    site_list_version: cdktf.numberToTerraform(struct!.siteListVersion),
  }
}


export function hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsToHclTerraform(struct?: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4PrefixListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ipv6_prefix_list_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6PrefixListIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preference: {
      value: cdktf.stringToHclTerraform(struct!.preference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_list_id: {
      value: cdktf.stringToHclTerraform(struct!.siteListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_list_version: {
      value: cdktf.numberToHclTerraform(struct!.siteListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4PrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixListIds = this._ipv4PrefixListIds;
    }
    if (this._ipv6PrefixListIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixListIds = this._ipv6PrefixListIds;
    }
    if (this._preference !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference;
    }
    if (this._siteListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListId = this._siteListId;
    }
    if (this._siteListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListVersion = this._siteListVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4PrefixListIds = undefined;
      this._ipv6PrefixListIds = undefined;
      this._preference = undefined;
      this._siteListId = undefined;
      this._siteListVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4PrefixListIds = value.ipv4PrefixListIds;
      this._ipv6PrefixListIds = value.ipv6PrefixListIds;
      this._preference = value.preference;
      this._siteListId = value.siteListId;
      this._siteListVersion = value.siteListVersion;
    }
  }

  // ipv4_prefix_list_ids - computed: false, optional: true, required: false
  private _ipv4PrefixListIds?: string[]; 
  public get ipv4PrefixListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv4_prefix_list_ids'));
  }
  public set ipv4PrefixListIds(value: string[]) {
    this._ipv4PrefixListIds = value;
  }
  public resetIpv4PrefixListIds() {
    this._ipv4PrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixListIdsInput() {
    return this._ipv4PrefixListIds;
  }

  // ipv6_prefix_list_ids - computed: false, optional: true, required: false
  private _ipv6PrefixListIds?: string[]; 
  public get ipv6PrefixListIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ipv6_prefix_list_ids'));
  }
  public set ipv6PrefixListIds(value: string[]) {
    this._ipv6PrefixListIds = value;
  }
  public resetIpv6PrefixListIds() {
    this._ipv6PrefixListIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixListIdsInput() {
    return this._ipv6PrefixListIds;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: string; 
  public get preference() {
    return this.getStringAttribute('preference');
  }
  public set preference(value: string) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // site_list_id - computed: false, optional: true, required: false
  private _siteListId?: string; 
  public get siteListId() {
    return this.getStringAttribute('site_list_id');
  }
  public set siteListId(value: string) {
    this._siteListId = value;
  }
  public resetSiteListId() {
    this._siteListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListIdInput() {
    return this._siteListId;
  }

  // site_list_version - computed: false, optional: true, required: false
  private _siteListVersion?: number; 
  public get siteListVersion() {
    return this.getNumberAttribute('site_list_version');
  }
  public set siteListVersion(value: number) {
    this._siteListVersion = value;
  }
  public resetSiteListVersion() {
    this._siteListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListVersionInput() {
    return this._siteListVersion;
  }
}

export class HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsList extends cdktf.ComplexList {
  public internalValue? : HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs[] | cdktf.IResolvable

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
  public get(index: number): HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsOutputReference {
    return new HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes {
  /**
  * List of hubs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#hubs HubAndSpokeTopologyPolicyDefinition#hubs}
  */
  readonly hubs?: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs[] | cdktf.IResolvable;
  /**
  * Site list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#site_list_id HubAndSpokeTopologyPolicyDefinition#site_list_id}
  */
  readonly siteListId?: string;
  /**
  * Site list version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#site_list_version HubAndSpokeTopologyPolicyDefinition#site_list_version}
  */
  readonly siteListVersion?: number;
}

export function hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesToTerraform(struct?: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hubs: cdktf.listMapper(hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsToTerraform, false)(struct!.hubs),
    site_list_id: cdktf.stringToTerraform(struct!.siteListId),
    site_list_version: cdktf.numberToTerraform(struct!.siteListVersion),
  }
}


export function hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesToHclTerraform(struct?: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hubs: {
      value: cdktf.listMapperHcl(hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsToHclTerraform, false)(struct!.hubs),
      isBlock: true,
      type: "list",
      storageClassType: "HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsList",
    },
    site_list_id: {
      value: cdktf.stringToHclTerraform(struct!.siteListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_list_version: {
      value: cdktf.numberToHclTerraform(struct!.siteListVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hubs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hubs = this._hubs?.internalValue;
    }
    if (this._siteListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListId = this._siteListId;
    }
    if (this._siteListVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteListVersion = this._siteListVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hubs.internalValue = undefined;
      this._siteListId = undefined;
      this._siteListVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hubs.internalValue = value.hubs;
      this._siteListId = value.siteListId;
      this._siteListVersion = value.siteListVersion;
    }
  }

  // hubs - computed: false, optional: true, required: false
  private _hubs = new HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubsList(this, "hubs", false);
  public get hubs() {
    return this._hubs;
  }
  public putHubs(value: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesHubs[] | cdktf.IResolvable) {
    this._hubs.internalValue = value;
  }
  public resetHubs() {
    this._hubs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubsInput() {
    return this._hubs.internalValue;
  }

  // site_list_id - computed: false, optional: true, required: false
  private _siteListId?: string; 
  public get siteListId() {
    return this.getStringAttribute('site_list_id');
  }
  public set siteListId(value: string) {
    this._siteListId = value;
  }
  public resetSiteListId() {
    this._siteListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListIdInput() {
    return this._siteListId;
  }

  // site_list_version - computed: false, optional: true, required: false
  private _siteListVersion?: number; 
  public get siteListVersion() {
    return this.getNumberAttribute('site_list_version');
  }
  public set siteListVersion(value: number) {
    this._siteListVersion = value;
  }
  public resetSiteListVersion() {
    this._siteListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteListVersionInput() {
    return this._siteListVersion;
  }
}

export class HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesList extends cdktf.ComplexList {
  public internalValue? : HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes[] | cdktf.IResolvable

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
  public get(index: number): HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesOutputReference {
    return new HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HubAndSpokeTopologyPolicyDefinitionTopologies {
  /**
  * Advertise Hub TLOCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#advertise_hub_tlocs HubAndSpokeTopologyPolicyDefinition#advertise_hub_tlocs}
  */
  readonly advertiseHubTlocs?: boolean | cdktf.IResolvable;
  /**
  * All hubs are equal (All Spokes Sites connect to all Hubs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#all_hubs_are_equal HubAndSpokeTopologyPolicyDefinition#all_hubs_are_equal}
  */
  readonly allHubsAreEqual?: boolean | cdktf.IResolvable;
  /**
  * Topology name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#name HubAndSpokeTopologyPolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of spokes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#spokes HubAndSpokeTopologyPolicyDefinition#spokes}
  */
  readonly spokes?: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes[] | cdktf.IResolvable;
  /**
  * TLOC list ID (required when `advertise_hub_tlocs` is 'true')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#tloc_list_id HubAndSpokeTopologyPolicyDefinition#tloc_list_id}
  */
  readonly tlocListId?: string;
}

export function hubAndSpokeTopologyPolicyDefinitionTopologiesToTerraform(struct?: HubAndSpokeTopologyPolicyDefinitionTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_hub_tlocs: cdktf.booleanToTerraform(struct!.advertiseHubTlocs),
    all_hubs_are_equal: cdktf.booleanToTerraform(struct!.allHubsAreEqual),
    name: cdktf.stringToTerraform(struct!.name),
    spokes: cdktf.listMapper(hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesToTerraform, false)(struct!.spokes),
    tloc_list_id: cdktf.stringToTerraform(struct!.tlocListId),
  }
}


export function hubAndSpokeTopologyPolicyDefinitionTopologiesToHclTerraform(struct?: HubAndSpokeTopologyPolicyDefinitionTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_hub_tlocs: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseHubTlocs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_hubs_are_equal: {
      value: cdktf.booleanToHclTerraform(struct!.allHubsAreEqual),
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
    spokes: {
      value: cdktf.listMapperHcl(hubAndSpokeTopologyPolicyDefinitionTopologiesSpokesToHclTerraform, false)(struct!.spokes),
      isBlock: true,
      type: "list",
      storageClassType: "HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesList",
    },
    tloc_list_id: {
      value: cdktf.stringToHclTerraform(struct!.tlocListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HubAndSpokeTopologyPolicyDefinitionTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HubAndSpokeTopologyPolicyDefinitionTopologies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseHubTlocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseHubTlocs = this._advertiseHubTlocs;
    }
    if (this._allHubsAreEqual !== undefined) {
      hasAnyValues = true;
      internalValueResult.allHubsAreEqual = this._allHubsAreEqual;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spokes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spokes = this._spokes?.internalValue;
    }
    if (this._tlocListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlocListId = this._tlocListId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HubAndSpokeTopologyPolicyDefinitionTopologies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseHubTlocs = undefined;
      this._allHubsAreEqual = undefined;
      this._name = undefined;
      this._spokes.internalValue = undefined;
      this._tlocListId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseHubTlocs = value.advertiseHubTlocs;
      this._allHubsAreEqual = value.allHubsAreEqual;
      this._name = value.name;
      this._spokes.internalValue = value.spokes;
      this._tlocListId = value.tlocListId;
    }
  }

  // advertise_hub_tlocs - computed: false, optional: true, required: false
  private _advertiseHubTlocs?: boolean | cdktf.IResolvable; 
  public get advertiseHubTlocs() {
    return this.getBooleanAttribute('advertise_hub_tlocs');
  }
  public set advertiseHubTlocs(value: boolean | cdktf.IResolvable) {
    this._advertiseHubTlocs = value;
  }
  public resetAdvertiseHubTlocs() {
    this._advertiseHubTlocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseHubTlocsInput() {
    return this._advertiseHubTlocs;
  }

  // all_hubs_are_equal - computed: false, optional: true, required: false
  private _allHubsAreEqual?: boolean | cdktf.IResolvable; 
  public get allHubsAreEqual() {
    return this.getBooleanAttribute('all_hubs_are_equal');
  }
  public set allHubsAreEqual(value: boolean | cdktf.IResolvable) {
    this._allHubsAreEqual = value;
  }
  public resetAllHubsAreEqual() {
    this._allHubsAreEqual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allHubsAreEqualInput() {
    return this._allHubsAreEqual;
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

  // spokes - computed: false, optional: true, required: false
  private _spokes = new HubAndSpokeTopologyPolicyDefinitionTopologiesSpokesList(this, "spokes", false);
  public get spokes() {
    return this._spokes;
  }
  public putSpokes(value: HubAndSpokeTopologyPolicyDefinitionTopologiesSpokes[] | cdktf.IResolvable) {
    this._spokes.internalValue = value;
  }
  public resetSpokes() {
    this._spokes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spokesInput() {
    return this._spokes.internalValue;
  }

  // tloc_list_id - computed: false, optional: true, required: false
  private _tlocListId?: string; 
  public get tlocListId() {
    return this.getStringAttribute('tloc_list_id');
  }
  public set tlocListId(value: string) {
    this._tlocListId = value;
  }
  public resetTlocListId() {
    this._tlocListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlocListIdInput() {
    return this._tlocListId;
  }
}

export class HubAndSpokeTopologyPolicyDefinitionTopologiesList extends cdktf.ComplexList {
  public internalValue? : HubAndSpokeTopologyPolicyDefinitionTopologies[] | cdktf.IResolvable

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
  public get(index: number): HubAndSpokeTopologyPolicyDefinitionTopologiesOutputReference {
    return new HubAndSpokeTopologyPolicyDefinitionTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition sdwan_hub_and_spoke_topology_policy_definition}
*/
export class HubAndSpokeTopologyPolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_hub_and_spoke_topology_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HubAndSpokeTopologyPolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HubAndSpokeTopologyPolicyDefinition to import
  * @param importFromId The id of the existing HubAndSpokeTopologyPolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HubAndSpokeTopologyPolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_hub_and_spoke_topology_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/hub_and_spoke_topology_policy_definition sdwan_hub_and_spoke_topology_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HubAndSpokeTopologyPolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: HubAndSpokeTopologyPolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_hub_and_spoke_topology_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._topologies.internalValue = config.topologies;
    this._vpnListId = config.vpnListId;
    this._vpnListVersion = config.vpnListVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // topologies - computed: false, optional: false, required: true
  private _topologies = new HubAndSpokeTopologyPolicyDefinitionTopologiesList(this, "topologies", false);
  public get topologies() {
    return this._topologies;
  }
  public putTopologies(value: HubAndSpokeTopologyPolicyDefinitionTopologies[] | cdktf.IResolvable) {
    this._topologies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologiesInput() {
    return this._topologies.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn_list_id - computed: false, optional: true, required: false
  private _vpnListId?: string; 
  public get vpnListId() {
    return this.getStringAttribute('vpn_list_id');
  }
  public set vpnListId(value: string) {
    this._vpnListId = value;
  }
  public resetVpnListId() {
    this._vpnListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListIdInput() {
    return this._vpnListId;
  }

  // vpn_list_version - computed: false, optional: true, required: false
  private _vpnListVersion?: number; 
  public get vpnListVersion() {
    return this.getNumberAttribute('vpn_list_version');
  }
  public set vpnListVersion(value: number) {
    this._vpnListVersion = value;
  }
  public resetVpnListVersion() {
    this._vpnListVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnListVersionInput() {
    return this._vpnListVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      topologies: cdktf.listMapper(hubAndSpokeTopologyPolicyDefinitionTopologiesToTerraform, false)(this._topologies.internalValue),
      vpn_list_id: cdktf.stringToTerraform(this._vpnListId),
      vpn_list_version: cdktf.numberToTerraform(this._vpnListVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      topologies: {
        value: cdktf.listMapperHcl(hubAndSpokeTopologyPolicyDefinitionTopologiesToHclTerraform, false)(this._topologies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HubAndSpokeTopologyPolicyDefinitionTopologiesList",
      },
      vpn_list_id: {
        value: cdktf.stringToHclTerraform(this._vpnListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_list_version: {
        value: cdktf.numberToHclTerraform(this._vpnListVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
