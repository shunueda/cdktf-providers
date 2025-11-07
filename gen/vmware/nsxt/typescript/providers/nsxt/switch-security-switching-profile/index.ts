// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchSecuritySwitchingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether DHCP client blocking is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#block_client_dhcp SwitchSecuritySwitchingProfile#block_client_dhcp}
  */
  readonly blockClientDhcp?: boolean | cdktf.IResolvable;
  /**
  * Block all traffic except IP/(G)ARP/BPDU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#block_non_ip SwitchSecuritySwitchingProfile#block_non_ip}
  */
  readonly blockNonIp?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether DHCP server blocking is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#block_server_dhcp SwitchSecuritySwitchingProfile#block_server_dhcp}
  */
  readonly blockServerDhcp?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether BPDU filter is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#bpdu_filter_enabled SwitchSecuritySwitchingProfile#bpdu_filter_enabled}
  */
  readonly bpduFilterEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set of allowed MAC addresses to be excluded from BPDU filtering
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#bpdu_filter_whitelist SwitchSecuritySwitchingProfile#bpdu_filter_whitelist}
  */
  readonly bpduFilterWhitelist?: string[];
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#description SwitchSecuritySwitchingProfile#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#display_name SwitchSecuritySwitchingProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#id SwitchSecuritySwitchingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * rate_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#rate_limits SwitchSecuritySwitchingProfile#rate_limits}
  */
  readonly rateLimits?: SwitchSecuritySwitchingProfileRateLimits;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#tag SwitchSecuritySwitchingProfile#tag}
  */
  readonly tag?: SwitchSecuritySwitchingProfileTag[] | cdktf.IResolvable;
}
export interface SwitchSecuritySwitchingProfileRateLimits {
  /**
  * Whether rate limiting is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#enabled SwitchSecuritySwitchingProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Incoming broadcast traffic limit in packets per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#rx_broadcast SwitchSecuritySwitchingProfile#rx_broadcast}
  */
  readonly rxBroadcast?: number;
  /**
  * Incoming multicast traffic limit in packets per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#rx_multicast SwitchSecuritySwitchingProfile#rx_multicast}
  */
  readonly rxMulticast?: number;
  /**
  * Outgoing broadcast traffic limit in packets per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#tx_broadcast SwitchSecuritySwitchingProfile#tx_broadcast}
  */
  readonly txBroadcast?: number;
  /**
  * Outgoing multicast traffic limit in packets per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#tx_multicast SwitchSecuritySwitchingProfile#tx_multicast}
  */
  readonly txMulticast?: number;
}

export function switchSecuritySwitchingProfileRateLimitsToTerraform(struct?: SwitchSecuritySwitchingProfileRateLimitsOutputReference | SwitchSecuritySwitchingProfileRateLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    rx_broadcast: cdktf.numberToTerraform(struct!.rxBroadcast),
    rx_multicast: cdktf.numberToTerraform(struct!.rxMulticast),
    tx_broadcast: cdktf.numberToTerraform(struct!.txBroadcast),
    tx_multicast: cdktf.numberToTerraform(struct!.txMulticast),
  }
}


export function switchSecuritySwitchingProfileRateLimitsToHclTerraform(struct?: SwitchSecuritySwitchingProfileRateLimitsOutputReference | SwitchSecuritySwitchingProfileRateLimits): any {
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

export class SwitchSecuritySwitchingProfileRateLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchSecuritySwitchingProfileRateLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
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

  public set internalValue(value: SwitchSecuritySwitchingProfileRateLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._rxBroadcast = undefined;
      this._rxMulticast = undefined;
      this._txBroadcast = undefined;
      this._txMulticast = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._rxBroadcast = value.rxBroadcast;
      this._rxMulticast = value.rxMulticast;
      this._txBroadcast = value.txBroadcast;
      this._txMulticast = value.txMulticast;
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
export interface SwitchSecuritySwitchingProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#scope SwitchSecuritySwitchingProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#tag SwitchSecuritySwitchingProfile#tag}
  */
  readonly tag?: string;
}

export function switchSecuritySwitchingProfileTagToTerraform(struct?: SwitchSecuritySwitchingProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function switchSecuritySwitchingProfileTagToHclTerraform(struct?: SwitchSecuritySwitchingProfileTag | cdktf.IResolvable): any {
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

export class SwitchSecuritySwitchingProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchSecuritySwitchingProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchSecuritySwitchingProfileTag | cdktf.IResolvable | undefined) {
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

export class SwitchSecuritySwitchingProfileTagList extends cdktf.ComplexList {
  public internalValue? : SwitchSecuritySwitchingProfileTag[] | cdktf.IResolvable

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
  public get(index: number): SwitchSecuritySwitchingProfileTagOutputReference {
    return new SwitchSecuritySwitchingProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile nsxt_switch_security_switching_profile}
*/
export class SwitchSecuritySwitchingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_switch_security_switching_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchSecuritySwitchingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchSecuritySwitchingProfile to import
  * @param importFromId The id of the existing SwitchSecuritySwitchingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchSecuritySwitchingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_switch_security_switching_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/switch_security_switching_profile nsxt_switch_security_switching_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchSecuritySwitchingProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchSecuritySwitchingProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_switch_security_switching_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockClientDhcp = config.blockClientDhcp;
    this._blockNonIp = config.blockNonIp;
    this._blockServerDhcp = config.blockServerDhcp;
    this._bpduFilterEnabled = config.bpduFilterEnabled;
    this._bpduFilterWhitelist = config.bpduFilterWhitelist;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._rateLimits.internalValue = config.rateLimits;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_client_dhcp - computed: false, optional: true, required: false
  private _blockClientDhcp?: boolean | cdktf.IResolvable; 
  public get blockClientDhcp() {
    return this.getBooleanAttribute('block_client_dhcp');
  }
  public set blockClientDhcp(value: boolean | cdktf.IResolvable) {
    this._blockClientDhcp = value;
  }
  public resetBlockClientDhcp() {
    this._blockClientDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockClientDhcpInput() {
    return this._blockClientDhcp;
  }

  // block_non_ip - computed: false, optional: true, required: false
  private _blockNonIp?: boolean | cdktf.IResolvable; 
  public get blockNonIp() {
    return this.getBooleanAttribute('block_non_ip');
  }
  public set blockNonIp(value: boolean | cdktf.IResolvable) {
    this._blockNonIp = value;
  }
  public resetBlockNonIp() {
    this._blockNonIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNonIpInput() {
    return this._blockNonIp;
  }

  // block_server_dhcp - computed: false, optional: true, required: false
  private _blockServerDhcp?: boolean | cdktf.IResolvable; 
  public get blockServerDhcp() {
    return this.getBooleanAttribute('block_server_dhcp');
  }
  public set blockServerDhcp(value: boolean | cdktf.IResolvable) {
    this._blockServerDhcp = value;
  }
  public resetBlockServerDhcp() {
    this._blockServerDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockServerDhcpInput() {
    return this._blockServerDhcp;
  }

  // bpdu_filter_enabled - computed: false, optional: true, required: false
  private _bpduFilterEnabled?: boolean | cdktf.IResolvable; 
  public get bpduFilterEnabled() {
    return this.getBooleanAttribute('bpdu_filter_enabled');
  }
  public set bpduFilterEnabled(value: boolean | cdktf.IResolvable) {
    this._bpduFilterEnabled = value;
  }
  public resetBpduFilterEnabled() {
    this._bpduFilterEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduFilterEnabledInput() {
    return this._bpduFilterEnabled;
  }

  // bpdu_filter_whitelist - computed: false, optional: true, required: false
  private _bpduFilterWhitelist?: string[]; 
  public get bpduFilterWhitelist() {
    return cdktf.Fn.tolist(this.getListAttribute('bpdu_filter_whitelist'));
  }
  public set bpduFilterWhitelist(value: string[]) {
    this._bpduFilterWhitelist = value;
  }
  public resetBpduFilterWhitelist() {
    this._bpduFilterWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduFilterWhitelistInput() {
    return this._bpduFilterWhitelist;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new SwitchSecuritySwitchingProfileRateLimitsOutputReference(this, "rate_limits");
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: SwitchSecuritySwitchingProfileRateLimits) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new SwitchSecuritySwitchingProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: SwitchSecuritySwitchingProfileTag[] | cdktf.IResolvable) {
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
      block_client_dhcp: cdktf.booleanToTerraform(this._blockClientDhcp),
      block_non_ip: cdktf.booleanToTerraform(this._blockNonIp),
      block_server_dhcp: cdktf.booleanToTerraform(this._blockServerDhcp),
      bpdu_filter_enabled: cdktf.booleanToTerraform(this._bpduFilterEnabled),
      bpdu_filter_whitelist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bpduFilterWhitelist),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      rate_limits: switchSecuritySwitchingProfileRateLimitsToTerraform(this._rateLimits.internalValue),
      tag: cdktf.listMapper(switchSecuritySwitchingProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_client_dhcp: {
        value: cdktf.booleanToHclTerraform(this._blockClientDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_non_ip: {
        value: cdktf.booleanToHclTerraform(this._blockNonIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_server_dhcp: {
        value: cdktf.booleanToHclTerraform(this._blockServerDhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpdu_filter_enabled: {
        value: cdktf.booleanToHclTerraform(this._bpduFilterEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bpdu_filter_whitelist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bpduFilterWhitelist),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
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
      rate_limits: {
        value: switchSecuritySwitchingProfileRateLimitsToHclTerraform(this._rateLimits.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchSecuritySwitchingProfileRateLimitsList",
      },
      tag: {
        value: cdktf.listMapperHcl(switchSecuritySwitchingProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchSecuritySwitchingProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
