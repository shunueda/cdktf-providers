// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicySegmentSecurityProfileAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#bpdu_filter_allow PolicySegmentSecurityProfileA#bpdu_filter_allow}
  */
  readonly bpduFilterAllow?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#bpdu_filter_enable PolicySegmentSecurityProfileA#bpdu_filter_enable}
  */
  readonly bpduFilterEnable?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#description PolicySegmentSecurityProfileA#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#dhcp_client_block_enabled PolicySegmentSecurityProfileA#dhcp_client_block_enabled}
  */
  readonly dhcpClientBlockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#dhcp_client_block_v6_enabled PolicySegmentSecurityProfileA#dhcp_client_block_v6_enabled}
  */
  readonly dhcpClientBlockV6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#dhcp_server_block_enabled PolicySegmentSecurityProfileA#dhcp_server_block_enabled}
  */
  readonly dhcpServerBlockEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#dhcp_server_block_v6_enabled PolicySegmentSecurityProfileA#dhcp_server_block_v6_enabled}
  */
  readonly dhcpServerBlockV6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#display_name PolicySegmentSecurityProfileA#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#id PolicySegmentSecurityProfileA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#non_ip_traffic_block_enabled PolicySegmentSecurityProfileA#non_ip_traffic_block_enabled}
  */
  readonly nonIpTrafficBlockEnabled?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#nsx_id PolicySegmentSecurityProfileA#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#ra_guard_enabled PolicySegmentSecurityProfileA#ra_guard_enabled}
  */
  readonly raGuardEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#rate_limits_enabled PolicySegmentSecurityProfileA#rate_limits_enabled}
  */
  readonly rateLimitsEnabled?: boolean | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#context PolicySegmentSecurityProfileA#context}
  */
  readonly context?: PolicySegmentSecurityProfileContext;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#rate_limit PolicySegmentSecurityProfileA#rate_limit}
  */
  readonly rateLimit?: PolicySegmentSecurityProfileRateLimit[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#tag PolicySegmentSecurityProfileA#tag}
  */
  readonly tag?: PolicySegmentSecurityProfileTag[] | cdktf.IResolvable;
}
export interface PolicySegmentSecurityProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#project_id PolicySegmentSecurityProfileA#project_id}
  */
  readonly projectId: string;
}

export function policySegmentSecurityProfileContextToTerraform(struct?: PolicySegmentSecurityProfileContextOutputReference | PolicySegmentSecurityProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policySegmentSecurityProfileContextToHclTerraform(struct?: PolicySegmentSecurityProfileContextOutputReference | PolicySegmentSecurityProfileContext): any {
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

export class PolicySegmentSecurityProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicySegmentSecurityProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySegmentSecurityProfileContext | undefined) {
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
export interface PolicySegmentSecurityProfileRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#rx_broadcast PolicySegmentSecurityProfileA#rx_broadcast}
  */
  readonly rxBroadcast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#rx_multicast PolicySegmentSecurityProfileA#rx_multicast}
  */
  readonly rxMulticast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#tx_broadcast PolicySegmentSecurityProfileA#tx_broadcast}
  */
  readonly txBroadcast?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#tx_multicast PolicySegmentSecurityProfileA#tx_multicast}
  */
  readonly txMulticast?: number;
}

export function policySegmentSecurityProfileRateLimitToTerraform(struct?: PolicySegmentSecurityProfileRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rx_broadcast: cdktf.numberToTerraform(struct!.rxBroadcast),
    rx_multicast: cdktf.numberToTerraform(struct!.rxMulticast),
    tx_broadcast: cdktf.numberToTerraform(struct!.txBroadcast),
    tx_multicast: cdktf.numberToTerraform(struct!.txMulticast),
  }
}


export function policySegmentSecurityProfileRateLimitToHclTerraform(struct?: PolicySegmentSecurityProfileRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rx_broadcast: {
      value: cdktf.numberToHclTerraform(struct!.rxBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_multicast: {
      value: cdktf.numberToHclTerraform(struct!.rxMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_broadcast: {
      value: cdktf.numberToHclTerraform(struct!.txBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_multicast: {
      value: cdktf.numberToHclTerraform(struct!.txMulticast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicySegmentSecurityProfileRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentSecurityProfileRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rxBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxBroadcast = this._rxBroadcast;
    }
    if (this._rxMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxMulticast = this._rxMulticast;
    }
    if (this._txBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.txBroadcast = this._txBroadcast;
    }
    if (this._txMulticast !== undefined) {
      hasAnyValues = true;
      internalValueResult.txMulticast = this._txMulticast;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicySegmentSecurityProfileRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rxBroadcast = undefined;
      this._rxMulticast = undefined;
      this._txBroadcast = undefined;
      this._txMulticast = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rxBroadcast = value.rxBroadcast;
      this._rxMulticast = value.rxMulticast;
      this._txBroadcast = value.txBroadcast;
      this._txMulticast = value.txMulticast;
    }
  }

  // rx_broadcast - computed: false, optional: true, required: false
  private _rxBroadcast?: number; 
  public get rxBroadcast() {
    return this.getNumberAttribute('rx_broadcast');
  }
  public set rxBroadcast(value: number) {
    this._rxBroadcast = value;
  }
  public resetRxBroadcast() {
    this._rxBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxBroadcastInput() {
    return this._rxBroadcast;
  }

  // rx_multicast - computed: false, optional: true, required: false
  private _rxMulticast?: number; 
  public get rxMulticast() {
    return this.getNumberAttribute('rx_multicast');
  }
  public set rxMulticast(value: number) {
    this._rxMulticast = value;
  }
  public resetRxMulticast() {
    this._rxMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxMulticastInput() {
    return this._rxMulticast;
  }

  // tx_broadcast - computed: false, optional: true, required: false
  private _txBroadcast?: number; 
  public get txBroadcast() {
    return this.getNumberAttribute('tx_broadcast');
  }
  public set txBroadcast(value: number) {
    this._txBroadcast = value;
  }
  public resetTxBroadcast() {
    this._txBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txBroadcastInput() {
    return this._txBroadcast;
  }

  // tx_multicast - computed: false, optional: true, required: false
  private _txMulticast?: number; 
  public get txMulticast() {
    return this.getNumberAttribute('tx_multicast');
  }
  public set txMulticast(value: number) {
    this._txMulticast = value;
  }
  public resetTxMulticast() {
    this._txMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txMulticastInput() {
    return this._txMulticast;
  }
}

export class PolicySegmentSecurityProfileRateLimitList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentSecurityProfileRateLimit[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentSecurityProfileRateLimitOutputReference {
    return new PolicySegmentSecurityProfileRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicySegmentSecurityProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#scope PolicySegmentSecurityProfileA#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#tag PolicySegmentSecurityProfileA#tag}
  */
  readonly tag?: string;
}

export function policySegmentSecurityProfileTagToTerraform(struct?: PolicySegmentSecurityProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policySegmentSecurityProfileTagToHclTerraform(struct?: PolicySegmentSecurityProfileTag | cdktf.IResolvable): any {
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

export class PolicySegmentSecurityProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicySegmentSecurityProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicySegmentSecurityProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicySegmentSecurityProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicySegmentSecurityProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicySegmentSecurityProfileTagOutputReference {
    return new PolicySegmentSecurityProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile nsxt_policy_segment_security_profile}
*/
export class PolicySegmentSecurityProfileA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_segment_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicySegmentSecurityProfileA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicySegmentSecurityProfileA to import
  * @param importFromId The id of the existing PolicySegmentSecurityProfileA that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicySegmentSecurityProfileA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_segment_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_segment_security_profile nsxt_policy_segment_security_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicySegmentSecurityProfileAConfig
  */
  public constructor(scope: Construct, id: string, config: PolicySegmentSecurityProfileAConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_segment_security_profile',
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
    this._bpduFilterAllow = config.bpduFilterAllow;
    this._bpduFilterEnable = config.bpduFilterEnable;
    this._description = config.description;
    this._dhcpClientBlockEnabled = config.dhcpClientBlockEnabled;
    this._dhcpClientBlockV6Enabled = config.dhcpClientBlockV6Enabled;
    this._dhcpServerBlockEnabled = config.dhcpServerBlockEnabled;
    this._dhcpServerBlockV6Enabled = config.dhcpServerBlockV6Enabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._nonIpTrafficBlockEnabled = config.nonIpTrafficBlockEnabled;
    this._nsxId = config.nsxId;
    this._raGuardEnabled = config.raGuardEnabled;
    this._rateLimitsEnabled = config.rateLimitsEnabled;
    this._context.internalValue = config.context;
    this._rateLimit.internalValue = config.rateLimit;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bpdu_filter_allow - computed: false, optional: true, required: false
  private _bpduFilterAllow?: string[]; 
  public get bpduFilterAllow() {
    return cdktf.Fn.tolist(this.getListAttribute('bpdu_filter_allow'));
  }
  public set bpduFilterAllow(value: string[]) {
    this._bpduFilterAllow = value;
  }
  public resetBpduFilterAllow() {
    this._bpduFilterAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduFilterAllowInput() {
    return this._bpduFilterAllow;
  }

  // bpdu_filter_enable - computed: false, optional: true, required: false
  private _bpduFilterEnable?: boolean | cdktf.IResolvable; 
  public get bpduFilterEnable() {
    return this.getBooleanAttribute('bpdu_filter_enable');
  }
  public set bpduFilterEnable(value: boolean | cdktf.IResolvable) {
    this._bpduFilterEnable = value;
  }
  public resetBpduFilterEnable() {
    this._bpduFilterEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduFilterEnableInput() {
    return this._bpduFilterEnable;
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

  // dhcp_client_block_enabled - computed: false, optional: true, required: false
  private _dhcpClientBlockEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpClientBlockEnabled() {
    return this.getBooleanAttribute('dhcp_client_block_enabled');
  }
  public set dhcpClientBlockEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpClientBlockEnabled = value;
  }
  public resetDhcpClientBlockEnabled() {
    this._dhcpClientBlockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientBlockEnabledInput() {
    return this._dhcpClientBlockEnabled;
  }

  // dhcp_client_block_v6_enabled - computed: false, optional: true, required: false
  private _dhcpClientBlockV6Enabled?: boolean | cdktf.IResolvable; 
  public get dhcpClientBlockV6Enabled() {
    return this.getBooleanAttribute('dhcp_client_block_v6_enabled');
  }
  public set dhcpClientBlockV6Enabled(value: boolean | cdktf.IResolvable) {
    this._dhcpClientBlockV6Enabled = value;
  }
  public resetDhcpClientBlockV6Enabled() {
    this._dhcpClientBlockV6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientBlockV6EnabledInput() {
    return this._dhcpClientBlockV6Enabled;
  }

  // dhcp_server_block_enabled - computed: false, optional: true, required: false
  private _dhcpServerBlockEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpServerBlockEnabled() {
    return this.getBooleanAttribute('dhcp_server_block_enabled');
  }
  public set dhcpServerBlockEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpServerBlockEnabled = value;
  }
  public resetDhcpServerBlockEnabled() {
    this._dhcpServerBlockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerBlockEnabledInput() {
    return this._dhcpServerBlockEnabled;
  }

  // dhcp_server_block_v6_enabled - computed: false, optional: true, required: false
  private _dhcpServerBlockV6Enabled?: boolean | cdktf.IResolvable; 
  public get dhcpServerBlockV6Enabled() {
    return this.getBooleanAttribute('dhcp_server_block_v6_enabled');
  }
  public set dhcpServerBlockV6Enabled(value: boolean | cdktf.IResolvable) {
    this._dhcpServerBlockV6Enabled = value;
  }
  public resetDhcpServerBlockV6Enabled() {
    this._dhcpServerBlockV6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerBlockV6EnabledInput() {
    return this._dhcpServerBlockV6Enabled;
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

  // non_ip_traffic_block_enabled - computed: false, optional: true, required: false
  private _nonIpTrafficBlockEnabled?: boolean | cdktf.IResolvable; 
  public get nonIpTrafficBlockEnabled() {
    return this.getBooleanAttribute('non_ip_traffic_block_enabled');
  }
  public set nonIpTrafficBlockEnabled(value: boolean | cdktf.IResolvable) {
    this._nonIpTrafficBlockEnabled = value;
  }
  public resetNonIpTrafficBlockEnabled() {
    this._nonIpTrafficBlockEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonIpTrafficBlockEnabledInput() {
    return this._nonIpTrafficBlockEnabled;
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

  // ra_guard_enabled - computed: false, optional: true, required: false
  private _raGuardEnabled?: boolean | cdktf.IResolvable; 
  public get raGuardEnabled() {
    return this.getBooleanAttribute('ra_guard_enabled');
  }
  public set raGuardEnabled(value: boolean | cdktf.IResolvable) {
    this._raGuardEnabled = value;
  }
  public resetRaGuardEnabled() {
    this._raGuardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raGuardEnabledInput() {
    return this._raGuardEnabled;
  }

  // rate_limits_enabled - computed: false, optional: true, required: false
  private _rateLimitsEnabled?: boolean | cdktf.IResolvable; 
  public get rateLimitsEnabled() {
    return this.getBooleanAttribute('rate_limits_enabled');
  }
  public set rateLimitsEnabled(value: boolean | cdktf.IResolvable) {
    this._rateLimitsEnabled = value;
  }
  public resetRateLimitsEnabled() {
    this._rateLimitsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsEnabledInput() {
    return this._rateLimitsEnabled;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicySegmentSecurityProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicySegmentSecurityProfileContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new PolicySegmentSecurityProfileRateLimitList(this, "rate_limit", false);
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: PolicySegmentSecurityProfileRateLimit[] | cdktf.IResolvable) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicySegmentSecurityProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicySegmentSecurityProfileTag[] | cdktf.IResolvable) {
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
      bpdu_filter_allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bpduFilterAllow),
      bpdu_filter_enable: cdktf.booleanToTerraform(this._bpduFilterEnable),
      description: cdktf.stringToTerraform(this._description),
      dhcp_client_block_enabled: cdktf.booleanToTerraform(this._dhcpClientBlockEnabled),
      dhcp_client_block_v6_enabled: cdktf.booleanToTerraform(this._dhcpClientBlockV6Enabled),
      dhcp_server_block_enabled: cdktf.booleanToTerraform(this._dhcpServerBlockEnabled),
      dhcp_server_block_v6_enabled: cdktf.booleanToTerraform(this._dhcpServerBlockV6Enabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      non_ip_traffic_block_enabled: cdktf.booleanToTerraform(this._nonIpTrafficBlockEnabled),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      ra_guard_enabled: cdktf.booleanToTerraform(this._raGuardEnabled),
      rate_limits_enabled: cdktf.booleanToTerraform(this._rateLimitsEnabled),
      context: policySegmentSecurityProfileContextToTerraform(this._context.internalValue),
      rate_limit: cdktf.listMapper(policySegmentSecurityProfileRateLimitToTerraform, true)(this._rateLimit.internalValue),
      tag: cdktf.listMapper(policySegmentSecurityProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bpdu_filter_allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bpduFilterAllow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bpdu_filter_enable: {
        value: cdktf.booleanToHclTerraform(this._bpduFilterEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_client_block_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpClientBlockEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_client_block_v6_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpClientBlockV6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_server_block_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpServerBlockEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_server_block_v6_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpServerBlockV6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      non_ip_traffic_block_enabled: {
        value: cdktf.booleanToHclTerraform(this._nonIpTrafficBlockEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ra_guard_enabled: {
        value: cdktf.booleanToHclTerraform(this._raGuardEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rate_limits_enabled: {
        value: cdktf.booleanToHclTerraform(this._rateLimitsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: policySegmentSecurityProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentSecurityProfileContextList",
      },
      rate_limit: {
        value: cdktf.listMapperHcl(policySegmentSecurityProfileRateLimitToHclTerraform, true)(this._rateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicySegmentSecurityProfileRateLimitList",
      },
      tag: {
        value: cdktf.listMapperHcl(policySegmentSecurityProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicySegmentSecurityProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
