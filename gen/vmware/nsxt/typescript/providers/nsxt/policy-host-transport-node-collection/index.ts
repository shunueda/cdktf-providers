// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyHostTransportNodeCollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compute collection id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#compute_collection_id PolicyHostTransportNodeCollection#compute_collection_id}
  */
  readonly computeCollectionId: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#description PolicyHostTransportNodeCollection#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#display_name PolicyHostTransportNodeCollection#display_name}
  */
  readonly displayName: string;
  /**
  * If this is set to true, NSX on DVPG will be enabled on the Transport Node Collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#enable_nsx_on_dvpg PolicyHostTransportNodeCollection#enable_nsx_on_dvpg}
  */
  readonly enableNsxOnDvpg?: boolean | cdktf.IResolvable;
  /**
  * ID of the enforcement point this resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#enforcement_point PolicyHostTransportNodeCollection#enforcement_point}
  */
  readonly enforcementPoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#id PolicyHostTransportNodeCollection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#nsx_id PolicyHostTransportNodeCollection#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Indicate whether NSX service should be removed from hypervisors during resource deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#remove_nsx_on_destroy PolicyHostTransportNodeCollection#remove_nsx_on_destroy}
  */
  readonly removeNsxOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Path to the site this resource belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#site_path PolicyHostTransportNodeCollection#site_path}
  */
  readonly sitePath?: string;
  /**
  * Transport Node Profile Path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#transport_node_profile_path PolicyHostTransportNodeCollection#transport_node_profile_path}
  */
  readonly transportNodeProfilePath?: string;
  /**
  * sub_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#sub_cluster_config PolicyHostTransportNodeCollection#sub_cluster_config}
  */
  readonly subClusterConfig?: PolicyHostTransportNodeCollectionSubClusterConfig[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#tag PolicyHostTransportNodeCollection#tag}
  */
  readonly tag?: PolicyHostTransportNodeCollectionTag[] | cdktf.IResolvable;
}
export interface PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource {
  /**
  * HostSwitch Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#host_switch_id PolicyHostTransportNodeCollection#host_switch_id}
  */
  readonly hostSwitchId: string;
  /**
  * Name of the TransportNodeProfile sub configuration to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#transport_node_profile_sub_config_name PolicyHostTransportNodeCollection#transport_node_profile_sub_config_name}
  */
  readonly transportNodeProfileSubConfigName: string;
}

export function policyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceToTerraform(struct?: PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_switch_id: cdktf.stringToTerraform(struct!.hostSwitchId),
    transport_node_profile_sub_config_name: cdktf.stringToTerraform(struct!.transportNodeProfileSubConfigName),
  }
}


export function policyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceToHclTerraform(struct?: PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_switch_id: {
      value: cdktf.stringToHclTerraform(struct!.hostSwitchId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transport_node_profile_sub_config_name: {
      value: cdktf.stringToHclTerraform(struct!.transportNodeProfileSubConfigName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostSwitchId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchId = this._hostSwitchId;
    }
    if (this._transportNodeProfileSubConfigName !== undefined) {
      hasAnyValues = true;
      internalValueResult.transportNodeProfileSubConfigName = this._transportNodeProfileSubConfigName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostSwitchId = undefined;
      this._transportNodeProfileSubConfigName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostSwitchId = value.hostSwitchId;
      this._transportNodeProfileSubConfigName = value.transportNodeProfileSubConfigName;
    }
  }

  // host_switch_id - computed: false, optional: false, required: true
  private _hostSwitchId?: string; 
  public get hostSwitchId() {
    return this.getStringAttribute('host_switch_id');
  }
  public set hostSwitchId(value: string) {
    this._hostSwitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchIdInput() {
    return this._hostSwitchId;
  }

  // transport_node_profile_sub_config_name - computed: false, optional: false, required: true
  private _transportNodeProfileSubConfigName?: string; 
  public get transportNodeProfileSubConfigName() {
    return this.getStringAttribute('transport_node_profile_sub_config_name');
  }
  public set transportNodeProfileSubConfigName(value: string) {
    this._transportNodeProfileSubConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportNodeProfileSubConfigNameInput() {
    return this._transportNodeProfileSubConfigName;
  }
}

export class PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceOutputReference {
    return new PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeCollectionSubClusterConfig {
  /**
  * sub-cluster Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#sub_cluster_id PolicyHostTransportNodeCollection#sub_cluster_id}
  */
  readonly subClusterId?: string;
  /**
  * sub-cluster path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#sub_cluster_path PolicyHostTransportNodeCollection#sub_cluster_path}
  */
  readonly subClusterPath?: string;
  /**
  * host_switch_config_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#host_switch_config_source PolicyHostTransportNodeCollection#host_switch_config_source}
  */
  readonly hostSwitchConfigSource: PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource[] | cdktf.IResolvable;
}

export function policyHostTransportNodeCollectionSubClusterConfigToTerraform(struct?: PolicyHostTransportNodeCollectionSubClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sub_cluster_id: cdktf.stringToTerraform(struct!.subClusterId),
    sub_cluster_path: cdktf.stringToTerraform(struct!.subClusterPath),
    host_switch_config_source: cdktf.listMapper(policyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceToTerraform, true)(struct!.hostSwitchConfigSource),
  }
}


export function policyHostTransportNodeCollectionSubClusterConfigToHclTerraform(struct?: PolicyHostTransportNodeCollectionSubClusterConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sub_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.subClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_cluster_path: {
      value: cdktf.stringToHclTerraform(struct!.subClusterPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_switch_config_source: {
      value: cdktf.listMapperHcl(policyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceToHclTerraform, true)(struct!.hostSwitchConfigSource),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHostTransportNodeCollectionSubClusterConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeCollectionSubClusterConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subClusterId = this._subClusterId;
    }
    if (this._subClusterPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subClusterPath = this._subClusterPath;
    }
    if (this._hostSwitchConfigSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchConfigSource = this._hostSwitchConfigSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHostTransportNodeCollectionSubClusterConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subClusterId = undefined;
      this._subClusterPath = undefined;
      this._hostSwitchConfigSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subClusterId = value.subClusterId;
      this._subClusterPath = value.subClusterPath;
      this._hostSwitchConfigSource.internalValue = value.hostSwitchConfigSource;
    }
  }

  // sub_cluster_id - computed: true, optional: true, required: false
  private _subClusterId?: string; 
  public get subClusterId() {
    return this.getStringAttribute('sub_cluster_id');
  }
  public set subClusterId(value: string) {
    this._subClusterId = value;
  }
  public resetSubClusterId() {
    this._subClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subClusterIdInput() {
    return this._subClusterId;
  }

  // sub_cluster_path - computed: false, optional: true, required: false
  private _subClusterPath?: string; 
  public get subClusterPath() {
    return this.getStringAttribute('sub_cluster_path');
  }
  public set subClusterPath(value: string) {
    this._subClusterPath = value;
  }
  public resetSubClusterPath() {
    this._subClusterPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subClusterPathInput() {
    return this._subClusterPath;
  }

  // host_switch_config_source - computed: false, optional: false, required: true
  private _hostSwitchConfigSource = new PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSourceList(this, "host_switch_config_source", false);
  public get hostSwitchConfigSource() {
    return this._hostSwitchConfigSource;
  }
  public putHostSwitchConfigSource(value: PolicyHostTransportNodeCollectionSubClusterConfigHostSwitchConfigSource[] | cdktf.IResolvable) {
    this._hostSwitchConfigSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchConfigSourceInput() {
    return this._hostSwitchConfigSource.internalValue;
  }
}

export class PolicyHostTransportNodeCollectionSubClusterConfigList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeCollectionSubClusterConfig[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeCollectionSubClusterConfigOutputReference {
    return new PolicyHostTransportNodeCollectionSubClusterConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyHostTransportNodeCollectionTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#scope PolicyHostTransportNodeCollection#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#tag PolicyHostTransportNodeCollection#tag}
  */
  readonly tag?: string;
}

export function policyHostTransportNodeCollectionTagToTerraform(struct?: PolicyHostTransportNodeCollectionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyHostTransportNodeCollectionTagToHclTerraform(struct?: PolicyHostTransportNodeCollectionTag | cdktf.IResolvable): any {
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

export class PolicyHostTransportNodeCollectionTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHostTransportNodeCollectionTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyHostTransportNodeCollectionTag | cdktf.IResolvable | undefined) {
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

export class PolicyHostTransportNodeCollectionTagList extends cdktf.ComplexList {
  public internalValue? : PolicyHostTransportNodeCollectionTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyHostTransportNodeCollectionTagOutputReference {
    return new PolicyHostTransportNodeCollectionTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection nsxt_policy_host_transport_node_collection}
*/
export class PolicyHostTransportNodeCollection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_host_transport_node_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyHostTransportNodeCollection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyHostTransportNodeCollection to import
  * @param importFromId The id of the existing PolicyHostTransportNodeCollection that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyHostTransportNodeCollection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_host_transport_node_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_host_transport_node_collection nsxt_policy_host_transport_node_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyHostTransportNodeCollectionConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyHostTransportNodeCollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_host_transport_node_collection',
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
    this._computeCollectionId = config.computeCollectionId;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableNsxOnDvpg = config.enableNsxOnDvpg;
    this._enforcementPoint = config.enforcementPoint;
    this._id = config.id;
    this._nsxId = config.nsxId;
    this._removeNsxOnDestroy = config.removeNsxOnDestroy;
    this._sitePath = config.sitePath;
    this._transportNodeProfilePath = config.transportNodeProfilePath;
    this._subClusterConfig.internalValue = config.subClusterConfig;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compute_collection_id - computed: false, optional: false, required: true
  private _computeCollectionId?: string; 
  public get computeCollectionId() {
    return this.getStringAttribute('compute_collection_id');
  }
  public set computeCollectionId(value: string) {
    this._computeCollectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCollectionIdInput() {
    return this._computeCollectionId;
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

  // enable_nsx_on_dvpg - computed: false, optional: true, required: false
  private _enableNsxOnDvpg?: boolean | cdktf.IResolvable; 
  public get enableNsxOnDvpg() {
    return this.getBooleanAttribute('enable_nsx_on_dvpg');
  }
  public set enableNsxOnDvpg(value: boolean | cdktf.IResolvable) {
    this._enableNsxOnDvpg = value;
  }
  public resetEnableNsxOnDvpg() {
    this._enableNsxOnDvpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNsxOnDvpgInput() {
    return this._enableNsxOnDvpg;
  }

  // enforcement_point - computed: true, optional: true, required: false
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

  // remove_nsx_on_destroy - computed: false, optional: true, required: false
  private _removeNsxOnDestroy?: boolean | cdktf.IResolvable; 
  public get removeNsxOnDestroy() {
    return this.getBooleanAttribute('remove_nsx_on_destroy');
  }
  public set removeNsxOnDestroy(value: boolean | cdktf.IResolvable) {
    this._removeNsxOnDestroy = value;
  }
  public resetRemoveNsxOnDestroy() {
    this._removeNsxOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeNsxOnDestroyInput() {
    return this._removeNsxOnDestroy;
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

  // transport_node_profile_path - computed: false, optional: true, required: false
  private _transportNodeProfilePath?: string; 
  public get transportNodeProfilePath() {
    return this.getStringAttribute('transport_node_profile_path');
  }
  public set transportNodeProfilePath(value: string) {
    this._transportNodeProfilePath = value;
  }
  public resetTransportNodeProfilePath() {
    this._transportNodeProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportNodeProfilePathInput() {
    return this._transportNodeProfilePath;
  }

  // sub_cluster_config - computed: false, optional: true, required: false
  private _subClusterConfig = new PolicyHostTransportNodeCollectionSubClusterConfigList(this, "sub_cluster_config", false);
  public get subClusterConfig() {
    return this._subClusterConfig;
  }
  public putSubClusterConfig(value: PolicyHostTransportNodeCollectionSubClusterConfig[] | cdktf.IResolvable) {
    this._subClusterConfig.internalValue = value;
  }
  public resetSubClusterConfig() {
    this._subClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subClusterConfigInput() {
    return this._subClusterConfig.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyHostTransportNodeCollectionTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyHostTransportNodeCollectionTag[] | cdktf.IResolvable) {
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
      compute_collection_id: cdktf.stringToTerraform(this._computeCollectionId),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_nsx_on_dvpg: cdktf.booleanToTerraform(this._enableNsxOnDvpg),
      enforcement_point: cdktf.stringToTerraform(this._enforcementPoint),
      id: cdktf.stringToTerraform(this._id),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      remove_nsx_on_destroy: cdktf.booleanToTerraform(this._removeNsxOnDestroy),
      site_path: cdktf.stringToTerraform(this._sitePath),
      transport_node_profile_path: cdktf.stringToTerraform(this._transportNodeProfilePath),
      sub_cluster_config: cdktf.listMapper(policyHostTransportNodeCollectionSubClusterConfigToTerraform, true)(this._subClusterConfig.internalValue),
      tag: cdktf.listMapper(policyHostTransportNodeCollectionTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compute_collection_id: {
        value: cdktf.stringToHclTerraform(this._computeCollectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      enable_nsx_on_dvpg: {
        value: cdktf.booleanToHclTerraform(this._enableNsxOnDvpg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_nsx_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._removeNsxOnDestroy),
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
      transport_node_profile_path: {
        value: cdktf.stringToHclTerraform(this._transportNodeProfilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_cluster_config: {
        value: cdktf.listMapperHcl(policyHostTransportNodeCollectionSubClusterConfigToHclTerraform, true)(this._subClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyHostTransportNodeCollectionSubClusterConfigList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyHostTransportNodeCollectionTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyHostTransportNodeCollectionTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
