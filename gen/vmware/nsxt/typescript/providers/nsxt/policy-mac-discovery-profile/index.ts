// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyMacDiscoveryProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#description PolicyMacDiscoveryProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#display_name PolicyMacDiscoveryProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#id PolicyMacDiscoveryProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#mac_change_enabled PolicyMacDiscoveryProfile#mac_change_enabled}
  */
  readonly macChangeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#mac_learning_enabled PolicyMacDiscoveryProfile#mac_learning_enabled}
  */
  readonly macLearningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#mac_limit PolicyMacDiscoveryProfile#mac_limit}
  */
  readonly macLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#mac_limit_policy PolicyMacDiscoveryProfile#mac_limit_policy}
  */
  readonly macLimitPolicy?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#nsx_id PolicyMacDiscoveryProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#remote_overlay_mac_limit PolicyMacDiscoveryProfile#remote_overlay_mac_limit}
  */
  readonly remoteOverlayMacLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#unknown_unicast_flooding_enabled PolicyMacDiscoveryProfile#unknown_unicast_flooding_enabled}
  */
  readonly unknownUnicastFloodingEnabled?: boolean | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#context PolicyMacDiscoveryProfile#context}
  */
  readonly context?: PolicyMacDiscoveryProfileContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#tag PolicyMacDiscoveryProfile#tag}
  */
  readonly tag?: PolicyMacDiscoveryProfileTag[] | cdktf.IResolvable;
}
export interface PolicyMacDiscoveryProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#project_id PolicyMacDiscoveryProfile#project_id}
  */
  readonly projectId: string;
}

export function policyMacDiscoveryProfileContextToTerraform(struct?: PolicyMacDiscoveryProfileContextOutputReference | PolicyMacDiscoveryProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyMacDiscoveryProfileContextToHclTerraform(struct?: PolicyMacDiscoveryProfileContextOutputReference | PolicyMacDiscoveryProfileContext): any {
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

export class PolicyMacDiscoveryProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyMacDiscoveryProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyMacDiscoveryProfileContext | undefined) {
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
export interface PolicyMacDiscoveryProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#scope PolicyMacDiscoveryProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#tag PolicyMacDiscoveryProfile#tag}
  */
  readonly tag?: string;
}

export function policyMacDiscoveryProfileTagToTerraform(struct?: PolicyMacDiscoveryProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyMacDiscoveryProfileTagToHclTerraform(struct?: PolicyMacDiscoveryProfileTag | cdktf.IResolvable): any {
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

export class PolicyMacDiscoveryProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyMacDiscoveryProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyMacDiscoveryProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyMacDiscoveryProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyMacDiscoveryProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyMacDiscoveryProfileTagOutputReference {
    return new PolicyMacDiscoveryProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile nsxt_policy_mac_discovery_profile}
*/
export class PolicyMacDiscoveryProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_mac_discovery_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyMacDiscoveryProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyMacDiscoveryProfile to import
  * @param importFromId The id of the existing PolicyMacDiscoveryProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyMacDiscoveryProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_mac_discovery_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_mac_discovery_profile nsxt_policy_mac_discovery_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyMacDiscoveryProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyMacDiscoveryProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_mac_discovery_profile',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._macChangeEnabled = config.macChangeEnabled;
    this._macLearningEnabled = config.macLearningEnabled;
    this._macLimit = config.macLimit;
    this._macLimitPolicy = config.macLimitPolicy;
    this._nsxId = config.nsxId;
    this._remoteOverlayMacLimit = config.remoteOverlayMacLimit;
    this._unknownUnicastFloodingEnabled = config.unknownUnicastFloodingEnabled;
    this._context.internalValue = config.context;
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

  // mac_change_enabled - computed: false, optional: true, required: false
  private _macChangeEnabled?: boolean | cdktf.IResolvable; 
  public get macChangeEnabled() {
    return this.getBooleanAttribute('mac_change_enabled');
  }
  public set macChangeEnabled(value: boolean | cdktf.IResolvable) {
    this._macChangeEnabled = value;
  }
  public resetMacChangeEnabled() {
    this._macChangeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macChangeEnabledInput() {
    return this._macChangeEnabled;
  }

  // mac_learning_enabled - computed: false, optional: true, required: false
  private _macLearningEnabled?: boolean | cdktf.IResolvable; 
  public get macLearningEnabled() {
    return this.getBooleanAttribute('mac_learning_enabled');
  }
  public set macLearningEnabled(value: boolean | cdktf.IResolvable) {
    this._macLearningEnabled = value;
  }
  public resetMacLearningEnabled() {
    this._macLearningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLearningEnabledInput() {
    return this._macLearningEnabled;
  }

  // mac_limit - computed: false, optional: true, required: false
  private _macLimit?: number; 
  public get macLimit() {
    return this.getNumberAttribute('mac_limit');
  }
  public set macLimit(value: number) {
    this._macLimit = value;
  }
  public resetMacLimit() {
    this._macLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLimitInput() {
    return this._macLimit;
  }

  // mac_limit_policy - computed: false, optional: true, required: false
  private _macLimitPolicy?: string; 
  public get macLimitPolicy() {
    return this.getStringAttribute('mac_limit_policy');
  }
  public set macLimitPolicy(value: string) {
    this._macLimitPolicy = value;
  }
  public resetMacLimitPolicy() {
    this._macLimitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLimitPolicyInput() {
    return this._macLimitPolicy;
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

  // remote_overlay_mac_limit - computed: false, optional: true, required: false
  private _remoteOverlayMacLimit?: number; 
  public get remoteOverlayMacLimit() {
    return this.getNumberAttribute('remote_overlay_mac_limit');
  }
  public set remoteOverlayMacLimit(value: number) {
    this._remoteOverlayMacLimit = value;
  }
  public resetRemoteOverlayMacLimit() {
    this._remoteOverlayMacLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteOverlayMacLimitInput() {
    return this._remoteOverlayMacLimit;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // unknown_unicast_flooding_enabled - computed: false, optional: true, required: false
  private _unknownUnicastFloodingEnabled?: boolean | cdktf.IResolvable; 
  public get unknownUnicastFloodingEnabled() {
    return this.getBooleanAttribute('unknown_unicast_flooding_enabled');
  }
  public set unknownUnicastFloodingEnabled(value: boolean | cdktf.IResolvable) {
    this._unknownUnicastFloodingEnabled = value;
  }
  public resetUnknownUnicastFloodingEnabled() {
    this._unknownUnicastFloodingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastFloodingEnabledInput() {
    return this._unknownUnicastFloodingEnabled;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyMacDiscoveryProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyMacDiscoveryProfileContext) {
    this._context.internalValue = value;
  }
  public resetContext() {
    this._context.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyMacDiscoveryProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyMacDiscoveryProfileTag[] | cdktf.IResolvable) {
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
      mac_change_enabled: cdktf.booleanToTerraform(this._macChangeEnabled),
      mac_learning_enabled: cdktf.booleanToTerraform(this._macLearningEnabled),
      mac_limit: cdktf.numberToTerraform(this._macLimit),
      mac_limit_policy: cdktf.stringToTerraform(this._macLimitPolicy),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      remote_overlay_mac_limit: cdktf.numberToTerraform(this._remoteOverlayMacLimit),
      unknown_unicast_flooding_enabled: cdktf.booleanToTerraform(this._unknownUnicastFloodingEnabled),
      context: policyMacDiscoveryProfileContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyMacDiscoveryProfileTagToTerraform, true)(this._tag.internalValue),
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
      mac_change_enabled: {
        value: cdktf.booleanToHclTerraform(this._macChangeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_learning_enabled: {
        value: cdktf.booleanToHclTerraform(this._macLearningEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_limit: {
        value: cdktf.numberToHclTerraform(this._macLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_limit_policy: {
        value: cdktf.stringToHclTerraform(this._macLimitPolicy),
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
      remote_overlay_mac_limit: {
        value: cdktf.numberToHclTerraform(this._remoteOverlayMacLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unknown_unicast_flooding_enabled: {
        value: cdktf.booleanToHclTerraform(this._unknownUnicastFloodingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: policyMacDiscoveryProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyMacDiscoveryProfileContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyMacDiscoveryProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyMacDiscoveryProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
