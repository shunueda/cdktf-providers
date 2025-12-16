// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySegmentPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#description PolicySegmentPort#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#display_name PolicySegmentPort#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#id PolicySegmentPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#nsx_id PolicySegmentPort#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Path of the segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#segment_path PolicySegmentPort#segment_path}
  */
  readonly segmentPath: string;
  /**
  * attachment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#attachment PolicySegmentPort#attachment}
  */
  readonly attachment?: PolicySegmentPortAttachment;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#context PolicySegmentPort#context}
  */
  readonly context?: PolicySegmentPortContext;
  /**
  * discovery_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#discovery_profile PolicySegmentPort#discovery_profile}
  */
  readonly discoveryProfile?: PolicySegmentPortDiscoveryProfile;
  /**
  * qos_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#qos_profile PolicySegmentPort#qos_profile}
  */
  readonly qosProfile?: PolicySegmentPortQosProfile;
  /**
  * security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#security_profile PolicySegmentPort#security_profile}
  */
  readonly securityProfile?: PolicySegmentPortSecurityProfile;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#tag PolicySegmentPort#tag}
  */
  readonly tag?: PolicySegmentPortTag[] | cdktf.IResolvable;
}
export interface PolicySegmentPortAttachment {
  /**
  * Indicate how IP will be allocated for the port. Allowed values are IP_POOL, MAC_POOL, BOTH, DHCP, DHCPV6, SLAAC, NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#allocate_addresses PolicySegmentPort#allocate_addresses}
  */
  readonly allocateAddresses?: string;
  /**
  * ID used to identify/look up a child attachment behind a parent attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#app_id PolicySegmentPort#app_id}
  */
  readonly appId?: string;
  /**
  * Evpn tenant VLAN IDs the Parent logical-port serves.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#evpn_vlans PolicySegmentPort#evpn_vlans}
  */
  readonly evpnVlans?: string[];
  /**
  * ID used to identify/look up a child attachment behind a parent attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#hyperbus_mode PolicySegmentPort#hyperbus_mode}
  */
  readonly hyperbusMode?: string;
  /**
  * VIF UUID on NSX Manager. If the attachement type is PARENT, this property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#id PolicySegmentPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VIF UUID on NSX Manager. If the attachement type is PARENT, this property is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#traffic_tag PolicySegmentPort#traffic_tag}
  */
  readonly trafficTag?: number;
  /**
  * Type of port attachment. PARENT type is automatically set if evpn_vlans or hyperbus_mode is configured. INDEPENDENT type is automatically set for ports that belong to Segment of type DVPortgroup. STATIC type is deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#type PolicySegmentPort#type}
  */
  readonly type?: string;
}

export function policySegmentPortAttachmentToTerraform(struct?: PolicySegmentPortAttachmentOutputReference | PolicySegmentPortAttachment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate_addresses: cdktf.stringToTerraform(struct!.allocateAddresses),
    app_id: cdktf.stringToTerraform(struct!.appId),
    evpn_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.evpnVlans),
    hyperbus_mode: cdktf.stringToTerraform(struct!.hyperbusMode),
    id: cdktf.stringToTerraform(struct!.id),
    traffic_tag: cdktf.numberToTerraform(struct!.trafficTag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policySegmentPortAttachmentToHclTerraform(struct?: PolicySegmentPortAttachmentOutputReference | PolicySegmentPortAttachment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate_addresses: {
      value: cdktf.stringToHclTerraform(struct!.allocateAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evpn_vlans: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.evpnVlans),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hyperbus_mode: {
      value: cdktf.stringToHclTerraform(struct!.hyperbusMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_tag: {
      value: cdktf.numberToHclTerraform(struct!.trafficTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySegmentPortAttachmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentPortAttachment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocateAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocateAddresses = this._allocateAddresses;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._evpnVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.evpnVlans = this._evpnVlans;
    }
    if (this._hyperbusMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.hyperbusMode = this._hyperbusMode;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._trafficTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficTag = this._trafficTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySegmentPortAttachment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocateAddresses = undefined;
      this._appId = undefined;
      this._evpnVlans = undefined;
      this._hyperbusMode = undefined;
      this._id = undefined;
      this._trafficTag = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocateAddresses = value.allocateAddresses;
      this._appId = value.appId;
      this._evpnVlans = value.evpnVlans;
      this._hyperbusMode = value.hyperbusMode;
      this._id = value.id;
      this._trafficTag = value.trafficTag;
      this._type = value.type;
    }
  }

  // allocate_addresses - computed: false, optional: true, required: false
  private _allocateAddresses?: string; 
  public get allocateAddresses() {
    return this.getStringAttribute('allocate_addresses');
  }
  public set allocateAddresses(value: string) {
    this._allocateAddresses = value;
  }
  public resetAllocateAddresses() {
    this._allocateAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateAddressesInput() {
    return this._allocateAddresses;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // evpn_vlans - computed: false, optional: true, required: false
  private _evpnVlans?: string[]; 
  public get evpnVlans() {
    return this.getListAttribute('evpn_vlans');
  }
  public set evpnVlans(value: string[]) {
    this._evpnVlans = value;
  }
  public resetEvpnVlans() {
    this._evpnVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evpnVlansInput() {
    return this._evpnVlans;
  }

  // hyperbus_mode - computed: false, optional: true, required: false
  private _hyperbusMode?: string; 
  public get hyperbusMode() {
    return this.getStringAttribute('hyperbus_mode');
  }
  public set hyperbusMode(value: string) {
    this._hyperbusMode = value;
  }
  public resetHyperbusMode() {
    this._hyperbusMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperbusModeInput() {
    return this._hyperbusMode;
  }

  // id - computed: false, optional: true, required: false
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

  // traffic_tag - computed: false, optional: true, required: false
  private _trafficTag?: number; 
  public get trafficTag() {
    return this.getNumberAttribute('traffic_tag');
  }
  public set trafficTag(value: number) {
    this._trafficTag = value;
  }
  public resetTrafficTag() {
    this._trafficTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTagInput() {
    return this._trafficTag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface PolicySegmentPortContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#project_id PolicySegmentPort#project_id}
  */
  readonly projectId: string;
}

export function policySegmentPortContextToTerraform(struct?: PolicySegmentPortContextOutputReference | PolicySegmentPortContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policySegmentPortContextToHclTerraform(struct?: PolicySegmentPortContextOutputReference | PolicySegmentPortContext): any {
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

export class PolicySegmentPortContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentPortContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySegmentPortContext | undefined) {
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
export interface PolicySegmentPortDiscoveryProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#binding_map_path PolicySegmentPort#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated IP Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#ip_discovery_profile_path PolicySegmentPort#ip_discovery_profile_path}
  */
  readonly ipDiscoveryProfilePath?: string;
  /**
  * Policy path of associated Mac Discovery Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#mac_discovery_profile_path PolicySegmentPort#mac_discovery_profile_path}
  */
  readonly macDiscoveryProfilePath?: string;
}

export function policySegmentPortDiscoveryProfileToTerraform(struct?: PolicySegmentPortDiscoveryProfileOutputReference | PolicySegmentPortDiscoveryProfile): any {
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


export function policySegmentPortDiscoveryProfileToHclTerraform(struct?: PolicySegmentPortDiscoveryProfileOutputReference | PolicySegmentPortDiscoveryProfile): any {
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

export class PolicySegmentPortDiscoveryProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentPortDiscoveryProfile | undefined {
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

  public set internalValue(value: PolicySegmentPortDiscoveryProfile | undefined) {
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
export interface PolicySegmentPortQosProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#binding_map_path PolicySegmentPort#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated QoS Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#qos_profile_path PolicySegmentPort#qos_profile_path}
  */
  readonly qosProfilePath: string;
}

export function policySegmentPortQosProfileToTerraform(struct?: PolicySegmentPortQosProfileOutputReference | PolicySegmentPortQosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_map_path: cdktf.stringToTerraform(struct!.bindingMapPath),
    qos_profile_path: cdktf.stringToTerraform(struct!.qosProfilePath),
  }
}


export function policySegmentPortQosProfileToHclTerraform(struct?: PolicySegmentPortQosProfileOutputReference | PolicySegmentPortQosProfile): any {
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

export class PolicySegmentPortQosProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentPortQosProfile | undefined {
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

  public set internalValue(value: PolicySegmentPortQosProfile | undefined) {
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
export interface PolicySegmentPortSecurityProfile {
  /**
  * Policy path of profile binding map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#binding_map_path PolicySegmentPort#binding_map_path}
  */
  readonly bindingMapPath?: string;
  /**
  * Policy path of associated Segment Security Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#security_profile_path PolicySegmentPort#security_profile_path}
  */
  readonly securityProfilePath?: string;
  /**
  * Policy path of associated Spoofguard Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#spoofguard_profile_path PolicySegmentPort#spoofguard_profile_path}
  */
  readonly spoofguardProfilePath?: string;
}

export function policySegmentPortSecurityProfileToTerraform(struct?: PolicySegmentPortSecurityProfileOutputReference | PolicySegmentPortSecurityProfile): any {
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


export function policySegmentPortSecurityProfileToHclTerraform(struct?: PolicySegmentPortSecurityProfileOutputReference | PolicySegmentPortSecurityProfile): any {
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

export class PolicySegmentPortSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentPortSecurityProfile | undefined {
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

  public set internalValue(value: PolicySegmentPortSecurityProfile | undefined) {
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
export interface PolicySegmentPortTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#scope PolicySegmentPort#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#tag PolicySegmentPort#tag}
  */
  readonly tag?: string;
}

export function policySegmentPortTagToTerraform(struct?: PolicySegmentPortTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policySegmentPortTagToHclTerraform(struct?: PolicySegmentPortTag | cdktf.IResolvable): any {
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

export class PolicySegmentPortTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentPortTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentPortTag | cdktf.IResolvable | undefined) {
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

export class PolicySegmentPortTagList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentPortTag[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentPortTagOutputReference {
    return new PolicySegmentPortTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port nsxt_policy_segment_port}
*/
export class PolicySegmentPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_segment_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySegmentPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySegmentPort to import
  * @param importFromId The id of the existing PolicySegmentPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySegmentPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_segment_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_port nsxt_policy_segment_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySegmentPortConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySegmentPortConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_segment_port',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._segmentPath = config.segmentPath;
    this._attachment.internalValue = config.attachment;
    this._context.internalValue = config.context;
    this._discoveryProfile.internalValue = config.discoveryProfile;
    this._qosProfile.internalValue = config.qosProfile;
    this._securityProfile.internalValue = config.securityProfile;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // segment_path - computed: false, optional: false, required: true
  private _segmentPath?: string; 
  public get segmentPath() {
    return this.getStringAttribute('segment_path');
  }
  public set segmentPath(value: string) {
    this._segmentPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPathInput() {
    return this._segmentPath;
  }

  // attachment - computed: false, optional: true, required: false
  private _attachment = new PolicySegmentPortAttachmentOutputReference(this, "attachment");
  public get attachment() {
    return this._attachment;
  }
  public putAttachment(value: PolicySegmentPortAttachment) {
    this._attachment.internalValue = value;
  }
  public resetAttachment() {
    this._attachment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentInput() {
    return this._attachment.internalValue;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicySegmentPortContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicySegmentPortContext) {
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
  private _discoveryProfile = new PolicySegmentPortDiscoveryProfileOutputReference(this, "discovery_profile");
  public get discoveryProfile() {
    return this._discoveryProfile;
  }
  public putDiscoveryProfile(value: PolicySegmentPortDiscoveryProfile) {
    this._discoveryProfile.internalValue = value;
  }
  public resetDiscoveryProfile() {
    this._discoveryProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryProfileInput() {
    return this._discoveryProfile.internalValue;
  }

  // qos_profile - computed: false, optional: true, required: false
  private _qosProfile = new PolicySegmentPortQosProfileOutputReference(this, "qos_profile");
  public get qosProfile() {
    return this._qosProfile;
  }
  public putQosProfile(value: PolicySegmentPortQosProfile) {
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
  private _securityProfile = new PolicySegmentPortSecurityProfileOutputReference(this, "security_profile");
  public get securityProfile() {
    return this._securityProfile;
  }
  public putSecurityProfile(value: PolicySegmentPortSecurityProfile) {
    this._securityProfile.internalValue = value;
  }
  public resetSecurityProfile() {
    this._securityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicySegmentPortTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicySegmentPortTag[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      segment_path: cdktf.stringToTerraform(this._segmentPath),
      attachment: policySegmentPortAttachmentToTerraform(this._attachment.internalValue),
      context: policySegmentPortContextToTerraform(this._context.internalValue),
      discovery_profile: policySegmentPortDiscoveryProfileToTerraform(this._discoveryProfile.internalValue),
      qos_profile: policySegmentPortQosProfileToTerraform(this._qosProfile.internalValue),
      security_profile: policySegmentPortSecurityProfileToTerraform(this._securityProfile.internalValue),
      tag: cdktf.listMapper(policySegmentPortTagToTerraform, true)(this._tag.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_path: {
        value: cdktf.stringToHclTerraform(this._segmentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attachment: {
        value: policySegmentPortAttachmentToHclTerraform(this._attachment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentPortAttachmentList",
      },
      context: {
        value: policySegmentPortContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentPortContextList",
      },
      discovery_profile: {
        value: policySegmentPortDiscoveryProfileToHclTerraform(this._discoveryProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentPortDiscoveryProfileList",
      },
      qos_profile: {
        value: policySegmentPortQosProfileToHclTerraform(this._qosProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentPortQosProfileList",
      },
      security_profile: {
        value: policySegmentPortSecurityProfileToHclTerraform(this._securityProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentPortSecurityProfileList",
      },
      tag: {
        value: cdktf.listMapperHcl(policySegmentPortTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicySegmentPortTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
