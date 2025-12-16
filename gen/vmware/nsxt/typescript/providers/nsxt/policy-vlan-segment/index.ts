// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyVlanSegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#description PolicyVlanSegment#description}
  */
  readonly description?: string;
  /**
  * Policy path to DHCP server or relay configuration to use for subnets configured on this segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dhcp_config_path PolicyVlanSegment#dhcp_config_path}
  */
  readonly dhcpConfigPath?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#display_name PolicyVlanSegment#display_name}
  */
  readonly displayName: string;
  /**
  * DNS domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#domain_name PolicyVlanSegment#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#id PolicyVlanSegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata Proxy Configuration Paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#metadata_proxy_paths PolicyVlanSegment#metadata_proxy_paths}
  */
  readonly metadataProxyPaths?: string[];
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#nsx_id PolicyVlanSegment#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Replication mode - MTEP or SOURCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#replication_mode PolicyVlanSegment#replication_mode}
  */
  readonly replicationMode?: string;
  /**
  * Policy path to the transport zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#transport_zone_path PolicyVlanSegment#transport_zone_path}
  */
  readonly transportZonePath?: string;
  /**
  * VLAN IDs for VLAN backed Segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#vlan_ids PolicyVlanSegment#vlan_ids}
  */
  readonly vlanIds: string[];
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#advanced_config PolicyVlanSegment#advanced_config}
  */
  readonly advancedConfig?: PolicyVlanSegmentAdvancedConfig;
  /**
  * bridge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#bridge_config PolicyVlanSegment#bridge_config}
  */
  readonly bridgeConfig?: PolicyVlanSegmentBridgeConfig[] | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#context PolicyVlanSegment#context}
  */
  readonly context?: PolicyVlanSegmentContext;
  /**
  * discovery_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#discovery_profile PolicyVlanSegment#discovery_profile}
  */
  readonly discoveryProfile?: PolicyVlanSegmentDiscoveryProfile;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#ignore_tags PolicyVlanSegment#ignore_tags}
  */
  readonly ignoreTags?: PolicyVlanSegmentIgnoreTags;
  /**
  * l2_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#l2_extension PolicyVlanSegment#l2_extension}
  */
  readonly l2Extension?: PolicyVlanSegmentL2Extension;
  /**
  * qos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#qos_profile PolicyVlanSegment#qos_profile}
  */
  readonly qosProfile?: PolicyVlanSegmentQosProfile;
  /**
  * security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#security_profile PolicyVlanSegment#security_profile}
  */
  readonly securityProfile?: PolicyVlanSegmentSecurityProfile;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#subnet PolicyVlanSegment#subnet}
  */
  readonly subnet?: PolicyVlanSegmentSubnet[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#tag PolicyVlanSegment#tag}
  */
  readonly tag?: PolicyVlanSegmentTag[] | cdktf.IResolvable;
}
export interface PolicyVlanSegmentAdvancedConfig {
  /**
  * Policy path to IP address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#address_pool_path PolicyVlanSegment#address_pool_path}
  */
  readonly addressPoolPath?: string;
  /**
  * Connectivity configuration to manually connect (ON) or disconnect (OFF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#connectivity PolicyVlanSegment#connectivity}
  */
  readonly connectivity?: string;
  /**
  * Flag to identify a hybrid logical switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#hybrid PolicyVlanSegment#hybrid}
  */
  readonly hybrid?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable local egress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#local_egress PolicyVlanSegment#local_egress}
  */
  readonly localEgress?: boolean | cdktf.IResolvable;
  /**
  * Enable multicast on the downlink LRP created to connect the segment to Tier0/Tier1 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#multicast PolicyVlanSegment#multicast}
  */
  readonly multicast?: boolean | cdktf.IResolvable;
  /**
  * The name of the switching uplink teaming policy for the bridge endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#uplink_teaming_policy PolicyVlanSegment#uplink_teaming_policy}
  */
  readonly uplinkTeamingPolicy?: string;
  /**
  * This URPF mode is applied to the downlink logical router port created while attaching this segment to gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#urpf_mode PolicyVlanSegment#urpf_mode}
  */
  readonly urpfMode?: string;
}

export function policyVlanSegmentAdvancedConfigToTerraform(struct?: PolicyVlanSegmentAdvancedConfigOutputReference | PolicyVlanSegmentAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_pool_path: cdktf.stringToTerraform(struct!.addressPoolPath),
    connectivity: cdktf.stringToTerraform(struct!.connectivity),
    hybrid: cdktf.booleanToTerraform(struct!.hybrid),
    local_egress: cdktf.booleanToTerraform(struct!.localEgress),
    multicast: cdktf.booleanToTerraform(struct!.multicast),
    uplink_teaming_policy: cdktf.stringToTerraform(struct!.uplinkTeamingPolicy),
    urpf_mode: cdktf.stringToTerraform(struct!.urpfMode),
  }
}


export function policyVlanSegmentAdvancedConfigToHclTerraform(struct?: PolicyVlanSegmentAdvancedConfigOutputReference | PolicyVlanSegmentAdvancedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_pool_path: {
      value: cdktf.stringToHclTerraform(struct!.addressPoolPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connectivity: {
      value: cdktf.stringToHclTerraform(struct!.connectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hybrid: {
      value: cdktf.booleanToHclTerraform(struct!.hybrid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_egress: {
      value: cdktf.booleanToHclTerraform(struct!.localEgress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multicast: {
      value: cdktf.booleanToHclTerraform(struct!.multicast),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    uplink_teaming_policy: {
      value: cdktf.stringToHclTerraform(struct!.uplinkTeamingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urpf_mode: {
      value: cdktf.stringToHclTerraform(struct!.urpfMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentAdvancedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPoolPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPoolPath = this._addressPoolPath;
    }
    if (this._connectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivity = this._connectivity;
    }
    if (this._hybrid !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybrid = this._hybrid;
    }
    if (this._localEgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.localEgress = this._localEgress;
    }
    if (this._multicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicast = this._multicast;
    }
    if (this._uplinkTeamingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkTeamingPolicy = this._uplinkTeamingPolicy;
    }
    if (this._urpfMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.urpfMode = this._urpfMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentAdvancedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressPoolPath = undefined;
      this._connectivity = undefined;
      this._hybrid = undefined;
      this._localEgress = undefined;
      this._multicast = undefined;
      this._uplinkTeamingPolicy = undefined;
      this._urpfMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressPoolPath = value.addressPoolPath;
      this._connectivity = value.connectivity;
      this._hybrid = value.hybrid;
      this._localEgress = value.localEgress;
      this._multicast = value.multicast;
      this._uplinkTeamingPolicy = value.uplinkTeamingPolicy;
      this._urpfMode = value.urpfMode;
    }
  }

  // address_pool_path - computed: false, optional: true, required: false
  private _addressPoolPath?: string; 
  public get addressPoolPath() {
    return this.getStringAttribute('address_pool_path');
  }
  public set addressPoolPath(value: string) {
    this._addressPoolPath = value;
  }
  public resetAddressPoolPath() {
    this._addressPoolPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolPathInput() {
    return this._addressPoolPath;
  }

  // connectivity - computed: false, optional: true, required: false
  private _connectivity?: string; 
  public get connectivity() {
    return this.getStringAttribute('connectivity');
  }
  public set connectivity(value: string) {
    this._connectivity = value;
  }
  public resetConnectivity() {
    this._connectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityInput() {
    return this._connectivity;
  }

  // hybrid - computed: false, optional: true, required: false
  private _hybrid?: boolean | cdktf.IResolvable; 
  public get hybrid() {
    return this.getBooleanAttribute('hybrid');
  }
  public set hybrid(value: boolean | cdktf.IResolvable) {
    this._hybrid = value;
  }
  public resetHybrid() {
    this._hybrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridInput() {
    return this._hybrid;
  }

  // local_egress - computed: false, optional: true, required: false
  private _localEgress?: boolean | cdktf.IResolvable; 
  public get localEgress() {
    return this.getBooleanAttribute('local_egress');
  }
  public set localEgress(value: boolean | cdktf.IResolvable) {
    this._localEgress = value;
  }
  public resetLocalEgress() {
    this._localEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localEgressInput() {
    return this._localEgress;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast?: boolean | cdktf.IResolvable; 
  public get multicast() {
    return this.getBooleanAttribute('multicast');
  }
  public set multicast(value: boolean | cdktf.IResolvable) {
    this._multicast = value;
  }
  public resetMulticast() {
    this._multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast;
  }

  // uplink_teaming_policy - computed: false, optional: true, required: false
  private _uplinkTeamingPolicy?: string; 
  public get uplinkTeamingPolicy() {
    return this.getStringAttribute('uplink_teaming_policy');
  }
  public set uplinkTeamingPolicy(value: string) {
    this._uplinkTeamingPolicy = value;
  }
  public resetUplinkTeamingPolicy() {
    this._uplinkTeamingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTeamingPolicyInput() {
    return this._uplinkTeamingPolicy;
  }

  // urpf_mode - computed: false, optional: true, required: false
  private _urpfMode?: string; 
  public get urpfMode() {
    return this.getStringAttribute('urpf_mode');
  }
  public set urpfMode(value: string) {
    this._urpfMode = value;
  }
  public resetUrpfMode() {
    this._urpfMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urpfModeInput() {
    return this._urpfMode;
  }
}
export interface PolicyVlanSegmentBridgeConfig {
  /**
  * profile path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#profile_path PolicyVlanSegment#profile_path}
  */
  readonly profilePath: string;
  /**
  * vlan transport zone path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#transport_zone_path PolicyVlanSegment#transport_zone_path}
  */
  readonly transportZonePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#uplink_teaming_policy PolicyVlanSegment#uplink_teaming_policy}
  */
  readonly uplinkTeamingPolicy?: string;
  /**
  * VLAN specification for bridge endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#vlan_ids PolicyVlanSegment#vlan_ids}
  */
  readonly vlanIds: string[];
}

export function policyVlanSegmentBridgeConfigToTerraform(struct?: PolicyVlanSegmentBridgeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_path: cdktf.stringToTerraform(struct!.profilePath),
    transport_zone_path: cdktf.stringToTerraform(struct!.transportZonePath),
    uplink_teaming_policy: cdktf.stringToTerraform(struct!.uplinkTeamingPolicy),
    vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanIds),
  }
}


export function policyVlanSegmentBridgeConfigToHclTerraform(struct?: PolicyVlanSegmentBridgeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_path: {
      value: cdktf.stringToHclTerraform(struct!.profilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_zone_path: {
      value: cdktf.stringToHclTerraform(struct!.transportZonePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_teaming_policy: {
      value: cdktf.stringToHclTerraform(struct!.uplinkTeamingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentBridgeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVlanSegmentBridgeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilePath = this._profilePath;
    }
    if (this._transportZonePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportZonePath = this._transportZonePath;
    }
    if (this._uplinkTeamingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkTeamingPolicy = this._uplinkTeamingPolicy;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentBridgeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profilePath = undefined;
      this._transportZonePath = undefined;
      this._uplinkTeamingPolicy = undefined;
      this._vlanIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profilePath = value.profilePath;
      this._transportZonePath = value.transportZonePath;
      this._uplinkTeamingPolicy = value.uplinkTeamingPolicy;
      this._vlanIds = value.vlanIds;
    }
  }

  // profile_path - computed: false, optional: false, required: true
  private _profilePath?: string; 
  public get profilePath() {
    return this.getStringAttribute('profile_path');
  }
  public set profilePath(value: string) {
    this._profilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profilePathInput() {
    return this._profilePath;
  }

  // transport_zone_path - computed: false, optional: false, required: true
  private _transportZonePath?: string; 
  public get transportZonePath() {
    return this.getStringAttribute('transport_zone_path');
  }
  public set transportZonePath(value: string) {
    this._transportZonePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZonePathInput() {
    return this._transportZonePath;
  }

  // uplink_teaming_policy - computed: false, optional: true, required: false
  private _uplinkTeamingPolicy?: string; 
  public get uplinkTeamingPolicy() {
    return this.getStringAttribute('uplink_teaming_policy');
  }
  public set uplinkTeamingPolicy(value: string) {
    this._uplinkTeamingPolicy = value;
  }
  public resetUplinkTeamingPolicy() {
    this._uplinkTeamingPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTeamingPolicyInput() {
    return this._uplinkTeamingPolicy;
  }

  // vlan_ids - computed: false, optional: false, required: true
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }
}

export class PolicyVlanSegmentBridgeConfigList extends cdktf.ComplexList {
  public internalValue? : PolicyVlanSegmentBridgeConfig[] | cdktf.IResolvable

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
  public get(index: number): PolicyVlanSegmentBridgeConfigOutputReference {
    return new PolicyVlanSegmentBridgeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVlanSegmentContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#project_id PolicyVlanSegment#project_id}
  */
  readonly projectId: string;
}

export function policyVlanSegmentContextToTerraform(struct?: PolicyVlanSegmentContextOutputReference | PolicyVlanSegmentContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyVlanSegmentContextToHclTerraform(struct?: PolicyVlanSegmentContextOutputReference | PolicyVlanSegmentContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface PolicyVlanSegmentDiscoveryProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#binding_map_path PolicyVlanSegment#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated IP Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#ip_discovery_profile_path PolicyVlanSegment#ip_discovery_profile_path}
  */
  readonly ipDiscoveryProfilePath?: string;
  /**
  * Policy path of associated Mac Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#mac_discovery_profile_path PolicyVlanSegment#mac_discovery_profile_path}
  */
  readonly macDiscoveryProfilePath?: string;
}

export function policyVlanSegmentDiscoveryProfileToTerraform(struct?: PolicyVlanSegmentDiscoveryProfileOutputReference | PolicyVlanSegmentDiscoveryProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_map_path: cdktf.stringToTerraform(struct!.bindingMapPath),
    ip_discovery_profile_path: cdktf.stringToTerraform(struct!.ipDiscoveryProfilePath),
    mac_discovery_profile_path: cdktf.stringToTerraform(struct!.macDiscoveryProfilePath),
  }
}


export function policyVlanSegmentDiscoveryProfileToHclTerraform(struct?: PolicyVlanSegmentDiscoveryProfileOutputReference | PolicyVlanSegmentDiscoveryProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_map_path: {
      value: cdktf.stringToHclTerraform(struct!.bindingMapPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_discovery_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.ipDiscoveryProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_discovery_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.macDiscoveryProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentDiscoveryProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentDiscoveryProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingMapPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingMapPath = this._bindingMapPath;
    }
    if (this._ipDiscoveryProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDiscoveryProfilePath = this._ipDiscoveryProfilePath;
    }
    if (this._macDiscoveryProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.macDiscoveryProfilePath = this._macDiscoveryProfilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentDiscoveryProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindingMapPath = undefined;
      this._ipDiscoveryProfilePath = undefined;
      this._macDiscoveryProfilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindingMapPath = value.bindingMapPath;
      this._ipDiscoveryProfilePath = value.ipDiscoveryProfilePath;
      this._macDiscoveryProfilePath = value.macDiscoveryProfilePath;
    }
  }

  // binding_map_path - computed: true, optional: true, required: false
  private _bindingMapPath?: string; 
  public get bindingMapPath() {
    return this.getStringAttribute('binding_map_path');
  }
  public set bindingMapPath(value: string) {
    this._bindingMapPath = value;
  }
  public resetBindingMapPath() {
    this._bindingMapPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingMapPathInput() {
    return this._bindingMapPath;
  }

  // ip_discovery_profile_path - computed: false, optional: true, required: false
  private _ipDiscoveryProfilePath?: string; 
  public get ipDiscoveryProfilePath() {
    return this.getStringAttribute('ip_discovery_profile_path');
  }
  public set ipDiscoveryProfilePath(value: string) {
    this._ipDiscoveryProfilePath = value;
  }
  public resetIpDiscoveryProfilePath() {
    this._ipDiscoveryProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDiscoveryProfilePathInput() {
    return this._ipDiscoveryProfilePath;
  }

  // mac_discovery_profile_path - computed: false, optional: true, required: false
  private _macDiscoveryProfilePath?: string; 
  public get macDiscoveryProfilePath() {
    return this.getStringAttribute('mac_discovery_profile_path');
  }
  public set macDiscoveryProfilePath(value: string) {
    this._macDiscoveryProfilePath = value;
  }
  public resetMacDiscoveryProfilePath() {
    this._macDiscoveryProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macDiscoveryProfilePathInput() {
    return this._macDiscoveryProfilePath;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }
}
export interface PolicyVlanSegmentIgnoreTagsDetected {
}

export function policyVlanSegmentIgnoreTagsDetectedToTerraform(struct?: PolicyVlanSegmentIgnoreTagsDetected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function policyVlanSegmentIgnoreTagsDetectedToHclTerraform(struct?: PolicyVlanSegmentIgnoreTagsDetected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PolicyVlanSegmentIgnoreTagsDetectedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVlanSegmentIgnoreTagsDetected | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentIgnoreTagsDetected | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class PolicyVlanSegmentIgnoreTagsDetectedList extends cdktf.ComplexList {

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
  public get(index: number): PolicyVlanSegmentIgnoreTagsDetectedOutputReference {
    return new PolicyVlanSegmentIgnoreTagsDetectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVlanSegmentIgnoreTags {
  /**
  * List of scopes to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#scopes PolicyVlanSegment#scopes}
  */
  readonly scopes: string[];
}

export function policyVlanSegmentIgnoreTagsToTerraform(struct?: PolicyVlanSegmentIgnoreTagsOutputReference | PolicyVlanSegmentIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function policyVlanSegmentIgnoreTagsToHclTerraform(struct?: PolicyVlanSegmentIgnoreTagsOutputReference | PolicyVlanSegmentIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentIgnoreTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentIgnoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentIgnoreTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scopes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scopes = value.scopes;
    }
  }

  // detected - computed: true, optional: false, required: false
  private _detected = new PolicyVlanSegmentIgnoreTagsDetectedList(this, "detected", true);
  public get detected() {
    return this._detected;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}
export interface PolicyVlanSegmentL2Extension {
  /**
  * Policy paths of associated L2 VPN sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#l2vpn_paths PolicyVlanSegment#l2vpn_paths}
  */
  readonly l2VpnPaths?: string[];
  /**
  * Tunnel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#tunnel_id PolicyVlanSegment#tunnel_id}
  */
  readonly tunnelId?: number;
}

export function policyVlanSegmentL2ExtensionToTerraform(struct?: PolicyVlanSegmentL2ExtensionOutputReference | PolicyVlanSegmentL2Extension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l2vpn_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.l2VpnPaths),
    tunnel_id: cdktf.numberToTerraform(struct!.tunnelId),
  }
}


export function policyVlanSegmentL2ExtensionToHclTerraform(struct?: PolicyVlanSegmentL2ExtensionOutputReference | PolicyVlanSegmentL2Extension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    l2vpn_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.l2VpnPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tunnel_id: {
      value: cdktf.numberToHclTerraform(struct!.tunnelId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentL2ExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentL2Extension | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._l2VpnPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2VpnPaths = this._l2VpnPaths;
    }
    if (this._tunnelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelId = this._tunnelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentL2Extension | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._l2VpnPaths = undefined;
      this._tunnelId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._l2VpnPaths = value.l2VpnPaths;
      this._tunnelId = value.tunnelId;
    }
  }

  // l2vpn_paths - computed: false, optional: true, required: false
  private _l2VpnPaths?: string[]; 
  public get l2VpnPaths() {
    return this.getListAttribute('l2vpn_paths');
  }
  public set l2VpnPaths(value: string[]) {
    this._l2VpnPaths = value;
  }
  public resetL2VpnPaths() {
    this._l2VpnPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2VpnPathsInput() {
    return this._l2VpnPaths;
  }

  // tunnel_id - computed: false, optional: true, required: false
  private _tunnelId?: number; 
  public get tunnelId() {
    return this.getNumberAttribute('tunnel_id');
  }
  public set tunnelId(value: number) {
    this._tunnelId = value;
  }
  public resetTunnelId() {
    this._tunnelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelIdInput() {
    return this._tunnelId;
  }
}
export interface PolicyVlanSegmentQosProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#binding_map_path PolicyVlanSegment#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated QoS Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#qos_profile_path PolicyVlanSegment#qos_profile_path}
  */
  readonly qosProfilePath: string;
}

export function policyVlanSegmentQosProfileToTerraform(struct?: PolicyVlanSegmentQosProfileOutputReference | PolicyVlanSegmentQosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_map_path: cdktf.stringToTerraform(struct!.bindingMapPath),
    qos_profile_path: cdktf.stringToTerraform(struct!.qosProfilePath),
  }
}


export function policyVlanSegmentQosProfileToHclTerraform(struct?: PolicyVlanSegmentQosProfileOutputReference | PolicyVlanSegmentQosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_map_path: {
      value: cdktf.stringToHclTerraform(struct!.bindingMapPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.qosProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentQosProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentQosProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingMapPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingMapPath = this._bindingMapPath;
    }
    if (this._qosProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosProfilePath = this._qosProfilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentQosProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindingMapPath = undefined;
      this._qosProfilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindingMapPath = value.bindingMapPath;
      this._qosProfilePath = value.qosProfilePath;
    }
  }

  // binding_map_path - computed: true, optional: true, required: false
  private _bindingMapPath?: string; 
  public get bindingMapPath() {
    return this.getStringAttribute('binding_map_path');
  }
  public set bindingMapPath(value: string) {
    this._bindingMapPath = value;
  }
  public resetBindingMapPath() {
    this._bindingMapPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingMapPathInput() {
    return this._bindingMapPath;
  }

  // qos_profile_path - computed: false, optional: false, required: true
  private _qosProfilePath?: string; 
  public get qosProfilePath() {
    return this.getStringAttribute('qos_profile_path');
  }
  public set qosProfilePath(value: string) {
    this._qosProfilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfilePathInput() {
    return this._qosProfilePath;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }
}
export interface PolicyVlanSegmentSecurityProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#binding_map_path PolicyVlanSegment#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated Segment Security Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#security_profile_path PolicyVlanSegment#security_profile_path}
  */
  readonly securityProfilePath?: string;
  /**
  * Policy path of associated Spoofguard Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#spoofguard_profile_path PolicyVlanSegment#spoofguard_profile_path}
  */
  readonly spoofguardProfilePath?: string;
}

export function policyVlanSegmentSecurityProfileToTerraform(struct?: PolicyVlanSegmentSecurityProfileOutputReference | PolicyVlanSegmentSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_map_path: cdktf.stringToTerraform(struct!.bindingMapPath),
    security_profile_path: cdktf.stringToTerraform(struct!.securityProfilePath),
    spoofguard_profile_path: cdktf.stringToTerraform(struct!.spoofguardProfilePath),
  }
}


export function policyVlanSegmentSecurityProfileToHclTerraform(struct?: PolicyVlanSegmentSecurityProfileOutputReference | PolicyVlanSegmentSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_map_path: {
      value: cdktf.stringToHclTerraform(struct!.bindingMapPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.securityProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spoofguard_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.spoofguardProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentSecurityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingMapPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingMapPath = this._bindingMapPath;
    }
    if (this._securityProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityProfilePath = this._securityProfilePath;
    }
    if (this._spoofguardProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofguardProfilePath = this._spoofguardProfilePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentSecurityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindingMapPath = undefined;
      this._securityProfilePath = undefined;
      this._spoofguardProfilePath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindingMapPath = value.bindingMapPath;
      this._securityProfilePath = value.securityProfilePath;
      this._spoofguardProfilePath = value.spoofguardProfilePath;
    }
  }

  // binding_map_path - computed: true, optional: true, required: false
  private _bindingMapPath?: string; 
  public get bindingMapPath() {
    return this.getStringAttribute('binding_map_path');
  }
  public set bindingMapPath(value: string) {
    this._bindingMapPath = value;
  }
  public resetBindingMapPath() {
    this._bindingMapPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingMapPathInput() {
    return this._bindingMapPath;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // security_profile_path - computed: false, optional: true, required: false
  private _securityProfilePath?: string; 
  public get securityProfilePath() {
    return this.getStringAttribute('security_profile_path');
  }
  public set securityProfilePath(value: string) {
    this._securityProfilePath = value;
  }
  public resetSecurityProfilePath() {
    this._securityProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfilePathInput() {
    return this._securityProfilePath;
  }

  // spoofguard_profile_path - computed: false, optional: true, required: false
  private _spoofguardProfilePath?: string; 
  public get spoofguardProfilePath() {
    return this.getStringAttribute('spoofguard_profile_path');
  }
  public set spoofguardProfilePath(value: string) {
    this._spoofguardProfilePath = value;
  }
  public resetSpoofguardProfilePath() {
    this._spoofguardProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofguardProfilePathInput() {
    return this._spoofguardProfilePath;
  }
}
export interface PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption {
  /**
  * DHCP option code, [0-255]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#code PolicyVlanSegment#code}
  */
  readonly code: number;
  /**
  * DHCP option values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#values PolicyVlanSegment#values}
  */
  readonly values: string[];
}

export function policyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionToTerraform(struct?: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function policyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionToHclTerraform(struct?: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._values = value.values;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionList extends cdktf.ComplexList {
  public internalValue? : PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption[] | cdktf.IResolvable

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
  public get(index: number): PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionOutputReference {
    return new PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121 {
  /**
  * Destination in cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#network PolicyVlanSegment#network}
  */
  readonly network: string;
  /**
  * Next hop IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#next_hop PolicyVlanSegment#next_hop}
  */
  readonly nextHop: string;
}

export function policyVlanSegmentSubnetDhcpV4ConfigDhcpOption121ToTerraform(struct?: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function policyVlanSegmentSubnetDhcpV4ConfigDhcpOption121ToHclTerraform(struct?: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._nextHop = value.nextHop;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121List extends cdktf.ComplexList {
  public internalValue? : PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121[] | cdktf.IResolvable

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
  public get(index: number): PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121OutputReference {
    return new PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVlanSegmentSubnetDhcpV4Config {
  /**
  * IP addresses of DNS servers for subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dns_servers PolicyVlanSegment#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * DHCP lease time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#lease_time PolicyVlanSegment#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * IP address of the DHCP server in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#server_address PolicyVlanSegment#server_address}
  */
  readonly serverAddress?: string;
  /**
  * dhcp_generic_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dhcp_generic_option PolicyVlanSegment#dhcp_generic_option}
  */
  readonly dhcpGenericOption?: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption[] | cdktf.IResolvable;
  /**
  * dhcp_option_121 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dhcp_option_121 PolicyVlanSegment#dhcp_option_121}
  */
  readonly dhcpOption121?: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121[] | cdktf.IResolvable;
}

export function policyVlanSegmentSubnetDhcpV4ConfigToTerraform(struct?: PolicyVlanSegmentSubnetDhcpV4ConfigOutputReference | PolicyVlanSegmentSubnetDhcpV4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    dhcp_generic_option: cdktf.listMapper(policyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionToTerraform, true)(struct!.dhcpGenericOption),
    dhcp_option_121: cdktf.listMapper(policyVlanSegmentSubnetDhcpV4ConfigDhcpOption121ToTerraform, true)(struct!.dhcpOption121),
  }
}


export function policyVlanSegmentSubnetDhcpV4ConfigToHclTerraform(struct?: PolicyVlanSegmentSubnetDhcpV4ConfigOutputReference | PolicyVlanSegmentSubnetDhcpV4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_generic_option: {
      value: cdktf.listMapperHcl(policyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionToHclTerraform, true)(struct!.dhcpGenericOption),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionList",
    },
    dhcp_option_121: {
      value: cdktf.listMapperHcl(policyVlanSegmentSubnetDhcpV4ConfigDhcpOption121ToHclTerraform, true)(struct!.dhcpOption121),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentSubnetDhcpV4ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentSubnetDhcpV4Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._dhcpGenericOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpGenericOption = this._dhcpGenericOption?.internalValue;
    }
    if (this._dhcpOption121?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOption121 = this._dhcpOption121?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentSubnetDhcpV4Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServers = undefined;
      this._leaseTime = undefined;
      this._serverAddress = undefined;
      this._dhcpGenericOption.internalValue = undefined;
      this._dhcpOption121.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServers = value.dnsServers;
      this._leaseTime = value.leaseTime;
      this._serverAddress = value.serverAddress;
      this._dhcpGenericOption.internalValue = value.dhcpGenericOption;
      this._dhcpOption121.internalValue = value.dhcpOption121;
    }
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // server_address - computed: false, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // dhcp_generic_option - computed: false, optional: true, required: false
  private _dhcpGenericOption = new PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOptionList(this, "dhcp_generic_option", false);
  public get dhcpGenericOption() {
    return this._dhcpGenericOption;
  }
  public putDhcpGenericOption(value: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpGenericOption[] | cdktf.IResolvable) {
    this._dhcpGenericOption.internalValue = value;
  }
  public resetDhcpGenericOption() {
    this._dhcpGenericOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpGenericOptionInput() {
    return this._dhcpGenericOption.internalValue;
  }

  // dhcp_option_121 - computed: false, optional: true, required: false
  private _dhcpOption121 = new PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121List(this, "dhcp_option_121", false);
  public get dhcpOption121() {
    return this._dhcpOption121;
  }
  public putDhcpOption121(value: PolicyVlanSegmentSubnetDhcpV4ConfigDhcpOption121[] | cdktf.IResolvable) {
    this._dhcpOption121.internalValue = value;
  }
  public resetDhcpOption121() {
    this._dhcpOption121.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption121Input() {
    return this._dhcpOption121.internalValue;
  }
}
export interface PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange {
  /**
  * The end IP Address for the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#end PolicyVlanSegment#end}
  */
  readonly end: string;
  /**
  * The start IP Address for the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#start PolicyVlanSegment#start}
  */
  readonly start: string;
}

export function policyVlanSegmentSubnetDhcpV6ConfigExcludedRangeToTerraform(struct?: PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function policyVlanSegmentSubnetDhcpV6ConfigExcludedRangeToHclTerraform(struct?: PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRangeList extends cdktf.ComplexList {
  public internalValue? : PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange[] | cdktf.IResolvable

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
  public get(index: number): PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRangeOutputReference {
    return new PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVlanSegmentSubnetDhcpV6Config {
  /**
  * IP addresses of DNS servers for subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dns_servers PolicyVlanSegment#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#domain_names PolicyVlanSegment#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * DHCP lease time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#lease_time PolicyVlanSegment#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * The time interval in seconds, in which the prefix is advertised as preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#preferred_time PolicyVlanSegment#preferred_time}
  */
  readonly preferredTime?: number;
  /**
  * IP address of the DHCP server in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#server_address PolicyVlanSegment#server_address}
  */
  readonly serverAddress?: string;
  /**
  * IPv6 address of SNTP servers for subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#sntp_servers PolicyVlanSegment#sntp_servers}
  */
  readonly sntpServers?: string[];
  /**
  * excluded_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#excluded_range PolicyVlanSegment#excluded_range}
  */
  readonly excludedRange?: PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange[] | cdktf.IResolvable;
}

export function policyVlanSegmentSubnetDhcpV6ConfigToTerraform(struct?: PolicyVlanSegmentSubnetDhcpV6ConfigOutputReference | PolicyVlanSegmentSubnetDhcpV6Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNames),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    preferred_time: cdktf.numberToTerraform(struct!.preferredTime),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    sntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sntpServers),
    excluded_range: cdktf.listMapper(policyVlanSegmentSubnetDhcpV6ConfigExcludedRangeToTerraform, true)(struct!.excludedRange),
  }
}


export function policyVlanSegmentSubnetDhcpV6ConfigToHclTerraform(struct?: PolicyVlanSegmentSubnetDhcpV6ConfigOutputReference | PolicyVlanSegmentSubnetDhcpV6Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lease_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_time: {
      value: cdktf.numberToHclTerraform(struct!.preferredTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_address: {
      value: cdktf.stringToHclTerraform(struct!.serverAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_range: {
      value: cdktf.listMapperHcl(policyVlanSegmentSubnetDhcpV6ConfigExcludedRangeToHclTerraform, true)(struct!.excludedRange),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentSubnetDhcpV6ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyVlanSegmentSubnetDhcpV6Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._domainNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNames = this._domainNames;
    }
    if (this._leaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseTime = this._leaseTime;
    }
    if (this._preferredTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredTime = this._preferredTime;
    }
    if (this._serverAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddress = this._serverAddress;
    }
    if (this._sntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sntpServers = this._sntpServers;
    }
    if (this._excludedRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRange = this._excludedRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentSubnetDhcpV6Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsServers = undefined;
      this._domainNames = undefined;
      this._leaseTime = undefined;
      this._preferredTime = undefined;
      this._serverAddress = undefined;
      this._sntpServers = undefined;
      this._excludedRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsServers = value.dnsServers;
      this._domainNames = value.domainNames;
      this._leaseTime = value.leaseTime;
      this._preferredTime = value.preferredTime;
      this._serverAddress = value.serverAddress;
      this._sntpServers = value.sntpServers;
      this._excludedRange.internalValue = value.excludedRange;
    }
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
  }

  // lease_time - computed: false, optional: true, required: false
  private _leaseTime?: number; 
  public get leaseTime() {
    return this.getNumberAttribute('lease_time');
  }
  public set leaseTime(value: number) {
    this._leaseTime = value;
  }
  public resetLeaseTime() {
    this._leaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseTimeInput() {
    return this._leaseTime;
  }

  // preferred_time - computed: false, optional: true, required: false
  private _preferredTime?: number; 
  public get preferredTime() {
    return this.getNumberAttribute('preferred_time');
  }
  public set preferredTime(value: number) {
    this._preferredTime = value;
  }
  public resetPreferredTime() {
    this._preferredTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTimeInput() {
    return this._preferredTime;
  }

  // server_address - computed: false, optional: true, required: false
  private _serverAddress?: string; 
  public get serverAddress() {
    return this.getStringAttribute('server_address');
  }
  public set serverAddress(value: string) {
    this._serverAddress = value;
  }
  public resetServerAddress() {
    this._serverAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressInput() {
    return this._serverAddress;
  }

  // sntp_servers - computed: false, optional: true, required: false
  private _sntpServers?: string[]; 
  public get sntpServers() {
    return this.getListAttribute('sntp_servers');
  }
  public set sntpServers(value: string[]) {
    this._sntpServers = value;
  }
  public resetSntpServers() {
    this._sntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sntpServersInput() {
    return this._sntpServers;
  }

  // excluded_range - computed: false, optional: true, required: false
  private _excludedRange = new PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRangeList(this, "excluded_range", false);
  public get excludedRange() {
    return this._excludedRange;
  }
  public putExcludedRange(value: PolicyVlanSegmentSubnetDhcpV6ConfigExcludedRange[] | cdktf.IResolvable) {
    this._excludedRange.internalValue = value;
  }
  public resetExcludedRange() {
    this._excludedRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRangeInput() {
    return this._excludedRange.internalValue;
  }
}
export interface PolicyVlanSegmentSubnet {
  /**
  * Gateway IP address in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#cidr PolicyVlanSegment#cidr}
  */
  readonly cidr?: string;
  /**
  * DHCP address ranges for dynamic IP allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dhcp_ranges PolicyVlanSegment#dhcp_ranges}
  */
  readonly dhcpRanges?: string[];
  /**
  * dhcp_v4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dhcp_v4_config PolicyVlanSegment#dhcp_v4_config}
  */
  readonly dhcpV4Config?: PolicyVlanSegmentSubnetDhcpV4Config;
  /**
  * dhcp_v6_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#dhcp_v6_config PolicyVlanSegment#dhcp_v6_config}
  */
  readonly dhcpV6Config?: PolicyVlanSegmentSubnetDhcpV6Config;
}

export function policyVlanSegmentSubnetToTerraform(struct?: PolicyVlanSegmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    dhcp_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpRanges),
    dhcp_v4_config: policyVlanSegmentSubnetDhcpV4ConfigToTerraform(struct!.dhcpV4Config),
    dhcp_v6_config: policyVlanSegmentSubnetDhcpV6ConfigToTerraform(struct!.dhcpV6Config),
  }
}


export function policyVlanSegmentSubnetToHclTerraform(struct?: PolicyVlanSegmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr: {
      value: cdktf.stringToHclTerraform(struct!.cidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dhcp_v4_config: {
      value: policyVlanSegmentSubnetDhcpV4ConfigToHclTerraform(struct!.dhcpV4Config),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyVlanSegmentSubnetDhcpV4ConfigList",
    },
    dhcp_v6_config: {
      value: policyVlanSegmentSubnetDhcpV6ConfigToHclTerraform(struct!.dhcpV6Config),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyVlanSegmentSubnetDhcpV6ConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVlanSegmentSubnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr = this._cidr;
    }
    if (this._dhcpRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRanges = this._dhcpRanges;
    }
    if (this._dhcpV4Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpV4Config = this._dhcpV4Config?.internalValue;
    }
    if (this._dhcpV6Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpV6Config = this._dhcpV6Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentSubnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr = undefined;
      this._dhcpRanges = undefined;
      this._dhcpV4Config.internalValue = undefined;
      this._dhcpV6Config.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr = value.cidr;
      this._dhcpRanges = value.dhcpRanges;
      this._dhcpV4Config.internalValue = value.dhcpV4Config;
      this._dhcpV6Config.internalValue = value.dhcpV6Config;
    }
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // dhcp_ranges - computed: false, optional: true, required: false
  private _dhcpRanges?: string[]; 
  public get dhcpRanges() {
    return this.getListAttribute('dhcp_ranges');
  }
  public set dhcpRanges(value: string[]) {
    this._dhcpRanges = value;
  }
  public resetDhcpRanges() {
    this._dhcpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangesInput() {
    return this._dhcpRanges;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // dhcp_v4_config - computed: false, optional: true, required: false
  private _dhcpV4Config = new PolicyVlanSegmentSubnetDhcpV4ConfigOutputReference(this, "dhcp_v4_config");
  public get dhcpV4Config() {
    return this._dhcpV4Config;
  }
  public putDhcpV4Config(value: PolicyVlanSegmentSubnetDhcpV4Config) {
    this._dhcpV4Config.internalValue = value;
  }
  public resetDhcpV4Config() {
    this._dhcpV4Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV4ConfigInput() {
    return this._dhcpV4Config.internalValue;
  }

  // dhcp_v6_config - computed: false, optional: true, required: false
  private _dhcpV6Config = new PolicyVlanSegmentSubnetDhcpV6ConfigOutputReference(this, "dhcp_v6_config");
  public get dhcpV6Config() {
    return this._dhcpV6Config;
  }
  public putDhcpV6Config(value: PolicyVlanSegmentSubnetDhcpV6Config) {
    this._dhcpV6Config.internalValue = value;
  }
  public resetDhcpV6Config() {
    this._dhcpV6Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpV6ConfigInput() {
    return this._dhcpV6Config.internalValue;
  }
}

export class PolicyVlanSegmentSubnetList extends cdktf.ComplexList {
  public internalValue? : PolicyVlanSegmentSubnet[] | cdktf.IResolvable

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
  public get(index: number): PolicyVlanSegmentSubnetOutputReference {
    return new PolicyVlanSegmentSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyVlanSegmentTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#scope PolicyVlanSegment#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#tag PolicyVlanSegment#tag}
  */
  readonly tag?: string;
}

export function policyVlanSegmentTagToTerraform(struct?: PolicyVlanSegmentTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyVlanSegmentTagToHclTerraform(struct?: PolicyVlanSegmentTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyVlanSegmentTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVlanSegmentTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyVlanSegmentTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyVlanSegmentTagList extends cdktf.ComplexList {
  public internalValue? : PolicyVlanSegmentTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyVlanSegmentTagOutputReference {
    return new PolicyVlanSegmentTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment nsxt_policy_vlan_segment}
*/
export class PolicyVlanSegment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_vlan_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyVlanSegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyVlanSegment to import
  * @param importFromId The id of the existing PolicyVlanSegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyVlanSegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_vlan_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_vlan_segment nsxt_policy_vlan_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyVlanSegmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyVlanSegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_vlan_segment',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
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
    this._dhcpConfigPath = config.dhcpConfigPath;
    this._displayName = config.displayName;
    this._domainName = config.domainName;
    this._id = config.id;
    this._metadataProxyPaths = config.metadataProxyPaths;
    this._nsxId = config.nsxId;
    this._replicationMode = config.replicationMode;
    this._transportZonePath = config.transportZonePath;
    this._vlanIds = config.vlanIds;
    this._advancedConfig.internalValue = config.advancedConfig;
    this._bridgeConfig.internalValue = config.bridgeConfig;
    this._context.internalValue = config.context;
    this._discoveryProfile.internalValue = config.discoveryProfile;
    this._ignoreTags.internalValue = config.ignoreTags;
    this._l2Extension.internalValue = config.l2Extension;
    this._qosProfile.internalValue = config.qosProfile;
    this._securityProfile.internalValue = config.securityProfile;
    this._subnet.internalValue = config.subnet;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dhcp_config_path - computed: false, optional: true, required: false
  private _dhcpConfigPath?: string; 
  public get dhcpConfigPath() {
    return this.getStringAttribute('dhcp_config_path');
  }
  public set dhcpConfigPath(value: string) {
    this._dhcpConfigPath = value;
  }
  public resetDhcpConfigPath() {
    this._dhcpConfigPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigPathInput() {
    return this._dhcpConfigPath;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // metadata_proxy_paths - computed: false, optional: true, required: false
  private _metadataProxyPaths?: string[]; 
  public get metadataProxyPaths() {
    return this.getListAttribute('metadata_proxy_paths');
  }
  public set metadataProxyPaths(value: string[]) {
    this._metadataProxyPaths = value;
  }
  public resetMetadataProxyPaths() {
    this._metadataProxyPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataProxyPathsInput() {
    return this._metadataProxyPaths;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // replication_mode - computed: false, optional: true, required: false
  private _replicationMode?: string; 
  public get replicationMode() {
    return this.getStringAttribute('replication_mode');
  }
  public set replicationMode(value: string) {
    this._replicationMode = value;
  }
  public resetReplicationMode() {
    this._replicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationModeInput() {
    return this._replicationMode;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // transport_zone_path - computed: true, optional: true, required: false
  private _transportZonePath?: string; 
  public get transportZonePath() {
    return this.getStringAttribute('transport_zone_path');
  }
  public set transportZonePath(value: string) {
    this._transportZonePath = value;
  }
  public resetTransportZonePath() {
    this._transportZonePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportZonePathInput() {
    return this._transportZonePath;
  }

  // vlan_ids - computed: false, optional: false, required: true
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new PolicyVlanSegmentAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: PolicyVlanSegmentAdvancedConfig) {
    this._advancedConfig.internalValue = value;
  }
  public resetAdvancedConfig() {
    this._advancedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedConfigInput() {
    return this._advancedConfig.internalValue;
  }

  // bridge_config - computed: false, optional: true, required: false
  private _bridgeConfig = new PolicyVlanSegmentBridgeConfigList(this, "bridge_config", false);
  public get bridgeConfig() {
    return this._bridgeConfig;
  }
  public putBridgeConfig(value: PolicyVlanSegmentBridgeConfig[] | cdktf.IResolvable) {
    this._bridgeConfig.internalValue = value;
  }
  public resetBridgeConfig() {
    this._bridgeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeConfigInput() {
    return this._bridgeConfig.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyVlanSegmentContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyVlanSegmentContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // discovery_profile - computed: false, optional: true, required: false
  private _discoveryProfile = new PolicyVlanSegmentDiscoveryProfileOutputReference(this, "discovery_profile");
  public get discoveryProfile() {
    return this._discoveryProfile;
  }
  public putDiscoveryProfile(value: PolicyVlanSegmentDiscoveryProfile) {
    this._discoveryProfile.internalValue = value;
  }
  public resetDiscoveryProfile() {
    this._discoveryProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryProfileInput() {
    return this._discoveryProfile.internalValue;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags = new PolicyVlanSegmentIgnoreTagsOutputReference(this, "ignore_tags");
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public putIgnoreTags(value: PolicyVlanSegmentIgnoreTags) {
    this._ignoreTags.internalValue = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags.internalValue;
  }

  // l2_extension - computed: false, optional: true, required: false
  private _l2Extension = new PolicyVlanSegmentL2ExtensionOutputReference(this, "l2_extension");
  public get l2Extension() {
    return this._l2Extension;
  }
  public putL2Extension(value: PolicyVlanSegmentL2Extension) {
    this._l2Extension.internalValue = value;
  }
  public resetL2Extension() {
    this._l2Extension.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ExtensionInput() {
    return this._l2Extension.internalValue;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile = new PolicyVlanSegmentQosProfileOutputReference(this, "qos_profile");
  public get qosProfile() {
    return this._qosProfile;
  }
  public putQosProfile(value: PolicyVlanSegmentQosProfile) {
    this._qosProfile.internalValue = value;
  }
  public resetQosProfile() {
    this._qosProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosProfileInput() {
    return this._qosProfile.internalValue;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile = new PolicyVlanSegmentSecurityProfileOutputReference(this, "security_profile");
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: PolicyVlanSegmentSecurityProfile) {
    this._securityProfile.internalValue = value;
  }
  public resetSecurityProfile() {
    this._securityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new PolicyVlanSegmentSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: PolicyVlanSegmentSubnet[] | cdktf.IResolvable) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyVlanSegmentTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyVlanSegmentTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dhcp_config_path: cdktf.stringToTerraform(this._dhcpConfigPath),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      metadata_proxy_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metadataProxyPaths),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      replication_mode: cdktf.stringToTerraform(this._replicationMode),
      transport_zone_path: cdktf.stringToTerraform(this._transportZonePath),
      vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIds),
      advanced_config: policyVlanSegmentAdvancedConfigToTerraform(this._advancedConfig.internalValue),
      bridge_config: cdktf.listMapper(policyVlanSegmentBridgeConfigToTerraform, true)(this._bridgeConfig.internalValue),
      context: policyVlanSegmentContextToTerraform(this._context.internalValue),
      discovery_profile: policyVlanSegmentDiscoveryProfileToTerraform(this._discoveryProfile.internalValue),
      ignore_tags: policyVlanSegmentIgnoreTagsToTerraform(this._ignoreTags.internalValue),
      l2_extension: policyVlanSegmentL2ExtensionToTerraform(this._l2Extension.internalValue),
      qos_profile: policyVlanSegmentQosProfileToTerraform(this._qosProfile.internalValue),
      security_profile: policyVlanSegmentSecurityProfileToTerraform(this._securityProfile.internalValue),
      subnet: cdktf.listMapper(policyVlanSegmentSubnetToTerraform, true)(this._subnet.internalValue),
      tag: cdktf.listMapper(policyVlanSegmentTagToTerraform, true)(this._tag.internalValue),
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
      dhcp_config_path: {
        value: cdktf.stringToHclTerraform(this._dhcpConfigPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      metadata_proxy_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._metadataProxyPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_mode: {
        value: cdktf.stringToHclTerraform(this._replicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_zone_path: {
        value: cdktf.stringToHclTerraform(this._transportZonePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      advanced_config: {
        value: policyVlanSegmentAdvancedConfigToHclTerraform(this._advancedConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentAdvancedConfigList",
      },
      bridge_config: {
        value: cdktf.listMapperHcl(policyVlanSegmentBridgeConfigToHclTerraform, true)(this._bridgeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentBridgeConfigList",
      },
      context: {
        value: policyVlanSegmentContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentContextList",
      },
      discovery_profile: {
        value: policyVlanSegmentDiscoveryProfileToHclTerraform(this._discoveryProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentDiscoveryProfileList",
      },
      ignore_tags: {
        value: policyVlanSegmentIgnoreTagsToHclTerraform(this._ignoreTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentIgnoreTagsList",
      },
      l2_extension: {
        value: policyVlanSegmentL2ExtensionToHclTerraform(this._l2Extension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentL2ExtensionList",
      },
      qos_profile: {
        value: policyVlanSegmentQosProfileToHclTerraform(this._qosProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentQosProfileList",
      },
      security_profile: {
        value: policyVlanSegmentSecurityProfileToHclTerraform(this._securityProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentSecurityProfileList",
      },
      subnet: {
        value: cdktf.listMapperHcl(policyVlanSegmentSubnetToHclTerraform, true)(this._subnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyVlanSegmentSubnetList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyVlanSegmentTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyVlanSegmentTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
