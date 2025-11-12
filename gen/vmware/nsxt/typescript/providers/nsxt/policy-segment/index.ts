// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySegmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy path to the connecting Tier-0 or Tier-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#connectivity_path PolicySegment#connectivity_path}
  */
  readonly connectivityPath?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#description PolicySegment#description}
  */
  readonly description?: string;
  /**
  * Policy path to DHCP server or relay configuration to use for subnets configured on this segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dhcp_config_path PolicySegment#dhcp_config_path}
  */
  readonly dhcpConfigPath?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#display_name PolicySegment#display_name}
  */
  readonly displayName: string;
  /**
  * DNS domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#domain_name PolicySegment#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#id PolicySegment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata Proxy Configuration Paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#metadata_proxy_paths PolicySegment#metadata_proxy_paths}
  */
  readonly metadataProxyPaths?: string[];
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#nsx_id PolicySegment#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Overlay connectivity ID for this Segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#overlay_id PolicySegment#overlay_id}
  */
  readonly overlayId?: number;
  /**
  * Replication mode - MTEP or SOURCE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#replication_mode PolicySegment#replication_mode}
  */
  readonly replicationMode?: string;
  /**
  * Policy path to the transport zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#transport_zone_path PolicySegment#transport_zone_path}
  */
  readonly transportZonePath?: string;
  /**
  * VLAN IDs for VLAN backed Segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#vlan_ids PolicySegment#vlan_ids}
  */
  readonly vlanIds?: string[];
  /**
  * advanced_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#advanced_config PolicySegment#advanced_config}
  */
  readonly advancedConfig?: PolicySegmentAdvancedConfig;
  /**
  * bridge_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#bridge_config PolicySegment#bridge_config}
  */
  readonly bridgeConfig?: PolicySegmentBridgeConfig[] | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#context PolicySegment#context}
  */
  readonly context?: PolicySegmentContext;
  /**
  * discovery_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#discovery_profile PolicySegment#discovery_profile}
  */
  readonly discoveryProfile?: PolicySegmentDiscoveryProfile;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#ignore_tags PolicySegment#ignore_tags}
  */
  readonly ignoreTags?: PolicySegmentIgnoreTags;
  /**
  * l2_extension block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#l2_extension PolicySegment#l2_extension}
  */
  readonly l2Extension?: PolicySegmentL2Extension;
  /**
  * qos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#qos_profile PolicySegment#qos_profile}
  */
  readonly qosProfile?: PolicySegmentQosProfile;
  /**
  * security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#security_profile PolicySegment#security_profile}
  */
  readonly securityProfile?: PolicySegmentSecurityProfile;
  /**
  * subnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#subnet PolicySegment#subnet}
  */
  readonly subnet?: PolicySegmentSubnet[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#tag PolicySegment#tag}
  */
  readonly tag?: PolicySegmentTag[] | cdktf.IResolvable;
}
export interface PolicySegmentAdvancedConfig {
  /**
  * Policy path to IP address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#address_pool_path PolicySegment#address_pool_path}
  */
  readonly addressPoolPath?: string;
  /**
  * Connectivity configuration to manually connect (ON) or disconnect (OFF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#connectivity PolicySegment#connectivity}
  */
  readonly connectivity?: string;
  /**
  * Flag to identify a hybrid logical switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#hybrid PolicySegment#hybrid}
  */
  readonly hybrid?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable local egress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#local_egress PolicySegment#local_egress}
  */
  readonly localEgress?: boolean | cdktf.IResolvable;
  /**
  * Enable multicast on the downlink LRP created to connect the segment to Tier0/Tier1 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#multicast PolicySegment#multicast}
  */
  readonly multicast?: boolean | cdktf.IResolvable;
  /**
  * The name of the switching uplink teaming policy for the bridge endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#uplink_teaming_policy PolicySegment#uplink_teaming_policy}
  */
  readonly uplinkTeamingPolicy?: string;
  /**
  * This URPF mode is applied to the downlink logical router port created while attaching this segment to gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#urpf_mode PolicySegment#urpf_mode}
  */
  readonly urpfMode?: string;
}

export function policySegmentAdvancedConfigToTerraform(struct?: PolicySegmentAdvancedConfigOutputReference | PolicySegmentAdvancedConfig): any {
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


export function policySegmentAdvancedConfigToHclTerraform(struct?: PolicySegmentAdvancedConfigOutputReference | PolicySegmentAdvancedConfig): any {
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

export class PolicySegmentAdvancedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentAdvancedConfig | undefined {
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

  public set internalValue(value: PolicySegmentAdvancedConfig | undefined) {
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
export interface PolicySegmentBridgeConfig {
  /**
  * profile path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#profile_path PolicySegment#profile_path}
  */
  readonly profilePath: string;
  /**
  * vlan transport zone path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#transport_zone_path PolicySegment#transport_zone_path}
  */
  readonly transportZonePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#uplink_teaming_policy PolicySegment#uplink_teaming_policy}
  */
  readonly uplinkTeamingPolicy?: string;
  /**
  * VLAN specification for bridge endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#vlan_ids PolicySegment#vlan_ids}
  */
  readonly vlanIds: string[];
}

export function policySegmentBridgeConfigToTerraform(struct?: PolicySegmentBridgeConfig | cdktf.IResolvable): any {
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


export function policySegmentBridgeConfigToHclTerraform(struct?: PolicySegmentBridgeConfig | cdktf.IResolvable): any {
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

export class PolicySegmentBridgeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentBridgeConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentBridgeConfig | cdktf.IResolvable | undefined) {
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

export class PolicySegmentBridgeConfigList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentBridgeConfig[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentBridgeConfigOutputReference {
    return new PolicySegmentBridgeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySegmentContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#project_id PolicySegment#project_id}
  */
  readonly projectId: string;
}

export function policySegmentContextToTerraform(struct?: PolicySegmentContextOutputReference | PolicySegmentContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policySegmentContextToHclTerraform(struct?: PolicySegmentContextOutputReference | PolicySegmentContext): any {
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

export class PolicySegmentContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySegmentContext | undefined) {
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
export interface PolicySegmentDiscoveryProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#binding_map_path PolicySegment#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated IP Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#ip_discovery_profile_path PolicySegment#ip_discovery_profile_path}
  */
  readonly ipDiscoveryProfilePath?: string;
  /**
  * Policy path of associated Mac Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#mac_discovery_profile_path PolicySegment#mac_discovery_profile_path}
  */
  readonly macDiscoveryProfilePath?: string;
}

export function policySegmentDiscoveryProfileToTerraform(struct?: PolicySegmentDiscoveryProfileOutputReference | PolicySegmentDiscoveryProfile): any {
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


export function policySegmentDiscoveryProfileToHclTerraform(struct?: PolicySegmentDiscoveryProfileOutputReference | PolicySegmentDiscoveryProfile): any {
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

export class PolicySegmentDiscoveryProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentDiscoveryProfile | undefined {
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

  public set internalValue(value: PolicySegmentDiscoveryProfile | undefined) {
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
export interface PolicySegmentIgnoreTagsDetected {
}

export function policySegmentIgnoreTagsDetectedToTerraform(struct?: PolicySegmentIgnoreTagsDetected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function policySegmentIgnoreTagsDetectedToHclTerraform(struct?: PolicySegmentIgnoreTagsDetected): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PolicySegmentIgnoreTagsDetectedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentIgnoreTagsDetected | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySegmentIgnoreTagsDetected | undefined) {
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

export class PolicySegmentIgnoreTagsDetectedList extends cdktf.ComplexList {

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
  public get(index: number): PolicySegmentIgnoreTagsDetectedOutputReference {
    return new PolicySegmentIgnoreTagsDetectedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySegmentIgnoreTags {
  /**
  * List of scopes to ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#scopes PolicySegment#scopes}
  */
  readonly scopes: string[];
}

export function policySegmentIgnoreTagsToTerraform(struct?: PolicySegmentIgnoreTagsOutputReference | PolicySegmentIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function policySegmentIgnoreTagsToHclTerraform(struct?: PolicySegmentIgnoreTagsOutputReference | PolicySegmentIgnoreTags): any {
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

export class PolicySegmentIgnoreTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentIgnoreTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySegmentIgnoreTags | undefined) {
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
  private _detected = new PolicySegmentIgnoreTagsDetectedList(this, "detected", true);
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
export interface PolicySegmentL2Extension {
  /**
  * Policy paths of associated L2 VPN sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#l2vpn_paths PolicySegment#l2vpn_paths}
  */
  readonly l2VpnPaths?: string[];
  /**
  * Tunnel ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#tunnel_id PolicySegment#tunnel_id}
  */
  readonly tunnelId?: number;
}

export function policySegmentL2ExtensionToTerraform(struct?: PolicySegmentL2ExtensionOutputReference | PolicySegmentL2Extension): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    l2vpn_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.l2VpnPaths),
    tunnel_id: cdktf.numberToTerraform(struct!.tunnelId),
  }
}


export function policySegmentL2ExtensionToHclTerraform(struct?: PolicySegmentL2ExtensionOutputReference | PolicySegmentL2Extension): any {
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

export class PolicySegmentL2ExtensionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentL2Extension | undefined {
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

  public set internalValue(value: PolicySegmentL2Extension | undefined) {
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
export interface PolicySegmentQosProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#binding_map_path PolicySegment#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated QoS Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#qos_profile_path PolicySegment#qos_profile_path}
  */
  readonly qosProfilePath: string;
}

export function policySegmentQosProfileToTerraform(struct?: PolicySegmentQosProfileOutputReference | PolicySegmentQosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_map_path: cdktf.stringToTerraform(struct!.bindingMapPath),
    qos_profile_path: cdktf.stringToTerraform(struct!.qosProfilePath),
  }
}


export function policySegmentQosProfileToHclTerraform(struct?: PolicySegmentQosProfileOutputReference | PolicySegmentQosProfile): any {
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

export class PolicySegmentQosProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentQosProfile | undefined {
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

  public set internalValue(value: PolicySegmentQosProfile | undefined) {
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
export interface PolicySegmentSecurityProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#binding_map_path PolicySegment#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated Segment Security Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#security_profile_path PolicySegment#security_profile_path}
  */
  readonly securityProfilePath?: string;
  /**
  * Policy path of associated Spoofguard Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#spoofguard_profile_path PolicySegment#spoofguard_profile_path}
  */
  readonly spoofguardProfilePath?: string;
}

export function policySegmentSecurityProfileToTerraform(struct?: PolicySegmentSecurityProfileOutputReference | PolicySegmentSecurityProfile): any {
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


export function policySegmentSecurityProfileToHclTerraform(struct?: PolicySegmentSecurityProfileOutputReference | PolicySegmentSecurityProfile): any {
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

export class PolicySegmentSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentSecurityProfile | undefined {
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

  public set internalValue(value: PolicySegmentSecurityProfile | undefined) {
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
export interface PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption {
  /**
  * DHCP option code, [0-255]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#code PolicySegment#code}
  */
  readonly code: number;
  /**
  * DHCP option values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#values PolicySegment#values}
  */
  readonly values: string[];
}

export function policySegmentSubnetDhcpV4ConfigDhcpGenericOptionToTerraform(struct?: PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function policySegmentSubnetDhcpV4ConfigDhcpGenericOptionToHclTerraform(struct?: PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable): any {
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

export class PolicySegmentSubnetDhcpV4ConfigDhcpGenericOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption | cdktf.IResolvable | undefined) {
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

export class PolicySegmentSubnetDhcpV4ConfigDhcpGenericOptionList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentSubnetDhcpV4ConfigDhcpGenericOptionOutputReference {
    return new PolicySegmentSubnetDhcpV4ConfigDhcpGenericOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySegmentSubnetDhcpV4ConfigDhcpOption121 {
  /**
  * Destination in cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#network PolicySegment#network}
  */
  readonly network: string;
  /**
  * Next hop IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#next_hop PolicySegment#next_hop}
  */
  readonly nextHop: string;
}

export function policySegmentSubnetDhcpV4ConfigDhcpOption121ToTerraform(struct?: PolicySegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function policySegmentSubnetDhcpV4ConfigDhcpOption121ToHclTerraform(struct?: PolicySegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable): any {
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

export class PolicySegmentSubnetDhcpV4ConfigDhcpOption121OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentSubnetDhcpV4ConfigDhcpOption121 | cdktf.IResolvable | undefined) {
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

export class PolicySegmentSubnetDhcpV4ConfigDhcpOption121List extends cdktf.ComplexList {
  public internalValue? : PolicySegmentSubnetDhcpV4ConfigDhcpOption121[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentSubnetDhcpV4ConfigDhcpOption121OutputReference {
    return new PolicySegmentSubnetDhcpV4ConfigDhcpOption121OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySegmentSubnetDhcpV4Config {
  /**
  * IP addresses of DNS servers for subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dns_servers PolicySegment#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * DHCP lease time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#lease_time PolicySegment#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * IP address of the DHCP server in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#server_address PolicySegment#server_address}
  */
  readonly serverAddress?: string;
  /**
  * dhcp_generic_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dhcp_generic_option PolicySegment#dhcp_generic_option}
  */
  readonly dhcpGenericOption?: PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption[] | cdktf.IResolvable;
  /**
  * dhcp_option_121 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dhcp_option_121 PolicySegment#dhcp_option_121}
  */
  readonly dhcpOption121?: PolicySegmentSubnetDhcpV4ConfigDhcpOption121[] | cdktf.IResolvable;
}

export function policySegmentSubnetDhcpV4ConfigToTerraform(struct?: PolicySegmentSubnetDhcpV4ConfigOutputReference | PolicySegmentSubnetDhcpV4Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    lease_time: cdktf.numberToTerraform(struct!.leaseTime),
    server_address: cdktf.stringToTerraform(struct!.serverAddress),
    dhcp_generic_option: cdktf.listMapper(policySegmentSubnetDhcpV4ConfigDhcpGenericOptionToTerraform, true)(struct!.dhcpGenericOption),
    dhcp_option_121: cdktf.listMapper(policySegmentSubnetDhcpV4ConfigDhcpOption121ToTerraform, true)(struct!.dhcpOption121),
  }
}


export function policySegmentSubnetDhcpV4ConfigToHclTerraform(struct?: PolicySegmentSubnetDhcpV4ConfigOutputReference | PolicySegmentSubnetDhcpV4Config): any {
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
      value: cdktf.listMapperHcl(policySegmentSubnetDhcpV4ConfigDhcpGenericOptionToHclTerraform, true)(struct!.dhcpGenericOption),
      isBlock: true,
      type: "list",
      storageClassType: "PolicySegmentSubnetDhcpV4ConfigDhcpGenericOptionList",
    },
    dhcp_option_121: {
      value: cdktf.listMapperHcl(policySegmentSubnetDhcpV4ConfigDhcpOption121ToHclTerraform, true)(struct!.dhcpOption121),
      isBlock: true,
      type: "list",
      storageClassType: "PolicySegmentSubnetDhcpV4ConfigDhcpOption121List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySegmentSubnetDhcpV4ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentSubnetDhcpV4Config | undefined {
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

  public set internalValue(value: PolicySegmentSubnetDhcpV4Config | undefined) {
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
  private _dhcpGenericOption = new PolicySegmentSubnetDhcpV4ConfigDhcpGenericOptionList(this, "dhcp_generic_option", false);
  public get dhcpGenericOption() {
    return this._dhcpGenericOption;
  }
  public putDhcpGenericOption(value: PolicySegmentSubnetDhcpV4ConfigDhcpGenericOption[] | cdktf.IResolvable) {
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
  private _dhcpOption121 = new PolicySegmentSubnetDhcpV4ConfigDhcpOption121List(this, "dhcp_option_121", false);
  public get dhcpOption121() {
    return this._dhcpOption121;
  }
  public putDhcpOption121(value: PolicySegmentSubnetDhcpV4ConfigDhcpOption121[] | cdktf.IResolvable) {
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
export interface PolicySegmentSubnetDhcpV6ConfigExcludedRange {
  /**
  * The end IP Address for the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#end PolicySegment#end}
  */
  readonly end: string;
  /**
  * The start IP Address for the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#start PolicySegment#start}
  */
  readonly start: string;
}

export function policySegmentSubnetDhcpV6ConfigExcludedRangeToTerraform(struct?: PolicySegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function policySegmentSubnetDhcpV6ConfigExcludedRangeToHclTerraform(struct?: PolicySegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable): any {
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

export class PolicySegmentSubnetDhcpV6ConfigExcludedRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentSubnetDhcpV6ConfigExcludedRange | cdktf.IResolvable | undefined) {
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

export class PolicySegmentSubnetDhcpV6ConfigExcludedRangeList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentSubnetDhcpV6ConfigExcludedRange[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentSubnetDhcpV6ConfigExcludedRangeOutputReference {
    return new PolicySegmentSubnetDhcpV6ConfigExcludedRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySegmentSubnetDhcpV6Config {
  /**
  * IP addresses of DNS servers for subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dns_servers PolicySegment#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * Domain names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#domain_names PolicySegment#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * DHCP lease time in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#lease_time PolicySegment#lease_time}
  */
  readonly leaseTime?: number;
  /**
  * The time interval in seconds, in which the prefix is advertised as preferred
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#preferred_time PolicySegment#preferred_time}
  */
  readonly preferredTime?: number;
  /**
  * IP address of the DHCP server in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#server_address PolicySegment#server_address}
  */
  readonly serverAddress?: string;
  /**
  * IPv6 address of SNTP servers for subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#sntp_servers PolicySegment#sntp_servers}
  */
  readonly sntpServers?: string[];
  /**
  * excluded_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#excluded_range PolicySegment#excluded_range}
  */
  readonly excludedRange?: PolicySegmentSubnetDhcpV6ConfigExcludedRange[] | cdktf.IResolvable;
}

export function policySegmentSubnetDhcpV6ConfigToTerraform(struct?: PolicySegmentSubnetDhcpV6ConfigOutputReference | PolicySegmentSubnetDhcpV6Config): any {
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
    excluded_range: cdktf.listMapper(policySegmentSubnetDhcpV6ConfigExcludedRangeToTerraform, true)(struct!.excludedRange),
  }
}


export function policySegmentSubnetDhcpV6ConfigToHclTerraform(struct?: PolicySegmentSubnetDhcpV6ConfigOutputReference | PolicySegmentSubnetDhcpV6Config): any {
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
      value: cdktf.listMapperHcl(policySegmentSubnetDhcpV6ConfigExcludedRangeToHclTerraform, true)(struct!.excludedRange),
      isBlock: true,
      type: "list",
      storageClassType: "PolicySegmentSubnetDhcpV6ConfigExcludedRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySegmentSubnetDhcpV6ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentSubnetDhcpV6Config | undefined {
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

  public set internalValue(value: PolicySegmentSubnetDhcpV6Config | undefined) {
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
  private _excludedRange = new PolicySegmentSubnetDhcpV6ConfigExcludedRangeList(this, "excluded_range", false);
  public get excludedRange() {
    return this._excludedRange;
  }
  public putExcludedRange(value: PolicySegmentSubnetDhcpV6ConfigExcludedRange[] | cdktf.IResolvable) {
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
export interface PolicySegmentSubnet {
  /**
  * Gateway IP address in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#cidr PolicySegment#cidr}
  */
  readonly cidr?: string;
  /**
  * DHCP address ranges for dynamic IP allocation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dhcp_ranges PolicySegment#dhcp_ranges}
  */
  readonly dhcpRanges?: string[];
  /**
  * dhcp_v4_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dhcp_v4_config PolicySegment#dhcp_v4_config}
  */
  readonly dhcpV4Config?: PolicySegmentSubnetDhcpV4Config;
  /**
  * dhcp_v6_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#dhcp_v6_config PolicySegment#dhcp_v6_config}
  */
  readonly dhcpV6Config?: PolicySegmentSubnetDhcpV6Config;
}

export function policySegmentSubnetToTerraform(struct?: PolicySegmentSubnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
    dhcp_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpRanges),
    dhcp_v4_config: policySegmentSubnetDhcpV4ConfigToTerraform(struct!.dhcpV4Config),
    dhcp_v6_config: policySegmentSubnetDhcpV6ConfigToTerraform(struct!.dhcpV6Config),
  }
}


export function policySegmentSubnetToHclTerraform(struct?: PolicySegmentSubnet | cdktf.IResolvable): any {
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
      value: policySegmentSubnetDhcpV4ConfigToHclTerraform(struct!.dhcpV4Config),
      isBlock: true,
      type: "list",
      storageClassType: "PolicySegmentSubnetDhcpV4ConfigList",
    },
    dhcp_v6_config: {
      value: policySegmentSubnetDhcpV6ConfigToHclTerraform(struct!.dhcpV6Config),
      isBlock: true,
      type: "list",
      storageClassType: "PolicySegmentSubnetDhcpV6ConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySegmentSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentSubnet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentSubnet | cdktf.IResolvable | undefined) {
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
  private _dhcpV4Config = new PolicySegmentSubnetDhcpV4ConfigOutputReference(this, "dhcp_v4_config");
  public get dhcpV4Config() {
    return this._dhcpV4Config;
  }
  public putDhcpV4Config(value: PolicySegmentSubnetDhcpV4Config) {
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
  private _dhcpV6Config = new PolicySegmentSubnetDhcpV6ConfigOutputReference(this, "dhcp_v6_config");
  public get dhcpV6Config() {
    return this._dhcpV6Config;
  }
  public putDhcpV6Config(value: PolicySegmentSubnetDhcpV6Config) {
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

export class PolicySegmentSubnetList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentSubnet[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentSubnetOutputReference {
    return new PolicySegmentSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySegmentTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#scope PolicySegment#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#tag PolicySegment#tag}
  */
  readonly tag?: string;
}

export function policySegmentTagToTerraform(struct?: PolicySegmentTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policySegmentTagToHclTerraform(struct?: PolicySegmentTag | cdktf.IResolvable): any {
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

export class PolicySegmentTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentTag | cdktf.IResolvable | undefined) {
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

export class PolicySegmentTagList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentTag[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentTagOutputReference {
    return new PolicySegmentTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment nsxt_policy_segment}
*/
export class PolicySegment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_segment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySegment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySegment to import
  * @param importFromId The id of the existing PolicySegment that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySegment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_segment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_segment nsxt_policy_segment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySegmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySegmentConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_segment',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectivityPath = config.connectivityPath;
    this._description = config.description;
    this._dhcpConfigPath = config.dhcpConfigPath;
    this._displayName = config.displayName;
    this._domainName = config.domainName;
    this._id = config.id;
    this._metadataProxyPaths = config.metadataProxyPaths;
    this._nsxId = config.nsxId;
    this._overlayId = config.overlayId;
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

  // connectivity_path - computed: false, optional: true, required: false
  private _connectivityPath?: string; 
  public get connectivityPath() {
    return this.getStringAttribute('connectivity_path');
  }
  public set connectivityPath(value: string) {
    this._connectivityPath = value;
  }
  public resetConnectivityPath() {
    this._connectivityPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityPathInput() {
    return this._connectivityPath;
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

  // overlay_id - computed: true, optional: true, required: false
  private _overlayId?: number; 
  public get overlayId() {
    return this.getNumberAttribute('overlay_id');
  }
  public set overlayId(value: number) {
    this._overlayId = value;
  }
  public resetOverlayId() {
    this._overlayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayIdInput() {
    return this._overlayId;
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

  // vlan_ids - computed: false, optional: true, required: false
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  public resetVlanIds() {
    this._vlanIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }

  // advanced_config - computed: false, optional: true, required: false
  private _advancedConfig = new PolicySegmentAdvancedConfigOutputReference(this, "advanced_config");
  public get advancedConfig() {
    return this._advancedConfig;
  }
  public putAdvancedConfig(value: PolicySegmentAdvancedConfig) {
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
  private _bridgeConfig = new PolicySegmentBridgeConfigList(this, "bridge_config", false);
  public get bridgeConfig() {
    return this._bridgeConfig;
  }
  public putBridgeConfig(value: PolicySegmentBridgeConfig[] | cdktf.IResolvable) {
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
  private _context = new PolicySegmentContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicySegmentContext) {
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
  private _discoveryProfile = new PolicySegmentDiscoveryProfileOutputReference(this, "discovery_profile");
  public get discoveryProfile() {
    return this._discoveryProfile;
  }
  public putDiscoveryProfile(value: PolicySegmentDiscoveryProfile) {
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
  private _ignoreTags = new PolicySegmentIgnoreTagsOutputReference(this, "ignore_tags");
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public putIgnoreTags(value: PolicySegmentIgnoreTags) {
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
  private _l2Extension = new PolicySegmentL2ExtensionOutputReference(this, "l2_extension");
  public get l2Extension() {
    return this._l2Extension;
  }
  public putL2Extension(value: PolicySegmentL2Extension) {
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
  private _qosProfile = new PolicySegmentQosProfileOutputReference(this, "qos_profile");
  public get qosProfile() {
    return this._qosProfile;
  }
  public putQosProfile(value: PolicySegmentQosProfile) {
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
  private _securityProfile = new PolicySegmentSecurityProfileOutputReference(this, "security_profile");
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: PolicySegmentSecurityProfile) {
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
  private _subnet = new PolicySegmentSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: PolicySegmentSubnet[] | cdktf.IResolvable) {
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
  private _tag = new PolicySegmentTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicySegmentTag[] | cdktf.IResolvable) {
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
      connectivity_path: cdktf.stringToTerraform(this._connectivityPath),
      description: cdktf.stringToTerraform(this._description),
      dhcp_config_path: cdktf.stringToTerraform(this._dhcpConfigPath),
      display_name: cdktf.stringToTerraform(this._displayName),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      metadata_proxy_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._metadataProxyPaths),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      overlay_id: cdktf.numberToTerraform(this._overlayId),
      replication_mode: cdktf.stringToTerraform(this._replicationMode),
      transport_zone_path: cdktf.stringToTerraform(this._transportZonePath),
      vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIds),
      advanced_config: policySegmentAdvancedConfigToTerraform(this._advancedConfig.internalValue),
      bridge_config: cdktf.listMapper(policySegmentBridgeConfigToTerraform, true)(this._bridgeConfig.internalValue),
      context: policySegmentContextToTerraform(this._context.internalValue),
      discovery_profile: policySegmentDiscoveryProfileToTerraform(this._discoveryProfile.internalValue),
      ignore_tags: policySegmentIgnoreTagsToTerraform(this._ignoreTags.internalValue),
      l2_extension: policySegmentL2ExtensionToTerraform(this._l2Extension.internalValue),
      qos_profile: policySegmentQosProfileToTerraform(this._qosProfile.internalValue),
      security_profile: policySegmentSecurityProfileToTerraform(this._securityProfile.internalValue),
      subnet: cdktf.listMapper(policySegmentSubnetToTerraform, true)(this._subnet.internalValue),
      tag: cdktf.listMapper(policySegmentTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connectivity_path: {
        value: cdktf.stringToHclTerraform(this._connectivityPath),
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
      overlay_id: {
        value: cdktf.numberToHclTerraform(this._overlayId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: policySegmentAdvancedConfigToHclTerraform(this._advancedConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentAdvancedConfigList",
      },
      bridge_config: {
        value: cdktf.listMapperHcl(policySegmentBridgeConfigToHclTerraform, true)(this._bridgeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentBridgeConfigList",
      },
      context: {
        value: policySegmentContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentContextList",
      },
      discovery_profile: {
        value: policySegmentDiscoveryProfileToHclTerraform(this._discoveryProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentDiscoveryProfileList",
      },
      ignore_tags: {
        value: policySegmentIgnoreTagsToHclTerraform(this._ignoreTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentIgnoreTagsList",
      },
      l2_extension: {
        value: policySegmentL2ExtensionToHclTerraform(this._l2Extension.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentL2ExtensionList",
      },
      qos_profile: {
        value: policySegmentQosProfileToHclTerraform(this._qosProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentQosProfileList",
      },
      security_profile: {
        value: policySegmentSecurityProfileToHclTerraform(this._securityProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentSecurityProfileList",
      },
      subnet: {
        value: cdktf.listMapperHcl(policySegmentSubnetToHclTerraform, true)(this._subnet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentSubnetList",
      },
      tag: {
        value: cdktf.listMapperHcl(policySegmentTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicySegmentTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
