// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable anti-spoofing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#anti_spoofing ManagementInterface#anti_spoofing}
  */
  readonly antiSpoofing?: boolean | cdktf.IResolvable;
  /**
  * Cluster interface type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#cluster_network_type ManagementInterface#cluster_network_type}
  */
  readonly clusterNetworkType?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#color ManagementInterface#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#comments ManagementInterface#comments}
  */
  readonly comments?: string;
  /**
  * Enable dynamic interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#dynamic_ip ManagementInterface#dynamic_ip}
  */
  readonly dynamicIp?: boolean | cdktf.IResolvable;
  /**
  * Gateway or cluster object uid that the interface belongs to. <font color="red">Required only if</font> name was specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#gateway_uid ManagementInterface#gateway_uid}
  */
  readonly gatewayUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#id ManagementInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ignore_errors ManagementInterface#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ignore_warnings ManagementInterface#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv4_address ManagementInterface#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv4_mask_length ManagementInterface#ipv4_mask_length}
  */
  readonly ipv4MaskLength?: number;
  /**
  * IPv4 network mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv4_network_mask ManagementInterface#ipv4_network_mask}
  */
  readonly ipv4NetworkMask?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv6_address ManagementInterface#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv6_mask_length ManagementInterface#ipv6_mask_length}
  */
  readonly ipv6MaskLength?: number;
  /**
  * IPv6 network mask.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv6_network_mask ManagementInterface#ipv6_network_mask}
  */
  readonly ipv6NetworkMask?: string;
  /**
  * When Private is selected as the Cluster interface type, cluster can monitor or not monitor the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#monitored_by_cluster ManagementInterface#monitored_by_cluster}
  */
  readonly monitoredByCluster?: boolean | cdktf.IResolvable;
  /**
  * Network interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#name ManagementInterface#name}
  */
  readonly name: string;
  /**
  * Network Interface Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#network_interface_type ManagementInterface#network_interface_type}
  */
  readonly networkInterfaceType?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#tags ManagementInterface#tags}
  */
  readonly tags?: string[];
  /**
  * Topology configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#topology ManagementInterface#topology}
  */
  readonly topology?: string;
  /**
  * anti_spoofing_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#anti_spoofing_settings ManagementInterface#anti_spoofing_settings}
  */
  readonly antiSpoofingSettings?: ManagementInterfaceAntiSpoofingSettings;
  /**
  * cluster_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#cluster_members ManagementInterface#cluster_members}
  */
  readonly clusterMembers?: ManagementInterfaceClusterMembers[] | cdktf.IResolvable;
  /**
  * security_zone_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#security_zone_settings ManagementInterface#security_zone_settings}
  */
  readonly securityZoneSettings?: ManagementInterfaceSecurityZoneSettings;
  /**
  * topology_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#topology_settings ManagementInterface#topology_settings}
  */
  readonly topologySettings?: ManagementInterfaceTopologySettings;
}
export interface ManagementInterfaceTopologySettingsAutomatic {
}

export function managementInterfaceTopologySettingsAutomaticToTerraform(struct?: ManagementInterfaceTopologySettingsAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementInterfaceTopologySettingsAutomaticToHclTerraform(struct?: ManagementInterfaceTopologySettingsAutomatic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementInterfaceTopologySettingsAutomaticOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementInterfaceTopologySettingsAutomatic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceTopologySettingsAutomatic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_leads_to_dmz - computed: true, optional: false, required: false
  public get interfaceLeadsToDmz() {
    return this.getBooleanAttribute('interface_leads_to_dmz');
  }

  // ip_address_behind_this_interface - computed: true, optional: false, required: false
  public get ipAddressBehindThisInterface() {
    return this.getStringAttribute('ip_address_behind_this_interface');
  }

  // specific_network - computed: true, optional: false, required: false
  public get specificNetwork() {
    return this.getStringAttribute('specific_network');
  }

  // specific_network_uid - computed: true, optional: false, required: false
  public get specificNetworkUid() {
    return this.getStringAttribute('specific_network_uid');
  }
}

export class ManagementInterfaceTopologySettingsAutomaticList extends cdktf.ComplexList {

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
  public get(index: number): ManagementInterfaceTopologySettingsAutomaticOutputReference {
    return new ManagementInterfaceTopologySettingsAutomaticOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementInterfaceTopologySettingsManual {
}

export function managementInterfaceTopologySettingsManualToTerraform(struct?: ManagementInterfaceTopologySettingsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementInterfaceTopologySettingsManualToHclTerraform(struct?: ManagementInterfaceTopologySettingsManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementInterfaceTopologySettingsManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementInterfaceTopologySettingsManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceTopologySettingsManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_leads_to_dmz - computed: true, optional: false, required: false
  public get interfaceLeadsToDmz() {
    return this.getBooleanAttribute('interface_leads_to_dmz');
  }

  // ip_address_behind_this_interface - computed: true, optional: false, required: false
  public get ipAddressBehindThisInterface() {
    return this.getStringAttribute('ip_address_behind_this_interface');
  }

  // specific_network - computed: true, optional: false, required: false
  public get specificNetwork() {
    return this.getStringAttribute('specific_network');
  }

  // specific_network_uid - computed: true, optional: false, required: false
  public get specificNetworkUid() {
    return this.getStringAttribute('specific_network_uid');
  }
}

export class ManagementInterfaceTopologySettingsManualList extends cdktf.ComplexList {

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
  public get(index: number): ManagementInterfaceTopologySettingsManualOutputReference {
    return new ManagementInterfaceTopologySettingsManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementInterfaceAntiSpoofingSettings {
  /**
  * If packets will be rejected (the Prevent option) or whether the packets will be monitored (the Detect option).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#action ManagementInterface#action}
  */
  readonly action?: string;
  /**
  * Don't check packets from excluded network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#exclude_packets ManagementInterface#exclude_packets}
  */
  readonly excludePackets?: boolean | cdktf.IResolvable;
  /**
  * Excluded network name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#excluded_network_name ManagementInterface#excluded_network_name}
  */
  readonly excludedNetworkName?: string;
  /**
  * Excluded network UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#excluded_network_uid ManagementInterface#excluded_network_uid}
  */
  readonly excludedNetworkUid?: string;
  /**
  * Spoof tracking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#spoof_tracking ManagementInterface#spoof_tracking}
  */
  readonly spoofTracking?: string;
}

export function managementInterfaceAntiSpoofingSettingsToTerraform(struct?: ManagementInterfaceAntiSpoofingSettingsOutputReference | ManagementInterfaceAntiSpoofingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    exclude_packets: cdktf.booleanToTerraform(struct!.excludePackets),
    excluded_network_name: cdktf.stringToTerraform(struct!.excludedNetworkName),
    excluded_network_uid: cdktf.stringToTerraform(struct!.excludedNetworkUid),
    spoof_tracking: cdktf.stringToTerraform(struct!.spoofTracking),
  }
}


export function managementInterfaceAntiSpoofingSettingsToHclTerraform(struct?: ManagementInterfaceAntiSpoofingSettingsOutputReference | ManagementInterfaceAntiSpoofingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_packets: {
      value: cdktf.booleanToHclTerraform(struct!.excludePackets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_network_name: {
      value: cdktf.stringToHclTerraform(struct!.excludedNetworkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_network_uid: {
      value: cdktf.stringToHclTerraform(struct!.excludedNetworkUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spoof_tracking: {
      value: cdktf.stringToHclTerraform(struct!.spoofTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceAntiSpoofingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementInterfaceAntiSpoofingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._excludePackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePackets = this._excludePackets;
    }
    if (this._excludedNetworkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNetworkName = this._excludedNetworkName;
    }
    if (this._excludedNetworkUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNetworkUid = this._excludedNetworkUid;
    }
    if (this._spoofTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofTracking = this._spoofTracking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceAntiSpoofingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._excludePackets = undefined;
      this._excludedNetworkName = undefined;
      this._excludedNetworkUid = undefined;
      this._spoofTracking = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._excludePackets = value.excludePackets;
      this._excludedNetworkName = value.excludedNetworkName;
      this._excludedNetworkUid = value.excludedNetworkUid;
      this._spoofTracking = value.spoofTracking;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // exclude_packets - computed: false, optional: true, required: false
  private _excludePackets?: boolean | cdktf.IResolvable; 
  public get excludePackets() {
    return this.getBooleanAttribute('exclude_packets');
  }
  public set excludePackets(value: boolean | cdktf.IResolvable) {
    this._excludePackets = value;
  }
  public resetExcludePackets() {
    this._excludePackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePacketsInput() {
    return this._excludePackets;
  }

  // excluded_network_name - computed: false, optional: true, required: false
  private _excludedNetworkName?: string; 
  public get excludedNetworkName() {
    return this.getStringAttribute('excluded_network_name');
  }
  public set excludedNetworkName(value: string) {
    this._excludedNetworkName = value;
  }
  public resetExcludedNetworkName() {
    this._excludedNetworkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNetworkNameInput() {
    return this._excludedNetworkName;
  }

  // excluded_network_uid - computed: false, optional: true, required: false
  private _excludedNetworkUid?: string; 
  public get excludedNetworkUid() {
    return this.getStringAttribute('excluded_network_uid');
  }
  public set excludedNetworkUid(value: string) {
    this._excludedNetworkUid = value;
  }
  public resetExcludedNetworkUid() {
    this._excludedNetworkUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNetworkUidInput() {
    return this._excludedNetworkUid;
  }

  // spoof_tracking - computed: false, optional: true, required: false
  private _spoofTracking?: string; 
  public get spoofTracking() {
    return this.getStringAttribute('spoof_tracking');
  }
  public set spoofTracking(value: string) {
    this._spoofTracking = value;
  }
  public resetSpoofTracking() {
    this._spoofTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofTrackingInput() {
    return this._spoofTracking;
  }
}
export interface ManagementInterfaceClusterMembers {
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#color ManagementInterface#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#comments ManagementInterface#comments}
  */
  readonly comments?: string;
  /**
  * IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv4_address ManagementInterface#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IPv4 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv4_mask_length ManagementInterface#ipv4_mask_length}
  */
  readonly ipv4MaskLength?: string;
  /**
  * IPv4 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv4_network_mask ManagementInterface#ipv4_network_mask}
  */
  readonly ipv4NetworkMask?: string;
  /**
  * IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv6_address ManagementInterface#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 network mask length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv6_mask_length ManagementInterface#ipv6_mask_length}
  */
  readonly ipv6MaskLength?: string;
  /**
  * IPv6 network address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ipv6_network_mask ManagementInterface#ipv6_network_mask}
  */
  readonly ipv6NetworkMask?: string;
  /**
  * Cluster member object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#member_name ManagementInterface#member_name}
  */
  readonly memberName?: string;
  /**
  * Cluster member object uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#member_uid ManagementInterface#member_uid}
  */
  readonly memberUid?: string;
  /**
  * Cluster member network interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#name ManagementInterface#name}
  */
  readonly name: string;
  /**
  * IPv4 or IPv6 network mask. If both masks are required use ipv4-network-mask and ipv6-network-mask fields explicitly. Instead of providing mask itself it is possible to specify IPv4 or IPv6 mask length in mask-length field. If both masks length are required use ipv4-mask-length and  ipv6-mask-length fields explicitly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#network_mask ManagementInterface#network_mask}
  */
  readonly networkMask?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#tags ManagementInterface#tags}
  */
  readonly tags?: string[];
}

export function managementInterfaceClusterMembersToTerraform(struct?: ManagementInterfaceClusterMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    comments: cdktf.stringToTerraform(struct!.comments),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_mask_length: cdktf.stringToTerraform(struct!.ipv4MaskLength),
    ipv4_network_mask: cdktf.stringToTerraform(struct!.ipv4NetworkMask),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    ipv6_mask_length: cdktf.stringToTerraform(struct!.ipv6MaskLength),
    ipv6_network_mask: cdktf.stringToTerraform(struct!.ipv6NetworkMask),
    member_name: cdktf.stringToTerraform(struct!.memberName),
    member_uid: cdktf.stringToTerraform(struct!.memberUid),
    name: cdktf.stringToTerraform(struct!.name),
    network_mask: cdktf.stringToTerraform(struct!.networkMask),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function managementInterfaceClusterMembersToHclTerraform(struct?: ManagementInterfaceClusterMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comments: {
      value: cdktf.stringToHclTerraform(struct!.comments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv4MaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_network_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4NetworkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask_length: {
      value: cdktf.stringToHclTerraform(struct!.ipv6MaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_network_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv6NetworkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_uid: {
      value: cdktf.stringToHclTerraform(struct!.memberUid),
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
    network_mask: {
      value: cdktf.stringToHclTerraform(struct!.networkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceClusterMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementInterfaceClusterMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._comments !== undefined) {
      hasAnyValues = true;
      internalValueResult.comments = this._comments;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4MaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4MaskLength = this._ipv4MaskLength;
    }
    if (this._ipv4NetworkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NetworkMask = this._ipv4NetworkMask;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._ipv6MaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MaskLength = this._ipv6MaskLength;
    }
    if (this._ipv6NetworkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NetworkMask = this._ipv6NetworkMask;
    }
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    if (this._memberUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberUid = this._memberUid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMask = this._networkMask;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceClusterMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._comments = undefined;
      this._ipv4Address = undefined;
      this._ipv4MaskLength = undefined;
      this._ipv4NetworkMask = undefined;
      this._ipv6Address = undefined;
      this._ipv6MaskLength = undefined;
      this._ipv6NetworkMask = undefined;
      this._memberName = undefined;
      this._memberUid = undefined;
      this._name = undefined;
      this._networkMask = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._comments = value.comments;
      this._ipv4Address = value.ipv4Address;
      this._ipv4MaskLength = value.ipv4MaskLength;
      this._ipv4NetworkMask = value.ipv4NetworkMask;
      this._ipv6Address = value.ipv6Address;
      this._ipv6MaskLength = value.ipv6MaskLength;
      this._ipv6NetworkMask = value.ipv6NetworkMask;
      this._memberName = value.memberName;
      this._memberUid = value.memberUid;
      this._name = value.name;
      this._networkMask = value.networkMask;
      this._tags = value.tags;
    }
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_mask_length - computed: false, optional: true, required: false
  private _ipv4MaskLength?: string; 
  public get ipv4MaskLength() {
    return this.getStringAttribute('ipv4_mask_length');
  }
  public set ipv4MaskLength(value: string) {
    this._ipv4MaskLength = value;
  }
  public resetIpv4MaskLength() {
    this._ipv4MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskLengthInput() {
    return this._ipv4MaskLength;
  }

  // ipv4_network_mask - computed: false, optional: true, required: false
  private _ipv4NetworkMask?: string; 
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }
  public set ipv4NetworkMask(value: string) {
    this._ipv4NetworkMask = value;
  }
  public resetIpv4NetworkMask() {
    this._ipv4NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetworkMaskInput() {
    return this._ipv4NetworkMask;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_mask_length - computed: false, optional: true, required: false
  private _ipv6MaskLength?: string; 
  public get ipv6MaskLength() {
    return this.getStringAttribute('ipv6_mask_length');
  }
  public set ipv6MaskLength(value: string) {
    this._ipv6MaskLength = value;
  }
  public resetIpv6MaskLength() {
    this._ipv6MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskLengthInput() {
    return this._ipv6MaskLength;
  }

  // ipv6_network_mask - computed: false, optional: true, required: false
  private _ipv6NetworkMask?: string; 
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }
  public set ipv6NetworkMask(value: string) {
    this._ipv6NetworkMask = value;
  }
  public resetIpv6NetworkMask() {
    this._ipv6NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkMaskInput() {
    return this._ipv6NetworkMask;
  }

  // member_name - computed: false, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }

  // member_uid - computed: false, optional: true, required: false
  private _memberUid?: string; 
  public get memberUid() {
    return this.getStringAttribute('member_uid');
  }
  public set memberUid(value: string) {
    this._memberUid = value;
  }
  public resetMemberUid() {
    this._memberUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUidInput() {
    return this._memberUid;
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

  // network_mask - computed: false, optional: true, required: false
  private _networkMask?: string; 
  public get networkMask() {
    return this.getStringAttribute('network_mask');
  }
  public set networkMask(value: string) {
    this._networkMask = value;
  }
  public resetNetworkMask() {
    this._networkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMaskInput() {
    return this._networkMask;
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
}

export class ManagementInterfaceClusterMembersList extends cdktf.ComplexList {
  public internalValue? : ManagementInterfaceClusterMembers[] | cdktf.IResolvable

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
  public get(index: number): ManagementInterfaceClusterMembersOutputReference {
    return new ManagementInterfaceClusterMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementInterfaceSecurityZoneSettings {
  /**
  * Security Zone is calculated according to where the interface leads to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#auto_calculated ManagementInterface#auto_calculated}
  */
  readonly autoCalculated?: boolean | cdktf.IResolvable;
  /**
  * Security Zone specified manually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#specific_zone ManagementInterface#specific_zone}
  */
  readonly specificZone?: string;
}

export function managementInterfaceSecurityZoneSettingsToTerraform(struct?: ManagementInterfaceSecurityZoneSettingsOutputReference | ManagementInterfaceSecurityZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_calculated: cdktf.booleanToTerraform(struct!.autoCalculated),
    specific_zone: cdktf.stringToTerraform(struct!.specificZone),
  }
}


export function managementInterfaceSecurityZoneSettingsToHclTerraform(struct?: ManagementInterfaceSecurityZoneSettingsOutputReference | ManagementInterfaceSecurityZoneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_calculated: {
      value: cdktf.booleanToHclTerraform(struct!.autoCalculated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_zone: {
      value: cdktf.stringToHclTerraform(struct!.specificZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceSecurityZoneSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementInterfaceSecurityZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCalculated !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCalculated = this._autoCalculated;
    }
    if (this._specificZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificZone = this._specificZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceSecurityZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCalculated = undefined;
      this._specificZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCalculated = value.autoCalculated;
      this._specificZone = value.specificZone;
    }
  }

  // auto_calculated - computed: false, optional: true, required: false
  private _autoCalculated?: boolean | cdktf.IResolvable; 
  public get autoCalculated() {
    return this.getBooleanAttribute('auto_calculated');
  }
  public set autoCalculated(value: boolean | cdktf.IResolvable) {
    this._autoCalculated = value;
  }
  public resetAutoCalculated() {
    this._autoCalculated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCalculatedInput() {
    return this._autoCalculated;
  }

  // auto_calculated_zone - computed: true, optional: false, required: false
  public get autoCalculatedZone() {
    return this.getStringAttribute('auto_calculated_zone');
  }

  // auto_calculated_zone_uid - computed: true, optional: false, required: false
  public get autoCalculatedZoneUid() {
    return this.getStringAttribute('auto_calculated_zone_uid');
  }

  // specific_security_zone_enabled - computed: true, optional: false, required: false
  public get specificSecurityZoneEnabled() {
    return this.getBooleanAttribute('specific_security_zone_enabled');
  }

  // specific_zone - computed: false, optional: true, required: false
  private _specificZone?: string; 
  public get specificZone() {
    return this.getStringAttribute('specific_zone');
  }
  public set specificZone(value: string) {
    this._specificZone = value;
  }
  public resetSpecificZone() {
    this._specificZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificZoneInput() {
    return this._specificZone;
  }

  // specific_zone_uid - computed: true, optional: false, required: false
  public get specificZoneUid() {
    return this.getStringAttribute('specific_zone_uid');
  }
}
export interface ManagementInterfaceTopologySettings {
  /**
  * Whether this interface leads to demilitarized zone (perimeter network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#interface_leads_to_dmz ManagementInterface#interface_leads_to_dmz}
  */
  readonly interfaceLeadsToDmz?: boolean | cdktf.IResolvable;
  /**
  * Network Settings behind this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#ip_address_behind_this_interface ManagementInterface#ip_address_behind_this_interface}
  */
  readonly ipAddressBehindThisInterface?: string;
  /**
  * Network behind this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#specific_network ManagementInterface#specific_network}
  */
  readonly specificNetwork?: string;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#specific_network_uid ManagementInterface#specific_network_uid}
  */
  readonly specificNetworkUid?: string;
}

export function managementInterfaceTopologySettingsToTerraform(struct?: ManagementInterfaceTopologySettingsOutputReference | ManagementInterfaceTopologySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_leads_to_dmz: cdktf.booleanToTerraform(struct!.interfaceLeadsToDmz),
    ip_address_behind_this_interface: cdktf.stringToTerraform(struct!.ipAddressBehindThisInterface),
    specific_network: cdktf.stringToTerraform(struct!.specificNetwork),
    specific_network_uid: cdktf.stringToTerraform(struct!.specificNetworkUid),
  }
}


export function managementInterfaceTopologySettingsToHclTerraform(struct?: ManagementInterfaceTopologySettingsOutputReference | ManagementInterfaceTopologySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_leads_to_dmz: {
      value: cdktf.booleanToHclTerraform(struct!.interfaceLeadsToDmz),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_address_behind_this_interface: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressBehindThisInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_network: {
      value: cdktf.stringToHclTerraform(struct!.specificNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_network_uid: {
      value: cdktf.stringToHclTerraform(struct!.specificNetworkUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementInterfaceTopologySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementInterfaceTopologySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceLeadsToDmz !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceLeadsToDmz = this._interfaceLeadsToDmz;
    }
    if (this._ipAddressBehindThisInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressBehindThisInterface = this._ipAddressBehindThisInterface;
    }
    if (this._specificNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificNetwork = this._specificNetwork;
    }
    if (this._specificNetworkUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificNetworkUid = this._specificNetworkUid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementInterfaceTopologySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interfaceLeadsToDmz = undefined;
      this._ipAddressBehindThisInterface = undefined;
      this._specificNetwork = undefined;
      this._specificNetworkUid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interfaceLeadsToDmz = value.interfaceLeadsToDmz;
      this._ipAddressBehindThisInterface = value.ipAddressBehindThisInterface;
      this._specificNetwork = value.specificNetwork;
      this._specificNetworkUid = value.specificNetworkUid;
    }
  }

  // interface_leads_to_dmz - computed: false, optional: true, required: false
  private _interfaceLeadsToDmz?: boolean | cdktf.IResolvable; 
  public get interfaceLeadsToDmz() {
    return this.getBooleanAttribute('interface_leads_to_dmz');
  }
  public set interfaceLeadsToDmz(value: boolean | cdktf.IResolvable) {
    this._interfaceLeadsToDmz = value;
  }
  public resetInterfaceLeadsToDmz() {
    this._interfaceLeadsToDmz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceLeadsToDmzInput() {
    return this._interfaceLeadsToDmz;
  }

  // ip_address_behind_this_interface - computed: false, optional: true, required: false
  private _ipAddressBehindThisInterface?: string; 
  public get ipAddressBehindThisInterface() {
    return this.getStringAttribute('ip_address_behind_this_interface');
  }
  public set ipAddressBehindThisInterface(value: string) {
    this._ipAddressBehindThisInterface = value;
  }
  public resetIpAddressBehindThisInterface() {
    this._ipAddressBehindThisInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressBehindThisInterfaceInput() {
    return this._ipAddressBehindThisInterface;
  }

  // specific_network - computed: false, optional: true, required: false
  private _specificNetwork?: string; 
  public get specificNetwork() {
    return this.getStringAttribute('specific_network');
  }
  public set specificNetwork(value: string) {
    this._specificNetwork = value;
  }
  public resetSpecificNetwork() {
    this._specificNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificNetworkInput() {
    return this._specificNetwork;
  }

  // specific_network_uid - computed: false, optional: true, required: false
  private _specificNetworkUid?: string; 
  public get specificNetworkUid() {
    return this.getStringAttribute('specific_network_uid');
  }
  public set specificNetworkUid(value: string) {
    this._specificNetworkUid = value;
  }
  public resetSpecificNetworkUid() {
    this._specificNetworkUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificNetworkUidInput() {
    return this._specificNetworkUid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface checkpoint_management_interface}
*/
export class ManagementInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementInterface to import
  * @param importFromId The id of the existing ManagementInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_interface checkpoint_management_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_interface',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiSpoofing = config.antiSpoofing;
    this._clusterNetworkType = config.clusterNetworkType;
    this._color = config.color;
    this._comments = config.comments;
    this._dynamicIp = config.dynamicIp;
    this._gatewayUid = config.gatewayUid;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ipv4Address = config.ipv4Address;
    this._ipv4MaskLength = config.ipv4MaskLength;
    this._ipv4NetworkMask = config.ipv4NetworkMask;
    this._ipv6Address = config.ipv6Address;
    this._ipv6MaskLength = config.ipv6MaskLength;
    this._ipv6NetworkMask = config.ipv6NetworkMask;
    this._monitoredByCluster = config.monitoredByCluster;
    this._name = config.name;
    this._networkInterfaceType = config.networkInterfaceType;
    this._tags = config.tags;
    this._topology = config.topology;
    this._antiSpoofingSettings.internalValue = config.antiSpoofingSettings;
    this._clusterMembers.internalValue = config.clusterMembers;
    this._securityZoneSettings.internalValue = config.securityZoneSettings;
    this._topologySettings.internalValue = config.topologySettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_spoofing - computed: false, optional: true, required: false
  private _antiSpoofing?: boolean | cdktf.IResolvable; 
  public get antiSpoofing() {
    return this.getBooleanAttribute('anti_spoofing');
  }
  public set antiSpoofing(value: boolean | cdktf.IResolvable) {
    this._antiSpoofing = value;
  }
  public resetAntiSpoofing() {
    this._antiSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingInput() {
    return this._antiSpoofing;
  }

  // cluster_network_type - computed: false, optional: true, required: false
  private _clusterNetworkType?: string; 
  public get clusterNetworkType() {
    return this.getStringAttribute('cluster_network_type');
  }
  public set clusterNetworkType(value: string) {
    this._clusterNetworkType = value;
  }
  public resetClusterNetworkType() {
    this._clusterNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNetworkTypeInput() {
    return this._clusterNetworkType;
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

  // dynamic_ip - computed: false, optional: true, required: false
  private _dynamicIp?: boolean | cdktf.IResolvable; 
  public get dynamicIp() {
    return this.getBooleanAttribute('dynamic_ip');
  }
  public set dynamicIp(value: boolean | cdktf.IResolvable) {
    this._dynamicIp = value;
  }
  public resetDynamicIp() {
    this._dynamicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicIpInput() {
    return this._dynamicIp;
  }

  // gateway_uid - computed: false, optional: false, required: true
  private _gatewayUid?: string; 
  public get gatewayUid() {
    return this.getStringAttribute('gateway_uid');
  }
  public set gatewayUid(value: string) {
    this._gatewayUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUidInput() {
    return this._gatewayUid;
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_mask_length - computed: false, optional: true, required: false
  private _ipv4MaskLength?: number; 
  public get ipv4MaskLength() {
    return this.getNumberAttribute('ipv4_mask_length');
  }
  public set ipv4MaskLength(value: number) {
    this._ipv4MaskLength = value;
  }
  public resetIpv4MaskLength() {
    this._ipv4MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskLengthInput() {
    return this._ipv4MaskLength;
  }

  // ipv4_network_mask - computed: false, optional: true, required: false
  private _ipv4NetworkMask?: string; 
  public get ipv4NetworkMask() {
    return this.getStringAttribute('ipv4_network_mask');
  }
  public set ipv4NetworkMask(value: string) {
    this._ipv4NetworkMask = value;
  }
  public resetIpv4NetworkMask() {
    this._ipv4NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetworkMaskInput() {
    return this._ipv4NetworkMask;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_mask_length - computed: false, optional: true, required: false
  private _ipv6MaskLength?: number; 
  public get ipv6MaskLength() {
    return this.getNumberAttribute('ipv6_mask_length');
  }
  public set ipv6MaskLength(value: number) {
    this._ipv6MaskLength = value;
  }
  public resetIpv6MaskLength() {
    this._ipv6MaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskLengthInput() {
    return this._ipv6MaskLength;
  }

  // ipv6_network_mask - computed: false, optional: true, required: false
  private _ipv6NetworkMask?: string; 
  public get ipv6NetworkMask() {
    return this.getStringAttribute('ipv6_network_mask');
  }
  public set ipv6NetworkMask(value: string) {
    this._ipv6NetworkMask = value;
  }
  public resetIpv6NetworkMask() {
    this._ipv6NetworkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NetworkMaskInput() {
    return this._ipv6NetworkMask;
  }

  // monitored_by_cluster - computed: false, optional: true, required: false
  private _monitoredByCluster?: boolean | cdktf.IResolvable; 
  public get monitoredByCluster() {
    return this.getBooleanAttribute('monitored_by_cluster');
  }
  public set monitoredByCluster(value: boolean | cdktf.IResolvable) {
    this._monitoredByCluster = value;
  }
  public resetMonitoredByCluster() {
    this._monitoredByCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredByClusterInput() {
    return this._monitoredByCluster;
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

  // network_interface_type - computed: false, optional: true, required: false
  private _networkInterfaceType?: string; 
  public get networkInterfaceType() {
    return this.getStringAttribute('network_interface_type');
  }
  public set networkInterfaceType(value: string) {
    this._networkInterfaceType = value;
  }
  public resetNetworkInterfaceType() {
    this._networkInterfaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceTypeInput() {
    return this._networkInterfaceType;
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

  // topology - computed: false, optional: true, required: false
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  public resetTopology() {
    this._topology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // topology_automatic - computed: true, optional: false, required: false
  public get topologyAutomatic() {
    return this.getStringAttribute('topology_automatic');
  }

  // topology_manual - computed: true, optional: false, required: false
  public get topologyManual() {
    return this.getStringAttribute('topology_manual');
  }

  // topology_settings_automatic - computed: true, optional: false, required: false
  private _topologySettingsAutomatic = new ManagementInterfaceTopologySettingsAutomaticList(this, "topology_settings_automatic", false);
  public get topologySettingsAutomatic() {
    return this._topologySettingsAutomatic;
  }

  // topology_settings_manual - computed: true, optional: false, required: false
  private _topologySettingsManual = new ManagementInterfaceTopologySettingsManualList(this, "topology_settings_manual", false);
  public get topologySettingsManual() {
    return this._topologySettingsManual;
  }

  // anti_spoofing_settings - computed: false, optional: true, required: false
  private _antiSpoofingSettings = new ManagementInterfaceAntiSpoofingSettingsOutputReference(this, "anti_spoofing_settings");
  public get antiSpoofingSettings() {
    return this._antiSpoofingSettings;
  }
  public putAntiSpoofingSettings(value: ManagementInterfaceAntiSpoofingSettings) {
    this._antiSpoofingSettings.internalValue = value;
  }
  public resetAntiSpoofingSettings() {
    this._antiSpoofingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpoofingSettingsInput() {
    return this._antiSpoofingSettings.internalValue;
  }

  // cluster_members - computed: false, optional: true, required: false
  private _clusterMembers = new ManagementInterfaceClusterMembersList(this, "cluster_members", false);
  public get clusterMembers() {
    return this._clusterMembers;
  }
  public putClusterMembers(value: ManagementInterfaceClusterMembers[] | cdktf.IResolvable) {
    this._clusterMembers.internalValue = value;
  }
  public resetClusterMembers() {
    this._clusterMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMembersInput() {
    return this._clusterMembers.internalValue;
  }

  // security_zone_settings - computed: false, optional: true, required: false
  private _securityZoneSettings = new ManagementInterfaceSecurityZoneSettingsOutputReference(this, "security_zone_settings");
  public get securityZoneSettings() {
    return this._securityZoneSettings;
  }
  public putSecurityZoneSettings(value: ManagementInterfaceSecurityZoneSettings) {
    this._securityZoneSettings.internalValue = value;
  }
  public resetSecurityZoneSettings() {
    this._securityZoneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneSettingsInput() {
    return this._securityZoneSettings.internalValue;
  }

  // topology_settings - computed: false, optional: true, required: false
  private _topologySettings = new ManagementInterfaceTopologySettingsOutputReference(this, "topology_settings");
  public get topologySettings() {
    return this._topologySettings;
  }
  public putTopologySettings(value: ManagementInterfaceTopologySettings) {
    this._topologySettings.internalValue = value;
  }
  public resetTopologySettings() {
    this._topologySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySettingsInput() {
    return this._topologySettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_spoofing: cdktf.booleanToTerraform(this._antiSpoofing),
      cluster_network_type: cdktf.stringToTerraform(this._clusterNetworkType),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      dynamic_ip: cdktf.booleanToTerraform(this._dynamicIp),
      gateway_uid: cdktf.stringToTerraform(this._gatewayUid),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_mask_length: cdktf.numberToTerraform(this._ipv4MaskLength),
      ipv4_network_mask: cdktf.stringToTerraform(this._ipv4NetworkMask),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_mask_length: cdktf.numberToTerraform(this._ipv6MaskLength),
      ipv6_network_mask: cdktf.stringToTerraform(this._ipv6NetworkMask),
      monitored_by_cluster: cdktf.booleanToTerraform(this._monitoredByCluster),
      name: cdktf.stringToTerraform(this._name),
      network_interface_type: cdktf.stringToTerraform(this._networkInterfaceType),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      topology: cdktf.stringToTerraform(this._topology),
      anti_spoofing_settings: managementInterfaceAntiSpoofingSettingsToTerraform(this._antiSpoofingSettings.internalValue),
      cluster_members: cdktf.listMapper(managementInterfaceClusterMembersToTerraform, true)(this._clusterMembers.internalValue),
      security_zone_settings: managementInterfaceSecurityZoneSettingsToTerraform(this._securityZoneSettings.internalValue),
      topology_settings: managementInterfaceTopologySettingsToTerraform(this._topologySettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_spoofing: {
        value: cdktf.booleanToHclTerraform(this._antiSpoofing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_network_type: {
        value: cdktf.stringToHclTerraform(this._clusterNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      dynamic_ip: {
        value: cdktf.booleanToHclTerraform(this._dynamicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_uid: {
        value: cdktf.stringToHclTerraform(this._gatewayUid),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_mask_length: {
        value: cdktf.numberToHclTerraform(this._ipv4MaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_network_mask: {
        value: cdktf.stringToHclTerraform(this._ipv4NetworkMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_mask_length: {
        value: cdktf.numberToHclTerraform(this._ipv6MaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_network_mask: {
        value: cdktf.stringToHclTerraform(this._ipv6NetworkMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitored_by_cluster: {
        value: cdktf.booleanToHclTerraform(this._monitoredByCluster),
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
      network_interface_type: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      topology: {
        value: cdktf.stringToHclTerraform(this._topology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_spoofing_settings: {
        value: managementInterfaceAntiSpoofingSettingsToHclTerraform(this._antiSpoofingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementInterfaceAntiSpoofingSettingsList",
      },
      cluster_members: {
        value: cdktf.listMapperHcl(managementInterfaceClusterMembersToHclTerraform, true)(this._clusterMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementInterfaceClusterMembersList",
      },
      security_zone_settings: {
        value: managementInterfaceSecurityZoneSettingsToHclTerraform(this._securityZoneSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementInterfaceSecurityZoneSettingsList",
      },
      topology_settings: {
        value: managementInterfaceTopologySettingsToHclTerraform(this._topologySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementInterfaceTopologySettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
