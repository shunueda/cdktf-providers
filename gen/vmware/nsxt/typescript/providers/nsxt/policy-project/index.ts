// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#activate_default_dfw_rules PolicyProject#activate_default_dfw_rules}
  */
  readonly activateDefaultDfwRules?: boolean | cdktf.IResolvable;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#description PolicyProject#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#display_name PolicyProject#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#external_ipv4_blocks PolicyProject#external_ipv4_blocks}
  */
  readonly externalIpv4Blocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#id PolicyProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#nsx_id PolicyProject#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#short_id PolicyProject#short_id}
  */
  readonly shortId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#tgw_external_connections PolicyProject#tgw_external_connections}
  */
  readonly tgwExternalConnections?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#tier0_gateway_paths PolicyProject#tier0_gateway_paths}
  */
  readonly tier0GatewayPaths?: string[];
  /**
  * Flag to specify whether the DVPGs created for project segments are grouped under a folder on the VC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#vc_folder PolicyProject#vc_folder}
  */
  readonly vcFolder?: boolean | cdktf.IResolvable;
  /**
  * default_security_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#default_security_profile PolicyProject#default_security_profile}
  */
  readonly defaultSecurityProfile?: PolicyProjectDefaultSecurityProfile;
  /**
  * site_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#site_info PolicyProject#site_info}
  */
  readonly siteInfo?: PolicyProjectSiteInfo[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#tag PolicyProject#tag}
  */
  readonly tag?: PolicyProjectTag[] | cdktf.IResolvable;
}
export interface PolicyProjectDefaultSecurityProfileNorthSouthFirewall {
  /**
  * Flag that indicates whether north-south firewall (Gateway Firewall) is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#enabled PolicyProject#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function policyProjectDefaultSecurityProfileNorthSouthFirewallToTerraform(struct?: PolicyProjectDefaultSecurityProfileNorthSouthFirewallOutputReference | PolicyProjectDefaultSecurityProfileNorthSouthFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function policyProjectDefaultSecurityProfileNorthSouthFirewallToHclTerraform(struct?: PolicyProjectDefaultSecurityProfileNorthSouthFirewallOutputReference | PolicyProjectDefaultSecurityProfileNorthSouthFirewall): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyProjectDefaultSecurityProfileNorthSouthFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyProjectDefaultSecurityProfileNorthSouthFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyProjectDefaultSecurityProfileNorthSouthFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface PolicyProjectDefaultSecurityProfile {
  /**
  * north_south_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#north_south_firewall PolicyProject#north_south_firewall}
  */
  readonly northSouthFirewall: PolicyProjectDefaultSecurityProfileNorthSouthFirewall;
}

export function policyProjectDefaultSecurityProfileToTerraform(struct?: PolicyProjectDefaultSecurityProfileOutputReference | PolicyProjectDefaultSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    north_south_firewall: policyProjectDefaultSecurityProfileNorthSouthFirewallToTerraform(struct!.northSouthFirewall),
  }
}


export function policyProjectDefaultSecurityProfileToHclTerraform(struct?: PolicyProjectDefaultSecurityProfileOutputReference | PolicyProjectDefaultSecurityProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    north_south_firewall: {
      value: policyProjectDefaultSecurityProfileNorthSouthFirewallToHclTerraform(struct!.northSouthFirewall),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyProjectDefaultSecurityProfileNorthSouthFirewallList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyProjectDefaultSecurityProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyProjectDefaultSecurityProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._northSouthFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.northSouthFirewall = this._northSouthFirewall?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyProjectDefaultSecurityProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._northSouthFirewall.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._northSouthFirewall.internalValue = value.northSouthFirewall;
    }
  }

  // north_south_firewall - computed: false, optional: false, required: true
  private _northSouthFirewall = new PolicyProjectDefaultSecurityProfileNorthSouthFirewallOutputReference(this, "north_south_firewall");
  public get northSouthFirewall() {
    return this._northSouthFirewall;
  }
  public putNorthSouthFirewall(value: PolicyProjectDefaultSecurityProfileNorthSouthFirewall) {
    this._northSouthFirewall.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get northSouthFirewallInput() {
    return this._northSouthFirewall.internalValue;
  }
}
export interface PolicyProjectSiteInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#edge_cluster_paths PolicyProject#edge_cluster_paths}
  */
  readonly edgeClusterPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#site_path PolicyProject#site_path}
  */
  readonly sitePath?: string;
}

export function policyProjectSiteInfoToTerraform(struct?: PolicyProjectSiteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    edge_cluster_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.edgeClusterPaths),
    site_path: cdktf.stringToTerraform(struct!.sitePath),
  }
}


export function policyProjectSiteInfoToHclTerraform(struct?: PolicyProjectSiteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    edge_cluster_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.edgeClusterPaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_path: {
      value: cdktf.stringToHclTerraform(struct!.sitePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyProjectSiteInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyProjectSiteInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._edgeClusterPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeClusterPaths = this._edgeClusterPaths;
    }
    if (this._sitePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitePath = this._sitePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyProjectSiteInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._edgeClusterPaths = undefined;
      this._sitePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._edgeClusterPaths = value.edgeClusterPaths;
      this._sitePath = value.sitePath;
    }
  }

  // edge_cluster_paths - computed: false, optional: true, required: false
  private _edgeClusterPaths?: string[]; 
  public get edgeClusterPaths() {
    return this.getListAttribute('edge_cluster_paths');
  }
  public set edgeClusterPaths(value: string[]) {
    this._edgeClusterPaths = value;
  }
  public resetEdgeClusterPaths() {
    this._edgeClusterPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterPathsInput() {
    return this._edgeClusterPaths;
  }

  // site_path - computed: true, optional: true, required: false
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
}

export class PolicyProjectSiteInfoList extends cdktf.ComplexList {
  public internalValue? : PolicyProjectSiteInfo[] | cdktf.IResolvable

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
  public get(index: number): PolicyProjectSiteInfoOutputReference {
    return new PolicyProjectSiteInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyProjectTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#scope PolicyProject#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#tag PolicyProject#tag}
  */
  readonly tag?: string;
}

export function policyProjectTagToTerraform(struct?: PolicyProjectTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyProjectTagToHclTerraform(struct?: PolicyProjectTag | cdktf.IResolvable): any {
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

export class PolicyProjectTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyProjectTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyProjectTag | cdktf.IResolvable | undefined) {
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

export class PolicyProjectTagList extends cdktf.ComplexList {
  public internalValue? : PolicyProjectTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyProjectTagOutputReference {
    return new PolicyProjectTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project nsxt_policy_project}
*/
export class PolicyProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyProject to import
  * @param importFromId The id of the existing PolicyProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_project nsxt_policy_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyProjectConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_project',
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
    this._activateDefaultDfwRules = config.activateDefaultDfwRules;
    this._description = config.description;
    this._displayName = config.displayName;
    this._externalIpv4Blocks = config.externalIpv4Blocks;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._shortId = config.shortId;
    this._tgwExternalConnections = config.tgwExternalConnections;
    this._tier0GatewayPaths = config.tier0GatewayPaths;
    this._vcFolder = config.vcFolder;
    this._defaultSecurityProfile.internalValue = config.defaultSecurityProfile;
    this._siteInfo.internalValue = config.siteInfo;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_default_dfw_rules - computed: true, optional: true, required: false
  private _activateDefaultDfwRules?: boolean | cdktf.IResolvable; 
  public get activateDefaultDfwRules() {
    return this.getBooleanAttribute('activate_default_dfw_rules');
  }
  public set activateDefaultDfwRules(value: boolean | cdktf.IResolvable) {
    this._activateDefaultDfwRules = value;
  }
  public resetActivateDefaultDfwRules() {
    this._activateDefaultDfwRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateDefaultDfwRulesInput() {
    return this._activateDefaultDfwRules;
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

  // external_ipv4_blocks - computed: false, optional: true, required: false
  private _externalIpv4Blocks?: string[]; 
  public get externalIpv4Blocks() {
    return this.getListAttribute('external_ipv4_blocks');
  }
  public set externalIpv4Blocks(value: string[]) {
    this._externalIpv4Blocks = value;
  }
  public resetExternalIpv4Blocks() {
    this._externalIpv4Blocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpv4BlocksInput() {
    return this._externalIpv4Blocks;
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

  // short_id - computed: true, optional: true, required: false
  private _shortId?: string; 
  public get shortId() {
    return this.getStringAttribute('short_id');
  }
  public set shortId(value: string) {
    this._shortId = value;
  }
  public resetShortId() {
    this._shortId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortIdInput() {
    return this._shortId;
  }

  // tgw_external_connections - computed: false, optional: true, required: false
  private _tgwExternalConnections?: string[]; 
  public get tgwExternalConnections() {
    return this.getListAttribute('tgw_external_connections');
  }
  public set tgwExternalConnections(value: string[]) {
    this._tgwExternalConnections = value;
  }
  public resetTgwExternalConnections() {
    this._tgwExternalConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgwExternalConnectionsInput() {
    return this._tgwExternalConnections;
  }

  // tier0_gateway_paths - computed: false, optional: true, required: false
  private _tier0GatewayPaths?: string[]; 
  public get tier0GatewayPaths() {
    return this.getListAttribute('tier0_gateway_paths');
  }
  public set tier0GatewayPaths(value: string[]) {
    this._tier0GatewayPaths = value;
  }
  public resetTier0GatewayPaths() {
    this._tier0GatewayPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tier0GatewayPathsInput() {
    return this._tier0GatewayPaths;
  }

  // vc_folder - computed: false, optional: true, required: false
  private _vcFolder?: boolean | cdktf.IResolvable; 
  public get vcFolder() {
    return this.getBooleanAttribute('vc_folder');
  }
  public set vcFolder(value: boolean | cdktf.IResolvable) {
    this._vcFolder = value;
  }
  public resetVcFolder() {
    this._vcFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcFolderInput() {
    return this._vcFolder;
  }

  // default_security_profile - computed: false, optional: true, required: false
  private _defaultSecurityProfile = new PolicyProjectDefaultSecurityProfileOutputReference(this, "default_security_profile");
  public get defaultSecurityProfile() {
    return this._defaultSecurityProfile;
  }
  public putDefaultSecurityProfile(value: PolicyProjectDefaultSecurityProfile) {
    this._defaultSecurityProfile.internalValue = value;
  }
  public resetDefaultSecurityProfile() {
    this._defaultSecurityProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityProfileInput() {
    return this._defaultSecurityProfile.internalValue;
  }

  // site_info - computed: false, optional: true, required: false
  private _siteInfo = new PolicyProjectSiteInfoList(this, "site_info", false);
  public get siteInfo() {
    return this._siteInfo;
  }
  public putSiteInfo(value: PolicyProjectSiteInfo[] | cdktf.IResolvable) {
    this._siteInfo.internalValue = value;
  }
  public resetSiteInfo() {
    this._siteInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInfoInput() {
    return this._siteInfo.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyProjectTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyProjectTag[] | cdktf.IResolvable) {
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
      activate_default_dfw_rules: cdktf.booleanToTerraform(this._activateDefaultDfwRules),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_ipv4_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalIpv4Blocks),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      short_id: cdktf.stringToTerraform(this._shortId),
      tgw_external_connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tgwExternalConnections),
      tier0_gateway_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tier0GatewayPaths),
      vc_folder: cdktf.booleanToTerraform(this._vcFolder),
      default_security_profile: policyProjectDefaultSecurityProfileToTerraform(this._defaultSecurityProfile.internalValue),
      site_info: cdktf.listMapper(policyProjectSiteInfoToTerraform, true)(this._siteInfo.internalValue),
      tag: cdktf.listMapper(policyProjectTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate_default_dfw_rules: {
        value: cdktf.booleanToHclTerraform(this._activateDefaultDfwRules),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_ipv4_blocks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalIpv4Blocks),
        isBlock: false,
        type: "list",
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
      short_id: {
        value: cdktf.stringToHclTerraform(this._shortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tgw_external_connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tgwExternalConnections),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tier0_gateway_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tier0GatewayPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vc_folder: {
        value: cdktf.booleanToHclTerraform(this._vcFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_security_profile: {
        value: policyProjectDefaultSecurityProfileToHclTerraform(this._defaultSecurityProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyProjectDefaultSecurityProfileList",
      },
      site_info: {
        value: cdktf.listMapperHcl(policyProjectSiteInfoToHclTerraform, true)(this._siteInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyProjectSiteInfoList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyProjectTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyProjectTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
