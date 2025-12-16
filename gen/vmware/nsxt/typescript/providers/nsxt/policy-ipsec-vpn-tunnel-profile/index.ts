// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIpsecVpnTunnelProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#description PolicyIpsecVpnTunnelProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#df_policy PolicyIpsecVpnTunnelProfile#df_policy}
  */
  readonly dfPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#dh_groups PolicyIpsecVpnTunnelProfile#dh_groups}
  */
  readonly dhGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#digest_algorithms PolicyIpsecVpnTunnelProfile#digest_algorithms}
  */
  readonly digestAlgorithms?: string[];
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#display_name PolicyIpsecVpnTunnelProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#enable_perfect_forward_secrecy PolicyIpsecVpnTunnelProfile#enable_perfect_forward_secrecy}
  */
  readonly enablePerfectForwardSecrecy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#encryption_algorithms PolicyIpsecVpnTunnelProfile#encryption_algorithms}
  */
  readonly encryptionAlgorithms: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#id PolicyIpsecVpnTunnelProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#nsx_id PolicyIpsecVpnTunnelProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#sa_life_time PolicyIpsecVpnTunnelProfile#sa_life_time}
  */
  readonly saLifeTime?: number;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#tag PolicyIpsecVpnTunnelProfile#tag}
  */
  readonly tag?: PolicyIpsecVpnTunnelProfileTag[] | cdktf.IResolvable;
}
export interface PolicyIpsecVpnTunnelProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#scope PolicyIpsecVpnTunnelProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#tag PolicyIpsecVpnTunnelProfile#tag}
  */
  readonly tag?: string;
}

export function policyIpsecVpnTunnelProfileTagToTerraform(struct?: PolicyIpsecVpnTunnelProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIpsecVpnTunnelProfileTagToHclTerraform(struct?: PolicyIpsecVpnTunnelProfileTag | cdktf.IResolvable): any {
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

export class PolicyIpsecVpnTunnelProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpsecVpnTunnelProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpsecVpnTunnelProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyIpsecVpnTunnelProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIpsecVpnTunnelProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpsecVpnTunnelProfileTagOutputReference {
    return new PolicyIpsecVpnTunnelProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile nsxt_policy_ipsec_vpn_tunnel_profile}
*/
export class PolicyIpsecVpnTunnelProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ipsec_vpn_tunnel_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIpsecVpnTunnelProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIpsecVpnTunnelProfile to import
  * @param importFromId The id of the existing PolicyIpsecVpnTunnelProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIpsecVpnTunnelProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ipsec_vpn_tunnel_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ipsec_vpn_tunnel_profile nsxt_policy_ipsec_vpn_tunnel_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIpsecVpnTunnelProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIpsecVpnTunnelProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ipsec_vpn_tunnel_profile',
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
    this._dfPolicy = config.dfPolicy;
    this._dhGroups = config.dhGroups;
    this._digestAlgorithms = config.digestAlgorithms;
    this._displayName = config.displayName;
    this._enablePerfectForwardSecrecy = config.enablePerfectForwardSecrecy;
    this._encryptionAlgorithms = config.encryptionAlgorithms;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._saLifeTime = config.saLifeTime;
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

  // df_policy - computed: false, optional: true, required: false
  private _dfPolicy?: string; 
  public get dfPolicy() {
    return this.getStringAttribute('df_policy');
  }
  public set dfPolicy(value: string) {
    this._dfPolicy = value;
  }
  public resetDfPolicy() {
    this._dfPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dfPolicyInput() {
    return this._dfPolicy;
  }

  // dh_groups - computed: false, optional: false, required: true
  private _dhGroups?: string[]; 
  public get dhGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('dh_groups'));
  }
  public set dhGroups(value: string[]) {
    this._dhGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupsInput() {
    return this._dhGroups;
  }

  // digest_algorithms - computed: false, optional: true, required: false
  private _digestAlgorithms?: string[]; 
  public get digestAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('digest_algorithms'));
  }
  public set digestAlgorithms(value: string[]) {
    this._digestAlgorithms = value;
  }
  public resetDigestAlgorithms() {
    this._digestAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmsInput() {
    return this._digestAlgorithms;
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

  // enable_perfect_forward_secrecy - computed: false, optional: true, required: false
  private _enablePerfectForwardSecrecy?: boolean | cdktf.IResolvable; 
  public get enablePerfectForwardSecrecy() {
    return this.getBooleanAttribute('enable_perfect_forward_secrecy');
  }
  public set enablePerfectForwardSecrecy(value: boolean | cdktf.IResolvable) {
    this._enablePerfectForwardSecrecy = value;
  }
  public resetEnablePerfectForwardSecrecy() {
    this._enablePerfectForwardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePerfectForwardSecrecyInput() {
    return this._enablePerfectForwardSecrecy;
  }

  // encryption_algorithms - computed: false, optional: false, required: true
  private _encryptionAlgorithms?: string[]; 
  public get encryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('encryption_algorithms'));
  }
  public set encryptionAlgorithms(value: string[]) {
    this._encryptionAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmsInput() {
    return this._encryptionAlgorithms;
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

  // sa_life_time - computed: false, optional: true, required: false
  private _saLifeTime?: number; 
  public get saLifeTime() {
    return this.getNumberAttribute('sa_life_time');
  }
  public set saLifeTime(value: number) {
    this._saLifeTime = value;
  }
  public resetSaLifeTime() {
    this._saLifeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLifeTimeInput() {
    return this._saLifeTime;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyIpsecVpnTunnelProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIpsecVpnTunnelProfileTag[] | cdktf.IResolvable) {
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
      df_policy: cdktf.stringToTerraform(this._dfPolicy),
      dh_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dhGroups),
      digest_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._digestAlgorithms),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_perfect_forward_secrecy: cdktf.booleanToTerraform(this._enablePerfectForwardSecrecy),
      encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encryptionAlgorithms),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      sa_life_time: cdktf.numberToTerraform(this._saLifeTime),
      tag: cdktf.listMapper(policyIpsecVpnTunnelProfileTagToTerraform, true)(this._tag.internalValue),
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
      df_policy: {
        value: cdktf.stringToHclTerraform(this._dfPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dh_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dhGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      digest_algorithms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._digestAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_perfect_forward_secrecy: {
        value: cdktf.booleanToHclTerraform(this._enablePerfectForwardSecrecy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_algorithms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encryptionAlgorithms),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      sa_life_time: {
        value: cdktf.numberToHclTerraform(this._saLifeTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIpsecVpnTunnelProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIpsecVpnTunnelProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
