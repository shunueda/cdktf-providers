// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIpsecVpnServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#description PolicyIpsecVpnService#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#display_name PolicyIpsecVpnService#display_name}
  */
  readonly displayName: string;
  /**
  * Enable/Disable IPSec VPN service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#enabled PolicyIpsecVpnService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Policy path for the gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#gateway_path PolicyIpsecVpnService#gateway_path}
  */
  readonly gatewayPath?: string;
  /**
  * Enable/Disable IPSec VPN service HA state sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#ha_sync PolicyIpsecVpnService#ha_sync}
  */
  readonly haSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#id PolicyIpsecVpnService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Log level for internet key exchange (IKE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#ike_log_level PolicyIpsecVpnService#ike_log_level}
  */
  readonly ikeLogLevel?: string;
  /**
  * Polciy path for the locale service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#locale_service_path PolicyIpsecVpnService#locale_service_path}
  */
  readonly localeServicePath?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#nsx_id PolicyIpsecVpnService#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * bypass_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#bypass_rule PolicyIpsecVpnService#bypass_rule}
  */
  readonly bypassRule?: PolicyIpsecVpnServiceBypassRule[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#tag PolicyIpsecVpnService#tag}
  */
  readonly tag?: PolicyIpsecVpnServiceTag[] | cdktf.IResolvable;
}
export interface PolicyIpsecVpnServiceBypassRule {
  /**
  * PROTECT - Protect rules are defined per policy based IPSec VPN session. BYPASS - Bypass rules are defined per IPSec VPN service and affects all policy based IPSec VPN sessions. Bypass rules are prioritized over protect rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#action PolicyIpsecVpnService#action}
  */
  readonly action?: string;
  /**
  * List of remote subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#destinations PolicyIpsecVpnService#destinations}
  */
  readonly destinations?: string[];
  /**
  * List of local subnets. Specifying no value is interpreted as 0.0.0.0/0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#sources PolicyIpsecVpnService#sources}
  */
  readonly sources?: string[];
}

export function policyIpsecVpnServiceBypassRuleToTerraform(struct?: PolicyIpsecVpnServiceBypassRule | cdktf.IResolvable): any {
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


export function policyIpsecVpnServiceBypassRuleToHclTerraform(struct?: PolicyIpsecVpnServiceBypassRule | cdktf.IResolvable): any {
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

export class PolicyIpsecVpnServiceBypassRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpsecVpnServiceBypassRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpsecVpnServiceBypassRule | cdktf.IResolvable | undefined) {
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

export class PolicyIpsecVpnServiceBypassRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyIpsecVpnServiceBypassRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpsecVpnServiceBypassRuleOutputReference {
    return new PolicyIpsecVpnServiceBypassRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyIpsecVpnServiceTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#scope PolicyIpsecVpnService#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#tag PolicyIpsecVpnService#tag}
  */
  readonly tag?: string;
}

export function policyIpsecVpnServiceTagToTerraform(struct?: PolicyIpsecVpnServiceTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIpsecVpnServiceTagToHclTerraform(struct?: PolicyIpsecVpnServiceTag | cdktf.IResolvable): any {
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

export class PolicyIpsecVpnServiceTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpsecVpnServiceTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpsecVpnServiceTag | cdktf.IResolvable | undefined) {
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

export class PolicyIpsecVpnServiceTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIpsecVpnServiceTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpsecVpnServiceTagOutputReference {
    return new PolicyIpsecVpnServiceTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service nsxt_policy_ipsec_vpn_service}
*/
export class PolicyIpsecVpnService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ipsec_vpn_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIpsecVpnService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIpsecVpnService to import
  * @param importFromId The id of the existing PolicyIpsecVpnService that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIpsecVpnService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ipsec_vpn_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_service nsxt_policy_ipsec_vpn_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIpsecVpnServiceConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIpsecVpnServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ipsec_vpn_service',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._gatewayPath = config.gatewayPath;
    this._haSync = config.haSync;
    this._id = config.id;
    this._ikeLogLevel = config.ikeLogLevel;
    this._localeServicePath = config.localeServicePath;
    this._nsxId = config.nsxId;
    this._bypassRule.internalValue = config.bypassRule;
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

  // gateway_path - computed: false, optional: true, required: false
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  public resetGatewayPath() {
    this._gatewayPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
  }

  // ha_sync - computed: false, optional: true, required: false
  private _haSync?: boolean | cdktf.IResolvable; 
  public get haSync() {
    return this.getBooleanAttribute('ha_sync');
  }
  public set haSync(value: boolean | cdktf.IResolvable) {
    this._haSync = value;
  }
  public resetHaSync() {
    this._haSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSyncInput() {
    return this._haSync;
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

  // ike_log_level - computed: false, optional: true, required: false
  private _ikeLogLevel?: string; 
  public get ikeLogLevel() {
    return this.getStringAttribute('ike_log_level');
  }
  public set ikeLogLevel(value: string) {
    this._ikeLogLevel = value;
  }
  public resetIkeLogLevel() {
    this._ikeLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeLogLevelInput() {
    return this._ikeLogLevel;
  }

  // locale_service_path - computed: false, optional: true, required: false
  private _localeServicePath?: string; 
  public get localeServicePath() {
    return this.getStringAttribute('locale_service_path');
  }
  public set localeServicePath(value: string) {
    this._localeServicePath = value;
  }
  public resetLocaleServicePath() {
    this._localeServicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localeServicePathInput() {
    return this._localeServicePath;
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

  // bypass_rule - computed: false, optional: true, required: false
  private _bypassRule = new PolicyIpsecVpnServiceBypassRuleList(this, "bypass_rule", false);
  public get bypassRule() {
    return this._bypassRule;
  }
  public putBypassRule(value: PolicyIpsecVpnServiceBypassRule[] | cdktf.IResolvable) {
    this._bypassRule.internalValue = value;
  }
  public resetBypassRule() {
    this._bypassRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassRuleInput() {
    return this._bypassRule.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyIpsecVpnServiceTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIpsecVpnServiceTag[] | cdktf.IResolvable) {
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      ha_sync: cdktf.booleanToTerraform(this._haSync),
      id: cdktf.stringToTerraform(this._id),
      ike_log_level: cdktf.stringToTerraform(this._ikeLogLevel),
      locale_service_path: cdktf.stringToTerraform(this._localeServicePath),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      bypass_rule: cdktf.listMapper(policyIpsecVpnServiceBypassRuleToTerraform, true)(this._bypassRule.internalValue),
      tag: cdktf.listMapper(policyIpsecVpnServiceTagToTerraform, true)(this._tag.internalValue),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      ha_sync: {
        value: cdktf.booleanToHclTerraform(this._haSync),
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
      ike_log_level: {
        value: cdktf.stringToHclTerraform(this._ikeLogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      locale_service_path: {
        value: cdktf.stringToHclTerraform(this._localeServicePath),
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
      bypass_rule: {
        value: cdktf.listMapperHcl(policyIpsecVpnServiceBypassRuleToHclTerraform, true)(this._bypassRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIpsecVpnServiceBypassRuleList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIpsecVpnServiceTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIpsecVpnServiceTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
