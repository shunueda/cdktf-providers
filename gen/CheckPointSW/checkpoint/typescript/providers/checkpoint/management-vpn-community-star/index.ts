// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementVpnCommunityStarConfig extends cdktf.TerraformMetaArguments {
  /**
  * Collection of Gateway objects representing center gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#center_gateways ManagementVpnCommunityStar#center_gateways}
  */
  readonly centerGateways?: string[];
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#color ManagementVpnCommunityStar#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#comments ManagementVpnCommunityStar#comments}
  */
  readonly comments?: string;
  /**
  * Indicates whether to disable NAT inside the VPN Community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#disable_nat ManagementVpnCommunityStar#disable_nat}
  */
  readonly disableNat?: boolean | cdktf.IResolvable;
  /**
  * Indicates on which gateways to disable NAT inside the VPN Community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#disable_nat_on ManagementVpnCommunityStar#disable_nat_on}
  */
  readonly disableNatOn?: string;
  /**
  * The encryption method to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#encryption_method ManagementVpnCommunityStar#encryption_method}
  */
  readonly encryptionMethod?: string;
  /**
  * The encryption suite to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#encryption_suite ManagementVpnCommunityStar#encryption_suite}
  */
  readonly encryptionSuite?: string;
  /**
  * Collection of services that are excluded from the community identified by the name or UID.<br> Connections with these services will not be encrypted and will not match rules specifying the community in the VPN community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#excluded_services ManagementVpnCommunityStar#excluded_services}
  */
  readonly excludedServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#id ManagementVpnCommunityStar#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#ignore_errors ManagementVpnCommunityStar#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#ignore_warnings ManagementVpnCommunityStar#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Ike Phase 1 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#ike_phase_1 ManagementVpnCommunityStar#ike_phase_1}
  */
  readonly ikePhase1?: { [key: string]: string };
  /**
  * Ike Phase 2 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#ike_phase_2 ManagementVpnCommunityStar#ike_phase_2}
  */
  readonly ikePhase2?: { [key: string]: string };
  /**
  * Link Selection Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#link_selection_mode ManagementVpnCommunityStar#link_selection_mode}
  */
  readonly linkSelectionMode?: string;
  /**
  * Indicates whether the meshed community is in center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#mesh_center_gateways ManagementVpnCommunityStar#mesh_center_gateways}
  */
  readonly meshCenterGateways?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#name ManagementVpnCommunityStar#name}
  */
  readonly name: string;
  /**
  * VPN Community Routing Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#routing_mode ManagementVpnCommunityStar#routing_mode}
  */
  readonly routingMode?: string;
  /**
  * Collection of Gateway objects representing satellite gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#satellite_gateways ManagementVpnCommunityStar#satellite_gateways}
  */
  readonly satelliteGateways?: string[];
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#tags ManagementVpnCommunityStar#tags}
  */
  readonly tags?: string[];
  /**
  * VPN tunnel sharing option to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#tunnel_granularity ManagementVpnCommunityStar#tunnel_granularity}
  */
  readonly tunnelGranularity?: string;
  /**
  * Indicates whether the shared secret should be used for all external gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#use_shared_secret ManagementVpnCommunityStar#use_shared_secret}
  */
  readonly useSharedSecret?: boolean | cdktf.IResolvable;
  /**
  * Enable VPN routing to satellites.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#vpn_routing ManagementVpnCommunityStar#vpn_routing}
  */
  readonly vpnRouting?: string;
  /**
  * advanced_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#advanced_properties ManagementVpnCommunityStar#advanced_properties}
  */
  readonly advancedProperties?: ManagementVpnCommunityStarAdvancedProperties;
  /**
  * encrypted_traffic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#encrypted_traffic ManagementVpnCommunityStar#encrypted_traffic}
  */
  readonly encryptedTraffic?: ManagementVpnCommunityStarEncryptedTraffic;
  /**
  * granular_encryptions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#granular_encryptions ManagementVpnCommunityStar#granular_encryptions}
  */
  readonly granularEncryptions?: ManagementVpnCommunityStarGranularEncryptions[] | cdktf.IResolvable;
  /**
  * mep block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#mep ManagementVpnCommunityStar#mep}
  */
  readonly mep?: ManagementVpnCommunityStarMep;
  /**
  * override_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#override_interfaces ManagementVpnCommunityStar#override_interfaces}
  */
  readonly overrideInterfaces?: ManagementVpnCommunityStarOverrideInterfaces[] | cdktf.IResolvable;
  /**
  * override_vpn_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#override_vpn_domains ManagementVpnCommunityStar#override_vpn_domains}
  */
  readonly overrideVpnDomains?: ManagementVpnCommunityStarOverrideVpnDomains[] | cdktf.IResolvable;
  /**
  * permanent_tunnels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#permanent_tunnels ManagementVpnCommunityStar#permanent_tunnels}
  */
  readonly permanentTunnels?: ManagementVpnCommunityStarPermanentTunnels;
  /**
  * shared_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#shared_secrets ManagementVpnCommunityStar#shared_secrets}
  */
  readonly sharedSecrets?: ManagementVpnCommunityStarSharedSecrets[] | cdktf.IResolvable;
  /**
  * wire_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#wire_mode ManagementVpnCommunityStar#wire_mode}
  */
  readonly wireMode?: ManagementVpnCommunityStarWireMode;
}
export interface ManagementVpnCommunityStarAdvancedProperties {
  /**
  * Indicates whether to support IP compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#support_ip_compression ManagementVpnCommunityStar#support_ip_compression}
  */
  readonly supportIpCompression?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use aggressive mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#use_aggressive_mode ManagementVpnCommunityStar#use_aggressive_mode}
  */
  readonly useAggressiveMode?: boolean | cdktf.IResolvable;
}

export function managementVpnCommunityStarAdvancedPropertiesToTerraform(struct?: ManagementVpnCommunityStarAdvancedPropertiesOutputReference | ManagementVpnCommunityStarAdvancedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    support_ip_compression: cdktf.booleanToTerraform(struct!.supportIpCompression),
    use_aggressive_mode: cdktf.booleanToTerraform(struct!.useAggressiveMode),
  }
}


export function managementVpnCommunityStarAdvancedPropertiesToHclTerraform(struct?: ManagementVpnCommunityStarAdvancedPropertiesOutputReference | ManagementVpnCommunityStarAdvancedProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    support_ip_compression: {
      value: cdktf.booleanToHclTerraform(struct!.supportIpCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_aggressive_mode: {
      value: cdktf.booleanToHclTerraform(struct!.useAggressiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarAdvancedPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVpnCommunityStarAdvancedProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportIpCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportIpCompression = this._supportIpCompression;
    }
    if (this._useAggressiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAggressiveMode = this._useAggressiveMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarAdvancedProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._supportIpCompression = undefined;
      this._useAggressiveMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._supportIpCompression = value.supportIpCompression;
      this._useAggressiveMode = value.useAggressiveMode;
    }
  }

  // support_ip_compression - computed: false, optional: true, required: false
  private _supportIpCompression?: boolean | cdktf.IResolvable; 
  public get supportIpCompression() {
    return this.getBooleanAttribute('support_ip_compression');
  }
  public set supportIpCompression(value: boolean | cdktf.IResolvable) {
    this._supportIpCompression = value;
  }
  public resetSupportIpCompression() {
    this._supportIpCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportIpCompressionInput() {
    return this._supportIpCompression;
  }

  // use_aggressive_mode - computed: false, optional: true, required: false
  private _useAggressiveMode?: boolean | cdktf.IResolvable; 
  public get useAggressiveMode() {
    return this.getBooleanAttribute('use_aggressive_mode');
  }
  public set useAggressiveMode(value: boolean | cdktf.IResolvable) {
    this._useAggressiveMode = value;
  }
  public resetUseAggressiveMode() {
    this._useAggressiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAggressiveModeInput() {
    return this._useAggressiveMode;
  }
}
export interface ManagementVpnCommunityStarEncryptedTraffic {
  /**
  * Indicates on which community members to accept all encrypted traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#community_members ManagementVpnCommunityStar#community_members}
  */
  readonly communityMembers?: string;
  /**
  * Indicates whether to accept all encrypted traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#enabled ManagementVpnCommunityStar#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function managementVpnCommunityStarEncryptedTrafficToTerraform(struct?: ManagementVpnCommunityStarEncryptedTrafficOutputReference | ManagementVpnCommunityStarEncryptedTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community_members: cdktf.stringToTerraform(struct!.communityMembers),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function managementVpnCommunityStarEncryptedTrafficToHclTerraform(struct?: ManagementVpnCommunityStarEncryptedTrafficOutputReference | ManagementVpnCommunityStarEncryptedTraffic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community_members: {
      value: cdktf.stringToHclTerraform(struct!.communityMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarEncryptedTrafficOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVpnCommunityStarEncryptedTraffic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._communityMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityMembers = this._communityMembers;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarEncryptedTraffic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._communityMembers = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._communityMembers = value.communityMembers;
      this._enabled = value.enabled;
    }
  }

  // community_members - computed: false, optional: true, required: false
  private _communityMembers?: string; 
  public get communityMembers() {
    return this.getStringAttribute('community_members');
  }
  public set communityMembers(value: string) {
    this._communityMembers = value;
  }
  public resetCommunityMembers() {
    this._communityMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityMembersInput() {
    return this._communityMembers;
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
}
export interface ManagementVpnCommunityStarGranularEncryptions {
  /**
  * The encryption method to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#encryption_method ManagementVpnCommunityStar#encryption_method}
  */
  readonly encryptionMethod?: string;
  /**
  * The encryption suite to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#encryption_suite ManagementVpnCommunityStar#encryption_suite}
  */
  readonly encryptionSuite?: string;
  /**
  * Externally managed or 3rd party gateway identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#external_gateway ManagementVpnCommunityStar#external_gateway}
  */
  readonly externalGateway: string;
  /**
  * Ike Phase 1 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#ike_phase_1 ManagementVpnCommunityStar#ike_phase_1}
  */
  readonly ikePhase1?: { [key: string]: string };
  /**
  * Ike Phase 2 settings. Only applicable when the encryption-suite is set to [custom].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#ike_phase_2 ManagementVpnCommunityStar#ike_phase_2}
  */
  readonly ikePhase2?: { [key: string]: string };
  /**
  * Internally managed Check Point gateway identified by name or UID, or 'Any' for all internal-gateways participants in this community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#internal_gateway ManagementVpnCommunityStar#internal_gateway}
  */
  readonly internalGateway: string;
}

export function managementVpnCommunityStarGranularEncryptionsToTerraform(struct?: ManagementVpnCommunityStarGranularEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_method: cdktf.stringToTerraform(struct!.encryptionMethod),
    encryption_suite: cdktf.stringToTerraform(struct!.encryptionSuite),
    external_gateway: cdktf.stringToTerraform(struct!.externalGateway),
    ike_phase_1: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ikePhase1),
    ike_phase_2: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ikePhase2),
    internal_gateway: cdktf.stringToTerraform(struct!.internalGateway),
  }
}


export function managementVpnCommunityStarGranularEncryptionsToHclTerraform(struct?: ManagementVpnCommunityStarGranularEncryptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_method: {
      value: cdktf.stringToHclTerraform(struct!.encryptionMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_suite: {
      value: cdktf.stringToHclTerraform(struct!.encryptionSuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_gateway: {
      value: cdktf.stringToHclTerraform(struct!.externalGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_phase_1: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ikePhase1),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ike_phase_2: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ikePhase2),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    internal_gateway: {
      value: cdktf.stringToHclTerraform(struct!.internalGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarGranularEncryptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarGranularEncryptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionMethod = this._encryptionMethod;
    }
    if (this._encryptionSuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSuite = this._encryptionSuite;
    }
    if (this._externalGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalGateway = this._externalGateway;
    }
    if (this._ikePhase1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePhase1 = this._ikePhase1;
    }
    if (this._ikePhase2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePhase2 = this._ikePhase2;
    }
    if (this._internalGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalGateway = this._internalGateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarGranularEncryptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionMethod = undefined;
      this._encryptionSuite = undefined;
      this._externalGateway = undefined;
      this._ikePhase1 = undefined;
      this._ikePhase2 = undefined;
      this._internalGateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionMethod = value.encryptionMethod;
      this._encryptionSuite = value.encryptionSuite;
      this._externalGateway = value.externalGateway;
      this._ikePhase1 = value.ikePhase1;
      this._ikePhase2 = value.ikePhase2;
      this._internalGateway = value.internalGateway;
    }
  }

  // encryption_method - computed: false, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }

  // encryption_suite - computed: false, optional: true, required: false
  private _encryptionSuite?: string; 
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }
  public set encryptionSuite(value: string) {
    this._encryptionSuite = value;
  }
  public resetEncryptionSuite() {
    this._encryptionSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSuiteInput() {
    return this._encryptionSuite;
  }

  // external_gateway - computed: false, optional: false, required: true
  private _externalGateway?: string; 
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }
  public set externalGateway(value: string) {
    this._externalGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGatewayInput() {
    return this._externalGateway;
  }

  // ike_phase_1 - computed: false, optional: true, required: false
  private _ikePhase1?: { [key: string]: string }; 
  public get ikePhase1() {
    return this.getStringMapAttribute('ike_phase_1');
  }
  public set ikePhase1(value: { [key: string]: string }) {
    this._ikePhase1 = value;
  }
  public resetIkePhase1() {
    this._ikePhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase1Input() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: false, optional: true, required: false
  private _ikePhase2?: { [key: string]: string }; 
  public get ikePhase2() {
    return this.getStringMapAttribute('ike_phase_2');
  }
  public set ikePhase2(value: { [key: string]: string }) {
    this._ikePhase2 = value;
  }
  public resetIkePhase2() {
    this._ikePhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase2Input() {
    return this._ikePhase2;
  }

  // internal_gateway - computed: false, optional: false, required: true
  private _internalGateway?: string; 
  public get internalGateway() {
    return this.getStringAttribute('internal_gateway');
  }
  public set internalGateway(value: string) {
    this._internalGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalGatewayInput() {
    return this._internalGateway;
  }
}

export class ManagementVpnCommunityStarGranularEncryptionsList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarGranularEncryptions[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarGranularEncryptionsOutputReference {
    return new ManagementVpnCommunityStarGranularEncryptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarMepDefaultPriorityRule {
  /**
  * Collection of first priority center gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#first_priority_center_gateways ManagementVpnCommunityStar#first_priority_center_gateways}
  */
  readonly firstPriorityCenterGateways?: string[];
  /**
  * Collection of second priority center gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#second_priority_center_gateways ManagementVpnCommunityStar#second_priority_center_gateways}
  */
  readonly secondPriorityCenterGateways?: string[];
  /**
  * Collection of third priority center gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#third_priority_center_gateways ManagementVpnCommunityStar#third_priority_center_gateways}
  */
  readonly thirdPriorityCenterGateways?: string[];
}

export function managementVpnCommunityStarMepDefaultPriorityRuleToTerraform(struct?: ManagementVpnCommunityStarMepDefaultPriorityRuleOutputReference | ManagementVpnCommunityStarMepDefaultPriorityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_priority_center_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.firstPriorityCenterGateways),
    second_priority_center_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondPriorityCenterGateways),
    third_priority_center_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.thirdPriorityCenterGateways),
  }
}


export function managementVpnCommunityStarMepDefaultPriorityRuleToHclTerraform(struct?: ManagementVpnCommunityStarMepDefaultPriorityRuleOutputReference | ManagementVpnCommunityStarMepDefaultPriorityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_priority_center_gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.firstPriorityCenterGateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    second_priority_center_gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondPriorityCenterGateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    third_priority_center_gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.thirdPriorityCenterGateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarMepDefaultPriorityRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVpnCommunityStarMepDefaultPriorityRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstPriorityCenterGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstPriorityCenterGateways = this._firstPriorityCenterGateways;
    }
    if (this._secondPriorityCenterGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondPriorityCenterGateways = this._secondPriorityCenterGateways;
    }
    if (this._thirdPriorityCenterGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPriorityCenterGateways = this._thirdPriorityCenterGateways;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarMepDefaultPriorityRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firstPriorityCenterGateways = undefined;
      this._secondPriorityCenterGateways = undefined;
      this._thirdPriorityCenterGateways = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firstPriorityCenterGateways = value.firstPriorityCenterGateways;
      this._secondPriorityCenterGateways = value.secondPriorityCenterGateways;
      this._thirdPriorityCenterGateways = value.thirdPriorityCenterGateways;
    }
  }

  // first_priority_center_gateways - computed: false, optional: true, required: false
  private _firstPriorityCenterGateways?: string[]; 
  public get firstPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('first_priority_center_gateways'));
  }
  public set firstPriorityCenterGateways(value: string[]) {
    this._firstPriorityCenterGateways = value;
  }
  public resetFirstPriorityCenterGateways() {
    this._firstPriorityCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstPriorityCenterGatewaysInput() {
    return this._firstPriorityCenterGateways;
  }

  // second_priority_center_gateways - computed: false, optional: true, required: false
  private _secondPriorityCenterGateways?: string[]; 
  public get secondPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('second_priority_center_gateways'));
  }
  public set secondPriorityCenterGateways(value: string[]) {
    this._secondPriorityCenterGateways = value;
  }
  public resetSecondPriorityCenterGateways() {
    this._secondPriorityCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondPriorityCenterGatewaysInput() {
    return this._secondPriorityCenterGateways;
  }

  // third_priority_center_gateways - computed: false, optional: true, required: false
  private _thirdPriorityCenterGateways?: string[]; 
  public get thirdPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('third_priority_center_gateways'));
  }
  public set thirdPriorityCenterGateways(value: string[]) {
    this._thirdPriorityCenterGateways = value;
  }
  public resetThirdPriorityCenterGateways() {
    this._thirdPriorityCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPriorityCenterGatewaysInput() {
    return this._thirdPriorityCenterGateways;
  }
}
export interface ManagementVpnCommunityStarMepExceptionPriorityRules {
  /**
  * Collection of first priority center gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#first_priority_center_gateways ManagementVpnCommunityStar#first_priority_center_gateways}
  */
  readonly firstPriorityCenterGateways?: string[];
  /**
  * Collection of satellite gateways to apply priority rules on identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#satellite_gateways ManagementVpnCommunityStar#satellite_gateways}
  */
  readonly satelliteGateways?: string[];
  /**
  * Collection of second priority center gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#second_priority_center_gateways ManagementVpnCommunityStar#second_priority_center_gateways}
  */
  readonly secondPriorityCenterGateways?: string[];
  /**
  * Collection of third priority center gateways identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#third_priority_center_gateways ManagementVpnCommunityStar#third_priority_center_gateways}
  */
  readonly thirdPriorityCenterGateways?: string[];
}

export function managementVpnCommunityStarMepExceptionPriorityRulesToTerraform(struct?: ManagementVpnCommunityStarMepExceptionPriorityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_priority_center_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.firstPriorityCenterGateways),
    satellite_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.satelliteGateways),
    second_priority_center_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondPriorityCenterGateways),
    third_priority_center_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.thirdPriorityCenterGateways),
  }
}


export function managementVpnCommunityStarMepExceptionPriorityRulesToHclTerraform(struct?: ManagementVpnCommunityStarMepExceptionPriorityRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_priority_center_gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.firstPriorityCenterGateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    satellite_gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.satelliteGateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    second_priority_center_gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secondPriorityCenterGateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    third_priority_center_gateways: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.thirdPriorityCenterGateways),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarMepExceptionPriorityRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarMepExceptionPriorityRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstPriorityCenterGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstPriorityCenterGateways = this._firstPriorityCenterGateways;
    }
    if (this._satelliteGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.satelliteGateways = this._satelliteGateways;
    }
    if (this._secondPriorityCenterGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondPriorityCenterGateways = this._secondPriorityCenterGateways;
    }
    if (this._thirdPriorityCenterGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPriorityCenterGateways = this._thirdPriorityCenterGateways;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarMepExceptionPriorityRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstPriorityCenterGateways = undefined;
      this._satelliteGateways = undefined;
      this._secondPriorityCenterGateways = undefined;
      this._thirdPriorityCenterGateways = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstPriorityCenterGateways = value.firstPriorityCenterGateways;
      this._satelliteGateways = value.satelliteGateways;
      this._secondPriorityCenterGateways = value.secondPriorityCenterGateways;
      this._thirdPriorityCenterGateways = value.thirdPriorityCenterGateways;
    }
  }

  // first_priority_center_gateways - computed: false, optional: true, required: false
  private _firstPriorityCenterGateways?: string[]; 
  public get firstPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('first_priority_center_gateways'));
  }
  public set firstPriorityCenterGateways(value: string[]) {
    this._firstPriorityCenterGateways = value;
  }
  public resetFirstPriorityCenterGateways() {
    this._firstPriorityCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstPriorityCenterGatewaysInput() {
    return this._firstPriorityCenterGateways;
  }

  // satellite_gateways - computed: false, optional: true, required: false
  private _satelliteGateways?: string[]; 
  public get satelliteGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('satellite_gateways'));
  }
  public set satelliteGateways(value: string[]) {
    this._satelliteGateways = value;
  }
  public resetSatelliteGateways() {
    this._satelliteGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satelliteGatewaysInput() {
    return this._satelliteGateways;
  }

  // second_priority_center_gateways - computed: false, optional: true, required: false
  private _secondPriorityCenterGateways?: string[]; 
  public get secondPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('second_priority_center_gateways'));
  }
  public set secondPriorityCenterGateways(value: string[]) {
    this._secondPriorityCenterGateways = value;
  }
  public resetSecondPriorityCenterGateways() {
    this._secondPriorityCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondPriorityCenterGatewaysInput() {
    return this._secondPriorityCenterGateways;
  }

  // third_priority_center_gateways - computed: false, optional: true, required: false
  private _thirdPriorityCenterGateways?: string[]; 
  public get thirdPriorityCenterGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('third_priority_center_gateways'));
  }
  public set thirdPriorityCenterGateways(value: string[]) {
    this._thirdPriorityCenterGateways = value;
  }
  public resetThirdPriorityCenterGateways() {
    this._thirdPriorityCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPriorityCenterGatewaysInput() {
    return this._thirdPriorityCenterGateways;
  }
}

export class ManagementVpnCommunityStarMepExceptionPriorityRulesList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarMepExceptionPriorityRules[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarMepExceptionPriorityRulesOutputReference {
    return new ManagementVpnCommunityStarMepExceptionPriorityRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarMep {
  /**
  * Enable center gateways as Multiple Entry Points.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#enabled ManagementVpnCommunityStar#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The method by which the final entry point gateway will be chosen when the chosen mechanism returns more than one optional entry point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#entry_point_final_selection_mechanism ManagementVpnCommunityStar#entry_point_final_selection_mechanism}
  */
  readonly entryPointFinalSelectionMechanism?: string;
  /**
  * The method by which the entry point gateway will be chosen from the gateways in the center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#entry_point_selection_mechanism ManagementVpnCommunityStar#entry_point_selection_mechanism}
  */
  readonly entryPointSelectionMechanism?: string;
  /**
  * Tracking option for the MEP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#tracking ManagementVpnCommunityStar#tracking}
  */
  readonly tracking?: string;
  /**
  * default_priority_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#default_priority_rule ManagementVpnCommunityStar#default_priority_rule}
  */
  readonly defaultPriorityRule?: ManagementVpnCommunityStarMepDefaultPriorityRule;
  /**
  * exception_priority_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#exception_priority_rules ManagementVpnCommunityStar#exception_priority_rules}
  */
  readonly exceptionPriorityRules?: ManagementVpnCommunityStarMepExceptionPriorityRules[] | cdktf.IResolvable;
}

export function managementVpnCommunityStarMepToTerraform(struct?: ManagementVpnCommunityStarMepOutputReference | ManagementVpnCommunityStarMep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    entry_point_final_selection_mechanism: cdktf.stringToTerraform(struct!.entryPointFinalSelectionMechanism),
    entry_point_selection_mechanism: cdktf.stringToTerraform(struct!.entryPointSelectionMechanism),
    tracking: cdktf.stringToTerraform(struct!.tracking),
    default_priority_rule: managementVpnCommunityStarMepDefaultPriorityRuleToTerraform(struct!.defaultPriorityRule),
    exception_priority_rules: cdktf.listMapper(managementVpnCommunityStarMepExceptionPriorityRulesToTerraform, true)(struct!.exceptionPriorityRules),
  }
}


export function managementVpnCommunityStarMepToHclTerraform(struct?: ManagementVpnCommunityStarMepOutputReference | ManagementVpnCommunityStarMep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entry_point_final_selection_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.entryPointFinalSelectionMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_point_selection_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.entryPointSelectionMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking: {
      value: cdktf.stringToHclTerraform(struct!.tracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_priority_rule: {
      value: managementVpnCommunityStarMepDefaultPriorityRuleToHclTerraform(struct!.defaultPriorityRule),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVpnCommunityStarMepDefaultPriorityRuleList",
    },
    exception_priority_rules: {
      value: cdktf.listMapperHcl(managementVpnCommunityStarMepExceptionPriorityRulesToHclTerraform, true)(struct!.exceptionPriorityRules),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVpnCommunityStarMepExceptionPriorityRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarMepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVpnCommunityStarMep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._entryPointFinalSelectionMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPointFinalSelectionMechanism = this._entryPointFinalSelectionMechanism;
    }
    if (this._entryPointSelectionMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPointSelectionMechanism = this._entryPointSelectionMechanism;
    }
    if (this._tracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracking = this._tracking;
    }
    if (this._defaultPriorityRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPriorityRule = this._defaultPriorityRule?.internalValue;
    }
    if (this._exceptionPriorityRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptionPriorityRules = this._exceptionPriorityRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarMep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._entryPointFinalSelectionMechanism = undefined;
      this._entryPointSelectionMechanism = undefined;
      this._tracking = undefined;
      this._defaultPriorityRule.internalValue = undefined;
      this._exceptionPriorityRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._entryPointFinalSelectionMechanism = value.entryPointFinalSelectionMechanism;
      this._entryPointSelectionMechanism = value.entryPointSelectionMechanism;
      this._tracking = value.tracking;
      this._defaultPriorityRule.internalValue = value.defaultPriorityRule;
      this._exceptionPriorityRules.internalValue = value.exceptionPriorityRules;
    }
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

  // entry_point_final_selection_mechanism - computed: false, optional: true, required: false
  private _entryPointFinalSelectionMechanism?: string; 
  public get entryPointFinalSelectionMechanism() {
    return this.getStringAttribute('entry_point_final_selection_mechanism');
  }
  public set entryPointFinalSelectionMechanism(value: string) {
    this._entryPointFinalSelectionMechanism = value;
  }
  public resetEntryPointFinalSelectionMechanism() {
    this._entryPointFinalSelectionMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointFinalSelectionMechanismInput() {
    return this._entryPointFinalSelectionMechanism;
  }

  // entry_point_selection_mechanism - computed: false, optional: true, required: false
  private _entryPointSelectionMechanism?: string; 
  public get entryPointSelectionMechanism() {
    return this.getStringAttribute('entry_point_selection_mechanism');
  }
  public set entryPointSelectionMechanism(value: string) {
    this._entryPointSelectionMechanism = value;
  }
  public resetEntryPointSelectionMechanism() {
    this._entryPointSelectionMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointSelectionMechanismInput() {
    return this._entryPointSelectionMechanism;
  }

  // tracking - computed: false, optional: true, required: false
  private _tracking?: string; 
  public get tracking() {
    return this.getStringAttribute('tracking');
  }
  public set tracking(value: string) {
    this._tracking = value;
  }
  public resetTracking() {
    this._tracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingInput() {
    return this._tracking;
  }

  // default_priority_rule - computed: false, optional: true, required: false
  private _defaultPriorityRule = new ManagementVpnCommunityStarMepDefaultPriorityRuleOutputReference(this, "default_priority_rule");
  public get defaultPriorityRule() {
    return this._defaultPriorityRule;
  }
  public putDefaultPriorityRule(value: ManagementVpnCommunityStarMepDefaultPriorityRule) {
    this._defaultPriorityRule.internalValue = value;
  }
  public resetDefaultPriorityRule() {
    this._defaultPriorityRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPriorityRuleInput() {
    return this._defaultPriorityRule.internalValue;
  }

  // exception_priority_rules - computed: false, optional: true, required: false
  private _exceptionPriorityRules = new ManagementVpnCommunityStarMepExceptionPriorityRulesList(this, "exception_priority_rules", false);
  public get exceptionPriorityRules() {
    return this._exceptionPriorityRules;
  }
  public putExceptionPriorityRules(value: ManagementVpnCommunityStarMepExceptionPriorityRules[] | cdktf.IResolvable) {
    this._exceptionPriorityRules.internalValue = value;
  }
  public resetExceptionPriorityRules() {
    this._exceptionPriorityRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionPriorityRulesInput() {
    return this._exceptionPriorityRules.internalValue;
  }
}
export interface ManagementVpnCommunityStarOverrideInterfacesInterfaces {
  /**
  * The name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#interface_name ManagementVpnCommunityStar#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * The IP address of the next hop.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#next_hop_ip ManagementVpnCommunityStar#next_hop_ip}
  */
  readonly nextHopIp?: string;
  /**
  * Priority of a 'Backup' interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#priority ManagementVpnCommunityStar#priority}
  */
  readonly priority?: number;
  /**
  * Interface redundancy mode (Active/Backup).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#redundancy_mode ManagementVpnCommunityStar#redundancy_mode}
  */
  readonly redundancyMode?: string;
  /**
  * The NATed IPv4 address that hides the source IPv4 address of outgoing connections (applies only to IPv4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#static_nat_ip ManagementVpnCommunityStar#static_nat_ip}
  */
  readonly staticNatIp?: string;
}

export function managementVpnCommunityStarOverrideInterfacesInterfacesToTerraform(struct?: ManagementVpnCommunityStarOverrideInterfacesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    next_hop_ip: cdktf.stringToTerraform(struct!.nextHopIp),
    priority: cdktf.numberToTerraform(struct!.priority),
    redundancy_mode: cdktf.stringToTerraform(struct!.redundancyMode),
    static_nat_ip: cdktf.stringToTerraform(struct!.staticNatIp),
  }
}


export function managementVpnCommunityStarOverrideInterfacesInterfacesToHclTerraform(struct?: ManagementVpnCommunityStarOverrideInterfacesInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop_ip: {
      value: cdktf.stringToHclTerraform(struct!.nextHopIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redundancy_mode: {
      value: cdktf.stringToHclTerraform(struct!.redundancyMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_nat_ip: {
      value: cdktf.stringToHclTerraform(struct!.staticNatIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarOverrideInterfacesInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarOverrideInterfacesInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._nextHopIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHopIp = this._nextHopIp;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._redundancyMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redundancyMode = this._redundancyMode;
    }
    if (this._staticNatIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatIp = this._staticNatIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarOverrideInterfacesInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._nextHopIp = undefined;
      this._priority = undefined;
      this._redundancyMode = undefined;
      this._staticNatIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._nextHopIp = value.nextHopIp;
      this._priority = value.priority;
      this._redundancyMode = value.redundancyMode;
      this._staticNatIp = value.staticNatIp;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // next_hop_ip - computed: false, optional: true, required: false
  private _nextHopIp?: string; 
  public get nextHopIp() {
    return this.getStringAttribute('next_hop_ip');
  }
  public set nextHopIp(value: string) {
    this._nextHopIp = value;
  }
  public resetNextHopIp() {
    this._nextHopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopIpInput() {
    return this._nextHopIp;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // redundancy_mode - computed: false, optional: true, required: false
  private _redundancyMode?: string; 
  public get redundancyMode() {
    return this.getStringAttribute('redundancy_mode');
  }
  public set redundancyMode(value: string) {
    this._redundancyMode = value;
  }
  public resetRedundancyMode() {
    this._redundancyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundancyModeInput() {
    return this._redundancyMode;
  }

  // static_nat_ip - computed: false, optional: true, required: false
  private _staticNatIp?: string; 
  public get staticNatIp() {
    return this.getStringAttribute('static_nat_ip');
  }
  public set staticNatIp(value: string) {
    this._staticNatIp = value;
  }
  public resetStaticNatIp() {
    this._staticNatIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatIpInput() {
    return this._staticNatIp;
  }
}

export class ManagementVpnCommunityStarOverrideInterfacesInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarOverrideInterfacesInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarOverrideInterfacesInterfacesOutputReference {
    return new ManagementVpnCommunityStarOverrideInterfacesInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarOverrideInterfaces {
  /**
  * Participant VPN Peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#gateway ManagementVpnCommunityStar#gateway}
  */
  readonly gateway?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#interfaces ManagementVpnCommunityStar#interfaces}
  */
  readonly interfaces: ManagementVpnCommunityStarOverrideInterfacesInterfaces[] | cdktf.IResolvable;
}

export function managementVpnCommunityStarOverrideInterfacesToTerraform(struct?: ManagementVpnCommunityStarOverrideInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    interfaces: cdktf.listMapper(managementVpnCommunityStarOverrideInterfacesInterfacesToTerraform, true)(struct!.interfaces),
  }
}


export function managementVpnCommunityStarOverrideInterfacesToHclTerraform(struct?: ManagementVpnCommunityStarOverrideInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.listMapperHcl(managementVpnCommunityStarOverrideInterfacesInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVpnCommunityStarOverrideInterfacesInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarOverrideInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarOverrideInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarOverrideInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._interfaces.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._interfaces.internalValue = value.interfaces;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new ManagementVpnCommunityStarOverrideInterfacesInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ManagementVpnCommunityStarOverrideInterfacesInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }
}

export class ManagementVpnCommunityStarOverrideInterfacesList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarOverrideInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarOverrideInterfacesOutputReference {
    return new ManagementVpnCommunityStarOverrideInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarOverrideVpnDomains {
  /**
  * Participant gateway in override VPN domain identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#gateway ManagementVpnCommunityStar#gateway}
  */
  readonly gateway?: string;
  /**
  * VPN domain network identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#vpn_domain ManagementVpnCommunityStar#vpn_domain}
  */
  readonly vpnDomain?: string;
}

export function managementVpnCommunityStarOverrideVpnDomainsToTerraform(struct?: ManagementVpnCommunityStarOverrideVpnDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    vpn_domain: cdktf.stringToTerraform(struct!.vpnDomain),
  }
}


export function managementVpnCommunityStarOverrideVpnDomainsToHclTerraform(struct?: ManagementVpnCommunityStarOverrideVpnDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_domain: {
      value: cdktf.stringToHclTerraform(struct!.vpnDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarOverrideVpnDomainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarOverrideVpnDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._vpnDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnDomain = this._vpnDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarOverrideVpnDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._vpnDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._vpnDomain = value.vpnDomain;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // vpn_domain - computed: false, optional: true, required: false
  private _vpnDomain?: string; 
  public get vpnDomain() {
    return this.getStringAttribute('vpn_domain');
  }
  public set vpnDomain(value: string) {
    this._vpnDomain = value;
  }
  public resetVpnDomain() {
    this._vpnDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnDomainInput() {
    return this._vpnDomain;
  }
}

export class ManagementVpnCommunityStarOverrideVpnDomainsList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarOverrideVpnDomains[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarOverrideVpnDomainsOutputReference {
    return new ManagementVpnCommunityStarOverrideVpnDomainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarPermanentTunnelsGateways {
  /**
  * Gateway to set all is tunnels to permanent with specified track options.<br> Identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#gateway ManagementVpnCommunityStar#gateway}
  */
  readonly gateway?: string;
  /**
  * Gateway tunnel down track option. Relevant only if the track-options is set to 'override track options'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#override_tunnel_down_track ManagementVpnCommunityStar#override_tunnel_down_track}
  */
  readonly overrideTunnelDownTrack?: string;
  /**
  * Gateway tunnel up track option. Relevant only if the track-options is set to 'override track options'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#override_tunnel_up_track ManagementVpnCommunityStar#override_tunnel_up_track}
  */
  readonly overrideTunnelUpTrack?: string;
  /**
  * Indicates whether to use the community track options or to override track options for the permanent tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#track_options ManagementVpnCommunityStar#track_options}
  */
  readonly trackOptions?: string;
}

export function managementVpnCommunityStarPermanentTunnelsGatewaysToTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    override_tunnel_down_track: cdktf.stringToTerraform(struct!.overrideTunnelDownTrack),
    override_tunnel_up_track: cdktf.stringToTerraform(struct!.overrideTunnelUpTrack),
    track_options: cdktf.stringToTerraform(struct!.trackOptions),
  }
}


export function managementVpnCommunityStarPermanentTunnelsGatewaysToHclTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsGateways | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_tunnel_down_track: {
      value: cdktf.stringToHclTerraform(struct!.overrideTunnelDownTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_tunnel_up_track: {
      value: cdktf.stringToHclTerraform(struct!.overrideTunnelUpTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_options: {
      value: cdktf.stringToHclTerraform(struct!.trackOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarPermanentTunnelsGatewaysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarPermanentTunnelsGateways | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._overrideTunnelDownTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTunnelDownTrack = this._overrideTunnelDownTrack;
    }
    if (this._overrideTunnelUpTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTunnelUpTrack = this._overrideTunnelUpTrack;
    }
    if (this._trackOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOptions = this._trackOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarPermanentTunnelsGateways | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._overrideTunnelDownTrack = undefined;
      this._overrideTunnelUpTrack = undefined;
      this._trackOptions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._overrideTunnelDownTrack = value.overrideTunnelDownTrack;
      this._overrideTunnelUpTrack = value.overrideTunnelUpTrack;
      this._trackOptions = value.trackOptions;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // override_tunnel_down_track - computed: false, optional: true, required: false
  private _overrideTunnelDownTrack?: string; 
  public get overrideTunnelDownTrack() {
    return this.getStringAttribute('override_tunnel_down_track');
  }
  public set overrideTunnelDownTrack(value: string) {
    this._overrideTunnelDownTrack = value;
  }
  public resetOverrideTunnelDownTrack() {
    this._overrideTunnelDownTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTunnelDownTrackInput() {
    return this._overrideTunnelDownTrack;
  }

  // override_tunnel_up_track - computed: false, optional: true, required: false
  private _overrideTunnelUpTrack?: string; 
  public get overrideTunnelUpTrack() {
    return this.getStringAttribute('override_tunnel_up_track');
  }
  public set overrideTunnelUpTrack(value: string) {
    this._overrideTunnelUpTrack = value;
  }
  public resetOverrideTunnelUpTrack() {
    this._overrideTunnelUpTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTunnelUpTrackInput() {
    return this._overrideTunnelUpTrack;
  }

  // track_options - computed: false, optional: true, required: false
  private _trackOptions?: string; 
  public get trackOptions() {
    return this.getStringAttribute('track_options');
  }
  public set trackOptions(value: string) {
    this._trackOptions = value;
  }
  public resetTrackOptions() {
    this._trackOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOptionsInput() {
    return this._trackOptions;
  }
}

export class ManagementVpnCommunityStarPermanentTunnelsGatewaysList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarPermanentTunnelsGateways[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarPermanentTunnelsGatewaysOutputReference {
    return new ManagementVpnCommunityStarPermanentTunnelsGatewaysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarPermanentTunnelsRim {
  /**
  * Indicates whether to enable automatic Route Injection Mechanism on center gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#enable_on_center_gateways ManagementVpnCommunityStar#enable_on_center_gateways}
  */
  readonly enableOnCenterGateways?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to enable automatic Route Injection Mechanism on satellite gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#enable_on_satellite_gateways ManagementVpnCommunityStar#enable_on_satellite_gateways}
  */
  readonly enableOnSatelliteGateways?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether Route Injection Mechanism is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#enabled ManagementVpnCommunityStar#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Route injection track method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#route_injection_track ManagementVpnCommunityStar#route_injection_track}
  */
  readonly routeInjectionTrack?: string;
}

export function managementVpnCommunityStarPermanentTunnelsRimToTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsRimOutputReference | ManagementVpnCommunityStarPermanentTunnelsRim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_on_center_gateways: cdktf.booleanToTerraform(struct!.enableOnCenterGateways),
    enable_on_satellite_gateways: cdktf.booleanToTerraform(struct!.enableOnSatelliteGateways),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    route_injection_track: cdktf.stringToTerraform(struct!.routeInjectionTrack),
  }
}


export function managementVpnCommunityStarPermanentTunnelsRimToHclTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsRimOutputReference | ManagementVpnCommunityStarPermanentTunnelsRim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_on_center_gateways: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnCenterGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_on_satellite_gateways: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnSatelliteGateways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_injection_track: {
      value: cdktf.stringToHclTerraform(struct!.routeInjectionTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarPermanentTunnelsRimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVpnCommunityStarPermanentTunnelsRim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOnCenterGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnCenterGateways = this._enableOnCenterGateways;
    }
    if (this._enableOnSatelliteGateways !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnSatelliteGateways = this._enableOnSatelliteGateways;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._routeInjectionTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeInjectionTrack = this._routeInjectionTrack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarPermanentTunnelsRim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOnCenterGateways = undefined;
      this._enableOnSatelliteGateways = undefined;
      this._enabled = undefined;
      this._routeInjectionTrack = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOnCenterGateways = value.enableOnCenterGateways;
      this._enableOnSatelliteGateways = value.enableOnSatelliteGateways;
      this._enabled = value.enabled;
      this._routeInjectionTrack = value.routeInjectionTrack;
    }
  }

  // enable_on_center_gateways - computed: false, optional: true, required: false
  private _enableOnCenterGateways?: boolean | cdktf.IResolvable; 
  public get enableOnCenterGateways() {
    return this.getBooleanAttribute('enable_on_center_gateways');
  }
  public set enableOnCenterGateways(value: boolean | cdktf.IResolvable) {
    this._enableOnCenterGateways = value;
  }
  public resetEnableOnCenterGateways() {
    this._enableOnCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnCenterGatewaysInput() {
    return this._enableOnCenterGateways;
  }

  // enable_on_satellite_gateways - computed: false, optional: true, required: false
  private _enableOnSatelliteGateways?: boolean | cdktf.IResolvable; 
  public get enableOnSatelliteGateways() {
    return this.getBooleanAttribute('enable_on_satellite_gateways');
  }
  public set enableOnSatelliteGateways(value: boolean | cdktf.IResolvable) {
    this._enableOnSatelliteGateways = value;
  }
  public resetEnableOnSatelliteGateways() {
    this._enableOnSatelliteGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnSatelliteGatewaysInput() {
    return this._enableOnSatelliteGateways;
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

  // route_injection_track - computed: false, optional: true, required: false
  private _routeInjectionTrack?: string; 
  public get routeInjectionTrack() {
    return this.getStringAttribute('route_injection_track');
  }
  public set routeInjectionTrack(value: string) {
    this._routeInjectionTrack = value;
  }
  public resetRouteInjectionTrack() {
    this._routeInjectionTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInjectionTrackInput() {
    return this._routeInjectionTrack;
  }
}
export interface ManagementVpnCommunityStarPermanentTunnelsTunnels {
  /**
  * First tunnel endpoint (center gateway). Identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#first_tunnel_endpoint ManagementVpnCommunityStar#first_tunnel_endpoint}
  */
  readonly firstTunnelEndpoint?: string;
  /**
  * Gateway tunnel down track option. Relevant only if the track-options is set to 'override track options'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#override_tunnel_down_track ManagementVpnCommunityStar#override_tunnel_down_track}
  */
  readonly overrideTunnelDownTrack?: string;
  /**
  * Gateway tunnel up track option. Relevant only if the track-options is set to 'override track options'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#override_tunnel_up_track ManagementVpnCommunityStar#override_tunnel_up_track}
  */
  readonly overrideTunnelUpTrack?: string;
  /**
  * Second tunnel endpoint (center gateway for meshed VPN community and satellitegateway for star VPN community).  Identified by name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#second_tunnel_endpoint ManagementVpnCommunityStar#second_tunnel_endpoint}
  */
  readonly secondTunnelEndpoint?: string;
  /**
  * Indicates whether to use the community track options or to override track options for the permanent tunnels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#track_options ManagementVpnCommunityStar#track_options}
  */
  readonly trackOptions?: string;
}

export function managementVpnCommunityStarPermanentTunnelsTunnelsToTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_tunnel_endpoint: cdktf.stringToTerraform(struct!.firstTunnelEndpoint),
    override_tunnel_down_track: cdktf.stringToTerraform(struct!.overrideTunnelDownTrack),
    override_tunnel_up_track: cdktf.stringToTerraform(struct!.overrideTunnelUpTrack),
    second_tunnel_endpoint: cdktf.stringToTerraform(struct!.secondTunnelEndpoint),
    track_options: cdktf.stringToTerraform(struct!.trackOptions),
  }
}


export function managementVpnCommunityStarPermanentTunnelsTunnelsToHclTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsTunnels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_tunnel_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.firstTunnelEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_tunnel_down_track: {
      value: cdktf.stringToHclTerraform(struct!.overrideTunnelDownTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_tunnel_up_track: {
      value: cdktf.stringToHclTerraform(struct!.overrideTunnelUpTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    second_tunnel_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.secondTunnelEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_options: {
      value: cdktf.stringToHclTerraform(struct!.trackOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarPermanentTunnelsTunnelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarPermanentTunnelsTunnels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstTunnelEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstTunnelEndpoint = this._firstTunnelEndpoint;
    }
    if (this._overrideTunnelDownTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTunnelDownTrack = this._overrideTunnelDownTrack;
    }
    if (this._overrideTunnelUpTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideTunnelUpTrack = this._overrideTunnelUpTrack;
    }
    if (this._secondTunnelEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondTunnelEndpoint = this._secondTunnelEndpoint;
    }
    if (this._trackOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackOptions = this._trackOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarPermanentTunnelsTunnels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstTunnelEndpoint = undefined;
      this._overrideTunnelDownTrack = undefined;
      this._overrideTunnelUpTrack = undefined;
      this._secondTunnelEndpoint = undefined;
      this._trackOptions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstTunnelEndpoint = value.firstTunnelEndpoint;
      this._overrideTunnelDownTrack = value.overrideTunnelDownTrack;
      this._overrideTunnelUpTrack = value.overrideTunnelUpTrack;
      this._secondTunnelEndpoint = value.secondTunnelEndpoint;
      this._trackOptions = value.trackOptions;
    }
  }

  // first_tunnel_endpoint - computed: false, optional: true, required: false
  private _firstTunnelEndpoint?: string; 
  public get firstTunnelEndpoint() {
    return this.getStringAttribute('first_tunnel_endpoint');
  }
  public set firstTunnelEndpoint(value: string) {
    this._firstTunnelEndpoint = value;
  }
  public resetFirstTunnelEndpoint() {
    this._firstTunnelEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstTunnelEndpointInput() {
    return this._firstTunnelEndpoint;
  }

  // override_tunnel_down_track - computed: false, optional: true, required: false
  private _overrideTunnelDownTrack?: string; 
  public get overrideTunnelDownTrack() {
    return this.getStringAttribute('override_tunnel_down_track');
  }
  public set overrideTunnelDownTrack(value: string) {
    this._overrideTunnelDownTrack = value;
  }
  public resetOverrideTunnelDownTrack() {
    this._overrideTunnelDownTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTunnelDownTrackInput() {
    return this._overrideTunnelDownTrack;
  }

  // override_tunnel_up_track - computed: false, optional: true, required: false
  private _overrideTunnelUpTrack?: string; 
  public get overrideTunnelUpTrack() {
    return this.getStringAttribute('override_tunnel_up_track');
  }
  public set overrideTunnelUpTrack(value: string) {
    this._overrideTunnelUpTrack = value;
  }
  public resetOverrideTunnelUpTrack() {
    this._overrideTunnelUpTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTunnelUpTrackInput() {
    return this._overrideTunnelUpTrack;
  }

  // second_tunnel_endpoint - computed: false, optional: true, required: false
  private _secondTunnelEndpoint?: string; 
  public get secondTunnelEndpoint() {
    return this.getStringAttribute('second_tunnel_endpoint');
  }
  public set secondTunnelEndpoint(value: string) {
    this._secondTunnelEndpoint = value;
  }
  public resetSecondTunnelEndpoint() {
    this._secondTunnelEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondTunnelEndpointInput() {
    return this._secondTunnelEndpoint;
  }

  // track_options - computed: false, optional: true, required: false
  private _trackOptions?: string; 
  public get trackOptions() {
    return this.getStringAttribute('track_options');
  }
  public set trackOptions(value: string) {
    this._trackOptions = value;
  }
  public resetTrackOptions() {
    this._trackOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackOptionsInput() {
    return this._trackOptions;
  }
}

export class ManagementVpnCommunityStarPermanentTunnelsTunnelsList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarPermanentTunnelsTunnels[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarPermanentTunnelsTunnelsOutputReference {
    return new ManagementVpnCommunityStarPermanentTunnelsTunnelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarPermanentTunnels {
  /**
  * Indicates which tunnels to set as permanent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#set_permanent_tunnels ManagementVpnCommunityStar#set_permanent_tunnels}
  */
  readonly setPermanentTunnels?: string;
  /**
  * VPN community permanent tunnels down track option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#tunnel_down_track ManagementVpnCommunityStar#tunnel_down_track}
  */
  readonly tunnelDownTrack?: string;
  /**
  * Permanent tunnels up track option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#tunnel_up_track ManagementVpnCommunityStar#tunnel_up_track}
  */
  readonly tunnelUpTrack?: string;
  /**
  * gateways block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#gateways ManagementVpnCommunityStar#gateways}
  */
  readonly gateways?: ManagementVpnCommunityStarPermanentTunnelsGateways[] | cdktf.IResolvable;
  /**
  * rim block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#rim ManagementVpnCommunityStar#rim}
  */
  readonly rim?: ManagementVpnCommunityStarPermanentTunnelsRim;
  /**
  * tunnels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#tunnels ManagementVpnCommunityStar#tunnels}
  */
  readonly tunnels?: ManagementVpnCommunityStarPermanentTunnelsTunnels[] | cdktf.IResolvable;
}

export function managementVpnCommunityStarPermanentTunnelsToTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsOutputReference | ManagementVpnCommunityStarPermanentTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    set_permanent_tunnels: cdktf.stringToTerraform(struct!.setPermanentTunnels),
    tunnel_down_track: cdktf.stringToTerraform(struct!.tunnelDownTrack),
    tunnel_up_track: cdktf.stringToTerraform(struct!.tunnelUpTrack),
    gateways: cdktf.listMapper(managementVpnCommunityStarPermanentTunnelsGatewaysToTerraform, true)(struct!.gateways),
    rim: managementVpnCommunityStarPermanentTunnelsRimToTerraform(struct!.rim),
    tunnels: cdktf.listMapper(managementVpnCommunityStarPermanentTunnelsTunnelsToTerraform, true)(struct!.tunnels),
  }
}


export function managementVpnCommunityStarPermanentTunnelsToHclTerraform(struct?: ManagementVpnCommunityStarPermanentTunnelsOutputReference | ManagementVpnCommunityStarPermanentTunnels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    set_permanent_tunnels: {
      value: cdktf.stringToHclTerraform(struct!.setPermanentTunnels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_down_track: {
      value: cdktf.stringToHclTerraform(struct!.tunnelDownTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_up_track: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUpTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateways: {
      value: cdktf.listMapperHcl(managementVpnCommunityStarPermanentTunnelsGatewaysToHclTerraform, true)(struct!.gateways),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVpnCommunityStarPermanentTunnelsGatewaysList",
    },
    rim: {
      value: managementVpnCommunityStarPermanentTunnelsRimToHclTerraform(struct!.rim),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVpnCommunityStarPermanentTunnelsRimList",
    },
    tunnels: {
      value: cdktf.listMapperHcl(managementVpnCommunityStarPermanentTunnelsTunnelsToHclTerraform, true)(struct!.tunnels),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementVpnCommunityStarPermanentTunnelsTunnelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarPermanentTunnelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVpnCommunityStarPermanentTunnels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._setPermanentTunnels !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPermanentTunnels = this._setPermanentTunnels;
    }
    if (this._tunnelDownTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDownTrack = this._tunnelDownTrack;
    }
    if (this._tunnelUpTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUpTrack = this._tunnelUpTrack;
    }
    if (this._gateways?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateways = this._gateways?.internalValue;
    }
    if (this._rim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rim = this._rim?.internalValue;
    }
    if (this._tunnels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnels = this._tunnels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarPermanentTunnels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._setPermanentTunnels = undefined;
      this._tunnelDownTrack = undefined;
      this._tunnelUpTrack = undefined;
      this._gateways.internalValue = undefined;
      this._rim.internalValue = undefined;
      this._tunnels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._setPermanentTunnels = value.setPermanentTunnels;
      this._tunnelDownTrack = value.tunnelDownTrack;
      this._tunnelUpTrack = value.tunnelUpTrack;
      this._gateways.internalValue = value.gateways;
      this._rim.internalValue = value.rim;
      this._tunnels.internalValue = value.tunnels;
    }
  }

  // set_permanent_tunnels - computed: false, optional: true, required: false
  private _setPermanentTunnels?: string; 
  public get setPermanentTunnels() {
    return this.getStringAttribute('set_permanent_tunnels');
  }
  public set setPermanentTunnels(value: string) {
    this._setPermanentTunnels = value;
  }
  public resetSetPermanentTunnels() {
    this._setPermanentTunnels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPermanentTunnelsInput() {
    return this._setPermanentTunnels;
  }

  // tunnel_down_track - computed: false, optional: true, required: false
  private _tunnelDownTrack?: string; 
  public get tunnelDownTrack() {
    return this.getStringAttribute('tunnel_down_track');
  }
  public set tunnelDownTrack(value: string) {
    this._tunnelDownTrack = value;
  }
  public resetTunnelDownTrack() {
    this._tunnelDownTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDownTrackInput() {
    return this._tunnelDownTrack;
  }

  // tunnel_up_track - computed: false, optional: true, required: false
  private _tunnelUpTrack?: string; 
  public get tunnelUpTrack() {
    return this.getStringAttribute('tunnel_up_track');
  }
  public set tunnelUpTrack(value: string) {
    this._tunnelUpTrack = value;
  }
  public resetTunnelUpTrack() {
    this._tunnelUpTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUpTrackInput() {
    return this._tunnelUpTrack;
  }

  // gateways - computed: false, optional: true, required: false
  private _gateways = new ManagementVpnCommunityStarPermanentTunnelsGatewaysList(this, "gateways", false);
  public get gateways() {
    return this._gateways;
  }
  public putGateways(value: ManagementVpnCommunityStarPermanentTunnelsGateways[] | cdktf.IResolvable) {
    this._gateways.internalValue = value;
  }
  public resetGateways() {
    this._gateways.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaysInput() {
    return this._gateways.internalValue;
  }

  // rim - computed: false, optional: true, required: false
  private _rim = new ManagementVpnCommunityStarPermanentTunnelsRimOutputReference(this, "rim");
  public get rim() {
    return this._rim;
  }
  public putRim(value: ManagementVpnCommunityStarPermanentTunnelsRim) {
    this._rim.internalValue = value;
  }
  public resetRim() {
    this._rim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rimInput() {
    return this._rim.internalValue;
  }

  // tunnels - computed: false, optional: true, required: false
  private _tunnels = new ManagementVpnCommunityStarPermanentTunnelsTunnelsList(this, "tunnels", false);
  public get tunnels() {
    return this._tunnels;
  }
  public putTunnels(value: ManagementVpnCommunityStarPermanentTunnelsTunnels[] | cdktf.IResolvable) {
    this._tunnels.internalValue = value;
  }
  public resetTunnels() {
    this._tunnels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelsInput() {
    return this._tunnels.internalValue;
  }
}
export interface ManagementVpnCommunityStarSharedSecrets {
  /**
  * External gateway identified by the name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#external_gateway ManagementVpnCommunityStar#external_gateway}
  */
  readonly externalGateway?: string;
  /**
  * Shared secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#shared_secret ManagementVpnCommunityStar#shared_secret}
  */
  readonly sharedSecret?: string;
}

export function managementVpnCommunityStarSharedSecretsToTerraform(struct?: ManagementVpnCommunityStarSharedSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_gateway: cdktf.stringToTerraform(struct!.externalGateway),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
  }
}


export function managementVpnCommunityStarSharedSecretsToHclTerraform(struct?: ManagementVpnCommunityStarSharedSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_gateway: {
      value: cdktf.stringToHclTerraform(struct!.externalGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarSharedSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementVpnCommunityStarSharedSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalGateway = this._externalGateway;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarSharedSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalGateway = undefined;
      this._sharedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalGateway = value.externalGateway;
      this._sharedSecret = value.sharedSecret;
    }
  }

  // external_gateway - computed: false, optional: true, required: false
  private _externalGateway?: string; 
  public get externalGateway() {
    return this.getStringAttribute('external_gateway');
  }
  public set externalGateway(value: string) {
    this._externalGateway = value;
  }
  public resetExternalGateway() {
    this._externalGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalGatewayInput() {
    return this._externalGateway;
  }

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }
}

export class ManagementVpnCommunityStarSharedSecretsList extends cdktf.ComplexList {
  public internalValue? : ManagementVpnCommunityStarSharedSecrets[] | cdktf.IResolvable

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
  public get(index: number): ManagementVpnCommunityStarSharedSecretsOutputReference {
    return new ManagementVpnCommunityStarSharedSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementVpnCommunityStarWireMode {
  /**
  * Allow members to route uninspected encrypted traffic in VPN routing configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#allow_uninspected_encrypted_routing ManagementVpnCommunityStar#allow_uninspected_encrypted_routing}
  */
  readonly allowUninspectedEncryptedRouting?: boolean | cdktf.IResolvable;
  /**
  * Allow uninspected encrypted traffic between Wire mode interfaces of this Community members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#allow_uninspected_encrypted_traffic ManagementVpnCommunityStar#allow_uninspected_encrypted_traffic}
  */
  readonly allowUninspectedEncryptedTraffic?: boolean | cdktf.IResolvable;
}

export function managementVpnCommunityStarWireModeToTerraform(struct?: ManagementVpnCommunityStarWireModeOutputReference | ManagementVpnCommunityStarWireMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_uninspected_encrypted_routing: cdktf.booleanToTerraform(struct!.allowUninspectedEncryptedRouting),
    allow_uninspected_encrypted_traffic: cdktf.booleanToTerraform(struct!.allowUninspectedEncryptedTraffic),
  }
}


export function managementVpnCommunityStarWireModeToHclTerraform(struct?: ManagementVpnCommunityStarWireModeOutputReference | ManagementVpnCommunityStarWireMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_uninspected_encrypted_routing: {
      value: cdktf.booleanToHclTerraform(struct!.allowUninspectedEncryptedRouting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_uninspected_encrypted_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allowUninspectedEncryptedTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementVpnCommunityStarWireModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementVpnCommunityStarWireMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUninspectedEncryptedRouting !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUninspectedEncryptedRouting = this._allowUninspectedEncryptedRouting;
    }
    if (this._allowUninspectedEncryptedTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUninspectedEncryptedTraffic = this._allowUninspectedEncryptedTraffic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementVpnCommunityStarWireMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowUninspectedEncryptedRouting = undefined;
      this._allowUninspectedEncryptedTraffic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowUninspectedEncryptedRouting = value.allowUninspectedEncryptedRouting;
      this._allowUninspectedEncryptedTraffic = value.allowUninspectedEncryptedTraffic;
    }
  }

  // allow_uninspected_encrypted_routing - computed: false, optional: true, required: false
  private _allowUninspectedEncryptedRouting?: boolean | cdktf.IResolvable; 
  public get allowUninspectedEncryptedRouting() {
    return this.getBooleanAttribute('allow_uninspected_encrypted_routing');
  }
  public set allowUninspectedEncryptedRouting(value: boolean | cdktf.IResolvable) {
    this._allowUninspectedEncryptedRouting = value;
  }
  public resetAllowUninspectedEncryptedRouting() {
    this._allowUninspectedEncryptedRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUninspectedEncryptedRoutingInput() {
    return this._allowUninspectedEncryptedRouting;
  }

  // allow_uninspected_encrypted_traffic - computed: false, optional: true, required: false
  private _allowUninspectedEncryptedTraffic?: boolean | cdktf.IResolvable; 
  public get allowUninspectedEncryptedTraffic() {
    return this.getBooleanAttribute('allow_uninspected_encrypted_traffic');
  }
  public set allowUninspectedEncryptedTraffic(value: boolean | cdktf.IResolvable) {
    this._allowUninspectedEncryptedTraffic = value;
  }
  public resetAllowUninspectedEncryptedTraffic() {
    this._allowUninspectedEncryptedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUninspectedEncryptedTrafficInput() {
    return this._allowUninspectedEncryptedTraffic;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star checkpoint_management_vpn_community_star}
*/
export class ManagementVpnCommunityStar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_vpn_community_star";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementVpnCommunityStar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementVpnCommunityStar to import
  * @param importFromId The id of the existing ManagementVpnCommunityStar that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementVpnCommunityStar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_vpn_community_star", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_vpn_community_star checkpoint_management_vpn_community_star} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementVpnCommunityStarConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementVpnCommunityStarConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_vpn_community_star',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._centerGateways = config.centerGateways;
    this._color = config.color;
    this._comments = config.comments;
    this._disableNat = config.disableNat;
    this._disableNatOn = config.disableNatOn;
    this._encryptionMethod = config.encryptionMethod;
    this._encryptionSuite = config.encryptionSuite;
    this._excludedServices = config.excludedServices;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ikePhase1 = config.ikePhase1;
    this._ikePhase2 = config.ikePhase2;
    this._linkSelectionMode = config.linkSelectionMode;
    this._meshCenterGateways = config.meshCenterGateways;
    this._name = config.name;
    this._routingMode = config.routingMode;
    this._satelliteGateways = config.satelliteGateways;
    this._tags = config.tags;
    this._tunnelGranularity = config.tunnelGranularity;
    this._useSharedSecret = config.useSharedSecret;
    this._vpnRouting = config.vpnRouting;
    this._advancedProperties.internalValue = config.advancedProperties;
    this._encryptedTraffic.internalValue = config.encryptedTraffic;
    this._granularEncryptions.internalValue = config.granularEncryptions;
    this._mep.internalValue = config.mep;
    this._overrideInterfaces.internalValue = config.overrideInterfaces;
    this._overrideVpnDomains.internalValue = config.overrideVpnDomains;
    this._permanentTunnels.internalValue = config.permanentTunnels;
    this._sharedSecrets.internalValue = config.sharedSecrets;
    this._wireMode.internalValue = config.wireMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // center_gateways - computed: false, optional: true, required: false
  private _centerGateways?: string[]; 
  public get centerGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('center_gateways'));
  }
  public set centerGateways(value: string[]) {
    this._centerGateways = value;
  }
  public resetCenterGateways() {
    this._centerGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centerGatewaysInput() {
    return this._centerGateways;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // disable_nat - computed: false, optional: true, required: false
  private _disableNat?: boolean | cdktf.IResolvable; 
  public get disableNat() {
    return this.getBooleanAttribute('disable_nat');
  }
  public set disableNat(value: boolean | cdktf.IResolvable) {
    this._disableNat = value;
  }
  public resetDisableNat() {
    this._disableNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNatInput() {
    return this._disableNat;
  }

  // disable_nat_on - computed: false, optional: true, required: false
  private _disableNatOn?: string; 
  public get disableNatOn() {
    return this.getStringAttribute('disable_nat_on');
  }
  public set disableNatOn(value: string) {
    this._disableNatOn = value;
  }
  public resetDisableNatOn() {
    this._disableNatOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNatOnInput() {
    return this._disableNatOn;
  }

  // encryption_method - computed: false, optional: true, required: false
  private _encryptionMethod?: string; 
  public get encryptionMethod() {
    return this.getStringAttribute('encryption_method');
  }
  public set encryptionMethod(value: string) {
    this._encryptionMethod = value;
  }
  public resetEncryptionMethod() {
    this._encryptionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionMethodInput() {
    return this._encryptionMethod;
  }

  // encryption_suite - computed: false, optional: true, required: false
  private _encryptionSuite?: string; 
  public get encryptionSuite() {
    return this.getStringAttribute('encryption_suite');
  }
  public set encryptionSuite(value: string) {
    this._encryptionSuite = value;
  }
  public resetEncryptionSuite() {
    this._encryptionSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSuiteInput() {
    return this._encryptionSuite;
  }

  // excluded_services - computed: false, optional: true, required: false
  private _excludedServices?: string[]; 
  public get excludedServices() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_services'));
  }
  public set excludedServices(value: string[]) {
    this._excludedServices = value;
  }
  public resetExcludedServices() {
    this._excludedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedServicesInput() {
    return this._excludedServices;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ike_phase_1 - computed: false, optional: true, required: false
  private _ikePhase1?: { [key: string]: string }; 
  public get ikePhase1() {
    return this.getStringMapAttribute('ike_phase_1');
  }
  public set ikePhase1(value: { [key: string]: string }) {
    this._ikePhase1 = value;
  }
  public resetIkePhase1() {
    this._ikePhase1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase1Input() {
    return this._ikePhase1;
  }

  // ike_phase_2 - computed: false, optional: true, required: false
  private _ikePhase2?: { [key: string]: string }; 
  public get ikePhase2() {
    return this.getStringMapAttribute('ike_phase_2');
  }
  public set ikePhase2(value: { [key: string]: string }) {
    this._ikePhase2 = value;
  }
  public resetIkePhase2() {
    this._ikePhase2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePhase2Input() {
    return this._ikePhase2;
  }

  // link_selection_mode - computed: false, optional: true, required: false
  private _linkSelectionMode?: string; 
  public get linkSelectionMode() {
    return this.getStringAttribute('link_selection_mode');
  }
  public set linkSelectionMode(value: string) {
    this._linkSelectionMode = value;
  }
  public resetLinkSelectionMode() {
    this._linkSelectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkSelectionModeInput() {
    return this._linkSelectionMode;
  }

  // mesh_center_gateways - computed: false, optional: true, required: false
  private _meshCenterGateways?: boolean | cdktf.IResolvable; 
  public get meshCenterGateways() {
    return this.getBooleanAttribute('mesh_center_gateways');
  }
  public set meshCenterGateways(value: boolean | cdktf.IResolvable) {
    this._meshCenterGateways = value;
  }
  public resetMeshCenterGateways() {
    this._meshCenterGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshCenterGatewaysInput() {
    return this._meshCenterGateways;
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

  // routing_mode - computed: false, optional: true, required: false
  private _routingMode?: string; 
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode;
  }

  // satellite_gateways - computed: false, optional: true, required: false
  private _satelliteGateways?: string[]; 
  public get satelliteGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('satellite_gateways'));
  }
  public set satelliteGateways(value: string[]) {
    this._satelliteGateways = value;
  }
  public resetSatelliteGateways() {
    this._satelliteGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get satelliteGatewaysInput() {
    return this._satelliteGateways;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tunnel_granularity - computed: false, optional: true, required: false
  private _tunnelGranularity?: string; 
  public get tunnelGranularity() {
    return this.getStringAttribute('tunnel_granularity');
  }
  public set tunnelGranularity(value: string) {
    this._tunnelGranularity = value;
  }
  public resetTunnelGranularity() {
    this._tunnelGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelGranularityInput() {
    return this._tunnelGranularity;
  }

  // use_shared_secret - computed: false, optional: true, required: false
  private _useSharedSecret?: boolean | cdktf.IResolvable; 
  public get useSharedSecret() {
    return this.getBooleanAttribute('use_shared_secret');
  }
  public set useSharedSecret(value: boolean | cdktf.IResolvable) {
    this._useSharedSecret = value;
  }
  public resetUseSharedSecret() {
    this._useSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSharedSecretInput() {
    return this._useSharedSecret;
  }

  // vpn_routing - computed: false, optional: true, required: false
  private _vpnRouting?: string; 
  public get vpnRouting() {
    return this.getStringAttribute('vpn_routing');
  }
  public set vpnRouting(value: string) {
    this._vpnRouting = value;
  }
  public resetVpnRouting() {
    this._vpnRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnRoutingInput() {
    return this._vpnRouting;
  }

  // advanced_properties - computed: false, optional: true, required: false
  private _advancedProperties = new ManagementVpnCommunityStarAdvancedPropertiesOutputReference(this, "advanced_properties");
  public get advancedProperties() {
    return this._advancedProperties;
  }
  public putAdvancedProperties(value: ManagementVpnCommunityStarAdvancedProperties) {
    this._advancedProperties.internalValue = value;
  }
  public resetAdvancedProperties() {
    this._advancedProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedPropertiesInput() {
    return this._advancedProperties.internalValue;
  }

  // encrypted_traffic - computed: false, optional: true, required: false
  private _encryptedTraffic = new ManagementVpnCommunityStarEncryptedTrafficOutputReference(this, "encrypted_traffic");
  public get encryptedTraffic() {
    return this._encryptedTraffic;
  }
  public putEncryptedTraffic(value: ManagementVpnCommunityStarEncryptedTraffic) {
    this._encryptedTraffic.internalValue = value;
  }
  public resetEncryptedTraffic() {
    this._encryptedTraffic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedTrafficInput() {
    return this._encryptedTraffic.internalValue;
  }

  // granular_encryptions - computed: false, optional: true, required: false
  private _granularEncryptions = new ManagementVpnCommunityStarGranularEncryptionsList(this, "granular_encryptions", false);
  public get granularEncryptions() {
    return this._granularEncryptions;
  }
  public putGranularEncryptions(value: ManagementVpnCommunityStarGranularEncryptions[] | cdktf.IResolvable) {
    this._granularEncryptions.internalValue = value;
  }
  public resetGranularEncryptions() {
    this._granularEncryptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get granularEncryptionsInput() {
    return this._granularEncryptions.internalValue;
  }

  // mep - computed: false, optional: true, required: false
  private _mep = new ManagementVpnCommunityStarMepOutputReference(this, "mep");
  public get mep() {
    return this._mep;
  }
  public putMep(value: ManagementVpnCommunityStarMep) {
    this._mep.internalValue = value;
  }
  public resetMep() {
    this._mep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mepInput() {
    return this._mep.internalValue;
  }

  // override_interfaces - computed: false, optional: true, required: false
  private _overrideInterfaces = new ManagementVpnCommunityStarOverrideInterfacesList(this, "override_interfaces", false);
  public get overrideInterfaces() {
    return this._overrideInterfaces;
  }
  public putOverrideInterfaces(value: ManagementVpnCommunityStarOverrideInterfaces[] | cdktf.IResolvable) {
    this._overrideInterfaces.internalValue = value;
  }
  public resetOverrideInterfaces() {
    this._overrideInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInterfacesInput() {
    return this._overrideInterfaces.internalValue;
  }

  // override_vpn_domains - computed: false, optional: true, required: false
  private _overrideVpnDomains = new ManagementVpnCommunityStarOverrideVpnDomainsList(this, "override_vpn_domains", false);
  public get overrideVpnDomains() {
    return this._overrideVpnDomains;
  }
  public putOverrideVpnDomains(value: ManagementVpnCommunityStarOverrideVpnDomains[] | cdktf.IResolvable) {
    this._overrideVpnDomains.internalValue = value;
  }
  public resetOverrideVpnDomains() {
    this._overrideVpnDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVpnDomainsInput() {
    return this._overrideVpnDomains.internalValue;
  }

  // permanent_tunnels - computed: false, optional: true, required: false
  private _permanentTunnels = new ManagementVpnCommunityStarPermanentTunnelsOutputReference(this, "permanent_tunnels");
  public get permanentTunnels() {
    return this._permanentTunnels;
  }
  public putPermanentTunnels(value: ManagementVpnCommunityStarPermanentTunnels) {
    this._permanentTunnels.internalValue = value;
  }
  public resetPermanentTunnels() {
    this._permanentTunnels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentTunnelsInput() {
    return this._permanentTunnels.internalValue;
  }

  // shared_secrets - computed: false, optional: true, required: false
  private _sharedSecrets = new ManagementVpnCommunityStarSharedSecretsList(this, "shared_secrets", false);
  public get sharedSecrets() {
    return this._sharedSecrets;
  }
  public putSharedSecrets(value: ManagementVpnCommunityStarSharedSecrets[] | cdktf.IResolvable) {
    this._sharedSecrets.internalValue = value;
  }
  public resetSharedSecrets() {
    this._sharedSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretsInput() {
    return this._sharedSecrets.internalValue;
  }

  // wire_mode - computed: false, optional: true, required: false
  private _wireMode = new ManagementVpnCommunityStarWireModeOutputReference(this, "wire_mode");
  public get wireMode() {
    return this._wireMode;
  }
  public putWireMode(value: ManagementVpnCommunityStarWireMode) {
    this._wireMode.internalValue = value;
  }
  public resetWireMode() {
    this._wireMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireModeInput() {
    return this._wireMode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      center_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._centerGateways),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      disable_nat: cdktf.booleanToTerraform(this._disableNat),
      disable_nat_on: cdktf.stringToTerraform(this._disableNatOn),
      encryption_method: cdktf.stringToTerraform(this._encryptionMethod),
      encryption_suite: cdktf.stringToTerraform(this._encryptionSuite),
      excluded_services: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedServices),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ike_phase_1: cdktf.hashMapper(cdktf.stringToTerraform)(this._ikePhase1),
      ike_phase_2: cdktf.hashMapper(cdktf.stringToTerraform)(this._ikePhase2),
      link_selection_mode: cdktf.stringToTerraform(this._linkSelectionMode),
      mesh_center_gateways: cdktf.booleanToTerraform(this._meshCenterGateways),
      name: cdktf.stringToTerraform(this._name),
      routing_mode: cdktf.stringToTerraform(this._routingMode),
      satellite_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._satelliteGateways),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tunnel_granularity: cdktf.stringToTerraform(this._tunnelGranularity),
      use_shared_secret: cdktf.booleanToTerraform(this._useSharedSecret),
      vpn_routing: cdktf.stringToTerraform(this._vpnRouting),
      advanced_properties: managementVpnCommunityStarAdvancedPropertiesToTerraform(this._advancedProperties.internalValue),
      encrypted_traffic: managementVpnCommunityStarEncryptedTrafficToTerraform(this._encryptedTraffic.internalValue),
      granular_encryptions: cdktf.listMapper(managementVpnCommunityStarGranularEncryptionsToTerraform, true)(this._granularEncryptions.internalValue),
      mep: managementVpnCommunityStarMepToTerraform(this._mep.internalValue),
      override_interfaces: cdktf.listMapper(managementVpnCommunityStarOverrideInterfacesToTerraform, true)(this._overrideInterfaces.internalValue),
      override_vpn_domains: cdktf.listMapper(managementVpnCommunityStarOverrideVpnDomainsToTerraform, true)(this._overrideVpnDomains.internalValue),
      permanent_tunnels: managementVpnCommunityStarPermanentTunnelsToTerraform(this._permanentTunnels.internalValue),
      shared_secrets: cdktf.listMapper(managementVpnCommunityStarSharedSecretsToTerraform, true)(this._sharedSecrets.internalValue),
      wire_mode: managementVpnCommunityStarWireModeToTerraform(this._wireMode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      center_gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._centerGateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_nat: {
        value: cdktf.booleanToHclTerraform(this._disableNat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_nat_on: {
        value: cdktf.stringToHclTerraform(this._disableNatOn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_method: {
        value: cdktf.stringToHclTerraform(this._encryptionMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_suite: {
        value: cdktf.stringToHclTerraform(this._encryptionSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_services: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedServices),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ike_phase_1: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ikePhase1),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ike_phase_2: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ikePhase2),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      link_selection_mode: {
        value: cdktf.stringToHclTerraform(this._linkSelectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mesh_center_gateways: {
        value: cdktf.booleanToHclTerraform(this._meshCenterGateways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_mode: {
        value: cdktf.stringToHclTerraform(this._routingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      satellite_gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._satelliteGateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tunnel_granularity: {
        value: cdktf.stringToHclTerraform(this._tunnelGranularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_shared_secret: {
        value: cdktf.booleanToHclTerraform(this._useSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_routing: {
        value: cdktf.stringToHclTerraform(this._vpnRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_properties: {
        value: managementVpnCommunityStarAdvancedPropertiesToHclTerraform(this._advancedProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarAdvancedPropertiesList",
      },
      encrypted_traffic: {
        value: managementVpnCommunityStarEncryptedTrafficToHclTerraform(this._encryptedTraffic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarEncryptedTrafficList",
      },
      granular_encryptions: {
        value: cdktf.listMapperHcl(managementVpnCommunityStarGranularEncryptionsToHclTerraform, true)(this._granularEncryptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarGranularEncryptionsList",
      },
      mep: {
        value: managementVpnCommunityStarMepToHclTerraform(this._mep.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarMepList",
      },
      override_interfaces: {
        value: cdktf.listMapperHcl(managementVpnCommunityStarOverrideInterfacesToHclTerraform, true)(this._overrideInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarOverrideInterfacesList",
      },
      override_vpn_domains: {
        value: cdktf.listMapperHcl(managementVpnCommunityStarOverrideVpnDomainsToHclTerraform, true)(this._overrideVpnDomains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarOverrideVpnDomainsList",
      },
      permanent_tunnels: {
        value: managementVpnCommunityStarPermanentTunnelsToHclTerraform(this._permanentTunnels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarPermanentTunnelsList",
      },
      shared_secrets: {
        value: cdktf.listMapperHcl(managementVpnCommunityStarSharedSecretsToHclTerraform, true)(this._sharedSecrets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarSharedSecretsList",
      },
      wire_mode: {
        value: managementVpnCommunityStarWireModeToHclTerraform(this._wireMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementVpnCommunityStarWireModeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
