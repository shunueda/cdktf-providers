// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Virtual Cluster Cloud Location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#cloud VirtualCluster#cloud}
  */
  readonly cloud?: VirtualClusterCloud;
  /**
  * Virtual Cluster Configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#configuration VirtualCluster#configuration}
  */
  readonly configuration?: VirtualClusterConfiguration;
  /**
  * Virtual Cluster Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#name VirtualCluster#name}
  */
  readonly name: string;
  /**
  * Tags associated with the virtual cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#tags VirtualCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Virtual Cluster Tier. Currently, the valid virtual cluster tiers are `dev`, `pro`, `fundamentals`, and `enterprise`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#tier VirtualCluster#tier}
  */
  readonly tier: string;
  /**
  * Virtual Cluster Type. Currently, the only valid virtual cluster types is `byoc` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#type VirtualCluster#type}
  */
  readonly type?: string;
}
export interface VirtualClusterAgentKeys {
}

export function virtualClusterAgentKeysToTerraform(struct?: VirtualClusterAgentKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function virtualClusterAgentKeysToHclTerraform(struct?: VirtualClusterAgentKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VirtualClusterAgentKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): VirtualClusterAgentKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualClusterAgentKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // virtual_cluster_id - computed: true, optional: false, required: false
  public get virtualClusterId() {
    return this.getStringAttribute('virtual_cluster_id');
  }
}

export class VirtualClusterAgentKeysList extends cdktf.ComplexList {

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
  public get(index: number): VirtualClusterAgentKeysOutputReference {
    return new VirtualClusterAgentKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualClusterCloud {
  /**
  * Cloud Provider. Valid providers are: `aws` (default), `gcp`, and `azure`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#provider VirtualCluster#provider}
  */
  readonly provider?: string;
  /**
  * Cloud Region. Defaults to null. Can't be set if `region_group` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#region VirtualCluster#region}
  */
  readonly region?: string;
  /**
  * Cloud Region Group. Defaults to null. Can't be set if `region` is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#region_group VirtualCluster#region_group}
  */
  readonly regionGroup?: string;
}

export function virtualClusterCloudToTerraform(struct?: VirtualClusterCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    region: cdktf.stringToTerraform(struct!.region),
    region_group: cdktf.stringToTerraform(struct!.regionGroup),
  }
}


export function virtualClusterCloudToHclTerraform(struct?: VirtualClusterCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_group: {
      value: cdktf.stringToHclTerraform(struct!.regionGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualClusterCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualClusterCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._regionGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionGroup = this._regionGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualClusterCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provider = undefined;
      this._region = undefined;
      this._regionGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provider = value.provider;
      this._region = value.region;
      this._regionGroup = value.regionGroup;
    }
  }

  // provider - computed: true, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // region_group - computed: true, optional: true, required: false
  private _regionGroup?: string; 
  public get regionGroup() {
    return this.getStringAttribute('region_group');
  }
  public set regionGroup(value: string) {
    this._regionGroup = value;
  }
  public resetRegionGroup() {
    this._regionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionGroupInput() {
    return this._regionGroup;
  }
}
export interface VirtualClusterConfiguration {
  /**
  * Enable topic autocreation feature, defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#auto_create_topic VirtualCluster#auto_create_topic}
  */
  readonly autoCreateTopic?: boolean | cdktf.IResolvable;
  /**
  * Number of partitions created by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#default_num_partitions VirtualCluster#default_num_partitions}
  */
  readonly defaultNumPartitions?: number;
  /**
  * Default retention for topics that are created automatically using Kafka's topic auto-creation feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#default_retention_millis VirtualCluster#default_retention_millis}
  */
  readonly defaultRetentionMillis?: number;
  /**
  * Enable ACL shadowing, defaults to `false`. See [ACL Shadowing](https://docs.warpstream.com/warpstream/kafka/manage-security/configure-acls#acl-shadowing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#enable_acl_shadowing VirtualCluster#enable_acl_shadowing}
  */
  readonly enableAclShadowing?: boolean | cdktf.IResolvable;
  /**
  * Enable ACLs, defaults to `false`. See [Configure ACLs](https://docs.warpstream.com/warpstream/configuration/configure-acls)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#enable_acls VirtualCluster#enable_acls}
  */
  readonly enableAcls?: boolean | cdktf.IResolvable;
  /**
  * Enable deletion protection, defaults to `false`. If set to true, it is impossible to delete this cluster. enable_deletion_protection needs to be set to false before deleting the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#enable_deletion_protection VirtualCluster#enable_deletion_protection}
  */
  readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Enable soft deletion for topics. Defaults to `true`. If true, topic deletion will be a soft deletion. For clusters with the Fundamentals tier or above, it will be possible to restore topics for some time after deletion. If false, deleting a topic will immediately delete of all of its data, with no way to recover it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#enable_soft_topic_deletion VirtualCluster#enable_soft_topic_deletion}
  */
  readonly enableSoftTopicDeletion?: boolean | cdktf.IResolvable;
  /**
  * If enable_soft_topic_deletion is true, a deleted topic's data will be kept for this many milliseconds before being irrecoverably deleted. Defaults to 24 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#soft_topic_deletion_ttl_millis VirtualCluster#soft_topic_deletion_ttl_millis}
  */
  readonly softTopicDeletionTtlMillis?: number;
}

export function virtualClusterConfigurationToTerraform(struct?: VirtualClusterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_topic: cdktf.booleanToTerraform(struct!.autoCreateTopic),
    default_num_partitions: cdktf.numberToTerraform(struct!.defaultNumPartitions),
    default_retention_millis: cdktf.numberToTerraform(struct!.defaultRetentionMillis),
    enable_acl_shadowing: cdktf.booleanToTerraform(struct!.enableAclShadowing),
    enable_acls: cdktf.booleanToTerraform(struct!.enableAcls),
    enable_deletion_protection: cdktf.booleanToTerraform(struct!.enableDeletionProtection),
    enable_soft_topic_deletion: cdktf.booleanToTerraform(struct!.enableSoftTopicDeletion),
    soft_topic_deletion_ttl_millis: cdktf.numberToTerraform(struct!.softTopicDeletionTtlMillis),
  }
}


export function virtualClusterConfigurationToHclTerraform(struct?: VirtualClusterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_topic: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_num_partitions: {
      value: cdktf.numberToHclTerraform(struct!.defaultNumPartitions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_retention_millis: {
      value: cdktf.numberToHclTerraform(struct!.defaultRetentionMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_acl_shadowing: {
      value: cdktf.booleanToHclTerraform(struct!.enableAclShadowing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_acls: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_deletion_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enableDeletionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_soft_topic_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.enableSoftTopicDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    soft_topic_deletion_ttl_millis: {
      value: cdktf.numberToHclTerraform(struct!.softTopicDeletionTtlMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualClusterConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualClusterConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateTopic = this._autoCreateTopic;
    }
    if (this._defaultNumPartitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNumPartitions = this._defaultNumPartitions;
    }
    if (this._defaultRetentionMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRetentionMillis = this._defaultRetentionMillis;
    }
    if (this._enableAclShadowing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAclShadowing = this._enableAclShadowing;
    }
    if (this._enableAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcls = this._enableAcls;
    }
    if (this._enableDeletionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDeletionProtection = this._enableDeletionProtection;
    }
    if (this._enableSoftTopicDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSoftTopicDeletion = this._enableSoftTopicDeletion;
    }
    if (this._softTopicDeletionTtlMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.softTopicDeletionTtlMillis = this._softTopicDeletionTtlMillis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualClusterConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoCreateTopic = undefined;
      this._defaultNumPartitions = undefined;
      this._defaultRetentionMillis = undefined;
      this._enableAclShadowing = undefined;
      this._enableAcls = undefined;
      this._enableDeletionProtection = undefined;
      this._enableSoftTopicDeletion = undefined;
      this._softTopicDeletionTtlMillis = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoCreateTopic = value.autoCreateTopic;
      this._defaultNumPartitions = value.defaultNumPartitions;
      this._defaultRetentionMillis = value.defaultRetentionMillis;
      this._enableAclShadowing = value.enableAclShadowing;
      this._enableAcls = value.enableAcls;
      this._enableDeletionProtection = value.enableDeletionProtection;
      this._enableSoftTopicDeletion = value.enableSoftTopicDeletion;
      this._softTopicDeletionTtlMillis = value.softTopicDeletionTtlMillis;
    }
  }

  // auto_create_topic - computed: true, optional: true, required: false
  private _autoCreateTopic?: boolean | cdktf.IResolvable; 
  public get autoCreateTopic() {
    return this.getBooleanAttribute('auto_create_topic');
  }
  public set autoCreateTopic(value: boolean | cdktf.IResolvable) {
    this._autoCreateTopic = value;
  }
  public resetAutoCreateTopic() {
    this._autoCreateTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateTopicInput() {
    return this._autoCreateTopic;
  }

  // default_num_partitions - computed: true, optional: true, required: false
  private _defaultNumPartitions?: number; 
  public get defaultNumPartitions() {
    return this.getNumberAttribute('default_num_partitions');
  }
  public set defaultNumPartitions(value: number) {
    this._defaultNumPartitions = value;
  }
  public resetDefaultNumPartitions() {
    this._defaultNumPartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNumPartitionsInput() {
    return this._defaultNumPartitions;
  }

  // default_retention_millis - computed: true, optional: true, required: false
  private _defaultRetentionMillis?: number; 
  public get defaultRetentionMillis() {
    return this.getNumberAttribute('default_retention_millis');
  }
  public set defaultRetentionMillis(value: number) {
    this._defaultRetentionMillis = value;
  }
  public resetDefaultRetentionMillis() {
    this._defaultRetentionMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRetentionMillisInput() {
    return this._defaultRetentionMillis;
  }

  // enable_acl_shadowing - computed: true, optional: true, required: false
  private _enableAclShadowing?: boolean | cdktf.IResolvable; 
  public get enableAclShadowing() {
    return this.getBooleanAttribute('enable_acl_shadowing');
  }
  public set enableAclShadowing(value: boolean | cdktf.IResolvable) {
    this._enableAclShadowing = value;
  }
  public resetEnableAclShadowing() {
    this._enableAclShadowing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAclShadowingInput() {
    return this._enableAclShadowing;
  }

  // enable_acls - computed: true, optional: true, required: false
  private _enableAcls?: boolean | cdktf.IResolvable; 
  public get enableAcls() {
    return this.getBooleanAttribute('enable_acls');
  }
  public set enableAcls(value: boolean | cdktf.IResolvable) {
    this._enableAcls = value;
  }
  public resetEnableAcls() {
    this._enableAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAclsInput() {
    return this._enableAcls;
  }

  // enable_deletion_protection - computed: true, optional: true, required: false
  private _enableDeletionProtection?: boolean | cdktf.IResolvable; 
  public get enableDeletionProtection() {
    return this.getBooleanAttribute('enable_deletion_protection');
  }
  public set enableDeletionProtection(value: boolean | cdktf.IResolvable) {
    this._enableDeletionProtection = value;
  }
  public resetEnableDeletionProtection() {
    this._enableDeletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeletionProtectionInput() {
    return this._enableDeletionProtection;
  }

  // enable_soft_topic_deletion - computed: true, optional: true, required: false
  private _enableSoftTopicDeletion?: boolean | cdktf.IResolvable; 
  public get enableSoftTopicDeletion() {
    return this.getBooleanAttribute('enable_soft_topic_deletion');
  }
  public set enableSoftTopicDeletion(value: boolean | cdktf.IResolvable) {
    this._enableSoftTopicDeletion = value;
  }
  public resetEnableSoftTopicDeletion() {
    this._enableSoftTopicDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSoftTopicDeletionInput() {
    return this._enableSoftTopicDeletion;
  }

  // soft_topic_deletion_ttl_millis - computed: true, optional: true, required: false
  private _softTopicDeletionTtlMillis?: number; 
  public get softTopicDeletionTtlMillis() {
    return this.getNumberAttribute('soft_topic_deletion_ttl_millis');
  }
  public set softTopicDeletionTtlMillis(value: number) {
    this._softTopicDeletionTtlMillis = value;
  }
  public resetSoftTopicDeletionTtlMillis() {
    this._softTopicDeletionTtlMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softTopicDeletionTtlMillisInput() {
    return this._softTopicDeletionTtlMillis;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster warpstream_virtual_cluster}
*/
export class VirtualCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_virtual_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualCluster to import
  * @param importFromId The id of the existing VirtualCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_virtual_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.5/docs/resources/virtual_cluster warpstream_virtual_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualClusterConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'warpstream_virtual_cluster',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.3.5',
        providerVersionConstraint: '2.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud.internalValue = config.cloud;
    this._configuration.internalValue = config.configuration;
    this._name = config.name;
    this._tags = config.tags;
    this._tier = config.tier;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_keys - computed: true, optional: false, required: false
  private _agentKeys = new VirtualClusterAgentKeysList(this, "agent_keys", false);
  public get agentKeys() {
    return this._agentKeys;
  }

  // agent_pool_id - computed: true, optional: false, required: false
  public get agentPoolId() {
    return this.getStringAttribute('agent_pool_id');
  }

  // agent_pool_name - computed: true, optional: false, required: false
  public get agentPoolName() {
    return this.getStringAttribute('agent_pool_name');
  }

  // bootstrap_url - computed: true, optional: false, required: false
  public get bootstrapUrl() {
    return this.getStringAttribute('bootstrap_url');
  }

  // cloud - computed: true, optional: true, required: false
  private _cloud = new VirtualClusterCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: VirtualClusterCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration = new VirtualClusterConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: VirtualClusterConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: virtualClusterCloudToTerraform(this._cloud.internalValue),
      configuration: virtualClusterConfigurationToTerraform(this._configuration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: virtualClusterCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualClusterCloud",
      },
      configuration: {
        value: virtualClusterConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualClusterConfiguration",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
