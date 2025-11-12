// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTier0GatewayInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Vlan ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#access_vlan_id PolicyTier0GatewayInterface#access_vlan_id}
  */
  readonly accessVlanId?: number;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#description PolicyTier0GatewayInterface#description}
  */
  readonly description?: string;
  /**
  * Policy path for DHCP relay config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#dhcp_relay_path PolicyTier0GatewayInterface#dhcp_relay_path}
  */
  readonly dhcpRelayPath?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#display_name PolicyTier0GatewayInterface#display_name}
  */
  readonly displayName: string;
  /**
  * Association of interface with edge cluster member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#edge_cluster_member_index PolicyTier0GatewayInterface#edge_cluster_member_index}
  */
  readonly edgeClusterMemberIndex?: number;
  /**
  * Policy path for edge node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#edge_node_path PolicyTier0GatewayInterface#edge_node_path}
  */
  readonly edgeNodePath?: string;
  /**
  * Enable Protocol Independent Multicast on Interface, applicable only when interface type is EXTERNAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#enable_pim PolicyTier0GatewayInterface#enable_pim}
  */
  readonly enablePim?: boolean | cdktf.IResolvable;
  /**
  * Policy path for Tier0 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#gateway_path PolicyTier0GatewayInterface#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#id PolicyTier0GatewayInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The path of an IPv6 NDRA profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#ipv6_ndra_profile_path PolicyTier0GatewayInterface#ipv6_ndra_profile_path}
  */
  readonly ipv6NdraProfilePath?: string;
  /**
  * Maximum transmission unit specifies the size of the largest packet that a network protocol can transmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#mtu PolicyTier0GatewayInterface#mtu}
  */
  readonly mtu?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#nsx_id PolicyTier0GatewayInterface#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Policy path for connected segment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#segment_path PolicyTier0GatewayInterface#segment_path}
  */
  readonly segmentPath?: string;
  /**
  * Path of the site the Tier0 edge cluster belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#site_path PolicyTier0GatewayInterface#site_path}
  */
  readonly sitePath?: string;
  /**
  * List of IP addresses and network prefixes for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#subnets PolicyTier0GatewayInterface#subnets}
  */
  readonly subnets: string[];
  /**
  * Interface Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#type PolicyTier0GatewayInterface#type}
  */
  readonly type?: string;
  /**
  * Unicast Reverse Path Forwarding mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#urpf_mode PolicyTier0GatewayInterface#urpf_mode}
  */
  readonly urpfMode?: string;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#ospf PolicyTier0GatewayInterface#ospf}
  */
  readonly ospf?: PolicyTier0GatewayInterfaceOspf;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#tag PolicyTier0GatewayInterface#tag}
  */
  readonly tag?: PolicyTier0GatewayInterfaceTag[] | cdktf.IResolvable;
}
export interface PolicyTier0GatewayInterfaceOspf {
  /**
  * OSPF Area Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#area_path PolicyTier0GatewayInterface#area_path}
  */
  readonly areaPath: string;
  /**
  * BFD profile path to be applied to all OSPF peers in this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#bfd_profile_path PolicyTier0GatewayInterface#bfd_profile_path}
  */
  readonly bfdProfilePath?: string;
  /**
  * Number of seconds that router must wait before it declares OSPF neighbor router as down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#dead_interval PolicyTier0GatewayInterface#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#enable_bfd PolicyTier0GatewayInterface#enable_bfd}
  */
  readonly enableBfd?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#enabled PolicyTier0GatewayInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Interval in seconds between hello packets that OSPF sends on this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#hello_interval PolicyTier0GatewayInterface#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPF network type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#network_type PolicyTier0GatewayInterface#network_type}
  */
  readonly networkType?: string;
}

export function policyTier0GatewayInterfaceOspfToTerraform(struct?: PolicyTier0GatewayInterfaceOspfOutputReference | PolicyTier0GatewayInterfaceOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    area_path: cdktf.stringToTerraform(struct!.areaPath),
    bfd_profile_path: cdktf.stringToTerraform(struct!.bfdProfilePath),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    enable_bfd: cdktf.booleanToTerraform(struct!.enableBfd),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    network_type: cdktf.stringToTerraform(struct!.networkType),
  }
}


export function policyTier0GatewayInterfaceOspfToHclTerraform(struct?: PolicyTier0GatewayInterfaceOspfOutputReference | PolicyTier0GatewayInterfaceOspf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    area_path: {
      value: cdktf.stringToHclTerraform(struct!.areaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bfd_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.bfdProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_bfd: {
      value: cdktf.booleanToHclTerraform(struct!.enableBfd),
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
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTier0GatewayInterfaceOspfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyTier0GatewayInterfaceOspf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._areaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.areaPath = this._areaPath;
    }
    if (this._bfdProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdProfilePath = this._bfdProfilePath;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._enableBfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBfd = this._enableBfd;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTier0GatewayInterfaceOspf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._areaPath = undefined;
      this._bfdProfilePath = undefined;
      this._deadInterval = undefined;
      this._enableBfd = undefined;
      this._enabled = undefined;
      this._helloInterval = undefined;
      this._networkType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._areaPath = value.areaPath;
      this._bfdProfilePath = value.bfdProfilePath;
      this._deadInterval = value.deadInterval;
      this._enableBfd = value.enableBfd;
      this._enabled = value.enabled;
      this._helloInterval = value.helloInterval;
      this._networkType = value.networkType;
    }
  }

  // area_path - computed: false, optional: false, required: true
  private _areaPath?: string; 
  public get areaPath() {
    return this.getStringAttribute('area_path');
  }
  public set areaPath(value: string) {
    this._areaPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPathInput() {
    return this._areaPath;
  }

  // bfd_profile_path - computed: false, optional: true, required: false
  private _bfdProfilePath?: string; 
  public get bfdProfilePath() {
    return this.getStringAttribute('bfd_profile_path');
  }
  public set bfdProfilePath(value: string) {
    this._bfdProfilePath = value;
  }
  public resetBfdProfilePath() {
    this._bfdProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdProfilePathInput() {
    return this._bfdProfilePath;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // enable_bfd - computed: false, optional: true, required: false
  private _enableBfd?: boolean | cdktf.IResolvable; 
  public get enableBfd() {
    return this.getBooleanAttribute('enable_bfd');
  }
  public set enableBfd(value: boolean | cdktf.IResolvable) {
    this._enableBfd = value;
  }
  public resetEnableBfd() {
    this._enableBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBfdInput() {
    return this._enableBfd;
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

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }
}
export interface PolicyTier0GatewayInterfaceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#scope PolicyTier0GatewayInterface#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#tag PolicyTier0GatewayInterface#tag}
  */
  readonly tag?: string;
}

export function policyTier0GatewayInterfaceTagToTerraform(struct?: PolicyTier0GatewayInterfaceTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyTier0GatewayInterfaceTagToHclTerraform(struct?: PolicyTier0GatewayInterfaceTag | cdktf.IResolvable): any {
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

export class PolicyTier0GatewayInterfaceTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTier0GatewayInterfaceTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyTier0GatewayInterfaceTag | cdktf.IResolvable | undefined) {
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

export class PolicyTier0GatewayInterfaceTagList extends cdktf.ComplexList {
  public internalValue? : PolicyTier0GatewayInterfaceTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyTier0GatewayInterfaceTagOutputReference {
    return new PolicyTier0GatewayInterfaceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface nsxt_policy_tier0_gateway_interface}
*/
export class PolicyTier0GatewayInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_tier0_gateway_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTier0GatewayInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTier0GatewayInterface to import
  * @param importFromId The id of the existing PolicyTier0GatewayInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTier0GatewayInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_tier0_gateway_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_tier0_gateway_interface nsxt_policy_tier0_gateway_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTier0GatewayInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTier0GatewayInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_tier0_gateway_interface',
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
    this._accessVlanId = config.accessVlanId;
    this._description = config.description;
    this._dhcpRelayPath = config.dhcpRelayPath;
    this._displayName = config.displayName;
    this._edgeClusterMemberIndex = config.edgeClusterMemberIndex;
    this._edgeNodePath = config.edgeNodePath;
    this._enablePim = config.enablePim;
    this._gatewayPath = config.gatewayPath;
    this._id = config.id;
    this._ipv6NdraProfilePath = config.ipv6NdraProfilePath;
    this._mtu = config.mtu;
    this._nsxId = config.nsxId;
    this._segmentPath = config.segmentPath;
    this._sitePath = config.sitePath;
    this._subnets = config.subnets;
    this._type = config.type;
    this._urpfMode = config.urpfMode;
    this._ospf.internalValue = config.ospf;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan_id - computed: false, optional: true, required: false
  private _accessVlanId?: number; 
  public get accessVlanId() {
    return this.getNumberAttribute('access_vlan_id');
  }
  public set accessVlanId(value: number) {
    this._accessVlanId = value;
  }
  public resetAccessVlanId() {
    this._accessVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanIdInput() {
    return this._accessVlanId;
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

  // dhcp_relay_path - computed: false, optional: true, required: false
  private _dhcpRelayPath?: string; 
  public get dhcpRelayPath() {
    return this.getStringAttribute('dhcp_relay_path');
  }
  public set dhcpRelayPath(value: string) {
    this._dhcpRelayPath = value;
  }
  public resetDhcpRelayPath() {
    this._dhcpRelayPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRelayPathInput() {
    return this._dhcpRelayPath;
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

  // edge_cluster_member_index - computed: false, optional: true, required: false
  private _edgeClusterMemberIndex?: number; 
  public get edgeClusterMemberIndex() {
    return this.getNumberAttribute('edge_cluster_member_index');
  }
  public set edgeClusterMemberIndex(value: number) {
    this._edgeClusterMemberIndex = value;
  }
  public resetEdgeClusterMemberIndex() {
    this._edgeClusterMemberIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterMemberIndexInput() {
    return this._edgeClusterMemberIndex;
  }

  // edge_node_path - computed: false, optional: true, required: false
  private _edgeNodePath?: string; 
  public get edgeNodePath() {
    return this.getStringAttribute('edge_node_path');
  }
  public set edgeNodePath(value: string) {
    this._edgeNodePath = value;
  }
  public resetEdgeNodePath() {
    this._edgeNodePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodePathInput() {
    return this._edgeNodePath;
  }

  // enable_pim - computed: false, optional: true, required: false
  private _enablePim?: boolean | cdktf.IResolvable; 
  public get enablePim() {
    return this.getBooleanAttribute('enable_pim');
  }
  public set enablePim(value: boolean | cdktf.IResolvable) {
    this._enablePim = value;
  }
  public resetEnablePim() {
    this._enablePim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePimInput() {
    return this._enablePim;
  }

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
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

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // ipv6_ndra_profile_path - computed: true, optional: true, required: false
  private _ipv6NdraProfilePath?: string; 
  public get ipv6NdraProfilePath() {
    return this.getStringAttribute('ipv6_ndra_profile_path');
  }
  public set ipv6NdraProfilePath(value: string) {
    this._ipv6NdraProfilePath = value;
  }
  public resetIpv6NdraProfilePath() {
    this._ipv6NdraProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdraProfilePathInput() {
    return this._ipv6NdraProfilePath;
  }

  // locale_service_id - computed: true, optional: false, required: false
  public get localeServiceId() {
    return this.getStringAttribute('locale_service_id');
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // segment_path - computed: false, optional: true, required: false
  private _segmentPath?: string; 
  public get segmentPath() {
    return this.getStringAttribute('segment_path');
  }
  public set segmentPath(value: string) {
    this._segmentPath = value;
  }
  public resetSegmentPath() {
    this._segmentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPathInput() {
    return this._segmentPath;
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return this.getListAttribute('subnets');
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
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

  // ospf - computed: false, optional: true, required: false
  private _ospf = new PolicyTier0GatewayInterfaceOspfOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: PolicyTier0GatewayInterfaceOspf) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyTier0GatewayInterfaceTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyTier0GatewayInterfaceTag[] | cdktf.IResolvable) {
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
      access_vlan_id: cdktf.numberToTerraform(this._accessVlanId),
      description: cdktf.stringToTerraform(this._description),
      dhcp_relay_path: cdktf.stringToTerraform(this._dhcpRelayPath),
      display_name: cdktf.stringToTerraform(this._displayName),
      edge_cluster_member_index: cdktf.numberToTerraform(this._edgeClusterMemberIndex),
      edge_node_path: cdktf.stringToTerraform(this._edgeNodePath),
      enable_pim: cdktf.booleanToTerraform(this._enablePim),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      id: cdktf.stringToTerraform(this._id),
      ipv6_ndra_profile_path: cdktf.stringToTerraform(this._ipv6NdraProfilePath),
      mtu: cdktf.numberToTerraform(this._mtu),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      segment_path: cdktf.stringToTerraform(this._segmentPath),
      site_path: cdktf.stringToTerraform(this._sitePath),
      subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subnets),
      type: cdktf.stringToTerraform(this._type),
      urpf_mode: cdktf.stringToTerraform(this._urpfMode),
      ospf: policyTier0GatewayInterfaceOspfToTerraform(this._ospf.internalValue),
      tag: cdktf.listMapper(policyTier0GatewayInterfaceTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlan_id: {
        value: cdktf.numberToHclTerraform(this._accessVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_relay_path: {
        value: cdktf.stringToHclTerraform(this._dhcpRelayPath),
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
      edge_cluster_member_index: {
        value: cdktf.numberToHclTerraform(this._edgeClusterMemberIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      edge_node_path: {
        value: cdktf.stringToHclTerraform(this._edgeNodePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_pim: {
        value: cdktf.booleanToHclTerraform(this._enablePim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
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
      ipv6_ndra_profile_path: {
        value: cdktf.stringToHclTerraform(this._ipv6NdraProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      urpf_mode: {
        value: cdktf.stringToHclTerraform(this._urpfMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf: {
        value: policyTier0GatewayInterfaceOspfToHclTerraform(this._ospf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTier0GatewayInterfaceOspfList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyTier0GatewayInterfaceTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyTier0GatewayInterfaceTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
