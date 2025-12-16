// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MacManagementSwitchingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#description MacManagementSwitchingProfile#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#display_name MacManagementSwitchingProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#id MacManagementSwitchingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Allowing source MAC address change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#mac_change_allowed MacManagementSwitchingProfile#mac_change_allowed}
  */
  readonly macChangeAllowed?: boolean | cdktf.IResolvable;
  /**
  * mac_learning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#mac_learning MacManagementSwitchingProfile#mac_learning}
  */
  readonly macLearning?: MacManagementSwitchingProfileMacLearning;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#tag MacManagementSwitchingProfile#tag}
  */
  readonly tag?: MacManagementSwitchingProfileTag[] | cdktf.IResolvable;
}
export interface MacManagementSwitchingProfileMacLearning {
  /**
  * Allowing source MAC address learning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#enabled MacManagementSwitchingProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of MAC addresses that can be learned on this port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#limit MacManagementSwitchingProfile#limit}
  */
  readonly limit?: number;
  /**
  * The policy after MAC Limit is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#limit_policy MacManagementSwitchingProfile#limit_policy}
  */
  readonly limitPolicy?: string;
  /**
  * Allowing flooding for unlearned MAC for ingress traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#unicast_flooding_allowed MacManagementSwitchingProfile#unicast_flooding_allowed}
  */
  readonly unicastFloodingAllowed?: boolean | cdktf.IResolvable;
}

export function macManagementSwitchingProfileMacLearningToTerraform(struct?: MacManagementSwitchingProfileMacLearningOutputReference | MacManagementSwitchingProfileMacLearning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    limit_policy: cdktf.stringToTerraform(struct!.limitPolicy),
    unicast_flooding_allowed: cdktf.booleanToTerraform(struct!.unicastFloodingAllowed),
  }
}


export function macManagementSwitchingProfileMacLearningToHclTerraform(struct?: MacManagementSwitchingProfileMacLearningOutputReference | MacManagementSwitchingProfileMacLearning): any {
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
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_policy: {
      value: cdktf.stringToHclTerraform(struct!.limitPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unicast_flooding_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.unicastFloodingAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MacManagementSwitchingProfileMacLearningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MacManagementSwitchingProfileMacLearning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitPolicy = this._limitPolicy;
    }
    if (this._unicastFloodingAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastFloodingAllowed = this._unicastFloodingAllowed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MacManagementSwitchingProfileMacLearning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limit = undefined;
      this._limitPolicy = undefined;
      this._unicastFloodingAllowed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._limitPolicy = value.limitPolicy;
      this._unicastFloodingAllowed = value.unicastFloodingAllowed;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_policy - computed: false, optional: true, required: false
  private _limitPolicy?: string; 
  public get limitPolicy() {
    return this.getStringAttribute('limit_policy');
  }
  public set limitPolicy(value: string) {
    this._limitPolicy = value;
  }
  public resetLimitPolicy() {
    this._limitPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPolicyInput() {
    return this._limitPolicy;
  }

  // unicast_flooding_allowed - computed: false, optional: true, required: false
  private _unicastFloodingAllowed?: boolean | cdktf.IResolvable; 
  public get unicastFloodingAllowed() {
    return this.getBooleanAttribute('unicast_flooding_allowed');
  }
  public set unicastFloodingAllowed(value: boolean | cdktf.IResolvable) {
    this._unicastFloodingAllowed = value;
  }
  public resetUnicastFloodingAllowed() {
    this._unicastFloodingAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastFloodingAllowedInput() {
    return this._unicastFloodingAllowed;
  }
}
export interface MacManagementSwitchingProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#scope MacManagementSwitchingProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#tag MacManagementSwitchingProfile#tag}
  */
  readonly tag?: string;
}

export function macManagementSwitchingProfileTagToTerraform(struct?: MacManagementSwitchingProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function macManagementSwitchingProfileTagToHclTerraform(struct?: MacManagementSwitchingProfileTag | cdktf.IResolvable): any {
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

export class MacManagementSwitchingProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MacManagementSwitchingProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MacManagementSwitchingProfileTag | cdktf.IResolvable | undefined) {
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

export class MacManagementSwitchingProfileTagList extends cdktf.ComplexList {
  public internalValue? : MacManagementSwitchingProfileTag[] | cdktf.IResolvable

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
  public get(index: number): MacManagementSwitchingProfileTagOutputReference {
    return new MacManagementSwitchingProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile nsxt_mac_management_switching_profile}
*/
export class MacManagementSwitchingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_mac_management_switching_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MacManagementSwitchingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MacManagementSwitchingProfile to import
  * @param importFromId The id of the existing MacManagementSwitchingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MacManagementSwitchingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_mac_management_switching_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/mac_management_switching_profile nsxt_mac_management_switching_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MacManagementSwitchingProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MacManagementSwitchingProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_mac_management_switching_profile',
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
    this._macChangeAllowed = config.macChangeAllowed;
    this._macLearning.internalValue = config.macLearning;
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

  // mac_change_allowed - computed: false, optional: true, required: false
  private _macChangeAllowed?: boolean | cdktf.IResolvable; 
  public get macChangeAllowed() {
    return this.getBooleanAttribute('mac_change_allowed');
  }
  public set macChangeAllowed(value: boolean | cdktf.IResolvable) {
    this._macChangeAllowed = value;
  }
  public resetMacChangeAllowed() {
    this._macChangeAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macChangeAllowedInput() {
    return this._macChangeAllowed;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // mac_learning - computed: false, optional: true, required: false
  private _macLearning = new MacManagementSwitchingProfileMacLearningOutputReference(this, "mac_learning");
  public get macLearning() {
    return this._macLearning;
  }
  public putMacLearning(value: MacManagementSwitchingProfileMacLearning) {
    this._macLearning.internalValue = value;
  }
  public resetMacLearning() {
    this._macLearning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macLearningInput() {
    return this._macLearning.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new MacManagementSwitchingProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: MacManagementSwitchingProfileTag[] | cdktf.IResolvable) {
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
      mac_change_allowed: cdktf.booleanToTerraform(this._macChangeAllowed),
      mac_learning: macManagementSwitchingProfileMacLearningToTerraform(this._macLearning.internalValue),
      tag: cdktf.listMapper(macManagementSwitchingProfileTagToTerraform, true)(this._tag.internalValue),
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
      mac_change_allowed: {
        value: cdktf.booleanToHclTerraform(this._macChangeAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mac_learning: {
        value: macManagementSwitchingProfileMacLearningToHclTerraform(this._macLearning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MacManagementSwitchingProfileMacLearningList",
      },
      tag: {
        value: cdktf.listMapperHcl(macManagementSwitchingProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MacManagementSwitchingProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
