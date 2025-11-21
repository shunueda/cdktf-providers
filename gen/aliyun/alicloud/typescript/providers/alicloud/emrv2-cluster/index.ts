// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Emrv2ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#applications Emrv2Cluster#applications}
  */
  readonly applications: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#cluster_name Emrv2Cluster#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#cluster_type Emrv2Cluster#cluster_type}
  */
  readonly clusterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#deletion_protection Emrv2Cluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#deploy_mode Emrv2Cluster#deploy_mode}
  */
  readonly deployMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#id Emrv2Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#log_collect_strategy Emrv2Cluster#log_collect_strategy}
  */
  readonly logCollectStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#payment_type Emrv2Cluster#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#release_version Emrv2Cluster#release_version}
  */
  readonly releaseVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#resource_group_id Emrv2Cluster#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#security_mode Emrv2Cluster#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#tags Emrv2Cluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * application_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#application_configs Emrv2Cluster#application_configs}
  */
  readonly applicationConfigs?: Emrv2ClusterApplicationConfigs[] | cdktf.IResolvable;
  /**
  * bootstrap_scripts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#bootstrap_scripts Emrv2Cluster#bootstrap_scripts}
  */
  readonly bootstrapScripts?: Emrv2ClusterBootstrapScripts[] | cdktf.IResolvable;
  /**
  * node_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_attributes Emrv2Cluster#node_attributes}
  */
  readonly nodeAttributes: Emrv2ClusterNodeAttributes[] | cdktf.IResolvable;
  /**
  * node_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_groups Emrv2Cluster#node_groups}
  */
  readonly nodeGroups: Emrv2ClusterNodeGroups[] | cdktf.IResolvable;
  /**
  * subscription_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#subscription_config Emrv2Cluster#subscription_config}
  */
  readonly subscriptionConfig?: Emrv2ClusterSubscriptionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#timeouts Emrv2Cluster#timeouts}
  */
  readonly timeouts?: Emrv2ClusterTimeouts;
}
export interface Emrv2ClusterApplicationConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#application_name Emrv2Cluster#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#config_description Emrv2Cluster#config_description}
  */
  readonly configDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#config_file_name Emrv2Cluster#config_file_name}
  */
  readonly configFileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#config_item_key Emrv2Cluster#config_item_key}
  */
  readonly configItemKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#config_item_value Emrv2Cluster#config_item_value}
  */
  readonly configItemValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#config_scope Emrv2Cluster#config_scope}
  */
  readonly configScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_id Emrv2Cluster#node_group_id}
  */
  readonly nodeGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_name Emrv2Cluster#node_group_name}
  */
  readonly nodeGroupName?: string;
}

export function emrv2ClusterApplicationConfigsToTerraform(struct?: Emrv2ClusterApplicationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_name: cdktf.stringToTerraform(struct!.applicationName),
    config_description: cdktf.stringToTerraform(struct!.configDescription),
    config_file_name: cdktf.stringToTerraform(struct!.configFileName),
    config_item_key: cdktf.stringToTerraform(struct!.configItemKey),
    config_item_value: cdktf.stringToTerraform(struct!.configItemValue),
    config_scope: cdktf.stringToTerraform(struct!.configScope),
    node_group_id: cdktf.stringToTerraform(struct!.nodeGroupId),
    node_group_name: cdktf.stringToTerraform(struct!.nodeGroupName),
  }
}


export function emrv2ClusterApplicationConfigsToHclTerraform(struct?: Emrv2ClusterApplicationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_description: {
      value: cdktf.stringToHclTerraform(struct!.configDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_file_name: {
      value: cdktf.stringToHclTerraform(struct!.configFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_item_key: {
      value: cdktf.stringToHclTerraform(struct!.configItemKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_item_value: {
      value: cdktf.stringToHclTerraform(struct!.configItemValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_scope: {
      value: cdktf.stringToHclTerraform(struct!.configScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterApplicationConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterApplicationConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationName = this._applicationName;
    }
    if (this._configDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.configDescription = this._configDescription;
    }
    if (this._configFileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.configFileName = this._configFileName;
    }
    if (this._configItemKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItemKey = this._configItemKey;
    }
    if (this._configItemValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configItemValue = this._configItemValue;
    }
    if (this._configScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.configScope = this._configScope;
    }
    if (this._nodeGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupId = this._nodeGroupId;
    }
    if (this._nodeGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupName = this._nodeGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterApplicationConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationName = undefined;
      this._configDescription = undefined;
      this._configFileName = undefined;
      this._configItemKey = undefined;
      this._configItemValue = undefined;
      this._configScope = undefined;
      this._nodeGroupId = undefined;
      this._nodeGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationName = value.applicationName;
      this._configDescription = value.configDescription;
      this._configFileName = value.configFileName;
      this._configItemKey = value.configItemKey;
      this._configItemValue = value.configItemValue;
      this._configScope = value.configScope;
      this._nodeGroupId = value.nodeGroupId;
      this._nodeGroupName = value.nodeGroupName;
    }
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // config_description - computed: false, optional: true, required: false
  private _configDescription?: string; 
  public get configDescription() {
    return this.getStringAttribute('config_description');
  }
  public set configDescription(value: string) {
    this._configDescription = value;
  }
  public resetConfigDescription() {
    this._configDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDescriptionInput() {
    return this._configDescription;
  }

  // config_file_name - computed: false, optional: false, required: true
  private _configFileName?: string; 
  public get configFileName() {
    return this.getStringAttribute('config_file_name');
  }
  public set configFileName(value: string) {
    this._configFileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileNameInput() {
    return this._configFileName;
  }

  // config_item_key - computed: false, optional: false, required: true
  private _configItemKey?: string; 
  public get configItemKey() {
    return this.getStringAttribute('config_item_key');
  }
  public set configItemKey(value: string) {
    this._configItemKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemKeyInput() {
    return this._configItemKey;
  }

  // config_item_value - computed: false, optional: false, required: true
  private _configItemValue?: string; 
  public get configItemValue() {
    return this.getStringAttribute('config_item_value');
  }
  public set configItemValue(value: string) {
    this._configItemValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemValueInput() {
    return this._configItemValue;
  }

  // config_scope - computed: false, optional: true, required: false
  private _configScope?: string; 
  public get configScope() {
    return this.getStringAttribute('config_scope');
  }
  public set configScope(value: string) {
    this._configScope = value;
  }
  public resetConfigScope() {
    this._configScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configScopeInput() {
    return this._configScope;
  }

  // node_group_id - computed: false, optional: true, required: false
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  public resetNodeGroupId() {
    this._nodeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
  }

  // node_group_name - computed: false, optional: true, required: false
  private _nodeGroupName?: string; 
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  public resetNodeGroupName() {
    this._nodeGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNameInput() {
    return this._nodeGroupName;
  }
}

export class Emrv2ClusterApplicationConfigsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterApplicationConfigs[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterApplicationConfigsOutputReference {
    return new Emrv2ClusterApplicationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterBootstrapScriptsNodeSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_id Emrv2Cluster#node_group_id}
  */
  readonly nodeGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_ids Emrv2Cluster#node_group_ids}
  */
  readonly nodeGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_name Emrv2Cluster#node_group_name}
  */
  readonly nodeGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_names Emrv2Cluster#node_group_names}
  */
  readonly nodeGroupNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_types Emrv2Cluster#node_group_types}
  */
  readonly nodeGroupTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_names Emrv2Cluster#node_names}
  */
  readonly nodeNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_select_type Emrv2Cluster#node_select_type}
  */
  readonly nodeSelectType: string;
}

export function emrv2ClusterBootstrapScriptsNodeSelectorToTerraform(struct?: Emrv2ClusterBootstrapScriptsNodeSelectorOutputReference | Emrv2ClusterBootstrapScriptsNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_group_id: cdktf.stringToTerraform(struct!.nodeGroupId),
    node_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeGroupIds),
    node_group_name: cdktf.stringToTerraform(struct!.nodeGroupName),
    node_group_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeGroupNames),
    node_group_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeGroupTypes),
    node_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeNames),
    node_select_type: cdktf.stringToTerraform(struct!.nodeSelectType),
  }
}


export function emrv2ClusterBootstrapScriptsNodeSelectorToHclTerraform(struct?: Emrv2ClusterBootstrapScriptsNodeSelectorOutputReference | Emrv2ClusterBootstrapScriptsNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_group_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_group_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeGroupNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_group_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeGroupTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node_select_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeSelectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterBootstrapScriptsNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterBootstrapScriptsNodeSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupId = this._nodeGroupId;
    }
    if (this._nodeGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupIds = this._nodeGroupIds;
    }
    if (this._nodeGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupName = this._nodeGroupName;
    }
    if (this._nodeGroupNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupNames = this._nodeGroupNames;
    }
    if (this._nodeGroupTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupTypes = this._nodeGroupTypes;
    }
    if (this._nodeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeNames = this._nodeNames;
    }
    if (this._nodeSelectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectType = this._nodeSelectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterBootstrapScriptsNodeSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeGroupId = undefined;
      this._nodeGroupIds = undefined;
      this._nodeGroupName = undefined;
      this._nodeGroupNames = undefined;
      this._nodeGroupTypes = undefined;
      this._nodeNames = undefined;
      this._nodeSelectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeGroupId = value.nodeGroupId;
      this._nodeGroupIds = value.nodeGroupIds;
      this._nodeGroupName = value.nodeGroupName;
      this._nodeGroupNames = value.nodeGroupNames;
      this._nodeGroupTypes = value.nodeGroupTypes;
      this._nodeNames = value.nodeNames;
      this._nodeSelectType = value.nodeSelectType;
    }
  }

  // node_group_id - computed: false, optional: true, required: false
  private _nodeGroupId?: string; 
  public get nodeGroupId() {
    return this.getStringAttribute('node_group_id');
  }
  public set nodeGroupId(value: string) {
    this._nodeGroupId = value;
  }
  public resetNodeGroupId() {
    this._nodeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdInput() {
    return this._nodeGroupId;
  }

  // node_group_ids - computed: false, optional: true, required: false
  private _nodeGroupIds?: string[]; 
  public get nodeGroupIds() {
    return this.getListAttribute('node_group_ids');
  }
  public set nodeGroupIds(value: string[]) {
    this._nodeGroupIds = value;
  }
  public resetNodeGroupIds() {
    this._nodeGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdsInput() {
    return this._nodeGroupIds;
  }

  // node_group_name - computed: false, optional: true, required: false
  private _nodeGroupName?: string; 
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  public resetNodeGroupName() {
    this._nodeGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNameInput() {
    return this._nodeGroupName;
  }

  // node_group_names - computed: false, optional: true, required: false
  private _nodeGroupNames?: string[]; 
  public get nodeGroupNames() {
    return this.getListAttribute('node_group_names');
  }
  public set nodeGroupNames(value: string[]) {
    this._nodeGroupNames = value;
  }
  public resetNodeGroupNames() {
    this._nodeGroupNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNamesInput() {
    return this._nodeGroupNames;
  }

  // node_group_types - computed: false, optional: true, required: false
  private _nodeGroupTypes?: string[]; 
  public get nodeGroupTypes() {
    return this.getListAttribute('node_group_types');
  }
  public set nodeGroupTypes(value: string[]) {
    this._nodeGroupTypes = value;
  }
  public resetNodeGroupTypes() {
    this._nodeGroupTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupTypesInput() {
    return this._nodeGroupTypes;
  }

  // node_names - computed: false, optional: true, required: false
  private _nodeNames?: string[]; 
  public get nodeNames() {
    return this.getListAttribute('node_names');
  }
  public set nodeNames(value: string[]) {
    this._nodeNames = value;
  }
  public resetNodeNames() {
    this._nodeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNamesInput() {
    return this._nodeNames;
  }

  // node_select_type - computed: false, optional: false, required: true
  private _nodeSelectType?: string; 
  public get nodeSelectType() {
    return this.getStringAttribute('node_select_type');
  }
  public set nodeSelectType(value: string) {
    this._nodeSelectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectTypeInput() {
    return this._nodeSelectType;
  }
}
export interface Emrv2ClusterBootstrapScripts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#execution_fail_strategy Emrv2Cluster#execution_fail_strategy}
  */
  readonly executionFailStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#execution_moment Emrv2Cluster#execution_moment}
  */
  readonly executionMoment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#priority Emrv2Cluster#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#script_args Emrv2Cluster#script_args}
  */
  readonly scriptArgs: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#script_name Emrv2Cluster#script_name}
  */
  readonly scriptName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#script_path Emrv2Cluster#script_path}
  */
  readonly scriptPath: string;
  /**
  * node_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_selector Emrv2Cluster#node_selector}
  */
  readonly nodeSelector: Emrv2ClusterBootstrapScriptsNodeSelector;
}

export function emrv2ClusterBootstrapScriptsToTerraform(struct?: Emrv2ClusterBootstrapScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_fail_strategy: cdktf.stringToTerraform(struct!.executionFailStrategy),
    execution_moment: cdktf.stringToTerraform(struct!.executionMoment),
    priority: cdktf.numberToTerraform(struct!.priority),
    script_args: cdktf.stringToTerraform(struct!.scriptArgs),
    script_name: cdktf.stringToTerraform(struct!.scriptName),
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
    node_selector: emrv2ClusterBootstrapScriptsNodeSelectorToTerraform(struct!.nodeSelector),
  }
}


export function emrv2ClusterBootstrapScriptsToHclTerraform(struct?: Emrv2ClusterBootstrapScripts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_fail_strategy: {
      value: cdktf.stringToHclTerraform(struct!.executionFailStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_moment: {
      value: cdktf.stringToHclTerraform(struct!.executionMoment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    script_args: {
      value: cdktf.stringToHclTerraform(struct!.scriptArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_name: {
      value: cdktf.stringToHclTerraform(struct!.scriptName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script_path: {
      value: cdktf.stringToHclTerraform(struct!.scriptPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: emrv2ClusterBootstrapScriptsNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterBootstrapScriptsNodeSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterBootstrapScriptsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterBootstrapScripts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionFailStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionFailStrategy = this._executionFailStrategy;
    }
    if (this._executionMoment !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionMoment = this._executionMoment;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._scriptArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptArgs = this._scriptArgs;
    }
    if (this._scriptName !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptName = this._scriptName;
    }
    if (this._scriptPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.scriptPath = this._scriptPath;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterBootstrapScripts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._executionFailStrategy = undefined;
      this._executionMoment = undefined;
      this._priority = undefined;
      this._scriptArgs = undefined;
      this._scriptName = undefined;
      this._scriptPath = undefined;
      this._nodeSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._executionFailStrategy = value.executionFailStrategy;
      this._executionMoment = value.executionMoment;
      this._priority = value.priority;
      this._scriptArgs = value.scriptArgs;
      this._scriptName = value.scriptName;
      this._scriptPath = value.scriptPath;
      this._nodeSelector.internalValue = value.nodeSelector;
    }
  }

  // execution_fail_strategy - computed: false, optional: false, required: true
  private _executionFailStrategy?: string; 
  public get executionFailStrategy() {
    return this.getStringAttribute('execution_fail_strategy');
  }
  public set executionFailStrategy(value: string) {
    this._executionFailStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionFailStrategyInput() {
    return this._executionFailStrategy;
  }

  // execution_moment - computed: false, optional: false, required: true
  private _executionMoment?: string; 
  public get executionMoment() {
    return this.getStringAttribute('execution_moment');
  }
  public set executionMoment(value: string) {
    this._executionMoment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionMomentInput() {
    return this._executionMoment;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // script_args - computed: false, optional: false, required: true
  private _scriptArgs?: string; 
  public get scriptArgs() {
    return this.getStringAttribute('script_args');
  }
  public set scriptArgs(value: string) {
    this._scriptArgs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptArgsInput() {
    return this._scriptArgs;
  }

  // script_name - computed: false, optional: false, required: true
  private _scriptName?: string; 
  public get scriptName() {
    return this.getStringAttribute('script_name');
  }
  public set scriptName(value: string) {
    this._scriptName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptNameInput() {
    return this._scriptName;
  }

  // script_path - computed: false, optional: false, required: true
  private _scriptPath?: string; 
  public get scriptPath() {
    return this.getStringAttribute('script_path');
  }
  public set scriptPath(value: string) {
    this._scriptPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptPathInput() {
    return this._scriptPath;
  }

  // node_selector - computed: false, optional: false, required: true
  private _nodeSelector = new Emrv2ClusterBootstrapScriptsNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: Emrv2ClusterBootstrapScriptsNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }
}

export class Emrv2ClusterBootstrapScriptsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterBootstrapScripts[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterBootstrapScriptsOutputReference {
    return new Emrv2ClusterBootstrapScriptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#data_disk_encrypted Emrv2Cluster#data_disk_encrypted}
  */
  readonly dataDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#data_disk_kms_key_id Emrv2Cluster#data_disk_kms_key_id}
  */
  readonly dataDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#key_pair_name Emrv2Cluster#key_pair_name}
  */
  readonly keyPairName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#ram_role Emrv2Cluster#ram_role}
  */
  readonly ramRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#security_group_id Emrv2Cluster#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#system_disk_encrypted Emrv2Cluster#system_disk_encrypted}
  */
  readonly systemDiskEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#system_disk_kms_key_id Emrv2Cluster#system_disk_kms_key_id}
  */
  readonly systemDiskKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#vpc_id Emrv2Cluster#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#zone_id Emrv2Cluster#zone_id}
  */
  readonly zoneId: string;
}

export function emrv2ClusterNodeAttributesToTerraform(struct?: Emrv2ClusterNodeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_encrypted: cdktf.booleanToTerraform(struct!.dataDiskEncrypted),
    data_disk_kms_key_id: cdktf.stringToTerraform(struct!.dataDiskKmsKeyId),
    key_pair_name: cdktf.stringToTerraform(struct!.keyPairName),
    ram_role: cdktf.stringToTerraform(struct!.ramRole),
    security_group_id: cdktf.stringToTerraform(struct!.securityGroupId),
    system_disk_encrypted: cdktf.booleanToTerraform(struct!.systemDiskEncrypted),
    system_disk_kms_key_id: cdktf.stringToTerraform(struct!.systemDiskKmsKeyId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    zone_id: cdktf.stringToTerraform(struct!.zoneId),
  }
}


export function emrv2ClusterNodeAttributesToHclTerraform(struct?: Emrv2ClusterNodeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_disk_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.dataDiskEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_disk_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pair_name: {
      value: cdktf.stringToHclTerraform(struct!.keyPairName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ram_role: {
      value: cdktf.stringToHclTerraform(struct!.ramRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.securityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_disk_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.systemDiskEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_disk_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.systemDiskKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_id: {
      value: cdktf.stringToHclTerraform(struct!.zoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataDiskEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskEncrypted = this._dataDiskEncrypted;
    }
    if (this._dataDiskKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskKmsKeyId = this._dataDiskKmsKeyId;
    }
    if (this._keyPairName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPairName = this._keyPairName;
    }
    if (this._ramRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.ramRole = this._ramRole;
    }
    if (this._securityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupId = this._securityGroupId;
    }
    if (this._systemDiskEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskEncrypted = this._systemDiskEncrypted;
    }
    if (this._systemDiskKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDiskKmsKeyId = this._systemDiskKmsKeyId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._zoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneId = this._zoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataDiskEncrypted = undefined;
      this._dataDiskKmsKeyId = undefined;
      this._keyPairName = undefined;
      this._ramRole = undefined;
      this._securityGroupId = undefined;
      this._systemDiskEncrypted = undefined;
      this._systemDiskKmsKeyId = undefined;
      this._vpcId = undefined;
      this._zoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataDiskEncrypted = value.dataDiskEncrypted;
      this._dataDiskKmsKeyId = value.dataDiskKmsKeyId;
      this._keyPairName = value.keyPairName;
      this._ramRole = value.ramRole;
      this._securityGroupId = value.securityGroupId;
      this._systemDiskEncrypted = value.systemDiskEncrypted;
      this._systemDiskKmsKeyId = value.systemDiskKmsKeyId;
      this._vpcId = value.vpcId;
      this._zoneId = value.zoneId;
    }
  }

  // data_disk_encrypted - computed: true, optional: true, required: false
  private _dataDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get dataDiskEncrypted() {
    return this.getBooleanAttribute('data_disk_encrypted');
  }
  public set dataDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._dataDiskEncrypted = value;
  }
  public resetDataDiskEncrypted() {
    this._dataDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskEncryptedInput() {
    return this._dataDiskEncrypted;
  }

  // data_disk_kms_key_id - computed: true, optional: true, required: false
  private _dataDiskKmsKeyId?: string; 
  public get dataDiskKmsKeyId() {
    return this.getStringAttribute('data_disk_kms_key_id');
  }
  public set dataDiskKmsKeyId(value: string) {
    this._dataDiskKmsKeyId = value;
  }
  public resetDataDiskKmsKeyId() {
    this._dataDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskKmsKeyIdInput() {
    return this._dataDiskKmsKeyId;
  }

  // key_pair_name - computed: false, optional: false, required: true
  private _keyPairName?: string; 
  public get keyPairName() {
    return this.getStringAttribute('key_pair_name');
  }
  public set keyPairName(value: string) {
    this._keyPairName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairNameInput() {
    return this._keyPairName;
  }

  // ram_role - computed: false, optional: false, required: true
  private _ramRole?: string; 
  public get ramRole() {
    return this.getStringAttribute('ram_role');
  }
  public set ramRole(value: string) {
    this._ramRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ramRoleInput() {
    return this._ramRole;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // system_disk_encrypted - computed: false, optional: true, required: false
  private _systemDiskEncrypted?: boolean | cdktf.IResolvable; 
  public get systemDiskEncrypted() {
    return this.getBooleanAttribute('system_disk_encrypted');
  }
  public set systemDiskEncrypted(value: boolean | cdktf.IResolvable) {
    this._systemDiskEncrypted = value;
  }
  public resetSystemDiskEncrypted() {
    this._systemDiskEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskEncryptedInput() {
    return this._systemDiskEncrypted;
  }

  // system_disk_kms_key_id - computed: false, optional: true, required: false
  private _systemDiskKmsKeyId?: string; 
  public get systemDiskKmsKeyId() {
    return this.getStringAttribute('system_disk_kms_key_id');
  }
  public set systemDiskKmsKeyId(value: string) {
    this._systemDiskKmsKeyId = value;
  }
  public resetSystemDiskKmsKeyId() {
    this._systemDiskKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskKmsKeyIdInput() {
    return this._systemDiskKmsKeyId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }
}

export class Emrv2ClusterNodeAttributesList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeAttributes[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeAttributesOutputReference {
    return new Emrv2ClusterNodeAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfigCustomAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#key Emrv2Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#value Emrv2Cluster#value}
  */
  readonly value?: string;
}

export function emrv2ClusterNodeGroupsAckConfigCustomAnnotationsToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigCustomAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function emrv2ClusterNodeGroupsAckConfigCustomAnnotationsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigCustomAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigCustomAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfigCustomAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfigCustomAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Emrv2ClusterNodeGroupsAckConfigCustomAnnotationsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAckConfigCustomAnnotations[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAckConfigCustomAnnotationsOutputReference {
    return new Emrv2ClusterNodeGroupsAckConfigCustomAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfigCustomLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#key Emrv2Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#value Emrv2Cluster#value}
  */
  readonly value?: string;
}

export function emrv2ClusterNodeGroupsAckConfigCustomLabelsToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigCustomLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function emrv2ClusterNodeGroupsAckConfigCustomLabelsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigCustomLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigCustomLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfigCustomLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfigCustomLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Emrv2ClusterNodeGroupsAckConfigCustomLabelsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAckConfigCustomLabels[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAckConfigCustomLabelsOutputReference {
    return new Emrv2ClusterNodeGroupsAckConfigCustomLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfigNodeSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#key Emrv2Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#value Emrv2Cluster#value}
  */
  readonly value?: string;
}

export function emrv2ClusterNodeGroupsAckConfigNodeSelectorsToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigNodeSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function emrv2ClusterNodeGroupsAckConfigNodeSelectorsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigNodeSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigNodeSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfigNodeSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfigNodeSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Emrv2ClusterNodeGroupsAckConfigNodeSelectorsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAckConfigNodeSelectors[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAckConfigNodeSelectorsOutputReference {
    return new Emrv2ClusterNodeGroupsAckConfigNodeSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfigPvcs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#data_disk_size Emrv2Cluster#data_disk_size}
  */
  readonly dataDiskSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#data_disk_storage_class Emrv2Cluster#data_disk_storage_class}
  */
  readonly dataDiskStorageClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#name Emrv2Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#path Emrv2Cluster#path}
  */
  readonly path: string;
}

export function emrv2ClusterNodeGroupsAckConfigPvcsToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigPvcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_disk_size: cdktf.numberToTerraform(struct!.dataDiskSize),
    data_disk_storage_class: cdktf.stringToTerraform(struct!.dataDiskStorageClass),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function emrv2ClusterNodeGroupsAckConfigPvcsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigPvcs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.dataDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_disk_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.dataDiskStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigPvcsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfigPvcs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskSize = this._dataDiskSize;
    }
    if (this._dataDiskStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskStorageClass = this._dataDiskStorageClass;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfigPvcs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataDiskSize = undefined;
      this._dataDiskStorageClass = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataDiskSize = value.dataDiskSize;
      this._dataDiskStorageClass = value.dataDiskStorageClass;
      this._name = value.name;
      this._path = value.path;
    }
  }

  // data_disk_size - computed: false, optional: false, required: true
  private _dataDiskSize?: number; 
  public get dataDiskSize() {
    return this.getNumberAttribute('data_disk_size');
  }
  public set dataDiskSize(value: number) {
    this._dataDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSizeInput() {
    return this._dataDiskSize;
  }

  // data_disk_storage_class - computed: false, optional: false, required: true
  private _dataDiskStorageClass?: string; 
  public get dataDiskStorageClass() {
    return this.getStringAttribute('data_disk_storage_class');
  }
  public set dataDiskStorageClass(value: string) {
    this._dataDiskStorageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskStorageClassInput() {
    return this._dataDiskStorageClass;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class Emrv2ClusterNodeGroupsAckConfigPvcsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAckConfigPvcs[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAckConfigPvcsOutputReference {
    return new Emrv2ClusterNodeGroupsAckConfigPvcsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfigTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#effect Emrv2Cluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#key Emrv2Cluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#operator Emrv2Cluster#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#value Emrv2Cluster#value}
  */
  readonly value?: string;
}

export function emrv2ClusterNodeGroupsAckConfigTolerationsToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function emrv2ClusterNodeGroupsAckConfigTolerationsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfigTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfigTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Emrv2ClusterNodeGroupsAckConfigTolerationsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAckConfigTolerations[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAckConfigTolerationsOutputReference {
    return new Emrv2ClusterNodeGroupsAckConfigTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfigVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#name Emrv2Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#path Emrv2Cluster#path}
  */
  readonly path: string;
}

export function emrv2ClusterNodeGroupsAckConfigVolumeMountsToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function emrv2ClusterNodeGroupsAckConfigVolumeMountsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfigVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfigVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class Emrv2ClusterNodeGroupsAckConfigVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAckConfigVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAckConfigVolumeMountsOutputReference {
    return new Emrv2ClusterNodeGroupsAckConfigVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfigVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#name Emrv2Cluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#path Emrv2Cluster#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#type Emrv2Cluster#type}
  */
  readonly type: string;
}

export function emrv2ClusterNodeGroupsAckConfigVolumesToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function emrv2ClusterNodeGroupsAckConfigVolumesToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfigVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfigVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
      this._type = value.type;
    }
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class Emrv2ClusterNodeGroupsAckConfigVolumesList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAckConfigVolumes[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAckConfigVolumesOutputReference {
    return new Emrv2ClusterNodeGroupsAckConfigVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAckConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#ack_instance_id Emrv2Cluster#ack_instance_id}
  */
  readonly ackInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#limit_cpu Emrv2Cluster#limit_cpu}
  */
  readonly limitCpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#limit_memory Emrv2Cluster#limit_memory}
  */
  readonly limitMemory: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#namespace Emrv2Cluster#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_affinity Emrv2Cluster#node_affinity}
  */
  readonly nodeAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#pod_affinity Emrv2Cluster#pod_affinity}
  */
  readonly podAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#pod_anti_affinity Emrv2Cluster#pod_anti_affinity}
  */
  readonly podAntiAffinity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#pre_start_command Emrv2Cluster#pre_start_command}
  */
  readonly preStartCommand?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#request_cpu Emrv2Cluster#request_cpu}
  */
  readonly requestCpu: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#request_memory Emrv2Cluster#request_memory}
  */
  readonly requestMemory: number;
  /**
  * custom_annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#custom_annotations Emrv2Cluster#custom_annotations}
  */
  readonly customAnnotations?: Emrv2ClusterNodeGroupsAckConfigCustomAnnotations[] | cdktf.IResolvable;
  /**
  * custom_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#custom_labels Emrv2Cluster#custom_labels}
  */
  readonly customLabels?: Emrv2ClusterNodeGroupsAckConfigCustomLabels[] | cdktf.IResolvable;
  /**
  * node_selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_selectors Emrv2Cluster#node_selectors}
  */
  readonly nodeSelectors?: Emrv2ClusterNodeGroupsAckConfigNodeSelectors[] | cdktf.IResolvable;
  /**
  * pvcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#pvcs Emrv2Cluster#pvcs}
  */
  readonly pvcs?: Emrv2ClusterNodeGroupsAckConfigPvcs[] | cdktf.IResolvable;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#tolerations Emrv2Cluster#tolerations}
  */
  readonly tolerations?: Emrv2ClusterNodeGroupsAckConfigTolerations[] | cdktf.IResolvable;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#volume_mounts Emrv2Cluster#volume_mounts}
  */
  readonly volumeMounts?: Emrv2ClusterNodeGroupsAckConfigVolumeMounts[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#volumes Emrv2Cluster#volumes}
  */
  readonly volumes?: Emrv2ClusterNodeGroupsAckConfigVolumes[] | cdktf.IResolvable;
}

export function emrv2ClusterNodeGroupsAckConfigToTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigOutputReference | Emrv2ClusterNodeGroupsAckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_instance_id: cdktf.stringToTerraform(struct!.ackInstanceId),
    limit_cpu: cdktf.numberToTerraform(struct!.limitCpu),
    limit_memory: cdktf.numberToTerraform(struct!.limitMemory),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_affinity: cdktf.stringToTerraform(struct!.nodeAffinity),
    pod_affinity: cdktf.stringToTerraform(struct!.podAffinity),
    pod_anti_affinity: cdktf.stringToTerraform(struct!.podAntiAffinity),
    pre_start_command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preStartCommand),
    request_cpu: cdktf.numberToTerraform(struct!.requestCpu),
    request_memory: cdktf.numberToTerraform(struct!.requestMemory),
    custom_annotations: cdktf.listMapper(emrv2ClusterNodeGroupsAckConfigCustomAnnotationsToTerraform, true)(struct!.customAnnotations),
    custom_labels: cdktf.listMapper(emrv2ClusterNodeGroupsAckConfigCustomLabelsToTerraform, true)(struct!.customLabels),
    node_selectors: cdktf.listMapper(emrv2ClusterNodeGroupsAckConfigNodeSelectorsToTerraform, true)(struct!.nodeSelectors),
    pvcs: cdktf.listMapper(emrv2ClusterNodeGroupsAckConfigPvcsToTerraform, true)(struct!.pvcs),
    tolerations: cdktf.listMapper(emrv2ClusterNodeGroupsAckConfigTolerationsToTerraform, true)(struct!.tolerations),
    volume_mounts: cdktf.listMapper(emrv2ClusterNodeGroupsAckConfigVolumeMountsToTerraform, true)(struct!.volumeMounts),
    volumes: cdktf.listMapper(emrv2ClusterNodeGroupsAckConfigVolumesToTerraform, true)(struct!.volumes),
  }
}


export function emrv2ClusterNodeGroupsAckConfigToHclTerraform(struct?: Emrv2ClusterNodeGroupsAckConfigOutputReference | Emrv2ClusterNodeGroupsAckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.ackInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_cpu: {
      value: cdktf.numberToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_memory: {
      value: cdktf.numberToHclTerraform(struct!.limitMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_affinity: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_affinity: {
      value: cdktf.stringToHclTerraform(struct!.podAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_anti_affinity: {
      value: cdktf.stringToHclTerraform(struct!.podAntiAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_start_command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preStartCommand),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_cpu: {
      value: cdktf.numberToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_memory: {
      value: cdktf.numberToHclTerraform(struct!.requestMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_annotations: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAckConfigCustomAnnotationsToHclTerraform, true)(struct!.customAnnotations),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigCustomAnnotationsList",
    },
    custom_labels: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAckConfigCustomLabelsToHclTerraform, true)(struct!.customLabels),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigCustomLabelsList",
    },
    node_selectors: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAckConfigNodeSelectorsToHclTerraform, true)(struct!.nodeSelectors),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigNodeSelectorsList",
    },
    pvcs: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAckConfigPvcsToHclTerraform, true)(struct!.pvcs),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigPvcsList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAckConfigTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigTolerationsList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAckConfigVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigVolumeMountsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAckConfigVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAckConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsAckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackInstanceId = this._ackInstanceId;
    }
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._podAntiAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity;
    }
    if (this._preStartCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStartCommand = this._preStartCommand;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    if (this._customAnnotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAnnotations = this._customAnnotations?.internalValue;
    }
    if (this._customLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLabels = this._customLabels?.internalValue;
    }
    if (this._nodeSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectors = this._nodeSelectors?.internalValue;
    }
    if (this._pvcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcs = this._pvcs?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackInstanceId = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._namespace = undefined;
      this._nodeAffinity = undefined;
      this._podAffinity = undefined;
      this._podAntiAffinity = undefined;
      this._preStartCommand = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._customAnnotations.internalValue = undefined;
      this._customLabels.internalValue = undefined;
      this._nodeSelectors.internalValue = undefined;
      this._pvcs.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackInstanceId = value.ackInstanceId;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._namespace = value.namespace;
      this._nodeAffinity = value.nodeAffinity;
      this._podAffinity = value.podAffinity;
      this._podAntiAffinity = value.podAntiAffinity;
      this._preStartCommand = value.preStartCommand;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._customAnnotations.internalValue = value.customAnnotations;
      this._customLabels.internalValue = value.customLabels;
      this._nodeSelectors.internalValue = value.nodeSelectors;
      this._pvcs.internalValue = value.pvcs;
      this._tolerations.internalValue = value.tolerations;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._volumes.internalValue = value.volumes;
    }
  }

  // ack_instance_id - computed: false, optional: false, required: true
  private _ackInstanceId?: string; 
  public get ackInstanceId() {
    return this.getStringAttribute('ack_instance_id');
  }
  public set ackInstanceId(value: string) {
    this._ackInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ackInstanceIdInput() {
    return this._ackInstanceId;
  }

  // limit_cpu - computed: false, optional: false, required: true
  private _limitCpu?: number; 
  public get limitCpu() {
    return this.getNumberAttribute('limit_cpu');
  }
  public set limitCpu(value: number) {
    this._limitCpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: false, required: true
  private _limitMemory?: number; 
  public get limitMemory() {
    return this.getNumberAttribute('limit_memory');
  }
  public set limitMemory(value: number) {
    this._limitMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity?: string; 
  public get nodeAffinity() {
    return this.getStringAttribute('node_affinity');
  }
  public set nodeAffinity(value: string) {
    this._nodeAffinity = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: string; 
  public get podAffinity() {
    return this.getStringAttribute('pod_affinity');
  }
  public set podAffinity(value: string) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity?: string; 
  public get podAntiAffinity() {
    return this.getStringAttribute('pod_anti_affinity');
  }
  public set podAntiAffinity(value: string) {
    this._podAntiAffinity = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity;
  }

  // pre_start_command - computed: false, optional: true, required: false
  private _preStartCommand?: string[]; 
  public get preStartCommand() {
    return this.getListAttribute('pre_start_command');
  }
  public set preStartCommand(value: string[]) {
    this._preStartCommand = value;
  }
  public resetPreStartCommand() {
    this._preStartCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStartCommandInput() {
    return this._preStartCommand;
  }

  // request_cpu - computed: false, optional: false, required: true
  private _requestCpu?: number; 
  public get requestCpu() {
    return this.getNumberAttribute('request_cpu');
  }
  public set requestCpu(value: number) {
    this._requestCpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: false, required: true
  private _requestMemory?: number; 
  public get requestMemory() {
    return this.getNumberAttribute('request_memory');
  }
  public set requestMemory(value: number) {
    this._requestMemory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
  }

  // custom_annotations - computed: false, optional: true, required: false
  private _customAnnotations = new Emrv2ClusterNodeGroupsAckConfigCustomAnnotationsList(this, "custom_annotations", true);
  public get customAnnotations() {
    return this._customAnnotations;
  }
  public putCustomAnnotations(value: Emrv2ClusterNodeGroupsAckConfigCustomAnnotations[] | cdktf.IResolvable) {
    this._customAnnotations.internalValue = value;
  }
  public resetCustomAnnotations() {
    this._customAnnotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAnnotationsInput() {
    return this._customAnnotations.internalValue;
  }

  // custom_labels - computed: false, optional: true, required: false
  private _customLabels = new Emrv2ClusterNodeGroupsAckConfigCustomLabelsList(this, "custom_labels", true);
  public get customLabels() {
    return this._customLabels;
  }
  public putCustomLabels(value: Emrv2ClusterNodeGroupsAckConfigCustomLabels[] | cdktf.IResolvable) {
    this._customLabels.internalValue = value;
  }
  public resetCustomLabels() {
    this._customLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelsInput() {
    return this._customLabels.internalValue;
  }

  // node_selectors - computed: false, optional: true, required: false
  private _nodeSelectors = new Emrv2ClusterNodeGroupsAckConfigNodeSelectorsList(this, "node_selectors", true);
  public get nodeSelectors() {
    return this._nodeSelectors;
  }
  public putNodeSelectors(value: Emrv2ClusterNodeGroupsAckConfigNodeSelectors[] | cdktf.IResolvable) {
    this._nodeSelectors.internalValue = value;
  }
  public resetNodeSelectors() {
    this._nodeSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorsInput() {
    return this._nodeSelectors.internalValue;
  }

  // pvcs - computed: false, optional: true, required: false
  private _pvcs = new Emrv2ClusterNodeGroupsAckConfigPvcsList(this, "pvcs", false);
  public get pvcs() {
    return this._pvcs;
  }
  public putPvcs(value: Emrv2ClusterNodeGroupsAckConfigPvcs[] | cdktf.IResolvable) {
    this._pvcs.internalValue = value;
  }
  public resetPvcs() {
    this._pvcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcsInput() {
    return this._pvcs.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new Emrv2ClusterNodeGroupsAckConfigTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: Emrv2ClusterNodeGroupsAckConfigTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new Emrv2ClusterNodeGroupsAckConfigVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: Emrv2ClusterNodeGroupsAckConfigVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new Emrv2ClusterNodeGroupsAckConfigVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: Emrv2ClusterNodeGroupsAckConfigVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicyConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#max_capacity Emrv2Cluster#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#min_capacity Emrv2Cluster#min_capacity}
  */
  readonly minCapacity?: number;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicyConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_capacity: {
      value: cdktf.numberToHclTerraform(struct!.minCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicyConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._minCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCapacity = this._minCapacity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicyConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCapacity = undefined;
      this._minCapacity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCapacity = value.maxCapacity;
      this._minCapacity = value.minCapacity;
    }
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: true, required: false
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  public resetMinCapacity() {
    this._minCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#key Emrv2Cluster#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#value Emrv2Cluster#value}
  */
  readonly value?: string;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsOutputReference {
    return new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#comparison_operator Emrv2Cluster#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#metric_name Emrv2Cluster#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#statistics Emrv2Cluster#statistics}
  */
  readonly statistics: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#threshold Emrv2Cluster#threshold}
  */
  readonly threshold: number;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#tags Emrv2Cluster#tags}
  */
  readonly tags?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags[] | cdktf.IResolvable;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    tags: cdktf.listMapper(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsToTerraform, true)(struct!.tags),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tags: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparisonOperator = undefined;
      this._metricName = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparisonOperator = value.comparisonOperator;
      this._metricName = value.metricName;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._tags.internalValue = value.tags;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // statistics - computed: false, optional: false, required: true
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsOutputReference {
    return new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#end_time Emrv2Cluster#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#start_time Emrv2Cluster#start_time}
  */
  readonly startTime?: string;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsOutputReference {
    return new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#condition_logic_operator Emrv2Cluster#condition_logic_operator}
  */
  readonly conditionLogicOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#cool_down_interval Emrv2Cluster#cool_down_interval}
  */
  readonly coolDownInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#evaluation_count Emrv2Cluster#evaluation_count}
  */
  readonly evaluationCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#time_window Emrv2Cluster#time_window}
  */
  readonly timeWindow: number;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#conditions Emrv2Cluster#conditions}
  */
  readonly conditions?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions[] | cdktf.IResolvable;
  /**
  * time_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#time_constraints Emrv2Cluster#time_constraints}
  */
  readonly timeConstraints?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints[] | cdktf.IResolvable;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_logic_operator: cdktf.stringToTerraform(struct!.conditionLogicOperator),
    cool_down_interval: cdktf.numberToTerraform(struct!.coolDownInterval),
    evaluation_count: cdktf.numberToTerraform(struct!.evaluationCount),
    time_window: cdktf.numberToTerraform(struct!.timeWindow),
    conditions: cdktf.listMapper(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsToTerraform, true)(struct!.conditions),
    time_constraints: cdktf.listMapper(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsToTerraform, true)(struct!.timeConstraints),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_logic_operator: {
      value: cdktf.stringToHclTerraform(struct!.conditionLogicOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cool_down_interval: {
      value: cdktf.numberToHclTerraform(struct!.coolDownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluation_count: {
      value: cdktf.numberToHclTerraform(struct!.evaluationCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_window: {
      value: cdktf.numberToHclTerraform(struct!.timeWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conditions: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsList",
    },
    time_constraints: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsToHclTerraform, true)(struct!.timeConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionLogicOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionLogicOperator = this._conditionLogicOperator;
    }
    if (this._coolDownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDownInterval = this._coolDownInterval;
    }
    if (this._evaluationCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationCount = this._evaluationCount;
    }
    if (this._timeWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindow = this._timeWindow;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    if (this._timeConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeConstraints = this._timeConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionLogicOperator = undefined;
      this._coolDownInterval = undefined;
      this._evaluationCount = undefined;
      this._timeWindow = undefined;
      this._conditions.internalValue = undefined;
      this._timeConstraints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionLogicOperator = value.conditionLogicOperator;
      this._coolDownInterval = value.coolDownInterval;
      this._evaluationCount = value.evaluationCount;
      this._timeWindow = value.timeWindow;
      this._conditions.internalValue = value.conditions;
      this._timeConstraints.internalValue = value.timeConstraints;
    }
  }

  // condition_logic_operator - computed: false, optional: true, required: false
  private _conditionLogicOperator?: string; 
  public get conditionLogicOperator() {
    return this.getStringAttribute('condition_logic_operator');
  }
  public set conditionLogicOperator(value: string) {
    this._conditionLogicOperator = value;
  }
  public resetConditionLogicOperator() {
    this._conditionLogicOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionLogicOperatorInput() {
    return this._conditionLogicOperator;
  }

  // cool_down_interval - computed: false, optional: true, required: false
  private _coolDownInterval?: number; 
  public get coolDownInterval() {
    return this.getNumberAttribute('cool_down_interval');
  }
  public set coolDownInterval(value: number) {
    this._coolDownInterval = value;
  }
  public resetCoolDownInterval() {
    this._coolDownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownIntervalInput() {
    return this._coolDownInterval;
  }

  // evaluation_count - computed: false, optional: false, required: true
  private _evaluationCount?: number; 
  public get evaluationCount() {
    return this.getNumberAttribute('evaluation_count');
  }
  public set evaluationCount(value: number) {
    this._evaluationCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationCountInput() {
    return this._evaluationCount;
  }

  // time_window - computed: false, optional: false, required: true
  private _timeWindow?: number; 
  public get timeWindow() {
    return this.getNumberAttribute('time_window');
  }
  public set timeWindow(value: number) {
    this._timeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowInput() {
    return this._timeWindow;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // time_constraints - computed: false, optional: true, required: false
  private _timeConstraints = new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraintsList(this, "time_constraints", false);
  public get timeConstraints() {
    return this._timeConstraints;
  }
  public putTimeConstraints(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerTimeConstraints[] | cdktf.IResolvable) {
    this._timeConstraints.internalValue = value;
  }
  public resetTimeConstraints() {
    this._timeConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeConstraintsInput() {
    return this._timeConstraints.internalValue;
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#end_time Emrv2Cluster#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#launch_expiration_time Emrv2Cluster#launch_expiration_time}
  */
  readonly launchExpirationTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#launch_time Emrv2Cluster#launch_time}
  */
  readonly launchTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#recurrence_type Emrv2Cluster#recurrence_type}
  */
  readonly recurrenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#recurrence_value Emrv2Cluster#recurrence_value}
  */
  readonly recurrenceValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#start_time Emrv2Cluster#start_time}
  */
  readonly startTime?: string;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    launch_expiration_time: cdktf.numberToTerraform(struct!.launchExpirationTime),
    launch_time: cdktf.stringToTerraform(struct!.launchTime),
    recurrence_type: cdktf.stringToTerraform(struct!.recurrenceType),
    recurrence_value: cdktf.stringToTerraform(struct!.recurrenceValue),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    launch_expiration_time: {
      value: cdktf.numberToHclTerraform(struct!.launchExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    launch_time: {
      value: cdktf.stringToHclTerraform(struct!.launchTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_type: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence_value: {
      value: cdktf.stringToHclTerraform(struct!.recurrenceValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._launchExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchExpirationTime = this._launchExpirationTime;
    }
    if (this._launchTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchTime = this._launchTime;
    }
    if (this._recurrenceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceType = this._recurrenceType;
    }
    if (this._recurrenceValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrenceValue = this._recurrenceValue;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._launchExpirationTime = undefined;
      this._launchTime = undefined;
      this._recurrenceType = undefined;
      this._recurrenceValue = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._launchExpirationTime = value.launchExpirationTime;
      this._launchTime = value.launchTime;
      this._recurrenceType = value.recurrenceType;
      this._recurrenceValue = value.recurrenceValue;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // launch_expiration_time - computed: false, optional: true, required: false
  private _launchExpirationTime?: number; 
  public get launchExpirationTime() {
    return this.getNumberAttribute('launch_expiration_time');
  }
  public set launchExpirationTime(value: number) {
    this._launchExpirationTime = value;
  }
  public resetLaunchExpirationTime() {
    this._launchExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchExpirationTimeInput() {
    return this._launchExpirationTime;
  }

  // launch_time - computed: false, optional: false, required: true
  private _launchTime?: string; 
  public get launchTime() {
    return this.getStringAttribute('launch_time');
  }
  public set launchTime(value: string) {
    this._launchTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTimeInput() {
    return this._launchTime;
  }

  // recurrence_type - computed: false, optional: true, required: false
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  public resetRecurrenceType() {
    this._recurrenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
  }

  // recurrence_value - computed: false, optional: true, required: false
  private _recurrenceValue?: string; 
  public get recurrenceValue() {
    return this.getStringAttribute('recurrence_value');
  }
  public set recurrenceValue(value: string) {
    this._recurrenceValue = value;
  }
  public resetRecurrenceValue() {
    this._recurrenceValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceValueInput() {
    return this._recurrenceValue;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#activity_type Emrv2Cluster#activity_type}
  */
  readonly activityType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#adjustment_type Emrv2Cluster#adjustment_type}
  */
  readonly adjustmentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#adjustment_value Emrv2Cluster#adjustment_value}
  */
  readonly adjustmentValue: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#min_adjustment_value Emrv2Cluster#min_adjustment_value}
  */
  readonly minAdjustmentValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#rule_name Emrv2Cluster#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#trigger_type Emrv2Cluster#trigger_type}
  */
  readonly triggerType: string;
  /**
  * metrics_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#metrics_trigger Emrv2Cluster#metrics_trigger}
  */
  readonly metricsTrigger?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTrigger;
  /**
  * time_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#time_trigger Emrv2Cluster#time_trigger}
  */
  readonly timeTrigger?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTrigger;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_type: cdktf.stringToTerraform(struct!.activityType),
    adjustment_type: cdktf.stringToTerraform(struct!.adjustmentType),
    adjustment_value: cdktf.numberToTerraform(struct!.adjustmentValue),
    min_adjustment_value: cdktf.numberToTerraform(struct!.minAdjustmentValue),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    metrics_trigger: emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerToTerraform(struct!.metricsTrigger),
    time_trigger: emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerToTerraform(struct!.timeTrigger),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activity_type: {
      value: cdktf.stringToHclTerraform(struct!.activityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment_type: {
      value: cdktf.stringToHclTerraform(struct!.adjustmentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adjustment_value: {
      value: cdktf.numberToHclTerraform(struct!.adjustmentValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_adjustment_value: {
      value: cdktf.numberToHclTerraform(struct!.minAdjustmentValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics_trigger: {
      value: emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerToHclTerraform(struct!.metricsTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerList",
    },
    time_trigger: {
      value: emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerToHclTerraform(struct!.timeTrigger),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityType = this._activityType;
    }
    if (this._adjustmentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentType = this._adjustmentType;
    }
    if (this._adjustmentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adjustmentValue = this._adjustmentValue;
    }
    if (this._minAdjustmentValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAdjustmentValue = this._minAdjustmentValue;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._metricsTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsTrigger = this._metricsTrigger?.internalValue;
    }
    if (this._timeTrigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeTrigger = this._timeTrigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityType = undefined;
      this._adjustmentType = undefined;
      this._adjustmentValue = undefined;
      this._minAdjustmentValue = undefined;
      this._ruleName = undefined;
      this._triggerType = undefined;
      this._metricsTrigger.internalValue = undefined;
      this._timeTrigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityType = value.activityType;
      this._adjustmentType = value.adjustmentType;
      this._adjustmentValue = value.adjustmentValue;
      this._minAdjustmentValue = value.minAdjustmentValue;
      this._ruleName = value.ruleName;
      this._triggerType = value.triggerType;
      this._metricsTrigger.internalValue = value.metricsTrigger;
      this._timeTrigger.internalValue = value.timeTrigger;
    }
  }

  // activity_type - computed: false, optional: false, required: true
  private _activityType?: string; 
  public get activityType() {
    return this.getStringAttribute('activity_type');
  }
  public set activityType(value: string) {
    this._activityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activityTypeInput() {
    return this._activityType;
  }

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string; 
  public get adjustmentType() {
    return this.getStringAttribute('adjustment_type');
  }
  public set adjustmentType(value: string) {
    this._adjustmentType = value;
  }
  public resetAdjustmentType() {
    this._adjustmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentTypeInput() {
    return this._adjustmentType;
  }

  // adjustment_value - computed: false, optional: false, required: true
  private _adjustmentValue?: number; 
  public get adjustmentValue() {
    return this.getNumberAttribute('adjustment_value');
  }
  public set adjustmentValue(value: number) {
    this._adjustmentValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adjustmentValueInput() {
    return this._adjustmentValue;
  }

  // min_adjustment_value - computed: false, optional: true, required: false
  private _minAdjustmentValue?: number; 
  public get minAdjustmentValue() {
    return this.getNumberAttribute('min_adjustment_value');
  }
  public set minAdjustmentValue(value: number) {
    this._minAdjustmentValue = value;
  }
  public resetMinAdjustmentValue() {
    this._minAdjustmentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAdjustmentValueInput() {
    return this._minAdjustmentValue;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // metrics_trigger - computed: false, optional: true, required: false
  private _metricsTrigger = new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTriggerOutputReference(this, "metrics_trigger");
  public get metricsTrigger() {
    return this._metricsTrigger;
  }
  public putMetricsTrigger(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesMetricsTrigger) {
    this._metricsTrigger.internalValue = value;
  }
  public resetMetricsTrigger() {
    this._metricsTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsTriggerInput() {
    return this._metricsTrigger.internalValue;
  }

  // time_trigger - computed: false, optional: true, required: false
  private _timeTrigger = new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTriggerOutputReference(this, "time_trigger");
  public get timeTrigger() {
    return this._timeTrigger;
  }
  public putTimeTrigger(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesTimeTrigger) {
    this._timeTrigger.internalValue = value;
  }
  public resetTimeTrigger() {
    this._timeTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeTriggerInput() {
    return this._timeTrigger.internalValue;
  }
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesOutputReference {
    return new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsAutoScalingPolicy {
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#constraints Emrv2Cluster#constraints}
  */
  readonly constraints?: Emrv2ClusterNodeGroupsAutoScalingPolicyConstraints;
  /**
  * scaling_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#scaling_rules Emrv2Cluster#scaling_rules}
  */
  readonly scalingRules?: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules[] | cdktf.IResolvable;
}

export function emrv2ClusterNodeGroupsAutoScalingPolicyToTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    constraints: emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsToTerraform(struct!.constraints),
    scaling_rules: cdktf.listMapper(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesToTerraform, true)(struct!.scalingRules),
  }
}


export function emrv2ClusterNodeGroupsAutoScalingPolicyToHclTerraform(struct?: Emrv2ClusterNodeGroupsAutoScalingPolicyOutputReference | Emrv2ClusterNodeGroupsAutoScalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    constraints: {
      value: emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsToHclTerraform(struct!.constraints),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsList",
    },
    scaling_rules: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesToHclTerraform, true)(struct!.scalingRules),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsAutoScalingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsAutoScalingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._constraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraints = this._constraints?.internalValue;
    }
    if (this._scalingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingRules = this._scalingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsAutoScalingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._constraints.internalValue = undefined;
      this._scalingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._constraints.internalValue = value.constraints;
      this._scalingRules.internalValue = value.scalingRules;
    }
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new Emrv2ClusterNodeGroupsAutoScalingPolicyConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: Emrv2ClusterNodeGroupsAutoScalingPolicyConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // scaling_rules - computed: false, optional: true, required: false
  private _scalingRules = new Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRulesList(this, "scaling_rules", false);
  public get scalingRules() {
    return this._scalingRules;
  }
  public putScalingRules(value: Emrv2ClusterNodeGroupsAutoScalingPolicyScalingRules[] | cdktf.IResolvable) {
    this._scalingRules.internalValue = value;
  }
  public resetScalingRules() {
    this._scalingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingRulesInput() {
    return this._scalingRules.internalValue;
  }
}
export interface Emrv2ClusterNodeGroupsCostOptimizedConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#on_demand_base_capacity Emrv2Cluster#on_demand_base_capacity}
  */
  readonly onDemandBaseCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#on_demand_percentage_above_base_capacity Emrv2Cluster#on_demand_percentage_above_base_capacity}
  */
  readonly onDemandPercentageAboveBaseCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#spot_instance_pools Emrv2Cluster#spot_instance_pools}
  */
  readonly spotInstancePools: number;
}

export function emrv2ClusterNodeGroupsCostOptimizedConfigToTerraform(struct?: Emrv2ClusterNodeGroupsCostOptimizedConfigOutputReference | Emrv2ClusterNodeGroupsCostOptimizedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_demand_base_capacity: cdktf.numberToTerraform(struct!.onDemandBaseCapacity),
    on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct!.onDemandPercentageAboveBaseCapacity),
    spot_instance_pools: cdktf.numberToTerraform(struct!.spotInstancePools),
  }
}


export function emrv2ClusterNodeGroupsCostOptimizedConfigToHclTerraform(struct?: Emrv2ClusterNodeGroupsCostOptimizedConfigOutputReference | Emrv2ClusterNodeGroupsCostOptimizedConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_demand_base_capacity: {
      value: cdktf.numberToHclTerraform(struct!.onDemandBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_percentage_above_base_capacity: {
      value: cdktf.numberToHclTerraform(struct!.onDemandPercentageAboveBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_instance_pools: {
      value: cdktf.numberToHclTerraform(struct!.spotInstancePools),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsCostOptimizedConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsCostOptimizedConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onDemandBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandBaseCapacity = this._onDemandBaseCapacity;
    }
    if (this._onDemandPercentageAboveBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandPercentageAboveBaseCapacity = this._onDemandPercentageAboveBaseCapacity;
    }
    if (this._spotInstancePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstancePools = this._spotInstancePools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsCostOptimizedConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onDemandBaseCapacity = undefined;
      this._onDemandPercentageAboveBaseCapacity = undefined;
      this._spotInstancePools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onDemandBaseCapacity = value.onDemandBaseCapacity;
      this._onDemandPercentageAboveBaseCapacity = value.onDemandPercentageAboveBaseCapacity;
      this._spotInstancePools = value.spotInstancePools;
    }
  }

  // on_demand_base_capacity - computed: false, optional: false, required: true
  private _onDemandBaseCapacity?: number; 
  public get onDemandBaseCapacity() {
    return this.getNumberAttribute('on_demand_base_capacity');
  }
  public set onDemandBaseCapacity(value: number) {
    this._onDemandBaseCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBaseCapacityInput() {
    return this._onDemandBaseCapacity;
  }

  // on_demand_percentage_above_base_capacity - computed: false, optional: false, required: true
  private _onDemandPercentageAboveBaseCapacity?: number; 
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
  }
  public set onDemandPercentageAboveBaseCapacity(value: number) {
    this._onDemandPercentageAboveBaseCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPercentageAboveBaseCapacityInput() {
    return this._onDemandPercentageAboveBaseCapacity;
  }

  // spot_instance_pools - computed: false, optional: false, required: true
  private _spotInstancePools?: number; 
  public get spotInstancePools() {
    return this.getNumberAttribute('spot_instance_pools');
  }
  public set spotInstancePools(value: number) {
    this._spotInstancePools = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstancePoolsInput() {
    return this._spotInstancePools;
  }
}
export interface Emrv2ClusterNodeGroupsDataDisks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#category Emrv2Cluster#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#count Emrv2Cluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#performance_level Emrv2Cluster#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#size Emrv2Cluster#size}
  */
  readonly size: number;
}

export function emrv2ClusterNodeGroupsDataDisksToTerraform(struct?: Emrv2ClusterNodeGroupsDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    count: cdktf.numberToTerraform(struct!.count),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function emrv2ClusterNodeGroupsDataDisksToHclTerraform(struct?: Emrv2ClusterNodeGroupsDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._count = undefined;
      this._performanceLevel = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._count = value.count;
      this._performanceLevel = value.performanceLevel;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // performance_level - computed: true, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class Emrv2ClusterNodeGroupsDataDisksList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsDataDisks[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsDataDisksOutputReference {
    return new Emrv2ClusterNodeGroupsDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsPrivatePoolOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#match_criteria Emrv2Cluster#match_criteria}
  */
  readonly matchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#private_pool_ids Emrv2Cluster#private_pool_ids}
  */
  readonly privatePoolIds?: string[];
}

export function emrv2ClusterNodeGroupsPrivatePoolOptionsToTerraform(struct?: Emrv2ClusterNodeGroupsPrivatePoolOptionsOutputReference | Emrv2ClusterNodeGroupsPrivatePoolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    private_pool_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privatePoolIds),
  }
}


export function emrv2ClusterNodeGroupsPrivatePoolOptionsToHclTerraform(struct?: Emrv2ClusterNodeGroupsPrivatePoolOptionsOutputReference | Emrv2ClusterNodeGroupsPrivatePoolOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_pool_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privatePoolIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsPrivatePoolOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsPrivatePoolOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._privatePoolIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePoolIds = this._privatePoolIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsPrivatePoolOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchCriteria = undefined;
      this._privatePoolIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchCriteria = value.matchCriteria;
      this._privatePoolIds = value.privatePoolIds;
    }
  }

  // match_criteria - computed: false, optional: true, required: false
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // private_pool_ids - computed: false, optional: true, required: false
  private _privatePoolIds?: string[]; 
  public get privatePoolIds() {
    return cdktf.Fn.tolist(this.getListAttribute('private_pool_ids'));
  }
  public set privatePoolIds(value: string[]) {
    this._privatePoolIds = value;
  }
  public resetPrivatePoolIds() {
    this._privatePoolIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolIdsInput() {
    return this._privatePoolIds;
  }
}
export interface Emrv2ClusterNodeGroupsSpotBidPrices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#bid_price Emrv2Cluster#bid_price}
  */
  readonly bidPrice: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#instance_type Emrv2Cluster#instance_type}
  */
  readonly instanceType: string;
}

export function emrv2ClusterNodeGroupsSpotBidPricesToTerraform(struct?: Emrv2ClusterNodeGroupsSpotBidPrices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bid_price: cdktf.numberToTerraform(struct!.bidPrice),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
  }
}


export function emrv2ClusterNodeGroupsSpotBidPricesToHclTerraform(struct?: Emrv2ClusterNodeGroupsSpotBidPrices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bid_price: {
      value: cdktf.numberToHclTerraform(struct!.bidPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsSpotBidPricesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroupsSpotBidPrices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidPrice = this._bidPrice;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsSpotBidPrices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bidPrice = undefined;
      this._instanceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bidPrice = value.bidPrice;
      this._instanceType = value.instanceType;
    }
  }

  // bid_price - computed: false, optional: false, required: true
  private _bidPrice?: number; 
  public get bidPrice() {
    return this.getNumberAttribute('bid_price');
  }
  public set bidPrice(value: number) {
    this._bidPrice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bidPriceInput() {
    return this._bidPrice;
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class Emrv2ClusterNodeGroupsSpotBidPricesList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroupsSpotBidPrices[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsSpotBidPricesOutputReference {
    return new Emrv2ClusterNodeGroupsSpotBidPricesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterNodeGroupsSubscriptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_pay_order Emrv2Cluster#auto_pay_order}
  */
  readonly autoPayOrder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_renew Emrv2Cluster#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_renew_duration Emrv2Cluster#auto_renew_duration}
  */
  readonly autoRenewDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_renew_duration_unit Emrv2Cluster#auto_renew_duration_unit}
  */
  readonly autoRenewDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#payment_duration Emrv2Cluster#payment_duration}
  */
  readonly paymentDuration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#payment_duration_unit Emrv2Cluster#payment_duration_unit}
  */
  readonly paymentDurationUnit: string;
}

export function emrv2ClusterNodeGroupsSubscriptionConfigToTerraform(struct?: Emrv2ClusterNodeGroupsSubscriptionConfigOutputReference | Emrv2ClusterNodeGroupsSubscriptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pay_order: cdktf.booleanToTerraform(struct!.autoPayOrder),
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    auto_renew_duration: cdktf.numberToTerraform(struct!.autoRenewDuration),
    auto_renew_duration_unit: cdktf.stringToTerraform(struct!.autoRenewDurationUnit),
    payment_duration: cdktf.numberToTerraform(struct!.paymentDuration),
    payment_duration_unit: cdktf.stringToTerraform(struct!.paymentDurationUnit),
  }
}


export function emrv2ClusterNodeGroupsSubscriptionConfigToHclTerraform(struct?: Emrv2ClusterNodeGroupsSubscriptionConfigOutputReference | Emrv2ClusterNodeGroupsSubscriptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pay_order: {
      value: cdktf.booleanToHclTerraform(struct!.autoPayOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_renew_duration: {
      value: cdktf.numberToHclTerraform(struct!.autoRenewDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_renew_duration_unit: {
      value: cdktf.stringToHclTerraform(struct!.autoRenewDurationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payment_duration: {
      value: cdktf.numberToHclTerraform(struct!.paymentDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payment_duration_unit: {
      value: cdktf.stringToHclTerraform(struct!.paymentDurationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsSubscriptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsSubscriptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPayOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPayOrder = this._autoPayOrder;
    }
    if (this._autoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenew = this._autoRenew;
    }
    if (this._autoRenewDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenewDuration = this._autoRenewDuration;
    }
    if (this._autoRenewDurationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenewDurationUnit = this._autoRenewDurationUnit;
    }
    if (this._paymentDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentDuration = this._paymentDuration;
    }
    if (this._paymentDurationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentDurationUnit = this._paymentDurationUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsSubscriptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPayOrder = undefined;
      this._autoRenew = undefined;
      this._autoRenewDuration = undefined;
      this._autoRenewDurationUnit = undefined;
      this._paymentDuration = undefined;
      this._paymentDurationUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPayOrder = value.autoPayOrder;
      this._autoRenew = value.autoRenew;
      this._autoRenewDuration = value.autoRenewDuration;
      this._autoRenewDurationUnit = value.autoRenewDurationUnit;
      this._paymentDuration = value.paymentDuration;
      this._paymentDurationUnit = value.paymentDurationUnit;
    }
  }

  // auto_pay_order - computed: false, optional: true, required: false
  private _autoPayOrder?: boolean | cdktf.IResolvable; 
  public get autoPayOrder() {
    return this.getBooleanAttribute('auto_pay_order');
  }
  public set autoPayOrder(value: boolean | cdktf.IResolvable) {
    this._autoPayOrder = value;
  }
  public resetAutoPayOrder() {
    this._autoPayOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayOrderInput() {
    return this._autoPayOrder;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_duration - computed: false, optional: true, required: false
  private _autoRenewDuration?: number; 
  public get autoRenewDuration() {
    return this.getNumberAttribute('auto_renew_duration');
  }
  public set autoRenewDuration(value: number) {
    this._autoRenewDuration = value;
  }
  public resetAutoRenewDuration() {
    this._autoRenewDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewDurationInput() {
    return this._autoRenewDuration;
  }

  // auto_renew_duration_unit - computed: false, optional: true, required: false
  private _autoRenewDurationUnit?: string; 
  public get autoRenewDurationUnit() {
    return this.getStringAttribute('auto_renew_duration_unit');
  }
  public set autoRenewDurationUnit(value: string) {
    this._autoRenewDurationUnit = value;
  }
  public resetAutoRenewDurationUnit() {
    this._autoRenewDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewDurationUnitInput() {
    return this._autoRenewDurationUnit;
  }

  // payment_duration - computed: false, optional: false, required: true
  private _paymentDuration?: number; 
  public get paymentDuration() {
    return this.getNumberAttribute('payment_duration');
  }
  public set paymentDuration(value: number) {
    this._paymentDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationInput() {
    return this._paymentDuration;
  }

  // payment_duration_unit - computed: false, optional: false, required: true
  private _paymentDurationUnit?: string; 
  public get paymentDurationUnit() {
    return this.getStringAttribute('payment_duration_unit');
  }
  public set paymentDurationUnit(value: string) {
    this._paymentDurationUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationUnitInput() {
    return this._paymentDurationUnit;
  }
}
export interface Emrv2ClusterNodeGroupsSystemDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#category Emrv2Cluster#category}
  */
  readonly category: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#count Emrv2Cluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#performance_level Emrv2Cluster#performance_level}
  */
  readonly performanceLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#size Emrv2Cluster#size}
  */
  readonly size: number;
}

export function emrv2ClusterNodeGroupsSystemDiskToTerraform(struct?: Emrv2ClusterNodeGroupsSystemDiskOutputReference | Emrv2ClusterNodeGroupsSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    count: cdktf.numberToTerraform(struct!.count),
    performance_level: cdktf.stringToTerraform(struct!.performanceLevel),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function emrv2ClusterNodeGroupsSystemDiskToHclTerraform(struct?: Emrv2ClusterNodeGroupsSystemDiskOutputReference | Emrv2ClusterNodeGroupsSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    performance_level: {
      value: cdktf.stringToHclTerraform(struct!.performanceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterNodeGroupsSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._performanceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceLevel = this._performanceLevel;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroupsSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._count = undefined;
      this._performanceLevel = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._count = value.count;
      this._performanceLevel = value.performanceLevel;
      this._size = value.size;
    }
  }

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // performance_level - computed: true, optional: true, required: false
  private _performanceLevel?: string; 
  public get performanceLevel() {
    return this.getStringAttribute('performance_level');
  }
  public set performanceLevel(value: string) {
    this._performanceLevel = value;
  }
  public resetPerformanceLevel() {
    this._performanceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceLevelInput() {
    return this._performanceLevel;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface Emrv2ClusterNodeGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#additional_security_group_ids Emrv2Cluster#additional_security_group_ids}
  */
  readonly additionalSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#deployment_set_strategy Emrv2Cluster#deployment_set_strategy}
  */
  readonly deploymentSetStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#graceful_shutdown Emrv2Cluster#graceful_shutdown}
  */
  readonly gracefulShutdown?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#instance_types Emrv2Cluster#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_count Emrv2Cluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_name Emrv2Cluster#node_group_name}
  */
  readonly nodeGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_group_type Emrv2Cluster#node_group_type}
  */
  readonly nodeGroupType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#node_resize_strategy Emrv2Cluster#node_resize_strategy}
  */
  readonly nodeResizeStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#payment_type Emrv2Cluster#payment_type}
  */
  readonly paymentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#spot_instance_remedy Emrv2Cluster#spot_instance_remedy}
  */
  readonly spotInstanceRemedy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#spot_strategy Emrv2Cluster#spot_strategy}
  */
  readonly spotStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#vswitch_ids Emrv2Cluster#vswitch_ids}
  */
  readonly vswitchIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#with_public_ip Emrv2Cluster#with_public_ip}
  */
  readonly withPublicIp?: boolean | cdktf.IResolvable;
  /**
  * ack_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#ack_config Emrv2Cluster#ack_config}
  */
  readonly ackConfig?: Emrv2ClusterNodeGroupsAckConfig;
  /**
  * auto_scaling_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_scaling_policy Emrv2Cluster#auto_scaling_policy}
  */
  readonly autoScalingPolicy?: Emrv2ClusterNodeGroupsAutoScalingPolicy;
  /**
  * cost_optimized_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#cost_optimized_config Emrv2Cluster#cost_optimized_config}
  */
  readonly costOptimizedConfig?: Emrv2ClusterNodeGroupsCostOptimizedConfig;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#data_disks Emrv2Cluster#data_disks}
  */
  readonly dataDisks: Emrv2ClusterNodeGroupsDataDisks[] | cdktf.IResolvable;
  /**
  * private_pool_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#private_pool_options Emrv2Cluster#private_pool_options}
  */
  readonly privatePoolOptions?: Emrv2ClusterNodeGroupsPrivatePoolOptions;
  /**
  * spot_bid_prices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#spot_bid_prices Emrv2Cluster#spot_bid_prices}
  */
  readonly spotBidPrices?: Emrv2ClusterNodeGroupsSpotBidPrices[] | cdktf.IResolvable;
  /**
  * subscription_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#subscription_config Emrv2Cluster#subscription_config}
  */
  readonly subscriptionConfig?: Emrv2ClusterNodeGroupsSubscriptionConfig;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#system_disk Emrv2Cluster#system_disk}
  */
  readonly systemDisk: Emrv2ClusterNodeGroupsSystemDisk;
}

export function emrv2ClusterNodeGroupsToTerraform(struct?: Emrv2ClusterNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalSecurityGroupIds),
    deployment_set_strategy: cdktf.stringToTerraform(struct!.deploymentSetStrategy),
    graceful_shutdown: cdktf.booleanToTerraform(struct!.gracefulShutdown),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_group_name: cdktf.stringToTerraform(struct!.nodeGroupName),
    node_group_type: cdktf.stringToTerraform(struct!.nodeGroupType),
    node_resize_strategy: cdktf.stringToTerraform(struct!.nodeResizeStrategy),
    payment_type: cdktf.stringToTerraform(struct!.paymentType),
    spot_instance_remedy: cdktf.booleanToTerraform(struct!.spotInstanceRemedy),
    spot_strategy: cdktf.stringToTerraform(struct!.spotStrategy),
    vswitch_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vswitchIds),
    with_public_ip: cdktf.booleanToTerraform(struct!.withPublicIp),
    ack_config: emrv2ClusterNodeGroupsAckConfigToTerraform(struct!.ackConfig),
    auto_scaling_policy: emrv2ClusterNodeGroupsAutoScalingPolicyToTerraform(struct!.autoScalingPolicy),
    cost_optimized_config: emrv2ClusterNodeGroupsCostOptimizedConfigToTerraform(struct!.costOptimizedConfig),
    data_disks: cdktf.listMapper(emrv2ClusterNodeGroupsDataDisksToTerraform, true)(struct!.dataDisks),
    private_pool_options: emrv2ClusterNodeGroupsPrivatePoolOptionsToTerraform(struct!.privatePoolOptions),
    spot_bid_prices: cdktf.listMapper(emrv2ClusterNodeGroupsSpotBidPricesToTerraform, true)(struct!.spotBidPrices),
    subscription_config: emrv2ClusterNodeGroupsSubscriptionConfigToTerraform(struct!.subscriptionConfig),
    system_disk: emrv2ClusterNodeGroupsSystemDiskToTerraform(struct!.systemDisk),
  }
}


export function emrv2ClusterNodeGroupsToHclTerraform(struct?: Emrv2ClusterNodeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_set_strategy: {
      value: cdktf.stringToHclTerraform(struct!.deploymentSetStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.gracefulShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_group_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroupType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_resize_strategy: {
      value: cdktf.stringToHclTerraform(struct!.nodeResizeStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payment_type: {
      value: cdktf.stringToHclTerraform(struct!.paymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance_remedy: {
      value: cdktf.booleanToHclTerraform(struct!.spotInstanceRemedy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_strategy: {
      value: cdktf.stringToHclTerraform(struct!.spotStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vswitch_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vswitchIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    with_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.withPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ack_config: {
      value: emrv2ClusterNodeGroupsAckConfigToHclTerraform(struct!.ackConfig),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAckConfigList",
    },
    auto_scaling_policy: {
      value: emrv2ClusterNodeGroupsAutoScalingPolicyToHclTerraform(struct!.autoScalingPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "Emrv2ClusterNodeGroupsAutoScalingPolicyList",
    },
    cost_optimized_config: {
      value: emrv2ClusterNodeGroupsCostOptimizedConfigToHclTerraform(struct!.costOptimizedConfig),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsCostOptimizedConfigList",
    },
    data_disks: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsDataDisksToHclTerraform, true)(struct!.dataDisks),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsDataDisksList",
    },
    private_pool_options: {
      value: emrv2ClusterNodeGroupsPrivatePoolOptionsToHclTerraform(struct!.privatePoolOptions),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsPrivatePoolOptionsList",
    },
    spot_bid_prices: {
      value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsSpotBidPricesToHclTerraform, true)(struct!.spotBidPrices),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsSpotBidPricesList",
    },
    subscription_config: {
      value: emrv2ClusterNodeGroupsSubscriptionConfigToHclTerraform(struct!.subscriptionConfig),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsSubscriptionConfigList",
    },
    system_disk: {
      value: emrv2ClusterNodeGroupsSystemDiskToHclTerraform(struct!.systemDisk),
      isBlock: true,
      type: "set",
      storageClassType: "Emrv2ClusterNodeGroupsSystemDiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterNodeGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Emrv2ClusterNodeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalSecurityGroupIds = this._additionalSecurityGroupIds;
    }
    if (this._deploymentSetStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentSetStrategy = this._deploymentSetStrategy;
    }
    if (this._gracefulShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdown = this._gracefulShutdown;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupName = this._nodeGroupName;
    }
    if (this._nodeGroupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupType = this._nodeGroupType;
    }
    if (this._nodeResizeStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeResizeStrategy = this._nodeResizeStrategy;
    }
    if (this._paymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentType = this._paymentType;
    }
    if (this._spotInstanceRemedy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstanceRemedy = this._spotInstanceRemedy;
    }
    if (this._spotStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotStrategy = this._spotStrategy;
    }
    if (this._vswitchIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vswitchIds = this._vswitchIds;
    }
    if (this._withPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.withPublicIp = this._withPublicIp;
    }
    if (this._ackConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackConfig = this._ackConfig?.internalValue;
    }
    if (this._autoScalingPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoScalingPolicy = this._autoScalingPolicy?.internalValue;
    }
    if (this._costOptimizedConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costOptimizedConfig = this._costOptimizedConfig?.internalValue;
    }
    if (this._dataDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisks = this._dataDisks?.internalValue;
    }
    if (this._privatePoolOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatePoolOptions = this._privatePoolOptions?.internalValue;
    }
    if (this._spotBidPrices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotBidPrices = this._spotBidPrices?.internalValue;
    }
    if (this._subscriptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionConfig = this._subscriptionConfig?.internalValue;
    }
    if (this._systemDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemDisk = this._systemDisk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterNodeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalSecurityGroupIds = undefined;
      this._deploymentSetStrategy = undefined;
      this._gracefulShutdown = undefined;
      this._instanceTypes = undefined;
      this._nodeCount = undefined;
      this._nodeGroupName = undefined;
      this._nodeGroupType = undefined;
      this._nodeResizeStrategy = undefined;
      this._paymentType = undefined;
      this._spotInstanceRemedy = undefined;
      this._spotStrategy = undefined;
      this._vswitchIds = undefined;
      this._withPublicIp = undefined;
      this._ackConfig.internalValue = undefined;
      this._autoScalingPolicy.internalValue = undefined;
      this._costOptimizedConfig.internalValue = undefined;
      this._dataDisks.internalValue = undefined;
      this._privatePoolOptions.internalValue = undefined;
      this._spotBidPrices.internalValue = undefined;
      this._subscriptionConfig.internalValue = undefined;
      this._systemDisk.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalSecurityGroupIds = value.additionalSecurityGroupIds;
      this._deploymentSetStrategy = value.deploymentSetStrategy;
      this._gracefulShutdown = value.gracefulShutdown;
      this._instanceTypes = value.instanceTypes;
      this._nodeCount = value.nodeCount;
      this._nodeGroupName = value.nodeGroupName;
      this._nodeGroupType = value.nodeGroupType;
      this._nodeResizeStrategy = value.nodeResizeStrategy;
      this._paymentType = value.paymentType;
      this._spotInstanceRemedy = value.spotInstanceRemedy;
      this._spotStrategy = value.spotStrategy;
      this._vswitchIds = value.vswitchIds;
      this._withPublicIp = value.withPublicIp;
      this._ackConfig.internalValue = value.ackConfig;
      this._autoScalingPolicy.internalValue = value.autoScalingPolicy;
      this._costOptimizedConfig.internalValue = value.costOptimizedConfig;
      this._dataDisks.internalValue = value.dataDisks;
      this._privatePoolOptions.internalValue = value.privatePoolOptions;
      this._spotBidPrices.internalValue = value.spotBidPrices;
      this._subscriptionConfig.internalValue = value.subscriptionConfig;
      this._systemDisk.internalValue = value.systemDisk;
    }
  }

  // additional_security_group_ids - computed: false, optional: true, required: false
  private _additionalSecurityGroupIds?: string[]; 
  public get additionalSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_security_group_ids'));
  }
  public set additionalSecurityGroupIds(value: string[]) {
    this._additionalSecurityGroupIds = value;
  }
  public resetAdditionalSecurityGroupIds() {
    this._additionalSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalSecurityGroupIdsInput() {
    return this._additionalSecurityGroupIds;
  }

  // deployment_set_strategy - computed: true, optional: true, required: false
  private _deploymentSetStrategy?: string; 
  public get deploymentSetStrategy() {
    return this.getStringAttribute('deployment_set_strategy');
  }
  public set deploymentSetStrategy(value: string) {
    this._deploymentSetStrategy = value;
  }
  public resetDeploymentSetStrategy() {
    this._deploymentSetStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentSetStrategyInput() {
    return this._deploymentSetStrategy;
  }

  // graceful_shutdown - computed: true, optional: true, required: false
  private _gracefulShutdown?: boolean | cdktf.IResolvable; 
  public get gracefulShutdown() {
    return this.getBooleanAttribute('graceful_shutdown');
  }
  public set gracefulShutdown(value: boolean | cdktf.IResolvable) {
    this._gracefulShutdown = value;
  }
  public resetGracefulShutdown() {
    this._gracefulShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownInput() {
    return this._gracefulShutdown;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_types'));
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_group_name - computed: false, optional: false, required: true
  private _nodeGroupName?: string; 
  public get nodeGroupName() {
    return this.getStringAttribute('node_group_name');
  }
  public set nodeGroupName(value: string) {
    this._nodeGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupNameInput() {
    return this._nodeGroupName;
  }

  // node_group_type - computed: false, optional: false, required: true
  private _nodeGroupType?: string; 
  public get nodeGroupType() {
    return this.getStringAttribute('node_group_type');
  }
  public set nodeGroupType(value: string) {
    this._nodeGroupType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupTypeInput() {
    return this._nodeGroupType;
  }

  // node_resize_strategy - computed: true, optional: true, required: false
  private _nodeResizeStrategy?: string; 
  public get nodeResizeStrategy() {
    return this.getStringAttribute('node_resize_strategy');
  }
  public set nodeResizeStrategy(value: string) {
    this._nodeResizeStrategy = value;
  }
  public resetNodeResizeStrategy() {
    this._nodeResizeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeResizeStrategyInput() {
    return this._nodeResizeStrategy;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // spot_instance_remedy - computed: true, optional: true, required: false
  private _spotInstanceRemedy?: boolean | cdktf.IResolvable; 
  public get spotInstanceRemedy() {
    return this.getBooleanAttribute('spot_instance_remedy');
  }
  public set spotInstanceRemedy(value: boolean | cdktf.IResolvable) {
    this._spotInstanceRemedy = value;
  }
  public resetSpotInstanceRemedy() {
    this._spotInstanceRemedy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceRemedyInput() {
    return this._spotInstanceRemedy;
  }

  // spot_strategy - computed: false, optional: true, required: false
  private _spotStrategy?: string; 
  public get spotStrategy() {
    return this.getStringAttribute('spot_strategy');
  }
  public set spotStrategy(value: string) {
    this._spotStrategy = value;
  }
  public resetSpotStrategy() {
    this._spotStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotStrategyInput() {
    return this._spotStrategy;
  }

  // vswitch_ids - computed: false, optional: true, required: false
  private _vswitchIds?: string[]; 
  public get vswitchIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vswitch_ids'));
  }
  public set vswitchIds(value: string[]) {
    this._vswitchIds = value;
  }
  public resetVswitchIds() {
    this._vswitchIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdsInput() {
    return this._vswitchIds;
  }

  // with_public_ip - computed: true, optional: true, required: false
  private _withPublicIp?: boolean | cdktf.IResolvable; 
  public get withPublicIp() {
    return this.getBooleanAttribute('with_public_ip');
  }
  public set withPublicIp(value: boolean | cdktf.IResolvable) {
    this._withPublicIp = value;
  }
  public resetWithPublicIp() {
    this._withPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withPublicIpInput() {
    return this._withPublicIp;
  }

  // ack_config - computed: false, optional: true, required: false
  private _ackConfig = new Emrv2ClusterNodeGroupsAckConfigOutputReference(this, "ack_config");
  public get ackConfig() {
    return this._ackConfig;
  }
  public putAckConfig(value: Emrv2ClusterNodeGroupsAckConfig) {
    this._ackConfig.internalValue = value;
  }
  public resetAckConfig() {
    this._ackConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackConfigInput() {
    return this._ackConfig.internalValue;
  }

  // auto_scaling_policy - computed: false, optional: true, required: false
  private _autoScalingPolicy = new Emrv2ClusterNodeGroupsAutoScalingPolicyOutputReference(this, "auto_scaling_policy");
  public get autoScalingPolicy() {
    return this._autoScalingPolicy;
  }
  public putAutoScalingPolicy(value: Emrv2ClusterNodeGroupsAutoScalingPolicy) {
    this._autoScalingPolicy.internalValue = value;
  }
  public resetAutoScalingPolicy() {
    this._autoScalingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingPolicyInput() {
    return this._autoScalingPolicy.internalValue;
  }

  // cost_optimized_config - computed: false, optional: true, required: false
  private _costOptimizedConfig = new Emrv2ClusterNodeGroupsCostOptimizedConfigOutputReference(this, "cost_optimized_config");
  public get costOptimizedConfig() {
    return this._costOptimizedConfig;
  }
  public putCostOptimizedConfig(value: Emrv2ClusterNodeGroupsCostOptimizedConfig) {
    this._costOptimizedConfig.internalValue = value;
  }
  public resetCostOptimizedConfig() {
    this._costOptimizedConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costOptimizedConfigInput() {
    return this._costOptimizedConfig.internalValue;
  }

  // data_disks - computed: false, optional: false, required: true
  private _dataDisks = new Emrv2ClusterNodeGroupsDataDisksList(this, "data_disks", true);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: Emrv2ClusterNodeGroupsDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // private_pool_options - computed: false, optional: true, required: false
  private _privatePoolOptions = new Emrv2ClusterNodeGroupsPrivatePoolOptionsOutputReference(this, "private_pool_options");
  public get privatePoolOptions() {
    return this._privatePoolOptions;
  }
  public putPrivatePoolOptions(value: Emrv2ClusterNodeGroupsPrivatePoolOptions) {
    this._privatePoolOptions.internalValue = value;
  }
  public resetPrivatePoolOptions() {
    this._privatePoolOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatePoolOptionsInput() {
    return this._privatePoolOptions.internalValue;
  }

  // spot_bid_prices - computed: false, optional: true, required: false
  private _spotBidPrices = new Emrv2ClusterNodeGroupsSpotBidPricesList(this, "spot_bid_prices", true);
  public get spotBidPrices() {
    return this._spotBidPrices;
  }
  public putSpotBidPrices(value: Emrv2ClusterNodeGroupsSpotBidPrices[] | cdktf.IResolvable) {
    this._spotBidPrices.internalValue = value;
  }
  public resetSpotBidPrices() {
    this._spotBidPrices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotBidPricesInput() {
    return this._spotBidPrices.internalValue;
  }

  // subscription_config - computed: false, optional: true, required: false
  private _subscriptionConfig = new Emrv2ClusterNodeGroupsSubscriptionConfigOutputReference(this, "subscription_config");
  public get subscriptionConfig() {
    return this._subscriptionConfig;
  }
  public putSubscriptionConfig(value: Emrv2ClusterNodeGroupsSubscriptionConfig) {
    this._subscriptionConfig.internalValue = value;
  }
  public resetSubscriptionConfig() {
    this._subscriptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionConfigInput() {
    return this._subscriptionConfig.internalValue;
  }

  // system_disk - computed: false, optional: false, required: true
  private _systemDisk = new Emrv2ClusterNodeGroupsSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: Emrv2ClusterNodeGroupsSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }
}

export class Emrv2ClusterNodeGroupsList extends cdktf.ComplexList {
  public internalValue? : Emrv2ClusterNodeGroups[] | cdktf.IResolvable

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
  public get(index: number): Emrv2ClusterNodeGroupsOutputReference {
    return new Emrv2ClusterNodeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Emrv2ClusterSubscriptionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_pay_order Emrv2Cluster#auto_pay_order}
  */
  readonly autoPayOrder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_renew Emrv2Cluster#auto_renew}
  */
  readonly autoRenew?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_renew_duration Emrv2Cluster#auto_renew_duration}
  */
  readonly autoRenewDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#auto_renew_duration_unit Emrv2Cluster#auto_renew_duration_unit}
  */
  readonly autoRenewDurationUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#payment_duration Emrv2Cluster#payment_duration}
  */
  readonly paymentDuration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#payment_duration_unit Emrv2Cluster#payment_duration_unit}
  */
  readonly paymentDurationUnit: string;
}

export function emrv2ClusterSubscriptionConfigToTerraform(struct?: Emrv2ClusterSubscriptionConfigOutputReference | Emrv2ClusterSubscriptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_pay_order: cdktf.booleanToTerraform(struct!.autoPayOrder),
    auto_renew: cdktf.booleanToTerraform(struct!.autoRenew),
    auto_renew_duration: cdktf.numberToTerraform(struct!.autoRenewDuration),
    auto_renew_duration_unit: cdktf.stringToTerraform(struct!.autoRenewDurationUnit),
    payment_duration: cdktf.numberToTerraform(struct!.paymentDuration),
    payment_duration_unit: cdktf.stringToTerraform(struct!.paymentDurationUnit),
  }
}


export function emrv2ClusterSubscriptionConfigToHclTerraform(struct?: Emrv2ClusterSubscriptionConfigOutputReference | Emrv2ClusterSubscriptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_pay_order: {
      value: cdktf.booleanToHclTerraform(struct!.autoPayOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_renew: {
      value: cdktf.booleanToHclTerraform(struct!.autoRenew),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_renew_duration: {
      value: cdktf.numberToHclTerraform(struct!.autoRenewDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_renew_duration_unit: {
      value: cdktf.stringToHclTerraform(struct!.autoRenewDurationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payment_duration: {
      value: cdktf.numberToHclTerraform(struct!.paymentDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payment_duration_unit: {
      value: cdktf.stringToHclTerraform(struct!.paymentDurationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterSubscriptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Emrv2ClusterSubscriptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoPayOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoPayOrder = this._autoPayOrder;
    }
    if (this._autoRenew !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenew = this._autoRenew;
    }
    if (this._autoRenewDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenewDuration = this._autoRenewDuration;
    }
    if (this._autoRenewDurationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRenewDurationUnit = this._autoRenewDurationUnit;
    }
    if (this._paymentDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentDuration = this._paymentDuration;
    }
    if (this._paymentDurationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.paymentDurationUnit = this._paymentDurationUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterSubscriptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoPayOrder = undefined;
      this._autoRenew = undefined;
      this._autoRenewDuration = undefined;
      this._autoRenewDurationUnit = undefined;
      this._paymentDuration = undefined;
      this._paymentDurationUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoPayOrder = value.autoPayOrder;
      this._autoRenew = value.autoRenew;
      this._autoRenewDuration = value.autoRenewDuration;
      this._autoRenewDurationUnit = value.autoRenewDurationUnit;
      this._paymentDuration = value.paymentDuration;
      this._paymentDurationUnit = value.paymentDurationUnit;
    }
  }

  // auto_pay_order - computed: false, optional: true, required: false
  private _autoPayOrder?: boolean | cdktf.IResolvable; 
  public get autoPayOrder() {
    return this.getBooleanAttribute('auto_pay_order');
  }
  public set autoPayOrder(value: boolean | cdktf.IResolvable) {
    this._autoPayOrder = value;
  }
  public resetAutoPayOrder() {
    this._autoPayOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayOrderInput() {
    return this._autoPayOrder;
  }

  // auto_renew - computed: false, optional: true, required: false
  private _autoRenew?: boolean | cdktf.IResolvable; 
  public get autoRenew() {
    return this.getBooleanAttribute('auto_renew');
  }
  public set autoRenew(value: boolean | cdktf.IResolvable) {
    this._autoRenew = value;
  }
  public resetAutoRenew() {
    this._autoRenew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewInput() {
    return this._autoRenew;
  }

  // auto_renew_duration - computed: false, optional: true, required: false
  private _autoRenewDuration?: number; 
  public get autoRenewDuration() {
    return this.getNumberAttribute('auto_renew_duration');
  }
  public set autoRenewDuration(value: number) {
    this._autoRenewDuration = value;
  }
  public resetAutoRenewDuration() {
    this._autoRenewDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewDurationInput() {
    return this._autoRenewDuration;
  }

  // auto_renew_duration_unit - computed: false, optional: true, required: false
  private _autoRenewDurationUnit?: string; 
  public get autoRenewDurationUnit() {
    return this.getStringAttribute('auto_renew_duration_unit');
  }
  public set autoRenewDurationUnit(value: string) {
    this._autoRenewDurationUnit = value;
  }
  public resetAutoRenewDurationUnit() {
    this._autoRenewDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRenewDurationUnitInput() {
    return this._autoRenewDurationUnit;
  }

  // payment_duration - computed: false, optional: false, required: true
  private _paymentDuration?: number; 
  public get paymentDuration() {
    return this.getNumberAttribute('payment_duration');
  }
  public set paymentDuration(value: number) {
    this._paymentDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationInput() {
    return this._paymentDuration;
  }

  // payment_duration_unit - computed: false, optional: false, required: true
  private _paymentDurationUnit?: string; 
  public get paymentDurationUnit() {
    return this.getStringAttribute('payment_duration_unit');
  }
  public set paymentDurationUnit(value: string) {
    this._paymentDurationUnit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentDurationUnitInput() {
    return this._paymentDurationUnit;
  }
}
export interface Emrv2ClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#create Emrv2Cluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#delete Emrv2Cluster#delete}
  */
  readonly delete?: string;
}

export function emrv2ClusterTimeoutsToTerraform(struct?: Emrv2ClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function emrv2ClusterTimeoutsToHclTerraform(struct?: Emrv2ClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Emrv2ClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Emrv2ClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Emrv2ClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster alicloud_emrv2_cluster}
*/
export class Emrv2Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_emrv2_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Emrv2Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Emrv2Cluster to import
  * @param importFromId The id of the existing Emrv2Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Emrv2Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_emrv2_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/emrv2_cluster alicloud_emrv2_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Emrv2ClusterConfig
  */
  public constructor(scope: Construct, id: string, config: Emrv2ClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_emrv2_cluster',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applications = config.applications;
    this._clusterName = config.clusterName;
    this._clusterType = config.clusterType;
    this._deletionProtection = config.deletionProtection;
    this._deployMode = config.deployMode;
    this._id = config.id;
    this._logCollectStrategy = config.logCollectStrategy;
    this._paymentType = config.paymentType;
    this._releaseVersion = config.releaseVersion;
    this._resourceGroupId = config.resourceGroupId;
    this._securityMode = config.securityMode;
    this._tags = config.tags;
    this._applicationConfigs.internalValue = config.applicationConfigs;
    this._bootstrapScripts.internalValue = config.bootstrapScripts;
    this._nodeAttributes.internalValue = config.nodeAttributes;
    this._nodeGroups.internalValue = config.nodeGroups;
    this._subscriptionConfig.internalValue = config.subscriptionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: false, optional: false, required: true
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cluster_type - computed: false, optional: false, required: true
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // deploy_mode - computed: true, optional: true, required: false
  private _deployMode?: string; 
  public get deployMode() {
    return this.getStringAttribute('deploy_mode');
  }
  public set deployMode(value: string) {
    this._deployMode = value;
  }
  public resetDeployMode() {
    this._deployMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployModeInput() {
    return this._deployMode;
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

  // log_collect_strategy - computed: true, optional: true, required: false
  private _logCollectStrategy?: string; 
  public get logCollectStrategy() {
    return this.getStringAttribute('log_collect_strategy');
  }
  public set logCollectStrategy(value: string) {
    this._logCollectStrategy = value;
  }
  public resetLogCollectStrategy() {
    this._logCollectStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCollectStrategyInput() {
    return this._logCollectStrategy;
  }

  // payment_type - computed: true, optional: true, required: false
  private _paymentType?: string; 
  public get paymentType() {
    return this.getStringAttribute('payment_type');
  }
  public set paymentType(value: string) {
    this._paymentType = value;
  }
  public resetPaymentType() {
    this._paymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymentTypeInput() {
    return this._paymentType;
  }

  // release_version - computed: false, optional: false, required: true
  private _releaseVersion?: string; 
  public get releaseVersion() {
    return this.getStringAttribute('release_version');
  }
  public set releaseVersion(value: string) {
    this._releaseVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseVersionInput() {
    return this._releaseVersion;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // security_mode - computed: true, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // tags - computed: false, optional: true, required: false
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

  // application_configs - computed: false, optional: true, required: false
  private _applicationConfigs = new Emrv2ClusterApplicationConfigsList(this, "application_configs", true);
  public get applicationConfigs() {
    return this._applicationConfigs;
  }
  public putApplicationConfigs(value: Emrv2ClusterApplicationConfigs[] | cdktf.IResolvable) {
    this._applicationConfigs.internalValue = value;
  }
  public resetApplicationConfigs() {
    this._applicationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigsInput() {
    return this._applicationConfigs.internalValue;
  }

  // bootstrap_scripts - computed: false, optional: true, required: false
  private _bootstrapScripts = new Emrv2ClusterBootstrapScriptsList(this, "bootstrap_scripts", false);
  public get bootstrapScripts() {
    return this._bootstrapScripts;
  }
  public putBootstrapScripts(value: Emrv2ClusterBootstrapScripts[] | cdktf.IResolvable) {
    this._bootstrapScripts.internalValue = value;
  }
  public resetBootstrapScripts() {
    this._bootstrapScripts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapScriptsInput() {
    return this._bootstrapScripts.internalValue;
  }

  // node_attributes - computed: false, optional: false, required: true
  private _nodeAttributes = new Emrv2ClusterNodeAttributesList(this, "node_attributes", true);
  public get nodeAttributes() {
    return this._nodeAttributes;
  }
  public putNodeAttributes(value: Emrv2ClusterNodeAttributes[] | cdktf.IResolvable) {
    this._nodeAttributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributesInput() {
    return this._nodeAttributes.internalValue;
  }

  // node_groups - computed: false, optional: false, required: true
  private _nodeGroups = new Emrv2ClusterNodeGroupsList(this, "node_groups", false);
  public get nodeGroups() {
    return this._nodeGroups;
  }
  public putNodeGroups(value: Emrv2ClusterNodeGroups[] | cdktf.IResolvable) {
    this._nodeGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupsInput() {
    return this._nodeGroups.internalValue;
  }

  // subscription_config - computed: false, optional: true, required: false
  private _subscriptionConfig = new Emrv2ClusterSubscriptionConfigOutputReference(this, "subscription_config");
  public get subscriptionConfig() {
    return this._subscriptionConfig;
  }
  public putSubscriptionConfig(value: Emrv2ClusterSubscriptionConfig) {
    this._subscriptionConfig.internalValue = value;
  }
  public resetSubscriptionConfig() {
    this._subscriptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionConfigInput() {
    return this._subscriptionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new Emrv2ClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: Emrv2ClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      deploy_mode: cdktf.stringToTerraform(this._deployMode),
      id: cdktf.stringToTerraform(this._id),
      log_collect_strategy: cdktf.stringToTerraform(this._logCollectStrategy),
      payment_type: cdktf.stringToTerraform(this._paymentType),
      release_version: cdktf.stringToTerraform(this._releaseVersion),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_mode: cdktf.stringToTerraform(this._securityMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      application_configs: cdktf.listMapper(emrv2ClusterApplicationConfigsToTerraform, true)(this._applicationConfigs.internalValue),
      bootstrap_scripts: cdktf.listMapper(emrv2ClusterBootstrapScriptsToTerraform, true)(this._bootstrapScripts.internalValue),
      node_attributes: cdktf.listMapper(emrv2ClusterNodeAttributesToTerraform, true)(this._nodeAttributes.internalValue),
      node_groups: cdktf.listMapper(emrv2ClusterNodeGroupsToTerraform, true)(this._nodeGroups.internalValue),
      subscription_config: emrv2ClusterSubscriptionConfigToTerraform(this._subscriptionConfig.internalValue),
      timeouts: emrv2ClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deploy_mode: {
        value: cdktf.stringToHclTerraform(this._deployMode),
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
      log_collect_strategy: {
        value: cdktf.stringToHclTerraform(this._logCollectStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      payment_type: {
        value: cdktf.stringToHclTerraform(this._paymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_version: {
        value: cdktf.stringToHclTerraform(this._releaseVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_mode: {
        value: cdktf.stringToHclTerraform(this._securityMode),
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
      application_configs: {
        value: cdktf.listMapperHcl(emrv2ClusterApplicationConfigsToHclTerraform, true)(this._applicationConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Emrv2ClusterApplicationConfigsList",
      },
      bootstrap_scripts: {
        value: cdktf.listMapperHcl(emrv2ClusterBootstrapScriptsToHclTerraform, true)(this._bootstrapScripts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Emrv2ClusterBootstrapScriptsList",
      },
      node_attributes: {
        value: cdktf.listMapperHcl(emrv2ClusterNodeAttributesToHclTerraform, true)(this._nodeAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Emrv2ClusterNodeAttributesList",
      },
      node_groups: {
        value: cdktf.listMapperHcl(emrv2ClusterNodeGroupsToHclTerraform, true)(this._nodeGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Emrv2ClusterNodeGroupsList",
      },
      subscription_config: {
        value: emrv2ClusterSubscriptionConfigToHclTerraform(this._subscriptionConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Emrv2ClusterSubscriptionConfigList",
      },
      timeouts: {
        value: emrv2ClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "Emrv2ClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
