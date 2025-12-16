// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIpsecVpnSessionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Peer authentication mode. PSK - In this mode a secret key shared between local and peer sites is to be used for authentication. The secret key can be a string with a maximum length of 128 characters. CERTIFICATE - In this mode a certificate defined at the global level is to be used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#authentication_mode PolicyIpsecVpnSession#authentication_mode}
  */
  readonly authenticationMode?: string;
  /**
  * Compliance suite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#compliance_suite PolicyIpsecVpnSession#compliance_suite}
  */
  readonly complianceSuite?: string;
  /**
  * Connection initiation mode used by local endpoint to establish ike connection with peer site. INITIATOR - In this mode local endpoint initiates tunnel setup and will also respond to incoming tunnel setup requests from peer gateway. RESPOND_ONLY - In this mode, local endpoint shall only respond to incoming tunnel setup requests. It shall not initiate the tunnel setup. ON_DEMAND - In this mode local endpoint will initiate tunnel creation once first packet matching the policy rule is received and will also respond to incoming initiation request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#connection_initiation_mode PolicyIpsecVpnSession#connection_initiation_mode}
  */
  readonly connectionInitiationMode?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#description PolicyIpsecVpnSession#description}
  */
  readonly description?: string;
  /**
  * The traffic direction apply to the MSS clamping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#direction PolicyIpsecVpnSession#direction}
  */
  readonly direction?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#display_name PolicyIpsecVpnSession#display_name}
  */
  readonly displayName: string;
  /**
  * Policy path referencing dpd profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#dpd_profile_path PolicyIpsecVpnSession#dpd_profile_path}
  */
  readonly dpdProfilePath?: string;
  /**
  * Enable/Disable IPSec VPN session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#enabled PolicyIpsecVpnSession#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#id PolicyIpsecVpnSession#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Policy path referencing Ike profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#ike_profile_path PolicyIpsecVpnSession#ike_profile_path}
  */
  readonly ikeProfilePath?: string;
  /**
  * IP Tunnel interface (commonly referred as VTI) ip addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#ip_addresses PolicyIpsecVpnSession#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Policy path referencing Local endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#local_endpoint_path PolicyIpsecVpnSession#local_endpoint_path}
  */
  readonly localEndpointPath: string;
  /**
  * Maximum amount of data the host will accept in a Tcp segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#max_segment_size PolicyIpsecVpnSession#max_segment_size}
  */
  readonly maxSegmentSize?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#nsx_id PolicyIpsecVpnSession#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Public IPv4/v6 address of the remote device terminating the VPN connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#peer_address PolicyIpsecVpnSession#peer_address}
  */
  readonly peerAddress: string;
  /**
  * Peer ID to uniquely identify the peer site. The peer ID is the public IP address of the remote device terminating the VPN tunnel. When NAT is configured for the peer, enter the private IP address of the peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#peer_id PolicyIpsecVpnSession#peer_id}
  */
  readonly peerId: string;
  /**
  * Subnet Prefix Length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#prefix_length PolicyIpsecVpnSession#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * IPSec Pre-shared key. Maximum length of this field is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#psk PolicyIpsecVpnSession#psk}
  */
  readonly psk?: string;
  /**
  * Policy path for IPSec VPN service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#service_path PolicyIpsecVpnSession#service_path}
  */
  readonly servicePath: string;
  /**
  * Policy path referencing tunnel profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#tunnel_profile_path PolicyIpsecVpnSession#tunnel_profile_path}
  */
  readonly tunnelProfilePath?: string;
  /**
  * A Policy Based VPN requires to define protect rules that match local and peer subnets. IPSec security associations is negotiated for each pair of local and peer subnet. A Route Based VPN is more flexible, more powerful and recommended over policy based VPN. IP Tunnel port is created and all traffic routed via tunnel port is protected. Routes can be configured statically or can be learned through BGP. A route based VPN is must for establishing redundant VPN session to remote site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#vpn_type PolicyIpsecVpnSession#vpn_type}
  */
  readonly vpnType: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#rule PolicyIpsecVpnSession#rule}
  */
  readonly rule?: PolicyIpsecVpnSessionRule[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#tag PolicyIpsecVpnSession#tag}
  */
  readonly tag?: PolicyIpsecVpnSessionTag[] | cdktf.IResolvable;
}
export interface PolicyIpsecVpnSessionRule {
  /**
  * PROTECT - Protect rules are defined per policy based IPSec VPN session. BYPASS - Bypass rules are defined per IPSec VPN service and affects all policy based IPSec VPN sessions. Bypass rules are prioritized over protect rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#action PolicyIpsecVpnSession#action}
  */
  readonly action?: string;
  /**
  * List of remote subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#destinations PolicyIpsecVpnSession#destinations}
  */
  readonly destinations?: string[];
  /**
  * List of local subnets. Specifying no value is interpreted as 0.0.0.0/0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#sources PolicyIpsecVpnSession#sources}
  */
  readonly sources?: string[];
}

export function policyIpsecVpnSessionRuleToTerraform(struct?: PolicyIpsecVpnSessionRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    destinations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinations),
    sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sources),
  }
}


export function policyIpsecVpnSessionRuleToHclTerraform(struct?: PolicyIpsecVpnSessionRule | cdktf.IResolvable): any {
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
    destinations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sources),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyIpsecVpnSessionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpsecVpnSessionRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._destinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations;
    }
    if (this._sources !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIpsecVpnSessionRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._destinations = undefined;
      this._sources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._destinations = value.destinations;
      this._sources = value.sources;
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

  // destinations - computed: false, optional: true, required: false
  private _destinations?: string[]; 
  public get destinations() {
    return cdktf.Fn.tolist(this.getListAttribute('destinations'));
  }
  public set destinations(value: string[]) {
    this._destinations = value;
  }
  public resetDestinations() {
    this._destinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations;
  }

  // nsx_id - computed: true, optional: false, required: false
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return cdktf.Fn.tolist(this.getListAttribute('sources'));
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }
}

export class PolicyIpsecVpnSessionRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyIpsecVpnSessionRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpsecVpnSessionRuleOutputReference {
    return new PolicyIpsecVpnSessionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIpsecVpnSessionTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#scope PolicyIpsecVpnSession#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#tag PolicyIpsecVpnSession#tag}
  */
  readonly tag?: string;
}

export function policyIpsecVpnSessionTagToTerraform(struct?: PolicyIpsecVpnSessionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIpsecVpnSessionTagToHclTerraform(struct?: PolicyIpsecVpnSessionTag | cdktf.IResolvable): any {
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

export class PolicyIpsecVpnSessionTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpsecVpnSessionTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpsecVpnSessionTag | cdktf.IResolvable | undefined) {
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

export class PolicyIpsecVpnSessionTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIpsecVpnSessionTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpsecVpnSessionTagOutputReference {
    return new PolicyIpsecVpnSessionTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session nsxt_policy_ipsec_vpn_session}
*/
export class PolicyIpsecVpnSession extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ipsec_vpn_session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIpsecVpnSession resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIpsecVpnSession to import
  * @param importFromId The id of the existing PolicyIpsecVpnSession that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIpsecVpnSession to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ipsec_vpn_session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_session nsxt_policy_ipsec_vpn_session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIpsecVpnSessionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIpsecVpnSessionConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ipsec_vpn_session',
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
    this._authenticationMode = config.authenticationMode;
    this._complianceSuite = config.complianceSuite;
    this._connectionInitiationMode = config.connectionInitiationMode;
    this._description = config.description;
    this._direction = config.direction;
    this._displayName = config.displayName;
    this._dpdProfilePath = config.dpdProfilePath;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ikeProfilePath = config.ikeProfilePath;
    this._ipAddresses = config.ipAddresses;
    this._localEndpointPath = config.localEndpointPath;
    this._maxSegmentSize = config.maxSegmentSize;
    this._nsxId = config.nsxId;
    this._peerAddress = config.peerAddress;
    this._peerId = config.peerId;
    this._prefixLength = config.prefixLength;
    this._psk = config.psk;
    this._servicePath = config.servicePath;
    this._tunnelProfilePath = config.tunnelProfilePath;
    this._vpnType = config.vpnType;
    this._rule.internalValue = config.rule;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_mode - computed: false, optional: true, required: false
  private _authenticationMode?: string; 
  public get authenticationMode() {
    return this.getStringAttribute('authentication_mode');
  }
  public set authenticationMode(value: string) {
    this._authenticationMode = value;
  }
  public resetAuthenticationMode() {
    this._authenticationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationModeInput() {
    return this._authenticationMode;
  }

  // compliance_suite - computed: false, optional: true, required: false
  private _complianceSuite?: string; 
  public get complianceSuite() {
    return this.getStringAttribute('compliance_suite');
  }
  public set complianceSuite(value: string) {
    this._complianceSuite = value;
  }
  public resetComplianceSuite() {
    this._complianceSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceSuiteInput() {
    return this._complianceSuite;
  }

  // connection_initiation_mode - computed: false, optional: true, required: false
  private _connectionInitiationMode?: string; 
  public get connectionInitiationMode() {
    return this.getStringAttribute('connection_initiation_mode');
  }
  public set connectionInitiationMode(value: string) {
    this._connectionInitiationMode = value;
  }
  public resetConnectionInitiationMode() {
    this._connectionInitiationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInitiationModeInput() {
    return this._connectionInitiationMode;
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

  // dpd_profile_path - computed: true, optional: true, required: false
  private _dpdProfilePath?: string; 
  public get dpdProfilePath() {
    return this.getStringAttribute('dpd_profile_path');
  }
  public set dpdProfilePath(value: string) {
    this._dpdProfilePath = value;
  }
  public resetDpdProfilePath() {
    this._dpdProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdProfilePathInput() {
    return this._dpdProfilePath;
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

  // ike_profile_path - computed: true, optional: true, required: false
  private _ikeProfilePath?: string; 
  public get ikeProfilePath() {
    return this.getStringAttribute('ike_profile_path');
  }
  public set ikeProfilePath(value: string) {
    this._ikeProfilePath = value;
  }
  public resetIkeProfilePath() {
    this._ikeProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeProfilePathInput() {
    return this._ikeProfilePath;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // local_endpoint_path - computed: false, optional: false, required: true
  private _localEndpointPath?: string; 
  public get localEndpointPath() {
    return this.getStringAttribute('local_endpoint_path');
  }
  public set localEndpointPath(value: string) {
    this._localEndpointPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localEndpointPathInput() {
    return this._localEndpointPath;
  }

  // max_segment_size - computed: true, optional: true, required: false
  private _maxSegmentSize?: number; 
  public get maxSegmentSize() {
    return this.getNumberAttribute('max_segment_size');
  }
  public set maxSegmentSize(value: number) {
    this._maxSegmentSize = value;
  }
  public resetMaxSegmentSize() {
    this._maxSegmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSegmentSizeInput() {
    return this._maxSegmentSize;
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

  // peer_address - computed: false, optional: false, required: true
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress;
  }

  // peer_id - computed: false, optional: false, required: true
  private _peerId?: string; 
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }
  public set peerId(value: string) {
    this._peerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIdInput() {
    return this._peerId;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
  }

  // psk - computed: false, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // service_path - computed: false, optional: false, required: true
  private _servicePath?: string; 
  public get servicePath() {
    return this.getStringAttribute('service_path');
  }
  public set servicePath(value: string) {
    this._servicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePathInput() {
    return this._servicePath;
  }

  // tunnel_profile_path - computed: true, optional: true, required: false
  private _tunnelProfilePath?: string; 
  public get tunnelProfilePath() {
    return this.getStringAttribute('tunnel_profile_path');
  }
  public set tunnelProfilePath(value: string) {
    this._tunnelProfilePath = value;
  }
  public resetTunnelProfilePath() {
    this._tunnelProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProfilePathInput() {
    return this._tunnelProfilePath;
  }

  // vpn_type - computed: false, optional: false, required: true
  private _vpnType?: string; 
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string) {
    this._vpnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new PolicyIpsecVpnSessionRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: PolicyIpsecVpnSessionRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyIpsecVpnSessionTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIpsecVpnSessionTag[] | cdktf.IResolvable) {
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
      authentication_mode: cdktf.stringToTerraform(this._authenticationMode),
      compliance_suite: cdktf.stringToTerraform(this._complianceSuite),
      connection_initiation_mode: cdktf.stringToTerraform(this._connectionInitiationMode),
      description: cdktf.stringToTerraform(this._description),
      direction: cdktf.stringToTerraform(this._direction),
      display_name: cdktf.stringToTerraform(this._displayName),
      dpd_profile_path: cdktf.stringToTerraform(this._dpdProfilePath),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ike_profile_path: cdktf.stringToTerraform(this._ikeProfilePath),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      local_endpoint_path: cdktf.stringToTerraform(this._localEndpointPath),
      max_segment_size: cdktf.numberToTerraform(this._maxSegmentSize),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      peer_address: cdktf.stringToTerraform(this._peerAddress),
      peer_id: cdktf.stringToTerraform(this._peerId),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      psk: cdktf.stringToTerraform(this._psk),
      service_path: cdktf.stringToTerraform(this._servicePath),
      tunnel_profile_path: cdktf.stringToTerraform(this._tunnelProfilePath),
      vpn_type: cdktf.stringToTerraform(this._vpnType),
      rule: cdktf.listMapper(policyIpsecVpnSessionRuleToTerraform, true)(this._rule.internalValue),
      tag: cdktf.listMapper(policyIpsecVpnSessionTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_mode: {
        value: cdktf.stringToHclTerraform(this._authenticationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_suite: {
        value: cdktf.stringToHclTerraform(this._complianceSuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_initiation_mode: {
        value: cdktf.stringToHclTerraform(this._connectionInitiationMode),
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
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
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
      dpd_profile_path: {
        value: cdktf.stringToHclTerraform(this._dpdProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_profile_path: {
        value: cdktf.stringToHclTerraform(this._ikeProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      local_endpoint_path: {
        value: cdktf.stringToHclTerraform(this._localEndpointPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_segment_size: {
        value: cdktf.numberToHclTerraform(this._maxSegmentSize),
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
      peer_address: {
        value: cdktf.stringToHclTerraform(this._peerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_id: {
        value: cdktf.stringToHclTerraform(this._peerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_path: {
        value: cdktf.stringToHclTerraform(this._servicePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_profile_path: {
        value: cdktf.stringToHclTerraform(this._tunnelProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_type: {
        value: cdktf.stringToHclTerraform(this._vpnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(policyIpsecVpnSessionRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIpsecVpnSessionRuleList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIpsecVpnSessionTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIpsecVpnSessionTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
