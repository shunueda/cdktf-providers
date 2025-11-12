// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyVtepHaHostSwitchProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabled status of autonomous recovery option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#auto_recovery PolicyVtepHaHostSwitchProfile#auto_recovery}
  */
  readonly autoRecovery?: boolean | cdktf.IResolvable;
  /**
  * Start time of autonomous recovery (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#auto_recovery_initial_wait PolicyVtepHaHostSwitchProfile#auto_recovery_initial_wait}
  */
  readonly autoRecoveryInitialWait?: number;
  /**
  * Maximum backoff time for autonomous recovery (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#auto_recovery_max_backoff PolicyVtepHaHostSwitchProfile#auto_recovery_max_backoff}
  */
  readonly autoRecoveryMaxBackoff?: number;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#description PolicyVtepHaHostSwitchProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#display_name PolicyVtepHaHostSwitchProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Enabled status of VTEP High Availability feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#enabled PolicyVtepHaHostSwitchProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * VTEP High Availability failover timeout (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#failover_timeout PolicyVtepHaHostSwitchProfile#failover_timeout}
  */
  readonly failoverTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#id PolicyVtepHaHostSwitchProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#nsx_id PolicyVtepHaHostSwitchProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#tag PolicyVtepHaHostSwitchProfile#tag}
  */
  readonly tag?: PolicyVtepHaHostSwitchProfileTag[] | cdktf.IResolvable;
}
export interface PolicyVtepHaHostSwitchProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#scope PolicyVtepHaHostSwitchProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#tag PolicyVtepHaHostSwitchProfile#tag}
  */
  readonly tag?: string;
}

export function policyVtepHaHostSwitchProfileTagToTerraform(struct?: PolicyVtepHaHostSwitchProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyVtepHaHostSwitchProfileTagToHclTerraform(struct?: PolicyVtepHaHostSwitchProfileTag | cdktf.IResolvable): any {
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

export class PolicyVtepHaHostSwitchProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyVtepHaHostSwitchProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyVtepHaHostSwitchProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyVtepHaHostSwitchProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyVtepHaHostSwitchProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyVtepHaHostSwitchProfileTagOutputReference {
    return new PolicyVtepHaHostSwitchProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile nsxt_policy_vtep_ha_host_switch_profile}
*/
export class PolicyVtepHaHostSwitchProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_vtep_ha_host_switch_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyVtepHaHostSwitchProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyVtepHaHostSwitchProfile to import
  * @param importFromId The id of the existing PolicyVtepHaHostSwitchProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyVtepHaHostSwitchProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_vtep_ha_host_switch_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_vtep_ha_host_switch_profile nsxt_policy_vtep_ha_host_switch_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyVtepHaHostSwitchProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyVtepHaHostSwitchProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_vtep_ha_host_switch_profile',
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
    this._autoRecovery = config.autoRecovery;
    this._autoRecoveryInitialWait = config.autoRecoveryInitialWait;
    this._autoRecoveryMaxBackoff = config.autoRecoveryMaxBackoff;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._failoverTimeout = config.failoverTimeout;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_recovery - computed: false, optional: true, required: false
  private _autoRecovery?: boolean | cdktf.IResolvable; 
  public get autoRecovery() {
    return this.getBooleanAttribute('auto_recovery');
  }
  public set autoRecovery(value: boolean | cdktf.IResolvable) {
    this._autoRecovery = value;
  }
  public resetAutoRecovery() {
    this._autoRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInput() {
    return this._autoRecovery;
  }

  // auto_recovery_initial_wait - computed: false, optional: true, required: false
  private _autoRecoveryInitialWait?: number; 
  public get autoRecoveryInitialWait() {
    return this.getNumberAttribute('auto_recovery_initial_wait');
  }
  public set autoRecoveryInitialWait(value: number) {
    this._autoRecoveryInitialWait = value;
  }
  public resetAutoRecoveryInitialWait() {
    this._autoRecoveryInitialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryInitialWaitInput() {
    return this._autoRecoveryInitialWait;
  }

  // auto_recovery_max_backoff - computed: false, optional: true, required: false
  private _autoRecoveryMaxBackoff?: number; 
  public get autoRecoveryMaxBackoff() {
    return this.getNumberAttribute('auto_recovery_max_backoff');
  }
  public set autoRecoveryMaxBackoff(value: number) {
    this._autoRecoveryMaxBackoff = value;
  }
  public resetAutoRecoveryMaxBackoff() {
    this._autoRecoveryMaxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRecoveryMaxBackoffInput() {
    return this._autoRecoveryMaxBackoff;
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

  // failover_timeout - computed: false, optional: true, required: false
  private _failoverTimeout?: number; 
  public get failoverTimeout() {
    return this.getNumberAttribute('failover_timeout');
  }
  public set failoverTimeout(value: number) {
    this._failoverTimeout = value;
  }
  public resetFailoverTimeout() {
    this._failoverTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTimeoutInput() {
    return this._failoverTimeout;
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

  // realized_id - computed: true, optional: false, required: false
  public get realizedId() {
    return this.getStringAttribute('realized_id');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyVtepHaHostSwitchProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyVtepHaHostSwitchProfileTag[] | cdktf.IResolvable) {
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
      auto_recovery: cdktf.booleanToTerraform(this._autoRecovery),
      auto_recovery_initial_wait: cdktf.numberToTerraform(this._autoRecoveryInitialWait),
      auto_recovery_max_backoff: cdktf.numberToTerraform(this._autoRecoveryMaxBackoff),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      failover_timeout: cdktf.numberToTerraform(this._failoverTimeout),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      tag: cdktf.listMapper(policyVtepHaHostSwitchProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_recovery: {
        value: cdktf.booleanToHclTerraform(this._autoRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_recovery_initial_wait: {
        value: cdktf.numberToHclTerraform(this._autoRecoveryInitialWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_recovery_max_backoff: {
        value: cdktf.numberToHclTerraform(this._autoRecoveryMaxBackoff),
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
      failover_timeout: {
        value: cdktf.numberToHclTerraform(this._failoverTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      tag: {
        value: cdktf.listMapperHcl(policyVtepHaHostSwitchProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyVtepHaHostSwitchProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
