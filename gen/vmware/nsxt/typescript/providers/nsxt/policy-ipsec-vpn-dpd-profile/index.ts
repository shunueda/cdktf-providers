// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIpsecVpnDpdProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#description PolicyIpsecVpnDpdProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#display_name PolicyIpsecVpnDpdProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#dpd_probe_interval PolicyIpsecVpnDpdProfile#dpd_probe_interval}
  */
  readonly dpdProbeInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#dpd_probe_mode PolicyIpsecVpnDpdProfile#dpd_probe_mode}
  */
  readonly dpdProbeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#enabled PolicyIpsecVpnDpdProfile#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#id PolicyIpsecVpnDpdProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#nsx_id PolicyIpsecVpnDpdProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#retry_count PolicyIpsecVpnDpdProfile#retry_count}
  */
  readonly retryCount?: number;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#tag PolicyIpsecVpnDpdProfile#tag}
  */
  readonly tag?: PolicyIpsecVpnDpdProfileTag[] | cdktf.IResolvable;
}
export interface PolicyIpsecVpnDpdProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#scope PolicyIpsecVpnDpdProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#tag PolicyIpsecVpnDpdProfile#tag}
  */
  readonly tag?: string;
}

export function policyIpsecVpnDpdProfileTagToTerraform(struct?: PolicyIpsecVpnDpdProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIpsecVpnDpdProfileTagToHclTerraform(struct?: PolicyIpsecVpnDpdProfileTag | cdktf.IResolvable): any {
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

export class PolicyIpsecVpnDpdProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpsecVpnDpdProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpsecVpnDpdProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyIpsecVpnDpdProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIpsecVpnDpdProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpsecVpnDpdProfileTagOutputReference {
    return new PolicyIpsecVpnDpdProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile nsxt_policy_ipsec_vpn_dpd_profile}
*/
export class PolicyIpsecVpnDpdProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ipsec_vpn_dpd_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIpsecVpnDpdProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIpsecVpnDpdProfile to import
  * @param importFromId The id of the existing PolicyIpsecVpnDpdProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIpsecVpnDpdProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ipsec_vpn_dpd_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_ipsec_vpn_dpd_profile nsxt_policy_ipsec_vpn_dpd_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIpsecVpnDpdProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIpsecVpnDpdProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ipsec_vpn_dpd_profile',
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
    this._dpdProbeInterval = config.dpdProbeInterval;
    this._dpdProbeMode = config.dpdProbeMode;
    this._enabled = config.enabled;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._retryCount = config.retryCount;
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

  // dpd_probe_interval - computed: false, optional: true, required: false
  private _dpdProbeInterval?: number; 
  public get dpdProbeInterval() {
    return this.getNumberAttribute('dpd_probe_interval');
  }
  public set dpdProbeInterval(value: number) {
    this._dpdProbeInterval = value;
  }
  public resetDpdProbeInterval() {
    this._dpdProbeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdProbeIntervalInput() {
    return this._dpdProbeInterval;
  }

  // dpd_probe_mode - computed: false, optional: true, required: false
  private _dpdProbeMode?: string; 
  public get dpdProbeMode() {
    return this.getStringAttribute('dpd_probe_mode');
  }
  public set dpdProbeMode(value: string) {
    this._dpdProbeMode = value;
  }
  public resetDpdProbeMode() {
    this._dpdProbeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdProbeModeInput() {
    return this._dpdProbeMode;
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

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyIpsecVpnDpdProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIpsecVpnDpdProfileTag[] | cdktf.IResolvable) {
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
      dpd_probe_interval: cdktf.numberToTerraform(this._dpdProbeInterval),
      dpd_probe_mode: cdktf.stringToTerraform(this._dpdProbeMode),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      retry_count: cdktf.numberToTerraform(this._retryCount),
      tag: cdktf.listMapper(policyIpsecVpnDpdProfileTagToTerraform, true)(this._tag.internalValue),
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
      dpd_probe_interval: {
        value: cdktf.numberToHclTerraform(this._dpdProbeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpd_probe_mode: {
        value: cdktf.stringToHclTerraform(this._dpdProbeMode),
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry_count: {
        value: cdktf.numberToHclTerraform(this._retryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIpsecVpnDpdProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIpsecVpnDpdProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
