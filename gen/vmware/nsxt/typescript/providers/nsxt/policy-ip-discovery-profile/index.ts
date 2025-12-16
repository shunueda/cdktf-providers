// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyIpDiscoveryProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number of ARP bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#arp_binding_limit PolicyIpDiscoveryProfile#arp_binding_limit}
  */
  readonly arpBindingLimit?: number;
  /**
  * ARP and ND cache timeout (in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#arp_nd_binding_timeout PolicyIpDiscoveryProfile#arp_nd_binding_timeout}
  */
  readonly arpNdBindingTimeout?: number;
  /**
  * Is ARP snooping enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#arp_snooping_enabled PolicyIpDiscoveryProfile#arp_snooping_enabled}
  */
  readonly arpSnoopingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#description PolicyIpDiscoveryProfile#description}
  */
  readonly description?: string;
  /**
  * Is DHCP snooping enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#dhcp_snooping_enabled PolicyIpDiscoveryProfile#dhcp_snooping_enabled}
  */
  readonly dhcpSnoopingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is DHCP snoping v6 enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#dhcp_snooping_v6_enabled PolicyIpDiscoveryProfile#dhcp_snooping_v6_enabled}
  */
  readonly dhcpSnoopingV6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#display_name PolicyIpDiscoveryProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Duplicate IP detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#duplicate_ip_detection_enabled PolicyIpDiscoveryProfile#duplicate_ip_detection_enabled}
  */
  readonly duplicateIpDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#id PolicyIpDiscoveryProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is ND snooping enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#nd_snooping_enabled PolicyIpDiscoveryProfile#nd_snooping_enabled}
  */
  readonly ndSnoopingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of ND (Neighbor Discovery Protocol) bindings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#nd_snooping_limit PolicyIpDiscoveryProfile#nd_snooping_limit}
  */
  readonly ndSnoopingLimit?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#nsx_id PolicyIpDiscoveryProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Is TOFU enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#tofu_enabled PolicyIpDiscoveryProfile#tofu_enabled}
  */
  readonly tofuEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is VM tools enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#vmtools_enabled PolicyIpDiscoveryProfile#vmtools_enabled}
  */
  readonly vmtoolsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Is VM tools enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#vmtools_v6_enabled PolicyIpDiscoveryProfile#vmtools_v6_enabled}
  */
  readonly vmtoolsV6Enabled?: boolean | cdktf.IResolvable;
  /**
  * context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#context PolicyIpDiscoveryProfile#context}
  */
  readonly context?: PolicyIpDiscoveryProfileContext;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#tag PolicyIpDiscoveryProfile#tag}
  */
  readonly tag?: PolicyIpDiscoveryProfileTag[] | cdktf.IResolvable;
}
export interface PolicyIpDiscoveryProfileContext {
  /**
  * Id of the project which the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#project_id PolicyIpDiscoveryProfile#project_id}
  */
  readonly projectId: string;
}

export function policyIpDiscoveryProfileContextToTerraform(struct?: PolicyIpDiscoveryProfileContextOutputReference | PolicyIpDiscoveryProfileContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function policyIpDiscoveryProfileContextToHclTerraform(struct?: PolicyIpDiscoveryProfileContextOutputReference | PolicyIpDiscoveryProfileContext): any {
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

export class PolicyIpDiscoveryProfileContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyIpDiscoveryProfileContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyIpDiscoveryProfileContext | undefined) {
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
export interface PolicyIpDiscoveryProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#scope PolicyIpDiscoveryProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#tag PolicyIpDiscoveryProfile#tag}
  */
  readonly tag?: string;
}

export function policyIpDiscoveryProfileTagToTerraform(struct?: PolicyIpDiscoveryProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyIpDiscoveryProfileTagToHclTerraform(struct?: PolicyIpDiscoveryProfileTag | cdktf.IResolvable): any {
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

export class PolicyIpDiscoveryProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyIpDiscoveryProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyIpDiscoveryProfileTag | cdktf.IResolvable | undefined) {
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

export class PolicyIpDiscoveryProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyIpDiscoveryProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyIpDiscoveryProfileTagOutputReference {
    return new PolicyIpDiscoveryProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile nsxt_policy_ip_discovery_profile}
*/
export class PolicyIpDiscoveryProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_ip_discovery_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyIpDiscoveryProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyIpDiscoveryProfile to import
  * @param importFromId The id of the existing PolicyIpDiscoveryProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyIpDiscoveryProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_ip_discovery_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_ip_discovery_profile nsxt_policy_ip_discovery_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyIpDiscoveryProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyIpDiscoveryProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_ip_discovery_profile',
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
    this._arpBindingLimit = config.arpBindingLimit;
    this._arpNdBindingTimeout = config.arpNdBindingTimeout;
    this._arpSnoopingEnabled = config.arpSnoopingEnabled;
    this._description = config.description;
    this._dhcpSnoopingEnabled = config.dhcpSnoopingEnabled;
    this._dhcpSnoopingV6Enabled = config.dhcpSnoopingV6Enabled;
    this._displayName = config.displayName;
    this._duplicateIpDetectionEnabled = config.duplicateIpDetectionEnabled;
    this._id = config.id;
    this._ndSnoopingEnabled = config.ndSnoopingEnabled;
    this._ndSnoopingLimit = config.ndSnoopingLimit;
    this._nsxId = config.nsxId;
    this._tofuEnabled = config.tofuEnabled;
    this._vmtoolsEnabled = config.vmtoolsEnabled;
    this._vmtoolsV6Enabled = config.vmtoolsV6Enabled;
    this._context.internalValue = config.context;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_binding_limit - computed: false, optional: true, required: false
  private _arpBindingLimit?: number; 
  public get arpBindingLimit() {
    return this.getNumberAttribute('arp_binding_limit');
  }
  public set arpBindingLimit(value: number) {
    this._arpBindingLimit = value;
  }
  public resetArpBindingLimit() {
    this._arpBindingLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpBindingLimitInput() {
    return this._arpBindingLimit;
  }

  // arp_nd_binding_timeout - computed: false, optional: true, required: false
  private _arpNdBindingTimeout?: number; 
  public get arpNdBindingTimeout() {
    return this.getNumberAttribute('arp_nd_binding_timeout');
  }
  public set arpNdBindingTimeout(value: number) {
    this._arpNdBindingTimeout = value;
  }
  public resetArpNdBindingTimeout() {
    this._arpNdBindingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpNdBindingTimeoutInput() {
    return this._arpNdBindingTimeout;
  }

  // arp_snooping_enabled - computed: false, optional: true, required: false
  private _arpSnoopingEnabled?: boolean | cdktf.IResolvable; 
  public get arpSnoopingEnabled() {
    return this.getBooleanAttribute('arp_snooping_enabled');
  }
  public set arpSnoopingEnabled(value: boolean | cdktf.IResolvable) {
    this._arpSnoopingEnabled = value;
  }
  public resetArpSnoopingEnabled() {
    this._arpSnoopingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpSnoopingEnabledInput() {
    return this._arpSnoopingEnabled;
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

  // dhcp_snooping_enabled - computed: false, optional: true, required: false
  private _dhcpSnoopingEnabled?: boolean | cdktf.IResolvable; 
  public get dhcpSnoopingEnabled() {
    return this.getBooleanAttribute('dhcp_snooping_enabled');
  }
  public set dhcpSnoopingEnabled(value: boolean | cdktf.IResolvable) {
    this._dhcpSnoopingEnabled = value;
  }
  public resetDhcpSnoopingEnabled() {
    this._dhcpSnoopingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingEnabledInput() {
    return this._dhcpSnoopingEnabled;
  }

  // dhcp_snooping_v6_enabled - computed: false, optional: true, required: false
  private _dhcpSnoopingV6Enabled?: boolean | cdktf.IResolvable; 
  public get dhcpSnoopingV6Enabled() {
    return this.getBooleanAttribute('dhcp_snooping_v6_enabled');
  }
  public set dhcpSnoopingV6Enabled(value: boolean | cdktf.IResolvable) {
    this._dhcpSnoopingV6Enabled = value;
  }
  public resetDhcpSnoopingV6Enabled() {
    this._dhcpSnoopingV6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingV6EnabledInput() {
    return this._dhcpSnoopingV6Enabled;
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

  // duplicate_ip_detection_enabled - computed: false, optional: true, required: false
  private _duplicateIpDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get duplicateIpDetectionEnabled() {
    return this.getBooleanAttribute('duplicate_ip_detection_enabled');
  }
  public set duplicateIpDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._duplicateIpDetectionEnabled = value;
  }
  public resetDuplicateIpDetectionEnabled() {
    this._duplicateIpDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateIpDetectionEnabledInput() {
    return this._duplicateIpDetectionEnabled;
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

  // nd_snooping_enabled - computed: false, optional: true, required: false
  private _ndSnoopingEnabled?: boolean | cdktf.IResolvable; 
  public get ndSnoopingEnabled() {
    return this.getBooleanAttribute('nd_snooping_enabled');
  }
  public set ndSnoopingEnabled(value: boolean | cdktf.IResolvable) {
    this._ndSnoopingEnabled = value;
  }
  public resetNdSnoopingEnabled() {
    this._ndSnoopingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndSnoopingEnabledInput() {
    return this._ndSnoopingEnabled;
  }

  // nd_snooping_limit - computed: false, optional: true, required: false
  private _ndSnoopingLimit?: number; 
  public get ndSnoopingLimit() {
    return this.getNumberAttribute('nd_snooping_limit');
  }
  public set ndSnoopingLimit(value: number) {
    this._ndSnoopingLimit = value;
  }
  public resetNdSnoopingLimit() {
    this._ndSnoopingLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndSnoopingLimitInput() {
    return this._ndSnoopingLimit;
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

  // tofu_enabled - computed: false, optional: true, required: false
  private _tofuEnabled?: boolean | cdktf.IResolvable; 
  public get tofuEnabled() {
    return this.getBooleanAttribute('tofu_enabled');
  }
  public set tofuEnabled(value: boolean | cdktf.IResolvable) {
    this._tofuEnabled = value;
  }
  public resetTofuEnabled() {
    this._tofuEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tofuEnabledInput() {
    return this._tofuEnabled;
  }

  // vmtools_enabled - computed: false, optional: true, required: false
  private _vmtoolsEnabled?: boolean | cdktf.IResolvable; 
  public get vmtoolsEnabled() {
    return this.getBooleanAttribute('vmtools_enabled');
  }
  public set vmtoolsEnabled(value: boolean | cdktf.IResolvable) {
    this._vmtoolsEnabled = value;
  }
  public resetVmtoolsEnabled() {
    this._vmtoolsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmtoolsEnabledInput() {
    return this._vmtoolsEnabled;
  }

  // vmtools_v6_enabled - computed: false, optional: true, required: false
  private _vmtoolsV6Enabled?: boolean | cdktf.IResolvable; 
  public get vmtoolsV6Enabled() {
    return this.getBooleanAttribute('vmtools_v6_enabled');
  }
  public set vmtoolsV6Enabled(value: boolean | cdktf.IResolvable) {
    this._vmtoolsV6Enabled = value;
  }
  public resetVmtoolsV6Enabled() {
    this._vmtoolsV6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmtoolsV6EnabledInput() {
    return this._vmtoolsV6Enabled;
  }

  // context - computed: false, optional: true, required: false
  private _context = new PolicyIpDiscoveryProfileContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: PolicyIpDiscoveryProfileContext) {
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
  private _tag = new PolicyIpDiscoveryProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyIpDiscoveryProfileTag[] | cdktf.IResolvable) {
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
      arp_binding_limit: cdktf.numberToTerraform(this._arpBindingLimit),
      arp_nd_binding_timeout: cdktf.numberToTerraform(this._arpNdBindingTimeout),
      arp_snooping_enabled: cdktf.booleanToTerraform(this._arpSnoopingEnabled),
      description: cdktf.stringToTerraform(this._description),
      dhcp_snooping_enabled: cdktf.booleanToTerraform(this._dhcpSnoopingEnabled),
      dhcp_snooping_v6_enabled: cdktf.booleanToTerraform(this._dhcpSnoopingV6Enabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      duplicate_ip_detection_enabled: cdktf.booleanToTerraform(this._duplicateIpDetectionEnabled),
      id: cdktf.stringToTerraform(this._id),
      nd_snooping_enabled: cdktf.booleanToTerraform(this._ndSnoopingEnabled),
      nd_snooping_limit: cdktf.numberToTerraform(this._ndSnoopingLimit),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      tofu_enabled: cdktf.booleanToTerraform(this._tofuEnabled),
      vmtools_enabled: cdktf.booleanToTerraform(this._vmtoolsEnabled),
      vmtools_v6_enabled: cdktf.booleanToTerraform(this._vmtoolsV6Enabled),
      context: policyIpDiscoveryProfileContextToTerraform(this._context.internalValue),
      tag: cdktf.listMapper(policyIpDiscoveryProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_binding_limit: {
        value: cdktf.numberToHclTerraform(this._arpBindingLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_nd_binding_timeout: {
        value: cdktf.numberToHclTerraform(this._arpNdBindingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      arp_snooping_enabled: {
        value: cdktf.booleanToHclTerraform(this._arpSnoopingEnabled),
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
      dhcp_snooping_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpSnoopingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_snooping_v6_enabled: {
        value: cdktf.booleanToHclTerraform(this._dhcpSnoopingV6Enabled),
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
      duplicate_ip_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._duplicateIpDetectionEnabled),
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
      nd_snooping_enabled: {
        value: cdktf.booleanToHclTerraform(this._ndSnoopingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nd_snooping_limit: {
        value: cdktf.numberToHclTerraform(this._ndSnoopingLimit),
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
      tofu_enabled: {
        value: cdktf.booleanToHclTerraform(this._tofuEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vmtools_enabled: {
        value: cdktf.booleanToHclTerraform(this._vmtoolsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vmtools_v6_enabled: {
        value: cdktf.booleanToHclTerraform(this._vmtoolsV6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      context: {
        value: policyIpDiscoveryProfileContextToHclTerraform(this._context.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyIpDiscoveryProfileContextList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyIpDiscoveryProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyIpDiscoveryProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
