// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyEdgeClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#description PolicyEdgeCluster#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#display_name PolicyEdgeCluster#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#edge_cluster_profile_path PolicyEdgeCluster#edge_cluster_profile_path}
  */
  readonly edgeClusterProfilePath: string;
  /**
  * ID of the enforcement point this Host Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#enforcement_point PolicyEdgeCluster#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#id PolicyEdgeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#inter_site_forwarding_enabled PolicyEdgeCluster#inter_site_forwarding_enabled}
  */
  readonly interSiteForwardingEnabled?: boolean | cdktf.IResolvable;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#nsx_id PolicyEdgeCluster#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#password_managed_by_vcf PolicyEdgeCluster#password_managed_by_vcf}
  */
  readonly passwordManagedByVcf?: boolean | cdktf.IResolvable;
  /**
  * Path to the site this Host Transport Node belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#site_path PolicyEdgeCluster#site_path}
  */
  readonly sitePath?: string;
  /**
  * allocation_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#allocation_rule PolicyEdgeCluster#allocation_rule}
  */
  readonly allocationRule?: PolicyEdgeClusterAllocationRule[] | cdktf.IResolvable;
  /**
  * policy_edge_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#policy_edge_node PolicyEdgeCluster#policy_edge_node}
  */
  readonly policyEdgeNode?: PolicyEdgeClusterPolicyEdgeNode[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#tag PolicyEdgeCluster#tag}
  */
  readonly tag?: PolicyEdgeClusterTag[] | cdktf.IResolvable;
}
export interface PolicyEdgeClusterAllocationRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#action_based_on_failure_domain_enabled PolicyEdgeCluster#action_based_on_failure_domain_enabled}
  */
  readonly actionBasedOnFailureDomainEnabled?: boolean | cdktf.IResolvable;
}

export function policyEdgeClusterAllocationRuleToTerraform(struct?: PolicyEdgeClusterAllocationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_based_on_failure_domain_enabled: cdktf.booleanToTerraform(struct!.actionBasedOnFailureDomainEnabled),
  }
}


export function policyEdgeClusterAllocationRuleToHclTerraform(struct?: PolicyEdgeClusterAllocationRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_based_on_failure_domain_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.actionBasedOnFailureDomainEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeClusterAllocationRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeClusterAllocationRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionBasedOnFailureDomainEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBasedOnFailureDomainEnabled = this._actionBasedOnFailureDomainEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeClusterAllocationRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionBasedOnFailureDomainEnabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionBasedOnFailureDomainEnabled = value.actionBasedOnFailureDomainEnabled;
    }
  }

  // action_based_on_failure_domain_enabled - computed: false, optional: true, required: false
  private _actionBasedOnFailureDomainEnabled?: boolean | cdktf.IResolvable; 
  public get actionBasedOnFailureDomainEnabled() {
    return this.getBooleanAttribute('action_based_on_failure_domain_enabled');
  }
  public set actionBasedOnFailureDomainEnabled(value: boolean | cdktf.IResolvable) {
    this._actionBasedOnFailureDomainEnabled = value;
  }
  public resetActionBasedOnFailureDomainEnabled() {
    this._actionBasedOnFailureDomainEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBasedOnFailureDomainEnabledInput() {
    return this._actionBasedOnFailureDomainEnabled;
  }
}

export class PolicyEdgeClusterAllocationRuleList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeClusterAllocationRule[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeClusterAllocationRuleOutputReference {
    return new PolicyEdgeClusterAllocationRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeClusterPolicyEdgeNode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#edge_transport_node_path PolicyEdgeCluster#edge_transport_node_path}
  */
  readonly edgeTransportNodePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#id PolicyEdgeCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function policyEdgeClusterPolicyEdgeNodeToTerraform(struct?: PolicyEdgeClusterPolicyEdgeNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_transport_node_path: cdktf.stringToTerraform(struct!.edgeTransportNodePath),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function policyEdgeClusterPolicyEdgeNodeToHclTerraform(struct?: PolicyEdgeClusterPolicyEdgeNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_transport_node_path: {
      value: cdktf.stringToHclTerraform(struct!.edgeTransportNodePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyEdgeClusterPolicyEdgeNodeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeClusterPolicyEdgeNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeTransportNodePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeTransportNodePath = this._edgeTransportNodePath;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyEdgeClusterPolicyEdgeNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeTransportNodePath = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeTransportNodePath = value.edgeTransportNodePath;
      this._id = value.id;
    }
  }

  // edge_transport_node_path - computed: false, optional: false, required: true
  private _edgeTransportNodePath?: string; 
  public get edgeTransportNodePath() {
    return this.getStringAttribute('edge_transport_node_path');
  }
  public set edgeTransportNodePath(value: string) {
    this._edgeTransportNodePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeTransportNodePathInput() {
    return this._edgeTransportNodePath;
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
}

export class PolicyEdgeClusterPolicyEdgeNodeList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeClusterPolicyEdgeNode[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeClusterPolicyEdgeNodeOutputReference {
    return new PolicyEdgeClusterPolicyEdgeNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyEdgeClusterTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#scope PolicyEdgeCluster#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#tag PolicyEdgeCluster#tag}
  */
  readonly tag?: string;
}

export function policyEdgeClusterTagToTerraform(struct?: PolicyEdgeClusterTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyEdgeClusterTagToHclTerraform(struct?: PolicyEdgeClusterTag | cdktf.IResolvable): any {
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

export class PolicyEdgeClusterTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyEdgeClusterTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyEdgeClusterTag | cdktf.IResolvable | undefined) {
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

export class PolicyEdgeClusterTagList extends cdktf.ComplexList {
  public internalValue? : PolicyEdgeClusterTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyEdgeClusterTagOutputReference {
    return new PolicyEdgeClusterTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster nsxt_policy_edge_cluster}
*/
export class PolicyEdgeCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_edge_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyEdgeCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyEdgeCluster to import
  * @param importFromId The id of the existing PolicyEdgeCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyEdgeCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_edge_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_edge_cluster nsxt_policy_edge_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyEdgeClusterConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyEdgeClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_edge_cluster',
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
    this._edgeClusterProfilePath = config.edgeClusterProfilePath;
    this._enforcementPoint = config.enforcementPoint;
    this._id = config.id;
    this._interSiteForwardingEnabled = config.interSiteForwardingEnabled;
    this._nsxId = config.nsxId;
    this._passwordManagedByVcf = config.passwordManagedByVcf;
    this._sitePath = config.sitePath;
    this._allocationRule.internalValue = config.allocationRule;
    this._policyEdgeNode.internalValue = config.policyEdgeNode;
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

  // edge_cluster_profile_path - computed: false, optional: false, required: true
  private _edgeClusterProfilePath?: string; 
  public get edgeClusterProfilePath() {
    return this.getStringAttribute('edge_cluster_profile_path');
  }
  public set edgeClusterProfilePath(value: string) {
    this._edgeClusterProfilePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterProfilePathInput() {
    return this._edgeClusterProfilePath;
  }

  // enforcement_point - computed: false, optional: true, required: false
  private _enforcementPoint?: string; 
  public get enforcementPoint() {
    return this.getStringAttribute('enforcement_point');
  }
  public set enforcementPoint(value: string) {
    this._enforcementPoint = value;
  }
  public resetEnforcementPoint() {
    this._enforcementPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementPointInput() {
    return this._enforcementPoint;
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

  // inter_site_forwarding_enabled - computed: true, optional: true, required: false
  private _interSiteForwardingEnabled?: boolean | cdktf.IResolvable; 
  public get interSiteForwardingEnabled() {
    return this.getBooleanAttribute('inter_site_forwarding_enabled');
  }
  public set interSiteForwardingEnabled(value: boolean | cdktf.IResolvable) {
    this._interSiteForwardingEnabled = value;
  }
  public resetInterSiteForwardingEnabled() {
    this._interSiteForwardingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interSiteForwardingEnabledInput() {
    return this._interSiteForwardingEnabled;
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

  // password_managed_by_vcf - computed: false, optional: true, required: false
  private _passwordManagedByVcf?: boolean | cdktf.IResolvable; 
  public get passwordManagedByVcf() {
    return this.getBooleanAttribute('password_managed_by_vcf');
  }
  public set passwordManagedByVcf(value: boolean | cdktf.IResolvable) {
    this._passwordManagedByVcf = value;
  }
  public resetPasswordManagedByVcf() {
    this._passwordManagedByVcf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordManagedByVcfInput() {
    return this._passwordManagedByVcf;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // allocation_rule - computed: false, optional: true, required: false
  private _allocationRule = new PolicyEdgeClusterAllocationRuleList(this, "allocation_rule", false);
  public get allocationRule() {
    return this._allocationRule;
  }
  public putAllocationRule(value: PolicyEdgeClusterAllocationRule[] | cdktf.IResolvable) {
    this._allocationRule.internalValue = value;
  }
  public resetAllocationRule() {
    this._allocationRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationRuleInput() {
    return this._allocationRule.internalValue;
  }

  // policy_edge_node - computed: false, optional: true, required: false
  private _policyEdgeNode = new PolicyEdgeClusterPolicyEdgeNodeList(this, "policy_edge_node", true);
  public get policyEdgeNode() {
    return this._policyEdgeNode;
  }
  public putPolicyEdgeNode(value: PolicyEdgeClusterPolicyEdgeNode[] | cdktf.IResolvable) {
    this._policyEdgeNode.internalValue = value;
  }
  public resetPolicyEdgeNode() {
    this._policyEdgeNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEdgeNodeInput() {
    return this._policyEdgeNode.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyEdgeClusterTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyEdgeClusterTag[] | cdktf.IResolvable) {
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
      edge_cluster_profile_path: cdktf.stringToTerraform(this._edgeClusterProfilePath),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      id: cdktf.stringToTerraform(this._id),
      inter_site_forwarding_enabled: cdktf.booleanToTerraform(this._interSiteForwardingEnabled),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      password_managed_by_vcf: cdktf.booleanToTerraform(this._passwordManagedByVcf),
      site_path: cdktf.stringToTerraform(this._sitePath),
      allocation_rule: cdktf.listMapper(policyEdgeClusterAllocationRuleToTerraform, true)(this._allocationRule.internalValue),
      policy_edge_node: cdktf.listMapper(policyEdgeClusterPolicyEdgeNodeToTerraform, true)(this._policyEdgeNode.internalValue),
      tag: cdktf.listMapper(policyEdgeClusterTagToTerraform, true)(this._tag.internalValue),
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
      edge_cluster_profile_path: {
        value: cdktf.stringToHclTerraform(this._edgeClusterProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforcement_point: {
        value: cdktf.stringToHclTerraform(this._enforcementPoint),
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
      inter_site_forwarding_enabled: {
        value: cdktf.booleanToHclTerraform(this._interSiteForwardingEnabled),
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
      password_managed_by_vcf: {
        value: cdktf.booleanToHclTerraform(this._passwordManagedByVcf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allocation_rule: {
        value: cdktf.listMapperHcl(policyEdgeClusterAllocationRuleToHclTerraform, true)(this._allocationRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyEdgeClusterAllocationRuleList",
      },
      policy_edge_node: {
        value: cdktf.listMapperHcl(policyEdgeClusterPolicyEdgeNodeToHclTerraform, true)(this._policyEdgeNode.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyEdgeClusterPolicyEdgeNodeList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyEdgeClusterTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyEdgeClusterTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
